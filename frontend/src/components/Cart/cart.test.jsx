/* global describe, it, expect */
import React from 'react'
import Cart from './cart'
import { shallow } from 'enzyme'
import getStore from '../../resources/store'

describe('Testing <Cart /> component', () => {
  it('renders the Cart component', () => {
    const component = shallow(<Cart store={getStore()} />)
    expect(component).toHaveLength(1)
  })

  it('testing <Cart /> snapshot', () => {
    const component = shallow(<Cart store={getStore()} />)
    expect(component).toMatchSnapshot()
  })
})
