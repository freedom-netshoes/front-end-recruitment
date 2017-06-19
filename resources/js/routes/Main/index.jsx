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
  }

  render () {
    return (
        <div className="center-xs" styleName="catalogo">
            <ul className="col-xs-12 row">
                <CatalogoItem />
                <CatalogoItem />
                <CatalogoItem />
                <CatalogoItem />
            </ul>
            <Carrinho />
            <Aba />            
        </div>      
    );
  }
}

const mapStateToProps = function (store) {
  return {};
};

export default connect(mapStateToProps)(Main);
