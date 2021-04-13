export default (vm, options) => {
  return new Promise(resolve => {
    // if (vm.$store.getters["user/userInfos"].storePointId) {
    vm[options.method]().then(res => {
      if (options.searchlist) {
        options.searchlist.map(searchItem => {
          if (searchItem.name == options.searchPoint) {
            searchItem.data = res;
            searchItem.disabled = vm.$store.getters["user/userInfos"]
              .storePointId
              ? true
              : false;
          }
          if (searchItem.name == options.searchOrg) {
            searchItem.disabled = vm.$store.getters["user/userInfos"]
              .storePointId
              ? true
              : false;
          }
        });
      }
      if (options.dialoglist) {
        options.dialoglist.map(dialogItem => {
          if (dialogItem.name == options.dialogPoint) {
            dialogItem.data = res;
            dialogItem.disabled = vm.$store.getters["user/userInfos"]
              .storePointId
              ? true
              : false;
          }
          if (dialogItem.name == options.dialogOrg) {
            dialogItem.disabled = vm.$store.getters["user/userInfos"]
              .storePointId
              ? true
              : false;
          }
        });
      }

      resolve(res);
    });
    // }
  });
};
