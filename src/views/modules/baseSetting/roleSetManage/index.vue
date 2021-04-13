<template>
  <div class="pr10 pl10 width100">
    <el-col class="mb20" :span="24">
      <commonTitleWithBorder title="查询条件" />
    </el-col>
    <el-col class="mb20" :span="24">
      <formGroup
        v-if="showSearchForm"
        ref="searchForm"
        :formGroupSettings="searchFormSettings"
        @formGroupSubmit="handleSearchFormBtn"
      />
    </el-col>
    <el-col :span="6">
      <commonTitleWithBorder title="列表信息" />
    </el-col>
    <el-col :span="18" class="mb10 textAlignRight">
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
      @handlePaginationPagesize="handleSizeChange"
    />
    <dialogForm
      v-if="dialogFormSettings.dialogFormVisible"
      :dialogFormSettings="dialogFormSettings"
      @handleDialogForm="handleDialogForm"
    />

    <!--分配权限-->
    <el-dialog
      v-if="allocatedUserDialogSetting.dialogVisible"
      width="80%"
      :title="allocatedUserDialogSetting.dialogName"
      :visible.sync="allocatedUserDialogSetting.dialogVisible"
      :close-on-click-modal="false"
      append-to-body
      :destroy-on-close="true"
      @close="closeAllocatedDialog"
    >
      <tabCard
        class="tab-container"
        :tabSettings="tabSettings"
        @handleTabChange="handleTabChange"
      />
      <p class="mb10">当前角色【{{ roleListRowData.name }}】</p>
      <template v-if="tabSettings.activeName == '1'">
        <tree
          :treeSettings="treeSettings"
          @handleGetCheckedKeys="handleGetCheckedKeys"
        >
        </tree>
      </template>
      <template v-if="tabSettings.activeName == '2'">
        <el-col :span="6">
          <commonTitleWithBorder title="已分配用户" />
        </el-col>
        <el-col :span="18" class="mb10 textAlignRight">
          <operateButtonsGroup
            class="textAlignRight"
            :operateButtonsSettings="allocatedUserOperateButtonsSettings"
            @handleOperateButton="handleAllocatedUserOperateButton"
          />
        </el-col>
        <tableList
          :tablelistSettings="allocatedUserTableSettings"
          @handleTableMutiChecked="handleAllocatedUserSelectionChange"
        />
        <pagination
          :paginationSettings="allocatedUserPaginationSettings"
          @handlePaginationPagenumber="handleAllocatedUserPaginationPagenumber"
          @handlePaginationPagesize="handleAllocatedUserSizeChange"
        />
      </template>
    </el-dialog>

    <!--未分配的用户-->
    <el-dialog
      v-if="userDialogSetting.dialogVisible"
      width="80%"
      :title="userDialogSetting.dialogName"
      :visible.sync="userDialogSetting.dialogVisible"
      :close-on-click-modal="false"
      append-to-body
      :destroy-on-close="true"
      @close="cancelAllocationUser"
    >
      <el-col class="mb20" :span="24">
        <commonTitleWithBorder title="查询条件" />
      </el-col>
      <el-col class="mb20" :span="24">
        <formGroup
          v-if="showUserSearchForm"
          :formGroupSettings="userSearchFormSettings"
          @formGroupSubmit="handleUserSearchFormBtn"
        />
      </el-col>
      <el-col :span="6">
        <commonTitleWithBorder title="操作员列表" />
      </el-col>
      <el-col :span="18" class="mb10 textAlignRight">
        <operateButtonsGroup
          class="textAlignRight"
          :operateButtonsSettings="userOperateButtonsSettings"
          @handleOperateButton="handleUserOperateButton"
        />
      </el-col>
      <tableList
        :tablelistSettings="userTableSettings"
        @handleTableMutiChecked="handleUserSelectionChange"
      />
      <pagination
        :paginationSettings="userPaginationSettings"
        @handlePaginationPagenumber="handleUserPaginationPagenumber"
        @handlePaginationPagesize="handleUserSizeChange"
      />
      <span slot="footer" class="dialog-footer">
        <el-button @click="cancelAllocationUser">取 消</el-button>
        <el-button type="primary" @click="sureAllocationUser">确 定</el-button>
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
  name: "roleSetManage",
  data: function() {
    return dataFnc(this);
  },
  methods: {
    ...methods
  },
  mounted() {
    this.setSearchFormData();
    this.initPageData();
  }
};
</script>
