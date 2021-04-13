const IDCard = (rule, value, callback) => {
  var re = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/; //正则表达式
  if (!isEmpty(value) && !re.test(value)) {
    callback(new Error("不是有效身份证号"));
  } else {
    callback();
  }
};
const phone = (rule, value, callback) => {
  var re = /(^(\d{3,4}-)?\d{7,8})$|(^0?(13[0-9]|14[57]|15[012356789]|17[012356789]|18[0-9]|19[012356789])[0-9]{8})$/; //正则表达式
  if (!isEmpty(value) && !re.test(value)) {
    callback(new Error("不是有效电话号码"));
  } else {
    callback();
  }
};
const email = (rule, value, callback) => {
  var re = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
  if (!re.test(value)) {
    callback(new Error("不是有效邮箱格式"));
  } else {
    callback();
  }
};
const ip4 = (rule, value, callback) => {
  var re = /^(d{1,2}|1dd|2[0-4]d|25[0-5]).(d{1,2}|1dd|2[0-4]d|25[0-5]).(d{1,2}|1dd|2[0-4]d|25[0-5]).(d{1,2}|1dd|2[0-4]d|25[0-5])$/;
  if (!re.test(value)) {
    callback(new Error("不是有效IP地址"));
  } else {
    callback();
  }
};
const arrayLength = (rule, value, callback) => {
  if (!isEmpty(value) && rule.length && value.length < rule.length) {
    callback(new Error(`地区至少选择${rule.length}级`));
  } else {
    callback();
  }
};
const number = (rule, value, callback) => {
  var reg = /[^\d]/g; //纯数字校验
  if (!isEmpty(value) && reg.test(value)) {
    callback(new Error(`请输入整数`));
  } else {
    callback();
  }
};
const isNumber = (rule, value, callback) => {
  var reg = /^([-]?)\d+(\.\d+)?$/; //有效数字校验
  if (!isEmpty(value) && !reg.test(value)) {
    callback(new Error(`请输入正确的数字`));
  } else {
    callback();
  }
};
const decimal = (rule, value, callback) => {
  // var reg = /^(([-]?)[0-9][0-9]*)+(\.[0-9]{0,2})?$/;
  var reg = new RegExp(
    "^(([-]?)[0-9][0-9]*)+(\\.[0-9]{0," + rule.number + "})?$"
  );
  if (!isEmpty(value) && !reg.test(value)) {
    callback(new Error(`最多可保留${rule.number}位小数`));
  } else {
    callback();
  }
};
const min = (rule, value, callback) => {
  if (!isEmpty(value) && !isEmpty(rule.min) && value < rule.min) {
    callback(new Error(`最小值为${rule.min}`));
  } else {
    callback();
  }
};
const minNotEqual = (rule, value, callback) => {
  if (!isEmpty(value) && !isEmpty(rule.min) && value <= rule.min) {
    callback(new Error(`最小值为${rule.min},但不能等于${rule.min}`));
  } else {
    callback();
  }
};
const max = (rule, value, callback) => {
  if (!isEmpty(value) && !isEmpty(rule.max) && value > rule.max) {
    callback(new Error(`最大值为${rule.max}`));
  } else {
    callback();
  }
};
const maxNotEqual = (rule, value, callback) => {
  if (!isEmpty(value) && !isEmpty(rule.max) && value >= rule.max) {
    callback(new Error(`最大值为${rule.max},但不能等于${rule.max}`));
  } else {
    callback();
  }
};
const districtCode = (rule, value, callback) => {
  var codeLength = 0;
  if (!isEmpty(rule.level)) {
    if (rule.level <= 3) {
      codeLength = rule.level * 2;
    } else {
      codeLength = (rule.level - 1) * 3;
    }
    if (codeLength != value.length || !/^[1-9]\d*$|^0$/.test(value)) {
      callback(new Error(`需要输入${codeLength}位数字`));
    }
  }
  if (!isEmpty(rule.parentCode) && !value.startsWith(rule.parentCode)) {
    callback(new Error(`需要以上级编码开始`));
  }
  callback();
};
const priceListNotEmpty = (rule, value, callback) => {
  if (isEmpty(value) || value.length === 0) {
    callback(new Error(`收购价格未配置`));
  } else {
    callback();
  }
};
const isEmpty = value => {
  return typeof value === "undefined" || value === null || value === "";
};

export {
  IDCard,
  phone,
  email,
  ip4,
  arrayLength,
  number,
  isNumber,
  decimal,
  min,
  minNotEqual,
  max,
  maxNotEqual,
  districtCode,
  priceListNotEmpty
};
