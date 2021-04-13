import baseApi from "./apiModules/base";
import userApi from "./apiModules/user";
import infosManageApi from "./apiModules/infosManage";
import assessmentApi from "./apiModules/assessment";

/**
 * 接口列表
 *  */
const apiInterface = {
  /**
   * 基础数据
   */
  ...baseApi,
  /**
   * 登录验证
   */
  ...userApi,
  /**
   * 信息管理
   */
  ...infosManageApi,
  /**
   * 年度考核
   */
  ...assessmentApi,
  /**
   * 公共接口地址
   */
  downloadFile_commonApi: "/_data/frame/fbfile/download?fbFileId=",
  showOnlineFile_commonApi: "/_data/frame/fbfile/show"
};

export default apiInterface;
