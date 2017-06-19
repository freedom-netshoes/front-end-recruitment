import React, {Component, PropTypes} from 'react';
import CSSModules from 'react-css-modules';
import styles from './CarrinhoRodape.scss';

@CSSModules(styles)
class CarrinhoRodape extends Component {
    render () {
        return (      
            <div styleName="carrinho__rodape">
                <div styleName="subtotal">
                    <div styleName="titulo">
                        <p>{this.props.titulo}</p>
                    </div>
                    <div styleName="subtotal__info">
                        <div styleName="preco">
                            <span className="moeda">{this.props.moeda}</span>
                            <span styleName="valor">{this.props.valor},</span>
                            <span className="centavos">{this.props.centavos}</span>
                        </div>
                        <p styleName="parcelamento">
                            <span className="descricao">OU EM ATÉ 10 X </span>
                            <span className="moeda">{this.props.moeda}</span>
                            <span className="valor">{this.props.valorParcelamento},{this.props.centavosParcelamento}</span>
                        </p>
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
    centavosParcelamento: '00'
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
