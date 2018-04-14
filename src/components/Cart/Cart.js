import React from 'react';
import PropTypes from 'prop-types';
import BagImage from './assets/img/icon_bag.png'
import CartItem from './CartItem';

const splitPrice = (valor) => {
    var inteiro = valor.toFixed(2).split('.')[0];
    var decimal = valor.toFixed(2).split('.')[1];
    return `${inteiro},${decimal}`;
}


const returnPriceWithInstallments = (price, installments) => {
    var num = price / installments
    if (installments) {
        var n = num.toFixed(2);
        return n
    } else {
        return price
    }

}

const Cart = ({ items, total, currencyFormat, removeFromCart, addQuantity }) => {
    return (
        
        <div className="bag">
            <div className="icon_title">
                <span className="icon_bag">
                    <img src={BagImage} alt="Sacola" />
                    <span className="qty">{items.length}</span>
                </span>
                <span className="txt">Sacola</span>
            </div>
            <div className="cart_items">
                {
                    items.map(item => (<CartItem key={item.id} {...item} onClick={() => removeFromCart(item.id)} />))
                }
            </div>

            <div className="subtotal">
                <div className="txt">Subtotal</div>
                <div className="price">
                    <div className="value">{currencyFormat} <b>{splitPrice(total)}</b></div>
                    <div className="parceling">ou em até 10 X R$ {returnPriceWithInstallments(total,10)}</div>
                </div>
            </div>
            <div className="btn_buy">
                <button>comprar</button>
            </div>
        </div>
    );
}

Cart.propTypes = {
    items: PropTypes.array,
    total: PropTypes.number,
    currencyFormat: PropTypes.string,
    removeFromCart: PropTypes.func.isRequired
}

export default Cart;
