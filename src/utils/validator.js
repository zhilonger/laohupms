/*
  正则表达式与各种校验方法定义文件
  正则建议：命名按照 reg + 对应的内容的形式命名
  通过this.$validate.regMobile 就可以调用到对应的转换对象
*/
import Vue from "vue";

// 正则表达式定义
const validate = {
  // 手机号
  regMobile: /(^1[3|4|5|7|8]\d{9}$)|(^09\d{8}$)/,
  // 邮箱
  regEmail: /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/
};

Vue.prototype.$validate = validate;