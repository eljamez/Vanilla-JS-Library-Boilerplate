const path = require('path')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  optimization: {
    minimize: false
  },
  entry: {
    'Main': './src/Main.js',
    'Main.min': './src/Main.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    library: 'lib',
    libraryTarget: 'umd'
  },
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true,
      exclude: /Main.js/,
      include: /Main.min.js/
    })
  ],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-3']
        }
      }
    ]
  }
}
