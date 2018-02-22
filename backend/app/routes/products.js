'use strict';

module.exports = (app) => {
  const controller = app.controllers.products;

  app.route('/products')
    .get(controller.listProducts);
};
