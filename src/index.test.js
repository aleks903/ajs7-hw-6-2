import Character from './index.js';

test('Проверка атаки', () => {
  const heroes1 = new Character('Лучник', 'Bowman');
  heroes1.damage(10);
  const received = heroes1;
  const expected = {
    name: 'Лучник',
    type: 'Bowman',
    health: 94,
    attack: 10,
    defence: 40,
  };

  expect(received).toEqual(expected);
});
