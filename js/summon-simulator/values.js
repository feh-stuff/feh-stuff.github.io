module.exports = {
  ORB_PULL_COST: [5, 4, 4, 4, 3],
  ORB_MONEY_COST: 0.533,
  IMAGES: {
    blue: 'img/assets/orbs-blue.png',
    red: 'img/assets/orbs-red.png',
    green: 'img/assets/orbs-green.png',
    neutral: 'img/assets/orbs-gray.png'
  },
  IV: [
    {boon: 'hp', bane: 'atk'},{boon: 'hp', bane: 'spd'},{boon: 'hp', bane: 'def'},{boon: 'hp', bane: 'res'},
    {boon: 'atk', bane: 'hp'},{boon: 'atk', bane: 'spd'},{boon: 'atk', bane: 'def'},{boon: 'atk', bane: 'res'},
    {boon: 'spd', bane: 'hp'},{boon: 'spd', bane: 'atk'},{boon: 'spd', bane: 'def'},{boon: 'spd', bane: 'res'},
    {boon: 'def', bane: 'hp'},{boon: 'def', bane: 'atk'},{boon: 'def', bane: 'spd'},{boon: 'def', bane: 'res'},
    {boon: 'res', bane: 'hp'},{boon: 'res', bane: 'atk'},{boon: 'res', bane: 'spd'},{boon: 'res', bane: 'def'},
    {boon: '-', bane: '-'}
  ],
  POOL_COLOR_ORDER: ['Red', 'Blue', 'Green', 'Neutral'],
  POOL_WEAPON_ORDER: ['Sword', 'Lance', 'Axe', 'Tome', 'Breath', 'Tome', 'Bow', 'Dagger', 'Staff']
};
