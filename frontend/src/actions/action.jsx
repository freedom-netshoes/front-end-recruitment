import { PRODUCTS_LOADED } from './Types';

import axios from 'axios'
import { WebConfig } from '../resources/appSettings.js'

export const productsListLoaded = () => {
    let request = axios.get(WebConfig.apiProductUrl)
    return {
        type: PRODUCTS_LOADED,
        payload: request
    }
}