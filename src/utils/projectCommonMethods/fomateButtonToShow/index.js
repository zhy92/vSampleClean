import store from "@/store";
import globalFunctions from "@/utils/globalFunctions";
export default (buttonDataSource, options) => {
  return new Promise(resolve => {
    let buttonListData = globalFunctions.deepCopy(buttonDataSource);
    if (!options) {
      buttonListData.map(optBtn => {
        optBtn.showFlag = "false";
        store.getters["user/userButtons"].map(userBtn => {
          if (optBtn.id && optBtn.id == userBtn.buttonId) {
            optBtn.showFlag = "true";
          }
        });
      });
    } else {
      let defaultPropObj = {
        target: "edit",
        prop: "type",
        flag: "showFlag",
        action: "false"
      };
      let propObj = Object.assign({}, defaultPropObj, options);
      buttonListData.map(optBtn => {
        if (optBtn[propObj.prop] == propObj.target) {
          optBtn[propObj.flag] = propObj.action;
        }
      });
    }
    resolve(buttonListData);
  });
};
