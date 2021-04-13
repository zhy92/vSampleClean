<template>
  <div class="mainPage">
    <div id="mapDiv" style="width:100%;height:100%;"></div>
  </div>
</template>

<script>
// 引入methods各方法
import methods from "./methods";
// 引入data各变量声明
import dataFnc from "./data";
export default {
  name: "homePage",
  data: function() {
    return dataFnc(this);
  },
  methods: {
    ...methods
  },
  mounted() {
    this.onLoad();
  }
};
</script>
