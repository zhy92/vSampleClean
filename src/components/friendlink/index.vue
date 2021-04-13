<template>
  <div>
    <h2>友情链接</h2>
    <ul class="clearfix">
      <li
        class="floatLeft mt10 mb10 mr20"
        v-for="(item, index) in friendlinkArr"
        :key="index"
      >
        <a target="_blank" :href="item.href" class="item">
          <el-image
            :style="item.imgStyle ? item.imgStyle : ''"
            :src="item.imgSrc"
            :alt="item.imgTitle || ''"
            :title="item.imgTitle || ''"
            :fit="item.imgFit || 'fit'"
          >
          </el-image>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "friendlink",
  props: {
    friendlinkArr: Array
  }
};
</script>
