import React, {Component, PropTypes} from 'react';
import CSSModules from 'react-css-modules';
import styles from './Size.scss';

@CSSModules(styles)
class Size extends Component {

  static defaultProps = {
    children: ''
  };

  static propTypes = {
    children: PropTypes.node
  };

  render () {
    return (
      <p styleName='size'>
        {this.props.children}
      </p>
    );
  }
}

export default Size;
