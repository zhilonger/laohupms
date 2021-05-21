/*
 * 这里是一个全局自定义指令的文件，在编写区域编写指令方法，然后注册区域注册即可全局使用
 */
import Vue from "vue";

/* =====================编写区域=========================== */
const vFocus = {
  bind: (el, binding, vnode) => {
    console.log("自定义指令1");
  },
  inserted: (el, binding, vnode) => {},
  update: (el, binding, vnode,oldVnode) => {},
  componentUpdated: (el, binding, vnode,oldVnode) => {},
  unbind: (el, binding, vnode) => {},
};

/* ========================注册区域=========================== */
// 注册一个全局自定义指令 `v-focus`
Vue.directive("focus", vFocus);
