import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import { PropTypes } from 'prop-types';
import styles from './image.less'

@CSSModules(styles)
export default class Image extends Component {
	constructor(props) {
		super(props)
	}
	static defaultProps = {
		sku: "",
		title: "",
		isThumb: false
	};

	static propTypes = {
		sku: PropTypes.string,
		title: PropTypes.string,
		isThumb: PropTypes.bool
	};

	render() {
		const {
      title,
			sku
    } = this.props;
		if (!this.props.isThumb) {
			return (
				<figure {...{ styleName: 'photo' }}  >
					<img {... { src: `images/${sku}.jpg`, alt: title } } />
				</figure>
			)
		}
		return (
				<figure {...{ styleName: 'photo' }}  >
					<img {... { src: `images/${sku}_thumb.jpg`, alt: title } } />
				</figure>
			)

	}
}