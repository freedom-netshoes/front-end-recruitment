import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import { PropTypes } from 'prop-types'
import styles from './image.less'
import { appSettings } from '../../../resources/appSettings'

@CSSModules(styles)
export default class Image extends Component {
  static defaultProps = {
    sku: '',
    title: '',
    isThumb: false
  };

  static propTypes = {
    sku: PropTypes.string,
    title: PropTypes.string,
    isThumb: PropTypes.bool
  };

  render () {
    const {
      title,
      sku
    } = this.props
    const partialUrl = `${appSettings.imgUrl}${sku}`
    if (!this.props.isThumb) {
      return (
        <figure {...{ className: 'photo' }} >
          <img {... { src: `${partialUrl}.jpg`, alt: title } } />
        </figure>
      )
    }
    return (
      <figure {...{ className: 'photo' }} >
        <img {... { src: `${partialUrl}_thumb.jpg`, alt: title } } />
      </figure>
    )
  }
}
