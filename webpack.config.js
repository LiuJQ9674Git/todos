var HtmlwebpackPlugin = require('html-webpack-plugin');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

var path = require('path');
var fs = require('fs');
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'react-bootstrap');
var BUILD_PATH = path.resolve(ROOT_PATH, 'reactbootstrapbuild');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  //插件项
  plugins: [commonsPlugin],
  //entry: './react-bootstrap/App.js',
  entry: './es6/App.js',
  output: {
    path: path.join(__dirname, 'reactbootstrapbuild'),
    filename: 'reactbootstrapbundle.js',
    publicPath: 'reactbootstrapbuild/'
  },
  module: {
    preLoaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'jsxhint'
    }],
    loaders: [
      {
      test: /\.(png|jpg)$/,
      loader: 'url-loader?limit=8192'
      },
      // Used for compiling ES2015 JavaScript
      //{ test: /\.js/, loader: 'babel' },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
  // Used for Bootstrap Less Source Files
      { test: /\.less/, loader: 'style!css!less' },
      // Used for Bootstrap Less Source Files
      { test: /\.css/, loader: 'style!css' },
      // Used for Bootstrap Glyphicon Fonts
      { test: /\.(woff2|woff|ttf|svg|eot)$/, loader: 'file' }

    ]

  }
};
