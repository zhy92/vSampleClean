const machinerySetManage = {
  // 分页查询机械设备列表
  getMachineryListPage_machinerySetManage: "_data/base/machinery/pageData",
  // 查询所有机械设备信息(下拉数据，不分页)
  getMachineryListAll_machinerySetManage: "_data/base/machinery/listAll",
  // 查询单条机械设备详情
  loadMachineryDetail_machinerySetManage: "_data/base/machinery/load",
  // 添加机械设备信息
  insertMachinery_machinerySetManage: "_data/base/machinery/insert",
  // 全量更新机械设备信息
  updateMachinery_machinerySetManage: "_data/base/machinery/update",
  // 删除机械设备信息
  removeMachinery_machinerySetManage: "_data/base/machinery/remove",
  // 批量删除机械设备信息
  removeBatchMachinery_machinerySetManage: "_data/base/machinery/removeBatch",
  // 批量启用-禁用机械设备信息
  updateStatusBatchMachinery_machinerySetManage:
    "_data/base/machinery/updateDisabledBatch"
};
export default machinerySetManage;
