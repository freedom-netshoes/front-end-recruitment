import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import { PropTypes } from 'prop-types'
import Installments from '../crossComponents/Installments/installments'
import Price from '../crossComponents/Price/price'
import Image from '../crossComponents/Image/image'
import Title from '../crossComponents/Title/title'
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
      price,
      installments
    } = this.props

    return <div {... { title: title, styleName: 'product' }} >
      <Image {...{ sku: sku, title: title }} />
      <Title {...{ title: title }} />
      <div styleName='container'>
        <Price {...{ value: price, type: 'separated' }} />
        <Installments {...{ value: price, installments: installments }} />
      </div>
    </div>
  }
}
