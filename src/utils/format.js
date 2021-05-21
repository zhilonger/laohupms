
import Vue from "vue";
/*
 *  格式转换文件：用于将后台序号转换成对应枚举内容（统一集中起来方便管理使用）
 *  建议：命名按照 format + 对应的内容的形式命名
 *  通过this.$format.sex 就可以调用到对应的转换对象
 */
const format = {
  sex:{
    1: '男',
    2: '女'
  },
  isChange:{
    1: '是',
    2: '否'
  }
};
Vue.prototype.$format = format;