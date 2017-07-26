import React, {Component} from 'react';
import List from './list'

export default class Cart extends Component {
  render() {
    return(
      <div className="c-cart">
        <h2 className="c-cart__title">Sacola</h2>
        <List />
        <p className="c-cart__subtotal">SUBTOTAL</p>
        <h3 className="c-cart__total-price">R$ 149,90</h3>
        <p className="c-cart__installments">ou em até 10 X R$ 37,97</p>
        <button className="c-cart__purchase">Comprar</button>
      </div>
    )
  }
}