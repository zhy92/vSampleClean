<template>
  <div>
    <!-- <input :value="val" @input="postValue" /> -->
    <el-input v-model="val" @input="postValue"></el-input>
  </div>
</template>
<script>
export default {
  name: "inputDemo",
  props: {
    defaultdata: {
      type: String
    }
  },
  model: {
    value: "val",
    event: "inputVal"
  },
  data() {
    console.log(this.defaultdata);
    return {
      val: this.defaultdata
    };
  },
  methods: {
    postValue() {
      this.$emit("inputVal", this.val);
    }
  }
};
</script>
