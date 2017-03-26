import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ReduceCart} from 'Utils';
import AppConfig from 'AppConfig';
import Cart from 'Cart';
import Catalog from 'Catalog';
import CSSModules from 'react-css-modules';
import GetProducts from 'Request';
import styles from './Main.scss';

@CSSModules(styles)
class Main extends Component {

  constructor () {
    super();
    this.state = {
      products: []
    };
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

  render () {
    return (
      <div className='row center-xs'>
        <div styleName='container'>
          <Catalog {...{
            ...this.props,
            products: this.state.products
          }} />
          <Cart {...{
            ...this.props
          }} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = function (store) {
  const productsList = store.ProductsCart.productsList;
  return {
    bagSize: productsList.size,
    productsList: productsList,
    reducedList: ReduceCart(productsList)
  };
};

export default connect(mapStateToProps)(Main);
