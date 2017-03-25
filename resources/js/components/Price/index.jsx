import React, {Component, PropTypes} from 'react';
import CSSModules from 'react-css-modules';
import styles from './Price.scss'

@CSSModules(styles)
class Price extends Component {

  static defaultProps = {

  };

  static propTypes = {

  };

  render () {
    return (
      <p styleName='price'>R$ <strong>149</strong>,90</p>
    );
  }
}

export default Price;
