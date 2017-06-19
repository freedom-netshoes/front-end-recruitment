import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ReduceList } from '../../resources/helpers'

import CSSModules from 'react-css-modules'
import Header from './Header/header'
import BagItem from './BagItem/bag-item'
import SubTotal from './Subtotal/sub-total'
import styles from './cart.less'

@CSSModules(styles)
class Cart extends Component {
  render () {
    return (
      <aside id='cart-shop' className={this.props.cartState ? 'open' : 'close'}>
        <div className='col-xs-12'>
          <Header {...{
            size: this.props.fullBag.length,
            onClick: this.closeBag
          }} />
          <ul>
            {
              this.props.bagItems.map(product =>
                <BagItem {...{
                  product: product,
                  quantity: product.quantity,
                  key: product.id
                }} />
              )
            }
            <hr />
            <li className={this.props.fullBag.length ? 'show' : 'hide'} >
              <SubTotal {...{
                maxInstallment: this.props.maxInstallment,
                priceTotal: this.props.priceTotal
              }} />
            </li>
            <li className={!this.props.fullBag.length ? 'show' : 'hide'} >
              <p className='col-xs-12' styleName='subtotal'>Seu carrinho está vazio.</p>
            </li>
          </ul>
        </div>
      </aside>
    )
  }
}
const mapStateToProps = state => {
  const bagItems = ReduceList(state.shopCart)
  const total = state.shopCart.reduce((a, b) => {
    return a + b.price
  }, 0)
  const maxInstallment = Math.max(...bagItems.map(v => v.installments))
  return {
    maxInstallment: maxInstallment,
    priceTotal: total,
    fullBag: state.shopCart,
    bagItems: ReduceList(state.shopCart),
    cartState: state.cartState
  }
}
export default connect(mapStateToProps)(Cart)
