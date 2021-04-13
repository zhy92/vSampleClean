import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

export const staticRouterMap = [
  {
    path: "/",
    redirect: "/login"
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
    redirect: "/modules/baseSetting",
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
              icon: "iconkucunjianguan fontSize20"
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
              icon: "iconkucunjianguan fontSize20"
            }
          }
        ]
      },
      {
        path: "/modules/alternateSetting",
        name: "alternateSetting",
        hidden: false,
        component: () => import("@/views/commonViewPlat/menuPlat"),
        meta: {
          title: "轮换管理",
          icon: "iconkucunjianguan fontSize20"
        },
        redirect: "/modules/alternateSetting/qualityTest",
        children: [
          {
            path: "/modules/alternateSetting/qualityTest",
            name: "qualityTest",
            hidden: false,
            component: () =>
              import("@/views/modules/alternateSetting/qualityTest"),
            meta: {
              title: "质量检测",
              icon: "iconkucunjianguan fontSize20"
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
        redirect: "/modules/baseSetting/dictSetManage",
        children: [
          {
            path: "/modules/baseSetting/dictSetManage",
            name: "dictSetManage",
            hidden: false,
            component: () =>
              import("@/views/modules/baseSetting/dictSetManage"),
            meta: {
              title: "字典管理",
              icon: "iconkucunjianguan fontSize20"
            }
          },
          {
            path: "/modules/baseSetting/menuSetManage",
            name: "menuSetManage",
            hidden: false,
            component: () =>
              import("@/views/modules/baseSetting/menuSetManage"),
            meta: {
              title: "菜单管理",
              icon: "iconkucunjianguan fontSize20"
            }
          },
          {
            path: "/modules/baseSetting/taskSetManage",
            name: "taskSetManage",
            hidden: false,
            component: () =>
              import("@/views/modules/baseSetting/taskSetManage"),
            meta: {
              title: "计划管理",
              icon: "iconkucunjianguan fontSize20"
            }
          },
          {
            path: "/modules/baseSetting/areaSetManage",
            name: "areaSetManage",
            hidden: false,
            component: () =>
              import("@/views/modules/baseSetting/areaSetManage"),
            meta: {
              title: "区域管理",
              icon: "iconkucunjianguan fontSize20"
            }
          },
          {
            path: "/modules/baseSetting/orgTreeSetManage",
            name: "orgTreeSetManage",
            hidden: false,
            component: () =>
              import("@/views/modules/baseSetting/orgTreeSetManage"),
            meta: {
              title: "机构管理",
              icon: "iconkucunjianguan fontSize20"
            }
          },
          {
            path: "/modules/baseSetting/roleSetManage",
            name: "roleSetManage",
            hidden: false,
            component: () =>
              import("@/views/modules/baseSetting/roleSetManage"),
            meta: {
              title: "角色管理",
              icon: "iconkucunjianguan fontSize20"
            }
          },
          {
            path: "/modules/baseSetting/userSetManage",
            name: "userSetManage",
            hidden: false,
            component: () =>
              import("@/views/modules/baseSetting/userSetManage"),
            meta: {
              title: "用户管理",
              icon: "iconkucunjianguan fontSize20"
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
              icon: "iconkucunjianguan fontSize20"
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
