const webpack = require('webpack')

module.exports = {
  entry: {
    rdfa: './app.js'
  },
  devtool: 'source-map',
  output: {
    path: './build',
    filename: 'app.js',
    publicPath: '/build/',
    sourceMapFilename: 'source-map.map'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel', query: { compact: false } }
    ]
  },
  devServer: {
    port: 8081,
    contentBase: './'
  }
}