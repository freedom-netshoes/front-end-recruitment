import { ActionReducer, Action } from '@ngrx/store';

import { Cart, intitialState } from '../state/cart.state';
import {
  ADD_TO_CART,
  REMOVE_TO_CART,
  TOTAL_CART
} from '../actions/cart.actions';

export function cartReducer (state = intitialState, action: Action) {
  let cartItem;
  let cartFilter;

  switch (action.type) {
    case ADD_TO_CART: {
      // fazendo uma copia do meu estado sem mudar a referencia dele;
      cartItem = state.products.copyWithin(0, state.products.length);
      cartFilter = cartItem.filter((cart) => {
        return (cart.products.id === action.payload.products.id);
      });

      if (cartFilter.length < 1) {
        action.payload.products.amount = 1;
        action.payload.products.subtotal = action.payload.products.price;
        cartItem.push(action.payload);
      } else {
        const index = cartItem.findIndex(cart => cart.products.id === action.payload.products.id);
        cartItem[index].products.amount++;
        cartItem[index].products.subtotal = cartItem[index].products.amount * cartItem[index].products.price;
      }

      localStorage.setItem('products', JSON.stringify(cartItem));
      return {products: cartItem};
    }

    case REMOVE_TO_CART: {
      cartItem = state.products.copyWithin(0, state.products.length);
      cartFilter = cartItem.filter(function (cart) {
        return (cart.products.id !== action.payload.products.id);
      });

      localStorage.setItem('products', JSON.stringify(cartFilter));
      return {products: cartFilter};
    }

    case TOTAL_CART: {
      return console.log(cartItem);
    }

    default:
      return state;
  }
}
