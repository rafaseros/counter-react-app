import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import App from '../app';

describe('Prueba de App.jsx', () => {
  // test('should be show h1 and subtitle', () => {
  //   // const saludo = 'Hola soy Rafael';
  //   // const { getByText } = render(<App saludo={saludo} />);
  //   // expect(getByText(saludo)).toBeInTheDocument();
  // });

  test('should be show App', () => {
    const saludo = 'hola soy rafael';
    const wrapper = shallow(<App saludo={saludo} />);

    expect(wrapper).toMatchSnapshot();
  });

  test('should be show subtitle', () => {
    const saludo = 'hola soy rafael';
    const subtitle = 'soy un subtitle';
    const wrapper = shallow(<App saludo={saludo} subtitulo={subtitle} />);
    const textSubtitle = wrapper.find('p').text();
    expect(textSubtitle).toBe(subtitle);
  });
});
