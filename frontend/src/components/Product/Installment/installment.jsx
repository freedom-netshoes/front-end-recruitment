import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { InstallmentsFormat } from '../../../resources/helpers'
import CSSModules from 'react-css-modules'
import styles from './installment.less'

@CSSModules(styles)
export default class Installment extends Component {
 static defaultProps = {
   price: 0,
   installments: 0
 };

 static propTypes = {
   price: PropTypes.number,
   installments: PropTypes.number
 };

 render () {
    const {
      price,
      installments
    } = this.props

    if (this.props.installments) {
      return <p styleName="installments" > ou {installments}
				x < strong >{InstallmentsFormat(price, installments)} </strong></p>
    }
    return <p styleName="installments"> à vista </p>
  }
}
