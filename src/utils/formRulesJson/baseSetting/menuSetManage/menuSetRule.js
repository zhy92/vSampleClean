export default {
  isleaf: [
    { required: true, message: "请选择是否叶子菜单", trigger: "change" }
  ],
  menuid: [{ required: true, message: "请输入菜单编码", trigger: "blur" }],
  menuname: [{ required: true, message: "请输入菜单名称", trigger: "blur" }],
  sysType: [{ required: true, message: "请选择业务功能", trigger: "change" }],
  isaction: [{ required: true, message: "请选择菜单类型", trigger: "change" }]
  // menumodule: [
  //   { required: true, message: "请输入菜单组件路径", trigger: "blur" }
  // ],
  // menuaction: [{ required: true, message: "请输入菜单路径", trigger: "blur" }]
};
