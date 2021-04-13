<template>
  <div class="horizen-nav">
    <el-menu
      :default-active="this.$route.matched[1].path"
      class="horizen-nav-content"
      mode="horizontal"
      @select="handleSelect"
      background-color=""
      text-color="#fff"
      active-text-color="#fff"
    >
      <template v-for="item in headrouter">
        <el-menu-item
          class="horizen-nav-content-item"
          v-if="!item.hidden"
          :key="item.path"
          :route="item.path"
          :index="item.path"
          :to="item.path"
        >
          {{ item.meta.title }}
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "horizenNav",
  props: {
    headrouter: Array
  },
  data() {
    return {};
  },
  methods: {
    handleSelect(key) {
      this.$router.push(key);
    }
  }
};
</script>
