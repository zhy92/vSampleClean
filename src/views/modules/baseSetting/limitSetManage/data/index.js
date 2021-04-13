const data = function(vm) {
  let obj = {
    selectMenuId: "",
    treeSettings: {
      treeData: [],
      treeClassName: "menuTree",
      defaultProps: {
        children: "children",
        label: "text"
      },
      treeWithCheckbox: true,
      treeButtons: [
        {
          key: "getCheckedKeys",
          text: "获取已选节点"
        }
      ]
    }
  };
  return obj;
};
export default data;
