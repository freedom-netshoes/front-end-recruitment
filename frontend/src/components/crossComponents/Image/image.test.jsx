import React from 'react'
import Image from './Image'
import { shallow } from 'enzyme'

describe('Testing <Image /> component', () => {
  it('renders the Image component', () => {
    const component = shallow(< Image / >)
    expect(component).toHaveLength(1)
  })
})
