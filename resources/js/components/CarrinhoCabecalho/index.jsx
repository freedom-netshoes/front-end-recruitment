import React, {Component, PropTypes} from 'react';
import CSSModules from 'react-css-modules';
import styles from './CarrinhoCabecalho.scss';

@CSSModules(styles)
class CarrinhoCabecalho extends Component {
    render () {
		
		const {produtosCarrinho} = this.props;
		
		let quantidateTotal = 0;
		
		if (produtosCarrinho.length === 1){
			quantidateTotal = produtosCarrinho[0].quantidade;				
		}else if(produtosCarrinho.length > 1){
			quantidateTotal = produtosCarrinho.reduce(function (a,b){
				return a.quantidade + b.quantidade
			});
		}
		
		
        return (        
             <div className="center-xs row" styleName="carrinho__cabecalho">
                <figure styleName="icone">
                    <img src={this.props.imgPath} alt={this.props.titulo} />
                </figure>
                <div styleName="contador">{quantidateTotal}</div>
                <div styleName="titulo">{this.props.titulo}</div>
            </div>       
        )
    }      
}

CarrinhoCabecalho.defaultProps = {
    imgPath: 'img/bag.svg',
    titulo: 'SACOLA',
    contador: '0'
};
CarrinhoCabecalho.propTypes = {
    imgPath: PropTypes.node,
    titulo: PropTypes.node,
    contador: PropTypes.node
};    

export default CarrinhoCabecalho;
