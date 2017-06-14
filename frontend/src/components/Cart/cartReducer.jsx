import { persistStore, getStoredState } from 'redux-persist'
import * as actionTypes from '../../actions/types';

async function getStore() {
	await getStoredState({ whitelist: ['catalog'] }, (err, restoredState) => {
		return restoredState || []
	})
}


const cartReducer = (state = getStore(), action) => {
	switch (action.type) {
		case actionTypes.ADD_PRODUCT:

			persistStore(state)
			break
		case actionTypes.DEL_PRODUCT:
			break
		default:
			return state;
	}
};

export default cartReducer;
