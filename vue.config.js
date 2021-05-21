/**
 * Created on Tang 2018/2/14.
 */
// vue.config.js
const path = require("path");
const resolve = (dir) => path.join(__dirname, dir); // 路径
const CompressionWebpackPlugin = require("compression-webpack-plugin");
module.exports = {
  runtimeCompiler: true,
  // 部署应用包时的基本 URL  Default: '/'
  publicPath: "./",
  // (build)放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录  Default: ''
  assetsDir: "assets",
  // 默认在生成的静态资源文件名中包含hash以控制缓存，如果你无法使用 Vue CLI 生成的 index HTML时候可以设为false
  filenameHashing: true,
  // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
  productionSourceMap: false,
  // webpack-dev-server 的选项配置
  devServer: {
    host: "0.0.0.0",
    port: 8090,
    hot: true, // 开启热更新
    hotOnly: false,
    overlay: true, // 开启报错提示显示在浏览器遮罩层
    https: false, // 是否开启https模式
   // 请求代理服务器
    proxy: {
      '/api': {
        target: 'http://123.56.174.18', 
        changeOrigin: true,
        pathRewrite:{
          '^/api':''
        }
      } 
    }
  
  },
  // 简单配置,这个配置内容将会在最后的时候使用webpack-merge合并到最终配置中 (配置插件plugins)
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === "production") {
   /*    let optimization = {
        runtimeChunk: "single",
        splitChunks: {
          chunks: "all",
          maxInitialRequests: Infinity,
          minSize: 20000,
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name(module) {
                // get the name. E.g. node_modules/packageName/not/this/part.js
                // or node_modules/packageName
                const packageName = module.context.match(
                  /[\\/]node_modules[\\/](.*?)([\\/]|$)/
                )[1];
                // npm package names are URL-safe, but some servers don't like @ symbols
                return `npm.${packageName.replace("@", "")}`;
              },
            },
          },
        },
        // 具体代码
        minimize: true,
        minimizer: [
          new TerserPlugin({
            parallel: true,
            sourceMap: true,
            terserOptions: {
              warnings: false,
              compress: {
                drop_console: true, // 注释console
                drop_debugger: true, // 注释debugger
                pure_funcs: ["console.log"],
              },
            },
          }),
        ],
      }; */
      const plugins = [];
      // 为生产环境修改配置...
      plugins.push(
        // 开启gzip压缩,大幅提高加载速度,同时需要nginx(其他服务器)也配置开启gzip(可以百度)
        new CompressionWebpackPlugin({
          algorithm: "gzip",
          test: new RegExp("\\.(js|css)$"),
          threshold: 10240,
          minRatio: 0.8,
        })
      );
      config.plugins = [...config.plugins, ...plugins];
    } else {
      // 为开发环境修改配置...
    }
  },
  // 配置相关loader，支持修改，添加和替换相关的loader
  chainWebpack: (config) => {
    // 添加别名
    config.resolve.alias.set("src", resolve("src"));
    config.resolve.alias.set("api", resolve("src/api"));
  },
};
