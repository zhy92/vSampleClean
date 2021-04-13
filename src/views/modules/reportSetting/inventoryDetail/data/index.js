// 搜索
import {
  searchFormBtns,
  searchFormItems
} from "@/utils/formSettingsJson/search/baseSetting/taskSetManage";
// table 上方按钮
import operateButtons from "@/utils/formSettingsJson/operateButton/baseSetting/taskSetManage";
// table表头信息设置
import { tableHeader } from "@/utils/formSettingsJson/table/baseSetting/taskSetManage";
// 新建任务列表src\utils\formSettingsJson\dialog\systemSetting\taskSetManage\index.js
import {
  addTaskButton,
  editTaskButton,
  taskContentItems
} from "@/utils/formSettingsJson/dialog/baseSetting/taskSetManage";
// 必填验证
import taskSetRule from "@/utils/formRulesJson/baseSetting/taskSetManage/taskSetRule";

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
    taskContentItems: taskContentItems,
    addTaskButton: addTaskButton,
    editTaskButton: editTaskButton,
    //新增修改弹窗
    dialogFormSettings: {
      fullScreen: false,
      dialogFormVisible: false,
      dialogFormTitle: "菜单",
      dialogFormItems: {
        formGroupValues: {},
        formGroupList: [],
        formButtonList: [],
        rules: taskSetRule
      }
    },
    cronDetailDialog: {
      dialogVisible: false,
      dialogName: "cron参考",
      formButtonList: [
        {
          flag: "cancel",
          size: "",
          icon: "",
          label: "关闭",
          styleType: "",
          postUrl: ""
        }
      ]
    }
  };
  return obj;
};
export default data;
