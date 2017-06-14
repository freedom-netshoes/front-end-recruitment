import { combineReducers } from 'redux';
import catalogReducer from '../../components/Catalog/catalogReducer'
import cartReducer from '../../components/Cart/cartReducer'

const rootReducer = combineReducers({
    catalog: catalogReducer,
    cart: cartReducer
});

export default rootReducer;