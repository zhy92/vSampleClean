const methods = {
  /**
   *  初始化页面
   */
  initPageData() {
    let defaultdatas = this.$globalFnc.deepCopy(
      this.$refs.searchForm.formGroupSettings.formGroupValues
    );
    this.handleSearchFormBtn(
      { postUrl: "getCropListPage_cropSetManage" },
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
    let unitList = this.$globalFnc.deepCopy(data.rows);
    unitList.map(item => {
      item.operateBtns = [
        {
          text: "编辑",
          type: "edit",
          class: "text-primary fontSize20 mr10",
          isIcon: true
        }
      ];
      item.wmsBasGrainseed__dsp = item.wmsBasGrainseed.name;
      item.corpType__dsp = item.wmsBasGrainbreed.name;
      item.corpCode = item.wmsBasGrainseed.code;
      item.intervalDate = "";
      if (item.intervalStart && item.intervalEnd) {
        item.intervalDate = item.intervalStart + "-" + item.intervalEnd;
      } else if (!item.intervalStart && item.intervalEnd) {
        item.intervalDate = item.intervalEnd;
      } else if (item.intervalStart && !item.intervalEnd) {
        item.intervalDate = item.intervalStart;
      }
    });
    this.tableSettings.tableDatas = unitList;
    this.paginationSettings.totalNumbers = data.total;
  },
  /**
   * operateButtons点击事件
   */
  handleOperateButton(data) {
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
      this.getSingleDetailInfo(row.wmsBasGrainseedId).then(data => {
        this.dialogFormSettings.dialogFormTitle = "编辑计量单位信息";
        // 加载表单组
        this.dialogFormSettings.dialogFormItems.formButtonList = this.dialogEditButton;
        formGroupList = this.$globalFnc.deepCopy(this.dialogContentItems);
        this.dialogFormSettings.dialogFormItems.formGroupList = formGroupList;
        this.dialogFormSettings.dialogFormVisible = true;
        data.wmsBasGrainseed__dsp = data.wmsBasGrainseed.name;
        data.corpType__dsp = data.wmsBasGrainbreed.name;
        data.corpCode = data.wmsBasGrainseed.code;
        this.dialogFormSettings.dialogFormItems.formGroupValues = data;
      });
    }
  },
  // 表单值选定修改事件
  handleChangeSelect(linkname, data) {
    if (linkname == "intervalStart") {
      if (
        this.dialogFormSettings.dialogFormItems.formGroupValues.intervalEnd &&
        Number(data) >
          Number(
            this.dialogFormSettings.dialogFormItems.formGroupValues.intervalEnd
          )
      ) {
        this.dialogFormSettings.dialogFormItems.formGroupValues.intervalStart =
          "";
        this.$message.error("生育日数(起)应小于等于生育日数(止)");
      }
    }
    if (linkname == "intervalEnd") {
      if (
        this.dialogFormSettings.dialogFormItems.formGroupValues.intervalStart &&
        Number(data) <
          Number(
            this.dialogFormSettings.dialogFormItems.formGroupValues
              .intervalStart
          )
      ) {
        this.dialogFormSettings.dialogFormItems.formGroupValues.intervalEnd =
          "";
        this.$message.error("生育日数(止)应大于等于生育日数(起)");
      }
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
   * 获取列表单条数据详情
   */
  getSingleDetailInfo(id) {
    return new Promise(resolve => {
      this.$getData(this.$api.loadCropDetail_cropSetManage, {
        wmsBasGrainseedId: id
      }).then(data => {
        resolve(data.data);
      });
    });
  }
};
export default methods;
