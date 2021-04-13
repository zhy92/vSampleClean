<template>
  <div class="main-top-logo" :style="headInfos.style">
    <el-col :span="24">
      <el-col class="pl20" :span="headInfos.operate ? 16 : 24">
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
      </el-col>

      <el-col
        class="headerToolbar textAlignRight pt28"
        :span="8"
        v-if="headInfos.operate"
      >
        <span
          class="headerToolbar-icon el-icon-s-custom currentUser text-white"
        ></span>
        <span class="mr24 positionRel" style="top:-3px;">
          {{ headInfos.loginName }}
        </span>
        <!-- <span
          class="headerToolbar-icon el-icon-message-solid cursor positionRel"
          @click="skipMsg"
        >
          <span class="noticeTips" v-show="$store.getters.unreadNotice > 0">
            {{ $store.getters.unreadNotice }}
          </span>
        </span> -->
        <el-badge :value="headInfos.unreadNotice || 0" :max="99" class="mr24">
          <span
            class=" mr0 headerToolbar-icon el-icon-message-solid cursor positionRel"
            @click="skipMsg"
          >
          </span>
        </el-badge>
        <span
          class="headerToolbar-icon el-icon-delete mr24"
          @click="logout('clear')"
        ></span>
        <a class="headerToolbar-icon el-icon-switch-button" @click="logout"></a>
      </el-col>
    </el-col>
  </div>
</template>

<script>
export default {
  name: "headerBar",
  props: {
    headInfos: Object
  },
  methods: {
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
