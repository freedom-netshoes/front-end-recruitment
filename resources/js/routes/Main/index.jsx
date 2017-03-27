import React, {Component} from 'react';
import {connect} from 'react-redux';
import {CalcTotal, ReduceCart, TotalCurrAndInstallm} from 'Utils';
import AppConfig from 'AppConfig';
import Cart from 'Cart';
import Catalog from 'Catalog';
import CSSModules from 'react-css-modules';
import GetProducts from 'Request';
import styles from './Main.scss';

@CSSModules(styles)
class Main extends Component {

  constructor (props) {
    super(props);
    this.state = {
      cartClass: props.params.param === 'cart' ? 'open' : '',
      products: []
    };

    this.cartClose = this.cartClose.bind(this);
    this.cartMouseMove = this.cartMouseMove.bind(this);
    this.cartOpen = this.cartOpen.bind(this);
    this.deleteOut = this.deleteOut.bind(this);
    this.deleteOver = this.deleteOver.bind(this);
  }

  componentDidMount () {
    this.getProducts();
  }

  async getProducts () {
    await GetProducts(AppConfig.productsAPI)
      .then(result => {
        console.log('result', result);
        this.setState({
          products: result.response.products
        })

      }).catch(result => {
        console.log(result.message);
      });
  }

  cartClose () {
    this.setState({
      cartClass: ''
    });
  }

  cartMouseMove (e) {
    const $products = document.querySelector('#products');
    const coord = $products.getBoundingClientRect();
    const tempX = -(e.clientX - coord.left - $products.offsetWidth);
    if (tempX <=  AppConfig.cartArea) {
      this.cartOpen();
    }
  }

  cartOpen () {
    this.setState({
      cartClass: 'open'
    });
  }

  deleteOut (state) {
    this.setState({
      [state]: ''
    });
  }

  deleteOver (state) {
    this.setState({
      [state]: 'delete'
    });
  }

  render () {
    return (
      <div className='row center-xs'>
        <div styleName='container'>
          <Catalog {...{
            ...this.props,
            cartMouseMove: this.cartMouseMove,
            cartOpen: this.cartOpen,
            products: this.state.products
          }} />
          <Cart {...{
            ...this.props,
            ...this.state,
            cartMouseLeave: this.cartClose,
            deleteOut: this.deleteOut,
            deleteOver: this.deleteOver
          }} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = function (store) {
  const productsList = store.ProductsCart.productsList;
  const reduceCart = ReduceCart(productsList);
  return {
    bagSize: productsList.size,
    reducedList: reduceCart,
    subtotal: CalcTotal(reduceCart)
  };
};

export default connect(mapStateToProps)(Main);
