import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { productsListLoaded } from '../../actions/action'
import { appSettings } from '../../resources/appSettings'

import Product from '../Product/product'

class Catalog extends Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		this.props.productsListLoaded();
	}

	render() {
		return (
			<div className='row center-xs'>
				<section id='products' className='col-xs-7'>
					<ul className='row'>
						{
							this.props.products.map(product => (
								<li {...{
									className: 'col-md-4 col-sm-6 col-xs-12 center-xs', key: product.id
								}}>
								<Product {...{...product}} />
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
