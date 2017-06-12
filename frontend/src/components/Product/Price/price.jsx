import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import CSSModules from 'react-css-modules';
import styles from './price.scss';

@CSSModules(styles)
export default class Price extends Component {
	constructor(props) {
		super(props)
	}
	static defaultProps = {
		price: 0
	};

	static propTypes = {
		price: PropTypes.number
	};

	render() {
		return <p styleName='price'> R$ <strong> {this.props.price} </strong></p>

	}
}