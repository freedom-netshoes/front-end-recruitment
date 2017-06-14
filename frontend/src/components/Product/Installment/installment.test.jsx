import React from 'react'
import Installment from './installment'
import { shallow } from 'enzyme'

describe('Testing <Installment /> component', () => {
    it('renders the Installment component', () => {
        const component = shallow( < Installment / > );
        expect(component).toHaveLength(1);
    })
})