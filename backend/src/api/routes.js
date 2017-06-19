//Dependencies
const express = require('express')

module.exports = (server) => {
    //API Routes
    const router = express.Router()
    server.use('/api', router)

    //Services
    const productService = require('./products/productService')
    productService.register(router, '/products')

}