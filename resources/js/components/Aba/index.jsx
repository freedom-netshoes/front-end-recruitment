import React, {Component, PropTypes} from 'react';
import CSSModules from 'react-css-modules';
import styles from './Aba.scss';

@CSSModules(styles)
class Aba extends Component{
    render () {
        return (
            <div styleName="aba" onMouseOver={this.onHover}></div>
        )
    }
    
    onHover () {
        //TODO - Adicionar classe "carrinho--aberto"
        console.log('TODO - Adicionar classe "carrinho--aberto"');
    }
}

Aba.defaultProps = {};
Aba.propTypes ={};

export default Aba;