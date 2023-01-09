import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
});

export const api = {
  async get(endpoint) {
    const { data } = await axiosInstance.get(endpoint);
    return data;
  },

  async post(endpoint, body) {
    const { data } = await axiosInstance.post(endpoint, body);
    return data;
  },
};
