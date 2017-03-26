const FormatPrice = {
  // Splita o número fracionário
  getSplit: price => {
    price = price.toFixed(2).toString().split('.');
    return {int: price[0], float: price[1]};
  },
  // Calcula o valor da parcela e retorna com vírgula
  getInstallments: (installments, price) => (
    installments > 1 ? (price / installments).toFixed(2).replace('.', ',') : ''
  )
};

const GetQuantity = (list, product) => (
  list.filter(item => item.id === product.id).size
);

// Reduz o carrinho para que não se repitam os produtos
const ReduceCart = products => {
  let newProducts = products;

  if (newProducts.size > 0) {
    newProducts = newProducts.reduce((previous, current) => {
      if (Array.isArray(previous)) {
        if (previous.some(item => item.id === current.id)) {
          return previous;
        } else {
          return previous.concat(current);
        }
      } else {
        if (previous.id === current.id) {
          return previous;
        } else {
          return [previous].concat(current);
        }
      }
    });
    // Transforma em array se não for array
    newProducts = Array.isArray(newProducts) ? newProducts.sort() : [newProducts];
    // Ordena o carrinho por título em ordem alfabética
    newProducts = newProducts.sort((a, b) => a.title > b.title);
  }

  return newProducts;
}

const ToSeo = function (str) {
  const withAccent = 'áàãâäéèêëíìîïóòõôöúùûüçÁÀÃÂÄÉÈÊËÍÌÎÏÓÒÕÖÔÚÙÛÜÇ/';
  const noAccent = 'aaaaaeeeeiiiiooooouuuucAAAAAEEEEIIIIOOOOOUUUUC-';
  let newStr = '';

  for (let i = 0; i < str.length; i++) {
    if (withAccent.search(str.substr(i, 1)) >= 0) {
      newStr += noAccent.substr(withAccent.search(str.substr(i, 1)), 1);
    } else {
      newStr += str.substr(i, 1);
    }
  }
  return newStr.toLowerCase().replace(/ /g, '-');
};

export {FormatPrice, GetQuantity, ReduceCart, ToSeo};
