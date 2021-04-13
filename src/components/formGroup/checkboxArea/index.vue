<template>
  <div>
    <el-row v-for="(group, index) in areadata" :key="index">
      <el-col :span="4">
        {{ group.title }}
      </el-col>
      <el-col :span="20">
        <elCheckbox
          @handleChangeBox="handleChangeCheckbox"
          :data="group.data"
          :modelName="group.model"
        />
      </el-col>
    </el-row>
    <el-button @click="addCheckResult">添加</el-button>
  </div>
</template>

<script>
import elCheckbox from "../checkbox";
export default {
  props: {
    areadata: Array
  },
  components: {
    elCheckbox
  },
  data() {
    return {
      checkValues: {}
    };
  },
  methods: {
    handleChangeCheckbox(val, modelName) {
      //console.log(val, modelName);
      this.$set(this.checkValues, modelName, val.join(","));
      //console.log(this.checkValues, "values");
    },
    addCheckResult() {
      this.$emit("handleChangeBoxArea", this.checkValues);
    }
  }
};
</script>
