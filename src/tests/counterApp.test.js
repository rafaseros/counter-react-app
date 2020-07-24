import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import CounterApp from '../counterApp';

describe('Test de counterApp.js', () => {
  beforeEach(() => {
    //   Aca se puede reiniciar cualquier constante antes de cada prueba
  });

  test('should be counterApp componenet', () => {
    const value = 10;
    const wrapper = shallow(<CounterApp value={value} />);

    expect(wrapper).toMatchSnapshot();
  });

  test('should be show defaul value 100', () => {
    const wrapper = shallow(<CounterApp />);
    const texth2 = wrapper.find('h2').text();
    expect(parseInt(texth2)).toBe(100);
  });

  test('should increment counter if user click on button +1', () => {
    const wrapper = shallow(<CounterApp />);
    wrapper.find('button').at(0).simulate('click');
    const textCounter = wrapper.find('h2').text();

    expect(textCounter).toBe('101');
  });
  test('should decrement counter if user click on button -1', () => {
    const wrapper = shallow(<CounterApp />);
    wrapper.find('button').at(2).simulate('click');
    const textCounter = wrapper.find('h2').text();

    expect(textCounter).toBe('99');
  });
});
