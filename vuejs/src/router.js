import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Cursos from "./views/Cursos.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: "app",
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/cursos/:curso",
      component: Cursos,
      name: "cursos",
      props: true,
    },
  ],
});
