'use strict'

import { itemIsInCart } from './store'

test('checks if item added to cart is in cart', () => {
  const itemInCart = { sku: 876661122392077 }
  const cart = [
    { sku: 8552515751438644 },
    { sku: 18644119330491312 },
    { sku: 11854078013954528 },
    itemInCart
  ]
  expect(itemIsInCart(cart, itemInCart)).toBeTruthy()
})

test('checks if item NOT added to cart is in cart', () => {
  const cart = [
    { sku: 8552515751438644 },
    { sku: 18644119330491312 },
    { sku: 11854078013954528 }
  ]
  const itemNotInCart = { sku: 876661122392077 }
  expect(itemIsInCart(cart, itemNotInCart)).toBeFalsy()
})
