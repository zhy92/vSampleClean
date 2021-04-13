<template>
  <div class="sider-nav-item">
    <template v-for="menuItem in sidebarData">
      <template v-if="!menuItem.hidden">
        <template v-if="!menuItem.children">
          <el-menu-item
            :index="menuItem.path"
            :route="menuItem.path"
            :key="menuItem.path"
            :title="menuItem.meta.title"
            class="textEllipsis"
          >
            <i
              :class="['iconfont mr10', menuItem.meta.icon]"
              style="color:#0091FF"
            ></i>
            <!--   -->
            <span slot="title" style="color:#0091FF">{{
              menuItem.meta.title
            }}</span>
          </el-menu-item>
        </template>
        <template v-else>
          <el-submenu :index="menuItem.path + ''" :key="menuItem.path">
            <template v-if="!menuItem.hidden" slot="title">
              <i
                :class="['iconfont mr10', menuItem.meta.icon]"
                style="color:#0091FF"
              ></i>
              <span style="color:#0091FF">
                {{ menuItem.meta.title }}
              </span>
            </template>
            <template v-if="!menuItem.hidden">
              <siderNavItems :sidebarData="menuItem.children" />
            </template>
          </el-submenu>
        </template>
      </template>
    </template>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'
export default {
  name: "siderNavItems",
  props: {
    sidebarData: Array
  }
};
</script>
