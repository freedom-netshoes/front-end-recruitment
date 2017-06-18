import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { addProductCart } from '../../actions/action'

import Installment from './installment/installment'
import Price from './Price/price'
import Image from './Image/image'
import Title from './Title/title'
import styles from './product.less'

@CSSModules(styles)
export default class Product extends Component {
  static defaultProps = {
    title: '',
    sku: '',
    products: [],
    price: 0,
    installments: 0
  };

  static propTypes = {
    title: PropTypes.string,
    sku: PropTypes.string,
    products: PropTypes.array,
    price: PropTypes.number,
    installments: PropTypes.number
  };

  render () {
    const {
      title,
      sku,
      products,
      price,
      installments
    } = this.props

    return <div {... { title: title, styleName: 'product' } } >
      <Image {...{sku: sku, title: title}} />
      <Title {...{title: title}} />
      <Price {...{price: price, type: 'full'}} />
      <Installment {...{price: price, installments: installments}}/>
    </div>
  }
}
