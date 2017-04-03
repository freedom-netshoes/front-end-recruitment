import React, {Component, PropTypes} from 'react';
import CSSModules from 'react-css-modules';
import styles from './CartTitle.scss';

@CSSModules(styles)
class CartTitle extends Component {

  static defaultProps = {
    bagSize: 0
  };

  static propTypes = {
    bagSize: PropTypes.number
  };

  render () {
    return (
      <h3 styleName='cart-title'>
        <span styleName='bag'>
          <div styleName='total'>
            {this.props.bagSize}
          </div>
        </span>
        Sacola
      </h3>
    );
  }
}


export default CartTitle;
