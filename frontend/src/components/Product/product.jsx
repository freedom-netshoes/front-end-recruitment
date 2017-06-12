import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import { PropTypes } from 'prop-types';
import styles from './product.scss'
import Installments from './installments'

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
    //console.log(this.props)
    const {
      title,
      sku,
      products,
      price,
      installments,
    } = this.props;

    return (<div {... { href: 'javascript:void(0);', title: this.props.title, styleName: styles.product } } >
      <figure>
        <img {... { src: `images/${this.props.sku}.jpg`, alt: this.props.title } } />
      </figure>
      <h3 styleName='title'> {this.props.title}</h3>
      <p styleName='price' > R$ < strong > {this.props.price} </strong></p>
      <Installments { ...this.props } />
    </div>
    );
  }
}