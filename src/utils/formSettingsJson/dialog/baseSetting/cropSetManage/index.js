let dialogAddButton = [
    {
      flag: "save",
      size: "",
      icon: "",
      label: "保存",
      styleType: "primary",
      postUrl: "insertCrop_cropSetManage"
    },
    {
      flag: "cancel",
      size: "",
      icon: "",
      label: "退出",
      styleType: ""
    }
  ],
  dialogEditButton = [
    {
      flag: "save",
      size: "",
      icon: "",
      label: "保存",
      styleType: "primary",
      postUrl: "updateCrop_cropSetManage"
    },
    {
      flag: "cancel",
      size: "",
      icon: "",
      label: "退出",
      styleType: ""
    }
  ],
  dialogContentItems = [
    {
      type: "inputHidden",
      label: "id",
      name: "fpmpBasGrainseedId",
      span: 12,
      width: "140px"
    },
    {
      type: "inputHidden",
      label: "wmsBasGrainseedId",
      name: "wmsBasGrainseedId",
      span: 12,
      width: "140px"
    },
    {
      type: "input",
      label: "粮食品种",
      name: "corpType__dsp",
      span: 12,
      width: "140px",
      disabled: true
    },
    {
      type: "input",
      label: "种植品种编号",
      name: "corpCode",
      span: 12,
      width: "140px",
      disabled: true
    },
    {
      type: "input",
      label: "种植品种名称",
      name: "wmsBasGrainseed__dsp",
      span: 12,
      width: "140px",
      disabled: true
    },
    {
      type: "select",
      label: "作物品种",
      name: "seedVariety",
      filterable: true,
      placeHolder: "请选择",
      data: [],
      span: 12,
      width: "140px"
    },
    {
      type: "inputNumber",
      label: "生育日数(起)",
      name: "intervalStart",
      linkName: "intervalStart",
      span: 12,
      width: "140px"
    },
    {
      type: "inputNumber",
      label: "生育日数(止)",
      name: "intervalEnd",
      linkName: "intervalEnd",
      span: 12,
      width: "140px"
    },
    {
      type: "select",
      label: "作物类型",
      name: "seedType",
      filterable: true,
      placeHolder: "请选择",
      data: [],
      span: 12,
      width: "140px"
    },
    {
      type: "inputNumber",
      label: "标准产量(亩/公斤)",
      name: "standardYield",
      span: 12,
      width: "140px"
    },
    {
      type: "textarea",
      label: "作物说明",
      name: "grainseedExplain",
      span: 24,
      width: "140px"
    }
  ];
export { dialogAddButton, dialogEditButton, dialogContentItems };
