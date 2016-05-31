'use strict';

/**
 * Created by liujianqiang on 16/5/31.
 */
var HtmlwebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'es6');
var BUILD_PATH = path.resolve(ROOT_PATH, 'es6build');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './es6/main.js',
  //entry: APP_PATH,
  output: {
    path: BUILD_PATH,
    filename: 'es6bundle.js'
  }, devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true
  },
  module: {
    loaders: [{ test: path.join(__dirname, 'es6'),
      loader: 'babel-loader' }]
  },
  //添加我们的插件 会自动生成一个html文件
  plugins: [new HtmlwebpackPlugin({
    title: 'Hello World app'
  }), new ExtractTextPlugin(APP_PATH + "/main.css", {
    allChunks: true
  })]
};

//# sourceMappingURL=webpack.config.es6-compiled.js.map