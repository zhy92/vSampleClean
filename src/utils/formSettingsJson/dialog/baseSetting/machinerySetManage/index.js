let dialogAddButton = [
    {
      flag: "save",
      size: "",
      icon: "",
      label: "保存",
      styleType: "primary",
      postUrl: "insertMachinery_machinerySetManage"
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
      postUrl: "updateMachinery_machinerySetManage"
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
      name: "fpmpBasMachineryId",
      span: 12,
      width: "110px"
    },
    {
      type: "input",
      label: "设备编号",
      placeholder: "系统自动生成",
      name: "code",
      span: 12,
      width: "110px",
      disabled: true
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
      width: "110px"
    },
    {
      type: "input",
      label: "设备名称",
      name: "name",
      span: 12,
      width: "110px"
    },
    {
      type: "input",
      label: "设备型号",
      name: "model",
      span: 12,
      width: "110px"
    },
    {
      type: "input",
      label: "外形尺寸",
      name: "dimensions",
      span: 12,
      width: "110px"
    },
    {
      type: "input",
      label: "作业效率",
      name: "efficiency",
      span: 12,
      width: "110px"
    },
    {
      type: "textarea",
      label: "设备说明",
      name: "machineryExplain",
      span: 24,
      width: "110px"
    },
    {
      type: "textarea",
      label: "备注",
      name: "note",
      span: 24,
      width: "110px"
    }
  ];
export { dialogAddButton, dialogEditButton, dialogContentItems };
