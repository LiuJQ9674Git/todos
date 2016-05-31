'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = {
  entry: './src/App.js',
  output: {
    path: _path2.default.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: 'public/'
  },
  module: {
    loaders: [
    // Used for compiling ES2015 JavaScript
    { test: /\.js/, loader: 'babel' },
    // Used for Bootstrap Less Source Files
    { test: /\.less/, loader: 'style!css!less' },
    // Used for Bootstrap Less Source Files
    { test: /\.css/, loader: 'style!css' },
    // Used for Bootstrap Glyphicon Fonts
    { test: /\.(woff2|woff|ttf|svg|eot)$/, loader: 'file' }]
  }
};

//# sourceMappingURL=webpack.config-compiled.js.map

//# sourceMappingURL=webpack.config-compiled-compiled.js.map