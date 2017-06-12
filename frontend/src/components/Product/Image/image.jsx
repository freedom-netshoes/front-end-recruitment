import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

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
			<figure>
				<img {... { src: `images/${sku}.jpg`, alt: title } } />
			</figure>
		)
	}
}