const methods = {
  /**
   *  初始化页面
   */
  initPageData() {
    let defaultdatas = this.$globalFnc.deepCopy(
      this.$refs.searchForm.formGroupSettings.formGroupValues
    );
    this.handleSearchFormBtn(
      { postUrl: "getStandardlevelListPage_standardlevelSetManage" },
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
      this.dialogFormSettings.dialogFormTitle = "新增种子品种分级信息";
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
        this.$message.warning("请选择需删除的种子品种分级信息!");
        return;
      }
      let unitId = this.chosedUnitData.map(item => {
        return item.fpmpBasStandardLevelId;
      });
      this.$confirm("您确定要删除选中的种子品种分级信息？", "确认", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        this.$postData(
          this.$api.removeBatchStandardlevel_standardlevelSetManage,
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
        this.$message.warning(`请选择需${quote}的种子品种分级信息!`);
        return;
      }
      let status = this.chosedUnitData.map(item => {
        return item.disabled;
      });
      if ([...new Set(status)].length > 1) {
        this.$message.warning("请选择相同状态的种子品种分级信息!");
        return;
      }
      let unitId = this.chosedUnitData.map(item => {
        return item.fpmpBasStandardLevelId;
      });
      this.$postData(
        this.$api.updateStatusBatchStandardlevel_standardlevelSetManage,
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
    if (data.flag === "addDetail") {
      let detailObj = {
        level__selectOption: this.$store.getters["user/baseInfos"]
          .seedLevellist,
        level: "",
        purity: "",
        cleanliness: "",
        germinatingRatio: "",
        waterContent: "",
        echinochloaSeeds: "",
        id: this.detailTableDatas.length + 1
      };
      this.detailTableDatas.push(detailObj);
    }
    if (data.flag === "removeDetail") {
      let bakdatas = this.$globalFnc.deepCopy(this.detailTableDatas);
      bakdatas.map(item => {
        let flag = false;
        this.toBeRemoveDetaillist.map(removeItem => {
          if (item.id == removeItem.id) {
            flag = true;
          }
        });
        if (flag) {
          item.delFlag = true;
        }
      });
      this.detailTableDatas = bakdatas.filter(item => !item.delFlag);
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
   * 明细表表格选择事件
   */
  handleDetailTableMutiChecked(data) {
    this.toBeRemoveDetaillist = [];
    if (data && data.length) {
      this.toBeRemoveDetaillist = data;
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
      this.getSingleDetailInfo(row.fpmpBasStandardLevelId).then(data => {
        this.dialogFormSettings.dialogFormTitle = "编辑种子品种分级信息";
        // 加载表单组
        this.dialogFormSettings.dialogFormItems.formButtonList = this.dialogEditButton;
        formGroupList = this.$globalFnc.deepCopy(this.dialogContentItems);
        this.dialogFormSettings.dialogFormItems.formGroupList = formGroupList;
        this.dialogFormSettings.dialogFormVisible = true;
        this.dialogFormSettings.dialogFormItems.formGroupValues = data;
        data.standardLevelDtls.map(item => {
          item.level__selectOption = this.$store.getters[
            "user/baseInfos"
          ].seedLevellist;
        });
        this.detailTableDatas = data.standardLevelDtls;
      });
    }
    // 删除
    if (btns.type === "remove") {
      this.$confirm("确定删除当前种子品种分级吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        this.$postData(
          this.$api.removeStandardlevel_standardlevelSetManage,
          {
            fpmpBasStandardLevelId: row.fpmpBasStandardLevelId
          },
          true
        ).then(() => {
          this.$message.success("您已成功删除该种子品种分级!");
          this.initPageData();
        });
      });
    } // 启用禁用
    if (btns.type === "open" || btns.type === "closed") {
      let updateType = btns.type === "open" ? "N" : "Y",
        quote = btns.type === "open" ? "启用" : "禁用";
      this.$confirm(`您确定要${quote}该种子品种分级信息？`, "确认", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        this.$postData(
          this.$api.updateStatusBatchStandardlevel_standardlevelSetManage,
          {
            ids: [row.fpmpBasStandardLevelId],
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
    let postflag = true;
    if (this.detailTableDatas.length < 1) {
      this.$message.error("请添加明细表数据");
      return false;
    }
    this.detailTableDatas.map(item => {
      for (let key in item) {
        if (!item[key]) {
          postflag = false;
        }
      }
    });
    if (!postflag) {
      this.$message.error("明细表数据均为必填项，请完善后再保存");
      return false;
    }
    let postParams = this.$globalFnc.deepCopy(data);
    postParams.standardLevelDtls = this.detailTableDatas;

    this.$postData(this.$api[button.postUrl], postParams, true).then(() => {
      this.$message.success("保存成功!");
      this.initPageData();
      this.dialogFormSettings.dialogFormVisible = false;
      this.dialogFormSettings.dialogFormItems.formGroupValues = {};
    });
  },
  /**
   * 获取单条种子品种分级详情
   */
  getSingleDetailInfo(id) {
    return new Promise(resolve => {
      this.$getData(this.$api.loadStandardlevelDetail_standardlevelSetManage, {
        id: id
      }).then(data => {
        resolve(data.data);
      });
    });
  }
};
export default methods;
