export const user = async (_, { id }, { dataSources }) =>
  dataSources.userApi.getUser(id);

export const users = async (_, { input }, { dataSources }) =>
  dataSources.userApi.getUsers(input);

export const createUser = async (_, { data }, { dataSources }) =>
  dataSources.userApi.createUser(data);

export const updateUser = async (_, { id, data }, { dataSources }) =>
  dataSources.userApi.updateUser(id, data);

export const deleteUser = async (_, { id }, { dataSources }) =>
  dataSources.userApi.deleteUser(id);
