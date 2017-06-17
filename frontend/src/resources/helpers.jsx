export const PriceFormat = (v) => {
  v = v.toFixed(2).toString().split('.')
  return { integer: v[0], decimal: v[1] }
}

export const InstallmentsFormat = (price, installments) => {
  return (price / installments).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 })
}

// Filters the array setting the product quantity and reduce it
export const ReduceList = (products) => {
  return products.map(p => {
    p['quantity'] = products.filter(p1 => p1.sku === p.sku).length
    return p
  }).filter((el, i, a) => i === a.findIndex(el1 => el.sku === el1.sku))
}
