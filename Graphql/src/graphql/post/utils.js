export const getPost = (path = "") =>
  fetch(`${process.env.API_URL}/posts/${path}`);

export const getPosts = (params = "") =>
  fetch(`${process.env.API_URL}/posts${params}`);
