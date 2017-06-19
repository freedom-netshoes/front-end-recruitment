/* global describe, it, expect */
import React from 'react'
import Product from './product'
import { shallow } from 'enzyme'

describe('Testing <Product /> component', () => {
  it('renders the Product component', () => {
    const component = shallow(<Product />)
    expect(component).toHaveLength(1)
  })

  it('Testing snapshop in Product ', () => {
    let testObj = {
      'id': 1,
      'sku': '18644119330491312',
      'title': 'Camisa Nike Corinthians II',
      'description': '14/15 s/nº',
      'availableSizes': ['S', 'G', 'GG', 'GGG'],
      'style': 'Preta com listras brancas',
      'price': 229.9,
      'installments': 9,
      'currencyId': 'BRL',
      'currencyFormat': 'R$',
      'isFreeShipping': true,
      'quantity': 2
    }
    let component = shallow(<Product {...{ testObj }} />)
    expect(component).toMatchSnapshot()
  })
})
