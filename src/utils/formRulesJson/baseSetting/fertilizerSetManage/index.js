export default {
  fpmpBasUnitId: [
    { required: true, message: "请选择计量单位", trigger: "blur" }
  ],
  name: [{ required: true, message: "请输入肥料名称", trigger: "blur" }],
  type: [{ required: true, message: "请选择肥料类别", trigger: "blur" }],
  dosage: [{ required: true, message: "请输入建议用量", trigger: "blur" }]
};
