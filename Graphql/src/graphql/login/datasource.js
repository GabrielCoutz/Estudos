import { RESTDataSource } from "apollo-datasource-rest";
import { AuthenticationError } from "apollo-server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export class LoginApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.API_URL + "/users/";
  }

  async login(userName, password) {
    const user = await this.get("", { userName }, { cacheOptions: { ttl: 0 } });
    const userExist = !!user.length;

    if (!userExist) throw new AuthenticationError("User does not exist.");

    const { passwordHash, id: userId } = user[0];
    const passwordValid = await this.checkUserPassword(password, passwordHash);

    if (!passwordValid) throw new AuthenticationError("Invalid password.");

    const token = this.createJwtToken({ userId });
    await this.patch(userId, { token }, { cacheOptions: { ttl: 0 } });

    return {
      userId,
      token,
    };
  }

  async logout(userName) {
    const user = await this.get("", { userName }, { cacheOptions: { ttl: 0 } });
    const userExist = !!user.length;

    if (!userExist) throw new AuthenticationError("User does not exist.");

    if (user[0].id !== this.context.loggedUserId)
      throw new AuthenticationError("You are not this user");

    await this.patch(user[0].id, { token: "" }, { cacheOptions: { ttl: 0 } });
    return true;
  }

  async checkUserPassword(password, passwordHash) {
    return bcrypt.compare(password, passwordHash);
  }

  createJwtToken(payload) {
    return jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
  }
}
