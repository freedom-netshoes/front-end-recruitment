import * as actionTypes from '../actions/action-types'

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.PRODUCT_ADDED:
      return [...state, action.payload]
    case actionTypes.PRODUCT_REMOVED:
      const index = state.findIndex(i => i.id === action.payload.id)
      return [
        ...state.slice(0, index),
        ...state.slice(index + 1)
      ]

    default:
      return state
  }
}

export default cartReducer
