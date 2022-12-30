import DataLoader from "dataloader";

export const userDataLoaderFactory = (getUsers) => {
  return new DataLoader(async (ids) => {
    const urlQuery = ids.join("&id=");
    const users = await getUsers(`?id=${urlQuery}`);
    return ids.map((id) => users.find((user) => user.id === id));
  });
};
