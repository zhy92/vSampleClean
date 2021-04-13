<template>
  <div class="mainPage">
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
      @linkSelect="handleLinkSelect"
      @handleInputGroupButton="handleInputGroupButton"
    />
    <!--cron参考-->
    <el-dialog
      v-if="cronDetailDialog.dialogVisible"
      width="70%"
      :title="cronDetailDialog.dialogName"
      :visible.sync="cronDetailDialog.dialogVisible"
      :close-on-click-modal="false"
      append-to-body
      :destroy-on-close="true"
    >
      <div class="mg30">
        0 * * * * ? 每1分钟触发一次<br />
        0 0 * * * ? 每天每1小时触发一次<br />
        0 0 10 * * ? 每天10点触发一次<br />
        0 * 14 * * ? 在每天下午2点到下午2:59期间的每1分钟触发<br />
        0 30 9 1 * ? 每月1号上午9点半<br />
        0 15 10 15 * ? 每月15日上午10:15触发<br /><br />
      </div>
      <div class="mg30">
        */5 * * * * ? 每隔5秒执行一次<br />
        0 */1 * * * ? 每隔1分钟执行一次<br />
        0 0 5-15 * * ? 每天5-15点整点触发<br />
        0 0/3 * * * ? 每三分钟触发一次<br />
        0 0-5 14 * * ? 在每天下午2点到下午2:05期间的每1分钟触发<br />
        0 0/5 14 * * ? 在每天下午2点到下午2:55期间的每5分钟触发<br />
        0 0/5 14,18 * * ?
        在每天下午2点到2:55期间和下午6点到6:55期间的每5分钟触发<br />
        0 0/30 9-17 * * ? 朝九晚五工作时间内每半小时<br />
        0 0 10,14,16 * * ? 每天上午10点，下午2点，4点<br /><br />
      </div>
      <div class="mg30">
        0 0 12 ? * WED 表示每个星期三中午12点<br />
        0 0 17 ? * TUES,THUR,SAT 每周二、四、六下午五点<br />
        0 10,44 14 ? 3 WED 每年三月的星期三的下午2:10和2:44触发<br />
        0 15 10 ? * MON-FRI 周一至周五的上午10:15触发<br /><br />

        0 0 23 L * ? 每月最后一天23点执行一次<br />
        0 15 10 L * ? 每月最后一日的上午10:15触发<br />
        0 15 10 ? * 6L 每月的最后一个星期五上午10:15触发<br /><br />

        0 15 10 * * ? 2005 2005年的每天上午10:15触发<br />
        0 15 10 ? * 6L 2002-2005
        2002年至2005年的每月的最后一个星期五上午10:15触发<br />
        0 15 10 ? * 6#3 每月的第三个星期五上午10:15触发<br />
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button
          v-for="formBtn in cronDetailDialog.formButtonList"
          :key="formBtn.flag"
          :type="formBtn.styleType"
          :size="formBtn.size || 'small'"
          :icon="formBtn.icon"
          @click="cronDetailDialog.dialogVisible = false"
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
  name: "taskSetManage",
  data: function() {
    return dataFnc(this);
  },
  methods: {
    ...methods
  },
  mounted() {
    this.initPageData();
  }
};
</script>
