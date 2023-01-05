export const login = async (_, { data }, { dataSources }) => {
  const { userName, password } = data;
  const response = dataSources.loginApi.login(userName, password);
  return response;
};

export const loginResolver = {
  Mutation: {
    login,
  },
};
