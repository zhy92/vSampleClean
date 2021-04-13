<template>
  <div class="carousel-top-banner">
    <el-carousel
      :indicator-position="carouselSrcs.indicatorPosition"
      :height="carouselSrcs.height"
    >
      <el-carousel-item
        class="carousel-top-banner-item"
        v-for="(item, index) in carouselSrcs.carouselSrcs"
        :key="index"
      >
        <a
          v-if="item.href"
          class="displayBlock carousel-top-banner-item-imgbox"
          :href="item.href"
          :title="item.alt"
          target="_blank"
          :style="{ backgroundImage: 'url(' + item.picSrc + ')' }"
        ></a>
        <el-image
          v-else
          style="width: 100%; height: 100%"
          :src="item.picSrc"
          :title="item.alt"
          :fit="item.fit || 'contain'"
        >
        </el-image>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: "carouselBanner",
  props: {
    carouselSrcs: Object
  }
};
</script>
