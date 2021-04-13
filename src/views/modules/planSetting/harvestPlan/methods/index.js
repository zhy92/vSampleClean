const methods = {
  /**
   *  初始化页面
   */
  initPageData() {
    let defaultdatas = this.$globalFnc.deepCopy(
      this.$refs.searchForm.formGroupSettings.formGroupValues
    );
    this.handleSearchFormBtn(
      { postUrl: "getRequisitionCertifyList" },
      defaultdatas
    );
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
    };
    let filterRules = [];
    // 单据日期
    if (formData.businessDate) {
      filterRules.push({
        field: "requisition.businessDate",
        op: ">=",
        value: formData.businessDate[0]
      });
      filterRules.push({
        field: "requisition.businessDate",
        op: "<",
        value: formData.businessDate[1]
      });
    }
    // 组织机构
    if (formData.storeOrgId && formData.storeOrgId.length > 0) {
      filterRules.push({
        field: "storeOrgId",
        op: "=",
        value: formData.storeOrgId[formData.storeOrgId.length - 1]
      });
    }
    if (formData.storepointId) {
      filterRules.push({
        field: "requisition.storepointId",
        op: "=",
        value: formData.storepointId
      });
    }
    // 送达地点
    if (formData.destination) {
      filterRules.push({
        field: "requisition.destination",
        op: "contains",
        value: formData.destination
      });
    }
    // 单号
    if (formData.docNo) {
      filterRules.push({
        field: "requisition.docNo",
        op: "=",
        value: formData.docNo
      });
    }
    // 状态
    if (formData.processinstStatus) {
      filterRules.push({
        field: "requisition.processinstStatus",
        op: "=",
        value: formData.processinstStatus
      });
    }
    let baseForm = {
      page: this.paginationSettings.currentPage,
      limit: this.$global.paginationOption.numberPerpage,
      filterRules: JSON.stringify(filterRules)
    };

    this.tableSettings.tableDatas = [];
    this.$searchformBtnAction(btns, baseForm, options).then(data => {
      this.setTableList(data);
    });
  },
  // 格式化table数据
  setTableList(data) {
    let requisitionCertifyList = this.$globalFnc.deepCopy(data.rows);
    requisitionCertifyList.map(item => {
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
    this.tableSettings.tableDatas = requisitionCertifyList;
    this.paginationSettings.totalNumbers = data.total;
  },
  // 表单值选定修改事件
  handleChangeSelect(linkName, data) {
    // 根据组织机构获取库点列表
    if (linkName === "changeDialogOrg") {
      // 选择承储单位以后  库点 明细等信息要清空
      this.chosedMaterialData = [];
      this.dialogFormSettings.dialogFormItems.formGroupValues.storepointId = "";
      this.dialogFormSettings.dialogFormItems.formGroupValues[
        this.dialogInputTableSettings.name
      ] = [];
    }
    if (linkName === "changeDialogStorePoint") {
      this.chosedMaterialData = [];
      this.dialogFormSettings.dialogFormItems.formGroupValues[
        this.dialogInputTableSettings.name
      ] = [];
    }
    if (linkName === "changeOrg" || linkName === "changeDialogOrg") {
      if (data && data.length) {
        this.getStorePointList(data[data.length - 1]).then(res => {
          let list = this.$globalFnc.arrayToFormDropdown(res, "name", "spId");
          // 搜索
          if (linkName === "changeOrg") {
            this.setGroupFormValue(this.searchFormItems, "storepointId", list);
          } else {
            this.setGroupFormValue(this.contentItems, "storepointId", list);
          }
        });
      } else {
        if (linkName === "changeOrg") {
          this.setGroupFormValue(this.searchFormItems, "storepointId", []);
        } else {
          this.setGroupFormValue(this.contentItems, "storepointId", []);
        }
      }
    }
  },
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
      this.dialogFormSettings.dialogFormTitle = "新增调拨单";
      this.dialogFormSettings.dialogFormItems.formButtonList = this.addButton;
      this.dialogFormSettings.dialogFormItems.formGroupValues = {
        docNo: "系统自动生成",
        created: this.$globalFnc.dateStampFormat(new Date().getTime()),
        businessDate: this.$globalFnc.dateStampFormat(
          new Date().getTime(),
          "ymd"
        ),
        storeOrgId: [this.$store.getters["user/userInfos"].orgId],
        storepointId: this.$store.getters["user/userInfos"].storePointId
          ? this.$store.getters["user/userInfos"].storePointId
          : ""
      };
      this.contentItems.map(dialogItem => {
        if (dialogItem.name !== "docNo" && dialogItem.name !== "created") {
          dialogItem.disabled = false;
        }
        if (dialogItem.name === "storepointId") {
          this.getStorePointList().then(res => {
            dialogItem.data = res;
          });
        }
      });
      this.detailTableHeader.forEach(item => {
        if (item.key === "num") {
          item.disabled = false;
        }
      });
      this.dialogOperateButtonsSettings.buttonListData = this.materialDetailOperateButtons;
      this.dialogFormSettings.dialogFormVisible = true;
    }
    if (data.flag === "addMaterialDetail") {
      if (
        !this.dialogFormSettings.dialogFormItems.formGroupValues.storepointId
      ) {
        this.$message.warning("请先选择库点");
        return;
      }
      this.materialSearchFormSettings.formGroupValues = {};

      // 调拨明细添加页 选中回显
      this.chosedMaterialData = [];
      let materialDetail = this.dialogFormSettings.dialogFormItems
        .formGroupValues[this.dialogInputTableSettings.name];
      if (materialDetail && materialDetail.length) {
        materialDetail.forEach(item => {
          this.chosedMaterialData.push({
            code: item.code
          });
        });
      }
      this.materialDetailDialog.dialogName = "调拨明细添加";
      // 加载表单组
      this.materialDetailDialog.formButtonList = this.addMaterialButton;
      this.materialDetailDialog.dialogVisible = true;

      // 清空搜素内容
      this.materialSearchFormSettings.formGroupValues = {};
      // 分页重新赋值
      this.materialPaginationSettings.currentPage = 1;
      this.setMaterialSearchForm();
      this.initMaterialPage();
    }
    if (data.flag === "deleteMaterialDetail") {
      if (!this.chosedMaterialDetail.length) {
        this.$message.warning("请选择需删除的物资明细");
        return;
      }
      // 明细表格数据删除
      let materialList = this.dialogFormSettings.dialogFormItems
        .formGroupValues[this.dialogInputTableSettings.name];
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
   * 调拨详情页 物资明细表格选择事件
   */
  handleTableMutiChecked(data) {
    this.chosedMaterialDetail = [];
    if (data && data.length) {
      this.chosedMaterialDetail = data;
    }
  },
  /**
   *  调拨明细选择页 搜索
   */
  setMaterialSearchForm() {
    this.materialSearchFormItems.forEach(item => {
      if (item.name === "emmsBasMaterialTypeId") {
        item.data = this.$store.getters["user/baseInfos"].materialTypeList;
      }
      if (item.name === "storehouseId") {
        this.getStoreHouseList(
          this.dialogFormSettings.dialogFormItems.formGroupValues.storepointId
        ).then(data => {
          item.data = data;
        });
      }
    });
  },
  /**
   *  调拨明细选择页 列表
   */
  initMaterialPage() {
    let defaultdatas = this.$globalFnc.deepCopy(
      this.materialSearchFormSettings.formGroupValues
    );
    this.handleMaterialSearchFormBtn(
      { postUrl: "getMaterialSummary" },
      defaultdatas
    );
  },
  handleMaterialSearchFormBtn(btns, formData) {
    if (btns.flag === "search") {
      this.materialPaginationSettings.currentPage = 1;
    }
    if (btns.flag === "clear") {
      this.materialPaginationSettings.currentPage = 1;
      this.materialSearchFormSettings.formGroupValues = {};
      formData = {};
    }
    let options = {
      vm: this
    };
    let baseForm = {
      page: this.materialPaginationSettings.currentPage,
      rows: this.$global.paginationOption.numberPerpage,
      storepointId: this.dialogFormSettings.dialogFormItems.formGroupValues
        .storepointId
    };
    let params = Object.assign(baseForm, formData);
    this.materialDetailTableSettings.tableDatas = [];
    this.$searchformBtnAction(btns, params, options).then(data => {
      this.setMaterialTableList(data);
    });
  },
  setMaterialTableList(data) {
    let materialList = this.$globalFnc.deepCopy(data.rows);
    materialList.forEach(item => {
      if (item.material) {
        item.name = item.material.name;
        item.code = item.material.code;
      }
      if (item.materialSpec) {
        item.mType = item.materialSpec.mType;
        item.specs = item.materialSpec.specs;
      }
      if (item.materialType) {
        item.materialTypeName = item.materialType.name;
      }
      if (item.unit) {
        item.unitName = item.unit.name;
      }
    });
    this.materialDetailTableSettings.tableDatas = materialList;
    this.materialPaginationSettings.totalNumbers = data.total;
  },
  handleMaterialPaginationPagenumber(val) {
    this.materialPaginationSettings.currentPage = val;
    this.initMaterialPage();
  },
  /**
   *  调拨明细选择页 表格选择
   */
  // 选择单行
  handleMaterialSelectRow(selection, row) {
    if (!this.chosedMaterialData.length) {
      this.chosedMaterialData.push(row);
    } else {
      // 这个值用来判断 row 是新增还是删除
      let flag = true,
        i = this.chosedMaterialData.length;
      // 判断如果有相同的，就说明是删除，那就删掉
      while (i--) {
        if (this.chosedMaterialData[i].code === row.code) {
          this.chosedMaterialData.splice(i, 1);
          flag = false;
        }
      }
      // flag === true 说明没找见相同的，那就添加
      if (flag) {
        this.chosedMaterialData.push(row);
      }
    }
  },
  // 全选
  handleMaterialSelectAll(data) {
    // 如果data是空的，说明是取消全选
    if (!data.length) {
      this.chosedMaterialData = this.$globalFnc.compareArrayUnique(
        this.chosedMaterialData,
        this.materialDetailTableSettings.tableDatas,
        "code"
      );
    } else {
      // 全选
      data.forEach(item => {
        this.chosedMaterialData.push(item);
      });
      // 原来单选添加过得，去重
      this.chosedMaterialData = this.$globalFnc.unique(
        this.chosedMaterialData,
        "code"
      );
    }
  },
  /**
   *  调拨明细选择页 弹框事件
   */
  handleMaterialDetailDialog(flag) {
    // 物资选择导入
    if (flag === "import") {
      if (!this.chosedMaterialData.length) {
        this.$message.warning("请选择需要导入的物资");
        return;
      }
      let formatList = this.$globalFnc.deepCopy(this.chosedMaterialData);
      formatList.forEach(item => {
        item.num = item.noLockNum;
        if (item.materialSpec) {
          item.emmsBasMaterialSpecId = item.materialSpec.emmsBasMaterialSpecId;
        }
        if (item.material) {
          item.emmsBasMaterialId = item.material.emmsBasMaterialId;
        }
      });
      let materialList = this.dialogFormSettings.dialogFormItems
        .formGroupValues[this.dialogInputTableSettings.name];
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
        this.dialogInputTableSettings.name
      ] = formatList;

      this.materialDetailDialog.dialogVisible = false;
    }
    if (flag === "cancel") {
      this.chosedMaterialData = [];
      this.materialDetailDialog.dialogVisible = false;
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
        this.dialogInputTableSettings.name
      ] ||
      !this.dialogFormSettings.dialogFormItems.formGroupValues[
        this.dialogInputTableSettings.name
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
      this.dialogInputTableSettings.name
    ] = this.dialogFormSettings.dialogFormItems.formGroupValues[
      this.dialogInputTableSettings.name
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
