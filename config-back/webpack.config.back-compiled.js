'use strict';

var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
//定义了一些文件夹的路径
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'react-bootstrap');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    //项目的文件夹可以直接用文件夹名称
    //默认会找index.js也可以确定是哪个文件名字
    entry: APP_PATH,
    //输出的文件名 合并以后的js会命名为bundle.js
    output: {
        path: BUILD_PATH,
        filename: 'bundle.js'
    }, devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true
    }, loaders: [{
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
    }],

    //添加我们的插件 会自动生成一个html文件
    plugins: [new HtmlwebpackPlugin({
        title: 'Hello World app'
    }), new ExtractTextPlugin(APP_PATH + "/main.css", {
        allChunks: true
    })]
};

//# sourceMappingURL=webpack.config.back-compiled.js.map