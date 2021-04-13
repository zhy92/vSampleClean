export default (btns, formData, options) => {
  return new Promise(resolve => {
    let defaultOptions = formData,
      method = options.method == "post" ? "$postData" : "$getData";
    options.vm[method](options.vm.$api[btns.postUrl], defaultOptions).then(
      xhr => {
        resolve(xhr);
      }
    );
  });
};
