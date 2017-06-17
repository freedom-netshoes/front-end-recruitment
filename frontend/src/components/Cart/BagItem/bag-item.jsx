import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import CSSModules from 'react-css-modules'
import Image from '../../Product/Image/image'
import Quantity from './Quantity/quantity'
import Title from '../../Product/Title/title'
import { PriceFormat } from '../../../resources/helpers'
import { removeProductCart } from '../../../actions/action'

import styles from './bag-item.less'

@CSSModules(styles)
class BagItem extends Component {
  static defaultProps = {
    product: {}
  };

  static propTypes = {
    product: PropTypes.object
  };

  render () {
    const {
      title,
      sku,
      products,
      price,
      quantity,
      availableSizes,
      installments
    } = this.props.product
    return (
      <li className="row middle-xs delete">
        <hr />
        <div className="col-sm-9 col-xs-12">
          <Image {...{ sku: sku, title: title, isThumb: true }} />
          <Title {...{ title: title }} />
          <p styleName="size">{availableSizes.join(' | ')}</p>
          <Quantity {...{ quantity: quantity }} />
        </div>
        <div className="col-xs-12 col-sm-3 end-xs" styleName="adjust-end-xs">
          <span {...{
            onClick: () => {
              this.props.dispatch(removeProductCart(this.props.product))
            },
            styleName: 'close'
          }}></span>
          <p className="price"><strong>{PriceFormat(price * quantity).integer}</strong>,{PriceFormat(price * quantity).decimal}</p>
        </div>
      </li>
    )
  }
}

export default connect()(BagItem)
