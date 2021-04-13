let searchFormBtns = [
    {
      flag: "search",
      size: "",
      btnClassName: "searchButtons",
      icon: "iconfont iconsearch text-primary",
      label: "查询",
      postUrl: "getCropListPage_cropSetManage",
      styleType: ""
    }
  ],
  searchFormItems = [
    {
      type: "input",
      label: "作物编号",
      name: "code",
      span: 6,
      width: "80px"
    },
    {
      type: "input",
      label: "作物名称",
      name: "name",
      span: 6,
      width: "80px"
    },
    {
      type: "select",
      label: "作物类型",
      name: "seedType",
      span: 6,
      width: "80px",
      data: []
    }
  ];
export { searchFormBtns, searchFormItems };
