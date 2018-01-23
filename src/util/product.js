'use strict'

export const roundPrice = function (price) {
  return parseFloat(Math.round(price * 100) / 100).toFixed(2)
}

export const formatMainPrice = function (price) {
  return String(Math.floor(roundPrice(price)))
}

export const formatDecimalsFromPrice = function (price) {
  const priceWithDecimals = String(roundPrice(price))
  return priceWithDecimals.slice(priceWithDecimals.indexOf('.') + 1, priceWithDecimals.length)
}

export const getCartPrice = function (items) {
  let sum = 0
  items.map(item => { sum += item.price })
  return sum
}

export const getInstallmentPrice = function (price, installments) {
  const proInstallmentPrice = roundPrice(price / installments)
  return String(formatMainPrice(proInstallmentPrice) + ',' + formatDecimalsFromPrice(proInstallmentPrice))
}
