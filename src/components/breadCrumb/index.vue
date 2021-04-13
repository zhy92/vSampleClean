<template>
  <div class="bread-crumb">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <template v-for="(route, idx) in $route.matched">
        <el-breadcrumb-item
          v-if="idx != 0"
          :key="idx"
          :to="{ path: route.path, query: route.query }"
          >{{ route.meta.title }}</el-breadcrumb-item
        >
      </template>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: "breadCrumb"
};
</script>
