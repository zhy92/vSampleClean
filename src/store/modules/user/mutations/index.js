/**
 * mutations
 * 方法命名：驼峰命名 setState(前缀)+appName(state中变量名)=>commitAppName
 */
const mutations = {
  setStateUserInfos: (state, userInfos) => {
    state.userInfos = { ...userInfos };
  },
  setUserButtons: (state, userButtons) => {
    state.userButtons = userButtons;
  },
  setBaseInfos: (state, baseInfos) => {
    state.baseInfos = baseInfos;
  },
  setStateClearUserInfos: state => {
    let userInfos = {
      userName: "",
      userId: "",
      loginName: "",
      password: ""
    };
    state.userInfos = { ...userInfos };
  },
  setStateToken: (state, data) => {
    state.token = data.jwt;
  },
  setStateClearToken: state => {
    state.token = "";
  },
  setAsyncRouterslist: (state, asyncRouter) => {
    state.asyncRouterslist = asyncRouter;
  }
};
export default mutations;
