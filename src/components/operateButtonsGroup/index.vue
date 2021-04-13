<template>
  <div class="operate-buttons-group">
    <template v-for="operateBtn in operateButtonsSettings.buttonListData">
      <el-dropdown
        :class="operateBtn.className"
        trigger="click"
        :key="operateBtn.flag"
        v-if="operateBtn.isDropBtn"
        @command="handleDropItemButton"
      >
        <el-button
          :type="operateBtn.styleType"
          :size="operateBtn.size || 'small'"
          :icon="operateBtn.icon"
        >
          {{ operateBtn.label }}
          <i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item
            v-for="drop in operateBtn.dropData"
            :key="drop.value"
            icon="el-icon-plus"
            :command="drop"
          >
            {{ drop.label }}
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <template v-else>
        <el-button
          v-show="!operateBtn.showFlag || operateBtn.showFlag == 'true'"
          :key="operateBtn.flag"
          :type="operateBtn.styleType"
          :size="operateBtn.size"
          :icon="operateBtn.icon"
          @click="handleOperate(operateBtn)"
        >
          {{ operateBtn.label }}
        </el-button>
      </template>
    </template>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "operateButtonsGroup",
  props: {
    operateButtonsSettings: Object
  },
  methods: {
    handleOperate(operateBtn) {
      this.$emit(
        "handleOperateButton",
        operateBtn,
        this.operateButtonsSettings.moduleName
      );
    },
    handleDropItemButton(id) {
      this.$emit("handleDropItemButton", id);
    }
  }
};
</script>
