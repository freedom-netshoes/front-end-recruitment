const formatPrice = function (price) {
  return parseFloat(Math.round(price * 100) / 100).toFixed(2)
}

export const getMainPrice = function (price) {
  return Math.floor(formatPrice(price))
}

export const getDecimalPrice = function (price) {
  const priceWithDecimals = String(formatPrice(price)).replace(/[.]/g, ',')
  return priceWithDecimals.slice(priceWithDecimals.indexOf(','), priceWithDecimals.length)
}

export const getCartFinalPrice = function (items) {
  let sum = 0
  items.map(item => { sum += item.price })
  return sum
}

export const getProInstallmentPrice = function (price, installments) {
  const proInstallmentPrice = formatPrice(price / installments)
  return String(getMainPrice(proInstallmentPrice) + getDecimalPrice(proInstallmentPrice))
}
