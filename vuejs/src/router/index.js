import Vue from "vue";
import VueRouter from "vue-router";
import TheHome from "@/views/TheHome.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "TheHome",
      component: TheHome,
    },
  ],
});

export default router;
