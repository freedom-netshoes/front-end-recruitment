$(function() {
  $.ajax({
    url: "/products",
    type: "GET",
    success: function(data) {
      const obj = data.products.map(function(element) {
        return `<a class="select" id="${element.id}"><img/>
                  <h3>${element.title}</h3>
                  <p>${element.currencyFormat} ${element.price}</p>
                  <p>ou em até 3x de ${parseFloat((element.price / 3).toFixed(2))}
                </a>`;
      });

      $('.products').append(obj);

      $('.select').on('click', function() {

        const item =  $(this).attr('id');
        const select = data.products.filter(function(element) {
          if(element.id == item) {
            return element;
          }
        });

        $('.cart').append(`<a class="select" id="${select[0].id}"><img/>
                            <h3>${select[0].title}</h3>
                            <p>${select[0].currencyFormat} ${select[0].price}</p>
                            <p>ou em até 3x de ${parseFloat((select[0].price / 3).toFixed(2))}
                          </a>`);
      });
    }
  });
});
