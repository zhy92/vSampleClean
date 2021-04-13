import globalVariable from "../../global_variable";

const baseApi = {
  // 字典表
  dictList: "_data/frame/ref/list",
  // 方案下拉
  getSchemeSelect: "_data/scheme/formulate/getRunningSelects",
  // 获取指标下拉
  getKpiSelect: "_data/scheme/kpi/selects",
  // 获取下级考核办下拉
  getNextLevelOrgSelect: "_data/base/org/listAssessedOrg",
  // 被考核办下拉
  getSchemeAssessedRef: "/_data/scheme/assessed/getSchemeAssessedRef",
  // 机构人员
  getOperators: "_data/shemeAssess/schemePhaseAcl/getOperators",
  /**
   * 基础数据 指标管理
   */
  //通用在线查看地址
  officeViewUrl:
    globalVariable.mainPrefix + "/_view/common/util/officeView?src=",
  //通用下载地址
  commonDownloadUrl:
    window.document.location.origin +
    globalVariable.mainPrefix +
    "/_data/frame/fbfile/download?",

  // 获取报表服务器地址
  getBasicReportServer: "_data/basic/property/report",
  // 获取在线查看文件服务器地址
  getBasicFileViewerServer: "_data/basic/property/fileViewServer",
  // 获取指标树
  getKpiTree: "/_data/base/kpi/tree",
  // 获取kpi类目树
  getKpiIndexTree: "/_data/base/kpiIndex/parentTree",
  // kpi类目树编辑回显
  getDataByKpiIndex: "/_data/base/kpiIndex/loadByExample",
  // kpi 指标编辑回显
  getDataByKpi: "/_data/base/kpi/loadKpiDto",
  // 获取用户里面的城市
  userCity: "_data/basic/district/list",
  /**
   * 基础数据 组织机构管理
   */
  // 获取组织机构树
  getOrgList: "_data/base/org/tree",
  // 禁用
  disableOrg: "_data/base/organization/disableOrg",
  // 启用
  enableOrg: "_data/base/organization/enableList",
  // 行政区划
  areaDict: "_data/basic/district2/tree",
  // 新增下级机构
  addOrg: "_data/base/organization/add",
  //编辑 下级机构
  editOrg: "_data/base/organization/updateOrg",
  // 通过id 获取选中数据
  getOrgSelectList: "/_data/base/organization/loadByExample",
  /**
   * 基础数据 组织人员管理
   */
  getAllUserList: "_data/base/orgemployee/queryEmpNative",
  // 角色授权
  getRoles: "_data/base/orgemployee/twoRoles",
  // 分级角色授权
  getTwoSpeciltys: "_data/base/orgemployee/twoSpeciltys",
  // 启用禁用
  changeUserStatus: "_data/base/orgemployee/deleteList",
  // 删除
  destroyList: "_data/base/orgemployee/destroyList",
  /**
   * 基础数据 菜单管理
   */
  // 获取菜单
  getMenuList: "_data/base/menu/tree",
  // 启用禁用`
  updateMenuStatus: "_data/base/menu/updateMenuStatus",
  // 通过id 获取选中数据
  getMenuDataById: "_data/base/menu/loadByExample",
  // 删除菜单
  deleteMenu: "_data/base/menu/deleteMenu",
  /**
   * 基础数据 角色权限管理
   */
  getRoleList: "_data/base/role/page",
  getRoleDataById: "_data/base/role/loadByExample",
  // 启用禁用
  updateRoleStatus: "_data/base/role/updateStatus",
  // 删除
  deleteRole: "_data/base/role/deleteList",
  // 获取菜单树
  getMenuTree: "_data/base/menu/treeDto",
  // 给角色设置菜单权限
  setRoleMenu: "_data/base/menu/updateRoleMenu",
  // 已分配用户列表
  getAllocatedUserList: "_data/base/operatorrole/query",
  // 未分配用户列表
  getUserList: "_data/base/orgemployee/query",
  // 分配用户
  updateOptRole: "_data/base/operatorrole/updateOptRoleBody",
  deleteAllocatedUser: "_data/base/operatorrole/deleteOptRoleBody",
  /**
   * 基础数据 行政区划管理
   */
  getAreaList: "_data/basic/district/tree",
  updateAreaStatus: "_data/basic/district/updateStatus",
  // 通过id 获取 areaData
  getAreaDataById: "_data/basic/district/loadByExample",
  /**
   * 基础数据 字典管理
   */
  getDictList: "_data/basic/busintype/pageRef",
  deleteDict: "_data/basic/busintype/remove",
  getDictContentList: "_data/basic/dictionary/pageRef",
  deleteDictContent: "_data/basic/dictionary/remove",
  // 上级字典树
  getHigherLevelTree: "_data/basic/dictionary/tree",
  /**
   * 基础数据 计划任务
   */
  getTaskList: "_data/frame/task/query",
  updateTask: "_data/frame/task/update",
  deleteTask: "_data/frame/task/remove",
  pauseTask: "_data/frame/task/pause",
  resumeTask: "_data/frame/task/resume",
  runTask: "_data/frame/task/run",
  /**
   * 基础数据 表彰管理
   */
  getRewardList: "_data/scheme/reward/page",
  deleteReward: "_data/scheme/reward/delete",
  singleReward: "_data/scheme/reward/loadInfo"
};
export default baseApi;
