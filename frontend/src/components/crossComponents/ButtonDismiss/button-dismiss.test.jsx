/* global describe, it, expect */
import React from 'react'
import ButtonDismiss from './button-dismiss'
import { shallow } from 'enzyme'

describe('Testing <ButtonDismiss /> component', () => {
  it('renders the ButtonDismiss component', () => {
    const component = shallow(<ButtonDismiss />)
    expect(component).toHaveLength(1)
  })

  it('Testing <ButtonDismiss /> snapshop', () => {
    const component = shallow(<ButtonDismiss />)
    expect(component).toMatchSnapshot()
  })
})
