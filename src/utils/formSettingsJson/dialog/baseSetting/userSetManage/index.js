let addUserContentButton = [
    {
      flag: "save",
      size: "",
      icon: "",
      label: "保存",
      styleType: "primary",
      postUrl: "_data/base/orgemployee/addEmp"
    },
    {
      flag: "cancel",
      size: "",
      icon: "",
      label: "退出",
      styleType: ""
    }
  ],
  editUserContentButton = [
    {
      flag: "save",
      size: "",
      icon: "",
      label: "保存",
      styleType: "primary",
      postUrl: "_data/base/orgemployee/updateEmp"
    },
    {
      flag: "cancel",
      size: "",
      icon: "",
      label: "关闭",
      styleType: ""
    }
  ],
  userContentItems = [
    {
      type: "inputHidden",
      label: "是否员工",
      name: "isEmp",
      span: 12,
      width: "150px",
      disabled: true
    },
    {
      type: "inputHidden",
      label: "操作员id",
      name: "operatorid",
      span: 12,
      width: "150px",
      disabled: true
    },
    {
      type: "input",
      label: "员工登录名",
      name: "userid",
      span: 12,
      width: "150px"
    },
    {
      type: "input",
      label: "员工姓名",
      name: "operatorname",
      span: 12,
      width: "150px"
    },
    {
      type: "input",
      label: "员工代码",
      name: "empcode",
      span: 12,
      width: "150px"
    },
    {
      type: "select",
      label: "性别",
      name: "gender",
      multiple: false,
      placeHolder: "请选择",
      filterable: false,
      data: [
        { label: "男", value: 1 },
        { label: "女", value: 2 },
        { label: "未知", value: 3 }
      ],
      span: 12,
      width: "150px"
    },
    {
      type: "input",
      label: "输入密码",
      name: "password",
      span: 12,
      width: "150px",
      password: true,
      check: "pw"
    },
    {
      type: "input",
      label: "确认密码",
      name: "repassword",
      span: 12,
      width: "150px",
      password: true,
      check: "checkPW"
    },
    {
      type: "elTreeSelect",
      label: "机构",
      name: "orgid",
      filterable: true,
      span: 12,
      width: "150px",
      props: {
        value: "id",
        label: "text",
        children: "children"
      },
      data: []
    },
    {
      type: "input",
      label: "联系电话",
      name: "otel1",
      span: 12,
      width: "150px"
    },
    {
      type: "input",
      label: "电子邮箱",
      name: "oemail",
      span: 12,
      width: "150px"
    },
    {
      type: "date",
      label: "注册时间",
      name: "regdate",
      span: 12,
      dateType: "datetime",
      format: "yyyy-MM-dd",
      valueFormat: "yyyy-MM-dd",
      width: "150px"
    },
    {
      type: "date",
      label: "有效期",
      name: "expiredDt",
      span: 12,
      dateType: "datetime",
      format: "yyyy-MM-dd",
      valueFormat: "yyyy-MM-dd",
      width: "150px"
    },
    {
      type: "transfer",
      label: "角色授权",
      placeholder: "请输入角色名称",
      titles: ["未选择数据", "已选择数据"],
      buttons: ["移除", "添加"],
      name: "roles",
      span: 24,
      transferProps: {
        key: "value",
        label: "label"
      },
      data: [],
      width: "150px"
    },
    {
      type: "transfer",
      label: "分级角色授权",
      placeholder: "请输入角色名称",
      titles: ["未选择数据", "已选择数据"],
      buttons: ["移除", "添加"],
      name: "specialty",
      span: 24,
      transferProps: {
        key: "value",
        label: "label"
      },
      data: [],
      width: "150px"
    }
  ];
export { addUserContentButton, editUserContentButton, userContentItems };
