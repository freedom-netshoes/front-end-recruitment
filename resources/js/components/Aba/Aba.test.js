'use strict';

import { shallow } from 'enzyme';
import React from 'react';
import Aba from './';

it('Should Aba match to snapshot without props', () => {
  let tree = shallow(<Aba />);
  expect(tree).toMatchSnapshot();
});

it('Should Aba match to snapshot with mouseover anonymous func', () => {
  let tree = shallow(<Aba abrirCarrinho={() => {}} />);
  expect(tree).toMatchSnapshot();
});

it('Should Aba match to snapshot simulating mouseover', () => {
  let tree = shallow(<Aba abrirCarrinho={() => {}} />);
  tree.find('.aba').simulate('mouseover');
  expect(tree).toMatchSnapshot();
});