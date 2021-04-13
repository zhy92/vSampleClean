let tableHeader = [
    {
      prop: "busintypeid",
      lable: "编码"
    },
    {
      prop: "busintypename",
      lable: "名称"
    },
    {
      prop: "isTree-zh_CN",
      lable: "是否树形"
    },
    {
      prop: "maintainanceMode__dsp",
      lable: "维护方式"
      // columnTooltip: "true"
    },
    {
      prop: "operateBtns",
      propType: "operateBtns",
      lable: "操作",
      width: "150"
    }
  ],
  tableOperateBtns = [
    {
      text: "业务代码",
      type: "add",
      class: "text-primary fontSize20 mr10",
      icon: "el-icon-folder-add",
      isIcon: true,
      postUrl: "",
      id: "menu_3",
      showFlag: "true"
    },
    {
      text: "删除",
      type: "delete",
      class: "text-primary fontSize20 mr10",
      icon: "el-icon-delete",
      isIcon: true,
      postUrl: "",
      id: "menu_4",
      showFlag: "true"
    }
  ],
  dictContentTableHeader = [
    {
      prop: "businid",
      lable: "编码"
    },
    {
      prop: "businname",
      lable: "名称"
    },
    {
      prop: "parentId__dsp",
      lable: "上级字典"
    },
    {
      prop: "privilege",
      lable: "过滤值"
    },
    {
      prop: "reserved-zh_CN",
      lable: "是否预留"
    },
    {
      prop: "sortField",
      lable: "排序"
    },
    {
      prop: "status-zh_CN",
      lable: "状态"
    },
    {
      prop: "operateBtns",
      propType: "operateBtns",
      lable: "操作",
      width: "150"
    }
  ];
export { tableHeader, tableOperateBtns, dictContentTableHeader };
