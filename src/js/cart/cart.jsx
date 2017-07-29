import React, {Component} from 'react';
import List from './list'
import Total from './totalprice'


export default class Cart extends Component {
  render() {
    return(
      <div className="c-cart">
        <a className="c-cart__close-content"><i className="fa fa-times" aria-hidden="true"></i></a>
        <div className="c-cart__header">
          <i className="c-cart__count">{this.props.list.length}</i>
          <img className="c-cart__icon-bag" src="images/bag.png"/>
          
          <h2 className="c-cart__title">Sacola</h2>
        </div>
        <List 
          list={this.props.list}
          handleRemove={this.props.handleRemove}
          handleOnChange={this.props.handleOnChange}
        />
        <div className="c-cart__container-total">
          <p className="c-cart__subtotal">SUBTOTAL</p>
          <Total 
            list={this.props.list}
          />
        </div>
        <button className="c-cart__purchase">Comprar</button>
      </div>
    )
  }
}