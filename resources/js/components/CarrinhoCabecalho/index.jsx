import React, {Component, PropTypes} from 'react';
import CSSModules from 'react-css-modules';
import styles from './CarrinhoCabecalho.scss';

@CSSModules(styles)
class CarrinhoCabecalho extends Component {
    render () {		
		const {quantidadeCarrinho} = this.props;
	
        return (        
             <div className="center-xs row" styleName="carrinho__cabecalho">
                <figure styleName="icone">
                    <img src={this.props.imgPath} alt={this.props.titulo} />
                </figure>
                <div styleName="contador">{quantidadeCarrinho}</div>
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
    imgPath: PropTypes.string,
    titulo: PropTypes.string,
    contador: PropTypes.string
};    

export default CarrinhoCabecalho;
