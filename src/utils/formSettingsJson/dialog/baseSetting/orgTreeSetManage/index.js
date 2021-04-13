let orgContentItems = [
    {
      type: "inputHidden",
      label: "上级菜单",
      name: "parentsid",
      span: 24,
      width: "150px"
    },
    {
      type: "input",
      label: "菜单编码",
      name: "menuid",
      span: 12,
      width: "150px"
    },
    {
      type: "input",
      label: "菜单名称",
      name: "menuname",
      span: 12,
      width: "150px"
    },
    {
      type: "select",
      label: "是否叶子菜单",
      name: "isleaf",
      multiple: false,
      placeHolder: "请选择",
      filterable: false,
      data: [
        {
          label: "叶子菜单",
          value: "Y"
        },
        {
          label: "非叶子菜单",
          value: "N"
        }
      ],
      span: 12,
      width: "150px"
    },
    {
      type: "select",
      label: "业务功能",
      name: "sysType",
      multiple: false,
      placeHolder: "请选择",
      filterable: false,
      data: [],
      span: 12,
      width: "150px"
    },
    {
      type: "select",
      label: "菜单类型",
      name: "isaction",
      multiple: false,
      placeHolder: "请选择",
      filterable: false,
      data: [
        {
          label: "资源",
          value: "1"
        },
        {
          label: "菜单",
          value: "0"
        },
        {
          label: "App",
          value: "2"
        }
      ],
      span: 12,
      width: "150px"
    },
    {
      type: "textarea",
      label: "菜单路径",
      name: "menuaction",
      rows: 3,
      span: 24,
      width: "150px"
    },
    {
      type: "input",
      label: "菜单组件路径",
      name: "menumodule",
      span: 24,
      width: "150px"
    },
    {
      type: "inputNumber",
      label: "显示顺序",
      name: "displayorder",
      span: 12,
      width: "150px"
    },
    {
      type: "select",
      label: "菜单状态",
      name: "status",
      multiple: false,
      placeHolder: "请选择",
      filterable: false,
      disabled: true,
      data: [
        {
          label: "启用",
          value: "1"
        },
        {
          label: "禁用",
          value: "0"
        }
      ],
      span: 12,
      width: "150px"
    },
    {
      type: "input",
      label: "图片路径",
      name: "menuview",
      span: 24,
      width: "150px"
    }
  ],
  addOrgContentButton = [
    {
      flag: "save",
      size: "",
      icon: "",
      label: "保存",
      styleType: "primary",
      postUrl: "_data/base/menu/addmenu"
    },
    {
      flag: "cancel",
      size: "",
      icon: "",
      label: "退出",
      styleType: ""
    }
  ],
  editOrgContentButton = [
    {
      flag: "save",
      size: "",
      icon: "",
      label: "保存",
      styleType: "primary",
      postUrl: "_data/base/menu/updateMenu"
    },
    {
      flag: "cancel",
      size: "",
      icon: "",
      label: "退出",
      styleType: ""
    }
  ];
export { orgContentItems, addOrgContentButton, editOrgContentButton };
