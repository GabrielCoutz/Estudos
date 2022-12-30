import DataLoader from "dataloader";

export const postDataLoaderFactory = (getPosts) => {
  return new DataLoader(async (ids) => {
    const urlQuery = ids.join("&userId=");
    const response = await getPosts(`?userId=${urlQuery}`);
    const posts = await response.json();
    return ids.map((id) => {
      return posts.filter((post) => post.userId === id);
    });
  });
};
