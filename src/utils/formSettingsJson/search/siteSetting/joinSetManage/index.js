let searchFormBtns = [
    {
      flag: "search",
      size: "",
      btnClassName: "searchButtons",
      icon: "iconfont iconsearch text-primary",
      label: "查询",
      postUrl: "getJoinListPage_joinSetManage",
      styleType: ""
    }
  ],
  searchFormItems = [
    {
      type: "input",
      label: "申请编号",
      name: "docNo",
      span: 6,
      width: "80px"
    },
    {
      type: "input",
      label: "申请人",
      name: "name",
      span: 6,
      width: "80px"
    },
    {
      type: "select",
      label: "状态",
      name: "processinstStatus",
      span: 6,
      width: "80px",
      data: []
    },
    {
      type: "select",
      label: "基地类别",
      name: "baseType",
      span: 6,
      width: "80px",
      data: []
    }
  ];
export { searchFormBtns, searchFormItems };
