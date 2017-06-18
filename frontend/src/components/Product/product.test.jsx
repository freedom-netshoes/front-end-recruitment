/* global describe, it, expect */
import React from 'react'
import Product from './product'
import { shallow } from 'enzyme'

describe('Testing <Product /> component', () => {
  it('renders the Product component', () => {
    const component = shallow(<Product />)
    expect(component).toHaveLength(1)
  })
})
