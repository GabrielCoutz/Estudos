export const getUser = (path = "") =>
  fetch(`${process.env.API_URL}/users/${path}`);

export const getUsers = (params = "") =>
  fetch(`${process.env.API_URL}/users${params}`);
