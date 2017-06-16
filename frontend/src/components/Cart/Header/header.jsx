import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import CSSModules from 'react-css-modules';

import styles from './header.less';


@CSSModules(styles)
export default class Header extends Component {
	constructor(props) {
		super(props)
	}
	static defaultProps = {
		size: 0
	};

	static propTypes = {
		size: PropTypes.number
	};

	render() {
		return (
			<h1 styleName="cart-title">
				<span styleName="close"></span>
				<span styleName="bag">
					<div styleName="total-items">{this.props.size}</div>
				</span>
				Sacola
      </h1>
		)
	}
}