let addButton = [
    {
      flag: "save",
      size: "",
      icon: "",
      label: "保存",
      styleType: "primary",
      postUrl: "_data/bas/planting/plan/insert"
    },
    {
      flag: "submit",
      label: "送审",
      size: "small",
      icon: "",
      styleType: "primary",
      postUrl: "_data/doc/requisition/add"
    },
    {
      flag: "cancel",
      size: "",
      icon: "",
      label: "取消",
      styleType: ""
    }
  ],
  editButton = [
    {
      flag: "save",
      size: "",
      icon: "",
      label: "保存",
      styleType: "primary",
      postUrl: "_data/bas/planting/plan/update"
    },
    {
      flag: "submit",
      label: "送审",
      size: "small",
      icon: "",
      styleType: "primary",
      postUrl: "_data/doc/requisition/updateById"
    },
    {
      flag: "cancel",
      size: "",
      icon: "",
      label: "取消",
      styleType: ""
    }
  ],
  contentItems = [
    {
      type: "inputHidden",
      label: "id",
      name: "fpmpPlanPlantingId",
      span: 12,
      width: "120px"
    },
    {
      type: "input",
      label: "计划单号",
      name: "docNo",
      span: 12,
      width: "120px",
      disabled: true
    },
    {
      type: "date",
      label: "计划日期",
      name: "businessDate",
      span: 12,
      dateType: "date",
      format: "yyyy-MM-dd",
      valueFormat: "yyyy-MM-dd",
      width: "120px"
    },
    {
      type: "select",
      label: "单据状态",
      name: "processinstStatus",
      multiple: false,
      filterable: false,
      data: [],
      span: 12,
      width: "120px",
      disabled: true
    },
    {
      type: "input",
      label: "主题",
      name: "title",
      span: 24,
      width: "120px"
    },
    {
      type: "textarea",
      label: "备注",
      name: "note",
      rows: 3,
      span: 24,
      width: "120px",
      placeholder: ""
    }
  ],
  choiceBasePageBtn = [
    {
      flag: "import",
      size: "",
      icon: "",
      label: "导入",
      styleType: "primary",
      postUrl: ""
    },
    {
      flag: "cancel",
      size: "",
      icon: "",
      label: "取消",
      styleType: ""
    }
  ],
  choiceLandsPageBtn = [
    {
      flag: "import",
      size: "",
      icon: "",
      label: "导入",
      styleType: "primary",
      postUrl: ""
    },
    {
      flag: "cancel",
      size: "",
      icon: "",
      label: "取消",
      styleType: ""
    }
  ];
export {
  addButton,
  editButton,
  contentItems,
  choiceBasePageBtn,
  choiceLandsPageBtn
};
