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
      label: "单号",
      name: "code",
      span: 8,
      width: "100px"
    },
    {
      type: "date",
      label: "年份",
      name: "reportDate",
      span: 8,
      dateType: "year",
      format: "yyyy",
      valueFormat: "yyyy",
      width: "100px"
    },
    {
      type: "select",
      label: "流程状态",
      name: "status",
      multiple: false,
      placeHolder: "请选择",
      filterable: false,
      data: [
        {
          label: "制单",
          value: "1"
        },
        {
          label: "已启动",
          value: "2"
        },
        {
          label: "已审核",
          value: "3"
        }
      ],
      span: 8,
      width: "100px"
    }
  ];
export { searchFormBtns, searchFormItems };
