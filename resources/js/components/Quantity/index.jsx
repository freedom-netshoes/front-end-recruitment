import React, {Component, PropTypes} from 'react';
import CSSModules from 'react-css-modules';
import styles from './Quantity';

@CSSModules(styles)
class Quantity extends Component {

  static defaultProps = {
    children: ''
  };

  static propTypes = {
    children: PropTypes.node
  };

  render () {
    return (
      <p styleName='quantity'>
        {this.props.children}
      </p>
    );
  }
}

export default Quantity;
