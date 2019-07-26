import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./style/public.css";
import "./plugins/axios";
import "./plugins/element.js";

Vue.config.productionTip = false;

// 使用路由钩子函数 对路由进行权限跳转
router.beforeEach((to, from, next) => {
  // 获取用户权限
  const role = localStorage.getItem("user_role");
  if (!role && to.path !== "/login") {
    next("/login");
  } else if (to.meta.permission) {
    // 管理员权限 才可进入权限页面
    role === "admin" ? next() : next("/403");
  } else {
    if (navigator.userAgent.indexOf("MSIE") > -1 && to.path === "/editor") {
      Vue.prototype.$alert("浏览器不支持富文本工具,请更换浏览器!");
    } else {
      next();
    }
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
