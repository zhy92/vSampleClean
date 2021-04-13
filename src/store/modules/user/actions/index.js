import router, { asyncRouterMap, createRouter } from "@/router/index";
import { initRouter } from "@/router/initRouter";
import api from "@/axios/httpApi";
import axios from "@/axios";
import globalFncs from "@/utils/globalFunctions";

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
    });
  },
  // 获取通用基础信息
  commitBaseInfos({ commit }) {
    return new Promise(relsove => {
      let baseInfosObj = {};
      getBaseInfos();

      async function getBaseInfos() {
        // 获取肥料类别
        await axios(
          { url: api.dictList_common, method: "get" },
          { _refKey: "dict", busintypeid: "fpmp_bas_fertilizer_type" }
        ).then(xhr => {
          baseInfosObj.fertilizerTypelist = globalFncs.arrayToFormDropdown(
            xhr,
            "text",
            "value"
          );
        });
        // 获取可用的计量单位列表
        await axios(
          { url: api.getUnitListAvail_unitSetManage, method: "get" },
          {}
        ).then(xhr => {
          let unitlist = xhr.data.filter(item => {
            return item.disabled === "N";
          });
          baseInfosObj.unitlist = globalFncs.arrayToFormDropdown(
            unitlist,
            "name",
            "fpmpBasUnitId"
          );
        });
        // 获取种子类型
        await axios(
          { url: api.dictList_common, method: "get" },
          { _refKey: "dict", busintypeid: "fpmp_bas_grainseed_seed_type" }
        ).then(xhr => {
          baseInfosObj.seedTypelist = globalFncs.arrayToFormDropdown(
            xhr,
            "text",
            "value"
          );
        });
        // 获取种子类型
        await axios(
          { url: api.dictList_common, method: "get" },
          { _refKey: "dict", busintypeid: "fpmp_bas_seed_level" }
        ).then(xhr => {
          baseInfosObj.seedLevellist = globalFncs.arrayToFormDropdown(
            xhr,
            "text",
            "value"
          );
        });
        // 获取作物品种
        await axios(
          { url: api.dictList_common, method: "get" },
          { _refKey: "dict", busintypeid: "fpmp_bas_grainseed_seed_variety" }
        ).then(xhr => {
          baseInfosObj.corpTypelist = globalFncs.arrayToFormDropdown(
            xhr,
            "text",
            "value"
          );
        });
        // 获取基地类别
        await axios(
          { url: api.dictList_common, method: "get" },
          { _refKey: "dict", busintypeid: "fpmp_bas_base_type" }
        ).then(xhr => {
          baseInfosObj.siteTypelist = globalFncs.arrayToFormDropdown(
            xhr,
            "text",
            "value"
          );
        });
        // 获取申请制单（加盟）状态
        await axios(
          { url: api.dictList_common, method: "get" },
          { _refKey: "dict", busintypeid: "fpmp_join_apply_status" }
        ).then(xhr => {
          baseInfosObj.applyStatuslist = globalFncs.arrayToFormDropdown(
            xhr,
            "text",
            "value"
          );
        });
        // 获取性别列表
        await axios(
          { url: api.dictList_common, method: "get" },
          { _refKey: "dict", busintypeid: "BNDICT_gender" }
        ).then(xhr => {
          baseInfosObj.genderSexlist = globalFncs.arrayToFormDropdown(
            xhr,
            "text",
            "value"
          );
        });
        // 获取学历列表
        await axios(
          { url: api.dictList_common, method: "get" },
          { _refKey: "dict", busintypeid: "BNDICT_education" }
        ).then(xhr => {
          baseInfosObj.educationlist = globalFncs.arrayToFormDropdown(
            xhr,
            "text",
            "value"
          );
        });
        // 获取人员列表
        await (function() {
          baseInfosObj.personList = [
            { label: "人员1", value: "1" },
            { label: "人员2", value: "2" },
            { label: "人员3", value: "3" }
          ];
        })();
        // await axios(
        //   { url: api.dictList_common, method: "get" },
        //   { _refKey: "dict", busintypeid: "BNDICT_education" }
        // ).then(xhr => {
        //   baseInfosObj.educationlist = globalFncs.arrayToFormDropdown(
        //     xhr,
        //     "text",
        //     "value"
        //   );
        // });
        await commit("setBaseInfos", baseInfosObj);
        await relsove();
      }
    });
  },
  // 清空路由表
  commitClearRouter({ commit }) {
    commit("setAsyncRouterslist", []);
  },
  // 组建路由表
  commitMenuTree({ commit }) {
    return new Promise(relsove => {
      axios(
        { url: api.getMenuTreeByUser_user, method: "get" },
        { sysType: "oh-emms" }
      ).then(menuData => {
        // if (!menuData || !menuData.length) {
        //   reject();
        //   return false;
        // }
        let asyncRouter =
            !menuData || !menuData.length
              ? []
              : initRouter(menuData[0].children[0].children),
          notFound = {
            path: "*",
            redirect: "/404",
            hidden: true
          };
        if (asyncRouter.length > 0) {
          asyncRouterMap.forEach(item => {
            if (item.name === "modules") {
              asyncRouter.forEach(childrenItem => {
                item.children.push(childrenItem);
              });
            }
          });
        }
        asyncRouterMap.push(notFound);

        router.matcher = createRouter().matcher;
        router.addRoutes(asyncRouterMap);
        commit("setAsyncRouterslist", asyncRouter);
        relsove(asyncRouterMap);
      });
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
