/* global describe, it, expect */
import React from 'react'
import Price from './price'
import { shallow } from 'enzyme'

describe('Testing <Price /> component', () => {
  it('renders the Price component', () => {
    const component = shallow(<Price />)
    expect(component).toHaveLength(1)
  })

  it('Testing <Price /> snapshop [Full]', () => {
    const component = shallow(<Price {...{
      value: 0,
      type: 'full'
    }} />)
    expect(component).toMatchSnapshot()
  })

  it('Testing <Price /> snapshop [Separated]', () => {
    const component = shallow(<Price {...{
      value: 0,
      type: 'separated'
    }} />)
    expect(component).toMatchSnapshot()
  })
})
