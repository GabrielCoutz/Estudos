import { AuthenticationError } from "apollo-server";
import { checkUserIsLogged } from "../post/resolver";

export const user = async (_, { id }, { dataSources }) =>
  await dataSources.userApi.getUser(id);

export const users = async (_, { input }, { dataSources }) =>
  await dataSources.userApi.getUsers(input);

export const createUser = async (_, { data }, { dataSources }) =>
  await dataSources.userApi.createUser(data);

export const updateUser = async (
  _,
  { id, data },
  { dataSources, loggedUserId }
) => {
  checkUserIsLogged(id);
  checkOwner(id, loggedUserId);

  return dataSources.userApi.updateUser(id, data);
};

export const deleteUser = async (_, { id }, { dataSources, loggedUserId }) => {
  checkUserIsLogged(id);
  checkOwner(id, loggedUserId);

  return dataSources.userApi.deleteUser(id);
};

function checkOwner(userId, loggedUserId) {
  if (loggedUserId !== userId)
    throw new AuthenticationError("You cannot update other user");
}
