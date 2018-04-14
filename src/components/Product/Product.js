import React, { Component } from 'react'
import PropTypes from 'prop-types'
import imgProductDefault from './assets/img/img_1.jpg'

class Product extends Component {
    handleClick = () => {
        const { id, addToCart, removeFromCart, isInCart} = this.props;

        if (!isInCart) {
            addToCart(id);
        } else {
            removeFromCart(id);
        }
    }
    menuOpen = (e) => {
        e.stopPropagation()
        let wrapper = document.querySelector('.wrapper')
        this.handleClick()
        if (!wrapper.classList.contains('show-menu')) {
            wrapper.classList.add('show-menu');
        }
    }
    splitPrice = (valor) => {
        var decPart = (valor + "").split(".")[0];
        return decPart
    }
    splitDecimals = (valor) => {
        var decPart = (valor + "").split(".")[1];
        return decPart
    }
    returnPriceWithInstallments = (price, installments) => {
        var num = price / installments
        if (installments) {
            var n = num.toFixed(2);
            return n
        } else {
            return price
        }

    }

    render() {
        const { title, id, price, installments, currencyFormat } = this.props;

        return (
            <div onClick={this.menuOpen} key={id}>
                <a className="i card-link" title={title}>
                    <img src={imgProductDefault} alt={title} />
                </a>
                <div className="title">
                    <a className="n card-link">
                        <span>{title}</span>
                    </a>
                </div>
                <div className="price">
                    <a className="card-link">
                        <span className="full-mounted-price">
                            <span>
                                <small>{currencyFormat}</small>{this.splitPrice(price)},<small>{this.splitDecimals(price)}</small>
                            </span>
                        </span>
                    </a>
                </div>
                <a className="in parceling">ou {installments} x de {currencyFormat} {this.returnPriceWithInstallments(price,installments)}</a>
            </div>
        );
    }
}

Product.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number,
    currencyFormat: PropTypes.string,
    image: PropTypes.string,
    isInCart: PropTypes.bool.isRequired,
    addToCart: PropTypes.func.isRequired,
    removeFromCart: PropTypes.func.isRequired,
}

export default Product;
