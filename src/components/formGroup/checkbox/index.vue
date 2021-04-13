<template>
  <el-checkbox-group v-model="checkList" @change="handleChangeCheckbox">
    <el-checkbox
      v-for="box in data"
      :key="box.value"
      :disabled="box.disabled"
      :label="box.value"
      >{{ box.label }}</el-checkbox
    >
  </el-checkbox-group>
</template>

<script>
export default {
  props: {
    data: Array,
    modelName: String
  },
  data() {
    return {
      checkList: []
    };
  },
  methods: {
    handleChangeCheckbox(val) {
      let modelName = this.modelName || "";
      this.$emit("handleChangeBox", val, modelName);
    }
  }
};
</script>
