import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ReduceList, PriceFormat, InstallmentsFormat } from '../../resources/helpers'

import CSSModules from 'react-css-modules'
import Header from './Header/header'
import BagItem from './BagItem/bag-item'
import styles from './cart.less'

@CSSModules(styles)
class Cart extends Component {
  render () {
    return (
      <aside id="cart-shop" className={this.props.cartState ? 'open col-xs-12' : 'close'}>
        <div className="col-xs-12">
          <Header {...{ size: this.props.fullBag.length, onClick: this.closeBag }} />
          <ul>
            {
              this.props.bagItems.map(product =>
                <BagItem {...{ product: product, quantity: product.quantity, key: product.id }} />
              )
            }
            <li className={this.props.fullBag.length ? 'show row complete-purchase' : 'hide'}>
              <hr />
              <p className="subtotal col-xs-12 col-sm-6">Subtotal</p>
              <div className="col-xs-12 col-sm-6 end-sm">
                <p className="price">R$ <strong>{PriceFormat(this.props.priceTotal).integer}</strong>,{PriceFormat(this.props.priceTotal).decimal} </p>
                <p className="installments">ou em até {this.props.maxInstallment} X <strong>{InstallmentsFormat(this.props.priceTotal, this.props.maxInstallment)}</strong></p>
              </div>
              <div className="col-xs-12 btn-buy-container">
                <button className="btn-buy">Comprar</button>
              </div>
            </li>
            <li className={this.props.fullBag.length <= 0 ? 'show row complete-purchase' : 'hide'}>
              <hr />
              <p className="subtotal col-xs-12 col-sm-6">Seu carrinho está vazio.</p>

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
