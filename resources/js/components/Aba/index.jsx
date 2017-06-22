import React, {Component, PropTypes} from 'react';
import CSSModules from 'react-css-modules';
import styles from './Aba.scss';

@CSSModules(styles)
class Aba extends Component {
  render () {
    const {abrirCarrinho} = this.props;

    return (
      <div styleName='aba' onMouseOver={abrirCarrinho} />
    );
  }
}

Aba.defaultProps = {
  abrirCarrinho: () => {}
};

Aba.propTypes = {
  abrirCarrinho: PropTypes.func
};

export default Aba;
