import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchProducts } from '../../services/products/actions';

import Product from './Product';
import ShelfHeader from './Header';
import Clearfix from '../Clearfix';

import './style.scss';

class Shelf extends Component {

  componentWillMount() {
    this.handleFetchProducts();
  }

  handleFetchProducts = () => {
    this.props.fetchProducts();
  }

  render() {
    const { products } = this.props;

    const p = products.map(p => {
      return (
        <Product
          product={p}
          key={p.id}
        />
      );
    });

    return (
      <React.Fragment>
        <div className="shelf-container">
          <ShelfHeader productsLength={products.length}/>
          {p}
          <Clearfix />
        </div>
        <Clearfix />
      </React.Fragment>
    )
  }
}

Shelf.propTypes = {
  fetchProducts: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
  products: state.products.products,
})

export default connect(mapStateToProps, { fetchProducts })(Shelf);
