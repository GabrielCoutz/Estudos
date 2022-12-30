export const post = async (_, { id }, { dataSources }) =>
  dataSources.postApi.getPost(id);

export const posts = async (_, { input }, { dataSources }) =>
  dataSources.postApi.getPosts(input);

// Mutation resolver

export const createPost = async (_, { data }, { dataSources }) =>
  dataSources.postApi.createPost(data);

export const updatePost = async (_, { data, postId }, { dataSources }) =>
  dataSources.postApi.updatePost(postId, data);

export const deletePost = async (_, { postId }, { dataSources }) =>
  dataSources.postApi.deletePost(postId);
