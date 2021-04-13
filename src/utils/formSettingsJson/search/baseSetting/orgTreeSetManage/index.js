let searchFormBtns = [
    {
      flag: "search",
      size: "",
      icon: "",
      label: "查询",
      styleType: "primary",
      postUrl: "getOrgList"
    }
  ],
  searchFormItems = [
    {
      type: "input",
      label: "机构名称",
      name: "orgname",
      span: 8,
      width: "100px"
    },
    {
      type: "select",
      label: "机构类型",
      name: "orgtypeid",
      multiple: false,
      placeHolder: "请选择",
      filterable: false,
      data: [],
      span: 8,
      width: "100px"
    }
  ];
export { searchFormBtns, searchFormItems };
