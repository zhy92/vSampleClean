export default (mainData, options) => {
  return new Promise(resolve => {
    let defaultOptions = {
        /* * 页面data中声明搜索、默认搜索、页面页码的字段
      return {
        filterRules: [
          {
            field: "type",
            value: "07",
            op: "equal"
          }
        ],
        page: 1
      }
       * */
        //页面保存分页页码的字段名
        pageName: "page",
        //页面保存搜索信息对象的字段名
        searchObjName: "searchInfo",
        //搜索信息对象中，用来保存所有搜索信息的字段名
        searchObjArrName: "filterRules",
        //搜索信息中，用于模糊搜索的字段名称
        containByNames: ["title"],
        //搜索提交数据，每项的字段名称,样例见上方👆filterRules
        searchKey: "field",
        //搜索提交数据，每项的字段值
        searchValue: "value",
        //搜索提交数据，每项的字段符号
        searchSymbol: "op"
      },
      formattedObj = {};
    if (options) {
      Object.assign(defaultOptions, options);
    }
    let searchFormat = JSON.parse(
      JSON.stringify(mainData[defaultOptions.searchObjName])
    );

    let filterArr = [];

    for (let prop in searchFormat) {
      if (mainData[prop] instanceof Array) {
        mainData[prop].map((item, index) => {
          let filterObj = {};
          filterObj[defaultOptions.searchKey] = prop;
          filterObj[defaultOptions.searchValue] = item;
          if (index == 0) {
            filterObj[defaultOptions.searchSymbol] = "greaterorequal";
          } else {
            filterObj[defaultOptions.searchSymbol] = "lessorequal";
          }
          filterArr.push(filterObj);
        });
      } else {
        if (mainData[prop]) {
          let filterObj = {};
          filterObj[defaultOptions.searchSymbol] = "equal";
          filterObj[defaultOptions.searchKey] = prop;
          filterObj[defaultOptions.searchValue] = mainData[prop];
          if (
            defaultOptions.containByNames &&
            defaultOptions.containByNames.length > 0
          ) {
            defaultOptions.containByNames.forEach(name => {
              if (name == prop) {
                filterObj[defaultOptions.searchSymbol] = "contains";
                return false;
              }
            });
          }
          filterArr.push(filterObj);
        }
      }
    }
    // 页码
    formattedObj[defaultOptions.pageName] = mainData.page ? mainData.page : 1;
    formattedObj[defaultOptions.searchObjArrName] = searchFormat;
    resolve(formattedObj);
  });
};
