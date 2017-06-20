import React, {Component, PropTypes} from 'react';
import CSSModules from 'react-css-modules';
import styles from './CarrinhoRodape.scss';

@CSSModules(styles)
class CarrinhoRodape extends Component {
    render () {
		
		const {
			produtosCarrinho,
			calcularValorPrestacao	
		} = this.props;		
		
		let subtotal = 0.0;
		
		if (produtosCarrinho.length === 1){
			subtotal = produtosCarrinho[0].quantidade * produtosCarrinho[0].price;				
		}else if(produtosCarrinho.length > 1){
			subtotal = produtosCarrinho.reduce(function (a,b){
				return (a.price * a.quantidade) + (b.price * b.quantidade);
			});
		}
		
	
		
		let valor = subtotal.toFixed(2).toString().split(".")[0];
		let centavos = subtotal.toFixed(2).toString().split(".")[1];
		let valorPrestacao = calcularValorPrestacao(subtotal,10).split(".")[0];
		let centavosPrestacao = calcularValorPrestacao(subtotal,10).split(".")[1];
		
		
		let parcelamento = (
			<p styleName="parcelamento">
				<span className="descricao">OU EM ATÉ 10 X </span>
				<span className="moeda">{this.props.moeda}</span>
				<span className="valor">{valorPrestacao},{centavosPrestacao}</span>
			</p>
		);
		
		parcelamento = subtotal > 1 ? parcelamento : "";

        return (      
            <div styleName="carrinho__rodape">
                <div styleName="subtotal">
                    <div styleName="titulo">
                        <p>{this.props.titulo}</p>
                    </div>
                    <div styleName="subtotal__info">
                        <div styleName="preco">
                            <span className="moeda">{this.props.moeda}</span>
                            <span styleName="valor">{valor},</span>
                            <span className="centavos">{centavos}</span>
                        </div>
                        {parcelamento}
                    </div>
                </div>
                <div styleName="comprar">COMPRAR</div>
            </div>
        )
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
	produtosCarrinho: [],
	calcularValorPrestacao: () => {}
};
CarrinhoRodape.propTypes = {
    titulo: PropTypes.node,
    moeda: PropTypes.node,
    valor: PropTypes.node,
    centavos: PropTypes.node,
    nParcelamento: PropTypes.node,
    valorParcelamento: PropTypes.node,
    centavosParcelamento: PropTypes.node
};    

export default CarrinhoRodape;
