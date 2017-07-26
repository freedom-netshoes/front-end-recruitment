import React, {Component} from 'react';

export default class Products extends Component {
  getElemets() {
    return this.props.data.map((elem, key) => {
      return (
        <div className="c-product" key={key}>
          <img className="c-procut__img" />
          <h3 className="c-product__title">{elem.title}</h3>
          <hr className="c-product__separation" />
          <p className="c-product__currencyFormat">
            {elem.currencyFormat}
            <span className="c-product__value">{elem.price}</span>
            ,00
          </p>
          <p className="c-product__installments">ou {elem.installments}x de {elem.currencyFormat} {elem.price/elem.installments}</p>
          <button className="c-product__cart" onClick={this.props.click(key)}>Colocar no carrinho</button>
        </div>
      )
    })
  }

  render() {
    return (
      <div>
         {this.getElemets()}
      </div>
    )
  }
}

