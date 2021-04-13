const projectName = "oh-wms";
const projectBuildPath = "oh";
const mainPrefix = `/${projectName}`;
export default {
  // 项目路径基础前缀（工程名，主要用于接口路径）
  mainPrefix: mainPrefix,
  // 项目名称
  projectName: projectName,
  // 项目包名称
  projectBuildPath: projectBuildPath,
  // 全局接口名前缀
  baseURL:
    process.env.NODE_ENV === "production"
      ? mainPrefix
      : `http://10.10.7.4:8780/${projectName}`,
  // 下载保存在本地public中的文件模板
  fileDownloadUrl:
    process.env.NODE_ENV === "production"
      ? mainPrefix + `/${projectBuildPath}/download/`
      : "/download/",
  //登出
  logout:
    process.env.NODE_ENV === "production" ? mainPrefix + "/logout" : "/logout",
  //百度富文本编辑器项目地址
  ueEditorUrl:
    process.env.NODE_ENV === "production"
      ? mainPrefix + `/${projectBuildPath}/UEditor/`
      : "./UEditor/",
  //富文本编辑器上传地址
  ueEditorServerUrl: "",
  // process.env.NODE_ENV === "production"
  //   ? mainPrefix + "/_data/ueditor/ueditorConfig"
  //   : "/admin/_data/ueditor/ueditorConfig",
  //分页器通用配置
  paginationOption: {
    numberPerpage: 10,
    layout: "total, prev, pager, next, jumper", //total, sizes, prev, pager, next, jumper
    pageSizeChangeList: [10, 20, 30]
  },
  // 全局socket地址
  // baseSocketUrl:
  //   process.env.NODE_ENV === "production"
  //     ? mainPrefix + "/_wst"
  //     : "/admin" + mainPrefix + "/_wst",
  //全局socket对象
  globalSocketObj: null,
  websocketObj: null,
  stompClient: null,
  commonObjects: {},
  SCHME_TYPE: {
    normal: "1",
    special: "2"
  },
  SCHME_TYPE_YEAR: "1", // 考核方案类型：年度考核
  SCHME_TYPE_SPECIAL: "2", // 考核方案类型：专项考核
  SCHME_TYPE_OTHER: "9", // 考核方案类型：其他
  SCHEME_KPIASSIGN_TYPE_MD: "MD", // 牵头部门
  SCHEME_KPIASSIGN_TYPE_CD: "CD", // 配合部门
  SCHEME_KPIASSIGN_TYPE_MO: "MO", // 责任处室
  SCHEME_KPIASSIGN_TYPE_CO: "CO", // 配合处室
  // 入口参数
  portalAssessLevel: "2" //"1":"省","2":"市","3":"县区","9":"其他"
};
