import axios from "axios";
import QS from "qs";
import { Loading, Message, MessageBox } from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import globalVariables from "./global_variable";
axios.defaults.withCredentials = true;
let loadingInstance,
  connet = 0;
axios.interceptors.request.use(
  config => {
    loadingInstance = Loading.service({
      lock: true,
      body: false,
      text: "Loading",
      spinner: "el-icon-loading",
      background: "rgba(0, 0, 0, 0.3)"
    });
    connet += 1;
    let url = config.url;
    // get参数编码
    if (config.method === "get" && config.params) {
      url += "?";
      let keys = Object.keys(config.params);
      for (let key of keys) {
        url += `${key}=${encodeURIComponent(config.params[key])}&`;
      }
      url = url.substring(0, url.length - 1);
      config.params = {};
    }
    config.url = url;
    return config;
  },
  function(error) {
    Message({
      type: "error",
      message: "接口提交信息失败"
    });
    connet -= 1;
    if (loadingInstance && connet === 0) {
      loadingInstance.close();
    }
    return Promise.reject(error);
  }
);
axios.interceptors.response.use(
  response => {
    connet -= 1;
    if (loadingInstance && connet === 0) {
      loadingInstance.close();
    }
    const res = response.data ? response.data : response;
    if (res.code && res.code !== "0") {
      if (response.config.headers.jumpInterceptors) {
        return res;
      } else {
        Message({
          showClose: true,
          message: res.msg,
          type: "error"
        });
        return Promise.reject(res);
      }
    } else {
      if (typeof res === "string" && res.search("noscript") != -1) {
        MessageBox.alert("当前会话已过期，请重新登录！", "会话过期提示", {
          confirmButtonText: "确定",
          callback: () => {
            location.href = globalVariables.logout;
          }
        });
      }
      return res;
    }
  },
  error => {
    connet -= 1;
    if (loadingInstance && connet === 0) {
      loadingInstance.close();
    }
    if (error.response.status == "601") {
      MessageBox.alert(error.response.data.msg, "会话过期提示", {
        confirmButtonText: "确定",
        callback: () => {
          location.href = error.response.data.targetUrl;
        }
      });
    } else {
      Message({
        message: error.message,
        type: "error",
        duration: 5000
      });
    }
    // 返回错误信息
    return Promise.reject(error);
  }
);

const httpServer = function(opts, data) {
  let publicParams = {
    // v: "1.0.0"
  };
  let httpDefaultOptions = {
    baseURL: globalVariables.baseURL,
    method: opts.method,
    url: opts.url,
    params: Object.assign(publicParams, data),
    data: QS.stringify(Object.assign(publicParams, data), { indices: false }),
    headers: {
      Authorization: "Bearer " + (sessionStorage.getItem("jwt") || ""),
      jumpInterceptors: opts.isJump ? true : false
    }
  };
  if (opts.isMuti) {
    httpDefaultOptions.data = data;
    httpDefaultOptions.params = data;
  }
  if (opts.method == "get") {
    delete httpDefaultOptions.data;
  } else {
    delete httpDefaultOptions.params;
  }
  let promise = new Promise((resolve, reject) => {
    axios(httpDefaultOptions)
      .then(res => {
        resolve(res);
      })
      .catch(response => {
        reject(response);
      });
  });
  return promise;
};
export default httpServer;
