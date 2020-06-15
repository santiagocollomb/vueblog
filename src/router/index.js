import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(`@/views/Home/Index.vue`),
    children: [
      {
        path: "/:slug",
        name: "Post",
        component: () => import(`@/views/Post/Index.vue`)
      }
    ]
  },

  { path: "*", redirect: { name: "Home" } }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
});

export default router;
