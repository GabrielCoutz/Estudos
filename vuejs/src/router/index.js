import Vue from "vue";
import VueRouter from "vue-router";
import TheHome from "@/views/TheHome.vue";
import Produto from "@/views/Produto.vue";
import Login from "@/views/Login.vue";
import Usuario from "@/views/Usuario/Usuario.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "TheHome",
      component: TheHome,
    },
    {
      path: "/produto/:id",
      name: "Produto",
      component: Produto,
      props: true,
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
    {
      path: "/usuario",
      name: "Usuario",
      component: Usuario,
    },
  ],
  scrollBehavior() {
    return window.scrollTo({ top: 0, behavior: "smooth" });
  },
});

export default router;
