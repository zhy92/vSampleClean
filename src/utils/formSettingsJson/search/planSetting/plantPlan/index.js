let searchFormBtns = [
    {
      flag: "search",
      size: "",
      btnClassName: "searchButtons",
      icon: "iconfont iconsearch text-primary",
      label: "查询",
      postUrl: "plantPlanPageData",
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
    }
  ],
  baseSearchFormBtns = [
    {
      flag: "search",
      size: "",
      btnClassName: "searchButtons",
      icon: "iconfont iconsearch text-primary",
      label: "查询",
      postUrl: "baseMessageList",
      styleType: ""
    }
  ],
  baseSearchFormItems = [
    {
      type: "select",
      label: "基地类型",
      name: "type",
      multiple: false,
      filterable: false,
      data: [],
      span: 8,
      width: "80px"
    },
    {
      type: "input",
      label: "基地编号",
      name: "code",
      span: 8,
      width: "80px"
    },
    {
      type: "input",
      label: "基地名称",
      name: "name",
      span: 8,
      width: "80px"
    }
  ],
  landsSearchFormBtns = [
    {
      flag: "search",
      size: "",
      btnClassName: "searchButtons",
      icon: "iconfont iconsearch text-primary",
      label: "查询",
      postUrl: "landsMessageList",
      styleType: ""
    }
  ],
  landsSearchFormItems = [
    {
      type: "input",
      label: "请输入土地编号或名称",
      name: "codeOrName ",
      span: 8,
      width: "200px"
    }
  ];
export {
  searchFormBtns,
  searchFormItems,
  baseSearchFormBtns,
  baseSearchFormItems,
  landsSearchFormItems,
  landsSearchFormBtns
};
