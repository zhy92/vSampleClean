let searchFormBtns = [
    {
      flag: "search",
      size: "",
      btnClassName: "searchButtons",
      icon: "iconfont iconsearch text-primary",
      label: "查询",
      postUrl: "getStandardlevelListPage_standardlevelSetManage",
      styleType: ""
    }
  ],
  searchFormItems = [
    {
      type: "input",
      label: "编号",
      name: "code",
      span: 6,
      width: "100px"
    },
    {
      type: "input",
      label: "种子品种",
      name: "seedVariety",
      span: 6,
      width: "100px"
    },
    {
      type: "select",
      label: "状态",
      name: "disabled",
      span: 6,
      width: "100px",
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
