/* global describe, it, expect */
import React from 'react'
import Header from './header'
import { shallow } from 'enzyme'
import getStore from '../../../resources/store'

describe('Testing <Header /> component', () => {
  it('renders the Header component', () => {
    const component = shallow(<Header store={getStore()} />)
    expect(component).toHaveLength(1)
  })
})
