// table表头信息设置
import { tableHeader } from "@/utils/formSettingsJson/table/baseSetting/menuTreeSetManage";

// 新增菜单
import {
  menuContentItems,
  addMenuContentButton,
  editMenuContentButton
} from "@/utils/formSettingsJson/dialog/baseSetting/menuTreeSetManage";
// 必填验证
import targetSetRule from "@/utils/formRulesJson/baseSetting/menuSetManage/menuSetRule";
const data = function(vm) {
  let obj = {
    // 下拉 菜单 业务功能
    menuPurpose: [],
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
    menuContentItems: menuContentItems,
    addMenuContentButton: addMenuContentButton,
    editMenuContentButton: editMenuContentButton,
    //新增修改弹窗
    dialogFormSettings: {
      fullScreen: false,
      dialogFormVisible: false,
      dialogFormTitle: "菜单",
      dialogFormItems: {
        formGroupValues: {},
        formGroupList: [],
        formButtonList: [],
        rules: targetSetRule
      }
    }
  };
  return obj;
};
export default data;
