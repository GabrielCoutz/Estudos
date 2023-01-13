import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://restapi.local/wp-json/api",
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  (erro) => Promise.reject(erro)
);

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

  async delete(endpoint) {
    return axiosInstance.delete(endpoint);
  },

  async put(endpoint, body) {
    return axiosInstance.put(endpoint, body);
  },

  async login(body) {
    return axios.post("https://restapi.local/wp-json/jwt-auth/v1/token", body);
  },

  async validateToken() {
    return axiosInstance.post(
      "https://restapi.local/wp-json/jwt-auth/v1/token/validate"
    );
  },
};

export function getCep(cep) {
  return axios.get(`https://viacep.com.br/ws/${cep}/json`);
}
