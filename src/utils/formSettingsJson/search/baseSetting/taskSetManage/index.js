let searchFormBtns = [
    {
      flag: "search",
      size: "",
      icon: "",
      label: "查询",
      styleType: "primary",
      postUrl: "getTaskList"
    }
  ],
  searchFormItems = [
    {
      type: "input",
      label: "任务名称",
      name: "name",
      span: 8,
      width: "100px"
    },
    {
      type: "input",
      label: "任务分组",
      name: "group",
      span: 8,
      width: "100px"
    },
    {
      type: "select",
      label: "状态",
      name: "enabled",
      span: 8,
      width: "100px",
      data: [
        {
          value: "0",
          label: "禁用"
        },
        {
          value: "1",
          label: "启用"
        }
      ]
    }
  ];
export { searchFormBtns, searchFormItems };
