import Vue from "vue";
import VueRouter from "vue-router";
import TheHome from "@/views/TheHome.vue";
import Produto from "@/views/Produto.vue";
import Login from "@/views/Login.vue";
import Usuario from "@/views/Usuario/Usuario.vue";
import UsuarioProdutos from "@/views/Usuario/UsuarioProdutos.vue";
import UsuarioVendas from "@/views/Usuario/UsuarioVendas.vue";
import UsuarioCompras from "@/views/Usuario/UsuarioCompras.vue";
import UsuarioEditar from "@/views/Usuario/UsuarioEditar.vue";

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
      component: Usuario,
      meta: {
        login: true,
      },
      children: [
        {
          path: "",
          name: "Usuario",
          component: UsuarioProdutos,
        },
        {
          path: "vendas",
          name: "Vendas",
          component: UsuarioVendas,
        },
        {
          path: "compras",
          name: "Compras",
          component: UsuarioCompras,
        },
        {
          path: "editar",
          name: "Editar",
          component: UsuarioEditar,
        },
      ],
    },
  ],
  scrollBehavior() {
    return window.scrollTo({ top: 0, behavior: "smooth" });
  },
});

router.beforeEach(({ matched }, _, next) => {
  const userIsLogged = matched.some(({ meta }) => meta.login);
  const tokenExists = localStorage.getItem("token");

  if (!tokenExists || !userIsLogged) next("/login");
  else next();
});

export default router;
