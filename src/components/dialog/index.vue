<template>
  <el-dialog
    :title="dialogFormSettings.dialogFormTitle"
    :visible.sync="dialogFormSettings.dialogFormVisible"
    :close-on-click-modal="false"
    append-to-body
    :custom-class="
      dialogFormSettings.dialogFormClassName
        ? dialogFormSettings.dialogFormClassName
        : 'defaultDialogClass'
    "
    :destroy-on-close="true"
    :width="dialogFormSettings.width ? dialogFormSettings.width : '70%'"
  >
    <!-- @opened="closeDialog" -->
    <div
      v-if="dialogFormSettings.dialogTipText"
      class="defaultDialogClass-tips"
    >
      {{ dialogFormSettings.dialogTipText }}
    </div>
    <formGroup
      ref="formgroup"
      v-if="
        !dialogFormSettings.dialogType ||
          dialogFormSettings.dialogType == 'form'
      "
      :formGroupSettings="dialogFormSettings.dialogFormItems"
      @formGroupSubmit="handleButtonSubmit"
      @linkSelect="handleSelectChange"
      @handleInputGroupButton="handleInputGroupButton"
      @inlineFncs="inlineFncs"
      @handleRemoveFiles="handleRemoveFiles"
      @handleReadFiles="handleReadFiles"
      @handleHtmlNodeAction="handleHtmlNodeAction"
    >
      <slot></slot>
    </formGroup>
    <formBlocks
      ref="formBlocks"
      v-if="dialogFormSettings.dialogType == 'formBlocks'"
      :formGroupSettings="dialogFormSettings.dialogFormItems"
      @formGroupSubmit="handleButtonSubmit"
      @linkSelect="handleSelectChange"
      @inlineFncs="inlineFncs"
      @handleRemoveFiles="handleRemoveFiles"
      @handleReadFiles="handleReadFiles"
      @handleHtmlNodeAction="handleHtmlNodeAction"
    />
    <img
      v-if="dialogFormSettings.dialogType == 'image'"
      :src="dialogFormSettings.imgSrc"
      width="100%"
      alt=""
    />
    <slot name="other"></slot>
  </el-dialog>
</template>
<script>
export default {
  name: "dialogForm",
  props: {
    dialogFormSettings: Object
  },
  methods: {
    handleRemoveFiles(fileData) {
      this.$emit("handleRemoveFiles", fileData);
    },
    handleReadFiles(fileData) {
      this.$emit("handleReadFiles", fileData);
    },
    inlineFncs(flag) {
      this.$emit("inlineFncs", flag);
    },
    handleHtmlNodeAction(param) {
      this.$emit("handleHtmlNodeAction", param);
    },
    handleSelectChange(link, data) {
      this.$emit("linkSelect", link, data);
    },
    handleInputGroupButton(clickName) {
      this.$emit("handleInputGroupButton", clickName);
    },
    handleButtonSubmit(btn, data, postDatas) {
      if (btn.flag == "cancle" || btn.flag == "cancel") {
        this.dialogFormSettings.dialogFormVisible = false;
        this.dialogFormSettings["dialogFormItems"]["formGroupValues"] = {};
      } else {
        this.$emit("handleDialogForm", btn, data, postDatas);
      }
    },
    closeDialog() {
      // if (
      //   this.$refs &&
      //   this.$refs.formgroup &&
      //   this.$refs.formgroup.$refs &&
      //   this.$refs.formgroup.$refs.formItems
      // ) {
      //   this.$refs.formgroup.$refs.formItems.clearValidate();
      // }
      // this.$refs.formgroup.$refs.formItems.resetFields();
      // console.log(this.$refs.formgroup.$refs.formItems);
    }
  },
  mounted() {
    if (
      !this.dialogFormSettings.dialogType ||
      this.dialogFormSettings.dialogType == "form" ||
      this.dialogFormSettings.dialogType == "formBlocks"
    ) {
      this.dialogFormSettings.dialogFormItems.fullScreen = true;
    }
  }
};
</script>
