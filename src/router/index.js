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
    },
    {
      path: "/profile",
      name: "profile",
      component: () => import("../views/MainProfilePageView.vue"),
      children: [
        {
          path: "input",
          name: "input",
          component: () => import("../profile/IsiProfileEntity.vue"),
        },
        {
          path: "input/polygon",
          name: "input_polygon",
          component: () => import("../profile/IsiDataPolygon.vue"),
        },
        {
          path: "register/user",
          name: "register_user",
          component: () => import("../profile/RegisterUser.vue"),
        },
      ],
    },
    {
      path: "/warga",
      name: "warga",
      component: () => import("../views/MainWargaPageView.vue"),
      children: [
        {
          path: "input/blok",
          name: "input_blok",
          component: () => import("../warga/InputBlokWarga.vue"),
        },
      ],
    },
  ],
});

export default router;
