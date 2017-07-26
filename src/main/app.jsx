import React, {Component} from 'react';
import Products from '../products/products'
import Cart from '../cart/cart'
import products from '../../services/products'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      products: products(),
    }
  }

  click(id) {
    console.log(id)
  }

  render() {
    return (
      <div className="container">
        <Products data={this.state.products} click={this.click()}/>
        <Cart />
      </div>
    )
  }
}