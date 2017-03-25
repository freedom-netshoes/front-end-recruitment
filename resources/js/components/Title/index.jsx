import React, {Component, PropTypes} from 'react';
import CSSModules from 'react-css-modules';
import styles from './Title.scss';

@CSSModules(styles)
class Title extends Component {

  static defaultProps = {

  };

  static propTypes = {

  };

  render () {
    return (
      <h4 styleName='title'>Chuteira Nike Mercurial Victory 3 FG - Edição Especial Infantil</h4>
    );
  }
}

export default Title;
