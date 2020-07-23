import { retornaArreglo } from '../../base/07-deses-arr';

describe('Pruebas en 07-deses-arr.js', () => {
  test('should be return a string and a number', () => {
    const [letras, numeros] = retornaArreglo();

    expect(letras).toBe('ABC');
    expect(typeof letras).toBe('string');
    expect(numeros).toBe(123);
    expect(typeof numeros).toBe('number');
  });
});
