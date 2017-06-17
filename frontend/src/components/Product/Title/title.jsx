import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import CSSModules from 'react-css-modules'

import styles from './title.less'

@CSSModules(styles)
export default class Title extends Component {
 static defaultProps = {
   title: ''
 };

 static propTypes = {
   title: PropTypes.string
 };

 render () {
    return (
      <h3 styleName="title"> {this.props.title}</h3>
    )
  }
}
