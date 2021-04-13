// 搜索
import {
  searchFormBtns,
  searchFormItems
} from "@/utils/formSettingsJson/search/baseSetting/unitSetManage";
// 表头
import { tableHeader } from "@/utils/formSettingsJson/table/baseSetting/unitSetManage";
// 表格上方操作按钮
import { operateButtons } from "@/utils/formSettingsJson/operateButton/baseSetting/unitSetManage";

// 弹框
import {
  dialogAddButton,
  dialogEditButton,
  dialogContentItems
} from "@/utils/formSettingsJson/dialog/baseSetting/unitSetManage";

// 必填验证
import dialogContentItemsRule from "@/utils/formRulesJson/baseSetting/unitSetManage";

const data = function(vm) {
  let obj = {
    // 搜索栏
    searchFormSettings: {
      fullScreen: false,
      formGroupList: searchFormItems,
      formGroupValues: {},
      formButtonList: searchFormBtns
    },
    showSearchForm: true,
    // 表格选中的计量单位信息数据
    chosedUnitData: [],
    // table表格配置
    tableSettings: {
      tableDatas: [],
      tableSettingOptions: {
        isShowIndex: true,
        showIndexHeader: "序号",
        isMultipleTable: true,
        ref: "unitTable",
        rowKey: "fpmpBasUnitId",
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
    dialogAddButton: dialogAddButton,
    dialogEditButton: dialogEditButton,
    dialogContentItems: dialogContentItems,
    //新增修改弹窗
    dialogFormSettings: {
      width: "50%",
      fullScreen: false,
      dialogFormVisible: false,
      dialogFormTitle: "菜单",
      dialogFormItems: {
        formGroupValues: {},
        formGroupList: [],
        formButtonList: [],
        rules: dialogContentItemsRule
      }
    }
  };
  return obj;
};
export default data;
