export const post = async (_, { id }, { getPost }) =>
  await (await getPost(id)).json();

export const posts = async (_, { input }, { getPosts }) => {
  const filters = new URLSearchParams(input).toString();
  const data = await (await getPosts(`?${filters}`)).json();
  return data;
};
