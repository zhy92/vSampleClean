<template>
  <div class="idcard">
    <el-row>
      <el-col class="idcard-title">{{ data.title }}</el-col>
      <el-col :span="24" class="idcard-seprator">
        <el-col class="idcard-iconbox" :span="6">
          <i :class="data.icon"></i>
        </el-col>
        <el-col :span="18">
          <el-row v-for="(item, index) in data.data" :key="index">
            <el-col :span="item.key.span" class="idcard-key">{{
              item.key.text
            }}</el-col>
            <el-col :span="item.value.span" class="idcard-value">{{
              item.value.text
            }}</el-col>
          </el-row>
        </el-col>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "idCard",
  props: {
    data: Object
  }
};
</script>
