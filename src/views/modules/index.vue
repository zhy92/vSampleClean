<template>
  <el-container class="project-layout">
    <el-header class="project-layout-header">
      <!-- <el-row> -->
      <el-col :span="19">
        <headerBar :headInfos="headInfos" />
      </el-col>
      <el-col :span="5" align="right" class="pr20 pt15">
        <div class="displayInlineBlock text-white lheight32 mr20">
          <el-image
            class="mr5"
            :src="headPortrait"
            :style="{ width: '26px', verticalAlign: 'middle' }"
          ></el-image>
          {{ loginName }}
        </div>
        <!-- <span class="text-white cursor mr20" @click="isCollapse = !isCollapse">
          <i class="iconfont icontongzhi fontSize20"></i>
        </span> -->
        <div
          class="displayInlineBlock text-white lheight32 cursor"
          @click="handleLogout"
        >
          <i class="iconfont iconguanbi fontSize18"></i>
        </div>
      </el-col>
      <!-- </el-row> -->
    </el-header>
    <el-main class="project-layout-main">
      <menuTable class="project-layout-main-sider" :menuData="menuRoutes" />
      <section class="project-layout-main-content overflowHidden">
        <breadCrumb class="mb15"></breadCrumb>
        <router-view :key="routeKey" />
      </section>
    </el-main>
    <el-footer class="project-layout-main-footer text-white fontSize14"
      >杭州安鸿科技股份有限公司 版权所有</el-footer
    >
  </el-container>
</template>

<script>
import logo from "@/assets/layout/header/logo.png";
import headPortrait from "@/assets/headPortrait.png";
export default {
  name: "layoutFront",
  data() {
    return {
      num: "str",
      isCollapse: false,
      headPortrait: headPortrait,
      loginName: this.$store.getters["user/userInfos"].name,
      menuRoutes: [],
      headInfos: {
        // title: "精细化种植管理系统",
        logoStyle: {
          imgSrc: logo,
          showImg: true,
          style: {
            width: "260px",
            marginLeft: "20px"
          }
        },
        style: {
          textColor: "#005192",
          "background-color": "",
          height: "60px",
          "line-height": "60px",
          // "font-weight": "600",
          "font-size": "16px"
        },
        operate: false
      }
    };
  },
  methods: {
    handleLogout() {
      this.$confirm("确定退出系统?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        location.href = this.$global.logout;
      });
    }
  },
  mounted() {
    this.menuRoutes = this.$store.getters["user/asyncRouterslist"][3].children;
    if (this.menuRoutes.length == "0") {
      let that = this;
      this.$alert("当前账户未配置菜单，请配置菜单后登陆", "提示", {
        confirmButtonText: "确定",
        callback: action => {
          location.href = that.$global.logout;
        }
      });
    }
  },
  computed: {
    routeKey() {
      return this.$route.name !== undefined
        ? this.$route.name + new Date()
        : this.$route + new Date();
    }
  }
};
</script>
