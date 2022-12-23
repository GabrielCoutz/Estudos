import { userDataLoaderFactory } from "./user/dataloaders";
import { getUser, getUsers } from "./user/utils";
import { getPost, getPosts } from "./post/utils";

const context = () => {
  return {
    getUser,
    getUsers,
    getPost,
    getPosts,
    userDataLoader: userDataLoaderFactory(getUsers),
  };
};

export default context;
