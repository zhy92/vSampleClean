<template>
  <div class="pagination">
    <div class="block">
      <el-pagination
        :small="paginationSettings.smallPager"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :pager-count="paginationSettings.pagerCount || 7"
        :current-page="paginationSettings.currentPage || 1"
        :page-sizes="
          paginationSettings.pageSizeChangeList ||
            $global.paginationOption.pageSizeChangeList
        "
        :page-size="
          paginationSettings.pageSize || $global.paginationOption.numberPerpage
        "
        :layout="paginationSettings.layout || $global.paginationOption.layout"
        :total="paginationSettings.totalNumbers"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "pagination",
  props: {
    paginationSettings: Object
  },
  methods: {
    handleSizeChange(val) {
      this.$emit("handlePaginationPagesize", val);
    },
    handleCurrentChange(val) {
      this.$emit("handlePaginationPagenumber", val);
    }
  }
};
</script>
