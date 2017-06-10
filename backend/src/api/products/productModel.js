const restful = require('node-restful')

const productSchema = {
    id: Number,
    sku: Number,
    title: String,
    description: String,
    availableSizes: Array,
    style: String,
    price: Number,
    installments: Number,
    currencyId: String,
    currencyFormat: String,
    isFreeShipping: Boolean
}

module.exports = restful.model("Products", productSchema)