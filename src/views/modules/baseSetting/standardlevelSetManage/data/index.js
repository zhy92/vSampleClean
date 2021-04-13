// 搜索
import {
  searchFormBtns,
  searchFormItems
} from "@/utils/formSettingsJson/search/baseSetting/standardlevelSetManage";
// 表头
import {
  tableHeader,
  detailTableHeader
} from "@/utils/formSettingsJson/table/baseSetting/standardlevelSetManage";
// 表格上方操作按钮
import {
  operateButtons,
  dialogOperateButtons
} from "@/utils/formSettingsJson/operateButton/baseSetting/standardlevelSetManage";

// 弹框
import {
  dialogAddButton,
  dialogEditButton,
  dialogContentItems
} from "@/utils/formSettingsJson/dialog/baseSetting/standardlevelSetManage";

// 必填验证
import dialogContentItemsRule from "@/utils/formRulesJson/baseSetting/standardlevelSetManage";

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
    // 表格选中的肥料信息数据
    chosedUnitData: [],
    // table表格配置
    tableSettings: {
      tableDatas: [],
      tableSettingOptions: {
        isShowIndex: true,
        showIndexHeader: "序号",
        isMultipleTable: true,
        ref: "fertilizerTable",
        rowKey: "fpmpBasStandardLevelId",
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
      width: "70%",
      fullScreen: false,
      dialogFormVisible: false,
      dialogFormTitle: "菜单",
      dialogFormItems: {
        formGroupValues: {},
        formGroupList: [],
        formButtonList: [],
        rules: dialogContentItemsRule
      }
    },
    // 弹框内表格上方头部设置
    dialogOperateButtonsSettings: {
      moduleName: "dialogOperate",
      buttonListData: dialogOperateButtons
    },
    // 弹框内可输入表格设置
    dialogInputTableSettings: {
      selectedListName: "selMuti",
      selection: true,
      headers: detailTableHeader
    },
    // 弹框内可输入表格默认数据
    detailTableDatas: [],
    // 弹框内可输入表格值
    dialogInputTableValue: [],
    // 弹框内勾选明细表待删除的值
    toBeRemoveDetaillist: []
  };
  return obj;
};
export default data;
