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
      <div>
        <el-col class="mainPage-TableTitle" :span="6">
          <commonTitleWithBorder title="标准明细" />
        </el-col>
        <el-col :span="18" class="mainPage-tableAboveBtns textAlignRight">
          <operateButtonsGroup
            v-show="dialogInputTableSettings.selection"
            class="textAlignRight"
            :operateButtonsSettings="dialogOperateButtonsSettings"
            @handleOperateButton="handleOperateButton"
          />
        </el-col>
        <inputTable
          class="table-list mb20"
          :defaultSettings="dialogInputTableSettings"
          :defaultdatas="detailTableDatas"
          v-model="dialogInputTableValue"
          @handleTableMutiChecked="handleDetailTableMutiChecked"
        />
      </div>
    </dialogForm>
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
    this.dialogContentItems.map(item => {
      if (item.name == "seedVariety") {
        item.data = this.$globalFnc.deepCopy(
          this.$store.getters["user/baseInfos"].corpTypelist
        );
      }
    });
    this.initPageData();
  }
};
</script>
