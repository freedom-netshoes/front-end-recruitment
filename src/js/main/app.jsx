import React, {Component} from 'react';
import Products from '../products/products'
import Cart from '../cart/cart'
import Menu from '../menu/menu'
import products from '../../../services/products'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: products.getData(),
      list: [],
      cartStyle: {display:'none'},
    }
    this.handleAdd = this.handleAdd.bind(this)
    this.handleOnChange = this.handleOnChange.bind(this)
    this.handleRemove = this.handleRemove.bind(this)
    this.updateCartStyle = this.updateCartStyle.bind(this)
    this.addAmount = this.addAmount.bind(this)
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
        if(elem.id == key) {
          elem.amount = parseInt(elem.amount) + 1;
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

  addAmount(id, valor) {
    const newlist = this.state.list;
    newlist.forEach((elem) => {
      if(elem.id == id) {
        elem.amount = valor;
      }
    })
    this.refresh(newlist)
  }

  handleOnChange(e) {
    this.addAmount(e.currentTarget.id, e.currentTarget.value)
  }

  updateCartStyle(style) {
    this.setState({
      ...this.state,
      cartStyle: {display: style}
    })
  }

  render() {
    return (
      <div className="container">
        <Menu 
          cartStyle={this.updateCartStyle}
          list={this.state.list}
        />
        
        <Products 
          products={this.state.products} 
          handleAdd={this.handleAdd}
        />
        <Cart 
          list={this.state.list}
          cartStyle={this.updateCartStyle}
          handleRemove={this.handleRemove}
          handleOnChange={this.handleOnChange}
          style={this.state.cartStyle}
        />
      </div>
    )
  }
}