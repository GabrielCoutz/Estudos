export const post = async (_, { id }, { dataSources }) =>
  dataSources.postApi.getPost(id);

export const posts = async (_, { input }, { dataSources }) =>
  dataSources.postApi.getPosts(input);

// Mutation resolver

export const createPost = async (_, { data }, { dataSources }) => {
  return dataSources.postApi.createPost(data);
};
