<template>
  <div class="mainPage">
    <el-row>
      <el-col class="mainPage-searchTitle mb20" :span="24">
        <commonTitleWithBorder title="查询条件" />
      </el-col>
      <el-col class="mainPage-searchForm" :span="24">
        <formGroup
          v-if="showSearchForm"
          ref="searchForm"
          @linkSelect="handleChangeSelect"
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
    </el-row>
    <tableList
      :tablelistSettings="tableSettings"
      @handleTableRowButton="handleTableRowButton"
    />
    <pagination
      :paginationSettings="paginationSettings"
      @handlePaginationPagenumber="handlePaginationPagenumber"
    />
    <dialogForm
      v-if="dialogFormSettings.dialogFormVisible"
      :dialogFormSettings="dialogFormSettings"
      @handleDialogForm="handleDialogForm"
      @linkSelect="handleChangeSelect"
    >
      <template>
        <commonTitleWithBorder title="基地明细" :span="20" />
        <operateButtonsGroup
          class="textAlignRight mb10"
          :operateButtonsSettings="baseDetailOperateButtonsSettings"
          @handleOperateButton="handleOperateButton"
        />
        <inputTable
          class="table-list mb20"
          :defaultSettings="baseDetailTableSettings"
          :defaultdatas="
            dialogFormSettings.dialogFormItems.formGroupValues[
              baseDetailTableSettings.name
            ]
          "
          v-model="
            dialogFormSettings.dialogFormItems.formGroupValues[
              baseDetailTableSettings.name
            ]
          "
          @handleTableMutiChecked="handleTableMutiChecked"
          :rules="baseDetailTableSettings.rules"
        />
      </template>
      <template>
        <commonTitleWithBorder title="土地明细" :span="20" />
        <operateButtonsGroup
          class="textAlignRight mb10"
          :operateButtonsSettings="landsDetailOperateButtonsSettings"
          @handleOperateButton="handleOperateButton"
        />
        <inputTable
          class="table-list mb20"
          :defaultSettings="landsDetailTableSettings"
          :defaultdatas="
            dialogFormSettings.dialogFormItems.formGroupValues[
              landsDetailTableSettings.name
            ]
          "
          v-model="
            dialogFormSettings.dialogFormItems.formGroupValues[
              landsDetailTableSettings.name
            ]
          "
          @handleTableMutiChecked="handleTableMutiChecked"
          :rules="landsDetailTableSettings.rules"
        />
      </template>
    </dialogForm>

    <!--基地明细添加页-->
    <el-dialog
      v-if="choiceBasePageDialog.dialogVisible"
      width="70%"
      :title="choiceBasePageDialog.dialogName"
      :visible.sync="choiceBasePageDialog.dialogVisible"
      :close-on-click-modal="false"
      append-to-body
      :destroy-on-close="true"
    >
      <template>
        <!--        物资选择页搜索-->
        <formGroup
          :formGroupSettings="baseSearchFormSettings"
          @formGroupSubmit="handleBaseSearchFormBtn"
        />
      </template>
      <template>
        <tableList
          :tablelistSettings="baseTableSettings"
          @handleSelectRow="handleBaseSelectRow"
          @handleTableSelectAll="handleBaseSelectAll"
          :selectedList="chosedBaseData"
        />
        <pagination
          :paginationSettings="basePaginationSettings"
          @handlePaginationPagenumber="handleBasePaginationPageNumber"
        />
      </template>
      <span slot="footer" class="dialog-footer">
        <el-button
          v-for="formBtn in choiceBasePageDialog.formButtonList"
          :key="formBtn.flag"
          :type="formBtn.styleType"
          :size="formBtn.size || 'small'"
          :icon="formBtn.icon"
          @click="handleChoiceBasePageBtns(formBtn.flag)"
        >
          {{ formBtn.label }}
        </el-button>
      </span>
    </el-dialog>
    <!--土地明细添加页-->
    <el-dialog
      v-if="choiceLandsPageDialog.dialogVisible"
      width="70%"
      :title="choiceLandsPageDialog.dialogName"
      :visible.sync="choiceLandsPageDialog.dialogVisible"
      :close-on-click-modal="false"
      append-to-body
      :destroy-on-close="true"
    >
      <template>
        <!--        物资选择页搜索-->
        <formGroup
          :formGroupSettings="landsSearchFormSettings"
          @formGroupSubmit="handleLandsSearchFormBtn"
        />
      </template>
      <template>
        <tableList
          :tablelistSettings="landsTableSettings"
          @handleSelectRow="handleLandsSelectRow"
          @handleTableSelectAll="handleLandsSelectAll"
          :selectedList="chosedLandsData"
        />
        <pagination
          :paginationSettings="landsPaginationSettings"
          @handlePaginationPagenumber="handleLandsPaginationPageNumber"
        />
      </template>
      <span slot="footer" class="dialog-footer">
        <el-button
          v-for="formBtn in choiceLandsPageDialog.formButtonList"
          :key="formBtn.flag"
          :type="formBtn.styleType"
          :size="formBtn.size || 'small'"
          :icon="formBtn.icon"
          @click="handleChoiceLandsPageBtns(formBtn.flag)"
        >
          {{ formBtn.label }}
        </el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
// 引入methods各方法
import methods from "./methods";
// 引入data各变量声明
import dataFnc from "./data";

export default {
  name: "plantPlan",
  data: function() {
    return dataFnc(this);
  },
  methods: {
    ...methods
  },
  mounted() {
    // 搜索
    this.searchFormSettings.formGroupList.map(searchItem => {
      if (searchItem.name === "processinstStatus") {
        this.$getData(this.$api.dictList_common, {
          _refKey: "dict",
          busintypeid: "fpmp_plan_planting_status"
        }).then(res => {
          searchItem.data = this.$globalFnc.arrayToFormDropdown(
            res,
            "text",
            "value"
          );
        });
      }
    });
    this.contentItems.map(dialogItem => {
      if (dialogItem.name === "processinstStatus") {
        this.$getData(this.$api.dictList_common, {
          _refKey: "dict",
          busintypeid: "fpmp_plan_planting_status"
        }).then(res => {
          dialogItem.data = this.$globalFnc.arrayToFormDropdown(
            res,
            "text",
            "value"
          );
        });
      }
    });
    this.initPageData();
  }
};
</script>
