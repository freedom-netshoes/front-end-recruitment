import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import CSSModules from 'react-css-modules';

import styles from './cart.scss';


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
      <aside id='cart' className='open'>
        <div className="col-xs-12">
          <h1 className='cart-title'>
            <span className='bag'>
              <div className='total-itens'>3</div>
            </span>
            Sacola
            </h1>
          <ul>
            <li className='row middle-xs delete'>
              <hr />
              <div className='col-sm-8 col-xs-12'>
                <figure>
                  <img src='images/876661122392077_thumb.jpg' alt='Chuteira Nike' />
                </figure>
                <h2 className='title'>Chuteira Nike Mercurial Victory 3 FG - Edição Especial Infantil</h2>
                <p className='size'>GG | Preto e branco</p>
                <p className='quantity'>Quantidade: 2</p>
              </div>
              <div className='col-xs-12 col-sm-3 end-xs'>
                <a href='javascript:void(0);' className='close ico-cancel33' />
                <p className='price'>R$ <strong>149</strong>,90</p>
              </div>
            </li>
            <li className='row middle-xs'>
              <hr />
              <div className='col-sm-8 col-xs-12'>
                <figure>
                  <img src='images/18532669286405342_thumb.jpg' alt='Chuteira Nike' />
                </figure>
                <h2 className='title'>Chuteira Nike Mercurial Victory 3 FG - Edição Especial Infantil</h2>
                <p className='size'>GG | Preto e branco</p>
                <p className='quantity'>Quantidade: 2</p>
              </div>
              <div className='col-xs-12 col-sm-3 end-xs'>
                <a href='javascript:void(0);' className='close ico-cancel33' />
                <p className='price'>R$ <strong>149</strong>,90</p>
              </div>
            </li>
            <li className='row conclude'>
              <hr />
              <p className='subtotal col-xs-12 col-sm-6'>Subtotal</p>
              <div className='col-xs-12 col-sm-6 end-sm'>
                <p className='price'>R$ <strong>379</strong>,70</p>
                <p className='installments'>ou em até 10 X <strong>R$ 37,97</strong></p>
              </div>
              <div className='col-xs-12 btn-buy-container'>
                <button className='btn-buy'>Comprar</button>
              </div>
            </li>
          </ul>
        </div>
      </aside>
    )
  }
}