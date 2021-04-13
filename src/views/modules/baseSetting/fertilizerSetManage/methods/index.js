const methods = {
  /**
   *  初始化页面
   */
  initPageData() {
    let defaultdatas = this.$globalFnc.deepCopy(
      this.$refs.searchForm.formGroupSettings.formGroupValues
    );
    this.handleSearchFormBtn(
      { postUrl: "getFertilizerListPage_fertilizerSetManage" },
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
      this.dialogFormSettings.dialogFormTitle = "新增肥料信息";
      // 加载表单组
      this.dialogFormSettings.dialogFormItems.formButtonList = this.dialogAddButton;
      formGroupList = this.$globalFnc.deepCopy(this.dialogContentItems);
      this.dialogFormSettings.dialogFormItems.formGroupList = formGroupList;
      this.dialogFormSettings.dialogFormVisible = true;
      this.dialogFormSettings.dialogFormItems.formGroupValues = {
        disabled: "N"
      };
    }
    if (data.flag === "delete") {
      if (!this.chosedUnitData.length) {
        this.$message.warning("请选择需删除的肥料信息!");
        return;
      }
      let unitId = this.chosedUnitData.map(item => {
        return item.fpmpBasFertilizerId;
      });
      this.$confirm("您确定要删除选中的肥料信息？", "确认", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        this.$postData(
          this.$api.removeBatchFertilizer_fertilizerSetManage,
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
        this.$message.warning(`请选择需${quote}的肥料信息!`);
        return;
      }
      let status = this.chosedUnitData.map(item => {
        return item.disabled;
      });
      if ([...new Set(status)].length > 1) {
        this.$message.warning("请选择相同状态的肥料信息!");
        return;
      }
      let unitId = this.chosedUnitData.map(item => {
        return item.fpmpBasFertilizerId;
      });
      this.$postData(
        this.$api.updateStatusBatchFertilizer_fertilizerSetManage,
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
    if (btns.type === "edit") {
      this.getSingleDetailInfo(row.fpmpBasFertilizerId).then(data => {
        this.dialogFormSettings.dialogFormTitle = "编辑肥料信息";
        // 加载表单组
        this.dialogFormSettings.dialogFormItems.formButtonList = this.dialogEditButton;
        formGroupList = this.$globalFnc.deepCopy(this.dialogContentItems);
        this.dialogFormSettings.dialogFormItems.formGroupList = formGroupList;
        this.dialogFormSettings.dialogFormVisible = true;
        this.dialogFormSettings.dialogFormItems.formGroupValues = data;
      });
    }
    // 删除
    if (btns.type === "remove") {
      this.$confirm("确定删除当前肥料吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        this.$postData(
          this.$api.removeFertilizer_fertilizerSetManage,
          {
            fpmpBasFertilizerId: row.fpmpBasFertilizerId
          },
          true
        ).then(() => {
          this.$message.success("您已成功删除该肥料!");
          this.initPageData();
        });
      });
    } // 启用禁用
    if (btns.type === "open" || btns.type === "closed") {
      let updateType = btns.type === "open" ? "N" : "Y",
        quote = btns.type === "open" ? "启用" : "禁用";
      this.$confirm(`您确定要${quote}该肥料信息？`, "确认", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        this.$postData(
          this.$api.updateStatusBatchFertilizer_fertilizerSetManage,
          {
            ids: [row.fpmpBasFertilizerId],
            disabled: updateType
          },
          true
        ).then(() => {
          this.$message.success(`${quote}成功!`);
          this.initPageData();
        });
      });
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
    // 编码不可以修改，所以不传给后台
    if (data.code) {
      delete data.code;
    }
    this.$postData(this.$api[button.postUrl], data, true).then(() => {
      this.$message.success("保存成功!");
      this.initPageData();
      this.dialogFormSettings.dialogFormVisible = false;
      this.dialogFormSettings.dialogFormItems.formGroupValues = {};
    });
  },
  /**
   * 获取单条肥料详情
   */
  getSingleDetailInfo(id) {
    return new Promise(resolve => {
      this.$getData(this.$api.loadFertilizerDetail_fertilizerSetManage, {
        id: id
      }).then(data => {
        resolve(data.data);
      });
    });
  }
};
export default methods;
