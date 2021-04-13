let tableHeader = [
    {
      prop: "code",
      lable: "编号"
    },
    {
      prop: "seedVariety__dsp",
      lable: "种子品种"
    },
    {
      prop: "disabled__dsp",
      lable: "状态"
    },
    {
      prop: "operateBtns",
      propType: "operateBtns",
      lable: "操作"
    }
  ],
  detailTableHeader = [
    {
      key: "level",
      title: "级别",
      inputType: "select",
      data: [],
      width: ""
    },
    {
      key: "purity",
      title: "纯度(%)",
      inputType: "input",
      width: ""
    },
    {
      key: "cleanliness",
      title: "净度(%)",
      inputType: "input",
      width: ""
    },
    {
      key: "germinatingRatio",
      title: "发芽率(%)",
      inputType: "input",
      width: ""
    },
    {
      key: "waterContent",
      title: "含水量(%)",
      inputType: "input",
      width: ""
    },
    {
      key: "echinochloaSeeds",
      title: "稗籽(粒/千克)",
      inputType: "input",
      width: ""
    }
  ];
export { tableHeader, detailTableHeader };
