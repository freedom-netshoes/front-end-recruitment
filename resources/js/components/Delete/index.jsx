import React, {Component, PropTypes} from 'react';
import CSSModules from 'react-css-modules';
import styles from './Delete.scss';

@CSSModules(styles)
class Delete extends Component {

  static defaultProps = {

  };

  static propTypes = {

  };

  render () {
    return (
      <a {...{
        href:'javascript:void(0);',
        className:'ico-cancel33',
        styleName: 'close'
      }} />
    );
  }
}


export default Delete;
