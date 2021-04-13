let addTaskButton = [
    {
      flag: "save",
      size: "",
      icon: "",
      label: "保存",
      styleType: "primary",
      postUrl: "_data/frame/task/add"
    },
    {
      flag: "cancel",
      size: "",
      icon: "",
      label: "退出",
      styleType: ""
    }
  ],
  editTaskButton = [
    {
      flag: "save",
      size: "",
      icon: "",
      label: "保存",
      styleType: "primary",
      postUrl: "_data/frame/task/update"
    },
    {
      flag: "cancel",
      size: "",
      icon: "",
      label: "退出",
      styleType: ""
    }
  ],
  taskContentItems = [
    {
      type: "inputHidden",
      label: "id",
      name: "scheduleTaskId",
      span: 12,
      width: "120px"
    },
    {
      type: "input",
      label: "任务名称",
      name: "name",
      span: 12,
      width: "120px"
    },
    {
      type: "input",
      label: "任务分组",
      name: "group",
      span: 12,
      width: "120px"
    },
    {
      type: "input",
      label: "调用目标类名",
      name: "jobClass",
      span: 12,
      width: "120px"
    },
    {
      type: "select",
      label: "是否启用",
      name: "enabled",
      placeHolder: "请选择",
      data: [
        {
          label: "启用",
          value: "1"
        },
        {
          label: "禁用",
          value: "0"
        }
      ],
      span: 12,
      width: "120px"
    },
    {
      type: "select",
      label: "表达式类型",
      name: "expressionType",
      linkName: "expressionType",
      placeHolder: "请选择",
      data: [
        {
          label: "cron表达式",
          value: "0"
        },
        {
          label: "简单表达式",
          value: "1"
        }
      ],
      span: 12,
      width: "120px"
    },
    {
      type: "inputGroup",
      label: "cron表达式",
      name: "cronExpression",
      span: 12,
      width: "120px",
      buttonContent: "corn参考",
      clickName: "cronExpression"
    },
    {
      hideItem: true,
      type: "select",
      label: "启动时间",
      name: "selectStartTime",
      linkName: "selectStartTime",
      placeHolder: "请选择",
      data: [
        {
          label: "立即启动",
          value: "0"
        },
        {
          label: "选择时间",
          value: "1"
        }
      ],
      span: 12,
      width: "120px"
    },
    {
      hideItem: true,
      type: "date",
      label: "具体时间",
      name: "simpleExpressionStartdate",
      span: 12,
      dateType: "dateTime",
      format: "yyyy-MM-dd HH:mm:ss",
      valueFormat: "yyyy-MM-dd HH:mm:ss",
      width: "120px"
    },
    {
      hideItem: true,
      type: "input",
      label: "间隔时间",
      name: "simpleExpressionInterval",
      span: 12,
      width: "120px"
    },
    {
      hideItem: true,
      type: "select",
      label: "间隔单位",
      name: "selectIntervalTime",
      placeHolder: "请选择",
      data: [
        {
          label: "毫秒",
          value: "1"
        },
        {
          label: "秒",
          value: "1000"
        },
        {
          label: "分",
          value: "60000"
        },
        {
          label: "小时",
          value: "3600000"
        },
        {
          label: "天",
          value: "86400000"
        },
        {
          label: "周",
          value: "604800000"
        }
      ],
      span: 12,
      width: "120px"
    },
    {
      hideItem: true,
      type: "input",
      label: "执行次数",
      name: "simpleExpressionTimes",
      span: 12,
      width: "120px",
      placeholder: "当为0或空时永久执行"
    },
    {
      type: "textarea",
      label: "任务描述",
      name: "description",
      rows: 3,
      span: 24,
      width: "120px"
    },
    {
      type: "textarea",
      label: "额外参数",
      name: "params",
      rows: 3,
      span: 24,
      width: "120px",
      placeholder:
        "额外的参数，使用键值对利用&隔开。例如：param = 1 &param2 = 2 &param3 = 3"
    }
  ];
export { addTaskButton, editTaskButton, taskContentItems };
