/* global describe, it, expect */
import React from 'react'
import Quantity from './quantity'
import { shallow } from 'enzyme'

describe('Testing <Quantity /> component', () => {
  it('renders the Quantity component', () => {
    const component = shallow(<Quantity />)
    expect(component).toHaveLength(1)
  })

  it('testando snapshot do componente passando prop quantity', () => {
    let component = shallow(<Quantity quantity={12} />)
    expect(component).toMatchSnapshot()
  })
})
