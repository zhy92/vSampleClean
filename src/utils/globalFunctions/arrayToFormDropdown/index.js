export default (arr, label, value, isFomate) => {
  arr.map(item => {
    // if (!isFomate) {
    //   item.label = item[label].replace(/考核办/g, "");
    // } else {
    //   item.label = item[label];
    // }
    item.label = item[label];
    item.value = item[value];
    if (item.disabled && item.disabled === "Y") {
      item.disabled = true;
    } else {
      item.disabled = false;
    }
  });
  return arr;
};
