import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Curso from "./views/Curso.vue";
import Aula from "./views/Aula.vue";
import Aluno from "./views/Aluno.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    { path: "/", name: "home", component: Home },
    { path: "/aluno", name: "aluno", component: Aluno },
    {
      path: "/curso",
      name: "curso",
      component: Curso,
      children: [
        {
          path: ":aula",
          name: "aula",
          component: Aula,
        },
      ],
    },
  ],
});
