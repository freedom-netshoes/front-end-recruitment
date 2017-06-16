import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux'
import CSSModules from 'react-css-modules';
import Image from '../../Product/Image/image'
import Quantity from './Quantity/quantity'
import { removeProductCart } from '../../../actions/action'

import styles from './bag-item.less';

@CSSModules(styles)
class BagItem extends Component {
	constructor(props) {
		super(props)
	}
	static defaultProps = {
		product: {}
	};

	static propTypes = {
		product: PropTypes.object
	};

	render() {
		return (
			<li className="row middle-xs delete">
				<hr />
				<div className="col-sm-9 col-xs-12">
					<Image {...{ ...this.props.product, isThumb: true }} />
					<h2 styleName="title">Chuteira Nike Mercurial Victory 3 FG - Edição Especial Infantil</h2>
					<p styleName="size">GG | Preto e branco</p>
					<Quantity {...{ ...this.props.product}} />
				</div>
				<div className="col-xs-12 col-sm-3 end-xs" styleName="adjust-end-xs">
					<span {...{
						onClick: () => {
							this.props.dispatch(removeProductCart(this.props.product))
						},
						styleName: "close"
					}}></span>
					<p className="price">R$ <strong>149</strong>,90</p>
				</div>
			</li>
		)
	}
}

export default connect()(BagItem)