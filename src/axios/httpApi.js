import userApi from "./apiModules/user";
import common from "./apiModules/common";
import baseSettingApi from "./apiModules/baseSetting";
import siteSettingApi from "./apiModules/siteSetting";
import planSettingApi from "./apiModules/planSetting";
/**
 * 接口列表
 *  */
const apiInterface = {
  // 登录验证
  ...userApi,
  // 通用接口
  ...common,
  // 基础数据
  ...baseSettingApi,
  // 基地管理
  ...siteSettingApi,
  // 计划管理
  ...planSettingApi
};

export default apiInterface;
