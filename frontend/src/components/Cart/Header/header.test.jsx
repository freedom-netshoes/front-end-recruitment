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
  it('should test snapshop in <Header >', () => {
    let component = shallow(<Header store={getStore()} size={10} />)
    expect(component).toMatchSnapshot()
  })
  // it('should button to be clicked', () => {
  //   const component = shallow(<Header store={getStore()} size={10} />)
  //   expect(component).toMatchSnapshot()
  //   component.find('ButtonDismiss').simulate('click')
  //   expect(component).toMatchSnapshot()
  // })
})
