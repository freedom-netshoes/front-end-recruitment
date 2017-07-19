const ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
  entry: './resources/js/index.js',
  output: {
    filename: './public/js/bundle.js'
  },

  module: { 
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("public/css/style.css"),
  ]
};