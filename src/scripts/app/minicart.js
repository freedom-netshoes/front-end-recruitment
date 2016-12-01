'use strict';

module.exports = function() {
	var minicartItems = {
			products: [],
			totals: 0
		}, //ITEMS ON MINICART, DATA TO HANDLEBARS RENDER
		template = require('app/templates/minicart.hbs'), //THE HTML
		totalQuantity = 0, //TOTAL ITEMS ON CART
		cartStorage = localStorage.getItem('cart'); //GET DATA FROM LOCALSTORAGE (PAST CART)

	if( cartStorage ) { //CHECK IF HAS DATA IN LOCALSTORAGE
		var cartParsed = JSON.parse(cartStorage);

		if(cartParsed.products.length > 0) { //IF HAS PRODUCTS ON PAST CART PERSIST THE DATA ON REFRESH
			minicartItems = cartParsed;

			var maxInstallment = $.map(minicartItems.products, function(e) { //CHECK ON ARRAY THE MAX INSTALLMENT VALUE TO RENDER IT
				return e.installments;
			});
			minicartItems.maxInstallment = Math.max.apply(null, maxInstallment);

			$.each(minicartItems.products, function(i, v){
				totalQuantity += v.cartQuantity;
			});

			//RENDERS: LIST OF PRODUCTS AND MINICART QUANTITY
			$('.js-minicart-items').html( template(minicartItems) );
			$('.js-cart-quantity').text(totalQuantity);
		}
	}

	//OPEN MINICART ACTION
	$(document).on('click', '.js-cart-title, .js-cart-open', function(e) {
		e.preventDefault();

		$('.minicart, body').toggleClass('minicart--is-active');
	});

	//CLOSE MINICART ACTION
	$(document).on('click', '.js-close-cart, .js-close-cart *, body.minicart--is-active', function(e) {
		e.preventDefault();

		if (e.target !== this) {
			return;
		}

		$('.minicart, body').removeClass('minicart--is-active');
	});

	//ADD STYLE TO PRE-REMOVE(HOVER) PRODUCT
	$(document).on('mouseenter', '.js-remove-item', function(e) {
		e.preventDefault();

		$(this).parents('.minicart__item').addClass('minicart__item--remove');
	});

	//REMOVE STYLE TO PRE-REMOVE(HOVER) PRODUCT
	$(document).on('mouseleave', '.js-remove-item', function(e) {
		e.preventDefault();

		$(this).parents('.minicart__item').removeClass('minicart__item--remove');
	});

	//CTA 'COMPRAR' CLICK
	$(document).on('addItem', function(e, data) {
		totalQuantity++; //INCREMENT TOTAL ITEMS ON CART
		minicartItems.totals += data.price; //INCREMENT SUBTOTALS

		if( minicartItems.products.length > 0 ) { //CHECK IF SOMETHINGS IS ON THE CART
			var finalData = $.map(minicartItems.products, function(e) {
								if(e.id === data.id) { //IF SKU IS IN CART INCREMENT QUANTITY
									e.cartQuantity++;
									return true;
								}
							});
			if( finalData.length <= 0 ) { //IF SKU IS NOT IN CART PUSH IT ON ARRAY
				data.cartQuantity = 1;
				minicartItems.products.push(data);	
			}
		} else { //ARRAY IS EMPTY PUSH THE FIRST ITEM
			data.cartQuantity = 1;
			minicartItems.products.push(data);
		}

		var maxInstallment = $.map(minicartItems.products, function(e) { //CHECK ON ARRAY THE MAX INSTALLMENT VALUE TO RENDER IT
								return e.installments;
							});
		minicartItems.maxInstallment = Math.max.apply(null, maxInstallment);

		//VISUAL FEEDBACK PRODUCT ADDED
		$('.js-buy-feedback').append('<p class="buy-feedback-item animated bounceInRight js-cart-open">Produto adicionado ao carrinho!</p>');

		//GOOD BYE VISUAL FEEDBACK
		setTimeout(function() {
			$('.buy-feedback-item:first-child').remove();
		}, 2500);

		//RENDERS: LIST OF PRODUCTS AND MINICART QUANTITY
		$('.js-minicart-items').html( template(minicartItems) );
		$('.js-cart-quantity').text(totalQuantity);

		//SET ON LOCALSTORAGE TO PERSIST MINICART
		localStorage.setItem('cart', JSON.stringify(minicartItems));
	});

	//REMOVE ITEM CALLED
	$(document).on('click', '.js-remove-item', function() {
		var productSku = $(this).data('sku'), //PRODUCT ID NUMBER
			productToRemove = $.map(minicartItems.products, function(e, i){
									if( e && productSku === e.id ) {
										minicartItems.products.splice(i, 1); //REMOVE FROM ARRAY
										return e;
									}
								});
		
		totalQuantity -= productToRemove[0].cartQuantity; //REMOVE FROM MINICART QUANTITY
		minicartItems.totals -= productToRemove[0].price; //REMOVE FROM SUB TOTALS PRICE

		var maxInstallment = $.map(minicartItems.products, function(e) { //CHECK ON ARRAY THE MAX INSTALLMENT VALUE TO RENDER IT
			return e.installments;
		});
		minicartItems.maxInstallment = Math.max.apply(null, maxInstallment);

		//RENDERS: LIST OF PRODUCTS AND MINICART QUANTITY
		$('.js-minicart-items').html( template(minicartItems) );
		$('.js-cart-quantity').text(totalQuantity);

		//SET ON LOCALSTORAGE TO PERSIST MINICART
		localStorage.setItem('cart', JSON.stringify(minicartItems));
	});
};