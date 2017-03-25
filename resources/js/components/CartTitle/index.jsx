import React, {Component, PropTypes} from 'react';
import CSSModules from 'react-css-modules';
import styles from './CartTitle.scss';

@CSSModules(styles)
class CartTitle extends Component {

  static defaultProps = {

  };

  static propTypes = {

  };

  render () {
    return (
      <h3 styleName='cart-title'>
        <span styleName='bag'>
          <div styleName='total'>3</div>
        </span>
        Sacola
      </h3>
    );
  }
}


export default CartTitle;
