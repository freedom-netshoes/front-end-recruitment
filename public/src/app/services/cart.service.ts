import { Injectable } from '@angular/core';

@Injectable()
export class CartService {

  constructor() { }

  getCartTotal(currentValue, payload) {
    let value = currentValue;
    if (payload.length === 1) {
      value = payload[0].products.subtotal;
    } else {
      value = 0;
      payload.forEach(itemProduct => {
        value = value + itemProduct.products.subtotal;
      });
    }
    return value;
  }

  setUpdateTotal(currentValue, payload) {
    return currentValue - payload.price;
  }

  getTotalAmount(payload) {
    let amount = 0;
    payload.forEach(itemProduct => {
      amount = amount + itemProduct.products.amount;
    });
    return amount;
  }
}
