import jwt from "jsonwebtoken";
import { UsersApi } from "./user/datasource";

const authorizeUser = async ({ headers }) => {
  const { authorization } = headers;

  try {
    const [_, token] = authorization.split(" ");
    const { userId } = jwt.verify(token, process.env.JWT_SECRET);
    const userApi = new UsersApi();
    userApi.initialize({});

    const { token: storedToken } = await userApi.getUser(userId);

    if (storedToken !== token) return false;
    return userId;
  } catch (error) {
    console.log(error);
    return false;
  }
};

const context = async ({ req }) => {
  const loggedUserId = await authorizeUser(req);

  if (!loggedUserId) throw new Error("User not logged in");

  return { loggedUserId };
};

export default context;
