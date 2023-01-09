import { ValidationError, AuthenticationError } from "apollo-server";

export const createPostFn = async (postData, loggedUserId, dataSource) => {
  const postInfo = await createPostInfo(postData, loggedUserId, dataSource);
  const { title, body } = postInfo;

  if (!title || !body)
    throw new ValidationError("You have to send title and body.");

  return await dataSource.post("", { ...postInfo });
};

export const updatePostFn = async (
  postId,
  postData,
  dataSource,
  loggedUserId
) => {
  await userExists(loggedUserId, dataSource);

  const { userId } = await dataSource.get(postId, undefined, {
    cacheOptions: {
      ttl: 0,
    },
  });
  if (userId !== loggedUserId)
    throw new AuthenticationError("You cannot update posts from others users.");

  return await dataSource.patch(postId, { ...postData });
};

const userExists = async (userId, dataSource) => {
  try {
    await dataSource.context.dataSources.userApi.get(userId);
  } catch (error) {
    throw new ValidationError("User does not exist.");
  }
};

export const createPostInfo = async (postData, loggedUserId, dataSource) => {
  await userExists(loggedUserId, dataSource);

  const { title, body } = postData;

  const indexRefPost = await dataSource.get("", {
    _limit: 1,
    _sort: "indexRef",
    _order: "desc",
  });
  const indexRef = +indexRefPost[0].indexRef + 1;

  return {
    title,
    body,
    userId: loggedUserId,
    indexRef,
    createdAt: new Date().toISOString(),
  };
};

export const deletePostFn = async (postId, dataSource, loggedUserId) => {
  if (!postId) throw new ValidationError("Missing postId");
  await userExists(loggedUserId, dataSource);

  const { userId } = await dataSource.get(postId, undefined, {
    cacheOptions: {
      ttl: 0,
    },
  });
  if (userId !== loggedUserId)
    throw new AuthenticationError("You cannot delete posts from others users.");

  const deleted = await dataSource.delete(postId);
  return !!deleted;
};
