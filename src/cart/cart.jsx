import React, {Component} from 'react';
import List from './list'
import Total from './totalprice'


export default class Cart extends Component {
  render() {
    return(
      <div className="c-cart">
        <h2 className="c-cart__title">Sacola</h2>
        <List 
          list={this.props.list}
          handleRemove={this.props.handleRemove}
        />
        <p className="c-cart__subtotal">SUBTOTAL</p>
        <Total 
          list={this.props.list}
        />
        <button className="c-cart__purchase">Comprar</button>
      </div>
    )
  }
}