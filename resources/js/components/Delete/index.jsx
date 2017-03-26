import React, {Component, PropTypes} from 'react';
import {DelProduct} from 'Actions';
import CSSModules from 'react-css-modules';
import Store from 'Store';
import styles from './Delete.scss';

@CSSModules(styles)
class Delete extends Component {

  static propTypes = {
    product: PropTypes.object.isRequired
  };

  render () {
    return (
      <a {...{
        href:'javascript:void(0);',
        className:'ico-cancel33',
        onClick: () => Store.dispatch(DelProduct(this.props.product)),
        styleName: 'close'
      }} />
    );
  }
}


export default Delete;
