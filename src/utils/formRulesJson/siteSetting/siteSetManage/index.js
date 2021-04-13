let dialogContentItemsRule = {
    type: [{ required: true, message: "请选择基地类别", trigger: "blur" }],
    name: [{ required: true, message: "请输入基地名称", trigger: "blur" }],
    area: [{ required: true, message: "请输入基地面积", trigger: "blur" }],
    spDistrict: [
      { required: true, message: "请选择行政区划", trigger: "blur" }
    ],
    address: [{ required: true, message: "请输入基地地址", trigger: "blur" }],
    baseManager: [
      { required: true, message: "请选择基地负责人", trigger: "blur" }
    ],
    inspectManager: [
      { required: true, message: "请选择田检负责人", trigger: "blur" }
    ],
    technicalDirector: [
      { required: true, message: "请选择技术负责人", trigger: "blur" }
    ],
    longitude: [{ required: true, message: "请输入经度", trigger: "blur" }],
    latitude: [{ required: true, message: "请输入纬度", trigger: "blur" }]
  },
  dialogGroundContentItemsRule = {
    name: [{ required: true, message: "请输入土地名称", trigger: "blur" }],
    plantingStatus: [
      { required: true, message: "请选择种植状态", trigger: "blur" }
    ],
    area: [{ required: true, message: "请输入种植面积", trigger: "blur" }],
    landManager: [{ required: true, message: "请选择责任人", trigger: "blur" }],
    pic: [{ required: true, message: "请输入土地名称", trigger: "blur" }]
  },
  dialogMachineryContentItemsRule = {
    fpmpBasMachineryId: [
      { required: true, message: "请选择设备名称", trigger: "blur" }
    ],
    num: [{ required: true, message: "请输入数量", trigger: "blur" }]
  };
export {
  dialogContentItemsRule,
  dialogGroundContentItemsRule,
  dialogMachineryContentItemsRule
};
