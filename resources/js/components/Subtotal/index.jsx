import React, {Component, PropTypes} from 'react';
import CSSModules from 'react-css-modules';
import styles from './Subtotal.scss';

@CSSModules(styles)
class Subtotal extends Component {

  static defaultProps = {

  };

  static propTypes = {

  };

  render () {
    return (
      <p className='col-xs-12 col-sm-6 start-sm' styleName='subtotal'>Subtotal</p>
    );
  }
}

export default Subtotal;
