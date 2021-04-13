let addAreaButton = [
    {
      flag: "save",
      size: "",
      icon: "",
      label: "保存",
      styleType: "primary",
      postUrl: "_data/basic/district/addDistrict"
    },
    {
      flag: "cancel",
      size: "",
      icon: "",
      label: "退出",
      styleType: ""
    }
  ],
  editAreaButton = [
    {
      flag: "save",
      size: "",
      icon: "",
      label: "保存",
      styleType: "primary",
      postUrl: "_data/basic/district/update"
    },
    {
      flag: "cancel",
      size: "",
      icon: "",
      label: "退出",
      styleType: ""
    }
  ],
  areaItems = [
    {
      type: "inputHidden",
      label: "父id",
      name: "sysParentcode",
      span: 24,
      width: "150px"
    },
    {
      type: "inputHidden",
      label: "本身id",
      name: "sysId",
      span: 24,
      width: "150px"
    },
    {
      type: "input",
      label: "编码",
      name: "code",
      span: 12,
      width: "150px"
    },
    {
      type: "input",
      label: "名称",
      name: "name",
      span: 12,
      width: "150px"
    },
    {
      type: "input",
      label: "简称",
      name: "shortname",
      span: 12,
      width: "150px"
    },
    {
      type: "input",
      label: "邮编",
      name: "postcode",
      span: 12,
      width: "150px"
    },
    {
      type: "inputNumber",
      label: "排序",
      name: "sortField",
      span: 12,
      width: "150px"
    },
    {
      type: "select",
      label: "状态",
      name: "status",
      multiple: false,
      disabled: true,
      placeHolder: "请选择",
      filterable: false,
      data: [
        {
          label: "启用",
          value: "1"
        },
        {
          label: "禁用",
          value: "2"
        }
      ],
      span: 12,
      width: "150px"
    },
    {
      type: "textarea",
      label: "备注",
      name: "note",
      rows: 3,
      span: 24,
      width: "150px"
    }
  ];
export { addAreaButton, editAreaButton, areaItems };
