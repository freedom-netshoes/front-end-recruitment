import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import CSSModules from 'react-css-modules'
import Price from '../../crossComponents/Price/price'
import Installments from '../../crossComponents/Installments/installments'
import styles from './sub-total.less'

@CSSModules(styles)
export default class SubTotal extends Component {
  static defaultProps = {
    priceTotal: 0,
    maxInstallment: 0
  };

  static propTypes = {
    priceTotal: PropTypes.number,
    maxInstallment: PropTypes.number
  };

  render () {
    return (
      <div className="row sub-total">
        <p className="col-xs-12 col-sm-6 start-sm" styleName="subtotal">Subtotal</p>
        <div className="col-xs-12 col-sm-6 end-sm">
          <div className="subtotal-price">
            <Price {...{
              value: this.props.priceTotal,
              type: 'separated'
            }} />
          </div>
          <div className="subtotal-installments">
            <Installments {...{
              value: this.props.priceTotal,
              installments: this.props.maxInstallment,
              type: 'complete'
            }} />
          </div>
        </div>
        <div className="col-xs-12" styleName="btn-buy-container">
          <button styleName="btn-buy">Comprar</button>
        </div>
      </div>
    )
  }
}
