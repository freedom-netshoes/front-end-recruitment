/* globals products:true */
'use strict';

//load modules
require('expose?products!app/modules/products');

var shelf = require('app/shelf'),
	minicart = require('app/minicart');

$(function() {
	//GET THE DATA
	$.getJSON('products.json')
	 .then(function(data){
	 	products = data; //SET TO PRODUCT GLOBAL VAR
	 	$(document).trigger('getProducts'); //TRIGGER TO RENDER (shelf module)
	 })
	 .fail(function(){
	 	console.log('oops!');
	 });
	shelf();
	minicart();
});