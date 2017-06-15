import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import CSSModules from 'react-css-modules';
import Header from './Header/header'
import BagItem from './BagItem/bag-item'
import styles from './cart.less';


@CSSModules(styles)
export default class Cart extends Component {
  constructor(props) {
    super(props)
  }
  static defaultProps = {
    price: 0
  };

  static propTypes = {
    price: PropTypes.number
  };

  render() {
    return (
      <aside id="cart" className="open col-xs-12">
        <div className="col-xs-12">
          <Header />
          <ul>
          <BagItem />
          <BagItem />

            <li className="row complete-purchase">
              <hr />
              <p className="subtotal col-xs-12 col-sm-6">Subtotal</p>
              <div className="col-xs-12 col-sm-6 end-sm">
                <p className="price">R$ <strong>379</strong>,70</p>
                <p className="installments">ou em até 10 X <strong>R$ 37,97</strong></p>
              </div>
              <div className="col-xs-12 btn-buy-container">
                <button className="btn-buy">Comprar</button>
              </div>
            </li>
          </ul>

        </div>
      </aside>
    )
  }
}