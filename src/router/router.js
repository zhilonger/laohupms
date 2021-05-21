import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

/* 路由不需要异步加载区域 */
import Home from "../views/project-entrance/Home.vue";
import Admin from "../views/project-entrance/Homeadmin.vue";
import NotFound from "src/components/layout/404.vue";

/* 路由异步加载区域 */
/* ============账号管理模块=========== */
const account = () => import("src/views/account/account");
const loginComponent = () => import("src/views/account/login");

/* ============主页=========== */
const homeIndex = () => import("src/views/home/index"); 
const objectIndex = () => import("src/views/object/index"); 
const objectMission = () => import("src/views/object/mission"); 
const objectBase = () => import("src/views/object/base"); 
const objectDoc = () => import("src/views/object/doc"); 
const depart = () => import("src/views/depart/layout");  
const user = () => import("src/views/user/layout");
const role = () => import("src/views/role/layout");  
const userLogin = () => import("src/views/user/login"); 
const form = () => import("src/views/form/layout"); 
const typology = () => import("src/views/form/typology"); 
const template = () => import("src/views/form/template"); 
const menu = () => import("src/views/menu/layout"); 
const update = () => import("src/views/form/update"); 

// typology
// typology
const test = () => import("src/views/user/test"); 
// 路由配置项
const routerConfig = {
  routes: [
    // 404
    {
      path: "*",
      name: "404",
      component: NotFound,
      meta: {
        requireAuth: false,
        title: "404",
      },
    },
      // 测试页面
      {
        path: "/test",
        name: "test",
        component: test, 
        meta: {
          requireAuth: false,
        }, 
      },
     // 合同查询
     {
      path: "/",
      name: "home",
      component: Home,
      redirect: "/home/index",
      meta: {
        requireAuth: false,
      }, 
      children: [
        {
          path: "/home/index",
          name: "/home/index",
          component: homeIndex,
          meta: {
            requireAuth: false,
          }, 
        }, 
      ],
    },
    // 后台首页
    {
      path: "/admin",
      name: "admin",
      component: Admin,
      redirect: "/depart/layout",
      meta: {
        requireAuth: false,
      }, 
      children: [ 
         // 部门管理
          {
            path: "/depart/layout",
            name: "depart",
            component: depart,  
            meta: {
              requireAuth: false,
            },  
          }, 
           // 用户管理
           {
            path: "/user/layout",
            name: "user",
            component: user,  
            meta: {
              requireAuth: false,
            },  
          }, 
             // 角色管理
             {
              path: "/role/layout",
              name: "role",
              component: role,  
              meta: {
                requireAuth: false,
              },  
            }, 
            //表单管理
            {
              path: "/form/layout",
              name: "form",
              component: form,  
              meta: {
                requireAuth: false,
              },  
            },
            //菜单管理

            {
              path: "/menu/layout",
              name: "menu",
              component: menu,  
              meta: {
                requireAuth: false,
              },  
            }, 
         // 表单类型
            {
              path: "/form/layout/typology",
              name: "typology",
              component: typology,  
              meta: {
                requireAuth: false,
              },  
            }, 
            //模板管理

            {
              path: "/form/layout/template",
              name: "template",
              component: template,  
              meta: {
                requireAuth: false,
              },  
            }, 
            //编辑
            // update
            {
              path: "/form/layout/update",
              name: "update",
              component: update,  
              meta: {
                requireAuth: false,
              },  
            }, 
            
      ],
    },
    // 合同显示
    {
      path: "/object",
      name: "object",
      component: objectIndex, 
      meta: {
        requireAuth: false,
      }, 
      redirect: "/object/base",
      children: [
        {
          path: "/object/base",
          name: "/object/base",
          component: objectBase,
          meta: {
            requireAuth: false,
          }, 
        },
        {
          path: "/object/mission",
          name: "object/mission",
          component: objectMission, 
          meta: {
            requireAuth: false,
          },  
        },
        {
          path: "/object/doc",
          name: "object/doc",
          component: objectDoc, 
          meta: {
            requireAuth: false,
          },  
        },
        
      ],
    },
      // 项目显示
    
    // 登录
    {
      path: "/user/login",
      name: "userlogin",
      component: userLogin, 
      
    },
    // 账号模块
    {
      path: "/account",
      name: "account",
      component: account,
      meta: {
        requireAuth: false,
      },
      redirect: "/account/login",
      children: [
        {
          path: "/account/login",
          name: "login",
          component: loginComponent,
          meta: {
            requireAuth: false,
            title: "登录",
          },
        },
      ],
    },
     
  ],
};

// 测试模块（生产模式下将不会引入）
// 在开发模式下才会引入的组件内容（测试组件一般放置在views/test文件夹中）
// 用于测试某些插件或自定义组件是否可以使用或者符合需求
if (process.env.NODE_ENV === "development") {
  routerConfig.routes = routerConfig.routes.concat([
    {
      // test
      path: "/test",
      name: "test",
      component: () => import("src/components/layout/404.vue"),
    },
  ]);
}

export default new Router(routerConfig);
