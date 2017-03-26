import React, {Component, PropTypes} from 'react';
import {AddProduct} from 'Actions';
import {FormatPrice, ToSeo} from 'Utils';
import AppConfig from 'AppConfig';
import CSSModules from 'react-css-modules';
import Installments from 'Installments';
import Photo from 'Photo';
import Price from 'Price';
import Title from 'Title';
import Store from 'Store';
import styles from './Catalog.scss';

@CSSModules(styles)
class Catalog extends Component {

  static defaultProps = {
    products: []
  };

  static propTypes = {
    products: PropTypes.array
  };

  render () {
    return (
      <section {...{
        className: 'col-xs-12',
        id: 'products',
        styleName: 'products'
      }}>
        <ul className='row'>
          {this.props.products.map(product => (
            <li {...{
              className: 'col-md-4 col-sm-6 col-xs-12 center-xs',
              key: product.id
            }}>
              <a {...{
                href: 'javascript:void(0);',
                onClick: () => {
                  Store.dispatch(AddProduct(product));
                },
                title: product.title
              }}>
                <Photo {...{
                  attr: {
                    alt: product.title,
                    src: `${AppConfig.dirContent + ToSeo(product.title)}.jpg`
                  }
                }} />
                <Title>
                  {product.title} - {product.description}
                </Title>
                <Price>
                  {product.currencyFormat} <strong>{FormatPrice.getSplit(product.price).int}</strong>,{FormatPrice.getSplit(product.price).float}
                </Price>
                <Installments>
                  ou {product.installments} x <strong>{product.currencyFormat} {FormatPrice.getInstallments(product.installments, product.price)}</strong>
                </Installments>
              </a>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

export default Catalog;
