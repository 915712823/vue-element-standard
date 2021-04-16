const path = require("path");
const webpack = require('webpack');


module.exports = {
  publicPath: './',
  lintOnSave: false,




  devServer: {
    open: true,
    proxy: {
      'api': {
        target: "xxx.xxx.cn/",
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
