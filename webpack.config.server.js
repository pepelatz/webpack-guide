const path = require('path');
const merge = require('webpack-merge');
const webpackNodeExternals = require('webpack-node-externals');

const baseConfig = require('./webpack.config.base');

module.exports = merge(baseConfig, {
  mode: 'production',
  target: 'node',
  entry: './src/server.js',
  externals: [webpackNodeExternals()],
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: 'null-loader'
      }
    ]
  }
});
