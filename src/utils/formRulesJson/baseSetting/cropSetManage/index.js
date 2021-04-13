export default {
  seedVariety: [{ required: true, message: "请选择作物品种", trigger: "blur" }],
  intervalStart: [
    { required: true, message: "请输入生育日数(起)", trigger: "blur" }
  ],
  intervalEnd: [
    { required: true, message: "请输入生育日数(止)", trigger: "blur" }
  ],
  seedType: [{ required: true, message: "请选择作物类型", trigger: "blur" }],
  standardYield: [
    { required: true, message: "请输入标准产量", trigger: "blur" }
  ]
};
