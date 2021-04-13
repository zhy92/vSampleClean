export default {
  userid: [{ required: true, message: "请输入登录名", trigger: "blur" }],
  operatorname: [
    { required: true, message: "请输入员工名称", trigger: "blur" }
  ],
  orgid: [{ required: true, message: "请选择机构", trigger: "change" }]
};
