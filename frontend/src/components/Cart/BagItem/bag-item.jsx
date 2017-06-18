import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import CSSModules from 'react-css-modules'
import Image from '../../Product/Image/image'
import Quantity from './Quantity/quantity'
import Title from '../../Product/Title/title'
import ItemSize from './ItemSize/item-size'
import Price from '../../Product/Price/price'
import ButtonDismiss from '../BagItem/ButtonDismiss/button-dismiss'

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
      <li className={this.state.mouseOver ? 'bag-item row middle-xs remove' : 'bag-item row middle-xs'}>
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
            mouseLeave: this.mouseLeave.bind(this)
          }}
          />
          <Price {...{ value: price, type: 'separated' }} />
        </div>
      </li>
    )
  }
}

export default connect()(BagItem)
