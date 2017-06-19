import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import CSSModules from 'react-css-modules'
import { toggleCart } from '../../../actions/action'
import ButtonDismiss from '../../crossComponents/ButtonDismiss/button-dismiss'
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
      <h1 className='cart-title'>
        <ButtonDismiss {...{
          clickButton: () => {
            this.props.dispatch(toggleCart(false))
          }
        }}
        />
        <span styleName='bag'>
          <span styleName='total-items'>{this.props.size}</span>
        </span>
        Sacola
      </h1>
    )
  }
}

export default connect()(Header)
