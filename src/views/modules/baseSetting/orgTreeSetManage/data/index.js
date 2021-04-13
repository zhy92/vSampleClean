// 搜索src\utils\formSettingsJson\search\systemSetting\orgTreeSetManage\index.js
import {
  searchFormBtns,
  searchFormItems
} from "@/utils/formSettingsJson/search/baseSetting/orgTreeSetManage";
// table表头信息设置
import { tableHeader } from "@/utils/formSettingsJson/table/baseSetting/orgTreeSetManage";
// 新增  编辑组织
import {
  orgContentItems,
  addOrgContentButton,
  editOrgContentButton
} from "@/utils/formSettingsJson/dialog/baseSetting/orgTreeSetManage";
// 规则
import addOrgContentRules from "@/utils/formRulesJson/baseSetting/orgSetManage/orgSetRule";
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
    // table表格配置
    tableSettings: {
      tableDatas: [],
      tableSettingOptions: {
        ref: "demo",
        rowKey: "id",
        tooltipEffect: "dark",
        border: true,
        defaultExpandAll: true,
        headerOptions: tableHeader,
        treeProps: {
          children: "children",
          hasChildren: "hasChildren"
        }
      }
    },
    //新增修改弹窗
    orgContentItems: orgContentItems,
    addOrgContentButton: addOrgContentButton,
    editOrgContentButton: editOrgContentButton,
    addOrgContentRules: addOrgContentRules,
    dialogFormSettings: {
      fullScreen: false,
      dialogFormVisible: false,
      dialogFormTitle: "",
      dialogFormItems: {
        formGroupValues: {},
        formGroupList: [],
        formButtonList: [],
        rules: addOrgContentRules
      }
    },
    // 字典表
    orgTypeList: [], // 机构类型
    districtLevelList: [], //行政级别
    addressDistrictList: [] //行政区划
  };
  return obj;
};
export default data;
