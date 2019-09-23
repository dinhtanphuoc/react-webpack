var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
//Thư mục sẽ chứa tập tin được biên dịch
var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
//Thư mục chứa dự án - các component React
var APP_DIR = path.resolve(__dirname, 'src/client/app');
//Thư mục chứa file index.html
var TEMPLATE = path.resolve(__dirname, 'src/client/index.html')

var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/client/public/index.html'),
      filename: TEMPLATE
    }),
  ]
};

module.exports = config;
