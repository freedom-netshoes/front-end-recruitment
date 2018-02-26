export default {
  'MODAL' (state, payload) {
    state.modal = payload;
  },
  'ADD_PROD_CART' (state, payload) {
    state.cart.show = payload.show;
    payload.product.size = payload.size;
    state.cart.products.push(payload.product);
    state.cart.total += payload.product.price;
    state.modal.show = false;
  },
  'BUY' (state, payload) {
    state.cart = {
      show: false,
      products: [],
      total: 0.00
    }
  }
}
