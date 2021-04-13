let addRoleButton = [
    {
      flag: "save",
      size: "",
      icon: "",
      label: "保存",
      styleType: "primary",
      postUrl: "_data/base/role/insert"
    },
    {
      flag: "cancel",
      size: "",
      icon: "",
      label: "退出",
      styleType: ""
    }
  ],
  editRoleButton = [
    {
      flag: "save",
      size: "",
      icon: "",
      label: "保存",
      styleType: "primary",
      postUrl: "_data/base/role/update"
    },
    {
      flag: "cancel",
      size: "",
      icon: "",
      label: "退出",
      styleType: ""
    }
  ],
  roleItems = [
    {
      type: "inputHidden",
      label: "启用禁用",
      name: "status",
      span: 24,
      width: "150px"
    },
    {
      type: "inputHidden",
      label: "属于哪个系统",
      name: "sysType",
      span: 24,
      width: "150px"
    },
    {
      type: "input",
      label: "编码",
      name: "roleid",
      span: 12,
      width: "150px"
    },
    {
      type: "input",
      label: "名称",
      name: "rolename",
      span: 12,
      width: "150px"
    },
    {
      type: "select",
      label: "角色分组",
      name: "groupid",
      multiple: false,
      placeHolder: "请选择",
      filterable: false,
      data: [],
      span: 12,
      width: "150px"
    },
    {
      type: "select",
      label: "是否系统角色",
      name: "issysData",
      multiple: false,
      placeHolder: "请选择",
      filterable: false,
      data: [
        {
          label: "否",
          value: "0"
        },
        {
          label: "是",
          value: "1"
        }
      ],
      span: 12,
      width: "150px"
    },
    {
      type: "textarea",
      label: "描述",
      name: "roledesc",
      rows: 3,
      span: 24,
      width: "150px"
    }
  ];
export { addRoleButton, editRoleButton, roleItems };
