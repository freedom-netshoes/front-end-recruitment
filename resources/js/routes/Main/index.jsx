import React, {Component} from 'react';
import {connect} from 'react-redux';
import AppConfig from 'AppConfig';
import CSSModules from 'react-css-modules';
import styles from './Main.scss';
import CatalogoItem from 'CatalogoItem';
import Carrinho from 'Carrinho';
import Aba from 'Aba';


@CSSModules(styles)
class Main extends Component {

	constructor (props) {
		super(props);
		
		this.state = {
			classeCarrinho: "",
			classeRemoverDoCarrinho:"",
			produtosCatalogo:[
			{
			  "id": 0,
			  "sku": 8552515751438644,
			  "title": "Camisa Nike Corinthians I",
			  "description": "14/15 s/nº",
			  "availableSizes": ["S", "G", "GG", "GGG"],
			  "style": "Branco com listras pretas",
			  "price": 229.9,
			  "installments": 9,
			  "currencyId": "BRL",
			  "currencyFormat": "R$",
			  "isFreeShipping": true,
			  "imgPath": "img/camisa-nike-corinthians-i.jpg",
			  "imgThumbPath": "img/camisa-nike-corinthians-i_thumb.jpg"
			},
			{
			  "id": 1,
			  "sku": 18644119330491312,
			  "title": "Camisa Nike Corinthians II",
			  "description": "",
			  "availableSizes": ["S", "G", "GG", "GGG"],
			  "style": "Preta com listras brancas",
			  "price": 229.9,
			  "installments": 0,
			  "currencyId": "BRL",
			  "currencyFormat": "R$",
			  "isFreeShipping": true,
			  "imgPath": "img/camisa-nike-corinthians-ii.jpg",
			  "imgThumbPath": "img/camisa-nike-corinthians-ii_thumb.jpg"
			}],
			produtosCarrinho:[]
		};
		
		this.abrirCarrinho = this.abrirCarrinho.bind(this);
		this.fecharCarrinho = this.fecharCarrinho.bind(this);
		this.adicionarProdutoCarrinho = this.adicionarProdutoCarrinho.bind(this);
		this.removerProdutoCarrinho = this.removerProdutoCarrinho.bind(this);
		this.calcularValorPrestacao = this.calcularValorPrestacao.bind(this);
		this.removerOver = this.removerOver.bind(this);
		this.removerOut = this.removerOut.bind(this);
	}	

	render () {
    	return (
			<div className="center-xs" styleName="catalogo">
				<ul className="col-xs-12 row">
					{this.state.produtosCatalogo.map(produto => (					
						<CatalogoItem
							adicionarProdutoCarrinho={this.adicionarProdutoCarrinho}
							calcularValorPrestacao={this.calcularValorPrestacao}
							{...produto}							
						/>
					))}
				</ul>
				<Carrinho 
					fecharCarrinho={this.fecharCarrinho}	
					removerProdutoCarrinho={this.removerProdutoCarrinho}
					calcularValorPrestacao={this.calcularValorPrestacao}
					removerOver={this.removerOver}
					removerOut={this.removerOut}
					{...this.props}
					{...this.state} />
				<Aba
					abrirCarrinho={this.abrirCarrinho}
					{...this.props}
					{...this.state} />            
			</div>    
			
		);
  	}
	
	abrirCarrinho () {
		this.setState ({
			classeCarrinho: "carrinho--aberto"
		});
	}
	
	fecharCarrinho () {
		this.setState ({
			classeCarrinho: ""	
		});
	}
	
	removerOver () {
		this.setState({
			classeRemoverDoCarrinho: "carrinho__item--remove"
		});
	}
	
	removerOut () {
		this.setState({
			classeRemoverDoCarrinho: ""
		})
	}
	
	adicionarProdutoCarrinho (produto) {
		if(produto){
			let carrinho = this.state.produtosCarrinho;
			let carrinhoFiltrado = carrinho.filter(function (item) {
				return (item.id === produto.id);
			});				
			
			if(carrinhoFiltrado.length < 1){//Não esta no carrinho
				produto.quantidade = 1;
				carrinho.push(produto);		
				
			}else{//Caso ja tenha, quantidade++
				const index = carrinho.findIndex(item => item.id === produto.id);
				carrinho[index].quantidade++;
			}
			
			this.setState({
				produtosCarrinho : carrinho
			});	
			this.abrirCarrinho();
		}
	}
	
	removerProdutoCarrinho (produto) {
		if(produto){
			let carrinho = this.state.produtosCarrinho;
			let carrinhoFiltrado = carrinho.filter(function (item) {
				return (item.id !== produto.id);
			});	
			
			this.setState({
				produtosCarrinho : carrinhoFiltrado
			});
		}
	}
	
	calcularValorPrestacao (valor, prestacao){
		prestacao = prestacao == 0 ? 1 : prestacao;
		return (valor/prestacao).toFixed(2);
	}
	
}

const mapStateToProps = function (store) {
	return {};
};

export default connect(mapStateToProps)(Main);
