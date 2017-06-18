/* global describe, it, expect */
import React from 'react'
import Title from './title'
import { shallow } from 'enzyme'

describe('Testing <Title /> component', () => {
  it('renders the Title component', () => {
    const component = shallow(<Title />)
    expect(component).toHaveLength(1)
  })
})
