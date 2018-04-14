import React from 'react';
import PropTypes from 'prop-types';
import Product from '../../containers/Product';



const ProductList = ({ products }) => {
    return (
        <div className="item-list">
            {products.map(product => (
                <div className="item" key={product.id}>
                    <Product {...product} />
                </div>
            ))}
        </div>
    );
}

ProductList.propTypes = {
    products: PropTypes.array,
}

export default ProductList;
