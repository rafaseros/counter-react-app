import React from 'react';
import { render } from '@testing-library/react';
import App from '../app';

describe('Prueba de App.jsx', () => {
  test('should be show h1 and subtitle', () => {
    const saludo = 'Hola soy Rafael';
    const { getByText } = render(<App saludo={saludo} />);
    expect(getByText(saludo)).toBeInTheDocument();
  });
});
