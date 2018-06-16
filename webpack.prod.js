const merge = require('webpack-merge')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
})
