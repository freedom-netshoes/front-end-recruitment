import React, {Component} from 'react';
import {connect} from 'react-redux';
import CSSModules from 'react-css-modules';
import styles from './Main.scss';
import GetProdutos from 'Request';
import {CalcQuantidadeCarrinho, CalcSubtotalCarrinho} from 'Utils';
import CatalogoItem from 'CatalogoItem';
import Carrinho from 'Carrinho';
import Aba from 'Aba';

@CSSModules(styles)
class Main extends Component {
  constructor (props) {
    super(props);

    this.state = {
      classeCarrinho: '',
      produtosCatalogo: []
    };

    this.abrirCarrinho = this.abrirCarrinho.bind(this);
    this.fecharCarrinho = this.fecharCarrinho.bind(this);
  }

  componentDidMount () {
    this.getProdutos();
  }

  render () {
    return (
      <div className='center-xs' styleName='catalogo'>
        <ul className='col-xs-12 row'>
          {this.state.produtosCatalogo.map(produto => (
            <CatalogoItem
              key={produto.id}
              {...produto}
              abrirCarrinho={this.abrirCarrinho}
              adicionarProdutoCarrinho={this.adicionarProdutoCarrinho}
              calcularValorPrestacao={this.calcularValorPrestacao}
                        />
                    ))}
        </ul>
        <Carrinho
          {...this.props}
          {...this.state}
          calcularValorPrestacao={this.calcularValorPrestacao}
          fecharCarrinho={this.fecharCarrinho}
          removerOver={this.removerOver}
          removerOut={this.removerOut}
          removerProdutoCarrinho={this.removerProdutoCarrinho} />
        <Aba
          {...this.props}
          {...this.state}
          abrirCarrinho={this.abrirCarrinho} />
      </div>
    );
  }

  async getProdutos () {
    await GetProdutos('http://localhost:3000/products')
          .then(result => {
            this.setState({
              produtosCatalogo: result.response
            });
          }).catch(result => {
            console.log(result.message);
          });
  }

  abrirCarrinho () {
    this.setState({
      classeCarrinho: 'carrinho--aberto'
    });
  }

  fecharCarrinho () {
    this.setState({
      classeCarrinho: ''
    });
  }
}

const mapStateToProps = function (store) {
  const produtosCarrinho = store.ProdutosCarrinho.produtosCarrinho;
  return {
    produtosCarrinho: produtosCarrinho,
    quantidadeCarrinho: CalcQuantidadeCarrinho(produtosCarrinho),
    subtotalCarrinho: CalcSubtotalCarrinho(produtosCarrinho)
  };
};

export default connect(mapStateToProps)(Main);
