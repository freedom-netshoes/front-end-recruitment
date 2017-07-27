import React from 'react';

export default props => {
  const callbackFn = (key) => {
    props.handleAdd(key)
  }
  const renderProduct = () => {
    const list = props.products || []
    return list.map((product, key) => (
        <div className="c-product" key={key}>
          <img className="c-procut__img" />
          <h3 className="c-product__title">{product.title}</h3>
          <hr className="c-product__separation" />
          <p className="c-product__currencyFormat">
            {product.currencyFormat}
            <span className="c-product__value">{product.price}</span>
            ,00
          </p>
          <p className="c-product__installments">ou {product.installments}x de {product.currencyFormat} {product.price/product.installments}</p>
          <button className="c-product__cart" onClick={() => props.handleAdd(product.id)}>Colocar no carrinho</button>
        </div>
      ))
  }

  return (
    <div>
        {renderProduct()}
    </div>
  )
}

