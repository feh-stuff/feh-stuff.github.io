'use strict';

let blessings = require('./blessing-data.js');


function getBlessingTypes() {
  return ["-", "Earth", "Fire", "Water", "Wind", "Light", "Dark", "Astra", "Anima"];
}

function getBlessingOptions(blessingType) {
  return ["-"].concat(blessings
      .filter(blessing => blessing.type === blessingType)
      .map(blessing => blessing.hero));
}

function getAllBlessings() {
  return blessings;
}

function getBlessing(hero) {
  for (let i = 0; i < blessings.length; i++) {
    if (blessings[i].hero === hero) {
      return blessings[i];
    }
  }
  return null;
}

function isLegendaryHero(hero) {
  return Boolean(getBlessing(hero));
}

module.exports = {
  getBlessing: getBlessing,
  getAllBlessings: getAllBlessings,
  getBlessingOptions: getBlessingOptions,
  getBlessingTypes: getBlessingTypes,
  isLegendaryHero: isLegendaryHero
};
