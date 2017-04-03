import React, {Component, PropTypes} from 'react';
import CSSModules from 'react-css-modules';
import styles from './Installments.scss';

@CSSModules(styles)
class Installments extends Component {

  static defaultProps = {
    children: ''
  };

  static propTypes = {
    children: PropTypes.node
  };

  render () {
    return (
      <p styleName='installments'>
        {this.props.children}
      </p>
    );
  }
}

export default Installments;
