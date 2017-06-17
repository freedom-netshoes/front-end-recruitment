import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import CSSModules from 'react-css-modules'

import styles from './quantity.less'

@CSSModules(styles)
export default class Quantity extends Component {
 static defaultProps = {
   quantity: 0
 };

 static propTypes = {
   quantity: PropTypes.number
 };

 render () {
    return (
      <p styleName="quantity">Quantidade: {this.props.quantity}</p>
    )
  }
}
