let dialogAddButton = [
    {
      flag: "save",
      size: "",
      icon: "",
      label: "保存",
      styleType: "primary",
      postUrl: "insertSite_siteSetManage"
    },
    {
      flag: "cancel",
      size: "",
      icon: "",
      label: "退出",
      styleType: ""
    }
  ],
  dialogEditButton = [
    {
      flag: "save",
      size: "",
      icon: "",
      label: "保存",
      styleType: "primary",
      postUrl: "updateSite_siteSetManage"
    },
    {
      flag: "cancel",
      size: "",
      icon: "",
      label: "退出",
      styleType: ""
    }
  ],
  dialogGroundAddButton = [
    {
      flag: "save",
      size: "",
      icon: "",
      label: "保存",
      styleType: "primary",
      postUrl: "insertSiteGround_siteGroundSetManage",
      module: "childDialog"
    },
    {
      flag: "cancel",
      size: "",
      icon: "",
      label: "退出",
      styleType: "",
      module: "childDialog"
    }
  ],
  dialogGroundEditButton = [
    {
      flag: "save",
      size: "",
      icon: "",
      label: "保存",
      styleType: "primary",
      postUrl: "updateSiteGround_siteGroundSetManage",
      module: "childDialog"
    },
    {
      flag: "cancel",
      size: "",
      icon: "",
      label: "退出",
      styleType: "",
      module: "childDialog"
    }
  ],
  dialogMachineryAddButton = [
    {
      flag: "save",
      size: "",
      icon: "",
      label: "保存",
      styleType: "primary",
      postUrl: "insertSiteMachinery_siteMachinerySetManage",
      module: "childDialog"
    },
    {
      flag: "cancel",
      size: "",
      icon: "",
      label: "退出",
      styleType: "",
      module: "childDialog"
    }
  ],
  dialogMachineryEditButton = [
    {
      flag: "save",
      size: "",
      icon: "",
      label: "保存",
      styleType: "primary",
      postUrl: "updateSiteMachinery_siteMachinerySetManage",
      module: "childDialog"
    },
    {
      flag: "cancel",
      size: "",
      icon: "",
      label: "退出",
      styleType: "",
      module: "childDialog"
    }
  ],
  dialogContentItems = [
    {
      type: "inputHidden",
      label: "id",
      name: "fpmpBasBaseId",
      span: 12,
      width: "100px"
    },
    {
      type: "input",
      label: "基地编号",
      placeholder: "系统自动生成",
      name: "code",
      span: 12,
      width: "100px",
      disabled: true
    },
    {
      type: "select",
      label: "基地类别",
      name: "type",
      placeHolder: "请选择",
      data: [],
      span: 12,
      width: "100px"
    },
    {
      type: "input",
      label: "基地名称",
      name: "name",
      span: 12,
      width: "100px"
    },
    {
      type: "input",
      label: "基地面积",
      name: "area",
      span: 12,
      width: "100px"
    },
    {
      type: "select",
      label: "行政区划",
      name: "spDistrict",
      placeHolder: "请选择",
      data: [],
      span: 12,
      width: "100px"
    },
    {
      type: "select",
      label: "状态",
      name: "disabled",
      placeHolder: "请选择",
      data: [
        {
          label: "启用",
          value: "N"
        },
        {
          label: "禁用",
          value: "Y"
        }
      ],
      span: 12,
      width: "100px"
    },
    {
      type: "textarea",
      label: "基地地址",
      name: "address",
      span: 24,
      width: "100px"
    },
    {
      type: "select",
      label: "基地负责人",
      name: "baseManager",
      filterable: true,
      placeHolder: "请选择",
      data: [],
      span: 12,
      width: "100px"
    },
    {
      type: "select",
      label: "田检负责人",
      name: "inspectManager",
      filterable: true,
      placeHolder: "请选择",
      data: [],
      span: 12,
      width: "100px"
    },
    {
      type: "select",
      label: "技术负责人",
      name: "technicalDirector",
      filterable: true,
      placeHolder: "请选择",
      data: [],
      span: 12,
      width: "100px"
    },
    {
      type: "input",
      label: "经度",
      name: "longitude",
      span: 12,
      width: "100px"
    },
    {
      type: "input",
      label: "纬度",
      name: "latitude",
      span: 12,
      width: "100px"
    },
    {
      type: "input",
      label: "前茬作物",
      name: "previousCrop",
      span: 12,
      width: "100px"
    },
    {
      type: "select",
      label: "当前作物",
      name: "currentCrop",
      placeHolder: "请选择",
      data: [],
      span: 12,
      width: "100px"
    },
    {
      type: "input",
      label: "水源情况",
      name: "waterSources",
      span: 12,
      width: "100px"
    },
    {
      type: "textarea",
      label: "备注",
      name: "note",
      span: 24,
      width: "100px"
    }
  ],
  dialogGroundContentItems = [
    {
      type: "inputHidden",
      label: "fpmpBasBaseId",
      name: "fpmpBasBaseId",
      span: 12,
      width: "100px"
    },
    {
      type: "inputHidden",
      label: "fpmpBaseLandId",
      name: "fpmpBaseLandId",
      span: 12,
      width: "100px"
    },
    // {
    //   type: "input",
    //   label: "土地编号",
    //   placeholder: "系统自动生成",
    //   name: "code",
    //   span: 12,
    //   width: "100px",
    //   disabled: true
    // },
    {
      type: "input",
      label: "土地名称",
      name: "name",
      span: 12,
      width: "100px"
    },
    {
      type: "input",
      label: "PH值",
      name: "landPh",
      span: 12,
      width: "100px"
    },
    {
      type: "input",
      label: "前茬作物",
      name: "previousCrop",
      span: 12,
      width: "100px"
    },
    {
      type: "input",
      label: "总镉(毫克)",
      name: "landCd",
      span: 12,
      width: "100px"
    },
    {
      type: "select",
      label: "种植状态",
      name: "plantingStatus",
      data: [{ label: "空闲", value: "1" }, { label: "种植", value: "2" }],
      span: 12,
      width: "100px"
    },
    {
      type: "input",
      label: "总汞(毫克)",
      name: "landHg",
      span: 12,
      width: "100px"
    },
    {
      type: "select",
      label: "当前作物",
      name: "currentCrop",
      data: [],
      span: 12,
      width: "100px"
    },
    {
      type: "input",
      label: "总砷(毫克)",
      name: "landAs",
      span: 12,
      width: "100px"
    },
    {
      type: "input",
      label: "种植面积",
      name: "area",
      span: 12,
      width: "100px"
    },
    {
      type: "input",
      label: "总铅(毫克)",
      name: "landPb",
      span: 12,
      width: "100px"
    },
    {
      type: "select",
      label: "责任人",
      name: "landManager",
      filterable: true,
      data: [],
      span: 12,
      width: "100px"
    },
    {
      type: "input",
      label: "总铬(毫克)",
      name: "landCr",
      span: 12,
      width: "100px"
    },
    {
      type: "select",
      label: "田检负责人",
      name: "inspectManager",
      filterable: true,
      data: [],
      span: 12,
      width: "100px"
    },
    {
      type: "select",
      label: "状态",
      name: "disabled",
      data: [
        {
          label: "启用",
          value: "N"
        },
        {
          label: "禁用",
          value: "Y"
        }
      ],
      span: 12,
      width: "100px"
    },
    {
      type: "input",
      label: "平面图",
      name: "pic",
      span: 24,
      width: "100px"
    }
  ],
  dialogMachineryContentItems = [
    {
      type: "inputHidden",
      label: "fpmpBasBaseId",
      name: "fpmpBasBaseId",
      span: 12,
      width: "100px"
    },
    {
      type: "inputHidden",
      label: "fpmpBasBaseMachineryId",
      name: "fpmpBasBaseMachineryId",
      span: 12,
      width: "100px"
    },
    {
      type: "select",
      label: "设备名称",
      name: "fpmpBasMachineryId",
      filterable: true,
      linkName: "fpmpBasMachineryId",
      data: [],
      span: 12,
      width: "100px"
    },
    {
      type: "input",
      label: "设备型号",
      name: "model",
      span: 12,
      width: "100px",
      disabled: true
    },
    {
      type: "input",
      label: "外形尺寸",
      name: "dimensions",
      span: 12,
      width: "100px",
      disabled: true
    },
    {
      type: "input",
      label: "作业效率",
      name: "efficiency",
      span: 12,
      width: "100px",
      disabled: true
    },
    {
      type: "inputNumber",
      label: "数量",
      name: "num",
      span: 12,
      width: "100px"
    },
    {
      type: "textarea",
      label: "设备说明",
      name: "machineryExplain",
      span: 24,
      width: "100px",
      disabled: true
    }
  ];
export {
  dialogAddButton,
  dialogEditButton,
  dialogGroundAddButton,
  dialogGroundEditButton,
  dialogMachineryAddButton,
  dialogMachineryEditButton,
  dialogContentItems,
  dialogGroundContentItems,
  dialogMachineryContentItems
};
