/*
*  路由拦截配置文件
* */
import router from 'src/router/router';
import ElementUI from "element-ui";
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) { // 该路径需要登录
    window.sessionStorage.formQuery = from.path; 
    next();
     if (sessionStorage.getItem('access_token')) { // 是否已经登录
       next();
     } else {
       ElementUI.Message({
         message: '请先登录',
         dangerouslyUseHTMLString: true,
         type: "error"
       });
      next('/user/login');
     }
  } else {
    next();
  }
});