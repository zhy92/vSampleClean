const supplierSetManage = {
  // 分页查询供应商列表
  getSupplierListPage_supplierSetManage: "_data/base/supplier/pageData",
  // 查询单条供应商详情
  loadSupplierDetail_supplierSetManage: "_data/base/supplier/load",
  // 添加供应商信息
  insertSupplier_supplierSetManage: "_data/base/supplier/insert",
  // 全量更新供应商信息
  updateSupplier_supplierSetManage: "_data/base/supplier/update",
  // 删除供应商信息
  removeSupplier_supplierSetManage: "_data/base/supplier/remove",
  // 批量删除供应商信息
  removeBatchSupplier_supplierSetManage: "_data/base/supplier/removeBatch",
  // 批量启用-禁用供应商信息
  updateStatusBatchSupplier_supplierSetManage:
    "_data/base/supplier/updateDisabledBatch"
};
export default supplierSetManage;
