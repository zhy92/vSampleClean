const methods = {
  /**
   *  初始化页面
   */
  initPageData() {
    let defaultdatas = this.$globalFnc.deepCopy(
      this.$refs.searchForm.formGroupSettings.formGroupValues
    );
    this.handleSearchFormBtn(
      { postUrl: "getJoinListPage_joinSetManage" },
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
      for (let prop in item.fpmpJoinApplyBase) {
        item["fpmpJoinApplyBase-" + prop] = item.fpmpJoinApplyBase[prop];
      }
      for (let propt in item.fpmpJoinApplyPerson) {
        item["fpmpJoinApplyPerson-" + propt] = item.fpmpJoinApplyPerson[propt];
      }
      delete item.fpmpJoinApplyBase;
      delete item.fpmpJoinApplyPerson;
      item.operateBtns = [
        {
          text: "编辑",
          type: "edit",
          class: "text-primary fontSize20 mr10",
          isIcon: true
        },
        {
          text: "提交",
          type: "submit",
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
      this.dialogFormSettings.dialogFormTitle = "新增加盟信息";
      // 加载表单组
      this.dialogFormSettings.dialogFormItems.formButtonList = this.dialogAddButton;
      formGroupList = this.$globalFnc.deepCopy(this.dialogContentItems);
      this.dialogFormSettings.dialogFormItems.formGroupList = formGroupList;
      this.dialogFormSettings.dialogFormVisible = true;
      this.dialogFormSettings.dialogFormItems.formGroupValues = {
        disabled: "N"
      };
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
      this.getSingleDetailInfo(row.fpmpJoinApplyId).then(data => {
        this.dialogFormSettings.dialogFormTitle = "编辑加盟信息";
        // 加载表单组
        this.dialogFormSettings.dialogFormItems.formButtonList = this.dialogEditButton;
        formGroupList = this.$globalFnc.deepCopy(this.dialogContentItems);
        this.dialogFormSettings.dialogFormItems.formGroupList = formGroupList;
        this.dialogFormSettings.dialogFormVisible = true;
        this.dialogFormSettings.dialogFormItems.formGroupValues = data;
      });
    }
    // 提交
    if (btns.type === "submit") {
      this.$confirm("确定提交当前加盟信息吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        this.$message.success("接口需要对接");
        // this.$postData(
        //   this.$api.updateStatusBatchJoin_joinSetManage,
        //   {
        //     fpmpJoinApplyId: row.fpmpJoinApplyId
        //   },
        //   true
        // ).then(() => {
        //   this.$message.success("您已成功提交该加盟信息!");
        //   this.initPageData();
        // });
      });
    }
    // 删除
    if (btns.type === "remove") {
      this.$confirm("确定删除当前加盟信息吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        this.$postData(
          this.$api.removeJoin_joinSetManage,
          {
            fpmpJoinApplyId: row.fpmpJoinApplyId
          },
          true
        ).then(() => {
          this.$message.success("您已成功删除该加盟信息!");
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
    if (data.docNo) {
      delete data.docNo;
    }
    let postForm = this.$globalFnc.deepCopy(data);
    postForm.fpmpJoinApplyBase = {};
    postForm.fpmpJoinApplyPerson = {};
    for (let prop in postForm) {
      if (prop.indexOf("-") > -1) {
        if (prop.split("-")[0] == "fpmpJoinApplyBase") {
          postForm.fpmpJoinApplyBase[prop.split("-")[1]] = postForm[prop];
          delete postForm[prop];
        }
        if (prop.split("-")[0] == "fpmpJoinApplyPerson") {
          postForm.fpmpJoinApplyPerson[prop.split("-")[1]] = postForm[prop];
          delete postForm[prop];
        }
      }
    }
    // console.log(postForm);
    this.$postData(this.$api[button.postUrl], postForm, true).then(() => {
      this.$message.success("保存成功!");
      this.initPageData();
      this.dialogFormSettings.dialogFormVisible = false;
      this.dialogFormSettings.dialogFormItems.formGroupValues = {};
    });
  },
  /**
   * 获取单条加盟详情
   */
  getSingleDetailInfo(id) {
    return new Promise(resolve => {
      this.$getData(this.$api.loadJoinDetail_joinSetManage, {
        id: id
      }).then(data => {
        for (let prop in data.data.fpmpJoinApplyBase) {
          data.data["fpmpJoinApplyBase-" + prop] =
            data.data.fpmpJoinApplyBase[prop];
        }
        for (let propt in data.data.fpmpJoinApplyPerson) {
          data.data["fpmpJoinApplyPerson-" + propt] =
            data.data.fpmpJoinApplyPerson[propt];
        }
        delete data.data.fpmpJoinApplyBase;
        delete data.data.fpmpJoinApplyPerson;
        resolve(data.data);
      });
    });
  }
};
export default methods;
