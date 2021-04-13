import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

export const staticRouterMap = [
  {
    path: "/",
    redirect: "/modules"
  },
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
    redirect: "/modules/homePage",
    children: [
      {
        path: "/modules/homePage",
        name: "homePage",
        hidden: false,
        component: () => import("@/views/commonViewPlat/menuPlat"),
        meta: {
          title: "生态概况",
          icon: "iconkucunjianguan fontSize20"
        },
        redirect: "/modules/homePage/homeIndex",
        children: [
          {
            path: "/modules/homePage/homeIndex",
            name: "homeIndex",
            hidden: false,
            component: () => import("@/views/modules/homePage"),
            meta: {
              title: "首页",
              icon: "iconkucunmingxiliebiao text-success fontSize20"
            }
          }
        ]
      },
      {
        path: "/modules/baseSetting",
        name: "baseSetting",
        hidden: false,
        component: () => import("@/views/commonViewPlat/menuPlat"),
        meta: {
          title: "基础数据",
          icon: "iconkucunjianguan fontSize20"
        },
        redirect: "/modules/baseSetting/cropSetManage",
        children: [
          {
            path: "/modules/baseSetting/cropSetManage",
            name: "cropSetManage",
            hidden: false,
            component: () =>
              import("@/views/modules/baseSetting/cropSetManage"),
            meta: {
              title: "作物信息",
              icon: "iconzuowu-damai text-danger fontSize20"
            }
          },
          {
            path: "/modules/baseSetting/medicamentSetManage",
            name: "medicamentSetManage",
            hidden: false,
            component: () =>
              import("@/views/modules/baseSetting/medicamentSetManage"),
            meta: {
              title: "药剂信息",
              icon: "iconnongyao2 text-normal fontSize20"
            }
          },
          {
            path: "/modules/baseSetting/fertilizerSetManage",
            name: "fertilizerSetManage",
            hidden: false,
            component: () =>
              import("@/views/modules/baseSetting/fertilizerSetManage"),
            meta: {
              title: "肥料信息",
              icon: "iconkucunhuizongliebiao text-primary fontSize20"
            }
          },
          {
            path: "/modules/baseSetting/supplierSetManage",
            name: "supplierSetManage",
            hidden: false,
            component: () =>
              import("@/views/modules/baseSetting/supplierSetManage"),
            meta: {
              title: "供应商信息",
              icon: "icongongyingshang text-warning fontSize20"
            }
          },
          {
            path: "/modules/baseSetting/machinerySetManage",
            name: "machinerySetManage",
            hidden: false,
            component: () =>
              import("@/views/modules/baseSetting/machinerySetManage"),
            meta: {
              title: "机械设备",
              icon: "iconmachinery text-primary fontSize20"
            }
          },
          {
            path: "/modules/baseSetting/standardlevelSetManage",
            name: "standardlevelSetManage",
            hidden: false,
            component: () =>
              import("@/views/modules/baseSetting/standardlevelSetManage"),
            meta: {
              title: "种子品种分级",
              icon: "iconwuzileibie text-danger fontSize20"
            }
          },
          {
            path: "/modules/baseSetting/unitSetManage",
            name: "unitSetManage",
            hidden: false,
            component: () =>
              import("@/views/modules/baseSetting/unitSetManage"),
            meta: {
              title: "计量单位",
              icon: "iconjiliangdanwei text-normal fontSize20"
            }
          },
          {
            path: "/modules/baseSetting/dictSetManage",
            name: "dictSetManage",
            hidden: false,
            component: () =>
              import("@/views/modules/baseSetting/dictSetManage"),
            meta: {
              title: "字典表",
              icon: "iconjiliangdanwei text-normal fontSize20"
            }
          }
        ]
      },
      {
        path: "/modules/siteSetting",
        name: "siteSetting",
        hidden: false,
        component: () => import("@/views/commonViewPlat/menuPlat"),
        meta: {
          title: "基地管理",
          icon: "iconkucunjianguan fontSize20"
        },
        redirect: "/modules/siteSetting/siteSetManage",
        children: [
          {
            path: "/modules/siteSetting/siteSetManage",
            name: "siteSetManage",
            hidden: false,
            component: () =>
              import("@/views/modules/siteSetting/siteSetManage"),
            meta: {
              title: "基地信息",
              icon: "iconzuowu-damai text-danger fontSize20"
            }
          },
          {
            path: "/modules/siteSetting/joinSetManage",
            name: "joinSetManage",
            hidden: false,
            component: () =>
              import("@/views/modules/siteSetting/joinSetManage"),
            meta: {
              title: "加盟信息",
              icon: "iconzuowu-damai text-danger fontSize20"
            }
          }
        ]
      },
      // {
      //   path: "/modules/saleSetting",
      //   name: "saleSetting",
      //   hidden: false,
      //   component: () => import("@/views/commonViewPlat/menuPlat"),
      //   meta: {
      //     title: "销售管理",
      //     icon: "iconkucunjianguan fontSize20"
      //   },
      //   redirect: "/modules/saleSetting/salesSlipSetManage",
      //   children: [
      //     {
      //       path: "/modules/saleSetting/salesSlipSetManage",
      //       name: "salesSlipSetManage",
      //       hidden: false,
      //       component: () =>
      //         import("@/views/modules/saleSetting/salesSlipSetManage"),
      //       meta: {
      //         title: "销售单",
      //         icon: "iconzuowu-damai text-danger fontSize20"
      //       }
      //     }
      //   ]
      // },
      {
        path: "/modules/planSetting",
        name: "planSetting",
        hidden: false,
        component: () => import("@/views/commonViewPlat/menuPlat"),
        meta: {
          title: "计划管理",
          icon: "iconkucunjianguan fontSize20"
        },
        redirect: "/modules/planSetting/plantPlan",
        children: [
          {
            path: "/modules/planSetting/plantPlan",
            name: "plantPlan",
            hidden: false,
            component: () => import("@/views/modules/planSetting/plantPlan"),
            meta: {
              title: "种植计划",
              icon: "iconzuowu-damai text-danger fontSize20"
            }
          },
          {
            path: "/modules/planSetting/harvestPlan",
            name: "harvestPlan",
            hidden: false,
            component: () => import("@/views/modules/planSetting/harvestPlan"),
            meta: {
              title: "收割计划",
              icon: "iconzuowu-damai text-danger fontSize20"
            }
          },
          {
            path: "/modules/planSetting/dryingPlan",
            name: "dryingPlan",
            hidden: false,
            component: () => import("@/views/modules/planSetting/dryingPlan"),
            meta: {
              title: "烘干计划",
              icon: "iconzuowu-damai text-danger fontSize20"
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
    path: "/",
    redirect: "/modules"
  },
  {
    path: "/404",
    component: () => import("@/views/404")
  },
  {
    path: "/jwt=*",
    redirect: "/"
  },
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
        component: () => import("@/views/commonViewPlat/menuPlat"),
        // meta: {
        //   title: "报表管理",
        //   icon: "iconkucunjianguan fontSize20"
        // },
        redirect: "/modules/homePage/homeIndex",
        children: [
          {
            path: "/modules/homePage/homeIndex",
            name: "homeIndex",
            hidden: false,
            component: () => import("@/views/modules/homePage"),
            meta: {
              title: "首页"
              // icon: "iconkucunmingxiliebiao text-success fontSize20"
            }
          }
        ]
      }
    ]
  }
];

export const createRouter = () =>
  new Router({
    scrollBehavior: () => ({ y: 0 }),
    routes: staticRouterMap
  });
const router = createRouter();
export default router;
