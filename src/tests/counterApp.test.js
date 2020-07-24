import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import CounterApp from '../counterApp';

describe('Test de counterApp.js', () => {
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
});
