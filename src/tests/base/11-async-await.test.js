import { getImagen } from '../../base/11-async-await';

describe('Pruebas de 11-async-await.js', () => {
  test('should be turn a url', async () => {
    const url = await getImagen(); 
  });
});
