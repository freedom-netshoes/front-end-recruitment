'use strict';

import { shallow } from 'enzyme';
import React from 'react';
import CarrinhoCabecalho from './';

it('Should CarrinhoCabecalho match to snapshot without props', () => {
  let tree = shallow(<CarrinhoCabecalho />);
  expect(tree).toMatchSnapshot();
});

it('Should CarrinhoCabecalho match to snapshot with anonymous props', () => {
  let tree = shallow(<CarrinhoCabecalho imgPath='' titulo='' quantidadeCarrinho='' />);
  expect(tree).toMatchSnapshot();
});

it('Should CarrinhoCabecalho match to snapshot simulating props', () => {
  let tree = shallow(<CarrinhoCabecalho imgPath='img/bag.svg' titulo='SACOLA' quantidadeCarrinho="0" />);  
  expect(tree).toMatchSnapshot();
});