let searchFormBtns = [
    {
      flag: "search",
      size: "",
      btnClassName: "searchButtons",
      icon: "iconfont iconsearch text-primary",
      label: "查询",
      postUrl: "getMedicamentListPage_medicamentSetManage",
      styleType: ""
    }
  ],
  searchFormItems = [
    {
      type: "input",
      label: "药剂编号",
      name: "code",
      span: 8,
      width: "80px"
    },
    {
      type: "input",
      label: "药剂名称",
      name: "name",
      span: 8,
      width: "80px"
    },
    {
      type: "select",
      label: "状态",
      name: "disabled",
      span: 8,
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
