const product = require('./productModel')
const db = require('../../config/database')
    //Product Routes

product.route('get', (req, res) => {
    const productsList = db.get('products')
        .value()
    res.send(productsList)
});

module.exports = product