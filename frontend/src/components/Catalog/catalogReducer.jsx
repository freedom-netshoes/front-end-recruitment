import * as actionTypes from '../../actions/types'

const INITIAL_STATE = {
    productsList: []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.PRODUCTS_LOADED:
            return {...state, productsList: action.payload.data }
        default:
            return state
    }
}