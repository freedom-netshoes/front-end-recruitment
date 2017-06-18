import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import CSSModules from 'react-css-modules'

import Quantity from './Quantity/quantity'
import ItemSize from './ItemSize/item-size'
import Image from '../../crossComponents/Image/image'
import Title from '../../crossComponents/Title/title'
import Price from '../../crossComponents/Price/price'
import ButtonDismiss from '../../crossComponents/ButtonDismiss/button-dismiss'
import { removeProductCart } from '../../../actions/action'
import styles from './bag-item.less'

@CSSModules(styles)
class BagItem extends Component {
  constructor (props) {
    super(props)
    this.state = {
      mouseOver: false
    }
  }
  static defaultProps = {
    product: {}
  };

  static propTypes = {
    product: PropTypes.object
  };

  mouseEnter () {
    this.setState({
      mouseOver: true
    })
    console.log('Mouse Enter', this.state.mouseOver)
  }

  mouseLeave () {
    this.setState({
      mouseOver: false
    })
    console.log('Mouse Leave', this.state.mouseOver)
  }

  render () {
    let mouseOver = false
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
      <li className={`bag-item row middle-xs${this.state.mouseOver ? ' remove' : ''}`}>
        <hr />
        <div {...{ className: 'col-md-2 start-md', styleName: 'image-container' }}>
          <Image {...{ sku: sku, title: title, isThumb: true }} />
        </div>
        <div className="col-md-7 start-md">
          <Title {...{ title: title }} />
          <ItemSize {...{ sizes: availableSizes.join(' | ') }} />
          <Quantity {...{ quantity: quantity }} />
        </div>
        <div className="col-md-3 end-md">
          <ButtonDismiss {...{
            clickButton: () => {
              this.props.dispatch(removeProductCart(this.props.product))
            },
            mouseEnter: this.mouseEnter.bind(this),
            mouseLeave: this.mouseLeave.bind(this),
            extraCssClass: 'col-xs-offset-11'
          }}
          />
          <Price {...{ value: price * quantity, type: 'separated' }} />
        </div>
      </li>
    )
  }
}

export default connect()(BagItem)
