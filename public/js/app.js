$(function() {
  $.ajax({
    url: "/products",
    type: "GET",
    success: function(data) {
      const obj = data.products.map(function(element) {
        return `<a class="c-products__card js-select" id="${element.id}">
                  <img class="c-products__image"/>
                  <hr class="c-products__separation" />
                  <h3 class="c-products__title">${element.title}</h3>
                  <p class="c-products__current">${element.currencyFormat}<span class="c-products__price">${element.price}</span></p>
                  <p class="c-products__installment">ou em até 3x de ${parseFloat((element.price / 3).toFixed(2))}</p>
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

        $('.c-cart__itens').append(`<a class="c-cart__card" id="${select[0].id}">
                                      <img class="c-cart__image"/>
                                      <h3 class="c-cart__title">${select[0].title}</h3>
                                      <p class="c-cart__size-color">${select[0].availableSizes} | ${select[0].style}</h3>
                                      <p class="c-cart__current">${select[0].currencyFormat} <span class="c-cart__price">${select[0].price}</span></p>
                                      <p class="c-cart__installment">ou em até 3x de ${parseFloat((select[0].price / 3).toFixed(2))}</p>
                                      <a class="c-cart__close js-close">x</a>
                                    </a>`);
      });

      $('.js-close').on('click', () => {
        $(this).remove();
      });
    }
  });
});
