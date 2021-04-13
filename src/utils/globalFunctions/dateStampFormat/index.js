export default (value, formatType) => {
  if (!value) {
    return "";
  }
  var dd;
  if (typeof value == "number") {
    if ((value + "").length == 10) {
      dd = value * 1000;
    } else {
      dd = value;
    }
  }
  if (typeof value == "string") {
    if (value.indexOf("T") > -1) {
      var arr = value.split("T");
      var dat = arr[0];
      var darr = dat.split("-");
      var t = arr[1];
      var tarr = t.split(".000");
      var marr = tarr[0].split(":");
      dd =
        parseInt(darr[0]) +
        "/" +
        parseInt(darr[1]) +
        "/" +
        parseInt(darr[2]) +
        " " +
        parseInt(marr[0]) +
        ":" +
        parseInt(marr[1]) +
        ":" +
        parseInt(marr[2]);
    } else {
      if (value.indexOf("-") > -1) {
        dd = value.replace(new RegExp("-", "gm"), "/");
      } else {
        dd = value;
      }
    }
  }
  var date = new Date(dd);
  var y = date.getFullYear();
  var MM = date.getMonth() + 1;
  MM = MM < 10 ? "0" + MM : MM;
  var d = date.getDate();
  d = d < 10 ? "0" + d : d;
  var h = date.getHours();
  h = h < 10 ? "0" + h : h;
  var m = date.getMinutes();
  m = m < 10 ? "0" + m : m;
  var s = date.getSeconds();
  s = s < 10 ? "0" + s : s;
  if (formatType == "ymd") {
    return y + "-" + MM + "-" + d;
  }
  return y + "-" + MM + "-" + d + " " + h + ":" + m + ":" + s;
};
