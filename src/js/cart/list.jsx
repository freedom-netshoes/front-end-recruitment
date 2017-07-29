import React from 'react'
import utils from '../utils/utils'

export default props => {
  const renderOptions = (elem) => {
    return elem.map(opt => <option value={opt}>{opt}</option>)
  }
  const renderList = () => {
    const list = props.list || []
    if(list.length === 0 ) {
      return <li className="c-cart__empty"> :( <br/> Sem itens no carrinho </li>
    } else {
       return list.map((product, key) => (
      <li className="c-cart__item" key={key}>
        <img className="c-cart__image" src={`images/img-${product.id}.jpg`}/>
        <div className="c-cart__infos-products">
          <h3 className="c-cart__title-product">{product.title}</h3>
          <p className="c-cart__info">Tam <select className="c-cart__select">{renderOptions(product.availableSizes)}</select> | {product.style}</p>
          <label className="c-cart__info">Quantidade </label>
          <input type="number"className="c-cart__amount" defaultValue={product.amount} onChange={() => props.handleOnChange(e, product.id)}  name="amount" min="1" max="10" />
        </div>  
        <div className="c-cart__infos-final">
          <a className="c-cart__close" onClick={() => props.handleRemove(product.id)}><i className="fa fa-times" aria-hidden="true"></i></a> 
          <h3 className="c-cart__price">{product.currencyFormat} <span className="c-cart__price--bold">{utils.converteFloatMoeda((product.price * product.amount), 'int')},</span>{utils.converteFloatMoeda((product.price * product.amount), 'dec')}</h3>
        </div>
      </li>
    ))  
    }
  }
  return (
    <ul className="c-cart__list">
      {renderList()}
    </ul>
  )
}