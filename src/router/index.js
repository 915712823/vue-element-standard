import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  //  第一个 path:'/'  应该给重定向  重定向到首页
  {
    path: "/",
    redirect: '/Home'
  },
  {
    path: "/Login", //登录
    name: "Login",
    component: () =>
      import( /* webpackChunkName: "about" */ "../views/Login.vue"),
  },
  {
    path: "/Home",
    name: "Home",
    component: () =>
      import( /* webpackChunkName: "home" */ "../views/Home.vue"),
  }
];

const router = new VueRouter({
  routes,
});

export default router;