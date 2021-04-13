export default (envObj, mainData, btn, options) => {
  return new Promise(resolve => {
    let defaultOptions = {
        /* *
         * taskAction.flag = taskAction.value;
         * taskAction.label = taskAction.text;
         * taskAction.needAction = true;
         * taskAction.userAction = "submit";
         * taskAction.styleType = "primary";
         * taskAction.postUrl = "flowTradeInformation";
         * */
        //btn按钮属性（包含在btn对象中，样例见上方👆）:btnIsneedAction是否需要action属性
        btnIsneedAction: "needAction",
        //btn按钮属性:btnFlag，按钮的“flag”，表明按钮做提交或者取消等操作
        btnFlag: "flag",
        //btn按钮属性:btnPostUrl，btn配置时，用"postUrl"配置按钮点击时要提交的接口
        btnPostUrl: "postUrl",
        //当需要action时，需要提交到后台的action的字段名称
        actionName: "userAction",
        //页面dialog配置项的名称
        dialogFormSettingName: "dialogFormSettings",
        //页面dialog配置项，控制dialog是否显示的字段名称
        dialogFormVisibleParamName: "dialogFormVisible",
        //请求完数据后的回调方法名称
        doActionFncName: "handleSearchSubmit"
      },
      methodFlag =
        Object.prototype.toString.call(mainData) == "[object FormData]"
          ? "true"
          : "";
    if (options) {
      Object.assign(defaultOptions, options);
    }
    if (btn[defaultOptions.btnFlag] == "cancle") {
      envObj[defaultOptions.dialogFormSettingName][
        defaultOptions.dialogFormVisibleParamName
      ] = false;
      return false;
    }
    if (btn[defaultOptions.btnIsneedAction]) {
      if (Object.prototype.toString.call(mainData) == "[object FormData]") {
        mainData.append(defaultOptions.actionName, btn[defaultOptions.btnFlag]);
      } else {
        mainData[defaultOptions.actionName] = btn[defaultOptions.btnFlag];
      }
    }
    mainData =
      Object.prototype.toString.call(mainData) == "[object FormData]"
        ? mainData
        : envObj.$globalFnc.postArrtoString(mainData);

    // mainData.forEach((value, key) => {
    //   console.log(key + ":" + value);
    // });
    envObj
      .$http(envObj.$api[btn[defaultOptions.btnPostUrl]](methodFlag), mainData)
      .then(xhr => {
        if (xhr.success) {
          envObj[defaultOptions.dialogFormSettingName][
            defaultOptions.dialogFormVisibleParamName
          ] = false;
          envObj.$message({
            message: "操作成功！",
            type: "success"
          });
          if (defaultOptions.doActionFncName) {
            envObj[defaultOptions.doActionFncName]();
          }
        }
      });
    resolve();
  });
};
