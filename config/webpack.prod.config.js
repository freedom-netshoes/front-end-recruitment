const Config            = require('./common.config');
const Path              = require('path');
const Webpack           = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
require("babel-core/register");
require("babel-polyfill");

module.exports = {
  entry: {
    index: [
      'babel-polyfill',
      Config.entryFile
    ]
  },
  output: {
    filename: '[name].js',
    path    : Config.bundlePath
  },
  resolve: Config.resolve,
  devtool: 'source-map',
  module: {
    rules: [
      ...Config.rules
    ]
  },
  plugins: [
    new Webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new HTMLWebpackPlugin({
      basePath: '/',
      template: Path.join(__dirname, '..', 'index.ejs')
    }),
    new Webpack.optimize.UglifyJsPlugin({
      cacheFolder: Config.bundlePath,
      debug      : true,
      compress   : { warnings: false },
      output     : { comments: false },
      sourceMap  : true
    }),
    ...Config.plugins
  ]
};