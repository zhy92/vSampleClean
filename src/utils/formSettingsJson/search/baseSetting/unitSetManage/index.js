let searchFormBtns = [
    {
      flag: "search",
      size: "",
      btnClassName: "searchButtons",
      icon: "iconfont iconsearch text-primary",
      label: "查询",
      postUrl: "getUnitListPage_unitSetManage",
      styleType: ""
    }
  ],
  searchFormItems = [
    {
      type: "input",
      label: "单位编号",
      name: "code",
      span: 6,
      width: "80px"
    },
    {
      type: "input",
      label: "单位名称",
      name: "name",
      span: 6,
      width: "80px"
    },
    {
      type: "select",
      label: "状态",
      name: "disabled",
      span: 6,
      width: "80px",
      data: [
        {
          value: "N",
          label: "启用"
        },
        {
          value: "Y",
          label: "禁用"
        }
      ]
    }
  ];
export { searchFormBtns, searchFormItems };
