import { combineReducers } from 'redux';
import catalogReducer from '../../components/Catalog/catalogReducer'

const rootReducer = combineReducers({
    catalog: catalogReducer
});

export default rootReducer;