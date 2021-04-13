import router from "./router";
import store from "./store";
import NProgress from "nprogress"; // Progress 进度条
import "nprogress/nprogress.css"; // Progress 进度条样式
router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
  // if (to.name !== "login") {
  //   if (store.getters["user/userInfos"].userId) {
  //     next();
  //   } else {
  //     gotoRouter(to, from, next);
  //   }
  // } else {
  //   next();
  // }
});

router.afterEach(() => {
  NProgress.done();
});

function gotoRouter(to, from, next) {
  if (from.name !== "login" && to.name !== "login") {
    store.dispatch("user/commitUserSession").then(() => {
      store.dispatch("user/commitUserButtons");
      store.dispatch("user/commitMenuTree");
    });
  }
  next();
}
