import DataLoader from "dataloader";

export const postDataLoaderFactory = (getPosts) => {
  return new DataLoader(async (ids) => {
    const urlQuery = ids.join("&userId=");
    const posts = await getPosts(`?userId=${urlQuery}`);
    return ids.map((id) => posts.filter((post) => post.userId === id));
  });
};
