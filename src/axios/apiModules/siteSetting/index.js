/**
 * 基地管理
 */
import siteSetManage from "./siteSetManage";
import siteGroundSetManage from "./siteGroundSetManage";
import siteMachinerySetManage from "./siteMachinerySetManage";
import joinSetManage from "./joinSetManage";

const siteSettingApi = {
  // 基地信息
  ...siteSetManage,
  // 基地土地信息
  ...siteGroundSetManage,
  // 基地设备信息
  ...siteMachinerySetManage,
  // 加盟信息
  ...joinSetManage
};
export default siteSettingApi;
