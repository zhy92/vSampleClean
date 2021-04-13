let addDictListItems = [
    {
      type: "input",
      label: "编码",
      name: "busintypeid",
      span: 12,
      width: "150px"
    },
    {
      type: "input",
      label: "名称",
      name: "busintypename",
      span: 12,
      width: "150px"
    },
    {
      type: "select",
      label: "是否树形",
      name: "isTree",
      multiple: false,
      placeHolder: "请选择",
      filterable: false,
      data: [
        {
          label: "是",
          value: "1"
        },
        {
          label: "否",
          value: "0"
        }
      ],
      span: 12,
      width: "150px"
    },
    {
      type: "select",
      label: "维护方式",
      name: "maintainanceMode",
      multiple: false,
      placeHolder: "请选择",
      filterable: false,
      data: [],
      span: 12,
      width: "150px"
    },
    {
      type: "select",
      label: "系统类型",
      name: "sysType",
      multiple: false,
      placeHolder: "请选择",
      filterable: false,
      data: [],
      span: 12,
      width: "150px"
    }
  ],
  addDictListButton = [
    {
      flag: "save",
      size: "",
      icon: "",
      label: "保存",
      styleType: "primary",
      postUrl: "_data/basic/busintype/insert"
    },
    {
      flag: "cancel",
      size: "",
      icon: "",
      label: "退出",
      styleType: ""
    }
  ],
  dictContentItems = [
    {
      type: "inputHidden",
      label: "父id",
      name: "busintypeid",
      span: 24,
      width: "150px"
    },
    {
      type: "inputHidden",
      label: "本身id",
      name: "dicId",
      span: 24,
      width: "150px"
    },
    {
      type: "input",
      label: "编码",
      name: "businid",
      span: 12,
      width: "150px"
    },
    {
      type: "input",
      label: "名称",
      name: "businname",
      span: 12,
      width: "150px"
    },
    {
      type: "select",
      label: "是否预留",
      name: "reserved",
      multiple: false,
      placeHolder: "请选择",
      filterable: false,
      data: [
        {
          label: "是",
          value: "Y"
        },
        {
          label: "否",
          value: "N"
        }
      ],
      span: 12,
      width: "150px"
    },
    {
      type: "input",
      label: "排序",
      name: "sortField",
      span: 12,
      width: "150px"
    },
    {
      type: "input",
      label: "过滤值",
      name: "privilege",
      span: 12,
      width: "150px"
    },
    {
      type: "select",
      label: "状态",
      name: "status",
      multiple: false,
      placeHolder: "请选择",
      filterable: false,
      data: [
        {
          label: "有效",
          value: "0"
        },
        {
          label: "无效",
          value: "1"
        }
      ],
      span: 12,
      width: "150px"
    },
    {
      type: "elTreeSelect",
      label: "上级字典",
      name: "parentId",
      filterable: true,
      hideItem: true,
      span: 12,
      width: "150px",
      props: {
        value: "id",
        label: "text",
        children: "children",
        choseOnlyLeaf: false
      },
      data: []
    }
  ],
  addDictContentButton = [
    {
      flag: "dictContentSave",
      size: "",
      icon: "",
      label: "保存",
      styleType: "primary",
      postUrl: "_data/basic/dictionary/addDic"
    },
    {
      flag: "cancel",
      size: "",
      icon: "",
      label: "退出",
      styleType: ""
    }
  ],
  editDictContentButton = [
    {
      flag: "dictContentSave",
      size: "",
      icon: "",
      label: "保存",
      styleType: "primary",
      postUrl: "_data/basic/dictionary/updateDic"
    },
    {
      flag: "cancel",
      size: "",
      icon: "",
      label: "退出",
      styleType: ""
    }
  ];
export {
  addDictListItems,
  addDictListButton,
  dictContentItems,
  addDictContentButton,
  editDictContentButton
};
