import { PRODUCTS_LOADED } from './types';

import axios from 'axios'
import { WebConfig } from '../resources/appSettings'

export const productsListLoaded = () => {
    let request = axios.get(WebConfig.apiProductUrl)
    return {
        type: PRODUCTS_LOADED,
        payload: request
    }
}