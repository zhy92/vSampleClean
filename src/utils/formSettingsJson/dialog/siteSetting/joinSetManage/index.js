let dialogAddButton = [
    {
      flag: "save",
      size: "",
      icon: "",
      label: "保存",
      styleType: "primary",
      postUrl: "insertJoin_joinSetManage"
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
      postUrl: "updateJoin_joinSetManage"
    },
    {
      flag: "cancel",
      size: "",
      icon: "",
      label: "退出",
      styleType: ""
    }
  ],
  dialogContentItems = [
    {
      type: "inputHidden",
      label: "id",
      name: "fpmpJoinApplyId",
      span: 12,
      width: "120px"
    },
    {
      title: "基础信息",
      type: "block",
      span: 24,
      name: "baseMessage",
      children: [
        {
          type: "input",
          label: "申请编号",
          placeholder: "系统自动生成",
          name: "docNo",
          span: 12,
          width: "120px",
          disabled: true
        },
        {
          type: "select",
          label: "申请基地类别",
          name: "baseType",
          placeHolder: "请选择",
          data: [],
          span: 12,
          width: "120px"
        },
        {
          type: "date",
          label: "申请时间",
          name: "businessDate",
          dateType: "datetime",
          format: "yyyy-MM-dd HH:mm:ss",
          valueFormat: "yyyy-MM-dd HH:mm:ss",
          span: 12,
          width: "120px"
        },
        {
          type: "select",
          label: "申请状态",
          name: "processinstStatus",
          placeHolder: "请选择",
          data: [],
          span: 12,
          width: "120px"
        }
      ]
    },

    {
      title: "申请人基本资料",
      type: "block",
      span: 24,
      name: "fpmpJoinApplyPerson",
      children: [
        {
          type: "input",
          label: "姓名",
          name: "fpmpJoinApplyPerson-name",
          span: 12,
          width: "120px"
        },
        {
          type: "select",
          label: "性别",
          name: "fpmpJoinApplyPerson-gender",
          placeHolder: "请选择",
          data: [],
          span: 12,
          width: "120px"
        },
        {
          type: "input",
          label: "年龄",
          name: "fpmpJoinApplyPerson-age",
          span: 12,
          width: "120px"
        },
        {
          type: "select",
          label: "学历",
          name: "fpmpJoinApplyPerson-degree",
          placeHolder: "请选择",
          data: [],
          span: 12,
          width: "120px"
        },
        {
          type: "input",
          label: "身份证号码",
          name: "fpmpJoinApplyPerson-pid",
          span: 12,
          width: "120px"
        },
        {
          type: "input",
          label: "电话",
          name: "fpmpJoinApplyPerson-tel",
          span: 12,
          width: "120px"
        },
        {
          type: "input",
          label: "传真",
          name: "fpmpJoinApplyPerson-fax",
          span: 12,
          width: "120px"
        },
        {
          type: "input",
          label: "手机",
          name: "fpmpJoinApplyPerson-phone",
          span: 12,
          width: "120px"
        },
        {
          type: "input",
          label: "邮编",
          name: "fpmpJoinApplyPerson-zipcode",
          span: 12,
          width: "120px"
        },
        {
          type: "input",
          label: "EMAIL",
          name: "fpmpJoinApplyPerson-email",
          span: 12,
          width: "120px"
        },
        {
          type: "textarea",
          label: "家庭住址",
          name: "fpmpJoinApplyPerson-address",
          span: 24,
          width: "120px"
        }
      ]
    },
    {
      title: "加盟基地信息",
      type: "block",
      span: 24,
      name: "fpmpJoinApplyBase",
      children: [
        {
          type: "input",
          label: "基地面积",
          name: "fpmpJoinApplyBase-area",
          span: 12,
          width: "120px"
        },
        {
          type: "input",
          label: "土地数量",
          name: "fpmpJoinApplyBase-landNum",
          span: 12,
          width: "120px"
        },
        // {
        //   type: "select",
        //   label: "行政区域",
        //   name: "fpmpJoinApplyBase-spDistrict",
        //   placeHolder: "请选择",
        //   data: [],
        //   span: 12,
        //   width: "120px"
        // },
        {
          type: "input",
          label: "行政区域",
          name: "fpmpJoinApplyBase-spDistrict",
          span: 12,
          width: "120px"
        },
        {
          type: "textarea",
          label: "基地地址",
          name: "fpmpJoinApplyBase-address",
          span: 24,
          width: "120px"
        },
        {
          type: "input",
          label: "前茬作物",
          name: "fpmpJoinApplyBase-previousCrop",
          span: 12,
          width: "120px"
        },
        {
          type: "input",
          label: "当前作物",
          name: "fpmpJoinApplyBase-currentCrop",
          span: 12,
          width: "120px"
        },
        {
          type: "input",
          label: "水源情况",
          name: "fpmpJoinApplyBase-waterSources",
          span: 12,
          width: "120px"
        },
        {
          type: "input",
          label: "经度",
          name: "fpmpJoinApplyBase-longitude",
          span: 12,
          width: "120px"
        },
        {
          type: "input",
          label: "纬度",
          name: "fpmpJoinApplyBase-latitude",
          span: 12,
          width: "120px"
        },
        {
          type: "textarea",
          label: "备注",
          name: "fpmpJoinApplyBase-note",
          span: 24,
          width: "120px"
        }
      ]
    }
  ];
export { dialogAddButton, dialogEditButton, dialogContentItems };
