<template>
  <div class="circle-dot displayInlineBlock mr5">
    <span
      class="dot positionRel"
      ref="dot"
      :style="{ background: mapColor[status] ? mapColor[this.status] : 'gray' }"
    >
      <span
        class="dotCenter positionAbs positionCenterWrap"
        ref="dotCenter"
        :style="{
          background: mapColor[status] ? mapColor[this.status] : 'gray'
        }"
      ></span>
    </span>
  </div>
</template>

<script>
export default {
  name: "index",
  props: {
    status: String
  },
  data() {
    return {
      mapColor: {
        complete: "green",
        reported: "orange",
        incomplete: "red"
      }
    };
  },
  mounted() {
    // this.$refs.dot.style.background = this.json[this.status] ? this.json[this.status] : 'gray'
  }
};
</script>
