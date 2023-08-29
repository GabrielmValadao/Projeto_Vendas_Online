import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home/Home.vue";
import Kart from "../views/Kart/Kart.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/Carrinho",
      name: "Carrinho",
      component: Kart,
    },
  ],
});

export default router;
