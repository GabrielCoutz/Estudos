export const user = async (_, { id }, { dataSources }) =>
  dataSources.userApi.getUser(id);

export const users = async (_, { input }, { dataSources }) =>
  dataSources.userApi.getUsers(input);
