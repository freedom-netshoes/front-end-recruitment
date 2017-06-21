const Config = require('./common.config');
const Path = require('path');
const Webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
require('babel-core/register');
require('babel-polyfill');

module.exports = {
  name: 'index',
  entry: {
    index: [
      'babel-polyfill',
      Config.entryFile
    ]
  },
  output: {
    filename: `index.js`,
    path: Config.bundlePath
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
      // basePath: '/',
      template: Path.join(__dirname, '..', 'index.ejs')
    }),
    new SWPrecacheWebpackPlugin({
      cacheId: 'dashboard',
      filename: 'service-worker.js',
      // replacePrefix: 'http://localhost:3000/',
      stripPrefix: Config.bundlePath,
      staticFileGlobsIgnorePatterns: [/.*\.html/]
    }),
    new Webpack.optimize.UglifyJsPlugin({
      cacheFolder: Config.bundlePath,
      debug: true,
      compress: { warnings: true },
      output: { comments: false},
      sourceMap: true
    }),
    ...Config.plugins
  ]
};
