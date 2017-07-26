import React from 'react';

export default props => {
  const renderProduct = () => {
    const list = props.list || []
    return list.map(product => (
        <div className="c-product" key={product.id}>
          <img className="c-procut__img" />
          <h3 className="c-product__title">{product.title}</h3>
          <hr className="c-product__separation" />
          <p className="c-product__currencyFormat">
            {product.currencyFormat}
            <span className="c-product__value">{product.price}</span>
            ,00
          </p>
          <p className="c-product__installments">ou {product.installments}x de {product.currencyFormat} {product.price/product.installments}</p>
          <button className="c-product__cart" onClick={props.onClick}>Colocar no carrinho</button>
        </div>
      ))
  }

  return (
    <div>
        {renderProduct()}
    </div>
  )
}

