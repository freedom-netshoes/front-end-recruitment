'use strict';

import { shallow } from 'enzyme';
import Aba from './';

it('Should Aba match to snapshot without props', () => {
  let tree = shallow(<Aba />);
  expect(tree).toMatchSnapshot();
});

it('Should Aba match to snapshot with mouseover anonymous func', () => {
  let tree = shallow(<Aba abrirCarrinho={() => {}}/>);
  expect(tree).toMatchSnapshot();
});

it('Should Aba match to snapshot simulating mouseover', () => {
  let tree = shallow(<Aba abrirCarrinho={() => {}}/>);
  tree.find('.aba-class').simulate('mouseover'); // <--- tem q adicionar esse className ao elemento
  expect(tree).toMatchSnapshot();
});


// A ideia aqui é fazer testes passando o máximo possível de variações de props para testar cada snapshot. Tem os testes com enzyme que simula e testa o componente de verdade, mas aí precisaria olhar melhor a documentação no site.
