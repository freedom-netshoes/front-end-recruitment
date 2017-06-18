/* global describe, it, expect */
import React from 'react'
import ItemSize from './item-size'
import { shallow } from 'enzyme'

describe('Testing <ItemSize /> component', () => {
  it('renders the ItemSize component', () => {
    const component = shallow(<ItemSize />)
    expect(component).toHaveLength(1)
  })
})
