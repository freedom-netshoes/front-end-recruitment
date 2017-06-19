import React, {Component, PropTypes} from 'react';
import CSSModules from 'react-css-modules';
import styles from './Carrinho.scss';
import CarrinhoCabecalho from 'CarrinhoCabecalho';
import CarrinhoItem from 'CarrinhoItem';
import CarrinhoRodape from 'CarrinhoRodape';

@CSSModules(styles)
class Carrinho extends Component {
    render () {
        return (        
            <div styleName="carrinho" onMouseOver={this.onHover} onMouseOut={this.onOut}>
                <CarrinhoCabecalho />
                <ul className="col-xs-12" styleName="carrinho__itens">
                    <CarrinhoItem />
                    <CarrinhoItem />
                    <CarrinhoItem />
                </ul>
                <CarrinhoRodape />
            </div>
        )
    }
    onHover () {
        //TODO - Adicionar classe "carrinho--aberto"
        console.log('TODO - Adicionar classe "carrinho--aberto"');
    }
    onOut (){
        //TODO - Remover classe "carrinho--aberto"
        console.log('TODO - Remover classe "carrinho--aberto"');
    }
}

Carrinho.defaultProps = {

};
Carrinho.propTypes = {};    

export default Carrinho;
