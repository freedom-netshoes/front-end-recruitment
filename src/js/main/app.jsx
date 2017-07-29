import React, {Component} from 'react';
import Products from '../products/products'
import Cart from '../cart/cart'
import products from '../../../services/products'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: products.getData(),
      list: []
    }
    this.handleAdd = this.handleAdd.bind(this)
    this.handleOnChange = this.handleOnChange.bind(this)
    this.handleRemove = this.handleRemove.bind(this)
  }

  filter() {

  }

  refresh(newlist) {
    this.setState({
      ...this.state,
      list: newlist
    })
  }

  handleAdd(key) {
    // adicionar na lista de carrinho cada produto clicado
    const newlist = this.state.list;
    const flag = newlist.filter(elem => elem.id === key)
    
    if (flag.length === 0) {
      const obj = products.filter(key, 'id')[0];
      obj.amount = 1;
      newlist.push(obj)
    } else {
      newlist.forEach((elem) => {
        if(elem.id === key) {
          elem.amount += 1;
        }
      })
    }

    this.refresh(newlist)
  }

  handleRemove(key) {
    // Cria uma nova lista retirando item clicado
    const newlist = this.state.list.filter(elem => elem["id"] != key)
    this.refresh(newlist)
  }

  handleOnChange(e, key) {
  }

  render() {
    return (
      <div className="container">
        <Products 
          products={this.state.products} 
          handleAdd={this.handleAdd}
        />
        <Cart 
          list={this.state.list}
          handleRemove={this.handleRemove}
          handleOnChange={this.handleOnChange}
        />
      </div>
    )
  }
}