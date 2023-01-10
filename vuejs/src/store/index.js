import { api } from "@/services";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    login: false,
    user: {
      id: "",
      nome: "",
      email: "",
      senha: "",
      cep: "",
      rua: "",
      numero: "",
      cidade: "",
      estado: "",
    },
  },
  mutations: {
    UPDATE_LOGIN(state, payload) {
      state.login = payload;
    },
    UPDATE_USUARIO(state, payload) {
      state.user = Object.assign(state.user, payload);
    },
  },
  actions: {
    async getUsuario(context, payload) {
      const { data } = await api.get(`/usuario/${payload}`);
      context.commit("UPDATE_USUARIO", data);
      context.commit("UPDATE_LOGIN", true);
    },
  },
});
