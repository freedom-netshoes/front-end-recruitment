const ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
  entry: ['./resources/js/index.js', './resources/sass/index.scss'],
  output: {
    filename: './public/js/bundle.js'
  },

  module: {
    rules: [
      { // regular css files
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader',
        }),
      },
      { // sass / scss loader for webpack
        test: /\.(sass|scss)$/,
        loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({ // define where to save the file
      filename: './public/index.css',
      allChunks: true,
    }),
  ]
};
