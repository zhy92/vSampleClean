const methods = {
  /**
   *  初始化页面
   */
  initPageData() {
    let defaultdatas = this.$globalFnc.deepCopy(
      this.$refs.searchForm.formGroupSettings.formGroupValues
    );
    this.handleSearchFormBtn({ postUrl: "plantPlanPageData" }, defaultdatas);
  },
  /**
   *  根据搜索条件获取列表信息
   */
  handleSearchFormBtn(btns, formData) {
    if (btns.flag === "search") {
      this.paginationSettings.currentPage = 1;
    }
    if (btns.flag === "clear") {
      this.paginationSettings.currentPage = 1;
      this.searchFormSettings.formGroupValues = {};
      formData = {};
    }
    let options = {
        vm: this
      },
      baseForm = {
        page: this.paginationSettings.currentPage,
        rows: this.$global.paginationOption.numberPerpage
      },
      params = Object.assign({}, baseForm, formData);
    this.tableSettings.tableDatas = [];
    this.$searchformBtnAction(btns, params, options).then(data => {
      this.setTableList(data);
    });
  },
  // 格式化table数据
  setTableList(data) {
    let plantPlanList = this.$globalFnc.deepCopy(data.rows);
    plantPlanList.map(item => {
      // 按钮
      item.operateBtns =
        item.processinstStatus !== "end"
          ? [
              {
                text: "编辑",
                type: "edit",
                class: "text-primary fontSize20 mr10",
                isIcon: true
              },
              {
                text: "送审",
                type: "submit",
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
          : [
              {
                text: "查看",
                type: "look",
                class: "text-primary fontSize20 mr10",
                isIcon: true
              }
            ];
    });
    this.tableSettings.tableDatas = plantPlanList;
    this.paginationSettings.totalNumbers = data.total;
  },
  // 表单值选定修改事件
  handleChangeSelect(linkName, data) {},
  // 赋值
  setGroupFormValue(array, name, data) {
    array.forEach(item => {
      if (item.name === name) {
        item.data = data;
      }
    });
  },
  /**
   * operateButtons点击事件
   */
  handleOperateButton(data) {
    if (data.flag === "add") {
      this.dialogFormSettings.dialogFormTitle = "新增种植计划";
      this.dialogFormSettings.dialogFormItems.formButtonList = this.addButton;
      this.dialogFormSettings.dialogFormItems.formGroupValues = {
        docNo: "系统自动生成",
        businessDate: this.$globalFnc.dateStampFormat(
          new Date().getTime(),
          "ymd"
        ),
        processinstStatus: "1"
      };
      this.contentItems.map(dialogItem => {
        if (
          dialogItem.name !== "docNo" &&
          dialogItem.name !== "created" &&
          dialogItem.name !== "processinstStatus"
        ) {
          dialogItem.disabled = false;
        }
      });
      this.baseDetailTableHeader.forEach(item => {
        if (item.key === "num") {
          item.disabled = false;
        }
      });
      this.baseDetailOperateButtonsSettings.buttonListData = this.baseDetailOperateButtons;
      this.landsDetailOperateButtonsSettings.buttonListData = this.landsDetailOperateButtons;
      this.dialogFormSettings.dialogFormVisible = true;
    }
    if (data.flag === "choiceBasePage") {
      // 基地信息选择页，选中的数据
      // this.chosedBaseData = [];
      // let materialDetail = this.dialogFormSettings.dialogFormItems
      //   .formGroupValues[this.baseDetailTableSettings.name];
      // if (materialDetail && materialDetail.length) {
      //   materialDetail.forEach(item => {
      //     this.chosedMaterialData.push({
      //       code: item.code
      //     });
      //   });
      // }
      this.choiceBasePageDialog.dialogName = "基地明细添加";
      this.choiceBasePageDialog.dialogVisible = true;

      // 清空搜素内容
      this.baseSearchFormSettings.formGroupValues = {};
      // 分页重新赋值
      this.basePaginationSettings.currentPage = 1;
      this.setBaseSearchForm();
      this.initBasePage();
    }
    if (data.flag === "choiceLandsPage") {
      this.choiceLandsPageDialog.dialogName = "土地明细添加";
      this.choiceLandsPageDialog.dialogVisible = true;

      // 清空搜素内容
      this.landsSearchFormSettings.formGroupValues = {};
      // 分页重新赋值
      this.landsPaginationSettings.currentPage = 1;
      this.initLandsPage();
    }
    if (data.flag === "deleteMaterialDetail") {
      if (!this.chosedMaterialDetail.length) {
        this.$message.warning("请选择需删除的物资明细");
        return;
      }
      // 明细表格数据删除
      let materialList = this.dialogFormSettings.dialogFormItems
        .formGroupValues[this.baseDetailTableSettings.name];
      for (let i = 0; i < materialList.length; i++) {
        for (let j = 0; j < this.chosedMaterialDetail.length; j++) {
          if (materialList[i].code == this.chosedMaterialDetail[j].code) {
            materialList.splice(i, 1);
          }
        }
      }
      // 调拨选择页 选中删除
      for (let i = 0; i < this.chosedMaterialData.length; i++) {
        for (let j = 0; j < this.chosedMaterialDetail.length; j++) {
          if (
            this.chosedMaterialData[i].code == this.chosedMaterialDetail[j].code
          ) {
            this.chosedMaterialData.splice(i, 1);
          }
        }
      }
      // 删除成功后清空选择
      this.chosedMaterialDetail = [];
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
  //首页，分页切换
  handlePaginationPagenumber(val) {
    this.paginationSettings.currentPage = val;
    this.initPageData();
  },
  handleTableRowButton(row, btns) {
    if (btns.type === "delete") {
      // 删除
      this.$confirm("确定删除当前调拨单吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        this.$postData(this.$api.removeRequisitionCertify, {
          id: row.emmsDocRequisitionId
        }).then(() => {
          this.$message.success("您已成功删除该调拨单!");
          this.initPageData();
        });
      });
      return;
    }
    if (btns.type === "submit") {
      this.$confirm("请核对调拨单信息，操作后不能再做任何修改", "提示", {
        dangerouslyUseHTMLString: true,
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        this.$postData(this.$api.requisitionCertifyStatus, {
          emmsDocRequisitionId: row.emmsDocRequisitionId,
          processinstStatus: "end"
        }).then(() => {
          this.$message.success("操作成功!");
          this.initPageData();
        });
      });
      return;
    }
    if (btns.type === "edit") {
      this.dialogFormSettings.dialogFormTitle = "编辑调拨单";
      this.dialogFormSettings.dialogFormItems.formButtonList = this.editButton;
      this.contentItems.forEach(item => {
        if (item.name !== "docNo" && item.name !== "created") {
          item.disabled = false;
        }
      });
      this.detailTableHeader.forEach(item => {
        if (item.key === "num") {
          item.disabled = false;
        }
      });
      this.dialogOperateButtonsSettings.buttonListData = this.materialDetailOperateButtons;
    }
    if (btns.type === "look") {
      this.dialogFormSettings.dialogFormTitle = "查看调拨单";
      this.dialogFormSettings.dialogFormItems.formButtonList = [
        {
          flag: "cancel",
          size: "",
          icon: "",
          label: "关闭",
          styleType: ""
        }
      ];
      this.contentItems.forEach(item => {
        item.disabled = true;
      });
      this.detailTableHeader.forEach(item => {
        item.disabled = true;
      });
      this.dialogOperateButtonsSettings.buttonListData = [];
    }
    // 编辑
    this.$getData(this.$api.singleRequisitionCertifyData, {
      id: row.emmsDocRequisitionId
    }).then(xhr => {
      this.getStorePointList(xhr.data.storeOrgId).then(res => {
        this.contentItems.map(dialogItem => {
          if (dialogItem.name == "storepointId") {
            dialogItem.data = res;
          }
        });
      });
      if (xhr.data.requisitionDtls && xhr.data.requisitionDtls.length) {
        xhr.data.requisitionDtls.forEach(item => {
          // 物资信息
          if (item.basMaterial) {
            for (let key in item.basMaterial) {
              item[key] = item.basMaterial[key];
            }
            if (item.basMaterialType) {
              item.materialTypeName = item.basMaterialType.name;
            }
            if (item.basUnit) {
              item.unitName = item.basUnit.name;
            }
          }
          // 物资规格信息
          if (item.basMaterialSpec) {
            for (let key in item.basMaterialSpec) {
              item[key] = item.basMaterialSpec[key];
            }
          }
        });
      }
      this.dialogFormSettings.dialogFormItems.formGroupValues = xhr.data;
    });
    this.dialogFormSettings.dialogFormVisible = true;
  },
  /**
   * 种植计划详情页 基地明细表格选择事件
   */
  handleTableMutiChecked(data) {
    this.chosedMaterialDetail = [];
    if (data && data.length) {
      this.chosedMaterialDetail = data;
    }
  },
  /**
   *  基地选择页 搜索
   */
  setBaseSearchForm() {
    this.baseSearchFormItems.forEach(item => {
      if (item.name === "type") {
        item.data = this.$store.getters["user/baseInfos"].siteTypelist;
      }
    });
  },
  /**
   *  基地选择页 列表
   */
  initBasePage() {
    let defaultdatas = this.$globalFnc.deepCopy(
      this.baseSearchFormSettings.formGroupValues
    );
    this.handleBaseSearchFormBtn({ postUrl: "baseMessageList" }, defaultdatas);
  },
  handleBaseSearchFormBtn(btns, formData) {
    if (btns.flag === "search") {
      this.basePaginationSettings.currentPage = 1;
    }
    if (btns.flag === "clear") {
      this.basePaginationSettings.currentPage = 1;
      this.baseSearchFormSettings.formGroupValues = {};
      formData = {};
    }
    let options = {
      vm: this
    };
    let baseForm = {
      page: this.basePaginationSettings.currentPage,
      rows: this.$global.paginationOption.numberPerpage
    };
    let params = Object.assign(baseForm, formData);
    this.baseTableSettings.tableDatas = [];
    this.$searchformBtnAction(btns, params, options).then(data => {
      this.setBaseTableList(data);
    });
  },
  setBaseTableList(data) {
    this.baseTableSettings.tableDatas = this.$globalFnc.deepCopy(data.rows);
    this.basePaginationSettings.totalNumbers = data.total;
  },
  handleBasePaginationPageNumber(val) {
    this.basePaginationSettings.currentPage = val;
    this.initBasePage();
  },
  /**
   *  基地选择页 表格选择
   */
  // 选择单行
  handleBaseSelectRow(selection, row) {
    if (!this.chosedBaseData.length) {
      this.chosedBaseData.push(row);
    } else {
      // 这个值用来判断 row 是新增还是删除
      let flag = true,
        i = this.chosedBaseData.length;
      // 判断如果有相同的，就说明是删除，那就删掉
      while (i--) {
        if (this.chosedBaseData[i].code === row.code) {
          this.chosedBaseData.splice(i, 1);
          flag = false;
        }
      }
      // flag === true 说明没找见相同的，那就添加
      if (flag) {
        this.chosedBaseData.push(row);
      }
    }
  },
  // 全选
  handleBaseSelectAll(data) {
    // 如果data是空的，说明是取消全选
    if (!data.length) {
      this.chosedBaseData = this.$globalFnc.compareArrayUnique(
        this.chosedBaseData,
        this.baseTableSettings.tableDatas,
        "fpmpBasBaseId"
      );
    } else {
      // 全选
      data.forEach(item => {
        this.chosedBaseData.push(item);
      });
      // 原来单选添加过得，去重
      this.chosedBaseData = this.$globalFnc.unique(
        this.chosedBaseData,
        "fpmpBasBaseId"
      );
    }
  },
  /**
   *  基地选择页 弹框事件
   */
  handleChoiceBasePageBtns(flag) {
    // 物资选择导入
    if (flag === "import") {
      if (!this.chosedBaseData.length) {
        this.$message.warning("请选择需要导入的基地");
        return;
      }
      let formatList = this.$globalFnc.deepCopy(this.chosedBaseData);
      // formatList.forEach(item => {
      //   item.num = item.noLockNum;
      //   if (item.materialSpec) {
      //     item.emmsBasMaterialSpecId = item.materialSpec.emmsBasMaterialSpecId;
      //   }
      //   if (item.material) {
      //     item.emmsBasMaterialId = item.material.emmsBasMaterialId;
      //   }
      // });
      let materialList = this.dialogFormSettings.dialogFormItems
        .formGroupValues[this.baseDetailTableSettings.name];
      if (materialList && materialList.length) {
        formatList.forEach(item => {
          materialList.forEach(chosedItem => {
            if (item.code === chosedItem.code) {
              item = Object.assign(item, chosedItem);
            }
          });
        });
      }

      this.dialogFormSettings.dialogFormItems.formGroupValues[
        this.baseDetailTableSettings.name
      ] = formatList;

      this.choiceBasePageDialog.dialogVisible = false;
    }
    if (flag === "cancel") {
      this.chosedBaseData = [];
      this.choiceBasePageDialog.dialogVisible = false;
    }
  },
  /**
   *  土地选择页 列表
   */
  initLandsPage() {
    let defaultdatas = this.$globalFnc.deepCopy(
      this.landsSearchFormSettings.formGroupValues
    );
    this.handleLandsSearchFormBtn(
      { postUrl: "landsMessageList" },
      defaultdatas
    );
  },
  handleLandsSearchFormBtn(btns, formData) {
    if (btns.flag === "search") {
      this.landsPaginationSettings.currentPage = 1;
    }
    if (btns.flag === "clear") {
      this.landsPaginationSettings.currentPage = 1;
      this.landsSearchFormSettings.formGroupValues = {};
      formData = {};
    }
    let options = {
      vm: this
    };
    let baseForm = {
      page: this.landsPaginationSettings.currentPage,
      rows: this.$global.paginationOption.numberPerpage
    };
    let params = Object.assign(baseForm, formData);
    this.landsTableSettings.tableDatas = [];
    this.$searchformBtnAction(btns, params, options).then(data => {
      this.setLandsTableList(data);
    });
  },
  setLandsTableList(data) {
    this.landsTableSettings.tableDatas = this.$globalFnc.deepCopy(data.rows);
    this.landsPaginationSettings.totalNumbers = data.total;
  },
  handleLandsPaginationPageNumber(val) {
    this.landsPaginationSettings.currentPage = val;
    this.initBasePage();
  },
  handleLandsSelectRow(selection, row) {
    if (!this.chosedLandsData.length) {
      this.chosedLandsData.push(row);
    } else {
      // 这个值用来判断 row 是新增还是删除
      let flag = true,
        i = this.chosedLandsData.length;
      // 判断如果有相同的，就说明是删除，那就删掉
      while (i--) {
        if (this.chosedLandsData[i].code === row.code) {
          this.chosedLandsData.splice(i, 1);
          flag = false;
        }
      }
      // flag === true 说明没找见相同的，那就添加
      if (flag) {
        this.chosedLandsData.push(row);
      }
    }
  },
  handleLandsSelectAll(data) {
    // 如果data是空的，说明是取消全选
    if (!data.length) {
      this.chosedLandsData = this.$globalFnc.compareArrayUnique(
        this.chosedLandsData,
        this.landsTableSettings.tableDatas,
        "fpmpBasBaseId"
      );
    } else {
      // 全选
      data.forEach(item => {
        this.chosedLandsData.push(item);
      });
      // 原来单选添加过得，去重
      this.chosedLandsData = this.$globalFnc.unique(
        this.chosedLandsData,
        "fpmpBasBaseId"
      );
    }
  },
  handleChoiceLandsPageBtns(flag) {
    // 土地选择导入
    if (flag === "import") {
      if (!this.chosedLandsData.length) {
        this.$message.warning("请选择需要导入的土地");
        return;
      }
      let formatList = this.$globalFnc.deepCopy(this.chosedLandsData);
      // formatList.forEach(item => {
      //   item.num = item.noLockNum;
      //   if (item.materialSpec) {
      //     item.emmsBasMaterialSpecId = item.materialSpec.emmsBasMaterialSpecId;
      //   }
      //   if (item.material) {
      //     item.emmsBasMaterialId = item.material.emmsBasMaterialId;
      //   }
      // });
      // let materialList = this.dialogFormSettings.dialogFormItems
      //   .formGroupValues[this.baseDetailTableSettings.name];
      // if (materialList && materialList.length) {
      //   formatList.forEach(item => {
      //     materialList.forEach(chosedItem => {
      //       if (item.code === chosedItem.code) {
      //         item = Object.assign(item, chosedItem);
      //       }
      //     });
      //   });
      // }

      this.dialogFormSettings.dialogFormItems.formGroupValues[
        this.landsDetailTableSettings.name
      ] = formatList;

      this.choiceLandsPageDialog.dialogVisible = false;
    }
    if (flag === "cancel") {
      this.chosedLandsData = [];
      this.choiceLandsPageDialog.dialogVisible = false;
    }
  },
  /**
   * 弹框确认按钮
   */
  handleDialogForm(button, formData) {
    if (button.flag === "cancel") {
      this.dialogFormSettings.dialogFormVisible = false;
      this.chosedMaterialData = [];
      this.dialogFormSettings.dialogFormItems.formGroupValues = {};
      return;
    }
    if (
      !this.dialogFormSettings.dialogFormItems.formGroupValues[
        this.baseDetailTableSettings.name
      ] ||
      !this.dialogFormSettings.dialogFormItems.formGroupValues[
        this.baseDetailTableSettings.name
      ].length
    ) {
      this.$message.warning("请添加调拨明细");
      return;
    }

    let submit = this.$globalFnc.deepCopy(formData);
    // 承储单位
    let storeOrgId =
      typeof formData.storeOrgId === "object"
        ? formData.storeOrgId[formData.storeOrgId.length - 1]
        : formData.storeOrgId;
    submit.storeOrgId = storeOrgId;
    // 明细
    submit[
      this.baseDetailTableSettings.name
    ] = this.dialogFormSettings.dialogFormItems.formGroupValues[
      this.baseDetailTableSettings.name
    ];
    // 单号自动生成，不需要
    delete submit.docNo;

    // 送审改状态
    if (button.flag === "submit") {
      this.$confirm("请核对调拨单信息，操作后不能再做任何修改", "提示", {
        dangerouslyUseHTMLString: true,
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        submit.processinstStatus = "end";
        this.handleSaveData(button, submit);
      });
    } else {
      this.handleSaveData(button, submit);
    }
  },
  handleSaveData(button, formData) {
    // 保存
    this.$postData(button.postUrl, formData, true).then(() => {
      this.$message.success("操作成功!");
      this.dialogFormSettings.dialogFormVisible = false;
      this.dialogFormSettings.dialogFormItems.formGroupValues = {};
      this.chosedMaterialData = [];
      this.initPageData();
    });
  },
  /**
   * 获取库点
   */
  getStorePointList(id) {
    return new Promise(reslove => {
      this.$getData(this.$api.getStorePointList_common, {
        orgid: id ? id : this.$store.getters["user/userInfos"].orgId,
        districtFlag: false,
        sysType: "oh-emms"
      }).then(res => {
        let data = this.$globalFnc.arrayToFormDropdown(res, "name", "spId");
        reslove(data);
      });
    });
  },
  /**
   * 获取仓房
   */
  getStoreHouseList(id) {
    return new Promise(reslove => {
      this.$getData(this.$api.dictList_common, {
        _refKey: "storehouse",
        status: "1",
        spId: id
      }).then(res => {
        let data = this.$globalFnc.arrayToFormDropdown(res, "text", "value");
        reslove(data);
      });
    });
  }
};
export default methods;
