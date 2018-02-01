'use strict'

import _axios from '../axios'
import { itemIsInCart } from '../util/store'

export const ADD_TO_CART = 'cart/ADD_TO_CART'
export const REMOVE_FROM_CART = 'cart/REMOVE_FROM_CART'

const state = {
  cart: [],
  products: [],
  error: null
}

const fetchProducts = function () {
  _axios.get('/products').then(resp => {
    state.products = resp.data
  })
}
fetchProducts()

const mutations = {
  [ADD_TO_CART] (state, item) {
    if (!itemIsInCart(state.cart, item)) {
      state.cart.push(item)
    }
  },
  [REMOVE_FROM_CART] (state, item) {
    state.cart.splice(state.cart.indexOf(item), 1)
  }
}

const getters = {
  cart: state => state.cart,
  products: state => state.products,
  error: state => state.error,
  productInCart: state => item => itemIsInCart(state.cart, item)
}

export default {
  state: state,
  getters: getters,
  mutations: mutations
}
