<template>
  <div class="main-top-logo" :style="headInfos.style">
    <el-col :span="24">
      <el-image
        v-if="headInfos.logoStyle.showImg"
        :class="headInfos.logoClassName"
        :style="headInfos.logoStyle.style ? headInfos.logoStyle.style : ''"
        :src="headInfos.logoStyle.imgSrc"
        :alt="headInfos.logoStyle.imgTitle || ''"
        :title="headInfos.logoStyle.imgTitle || ''"
        :fit="headInfos.logoStyle.fit || 'fit'"
      >
      </el-image>
      <div
        v-if="headInfos.title"
        class="displayInlineBlock overflowHidden ml20 text-white"
      >
        {{ headInfos.title }}
      </div>
      <el-menu
        :default-active="activeIndex"
        class="displayInlineBlock main-top-logo-menu ml50"
        mode="horizontal"
        @select="handleSelect"
        background-color="#00A69C"
        text-color="#fff"
        active-text-color="#fff"
      >
        <el-menu-item class=" fontSize16" index="1">生态概况</el-menu-item>
        <el-menu-item class=" fontSize16" index="2">种植管理</el-menu-item>
        <el-menu-item class=" fontSize16" index="3">任务中心</el-menu-item>
        <!-- <el-submenu index="2">
          <template slot="title">
            我的工作台
          </template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
          <el-submenu index="2-4">
            <template slot="title">
              选项4
            </template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
            <el-menu-item index="2-4-2">选项2</el-menu-item>
            <el-menu-item index="2-4-3">选项3</el-menu-item>
          </el-submenu>
        </el-submenu> -->
      </el-menu>
    </el-col>
  </div>
</template>

<script>
export default {
  name: "headerBar",
  props: {
    headInfos: Object
  },
  data() {
    return {
      activeIndex: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    skipMsg() {
      this.$router.push("/informationsPage/infosManage/indexInfosDistribution");
    },
    logout(type) {
      if (type == "clear") {
        localStorage.clear();
        window.location.reload();
      } else {
        this.$store.dispatch("user/commitClearToken");
        this.$router.push("/");
      }
    }
  }
};
</script>
