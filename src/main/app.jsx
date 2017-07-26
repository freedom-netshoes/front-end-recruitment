import React, {Component} from 'react';
import Products from '../products/products'
import Cart from '../cart/cart'
import products from '../../services/products'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: products.getData(),
      list: []
    }
    this.handleAdd = this.handleAdd.bind(this)
    
  }

  handleAdd(key) {
    // adicionar na lista de carrinho cada produto clicado
    const newlist = this.state.list;
    newlist.push(products.filter(key, 'id')[0])
    this.setState({
      products: products.getData(), 
      list: newlist
    })
  }

  handleRemove(key) {
    
  }

  render() {
    return (
      <div className="container">
        <Products products={this.state.products} handleAdd={this.handleAdd}/>
        <Cart />
      </div>
    )
  }
}