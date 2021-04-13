export default {
  roleid: [{ required: true, message: "请输入编码", trigger: "blur" }],
  rolename: [{ required: true, message: "请输入名称", trigger: "blur" }],
  issysData: [
    { required: true, message: "请选择是否系统角色", trigger: "change" }
  ]
};
