/*
 * 这里是一个全局过滤器的文件,方法编写完毕后，在注册区域注册即可全局使用
 */
import Vue from "vue";
import { formatDate } from "./util.js";
/* =====================方法编写区域=========================== */
/*
   时间戳处理
   @example value | dateFormat("YYYY-MM-dd") => YYYY-MM-dd
 */
function dateFormat(timestamp, fmTimestamp) {
  return formatDate(timestamp, fmTimestamp); 
}

/* 
   金钱三位一逗号，小数点保留两位
   @example value | moneyFormat => 132,156,132.00
*/
function moneyFormat(val) {
  val = val.toString().replace(/\$|\,/g,'');
  if(isNaN(val)) {
    val = "0";
  }
  let sign = val == (val = Math.abs(val));
  val = Math.floor(val * 100 + 0.50000000001);
  let cents = val % 100;
  val = Math.floor(val / 100).toString();
  if(cents < 10) {
    cents = "0" + cents;
  }
  for (let i = 0; i < Math.floor((val.length - (1 + i)) / 3); i++) {
    val = val.substring(0,val.length - (4 * i + 3)) + ',' + val.substring(val.length - (4 * i + 3));
  }
  let res = (sign ? '' : '-') + val + '.' + cents;
  return res;
}

/* 
  电话号码隐藏过滤
  @example value | telFormat => 188****7983
*/
function telFormat(val){
  if(val){
    return val.replace(/^(.{3})(?:\d+)(.{4})$/,"$1****$2");
  }
}

/* 
  身份证号码隐藏过滤
  @example value | telFormat => 188****7983
*/
function idcardFormat(val){
  if(val){
    return val.replace(/^(.{6})(?:\d+)(.{4})$/,"$1*******$2");
  }
}

/* 
  去除空格
  @example value | noSpace => 'xxx'
*/
function noSpace(value) {
  var str = trim(value);
  return str;
}

/* ========================注册区域=========================== */
//时间戳处理
Vue.filter("dateFormat", dateFormat);
//去除空格
Vue.filter('noSpace',noSpace);
