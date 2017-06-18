/* global describe, it, expect */
import React from 'react'
import Quantity from './quantity'
import { shallow } from 'enzyme'

describe('Testing <Quantity /> component', () => {
  it('renders the Quantity component', () => {
    const component = shallow(<Quantity />)
    expect(component).toHaveLength(1)
  })
})
