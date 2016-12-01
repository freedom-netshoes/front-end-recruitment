/* globals products:true */
'use strict';

var card = require('app/card-product');

module.exports = function() {
	$(document).on('getProducts', function() {
		//RENDER SHELF
		$('.js-shelf').html( card( products ) );
	});

	//CTA BUY BUTTON
	$(document).on('click', '.js-buy-button', function(e) {
		e.preventDefault();

		var $self = $(this),
			id = $self.data('sku'),
			item = $.grep(products.products, function(e){ return e.id === id; }); //GET SINGLE PRODUCT FROM DATA

		if( item && item.length > 0 ) {
			$(document).trigger('addItem', [ item[0] ]); //TRIGGER THE ACT TO MINICART
		}
	});
};