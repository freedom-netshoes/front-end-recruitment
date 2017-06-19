import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addProductCart, toggleCart } from '../../actions/action'
import { WebConfig } from '../../resources/appSettings'
import CSSModules from 'react-css-modules'
import axios from 'axios'

import styles from './catalog.less'

import Product from '../Product/product'

@CSSModules(styles)
class Catalog extends Component {
  constructor (props) {
    super(props)
    this.state = {
      products: []
    }
  }

  componentDidMount () {
    this.loadItems()
  }

  loadItems = () => {
    axios.get(WebConfig.apiProductUrl).then(res => this.setState({ ...this.state, products: res.data }))
  }

  render () {
    return (
      <div className='row center-xs' styleName={this.props.cartState ? 'fixed' : ''}>
        <section id='products' className='col-xs-7'>
          <ul className='row'>
            {
              this.state.products.map(product =>
                <li {...{
                  onClick: () => {
                    this.props.dispatch(addProductCart(product))
                    this.props.dispatch(toggleCart(true))
                  },
                  className: 'col-md-4 col-sm-6 col-xs-12',
                  styleName: 'row',
                  key: product.id
                }}>
                  <Product {...{ ...product }} />
                </li>
              )
            }
          </ul>
        </section>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    cartState: state.cartState
  }
}
export default connect(mapStateToProps)(Catalog)
