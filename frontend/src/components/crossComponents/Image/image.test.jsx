/* global describe, it, expect */
import React from 'react'
import Image from './image'
import { shallow } from 'enzyme'

describe('Testing <Image /> component', () => {
  it('renders the Image component', () => {
    const component = shallow(< Image />)
    expect(component).toHaveLength(1)
  })

  it('Testing <Image /> snapshop', () => {
    const component = shallow(<Image {...{
      sku: '18644119330491312',
      title: 'Camisa Nike Corinthians II',
      isThumb: false
    }} />)
    expect(component).toMatchSnapshot()
  })
})
