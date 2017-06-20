import React, {Component, PropTypes} from 'react';
import CSSModules from 'react-css-modules';
import styles from './Carrinho.scss';
import CarrinhoCabecalho from 'CarrinhoCabecalho';
import CarrinhoItem from 'CarrinhoItem';
import CarrinhoRodape from 'CarrinhoRodape';

@CSSModules(styles)
class Carrinho extends Component {
    render () {
		
		const {
			classeCarrinho,	
			classeRemoverDoCarrinho,
			fecharCarrinho,
			produtosCarrinho,
			removerProdutoCarrinho, 
			calcularValorPrestacao,
			removerOut,
			removerOver
		} = this.props;
		
        return (        
            <div 
				className={classeCarrinho}
				styleName='carrinho'
				onMouseLeave={fecharCarrinho}>				
                <CarrinhoCabecalho 
					produtosCarrinho={produtosCarrinho}/>
                <ul className="col-xs-12" styleName="carrinho__itens">
					{produtosCarrinho.map(produto => (
						<CarrinhoItem 
							{...produto} 
							removerProdutoCarrinho={removerProdutoCarrinho}
							removerOut={removerOut}
							removerOver={removerOver}
							classeRemoverDoCarrinho={classeRemoverDoCarrinho}
						/>									
					))}
                </ul>
                <CarrinhoRodape 
					produtosCarrinho={produtosCarrinho}
					calcularValorPrestacao={calcularValorPrestacao}/>
            </div>
        )
    }    
}

Carrinho.defaultProps = {
	classeCarrinho: '',
	abrirCarrinho: () => {},
	fecharCarrinho: () => {},
	removerOver: () => {},
	removerOut: () => {},
	produtosCarrinho: [],
	removerProdutoCarrinho: () => {},
	calcularValorPrestacao: () => {}
};

Carrinho.propTypes = {
	classeCarrinho: PropTypes.node,
	abrirCarrinho: PropTypes.func,
	fecharCarrinho: PropTypes.func,
	removerOver: PropTypes.func,
	removerOut: PropTypes.func,	
	produtosCarrinho: PropTypes.array,	
	removerProdutoCarrinho: PropTypes.func,	
	calcularValorPrestacao: PropTypes.func	
};    

export default Carrinho;
