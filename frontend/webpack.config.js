const webpack = require('webpack')
const { resolve } = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
module.exports = {
    entry: ['babel-polyfill', './src/index.jsx'],
    output: {
        filename: 'app.js',
        path: resolve(__dirname + 'public'),
        publicPath: '/'

    },
    devServer: {
        port: 8080,
        contentBase: './public',
    },
    devtool: 'inline-source-map',
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
        rules: [{
                test: /\.jsx$/,
                use: [
                    "babel-loader",
                ],
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                use: 'url-loader?limit=100000'
            },
            {
                test: /\.(css|scss)$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{
                            loader: 'css-loader',
                            options: {
                                importLoaders: 1,
                                localIdentName: '[name]__[local]__[hash:base64:5]',
                                minimize: true,
                                module: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                })
            }
        ],
    },
    plugins: [
        new ExtractTextPlugin('app.css')
    ],
}