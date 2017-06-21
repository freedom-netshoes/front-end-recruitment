import {combineReducers} from 'redux';
import * as ConstAcoes from 'ConstAcoes';

const initialState = {
  produtosCarrinho: JSON.parse(localStorage.getItem('produtosCarrinho')) || []
};

const ProdutosCarrinho = function (state = initialState, action) {
  let carrinho = [];
  let carrinhoFiltrado = [];

  switch (action.type) {
    case ConstAcoes.ADICIONAR_PRODUTO:

      carrinho = state.produtosCarrinho;
      carrinhoFiltrado = carrinho.filter(function (item) {
        return (item.id === action.produto.id);
      });

      if (carrinhoFiltrado.length < 1) { // Não esta no carrinho
        action.produto.quantidade = 1;
        carrinho.push(action.produto);
      } else { // Caso ja tenha, quantidade++
        const index = carrinho.findIndex(item => item.id === action.produto.id);
        carrinho[index].quantidade++;
      }

      localStorage.setItem('produtosCarrinho', JSON.stringify(carrinho));

      return {produtosCarrinho: carrinho};

    case ConstAcoes.REMOVER_PRODUTO:

      carrinho = state.produtosCarrinho;
      carrinhoFiltrado = carrinho.filter(function (item) {
        return (item.id !== action.produto.id);
      });

      localStorage.setItem('produtosCarrinho', JSON.stringify(carrinhoFiltrado));

      return {produtosCarrinho: carrinhoFiltrado};

    default:
      return state;
  }
};

const Reducers = combineReducers({ProdutosCarrinho});

export default Reducers;
