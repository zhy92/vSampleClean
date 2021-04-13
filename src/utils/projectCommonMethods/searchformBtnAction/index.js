export default (btns, formData, options) => {
  return new Promise(resolve => {
    let defaultOptions = formData,
      method =
        options.method && options.method.toLowerCase() == "post"
          ? "$postData"
          : "$getData";
    options.vm[method](options.vm.$api[btns.postUrl], defaultOptions).then(
      xhr => {
        resolve(xhr);
      }
    );
  });
};
