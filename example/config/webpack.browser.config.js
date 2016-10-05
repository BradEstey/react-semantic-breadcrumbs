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
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin()
  ]
}