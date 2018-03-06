'use strict';

const express    = require('express')
   ,  bodyParser = require('body-parser')
   ,  consign    = require('consign');


module.exports = () => {
  const app = express();

  app.set('port', 8081);
  app.set('json spaces', 2);

  app.use(function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
    res.header('Access-Control-Allow-Credentials', true);
    next();
  });

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(express.static('../frontend/dist'));

  consign({cwd: "app"})
    .include('models')
    .then('controllers')
    .include('routes')
    .into(app);

  return app;
};
