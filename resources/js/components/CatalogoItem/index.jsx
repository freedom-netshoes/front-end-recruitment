import React, {Component, PropTypes} from 'react';
import CSSModules from 'react-css-modules';
import styles from './CatalogoItem.scss';

@CSSModules(styles)
class CatalogoItem extends Component{
    render (){
        return (
            <li styleName="catalogo__item" className="col-xs-4 center-xs">
                <figure>
                    <img src={this.props.imgPath} alt={this.props.titulo} />
                </figure>
                <h4 styleName="titulo">{this.props.titulo}</h4>
                <div styleName="preco">
                    <span className="moeda">{this.props.moeda}</span>
                    <span styleName="valor">{this.props.valor},</span>
                    <span className="centavos">{this.props.centavos}</span>
                </div>
                <p styleName="parcelamento">
                    <span className="descricao">ou {this.props.nParcelamento} x </span>
                    <span className="moeda">{this.props.moeda}</span>
                    <span className="valor">{this.props.valorParcelamento},{this.props.centavosParcelamento}</span>
                </p>
            </li>
        )
    }
}

CatalogoItem.defaultProps = {
    imgPath: 'img/catalogo-default.jpg',
    titulo: 'Novo item',
    moeda: 'R$',
    valor: '00',
    centavos: '00',
    nParcelamento: '0',
    valorParcelamento: '00',
    centavosParcelamento: '00'
};

CatalogoItem.propTypes = {
    imgPath:PropTypes.node,
    titulo: PropTypes.node,
    moeda: PropTypes.node,
    valor: PropTypes.node,
    centavos: PropTypes.node,
    nParcelamento: PropTypes.node,
    valorParcelamento: PropTypes.node,
    centavosParcelamento: PropTypes.node
};

export default CatalogoItem;