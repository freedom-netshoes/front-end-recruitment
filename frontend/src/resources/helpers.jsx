export const PriceFormat = (price) => {
  let fullString = price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 })

  // retorna todos os numericos  já com a separação de milhar (.)
  let numbers = fullString.split(/[^0-9.]/).filter(e => e.replace(/(\r\n|\n|\r)/gm, ''))

  // retorna todos os não numericos excetos os pontos
  let symbols = fullString.split(/[\d\.]+/).filter(e => e.replace(/(\r\n|\n|\r)/gm, ''))

  return {
    integer: numbers[0],
    decimal: numbers[1],
    currencySymbol: symbols[0],
    decimalSeparator: symbols[1],
    toStringPrice: fullString
  }
}

// Filters the array setting the product quantity and reduce it
export const ReduceList = (products) => {
  return products.map(p => {
    p['quantity'] = products.filter(p1 => p1.sku === p.sku).length
    return p
  }).filter((el, i, a) => i === a.findIndex(el1 => el.sku === el1.sku))
}
