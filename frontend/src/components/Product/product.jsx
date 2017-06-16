import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import {addProductCart} from '../../actions/action'

import Installments from './installment/installment'
import Price from './Price/price'
import Image from './Image/image'
import Title from './Title/title'
import styles from './product.less'

@CSSModules(styles)
export default class Product extends Component {
  constructor(props) {
    super(props)
  }
  static defaultProps = {
    title: "",
    sku: "",
    products: [],
    price: 0,
    installments: 0
  };

  static propTypes = {
    title: PropTypes.string,
    sku: PropTypes.string,
    products: PropTypes.array,
    price: PropTypes.number,
    installments: PropTypes.number,
  };

  render() {
    const {
      title,
      sku,
      products,
      price,
      installments,
    } = this.props;

    return <div {... { title: title, styleName: 'product' } } >
      <Image { ...this.props } />
      <Title {...this.props}/>
      <Price { ...this.props } />
      <Installments { ...this.props } />
    </div>
  }
}