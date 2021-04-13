export default {
  code: [{ required: true, message: "请输入编码", trigger: "blur" }],
  name: [{ required: true, message: "请输入名称", trigger: "blur" }],
  sortField: [
    { required: true, message: "请输入排序(只能输入数字)", trigger: "blur" }
  ]
};
