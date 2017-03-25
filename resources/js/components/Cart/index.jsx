import React, {Component, PropTypes} from 'react';
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

  };

  static propTypes = {

  };

  render () {
    return (
      <aside {...{
        className: 'open',
        id: 'cart',
        styleName: 'cart'
      }}>
        <form className="col-xs-12" styleName='form' role="form">
          <CartTitle />
          <ul>
            <li className='row middle-xs delete' styleName='cart-row'>
              <hr />
              <div className='col-xs-12 col-sm-9 start-sm'>
                <Photo />
                <Title />
                <Size />
                <Quantity />
              </div>
              <div className='col-xs-12 col-sm-3 end-xs'>
                <Delete />
                <Price />
              </div>
            </li>
            <li className='row middle-xs' styleName='cart-row'>
              <hr />
              <div className='col-xs-12 col-sm-9 start-sm'>
                <Photo />
                <Title />
                <Size />
                <Quantity />
              </div>
              <div className='col-xs-12 col-sm-3 end-xs'>
                <Delete />
                <Price />
              </div>
            </li>
            <li className='row conclude'>
              <hr />
              <Subtotal />
              <div className='col-xs-12 col-sm-6 end-sm'>
                <Price />
                <Installments />
              </div>
              <Submit />
            </li>
          </ul>
        </form>
      </aside>
    );
  }
}

export default Cart;
