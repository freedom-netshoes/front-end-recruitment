import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import CSSModules from 'react-css-modules';

import styles from './bag-item.less';


@CSSModules(styles)
export default class BagItem extends Component {
	constructor(props) {
		super(props)
	}
	static defaultProps = {
		price: 0
	};

	static propTypes = {
		price: PropTypes.number
	};

	render() {
		return (
            <li className="row middle-xs delete">
              <hr />
              <div className="col-sm-9 col-xs-12">
                <figure>
                  <img src="images/876661122392077_thumb.jpg" alt="Chuteira Nike" />
                </figure>
                <h2 styleName="title">Chuteira Nike Mercurial Victory 3 FG - Edição Especial Infantil</h2>
                <p styleName="size">GG | Preto e branco</p>
                <p styleName="quantity">Quantidade: 2</p>
              </div>
              <div className="col-xs-12 col-sm-3 end-xs" styleName="adjust-end-xs">
                <a href="javascript:void(0);" className="close" />
                <p className="price">R$ <strong>149</strong>,90</p>
              </div>
            </li>
		)
	}
}