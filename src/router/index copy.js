import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

export const staticRouterMap = [
  {
    path: "/",
    redirect: "/modules"
  },
  // {
  //   path: "/jwt=*",
  //   redirect: "/"
  // },
  {
    path: "/404",
    component: () => import("@/views/404")
  },
  {
    path: "/login",
    hidden: false,
    name: "login",
    component: () => import("@/views/login")
  },
  {
    path: "/modules",
    hidden: false,
    name: "modules",
    component: () => import("@/views/modules/index"),
    redirect: "/modules/planSetting",
    children: [
      {
        path: "/modules/planSetting",
        name: "planSetting",
        hidden: false,
        component: () => import("@/views/commonViewPlat/menuPlat"),
        meta: {
          title: "计划管理",
          icon: "iconkucunjianguan fontSize20"
        },
        redirect: "/modules/planSetting/reservePlan",
        children: [
          {
            path: "/modules/planSetting/reservePlan",
            name: "reservePlan",
            hidden: false,
            component: () => import("@/views/modules/planSetting/reservePlan"),
            meta: {
              title: "储备计划",
              icon: "iconkudian text-danger fontSize20"
            }
          },
          {
            path: "/modules/planSetting/pointBuildPlan",
            name: "pointBuildPlan",
            hidden: false,
            component: () =>
              import("@/views/modules/planSetting/pointBuildPlan"),
            meta: {
              title: "仓储建设规划",
              icon: "iconcangku text-success fontSize20"
            }
          },
          {
            path: "/modules/planSetting/purchase",
            name: "purchase",
            hidden: false,
            component: () => import("@/views/modules/planSetting/purchase"),
            meta: {
              title: "购置管理",
              icon: "iconkucunhuizongliebiao text-danger fontSize20"
            }
          }
        ]
      },
      {
        path: "/modules/certifySetting",
        name: "certifySetting",
        hidden: false,
        component: () => import("@/views/commonViewPlat/menuPlat"),
        meta: {
          title: "单证管理",
          icon: "iconkucunjianguan fontSize20"
        },
        redirect: "/modules/certifySetting/incomeCertify",
        children: [
          {
            path: "/modules/certifySetting/incomeCertify",
            name: "incomeCertify",
            hidden: false,
            component: () =>
              import("@/views/modules/certifySetting/incomeCertify"),
            meta: {
              title: "入库执行单",
              icon: "iconrukuzhihangdan text-primary fontSize20"
            }
          },
          {
            path: "/modules/certifySetting/incomeRefundCertify",
            name: "incomeRefundCertify",
            hidden: false,
            component: () =>
              import("@/views/modules/certifySetting/incomeRefundCertify"),
            meta: {
              title: "入库退货单",
              icon: "iconrukutuihuodan text-success fontSize20"
            }
          },
          {
            path: "/modules/certifySetting/moveCertify",
            name: "moveCertify",
            hidden: false,
            component: () =>
              import("@/views/modules/certifySetting/moveCertify"),
            meta: {
              title: "移库执行单",
              icon: "iconyikuzhihangdan text-primary fontSize20"
            }
          },
          {
            path: "/modules/certifySetting/outCertify",
            name: "outCertify",
            hidden: false,
            component: () =>
              import("@/views/modules/certifySetting/outCertify"),
            meta: {
              title: "出库执行单",
              icon: "iconchukuzhihangdan text-warning fontSize20"
            }
          },
          {
            path: "/modules/certifySetting/outRefundCertify",
            name: "outRefundCertify",
            hidden: false,
            component: () =>
              import("@/views/modules/certifySetting/outRefundCertify"),
            meta: {
              title: "出库退货单",
              icon: "iconchukutuihuodan text-warning fontSize20"
            }
          },
          {
            path: "/modules/certifySetting/checkCertify",
            name: "checkCertify",
            hidden: false,
            component: () =>
              import("@/views/modules/certifySetting/checkCertify"),
            meta: {
              title: "盘点单",
              icon: "iconpandiandan text-warning fontSize20"
            }
          },
          {
            path: "/modules/certifySetting/maintenanceCertify",
            name: "maintenanceCertify",
            hidden: false,
            component: () =>
              import("@/views/modules/certifySetting/maintenanceCertify"),
            meta: {
              title: "维修保养单",
              icon: "iconweixiubaoyangdan text-success fontSize20"
            }
          },
          {
            path: "/modules/certifySetting/handOutCertify",
            name: "handOutCertify",
            hidden: false,
            component: () =>
              import("@/views/modules/certifySetting/handOutCertify"),
            meta: {
              title: "发放登记单",
              icon: "iconfafangdengjidan text-danger fontSize20"
            }
          },
          {
            path: "/modules/certifySetting/inspectCertify",
            name: "inspectCertify",
            hidden: false,
            component: () =>
              import("@/views/modules/certifySetting/inspectCertify"),
            meta: {
              title: "巡查记录单",
              icon: "iconxunchajiludan text-primary fontSize20"
            }
          },
          {
            path: "/modules/certifySetting/qualityCertify",
            name: "qualityCertify",
            hidden: false,
            component: () =>
              import("@/views/modules/certifySetting/qualityCertify"),
            meta: {
              title: "质量检测单",
              icon: "iconzhiliangjiancedan text-warning fontSize20"
            }
          },
          {
            path: "/modules/certifySetting/recoverCertify",
            name: "recoverCertify",
            hidden: false,
            component: () =>
              import("@/views/modules/certifySetting/recoverCertify"),
            meta: {
              title: "回收单",
              icon: "iconhuishoudan text-success fontSize20"
            }
          },
          {
            path: "/modules/certifySetting/requisitionCertify",
            name: "requisitionCertify",
            hidden: false,
            component: () =>
              import("@/views/modules/certifySetting/requisitionCertify"),
            meta: {
              title: "调拨单",
              icon: "iconkucunjianguan text-primary fontSize20"
            }
          },
          {
            path: "/modules/certifySetting/scrapCertify",
            name: "scrapCertify",
            hidden: false,
            component: () =>
              import("@/views/modules/certifySetting/scrapCertify"),
            meta: {
              title: "报废申请单",
              icon: "iconbaofeishenqingdan text-danger fontSize20"
            }
          }
        ]
      },
      // {
      //   path: "/modules/alternateSetting",
      //   name: "alternateSetting",
      //   hidden: false,
      //   component: () => import("@/views/commonViewPlat/menuPlat"),
      //   meta: {
      //     title: "轮换管理",
      //     icon: "iconkucunjianguan fontSize20"
      //   },
      //   redirect: "/modules/alternateSetting/qualityTest",
      //   children: [
      //     {
      //       path: "/modules/alternateSetting/qualityTest",
      //       name: "qualityTest",
      //       hidden: false,
      //       component: () =>
      //         import("@/views/modules/alternateSetting/qualityTest"),
      //       meta: {
      //         title: "质量检测",
      //         icon: "iconkucunjianguan fontSize20"
      //       }
      //     }
      //   ]
      // },
      {
        path: "/modules/baseSetting",
        name: "baseSetting",
        hidden: false,
        component: () => import("@/views/commonViewPlat/menuPlat"),
        meta: {
          title: "基础数据",
          icon: "iconkucunjianguan fontSize20"
        },
        redirect: "/modules/baseSetting/menuSetManage",
        children: [
          // {
          //   path: "/modules/baseSetting/menuSetManage",
          //   name: "menuSetManage",
          //   hidden: true,
          //   component: () =>
          //     import("@/views/modules/baseSetting/menuSetManage"),
          //   meta: {
          //     title: "菜单管理",
          //     icon: "iconkucunjianguan fontSize20"
          //   }
          // },
          // {
          //   path: "/modules/baseSetting/taskSetManage",
          //   name: "taskSetManage",
          //   hidden: true,
          //   component: () =>
          //     import("@/views/modules/baseSetting/taskSetManage"),
          //   meta: {
          //     title: "计划管理",
          //     icon: "iconkucunjianguan fontSize20"
          //   }
          // },
          // {
          //   path: "/modules/baseSetting/areaSetManage",
          //   name: "areaSetManage",
          //   hidden: true,
          //   component: () =>
          //     import("@/views/modules/baseSetting/areaSetManage"),
          //   meta: {
          //     title: "区域管理",
          //     icon: "iconkucunjianguan fontSize20"
          //   }
          // },
          // {
          //   path: "/modules/baseSetting/orgTreeSetManage",
          //   name: "orgTreeSetManage",
          //   hidden: true,
          //   component: () =>
          //     import("@/views/modules/baseSetting/orgTreeSetManage"),
          //   meta: {
          //     title: "机构管理",
          //     icon: "iconkucunjianguan fontSize20"
          //   }
          // },
          // {
          //   path: "/modules/baseSetting/roleSetManage",
          //   name: "roleSetManage",
          //   hidden: true,
          //   component: () =>
          //     import("@/views/modules/baseSetting/roleSetManage"),
          //   meta: {
          //     title: "角色管理",
          //     icon: "iconkucunjianguan fontSize20"
          //   }
          // },
          // {
          //   path: "/modules/baseSetting/userSetManage",
          //   name: "userSetManage",
          //   hidden: true,
          //   component: () =>
          //     import("@/views/modules/baseSetting/userSetManage"),
          //   meta: {
          //     title: "用户管理",
          //     icon: "iconkucunjianguan fontSize20"
          //   }
          // },
          {
            path: "/modules/baseSetting/unitSetManage",
            name: "unitSetManage",
            hidden: false,
            component: () =>
              import("@/views/modules/baseSetting/unitSetManage"),
            meta: {
              title: "计量单位",
              icon: "iconjiliangdanwei text-warning fontSize20"
            }
          },
          {
            path: "/modules/baseSetting/materialTypeSetManage",
            name: "materialTypeSetManage",
            hidden: false,
            component: () =>
              import("@/views/modules/baseSetting/materialTypeSetManage"),
            meta: {
              title: "物资类别",
              icon: "iconwuzileibie text-primary fontSize20"
            }
          },
          {
            path: "/modules/baseSetting/materialSetManage",
            name: "materialSetManage",
            hidden: false,
            component: () =>
              import("@/views/modules/baseSetting/materialSetManage"),
            meta: {
              title: "物资",
              icon: "iconwuzi text-success fontSize20"
            }
          },
          {
            path: "/modules/baseSetting/supplierSetManage",
            name: "supplierSetManage",
            hidden: false,
            component: () =>
              import("@/views/modules/baseSetting/supplierSetManage"),
            meta: {
              title: "供应商",
              icon: "iconzhijianrenyuan text-primary fontSize20"
            }
          },
          {
            path: "/modules/baseSetting/initIncome",
            name: "initIncome",
            hidden: false,
            component: () => import("@/views/modules/baseSetting/initIncome"),
            meta: {
              title: "期初入库",
              icon: "iconchuqiruku text-primary fontSize20"
            }
          },
          {
            path: "/modules/baseSetting/monthBalanceSetManage",
            name: "monthBalanceSetManage",
            hidden: false,
            component: () =>
              import("@/views/modules/baseSetting/monthBalanceSetManage"),
            meta: {
              title: "月结",
              icon: "iconyuejie text-primary fontSize20"
            }
          }
        ]
      },
      {
        path: "/modules/reportSetting",
        name: "reportSetting",
        hidden: false,
        component: () => import("@/views/commonViewPlat/menuPlat"),
        meta: {
          title: "报表管理",
          icon: "iconkucunjianguan fontSize20"
        },
        redirect: "/modules/reportSetting/inventoryDetail",
        children: [
          {
            path: "/modules/reportSetting/inventoryDetail",
            name: "inventoryDetail",
            hidden: false,
            component: () =>
              import("@/views/modules/reportSetting/inventoryDetail"),
            meta: {
              title: "库存明细",
              icon: "iconkucunmingxiliebiao text-success fontSize20"
            }
          },
          {
            path: "/modules/reportSetting/inoutReport",
            name: "inoutReport",
            hidden: false,
            component: () =>
              import("@/views/modules/reportSetting/inoutReport"),
            meta: {
              title: "出入库台账",
              icon: "iconkucunmingxiliebiao text-success fontSize20"
            }
          }
        ]
      }
    ]
  },
  {
    path: "*",
    redirect: "/404"
  }
];

export const asyncRouterMap = [
  {
    path: "/modules",
    hidden: false,
    name: "modules",
    component: () => import("@/views/modules/index"),
    redirect: "/modules/homePage",
    children: [
      {
        path: "/modules/homePage",
        name: "homePage",
        hidden: false,
        component: () => import("@/views/modules/homePage"),
        meta: {
          title: "门户首页",
          icon: "iconkucunjianguan fontSize20"
        }
      }
    ]
  }
];
export const asyncRouterChildren = [
  {
    path: "/modules/homePage",
    name: "homePage",
    hidden: false,
    component: () => import("@/views/modules/homePage"),
    meta: {
      title: "门户首页",
      icon: "iconkucunjianguan fontSize20"
    }
  }
];

export const createRouter = () =>
  new Router({
    scrollBehavior: () => ({ y: 0 }),
    routes: staticRouterMap
  });
const router = createRouter();
export default router;
