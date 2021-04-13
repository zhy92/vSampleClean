export default (list, formItemList) => {
  var map = {
    content: [],
    items: [],
    target: [],
    task: []
  };
  list.forEach((item, index) => {
    map.content.push({
      value: index + 1,
      label: item.assessmentContent
    });
    map.items.push({
      value: index + 1,
      label: item.assessmentItems
    });
    map.target.push({
      value: index + 1,
      label: item.assessmentTarget
    });
    map.task.push({
      value: index + 1,
      label: item.assessmentTargetTask
    });
  });
  formItemList.map(item => {
    switch (item.name) {
      case "assessmentContent":
        item.data = map.content;
        break;
      case "assessmentItems":
        item.data = map.items;
        break;
      case "assessmentTarget":
        item.data = map.target;
        break;
      case "assessmentTargetTask":
        item.data = map.task;
        break;
      default:
        break;
    }
    return item;
  });
  return formItemList;
};
