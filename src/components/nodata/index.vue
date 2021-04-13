<template>
  <div class="positionAbs positionCenterWrap">
    <el-image :src="img"></el-image>
    <p class="fontSize16 textColor666 mt20 textAlignCenter">
      暂无该数据
    </p>
  </div>
</template>

<script>
import img from "@/assets/nodatas2.png";
// import img from "@/assets/nodatasGray.png";

export default {
  name: "nodata",
  data() {
    return {
      img: img
    };
  }
};
</script>
