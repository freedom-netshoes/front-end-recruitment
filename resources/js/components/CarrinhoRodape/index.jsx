import React, {Component, PropTypes} from 'react';
import CSSModules from 'react-css-modules';
import styles from './CarrinhoRodape.scss';
import {CalcValorPrestacao} from 'Utils';

@CSSModules(styles)
class CarrinhoRodape extends Component {
  render () {
    const {subtotalCarrinho} = this.props;

    let valor = subtotalCarrinho.toFixed(2).toString().split('.')[0];
    let centavos = subtotalCarrinho.toFixed(2).toString().split('.')[1];
    let valorPrestacao = CalcValorPrestacao(subtotalCarrinho, 10).split('.')[0];
    let centavosPrestacao = CalcValorPrestacao(subtotalCarrinho, 10).split('.')[1];

    let parcelamento = (
      <p styleName='parcelamento'>
        <span className='descricao'>OU EM ATÉ 10 X </span>
        <span className='moeda'>{this.props.moeda}</span>
        <span className='valor'>{valorPrestacao},{centavosPrestacao}</span>
      </p>
    );

    parcelamento = subtotalCarrinho > 1 ? parcelamento : '';

    return (
      <div styleName='carrinho__rodape'>
        <div styleName='subtotal'>
          <div styleName='titulo'>
            <p>{this.props.titulo}</p>
          </div>
          <div styleName='subtotal__info'>
            <div styleName='preco'>
              <span className='moeda'>{this.props.moeda}</span>
              <span styleName='valor'>{valor},</span>
              <span className='centavos'>{centavos}</span>
            </div>
            {parcelamento}
          </div>
        </div>
        <div styleName='comprar'>COMPRAR</div>
      </div>
    );
  }
}

CarrinhoRodape.defaultProps = {
  titulo: 'SUBTOTAL',
  moeda: 'R$',
  valor: '00',
  centavos: '00',
  nParcelamento: '0',
  valorParcelamento: '00',
  centavosParcelamento: '00',
  calcularValorPrestacao: () => {}
};
CarrinhoRodape.propTypes = {
  titulo: PropTypes.string,
  moeda: PropTypes.string,
  valor: PropTypes.string,
  centavos: PropTypes.string,
  nParcelamento: PropTypes.string,
  valorParcelamento: PropTypes.string,
  centavosParcelamento: PropTypes.string,
  calcularValorPrestacao: PropTypes.func
};

export default CarrinhoRodape;
