const assessmentApi = {
  // 当前流程的方案
  listUnExpireScheme: "_data/schemeAssess/phase/listUnExpireScheme",
  // 考核列表
  distributeSuperviseList_assessment:
    "_data/schemeAssess/supervision/pageAssess",
  // 自评提交列表
  schemeKpiBySchemeId: "_data/schemeAssess/phase/schemeKpiBySchemeId",
  /**
   * 配合工作
   */
  // 列表
  cooperateList: "_data/schemeAssess/phase/pageSelfCooperate",
  // 获取处室意见列表
  listAssessComment: "_data/shemeAssess/comment/listAssessComment",
  // 配合详情
  loadAssessComment: "_data/shemeAssess/comment/loadAssessComment",
  /**
   * 自评工作
   */
  // 列表
  selfList: "_data/schemeAssess/phase/pageSelfManage",
  getFileList: "_data/supervise/schdl/getFileList",
  // 责任处室打分数据
  listAssessKpi: "_data/shemeAssess/kpi/listAssessKpi",
  // 打分列表的详情
  loadAssessKpi: "_data/shemeAssess/kpi/loadAssessKpi",
  submitEvaluation: "_data/shemeAssess/shemeAssess/reportShemeAssess",
  /**
   * 部门配合工作
   */
  //列表
  departmentCooperateList: "_data/schemeAssess/phase/pageHigherCooperate",
  /**
   * 部门打分
   */
  //列表
  departmentEvaluationList: "_data/schemeAssess/phase/pageHigherManage",
  /**
   * 抽查
   */
  // 列表
  spotCheckEvaluationList: "_data/schemeAssess/phase/pageRandomAssess",
  // 被考核机构城市
  getAssessedOrgBySchemeId:
    "_data/shemeAssess/schemePhaseAcl/getAssessedOrgBySchemeId",
  // 获取 被抽查的机构
  getRandomAssessedOrgIdsBySchemeId:
    "_data/shemeAssess/schemePhaseAcl/getRandomAssessedOrgIdsBySchemeId"
};
export default assessmentApi;
