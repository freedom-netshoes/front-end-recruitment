import React, {Component, PropTypes} from 'react';
import {FormatPrice, ToSeo} from 'Utils';
import AppConfig from 'AppConfig';
import CartTitle from 'CartTitle';
import Delete from 'Delete';
import Installments from 'Installments';
import CSSModules from 'react-css-modules';
import Quantity from 'Quantity';
import Photo from 'Photo';
import Price from 'Price';
import Size from 'Size';
import Submit from 'Submit';
import Subtotal from 'Subtotal';
import Title from 'Title';
import styles from './Cart.scss'

@CSSModules(styles)
class Cart extends Component {

  static defaultProps = {
    bagSize: 0,
    cartClass: '',
    cartMouseLeave: () => {},
    deleteOut: () => {},
    deleteOver: () => {},
    reducedList: [],
    subtotal: null
  };

  static propTypes = {
    bagSize: PropTypes.number,
    cartClass: PropTypes.string,
    cartMouseLeave: PropTypes.func,
    deleteOut: PropTypes.func,
    deleteOver: PropTypes.func,
    reducedList: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object
    ]),
    subtotal: PropTypes.shape({
      currencyFormat: PropTypes.string,
      installments: PropTypes.number,
      price: PropTypes.number
    })
  };

  render () {
    const {
      bagSize,
      cartClass,
      cartMouseLeave,
      deleteOut,
      deleteOver,
      reducedList,
      subtotal
    } = this.props;

    return (
      <aside {...{
        className: cartClass,
        id: 'cart',
        onMouseLeave: cartMouseLeave,
        styleName: 'cart'
      }}>
        <form className="col-xs-12" styleName='form' role="form">
          <CartTitle bagSize={bagSize} />
          <ul>
            {reducedList.map((product, index) => (
              <li {...{
                className: `row middle-xs ${this.props['delete' + index]}`,
                key: `product${index}`,
                styleName: 'cart-row'
              }}>
                <hr />
                <div className='col-xs-12 col-sm-9 start-sm'>
                  <Photo {...{
                    attr: {
                      alt: product.title,
                      src: `${AppConfig.dirContent + ToSeo(product.title)}_thumb.jpg`
                    }
                  }} />
                  <Title>
                    {product.title} {product.description}
                  </Title>
                  <Size>
                    {product.availableSizes.join(' ')} | {product.style}
                  </Size>
                  <Quantity>
                    Quantidade: {product.quantity}
                  </Quantity>
                </div>
                <div className='col-xs-12 col-sm-3 end-xs'>
                  <Delete {...{
                    onMouseOut: () => deleteOut(`delete${index}`),
                    onMouseOver: () => deleteOver(`delete${index}`),
                    product
                  }} />
                  <Price>
                    {product.currencyFormat} <strong>{FormatPrice.getSplit(product.price * product.quantity).int}</strong>,{FormatPrice.getSplit(product.price * product.quantity).float}
                  </Price>
                </div>
              </li>
            ))}
            {subtotal.price ? (
              <li className='row conclude'>
                <hr />
                <Subtotal>Subtotal</Subtotal>
                <div className='col-xs-12 col-sm-6 end-sm'>
                  <Price>
                    R$ <strong>{FormatPrice.getSplit(subtotal.price).int}</strong>,{FormatPrice.getSplit(subtotal.price).float}
                  </Price>
                  {subtotal.installments > 0 ? (
                    <Installments>
                      ou {subtotal.installments} x <strong>{subtotal.currencyFormat} {FormatPrice.getInstallments(subtotal.installments, subtotal.price)}</strong>
                    </Installments>
                  ) : ''}
                </div>
                <Submit />
              </li>
            ) : ''}
          </ul>
        </form>
      </aside>
    );
  }
}

export default Cart;
