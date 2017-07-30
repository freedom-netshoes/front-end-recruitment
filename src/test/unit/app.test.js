// src/tests/unit/App.test.js
import React from 'react'
import App from '../../js/main/app'
import {mount} from 'enzyme'

test('welcomes the user to React', function () {
  const wrapper = mount(<App />)

  expect(wrapper.text()).toContain('Welcome to React')
})