import { LOAD_CART, ADD_PRODUCT, REMOVE_PRODUCT } from './actionTypes';


export const loadCart = products => dispatch => {
  dispatch({
    type: LOAD_CART,
    payload: products,
  });
}

export const addProduct = product => dispatch => {
  dispatch({
    type: ADD_PRODUCT,
    payload: product,
  });
}

export const removeProduct = product => dispatch => {
  dispatch({
    type: REMOVE_PRODUCT,
    payload: product,
  });
}