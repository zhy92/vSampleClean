const methods = {
  /**
   *  设置搜索下拉数据
   */
  setSearchFormData() {
    this.searchFormSettings.formGroupList = this.setDictList(
      this.searchFormItems
    );
  },
  /**
   *  初始化页面
   */
  initPageData() {
    let defaultdatas = this.$globalFnc.deepCopy(
      this.$refs.searchForm.formGroupSettings.formGroupValues
    );
    this.handleSearchFormBtn({ postUrl: "getOrgList" }, defaultdatas);
  },
  /**
   *  搜索
   */
  handleSearchFormBtn(btns, formData) {
    if (btns.flag === "clear") {
      this.searchFormSettings.formGroupValues = {};
      formData = {};
    }
    let options = {
      vm: this
    };
    let baseForm = {
      status: "all"
    };
    let formDataObj = Object.assign(baseForm, formData);
    this.tableSettings.tableDatas = [];
    this.$searchformBtnAction(btns, formDataObj, options).then(data => {
      this.setTableList(data);
    });
  },
  setTableList(data) {
    let propObject = {
      name: "operateBtns",
      porpvalue: [
        {
          text: "新增",
          type: "add",
          class: "text-primary fontSize20 mr10",
          icon: "el-icon-folder-add",
          isIcon: true
        }
      ]
    };
    let orgList = this.$globalFnc.deepCopy(data);
    this.formatData(orgList, propObject);
    this.tableSettings.tableDatas = orgList;
  },
  formatData(data, prop) {
    data.map(item => {
      // 没有parentId 是根节点，不需要操作
      item[prop.name] = this.$globalFnc.deepCopy(prop.porpvalue);
      if (item.parentId) {
        item[prop.name].push({
          text: "编辑",
          type: "edit",
          class: "text-primary fontSize20 mr10",
          icon: "el-icon-edit-outline",
          isIcon: true
        });
        switch (item.orgState) {
          case "1":
            // 如果这个数据是启用状态，添加禁用按钮
            item["state-zh_CN"] = "启用";
            item[prop.name].push({
              text: "禁用",
              type: "closed",
              class: "text-success fontSize16 mr10",
              icon: "iconfont iconkaiguan-kai",
              isIcon: true
            });
            break;
          case "0":
            // 如果这个数据是禁用状态，添加启用按钮
            item["state-zh_CN"] = "禁用";
            item[prop.name].push({
              text: "启用",
              type: "open",
              class: "text-plainInfo fontSize16 mr10",
              icon: "iconfont iconkaiguan-guan",
              isIcon: true
            });
            break;
          default:
            // 没状态时候，添加启用按钮
            item["state-zh_CN"] = "禁用";
            item[prop.name].push({
              text: "启用",
              type: "open",
              class: "text-plainInfo fontSize16 mr10",
              icon: "iconfont iconkaiguan-guan",
              isIcon: true
            });
            break;
        }
      }
      if (item.children) {
        this.formatData(item.children, prop);
      }
    });
  },
  /**
   *  表格操作按钮
   */
  handleTableRowButton(row, btns) {
    switch (btns.type) {
      case "open":
        // 禁用该组织机构
        this.$postData(this.$api.enableOrg, { orgIds: row["id"] }).then(() => {
          this.$message.success("启用成功!");
          this.initPageData();
        });
        break;
      case "closed":
        // 禁用该组织机构
        this.$confirm("您确定要禁用该机构？", "确认", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(() => {
          this.$postData(this.$api.disableOrg, { orgIds: row["id"] }).then(
            () => {
              this.$message.success("禁用成功!");
              this.initPageData();
            }
          );
        });
        break;
      case "add":
        this.dialogFormSettings.dialogFormTitle = "新增下级机构";
        // 加载表单组
        this.dialogFormSettings.dialogFormItems.formButtonList = this.addOrgContentButton;
        this.dialogFormSettings.dialogFormItems.formGroupList = this.setDictList(
          this.orgContentItems,
          "add"
        );
        // 新增下级机构，需要知道本级机构的id
        this.dialogFormSettings.dialogFormItems.formGroupValues = {
          parentorgid: row.id
          // district: row["district"]
        };
        this.dialogFormSettings.dialogFormVisible = true;
        break;
      case "edit":
        this.dialogFormSettings.dialogFormTitle = "编辑机构信息";
        // 下拉列表赋值
        this.dialogFormSettings.dialogFormItems.formButtonList = this.editOrgContentButton;
        this.dialogFormSettings.dialogFormItems.formGroupList = this.setDictList(
          this.orgContentItems,
          "edit"
        );
        // 编辑赋值
        this.$getData(this.$api.getOrgSelectList, { orgid: row.id }).then(
          res => {
            this.dialogFormSettings.dialogFormItems.formGroupValues = this.$globalFnc.deepCopy(
              res.data
            );
            this.handleLinkSelect("", res.data.orgtypeid);
            setTimeout(() => {
              this.dialogFormSettings.dialogFormVisible = true;
            }, 100);
          }
        );
        break;
      default:
        break;
    }
  },
  /**
   *  下拉列表赋值
   */
  setDictList(data, type) {
    return data.map(item => {
      // 赋值机构类型
      if (item.name === "orgtypeid") {
        this.$getData(this.$api.dictList, {
          _refKey: "dict",
          busintypeid: "wms_bas_orgtype"
        }).then(res => {
          item.data = this.$globalFnc.arrayToFormDropdown(
            res,
            "text",
            "value",
            true
          );
        });
      }
      // 赋值行政级别
      if (item.name === "districtLevel") {
        // 行政级别
        this.$getData(this.$api.dictList, {
          _refKey: "dict",
          busintypeid: "bas_org_districtlevel"
        }).then(res => {
          item.data = this.$globalFnc.arrayToFormDropdown(res, "text", "value");
        });
      }
      // 地址
      if (item.name === "district" || item.name === "addressDistrict") {
        this.$getData(this.$api.areaDict).then(res => {
          item.data = res[0].children;
        });
      }
      // 机构类型 不可以编辑
      if (type === "edit" && item.name === "orgtypeid") {
        item.disabled = true;
      }
      if (type === "add" && item.name === "orgtypeid") {
        item.disabled = false;
      }
      return item;
    });
  },
  /**
   * 新增编辑表单组确认取消事件
   */
  handleDialogForm(button, data) {
    if (button.flag == "save") {
      this.$postData(button.postUrl, data).then(() => {
        this.$message.success("保存成功!");
        this.initPageData();
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
   * 下拉框change事件
   */
  handleLinkSelect(type, data) {
    if (data == 200) {
      this.orgContentItems.forEach(item => {
        if (item.name === "addressDistrict") {
          item.hideItem = true;
        }
        if (item.name === "district") {
          item.hideItem = false;
        }
      });
    } else {
      this.orgContentItems.forEach(item => {
        if (item.name === "addressDistrict") {
          item.hideItem = false;
        }
        if (item.name === "district") {
          item.hideItem = true;
        }
      });
    }
    // 机构类型 为 仅节点的时候， 行政区划和行政级别不用必填
    if (data == 0) {
      this.dialogFormSettings.dialogFormItems.rules[
        "districtLevel"
      ][0].required = false;
    } else {
      this.dialogFormSettings.dialogFormItems.rules[
        "districtLevel"
      ][0].required = true;
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
  }
};
export default methods;
