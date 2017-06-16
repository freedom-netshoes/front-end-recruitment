import { PRODUCTS_LOADED, PRODUCT_ADDED, PRODUCT_REMOVED } from './types';

export const addProductCart = (product) => {
    return {
        type: PRODUCT_ADDED,
        payload: product
    }
}

export const removeProductCart = (product) => {

    return {
        type: PRODUCT_REMOVED,
        payload: product
    }
}