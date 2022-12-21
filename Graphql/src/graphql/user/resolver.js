export const user = async (_, { id }, { getUser }) => {
  const data = await (await getUser(id)).json();
  return data;
};

export const users = async (_, __, { getUsers }) => {
  const data = await (await getUsers()).json();
  return data;
};
