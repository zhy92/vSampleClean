export default {
  orgtypeid: [{ required: true, message: "请选择机构类型", trigger: "change" }],
  orgname: [{ required: true, message: "请输入机构名称", trigger: "blur" }],
  district: [{ required: true, message: "请选择管理区域", trigger: "change" }],
  districtLevel: [
    { required: true, message: "请选择行政级别", trigger: "change" }
  ]
};
