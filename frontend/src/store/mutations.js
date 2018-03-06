export default {
  'MODAL' (state, payload) {
    state.modal = payload
  },
  'ADD_PROD_CART' (state, payload) {
    state.cart.show = payload.show
    payload.product.size = payload.size
    payload.product.quantify = payload.quantify
    state.cart.total += payload.product.price * payload.product.quantify
    state.modal.show = false
    state.cart.products.push(payload.product)
  },
  'REMOVE_PROD_CART' (state, payload) {
    state.cart.total -= payload.product.price * payload.product.quantify
    state.cart.products.splice(payload.index, 1)
  },
  'SHOW_AND_HIDE_CART' (state, payload) {
    state.cart.show = payload
  },
  'SNACK_BAR' (state, payload) {
    state.snackBar.show = true
    state.snackBar.message = payload.message
    state.snackBar.status = payload.status
    setTimeout(() => {
      state.snackBar.show = false
    }, payload.timer)
  },
  'BUY' (state, payload) {
    state.cart = {
      show: false,
      products: [],
      total: 0.00
    }
  }
}
