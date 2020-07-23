import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';
import heroes from '../../data/heroes';

describe('Test de 08-imp-exp.js', () => {
  test('should be return heroe by id', () => {
    const idtest = 1;
    const heroe = getHeroeById(idtest);
    const heroeData = heroes.find((h) => h.id === idtest);
    expect(heroe).toEqual(heroeData);
  });

  test('should be return heroe undefined', () => {
    const heroe = getHeroeById(10);

    expect(heroe).toBe(undefined);
  });

  test('should be return a array of heroes by owner', () => {
    const owner = 'DC';
    const myheroes = getHeroesByOwner(owner);
    const heroesData = heroes.filter((h) => h.owner === owner);
    expect(myheroes).toEqual(heroesData);
  });

  test('should be return a array with leng = 2 if owner is Marvel', () => {
    const owner = 'Marvel';
    const myheroes = getHeroesByOwner(owner);

    expect(myheroes.length).toEqual(2);
  });
});
