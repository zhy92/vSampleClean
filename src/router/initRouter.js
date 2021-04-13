/**
 * 生成路由
 * @param {Array} routerlist 格式化路由
 */
export function initRouter(routerlist) {
  const router = [];
  routerlist.forEach(e => {
    let pathArr = e.menuaction ? e.menuaction.split("/") : "",
      e_new = {
        path: "/" + e.menuaction,
        name: pathArr[pathArr.length - 1],
        component: () => import("@/views/" + e.menumodule)
        // component: () => import("@/views/modules/baseSetting/menuSetManage")
      };
    if (e.children && e.children.length > 0) {
      e_new = Object.assign({}, e_new, {
        redirect: "/" + e.children[0].menuaction,
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
