const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const extractSass = new ExtractTextPlugin({
  filename: 'css/[name].css',
  allChunks: true,
})

module.exports = {
  entry: ['./src/index.jsx', './src/index.scss'],
  output: {
    path: __dirname + '/public',
    filename: './bundle.js',
  },
  devServer: {
    port: 8080,
    contentBase: './public',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    extractSass
  ],
  module: {
    rules: [{
      test: /.js[x]?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: ['es2015', 'react'],
        plugins: ['transform-object-rest-spread']
      }
    }, {
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: 'css-loader!sass-loader',
      }),
    }, {
      test: /\.woff|.woff2|.ttf|.eot|.svg*.*$/,
      loader: 'file'
    }]
  },
  node: {
    fs: 'empty'
  } 
}
