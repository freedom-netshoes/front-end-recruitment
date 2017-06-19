/* global describe, it, expect */
import React from 'react'
import BagItem from './bag-item'
import getStore from '../../../resources/store'
import { shallow } from 'enzyme'

describe('Testing <BagItem /> component', () => {
  it('renders the BagItem component', () => {
    const component = shallow(<BagItem store={getStore()} />)
    expect(component).toHaveLength(1)
  })
  it('Testing snapshop in BagItem ', () => {
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
    let component = shallow(<BagItem store={getStore()} product={testObj} />)
    expect(component).toMatchSnapshot()
  })
})
