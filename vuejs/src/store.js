import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    aulasCompletas: [],
  },
  mutations: {
    completarAula(state, payload) {
      if (!state.aulasCompletas.includes(payload))
        state.aulasCompletas.push(payload);
    },
  },
});
