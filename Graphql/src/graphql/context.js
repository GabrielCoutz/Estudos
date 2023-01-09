import jwt from "jsonwebtoken";
import { UsersApi } from "./user/datasource";

const authorizeUser = async (req) => {
  if (!req || !req.headers || !req.headers.authorization) return "";
  const { headers } = req;
  const { authorization } = headers;

  try {
    const [_, token] = authorization.split(" ");
    return await verifyJwtToken(token);
  } catch (error) {
    console.log(error);
    return "";
  }
};

const verifyJwtToken = async (jwtToken) => {
  try {
    const { userId } = jwt.verify(jwtToken, process.env.JWT_SECRET);

    const userApi = new UsersApi();
    userApi.initialize({});
    const foundUser = await userApi.getUser(userId);

    if (foundUser.token !== jwtToken) return "";
    return userId;
  } catch (error) {
    console.log(error);
    return "";
  }
};

const cookieParser = (cookiesHeader) => {
  if (typeof cookiesHeader !== "string") return {};
  const cookies = cookiesHeader.split(/;\s*/);
  const parsedCookie = {};
  for (let i = 0; i < cookies.length; i++) {
    const [key, value] = cookies[i].split("=");
    parsedCookie[key] = value;
  }
  return JSON.parse(JSON.stringify(parsedCookie));
};

const context = async ({ req, res }) => {
  let loggedUserId = await authorizeUser(req);

  if (!loggedUserId && req.headers.cookie) {
    const { jwtToken } = cookieParser(req.headers.cookie);
    loggedUserId = await verifyJwtToken(jwtToken);
  }

  return { loggedUserId, res };
};

export default context;
