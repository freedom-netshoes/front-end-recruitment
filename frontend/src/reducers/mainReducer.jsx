import { combineReducers } from 'redux'
import cartReducer from './cartReducer'
import cartStateReducer from './cartStateReducer'

const rootReducer = combineReducers({
  shopCart: cartReducer,
  cartState: cartStateReducer
})

export default rootReducer
