import React, {Component, PropTypes} from 'react';
import CSSModules from 'react-css-modules';
import styles from './CarrinhoItem.scss';
import Store from 'Store';
import {RemoverProduto} from 'Actions';

@CSSModules(styles)
class CarrinhoItem extends Component{
	
    constructor(props){
        super(props);
        
        this.state = {classeRemove: ""}
        
        this.aplicarClasseRemove = this.aplicarClasseRemove.bind(this);
        this.removerClasseRemove = this.removerClasseRemove.bind(this);
    }
    
    render (){
		
		const {removerProdutoCarrinho} = this.props;
		
		let tamanhosDisponiveis = this.props.availableSizes.join();
		let valorTotal = this.props.price ? this.props.price * this.props.quantidade : 0.0;
		let valor = valorTotal.toFixed(2).toString().split(".")[0];
		let centavos = valorTotal.toFixed(2).toString().split(".")[1];
		
        return (
            <li 
				className={this.state.classeRemove + " row"}
				styleName="carrinho__item" 
				data-id={this.props.id}>
                <figure className="thumb">
                    <img src={this.props.imgThumbPath} alt={this.props.title} />
                </figure>
                <div className="col-xs-9" styleName="descricao">
                    <h4 styleName="titulo">{this.props.title}</h4>
                    <div className="subtitulo">{tamanhosDisponiveis} | {this.props.style}</div>
                    <div className="quantidade">Quantidade: {this.props.quantidade}</div>
                </div>
                <div styleName="direita">
                    <span 
						styleName="remover" 
						onClick={() => Store.dispatch(RemoverProduto(this.props))}
						onMouseOver={this.aplicarClasseRemove}
						onMouseOut={this.removerClasseRemove}>
					</span>
                    <div styleName="preco">
                        <span className="moeda">{this.props.currencyFormat}</span>
                        <span styleName="valor">{valor},</span>
                        <span className="centavos">{centavos}</span>
                    </div>
                </div>
            </li>            
        )
    }
    
    aplicarClasseRemove (){        
        this.setState({
            classeRemove : "carrinho__item--remove"
        })
    }
    
    removerClasseRemove () {
        this.setState({
            classeRemove : ""
        })
    }
}

CarrinhoItem.defaultProps = {
	id: '',
	sku: '',    
    title: 'Novo item',
	description: '',
	availableSizes: '',
	style:'',
	price:'',    
    installments: 0,		        
	currencyId: 'BRL',
	currencyFormat: 'R$',
	isFreeShipping: false,
	imgPath: 'img/catalogo-default.jpg',
	imgThumbPath: 'img/carrinho-item-default-thumb.jpg'	
};

CarrinhoItem.propTypes = {
	id: PropTypes.string,
	sku: PropTypes.string,    
    title: PropTypes.string,
	description: PropTypes.string,
	availableSizes: PropTypes.string,
	style: PropTypes.string,
	price: PropTypes.string,   
    installments: PropTypes.number,		        
	currencyId: PropTypes.string,
	currencyFormat: PropTypes.string,
	isFreeShipping: PropTypes.bool,
	imgPath: PropTypes.string,
	imgThumbPath: PropTypes.string
};

export default CarrinhoItem;