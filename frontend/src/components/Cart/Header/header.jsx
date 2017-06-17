import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import CSSModules from 'react-css-modules'
import { toggleCart } from '../../../actions/action'

import styles from './header.less'

@CSSModules(styles)
class Header extends Component {
  static defaultProps = {
    size: 0
  };

  static propTypes = {
    size: PropTypes.number
  };

  render () {
    return (
      <h1 styleName="cart-title">
        <span {...{
          onClick: () => {
            this.props.dispatch(toggleCart(false))
          },
          styleName: 'close'
        }}></span>
        <div styleName="bag">
          <div styleName="total-items">{this.props.size}</div>
        </div>
        Sacola
      </h1>
    )
  }
}

export default connect()(Header)
