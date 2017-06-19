const lowdb = require('lowdb')

const db = lowdb('./src/data/products.json')

module.exports = db