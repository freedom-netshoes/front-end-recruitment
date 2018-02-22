'use strict';

module.exports = (app) => {
  const controller    = {}
     ,  ProductsModel = app.models.products;

  controller.listProducts = (req, res) => {
    res.json(ProductsModel);
  };

  return controller;
};
