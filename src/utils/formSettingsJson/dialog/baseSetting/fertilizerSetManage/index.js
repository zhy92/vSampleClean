let dialogAddButton = [
    {
      flag: "save",
      size: "",
      icon: "",
      label: "保存",
      styleType: "primary",
      postUrl: "insertFertilizer_fertilizerSetManage"
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
      postUrl: "updateFertilizer_fertilizerSetManage"
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
      name: "fpmpBasFertilizerId",
      span: 12,
      width: "80px"
    },
    {
      type: "input",
      label: "肥料编号",
      placeholder: "系统自动生成",
      name: "code",
      span: 12,
      width: "80px",
      disabled: true
    },
    {
      type: "select",
      label: "计量单位",
      name: "fpmpBasUnitId",
      filterable: true,
      placeHolder: "请选择",
      data: [],
      span: 12,
      width: "80px"
    },
    {
      type: "input",
      label: "肥料名称",
      name: "name",
      span: 12,
      width: "80px"
    },
    {
      type: "select",
      label: "状态",
      name: "disabled",
      placeHolder: "请选择",
      data: [
        {
          label: "启用",
          value: "N"
        },
        {
          label: "禁用",
          value: "Y"
        }
      ],
      span: 12,
      width: "80px"
    },
    {
      type: "select",
      label: "肥料类别",
      name: "type",
      filterable: true,
      placeHolder: "请选择",
      data: [],
      span: 12,
      width: "80px"
    },
    {
      type: "input",
      label: "建议用量",
      name: "dosage",
      span: 12,
      width: "80px"
    },
    {
      type: "textarea",
      label: "肥料说明",
      name: "fertilizerExplain",
      span: 24,
      width: "80px"
    },
    {
      type: "textarea",
      label: "备注",
      name: "note",
      span: 24,
      width: "80px"
    }
  ];
export { dialogAddButton, dialogEditButton, dialogContentItems };
