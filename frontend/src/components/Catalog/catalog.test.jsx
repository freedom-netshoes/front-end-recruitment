/* global describe, it, expect */
import React from 'react'
import Catalog from './catalog'
import { shallow } from 'enzyme'
import getStore from '../../resources/store'

describe('Testing <Catalog /> component', () => {
  it('renders the Catalog component', () => {
    const component = shallow(<Catalog store={getStore()} />)
    expect(component).toHaveLength(1)
  })

  it('testing the Catalog snapshot', () => {
    const component = shallow(<Catalog store={getStore()} />)
    expect(component).toMatchSnapshot()
  })
})
