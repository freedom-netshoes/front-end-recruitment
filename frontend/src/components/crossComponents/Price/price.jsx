import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { PriceFormat } from '../../../resources/helpers.jsx'
import CSSModules from 'react-css-modules'

import styles from './price.less'

@CSSModules(styles)
export default class Price extends Component {
  static defaultProps = {
    value: 0,
    type: 'full'
  };

  static propTypes = {
    value: PropTypes.number,
    type: PropTypes.oneOf(['full', 'separated'])
  };

  render () {
    const priceFormatted = PriceFormat(this.props.value)
    if (this.props.type === 'separated') {
      return (
        <span className='price'>
          <span className='price-symbol'>{priceFormatted.currencySymbol}</span>
          <span className='price-integer'>{priceFormatted.integer}</span>
          <span className='price-separator'>{priceFormatted.decimalSeparator}</span>
          <span className='price-decimal'>{priceFormatted.decimal}</span>
        </span>
      )
    }
    return (
      <span className='price'>
        {priceFormatted.toStringPrice}
      </span>
    )
  }
}
