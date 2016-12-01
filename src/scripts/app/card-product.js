'use strict';

/* 
*  CARD-PRODUCT - HTML STRUCTURE FOR A SINGLE PRODUCT ITEM
*  (data) required* {Object} - Product infos from json;
*/
module.exports = function(data) {
	//The html
	var template = require('app/templates/card-product.hbs');

	return template(data);
};