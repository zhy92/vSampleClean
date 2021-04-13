let searchFormBtns = [
    {
      flag: "search",
      size: "",
      icon: "",
      label: "查询",
      styleType: "primary",
      postUrl: "getDictList"
    }
  ],
  searchFormItems = [
    {
      type: "input",
      label: "编码",
      name: "busintypeid",
      span: 8,
      width: "100px"
    },
    {
      type: "input",
      label: "名称",
      name: "busintypename",
      span: 8,
      width: "100px"
    }
  ];
export { searchFormBtns, searchFormItems };
