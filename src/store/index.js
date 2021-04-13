import Vue from "vue";
import Vuex from "vuex";
import app from "./modules/app/index";
import user from "./modules/user/index";
// import persistedState from "vuex-persistedstate";//vuex持久化插件
import createLogger from "vuex/dist/logger";
// const vuexPersisted = new persistedState({
//   key: "myVuex",
//   storage: window.localStorage
//   // reducer: state => ({
//   //   app: state.app,
//   //   user: state.user
//   // })
// });
Vue.use(Vuex);
const store = new Vuex.Store({
  modules: {
    app,
    user
  },
  plugins: [createLogger()]
  // plugins: [createLogger(), vuexPersisted]
  // plugins: [vuexPersisted]
});

export default store;
