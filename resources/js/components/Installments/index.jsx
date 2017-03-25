import React, {Component, PropTypes} from 'react';
import CSSModules from 'react-css-modules';
import styles from './Installments.scss';

@CSSModules(styles)
class Installments extends Component {

  static defaultProps = {

  };

  static propTypes = {

  };

  render () {
    return (
      <p styleName='installments'>ou 3 x <strong>R$ 25,00</strong></p>
    );
  }
}

export default Installments;
