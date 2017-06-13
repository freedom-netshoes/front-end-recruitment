import React, { Component } from 'react';
import Catalog from '../components/Catalog/catalog'
import Cart from '../components/Cart/cart'

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
      return (
        <div className='row center-xs'>
        <div>
          <Catalog />
          <Cart />
        </div>
      </div>
      )
    }
}