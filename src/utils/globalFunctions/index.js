import readFileOnline from "./readFileOnline";
import fileFormat from "./fileFormat";
import dateStampFormat from "./dateStampFormat";
import renderSize from "./renderSize";
import arrayToFormDropdown from "./arrayToFormDropdown";
import postArrtoString from "./postArrtoString";
import parseNumberToCnMoney from "./parseNumberToCnMoney";
import cnwordToCharCode from "./cnwordToCharCode";
import deepCopy from "./deepCopy";
import changeDateFormat from "./changeDateFormat";
import uuid from "./uuid";
import setFilterFormData from "./setFilterFormData";
import openFilePathInIe from "./openFilePathInIe";
import arrayGroupByAttr from "./arrayGroupByAttr";
import sortArrayByProps from "./sortArrayByProps";

const globalFncs = {
  // 根据数组某一属性把数组排序
  sortArrayByProps: sortArrayByProps,
  // 根据数组某一属性把数组元素分组
  arrayGroupByAttr: arrayGroupByAttr,
  // 打开本地文件夹（只有ie可以使用，只测试过ie11,可用）
  openFilePathInIe: openFilePathInIe,
  // 深拷贝
  deepCopy: deepCopy,
  // 文件格式转换
  fileFormat: fileFormat,
  // 在线阅读文件
  readFileOnline: readFileOnline,
  // 时间戳转日期
  dateStampFormat: dateStampFormat,
  //  格式化文件大小
  renderSize: renderSize,
  // 获取接口数据下拉转换成可用的的下拉组建数据 label待转化显示的汉字 value待转化的提交的值
  arrayToFormDropdown: arrayToFormDropdown,
  // 格式化接口参数：数组->数组字符串
  postArrtoString: postArrtoString,
  // 格式化数字为人民币单位
  parseNumberToCnMoney: parseNumberToCnMoney,
  //汉字转 Unicode 编码
  cnwordToCharCode: cnwordToCharCode,
  // 日期转化
  changeDateFormat: changeDateFormat,
  // 生成uuid
  uuid: uuid,
  //设置头部下拉值
  setFilterFormData: setFilterFormData
};
export default globalFncs;
