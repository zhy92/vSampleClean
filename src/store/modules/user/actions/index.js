import router, {
  staticRouterMap,
  asyncRouterMap,
  asyncRouterChildren,
  createRouter
} from "@/router/index";
import { initRouter } from "@/router/initRouter";
import api from "@/axios/httpApi";
import axios from "@/axios";
import global from "@/axios/global_variable";

/**
 * actions
 * 方法命名：驼峰命名 commit(前缀)+appName(state中变量名)=>commitAppName
 */
const actions = {
  // 获取用户信息
  commitUserSession({ commit }) {
    return new Promise(relsove => {
      axios({ url: api.getUserSession_user, method: "get" }, {}).then(
        sessionData => {
          commit("setStateUserInfos", sessionData.data);
          relsove();
        }
      );
    });
  },
  // 获取资源控制按钮信息
  commitUserButtons({ commit }) {
    return new Promise(relsove => {
      let userButtons = [
        { buttonId: "menu_1" },
        { buttonId: "menu_2" },
        { buttonId: "menu_3" },
        { buttonId: "menu_4" }
      ];
      commit("setUserButtons", userButtons);
      relsove();
      // 接口获取资源控制按钮
      // axios({ url: api.getUserSession_user, method: "get" }, {}).then(
      //   sessionData => {
      //     commit("setUserButtons", sessionData.data);
      //     relsove();
      //   }
      // );
    });
  },
  // 清空路由表
  commitClearRouter({ commit }) {
    commit("setAsyncRouterslist", []);
  },
  // 组建路由表
  commitMenuTree({ commit }) {
    return new Promise(relsove => {
      axios({ url: api.getMenuTreeByUser_user, method: "get" }, {}).then(
        menuData => {
          let asyncRouter = initRouter(menuData[0].children[0].children);
          let newObj = asyncRouterChildren.concat(asyncRouter);
          let newAsync = asyncRouterMap,
            notFound = {
              path: "*",
              redirect: "/404",
              hidden: true
            };
          newAsync[0].children = newObj;
          newAsync.push(notFound);
          staticRouterMap.push(newAsync[0]);
          staticRouterMap.push(notFound);
          router.matcher = createRouter().matcher;
          router.addRoutes(newAsync);
          commit("setAsyncRouterslist", staticRouterMap);
          relsove(newAsync);
        }
      );
    });
  },
  // 获取用户信息
  commitUserInfos({ commit }, userInfos) {
    return new Promise(relsove => {
      commit("setStateUserInfos", userInfos);
      relsove();
    });
  },
  // 清空用户信息
  commitClearUserInfos({ commit }) {
    return new Promise(relsove => {
      commit("setStateClearUserInfos");
      relsove();
    });
  },
  // 获取token信息
  commitToken({ commit }, data) {
    return new Promise(relsove => {
      commit("setStateToken", data);
      relsove();
    });
  },
  // 清除token信息
  commitClearToken({ commit }) {
    return new Promise(relsove => {
      commit("setStateClearToken");
      relsove();
    });
  }
};
export default actions;
