export const user = async (_, { id }, { getUser }) =>
  await (await getUser(id)).json();

export const users = async (_, { input }, { getUsers }) => {
  const filters = new URLSearchParams(input).toString();
  const data = await (await getUsers(`?${filters}`)).json();
  return data;
};
