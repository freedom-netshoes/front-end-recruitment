import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import CSSModules from 'react-css-modules';
import { productsListLoaded } from '../../actions/action'
import { appSettings } from '../../resources/appSettings'
import styles from './catalog.scss'

@CSSModules(styles)
class Catalog extends Component {
	constructor(props) {
		super(props)
		console.log(props)
	}

	componentDidMount() {
		this.props.productsListLoaded();
	}

	render() {
		return (
			<div className='row center-xs'>
				<section id='products' className='col-xs-12'>
					<ul className='row'>
						{
							this.props.products.map(product => (
								<li {...{
									className: 'col-md-4 col-sm-6 col-xs-12 center-xs', key: product.id
								}}>
									<a {...{ href: 'javascript:void(0);', title: product.title }}>
										<figure>
											<img {...{ src: `images/${product.sku.toString()}.jpg`, alt: product.title }} />
										</figure>
										<h4 className='title'>{product.title}</h4>
										<p styleName={styles.price}>R$ <strong>{product.price}</strong>,90</p>
										<p className='installments'>ou {product.installments} x <strong>R$ {product.price}</strong></p>
									</a>
								</li>
							))
						}
					</ul>
				</section>
			</div>
		);
	}
}

const mapStateToProps = state => ({ products: state.catalog.productsList })
const mapDispatchToProps = dispatch => bindActionCreators({ productsListLoaded }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Catalog)
