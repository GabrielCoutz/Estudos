import { AuthenticationError } from "apollo-server";

export const post = async (_, { id }, { dataSources }) =>
  dataSources.postApi.getPost(id);

export const posts = async (_, { input }, { dataSources }) =>
  dataSources.postApi.getPosts(input);

// Mutation resolver

export const createPost = async (
  _,
  { data },
  { dataSources, loggedUserId }
) => {
  checkUserIsLogged(loggedUserId);
  return dataSources.postApi.createPost(data, loggedUserId);
};

export const updatePost = async (
  _,
  { data, postId },
  { dataSources, loggedUserId }
) => {
  checkUserIsLogged(loggedUserId);
  return dataSources.postApi.updatePost(postId, data, loggedUserId);
};

export const deletePost = async (
  _,
  { postId },
  { dataSources, loggedUserId }
) => {
  checkUserIsLogged(loggedUserId);
  return dataSources.postApi.deletePost(postId, loggedUserId);
};

export function checkUserIsLogged(userId) {
  if (!userId) throw new AuthenticationError("You have to log in.");
}
