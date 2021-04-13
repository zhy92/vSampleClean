let tableHeader = [
    {
      prop: "busintypeid",
      lable: "编码",
      sortForbid: true
    },
    {
      prop: "busintypename",
      lable: "名称",
      sortForbid: true
    },
    {
      prop: "isTree-zh_CN",
      lable: "是否树形",
      sortForbid: true
    },
    {
      prop: "maintainanceMode__dsp",
      lable: "维护方式",
      sortForbid: true
    },
    {
      prop: "operateBtns",
      propType: "operateBtns",
      lable: "操作",
      width: "150",
      sortForbid: true
    }
  ],
  dictContentTableHeader = [
    {
      prop: "businid",
      lable: "编码",
      sortForbid: true
    },
    {
      prop: "businname",
      lable: "名称",
      sortForbid: true
    },
    {
      prop: "parentId__dsp",
      lable: "上级字典",
      sortForbid: true
    },
    {
      prop: "privilege",
      lable: "过滤值",
      sortForbid: true
    },
    {
      prop: "reserved-zh_CN",
      lable: "是否预留",
      sortForbid: true
    },
    {
      prop: "sortField",
      lable: "排序",
      sortForbid: true
    },
    {
      prop: "status-zh_CN",
      lable: "状态",
      sortForbid: true
    },
    {
      prop: "operateBtns",
      propType: "operateBtns",
      lable: "操作",
      width: "150",
      sortForbid: true
    }
  ];
export { tableHeader, dictContentTableHeader };
