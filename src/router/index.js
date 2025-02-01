import { createRouter, createWebHistory } from "vue-router";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../warga/InputBlokWarga.vue"),
    },
    {
        path: "/main",
        name: "main",
        component: () => import("../views/MainLayoutView.vue"),
    },
    {
      path: "/menu",
      name: "menu",
      component: () => import("../views/MainPageLayout.vue"),  
    },
    {
      path: "/form",
      name: "form",
      component: () => import("../views/MainFormSample.vue"),
    }
  ],
});

export default router;
