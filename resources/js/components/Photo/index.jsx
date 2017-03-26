import React, {Component, PropTypes} from 'react';
import CSSModules from 'react-css-modules';
import styles from './Photo.scss';

@CSSModules(styles)
class Photo extends Component {

  static propTypes = {
    attr: PropTypes.shape({
      alt: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired
    })
  };

  render () {
    return (
      <figure styleName='photo'>
        <img {...this.props.attr} />
      </figure>
    );
  }
}

export default Photo;
