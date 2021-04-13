<template>
  <div class="tree-components">
    <el-tree
      :class="treeSettings.treeClassName"
      :data="treeSettings.treeData || []"
      :default-expand-all="treeSettings.expandAll || true"
      :node-key="treeSettings.nodeKey || 'id'"
      ref="tree"
      :highlight-current="treeSettings.highlightCurrent || false"
      :expand-on-click-node="treeSettings.nodeExpand || false"
      :props="treeSettings.defaultProps"
      :show-checkbox="treeSettings.treeWithCheckbox"
      @node-click="handleNodeClick"
      @check-change="handleCheckChange"
      :default-checked-keys="treeSettings.checkedTreeData"
    >
    </el-tree>
    <div class="buttons mt20" v-if="treeSettings.treeWithCheckbox">
      <template v-for="button in treeSettings.treeButtons">
        <!-- 获取勾选节点 -->
        <el-button
          :type="button.styleType || 'primary'"
          :key="button.key"
          v-if="button.key == 'getCheckedNodes'"
          @click="handleGetCheckedNodes"
          >{{ button.text }}</el-button
        >
        <!-- 获取勾选key值 -->
        <el-button
          :type="button.styleType || 'primary'"
          :key="button.key"
          v-if="button.key == 'getCheckedKeys'"
          @click="handleGetCheckedKeys"
          >{{ button.text }}</el-button
        >
        <!-- 通过节点设置默认勾选 -->
        <el-button
          :type="button.styleType || 'primary'"
          :key="button.key"
          v-if="button.key == 'setCheckedNodes'"
          @click="setCheckedNodes"
          >{{ button.text }}</el-button
        >
        <!-- 通过key值设置勾选节点 -->
        <el-button
          :type="button.styleType || 'primary'"
          :key="button.key"
          v-if="button.key == 'setCheckedKeys'"
          @click="setCheckedKeys"
          >{{ button.text }}</el-button
        >
        <!-- 重置勾选框 -->
        <el-button
          :type="button.styleType || 'danger'"
          :key="button.key"
          v-if="button.key == 'resetChecked'"
          @click="resetChecked"
          >{{ button.text }}</el-button
        >
      </template>
    </div>
  </div>
</template>
<script>
export default {
  name: "tree",
  props: {
    treeSettings: Object
  },
  methods: {
    setCheckedNodes() {
      // this.$refs.tree.setCheckedNodes([
      //   {
      //     id: 5,
      //     label: "二级 2-1"
      //   },
      //   {
      //     id: 9,
      //     label: "三级 1-1-1"
      //   }
      // ]);
    },
    setCheckedKeys(data) {
      this.$refs.tree.setCheckedKeys(data);
    },
    resetChecked() {
      this.$refs.tree.setCheckedKeys([]);
    },
    handleGetCheckedNodes() {
      let data = this.$refs.tree.getCheckedNodes();
      this.$emit("handleGetCheckedNodes", data);
    },
    handleGetCheckedKeys() {
      let data = this.$refs.tree.getCheckedKeys();
      this.$emit("handleGetCheckedKeys", data);
    },
    handleNodeClick(data) {
      this.$emit("handleTreeNodeClick", data);
    },
    handleCheckChange(data, checked, indeterminate) {
      this.$emit("handleTreeNodeChange", data, checked, indeterminate);
    }
  }
};
</script>
