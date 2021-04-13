const methods = {
  alertFnc() {
    this.$alert(123);
  },
  handleChangeSelect(linkname, data) {
    console.log(linkname, data, "*********");
  },
  /**
   * operateButtons点击事件
   */
  handleOperateButton(data) {
    if (data.flag === "add") {
      this.dialogFormSettings.dialogFormTitle = "添加任务";
      // 加载表单组
      this.dialogFormSettings.dialogFormItems.formButtonList = this.addTaskButton;
      let formGroupList = this.$globalFnc.deepCopy(this.taskContentItems);
      this.dialogFormSettings.dialogFormItems.formGroupList = formGroupList;
      this.dialogFormSettings.dialogFormVisible = true;
      this.dialogFormSettings.dialogFormItems.formGroupValues = {
        enabled: "1",
        expressionType: "0",
        selectStartTime: "0"
      };
    }
    if (data.flag === "closeSearch") {
      this.showSearchForm = !this.showSearchForm;
      if (this.showSearchForm) {
        data.label = "隐藏查询";
      } else {
        data.label = "显示查询";
      }
    }
  },
  /**
   *  初始化页面
   */
  initPageData() {
    let defaultdatas = this.$globalFnc.deepCopy(
      this.$refs.searchForm.formGroupSettings.formGroupValues
    );
    this.handleSearchFormBtn({ postUrl: "getTaskList" }, defaultdatas);
  },
  handleSearchFormBtn(btns, formData) {
    if (btns.flag === "search") {
      this.paginationSettings.currentPage = 1;
    }
    if (btns.flag === "clear") {
      this.paginationSettings.currentPage = 1;
      this.searchFormSettings.formGroupValues = {};
      formData = {};
    }
    let filterRules = [];
    if (formData.name) {
      filterRules.push({
        field: "name",
        op: "contains",
        value: formData.name
      });
    }
    if (formData.busintypeid) {
      filterRules.push({
        field: "group",
        op: "contains",
        value: formData.group
      });
    }
    if (formData.enabled) {
      filterRules.push({
        field: "enabled",
        op: "equal",
        value: formData.enabled
      });
    }
    let options = {
      vm: this
    };
    let baseForm = {
      page: this.paginationSettings.currentPage,
      rows: this.$global.paginationOption.numberPerpage,
      filterRules: JSON.stringify(filterRules)
    };
    this.tableSettings.tableDatas = [];
    this.$searchformBtnAction(btns, baseForm, options).then(data => {
      this.setTableList(data);
    });
  },
  setTableList(data) {
    let propObject = {
      name: "operateBtns",
      porpvalue: [
        {
          text: "编辑",
          type: "edit",
          class: "text-primary fontSize20 mr10",
          isIcon: true
        },
        {
          text: "删除",
          type: "delete",
          class: "text-danger fontSize20 mr10",
          isIcon: true
        }
      ]
    };
    let taskList = this.$globalFnc.deepCopy(data.rows);
    this.formatData(taskList, propObject);
    this.tableSettings.tableDatas = taskList;
    this.paginationSettings.totalNumbers = data.total;
  },
  formatData(data, prop) {
    data.map(item => {
      // 内容转换
      if (item.enabled && item.enabled == "1") {
        item.enabled_dsp = "启用";
      }
      if (item.enabled && item.enabled == "0") {
        item.enabled_dsp = "禁用";
      }
      if (item.state) {
        switch (item.state) {
          case "NONE":
            item.state_dsp = "无";
            break;
          case "NORMAL":
            item.state_dsp = "正常";
            break;
          case "PAUSED":
            item.state_dsp = "暂停";
            break;
          case "COMPLETE":
            item.state_dsp = "完成";
            break;
          case "ERROR":
            item.state_dsp = "错误";
            break;
          case "BLOCKED":
            item.state_dsp = "堵塞";
            break;
          //case "WRONG":return "错误（未找到执行任务的触发器） ";
          case "WRONG":
            item.state_dsp = "未启用 ";
            break;
          case "END":
            item.state_dsp = "结束";
            break;
          default:
            item.state_dsp = item.state;
            break;
        }
      }

      if (item.lastRunTime) {
        item.lastRunTime_dsp = this.$globalFnc.dateStampFormat(
          item.lastRunTime
        );
      }
      if (item.nextRunTime) {
        item.nextRunTime_dsp = this.$globalFnc.dateStampFormat(
          item.nextRunTime
        );
      }
      // 按钮
      item[prop.name] = this.$globalFnc.deepCopy(prop.porpvalue);
      //启用
      if (item.enabled == "0" && item.state == "WRONG") {
        item[prop.name].unshift({
          text: "启用",
          type: "open",
          class: "text-primary fontSize16 mr10",
          isIcon: true
        });
      }
      //禁用
      if (item.enabled == "1" && item.state != "END") {
        item[prop.name].unshift({
          text: "禁用",
          type: "closed",
          class: "text-danger fontSize20 mr10",
          isIcon: true
        });
      }
      if (item.state === "NORMAL" || item.state === "PAUSED") {
        item[prop.name].unshift({
          text: "立即运行一次",
          type: "runTask",
          class: "text-primary fontSize20 mr10",
          isIcon: true
        });
        if (item.state === "NORMAL") {
          item[prop.name].unshift({
            text: "暂停",
            type: "pauseTask",
            class: "text-primary fontSize20 mr10",
            isIcon: true
          });
        }
        if (item.state === "PAUSED") {
          item[prop.name].unshift({
            text: "恢复",
            type: "resumeTask",
            class: "text-primary fontSize20 mr10",
            isIcon: true
          });
        }
      }
    });
  },
  //首页，分页切换
  handlePaginationPagenumber(val) {
    this.paginationSettings.currentPage = val;
    this.initPageData();
  },
  handleTableRowButton(row, btns) {
    let formGroupList, defaultValue;
    switch (btns.type) {
      case "open":
        // 启用
        this.$postData(this.$api.updateTask, {
          scheduleTaskId: row.scheduleTaskId,
          enabled: "1"
        }).then(() => {
          this.$message.success("成功启用该计划任务!");
          this.initPageData();
        });
        break;
      case "closed":
        // 禁用
        this.$confirm("确定禁用该计划任务？", "确认", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(() => {
          this.$postData(this.$api.updateTask, {
            scheduleTaskId: row.scheduleTaskId,
            enabled: "0"
          }).then(() => {
            this.$message.success("成功禁用该计划任务!");
            this.initPageData();
          });
        });
        break;
      case "delete":
        this.$confirm("确认删除？", "确认框", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(() => {
          this.$postData(this.$api.deleteTask, {
            scheduleTaskId: row.scheduleTaskId
          }).then(() => {
            this.$message.success("成功删除该计划任务!");
            this.initPageData();
          });
        });
        break;
      case "pauseTask":
        // 暂停计划任务
        this.$confirm("确定暂停该计划任务？", "确认框", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(() => {
          this.$postData(this.$api.pauseTask, {
            scheduleTaskId: row.scheduleTaskId
          }).then(() => {
            this.$message.success("成功暂停该计划任务!");
            this.initPageData();
          });
        });
        break;
      case "resumeTask":
        // 恢复计划任务
        this.$confirm("确定恢复该计划任务？", "确认框", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(() => {
          this.$postData(this.$api.resumeTask, {
            scheduleTaskId: row.scheduleTaskId
          }).then(() => {
            this.$message.success("成功恢复该计划任务!");
            this.initPageData();
          });
        });
        break;
      case "runTask":
        // 立即运行一次计划任务
        this.$confirm("确定立即运行一次该计划任务？", "确认框", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(() => {
          this.$postData(this.$api.runTask, {
            scheduleTaskId: row.scheduleTaskId
          }).then(() => {
            this.$message.success("成功运行该计划任务!");
            this.initPageData();
          });
        });
        break;
      case "edit":
        this.dialogFormSettings.dialogFormTitle = "编辑任务信息";
        // 加载表单组
        this.dialogFormSettings.dialogFormItems.formButtonList = this.editTaskButton;
        formGroupList = this.$globalFnc.deepCopy(this.taskContentItems);
        this.dialogFormSettings.dialogFormItems.formGroupList = this.setDictList(
          formGroupList
        );
        defaultValue = this.$globalFnc.deepCopy(row);
        defaultValue.selectStartTime = "0";
        this.handleLinkSelect("expressionType", defaultValue.expressionType);
        this.handleLinkSelect("selectStartTime", defaultValue.selectStartTime);
        this.dialogFormSettings.dialogFormItems.formGroupValues = defaultValue;
        this.dialogFormSettings.dialogFormVisible = true;
        break;
      default:
        break;
    }
  },
  setDictList(data) {
    return data.map(item => {
      if (item.name === "name" || item.name === "group") {
        item.disabled = true;
      }
      return item;
    });
  },
  handleLinkSelect(linkName, data) {
    let formGroupList = this.dialogFormSettings.dialogFormItems.formGroupList;
    if (linkName === "expressionType") {
      formGroupList.forEach(item => {
        // 启动时间 间隔时间 间隔单位 执行次数
        if (
          item.name === "selectStartTime" ||
          item.name === "simpleExpressionInterval" ||
          item.name === "selectIntervalTime" ||
          item.name === "simpleExpressionTimes"
        ) {
          item.hideItem = data == "1" ? false : true;
        }
        // cron表达式
        if (item.name === "cronExpression") {
          item.hideItem = data == "1" ? true : false;
        }
        // 具体时间
        if (data == "0" && item.name === "simpleExpressionStartdate") {
          item.hideItem = true;
        }
      });
    }
    if (linkName === "selectStartTime") {
      formGroupList.forEach(item => {
        // 具体时间
        if (item.name === "simpleExpressionStartdate") {
          item.hideItem = data == "1" ? false : true;
        }
      });
    }
  },
  handleInputGroupButton(clickName) {
    if (clickName === "cronExpression") {
      this.cronDetailDialog.dialogVisible = true;
    }
  },
  /**
   * 弹框确认按钮
   */
  handleDialogForm(button, data) {
    if (button.flag === "cancel") {
      this.dialogFormSettings.dialogFormVisible = false;
      this.dialogFormSettings.dialogFormItems.formGroupValues = {};
      return;
    }
    this.$postData(button.postUrl, data).then(() => {
      this.$message.success("保存成功!");
      if (button.flag === "save") {
        this.initPageData();
      }
      if (button.flag === "dictContentSave") {
        this.setDictContentList();
      }
      this.dialogFormSettings.dialogFormVisible = false;
      this.dialogFormSettings.dialogFormItems.formGroupValues = {};
    });
  }
};
export default methods;
