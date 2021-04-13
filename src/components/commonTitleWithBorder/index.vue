<template>
  <el-col :span="24">
    <div class="common-title">
      {{ title }}
      <div class="common-title-seperator mr15"></div>
    </div>
  </el-col>
</template>
<script>
export default {
  name: "commonTitleWithBorder",
  props: {
    title: String
  }
};
</script>
