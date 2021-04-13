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
    this.handleSearchFormBtn({ postUrl: "getRoleList" }, defaultdatas);
  },
  /**
   * 搜索点击事件
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
    let filterRules = [];
    if (formData.roleid) {
      filterRules.push({
        field: "roleid",
        op: "contains",
        value: formData.roleid
      });
    }
    if (formData.rolename) {
      filterRules.push({
        field: "rolename",
        op: "contains",
        value: formData.rolename
      });
    }
    if (formData.status) {
      filterRules.push({
        field: "status",
        op: "equal",
        value: formData.status
      });
    }
    if (formData.groupid) {
      filterRules.push({
        field: "groupid",
        op: "equal",
        value: formData.groupid
      });
    }
    if (formData.issysData) {
      filterRules.push({
        field: "issysData",
        op: "equal",
        value: formData.issysData
      });
    }
    let options = {
      vm: this
    };
    let baseForm = {
      page: this.paginationSettings.currentPage,
      rows: this.$global.paginationOption.numberPerpage,
      filterRules: JSON.stringify(filterRules)
    };
    let btnsObj = btns || {
      postUrl: "getAllUserList"
    };
    this.tableSettings.tableDatas = [];
    this.$searchformBtnAction(btnsObj, baseForm, options).then(data => {
      this.setTableList(data);
    });
  },
  setTableList(data) {
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
          text: "分配权限",
          type: "add",
          class: "text-primary fontSize20 mr10",
          icon: "el-icon-folder-add",
          isIcon: true
        }
      ]
    };
    let roleList = this.$globalFnc.deepCopy(data.rows);
    this.formatData(roleList, propObject);
    this.tableSettings.tableDatas = roleList;
    this.paginationSettings.totalNumbers = data.total;
  },
  formatData(data, prop) {
    data.map(item => {
      item[prop.name] = this.$globalFnc.deepCopy(prop.porpvalue);
      // 如果这个数据是启用状态，添加禁用按钮
      if (item.status == "1") {
        item["state-zh_CN"] = "启用";
        item[prop.name].push({
          text: "禁用",
          type: "closed",
          class: "text-success fontSize16 mr10",
          icon: "iconfont iconkaiguan-kai",
          isIcon: true
        });
      } else {
        // 如果这个数据是启用状态，添加禁用按钮
        item["state-zh_CN"] = "禁用";
        item[prop.name].push({
          text: "启用",
          type: "open",
          class: "text-plainInfo fontSize16 mr10",
          icon: "iconfont iconkaiguan-guan",
          isIcon: true
        });
      }
      // 不是系统角色可以删除
      if (item.issysData == "0") {
        item[prop.name].push({
          text: "删除",
          type: "delete",
          class: "text-primary fontSize20",
          icon: "el-icon-delete",
          isIcon: true
        });
      }
    });
  },
  //底部分页回调函数
  handlePaginationPagenumber(val) {
    this.paginationSettings.currentPage = val;
    this.initPageData();
  },
  handleSizeChange(val) {
    this.paginationSettings.numberPerpage = val;
    this.initPageData();
  },
  /**
   * 表格操作按钮
   */
  handleTableRowButton(row, btns) {
    switch (btns.type) {
      // 启用菜单
      case "open":
        this.$postData(this.$api.updateRoleStatus, {
          roleIds: row["roleid"],
          status: 1
        }).then(() => {
          this.$message.success("启用成功!");
          this.initPageData();
        });
        break;
      // 关闭菜单
      case "closed":
        this.$confirm("您确定要禁用该角色？", "确认", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(() => {
          this.$postData(this.$api.updateRoleStatus, {
            roleIds: row["roleid"],
            status: 0
          }).then(() => {
            this.$message.success("禁用成功!");
            this.initPageData();
          });
        });
        break;
      case "delete":
        this.$confirm("您确定要删除该角色？", "确认", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(() => {
          this.$postData(this.$api.deleteRole, [row], true).then(() => {
            this.$message.success("删除成功!");
            this.initPageData();
          });
        });
        break;
      case "edit":
        this.dialogFormSettings.dialogFormTitle = "编辑角色信息";
        // 加载表单组
        this.dialogFormSettings.dialogFormItems.formButtonList = this.editRoleButton;
        this.dialogFormSettings.dialogFormItems.formGroupList = this.setDictList(
          this.$globalFnc.deepCopy(this.roleItems),
          "edit"
        );
        // 编辑回显
        this.$getData(this.$api.getRoleDataById, {
          roleid: row["roleid"]
        }).then(res => {
          this.dialogFormSettings.dialogFormItems.formGroupValues = this.$globalFnc.deepCopy(
            res.data
          );
        });
        this.dialogFormSettings.dialogFormVisible = true;
        break;
      case "add":
        this.allocatedUserDialogSetting.dialogVisible = true;
        this.tabSettings.activeName = "1";
        // 保存这一行的信息
        this.roleListRowData = row;
        // 获取数据
        this.allocatedUserPaginationSettings.currentPage = 1;
        this.handleTabChange({ tabId: this.tabSettings.activeName });
        break;
      default:
        break;
    }
  },
  /**
   * 弹框点击事件
   */
  handleDialogForm(button, data) {
    if (button.flag === "save") {
      this.$postData(button.postUrl, data).then(() => {
        this.$message.success("保存成功!");
        this.initPageData();
        this.dialogFormSettings.dialogFormVisible = false;
        this.dialogFormSettings.dialogFormItems.formGroupValues = {};
      });
    }
    if (button.flag === "cancel") {
      this.dialogFormSettings.dialogFormVisible = false;
      this.dialogFormSettings.dialogFormItems.formGroupValues = {};
    }
  },
  /**
   * operateButtons点击事件
   */
  handleOperateButton(data) {
    if (data.flag === "add") {
      this.dialogFormSettings.dialogFormTitle = "新增角色";
      // 加载表单组
      this.dialogFormSettings.dialogFormItems.formButtonList = this.addRoleButton;
      this.dialogFormSettings.dialogFormItems.formGroupList = this.setDictList(
        this.$globalFnc.deepCopy(this.roleItems)
      );
      this.dialogFormSettings.dialogFormItems.formGroupValues = {
        status: "1",
        sysType: this.$global.projectName
      };
      this.dialogFormSettings.dialogFormVisible = true;
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
  /**
   * 设置下拉值
   */
  setDictList(data, type) {
    return data.map(item => {
      // 角色分组
      if (item.name === "groupid") {
        this.$getData(this.$api.dictList, { _refKey: "rolegroup" }).then(
          res => {
            item.data = this.$globalFnc.arrayToFormDropdown(
              res,
              "text",
              "value"
            );
          }
        );
      }
      // 编码不可编辑
      if (type === "edit" && item.name === "roleid") {
        item.disabled = true;
      }
      return item;
    });
  },
  /**
   * tab 切换事件
   */
  handleTabChange(tab) {
    if (tab.tabId == "1") {
      // 获取菜单树数据
      this.$getData(this.$api.getMenuTree, {
        status: "1",
        roleid: this.roleListRowData["roleid"]
      }).then(res => {
        this.treeSettings.treeData = [];
        this.treeSettings.treeData.push(res.data.treeNode);
        if (res.data["checkIds"]) {
          this.treeSettings.checkedTreeData = res.data.checkIds;
        }
      });
    }
    if (tab.tabId == "2") {
      // 获取已分配人员列表
      this.setAllocatedUserList();
    }
  },
  /**
   * 菜单树保存事件
   */
  handleGetCheckedKeys(keys) {
    let list = keys,
      params = {
        list,
        roleid: this.roleListRowData["roleid"]
      };
    this.$postData(this.$api.setRoleMenu, params).then(res => {
      this.$message.success("保存成功!");
      this.handleTabChange({ tabId: this.tabSettings.activeName });
    });
  },
  /**
   * 已分配表格上方按钮事件
   */
  handleAllocatedUserOperateButton(data) {
    if (data.flag === "add") {
      this.userDialogSetting.dialogVisible = true;
      // 未分配用户搜索赋值
      this.userSearchFormItems.forEach(item => {
        // 机构
        if (item.name === "orgid") {
          let params = {
            addRootNode: true,
            status: "all"
          };
          this.$getData(this.$api.getOrgList, params).then(res => {
            item.data = res;
          });
        }
      });
      this.initUserPageData();
    }
    if (data.flag === "delete") {
      if (this.selectAllocatedUserId.length) {
        this.$confirm("确认删除？", "确认", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(confirm => {
          let selectAllocatedUser = this.selectAllocatedUserId,
            params = {
              roleid: this.roleListRowData["roleid"],
              list: selectAllocatedUser
            };
          this.$postData(this.$api.deleteAllocatedUser, params, true).then(
            res => {
              this.$message.success("删除成功");
              this.setAllocatedUserList();
            }
          );
        });
      } else {
        this.$message.warning("请选择需要删除的用户");
      }
    }
  },
  /**
   *  已分配人员列表
   */
  setAllocatedUserList() {
    let params = {
      roleid: this.roleListRowData["roleid"],
      page: this.allocatedUserPaginationSettings.currentPage,
      rows: this.allocatedUserPaginationSettings.numberPerpage
    };
    this.$getData(this.$api.getAllocatedUserList, params).then(xhr => {
      let targetList = xhr.rows;
      targetList.forEach(item => {
        if (item.status == "1") {
          item["status-zh_CN"] = "启用";
        } else {
          item["status-zh_CN"] = "禁用";
        }
      });
      this.allocatedUserTableSettings.tableDatas = targetList;
      this.allocatedUserPaginationSettings.totalNumbers = xhr.total;
    });
  },
  // 已分配人员列表选中
  handleAllocatedUserSelectionChange(data) {
    this.selectAllocatedUserId = [];
    if (data && data.length) {
      data.forEach(item => {
        this.selectAllocatedUserId.push(item.operatorid);
      });
    }
  },
  handleAllocatedUserPaginationPagenumber(val) {
    this.allocatedUserPaginationSettings.currentPage = val;
    this.setAllocatedUserList();
  },
  handleAllocatedUserSizeChange(val) {
    this.allocatedUserPaginationSettings.numberPerpage = val;
    this.setAllocatedUserList();
  },
  // 关闭分配弹框
  closeAllocatedDialog() {
    this.selectAllocatedUserId = [];
  },
  /**
   *  未分配人员列表搜索
   */
  initUserPageData() {
    let defaultdatas = this.$globalFnc.deepCopy(
      this.userSearchFormSettings.formGroupValues
    );
    this.handleUserSearchFormBtn({ postUrl: "getUserList" }, defaultdatas);
  },
  handleUserSearchFormBtn(btns, formData) {
    if (btns.flag === "search") {
      this.userPaginationSettings.currentPage = 1;
    }
    if (btns.flag === "clear") {
      this.userPaginationSettings.currentPage = 1;
      this.userSearchFormSettings.formGroupValues = {};
      formData = {};
    }
    let options = {
      vm: this
    };
    let baseForm = {
      roleid: this.roleListRowData["roleid"],
      page: this.userPaginationSettings.currentPage,
      rows: this.userPaginationSettings.numberPerpage
    };
    let btnsObj = btns || {
      postUrl: "getUserList"
    };
    let params = Object.assign(baseForm, formData);
    this.userTableSettings.tableDatas = [];
    this.$searchformBtnAction(btnsObj, params, options).then(data => {
      this.setUserList(data);
    });
  },
  /**
   *  未分配人员列表
   */
  setUserList(data) {
    let userList = this.$globalFnc.deepCopy(data.rows);
    userList.forEach(item => {
      if (item.status == "1") {
        item["status-zh_CN"] = "启用";
      } else {
        item["status-zh_CN"] = "禁止";
      }
    });
    this.userTableSettings.tableDatas = userList;
    this.userPaginationSettings.totalNumbers = data.total;
  },
  handleUserPaginationPagenumber(val) {
    this.userPaginationSettings.currentPage = val;
    this.initUserPageData();
  },
  handleUserSizeChange(val) {
    this.userPaginationSettings.numberPerpage = val;
    this.initUserPageData();
  },
  /**
   *  未分配人员表格上方按钮
   */
  handleUserOperateButton(data) {
    if (data.flag == "closeSearch") {
      this.showUserSearchForm = !this.showUserSearchForm;
      if (this.showUserSearchForm) {
        data.label = "隐藏查询";
      } else {
        data.label = "显示查询";
      }
    }
  },
  // 获取选中用户
  handleUserSelectionChange(data) {
    this.selectUserId = [];
    if (data && data.length) {
      data.forEach(item => {
        this.selectUserId.push(item.operatorid);
      });
    }
  },
  // 分配
  sureAllocationUser() {
    let selectUser = this.selectUserId;
    let params = {
      list: selectUser,
      roleid: this.roleListRowData["roleid"]
    };
    this.$postData(this.$api.updateOptRole, params, true).then(res => {
      this.$message.success("分配成功！");
      this.setAllocatedUserList();
      this.userDialogSetting.dialogVisible = false;
      this.selectUserId = [];
    });
  },
  cancelAllocationUser() {
    this.selectUserId = [];
    this.userDialogSetting.dialogVisible = false;
  }
};
export default methods;
