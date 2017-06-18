/* global describe, it, expect */
import React from 'react'
import SubTotal from './sub-total'
import { shallow } from 'enzyme'

describe('Testing <SubTotal /> component', () => {
  it('renders the SubTotal component', () => {
    const component = shallow(<SubTotal />)
    expect(component).toHaveLength(1)
  })
})
