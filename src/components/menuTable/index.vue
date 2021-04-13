<template>
  <div class="menuTable">
    <div class="menuTable-container pt20">
      <section
        class="menuTable-container-block mb20"
        v-for="block in menuData"
        :key="block.name"
      >
        <div
          class="menuTable-container-block-title fontSize14 textBold pl10 pb10"
        >
          {{ block.meta.title }}
        </div>
        <div class="menuTable-container-block-container displayFlex">
          <div
            v-for="item in block.children"
            :key="item.name"
            class="menuTable-container-block-container-item cursor"
            @click="handleTapMenu(item)"
          >
            <div
              class="menuTable-container-block-container-item-icon textAlignCenter mt5 mb5"
            >
              <em :class="['iconfont fontSize30', item.meta.icon]"></em>
            </div>
            <div
              class="menuTable-container-block-container-item-text fontSize12 textAlignCenter"
            >
              {{ item.meta.title }}
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
export default {
  name: "menuTable",
  props: {
    menuData: Array
  },
  methods: {
    handleTapMenu(routeItem) {
      this.$router.push(routeItem.path);
    }
  }
};
</script>
