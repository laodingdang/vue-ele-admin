import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "./dashboard"
    },
    {
      path: "/",
      component: resolve => require(["./views/layout/Layout.vue"], resolve),
      meta: { title: "自述文件" },
      children: [
        {
          path: "/dashboard",
          component: resolve =>
            require(["./views/page/BaseDashBoard.vue"], resolve),
          meta: { title: "系统首页" }
        }
      ]
    },
    {
      path: "/login",
      component: resolve => require(["./views/login/Login.vue"], resolve)
    },
    {
      path: "*",
      redirect: "/404"
    }
  ]
});
