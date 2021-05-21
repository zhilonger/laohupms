/*
 *  全局方法定义文件通过原型方式直接绑定到vue上可以通过this来调用（统一集中起来方便管理使用）
 *  与 util.js区别，这里编写的方法不管调不调用都会打包进代码中，而util.js中的方法只有在导入使用的时候才会打包
 *  使用方式：this.$test();
 */
/* ============================函数编写区域================================ */
// 测试方法
function test() {
   console.log('全局方法测试');
}
//判断是否为空
function checkData(str,type="0"){
    if (str.replace(/(^s*)|(s*$)/g, "").length ==0) 
    { 
      return 0;
    }
    return 1;
}
/* =============================方法注册区域========================= */
export default {
    // eslint-disable-next-line no-unused-vars
    install(Vue, options) {
        Vue.prototype.$checkData = checkData;

    }
};