$(function() {
  $.ajax({
    url: "/products",
    type: "GET",
    success: function(data) {
      const obj = data.products.map(function(element) {
        let value = element.price;
        return `<a class="c-products__card js-select" id="${element.id}">
                  <img src="images/image-1.jpg" class="c-products__image"/>                  
                  <h3 class="c-products__title">${element.title}</h3>
                  <hr class="c-products__separation" />
                  <p class="c-products__current">
                    ${element.currencyFormat}
                    <span class="c-products__price">${value.toString().substring(0,3)}</span>,
                    ${value.toString().substring(4,6)}
                  </p>
                  <p class="c-products__installment">ou em até ${element.installments}x de ${parseFloat((element.price / element.installments).toFixed(2))}</p>
                </a>`;
      });

      $('.c-products').append(obj);

      $('.js-select').on('click', function() {

        const item =  $(this).attr('id');
        const select = data.products.filter(function(element) {
          if(element.id == item) {
            return element;
          }
        });

        $('.c-cart__itens').append(`<div class="c-cart__card" id="${select[0].id}">
                                      <img src="images/image-1.jpg" class="c-cart__image"/>
                                      <div class="c-cart__info">
                                        <h3 class="c-cart__title">${select[0].title}</h3>
                                        <p class="c-cart__size-color">${select[0].availableSizes} | ${select[0].style}</p>
                                        <p class="c-cart__qtd">Quantidade: 1</p>
                                      </div>
                                      <div class="c-cart__options">
                                        <a class="c-cart__close js-close">x</a>
                                        <p class="c-cart__current">${select[0].currencyFormat} <span class="c-cart__price">${select[0].price}</span></p>
                                        <p class="c-cart__installment">ou em até 3x de ${parseFloat((select[0].price / 3).toFixed(2))}</p>
                                      </div>
                                    </div>`);
      });

      $('.js-close').on('click', () => {
        console.log($(this));
      });

      $('.js-menu__bag').on('click', () => {
        $('.c-cart').show();
      });
    }
  });
});
