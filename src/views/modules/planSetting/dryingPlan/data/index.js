// 搜索
import {
  searchFormBtns,
  searchFormItems,
  materialSearchFormItems,
  materialSearchFormBtns
} from "@/utils/formSettingsJson/search/planSetting/dryingPlan";
// table 上方按钮
import {
  operateButtons,
  materialDetailOperateButtons
} from "@/utils/formSettingsJson/operateButton/planSetting/dryingPlan";
// table表头信息设置
import {
  tableHeader,
  detailTableHeader,
  materialDetailTableHeader
} from "@/utils/formSettingsJson/table/planSetting/dryingPlan";
// 新建检测单
import {
  addButton,
  editButton,
  contentItems,
  addMaterialButton
} from "@/utils/formSettingsJson/dialog/planSetting/dryingPlan";
// 必填验证
import dryingPlanRule from "@/utils/formRulesJson/planSetting/dryingPlan";

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
        ref: "demo",
        rowKey: "docNo",
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
          storepointId: ""
        },
        formGroupList: contentItems,
        formButtonList: [],
        rules: dryingPlanRule
      }
    },
    // 详情页弹框 表格上方按钮组
    materialDetailOperateButtons: materialDetailOperateButtons,
    dialogOperateButtonsSettings: {
      moduleName: "tableList",
      buttonListData: materialDetailOperateButtons
    },
    // 详情页弹框 表格选中的数据
    chosedMaterialDetail: [],
    // 详情页弹框 物资明细列表
    detailTableHeader: detailTableHeader,
    dialogInputTableSettings: {
      name: "requisitionDtls",
      selectedListName: "selMuti",
      selection: true,
      headers: detailTableHeader,
      rules: dryingPlanRule
    },
    // 调拨明细添加页  弹框
    materialDetailDialog: {
      dialogVisible: false,
      dialogName: "",
      formButtonList: []
    },
    // 调拨明细添加页
    addMaterialButton: addMaterialButton,
    //调拨明细添加页  选中的物资数据
    chosedMaterialData: [],
    // 调拨明细添加页  物资列表
    materialDetailTableSettings: {
      tableDatas: [],
      tableSettingOptions: {
        isMultipleTable: true,
        ref: "materialDetail",
        rowKey: "code",
        tooltipEffect: "dark",
        border: true,
        defaultExpandAll: true,
        headerOptions: materialDetailTableHeader
      }
    },
    // 调拨明细添加页  分页
    materialPaginationSettings: {
      currentPage: 1,
      totalNumbers: 0
    },
    // 调拨明细添加页 搜索
    materialSearchFormItems: materialSearchFormItems,
    materialSearchFormSettings: {
      fullScreen: false,
      formGroupList: materialSearchFormItems,
      formGroupValues: {},
      formButtonList: materialSearchFormBtns
    }
  };
  return obj;
};
export default data;
