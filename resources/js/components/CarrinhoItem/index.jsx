import React, {Component, PropTypes} from 'react';
import CSSModules from 'react-css-modules';
import styles from './CarrinhoItem.scss';

@CSSModules(styles)
class CarrinhoItem extends Component{
    render (){
        return (
            <li className="row" styleName="carrinho__item" data-id={this.props.id}>
                <figure className="thumb">
                    <img src={this.props.imgPath} alt={this.props.titulo} />
                </figure>
                <div className="col-xs-9" styleName="descricao">
                    <h4 styleName="titulo">{this.props.titulo}</h4>
                    <div className="subtitulo">{this.props.subtitulo}</div>
                    <div className="quantidade">Quantidade: {this.props.quantidade}</div>
                </div>
                <div styleName="direita">
                    <span styleName="remover"></span>
                    <div styleName="preco">
                        <span className="moeda">{this.props.moeda}</span>
                        <span styleName="valor">{this.props.valor},</span>
                        <span className="centavos">{this.props.centavos}</span>
                    </div>
                </div>
            </li>            
        )
    }
}

CarrinhoItem.defaultProps = {
    id: '',
    imgPath: 'img/carrinho-item-default-thumb.jpg',
    titulo: 'Novo item',
    subtitulo: 'Subtitulo',
    quantidade: '0',
    moeda: 'R$',
    valor: '00',
    centavos: '00'   
};

CarrinhoItem.propTypes = {
    id:PropTypes.node,
    imgPath:PropTypes.node,
    titulo: PropTypes.node,
    subtitulo: PropTypes.node,
    quantidade: PropTypes.node,
    moeda: PropTypes.node,
    valor: PropTypes.node,
    centavos: PropTypes.node
};

export default CarrinhoItem;