/**
 * 基础数据
 */
import fertilizerSetManage from "./fertilizerSetManage";
import unitSetManage from "./unitSetManage";
import dictSetManage from "./dictSetManage";
import medicamentSetManage from "./medicamentSetManage";
import cropSetManage from "./cropSetManage";
import supplierSetManage from "./supplierSetManage";
import machinerySetManage from "./machinerySetManage";
import standardlevelSetManage from "./standardlevelSetManage";

const baseSettingApi = {
  // 肥料信息
  ...fertilizerSetManage,
  // 计量单位
  ...unitSetManage,
  // 字典表
  ...dictSetManage,
  // 药剂信息
  ...medicamentSetManage,
  // 作物信息
  ...cropSetManage,
  // 供应商信息
  ...supplierSetManage,
  // 机械设备
  ...machinerySetManage,
  // 种子品种分级
  ...standardlevelSetManage
};
export default baseSettingApi;
