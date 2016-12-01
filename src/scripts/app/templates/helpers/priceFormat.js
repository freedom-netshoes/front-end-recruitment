'use strict';

var Handlebars = require('handlebars/dist/handlebars');

module.exports = function(price, isCard) {
	var roundPrice = price.toFixed(2),
		finalPrice = roundPrice.substr(0, roundPrice.indexOf('.')),
		finalDecimals = roundPrice.substr(roundPrice.indexOf('.')).replace('.', ','),
		result = isCard ? '<span class="card-product__list-price">' + finalPrice + '</span><small class="card-product__list-decimals">' + finalDecimals + '</small>' : finalPrice + finalDecimals;
	return new Handlebars.SafeString(result);
};