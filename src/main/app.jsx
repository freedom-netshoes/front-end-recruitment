import React, {Component} from 'react';
import Products from '../products/products'
import Cart from '../cart/cart'
import products from '../../services/products'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.handleAdd = this.handleAdd.bind(this)
    this.state = {
      products: products(),
      list: []
    }
  }

  handleAdd() {
    // adicionar na lista de carrinho cada produto clicado
    setState({products: products(), list.push()})
  }

  handleRemove() {
    console.log(this)
  }

  render() {
    return (
      <div className="container">
        <Products list={this.state.products} onClick={this.handleAdd}/>
        <Cart />
      </div>
    )
  }
}