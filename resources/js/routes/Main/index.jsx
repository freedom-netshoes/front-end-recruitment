import React, {Component} from 'react';
import Cart from 'Cart';
import Catalog from 'Catalog';
import CSSModules from 'react-css-modules';
import styles from './Main.scss';

@CSSModules(styles)
class Main extends Component {
  render () {
    return (
      <div className='row center-xs'>
        <div styleName='container'>
          <Catalog />
          <Cart />
        </div>
      </div>
    );
  }
}

export default Main;
