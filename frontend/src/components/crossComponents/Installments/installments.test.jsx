/* global describe, it, expect */
import React from 'react'
import Installments from './installments'
import { shallow } from 'enzyme'

describe('Testing <Installments /> component', () => {
  it('renders the Installments component', () => {
    const component = shallow(<Installments />)
    expect(component).toHaveLength(1)
  })

  it('Testing <Installments /> snapshop [Simple]', () => {
    const component = shallow(<Installments {...{
      value: 0,
      installments: 0,
      type: 'simple'
    }} />)
    expect(component).toMatchSnapshot()
  })

  it('Testing <Installments /> snapshop [Complete]', () => {
    const component = shallow(<Installments {...{
      value: 0,
      installments: 0,
      type: 'complete'
    }} />)
    expect(component).toMatchSnapshot()
  })
})
