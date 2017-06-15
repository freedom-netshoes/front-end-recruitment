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
		title: ""
	};

	static propTypes = {
		sku: PropTypes.string,
		title: PropTypes.string
	};

	render() {
		const {
      title,
			sku
    } = this.props;
		return (
			<figure {...{styleName: 'photo'}}  >
				<img {... { src: `images/${sku}.jpg`, alt: title } } />
			</figure>
		)
	}
}