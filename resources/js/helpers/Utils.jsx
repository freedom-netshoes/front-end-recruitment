const CalcQuantidadeCarrinho = (carrinho) => {
  let quantidadeTotal = 0;
  if (carrinho.length === 1) {
    quantidadeTotal = carrinho[0].quantidade;
  } else if (carrinho.length > 1) {
    quantidadeTotal = carrinho.reduce(function (acc, obj) {
      return acc + obj.quantidade;
    }, 0);
  }
  return quantidadeTotal;
};

const CalcSubtotalCarrinho = (carrinho) => {
  let subtotal = 0.0;
  if (carrinho.length === 1) {
    subtotal = carrinho[0].quantidade * carrinho[0].price;
  } else if (carrinho.length > 1) {
    subtotal = carrinho.reduce(function (a, b) {
      return a + (b.price * b.quantidade);
    }, 0);
  }
  return subtotal;
};

const CalcValorPrestacao = (valor, prestacao) => {
  prestacao = prestacao === 0 ? 1 : prestacao;
  return (valor / prestacao).toFixed(2);
};

export {CalcQuantidadeCarrinho, CalcSubtotalCarrinho, CalcValorPrestacao};
