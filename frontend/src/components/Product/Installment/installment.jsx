import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import CSSModules from 'react-css-modules'
import styles from './installment.less'
import Price from '../Price/price'

@CSSModules(styles)
export default class Installment extends Component {
  static defaultProps = {
    value: 0,
    installments: 0,
    type: 'simple'
  };

  static propTypes = {
    value: PropTypes.number,
    installments: PropTypes.number,
    type: PropTypes.oneOf(['simple', 'complete'])
  };

  render () {
    const {
      value,
      installments
    } = this.props
    const installmentValue = value / installments
    if (this.props.installments) {
      if (this.props.type === 'simple') {
        return (
          <div>
            <span className="text">ou</span>
            {installments}
            <span className="multiplier">x</span>
            <Price {...{ value: value, type: 'full' }} />
          </div>
        )
      }
      return (
        <div className="installments">
          <span className="text">ou em até</span>
          <span className="value">
            {installments}
          </span>

          <span className="multiplier">x</span>
          <Price {...{ value: installmentValue, type: 'separated' }} />
        </div>
      )
    }
  }
}
