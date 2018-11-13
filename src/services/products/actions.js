import { FETCH_PRODUCTS } from './actionTypes';
import axios from '../axios';

export const fetchProducts = () => dispatch => {

  axios.get('/products')
    .then(res => {
      let { products } = res.data;

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
