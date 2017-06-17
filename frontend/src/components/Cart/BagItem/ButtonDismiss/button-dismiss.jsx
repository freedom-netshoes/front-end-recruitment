import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import CSSModules from 'react-css-modules'

import styles from './button-dismiss.less'

@CSSModules(styles)
export default class ButtonDismiss extends Component {
  static defaultProps = {
    clickButton: null
  };

  static propTypes = {
    clickButton: PropTypes.func
  };

  render () {
    return (
      <span {...{
        onClick: this.props.clickButton,
        className: 'button'
      }}></span>
    )
  }
}
