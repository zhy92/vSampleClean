const unitSetManage = {
  // 查询所有计量单位
  getUnitListAll_unitSetManage: "_data/base/unit/listAll",
  // 查询所有可用计量单位(未禁用状态)
  getUnitListAvail_unitSetManage: "_data/base/unit/listDataAvail",
  // 分页查询所有计量单位
  getUnitListPage_unitSetManage: "_data/base/unit/pageData",
  // 查询计量单位明细
  loadUnitDetail_unitSetManage: "_data/base/unit/load",
  // 新增计量单位
  insertUnit_unitSetManage: "_data/base/unit/addUnit",
  // 修改计量单位
  updateUnit_unitSetManage: "_data/base/unit/updateUnit",
  // 批量启用禁用计量单位
  updateStatusBatchUnit_unitSetManage: "_data/base/unit/updateStatusBatch",
  // 删除计量单位
  removeUnit_unitSetManage: "_data/base/unit/removeUnit",
  // 批量删除计量单位
  removeBatchUnit_unitSetManage: "_data/base/unit/removeBatch"
};
export default unitSetManage;
