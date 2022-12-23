export const post = async (_, { id }, { getPost }) => {
  const data = await (await getPost(id)).json();
  return data;
};

export const posts = async (_, { input }, { getPosts }) => {
  const filters = new URLSearchParams(input).toString();
  const data = await (await getPosts(`?${filters}`)).json();
  return data;
};
