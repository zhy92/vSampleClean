/*
    日期处理
        time：源时间戳
        formatType 默认 xxxx-xx-xx hh:mm:ss
            ymd: xxxx-xx-xx
 */

export default (value, formatType) => {
  if (!value) {
    return "";
  }
  // if (value instanceof Number) {
  //   return value;
  // }
  let date = new Date(value);
  let y = date.getFullYear();
  let MM = date.getMonth() + 1;
  MM = MM < 10 ? "0" + MM : MM;
  let d = date.getDate();
  d = d < 10 ? "0" + d : d;
  let h = date.getHours();
  h = h < 10 ? "0" + h : h;
  let m = date.getMinutes();
  m = m < 10 ? "0" + m : m;
  let s = date.getSeconds();
  s = s < 10 ? "0" + s : s;
  if (formatType == "ymd") {
    return y + "-" + MM + "-" + d;
  }
  if (formatType == "y") {
    return y;
  }
  return y + "-" + MM + "-" + d + " " + h + ":" + m + ":" + s;
};
