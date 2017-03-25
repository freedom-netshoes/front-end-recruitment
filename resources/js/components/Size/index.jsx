import React, {Component, PropTypes} from 'react';
import CSSModules from 'react-css-modules';
import styles from './Size.scss';

@CSSModules(styles)
class Size extends Component {

  static defaultProps = {

  };

  static propTypes = {

  };

  render () {
    return (
      <p styleName='size'>GG | Preto e branco</p>
    );
  }
}

export default Size;
