<template>
  <div class="horizen-top-banner">
    <el-col :span="24">
      <img :src="bannerSrc" alt="图片2" />
    </el-col>
  </div>
</template>

<script>
export default {
  name: "horizenTopBanner",
  props: {
    bannerSrc: String
  }
};
</script>
