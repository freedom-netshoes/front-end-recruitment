import { combineReducers } from 'redux';
import cartReducer from '../../components/Cart/cartReducer'

const rootReducer = combineReducers({
    shopCart: cartReducer
});

export default rootReducer;