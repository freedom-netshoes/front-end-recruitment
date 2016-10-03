$(function(){
	var url = "http://localhost:3000/products";
	var products = {};
	var storageData = JSON.parse(localStorage.productsCart || '[]');
	setLocalStorage();
	cart();
	updatePayment();
	updateItensCart();
	/* products list */
	$.ajax({
		url: url,
		dataType: "json",
		success: function(data){
			var template = "";
			products = data;
			$.each(products, function(index, product) {
				// Calc instalments
				installmentPrice =  product.price / product.installments;
				// List products
				template += '<div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 animate fadeIn" data-sku="' + product.sku + '">';
				template += '	<div class="products animate fadeIn" data-sku="' + product.sku + '">';
				template += '		<img src="assets/images/' + product.mainImage + '" alt="" />';
				template += '		<h2>' + product.title + '</h2>';
				template += '		<hr>';
				template += '		<div class="price">';
				template += '			<span class="full-value">' + product.currencyFormat + ' <strong>' + product.price.toFixed(2).split('.')[0] + '</strong>, ' + product.price.toFixed(2).split('.')[1] + '</span>';
				template += '			<span class="installment">ou ' + product.installments + 'x de ' + product.currencyFormat + ' ' + installmentPrice.toFixed(2).split('.') + '</span>';
				template += '		</div>';
				template += '	</div>';				
				template += '</div>';				
			});
			$(".js-content-products").html(template);
		}
	});
	/* add product cart */
	$(".js-content-products").delegate(".products", "click", function(e){
		 e.preventDefault();
		var sku = $(this).attr("data-sku");
		var template = "";
		$.each(products, function(index, product) {
			//Identify SKU in json and build HTML
			if (product.sku == sku) {
				template += '<div class="list-product-cart">';
				template += '	<div class="content-cart">';
				template += '		<div class="image-product">';
				template += '			<img src="assets/images/' + product.mainImage + '" alt="' + product.title + '" />';
				template += '		</div>';
				template += '		<div class="description-product">';
				template += '			<strong>' + product.title + '</strong>';
				template += '			<p>' + product.availableSizes[1] + ' | ' + product.style + '</p>';
				template += '			<p>Quantidade: 1</p>';
				template += '		</div>';
				template += '		<span class="glyphicon glyphicon-remove remove-product" data-sku="' + product.sku + '" aria-hidden="true"></span>';
				template += '		<div class="price-product">';
				template += '			<strong>' + product.currencyFormat + product.price.toFixed(2).split('.') + '</strong>';
				template += '		</div>';
				template += '	</div>';
				template += '</div>';
				saveProductToLocalStorage(product);
			}
		});
		$(template).appendTo(".box-content-cart");
		$('.items-count').addClass('animated rubberBand');
		setTimeout(function(){

			$('.items-count').removeClass('animated rubberBand');
		},2000);
		/* Update qtde Itens in Cart */
		updateItensCart();
	});
	/* Remove item cart */
	$(".box-content-cart").delegate(".remove-product", "click", function(e) {
		e.stopPropagation();
		$(this).parents(".list-product-cart").remove();
		var sku = $(this).attr("data-sku");

		removeProductFromLocalStorage(sku);
		/* Update qt Itens in Cart */
	});
	/* update cart */
	function updateItensCart(){
			var itens = JSON.parse(localStorage.productsCart).length;
			$(".items-count").html(itens);
	}
	function setLocalStorage(){
		if(!localStorage.productsCart){
			localStorage.productsCart = JSON.stringify([]);
		}
	}
	function saveProductToLocalStorage(product){
	    var productsCart = [];
	    productsCart = JSON.parse(localStorage.getItem('productsCart'));
	    // Push the new data (whether it be an object or anything else) onto the array
	    productsCart.push(product);
	    // Re-serialize the array back into a string and store it in localStorage
	    localStorage.setItem('productsCart', JSON.stringify(productsCart));
	    updatePayment();
	}
	function removeProductFromLocalStorage(productSku) {
		var storedProducts = JSON.parse(localStorage.productsCart); 
		for ( var i = 0; i < storedProducts.length; i++ ) {
			var data = parseInt(storedProducts[i].sku);
			var sku = parseInt(productSku);
			if (data === sku) {
				storedProducts.splice(i,1); 
			}
		}
		// Re-serialize the array back into a string and store it in localStorage
	    localStorage.setItem('productsCart', JSON.stringify(storedProducts));
	    updatePayment();
	    updateItensCart();
	}
	function updatePayment(){
		var subtotal = 0;
		var simbol = '';
		var installmentPrice = 0;
		var storedPrductsJSON = localStorage.productsCart || '[]',
        storedProducts = JSON.parse(storedPrductsJSON);

        for ( var i = 0; i < storedProducts.length; i++ ) {
			subtotal += storedProducts[i].price;
			simbol = storedProducts[i].currencyFormat;
			
		}
		installmentPrice = subtotal / 10;
			if(subtotal === 0){
				$('.cart-total strong').html('SACOLA VAZIA');
				$('.price-total ').css('display', 'none');
			}else{
				$('.cart-total strong').html('SUBTOTAL');
				$('.price-total').css('display', 'block');
			}
			$(".price-total strong").html(simbol + " " + subtotal.toFixed(2).split('.'));
			$(".price-total span").html("ou em até 10 X R$ " + installmentPrice.toFixed(2).split('.'));
	}

	function cart(){
		var template = "";
		if(storageData){
			var subtotal = 0;
			var installmentPrice = 0;
			$.each(storageData, function(index, product) {
				//Identify SKU in json and build HTML
				template += '<div class="list-product-cart">';
				template += '	<div class="content-cart">';
				template += '		<div class="image-product">';
				template += '			<img src="assets/images/' + product.mainImage + '" alt="' + product.title + '" />';
				template += '		</div>';
				template += '		<div class="description-product">';
				template += '			<strong>' + product.title + '</strong>';
				template += '			<p>' + product.availableSizes[1] + ' | ' + product.style + '</p>';
				template += '			<p>Quantidade: 1</p>';
				template += '		</div>';
				template += '		<span class="glyphicon glyphicon-remove remove-product" data-sku="' + product.sku + '" aria-hidden="true"></span>';
				template += '		<div class="price-product">';
				template += '			<strong>' + product.currencyFormat + product.price.toFixed(2).split('.') + '</strong>';
				template += '		</div>';
				template += '	</div>';
				template += '</div>';
			});
			$(template).appendTo(".box-content-cart");
		}
	}
	if(isTouchDevice()===false) {
		$('.bag-icon').tooltip();
	}
	function isTouchDevice(){
		return true === ("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch);
	}
	$('.open-cart').on('click', function() {
		document.getElementById("theCart").style.display = "block";		/* Act on the event */
		updatePayment();
	});
	$('.close-cart').on('click', function() {
		document.getElementById("theCart").style.display = "none";		/* Act on the event */
	});
});