// 搜索
import {
  searchFormBtns,
  searchFormItems
} from "@/utils/formSettingsJson/search/siteSetting/siteSetManage";
// 表头
import {
  tableHeader,
  groundTableHeader,
  machineryTableHeader
} from "@/utils/formSettingsJson/table/siteSetting/siteSetManage";
// 表格上方操作按钮
import {
  operateButtons,
  groundOperateButtons,
  machineryOperateButtons
} from "@/utils/formSettingsJson/operateButton/siteSetting/siteSetManage";

// 弹框
import {
  dialogAddButton,
  dialogEditButton,
  dialogGroundAddButton,
  dialogGroundEditButton,
  dialogMachineryAddButton,
  dialogMachineryEditButton,
  dialogContentItems,
  dialogGroundContentItems,
  dialogMachineryContentItems
} from "@/utils/formSettingsJson/dialog/siteSetting/siteSetManage";

// 必填验证
import {
  dialogContentItemsRule,
  dialogGroundContentItemsRule,
  dialogMachineryContentItemsRule
} from "@/utils/formRulesJson/siteSetting/siteSetManage";

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
    // 表格选中的基地信息数据
    chosedUnitData: [],
    // 表格选中的土地信息数据
    chosedGroundData: [],
    // table表格配置
    tableSettings: {
      tableDatas: [],
      tableSettingOptions: {
        isShowIndex: true,
        showIndexHeader: "序号",
        isMultipleTable: true,
        ref: "fertilizerTable",
        rowKey: "fpmpBasBaseId",
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
    // 弹窗配置信息
    dialogAddButton: dialogAddButton,
    dialogEditButton: dialogEditButton,
    dialogGroundAddButton: dialogGroundAddButton,
    dialogGroundEditButton: dialogGroundEditButton,
    dialogMachineryAddButton: dialogMachineryAddButton,
    dialogMachineryEditButton: dialogMachineryEditButton,
    dialogContentItems: dialogContentItems,
    dialogGroundContentItems: dialogGroundContentItems,
    dialogMachineryContentItems: dialogMachineryContentItems,
    //校验规则
    dialogContentItemsRule: dialogContentItemsRule,
    dialogGroundContentItemsRule: dialogGroundContentItemsRule,
    dialogMachineryContentItemsRule: dialogMachineryContentItemsRule,
    //新增修改弹窗
    dialogFormSettings: {
      width: "50%",
      dialogType: "other",
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
    //弹窗内新增修改弹窗
    dialogChildFormSettings: {
      width: "50%",
      fullScreen: true,
      dialogFormVisible: false,
      dialogFormTitle: "菜单",
      dialogFormItems: {
        formGroupValues: {},
        formGroupList: [],
        formButtonList: [],
        rules: dialogContentItemsRule
      }
    },
    // 弹窗激活标签卡
    activeName: "site",
    // 标签卡是否可点击，只有新增基地之后才能编辑机械和土地信息
    panelDisabled: true,
    // 弹窗基础表单设置
    detailInfoFormSettings: {
      fullScreen: true,
      formGroupList: dialogContentItems,
      formGroupValues: {},
      formButtonList: dialogAddButton,
      rules: dialogContentItemsRule
    },
    // 土地table表格上方按钮设置
    groundOperateButtonsSettings: {
      moduleName: "groundTableList",
      buttonListData: groundOperateButtons
    },
    // 土地table表格配置
    groundTableSettings: {
      tableDatas: [],
      tableSettingOptions: {
        isShowIndex: true,
        showIndexHeader: "序号",
        isMultipleTable: true,
        ref: "groundTable",
        rowKey: "fpmpBaseLandId",
        tooltipEffect: "dark",
        border: true,
        defaultExpandAll: true,
        headerOptions: groundTableHeader
      }
    },
    // 土地table表格翻页
    groundPaginationSettings: {
      currentPage: 1,
      totalNumbers: 0
    },
    // 全部机械设备列表
    allMachinerylist: [],
    // 机械table表格上方按钮设置
    machineryOperateButtonsSettings: {
      moduleName: "machineryTableList",
      buttonListData: machineryOperateButtons
    },
    // 机械table表格配置
    machineryTableSettings: {
      tableDatas: [],
      tableSettingOptions: {
        isShowIndex: true,
        showIndexHeader: "序号",
        isMultipleTable: false,
        ref: "machineryTable",
        rowKey: "fpmpBasBaseMachineryId",
        tooltipEffect: "dark",
        border: true,
        defaultExpandAll: true,
        headerOptions: machineryTableHeader
      }
    },
    // 机械table表格翻页
    machineryPaginationSettings: {
      currentPage: 1,
      totalNumbers: 0
    }
  };
  return obj;
};
export default data;
