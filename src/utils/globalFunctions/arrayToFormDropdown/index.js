export default (arr, label, value, isFomate) => {
  arr.map(item => {
    if (!isFomate) {
      item.label = item[label].replace(/考核办/g, "");
    } else {
      item.label = item[label];
    }
    item.value = item[value];
    item.disabled = false;
  });
  return arr;
};
