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

    const token = this.creatJwtToken({ userId });

    return {
      userId,
      token,
    };
  }

  async checkUserPassword(password, passwordHash) {
    return bcrypt.compare(password, passwordHash);
  }

  creatJwtToken(payload) {
    return jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
  }
}
