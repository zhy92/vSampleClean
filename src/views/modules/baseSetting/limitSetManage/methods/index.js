const methods = {
  handleTreeNodeChange(treedata) {
    console.log(treedata);
    this.selectMenuId = treedata;
  },
  setTreeList() {
    this.treeSettings.treeData = this.$store.getters["assessment/menuTreeList"];
  }
};
export default methods;
