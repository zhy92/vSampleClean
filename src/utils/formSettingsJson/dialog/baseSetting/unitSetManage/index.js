let dialogAddButton = [
    {
      flag: "save",
      size: "",
      icon: "",
      label: "保存",
      styleType: "primary",
      postUrl: "insertUnit_unitSetManage"
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
      postUrl: "updateUnit_unitSetManage"
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
      name: "fpmpBasUnitId",
      span: 12,
      width: "110px"
    },
    {
      type: "input",
      label: "计量单位编号",
      placeholder: "系统自动生成",
      name: "code",
      span: 12,
      width: "110px",
      disabled: true
    },
    {
      type: "input",
      label: "计量单位名称",
      name: "name",
      span: 12,
      width: "110px"
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
    }
  ];
export { dialogAddButton, dialogEditButton, dialogContentItems };
