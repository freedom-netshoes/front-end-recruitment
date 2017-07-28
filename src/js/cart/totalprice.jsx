import React from 'react'

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
      totalPrice += element.price
    })
    return totalPrice
  }
  return (
    <div className="c-cart__info-total">
      <h3 className="c-cart__total-price">R$ {updatePrice()}</h3>
      <p className="c-cart__installments">ou em até {updateInstallment()} X R$ {updatePrice() / updateInstallment()}</p>
    </div>
  )
}