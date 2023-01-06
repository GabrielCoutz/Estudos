import jwt from "jsonwebtoken";
import { UsersApi } from "./user/datasource";

const authorizeUser = async (req) => {
  if (!req || !req.headers || !req.headers.authorization) return "";
  const { headers } = req;
  const { authorization } = headers;

  try {
    const [_, token] = authorization.split(" ");
    const { userId } = jwt.verify(token, process.env.JWT_SECRET);
    const userApi = new UsersApi();
    userApi.initialize({});

    const foundUser = await userApi.getUser(userId);

    if (foundUser.token !== token) return "";
    return userId;
  } catch (error) {
    console.log(error);
    return "";
  }
};

const context = async ({ req }) => {
  const loggedUserId = await authorizeUser(req);

  return { loggedUserId };
};

export default context;
