export const itemInCart = function (cart, item) {
  let alreadyAdded = false
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].sku === item.sku) {
      alreadyAdded = true
      break
    }
  }
  return alreadyAdded
}
