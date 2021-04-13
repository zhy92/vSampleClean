/**
 * 文件大小转换处理管道函数
 *  */

import fileSizeFnc from "@/utils/globalFunctions/renderSize";
export const fileSize = fileSizeFnc;
/* 
    日期处理
        time：源时间戳
        formatType 默认 xxxx-xx-xx hh:mm:ss
            ymd: xxxx-xx-xx
 */
export const formatdate = (value, formatType) => {
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
  return y + "-" + MM + "-" + d + " " + h + ":" + m + ":" + s;
};
/**
    日期处理
        time：源时间戳
        type：要处理的格式 默认 xxxx年xx月xx日
            /: xxxx/xx/xx
            .: xxxx.xx.xx
            -: xxxx-xx-xx
 */
export const normalDate = (time, type) => {
  if (time) {
    var date = new Date();
    date.setTime(time);
    var year = date.getFullYear();
    var month =
      date.getMonth() + 1 < 10
        ? "0" + (date.getMonth() + 1) * 1
        : date.getMonth() + 1;
    var day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
    if (type == "-") {
      return year + "-" + month + "-" + day;
    } else if (type == "/") {
      return year + "/" + month + "/" + day;
    } else if (type == ".") {
      return year + "." + month + "." + day;
    } else {
      return year + "年" + month + "月" + day + "日";
    }
  }
};
export const toDecimal2 = x => {
  var f = parseFloat(x);
  if (isNaN(f)) {
    return "";
  }
  var num = Math.round(x * 100) / 100;
  var s = num.toString();
  var rs = s.indexOf(".");
  if (rs < 0) {
    rs = s.length;
    s += ".";
  }
  while (s.length <= rs + 2) {
    s += "0";
  }
  return s;
};
/* 
  时间处理
      time：源时间戳
      type：要处理的格式 默认 xxxx年xx月xx日 xx:xx:xx
          /: xxxx/xx/xx xx:xx:xx
          .: xxxx.xx.xx xx:xx:xx
          -: xxxx-xx-xx xx:xx:xx
*/
export const normalTime = (time, type) => {
  if (time) {
    var date = new Date();
    date.setTime(time);
    var year = date.getFullYear();
    var month =
      date.getMonth() + 1 < 10
        ? "0" + (date.getMonth() + 1) * 1
        : date.getMonth() + 1;
    var day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
    var hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    var minutes =
      date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    var seconds =
      date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
    if (type == "-") {
      return (
        year +
        "-" +
        month +
        "-" +
        day +
        " " +
        hours +
        ":" +
        minutes +
        ":" +
        seconds
      );
    } else if (type == "/") {
      return (
        year +
        "/" +
        month +
        "/" +
        day +
        " " +
        hours +
        ":" +
        minutes +
        ":" +
        seconds
      );
    } else if (type == ".") {
      return (
        year +
        "." +
        month +
        "." +
        day +
        " " +
        hours +
        ":" +
        minutes +
        ":" +
        seconds
      );
    } else {
      return (
        year +
        "年" +
        month +
        "月" +
        day +
        "日" +
        " " +
        hours +
        ":" +
        minutes +
        ":" +
        seconds
      );
    }
  }
};
