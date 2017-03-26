import React, {Component, PropTypes} from 'react';
import CSSModules from 'react-css-modules';
import styles from './Title.scss';

@CSSModules(styles)
class Title extends Component {

  static defaultProps = {
    children: ''
  };

  static propTypes = {
    children: PropTypes.node
  };

  render () {
    return (
      <h4 styleName='title'>
        {this.props.children}
      </h4>
    );
  }
}

export default Title;
