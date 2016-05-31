var HtmlwebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'es6');
var BUILD_PATH = path.resolve(ROOT_PATH, 'es6build');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './reactbootstrap/App.js',
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
      test: /\.jsx$/,
      exclude: /node_modules/,
      loader: 'react-hot!jsx-loader?harmony'
    }, {
      test: /\.less/,
      loader: 'style-loader!css-loader!less-loader'
    }, {
      test: /\.(css)$/,
      loader: 'style-loader!css-loader'
    }, {
      test: /\.(png|jpg)$/,
      loader: 'url-loader?limit=8192'
    },
     {
      test: /\.js$/,
      loader: 'babel-loader'
    }
   ]

  }
};
