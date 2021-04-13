let tableHeader = [
    {
      prop: "code",
      lable: "基地编号"
    },
    {
      prop: "name",
      lable: "基地名称"
    },
    {
      prop: "type__dsp",
      lable: "基地类别"
    },
    {
      prop: "area",
      lable: "基地面积(亩)"
    },
    {
      prop: "address",
      lable: "基地地址"
    },
    {
      prop: "baseManager",
      lable: "责任人"
    },
    {
      prop: "previousCrop",
      lable: "前茬作物"
    },
    {
      prop: "currentCrop",
      lable: "当前作物"
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
  groundTableHeader = [
    {
      prop: "code",
      lable: "编号"
    },
    {
      prop: "name",
      lable: "土地名称"
    },
    {
      prop: "area",
      lable: "土地面积(亩)"
    },
    {
      prop: "previousCrop",
      lable: "前茬作物"
    },
    {
      prop: "currentCrop",
      lable: "当前作物"
    },
    {
      prop: "landManager",
      lable: "责任人"
    },
    {
      prop: "inspectManager",
      lable: "田检负责人"
    },
    {
      prop: "disabled__dsp",
      lable: "状态"
    },
    {
      prop: "operateBtns",
      propType: "operateBtns",
      lable: "操作",
      width: "150px"
    }
  ],
  machineryTableHeader = [
    {
      prop: "code",
      lable: "设备编码"
    },
    {
      prop: "name",
      lable: "设备名称"
    },
    {
      prop: "model",
      lable: "设备型号"
    },
    {
      prop: "efficiency",
      lable: "作业效率"
    },
    {
      prop: "num",
      lable: "数量"
    },
    {
      prop: "operateBtns",
      propType: "operateBtns",
      lable: "操作"
    }
  ];
export { tableHeader, groundTableHeader, machineryTableHeader };
