let searchFormBtns = [
    {
      flag: "search",
      size: "",
      icon: "",
      label: "查询",
      styleType: "primary",
      postUrl: "getAllUserList"
    }
  ],
  searchFormItems = [
    {
      type: "input",
      label: "登录名",
      name: "userid",
      span: 8,
      width: "100px"
    },
    {
      type: "input",
      label: "真实姓名",
      name: "operatorname",
      span: 8,
      width: "100px"
    },
    {
      type: "select",
      label: "角色",
      name: "roleid",
      multiple: false,
      placeHolder: "请选择",
      filterable: false,
      data: [],
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
    },
    {
      type: "elTreeSelect",
      label: "机构",
      name: "orgid",
      filterable: true,
      span: 8,
      width: "100px",
      props: {
        value: "id",
        label: "text",
        children: "children",
        choseOnlyLeaf: false
      },
      data: []
    }
  ];
export { searchFormBtns, searchFormItems };
