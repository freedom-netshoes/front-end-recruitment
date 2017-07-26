import React, {Component} from 'react';

export default class Cart extends Component {
  render() {
    return(
      <div className="c-cart">
        <h2 className="c-cart__title">Sacola</h2>
        <ul className="c-cart__list">
          <li className="c-cart__item">
            <img className="c-cart__image" />
            <h3 className="c-cart__title-product">Camiseta Corinthians College 77</h3>
            <p className="c-cart__size-style">GGG | Preto e branco</p>
            <p className="c-cart__amount">1</p>
            <h3 className="c-cart__price">R$ 149,90</h3>
            <a href='#'>x</a>
          </li>
        </ul>
        <p className="c-cart__subtotal">SUBTOTAL</p>
        <h3 className="c-cart__total-price">R$ 149,90</h3>
        <p className="c-cart__installments">ou em até 10 X R$ 37,97</p>
        <button className="c-cart__purchase">Comprar</button>
      </div>
    )
  }
}