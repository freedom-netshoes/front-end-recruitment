import React, { Component } from 'react'
import Catalog from '../components/Catalog/catalog'
import Cart from '../components/Cart/cart'
import { connect } from 'react-redux'
import CSSModules from 'react-css-modules'

import { toggleCart } from '../actions/action'
import styles from './app.less'

@CSSModules(styles)
class App extends Component {
  render () {
    return (
      <div className='row center-xs'>
        <Catalog />
        <Cart />
        <div
          {...{
            onClick: () => {
              this.props.dispatch(toggleCart(true))
            },
            styleName: this.props.cartState ? 'hide-cart-icon' : 'show-cart-icon',
            title: 'Abrir Carrinho'
          }}
         />
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    cartState: state.cartState
  }
}
export default connect(mapStateToProps)(App)
