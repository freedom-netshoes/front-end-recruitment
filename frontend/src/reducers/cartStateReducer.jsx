import {OPEN_CART, CLOSE_CART} from '../actions/action-types'

const cartStateReducer = (state = false, action) => {
  switch (action.type) {
    case OPEN_CART:
      return true
    case CLOSE_CART:
      return false
    default:
      return state
  }
}

export default cartStateReducer
