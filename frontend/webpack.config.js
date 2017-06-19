const { resolve } = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: ['babel-polyfill', './src/index.jsx'],
  output: {
    filename: 'app.js',
    path: resolve(`${__dirname}/public`),
    publicPath: '/'

  },
  devServer: {
    port: 8080,
    contentBase: './public'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      modules: resolve(__dirname, '/node_modules')
    }
  },
  stats: {
    colors: true,
    reasons: true
  },
  module: {
    rules: [

      {
        test: /\.jsx$/,
        use: [
          'babel-loader'
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        use: 'url-loader?limit=100000'
      },
      {
        test: /\.(css|less)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1, localIdentName: '[name]__[local]__[hash:base64:5]', minimize: false, modules: true, sourceMap: true
              }
            },
            { loader: 'less-loader?relativeUrls&noIeCompat', options: { sourceMap: true, relativeUrls: true } }
          ]
        })
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'postcss-loader', options: { syntax: 'sugarss' } }
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('app.css'),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      cacheFolder: resolve(`${__dirname}'public'`),
      debug: true,
      compress: { warnings: false },
      output: { comments: false },
      sourceMap: true
    })
  ]
}
