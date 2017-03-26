import * as ActionTypes from 'ActionTypes';
import {GetQuantity} from 'Utils';
import {List} from 'immutable';

const initialState = {
  productsList: List()
};

const ProductsCart = function (state = initialState, action) {

  switch (action.type) {
    case ActionTypes.ADD_PRODUCT:
      let list = state.productsList.push(action.product);
      action.product.quantity = GetQuantity(list, action.product);
      return {productsList: list};
    case ActionTypes.DEL_PRODUCT:
      const index = state.productsList.findIndex(item => item.id === action.product.id);
      list = state.productsList.splice(index, 1);
      action.product.quantity = GetQuantity(list, action.product);
      return {productsList: list};
    default:
      return state;
  }
};

export default ProductsCart;
