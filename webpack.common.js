const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'myUtils.js',
    publicPath: './',
    sourceMapFilename: '[name].map',
  },
  resolve: {
    extensions: [
      '.js', '.json',
    ]
  },
  module: {
    rules: [
      // es6 to es5
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        },
      },
    ],
  },
  plugins: [
    // 每次打包清空目录
    new CleanWebpackPlugin(['./dist']),
  ],
}