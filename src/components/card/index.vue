<template>
  <div class="card pd10">
    <el-card shadow="never" class="card-container">
      <div
        slot="header"
        class="card-container-header pr20 clearfix"
        :style="
          cardlistsData.cardItemStyle.bg ? cardlistsData.cardItemStyle.bg : ''
        "
      >
        <span class="card-container-header-title clearfix">
          <div
            class="card-container-header-title-seperator mt14 mr10 ml10 floatLeft"
            :style="
              cardlistsData.cardItemStyle.seperatorBg
                ? cardlistsData.cardItemStyle.seperatorBg
                : ''
            "
          ></div>
          <span
            class="card-container-header-title-text"
            :style="
              cardlistsData.cardItemStyle.color
                ? cardlistsData.cardItemStyle.color
                : ''
            "
            >{{ cardlistsData.cardlistTitle }}</span
          >
        </span>
        <el-button
          v-if="cardlistsData.cardlistOperation"
          class="card-container-header-operateBtn pt0 pb0 mt14 floatRight"
          type="text"
          @click="
            detailOperateTap(
              cardlistsData.cardType,
              cardlistsData.cardlistTitle
            )
          "
        >
          {{ cardlistsData.cardlistOperation }}
        </el-button>
      </div>
      <div
        v-for="(cardItem, index) in cardlistsData.cardlistsArray"
        :key="index"
        class="card-container-item pt10 pb10 clearfix"
        @click="
          detailItemTap(
            cardItem,
            cardlistsData.cardlistTitle,
            cardlistsData.cardType
          )
        "
      >
        <el-col
          :span="16"
          class="card-container-item-text textEllipsis clearfix pl0"
        >
          <!--<div-->
          <!--class="card-container-item-text-icon mr10 displayInlineBlock"-->
          <!--&gt;</div>-->
          <div
            class="textEllipsis displayInline vAlignTop"
            :title="cardItem[cardlistsData.cardItemParams.main]"
          >
            <!-- <i
              class="iconfont iconxuanzhong mr5"
              style="font-size:15px;color: #3893DC"
            ></i> -->
            <span class="mr5">●</span>
            {{ cardItem[cardlistsData.cardItemParams.main] }}
          </div>
        </el-col>
        <el-col
          :span="8"
          class="card-container-item-date textAlignRight pr0"
          :title="cardItem[cardlistsData.cardItemParams.subMain]"
        >
          {{ cardItem[cardlistsData.cardItemParams.subMain] }}
        </el-col>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "card",
  props: {
    cardlistsData: Object
  },
  methods: {
    detailOperateTap(type, title) {
      this.$emit("detailOperateTap", type, title);
    },
    detailItemTap(item, title, type) {
      this.$emit("detailItemTap", item, title, type);
    }
  }
};
</script>
