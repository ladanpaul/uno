import * as VueRouter from "vue-router";

const routes: VueRouter.RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("./App.vue").then((m) => m.default),
  },
  {
    path: "",
    name: "MainLanding",
    component: () => import("./views/UnoMain.vue").then((m) => m.default),
  },
  {
    path: "/game",
    name: "Start",
    component: () => import("./views/GameStart.vue").then((m) => m.default),
  },
  {
    path: "/game/play",
    name: "Play",
    component: () => import("./views/Play.vue").then((m) => m.default),
  },
];

export const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});
