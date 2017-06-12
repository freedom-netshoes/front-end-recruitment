const product = require('./productModel')
const db = require('../../config/database')
    //Product Routes

product.route('get', (req, res) => {
    debugger;
    const productsList = db.get('products')
        .value()
        //console.log(productsList)
    res.send(productsList)
});

module.exports = product