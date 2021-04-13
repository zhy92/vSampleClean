/**
 * state
 * 变量命名风格：驼峰命名
 */
import router, { staticRouterMap } from "@/router/index";

const state = {
  userInfos: {
    userName: "粮食局",
    userId: "",
    loginName: "粮食局",
    name: "粮食局",
    password: ""
  },
  userButtons: [],
  baseInfos: {},
  token: "",
  asyncRouterslist: staticRouterMap
};
export default state;
