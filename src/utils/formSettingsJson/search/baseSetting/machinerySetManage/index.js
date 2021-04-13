let searchFormBtns = [
    {
      flag: "search",
      size: "",
      btnClassName: "searchButtons",
      icon: "iconfont iconsearch text-primary",
      label: "查询",
      postUrl: "getMachineryListPage_machinerySetManage",
      styleType: ""
    }
  ],
  searchFormItems = [
    {
      type: "input",
      label: "设备编号",
      name: "code",
      span: 6,
      width: "100px"
    },
    {
      type: "input",
      label: "设备名称",
      name: "name",
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
