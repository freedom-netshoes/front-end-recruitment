import React, {Component, PropTypes} from 'react';
import CSSModules from 'react-css-modules';
import styles from './Quantity';

@CSSModules(styles)
class Quantity extends Component {

  static defaultProps = {

  };

  static propTypes = {

  };

  render () {
    return (
      <p styleName='quantity'>Quantidade: 2</p>
    );
  }
}

export default Quantity;
