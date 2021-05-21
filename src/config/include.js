/*
 * 通用引入文件，一般用于引入一些新的插件或者其他的vue插件内容
    建议：所有新引入的插件在此处填写名称
        当前引入插件有：
        elementUl
        vuex
        vue-router
        babel/polyfill
 */
import Vue from "vue";

// import 项目公用样式
import "src/assets/css/common.scss";

// import 全局过滤器
import "src/utils/filter.js";

// import 全局自定义指令
import "src/utils/directives.js";

// import 全局正规规则
import "src/utils/validator.js";

// import 全局方法并且注册全局方法
import methods from 'src/utils/methods';
Vue.use(methods);
// import 全局变量
import globalData from 'src/utils/globaldata';
Vue.use(globalData);
// import 全局组件并且进行注册
import components from 'src/components/components';
Vue.use(components);

// import element-ui并且注册
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);
 