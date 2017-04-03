import React, {Component, PropTypes} from 'react';
import {DelProduct} from 'Actions';
import CSSModules from 'react-css-modules';
import Store from 'Store';
import styles from './Delete.scss';

@CSSModules(styles)
class Delete extends Component {

  static defaultProps = {
    onMouseOut: () => {},
    onMouseOver: () => {}
  };

  static propTypes = {
    onMouseOut: PropTypes.func,
    onMouseOver: PropTypes.func,
    product: PropTypes.object.isRequired
  };

  render () {
    return (
      <a {...{
        href:'javascript:void(0);',
        className:'ico-cancel33',
        onClick: () => {
          Store.dispatch(DelProduct(this.props.product));
          this.props.onMouseOut();
        },
        onMouseOut: this.props.onMouseOut,
        onMouseOver: this.props.onMouseOver,
        styleName: 'close'
      }} />
    );
  }
}


export default Delete;
