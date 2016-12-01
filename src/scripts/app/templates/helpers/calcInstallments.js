'use strict';

module.exports = function(price, installments) {
	var calc = price/installments;
	return calc.toFixed(2).replace('.', ',');
};