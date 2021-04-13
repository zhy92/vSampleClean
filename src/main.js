import Vue from "vue";

import "normalize.css/normalize.css";
// import "./styles/element-#409EFF/index.css";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "./assets/iconfont/iconfont.css";

import App from "./App.vue";
import router from "./router";
import store from "./store";
import api from "./axios/httpApi";
import globalVariable from "./axios/global_variable";
import qs from "qs";
// import "./registerServiceWorker";
import "./styles/global.less";
import "./permission";
import globalFunctions from "./utils/globalFunctions";
import globalMethods from "./utils/projectCommonMethods";
import * as filters from "./utils/filters";
import moment from "moment";
Vue.config.productionTip = false;
Vue.prototype.$api = api;
Vue.prototype.$global = globalVariable;
Vue.prototype.$globalFnc = globalFunctions;
Vue.prototype.$qs = qs;
Vue.prototype.$moment = moment;
// 组件
import vueComponent from "@/components";
import "@/components/treeSelect/kt-select-tree";

Vue.use(ElementUI);
Vue.use(vueComponent);

Vue.use(globalMethods);
Object.keys(filters).forEach(key => Vue.filter(key, filters[key]));
document.title = "应急物资管理系统";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
