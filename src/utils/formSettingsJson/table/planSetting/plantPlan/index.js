let tableHeader = [
    {
      prop: "docNo",
      lable: "计划单号"
    },
    {
      prop: "businessDate",
      lable: "计划日期"
    },
    {
      prop: "title",
      lable: "主题"
    },
    {
      prop: "processinstStatus__dsp",
      lable: "状态"
    },
    {
      prop: "operateBtns",
      propType: "operateBtns",
      btnNum: 3,
      lable: "操作",
      width: "180px"
    }
  ],
  baseDetailTableHeader = [
    {
      key: "type__dsp",
      title: "基地类型",
      inputType: "input",
      disabled: true
    },
    {
      key: "name",
      title: "基地",
      inputType: "input",
      disabled: true
    },
    {
      key: "spDistrict__dsp",
      title: "行政区划",
      inputType: "input",
      disabled: true
    },
    {
      key: "baseManager__dsp",
      title: "责任人",
      inputType: "input",
      width: "80px",
      disabled: true
    },
    {
      key: "area",
      title: "种植面积（亩）",
      inputType: "input",
      disabled: true
    },
    {
      key: "mType",
      title: "计划主要种植作物",
      inputType: "input",
      disabled: true
    },
    {
      key: "num",
      title: "预计总产量",
      inputType: "input",
      width: "120px",
      placeHolder: " "
    },
    {
      key: "num",
      title: "计划种子数量",
      inputType: "input",
      width: "120px",
      placeHolder: " "
    }
  ],
  landsDetailTableHeader = [
    {
      key: "name",
      title: "土地名称",
      inputType: "input",
      disabled: true
    },
    {
      key: "landManager__dsp",
      title: "责任人",
      inputType: "input",
      disabled: true
    },
    {
      key: "area",
      title: "种植面积（亩）",
      inputType: "input",
      disabled: true
    },
    {
      key: "baseManager",
      title: "计划种植作物",
      inputType: "input",
      disabled: true
    },
    {
      key: "area",
      title: "标准产量（亩/公斤）",
      inputType: "input",
      disabled: true
    },
    {
      key: "mType",
      title: "计划种子数量",
      inputType: "input"
    },
    {
      key: "num",
      title: "预计产量",
      inputType: "input",
      width: "120px",
      placeHolder: " "
    }
  ],
  baseTableHeader = [
    {
      prop: "type__dsp",
      lable: "基地类型"
    },
    {
      prop: "code",
      lable: "基地编号"
    },
    {
      prop: "name",
      lable: "基地名称"
    },
    {
      prop: "spDistrict__dsp",
      lable: "行政区划"
    },
    {
      prop: "area",
      lable: "基地面积"
    },
    {
      prop: "baseManager__dsp",
      lable: "责任人"
    }
  ],
  landsTableHeader = [
    {
      prop: "name",
      lable: "基地名称"
    },
    {
      prop: "name",
      lable: "土地名称"
    },
    {
      prop: "landManager__dsp",
      lable: "责任人"
    },
    {
      prop: "area",
      lable: "种植面积"
    }
  ];
export {
  tableHeader,
  baseDetailTableHeader,
  landsDetailTableHeader,
  baseTableHeader,
  landsTableHeader
};
