/* global describe, it, expect */
import React from 'react'
import Cart from './Cart'
import { shallow } from 'enzyme'

describe('Testing <Cart /> component', () => {
  it('renders the Cart component', () => {
    const component = shallow(< Cart / >)
    expect(component).toHaveLength(1)
  })
})
