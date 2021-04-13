<template>
  <div class="detailPage">
    <div class="memberSignup">
      <div class="registerTitle width100 fontSize40">
        <el-row class="width100">
          <el-col :span="16" :offset="4">
            <el-image :src="loginLogo"></el-image>
          </el-col>
        </el-row>
      </div>
      <section class="registerBody width100">
        <el-row class="height100">
          <el-col :span="5" :offset="12" class="height100">
            <loginZone @loginMethod="loginMethod" class="indexLogin" />
          </el-col>
        </el-row>
      </section>
      <div class="registerFooter">
        <el-row class="width100">
          <el-col :span="8" :offset="8">
            <span>版权所有：浙江省粮食和物资储备局</span>
            <span class="ml30">技术支持：杭州安鸿科技股份有限公司</span>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import loginZone from "./loginZone";
import loginLogo from "@/assets/loginLogo.png";
export default {
  name: "login",
  components: {
    loginZone
  },
  data() {
    return {
      loginLogo: loginLogo
    };
  },
  methods: {
    loginMethod(data) {
      // this.$postData(this.$api.login_user, {
      //   password: data.password,
      //   username: data.username
      // }).then(xhr => {
      //   sessionStorage.setItem("jwt", xhr.data.jwt);
      //   this.$store.dispatch("user/commitUserSession").then(() => {
      //     this.$store.dispatch("user/commitMenuTree").then(() => {
      //       this.$router.push({ name: "modules" });
      //     });
      //   });
      // });
      this.$router.push({ name: "modules" });
    }
  },
  mounted() {
    this.$store.dispatch("user/commitClearRouter");
  }
};
</script>
