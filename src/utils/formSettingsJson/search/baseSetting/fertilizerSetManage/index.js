let searchFormBtns = [
    {
      flag: "search",
      size: "",
      btnClassName: "searchButtons",
      icon: "iconfont iconsearch text-primary",
      label: "查询",
      postUrl: "getFertilizerListPage_fertilizerSetManage",
      styleType: ""
    }
  ],
  searchFormItems = [
    {
      type: "input",
      label: "肥料编号",
      name: "code",
      span: 6,
      width: "80px"
    },
    {
      type: "input",
      label: "肥料名称",
      name: "name",
      span: 6,
      width: "80px"
    },
    {
      type: "select",
      label: "状态",
      name: "disabled",
      span: 6,
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
    },
    {
      type: "select",
      label: "肥料类别",
      name: "type",
      span: 6,
      width: "80px",
      data: [
        {
          value: "1",
          label: "类别1"
        },
        {
          value: "2",
          label: "类别2"
        }
      ]
    }
  ];
export { searchFormBtns, searchFormItems };
