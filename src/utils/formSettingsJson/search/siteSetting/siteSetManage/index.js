let searchFormBtns = [
    {
      flag: "search",
      size: "",
      btnClassName: "searchButtons",
      icon: "iconfont iconsearch text-primary",
      label: "查询",
      postUrl: "getSiteListPage_siteSetManage",
      styleType: ""
    }
  ],
  searchFormItems = [
    {
      type: "input",
      label: "基地编号",
      name: "code",
      span: 6,
      width: "80px"
    },
    {
      type: "input",
      label: "基地名称",
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
    },
    {
      type: "select",
      label: "基地类别",
      name: "type",
      span: 6,
      width: "80px",
      data: []
    },
    {
      type: "input",
      label: "责任人",
      name: "baseManager",
      span: 6,
      width: "80px"
    }
  ];
export { searchFormBtns, searchFormItems };
