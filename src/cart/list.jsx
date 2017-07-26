import React from 'react'

export default props => {
  const renderList = () => {
    const list = props.list || []
    return list.map(product => (
      <li className="c-cart__item" key={product.id}>
        <img className="c-cart__image" src="{product.url}"/>
        <h3 className="c-cart__title-product">{product.title}</h3>
        <p className="c-cart__size-style">{product.size} | {product.style}</p>
        <p className="c-cart__amount">{product.amount}</p>
        <h3 className="c-cart__price">{product.currencyFormat} {product.price}</h3>
        <a href='#'>x</a>
      </li>
    ))
  }
  return (
    <ul className="c-cart__list">
      {renderList()}
    </ul>
  )
}