/* global describe, it, expect */
import React from 'react'
import Installments from './installments'
import { shallow } from 'enzyme'

describe('Testing <Installments /> component', () => {
  it('renders the Installments component', () => {
    const component = shallow(< Installments / >)
    expect(component).toHaveLength(1)
  })
})
