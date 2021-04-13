export default data => {
  for (let prop in data) {
    if (data[prop] instanceof Array) {
      data[prop] = JSON.stringify(data[prop]);
    }
  }
  return data;
};
