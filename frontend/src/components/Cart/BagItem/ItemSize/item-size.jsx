import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import CSSModules from 'react-css-modules'

import styles from './item-size.less'

@CSSModules(styles)
export default class ItemSize extends Component {
  static defaultProps = {
    sizes: ''
  };

  static propTypes = {
    sizes: PropTypes.string
  };

  render () {
    return (
      <p styleName="size">{this.props.sizes}</p>
    )
  }
}
