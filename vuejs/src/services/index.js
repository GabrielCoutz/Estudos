import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
});

export const api = {
  async get(endpoint) {
    const { data, headers } = await axiosInstance.get(endpoint);
    const totalItens = +headers["x-total-count"];
    return { data, totalItens };
  },

  async post(endpoint, body) {
    const { data } = await axiosInstance.post(endpoint, body);
    return data;
  },
};
