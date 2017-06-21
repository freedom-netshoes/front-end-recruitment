/* ---
*** --- Configurações comuns para o Webpack
--- */

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const Path = require('path');
const Webpack = require('webpack');
const Pj = Path.join;
const Config = {};

/* --- PATH --- */

Config.bundlePath = Pj(__dirname, '..', 'public');
Config.srcPath = Pj(__dirname, '..', 'resources', 'js');
Config.scssPath = Pj(__dirname, '..', 'resources', 'scss');
Config.actionsPath = Pj(Config.srcPath, 'actions');
Config.componentsPath = Pj(Config.srcPath, 'components');
Config.entryFile = Pj(Config.srcPath, 'app.jsx');
Config.helpersPath = Pj(Config.srcPath, 'helpers');
Config.reducersPath = Pj(Config.srcPath, 'reducers');
Config.routesPath = Pj(Config.srcPath, 'routes');
Config.storePath = Pj(Config.srcPath, 'store');
Config.structurePath = Pj(Config.srcPath, 'structure');

/* --- ALIASES --- */

Config.aliases = {
    MasterPage: Config.structurePath,    
    Actions: Config.actionsPath,    
    Reducers: Config.reducersPath,
    RootRoute: Config.routesPath,    
    Store: Config.storePath,
    ConstAcoes: Pj(Config.actionsPath, 'ConstAcoes'),    
    Main: Pj(Config.routesPath, 'Main'),

    Utils: Pj(Config.helpersPath, 'Utils'),
    Request: Pj(Config.helpersPath, 'Request'),

    AppConfig: Pj(Config.srcPath, 'AppConfig'),
    
    /* --- ALIASES/COMPONENTES --- */
    Aba: Pj(Config.componentsPath,'Aba'),
    CatalogoItem: Pj(Config.componentsPath, 'CatalogoItem'),
    Carrinho: Pj(Config.componentsPath, 'Carrinho'),
    CarrinhoCabecalho: Pj(Config.componentsPath, 'CarrinhoCabecalho'),
    CarrinhoItem: Pj(Config.componentsPath, 'CarrinhoItem'),
    CarrinhoRodape: Pj(Config.componentsPath, 'CarrinhoRodape')
};

/* --- RESOLVE --- */

Config.resolve = {
    alias: Config.aliases,
    modules: [Path.resolve(__dirname), 'node_modules'],
    extensions: ['.css', '.scss', '.js', '.jsx']
};

/* --- VENDOR --- */

Config.vendor = [
  'react',
  'react-dom'
];

/* --- RULES --- */

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
  }
];

/* --- PLUGINS --- */

Config.plugins = [
  new ExtractTextPlugin({
        filename: 'index.css',
        disable: process.env.NODE_ENV === 'development',
        allChunks: true
    }),
  new Webpack.ProvidePlugin({
        Base: 'Base'
    })
];

module.exports = Config;
