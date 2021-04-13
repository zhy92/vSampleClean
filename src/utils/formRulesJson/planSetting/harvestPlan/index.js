import { number } from "../../validator";

export default {
  businessDate: [
    { required: true, message: "请选择单据日期", trigger: "blur" }
  ],
  storeOrgId: [
    { required: true, message: "请选择承储单位", trigger: "change" }
  ],
  storepointId: [{ required: true, message: "请选择库点", trigger: "change" }],
  transport: [{ required: true, message: "请选择运输工具", trigger: "change" }],
  destination: [{ required: true, message: "请输入送达地点", trigger: "blur" }],
  num: [
    { required: true, message: "请输入调拨数量", trigger: "blur" },
    { validator: number, trigger: "blur" }
  ]
};
