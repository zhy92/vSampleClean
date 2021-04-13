<template>
  <!-- <div class="sider-nav"> -->
  <!-- <el-col :span="24"> -->
  <!-- @open="handleOpen"
        @close="handleClose" -->
  <el-menu
    :default-active="$route.path"
    class="el-menu-vertical"
    background-color="#fff"
    text-color="#222"
    active-text-color="#222"
    unique-opened
    :collapse="collapse"
    router
  >
    <siderNavItem :sidebarData="sidebarData" />
  </el-menu>
  <!-- </el-col> -->
  <!-- </div> -->
</template>

<script>
import siderNavItem from "./sideItem";
export default {
  name: "siderNav",
  components: {
    siderNavItem
  },
  props: {
    sidebarData: Array,
    collapse: Boolean
  }
};
</script>
