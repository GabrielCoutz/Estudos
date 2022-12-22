export const post = async (_, { id }, { getPost }) => {
  const data = await (await getPost(id)).json();

  if (Math.random() > 0.5)
    return {
      statusCode: 500,
      message: "Post timeout!",
      timeout: Math.random(),
    };

  if (typeof data.id === "undefined")
    return { statusCode: 400, message: "Post not found", postId: id };

  return data;
};

export const posts = async (_, { input }, { getPosts }) => {
  const filters = new URLSearchParams(input).toString();
  const data = await (await getPosts(`?${filters}`)).json();
  return data;
};
