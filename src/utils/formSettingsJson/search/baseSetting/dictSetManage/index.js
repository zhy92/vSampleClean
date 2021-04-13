let searchFormBtns = [
    {
      flag: "search",
      size: "",
      btnClassName: "searchButtons",
      icon: "iconfont iconsearch text-primary",
      label: "查询",
      postUrl: "getDictList",
      styleType: ""
    }
  ],
  searchFormItems = [
    {
      type: "input",
      label: "编码",
      name: "busintypeid",
      span: 8,
      width: "80px"
    },
    {
      type: "input",
      label: "名称",
      name: "busintypename",
      span: 8,
      width: "80px"
    }
  ];
export { searchFormBtns, searchFormItems };
