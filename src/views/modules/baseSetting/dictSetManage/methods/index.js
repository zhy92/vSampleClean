const methods = {
  /**
   *  初始化页面
   */
  initPageData() {
    this.$fomateButtonToShow(this.operateButtonsSettings.buttonListData).then(
      data => {
        this.operateButtonsSettings.buttonListData = data;
      }
    );
    this.$fomateButtonToShow(this.tableOperateBtns).then(data => {
      this.tableOperateBtns = data;
    });
    let defaultdatas = this.$globalFnc.deepCopy(
      this.$refs.searchForm.formGroupSettings.formGroupValues
    );
    this.handleSearchFormBtn({ postUrl: "getDictList" }, defaultdatas);
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
    if (formData.busintypename) {
      filterRules.push({
        field: "busintypename",
        op: "contains",
        value: formData.busintypename
      });
    }
    if (formData.busintypeid) {
      filterRules.push({
        field: "busintypeid",
        op: "contains",
        value: formData.busintypeid
      });
    }
    let options = {
      vm: this
    };
    let baseForm = {
      page: this.paginationSettings.currentPage,
      rows: this.$global.paginationOption.numberPerpage,
      sysType: this.$global.projectName,
      filterRules: JSON.stringify(filterRules)
    };
    this.tableSettings.tableDatas = [];
    this.$searchformBtnAction(btns, baseForm, options).then(data => {
      this.setTableList(data);
    });
  },
  setTableList(data) {
    data.rows.map(item => {
      if (item.isTree == "1") {
        item["isTree-zh_CN"] = "是";
      } else if (item.isTree == "0") {
        item["isTree-zh_CN"] = "否";
      } else {
        item["isTree-zh_CN"] = "";
      }
      item.maintainanceMode__dsp =
        "字典项非系统保留部分可修改</br>字典项非系统保留部分可修改";
      item.operateBtns = this.$globalFnc.deepCopy(this.tableOperateBtns);
      if (item.maintainanceMode == "S") {
        /**
         * 行间按钮显示方式两种，一种直接循环数组，另一种通过公用方法
         * **/
        // 方法一
        // item.operateBtns.map(optBtn=>{
        //   if(optBtn.type=="delete"){
        //     optBtn.showFlag = false
        //   }
        // })
        // 方法二
        this.$fomateButtonToShow(item.operateBtns, {
          target: "delete",
          prop: "type",
          flag: "showFlag",
          action: "false"
        }).then(operateBtns => {
          item.operateBtns = operateBtns;
        });
      }
    });
    this.tableSettings.tableDatas = data.rows;
    this.paginationSettings.totalNumbers = data.total;
  },
  //首页，分页切换
  handlePaginationPagenumber(val) {
    this.paginationSettings.currentPage = val;
    this.initPageData();
  },
  handleTableRowButton(row, btns) {
    switch (btns.type) {
      case "delete":
        this.$confirm("确认删除？", "确认框", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(() => {
          this.$postData(this.$api.deleteDict, {
            busintypeid: row["busintypeid"]
          }).then(() => {
            this.$message.success("删除成功!");
            this.initPageData();
          });
        });
        break;
      case "add":
        this.dictContentDialogSetting.dialogVisible = true;
        // 保存这一行的信息
        this.dictListRowData = row;

        //  如果 是树形的话，增加选择上级字典
        this.dictContentItems.forEach(item => {
          if (item.name === "parentId") {
            if (row.isTree == "1") {
              item.hideItem = false;
            } else {
              item.hideItem = true;
            }
          }
        });
        // 字典表内容默认第一页
        this.dictContentPaginationSettings.currentPage = 1;
        this.setDictContentList();
        break;
      default:
        break;
    }
  },
  /**
   * operateButtons点击事件
   */
  handleOperateButton(data) {
    if (data.flag === "add") {
      this.dialogFormSettings.dialogFormTitle = "新增字典列表";
      // 加载表单组
      this.dialogFormSettings.dialogFormItems.formButtonList = this.addDictListButton;
      this.dialogFormSettings.dialogFormItems.formGroupList = this.setDictList(
        this.addDictListItems
      );
      this.dialogFormSettings.dialogFormVisible = true;
      this.dialogFormSettings.dialogFormItems.formGroupValues = {
        sysType: this.$global.projectName
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
  setDictList(data) {
    return data.map(item => {
      // 维护方式
      if (item.name === "maintainanceMode") {
        this.$getData(this.$api.dictList, {
          _refKey: "dict",
          busintypeid: "BNDICT_MAINTAINANCE_MODE"
        }).then(res => {
          item.data = this.$globalFnc.arrayToFormDropdown(res, "text", "value");
        });
      }
      //  系统类型
      if (item.name === "sysType") {
        this.$getData(this.$api.dictList, {
          _refKey: "dict",
          busintypeid: "wms_base_menuSys"
        }).then(res => {
          item.data = this.$globalFnc.arrayToFormDropdown(res, "text", "value");
        });
      }
      if (item.name === "parentId") {
        this.$postData(this.$api.getHigherLevelTree, {
          busintypeid: this.dictListRowData["busintypeid"]
        }).then(res => {
          item.data = res;
        });
      }
      return item;
    });
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
  },
  // 业务代码 列表
  setDictContentList() {
    let propObject = {
        name: "operateBtns",
        porpvalue: [
          {
            text: "删除",
            type: "delete",
            class: "text-primary fontSize20 mr10",
            icon: "el-icon-delete",
            isIcon: true
          }
        ]
      },
      params = {
        busintypeid: this.dictListRowData["busintypeid"],
        page: this.dictContentPaginationSettings.currentPage,
        rows: this.$global.paginationOption.numberPerpage,
        sort: "businid",
        order: "asc"
      };
    this.$getData(this.$api.getDictContentList, params).then(xhr => {
      let targetList = xhr.rows;
      this.formatDictContentData(targetList, propObject);
      this.dictContentTableSettings.tableDatas = targetList;
      this.dictContentPaginationSettings.totalNumbers = xhr.total;
    });
  },
  formatDictContentData(data, prop) {
    data.map(item => {
      item[prop.name] = [];
      // Y代表预留，不是预留才有操作
      if (item.reserved !== "Y") {
        item[prop.name] = this.$globalFnc.deepCopy(prop.porpvalue);
        // 不是预留的话，如果不是树形才能有编辑
        if (this.dictListRowData && this.dictListRowData["isTree"] == "0") {
          item[prop.name].unshift({
            text: "编辑",
            type: "edit",
            class: "text-primary fontSize20 mr10",
            icon: "el-icon-edit-outline",
            isIcon: true
          });
        }
      }
      if (item.reserved == "Y") {
        item["reserved-zh_CN"] = "是";
      } else {
        item["reserved-zh_CN"] = "否";
      }

      if (item.status == "1") {
        item["status-zh_CN"] = "无效";
      } else {
        item["status-zh_CN"] = "可用";
      }
    });
  },
  // 字典表内容分页
  handleDictContentPaginationPagenumber(val) {
    this.dictContentPaginationSettings.currentPage = val;
    this.setDictContentList();
  },
  // 业务代码 表格上方按钮
  handleDicContentOperateButton(button) {
    if (button.flag == "add") {
      this.dialogFormSettings.dialogFormTitle = "新增字典内容";
      // 加载表单组
      this.dialogFormSettings.dialogFormItems.formButtonList = this.addDictContentButton;
      this.dialogFormSettings.dialogFormItems.formGroupList = this.setDictList(
        this.dictContentItems
      );
      this.dialogFormSettings.dialogFormItems.formGroupValues = {
        busintypeid: this.dictListRowData["busintypeid"]
      };
      this.dialogFormSettings.dialogFormVisible = true;
    }
  },
  handleDictContentTableRowButton(row, btns) {
    switch (btns.type) {
      case "delete":
        this.$confirm("确认删除？", "确认框", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(() => {
          let params = {
            busintypeid: row["busintypeid"],
            businid: row["businid"],
            dicId: row["dicId"]
          };
          this.$postData(this.$api.deleteDictContent, params).then(() => {
            this.$message.success("删除成功!");
            this.setDictContentList();
          });
        });
        break;
      case "edit":
        this.dialogFormSettings.dialogFormTitle = "新增字典内容";
        // 加载表单组
        this.dialogFormSettings.dialogFormItems.formButtonList = this.editDictContentButton;
        this.dialogFormSettings.dialogFormItems.formGroupList = this.dictContentItems;
        // 编辑回显
        this.dialogFormSettings.dialogFormItems.formGroupValues = row;
        this.dialogFormSettings.dialogFormVisible = true;
        break;
      default:
        break;
    }
  }
};
export default methods;
