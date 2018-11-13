import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchProducts } from '../../services/products/actions';

import Product from './Product';
import ShelfHeader from './Header';
import Clearfix from '../Clearfix';
import Spinner from '../Spinner';

import './style.scss';

class Shelf extends Component {
  state = {
    loading: false,
  }

  componentWillMount() {
    const { sort } = this.props;

    this.handleFetchProducts(sort);
  }

  componentWillReceiveProps(nextProps) {
    const { sort: nextSort } = nextProps;

    if (nextSort !== this.props.sort) {
      this.handleFetchProducts(nextSort);
    }
  }

  handleFetchProducts = (sort) => {
    this.setState({ loading: true });
    this.props.fetchProducts(sort, () => {
      this.setState({ loading: false });
    });
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
        {this.state.loading &&
          <Spinner />
        }
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
  sort: PropTypes.string,
}

const mapStateToProps = state => ({
  products: state.products.products,
  sort: state.sort.type,
})

export default connect(mapStateToProps, { fetchProducts })(Shelf);
