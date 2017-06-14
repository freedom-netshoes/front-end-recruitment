import React from 'react'
import Price from './price'
import { shallow } from 'enzyme'

describe('Testing <Price /> component', () => {
    it('renders the Price component', () => {
        const component = shallow( <Price/>);
        expect(component).toHaveLength(1);
    })
})