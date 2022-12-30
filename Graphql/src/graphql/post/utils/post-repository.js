import { ValidationError } from "apollo-server";

export const createPostFn = async (postData, dataSource) => {
  const postInfo = await createPostInfo(postData, dataSource);
  const { title, body, userId } = postInfo;

  if (!title || !body || !userId)
    throw new ValidationError("You have to send title, body and userId.");

  return await dataSource.post("", { ...postInfo });
};

export const updatePostFn = async (postId, postData, dataSource) => {
  if (!postId) throw new ValidationError("Misson postId");

  if (postData?.userId) await userExists(postData.userId, dataSource);

  return dataSource.patch(postId, { ...postData });
};

const userExists = async (userId, dataSource) => {
  try {
    await dataSource.context.dataSources.userApi.get(userId);
  } catch (error) {
    throw new ValidationError("User does not exist.");
  }
};

export const createPostInfo = async (postData, dataSource) => {
  const { title, body, userId } = postData;

  await userExists(userId, dataSource);

  const indexRefPost = await dataSource.get("", {
    _limit: 1,
    _sort: "indexRef",
    _order: "desc",
  });
  const indexRef = +indexRefPost[0].indexRef + 1;

  return {
    title,
    body,
    userId,
    indexRef,
    createdAt: new Date().toISOString(),
  };
};

export const deletePostFn = async (postId, dataSource) => {
  if (!postId) throw new ValidationError("Missing postId");
  const deleted = await dataSource.delete(postId);
  return !!deleted;
};
