// 搜索
import {
  searchFormBtns,
  searchFormItems,
  baseSearchFormItems,
  baseSearchFormBtns,
  landsSearchFormItems,
  landsSearchFormBtns
} from "@/utils/formSettingsJson/search/planSetting/plantPlan";
// table 上方按钮
import {
  operateButtons,
  baseDetailOperateButtons,
  landsDetailOperateButtons
} from "@/utils/formSettingsJson/operateButton/planSetting/plantPlan";
// table表头信息设置
import {
  tableHeader,
  baseDetailTableHeader,
  landsDetailTableHeader,
  baseTableHeader,
  landsTableHeader
} from "@/utils/formSettingsJson/table/planSetting/plantPlan";
// 新建检测单
import {
  addButton,
  editButton,
  contentItems,
  choiceBasePageBtn,
  choiceLandsPageBtn
} from "@/utils/formSettingsJson/dialog/planSetting/plantPlan";
// 必填验证
import plantPlanRule from "@/utils/formRulesJson/planSetting/plantPlan";

const data = function(vm) {
  let obj = {
    // 搜索栏
    searchFormItems: searchFormItems,
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
        isShowIndex: true,
        showIndexHeader: "序号",
        ref: "plantPlanTable",
        rowKey: "fpmpPlanPlantingId",
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
    contentItems: contentItems,
    addButton: addButton,
    editButton: editButton,
    //新增修改弹窗
    dialogFormSettings: {
      fullScreen: false,
      dialogFormVisible: false,
      dialogFormTitle: "详情",
      dialogFormItems: {
        formGroupValues: {
          docNo: "系统自动生成",
          created: vm.$globalFnc.dateStampFormat(new Date().getTime()),
          businessDate: vm.$globalFnc.dateStampFormat(
            new Date().getTime(),
            "ymd"
          ),
          requisitionDtls: ""
        },
        formGroupList: contentItems,
        formButtonList: [],
        rules: plantPlanRule
      }
    },
    // 详情页弹框 基地明细表格上方按钮组
    baseDetailOperateButtons: baseDetailOperateButtons,
    baseDetailOperateButtonsSettings: {
      moduleName: "tableList",
      buttonListData: baseDetailOperateButtons
    },
    // 详情页弹框 表格选中的数据
    chosedMaterialDetail: [],
    // 详情页弹框 基地明细列表
    baseDetailTableHeader: baseDetailTableHeader,
    baseDetailTableSettings: {
      name: "fpmpPlanPlantingBases",
      selectedListName: "selMuti",
      selection: true,
      headers: baseDetailTableHeader,
      rules: plantPlanRule
    },
    // 详情页弹框 基地明细表格上方按钮组
    landsDetailOperateButtons: landsDetailOperateButtons,
    landsDetailOperateButtonsSettings: {
      moduleName: "tableList",
      buttonListData: landsDetailOperateButtons
    },
    // 详情页  土地明细
    landsDetailTableSettings: {
      name: "lands",
      selectedListName: "selMuti",
      selection: true,
      headers: landsDetailTableHeader,
      rules: plantPlanRule
    },
    // 基地明细添加页  弹框
    choiceBasePageDialog: {
      dialogVisible: false,
      dialogName: "",
      formButtonList: choiceBasePageBtn
    },
    //基地明细添加页  选中的物资数据
    chosedBaseData: [],
    // 基地明细添加页  基地列表
    baseTableSettings: {
      tableDatas: [],
      tableSettingOptions: {
        isMultipleTable: true,
        ref: "baseMessage",
        rowKey: "fpmpBasBaseId",
        tooltipEffect: "dark",
        border: true,
        defaultExpandAll: true,
        headerOptions: baseTableHeader
      }
    },
    // 基地明细添加页  分页
    basePaginationSettings: {
      currentPage: 1,
      totalNumbers: 0
    },
    // 基地明细添加页 搜索
    baseSearchFormItems: baseSearchFormItems,
    baseSearchFormSettings: {
      fullScreen: false,
      formGroupList: baseSearchFormItems,
      formGroupValues: {},
      formButtonList: baseSearchFormBtns
    },
    // 土地选择页  弹框
    choiceLandsPageDialog: {
      dialogVisible: false,
      dialogName: "",
      formButtonList: choiceLandsPageBtn
    },
    // 土地选择页 搜索
    landsSearchFormItems: landsSearchFormItems,
    landsSearchFormSettings: {
      fullScreen: false,
      formGroupList: landsSearchFormItems,
      formGroupValues: {},
      formButtonList: landsSearchFormBtns
    },
    // 土地选择页 表格
    chosedLandsData: [],
    landsTableSettings: {
      tableDatas: [],
      tableSettingOptions: {
        isMultipleTable: true,
        ref: "baseMessage",
        rowKey: "fpmpBaseLandId",
        tooltipEffect: "dark",
        border: true,
        defaultExpandAll: true,
        headerOptions: landsTableHeader
      }
    },
    // 基地明细添加页  分页
    landsPaginationSettings: {
      currentPage: 1,
      totalNumbers: 0
    }
  };
  return obj;
};
export default data;
