const methods = {
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
  handleTableRowButton(row, btns) {
    let formGroupList;
    switch (btns.type) {
      // 启用菜单
      case "open":
        this.$postData(this.$api.updateMenuStatus, {
          menuids: row["id"],
          status: "1"
        }).then(() => {
          this.$message.success("启用成功!");
          this.setTableList();
        });
        break;
      // 关闭菜单
      case "closed":
        this.$confirm("您确定要禁用该菜单？", "确认", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(() => {
          this.$postData(this.$api.updateMenuStatus, {
            menuids: row["id"],
            status: "2"
          }).then(() => {
            this.$message.success("禁用成功!");
            this.setTableList();
          });
        });
        break;
      // 删除菜单
      case "delete":
        this.$confirm("您确定要删除该菜单？", "确认", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(() => {
          this.$postData(this.$api.deleteMenu, { menuids: row["id"] }).then(
            () => {
              this.$message.success("删除成功!");
              this.setTableList();
            }
          );
        });
        break;
      case "add":
        this.dialogFormSettings.dialogFormTitle = "新增下级菜单";
        // 加载表单组
        this.dialogFormSettings.dialogFormItems.formButtonList = this.addMenuContentButton;
        formGroupList = this.$globalFnc.deepCopy(this.menuContentItems);
        this.dialogFormSettings.dialogFormItems.formGroupList = this.setDictList(
          formGroupList
        );
        // 新增下级机构，需要知道本级机构的id
        this.dialogFormSettings.dialogFormItems.formGroupValues = {
          parentsid: row.id,
          status: "1",
          sysType: this.$global.projectName
        };
        this.dialogFormSettings.dialogFormVisible = true;
        break;
      case "edit":
        this.dialogFormSettings.dialogFormTitle = "编辑菜单信息";
        // 下拉列表赋值
        this.dialogFormSettings.dialogFormItems.formButtonList = this.editMenuContentButton;
        formGroupList = this.$globalFnc.deepCopy(this.menuContentItems);
        this.dialogFormSettings.dialogFormItems.formGroupList = this.setDictList(
          formGroupList,
          "edit"
        );
        // 编辑赋值
        this.$getData(this.$api.getMenuDataById, { menuid: row.id }).then(
          res => {
            this.dialogFormSettings.dialogFormItems.formGroupValues = Object.assign(
              {},
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
  // 下拉菜单赋值
  setDictList(data, type) {
    return data.map(item => {
      if (item.name === "sysType") {
        // 菜单类型
        this.$getData(this.$api.dictList, {
          _refKey: "dict",
          busintypeid: "wms_base_menuSys"
        }).then(res => {
          item.data = this.$globalFnc.arrayToFormDropdown(res, "text", "value");
        });
      }
      if (
        type === "edit" &&
        (item.name === "menuid" || item.name === "isleaf")
      ) {
        item.disabled = true;
      }
      return item;
    });
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
  setTableList() {
    let propObject = {
      name: "operateBtns",
      porpvalue: [
        {
          text: "编辑",
          type: "edit",
          class: "text-primary",
          icon: "el-icon-edit-outline",
          isIcon: true
        },
        {
          text: "新增",
          type: "add",
          class: "text-primary",
          icon: "el-icon-folder-add",
          isIcon: true
        }
      ]
    };
    this.$getData(this.$api.getMenuList).then(xhr => {
      let targetList = xhr;
      this.formatData(targetList, propObject);
      this.tableSettings.tableDatas = targetList;
    });
  },
  formatData(data, prop) {
    data.map(item => {
      item[prop.name] = [];
      // 没有parentId 说明是根节点，所以只需要新增
      if (!item.parentId) {
        item[prop.name] = [
          {
            text: "新增",
            type: "add",
            class: "text-primary",
            icon: "el-icon-folder-add",
            isIcon: true
          }
        ];
      } else {
        item[prop.name] = this.$globalFnc.deepCopy(prop.porpvalue);
        // 如果这个数据是启用状态，添加禁用按钮
        if (item.enable == "1") {
          item["state-zh_CN"] = "启用";
          item[prop.name].push({
            text: "禁用",
            type: "closed",
            class: "text-success",
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
            class: "text-plainInfo",
            icon: "iconfont iconkaiguan-guan",
            isIcon: true
          });
        }
      }
      item[prop.name].push({
        text: "删除",
        type: "delete",
        class: "text-primary",
        icon: "el-icon-delete",
        isIcon: true
      });

      // 菜单类型转换中文
      switch (item["isaction"]) {
        case "0":
          item["isaction-zh_CN"] = "菜单";
          break;
        case "1":
          item["isaction-zh_CN"] = "资源";
          break;
        case "2":
          item["isaction-zh_CN"] = "app";
          break;
        default:
          item["isaction-zh_CN"] = "";
          break;
      }

      if (item.children) {
        this.formatData(item.children, prop);
      }
    });
  }
};
export default methods;
