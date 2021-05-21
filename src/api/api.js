/* 
    建议:
      1、函数命名尽可能以模块名+函数名的形式来命名,以避免名称冲突。
      2、在各个模块开头的部分做一个模块说明。如:平台管理模块
      3、每个函数做好一个简单的注释,建议和api文档名字一样,以方便查找
*/
/*  编写格式如下：
    export function testApiService(data) {  // 接口名（参数）
      return service({
        url: '/user/login', // 接口地址(会与axios.js文件中配置的baseURL拼接)
        method: 'post', // 接口请求方式(默认为get)
				data:data, // 接口参数 使用data:data 数据将放在请求体中(参数请求方式根据接口需求确定)
				params:data,  // 接口参数 使用params: data 数据将放在url的链接上(参数请求方式根据接口需求确定)
				mode: VUE_APP_API_Test //（默认可以不写）
					// mode可以配置不同的请求服务器地址
					// baseURL配置默认请求地址。如：http://192.168.1.111:8082
					// mode中配置修改默认请求地址。配置好本地变量(.env.development)将替换默认请求地址。
      })
    }
    使用如下：
    import { testApiService } from "src/api/api" 
    testApiService().then(res=>{})
*/
import Vue from "vue";
import service from "src/config/axios";
/* =====================挂载====================== */
// 将axios实例对象挂载在Vue上，通过this.$axios.get/post/...等调用axios本身的方法
// 如果需要使用那种需要改变请求头的接口，可以使用这个进行请求
Vue.prototype.$axios = service;

/* =====================测试模块====================== */
export function testApiService(data) {
  return service({
    url: "/testApiService",
    method: "post",
    params: data,
  });
}
