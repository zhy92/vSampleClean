<template>
  <div class="foot-bar">
    <el-row class="foot-bar-content">
      <el-col :span="24">
        <div v-for="(footerItem, index) in footBarSettings" :key="index">
          <template v-for="(item, idx) in footerItem.itemList">
            <a :key="idx" v-if="item.link" class="link" :href="item.link">
              {{ item.itemName }}
            </a>
            <span v-else :key="idx">{{ item.itemName }}</span>
            <!-- <div :key="idx">{{footerItem.itemSeprator}}</div> -->
            <template
              v-if="
                footerItem.itemSeprator && idx < footerItem.itemList.length - 1
              "
            >
              {{ footerItem.itemSeprator }}
            </template>
          </template>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "footBar",
  props: {
    footBarSettings: Array
  }
};
</script>
