# 说明
```
// 启动
npm run serve 
// 打包构建
npm run build 

```
配置内容

vue + vue-router + vuex + axios + elementUI + echarts + 高德地图(异步加载)

## public文件夹(主要用于存放静态文件以及引入的插件)
browse.html 浏览器升级页面，针对IE低版本浏览器进行提示升级
favicon.ico 页面标题小图标
index.html 主html文件入口

## src文件夹
###api文件夹：主要用于本项目所有接口内容的编写与管理，可根据模块分割成不同的Js文件

###assets文件夹：主要用于存放项目的一些常用文件
common.scss全局自定义样式表,样式全局生效
localElementUI.scss饿了么UI自定义样式表，可以直接覆写elmentUi样式，直接引入覆盖使用即可
reset.css重置样式表
tools.scss 工具样式类，如：浮动，清除浮动，轮廓，字体大小，颜色，盒子模型，宽高，内外边距等。
font：字体图标库
images: 图片存放文件

###components：存放全局组件（建议：按照功能模块命名文件夹存放）注意：需要在当前文件夹的components.js中进行全局注册

###config文件夹：配置文件夹
axios配置文件
include插件引入配置文件
其中echarts通过 this.$echarts方式即可拿到echarts的类

###router文件夹：路由管理文件夹
router.js 路由配置文件
router.interceptor.js 路由拦截配置文件

###store文件夹：vuex状态管理文件夹
-store.js 状态管理配置文件，可按照需求进行多模块配置

###utils文件夹：各种功能文件配置文件夹
directives.js 全局自定义指令配置文件
filter.js  全局过滤器配置文件
format.js  全局数据格式转换配置文件：用于将后台返回非文字内容转换成对应前端需要文字内容（统一集中起来方便管理使用），通过 this.$format.方法名调用
methods.js 全局方法配置文件(可通过this.$method.方法名的方式调用)
utils.js  工具方法配置文件（与methods.js区别在于本文件内容按需引用）
validator.js  全局正则配置文件，通过 this.$validator.方法名调用

###views文件夹：主应用文件夹
project-entrance 项目主功能模块入口，每个模块根据自己的内容划分为多个子模块，建议：命名按照模块名称+功能名称的形式来

###App.vue: （vue主入口文件

###main.js: （vue主配置文件，其中 this.$bus为中央事件总线，可以做各种跨区域调用的事件数据传递

###.env: （通用环境配置文件：在此处配置的内容将同时在开发和生产环境生效  

###.env.development: （开发配置文件  

###.env.production: （生产配置文件  

###.eslintrc.js: （eslint配置文件  

###.gitignore （git忽略的文件配置内容  

###babel.config.js: （babel配置文件  

###postcss.config.js: （postcss配置文件

###package.json: （包管理与引入配置，参考网上

###vue.config.js: （vue核心项目配置文件，参考vue-cli3官网