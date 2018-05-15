const merge = require('webpack-merge')
const webpack = require('webpack')
const common = require('./webpack.common.js')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: {
    index: './demo/index.js'
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'vanillaJS Library Boilerplate',
      template: './demo/index.html'
    })
  ],
  devServer: {
    contentBase: './dist',
    hot: true
  }
})
