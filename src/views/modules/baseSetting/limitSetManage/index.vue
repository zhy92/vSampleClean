<template>
  <div class="pr10 pl10 width100">
    <tree
      :treeSettings="treeSettings"
      @handleGetCheckedKeys="handleTreeNodeChange"
    ></tree>
    <div>当前已选节点id:{{ selectMenuId }}</div>
  </div>
</template>
<script>
// 引入methods各方法
import methods from "./methods";
// 引入data各变量声明
import dataFnc from "./data";

export default {
  name: "limitSetManage",
  data: function() {
    return dataFnc(this);
  },
  methods: {
    ...methods
  },
  mounted() {
    this.setTreeList();
  }
};
</script>
