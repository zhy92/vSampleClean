// 搜索
import {
  searchFormBtns,
  searchFormItems
} from "@/utils/formSettingsJson/search/baseSetting/dictSetManage";
// table表头信息设置src\utils\formSettingsJson\table\systemSetting\dictSetManage
import {
  tableHeader, // 页面
  tableOperateBtns, // 表格行间按钮
  dictContentTableHeader //对话框
} from "@/utils/formSettingsJson/table/baseSetting/dictSetManage";
// 表格上方按钮
import {
  operateButtons, // 页面
  dictContentOperateButtons //对话框
} from "@/utils/formSettingsJson/operateButton/baseSetting/dictSetManage";

// 业务代码
import {
  addDictListItems,
  addDictListButton, // 页面
  dictContentItems,
  addDictContentButton,
  editDictContentButton //对话框
} from "@/utils/formSettingsJson/dialog/baseSetting/dictSetManage";

// 必填验证
import targetSetRule from "@/utils/formRulesJson/baseSetting/dictSetManage/dictSetRule";

const data = function(vm) {
  let obj = {
    // table行间按钮
    tableOperateBtns: tableOperateBtns,
    // 搜索栏
    searchFormSettings: {
      fullScreen: false,
      formGroupList: searchFormItems,
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
        headerOptions: tableHeader
      }
    },
    // 分页配置
    paginationSettings: {
      currentPage: 1,
      totalNumbers: 0
    },
    // 表格上方头部设置
    operateButtonsSettings: {
      moduleName: "tableList",
      buttonListData: operateButtons
    },
    // 新增列表
    addDictListItems: addDictListItems,
    addDictListButton: addDictListButton,
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
    },
    // 业务代码弹框
    dictContentDialogSetting: {
      dialogVisible: false,
      dialogName: "字典表业务代码"
    },
    dictContentOperateButtonsSettings: {
      moduleName: "tableList",
      buttonListData: dictContentOperateButtons
    },
    // 字典表业务代码内容
    dictContentItems: dictContentItems,
    addDictContentButton: addDictContentButton,
    editDictContentButton: editDictContentButton,
    // 保存字典表列表选中行信息
    dictListRowData: null,
    // 字典表业务代码表格
    dictContentTableSettings: {
      tableDatas: [],
      tableSettingOptions: {
        ref: "demo",
        rowKey: "id",
        tooltipEffect: "dark",
        border: true,
        defaultExpandAll: true,
        headerOptions: dictContentTableHeader
      }
    },
    dictContentPaginationSettings: Object.assign(
      {},
      {
        currentPage: 1,
        totalNumbers: 0
      },
      vm.$global.paginationOption
    )
  };
  return obj;
};
export default data;
