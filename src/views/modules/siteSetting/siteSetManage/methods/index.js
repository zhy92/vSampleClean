const methods = {
  /**
   *  初始化页面
   */
  initPageData() {
    let defaultdatas = this.$globalFnc.deepCopy(
      this.$refs.searchForm.formGroupSettings.formGroupValues
    );
    this.handleSearchFormBtn(
      { postUrl: "getSiteListPage_siteSetManage" },
      defaultdatas
    );
  },
  handleSearchFormBtn(btns, formData) {
    if (btns.flag && btns.flag === "search") {
      this.paginationSettings.currentPage = 1;
    }
    let options = {
      vm: this
    };
    let baseForm = {
      page: this.paginationSettings.currentPage,
      rows: this.$global.paginationOption.numberPerpage
    };
    let params = Object.assign({}, baseForm, formData);
    this.tableSettings.tableDatas = [];
    this.$searchformBtnAction(btns, params, options).then(data => {
      this.setTableList(data);
    });
  },
  setTableList(data) {
    let dataList = this.$globalFnc.deepCopy(data.rows);
    dataList.map(item => {
      item.operateBtns = [
        {
          text: "编辑",
          type: "edit",
          class: "text-primary fontSize20 mr10",
          isIcon: true
        },
        {
          text: item.disabled == "Y" ? "启用" : "禁用",
          type: item.disabled == "Y" ? "open" : "closed",
          class: "text-primary fontSize20 mr10",
          isIcon: true
        },
        {
          text: "删除",
          type: "remove",
          class: "text-danger fontSize20 mr10",
          isIcon: true
        }
      ];
    });
    this.tableSettings.tableDatas = dataList;
    this.paginationSettings.totalNumbers = data.total;
  },
  /**
   * operateButtons点击事件
   */
  handleOperateButton(data) {
    let formGroupList;
    if (data.flag === "add") {
      this.activeName = "site";
      this.panelDisabled = true;
      this.dialogFormSettings.dialogFormTitle = "新增基地信息";
      // 加载表单组
      this.detailInfoFormSettings.formButtonList = this.dialogAddButton;
      formGroupList = this.$globalFnc.deepCopy(this.dialogContentItems);
      this.detailInfoFormSettings.formGroupList = formGroupList;
      this.dialogFormSettings.dialogFormVisible = true;
      this.detailInfoFormSettings.formGroupValues = {
        disabled: "N"
      };
    }
    if (data.flag === "delete") {
      if (!this.chosedUnitData.length) {
        this.$message.warning("请选择需删除的基地信息!");
        return;
      }
      let unitId = this.chosedUnitData.map(item => {
        return item.fpmpBasBaseId;
      });
      this.$confirm("您确定要删除选中的基地信息？", "确认", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        this.$postData(
          this.$api.removeBatchSite_siteSetManage,
          {
            ids: unitId
          },
          true
        ).then(() => {
          this.$message.success("删除成功!");
          this.chosedUnitData = [];
          this.initPageData();
        });
      });
    }
    if (data.flag === "open" || data.flag === "closed") {
      let updateType = data.flag === "open" ? "N" : "Y",
        quote = data.flag === "open" ? "启用" : "禁用";
      if (!this.chosedUnitData.length) {
        this.$message.warning(`请选择需${quote}的基地信息!`);
        return;
      }
      let status = this.chosedUnitData.map(item => {
        return item.disabled;
      });
      if ([...new Set(status)].length > 1) {
        this.$message.warning("请选择相同状态的基地信息!");
        return;
      }
      let unitId = this.chosedUnitData.map(item => {
        return item.fpmpBasBaseId;
      });
      this.$postData(
        this.$api.updateStatusBatchSite_siteSetManage,
        {
          ids: unitId,
          disabled: updateType
        },
        true
      ).then(() => {
        this.$message.success(`${quote}成功!`);
        this.chosedUnitData = [];
        this.initPageData();
      });
    }
    if (data.flag === "closeSearch") {
      this.showSearchForm = !this.showSearchForm;
      if (this.showSearchForm) {
        data.icon = "iconfont iconlong-arrow-up text-primary";
      } else {
        data.icon = "iconfont iconlong-arrow-down text-primary";
      }
    }
    if (data.flag === "addGround") {
      this.dialogChildFormSettings.dialogFormVisible = true;
      this.dialogChildFormSettings.dialogFormTitle = "土地详情";
      this.dialogChildFormSettings.dialogFormItems = {
        formGroupValues: {
          fpmpBasBaseId: this.detailInfoFormSettings.formGroupValues
            .fpmpBasBaseId,
          disabled: "N"
        },
        formGroupList: this.dialogGroundContentItems,
        formButtonList: this.dialogGroundAddButton,
        rules: this.dialogGroundContentItemsRule
      };
    }
    if (data.flag === "deleteGround") {
      if (!this.chosedGroundData.length) {
        this.$message.warning("请选择需删除的基地信息!");
        return;
      }
      let unitId = this.chosedGroundData.map(item => {
        return item.fpmpBaseLandId;
      });
      this.$confirm("您确定要删除选中的基地信息？", "确认", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        this.$postData(
          this.$api.removeBatchSiteGround_siteGroundSetManage,
          {
            ids: unitId,
            fpmpBasBaseId: this.detailInfoFormSettings.formGroupValues
              .fpmpBasBaseId
          },
          true
        ).then(() => {
          this.$message.success("删除成功!");
          this.chosedGroundData = [];
          this.handleTabClick();
        });
      });
    }
    if (data.flag === "openGround" || data.flag === "closedGround") {
      let updateType = data.flag === "openGround" ? "N" : "Y",
        quote = data.flag === "openGround" ? "启用" : "禁用";
      if (!this.chosedGroundData.length) {
        this.$message.warning(`请选择需${quote}的基地信息!`);
        return;
      }
      let status = this.chosedGroundData.map(item => {
        return item.disabled;
      });
      if ([...new Set(status)].length > 1) {
        this.$message.warning("请选择相同状态的基地信息!");
        return;
      }
      let unitId = this.chosedGroundData.map(item => {
        return item.fpmpBaseLandId;
      });
      this.$postData(
        this.$api.updateStatusBatchSiteGround_siteGroundSetManage,
        {
          ids: unitId,
          fpmpBasBaseId: this.detailInfoFormSettings.formGroupValues
            .fpmpBasBaseId,
          disabled: updateType
        },
        true
      ).then(() => {
        this.$message.success(`${quote}成功!`);
        this.chosedGroundData = [];
        this.handleTabClick();
      });
    }
    if (data.flag === "addMachinery") {
      this.dialogChildFormSettings.dialogFormVisible = true;
      this.dialogChildFormSettings.dialogFormTitle = "设备详情";
      this.dialogChildFormSettings.dialogFormItems = {
        formGroupValues: {
          fpmpBasBaseId: this.detailInfoFormSettings.formGroupValues
            .fpmpBasBaseId
        },
        formGroupList: this.dialogMachineryContentItems,
        formButtonList: this.dialogMachineryAddButton,
        rules: this.dialogMachineryContentItemsRule
      };
    }
  },
  /**
   * 表格选择事件
   */
  handleTableMutiChecked(data) {
    this.chosedUnitData = [];
    if (data && data.length) {
      this.chosedUnitData = data;
    }
  },
  /**
   * 土地表格选择事件
   */
  handleGroundTableMutiChecked(data) {
    this.chosedGroundData = [];
    if (data && data.length) {
      this.chosedGroundData = data;
    }
  },
  /**
   *  分页
   */
  handlePaginationPagenumber(val) {
    this.paginationSettings.currentPage = val;
    this.initPageData();
  },
  /**
   *  行点击事件
   */
  handleTableRowButton(row, btns) {
    let formGroupList;
    // 编辑基地基本信息
    if (btns.type === "edit") {
      this.getSingleDetailInfo(row.fpmpBasBaseId).then(data => {
        this.dialogFormSettings.dialogFormTitle = "编辑基地信息";
        this.activeName = "site";
        this.panelDisabled = false;
        // 加载表单组
        formGroupList = this.$globalFnc.deepCopy(this.dialogContentItems);
        this.detailInfoFormSettings.formGroupList = formGroupList;
        this.detailInfoFormSettings.formButtonList = this.dialogEditButton;
        this.dialogFormSettings.dialogFormVisible = true;
        this.detailInfoFormSettings.formGroupValues = data;
      });
    }
    // 删除基地基本信息
    if (btns.type === "remove") {
      this.$confirm("确定删除当前基地吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        this.$postData(
          this.$api.removeSite_siteSetManage,
          {
            fpmpBasBaseId: row.fpmpBasBaseId
          },
          true
        ).then(() => {
          this.$message.success("您已成功删除该基地!");
          this.initPageData();
        });
      });
    }
    // 启用禁用基地基本信息
    if (btns.type === "open" || btns.type === "closed") {
      let updateType = btns.type === "open" ? "N" : "Y",
        quote = btns.type === "open" ? "启用" : "禁用";
      this.$confirm(`您确定要${quote}该基地信息？`, "确认", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        this.$postData(
          this.$api.updateStatusBatchSite_siteSetManage,
          {
            ids: [row.fpmpBasBaseId],
            disabled: updateType
          },
          true
        ).then(() => {
          this.$message.success(`${quote}成功!`);
          this.initPageData();
        });
      });
    }
    // 编辑基地土地信息
    if (btns.type === "editGround") {
      this.getCurrentSiteGroundDetail(row.fpmpBaseLandId).then(data => {
        this.dialogChildFormSettings.dialogFormVisible = true;
        this.dialogChildFormSettings.dialogFormTitle = "土地详情";
        this.dialogChildFormSettings.dialogFormItems = {
          formGroupValues: data,
          formGroupList: this.dialogGroundContentItems,
          formButtonList: this.dialogGroundEditButton,
          rules: this.dialogGroundContentItemsRule
        };
      });
    }
    // 删除基地土地信息
    if (btns.type === "removeGround") {
      this.$confirm("确定删除当前土地吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        this.$postData(
          this.$api.removeSiteGround_siteGroundSetManage,
          {
            fpmpBaseLandId: row.fpmpBaseLandId
          },
          true
        ).then(() => {
          this.$message.success("您已成功删除该土地!");
          this.handleTabClick();
        });
      });
    }
    // 启用禁用基地土地信息
    if (btns.type === "openGround" || btns.type === "closedGround") {
      let updateType = btns.type === "openGround" ? "N" : "Y",
        quote = btns.type === "openGround" ? "启用" : "禁用";
      this.$confirm(`您确定要${quote}该土地信息？`, "确认", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        this.$postData(
          this.$api.updateStatusBatchSiteGround_siteGroundSetManage,
          {
            ids: [row.fpmpBaseLandId],
            fpmpBasBaseId: row.fpmpBasBaseId,
            disabled: updateType
          },
          true
        ).then(() => {
          this.$message.success(`${quote}成功!`);
          this.handleTabClick();
        });
      });
    }
    // 编辑基地机械信息
    if (btns.type === "editMachinery") {
      this.getCurrentSiteMachineryDetail(row.fpmpBasBaseMachineryId).then(
        data => {
          data.model = data.machinery.model;
          data.dimensions = data.machinery.dimensions;
          data.efficiency = data.machinery.efficiency;
          data.machineryExplain = data.machinery.machineryExplain;
          this.dialogChildFormSettings.dialogFormVisible = true;
          this.dialogChildFormSettings.dialogFormTitle = "机械详情";
          this.dialogChildFormSettings.dialogFormItems = {
            formGroupValues: data,
            formGroupList: this.dialogMachineryContentItems,
            formButtonList: this.dialogMachineryEditButton,
            rules: this.dialogMachineryContentItemsRule
          };
        }
      );
    }
    // 删除基地机械信息
    if (btns.type === "removeMachinery") {
      this.$confirm("确定删除当前机械吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        this.$postData(
          this.$api.removeSiteMachinery_siteMachinerySetManage,
          {
            fpmpBasBaseMachineryId: row.fpmpBasBaseMachineryId
          },
          true
        ).then(() => {
          this.$message.success("您已成功删除该机械!");
          this.handleTabClick();
        });
      });
    }
  },
  /**
   * 弹框表单change事件
   */
  handleSelectionChange(flag, data) {
    if (flag == "fpmpBasMachineryId") {
      this.allMachinerylist.map(item => {
        if (item.fpmpBasMachineryId == data) {
          item.fpmpBasBaseId = this.detailInfoFormSettings.formGroupValues.fpmpBasBaseId;
          this.dialogChildFormSettings.dialogFormItems.formGroupValues = item;
        }
      });
    }
  },
  /**
   * 弹框确认按钮
   */
  handleDialogForm(button, data) {
    if (button.flag === "cancel") {
      if (button.module) {
        this.dialogChildFormSettings.dialogFormVisible = false;
        return;
      } else {
        this.dialogFormSettings.dialogFormVisible = false;
        return;
      }
    }
    // 编码不可以修改，所以不传给后台
    if (data.code) {
      delete data.code;
    }
    let flag = true;
    if (
      button.postUrl == "insertSiteGround_siteGroundSetManage" ||
      button.postUrl == "updateSiteGround_siteGroundSetManage"
    ) {
      flag = false;
    }
    this.$postData(this.$api[button.postUrl], data, flag).then(() => {
      this.$message.success("保存成功!");
      if (button.module) {
        this.dialogChildFormSettings.dialogFormVisible = false;
        this.handleTabClick();
      } else {
        this.initPageData();
        this.dialogFormSettings.dialogFormVisible = false;
        this.dialogFormSettings.dialogFormItems.formGroupValues = {};
      }
    });
  },
  /**
   * 点击弹窗内标签卡事件
   */
  handleTabClick() {
    if (this.activeName == "ground") {
      this.getCurrentSiteGroundList(
        this.detailInfoFormSettings.formGroupValues.fpmpBasBaseId
      ).then(xhr => {
        let groundData = this.$globalFnc.deepCopy(xhr.rows);
        groundData.map(item => {
          item.operateBtns = [
            {
              text: "编辑",
              type: "editGround",
              class: "text-primary fontSize20 mr10",
              isIcon: true
            },
            {
              text: item.disabled == "Y" ? "启用" : "禁用",
              type: item.disabled == "Y" ? "openGround" : "closedGround",
              class: "text-primary fontSize20 mr10",
              isIcon: true
            },
            {
              text: "删除",
              type: "removeGround",
              class: "text-danger fontSize20 mr10",
              isIcon: true
            }
          ];
        });
        this.groundTableSettings.tableDatas = groundData;
        this.groundPaginationSettings.totalNumbers = xhr.total;
      });
    }
    if (this.activeName == "machinery") {
      this.getCurrentSiteMachineryList(
        this.detailInfoFormSettings.formGroupValues.fpmpBasBaseId
      ).then(xhr => {
        let machineryData = this.$globalFnc.deepCopy(xhr.rows);
        machineryData.map(item => {
          item.code = item.machinery.code;
          item.name = item.machinery.name;
          item.model = item.machinery.model;
          item.efficiency = item.machinery.efficiency;
          item.operateBtns = [
            {
              text: "编辑",
              type: "editMachinery",
              class: "text-primary fontSize20 mr10",
              isIcon: true
            },
            {
              text: "删除",
              type: "removeMachinery",
              class: "text-danger fontSize20 mr10",
              isIcon: true
            }
          ];
        });
        this.machineryTableSettings.tableDatas = machineryData;
        this.machineryPaginationSettings.totalNumbers = xhr.total;
      });
    }
  },
  /**
   * 点击弹窗内详情事件
   */
  handleDetailInfoFormBtn(btns, formData) {
    if (btns.flag === "cancel") {
      this.dialogFormSettings.dialogFormVisible = false;
      return;
    }
    let postData = this.$globalFnc.deepCopy(formData);
    postData.spDistrict = "22";
    postData.baseManager = "33";
    postData.technicalDirector = "44";
    this.$postData(this.$api[btns.postUrl], postData, true).then(() => {
      this.$message.success("保存成功!");
      this.panelDisabled = false;
      this.activeName = "ground";
    });
  },
  /**
   * 获取单条基地详情
   */
  getSingleDetailInfo(id) {
    return new Promise(resolve => {
      this.$getData(this.$api.loadSiteDetail_siteSetManage, {
        id: id
      }).then(data => {
        resolve(data.data);
      });
    });
  },
  /**
   * 获取当前基地土地信息列表
   */
  getCurrentSiteGroundList(id) {
    return new Promise(resolve => {
      this.$getData(this.$api.getSiteGroundListPage_siteGroundSetManage, {
        fpmpBasBaseId: id
      }).then(data => {
        resolve(data);
      });
    });
  },
  /**
   * 根据id获取基地土地信息详情
   */
  getCurrentSiteGroundDetail(id) {
    return new Promise(resolve => {
      this.$getData(this.$api.loadSiteGroundDetail_siteGroundSetManage, {
        id: id
      }).then(data => {
        resolve(data.data);
      });
    });
  },
  /**
   * 获取当前基地机械信息列表
   */
  getCurrentSiteMachineryList(id) {
    return new Promise(resolve => {
      this.$getData(this.$api.getSiteMachineryListPage_siteMachinerySetManage, {
        fpmpBasBaseId: id
      }).then(data => {
        resolve(data);
      });
    });
  },
  /**
   * 根据id获取基地机械信息详情
   */
  getCurrentSiteMachineryDetail(id) {
    return new Promise(resolve => {
      this.$getData(this.$api.loadSiteMachineryDetail_siteMachinerySetManage, {
        id: id
      }).then(data => {
        resolve(data.data);
      });
    });
  },
  /**
   * 获取所有机械设备信息列表
   */
  getAllMachinerylist() {
    return new Promise(resolve => {
      this.$getData(this.$api.getMachineryListAll_machinerySetManage, {}).then(
        data => {
          resolve(data.data);
        }
      );
    });
  }
};
export default methods;
