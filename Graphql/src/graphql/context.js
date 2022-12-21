const baseUrl = "http://localhost:3000";

const getUser = (path = "") => fetch(`${baseUrl}/users/${path}`);
const getUsers = (params = "") => fetch(`${baseUrl}/users${params}`);

const getPost = (path = "") => fetch(`${baseUrl}/posts/${path}`);
const getPosts = (params = "") => fetch(`${baseUrl}/posts${params}`);

const context = () => {
  return {
    getUser,
    getUsers,
    getPost,
    getPosts,
  };
};

export default context;
