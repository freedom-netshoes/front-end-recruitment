import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import CSSModules from 'react-css-modules'

import styles from './button-dismiss.less'

@CSSModules(styles)
export default class ButtonDismiss extends Component {
  static defaultProps = {
    clickButton: null,
    mouseEnter: null,
    mouseLeave: null,
    extraCssClass: ''
  };

  static propTypes = {
    clickButton: PropTypes.func,
    mouseEnter: PropTypes.func,
    mouseLeave: PropTypes.func,
    extraCssClass: PropTypes.string
  };

  render () {
    return (
      <span {...{
        onClick: this.props.clickButton,
        onMouseEnter: this.props.mouseEnter,
        onMouseLeave: this.props.mouseLeave,
        className: `button ${this.props.extraCssClass}`
      }} />
    )
  }
}
