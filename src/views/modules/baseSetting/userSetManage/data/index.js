// 搜索src\utils\formSettingsJson\search\systemSetting\userSetManage\index.js
import {
  searchFormBtns,
  searchFormItems
} from "@/utils/formSettingsJson/search/baseSetting/userSetManage";
// table 上方按钮
import operateButtons from "@/utils/formSettingsJson/operateButton/baseSetting/userSetManage";
// table表头信息设置
import { tableHeader } from "@/utils/formSettingsJson/table/baseSetting/userSetManage";
// 新增  编辑用户信息
import {
  addUserContentButton,
  editUserContentButton,
  userContentItems
} from "@/utils/formSettingsJson/dialog/baseSetting/userSetManage";
// 规则
import userSetRule from "@/utils/formRulesJson/baseSetting/userSetManage/userSetRule";
const data = function(vm) {
  let obj = {
    // 搜索栏
    searchFormItems: searchFormItems,
    searchFormSettings: {
      fullScreen: false,
      formGroupList: [],
      formGroupValues: {},
      formButtonList: searchFormBtns
    },
    showSearchForm: true,
    // 表格上方头部设置
    operateButtonsSettings: {
      moduleName: "tableList",
      buttonListData: operateButtons
    },
    // table表格配置
    tableSettings: {
      tableDatas: [],
      tableSettingOptions: {
        ref: "demo",
        rowKey: "id",
        tooltipEffect: "dark",
        border: true,
        defaultExpandAll: true,
        headerOptions: tableHeader
      }
    },
    // 分页配置
    paginationSettings: {
      currentPage: 1,
      totalNumbers: 0
    },
    //新增修改弹窗
    addUserContentButton: addUserContentButton,
    userContentItems: userContentItems,
    editUserContentButton: editUserContentButton,
    userSetRule: userSetRule,
    dialogFormSettings: {
      fullScreen: false,
      dialogFormVisible: false,
      dialogFormTitle: "",
      dialogFormItems: {
        formGroupValues: {},
        formGroupList: [],
        formButtonList: [],
        rules: {},
        validatePWRule: true // 密码特殊验证
      }
    },
    orgList: [] //组织机构
  };
  return obj;
};
export default data;
