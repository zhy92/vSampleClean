let searchFormBtns = [
    {
      flag: "search",
      size: "",
      icon: "",
      label: "查询",
      styleType: "primary"
    }
  ],
  searchFormItems = [
    {
      type: "input",
      label: "编码",
      name: "code",
      span: 8,
      width: "100px"
    },
    {
      type: "input",
      label: "名称",
      name: "name",
      span: 8,
      width: "100px"
    },
    {
      type: "select",
      label: "状态",
      name: "status",
      multiple: false,
      placeHolder: "请选择",
      filterable: false,
      data: [
        {
          label: "启用",
          value: "1"
        },
        {
          label: "禁用",
          value: "2"
        }
      ],
      span: 8,
      width: "100px"
    }
  ];
export { searchFormBtns, searchFormItems };
