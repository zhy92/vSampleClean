<template>
  <el-table-column :label="head.lable" :show-overflow-tooltip="true">
    <template slot-scope="scope">
      <div v-if="head.type == 'html'" v-html="scope.row[head.prop]"></div>
      <div v-else>{{ scope.row[head.prop] }}</div>
    </template>
    <tableColumn
      v-for="(headItem, headIdx) in head.children"
      :key="'col-' + headIdx"
      :head="headItem"
    ></tableColumn>
  </el-table-column>
</template>
<script>
export default {
  name: "tableColumn",
  props: {
    head: {
      type: Object
    }
  }
};
</script>
