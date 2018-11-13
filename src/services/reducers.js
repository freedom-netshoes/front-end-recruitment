import { combineReducers } from 'redux';
import productsReducer from './products/reducer';
import sortReducer from './sort/reducer';
import floatCartReducer from './floatCart/reducer';
import cartTotalReducer from './cartTotal/reducer';

export default combineReducers({
  shelf: productsReducer,
  cart: floatCartReducer,
  total: cartTotalReducer,
  sort: sortReducer,
});
