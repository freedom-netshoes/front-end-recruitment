import { FETCH_PRODUCTS } from './actionTypes';
import axios from '../axios';

const compare = {
  'lowestprice': (a, b) => {
    if (a.price < b.price)
      return -1;
    if (a.price > b.price)
      return 1;
    return 0;
  },
  'highestprice': (a, b) => {
    if (a.price > b.price)
      return -1;
    if (a.price < b.price)
      return 1;
    return 0;
  }
}

export const fetchProducts = (sortBy, callback) => dispatch => {

  axios.get('/products')
    .then(res => {
      let { products } = res.data;

      if(!!sortBy) {
        products = products.sort(compare[sortBy]);
      }

      if(!!callback) {
        callback();
      }

      return dispatch({
        type: FETCH_PRODUCTS,
        payload: products
      });

    })
    .catch(err => {
      console.log(err);
      throw new Error('Could not fetch products. Try again later.');
    });
}


