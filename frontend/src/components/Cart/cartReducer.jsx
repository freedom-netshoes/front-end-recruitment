import * as actionTypes from '../../actions/types';
import { loadState } from '../../resources/localStorage'

const INITIAL_STATE = {
	shopCart: loadState("shopCart") || []
}

const cartReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case actionTypes.PRODUCT_ADDED:
			debugger;
			let list = [...state.shopCart]; 
			list.push(action.payload)
			return { ...state, shopCart: list }
		case actionTypes.PRODUCT_REMOVED:
			break
		default:
			return state;
	}
};

export default cartReducer;
