import React, {Component, PropTypes} from 'react';
import CSSModules from 'react-css-modules';
import styles from './Price.scss'

@CSSModules(styles)
class Price extends Component {

  static defaultProps = {
    children: ''
  };

  static propTypes = {
    children: PropTypes.node
  };

  render () {
    return (
      <p styleName='price'>
        {this.props.children}
      </p>
    );
  }
}

export default Price;
