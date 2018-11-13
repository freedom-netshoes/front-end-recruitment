import { combineReducers } from 'redux';
import productsReducer from './products/reducer';
import sortReducer from './sort/reducer';

export default combineReducers({
  products: productsReducer,
  sort: sortReducer
});
