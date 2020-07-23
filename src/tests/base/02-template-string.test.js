import '@testing-library/jest-dom';

import { getSaludo } from '../../base/02-template-string';

describe('Pruebas en template string', () => {
  test('prueba en el metodo getSaludo', () => {
    const name = 'rafael';

    const saludo = getSaludo(name);

    expect(saludo).toBe(`Hola ${name}`);
  });

  test('Probar funcion con valor por defecto ', () => {
      const saludo = getSaludo()
      expect(saludo).toBe(`Hola Carlos`)
  })
  
});
