import React from 'react'
import utils from '../utils/utils'


export default props => {

  const updateInstallment = () => {
    const list = props.list || []
    let largerInstallments = 0
    list.forEach((element) => {
       largerInstallments = (element.installments > largerInstallments) ? element.installments : largerInstallments
    })
    return largerInstallments
  }

  
  const updatePrice = () => {
    const list = props.list || []
    let totalPrice = 0.00
    list.forEach((element) => {
      totalPrice += element.price * element.amount
    })
    
    return totalPrice
  }
  return (
    <div className="c-cart__info-total">
      <h3 className="c-cart__total-price">R$ <span className="c-cart__total-price--bold">{utils.converteFloatMoeda(updatePrice())}</span></h3>
      <p className="c-cart__installments">ou em até {updateInstallment()} X R$ {utils.converteFloatMoeda(updatePrice() / updateInstallment())}</p>
    </div>
  )
}