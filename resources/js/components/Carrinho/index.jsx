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
			fecharCarrinho,
			produtosCarrinho,
            quantidadeCarrinho,
			removerProdutoCarrinho, 
            subtotalCarrinho
		} = this.props;
		
        return (        
            <div 
				className={classeCarrinho}
				styleName='carrinho'
				onMouseLeave={fecharCarrinho}>				
                <CarrinhoCabecalho quantidadeCarrinho={quantidadeCarrinho}/>
                <ul className="col-xs-12" styleName="carrinho__itens">
					{produtosCarrinho.map(produto => (
						<CarrinhoItem 
							key={produto.id}
							{...produto} 
							removerProdutoCarrinho={removerProdutoCarrinho}							
						/>									
					))}
                </ul>
                <CarrinhoRodape subtotalCarrinho={subtotalCarrinho}/>
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
	classeCarrinho: PropTypes.string,
	abrirCarrinho: PropTypes.func,
	fecharCarrinho: PropTypes.func,
	removerOver: PropTypes.func,
	removerOut: PropTypes.func,	
	produtosCarrinho: PropTypes.array,	
	removerProdutoCarrinho: PropTypes.func,	
	calcularValorPrestacao: PropTypes.func	
};    

export default Carrinho;
