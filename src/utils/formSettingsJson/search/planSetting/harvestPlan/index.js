let searchFormBtns = [
    {
      flag: "search",
      size: "",
      btnClassName: "searchButtons",
      icon: "iconfont iconsearch text-primary",
      label: "查询",
      postUrl: "getRequisitionCertifyList",
      styleType: ""
    }
  ],
  searchFormItems = [
    {
      type: "input",
      label: "计划单号",
      name: "docNo",
      span: 8,
      width: "80px"
    },
    {
      type: "date",
      label: "单据时间",
      name: "businessDate",
      span: 8,
      dateType: "daterange",
      dateRangeSeparator: "至",
      dateStartPlaceholder: "开始日期",
      dateEndPlaceholder: "结束日期",
      format: "yyyy-MM-dd",
      valueFormat: "yyyy-MM-dd",
      width: "80px"
    },
    {
      type: "select",
      label: "单据状态",
      name: "processinstStatus",
      multiple: false,
      filterable: false,
      data: [],
      span: 8,
      width: "80px"
    },
    {
      type: "select",
      label: "收割基地",
      name: "fpmpBaseLandId",
      multiple: false,
      filterable: false,
      data: [],
      span: 8,
      width: "80px"
    }
  ],
  materialSearchFormBtns = [
    {
      flag: "search",
      size: "",
      btnClassName: "searchButtons",
      icon: "iconfont iconsearch text-primary",
      label: "查询",
      postUrl: "getMaterialSummary",
      styleType: ""
    }
  ],
  materialSearchFormItems = [
    // {
    //   type: "select",
    //   label: "仓房",
    //   name: "storehouseId",
    //   multiple: false,
    //   filterable: true,
    //   data: [],
    //   span: 6,
    //   width: "50px"
    // },
    {
      type: "elTreeSelect",
      label: "物资类别",
      name: "emmsBasMaterialTypeId",
      span: 8,
      width: "80px",
      data: [],
      props: {
        children: "children",
        label: "text",
        value: "id"
      }
    },
    {
      type: "input",
      label: "物资名称",
      name: "emmsBasMaterialName",
      span: 8,
      width: "80px"
    }
  ];
export {
  searchFormBtns,
  searchFormItems,
  materialSearchFormBtns,
  materialSearchFormItems
};
