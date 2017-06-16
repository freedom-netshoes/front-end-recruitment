import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ReduceList } from '../../resources/helpers'

import CSSModules from 'react-css-modules';
import Header from './Header/header'
import BagItem from './BagItem/bag-item'
import styles from './cart.less';


@CSSModules(styles)
class Cart extends Component {
  constructor(props) {
    super(props)
  }
  componentWillReceiveProps(nextProps) {
    try {
      this.setState({
        bagItems: ReduceList(nextProps.fullBag),
        totalItems: nextProps.fullBag.length
      })
    }
    catch (e) {
      //
    }
  }

  render() {
    return (
      <aside id="cart-shop" className="open col-xs-12">
        <div className="col-xs-12">
          <Header {...{ size: this.props.totalItems }} />
          <ul>
            {
              this.props.bagItems.map(product =>

                <BagItem {...{ product: product, key: product.id }} />


              )
            }
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
const mapStateToProps = state => {
  console.log("MAP STATE")
  const totalItems = state.shopCart || []
  const bagItems = ReduceList(state.shopCart)
  const total = totalItems.length
  return {
    fullBag: totalItems,
    bagItems: bagItems,
    totalItems: total
  }

}
export default connect(mapStateToProps)(Cart)