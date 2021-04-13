<template>
  <el-tabs
    v-model="tabSettings.activeName"
    :type="tabSettings.tabCardType || 'card'"
    @tab-click="handleClick"
    :editable="tabSettings.editable || false"
    @edit="handleTabsEdit"
    :stretch="tabSettings.stretch || false"
    :tab-position="tabSettings.tabPostion || 'top'"
  >
    <el-tab-pane
      v-for="tab in tabSettings.tabCardData"
      :key="tab.id"
      :label="tab.label"
      :name="tab.id"
    >
      <!-- {{ tab.label }} -->
    </el-tab-pane>
  </el-tabs>
</template>
<script>
export default {
  name: "tabCard",
  props: {
    tabSettings: Object
  },
  data() {
    return {};
  },
  methods: {
    handleClick(tab) {
      let tabObj = {
        tabId: tab.name,
        tabIndex: tab.index,
        tableLabel: tab.label
      };
      this.$emit("handleTabChange", tabObj);
    },
    handleTabsEdit(targetName, action) {
      if (action === "add") {
        let tabIdx = this.tabSettings.tabCardData.length,
          newTabName = ++tabIdx + "";
        this.tabSettings.tabCardData.push({
          label: "New Tab",
          id: newTabName
        });
        this.tabSettings.tabModel = newTabName;
      }
      if (action === "remove") {
        let tabs = this.tabSettings.tabCardData;
        let activeName = this.tabSettings.tabModel;
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              let nextTab = tabs[index + 1] || tabs[index - 1];
              if (nextTab) {
                activeName = nextTab.name;
              }
            }
          });
        }
        this.tabSettings.tabModel = activeName;
        this.tabSettings.tabCardData = tabs.filter(
          tab => tab.name !== targetName
        );
      }
      // this.$emit("handleTabsEdit", targetName, action);
    }
  }
};
</script>
