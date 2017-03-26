const ExtractTextPlugin = require('extract-text-webpack-plugin');
const Path              = require('path');

const Pj = Path.join;
const Config = {};

Config.bundlePath     = Pj(__dirname, '..', 'public');
Config.srcPath        = Pj(__dirname, '..', 'resources', 'js');
Config.scssPath       = Pj(__dirname, '..', 'resources', 'scss');
Config.actionsPath    = Pj(Config.srcPath, 'actions');
Config.componentsPath = Pj(Config.srcPath, 'components');
Config.entryFile      = Pj(Config.srcPath, 'app.jsx');
Config.helpersPath    = Pj(Config.srcPath, 'helpers');
Config.reducersPath   = Pj(Config.srcPath, 'reducers');
Config.routesPath     = Pj(Config.srcPath, 'routes');
Config.storePath      = Pj(Config.srcPath, 'store');
Config.structurePath  = Pj(Config.srcPath, 'structure');


const cap  = Config.actionsPath;
const ccp  = Config.componentsPath;
const chp  = Config.helpersPath;
const crep = Config.reducersPath;
const crop = Config.routesPath;
const cscp = Config.scssPath;
const cstp = Config.storePath;
const csp  = Config.structurePath;

Config.aliases = {
  MasterPage: csp,
  Actions   : cap,
  Reducers  : crep,
  RootRoute : crop,
  Store     : cstp,

  AppConfig   : Pj(Config.srcPath, 'AppConfig'),
  ActionTypes : Pj(cap, 'ActionTypes'),
  Cart        : Pj(ccp, 'Cart'),
  CartTitle   : Pj(ccp, 'CartTitle'),
  Catalog     : Pj(ccp, 'Catalog'),
  Delete      : Pj(ccp, 'Delete'),
  Installments: Pj(ccp, 'Installments'),
  Photo       : Pj(ccp, 'Photo'),
  Price       : Pj(ccp, 'Price'),
  Quantity    : Pj(ccp, 'Quantity'),
  Size        : Pj(ccp, 'Size'),
  Submit      : Pj(ccp, 'Submit'),
  Subtotal    : Pj(ccp, 'Subtotal'),
  Title       : Pj(ccp, 'Title'),
  ProductsCart: Pj(crep, 'ProductsCart'),
  Main        : Pj(crop, 'Main'),

  Request   : Pj(chp, 'Request'),
  Utils     : Pj(chp, 'Utils')
};

Config.resolve = {
  alias     : Config.aliases,
  modules   : [Path.resolve(__dirname), 'node_modules'],
  extensions: ['.css', '.scss', '.js', '.jsx']
};

Config.vendor = [
  'react',
  'react-dom'
];

Config.rules = [
  {
    test: /\.jsx?$/,
    exclude: /node_modules/,
    use: [
      {
        loader: 'babel-loader'
      }
    ]
  },
  {
    test: /\.(png|gif|woff|woff2|eot|ttf|svg)$/,
    use: 'url-loader?limit=100000'
  },
  {
    test: /\.(css|scss)$/,
    use: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: [
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            localIdentName: '[name]__[local]__[hash:base64:5]',
            minimize: true,
            modules: true
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
  }/*,
  {
    test: /\.scss$/,
    use: [
      { loader : 'style-loader' },
      { loader : 'css-loader' },
      { loader : 'sass-loader' }
    ]
  }*/
];

Config.plugins = [
  new ExtractTextPlugin({
    filename: 'index.css',
    disable: process.env.NODE_ENV === 'development',
    allChunks: true
  })
];

module.exports = Config;