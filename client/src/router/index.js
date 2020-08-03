import Vue from "vue";
import VueRouter from "vue-router";
import { Trans } from "@/plugins/translation";

Vue.use(VueRouter);

const load = component => {
  return () => import(`@/views/${component}.vue`);
};

const routes = [
  {
    path: "/:locale",
    component: {
      template: "<router-view></router-view>"
    },
    beforeEnter: Trans.routeMiddleware,
    children: [
      {
        path: "",
        name: "Home",
        component: load("Home")
      },
      {
        path: "works",
        name: "Works",
        component: load("Works")
      },
      {
        path: "skills",
        name: "Skills",
        component: load("Skills")
      }
    ]
  },
  {
    path: "*",
    redirect() {
      return Trans.userDefaultLocal;
    }
  }
];

const router = new VueRouter({
  routes
});

export default router;
