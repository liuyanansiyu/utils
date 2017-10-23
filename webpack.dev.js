
const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common.js');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const publicPath = process.env.ASSET_PATH || '/';

module.exports = Merge(CommonConfig, {
  entry: ['babel-polyfill', './src/test/test.js'],
  // source map
  devtool: 'cheap-module-eval-source-map',

  // dev server
  devServer: {
    port: 3000,
    host: 'localhost',
    hot: true,
    historyApiFallback: true,
    noInfo: false,
    stats: 'minimal',
    publicPath: publicPath,
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/test/index.html', chunksSortMode: 'dependency' })
  ],
})