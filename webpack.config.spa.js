const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const baseConfig = require('./webpack.config.base');

module.exports = merge(baseConfig, {
  mode: 'production',
  entry: './src/client.js',
  output: {
    filename: 'bundle.[chunkhash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  optimization: {
    minimizer: [
      new UglifyJSPlugin({
        cache: true,
        parallel: true,
        uglifyOptions: {
          compress: false,
          ecma: 6,
          mangle: true
        },
        sourceMap: false
      })
    ]
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new CompressionPlugin(),
    new HtmlWebPackPlugin({
      template: './index.html'
    }),
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
  ],

  devtool: 'inline-source-map'
});
