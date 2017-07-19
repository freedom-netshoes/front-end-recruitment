const ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
  entry: ['./resources/js/index.js', './resources/sass/index.scss'],
  output: {
    filename: './public/js/bundle.js'
  },

  module: {
    rules: [{
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
            use: [{
                loader: "css-loader"
            }, {
                loader: "sass-loader"
            }],
            // use style-loader in development
            fallback: "style-loader"
        })
    }]
  },
  plugins: [
    new ExtractTextPlugin({ // define where to save the file
      filename: './public/css/index.css',
      allChunks: true,
    }),
  ]
};
