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
    usuarioProdutos: [],
  },
  mutations: {
    UPDATE_LOGIN(state, payload) {
      state.login = payload;
    },
    UPDATE_USUARIO(state, payload) {
      state.user = Object.assign(state.user, payload);
    },
    UPDATE_USUARIO_PRODUTOS(state, payload) {
      state.usuarioProdutos = payload;
    },
    ADD_USUARIO_PRODUTOS(state, payload) {
      state.usuarioProdutos.unshift(payload);
    },
  },
  actions: {
    async getUsuarioProdutos(context) {
      const { data } = await api.get(
        `/produto?usuario_id=${context.state.user.id}`
      );
      context.commit("UPDATE_USUARIO_PRODUTOS", data);
    },

    async getUsuario(context, payload) {
      const { data } = await api.get(`/usuario/${payload}`);
      context.commit("UPDATE_USUARIO", data);
      context.commit("UPDATE_LOGIN", true);
      return data;
    },

    async criarUsuario(context, payload) {
      context.commit("UPDATE_USUARIO", { id: payload.email });
      return await api.post("/usuario", payload);
    },

    deslogarUsuario(context) {
      context.commit("UPDATE_USUARIO", {
        id: "",
        nome: "",
        email: "",
        senha: "",
        cep: "",
        rua: "",
        numero: "",
        cidade: "",
        estado: "",
      });
      context.commit("UPDATE_LOGIN", false);
    },
  },
});
