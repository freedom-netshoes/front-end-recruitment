import React from 'react';
import PropTypes from 'prop-types';
import ImgItemDefault from './assets/img/img_bag_1.jpg'

const hoverClose = (e) => {
    e.target.parentNode.parentNode.classList.add('remove-product')
}

const houtClose = (e) => {
    e.target.parentNode.parentNode.classList.remove('remove-product')
}


const CartItem = ({ title, price, style, availableSizes, currencyFormat, installments, returnPriceWithInstallments,  onClick }) => {
    return (
        <div className="item_bag">
            <div className="i">
                <img src={ImgItemDefault} alt={title} />
            </div>
            <div className="p">
                <div className="title">{title}</div>
                
                <span className="size">{availableSizes.map((availableSize, index, array) => (array.length - 1 === index ? `${availableSize} ` : `${availableSize}, `))}|</span>
                <span className="color">{style}</span>
                <div className="qty">Quantidade:
                    <span className="value">1</span>
                </div>
            </div>
            <div className="x">
                <span onClick={onClick} onMouseOver={hoverClose} onMouseOut={houtClose} className="btn"></span>
                <span className="value">{currencyFormat} <b>{price}</b></span>
            </div>
        </div>
    );
}

CartItem.propTypes = {
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    currencyFormat: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}

export default CartItem;
