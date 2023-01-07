import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Cursos from "./views/Cursos.vue";
import Curso from "./views/Curso.vue";
import Contato from "./views/Contato.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: "app",
  routes: [
    {
      path: "/",
      component: Home,
      name: "home",
    },
    {
      path: "/cursos",
      component: Cursos,
      name: "cursos",
      children: [
        {
          path: ":curso",
          name: "curso",
          component: Curso,
          props: true,
        },
      ],
    },
    {
      path: "/contato",
      component: Contato,
      name: "contato",
    },
  ],
});
