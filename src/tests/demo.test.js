describe('Pruebas en el archivo demo.test.js', () => {
  test('los strings deben ser iguales', () => {
    //1.- Inicializacion

    const mensaje = 'hola mundo';
    const mensaje2 = `hola mundo`;

    expect(mensaje).toBe(mensaje2);
  });
});
