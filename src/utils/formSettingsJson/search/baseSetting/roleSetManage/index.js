let searchFormBtns = [
    {
      flag: "search",
      size: "",
      icon: "",
      label: "查询",
      styleType: "primary",
      postUrl: "getRoleList"
    }
  ],
  searchFormItems = [
    {
      type: "input",
      label: "角色编码",
      name: "roleid",
      span: 8,
      width: "100px"
    },
    {
      type: "input",
      label: "角色名称",
      name: "rolename",
      span: 8,
      width: "100px"
    },
    {
      type: "select",
      label: "角色分组",
      name: "groupid",
      multiple: false,
      placeHolder: "请选择",
      filterable: false,
      data: [],
      span: 8,
      width: "100px"
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
      span: 8,
      width: "100px"
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
          label: "启用",
          value: "1"
        },
        {
          label: "禁用",
          value: "0"
        }
      ],
      span: 8,
      width: "100px"
    }
  ],
  userSearchFormItems = [
    {
      type: "input",
      label: "登录名",
      name: "userid",
      span: 12,
      width: "100px"
    },
    {
      type: "input",
      label: "真实姓名",
      name: "operatorname",
      span: 12,
      width: "100px"
    },
    {
      type: "elTreeSelect",
      label: "机构",
      name: "orgid",
      filterable: true,
      span: 12,
      width: "100px",
      props: {
        value: "id",
        label: "text",
        children: "children",
        choseOnlyLeaf: false
      },
      data: []
    }
  ],
  userSearchFormBtns = [
    {
      flag: "search",
      size: "",
      icon: "",
      label: "查询",
      styleType: "primary",
      postUrl: "getUserList"
    }
  ];
export {
  searchFormBtns,
  searchFormItems,
  userSearchFormItems,
  userSearchFormBtns
};
