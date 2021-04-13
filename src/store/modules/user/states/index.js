/**
 * state
 * 变量命名风格：驼峰命名
 */
import router, { staticRouterMap } from "@/router/index";

console.log(router);
const state = {
  userInfos: {
    userName: "邹海洋",
    userId: "",
    loginName: "邹海洋",
    name: "邹海洋",
    password: ""
  },
  userButtons: [],
  token: "",
  asyncRouterslist: staticRouterMap
};
export default state;
