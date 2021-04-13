import { getToken } from "@/utils/auth";

export default (envObj, id, type, options) => {
  return new Promise(resolve => {
    let defaultOptions = {
      pageName: "page",
      searchObjName: "searchInfo",
      searchObjArrName: "filterRules",
      defaultSearchArrName: "filterRules",
      containByNames: ["title", "name"],
      doSearchFncName: "getDataList"
    };
    if (options) {
      Object.assign(defaultOptions, options);
    }
    let that = envObj,
      postdata;
    if (type == "checkflow") {
      that.dialogFormSettings.dialogFormVisible = true;
      that.dialogFormSettings.dialogFormTitle = "流程图查看";
      that.dialogFormSettings.dialogType = "image";
      that.dialogFormSettings.imgSrc =
        that.$global.flowPicUrl +
        "?processInstanceId=" +
        id +
        "&_jwt=" +
        getToken() +
        "&t=" +
        new Date().getTime();
    } else if (type == "edit" || type == "adjustNews") {
      if (id instanceof Object) {
        postdata = {
          sysId: id.sysId
        };
      } else {
        postdata = {
          sysId: id
        };
      }
      let dialogData;
      that.tablelistSettings.tableDatas.map(itemdata => {
        if (itemdata.sysId == postdata.sysId) {
          dialogData = JSON.parse(JSON.stringify(itemdata));
        }
      });
      // dialogData = that.getDataItemDetail(postdata.sysId);
      that.dialogFormSettings.dialogFormTitle = "编辑交易公告";
      that.dialogFormSettings.dialogFormItems.formGroupList = dialogEditFormItemslist;
      that.dialogFormSettings.dialogFormItems.formButtonList = dialogFormEditBtnlist;
      if (
        type == "adjustNews" &&
        dialogData.userActiveTasks &&
        dialogData.userActiveTasks.length > 0
      ) {
        dialogData.userActiveTasks.map(task => {
          that.dialogFormSettings.dialogFormTitle = task.name;
          dialogData.taskId = task.id;
          if (task.userTaskActions && task.userTaskActions.length > 0) {
            task.userTaskActions.map(taskAction => {
              taskAction.flag = taskAction.value;
              taskAction.label = taskAction.text;
              taskAction.needAction = true;
              taskAction.styleType = "primary";
              taskAction.postUrl = "flowTradeInformation";
            });
            that.dialogFormSettings.dialogFormItems.formButtonList =
              task.userTaskActions;
          }
        });
        delete dialogData.userActiveTasks;
        delete dialogData.processStatus;
      }
      that.dialogFormSettings.dialogFormItems.formGroupValues = dialogData;
      that.dialogFormSettings.dialogFormVisible = true;
      that.dialogFormSettings.dialogType = "form";
    } else if (type == "remove") {
      this.$confirm("您正在执行删除操作，是否继续?", "提示", {
        confirmButtonText: "继续删除",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        postdata = {
          sysId: id
        };
        that.$http(that.$api.removeTradeInformation(), postdata).then(xhr => {
          if (xhr.success) {
            that.$message({
              message: "操作成功！",
              type: "success"
            });
            that.handleSearchSubmit();
          }
        });
      });
    } else if (type == "approve") {
      let dialogData;
      that.tablelistSettings.tableDatas.map(itemdata => {
        if (itemdata.sysId == id.sysId) {
          dialogData = JSON.parse(JSON.stringify(itemdata));
        }
      });
      if (dialogData.userActiveTasks && dialogData.userActiveTasks.length > 0) {
        dialogData.userActiveTasks.map(task => {
          that.dialogFormSettings.dialogFormTitle = task.name;
          dialogData.taskId = task.id;
          if (task.formKey == "approve") {
            if (task.userTaskActions && task.userTaskActions.length > 0) {
              task.userTaskActions.map(taskAction => {
                taskAction.flag = taskAction.value;
                taskAction.label = taskAction.text;
                taskAction.needAction = true;
                taskAction.styleType = "primary";
                taskAction.postUrl = "flowTradeInformation";
              });
              that.dialogFormSettings.dialogFormItems.formButtonList =
                task.userTaskActions;
            }
            that.dialogFormSettings.dialogFormItems.formGroupList = dialogCheckFormItemslist;
          }
        });
        delete dialogData.userActiveTasks;
        if (dialogData.processStatus) {
          delete dialogData.processStatus;
        }
      }
      that.dialogFormSettings.dialogFormVisible = true;
      that.dialogFormSettings.dialogType = "form";
      that.dialogFormSettings.dialogFormItems.formGroupValues = dialogData;
    }
    resolve();
  });
};
