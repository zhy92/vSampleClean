export default {
  name: [{ required: true, message: "请输入任务名称", trigger: "blur" }],
  group: [{ required: true, message: "请输入任务分组", trigger: "blur" }],
  jobClass: [
    { required: true, message: "请输入调用目标类名", trigger: "blur" }
  ],
  selectStartTime: [
    {
      required: true,
      message: "请选择启动时间方式",
      trigger: "change"
    }
  ]
};
