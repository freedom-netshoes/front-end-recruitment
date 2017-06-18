/* global describe, it, expect */
import React from 'react'
import BagItem from './bag-item'
import getStore from '../../../resources/store'
import { shallow } from 'enzyme'

describe('Testing <BagItem /> component', () => {
  it('renders the BagItem component', () => {
    const component = shallow(<BagItem store={getStore()} />)
    expect(component).toHaveLength(1)
  })
})
