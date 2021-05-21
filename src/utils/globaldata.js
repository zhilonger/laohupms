/*
 *  全局方法定义文件通过原型方式直接绑定到vue上可以通过this来调用（统一集中起来方便管理使用）
 *  与 util.js区别，这里编写的方法不管调不调用都会打包进代码中，而util.js中的方法只有在导入使用的时候才会打包
 *  使用方式：this.globalData.title;
 */
var globalData = {
  title:'今日头条',
  isBack: true,
  isAdd:  false,
  token:''
};
export default {
    install(Vue,options)
    {
        Vue.prototype.globalData = globalData; 
    }
} 