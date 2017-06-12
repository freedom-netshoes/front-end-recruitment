import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { InstallmentsFormat } from '../../../resources/helpers.js'
import CSSModules from 'react-css-modules';
import styles from './installments.scss';

@CSSModules(styles)
export default class Installment extends Component {
	constructor(props) {
		super(props)
	}
	static defaultProps = {
		price: 0,
		installments: 0
	};

	static propTypes = {
		price: PropTypes.number,
		installments: PropTypes.number,
	};

	render() {
		const {
            price,
			installments,
        } = this.props;

		if (!!this.props.installments) {
			return <p styleName='installments' > ou {installments}
				x < strong >{InstallmentsFormat(price, installments)} </strong></p>
		}
		return <p styleName='installments'> à vista </p>
	}
}