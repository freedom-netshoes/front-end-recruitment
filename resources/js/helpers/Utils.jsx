// Calcula o total do carrinho
const CalcTotal = products => {
  let currencyFormat = '';
  let installments = getGreaterInstallment(products);
  let price = 0;

  if (products.length === 1) {
    currencyFormat = products[0].currencyFormat;
    installments = products[0].installments;
    price += products[0].quantity * products[0].price;
  } else {
    price = products.reduce((previous, current, index) => {
      if (index === 1) {
        return previous.quantity * previous.price + current.quantity * current.price;
      } else {
        return previous + current.quantity * current.price;
      }
    });
  }

  return {
    currencyFormat,
    installments,
    price
  };
};

// Retorna o maior parcelamento
const getGreaterInstallment = products => Math.max.apply(Math, products.map(item => item.installments));

const FormatPrice = {
  // Splita o número fracionário
  getSplit: price => {
    try {
      price = price.toFixed(2).toString().split('.');
      return {int: price[0], float: price[1]};
    } catch (err) {
      return 0;
    }
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
    newProducts = Array.isArray(newProducts) ? newProducts : [newProducts];
    // Ordena o carrinho por título em ordem alfabética
    newProducts = newProducts.sort((a, b) => a.title > b.title);
  }

  return newProducts;
};

// Seta a quantidade de produtos no carrinho
const SetQuantity = (list, product) => {
  list.forEach(item => {
    if (item.id === product.id) {
      item.quantity = GetQuantity(list, product);
    }
  });

  return list;
};

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

export {CalcTotal, FormatPrice, GetQuantity, ReduceCart, SetQuantity, ToSeo};
