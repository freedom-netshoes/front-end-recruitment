import {ADICIONAR_PRODUTO, REMOVER_PRODUTO} from 'ConstAcoes';

/* --- AÇÃO - Adicionar produto do carrinho --- */
const AdicionarProduto = produto => (
  {
    type: ADICIONAR_PRODUTO,
    produto
  }
);

/* --- AÇÃO - Remover produto do carrinho --- */
const RemoverProduto = produto => (
  {
    type: REMOVER_PRODUTO,
    produto
  }
);

export {AdicionarProduto, RemoverProduto};
