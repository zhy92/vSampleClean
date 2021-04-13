const methods = {
  handleTableRowButton(row, btns) {
    switch (btns.type) {
      // 启用
      case "open":
        this.$postData(this.$api.updateAreaStatus, {
          codes: row["id"],
          status: 1
        }).then(() => {
          this.$message.success("启用成功!");
          this.setTableList();
        });
        break;
      case "closed":
        this.$confirm("您确定要禁用该区域？", "确认", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(() => {
          this.$postData(this.$api.updateAreaStatus, {
            codes: row["id"],
            status: 2
          }).then(() => {
            this.$message.success("禁用成功!");
            this.setTableList();
          });
        });
        break;
      case "add":
        this.dialogFormSettings.dialogFormTitle = "新增子行政区划";
        // 加载表单组
        this.dialogFormSettings.dialogFormItems.formButtonList = this.addAreaButton;
        this.dialogFormSettings.dialogFormItems.formGroupList = this.areaItems;
        this.dialogFormSettings.dialogFormItems.formGroupValues = {
          sysParentcode: row["code"],
          status: "1"
        };
        this.dialogFormSettings.dialogFormVisible = true;
        break;
      case "edit":
        this.dialogFormSettings.dialogFormTitle = "编辑行政区划";
        // 加载表单组
        this.dialogFormSettings.dialogFormItems.formButtonList = this.editAreaButton;
        this.dialogFormSettings.dialogFormItems.formGroupList = this.areaItems;
        this.$getData(this.$api.getAreaDataById, { sysId: row["sysId"] }).then(
          res => {
            this.dialogFormSettings.dialogFormItems.formGroupValues = this.$globalFnc.deepCopy(
              res.data
            );
          }
        );
        this.dialogFormSettings.dialogFormVisible = true;
        break;
      default:
        break;
    }
  },
  // 保存
  handleDialogForm(button, data) {
    if (button.flag == "save") {
      this.$postData(button.postUrl, data).then(() => {
        this.$message.success("保存成功!");
        this.setTableList();
        this.dialogFormSettings.dialogFormVisible = false;
        this.dialogFormSettings.dialogFormItems.formGroupValues = {};
      });
    }
    if (button.flag == "cancel") {
      this.dialogFormSettings.dialogFormVisible = false;
      this.dialogFormSettings.dialogFormItems.formGroupValues = {};
    }
  },
  /**
   * operateButtons点击事件
   */
  handleOperateButton(data) {
    if (data.flag == "closeSearch") {
      this.showSearchForm = !this.showSearchForm;
      if (this.showSearchForm) {
        data.label = "隐藏查询";
      } else {
        data.label = "显示查询";
      }
    }
  },
  // 搜索
  handleSearchFormBtn(btns, formData) {
    if (btns.flag === "search") {
      let filterRules = [];
      if (formData.name) {
        filterRules.push({
          field: "name",
          op: "contains",
          value: formData.name
        });
      }
      if (formData.code) {
        filterRules.push({
          field: "code",
          op: "contains",
          value: formData.code
        });
      }
      if (formData.status) {
        filterRules.push({
          field: "status",
          op: "contains",
          value: formData.status
        });
      }
      this.setTableList(filterRules);
    }
    if (btns.flag === "clear") {
      this.searchFormSettings.formGroupValues = {};
      this.setTableList();
    }
  },
  setTableList(searchFilter) {
    let propObject = {
        name: "operateBtns",
        porpvalue: [
          {
            text: "编辑",
            type: "edit",
            class: "text-primary fontSize20 mr10",
            icon: "el-icon-edit-outline",
            isIcon: true
          },
          {
            text: "新增",
            type: "add",
            class: "text-primary fontSize20 mr10",
            icon: "el-icon-folder-add",
            isIcon: true
          }
        ]
      },
      params = {
        filterRules: searchFilter ? JSON.stringify(searchFilter) : [],
        code: "330000"
      };
    this.$getData(this.$api.getAreaList, params).then(xhr => {
      let targetList = xhr;
      this.formatData(targetList, propObject);
      this.tableSettings.tableDatas = targetList;
    });
  },
  formatData(data, prop) {
    data.map(item => {
      item[prop.name] = [];
      // 没id 是根节点
      if (item.parentId) {
        item[prop.name] = this.$globalFnc.deepCopy(prop.porpvalue);
      } else {
        item[prop.name].push({
          text: "新增",
          type: "add",
          class: "text-primary fontSize20 mr10",
          icon: "el-icon-folder-add",
          isIcon: true
        });
      }
      // 如果这个数据是启用状态，添加禁用按钮
      if (item.enable == "1") {
        item["state-zh_CN"] = "启用";
        item[prop.name].push({
          text: "禁用",
          type: "closed",
          class: "text-success fontSize16 mr10",
          icon: "iconfont iconkaiguan-kai",
          isIcon: true
        });
      }
      // 如果这个数据是启用状态，添加禁用按钮
      if (item.enable == "2") {
        item["state-zh_CN"] = "禁用";
        item[prop.name].push({
          text: "启用",
          type: "open",
          class: "text-plainInfo fontSize16 mr10",
          icon: "iconfont iconkaiguan-guan",
          isIcon: true
        });
      }
      if (item.children) {
        this.formatData(item.children, prop);
      }
    });
  }
};
export default methods;
