import React from 'react';

export default props => {
  const renderMenu = () => {
    return (
        <nav className="c-menu">
          <a className="c-menu__link" onClick={() => props.cartStyle('block')}>
            <i className="c-cart__count">{props.list.length}</i>
            <img className="c-cart__icon-bag" src="images/bag.png"/>
            <h2 className="c-cart__title">Seu carrinho</h2>
          </a>
        </nav>
      )
  }

  return (
    <div>
        {renderMenu()}
    </div>
  )
}

