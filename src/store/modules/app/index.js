import states from "./states";
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

const app = {
  namespaced: true,
  state: states,
  getters: getters,
  mutations: mutations,
  actions: actions
};
export default app;
