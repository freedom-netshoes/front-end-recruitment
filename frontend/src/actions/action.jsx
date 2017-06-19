import * as actions from './action-types'

export const addProductCart = (product) => {
  return {
    type: actions.PRODUCT_ADDED,
    payload: product
  }
}

export const removeProductCart = (product) => {
  return {
    type: actions.PRODUCT_REMOVED,
    payload: product
  }
}

export const toggleCart = (open) => {
  let action = open ? actions.OPEN_CART : actions.CLOSE_CART
  return {
    type: action,
    payload: undefined
  }
}
