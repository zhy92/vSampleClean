let dialogAddButton = [
    {
      flag: "save",
      size: "",
      icon: "",
      label: "保存",
      styleType: "primary",
      postUrl: "insertSupplier_supplierSetManage"
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
      postUrl: "updateSupplier_supplierSetManage"
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
      name: "fpmpBasSupplierId",
      span: 12,
      width: "110px"
    },
    {
      type: "input",
      label: "供应商编号",
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
      label: "供应商名称",
      name: "name",
      span: 12,
      width: "110px"
    },
    {
      type: "input",
      label: "联系人",
      name: "contact",
      span: 12,
      width: "110px"
    },
    {
      type: "input",
      label: "组织机构代码",
      name: "organizationCode",
      span: 12,
      width: "110px"
    },
    {
      type: "input",
      label: "联系电话",
      name: "telephone",
      span: 12,
      width: "110px"
    },
    {
      type: "input",
      label: "EMAIL",
      name: "email",
      span: 12,
      width: "110px"
    },
    {
      type: "textarea",
      label: "地址",
      name: "address",
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
