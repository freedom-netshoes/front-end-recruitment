import React, {Component, PropTypes} from 'react';
import CSSModules from 'react-css-modules';
import styles from './Submit.scss';

@CSSModules(styles)
class Submit extends Component {

  static defaultProps = {

  };

  static propTypes = {

  };

  render () {
    return (
      <div className='col-xs-12' styleName='btn-buy-container'>
        <input type='submit' styleName='btn-buy' value='Comprar' />
      </div>
    );
  }
}

export default Submit;
