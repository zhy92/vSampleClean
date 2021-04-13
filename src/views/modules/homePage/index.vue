<template>
  <section>
    <el-row :gutter="40" class="mt30">
      <template v-for="info in infolist">
        <el-col class="mb30" :span="12" :key="info.cardType">
          <card
            :cardlistsData="info"
            @detailOperateTap="handleDetailOperate"
            @detailItemTap="handleDetailItemTap"
          />
        </el-col>
      </template>
    </el-row>
  </section>
</template>

<script>
// 引入methods各方法
import methods from "./methods";
// 引入data各变量声明
import dataFnc from "./data";
// 组件引入
import card from "@/components/card";
// 配置数据引入
export default {
  name: "homePage",
  components: {
    card
  },
  data: function() {
    return dataFnc(this);
  },
  methods: {
    ...methods
  },
  mounted() {
    this.getAllInfosData();
  }
};
</script>
