const INITIAL_STATE = {
    productsList: []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "PRODUCTS_LOADED":
            return {...state, productsList: action.payload.data }
        default:
            return state
    }
}