<template>
  <div class="mainPage">
    <el-col class="mainPage-searchTitle mb20" :span="24">
      <commonTitleWithBorder title="查询条件" />
    </el-col>
    <el-col class="mainPage-searchForm" :span="24">
      <formGroup
        v-if="showSearchForm"
        ref="searchForm"
        :formGroupSettings="searchFormSettings"
        @formGroupSubmit="handleSearchFormBtn"
      />
    </el-col>
    <el-col class="mainPage-TableTitle" :span="6">
      <commonTitleWithBorder title="列表信息" />
    </el-col>
    <el-col :span="18" class="mainPage-tableAboveBtns textAlignRight">
      <operateButtonsGroup
        class="textAlignRight"
        :operateButtonsSettings="operateButtonsSettings"
        @handleOperateButton="handleOperateButton"
      />
    </el-col>
    <tableList
      :tablelistSettings="tableSettings"
      @handleTableRowButton="handleTableRowButton"
      @handleTableMutiChecked="handleTableMutiChecked"
    />
    <pagination
      :paginationSettings="paginationSettings"
      @handlePaginationPagenumber="handlePaginationPagenumber"
    />
    <dialogForm
      v-if="dialogFormSettings.dialogFormVisible"
      :dialogFormSettings="dialogFormSettings"
      @handleDialogForm="handleDialogForm"
    >
      <div slot="other">
        <el-tabs
          v-model="activeName"
          class="mt-20"
          type="card"
          @tab-click="handleTabClick"
        >
          <el-tab-pane label="基地信息" name="site">
            <formGroup
              ref="siteInfo"
              :formGroupSettings="detailInfoFormSettings"
              @formGroupSubmit="handleDetailInfoFormBtn"
            />
          </el-tab-pane>
          <el-tab-pane label="土地信息" name="ground" :disabled="panelDisabled">
            <el-col class="mainPage-TableTitle" :span="6">
              <commonTitleWithBorder title="列表信息" />
            </el-col>
            <el-col :span="18" class="mainPage-tableAboveBtns textAlignRight">
              <operateButtonsGroup
                class="textAlignRight"
                :operateButtonsSettings="groundOperateButtonsSettings"
                @handleOperateButton="handleOperateButton"
              />
            </el-col>
            <tableList
              :tablelistSettings="groundTableSettings"
              @handleTableRowButton="handleTableRowButton"
              @handleTableMutiChecked="handleGroundTableMutiChecked"
            />
            <pagination
              :paginationSettings="groundPaginationSettings"
              @handlePaginationPagenumber="handlePaginationPagenumber"
            />
          </el-tab-pane>
          <el-tab-pane
            label="机械管理"
            name="machinery"
            :disabled="panelDisabled"
          >
            <el-col class="mainPage-TableTitle" :span="6">
              <commonTitleWithBorder title="列表信息" />
            </el-col>
            <el-col :span="18" class="mainPage-tableAboveBtns textAlignRight">
              <operateButtonsGroup
                class="textAlignRight"
                :operateButtonsSettings="machineryOperateButtonsSettings"
                @handleOperateButton="handleOperateButton"
              />
            </el-col>
            <tableList
              :tablelistSettings="machineryTableSettings"
              @handleTableRowButton="handleTableRowButton"
            />
            <pagination
              :paginationSettings="machineryPaginationSettings"
              @handlePaginationPagenumber="handlePaginationPagenumber"
            />
          </el-tab-pane>
        </el-tabs>
      </div>
    </dialogForm>
    <dialogForm
      v-if="dialogChildFormSettings.dialogFormVisible"
      :dialogFormSettings="dialogChildFormSettings"
      @linkSelect="handleSelectionChange"
      @handleDialogForm="handleDialogForm"
    />
  </div>
</template>
<script>
// 引入methods各方法
import methods from "./methods";
// 引入data各变量声明
import dataFnc from "./data";

export default {
  name: "unitSetManage",
  data: function() {
    return dataFnc(this);
  },
  methods: {
    ...methods
  },
  mounted() {
    this.searchFormSettings.formGroupList.map(item => {
      if (item.name == "type") {
        item.data = this.$globalFnc.deepCopy(
          this.$store.getters["user/baseInfos"].siteTypelist
        );
      }
      if (item.name == "baseManager") {
        item.data = this.$globalFnc.deepCopy(
          this.$store.getters["user/baseInfos"].personList
        );
      }
    });
    this.dialogContentItems.map(item => {
      if (item.name == "type") {
        item.data = this.$globalFnc.deepCopy(
          this.$store.getters["user/baseInfos"].siteTypelist
        );
      }
      if (item.name == "currentCrop") {
        item.data = this.$globalFnc.deepCopy(
          this.$store.getters["user/baseInfos"].seedTypelist
        );
      }
      if (
        item.name == "baseManager" ||
        item.name == "inspectManager" ||
        item.name == "technicalDirector"
      ) {
        item.data = this.$globalFnc.deepCopy(
          this.$store.getters["user/baseInfos"].personList
        );
      }
    });
    this.dialogGroundContentItems.map(item => {
      if (item.name == "currentCrop") {
        item.data = this.$globalFnc.deepCopy(
          this.$store.getters["user/baseInfos"].seedTypelist
        );
      }
      if (item.name == "landManager") {
        item.data = this.$globalFnc.deepCopy(
          this.$store.getters["user/baseInfos"].personList
        );
      }
    });
    this.getAllMachinerylist().then(xhr => {
      this.allMachinerylist = xhr;
      this.dialogMachineryContentItems.map(item => {
        if (item.name == "fpmpBasMachineryId") {
          item.data = this.$globalFnc.arrayToFormDropdown(
            xhr,
            "name",
            "fpmpBasMachineryId"
          );
        }
      });
    });
    this.initPageData();
  }
};
</script>
