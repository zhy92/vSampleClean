let tableHeader = [
    {
      prop: "docNo",
      lable: "计划单号"
    },
    {
      prop: "type",
      lable: "烘晒类型"
    },
    {
      prop: "sourceType",
      lable: "来源类型"
    },
    {
      prop: "sourceDocNo",
      lable: "来源单号"
    },
    {
      prop: "totalNum",
      lable: "总数量(吨)"
    },
    {
      prop: "dryingAddr",
      lable: "烘晒地点"
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
  detailTableHeader = [
    {
      key: "type",
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
      key: "address",
      title: "行政区划",
      inputType: "input",
      disabled: true
    },
    {
      key: "baseManager",
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
  landsTableHeader = [
    {
      key: "type",
      title: "土地名称",
      inputType: "input",
      disabled: true
    },
    {
      key: "name",
      title: "责任人",
      inputType: "input",
      disabled: true
    },
    {
      key: "address",
      title: "种植面积（亩）",
      inputType: "input",
      disabled: true
    },
    {
      key: "baseManager",
      title: "计划种植作物",
      inputType: "input",
      width: "80px",
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
      inputType: "input",
      disabled: true
    },
    {
      key: "num",
      title: "预计产量",
      inputType: "input",
      width: "120px",
      placeHolder: " "
    }
  ],
  materialDetailTableHeader = [
    {
      prop: "storepointId__dsp",
      lable: "库点"
    },
    // {
    //   prop: "storehouseId__dsp",
    //   lable: "仓房"
    // },
    {
      prop: "materialTypeName",
      lable: "物资类别"
    },
    {
      prop: "code",
      lable: "物资编码"
    },
    {
      prop: "name",
      lable: "物资名称"
    },
    {
      prop: "unitName",
      lable: "计量单位"
    },
    {
      prop: "specs",
      lable: "规格"
    },
    {
      prop: "mType",
      lable: "型号"
    },
    {
      prop: "noLockNum",
      lable: "可调拨数量"
    }
  ];
export {
  tableHeader,
  detailTableHeader,
  landsTableHeader,
  materialDetailTableHeader
};
