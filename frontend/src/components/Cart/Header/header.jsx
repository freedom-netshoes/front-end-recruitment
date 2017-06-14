import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import CSSModules from 'react-css-modules';

import styles from './header.scss';


@CSSModules(styles)
export default class Header extends Component {
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
		return (
			<h1 styleName='cart-title'>
				<span styleName='bag'>
					<div styleName='total-items'>3</div>
				</span>
				Sacola
      </h1>
		)
	}
}