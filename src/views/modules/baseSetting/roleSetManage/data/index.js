// 搜索
import {
  searchFormBtns,
  searchFormItems,
  userSearchFormItems, //未分配人员搜索
  userSearchFormBtns
} from "@/utils/formSettingsJson/search/baseSetting/roleSetManage";
// table 上方按钮
import {
  operateButtons,
  userOperateButtons, // 未分配人员表格上方按钮
  allocatedUserOperateButtons // 已分配用户表格上方按钮
} from "@/utils/formSettingsJson/operateButton/baseSetting/roleSetManage";
// table表头信息设置
import {
  tableHeader,
  userTableHeader
} from "@/utils/formSettingsJson/table/baseSetting/roleSetManage";
// 新增编辑角色表单组
import {
  addRoleButton,
  editRoleButton,
  roleItems
} from "@/utils/formSettingsJson/dialog/baseSetting/roleSetManage";
// 必填验证
import targetSetRule from "@/utils/formRulesJson/baseSetting/roleSetManage/roleSetRule";
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
    roleItems: roleItems,
    addRoleButton: addRoleButton,
    editRoleButton: editRoleButton,
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
    // 分配权限弹框
    allocatedUserDialogSetting: {
      dialogVisible: false,
      dialogName: "权限分配"
    },
    // 操作行数据
    roleListRowData: null,
    // 分配权限tab 设置
    tabSettings: {
      position: "top",
      tabCardType: "card",
      activeName: "1",
      tabCardData: [
        {
          label: "角色菜单",
          id: "1"
        },
        {
          label: "分配用户",
          id: "2"
        }
      ]
    },
    // 菜单树 设置
    treeSettings: {
      treeData: [],
      expandAll: false,
      nodeKey: "id",
      nodeExpand: false,
      defaultProps: {
        children: "children",
        label: "text"
      },
      treeWithCheckbox: true,
      checkedTreeData: ["1"],
      treeButtons: [
        {
          key: "getCheckedKeys",
          text: "保存"
        }
      ]
    },
    // 已分配用户表格上方操作
    allocatedUserOperateButtonsSettings: {
      moduleName: "tableList",
      buttonListData: allocatedUserOperateButtons
    },
    allocatedUserTableSettings: {
      tableDatas: [],
      tableSettingOptions: {
        ref: "demo",
        rowKey: "id",
        tooltipEffect: "dark",
        border: true,
        defaultExpandAll: true,
        isMultipleTable: true,
        headerOptions: userTableHeader
      }
    },
    // 已分配人员列表选中id
    selectAllocatedUserId: [],
    // 已分配人员分页设置
    allocatedUserPaginationSettings: Object.assign(
      {},
      {
        currentPage: 1,
        totalNumbers: 0
      },
      vm.$global.paginationOption
    ),
    // 给用户分配权限弹框
    userDialogSetting: {
      dialogVisible: false,
      dialogName: "未分配用户列表"
    },
    // 未分配用户搜索栏
    userSearchFormItems: userSearchFormItems,
    userSearchFormSettings: {
      fullScreen: false,
      formGroupList: userSearchFormItems,
      formGroupValues: {},
      formButtonList: userSearchFormBtns
    },
    showUserSearchForm: true,
    // 未分配人员表格上方按钮
    userOperateButtonsSettings: {
      moduleName: "tableList",
      buttonListData: userOperateButtons
    },
    // 未分配人员table 设置
    userTableSettings: {
      tableDatas: [],
      tableSettingOptions: {
        ref: "demo",
        rowKey: "id",
        tooltipEffect: "dark",
        border: true,
        defaultExpandAll: true,
        isMultipleTable: true,
        headerOptions: userTableHeader
      }
    },
    userPaginationSettings: Object.assign(
      {},
      {
        currentPage: 1,
        totalNumbers: 0
      },
      vm.$global.paginationOption
    ),
    // 选中的用户id
    selectUserId: []
  };
  return obj;
};
export default data;
