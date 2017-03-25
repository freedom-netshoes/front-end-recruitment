import React, {Component, PropTypes} from 'react';
import CSSModules from 'react-css-modules';
import styles from './Photo.scss';

@CSSModules(styles)
class Photo extends Component {

  static defaultProps = {

  };

  static propTypes = {

  };

  render () {
    return (
      <figure styleName='photo'>
        <img src='img/calcao-nike-corinthians.jpg' alt='Chuteira Nike' />
      </figure>
    );
  }
}

export default Photo;
