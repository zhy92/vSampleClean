/**
 * 生成路由
 * @param {Array} routerlist 格式化路由
 */
export function initRouter(routerlist) {
  const router = [];
  routerlist.forEach(e => {
    /** 
     * 1.path和component路径一致，e.menuaction = modules/planSetting/reservePlan
     * {
          path: "/modules/planSetting/reservePlan",
          name: "reservePlan",
          hidden: false,
          component: () => import("@/views/modules/planSetting/reservePlan"),
          meta: {
            title: "储备计划",
            icon: "iconkudian text-danger fontSize20"
          }
        }
     * 2.path和component路径不一致，e.menuaction = modules/planSetting/reservePlan?modules/planSetting/reservePlan2
     * {
          path: "/modules/planSetting/reservePlan",
          name: "reservePlan",
          hidden: false,
          component: () => import("@/views/modules/planSetting/reservePlan2"),
          meta: {
            title: "储备计划",
            icon: "iconkudian text-danger fontSize20"
          }
        }  
     * */
    let actionsArr = e.menuaction.split("?");
    // if (!e.children || e.children.length == 0) {
    //   compUrl = "@/views/modules/planSetting/reservePlan";
    // } else {
    //   compUrl = "@/views/commonViewPlat/menuPlat";
    // }
    let pathArr = actionsArr[0] ? actionsArr[0].split("/") : "",
      e_new = {
        path: "/" + actionsArr[0],
        name: pathArr[pathArr.length - 1],
        component: () =>
          import(
            "@/views/" + (actionsArr.length > 1 ? actionsArr[1] : actionsArr[0])
          )
      };
    if (e.children && e.children.length > 0) {
      e_new = Object.assign({}, e_new, {
        redirect: "/" + e.children[0].menuaction.split("?")[0],
        children: initRouter(e.children)
      });
    }
    if (e.redirect) {
      e_new = Object.assign({}, e_new, {
        redirect: e.redirect
      });
    }
    if (e.isaction) {
      let hiddenflag = e.isaction == "0" ? false : true;
      e_new = Object.assign({}, e_new, {
        hidden: hiddenflag
      });
    }
    if (e.text && e.menuview) {
      e_new = Object.assign({}, e_new, {
        meta: {
          title: e.text,
          icon: e.menuview
        }
      });
    } else if (e.text && !e.icon) {
      e_new = Object.assign({}, e_new, {
        meta: {
          title: e.text
        }
      });
    }
    router.push(e_new);
  });
  return router;
}
