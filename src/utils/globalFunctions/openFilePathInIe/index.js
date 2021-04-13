/**
 * 只能在ie当中实现，edge、chrome等都不行
 * @param {*} path:本地文件路径
 */
const openFilePathInIe = function(path) {
  var filename = path;
  try {
    var obj = new ActiveXObject("wscript.shell");
    if (obj) {
      obj.Run('"' + filename + '"', 1, false);
      //obj.run("osk");/*打开屏幕键盘*/
      //obj.Run('"'+filename+'"');
      obj = null;
    }
  } catch (e) {
    alert("请确定是否存在该盘符或文件");
  }
};

export default openFilePathInIe;
