<template>
  <section class="bgfff pl20 pr20 overflowXhYa positionRel" style="flex:1;">
    <router-view :key="pathKey" />
  </section>
</template>

<script>
export default {
  name: "menuPlat",
  computed: {
    pathKey() {
      return this.$route.fullPath;
    }
  }
};
</script>
