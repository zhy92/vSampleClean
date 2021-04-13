/**
 * getters
 * 变量命名风格：驼峰命名,直接引用state中的变量名称即可
 */
const getters = {
  userInfos: state => {
    return state.userInfos;
  },
  userButtons: state => {
    return state.userButtons;
  },
  baseInfos: state => {
    return state.baseInfos;
  },
  token: state => {
    return state.token;
  },
  asyncRouterslist: state => {
    return state.asyncRouterslist;
  }
};
export default getters;
