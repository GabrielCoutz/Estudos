import { userDataLoaderFactory } from "./user/dataloaders";
import { getUser, getUsers } from "./user/utils";
import { getPost, getPosts } from "./post/utils";
import { postDataLoaderFactory } from "./post/dataloaders";

const context = () => {
  return {
    getUser,
    getUsers,
    getPost,
    getPosts,
    userDataLoader: userDataLoaderFactory(getUsers),
    postDataLoader: postDataLoaderFactory(getPosts),
  };
};

export default context;
