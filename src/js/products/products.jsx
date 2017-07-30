import React from 'react';
import utils from '../utils/utils'

export default props => {
  const callbackFn = (key) => {
    props.handleAdd(key)
  }
  const renderProduct = () => {
    const list = props.products || []
    return list.map((product, key) => (
        <div className="c-product" key={key}>
          <img className="c-product__img" src={`images/img-${product.id}.jpg`}/>
          <h3 className="c-product__title">{product.title}</h3>
          <hr className="c-product__separation" />
          <p className="c-product__currencyFormat">
            {product.currencyFormat}
            <span className="c-product__value c-product__value--price">{utils.converteFloatMoeda(product.price, 'int')}</span>
            ,{utils.converteFloatMoeda(product.price, 'dec')}
          </p>
          <p className="c-product__installments">ou {product.installments}x de <span className="c-product__value"> {product.currencyFormat} {utils.converteFloatMoeda(product.price/product.installments)}</span></p>
          <button className="c-product__cart" onClick={() => props.handleAdd(product.id)}>Adicionar no carrinho</button>
        </div>
      ))
  }

  return (
    <div>
        {renderProduct()}
    </div>
  )
}

