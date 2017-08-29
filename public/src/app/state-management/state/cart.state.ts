export interface Cart {
  products: Array<any>;
}

export const intitialState: Cart = {
  products: JSON.parse(localStorage.getItem('products')) || []
  // products: []
};
