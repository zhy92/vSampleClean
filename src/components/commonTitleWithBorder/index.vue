<template>
  <el-col :span="span">
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
    title: String,
    span: {
      type: Number,
      default: 24
    }
  }
};
</script>
