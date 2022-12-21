const baseUrl = "http://localhost:3000";

const context = () => {
  return {
    getUser: (path = "") => fetch(`${baseUrl}/${path}`),
    getUsers: () => fetch(`${baseUrl}/users`),
  };
};

export default context;
