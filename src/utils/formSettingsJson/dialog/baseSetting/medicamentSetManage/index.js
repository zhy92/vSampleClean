let dialogAddButton = [
    {
      flag: "save",
      size: "",
      icon: "",
      label: "保存",
      styleType: "primary",
      postUrl: "insertMedicament_medicamentSetManage"
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
      postUrl: "updateMedicament_medicamentSetManage"
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
      name: "fpmpBasMedicamentId",
      span: 12,
      width: "80px"
    },
    {
      type: "input",
      label: "药剂编号",
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
      placeHolder: "请选择",
      data: [
        {
          label: "千克",
          value: "037103E8F5AA4DB2BAE3D6A7130CA25F\n"
        }
      ],
      span: 12,
      width: "80px"
    },
    {
      type: "input",
      label: "药剂名称",
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
      type: "input",
      label: "建议用量",
      name: "dosage",
      span: 12,
      width: "80px"
    },
    {
      type: "textarea",
      label: "药剂说明",
      name: "medicamentExplain",
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
