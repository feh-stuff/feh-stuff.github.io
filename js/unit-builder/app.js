(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

let blessings = require('./blessing-data.js');


function getBlessingTypes() {
  return ["-", "Earth", "Fire", "Water", "Wind"];
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

},{"./blessing-data.js":2}],2:[function(require,module,exports){
module.exports = [
  {
    hero: "Fjorm",
    type: "Water",
    stats: { hp: 3, spd: 3 },
    icon: 0
  },
  {
    hero: "Gunnthrá",
    type: "Wind",
    stats: { hp: 3, res: 4 },
    icon: 1
  },
  {
    hero: "Ike (Legendary Heroes)",
    type: "Earth",
    stats: { hp: 3, atk: 2 },
    icon: 2
  },
  {
    hero: "Ephraim (Legendary Heroes)",
    type: "Fire",
    stats: { hp: 3, def: 4 },
    icon: 3
  }
];

},{}],3:[function(require,module,exports){
'use strict';

let data = require('./hero-data.js');
let excludeInheritance = ['Alfonse', 'Sharena', 'Anna'];

function getAllHeroes() {
  return data;
};

function getHero(name) {
  for (let i = 0; i < data.length; i++) {
    if (data[i].name === name) {
      return data[i];
    }
  }
};

function getHeroes(nameList) {
  return data.filter(hero => nameList.includes(hero.name));
};

function getSummoningPool(pool, banner) {
  let targetDate = new Date(banner.startDate);
  let summonPool = {
    r3: [],
    r4: [],
    r5: []
  };
  for (let i = 0; i < data.length; i++) {
    if (targetDate < new Date(data[i].releaseDate) || data[i].limited || data[i].ghb || data[i].ttReward) {
      continue;
    }
    if (data[i].rarity3 && data[i].rarity3.includes(pool)) {
      summonPool.r3.push(data[i]);
    }
    if (data[i].rarity4 && data[i].rarity4.includes(pool) && !banner.excludeFromRarity4.includes(data[i].name)) {
      summonPool.r4.push(data[i]);
    }
    if (data[i].rarity5 && data[i].rarity5.includes(pool) && !banner.excludeFromRarity5.includes(data[i].name)) {
      summonPool.r5.push(data[i]);
    }
  }
  return summonPool;
};

function getInheritanceList(skillName, optimize = false) {
  let result = [];
  for (let i = 0; i < data.length; i++) {
    if (excludeInheritance.includes(data[i].name)) {
      continue;
    }

    for (let j = 0; j < data[i].skills.length; j++) {
      if (data[i].skills[j].name === skillName) {
        result.push({
          name: data[i].name,
          rarity: data[i].skills[j].rarity,
          rank: data[i].ttReward ? 1.4 :
              data[i].limited ? 1.3 :
              data[i].ghb ? 1.2  :
              data[i].rarity3 ? 1 : 1.1
        });
        break;
      }
    }
  }

  if (optimize) {
    // if (result.length > 3) {
    //   let min = result.reduce((acc, res) => Math.min(acc, res.rarity), 5);
    //   if (min < 5) {
    //     result = result.filter(res => res.rarity < 5).sort();
    //   }
    // }
    result.sort((a,b) => {
      if (a.rank === b.rank) {
        return a.rarity - b.rarity;
      } else {
        return a.rank - b.rank;
      }
    });
  }

  return result;
};

function getInheritancePrereqList(skillList) {
  let inheritList = skillList.map(skill => getInheritanceList(skill, true));
  let lowestRarity = inheritList[0].reduce((acc, hero) => Math.min(acc, hero.rarity), 5);
  let keptHeroes = [];

  inheritList[0] = inheritList[0].filter(hero => {
    if (hero.rarity <= lowestRarity) {
      keptHeroes.push(hero.name);
      return true;
    }
    return false;
  });

  for (let i = 1; i < inheritList.length; i++) {
    inheritList[i] = inheritList[i].filter(hero => keptHeroes.includes(hero.name));
  }
  return inheritList;
}

function hasSkill(hero, skill, rarity) {
  for (let i = 0; i < hero.skills.length; i++) {
    if (hero.skills[i].name === skill && hero.skills[i].rarity <= rarity) {
      return true;
    }
  }
  return false;
}


module.exports = {
  getAllHeroes: getAllHeroes,
  getHero: getHero,
  getHeroes: getHeroes,
  getSummoningPool: getSummoningPool,
  getInheritanceList: getInheritanceList,
  getInheritancePrereqList: getInheritancePrereqList,
  hasSkill: hasSkill
}

},{"./hero-data.js":4}],4:[function(require,module,exports){
module.exports = [
  {
    name: "Abel",
    title: "The Panther",
    releaseDate: "Feb 02, 2017",
    colorType: "Blue",
    weaponType: "Lance",
    moveType: "Cavalry",
    rarity4: ["pool1"],
    rarity5: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Abel.png",
      main: "img/heroes-main/Abel.png"
    },
    skills: [
      { name: "Iron Lance", rarity: 4 },
      { name: "Steel Lance", rarity: 4 },
      { name: "Brave Lance", rarity: 4 },
      { name: "Brave Lance+", rarity: 5 },
      { name: "Holy Vestments", rarity: 4 },
      { name: "Aegis", rarity: 4 },
      { name: "HP +3", rarity: 4 },
      { name: "HP +4", rarity: 4 },
      { name: "HP +5", rarity: 5 },
      { name: "Swordbreaker 1", rarity: 4 },
      { name: "Swordbreaker 2", rarity: 4 },
      { name: "Swordbreaker 3", rarity: 4 }
    ],
    stats: {
      level1: { hp: 17, atk: 7, spd: 8, def: 8, res: 6 },
      level40: { hp: [ 35, 39, 42 ], atk: [ 30, 33, 36 ], spd: [ 29, 32, 35 ], def: [ 22, 25, 28 ], res: [ 22, 25, 29 ] },
      level1_4: { hp: 16, atk: 6, spd: 8, def: 8, res: 5 },
      level40_4: { hp: [ 33, 36, 39 ], atk: [ 27, 30, 33 ], spd: [ 27, 30, 33 ], def: [ 21, 24, 27 ], res: [ 20, 23, 26 ] }
    }
  },
  {
    name: "Alfonse",
    title: "Prince of Askr",
    releaseDate: "Feb 02, 2017",
    colorType: "Red",
    weaponType: "Sword",
    moveType: "Infantry",
    rarity2: ["pool1"],
    rarity3: ["pool1"],
    rarity4: ["pool1"],
    limited: true,
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Alfonse.png",
      main: "img/heroes-main/Alfonse.png"
    },
    skills: [
      {  name: "Iron Sword", rarity: 2 },
      {  name: "Steel Sword", rarity: 2 },
      {  name: "Silver Sword", rarity: 3 },
      {  name: "Fólkvangr", rarity: 5 },
      {  name: "Daylight", rarity: 2 },
      {  name: "Sol", rarity: 4 },
      {  name: "Death Blow 1", rarity: 2 },
      {  name: "Death Blow 2", rarity: 2 },
      {  name: "Death Blow 3", rarity: 4 },
      {  name: "Spur Atk 1", rarity: 3 },
      {  name: "Spur Atk 2", rarity: 4 },
      {  name: "Spur Atk 3", rarity: 5 }
    ],
    stats: {
      level1: { hp: 19, atk: 9, spd: 6, def: 8, res: 5 },
      level40: { hp: [ 40, 43, 46 ], atk: [ 32, 35, 38 ], spd: [ 22, 25, 29 ], def: [ 29, 32, 35 ], res: [ 19, 22, 25 ] },
      level1_4: { hp: 18, atk: 9, spd: 5, def: 8, res: 4 },
      level40_4: { hp: [ 37, 40, 43 ], atk: [ 30, 33, 36 ], spd: [ 20, 23, 26 ], def: [ 27, 30, 33 ], res: [ 17, 20, 23 ] }
    }
  },
  {
    name: "Alm",
    title: "Hero of Prophecy",
    releaseDate: "Apr 14, 2017",
    colorType: "Red",
    weaponType: "Sword",
    moveType: "Infantry",
    rarity5: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Alm.png",
      main: "img/heroes-main/Alm.png"
    },
    skills: [
      { name: "Iron Sword", rarity: 5 },
      { name: "Steel Sword", rarity: 5 },
      { name: "Silver Sword", rarity: 5 },
      { name: "Falchion", rarity: 5 },
      { name: "Dragon Gaze", rarity: 5 },
      { name: "Draconic Aura", rarity: 5 },
      { name: "Attack +1", rarity: 5 },
      { name: "Attack +2", rarity: 5 },
      { name: "Attack +3", rarity: 5 },
      { name: "Windsweep 1", rarity: 5 },
      { name: "Windsweep 2", rarity: 5 },
      { name: "Windsweep 3", rarity: 5 }
    ],
    stats: {
      level1: { hp: 21, atk: 9, spd: 6, def: 6, res: 5 },
      level40: { hp: [ 42, 45, 48 ], atk: [ 30, 33, 36 ], spd: [ 27, 30, 33 ], def: [ 24, 28, 31 ], res: [ 19, 22, 25 ] }
    }
  },
  {
    name: "Amelia",
    title: "Rose of the War",
    releaseDate: "Aug 15, 2017",
    colorType: "Green",
    weaponType: "Axe",
    moveType: "Armored",
    rarity5: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Amelia.png",
      main: "img/heroes-main/Amelia.png"
    },
    skills: [
      { name: "Iron Axe", rarity: 5 },
      { name: "Steel Axe", rarity: 5 },
      { name: "Slaying Axe", rarity: 5 },
      { name: "Slaying Axe+", rarity: 5 },
      { name: "Holy Vestments", rarity: 5 },
      { name: "Sacred Cowl", rarity: 5 },
      { name: "Earth Boost 1", rarity: 5 },
      { name: "Earth Boost 2", rarity: 5 },
      { name: "Earth Boost 3", rarity: 5 },
      { name: "Armor March 1", rarity: 5 },
      { name: "Armor March 2", rarity: 5 },
      { name: "Armor March 3", rarity: 5 }
    ],
    stats: {
      level1: { hp: 19, atk: 6, spd: 8, def: 9, res: 4 },
      level40: { hp: [ 44, 47, 50 ], atk: [ 31, 34, 37 ], spd: [ 31, 34, 37 ], def: [ 32, 35, 38 ], res: [ 20, 23, 27 ] }
    }
  },
  {
    name: "Anna",
    title: "Commander",
    releaseDate: "Feb 02, 2017",
    colorType: "Green",
    weaponType: "Axe",
    moveType: "Infantry",
    rarity2: ["pool1"],
    rarity3: ["pool1"],
    rarity4: ["pool1"],
    limited: true,
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Anna.png",
      main: "img/heroes-main/Anna.png"
    },
    skills: [
      { name: "Iron Axe", rarity: 2 },
      { name: "Steel Axe", rarity: 2 },
      { name: "Silver Axe", rarity: 3 },
      { name: "Nóatún", rarity: 5 },
      { name: "Night Sky", rarity: 2 },
      { name: "Astra", rarity: 4 },
      { name: "Vantage 1", rarity: 3 },
      { name: "Vantage 2", rarity: 4 },
      { name: "Vantage 3", rarity: 5 },
      { name: "Spur Res 1", rarity: 2 },
      { name: "Spur Res 2", rarity: 2 },
      { name: "Spur Res 3", rarity: 4 }
    ],
    stats: {
      level1: { hp: 19, atk: 7, spd: 10, def: 5, res: 6 },
      level40: { hp: [ 37, 41, 44 ], atk: [ 25, 29, 32 ], spd: [ 35, 38, 41 ], def: [ 19, 22, 25 ], res: [ 24, 28, 31 ] },
      level1_4: { hp: 18, atk: 7, spd: 10, def: 4, res: 5 },
      level40_4: { hp: [ 35, 38, 41 ], atk: [ 24, 27, 30 ], spd: [ 33, 36, 39 ], def: [ 17, 20, 23 ], res: [ 22, 25, 28 ] }
    }
  },
  {
    name: "Arden",
    title: "Strong and Tough",
    releaseDate: "Oct 23, 2017",
    colorType: "Red",
    weaponType: "Sword",
    moveType: "Armored",
    rarity4: ["pool1"],
    rarity5: ["pool1"],
    ttReward: true,
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Arden.png",
      main: "img/heroes-main/Arden.png"
    },
    skills: [
      { name: "Iron Sword", rarity: 4 },
      { name: "Steel Sword", rarity: 4 },
      { name: "Brave Sword", rarity: 4 },
      { name: "Brave Sword+", rarity: 5 },
      { name: "Buckler", rarity: 4 },
      { name: "Pavise", rarity: 4 },
      { name: "Follow-Up Ring", rarity: 5 },
      { name: "Spur Def 1", rarity: 4 },
      { name: "Drive Def 1", rarity: 4 },
      { name: "Drive Def 2", rarity: 4 }
    ],
    stats: {
      level1: { hp: 25, atk: 10, spd: 3, def: 13, res: 3 },
      level40: { hp: [ 57, 60, 63 ], atk: [ 33, 36, 39 ], spd: [ 12, 16, 19 ], def: [ 38, 41, 44 ], res: [ 12, 16, 19 ] },
      level1_4: { hp: 24, atk: 10, spd: 2, def: 13, res: 2 },
      level40_4: { hp: [ 54, 57, 60 ], atk: [ 31, 34, 37 ], spd: [ 11, 14, 17 ], def: [ 36, 39, 42 ], res: [ 11, 14, 17 ] }
    }
  },
  {
    name: "Arthur",
    title: "Hapless Hero",
    releaseDate: "Feb 02, 2017",
    colorType: "Green",
    weaponType: "Axe",
    moveType: "Infantry",
    rarity3: ["pool1"],
    rarity4: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Arthur.png",
      main: "img/heroes-main/Arthur.png"
    },
    skills: [
      { name: "Iron Axe", rarity: 3 },
      { name: "Steel Axe", rarity: 3 },
      { name: "Emerald Axe", rarity: 4 },
      { name: "Emerald Axe+", rarity: 5 },
      { name: "Swap", rarity: 4 },
      { name: "HP +3", rarity: 3 },
      { name: "HP +4", rarity: 3 },
      { name: "HP +5", rarity: 4 },
      { name: "Lancebreaker 1", rarity: 3 },
      { name: "Lancebreaker 2", rarity: 4 },
      { name: "Lancebreaker 3", rarity: 5 }
    ],
    stats: {
      level1: { hp: 19, atk: 8, spd: 7, def: 8, res: 5 },
      level40: { hp: [ 40, 43, 46 ], atk: [ 29, 32, 35 ], spd: [ 25, 29, 32 ], def: [ 26, 30, 33 ], res: [ 21, 24, 28 ] },
      level1_4: { hp: 18, atk: 8, spd: 6, def: 8, res: 4 },
      level40_4: { hp: [ 37, 40, 43 ], atk: [ 27, 30, 33 ], spd: [ 23, 26, 29 ], def: [ 25, 28, 31 ], res: [ 19, 22, 25 ] }
    }
  },
  {
    name: "Arvis",
    title: "Emperor of Flame",
    releaseDate: "Oct 18, 2017",
    colorType: "Red",
    weaponType: "Tome",
    moveType: "Infantry",
    rarity3: ["pool1"],
    rarity4: ["pool1"],
    ghb: true,
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Arvis.png",
      main: "img/heroes-main/Arvis.png"
    },
    skills: [
      { name: "Fire", rarity: 3 },
      { name: "Elfire", rarity: 3 },
      { name: "Bolganone", rarity: 4 },
      { name: "Valflame", rarity: 5 },
      { name: "Rising Flame", rarity: 4 },
      { name: "Growing Flame", rarity: 4 },
      { name: "Recover Ring", rarity: 5 },
      { name: "Def Ploy 1", rarity: 3 },
      { name: "Def Ploy 2", rarity: 3 },
      { name: "Def Ploy 3", rarity: 4 }
    ],
    stats: {
      level1: { hp: 18, atk: 8, spd: 7, def: 4, res: 7 },
      level40: { hp: [ 30, 33, 36 ], atk: [ 31, 34, 37 ], spd: [ 28, 31, 34 ], def: [ 13, 17, 20 ], res: [ 30, 33, 36 ] },
      level1_4: { hp: 17, atk: 8, spd: 7, def: 3, res: 6 },
      level40_4: { hp: [ 28, 31, 34 ], atk: [ 29, 32, 35 ], spd: [ 26, 29, 32 ], def: [ 12, 15, 18 ], res: [ 27, 30, 33 ] }
    }
  },
  {
    name: "Athena",
    title: "Borderland Sword",
    releaseDate: "Jun 14, 2017",
    colorType: "Red",
    weaponType: "Sword",
    moveType: "Infantry",
    rarity4: ["pool1"],
    rarity5: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Athena.png",
      main: "img/heroes-main/Athena.png"
    },
    skills: [
      { name: "Iron Sword", rarity: 4 },
      { name: "Steel Sword", rarity: 4 },
      { name: "Wo Dao", rarity: 4 },
      { name: "Wo Dao+", rarity: 5 },
      { name: "New Moon", rarity: 4 },
      { name: "Moonbow", rarity: 4 },
      { name: "Armored Blow 1", rarity: 4 },
      { name: "Sturdy Blow 1", rarity: 4 },
      { name: "Sturdy Blow 2", rarity: 5 },
      { name: "Sword Exp. 1", rarity: 4 },
      { name: "Sword Exp. 2", rarity: 4 },
      { name: "Sword Exp. 3", rarity: 4 }
    ],
    stats: {
      level1: { hp: 17, atk: 7, spd: 10, def: 8, res: 5 },
      level40: { hp: [ 33, 36, 40 ], atk: [ 28, 31, 34 ], spd: [ 35, 38, 41 ], def: [ 24, 27, 31 ], res: [ 21, 24, 28 ] },
      level1_4: { hp: 16, atk: 6, spd: 10, def: 8, res: 4 },
      level40_4: { hp: [ 31, 34, 37 ], atk: [ 25, 28, 31 ], spd: [ 33, 36, 39 ], def: [ 23, 26, 29 ], res: [ 19, 22, 25 ] }
    }
  },
  {
    name: "Ayra",
    title: "Astra's Wielder",
    releaseDate: "Oct 19, 2017",
    colorType: "Red",
    weaponType: "Sword",
    moveType: "Infantry",
    rarity5: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Ayra.png",
      main: "img/heroes-main/Ayra.png"
    },
    skills: [
      { name: "Iron Sword", rarity: 5 },
      { name: "Steel Sword", rarity: 5 },
      { name: "Silver Sword", rarity: 5 },
      { name: "Ayra's Blade", rarity: 5 },
      { name: "Night Sky", rarity: 5 },
      { name: "Astra", rarity: 5 },
      { name: "Regnal Astra", rarity: 5 },
      { name: "Darting Blow 1", rarity: 5 },
      { name: "Swift Sparrow 1", rarity: 5 },
      { name: "Swift Sparrow 2", rarity: 5 },
      { name: "Desperation 1", rarity: 5 },
      { name: "Desperation 2", rarity: 5 },
      { name: "Desperation 3", rarity: 5 }
    ],
    stats: {
      level1: { hp: 19, atk: 7, spd: 11, def: 7, res: 4 },
      level40: { hp: [ 37, 41, 44 ], atk: [ 30, 33, 36 ], spd: [ 34, 37, 40 ], def: [ 28, 31, 34 ], res: [ 18, 21, 24 ] }
    }
  },
  {
    name: "Azama",
    title: "Carefree Monk",
    releaseDate: "Feb 02, 2017",
    colorType: "Neutral",
    weaponType: "Staff",
    moveType: "Infantry",
    rarity3: ["pool1"],
    rarity4: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Azama.png",
      main: "img/heroes-main/Azama.png"
    },
    skills: [
      { name: "Assault", rarity: 3 },
      { name: "Pain", rarity: 3 },
      { name: "Pain+", rarity: 5 },
      { name: "Heal", rarity: 3 },
      { name: "Reconcile", rarity: 3 },
      { name: "Martyr", rarity: 4 },
      { name: "Imbue", rarity: 3 },
      { name: "Solid-Earth Balm", rarity: 3 },
      { name: "Threaten Atk 1", rarity: 3 },
      { name: "Threaten Atk 2", rarity: 4 },
      { name: "Threaten Atk 3", rarity: 5 }
    ],
    stats: {
      level1: { hp: 19, atk: 4, spd: 7, def: 8, res: 6 },
      level40: { hp: [ 40, 43, 46 ], atk: [ 18, 21, 24 ], spd: [ 23, 26, 30 ], def: [ 29, 32, 35 ], res: [ 22, 25, 29 ] },
      level1_4: { hp: 18, atk: 3, spd: 7, def: 8, res: 5 },
      level40_4: { hp: [ 37, 40, 43 ], atk: [ 16, 19, 22 ], spd: [ 22, 25, 28 ], def: [ 27, 30, 33 ], res: [ 20, 23, 26 ] }
    }
  },
  {
    name: "Azura",
    title: "Lady of the Lake",
    releaseDate: "Feb 02, 2017",
    colorType: "Blue",
    weaponType: "Lance",
    moveType: "Infantry",
    rarity5: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Azura.png",
      main: "img/heroes-main/Azura.png"
    },
    skills: [
      { name: "Iron Lance", rarity: 5 },
      { name: "Steel Lance", rarity: 5 },
      { name: "Sapphire Lance", rarity: 5 },
      { name: "Sapphire Lance+", rarity: 5 },
      { name: "Sing", rarity: 5 },
      { name: "Speed +1", rarity: 5 },
      { name: "Speed +2", rarity: 5 },
      { name: "Speed +3", rarity: 5 },
      { name: "Fortify Res 1", rarity: 5 },
      { name: "Fortify Res 2", rarity: 5 },
      { name: "Fortify Res 3", rarity: 5 }
    ],
    stats: {
      level1: { hp: 17, atk: 5, spd: 7, def: 4, res: 6 },
      level40: { hp: [ 33, 36, 40 ], atk: [ 28, 31, 34 ], spd: [ 30, 33, 36 ], def: [ 18, 21, 24 ], res: [ 24, 28, 31 ] }
    }
  },
  {
    name: "Azura (Happy New Year!)",
    shortName: "Azura",
    title: "Celebratory Spirit",
    releaseDate: "Jan 01, 2018",
    colorType: "Green",
    weaponType: "Axe",
    moveType: "Flying",
    rarity5: ["pool1"],
    limited: true,
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Azura (Happy New Year!).png",
      main: "img/heroes-main/Azura (Happy New Year!).png"
    },
    skills: [
      { name: "Iron Axe", rarity: 5 },
      { name: "Steel Axe", rarity: 5 },
      { name: "Hagoita", rarity: 5 },
      { name: "Hagoita+", rarity: 5 },
      { name: "Sing", rarity: 5 },
      { name: "Earth Dance 1", rarity: 5 },
      { name: "Earth Dance 2", rarity: 5 },
      { name: "Earth Dance 3", rarity: 5 },
      { name: "Hone Spd 1", rarity: 5 },
      { name: "Hone Spd 2", rarity: 5 },
      { name: "Hone Fliers", rarity: 5 }
    ],
    stats: {
      level1: { hp: 15, atk: 6, spd: 9, def: 5, res: 4 },
      level40: { hp: [ 33, 37, 40 ], atk: [ 27, 30, 33 ], spd: [ 32, 35, 38 ], def: [ 19, 22, 25 ], res: [ 22, 26, 29 ] }
    }
  },
  {
    name: "Azura (Performing Arts)",
    shortName: "Azura",
    title: "Lady of Ballads",
    releaseDate: "Sep 29, 2017",
    colorType: "Green",
    weaponType: "Axe",
    moveType: "Infantry",
    rarity5: ["pool1"],
    limited: true,
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Azura (Performing Arts).png",
      main: "img/heroes-main/Azura (Performing Arts).png"
    },
    skills: [
      { name: "Iron Axe", rarity: 5 },
      { name: "Steel Axe", rarity: 5 },
      { name: "Silver Axe", rarity: 5 },
      { name: "Urðr", rarity: 5 },
      { name: "Sing", rarity: 5 },
      { name: "Triangle Adept 1", rarity: 5 },
      { name: "Triangle Adept 2", rarity: 5 },
      { name: "Triangle Adept 3", rarity: 5 },
      { name: "Spur Res 1", rarity: 5 },
      { name: "Drive Res 1", rarity: 5 },
      { name: "Drive Res 2", rarity: 5 }
    ],
    stats: {
      level1: { hp: 16, atk: 6, spd: 8, def: 3, res: 6 },
      level40: { hp: [ 32, 35, 39 ], atk: [ 29, 32, 35 ], spd: [ 31, 34, 37 ], def: [ 17, 20, 23 ], res: [ 24, 28, 31 ] }
    }
  },
  {
    name: "Barst",
    title: "The Hatchet",
    releaseDate: "Feb 02, 2017",
    colorType: "Green",
    weaponType: "Axe",
    moveType: "Infantry",
    rarity3: ["pool1"],
    rarity4: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Barst.png",
      main: "img/heroes-main/Barst.png"
    },
    skills: [
      { name: "Iron Axe", rarity: 3 },
      { name: "Steel Axe", rarity: 3 },
      { name: "Brave Axe", rarity: 4 },
      { name: "Brave Axe+", rarity: 5 },
      { name: "Reposition", rarity: 4 },
      { name: "Knock Back", rarity: 3 },
      { name: "Spur Atk 1", rarity: 3 },
      { name: "Spur Atk 2", rarity: 3 },
      { name: "Spur Atk 3", rarity: 4 }
    ],
    stats: {
      level1: { hp: 20, atk: 9, spd: 8, def: 6, res: 4 },
      level40: { hp: [ 43, 46, 49 ], atk: [ 30, 33, 36 ], spd: [ 29, 32, 35 ], def: [ 27, 30, 33 ], res: [ 13, 17, 20 ] },
      level1_4: { hp: 19, atk: 9, spd: 8, def: 5, res: 3 },
      level40_4: { hp: [ 40, 43, 46 ], atk: [ 28, 31, 34 ], spd: [ 27, 30, 33 ], def: [ 24, 27, 30 ], res: [ 12, 15, 18 ] }
    }
  },
  {
    name: "Bartre",
    title: "Fearless Warrior",
    releaseDate: "Feb 02, 2017",
    colorType: "Green",
    weaponType: "Axe",
    moveType: "Infantry",
    rarity3: ["pool1"],
    rarity4: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Bartre.png",
      main: "img/heroes-main/Bartre.png"
    },
    skills: [
      { name: "Iron Axe", rarity: 3 },
      { name: "Steel Axe", rarity: 3 },
      { name: "Hammer", rarity: 4 },
      { name: "Hammer+", rarity: 5 },
      { name: "Smite", rarity: 4 },
      { name: "Fury 1", rarity: 3 },
      { name: "Fury 2", rarity: 4 },
      { name: "Fury 3", rarity: 5 },
      { name: "Brash Assault 1", rarity: 3 },
      { name: "Brash Assault 2", rarity: 3 },
      { name: "Brash Assault 3", rarity: 4 }
    ],
    stats: {
      level1: { hp: 21, atk: 10, spd: 6, def: 7, res: 3 },
      level40: { hp: [ 46, 49, 52 ], atk: [ 33, 36, 39 ], spd: [ 22, 25, 29 ], def: [ 30, 33, 36 ], res: [ 10, 13, 17 ] },
      level1_4: { hp: 20, atk: 10, spd: 5, def: 7, res: 2 },
      level40_4: { hp: [ 43, 46, 49 ], atk: [ 31, 34, 37 ], spd: [ 20, 23, 26 ], def: [ 28, 31, 34 ], res: [ 9, 12, 15 ] }
    }
  },
  {
    name: "Berkut",
    title: "Prideful Prince",
    releaseDate: "Jul 18, 2017",
    colorType: "Blue",
    weaponType: "Lance",
    moveType: "Cavalry",
    rarity3: ["pool1"],
    rarity4: ["pool1"],
    ghb: true,
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Berkut.png",
      main: "img/heroes-main/Berkut.png"
    },
    skills: [
      { name: "Iron Lance", rarity: 3 },
      { name: "Steel Lance", rarity: 3 },
      { name: "Berkut's Lance", rarity: 4 },
      { name: "Berkut's Lance+", rarity: 5 },
      { name: "Rising Flame", rarity: 4 },
      { name: "Blazing Flame", rarity: 4 },
      { name: "Water Boost 1", rarity: 3 },
      { name: "Water Boost 2", rarity: 4 },
      { name: "Water Boost 3", rarity: 5 },
      { name: "Spur Res 1", rarity: 3 },
      { name: "Spur Res 2", rarity: 3 },
      { name: "Ward Cavalry", rarity: 4 }
    ],
    stats: {
      level1: { hp: 19, atk: 8, spd: 5, def: 7, res: 7 },
      level40: { hp: [ 40, 43, 46 ], atk: [ 31, 34, 37 ], spd: [ 19, 22, 25 ], def: [ 28, 31, 34 ], res: [ 21, 24, 27 ] },
      level1_4: { hp: 18, atk: 8, spd: 4, def: 7, res: 6 },
      level40_4: { hp: [ 37, 40, 43 ], atk: [ 29, 32, 35 ], spd: [ 17, 20, 23 ], def: [ 26, 29, 32 ], res: [ 19, 22, 25 ] }
    }
  },
  {
    name: "Beruka",
    title: "Quiet Assassin",
    releaseDate: "Feb 02, 2017",
    colorType: "Green",
    weaponType: "Axe",
    moveType: "Flying",
    rarity3: ["pool1"],
    rarity4: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Beruka.png",
      main: "img/heroes-main/Beruka.png"
    },
    skills: [
      { name: "Iron Axe", rarity: 3 },
      { name: "Steel Axe", rarity: 3 },
      { name: "Killer Axe", rarity: 4 },
      { name: "Killer Axe+", rarity: 5 },
      { name: "Night Sky", rarity: 4 },
      { name: "Glimmer", rarity: 4 },
      { name: "Defiant Def 1", rarity: 3 },
      { name: "Defiant Def 2", rarity: 3 },
      { name: "Defiant Def 3", rarity: 4 },
      { name: "Lunge", rarity: 3 }
    ],
    stats: {
      level1: { hp: 20, atk: 7, spd: 6, def: 9, res: 5 },
      level40: { hp: [ 43, 46, 49 ], atk: [ 25, 29, 32 ], spd: [ 20, 23, 26 ], def: [ 34, 37, 40 ], res: [ 19, 22, 25 ] },
      level1_4: { hp: 19, atk: 7, spd: 5, def: 9, res: 4 },
      level40_4: { hp: [ 40, 43, 46 ], atk: [ 24, 27, 30 ], spd: [ 18, 21, 24 ], def: [ 32, 35, 38 ], res: [ 17, 20, 23 ] }
    }
  },
  {
    name: "Black Knight",
    title: "Sinister General",
    releaseDate: "Sep 23, 2017",
    colorType: "Red",
    weaponType: "Sword",
    moveType: "Armored",
    rarity4: ["pool1"],
    rarity5: ["pool1"],
    ttReward: true,
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Black Knight.png",
      main: "img/heroes-main/Black Knight.png"
    },
    skills: [
      { name: "Iron Sword", rarity: 4 },
      { name: "Steel Sword", rarity: 4 },
      { name: "Silver Sword", rarity: 4 },
      { name: "Alondite", rarity: 5 },
      { name: "New Moon", rarity: 4 },
      { name: "Luna", rarity: 4 },
      { name: "Black Luna", rarity: 5 },
      { name: "Steady Stance 1", rarity: 4 },
      { name: "Steady Stance 2", rarity: 4 },
      { name: "Steady Stance 3", rarity: 5 },
      { name: "Wings of Mercy 1", rarity: 4 },
      { name: "Wings of Mercy 2", rarity: 4 },
      { name: "Wings of Mercy 3", rarity: 4 }
    ],
    stats: {
      level1: { hp: 22, atk: 10, spd: 8, def: 9, res: 5 },
      level40: { hp: [ 45, 48, 51 ], atk: [ 31, 34, 37 ], spd: [ 31, 34, 37 ], def: [ 32, 35, 38 ], res: [ 14, 18, 21 ] },
      level1_4: { hp: 21, atk: 10, spd: 7, def: 9, res: 4 },
      level40_4: { hp: [ 42, 45, 48 ], atk: [ 29, 32, 35 ], spd: [ 28, 31, 34 ], def: [ 30, 33, 36 ], res: [ 13, 16, 19 ] }
    }
  },
  {
    name: "Boey",
    title: "Skillful Survivor",
    releaseDate: "May 15, 2017",
    colorType: "Green",
    weaponType: "Tome",
    moveType: "Infantry",
    rarity4: ["pool1"],
    rarity5: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Boey.png",
      main: "img/heroes-main/Boey.png"
    },
    skills: [
      { name: "Wind", rarity: 4 },
      { name: "Elwind", rarity: 4 },
      { name: "Gronnowl", rarity: 4 },
      { name: "Gronnowl+", rarity: 5 },
      { name: "Glowing Ember", rarity: 4 },
      { name: "Ignis", rarity: 4 },
      { name: "Earth Boost 1", rarity: 4 },
      { name: "Earth Boost 2", rarity: 4 },
      { name: "Earth Boost 3", rarity: 4 },
      { name: "Renewal 1", rarity: 4 },
      { name: "Renewal 2", rarity: 4 },
      { name: "Renewal 3", rarity: 5 }
    ],
    stats: {
      level1: { hp: 19, atk: 7, spd: 5, def: 8, res: 5 },
      level40: { hp: [ 40, 43, 46 ], atk: [ 25, 29, 32 ], spd: [ 23, 27, 30 ], def: [ 29, 32, 35 ], res: [ 14, 18, 21 ] },
      level1_4: { hp: 18, atk: 7, spd: 4, def: 8, res: 4 },
      level40_4: { hp: [ 37, 40, 43 ], atk: [ 24, 27, 30 ], spd: [ 21, 24, 27 ], def: [ 27, 30, 33 ], res: [ 13, 16, 19 ] }
    }
  },
  {
    name: "Caeda",
    title: "Talys's Heart",
    releaseDate: "Feb 02, 2017",
    colorType: "Red",
    weaponType: "Sword",
    moveType: "Flying",
    rarity4: ["pool1"],
    rarity5: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Caeda.png",
      main: "img/heroes-main/Caeda.png"
    },
    skills: [
      { name: "Iron Sword", rarity: 4 },
      { name: "Steel Sword", rarity: 4 },
      { name: "Armorslayer", rarity: 4 },
      { name: "Armorslayer+", rarity: 5 },
      { name: "Wing Sword", rarity: 5 },
      { name: "Rally Speed", rarity: 4 },
      { name: "Darting Blow 1", rarity: 4 },
      { name: "Darting Blow 2", rarity: 4 },
      { name: "Darting Blow 3", rarity: 5 },
      { name: "Fortify Res 1", rarity: 4 },
      { name: "Fortify Res 2", rarity: 4 },
      { name: "Fortify Fliers", rarity: 4 }
    ],
    stats: {
      level1: { hp: 17, atk: 6, spd: 9, def: 5, res: 10 },
      level40: { hp: [ 33, 36, 40 ], atk: [ 22, 25, 29 ], spd: [ 34, 37, 40 ], def: [ 21, 24, 28 ], res: [ 31, 34, 37 ] },
      level1_4: { hp: 16, atk: 5, spd: 9, def: 4, res: 10 },
      level40_4: { hp: [ 31, 34, 37 ], atk: [ 20, 23, 26 ], spd: [ 32, 35, 38 ], def: [ 19, 22, 25 ], res: [ 29, 32, 35 ] }
    }
  },
  {
    name: "Caeda (Bridal Blessings)",
    shortName: "Caeda",
    title: "Talys's Bride",
    releaseDate: "May 30, 2017",
    colorType: "Blue",
    weaponType: "Tome",
    moveType: "Infantry",
    rarity5: ["pool1"],
    limited: true,
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Caeda (Bridal Blessings).png",
      main: "img/heroes-main/Caeda (Bridal Blessings).png"
    },
    skills: [
      { name: "Thunder", rarity: 5 },
      { name: "Elthunder", rarity: 5 },
      { name: "Blessed Bouquet", rarity: 5 },
      { name: "Blessed Bouquet+", rarity: 5 },
      { name: "Chilling Wind", rarity: 5 },
      { name: "Iceberg", rarity: 5 },
      { name: "Resistance +1", rarity: 5 },
      { name: "Atk/Res 1", rarity: 5 },
      { name: "Atk/Res 2", rarity: 5 },
      { name: "Hone Spd 1", rarity: 5 },
      { name: "Hone Spd 2", rarity: 5 },
      { name: "Hone Spd 3", rarity: 5 }
    ],
    stats: {
      level1: { hp: 16, atk: 7, spd: 9, def: 4, res: 8 },
      level40: { hp: [ 30, 33, 36 ], atk: [ 25, 29, 32 ], spd: [ 34, 37, 40 ], def: [ 16, 19, 22 ], res: [ 26, 30, 33 ] }
    }
  },
  {
    name: "Cain",
    title: "The Bull",
    releaseDate: "Feb 02, 2017",
    colorType: "Red",
    weaponType: "Sword",
    moveType: "Cavalry",
    rarity4: ["pool1"],
    rarity5: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Cain.png",
      main: "img/heroes-main/Cain.png"
    },
    skills: [
      { name: "Iron Sword", rarity: 4 },
      { name: "Steel Sword", rarity: 4 },
      { name: "Brave Sword", rarity: 4 },
      { name: "Brave Sword+", rarity: 5 },
      { name: "Buckler", rarity: 4 },
      { name: "Escutcheon", rarity: 4 },
      { name: "Wings of Mercy 1", rarity: 4 },
      { name: "Wings of Mercy 2", rarity: 4 },
      { name: "Wings of Mercy 3", rarity: 4 },
      { name: "Threaten Atk 1", rarity: 4 },
      { name: "Threaten Atk 2", rarity: 4 },
      { name: "Threaten Atk 3", rarity: 5 }
    ],
    stats: {
      level1: { hp: 18, atk: 8, spd: 6, def: 8, res: 6 },
      level40: { hp: [ 39, 42, 45 ], atk: [ 29, 32, 35 ], spd: [ 29, 32, 35 ], def: [ 24, 27, 31 ], res: [ 18, 21, 24 ] },
      level1_4: { hp: 17, atk: 8, spd: 5, def: 8, res: 5 },
      level40_4: { hp: [ 36, 39, 42 ], atk: [ 27, 30, 33 ], spd: [ 26, 29, 32 ], def: [ 23, 26, 29 ], res: [ 16, 19, 22 ] }
    }
  },
  {
    name: "Camilla",
    title: "Bewitching Beauty",
    releaseDate: "Feb 02, 2017",
    colorType: "Green",
    weaponType: "Axe",
    moveType: "Flying",
    rarity4: ["pool1"],
    rarity5: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Camilla.png",
      main: "img/heroes-main/Camilla.png"
    },
    skills: [
      { name: "Iron Axe", rarity: 4 },
      { name: "Steel Axe", rarity: 4 },
      { name: "Brave Axe", rarity: 4 },
      { name: "Brave Axe+", rarity: 5 },
      { name: "Dragon Gaze", rarity: 4 },
      { name: "Draconic Aura", rarity: 4 },
      { name: "Darting Blow 1", rarity: 4 },
      { name: "Darting Blow 2", rarity: 4 },
      { name: "Darting Blow 3", rarity: 5 },
      { name: "Savage Blow 1", rarity: 4 },
      { name: "Savage Blow 2", rarity: 4 },
      { name: "Savage Blow 3", rarity: 4 }
    ],
    stats: {
      level1: { hp: 18, atk: 8, spd: 8, def: 6, res: 7 },
      level40: { hp: [ 34, 37, 41 ], atk: [ 26, 30, 33 ], spd: [ 29, 32, 35 ], def: [ 24, 28, 31 ], res: [ 28, 31, 34 ] },
      level1_4: { hp: 17, atk: 8, spd: 8, def: 5, res: 6 },
      level40_4: { hp: [ 32, 35, 38 ], atk: [ 25, 28, 31 ], spd: [ 27, 30, 33 ], def: [ 22, 25, 28 ], res: [ 25, 28, 31 ] }
    }
  },
  {
    name: "Camilla (Happy New Year!)",
    shortName: "Camilla",
    title: "Holiday Traveler",
    releaseDate: "Jan 01, 2018",
    colorType: "Red",
    weaponType: "Sword",
    moveType: "Flying",
    rarity5: ["pool1"],
    limited: true,
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Camilla (Happy New Year!).png",
      main: "img/heroes-main/Camilla (Happy New Year!).png"
    },
    skills: [
      { name: "Iron Sword", rarity: 5 },
      { name: "Steel Sword", rarity: 5 },
      { name: "Kadomatsu", rarity: 5 },
      { name: "Kadomatsu+", rarity: 5 },
      { name: "Dragon Gaze", rarity: 5 },
      { name: "Draconic Aura", rarity: 5 },
      { name: "Spd/Def Bond 1", rarity: 5 },
      { name: "Spd/Def Bond 2", rarity: 5 },
      { name: "Spd/Def Bond 3", rarity: 5 },
      { name: "Spur Def 1", rarity: 5 },
      { name: "Spur Def 2", rarity: 5 },
      { name: "Ward Fliers", rarity: 5 }
    ],
    stats: {
      level1: { hp: 18, atk: 9, spd: 9, def: 7, res: 4 },
      level40: { hp: [ 36, 40, 43 ], atk: [ 30, 33, 36 ], spd: [ 32, 35, 38 ], def: [ 28, 31, 34 ], res: [ 20, 23, 27 ] }
    }
  },
  {
    name: "Camilla (Spring Festival)",
    shortName: "Camilla",
    title: "Spring Princess",
    releaseDate: "Mar 30, 2017",
    colorType: "Green",
    weaponType: "Tome",
    moveType: "Flying",
    rarity5: ["pool1"],
    limited: true,
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Camilla (Spring Festival).png",
      main: "img/heroes-main/Camilla (Spring Festival).png"
    },
    skills: [
      { name: "Wind", rarity: 5 },
      { name: "Elwind", rarity: 5 },
      { name: "Green Egg", rarity: 5 },
      { name: "Green Egg+", rarity: 5 },
      { name: "Rally Attack", rarity: 5 },
      { name: "Defiant Spd 1", rarity: 5 },
      { name: "Defiant Spd 2", rarity: 5 },
      { name: "Defiant Spd 3", rarity: 5 },
      { name: "Live for Bounty", rarity: 5 }
    ],
    stats: {
      level1: { hp: 17, atk: 9, spd: 6, def: 8, res: 4 },
      level40: { hp: [ 35, 39, 42 ], atk: [ 32, 35, 38 ], spd: [ 22, 25, 29 ], def: [ 26, 30, 33 ], res: [ 16, 19, 22 ] }
    }
  },
  {
    name: "Camus",
    title: "Sable Knight",
    releaseDate: "Jun 02, 2017",
    colorType: "Blue",
    weaponType: "Lance",
    moveType: "Cavalry",
    rarity3: ["pool1"],
    rarity4: ["pool1"],
    ghb: true,
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Camus.png",
      main: "img/heroes-main/Camus.png"
    },
    skills: [
      { name: "Iron Lance", rarity: 3 },
      { name: "Steel Lance", rarity: 3 },
      { name: "Silver Lance", rarity: 4 },
      { name: "Gradivus", rarity: 5 },
      { name: "Rising Thunder", rarity: 4 },
      { name: "Growing Thunder", rarity: 4 },
      { name: "Grani's Shield", rarity: 4 },
      { name: "Spur Atk 1", rarity: 3 },
      { name: "Spur Atk 2", rarity: 3 },
      { name: "Goad Cavalry", rarity: 4 }
    ],
    stats: {
      level1: { hp: 18, atk: 8, spd: 9, def: 7, res: 4 },
      level40: { hp: [ 39, 42, 45 ], atk: [ 29, 32, 35 ], spd: [ 30, 33, 36 ], def: [ 28, 31, 34 ], res: [ 13, 17, 20 ] },
      level1_4: { hp: 17, atk: 8, spd: 9, def: 6, res: 3 },
      level40_4: { hp: [ 36, 39, 42 ], atk: [ 27, 30, 33 ], spd: [ 28, 31, 34 ], def: [ 25, 28, 31 ], res: [ 12, 15, 18 ] }
    }
  },
  {
    name: "Catria",
    title: "Middle Whitewing",
    releaseDate: "Feb 02, 2017",
    colorType: "Blue",
    weaponType: "Lance",
    moveType: "Flying",
    rarity4: ["pool1"],
    rarity5: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Catria.png",
      main: "img/heroes-main/Catria.png"
    },
    skills: [
      { name: "Iron Lance", rarity: 3 },
      { name: "Steel Lance", rarity: 3 },
      { name: "Killer Lance", rarity: 4 },
      { name: "Killer Lance+", rarity: 5 },
      { name: "New Moon", rarity: 4 },
      { name: "Luna", rarity: 4 },
      { name: "Armored Blow 1", rarity: 3 },
      { name: "Armored Blow 2", rarity: 3 },
      { name: "Armored Blow 3", rarity: 4 },
      { name: "Seal Atk 1", rarity: 3 },
      { name: "Seal Atk 2", rarity: 4 },
      { name: "Seal Atk 3", rarity: 5 }
    ],
    stats: {
      level1: { hp: 17, atk: 7, spd: 10, def: 7, res: 6 },
      level40: { hp: [ 35, 39, 42 ], atk: [ 28, 31, 34 ], spd: [ 31, 34, 37 ], def: [ 25, 29, 32 ], res: [ 22, 25, 29 ] },
      level1_4: { hp: 16, atk: 7, spd: 10, def: 6, res: 5 },
      level40_4: { hp: [ 33, 36, 39 ], atk: [ 26, 29, 32 ], spd: [ 29, 32, 35 ], def: [ 23, 26, 29 ], res: [ 20, 23, 26 ] }
    }
  },
  {
    name: "Cecilia",
    title: "Etrurian General",
    releaseDate: "Feb 02, 2017",
    colorType: "Green",
    weaponType: "Tome",
    moveType: "Cavalry",
    rarity3: ["pool1"],
    rarity4: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Cecilia.png",
      main: "img/heroes-main/Cecilia.png"
    },
    skills: [
      { name: "Wind", rarity: 1 },
      { name: "Elwind", rarity: 3 },
      { name: "Gronnraven", rarity: 4 },
      { name: "Gronnraven+", rarity: 5 },
      { name: "Rally Resistance", rarity: 4 },
      { name: "Attack +1", rarity: 3 },
      { name: "Attack +2", rarity: 4 },
      { name: "Attack +3", rarity: 5 },
      { name: "Escape Route 1", rarity: 1 },
      { name: "Escape Route 2", rarity: 2 },
      { name: "Escape Route 3", rarity: 4 }
    ],
    stats: {
      level1: { hp: 17, atk: 8, spd: 6, def: 5, res: 7 },
      level40: { hp: [ 33, 36, 40 ], atk: [ 29, 32, 35 ], spd: [ 22, 25, 29 ], def: [ 19, 22, 25 ], res: [ 25, 29, 32 ] },
      level1_4: { hp: 16, atk: 8, spd: 5, def: 4, res: 7 },
      level40_4: { hp: [ 31, 34, 37 ], atk: [ 27, 30, 33 ], spd: [ 20, 23, 26 ], def: [ 17, 20, 23 ], res: [ 24, 27, 30 ] }
    }
  },
  {
    name: "Celica",
    title: "Caring Princess",
    releaseDate: "May 15, 2017",
    colorType: "Red",
    weaponType: "Tome",
    moveType: "Infantry",
    rarity5: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Celica.png",
      main: "img/heroes-main/Celica.png"
    },
    skills: [
      { name: "Fire", rarity: 5 },
      { name: "Elfire", rarity: 5 },
      { name: "Bolganone", rarity: 5 },
      { name: "Ragnarok", rarity: 5 },
      { name: "Rising Light", rarity: 5 },
      { name: "Blazing Light", rarity: 5 },
      { name: "Distant Def 1", rarity: 5 },
      { name: "Distant Def 2", rarity: 5 },
      { name: "Distant Def 3", rarity: 5 },
      { name: "Spur Def 1", rarity: 5 },
      { name: "Spur Def 2", rarity: 5 },
      { name: "Spur Def 3", rarity: 5 }
    ],
    stats: {
      level1: { hp: 17, atk: 8, spd: 7, def: 5, res: 7 },
      level40: { hp: [ 35, 39, 42 ], atk: [ 29, 32, 35 ], spd: [ 30, 33, 36 ], def: [ 19, 22, 25 ], res: [ 19, 22, 25 ] }
    }
  },
  {
    name: "Celica (Fallen Heroes)",
    shortName: "Celica",
    title: "Imprisoned Soul",
    releaseDate: "Feb 22, 2018",
    colorType: "Red",
    weaponType: "Sword",
    moveType: "Infantry",
    rarity5: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Celica (Fallen Heroes).png",
      main: "img/heroes-main/Celica (Fallen Heroes).png"
    },
    skills: [
      { name: "Iron Sword", rarity: 5 },
      { name: "Steel Sword", rarity: 5 },
      { name: "Silver Sword", rarity: 5 },
      { name: "Beloved Zofia", rarity: 5 },
      { name: "New Moon", rarity: 5 },
      { name: "Luna", rarity: 5 },
      { name: "Chill Spd 1", rarity: 5 },
      { name: "Chill Spd 2", rarity: 5 },
      { name: "Chill Spd 3", rarity: 5 },
      { name: "Hone Atk 1", rarity: 5 },
      { name: "Hone Atk 2", rarity: 5 },
      { name: "Hone Atk 3", rarity: 5 }
    ],
    stats: {
      level1: { hp:18, atk: 9, spd: 9, def: 5, res: 7 },
      level40: { hp: [ 36, 40, 43 ], atk: [ 32, 35, 38 ], spd: [ 32, 35, 38 ], def: [ 23, 27, 30 ], res: [ 23, 26, 30 ] }
    }
  },
  {
    name: "Charlotte (Bridal Blessings)",
    shortName: "Charlotte",
    title: "Money Maiden",
    releaseDate: "May 30, 2017",
    colorType: "Blue",
    weaponType: "Lance",
    moveType: "Infantry",
    rarity5: ["pool1"],
    limited: true,
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Charlotte (Bridal Blessings).png",
      main: "img/heroes-main/Charlotte (Bridal Blessings).png"
    },
    skills: [
      { name: "Iron Lance", rarity: 5 },
      { name: "Steel Lance", rarity: 5 },
      { name: "First Bite", rarity: 5 },
      { name: "First Bite+", rarity: 5 },
      { name: "Smite", rarity: 5 },
      { name: "Wind Boost 1", rarity: 5 },
      { name: "Wind Boost 2", rarity: 5 },
      { name: "Wind Boost 3", rarity: 5 },
      { name: "Threaten Atk 1", rarity: 5 },
      { name: "Threaten Atk 2", rarity: 5 },
      { name: "Threaten Atk 3", rarity: 5 }
    ],
    stats: {
      level1: { hp: 20, atk: 10, spd: 8, def: 5, res: 4 },
      level40: { hp: [ 43, 46, 49 ], atk: [ 33, 36, 39 ], spd: [ 29, 32, 35 ], def: [ 21, 24, 28 ], res: [ 16, 19, 22 ] }
    }
  },
  {
    name: "Cherche",
    title: "Wyvern Friend",
    releaseDate: "Feb 02, 2017",
    colorType: "Green",
    weaponType: "Axe",
    moveType: "Flying",
    rarity3: ["pool1"],
    rarity4: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Cherche.png",
      main: "img/heroes-main/Cherche.png"
    },
    skills: [
      { name: "Iron Axe", rarity: 3 },
      { name: "Steel Axe", rarity: 3 },
      { name: "Hammer", rarity: 4 },
      { name: "Hammer+", rarity: 5 },
      { name: "Pivot", rarity: 4 },
      { name: "Attack +1", rarity: 3 },
      { name: "Attack +2", rarity: 3 },
      { name: "Attack +3", rarity: 4 },
      { name: "Fortify Def 1", rarity: 3 },
      { name: "Fortify Def 2", rarity: 4 },
      { name: "Fortify Def 3", rarity: 5 }
    ],
    stats: {
      level1: { hp: 20, atk: 10, spd: 6, def: 8, res: 3 },
      level40: { hp: [ 43, 46, 49 ], atk: [ 35, 38, 41 ], spd: [ 22, 25, 29 ], def: [ 29, 32, 35 ], res: [ 12, 16, 19 ] },
      level1_4: { hp: 19, atk: 10, spd: 5, def: 8, res: 2 },
      level40_4: { hp: [ 40, 43, 46 ], atk: [ 33, 36, 39 ], spd: [ 20, 23, 26 ], def: [ 27, 30, 33 ], res: [ 11, 14, 17 ] }
    }
  },
  {
    name: "Chrom",
    title: "Exalted Prince",
    releaseDate: "Feb 02, 2017",
    colorType: "Red",
    weaponType: "Sword",
    moveType: "Infantry",
    rarity4: ["pool1"],
    rarity5: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Chrom.png",
      main: "img/heroes-main/Chrom.png"
    },
    skills: [
      { name: "Iron Sword", rarity: 4 },
      { name: "Steel Sword", rarity: 4 },
      { name: "Silver Sword", rarity: 4 },
      { name: "Falchion", rarity: 5 },
      { name: "Daylight", rarity: 4 },
      { name: "Sol", rarity: 4 },
      { name: "Aether", rarity: 5 },
      { name: "Defiant Def 1", rarity: 4 },
      { name: "Defiant Def 2", rarity: 4 },
      { name: "Defiant Def 3", rarity: 4 },
      { name: "Spur Def 1", rarity: 4 },
      { name: "Spur Def 2", rarity: 4 },
      { name: "Spur Def 3", rarity: 5 }
    ],
    stats: {
      level1: { hp: 21, atk: 9, spd: 6, def: 7, res: 4 },
      level40: { hp: [ 44, 47, 50 ], atk: [ 34, 37, 40 ], spd: [ 22, 25, 29 ], def: [ 28, 31, 34 ], res: [ 13, 17, 20 ] },
      level1_4: { hp: 20, atk: 9, spd: 5, def: 7, res: 3 },
      level40_4: { hp: [ 41, 44, 47 ], atk: [ 32, 35, 38 ], spd: [ 20, 23, 26 ], def: [ 26, 29, 32 ], res: [ 12, 15, 18 ] }
    }
  },
  {
    name: "Chrom (Spring Festival)",
    shortName: "Chrom",
    title: "Spring Exalt",
    releaseDate: "Mar 30, 2017",
    weaponType: "Axe",
    colorType: "Green",
    moveType: "Infantry",
    rarity5: ["pool1"],
    limited: true,
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Chrom (Spring Festival).png",
      main: "img/heroes-main/Chrom (Spring Festival).png"
    },
    skills: [
      { name: "Iron Axe", rarity: 5 },
      { name: "Steel Axe", rarity: 5 },
      { name: "Carrot Axe", rarity: 5 },
      { name: "Carrot Axe+", rarity: 5 },
      { name: "Shove", rarity: 5 },
      { name: "Defense +1", rarity: 5 },
      { name: "Atk/Def 1", rarity: 5 },
      { name: "Atk/Def 2", rarity: 5 },
      { name: "Axe Experience 1", rarity: 5 },
      { name: "Axe Experience 2", rarity: 5 },
      { name: "Axe Experience 3", rarity: 5 }
    ],
    stats: {
      level1: { hp: 19, atk: 9, spd: 8, def: 6, res: 5 },
      level40: { hp: [ 40, 43, 46 ], atk: [ 32, 35, 38 ], spd: [ 29, 32, 35 ], def: [ 24, 28, 31 ], res: [ 17, 20, 23 ] }
    }
  },
  {
    name: "Chrom (The Branded King)",
    shortName: "Chrom",
    title: "Knight Exalt",
    releaseDate: "Mar 09, 2018",
    colorType: "Red",
    weaponType: "Sword",
    moveType: "Cavalry",
    rarity5: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Chrom (The Branded King).png",
      main: "img/heroes-main/Chrom (The Branded King).png"
    },
    skills: [
      { name: "Iron Sword", rarity: 5 },
      { name: "Steel Sword", rarity: 5 },
      { name: "Silver Sword", rarity: 5 },
      { name: "Sealed Falchion", rarity: 5 },
      { name: "Daylight", rarity: 5 },
      { name: "Sol", rarity: 5 },
      { name: "Aether", rarity: 5 },
      { name: "Fury 1", rarity: 5 },
      { name: "Fury 2", rarity: 5 },
      { name: "Fury 3", rarity: 5 },
      { name: "Chill Def 1", rarity: 5 },
      { name: "Chill Def 2", rarity: 5 },
      { name: "Chill Def 3", rarity: 5 },
      { name: "Sword Valor 1", rarity: 5 },
      { name: "Sword Valor 2", rarity: 5 },
      { name: "Sword Valor 3", rarity: 5 }
    ],
    stats: {
      level1: { hp: 19, atk: 9, spd: 6, def: 8, res: 4 },
      level40: { hp: [ 37, 41, 44 ], atk: [ 34, 37, 40 ], spd: [ 24, 38, 31 ], def: [ 31, 34, 37 ], res: [ 13, 17, 20 ] }
    }
  },
  {
    name: "Chrom (Winter's Envoy)",
    shortName: "Chrom",
    title: "Gifted Leader",
    releaseDate: "Dec 18, 2017",
    colorType: "Green",
    weaponType: "Axe",
    moveType: "Armored",
    rarity5: ["pool1"],
    limited: true,
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Chrom (Winter's Envoy).png",
      main: "img/heroes-main/Chrom (Winter's Envoy).png"
    },
    skills: [
      { name: "Iron Axe", rarity: 5 },
      { name: "Steel Axe", rarity: 5 },
      { name: "Sack o' Gifts", rarity: 5 },
      { name: "Sack o' Gifts+", rarity: 5 },
      { name: "Pivot", rarity: 5 },
      { name: "Brazen Atk/Def 1", rarity: 5 },
      { name: "Brazen Atk/Def 2", rarity: 5 },
      { name: "Brazen Atk/Def 3", rarity: 5 },
      { name: "Wary Fighter 1", rarity: 5 },
      { name: "Wary Fighter 2", rarity: 5 },
      { name: "Wary Fighter 3", rarity: 5 }
    ],
    stats: {
      level1: { hp: 25, atk: 12, spd: 4, def: 9, res: 5 },
      level40: { hp: [ 48, 51, 54 ],  atk: [ 37, 40, 43 ], spd: [ 16, 19, 22 ], def: [ 32, 35, 38 ], res: [ 26, 29, 32 ] }
    }
  },
  {
    name: "Clair",
    title: "Highborn Flier",
    releaseDate: "Apr 14, 2017",
    colorType: "Blue",
    weaponType: "Lance",
    moveType: "Flying",
    rarity4: ["pool1"],
    rarity5: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Clair.png",
      main: "img/heroes-main/Clair.png"
    },
    skills: [
      { name: "Iron Lance", rarity: 4 },
      { name: "Steel Lance", rarity: 4 },
      { name: "Silver Lance", rarity: 4 },
      { name: "Silver Lance+", rarity: 5 },
      { name: "Harsh Command", rarity: 4 },
      { name: "Hit and Run", rarity: 4 },
      { name: "Spur Spd 1", rarity: 4 },
      { name: "Spur Spd 2", rarity: 4 },
      { name: "Spur Spd 3", rarity: 5 }
    ],
    stats: {
      level1: { hp: 18, atk: 7, spd: 8, def: 5, res: 9 },
      level40: { hp: [ 34, 37, 41 ], atk: [ 23, 26, 30 ], spd: [ 33, 36, 39 ], def: [ 21, 24, 28 ], res: [ 30, 33, 36 ] },
      level1_4: { hp: 17, atk: 6, spd: 8, def: 4, res: 9 },
      level40_4: { hp: [ 32, 35, 38 ], atk: [ 21, 24, 27 ], spd: [ 31, 34, 37 ], def: [ 19, 22, 25 ], res: [ 28, 31, 34 ] }
    }
  },
  {
    name: "Clarine",
    title: "Refined Noble",
    releaseDate: "Feb 02, 2017",
    colorType: "Neutral",
    weaponType: "Staff",
    moveType: "Cavalry",
    rarity3: ["pool1"],
    rarity4: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Clarine.png",
      main: "img/heroes-main/Clarine.png"
    },
    skills: [
      { name: "Assault", rarity: 3 },
      { name: "Fear", rarity: 3 },
      { name: "Fear+", rarity: 3 },
      { name: "Heal", rarity: 3 },
      { name: "Reconcile", rarity: 3 },
      { name: "Martyr", rarity: 5 },
      { name: "Imbue", rarity: 3 },
      { name: "Swift-Winds Balm", rarity: 5 },
      { name: "Resistance +1", rarity: 3 },
      { name: "Resistance +2", rarity: 4 },
      { name: "Resistance +3", rarity: 5 }
    ],
    stats: {
      level1: { hp: 16, atk: 6, spd: 9, def: 5, res: 7 },
      level40: { hp: [ 32, 35, 39 ], atk: [ 22, 25, 29 ], spd: [ 30, 33, 36 ], def: [ 19, 22, 25 ], res: [ 25, 29, 32 ] },
      level1_4: { hp: 15, atk: 5, spd: 9, def: 4, res: 7 },
      level40_4: { hp: [ 30, 33, 36 ], atk: [ 20, 23, 26 ], spd: [ 28, 31, 34 ], def: [ 17, 20, 23 ], res: [ 24, 27, 30 ] }
    }
  },
  {
    name: "Clarisse",
    title: "Sniper in the Dark",
    releaseDate: "Jun 28, 2017",
    colorType: "Neutral",
    weaponType: "Bow",
    moveType: "Infantry",
    rarity3: ["pool1"],
    rarity4: ["pool1"],
    ghb: true,
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Clarisse.png",
      main: "img/heroes-main/Clarisse.png"
    },
    skills: [
      { name: "Iron Bow", rarity: 3 },
      { name: "Steel Bow", rarity: 3 },
      { name: "Clarisse's Bow", rarity: 4 },
      { name: "Clarisse's Bow+", rarity: 5 },
      { name: "Night Sky", rarity: 4 },
      { name: "Glimmer", rarity: 4 },
      { name: "Poison Strike 1", rarity: 3 },
      { name: "Poison Strike 2", rarity: 3 },
      { name: "Poison Strike 3", rarity: 4 },
      { name: "Threaten Def 1", rarity: 3 },
      { name: "Threaten Def 2", rarity: 4 },
      { name: "Threaten Def 3", rarity: 5 }
    ],
    stats: {
      level1: { hp: 18, atk: 7, spd: 8, def: 6, res: 5 },
      level40: { hp: [ 34, 37, 41 ], atk: [ 28, 31, 34 ], spd: [ 31, 34, 37 ], def: [ 22, 25, 28 ], res: [ 17, 20, 23 ] },
      level1_4: { hp: 17, atk: 7, spd: 8, def: 5, res: 4 },
      level40_4: { hp: [ 32, 35, 38 ], atk: [ 26, 29, 32 ], spd: [ 29, 32, 35 ], def: [ 20, 23, 26 ], res: [ 15, 18, 21 ] }
    }
  },
  {
    name: "Clive",
    title: "Idealistic Knight",
    releaseDate: "Aug 11, 2017",
    colorType: "Blue",
    weaponType: "Lance",
    moveType: "Cavalry",
    rarity4: ["pool1"],
    rarity5: ["pool1"],
    ttReward: true,
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Clive.png",
      main: "img/heroes-main/Clive.png"
    },
    skills: [
      { name: "Iron Lance", rarity: 4 },
      { name: "Steel Lance", rarity: 4 },
      { name: "Silver Lance", rarity: 4 },
      { name: "Silver Lance+", rarity: 5 },
      { name: "Buckler", rarity: 4 },
      { name: "Escutcheon", rarity: 4 },
      { name: "Defense +1", rarity: 4 },
      { name: "Defense +2", rarity: 4 },
      { name: "Defense +3", rarity: 4 },
      { name: "Hit and Run", rarity: 4 }
    ],
    stats: {
      level1: { hp: 19, atk: 9, spd: 6, def: 8, res: 4 },
      level40: { hp: [ 42, 45, 48 ], atk: [ 30, 33, 36 ], spd: [ 22, 25, 29 ], def: [ 29, 32, 35 ], res: [ 16, 19, 22 ] },
      level1_4: { hp: 18, atk: 9, spd: 5, def: 8, res: 3 },
      level40_4: { hp: [ 39, 42, 45 ], atk: [ 28, 31, 34 ], spd: [ 20, 23, 26 ], def: [ 27, 30, 33 ], res: [ 14, 17, 20 ] }
    }
  },
  {
    name: "Cordelia",
    title: "Knight Paragon",
    releaseDate: "Feb 02, 2017",
    colorType: "Blue",
    weaponType: "Lance",
    moveType: "Flying",
    rarity4: ["pool1"],
    rarity5: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Cordelia.png",
      main: "img/heroes-main/Cordelia.png"
    },
    skills: [
      { name: "Iron Lance", rarity: 4 },
      { name: "Steel Lance", rarity: 4 },
      { name: "Brave Lance", rarity: 4 },
      { name: "Brave Lance+", rarity: 5 },
      { name: "Night Sky", rarity: 4 },
      { name: "Astra", rarity: 4 },
      { name: "Galeforce", rarity: 5 },
      { name: "Triangle Adept 1", rarity: 4 },
      { name: "Triangle Adept 2", rarity: 4 },
      { name: "Triangle Adept 3", rarity: 5 },
      { name: "Pass 1", rarity: 4 },
      { name: "Pass 2", rarity: 4 },
      { name: "Pass 3", rarity: 4 }
    ],
    stats: {
      level1: { hp: 18, atk: 9, spd: 9, def: 5, res: 6 },
      level40: { hp: [ 36, 40, 43 ], atk: [ 32, 35, 38 ], spd: [ 32, 35, 38 ], def: [ 19, 22, 25 ], res: [ 22, 25, 29 ] },
      level1_4: { hp: 17, atk: 9, spd: 9, def: 4, res: 5 },
      level40_4: { hp: [ 34, 37, 40 ], atk: [ 30, 33, 36 ], spd: [ 30, 33, 36 ], def: [ 17, 20, 23 ], res: [ 20, 23, 26 ] }
    }
  },
  {
    name: "Cordelia (Bridal Blessings)",
    shortName: "Cordelia",
    title: "Perfect Bride",
    releaseDate: "May 30, 2017",
    colorType: "Neutral",
    weaponType: "Bow",
    moveType: "Infantry",
    rarity5: ["pool1"],
    limited: true,
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Cordelia (Bridal Blessings).png",
      main: "img/heroes-main/Cordelia (Bridal Blessings).png"
    },
    skills: [
      { name: "Iron Bow", rarity: 5 },
      { name: "Steel Bow", rarity: 5 },
      { name: "Cupid Arrow", rarity: 5 },
      { name: "Cupid Arrow+", rarity: 5 },
      { name: "Rally Attack", rarity: 5 },
      { name: "Rally Atk/Spd", rarity: 5 },
      { name: "Escape Route 1", rarity: 5 },
      { name: "Escape Route 2", rarity: 5 },
      { name: "Escape Route 3", rarity: 5 },
      { name: "Breath of Life 1", rarity: 5 },
      { name: "Breath of Life 2", rarity: 5 },
      { name: "Breath of Life 3", rarity: 5 }
    ],
    stats: {
      level1: { hp: 17, atk: 9, spd: 9, def: 4, res: 5 },
      level40: { hp: [ 33, 36, 40 ], atk: [ 32, 35, 38 ], spd: [ 32, 35, 38 ], def: [ 16, 19, 22 ], res: [ 19, 22, 25 ] }
    }
  },
  {
    name: "Corrin (F)",
    shortName: "Corrin",
    title: "Fateful Princess",
    releaseDate: "Feb 02, 2017",
    colorType: "Blue",
    weaponType: "Breath",
    moveType: "Infantry",
    rarity3: ["pool1"],
    rarity4: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Corrin (F).png",
      main: "img/heroes-main/Corrin (F).png"
    },
    skills: [
      { name: "Fire Breath", rarity: 3 },
      { name: "Fire Breath+", rarity: 3 },
      { name: "Dark Breath", rarity: 4 },
      { name: "Dark Breath+", rarity: 5 },
      { name: "Dragon Gaze", rarity: 4 },
      { name: "Draconic Aura", rarity: 4 },
      { name: "Seal Res 1", rarity: 3 },
      { name: "Seal Res 2", rarity: 4 },
      { name: "Seal Res 3", rarity: 5 },
      { name: "Hone Atk 1", rarity: 3 },
      { name: "Hone Atk 2", rarity: 3 },
      { name: "Hone Atk 3", rarity: 4 }
    ],
    stats: {
      level1: { hp: 19, atk: 8, spd: 6, def: 8, res: 6 },
      level40: { hp: [ 37, 41, 44 ], atk: [ 24, 27, 31 ], spd: [ 31, 34, 37 ], def: [ 31, 34, 37 ], res: [ 18, 21, 24 ] },
      level1_4: { hp: 18, atk: 8, spd: 5, def: 8, res: 5 },
      level40_4: { hp: [ 35, 38, 41 ], atk: [ 23, 26, 29 ], spd: [ 28, 31, 34 ], def: [ 29, 32, 35 ], res: [ 16, 19, 22 ] }
    }
  },
  {
    name: "Corrin (F) (Nohrian Summer)",
    shortName: "Corrin",
    title: "Novice Vacationer",
    releaseDate: "Jul 28, 2017",
    colorType: "Blue",
    weaponType: "Tome",
    moveType: "Flying",
    rarity5: ["pool1"],
    limited: true,
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Corrin (F) (Nohrian Summer).png",
      main: "img/heroes-main/Corrin (F) (Nohrian Summer).png"
    },
    skills: [
      { name: "Thunder", rarity: 5 },
      { name: "Elthunder", rarity: 5 },
      { name: "Sealife Tome", rarity: 5 },
      { name: "Sealife Tome+", rarity: 5 },
      { name: "Dragon Gaze", rarity: 5 },
      { name: "Dragon Fang", rarity: 5 },
      { name: "Darting Blow 1", rarity: 5 },
      { name: "Swift Strike 1", rarity: 5 },
      { name: "Swift Strike 2", rarity: 5 },
      { name: "Fortify Res 1", rarity: 5 },
      { name: "Fortify Res 2", rarity: 5 },
      { name: "Fortify Fliers", rarity: 5 }
    ],
    stats: {
      level1: { hp: 17, atk: 7, spd: 8, def: 5, res: 7 },
      level40: { hp: [ 31, 34, 37 ], atk: [ 28, 31, 34 ], spd: [ 31, 34, 37 ], def: [ 19, 22, 25 ], res: [ 23, 26, 30 ] }
    }
  },
  {
    name: "Corrin (M)",
    shortName: "Corrin",
    title: "Fateful Prince",
    releaseDate: "Feb 02, 2017",
    colorType: "Red",
    weaponType: "Sword",
    moveType: "Infantry",
    rarity4: ["pool1"],
    rarity5: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Corrin (M).png",
      main: "img/heroes-main/Corrin (M).png"
    },
    skills: [
      { name: "Iron Sword", rarity: 4 },
      { name: "Steel Sword", rarity: 4 },
      { name: "Silver Sword", rarity: 4 },
      { name: "Yato", rarity: 5 },
      { name: "Dragon Gaze", rarity: 4 },
      { name: "Dragon Fang", rarity: 4 },
      { name: "Defense +1", rarity: 4 },
      { name: "Defense +2", rarity: 4 },
      { name: "Defense +3", rarity: 4 },
      { name: "Obstruct 1", rarity: 4 },
      { name: "Obstruct 2", rarity: 4 },
      { name: "Obstruct 3", rarity: 5 }
    ],
    stats: {
      level1: { hp: 20, atk: 8, spd: 8, def: 6, res: 5 },
      level40: { hp: [ 38, 42, 45 ], atk: [ 29, 32, 35 ], spd: [ 29, 32, 35 ], def: [ 24, 28, 31 ], res: [ 21, 24, 28 ] },
      level1_4: { hp: 19, atk: 8, spd: 8, def: 5, res: 4 },
      level40_4: { hp: [ 36, 39, 42 ], atk: [ 27, 30, 33 ], spd: [ 27, 30, 33 ], def: [ 22, 25, 28 ], res: [ 19, 22, 25 ] }
    }
  },
  {
    name: "Corrin (M) (Happy New Year!)",
    shortName: "Corrin",
    title: "Enjoying Tradition",
    releaseDate: "Jan 01, 2018",
    colorType: "Neutral",
    weaponType: "Bow",
    moveType: "Infantry",
    rarity5: ["pool1"],
    limited: true,
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Corrin (M) (Happy New Year!).png",
      main: "img/heroes-main/Corrin (M) (Happy New Year!).png"
    },
    skills: [
      { name: "Iron Bow", rarity: 5 },
      { name: "Steel Bow", rarity: 5 },
      { name: "Hama Ya", rarity: 5 },
      { name: "Hama Ya+", rarity: 5 },
      { name: "Rally Defense", rarity: 5 },
      { name: "Rally Def/Res", rarity: 5 },
      { name: "Defense +1", rarity: 5 },
      { name: "Atk/Def +1", rarity: 5 },
      { name: "Atk/Def +2", rarity: 5 },
      { name: "Spur Def 1", rarity: 5 },
      { name: "Spur Def/Res 1", rarity: 5 },
      { name: "Spur Def/Res 2", rarity: 5 }
    ],
    stats: {
      level1: { hp: 18, atk: 8, spd: 8, def: 6, res: 5 },
      level40: { hp: [ 34, 37, 41 ], atk: [ 29, 32, 35 ], spd: [ 26, 30, 33 ], def: [ 31, 34, 37 ], res: [ 14, 18, 21 ] }
    }
  },
  {
    name: "Deirdre",
    title: "Lady of the Forest",
    releaseDate: "Oct 16, 2017",
    colorType: "Green",
    weaponType: "Tome",
    moveType: "Infantry",
    rarity5: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Deirdre.png",
      main: "img/heroes-main/Deirdre.png"
    },
    skills: [
      { name: "Wind", rarity: 5 },
      { name: "Elwind", rarity: 5 },
      { name: "Rexcalibur", rarity: 5 },
      { name: "Divine Naga", rarity: 5 },
      { name: "Ardent Sacrifice", rarity: 5 },
      { name: "Quick Riposte 1", rarity: 5 },
      { name: "Quick Riposte 2", rarity: 5 },
      { name: "Quick Riposte 3", rarity: 5 },
      { name: "Spd Ploy 1", rarity: 5 },
      { name: "Spd Ploy 2", rarity: 5 },
      { name: "Spd Ploy 3", rarity: 5 }
    ],
    stats: {
      level1: { hp: 17, atk: 9, spd: 6, def: 3, res: 9 },
      level40: { hp: [ 33, 36, 40 ], atk: [ 30, 33, 36 ], spd: [ 24, 28, 31 ], def: [ 12, 16, 19 ], res: [ 32, 35, 38 ] }
    }
  },
  {
    name: "Delthea",
    title: "Free Spirit",
    releaseDate: "Jul 13, 2017",
    colorType: "Blue",
    weaponType: "Tome",
    moveType: "Infantry",
    rarity5: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Delthea.png",
      main: "img/heroes-main/Delthea.png"
    },
    skills: [
      { name: "Thunder", rarity: 5 },
      { name: "Elthunder", rarity: 5 },
      { name: "Thoron", rarity: 5 },
      { name: "Dark Aura", rarity: 5 },
      { name: "Miracle", rarity: 5 },
      { name: "Death Blow 1", rarity: 5 },
      { name: "Death Blow 2", rarity: 5 },
      { name: "Death Blow 3", rarity: 5 },
      { name: "Spur Atk 1", rarity: 5 },
      { name: "Drive Atk 1", rarity: 5 },
      { name: "Drive Atk 2", rarity: 5 }
    ],
    stats: {
      level1: { hp: 16, atk: 10, spd: 8, def: 3, res: 7 },
      level40: { hp: [ 30, 33, 36 ], atk: [ 33, 36, 39 ], spd: [ 31, 34, 37 ], def: [ 10, 13, 17 ], res: [ 28, 31, 34 ] }
    }
  },
  {
    name: "Donnel",
    title: "Village Hero",
    releaseDate: "Feb 02, 2017",
    colorType: "Blue",
    weaponType: "Lance",
    moveType: "Infantry",
    rarity3: ["pool1"],
    rarity4: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Donnel.png",
      main: "img/heroes-main/Donnel.png"
    },
    skills: [
      { name: "Iron Lance", rarity: 1 },
      { name: "Steel Lance", rarity: 3 },
      { name: "Brave Lance", rarity: 4 },
      { name: "Brave Lance+", rarity: 5 },
      { name: "Reciprocal Aid", rarity: 4 },
      { name: "HP +3", rarity: 1 },
      { name: "HP +4", rarity: 2 },
      { name: "HP +5", rarity: 4 },
      { name: "Drag Back", rarity: 3 }
    ],
    stats: {
      level1: { hp: 17, atk: 7, spd: 5, def: 6, res: 4 },
      level40: { hp: [ 40, 43, 46 ], atk: [ 32, 35, 38 ], spd: [ 26, 29, 32 ], def: [ 29, 32, 35 ], res: [ 20, 23, 27 ] },
      level1_4: { hp: 16, atk: 7, spd: 4, def: 6, res: 3 },
      level40_4: { hp: [ 37, 40, 43 ], atk: [ 30, 33, 36 ], spd: [ 23, 26, 29 ], def: [ 27, 30, 33 ], res: [ 18, 21, 24 ] }
    }
  },
  {
    name: "Dorcas",
    title: "Serene Warrior",
    releaseDate: "Nov 15, 2017",
    colorType: "Green",
    weaponType: "Axe",
    moveType: "Infantry",
    rarity5: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Dorcas.png",
      main: "img/heroes-main/Dorcas.png"
    },
    skills: [
      { name: "Iron Axe", rarity: 5 },
      { name: "Steel Axe", rarity: 5 },
      { name: "Silver Axe", rarity: 5 },
      { name: "Stout Tomahawk", rarity: 5 },
      { name: "Dragon Gaze", rarity: 5 },
      { name: "Draconic Aura", rarity: 5 },
      { name: "Fierce Stance 1", rarity: 5 },
      { name: "Fierce Stance 2", rarity: 5 },
      { name: "Fierce Stance 3", rarity: 5 },
      { name: "Quick Riposte 1", rarity: 5 },
      { name: "Quick Riposte 2", rarity: 5 },
      { name: "Quick Riposte 3", rarity: 5 },
      { name: "Infantry Pulse 1", rarity: 5 },
      { name: "Infantry Pulse 2", rarity: 5 },
      { name: "Infantry Pulse 3", rarity: 5 }
    ],
    stats: {
      level1: { hp: 19, atk: 9, spd: 6, def: 9, res: 5 },
      level40: { hp: [ 42, 45, 48 ], atk: [ 32, 35, 38 ], spd: [ 20, 23, 26 ], def: [ 32, 35, 38 ], res: [ 21, 24, 28 ] }
    }
  },
  {
    name: "Draug",
    title: "Gentle Giant",
    releaseDate: "Feb 02, 2017",
    colorType: "Red",
    weaponType: "Sword",
    moveType: "Armored",
    rarity3: ["pool1"],
    rarity4: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Draug.png",
      main: "img/heroes-main/Draug.png"
    },
    skills: [
      { name: "Iron Sword", rarity: 2 },
      { name: "Steel Sword", rarity: 2 },
      { name: "Brave Sword", rarity: 4 },
      { name: "Brave Sword+", rarity: 5 },
      { name: "Buckler", rarity: 4 },
      { name: "Pavise", rarity: 4 },
      { name: "Lunge", rarity: 3 },
      { name: "Spur Def 1", rarity: 3 },
      { name: "Spur Def 2", rarity: 2 },
      { name: "Ward Armor", rarity: 4 }
    ],
    stats: {
      level1: { hp: 24, atk: 8, spd: 6, def: 13, res: 3 },
      level40: { hp: [ 47, 50, 53 ], atk: [ 26, 30, 33 ], spd: [ 29, 32, 35 ], def: [ 36, 39, 42 ], res: [ 15, 18, 21 ] },
      level1_4: { hp: 23, atk: 8, spd: 5, def: 13, res: 2 },
      level40_4: { hp: [ 44, 47, 50 ], atk: [ 25, 28, 31 ], spd: [ 26, 29, 32 ], def: [ 34, 37, 40 ], res: [ 13, 16, 19 ] }
    }
  },
  {
    name: "Effie",
    title: "Army of One",
    releaseDate: "Feb 02, 2017",
    colorType: "Blue",
    weaponType: "Lance",
    moveType: "Armored",
    rarity4: ["pool1"],
    rarity5: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Effie.png",
      main: "img/heroes-main/Effie.png"
    },
    skills: [
      { name: "Iron Lance", rarity: 4 },
      { name: "Steel Lance", rarity: 4 },
      { name: "Silver Lance", rarity: 4 },
      { name: "Silver Lance+", rarity: 5 },
      { name: "Smite", rarity: 4 },
      { name: "Death Blow 1", rarity: 4 },
      { name: "Death Blow 2", rarity: 4 },
      { name: "Death Blow 3", rarity: 5 },
      { name: "Wary Fighter 1", rarity: 4 },
      { name: "Wary Fighter 2", rarity: 4 },
      { name: "Wary Fighter 3", rarity: 4 }
    ],
    stats: {
      level1: { hp: 22, atk: 12, spd: 5, def: 11, res: 4 },
      level40: { hp: [ 47, 50, 53 ], atk: [ 37, 40, 43 ], spd: [ 19, 22, 25 ], def: [ 29, 33, 36 ], res: [ 20, 23, 27 ] },
      level1_4: { hp: 21, atk: 12, spd: 4, def: 11, res: 3 },
      level40_4: { hp: [ 44, 47, 50 ], atk: [ 35, 38, 41 ], spd: [ 17, 20, 23 ], def: [ 28, 31, 34 ], res: [ 18, 21, 24 ] }
    }
  },
  {
    name: "Eirika",
    title: "Restoration Lady",
    releaseDate: "Feb 15, 2017",
    colorType: "Red",
    weaponType: "Sword",
    moveType: "Infantry",
    rarity4: ["pool1"],
    rarity5: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Eirika.png",
      main: "img/heroes-main/Eirika.png"
    },
    skills: [
      { name: "Iron Sword", rarity: 4 },
      { name: "Steel Sword", rarity: 4 },
      { name: "Silver Sword", rarity: 4 },
      { name: "Sieglinde", rarity: 5 },
      { name: "Pivot", rarity: 4 },
      { name: "Drag Back", rarity: 4 },
      { name: "Hone Spd 1", rarity: 4 },
      { name: "Hone Spd 2", rarity: 4 },
      { name: "Hone Spd 3", rarity: 4 }
    ],
    stats: {
      level1: { hp: 18, atk: 7, spd: 9, def: 7, res: 6 },
      level40: { hp: [ 39, 42, 45 ], atk: [ 23, 26, 30 ], spd: [ 32, 35, 38 ], def: [ 23, 26, 30 ], res: [ 24, 28, 31 ] },
      level1_4: { hp: 17, atk: 7, spd: 9, def: 6, res: 5 },
      level40_4: { hp: [ 36, 39, 42 ], atk: [ 22, 25, 28 ], spd: [ 30, 33, 36 ], def: [ 21, 24, 27 ], res: [ 22, 25, 28 ] }
    }
  },
  {
    name: "Eirika (Sacred Memories)",
    shortName: "Eirika",
    title: "Anamnesis Lady",
    releaseDate: "January 25, 2018",
    colorType: "Red",
    weaponType: "Tome",
    moveType: "Cavalry",
    rarity5: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Eirika (Sacred Memories).png",
      main: "img/heroes-main/Eirika (Sacred Memories).png"
    },
    skills: [
      { name: "Flux", rarity: 5 },
      { name: "Ruin", rarity: 5 },
      { name: "Fenrir", rarity: 5 },
      { name: "Gleipnir", rarity: 5 },
      { name: "Rally Attack", rarity: 5 },
      { name: "Rally Atk/Spd", rarity: 5 },
      { name: "Swift Sparrow 1", rarity: 5 },
      { name: "Swift Sparrow 2", rarity: 5 },
      { name: "Desperation 1", rarity: 5 },
      { name: "Desperation 2", rarity: 5 },
      { name: "Desperation 3", rarity: 5 },
      { name: "R Tome Exp. 1", rarity: 5 },
      { name: "R Tome Exp. 2", rarity: 5 },
      { name: "R Tome Exp. 3", rarity: 5 }
    ],
    stats: {
      level1: { hp: 17, atk: 7, spd: 9, def: 5, res: 5 },
      level40: { hp: [33, 36, 40], atk: [28, 31, 34], spd: [32, 35, 38], def: [17, 20, 23], res: [19, 22, 25]}
    }
  },
  {
    name: "Eldigan",
    title: "Lionheart",
    releaseDate: "Feb 27, 2017",
    colorType: "Red",
    weaponType: "Sword",
    moveType: "Cavalry",
    rarity5: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Eldigan.png",
      main: "img/heroes-main/Eldigan.png"
    },
    skills: [
      { name: "Iron Sword", rarity: 5 },
      { name: "Steel Sword", rarity: 5 },
      { name: "Killing Edge", rarity: 5 },
      { name: "Mystletainn", rarity: 5 },
      { name: "Rising Light", rarity: 5 },
      { name: "Growing Light", rarity: 5 },
      { name: "Fury 1", rarity: 5 },
      { name: "Fury 2", rarity: 5 },
      { name: "Fury 3", rarity: 5 },
      { name: "Lunge", rarity: 5 }
    ],
    stats: {
      level1: { hp: 19, atk: 8, spd: 5, def: 8, res: 6 },
      level40: { hp: [ 42, 45, 48 ], atk: [ 29, 32, 35 ], spd: [ 21, 24, 28 ], def: [ 31, 34, 37 ], res: [ 15, 19, 22 ] }
    }
  },
  {
    name: "Elincia",
    title: "Lost Princess",
    releaseDate: "Sep 15, 2017",
    colorType: "Red",
    weaponType: "Sword",
    moveType: "Flying",
    rarity5: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Elincia.png",
      main: "img/heroes-main/Elincia.png"
    },
    skills: [
      { name: "Iron Sword", rarity: 5 },
      { name: "Steel Sword", rarity: 5 },
      { name: "Silver Sword", rarity: 5 },
      { name: "Amiti", rarity: 5 },
      { name: "Ardent Sacrifice", rarity: 5 },
      { name: "Death Blow 1", rarity: 5 },
      { name: "Death Blow 2", rarity: 5 },
      { name: "Death Blow 3", rarity: 5 },
      { name: "Flier Formation 1", rarity: 5 },
      { name: "Flier Formation 2", rarity: 5 },
      { name: "Flier Formation 3", rarity: 5 }
    ],
    stats: {
      level1: { hp: 16, atk: 8, spd: 10, def: 5, res: 8 },
      level40: { hp: [ 32, 35, 39 ], atk: [ 31, 34, 37 ], spd: [ 33, 36, 39 ], def: [ 21, 24, 28 ], res: [ 24, 27, 31 ] }
    }
  },
  {
    name: "Elise",
    title: "Budding Flower",
    releaseDate: "Feb 02, 2017",
    colorType: "Neutral",
    weaponType: "Staff",
    moveType: "Cavalry",
    rarity5: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Elise.png",
      main: "img/heroes-main/Elise.png"
    },
    skills: [
      { name: "Assault", rarity: 5 },
      { name: "Gravity", rarity: 5 },
      { name: "Gravity+", rarity: 5 },
      { name: "Heal", rarity: 5 },
      { name: "Mend", rarity: 5 },
      { name: "Recover", rarity: 5 },
      { name: "Imbue", rarity: 5 },
      { name: "Kindled-Fire Balm", rarity: 5 },
      { name: "Live to Serve 1", rarity: 5 },
      { name: "Live to Serve 2", rarity: 5 },
      { name: "Live to Serve 3", rarity: 5 }
    ],
    stats: {
      level1: { hp: 15, atk: 8, spd: 8, def: 4, res: 8 },
      level40: { hp: [ 27, 30, 33 ], atk: [ 29, 32, 35 ], spd: [ 29, 32, 35 ], def: [ 16, 19, 22 ], res: [ 29, 32, 35 ] }
    }
  },
  {
    name: "Elise (Nohrian Summer)",
    shortName: "Elise",
    title: "Tropical Flower",
    releaseDate: "Jul 28, 2017",
    colorType: "Green",
    weaponType: "Tome",
    moveType: "Infantry",
    rarity5: ["pool1"],
    limited: true,
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Elise (Nohrian Summer).png",
      main: "img/heroes-main/Elise (Nohrian Summer).png"
    },
    skills: [
      { name: "Wind", rarity: 5 },
      { name: "Elwind", rarity: 5 },
      { name: "Hibiscus Tome", rarity: 5 },
      { name: "Hibiscus Tome+", rarity: 5 },
      { name: "Rally Attack", rarity: 5 },
      { name: "Rally Atk/Res", rarity: 5 },
      { name: "Speed +1", rarity: 5 },
      { name: "Spd/Res 1", rarity: 5 },
      { name: "Spd/Res 2", rarity: 5 },
      { name: "G Tome Valor 1", rarity: 5 },
      { name: "G Tome Valor 2", rarity: 5 },
      { name: "G Tome Valor 3", rarity: 5 }
    ],
    stats: {
      level1: { hp: 17, atk: 10, spd: 8, def: 3, res: 6 },
      level40: { hp: [ 31, 34, 37 ], atk: [ 33, 36, 39 ], spd: [ 31, 34, 37 ], def: [ 15, 18, 21 ], res: [ 22, 25, 29 ] }
    }
  },
  {
    name: "Eliwood",
    title: "Knight of Lycia",
    releaseDate: "Feb 02, 2017",
    colorType: "Red",
    weaponType: "Sword",
    moveType: "Cavalry",
    rarity3: ["pool1"],
    rarity4: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Eliwood.png",
      main: "img/heroes-main/Eliwood.png"
    },
    skills: [
      { name: "Iron Sword", rarity: 3 },
      { name: "Steel Sword", rarity: 3 },
      { name: "Silver Sword", rarity: 4 },
      { name: "Durandal", rarity: 5 },
      { name: "Holy Vestments", rarity: 4 },
      { name: "Sacred Cowl", rarity: 4 },
      { name: "Axebreaker 1", rarity: 3 },
      { name: "Axebreaker 2", rarity: 4 },
      { name: "Axebreaker 3", rarity: 5 },
      { name: "Spur Res 1", rarity: 3 },
      { name: "Spur Res 2", rarity: 3 },
      { name: "Ward Cavalry", rarity: 4 }
    ],
    stats: {
      level1: { hp: 17, atk: 7, spd: 8, def: 6, res: 8 },
      level40: { hp: [ 35, 39, 42 ], atk: [ 28, 31, 34 ], spd: [ 26, 30, 33 ], def: [ 20, 23, 26 ], res: [ 29, 32, 35 ] },
      level1_4: { hp: 16, atk: 6, spd: 8, def: 5, res: 8 },
      level40_4: { hp: [ 33, 36, 39 ], atk: [ 25, 28, 31 ], spd: [ 25, 28, 31 ], def: [ 18, 21, 24 ], res: [ 27, 30, 33 ] }
    }
  },
  {
    name: "Eliwood (Love Abounds)",
    shortName: "Eliwood",
    title: "Devoted Love",
    releaseDate: "Feb 09, 2018",
    colorType: "Blue",
    weaponType: "Lance",
    moveType: "Armored",
    rarity4: ["pool1"],
    rarity5: ["pool1"],
    ttReward: true,
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Eliwood (Love Abounds).png",
      main: "img/heroes-main/Eliwood (Love Abounds).png"
    },
    skills: [
      { name: "Iron Lance", rarity: 5 },
      { name: "Steel Lance", rarity: 5 },
      { name: "Casa Blanca", rarity: 5 },
      { name: "Casa Blanca+", rarity: 5 },
      { name: "Rally Attack", rarity: 5 },
      { name: "Rally Atk/Def", rarity: 5 },
      { name: "Fire Boost 1", rarity: 5 },
      { name: "Fire Boost 2", rarity: 5 },
      { name: "Fire Boost 3", rarity: 5 },
      { name: "Spur Atk 1", rarity: 5 },
      { name: "Spur Atk 2", rarity: 5 },
      { name: "Goad Armor", rarity: 5 }
    ],
    stats: {
      level1: { hp: 23, atk: 10, spd: 8, def: 7, res: 7 },
      level40: { hp: [ 44, 47, 50 ], atk: [ 35, 38, 41 ], spd: [ 29, 32, 35 ], def: [ 26, 29, 31 ], res: [ 26, 29, 31 ] },
      level1_4: { hp: 22, atk: 10, spd: 8, def: 6, res: 6 },
      level40_4: { hp: [ 41, 44, 47 ], atk: [ 33, 36, 39 ], spd: [ 27, 30, 33 ], def: [ 23, 26, 29 ], res: [ 23, 26, 29 ] }
    }
  },
  {
    name: "Ephraim",
    title: "Restoration Lord",
    releaseDate: "Feb 15, 2017",
    colorType: "Blue",
    weaponType: "Lance",
    moveType: "Infantry",
    rarity5: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Ephraim.png",
      main: "img/heroes-main/Ephraim.png"
    },
    skills: [
      { name: "Iron Lance", rarity: 5 },
      { name: "Steel Lance", rarity: 5 },
      { name: "Heavy Spear", rarity: 5 },
      { name: "Siegmund", rarity: 5 },
      { name: "New Moon", rarity: 5 },
      { name: "Moonbow", rarity: 5 },
      { name: "Seal Def 1", rarity: 5 },
      { name: "Seal Def 2", rarity: 5 },
      { name: "Seal Def 3", rarity: 5 },
      { name: "Threaten Def 1", rarity: 5 },
      { name: "Threaten Def 2", rarity: 5 },
      { name: "Threaten Def 3", rarity: 5 }
    ],
    stats: {
      level1: { hp: 19, atk: 9, spd: 6, def: 8, res: 5 },
      level40: { hp: [ 42, 45, 48 ], atk: [ 32, 35, 38 ], spd: [ 22, 25, 29 ], def: [ 29, 32, 35 ], res: [ 17, 20, 23 ] }
    }
  },
  {
    name: "Ephraim (Legendary Heroes)",
    shortName: "Ephraim",
    title: "Legendary Lord",
    releaseDate: "Feb 28, 2018",
    colorType: "Blue",
    weaponType: "Lance",
    moveType: "Cavalry",
    rarity5: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Ephraim (Legendary Heroes).png",
      main: "img/heroes-main/Ephraim (Legendary Heroes).png"
    },
    skills: [
      { name: "Iron Lance", rarity: 5 },
      { name: "Steel Lance", rarity: 5 },
      { name: "Silver Lance", rarity: 5 },
      { name: "Flame Siegmund", rarity: 5 },
      { name: "Daylight", rarity: 5},
      { name: "Sol", rarity: 5},
      { name: "Fierce Stance 1", rarity: 5 },
      { name: "Sturdy Stance 1", rarity: 5 },
      { name: "Sturdy Stance 2", rarity: 5 },
      { name: "Solar Brace", rarity: 5 },
      { name: "Fortify Def 1", rarity: 5 },
      { name: "Fortify Def 2", rarity: 5 },
      { name: "Fortify Def 3", rarity: 5 }
    ],
    stats: {
      level1: { hp: 19, atk: 10, spd: 5, def: 9, res: 3 },
      level40: { hp: [ 40, 43, 46 ], atk: [ 33, 36, 39 ], spd: [ 23, 27, 30 ], def: [ 30, 33, 36 ], res: [ 15, 18, 21 ] }
    }
  },
  {
    name: "Est",
    title: "Junior Whitewing",
    releaseDate: "Feb 02, 2017",
    colorType: "Blue",
    weaponType: "Lance",
    moveType: "Flying",
    rarity3: ["pool1"],
    rarity4: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Est.png",
      main: "img/heroes-main/Est.png"
    },
    skills: [
      { name: "Iron Lance", rarity: 3 },
      { name: "Steel Lance", rarity: 3 },
      { name: "Heavy Spear", rarity: 4 },
      { name: "Heavy Spear+", rarity: 5 },
      { name: "Shove", rarity: 4 },
      { name: "Defiant Res 1", rarity: 3 },
      { name: "Defiant Res 2", rarity: 3 },
      { name: "Defiant Res 3", rarity: 4 },
      { name: "Seal Spd 1", rarity: 3 },
      { name: "Seal Spd 2", rarity: 4 },
      { name: "Seal Spd 3", rarity: 5 }
    ],
    stats: {
      level1: { hp: 17, atk: 9, spd: 8, def: 5, res: 8 },
      level40: { hp: [ 33, 36, 40 ], atk: [ 32, 35, 38 ], spd: [ 26, 30, 33 ], def: [ 21, 24, 28 ], res: [ 29, 32, 35 ] },
      level1_4: { hp: 16, atk: 9, spd: 8, def: 4, res: 7 },
      level40_4: { hp: [ 31, 34, 37 ], atk: [ 30, 33, 36 ], spd: [ 25, 28, 31 ], def: [ 19, 22, 25 ], res: [ 26, 29, 32 ] }
    }
  },
  {
    name: "Fae",
    title: "Divine Dragon",
    releaseDate: "Feb 02, 2017",
    colorType: "Green",
    weaponType: "Breath",
    moveType: "Infantry",
    rarity4: ["pool1"],
    rarity5: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Fae.png",
      main: "img/heroes-main/Fae.png"
    },
    skills: [
      { name: "Fire Breath", rarity: 4 },
      { name: "Fire Breath+", rarity: 4 },
      { name: "Light Breath", rarity: 4 },
      { name: "Light Breath+", rarity: 5 },
      { name: "Draw Back", rarity: 4 },
      { name: "Renewal 1", rarity: 4 },
      { name: "Renewal 2", rarity: 4 },
      { name: "Renewal 3", rarity: 4 },
      { name: "Threaten Atk 1", rarity: 4 },
      { name: "Threaten Atk 2", rarity: 4 },
      { name: "Threaten Atk 3", rarity: 5 }
    ],
    stats: {
      level1: { hp: 16, atk: 5, spd: 4, def: 6, res: 8 },
      level40: { hp: [ 43, 46, 50 ], atk: [ 30, 33, 36 ], spd: [ 25, 28, 31 ], def: [ 22, 25, 29 ], res: [ 26, 30, 33 ] },
      level1_4: { hp: 15, atk: 4, spd: 3, def: 6, res: 8 },
      level40_4: { hp: [ 40, 43, 47 ], atk: [ 27, 30, 33 ], spd: [ 22, 25, 28 ], def: [ 21, 24, 27 ], res: [ 25, 28, 31 ] }
    }
  },
  {
    name: "Faye",
    title: "Devoted Heart",
    releaseDate: "Apr 14, 2017",
    colorType: "Neutral",
    weaponType: "Bow",
    moveType: "Infantry",
    rarity5: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Faye.png",
      main: "img/heroes-main/Faye.png"
    },
    skills: [
      { name: "Iron Bow", rarity: 5 },
      { name: "Steel Bow", rarity: 5 },
      { name: "Firesweep Bow", rarity: 5 },
      { name: "Firesweep Bow+", rarity: 5 },
      { name: "Daylight", rarity: 5 },
      { name: "Noontime", rarity: 5 },
      { name: "Wings of Mercy 1", rarity: 5 },
      { name: "Wings of Mercy 2", rarity: 5 },
      { name: "Wings of Mercy 3", rarity: 5 },
      { name: "Bow Exp. 1", rarity: 5 },
      { name: "Bow Exp. 2", rarity: 5 },
      { name: "Bow Exp. 3", rarity: 5 }
    ],
    stats: {
      level1: { hp: 16, atk: 6, spd: 3, def: 4, res: 7 },
      level40: { hp: [ 39, 42, 45 ], atk: [ 27, 30, 33 ], spd: [ 21, 25, 28 ], def: [ 22, 26, 29 ], res: [ 28, 31, 34 ] }
    }
  },
  {
    name: "Felicia",
    title: "Maid Mayhem",
    releaseDate: "Feb 02, 2017",
    colorType: "Neutral",
    weaponType: "Dagger",
    moveType: "Infantry",
    rarity3: ["pool1"],
    rarity4: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Felicia.png",
      main: "img/heroes-main/Felicia.png"
    },
    skills: [
      { name: "Iron Dagger", rarity: 1 },
      { name: "Steel Dagger", rarity: 3 },
      { name: "Silver Dagger", rarity: 4 },
      { name: "Silver Dagger+", rarity: 5 },
      { name: "Felicia's Plate", rarity: 5 },
      { name: "Chilling Wind", rarity: 4 },
      { name: "Glacies", rarity: 4 },
      { name: "Resistance +1", rarity: 3 },
      { name: "Resistance +2", rarity: 4 },
      { name: "Resistance +3", rarity: 5 },
      { name: "Breath of Life 1", rarity: 1 },
      { name: "Breath of Life 2", rarity: 2 },
      { name: "Breath of Life 3", rarity: 4 }
    ],
    stats: {
      level1: { hp: 15, atk: 6, spd: 11, def: 3, res: 9 },
      level40: { hp: [ 31, 34, 38 ], atk: [ 20, 23, 26 ], spd: [ 34, 37, 40 ], def: [ 15, 18, 21 ], res: [ 32, 35, 38 ] },
      level1_4: { hp: 14, atk: 5, spd: 11, def: 2, res: 9 },
      level40_4: { hp: [ 29, 32, 35 ], atk: [ 18, 21, 24 ], spd: [ 32, 35, 38 ], def: [ 13, 16, 19 ], res: [ 30, 33, 36 ] }
    }
  },
  {
    name: "Fir",
    title: "Sword Student",
    releaseDate: "Feb 02, 2017",
    colorType: "Red",
    weaponType: "Sword",
    moveType: "Infantry",
    rarity3: ["pool1"],
    rarity4: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Fir.png",
      main: "img/heroes-main/Fir.png"
    },
    skills: [
      { name: "Iron Sword", rarity: 3 },
      { name: "Steel Sword", rarity: 3 },
      { name: "Killing Edge", rarity: 4 },
      { name: "Killing Edge+", rarity: 5 },
      { name: "Chilling Wind", rarity: 4 },
      { name: "Glacies", rarity: 4 },
      { name: "Speed +1", rarity: 3 },
      { name: "Speed +2", rarity: 3 },
      { name: "Speed +3", rarity: 4 },
      { name: "Pass 1", rarity: 3 },
      { name: "Pass 2", rarity: 4 },
      { name: "Pass 3", rarity: 5 }
    ],
    stats: {
      level1: { hp: 19, atk: 6, spd: 10, def: 5, res: 7 },
      level40: { hp: [ 37, 41, 44 ], atk: [ 22, 25, 29 ], spd: [ 33, 36, 39 ], def: [ 21, 24, 28 ], res: [ 28, 31, 34 ] },
      level1_4: { hp: 18, atk: 5, spd: 10, def: 4, res: 7 },
      level40_4: { hp: [ 35, 38, 41 ], atk: [ 20, 23, 26 ], spd: [ 31, 34, 37 ], def: [ 19, 22, 25 ], res: [ 26, 29, 32 ] }
    }
  },
  {
    name: "Fjorm",
    title: "Princess of Ice",
    releaseDate: "Nov 28, 2017",
    colorType: "Blue",
    weaponType: "Lance",
    moveType: "Infantry",
    rarity5: ["pool1"],
    limited: true,
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Fjorm.png",
      main: "img/heroes-main/Fjorm.png"
    },
    skills: [
      { name: "Iron Lance", rarity: 5 },
      { name: "Steel Lance", rarity: 5 },
      { name: "Silver Lance", rarity: 5 },
      { name: "Leiptr", rarity: 5 },
      { name: "Holy Vestments", rarity: 5 },
      { name: "Sacred Cowl", rarity: 5 },
      { name: "Ice Mirror", rarity: 5 },
      { name: "Atk/Def Bond 1", rarity: 5 },
      { name: "Atk/Def Bond 2", rarity: 5 },
      { name: "Atk/Def Bond 3", rarity: 5 },
      { name: "Shield Pulse 1", rarity: 5 },
      { name: "Shield Pulse 2", rarity: 5 },
      { name: "Shield Pulse 3", rarity: 5 },
      { name: "Spur Atk 1", rarity: 5 },
      { name: "Drive Atk 1", rarity: 5 },
      { name: "Drive Atk 2", rarity: 5 }
    ],
    stats: {
      level1: { hp: 17, atk: 8, spd: 7, def: 8, res: 8 },
      level40: { hp: [ 35, 39, 42 ], atk: [ 26, 30, 33 ], spd: [ 28, 31, 34 ], def: [ 26, 30, 33 ], res: [ 31, 34, 37 ] }
    }
  },
  {
    name: "Florina",
    title: "Lovely Flier",
    releaseDate: "Feb 02, 2017",
    colorType: "Blue",
    weaponType: "Lance",
    moveType: "Flying",
    rarity3: ["pool1"],
    rarity4: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Florina.png",
      main: "img/heroes-main/Florina.png"
    },
    skills: [
      { name: "Iron Lance", rarity: 3 },
      { name: "Steel Lance", rarity: 3 },
      { name: "Heavy Spear", rarity: 4 },
      { name: "Heavy Spear+", rarity: 5 },
      { name: "Ardent Sacrifice", rarity: 4 },
      { name: "Darting Blow 1", rarity: 3 },
      { name: "Darting Blow 2", rarity: 3 },
      { name: "Darting Blow 3", rarity: 4 },
      { name: "Breath of Life 1", rarity: 3 },
      { name: "Breath of Life 2", rarity: 4 },
      { name: "Breath of Life 3", rarity: 5 }
    ],
    stats: {
      level1: { hp: 18, atk: 7, spd: 8, def: 6, res: 8 },
      level40: { hp: [ 39, 42, 45 ], atk: [ 25, 29, 32 ], spd: [ 24, 27, 31 ], def: [ 22, 25, 29 ], res: [ 31, 34, 37 ] },
      level1_4: { hp: 17, atk: 6, spd: 8, def: 5, res: 8 },
      level40_4: { hp: [ 36, 39, 42 ], atk: [ 23, 26, 29 ], spd: [ 23, 26, 29 ], def: [ 20, 23, 26 ], res: [ 29, 32, 35 ] }
    }
  },
  {
    name: "Frederick",
    title: "Polite Knight",
    releaseDate: "Feb 02, 2017",
    colorType: "Green",
    weaponType: "Axe",
    moveType: "Cavalry",
    rarity3: ["pool1"],
    rarity4: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Frederick.png",
      main: "img/heroes-main/Frederick.png"
    },
    skills: [
      { name: "Iron Axe", rarity: 3 },
      { name: "Steel Axe", rarity: 3 },
      { name: "Hammer", rarity: 4 },
      { name: "Hammer+", rarity: 5 },
      { name: "New Moon", rarity: 4 },
      { name: "Luna", rarity: 4 },
      { name: "Wings of Mercy 1", rarity: 3 },
      { name: "Wings of Mercy 2", rarity: 4 },
      { name: "Wings of Mercy 3", rarity: 5 },
      { name: "Fortify Def 1", rarity: 3 },
      { name: "Fortify Def 2", rarity: 3 },
      { name: "Fortify Def 3", rarity: 4 }
    ],
    stats: {
      level1: { hp: 19, atk: 9, spd: 6, def: 8, res: 4 },
      level40: { hp: [ 40, 43, 46 ], atk: [ 32, 35, 38 ], spd: [ 22, 25, 29 ], def: [ 33, 36, 39 ], res: [ 11, 14, 18 ] },
      level1_4: { hp: 18, atk: 9, spd: 5, def: 8, res: 3 },
      level40_4: { hp: [ 37, 40, 43 ], atk: [ 30, 33, 36 ], spd: [ 20, 23, 26 ], def: [ 31, 34, 37 ], res: [ 10, 13, 16 ] }
    }
  },
  {
    name: "Frederick (Ylissean Summer)",
    shortName: "Frederick",
    title: "Horizon Watcher",
    releaseDate: "Jun 30, 2017",
    colorType: "Neutral",
    weaponType: "Dagger",
    moveType: "Infantry",
    rarity5: ["pool1"],
    limited: true,
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Frederick (Ylissean Summer).png",
      main: "img/heroes-main/Frederick (Ylissean Summer).png"
    },
    skills: [
      { name: "Iron Dagger", rarity: 5 },
      { name: "Steel Dagger", rarity: 5 },
      { name: "Seashell", rarity: 5 },
      { name: "Seashell+", rarity: 5 },
      { name: "Ardent Sacrifice", rarity: 5 },
      { name: "Armored Blow 1", rarity: 5 },
      { name: "Armored Blow 2", rarity: 5 },
      { name: "Armored Blow 3", rarity: 5 },
      { name: "Seal Spd 1", rarity: 5 },
      { name: "Seal Atk/Spd 1", rarity: 5 },
      { name: "Seal Atk/Spd 2", rarity: 5 }
    ],
    stats: {
      level1: { hp: 18, atk: 8, spd: 7, def: 6, res: 5 },
      level40: { hp: [ 36, 40, 43 ], atk: [ 29, 32, 35 ], spd: [ 28, 31, 34 ], def: [ 24, 28, 31 ], res: [ 14, 18, 21 ] }
    }
  },
  {
    name: "Gaius",
    title: "Candy Stealer",
    releaseDate: "Feb 02, 2017",
    colorType: "Neutral",
    weaponType: "Dagger",
    moveType: "Infantry",
    rarity3: ["pool1"],
    rarity4: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Gaius.png",
      main: "img/heroes-main/Gaius.png"
    },
    skills: [
      { name: "Iron Dagger", rarity: 3 },
      { name: "Steel Dagger", rarity: 3 },
      { name: "Rogue Dagger", rarity: 4 },
      { name: "Rogue Dagger+", rarity: 5 },
      { name: "Rally Speed", rarity: 4 },
      { name: "Defiant Atk 1", rarity: 3 },
      { name: "Defiant Atk 2", rarity: 4 },
      { name: "Defiant Atk 3", rarity: 5 },
      { name: "Pass 1", rarity: 3 },
      { name: "Pass 2", rarity: 3 },
      { name: "Pass 3", rarity: 4 }
    ],
    stats: {
      level1: { hp: 18, atk: 7, spd: 10, def: 5, res: 4 },
      level40: { hp: [ 39, 42, 45 ], atk: [ 25, 29, 32 ], spd: [ 33, 36, 39 ], def: [ 19, 22, 25 ], res: [ 16, 19, 22 ] },
      level1_4: { hp: 17, atk: 7, spd: 10, def: 4, res: 3 },
      level40_4: { hp: [ 36, 39, 42 ], atk: [ 24, 27, 30 ], spd: [ 31, 34, 37 ], def: [ 17, 20, 23 ], res: [ 14, 17, 20 ] }
    }
  },
  {
    name: "Gaius (Ylissean Summer)",
    shortName: "Gaius",
    title: "Thief Exposed",
    releaseDate: "Jun 30, 2017",
    colorType: "Neutral",
    weaponType: "Bow",
    moveType: "Infantry",
    rarity5: ["pool1"],
    limited: true,
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Gaius (Ylissean Summer).png",
      main: "img/heroes-main/Gaius (Ylissean Summer).png"
    },
    skills: [
      { name: "Iron Bow", rarity: 5 },
      { name: "Steel Bow", rarity: 5 },
      { name: "Refreshing Bolt", rarity: 5 },
      { name: "Refreshing Bolt+", rarity: 5 },
      { name: "Night Sky", rarity: 5 },
      { name: "Astra", rarity: 5 },
      { name: "Vantage 1", rarity: 5 },
      { name: "Vantage 2", rarity: 5 },
      { name: "Vantage 3", rarity: 5 },
      { name: "Def Ploy 1", rarity: 5 },
      { name: "Def Ploy 2", rarity: 5 },
      { name: "Def Ploy 3", rarity: 5 }
    ],
    stats: {
      level1: { hp: 17, atk: 8, spd: 9, def: 4, res: 6 },
      level40: { hp: [ 31, 34, 37 ], atk: [ 26, 30, 33 ], spd: [ 34, 37, 40 ], def: [ 16, 19, 22 ], res: [ 24, 28, 31 ] }
    }
  },
  {
    name: "Genny",
    title: "Endearing Ally",
    releaseDate: "May 15, 2017",
    colorType: "Neutral",
    weaponType: "Staff",
    moveType: "Infantry",
    rarity5: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Genny.png",
      main: "img/heroes-main/Genny.png"
    },
    skills: [
      { name: "Assault", rarity: 5 },
      { name: "Gravity", rarity: 5 },
      { name: "Gravity+", rarity: 5 },
      { name: "Heal", rarity: 5 },
      { name: "Mend", rarity: 5 },
      { name: "Physic", rarity: 5 },
      { name: "Imbue", rarity: 5 },
      { name: "Heavenly Light", rarity: 5 },
      { name: "Wrathful Staff 1", rarity: 5 },
      { name: "Wrathful Staff 2", rarity: 5 },
      { name: "Wrathful Staff 3", rarity: 5 }
    ],
    stats: {
      level1: { hp: 17, atk: 9, spd: 6, def: 4, res: 8 },
      level40: { hp: [ 29, 32, 35 ], atk: [ 32, 35, 38 ], spd: [ 22, 25, 29 ], def: [ 18, 21, 24 ], res: [ 31, 34, 37 ] }
    }
  },
  {
    name: "Gerome",
    title: "Masked Rider",
    releaseDate: "Mar 09, 2018",
    colorType: "Green",
    weaponType: "Axe",
    moveType: "Flying",
    rarity4: ["pool1"],
    rarity5: ["pool1"],
    ttReward: true,
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Gerome.png",
      main: "img/heroes-main/Gerome.png"
    },
    skills: [
      { name: "Iron Axe", rarity: 3 },
      { name: "Steel Axe", rarity: 3 },
      { name: "Poleaxe", rarity: 4 },
      { name: "Poleaxe+", rarity: 5 }
    ],
    stats: {
      level1: { hp: 19, atk: 10, spd: 6, def: 8, res: 4 },
      level40: { hp: [ 42, 45, 48 ], atk: [ 35, 38, 41 ], spd: [ 22, 25, 29 ], def: [ 31, 34, 37 ], res: [ 16, 19, 2 ] },
      level1_4: { hp: 18, atk: 10, spd: 5, def: 8, res: 3 },
      level40_4: { hp: [ 39, 42, 45 ], atk: [ 33, 36, 39 ], spd: [ 20, 23, 26 ], def: [ 29, 32, 35 ], res: [ 14, 17, 20 ] }
    }
  },
  {
    name: "Gordin",
    title: "Altean Archer",
    releaseDate: "Feb 02, 2017",
    colorType: "Neutral",
    weaponType: "Bow",
    moveType: "Infantry",
    rarity3: ["pool1"],
    rarity4: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Gordin.png",
      main: "img/heroes-main/Gordin.png"
    },
    skills: [
      { name: "Iron Bow", rarity: 3 },
      { name: "Steel Bow", rarity: 3 },
      { name: "Brave Bow", rarity: 4 },
      { name: "Brave Bow+", rarity: 5 },
      { name: "Shove", rarity: 4 },
      { name: "Attack +1", rarity: 3 },
      { name: "Attack +2", rarity: 3 },
      { name: "Attack +3", rarity: 4 },
      { name: "Vantage 1", rarity: 3 },
      { name: "Vantage 2", rarity: 4 },
      { name: "Vantage 3", rarity: 5 }
    ],
    stats: {
      level1: { hp: 19, atk: 7, spd: 6, def: 8, res: 4 },
      level40: { hp: [ 40, 43, 46 ], atk: [ 28, 31, 34 ], spd: [ 22, 25, 29 ], def: [ 29, 32, 35 ], res: [ 13, 17, 20 ] },
      level1_4: { hp: 18, atk: 7, spd: 5, def: 8, res: 3 },
      level40_4: { hp: [ 37, 40, 43 ], atk: [ 26, 29, 32 ], spd: [ 20, 23, 26 ], def: [ 27, 30, 33 ], res: [ 12, 15, 18 ] }
    }
  },
  {
    name: "Gray",
    title: "Wry Comrade",
    releaseDate: "Jul 13, 2017",
    colorType: "Red",
    weaponType: "Sword",
    moveType: "Infantry",
    rarity5: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Gray.png",
      main: "img/heroes-main/Gray.png"
    },
    skills: [
      { name: "Iron Sword", rarity: 5 },
      { name: "Steel Sword", rarity: 5 },
      { name: "Zanbato", rarity: 5 },
      { name: "Zanbato+", rarity: 5 },
      { name: "Swap", rarity: 5 },
      { name: "Wind Boost 1", rarity: 5 },
      { name: "Wind Boost 2", rarity: 5 },
      { name: "Wind Boost 3", rarity: 5 },
      { name: "Sword Valor 1", rarity: 5 },
      { name: "Sword Valor 2", rarity: 5 },
      { name: "Sword Valor 3", rarity: 5 }
    ],
    stats: {
      level1: { hp: 17, atk: 7, spd: 6, def: 6, res: 3 },
      level40: { hp: [ 40, 43, 46 ], atk: [ 32, 35, 38 ], spd: [ 29, 32, 35 ], def: [ 27, 30, 33 ], res: [ 19, 22, 26 ] }
    }
  },
  {
    name: "Gunnthrá",
    title: "Voice of Dreams",
    releaseDate: "Dec 28, 2017",
    colorType: "Green",
    weaponType: "Tome",
    moveType: "Cavalry",
    rarity5: ["pool1"],
    limited: true,
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Gunnthrá.png",
      main: "img/heroes-main/Gunnthrá.png"
    },
   skills: [
      { name: "Wind", rarity: 5 },
      { name: "Elwind", rarity: 5 },
      { name: "Rexcalibur", rarity: 5 },
      { name: "Blizzard", rarity: 5 },
      { name: "Chilling Wind", rarity: 5 },
      { name: "Glacies", rarity: 5 },
      { name: "Fortress Res 1", rarity: 5 },
      { name: "Fortress Res 2", rarity: 5 },
      { name: "Fortress Res 3", rarity: 5 },
      { name: "Chilling Seal", rarity: 5 },
      { name: "Res Ploy 1", rarity: 5 },
      { name: "Res Ploy 2", rarity: 5 },
      { name: "Res Ploy 3", rarity: 5 }
    ],
    stats: {
      level1: { hp: 15, atk: 7, spd: 9, def: 6, res: 6 },
      level40: { hp: [ 33, 37, 40 ], atk: [ 28, 31, 34 ], spd: [ 30, 33, 36 ], def: [ 15, 19, 22 ], res: [ 22, 25, 29 ] }
    }
  },
  {
    name: "Gunter",
    title: "Inveterate Soldier",
    releaseDate: "Feb 02, 2017",
    colorType: "Green",
    weaponType: "Axe",
    moveType: "Cavalry",
    rarity3: ["pool1"],
    rarity4: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Gunter.png",
      main: "img/heroes-main/Gunter.png"
    },
    skills: [
      { name: "Iron Axe", rarity: 1 },
      { name: "Steel Axe", rarity: 3 },
      { name: "Silver Axe", rarity: 4 },
      { name: "Silver Axe+", rarity: 5 },
      { name: "Harsh Command", rarity: 4 },
      { name: "Armored Blow 1", rarity: 3 },
      { name: "Armored Blow 2", rarity: 4 },
      { name: "Armored Blow 3", rarity: 5 },
      { name: "Hone Atk 1", rarity: 1 },
      { name: "Hone Atk 2", rarity: 2 },
      { name: "Hone Cavalry", rarity: 4 }
    ],
    stats: {
      level1: { hp: 21, atk: 10, spd: 7, def: 11, res: 5 },
      level40: { hp: [ 39, 43, 46 ], atk: [ 28, 32, 35 ], spd: [ 21, 24, 27 ], def: [ 29, 33, 36 ], res: [ 14, 18, 21 ] },
      level1_4: { hp: 20, atk: 10, spd: 6, def: 11, res: 4 },
      level40_4: { hp: [ 37, 40, 43 ], atk: [ 27, 30, 33 ], spd: [ 19, 22, 25 ], def: [ 28, 31, 34 ], res: [ 13, 16, 19 ] }
    }
  },
  {
    name: "Gwendolyn",
    title: "Adorable Knight",
    releaseDate: "Feb 02, 2017",
    colorType: "Blue",
    weaponType: "Lance",
    moveType: "Armored",
    rarity3: ["pool1"],
    rarity4: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Gwendolyn.png",
      main: "img/heroes-main/Gwendolyn.png"
    },
    skills: [
      { name: "Iron Lance", rarity: 3 },
      { name: "Steel Lance", rarity: 3 },
      { name: "Killer Lance", rarity: 4 },
      { name: "Killer Lance+", rarity: 5 },
      { name: "Buckler", rarity: 4 },
      { name: "Escutcheon", rarity: 4 },
      { name: "Drag Back", rarity: 3 },
      { name: "Hone Atk 1", rarity: 3 },
      { name: "Hone Atk 2", rarity: 3 },
      { name: "Hone Armor", rarity: 4 }
    ],
    stats: {
      level1: { hp: 23, atk: 8, spd: 5, def: 12, res: 6 },
      level40: { hp: [ 46, 49, 52 ], atk: [ 26, 30, 33 ], spd: [ 21, 24, 28 ], def: [ 35, 38, 41 ], res: [ 24, 28, 31 ] },
      level1_4: { hp: 22, atk: 8, spd: 4, def: 12, res: 5 },
      level40_4: { hp: [ 43, 46, 49 ], atk: [ 25, 28, 31 ], spd: [ 19, 22, 25 ], def: [ 33, 36, 39 ], res: [ 22, 25, 28 ] }
    }
  },
  {
    name: "Hana",
    title: "Focused Samurai",
    releaseDate: "Feb 02, 2017",
    colorType: "Red",
    weaponType: "Sword",
    moveType: "Infantry",
    rarity3: ["pool1"],
    rarity4: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Hana.png",
      main: "img/heroes-main/Hana.png"
    },
    skills: [
      { name: "Iron Sword", rarity: 1 },
      { name: "Steel Sword", rarity: 3 },
      { name: "Armorslayer", rarity: 4 },
      { name: "Armorslayer+", rarity: 5 },
      { name: "Rally Attack", rarity: 4 },
      { name: "Life and Death 1", rarity: 3 },
      { name: "Life and Death 2", rarity: 4 },
      { name: "Life and Death 3", rarity: 5 },
      { name: "Obstruct 1", rarity: 1 },
      { name: "Obstruct 2", rarity: 2 },
      { name: "Obstruct 3", rarity: 4 }
    ],
    stats: {
      level1: { hp: 18, atk: 9, spd: 10, def: 6, res: 4 },
      level40: { hp: [ 34, 37, 41 ], atk: [ 32, 35, 38 ], spd: [ 33, 36, 39 ], def: [ 20, 23, 26 ], res: [ 22, 26, 29 ] },
      level1_4: { hp: 17, atk: 9, spd: 10, def: 5, res: 3 },
      level40_4: { hp: [ 32, 35, 38 ], atk: [ 30, 33, 36 ], spd: [ 31, 34, 37 ], def: [ 18, 21, 24 ], res: [ 20, 23, 26 ] }
    }
  },
  {
    name: "Hardin (Fallen Heroes)",
    shortName: "Hardin",
    title: "Dark Emperor",
    releaseDate: "Feb 22, 2018",
    colorType: "Blue",
    weaponType: "Lance",
    moveType: "Armored",
    rarity5: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Hardin (Fallen Heroes).png",
      main: "img/heroes-main/Hardin (Fallen Heroes).png"
    },
    skills: [
      { name: "Iron Lance", rarity: 5 },
      { name: "Steel Lance", rarity: 5 },
      { name: "Silver Lance", rarity: 5 },
      { name: "Gradivus", rarity: 5 },
      { name: "Retribution", rarity: 5 },
      { name: "Vengeance", rarity: 5 },
      { name: "Brazen Def/Res 1", rarity: 5 },
      { name: "Brazen Def/Res 2", rarity: 5 },
      { name: "Brazen Def/Res 3", rarity: 5 },
      { name: "Bold Fighter 1", rarity: 5 },
      { name: "Bold Fighter 2", rarity: 5 },
      { name: "Bold Fighter 3", rarity: 5 }
    ],
    stats: {
      level1: { hp: 23, atk: 8, spd: 6, def: 10, res: 8 },
      level40: { hp: [ 41, 45, 48 ], atk: [ 31, 34, 37 ], spd: [ 24, 28, 31 ], def: [ 33, 36, 39 ], res: [ 29, 32, 35 ] }
    }
  },
  {
    name: "Hawkeye",
    title: "Desert Guardian",
    releaseDate: "Feb 02, 2017",
    colorType: "Green",
    weaponType: "Axe",
    moveType: "Infantry",
    rarity4: ["pool1"],
    rarity5: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Hawkeye.png",
      main: "img/heroes-main/Hawkeye.png"
    },
    skills: [
      { name: "Iron Axe", rarity: 4 },
      { name: "Steel Axe", rarity: 4 },
      { name: "Killer Axe", rarity: 4 },
      { name: "Killer Axe+", rarity: 5 },
      { name: "Rising Light", rarity: 4 },
      { name: "Growing Light", rarity: 4 },
      { name: "Death Blow 1", rarity: 4 },
      { name: "Death Blow 2", rarity: 4 },
      { name: "Death Blow 3", rarity: 5 },
      { name: "Threaten Atk 1", rarity: 4 },
      { name: "Threaten Atk 2", rarity: 4 },
      { name: "Threaten Atk 3", rarity: 4 }
    ],
    stats: {
      level1: { hp: 21, atk: 9, spd: 5, def: 6, res: 6 },
      level40: { hp: [ 42, 45, 48 ], atk: [ 30, 33, 36 ], spd: [ 19, 22, 25 ], def: [ 24, 28, 31 ], res: [ 27, 30, 33 ] },
      level1_4: { hp: 20, atk: 9, spd: 4, def: 6, res: 5 },
      level40_4: { hp: [ 39, 42, 45 ], atk: [ 28, 31, 34 ], spd: [ 17, 20, 23 ], def: [ 23, 26, 29 ], res: [ 24, 27, 30 ] }
    }
  },
  {
    name: "Hector",
    title: "General of Ostia",
    releaseDate: "Feb 02, 2017",
    colorType: "Green",
    weaponType: "Axe",
    moveType: "Armored",
    rarity5: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Hector.png",
      main: "img/heroes-main/Hector.png"
    },
    skills: [
      { name: "Iron Axe", rarity: 5 },
      { name: "Steel Axe", rarity: 5 },
      { name: "Silver Axe", rarity: 5 },
      { name: "Armads", rarity: 5 },
      { name: "Buckler", rarity: 5 },
      { name: "Pavise", rarity: 5 },
      { name: "Distant Counter", rarity: 5 },
      { name: "Spur Atk 1", rarity: 5 },
      { name: "Spur Atk 2", rarity: 5 },
      { name: "Goad Armor", rarity: 5 }
    ],
    stats: {
      level1: { hp: 24, atk: 10, spd: 5, def: 11, res: 4 },
      level40: { hp: [ 49, 52, 55 ], atk: [ 33, 36, 39 ], spd: [ 21, 24, 28 ], def: [ 34, 37, 40 ], res: [ 16, 19, 22 ] }
    }
  },
  {
    name: "Hector (Love Abounds)",
    shortName: "Hector",
    title: "Just Here to Fight",
    releaseDate: "Feb 09, 2018",
    colorType: "Green",
    weaponType: "Axe",
    moveType: "Armored",
    rarity5: ["pool1"],
    limited: true,
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Hector (Love Abounds).png",
      main: "img/heroes-main/Hector (Love Abounds).png"
    },
    skills: [
      { name: "Iron Axe", rarity: 5 },
      { name: "Steel Axe", rarity: 5 },
      { name: "Silver Axe", rarity: 5 },
      { name: "Berserk Armads", rarity: 5 },
      { name: "Night Sky", rarity: 5 },
      { name: "Glimmer", rarity: 5 },
      { name: "Distant Counter", rarity: 5 },
      { name: "Wary Fighter 1", rarity: 5 },
      { name: "Wary Fighter 2", rarity: 5 },
      { name: "Wary Fighter 3", rarity: 5 }
    ],
    stats: {
      level1: { hp: 24, atk: 8, spd: 4, def: 12, res: 7 },
      level40: { hp: [ 47, 50, 53 ], atk: [ 35, 38, 42 ], spd: [ 18, 21, 24 ], def: [ 37, 40, 43 ], res: [ 21, 24, 27 ] },
    }
  },
  {
    name: "Henry",
    title: "Twisted Mind",
    releaseDate: "Feb 02, 2017",
    colorType: "Red",
    weaponType: "Tome",
    moveType: "Infantry",
    rarity3: ["pool1"],
    rarity4: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Henry.png",
      main: "img/heroes-main/Henry.png"
    },
    skills: [
      { name: "Flux", rarity: 3 },
      { name: "Ruin", rarity: 3 },
      { name: "Rauðrraven", rarity: 4 },
      { name: "Rauðrraven+", rarity: 5 },
      { name: "Glowing Ember", rarity: 4 },
      { name: "Ignis", rarity: 4 },
      { name: "Defiant Def 1", rarity: 3 },
      { name: "Defiant Def 2", rarity: 4 },
      { name: "Defiant Def 3", rarity: 5 },
      { name: "G Tomebreaker 1", rarity: 3 },
      { name: "G Tomebreaker 2", rarity: 3 },
      { name: "G Tomebreaker 3", rarity: 4 }
    ],
    stats: {
      level1: { hp: 19, atk: 6, spd: 5, def: 8, res: 6 },
      level40: { hp: [ 42, 45, 48 ], atk: [ 20, 23, 26 ], spd: [ 19, 22, 25 ], def: [ 29, 32, 35 ], res: [ 22, 25, 29 ] },
      level1_4: { hp: 18, atk: 6, spd: 4, def: 8, res: 5 },
      level40_4: { hp: [ 39, 42, 45 ], atk: [ 19, 22, 25 ], spd: [ 17, 20, 23 ], def: [ 27, 30, 33 ], res: [ 20, 23, 26 ] }
    }
  },
  {
    name: "Henry (Trick or Defeat!)",
    shortName: "Henry",
    title: "Happy Vampire",
    releaseDate: "Oct 30, 2017",
    colorType: "Green",
    weaponType: "Tome",
    moveType: "Armored",
    rarity5: ["pool1"],
    limited: true,
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Henry (Trick or Defeat!).png",
      main: "img/heroes-main/Henry (Trick or Defeat!).png"
    },
    skills: [
      { name: "Wind", rarity: 5 },
      { name: "Elwind", rarity: 5 },
      { name: "Spectral Tome", rarity: 5 },
      { name: "Spectral Tome+", rarity: 5 },
      { name: "Retribution", rarity: 5 },
      { name: "Reprisal", rarity: 5 },
      { name: "Live for Honor", rarity: 5 },
      { name: "Armor March 1", rarity: 5 },
      { name: "Armor March 2", rarity: 5 },
      { name: "Armor March 3", rarity: 5 }
    ],
    stats: {
      level1: { hp: 17, atk: 9, spd: 10, def: 4, res: 12 },
      level40: { hp: [ 33, 36, 40 ], atk: [ 30, 33, 36 ], spd: [ 31, 34, 37 ], def: [ 22, 26, 29 ], res: [ 33, 36, 39 ] }
    }
  },
  {
    name: "Hinata",
    title: "Wild Samurai",
    releaseDate: "Feb 02, 2017",
    colorType: "Red",
    weaponType: "Sword",
    moveType: "Infantry",
    rarity3: ["pool1"],
    rarity4: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Hinata.png",
      main: "img/heroes-main/Hinata.png"
    },
    skills: [
      { name: "Iron Sword", rarity: 1 },
      { name: "Steel Sword", rarity: 3 },
      { name: "Ruby Sword", rarity: 4 },
      { name: "Ruby Sword+", rarity: 5 },
      { name: "Buckler", rarity: 4 },
      { name: "Pavise", rarity: 4 },
      { name: "Fury 1", rarity: 1 },
      { name: "Fury 2", rarity: 2 },
      { name: "Fury 3", rarity: 4 },
      { name: "Brash Assault 1", rarity: 3 },
      { name: "Brash Assault 2", rarity: 4 },
      { name: "Brash Assault 3", rarity: 5 }
    ],
    stats: {
      level1: { hp: 21, atk: 8, spd: 5, def: 10, res: 3 },
      level40: { hp: [ 44, 47, 50 ], atk: [ 29, 32, 35 ], spd: [ 21, 24, 28 ], def: [ 33, 36, 39 ], res: [ 15, 18, 21 ] },
      level1_4: { hp: 20, atk: 8, spd: 4, def: 10, res: 2 },
      level40_4: { hp: [ 41, 44, 47 ], atk: [ 27, 30, 33 ], spd: [ 19, 22, 25 ], def: [ 31, 34, 37 ], res: [ 13, 16, 19 ] }
    }
  },
  {
    name: "Hinoka",
    title: "Warrior Princess",
    releaseDate: "Feb 02, 2017",
    colorType: "Blue",
    weaponType: "Lance",
    moveType: "Flying",
    rarity5: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Hinoka.png",
      main: "img/heroes-main/Hinoka.png"
    },
    skills: [
      { name: "Iron Lance", rarity: 5 },
      { name: "Steel Lance", rarity: 5 },
      { name: "Brave Lance", rarity: 5 },
      { name: "Brave Lance+", rarity: 5 },
      { name: "Hinoka's Spear", rarity: 5 },
      { name: "Rising Wind", rarity: 5 },
      { name: "Blazing Wind", rarity: 5 },
      { name: "Defiant Def 1", rarity: 5 },
      { name: "Defiant Def 2", rarity: 5 },
      { name: "Defiant Def 3", rarity: 5 },
      { name: "Hone Spd 1", rarity: 5 },
      { name: "Hone Spd 2", rarity: 5 },
      { name: "Hone Fliers", rarity: 5 }
    ],
    stats: {
      level1: { hp: 19, atk: 7, spd: 8, def: 6, res: 7 },
      level40: { hp: [ 37, 41, 44 ], atk: [ 32, 35, 38 ], spd: [ 29, 32, 35 ], def: [ 22, 25, 29 ], res: [ 21, 24, 27 ] }
    }
  },
  {
    name: "Ike",
    title: "Young Mercenary",
    releaseDate: "Apr 26, 2017",
    colorType: "Red",
    weaponType: "Sword",
    moveType: "Infantry",
    rarity5: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Ike.png",
      main: "img/heroes-main/Ike.png"
    },
    skills: [
      { name: "Iron Sword", rarity: 5 },
      { name: "Steel Sword", rarity: 5 },
      { name: "Silver Sword", rarity: 5 },
      { name: "Ragnell", rarity: 5 },
      { name: "New Moon", rarity: 5 },
      { name: "Luna", rarity: 5 },
      { name: "Aether", rarity: 5 },
      { name: "Heavy Blade 1", rarity: 5 },
      { name: "Heavy Blade 2", rarity: 5 },
      { name: "Heavy Blade 3", rarity: 5 },
      { name: "Swordbreaker 1", rarity: 5 },
      { name: "Swordbreaker 2", rarity: 5 },
      { name: "Swordbreaker 3", rarity: 5 }
    ],
    stats: {
      level1: { hp: 18, atk: 9, spd: 7, def: 8, res: 5 },
      level40: { hp: [ 39, 42, 45 ], atk: [ 32, 35, 38 ], spd: [ 28, 31, 34 ], def: [ 29, 32, 35 ], res: [ 14, 18, 21 ] }
    }
  },
  {
    name: "Ike (Brave Heroes)",
    shortName: "Ike",
    title: "Brave Mercenary",
    releaseDate: "Aug 31, 2017",
    colorType: "Green",
    weaponType: "Axe",
    moveType: "Infantry",
    rarity5: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Ike (Brave Heroes).png",
      main: "img/heroes-main/Ike (Brave Heroes).png"
    },
    skills: [
      { name: "Iron Axe", rarity: 5 },
      { name: "Steel Axe", rarity: 5 },
      { name: "Silver Axe", rarity: 5 },
      { name: "Urvan", rarity: 5 },
      { name: "New Moon", rarity: 5 },
      { name: "Luna", rarity: 5 },
      { name: "Aether", rarity: 5 },
      { name: "Steady Stance 1", rarity: 5 },
      { name: "Steady Stance 2", rarity: 5 },
      { name: "Steady Breath", rarity: 5 },
      { name: "Beorc's Blessing", rarity: 5 },
      { name: "Threaten Def 1", rarity: 5 },
      { name: "Threaten Def 2", rarity: 5 },
      { name: "Threaten Def 3", rarity: 5 }
    ],
    stats: {
      level1: { hp: 17, atk: 10, spd: 6, def: 9, res: 5 },
      level40: { hp: [ 40, 43, 46 ], atk: [ 33, 36, 39 ], spd: [ 24, 28, 31 ], def: [ 32, 35, 38 ], res: [ 17, 20, 23 ] }
    }
  },
  {
    name: "Ike (Legendary Heroes)",
    shortName: "Ike",
    title: "Vanguard Legend",
    releaseDate: "Jan 31, 2018",
    colorType: "Red",
    weaponType: "Sword",
    moveType: "Infantry",
    rarity5: ["pool1"],
    limited: true,
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Ike (Legendary Heroes).png",
      main: "img/heroes-main/Ike (Legendary Heroes).png"
    },
    skills: [
      { name: "Iron Sword", rarity: 5},
      { name: "Steel Sword", rarity: 5},
      { name: "Silver Sword", rarity: 5},
      { name: "Ragnell", rarity: 5},
      { name: "Daylight", rarity: 5},
      { name: "Sol", rarity: 5},
      { name: "Radiant Aether", rarity: 5},
      { name: "Warding Stance 1", rarity: 5},
      { name: "Warding Stance 2", rarity: 5},
      { name: "Warding Breath", rarity: 5},
      { name: "Seal Def 1", rarity: 5},
      { name: "Seal Atk/Def 1", rarity: 5},
      { name: "Seal Atk/Def 2", rarity: 5},
      { name: "Def Tactic 1", rarity: 5},
      { name: "Def Tactic 2", rarity: 5},
      { name: "Def Tactic 3", rarity: 5}
    ],
    stats: {
      "level1": {"hp": 19,"atk": 10,"spd": 6,"def": 9,"res": 4},
      "level40": {"hp": [37,41,44],"atk": [33,36,39],"spd": [27,30,33],"def": [32,35,38],"res": [18,21,24]}
    }
  },
  {
    name: "Inigo (Performing Arts)",
    shortName: "Inigo",
    title: "Indigo Dancer",
    releaseDate: "Sep 29, 2017",
    colorType: "Green",
    weaponType: "Tome",
    moveType: "Infantry",
    rarity5: ["pool1"],
    limited: true,
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Inigo (Performing Arts).png",
      main: "img/heroes-main/Inigo (Performing Arts).png"
    },
    skills: [
      { name: "Wind", rarity: 5 },
      { name: "Elwind", rarity: 5 },
      { name: "Dancer's Ring", rarity: 5 },
      { name: "Dancer's Ring+", rarity: 5 },
      { name: "Dance", rarity: 5 },
      { name: "Gale Dance 1", rarity: 5 },
      { name: "Gale Dance 2", rarity: 5 },
      { name: "Gale Dance 3", rarity: 5 },
      { name: "Hone Atk 1", rarity: 5 },
      { name: "Hone Atk 2", rarity: 5 },
      { name: "Hone Atk 3", rarity: 5 }
    ],
    stats: {
      level1: { hp: 15, atk: 6, spd: 7, def: 5, res: 3 },
      level40: { hp: [ 33, 37, 40 ], atk: [ 24, 28, 31 ], spd: [ 30, 33, 36 ], def: [ 19, 22, 25 ], res: [ 17, 20, 23 ] }
    }
  },
  {
    name: "Innes",
    title: "Regal Strategician",
    releaseDate: "Aug 15, 2017",
    colorType: "Neutral",
    weaponType: "Bow",
    moveType: "Infantry",
    rarity5: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Innes.png",
      main: "img/heroes-main/Innes.png"
    },
    skills: [
      { name: "Iron Bow", rarity: 5 },
      { name: "Steel Bow", rarity: 5 },
      { name: "Silver Bow", rarity: 5 },
      { name: "Nidhogg", rarity: 5 },
      { name: "Chilling Wind", rarity: 5 },
      { name: "Iceberg", rarity: 5 },
      { name: "Fortress Res 1", rarity: 5 },
      { name: "Fortress Res 2", rarity: 5 },
      { name: "Fortress Res 3", rarity: 5 },
      { name: "Cancel Affinity 1", rarity: 5 },
      { name: "Cancel Affinity 2", rarity: 5 },
      { name: "Cancel Affinity 3", rarity: 5 }
    ],
    stats: {
      level1: { hp: 16, atk: 9, spd: 8, def: 4, res: 7 },
      level40: { hp: [ 32, 35, 39 ], atk: [ 30, 33, 36 ], spd: [ 31, 34, 37 ], def: [ 11, 14, 18 ], res: [ 28, 31, 34 ] }
    }
  },
  {
    name: "Jaffar",
    title: "Angel of Death",
    releaseDate: "Mar 14, 2017",
    colorType: "Neutral",
    weaponType: "Dagger",
    moveType: "Infantry",
    rarity5: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Jaffar.png",
      main: "img/heroes-main/Jaffar.png"
    },
    skills: [
      { name: "Iron Dagger", rarity: 5 },
      { name: "Steel Dagger", rarity: 5 },
      { name: "Silver Dagger", rarity: 5 },
      { name: "Deathly Dagger", rarity: 5 },
      { name: "Night Sky", rarity: 5 },
      { name: "Glimmer", rarity: 5 },
      { name: "Life and Death 1", rarity: 5 },
      { name: "Life and Death 2", rarity: 5 },
      { name: "Life and Death 3", rarity: 5 },
      { name: "Threaten Spd 1", rarity: 5 },
      { name: "Threaten Spd 2", rarity: 5 },
      { name: "Threaten Spd 3", rarity: 5 }
    ],
    stats: {
      level1: { hp: 17, atk: 7, spd: 9, def: 6, res: 5 },
      level40: { hp: [ 38, 41, 44 ], atk: [ 23, 26, 30 ], spd: [ 30, 33, 36 ], def: [ 22, 25, 29 ], res: [ 19, 22, 25 ] }
    }
  },
  {
    name: "Jagen",
    title: "Veteran Knight",
    releaseDate: "Feb 02, 2017",
    colorType: "Blue",
    weaponType: "Lance",
    moveType: "Cavalry",
    rarity3: ["pool1"],
    rarity4: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Jagen.png",
      main: "img/heroes-main/Jagen.png"
    },
    skills: [
      { name: "Iron Lance", rarity: 3 },
      { name: "Steel Lance", rarity: 3 },
      { name: "Silver Lance", rarity: 4 },
      { name: "Silver Lance+", rarity: 5 },
      { name: "Holy Vestments", rarity: 4 },
      { name: "Aegis", rarity: 4 },
      { name: "Fury 1", rarity: 3 },
      { name: "Fury 2", rarity: 4 },
      { name: "Fury 3", rarity: 5 },
      { name: "Fortify Res 1", rarity: 3 },
      { name: "Fortify Res 2", rarity: 3 },
      { name: "Fortify Cavalry", rarity: 4 }
    ],
    stats: {
      level1: { hp: 20, atk: 8, spd: 7, def: 8, res: 11 },
      level40: { hp: [ 34, 37, 40 ], atk: [ 24, 27, 31 ], spd: [ 21, 24, 27 ], def: [ 22, 25, 28 ], res: [ 32, 35, 38 ] },
      level1_4: { hp: 19, atk: 8, spd: 6, def: 7, res: 11 },
      level40_4: { hp: [ 32, 35, 38 ], atk: [ 23, 26, 29 ], spd: [ 19, 22, 25 ], def: [ 20, 23, 26 ], res: [ 30, 33, 36 ] }
    }
  },
  {
    name: "Jakob",
    title: "Devoted Servant",
    releaseDate: "Feb 02, 2017",
    colorType: "Neutral",
    weaponType: "Dagger",
    moveType: "Infantry",
    rarity4: ["pool1"],
    rarity5: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Jakob.png",
      main: "img/heroes-main/Jakob.png"
    },
    skills: [
      { name: "Iron Dagger", rarity: 4 },
      { name: "Steel Dagger", rarity: 4 },
      { name: "Silver Dagger", rarity: 4 },
      { name: "Silver Dagger+", rarity: 5 },
      { name: "Rally Resistance", rarity: 4 },
      { name: "Defense +1", rarity: 4 },
      { name: "Defense +2", rarity: 4 },
      { name: "Defense +3", rarity: 4 },
      { name: "Renewal 1", rarity: 4 },
      { name: "Renewal 2", rarity: 4 },
      { name: "Renewal 3", rarity: 5 }
    ],
    stats: {
      level1: { hp: 17, atk: 7, spd: 9, def: 6, res: 5 },
      level40: { hp: [ 35, 39, 42 ], atk: [ 25, 29, 32 ], spd: [ 27, 31, 34 ], def: [ 22, 25, 29 ], res: [ 21, 24, 28 ] },
      level1_4: { hp: 16, atk: 7, spd: 9, def: 5, res: 4 },
      level40_4: { hp: [ 33, 36, 39 ], atk: [ 24, 27, 30 ], spd: [ 26, 29, 32 ], def: [ 20, 23, 26 ], res: [ 19, 22, 25 ] }
    }
  },
  {
    name: "Jakob (Trick or Defeat!)",
    shortName: "Jakob",
    title: "Devoted Monster",
    releaseDate: "Oct 30, 2017",
    colorType: "Neutral",
    weaponType: "Bow",
    moveType: "Armored",
    rarity5: ["pool1"],
    limited: true,
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Jakob (Trick or Defeat!).png",
      main: "img/heroes-main/Jakob (Trick or Defeat!).png"
    },
    skills: [
      { name: "Iron Bow", rarity: 5 },
      { name: "Steel Bow", rarity: 5 },
      { name: "Monstrous Bow", rarity: 5 },
      { name: "Monstrous Bow+", rarity: 5 },
      { name: "Glowing Ember", rarity: 5 },
      { name: "Ignis", rarity: 5 },
      { name: "Armored Blow 1", rarity: 5 },
      { name: "Bracing Blow 1", rarity: 5 },
      { name: "Bracing Blow 2", rarity: 5 },
      { name: "Wary Fighter 1", rarity: 5 },
      { name: "Wary Fighter 2", rarity: 5 },
      { name: "Wary Fighter 3", rarity: 5 }
    ],
    stats: {
      level1: { hp: 20, atk: 9, spd: 6, def: 9, res: 8 },
      level40: { hp: [ 38, 42, 45 ], atk: [ 32, 35, 38 ], spd: [ 20, 23, 26 ], def: [ 30, 33, 36 ], res: [ 29, 32, 35 ] }
    }
  },
  {
    name: "Jeorge",
    title: "Perfect Shot",
    releaseDate: "Feb 02, 2017",
    colorType: "Neutral",
    weaponType: "Bow",
    moveType: "Infantry",
    rarity4: ["pool1"],
    rarity5: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Jeorge.png",
      main: "img/heroes-main/Jeorge.png"
    },
    skills: [
      { name: "Iron Bow", rarity: 4 },
      { name: "Steel Bow", rarity: 4 },
      { name: "Silver Bow", rarity: 4 },
      { name: "Parthia", rarity: 5 },
      { name: "Rising Flame", rarity: 4 },
      { name: "Blazing Flame", rarity: 4 },
      { name: "Seal Atk 1", rarity: 4 },
      { name: "Seal Atk 2", rarity: 4 },
      { name: "Seal Atk 3", rarity: 4 },
      { name: "Spur Spd 1", rarity: 4 },
      { name: "Spur Spd 2", rarity: 4 },
      { name: "Spur Spd 3", rarity: 5 }
    ],
    stats: {
      level1: { hp: 18, atk: 8, spd: 8, def: 5, res: 5 },
      level40: { hp: [ 34, 37, 41 ], atk: [ 29, 32, 35 ], spd: [ 29, 32, 35 ], def: [ 21, 24, 28 ], res: [ 19, 22, 25 ] },
      level1_4: { hp: 17, atk: 8, spd: 8, def: 4, res: 4 },
      level40_4: { hp: [ 32, 35, 38 ], atk: [ 27, 30, 33 ], spd: [ 27, 30, 33 ], def: [ 19, 22, 25 ], res: [ 17, 20, 23 ] }
    }
  },
  {
    name: "Joshua",
    title: "Tempest King",
    releaseDate: "Nov 21, 2017",
    colorType: "Red",
    weaponType: "Sword",
    moveType: "Infantry",
    rarity4: ["pool1"],
    rarity5: ["pool1"],
    ttReward: true,
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Joshua.png",
      main: "img/heroes-main/Joshua.png"
    },
    skills: [
      { name: "Iron Sword", rarity: 4 },
      { name: "Steel Sword", rarity: 4 },
      { name: "Slaying Edge", rarity: 4 },
      { name: "Audhulma", rarity: 5 },
      { name: "New Moon", rarity: 4 },
      { name: "Moonbow", rarity: 4 },
      { name: "Close Def 1", rarity: 4 },
      { name: "Close Def 2", rarity: 4 },
      { name: "Close Def 3", rarity: 5 },
      { name: "Windsweep 1", rarity: 4 },
      { name: "Windsweep 2", rarity: 4 },
      { name: "Windsweep 3", rarity: 4 }
    ],
    stats: {
      level1: { hp: 18, atk: 7, spd: 9, def: 8, res: 6 },
      level40: { hp: [ 36, 40, 43 ], atk: [ 28, 31, 34 ], spd: [ 32, 35, 38 ], def: [ 26, 30, 33 ], res: [ 24, 28, 31 ] },
      level1_4: { hp: 17, atk: 6, spd: 9, def: 8, res: 5 },
      level40_4: { hp: [ 34, 37, 40 ], atk: [ 25, 28, 31 ], spd: [ 30, 33, 36 ], def: [ 25, 28, 31 ], res: [ 22, 25, 28 ] }
    }
  },
  {
    name: "Julia",
    title: "Naga's Blood",
    releaseDate: "Feb 15, 2017",
    colorType: "Green",
    weaponType: "Tome",
    moveType: "Infantry",
    rarity5: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Julia.png",
      main: "img/heroes-main/Julia.png"
    },
    skills: [
      { name: "Wind", rarity: 5 },
      { name: "Elwind", rarity: 5 },
      { name: "Rexcalibur", rarity: 5 },
      { name: "Naga", rarity: 5 },
      { name: "Dragon Gaze", rarity: 5 },
      { name: "Dragon Fang", rarity: 5 },
      { name: "Resistance +1", rarity: 5 },
      { name: "Resistance +2", rarity: 5 },
      { name: "Resistance +3", rarity: 5 },
      { name: "Breath of Life 1", rarity: 5 },
      { name: "Breath of Life 2", rarity: 5 },
      { name: "Breath of Life 3", rarity: 5 }
    ],
    stats: {
      level1: { hp: 16, atk: 9, spd: 7, def: 4, res: 8 },
      level40: { hp: [ 34, 38, 41 ], atk: [ 32, 35, 38 ], spd: [ 23, 26, 30 ], def: [ 13, 17, 20 ], res: [ 29, 32, 35 ] }
    }
  },
  {
    name: "Kagero",
    title: "Honorable Ninja",
    releaseDate: "Feb 02, 2017",
    colorType: "Neutral",
    weaponType: "Dagger",
    moveType: "Infantry",
    rarity4: ["pool1"],
    rarity5: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Kagero.png",
      main: "img/heroes-main/Kagero.png"
    },
    skills: [
      { name: "Iron Dagger", rarity: 4 },
      { name: "Steel Dagger", rarity: 4 },
      { name: "Poison Dagger", rarity: 4 },
      { name: "Poison Dagger+", rarity: 5 },
      { name: "Retribution", rarity: 4 },
      { name: "Reprisal", rarity: 4 },
      { name: "Warding Blow 1", rarity: 4 },
      { name: "Warding Blow 2", rarity: 4 },
      { name: "Warding Blow 3", rarity: 5 },
      { name: "Daggerbreaker 1", rarity: 4 },
      { name: "Daggerbreaker 2", rarity: 4 },
      { name: "Daggerbreaker 3", rarity: 4 }
    ],
    stats: {
      level1: { hp: 16, atk: 9, spd: 8, def: 5, res: 6 },
      level40: { hp: [ 28, 31, 34 ], atk: [ 32, 35, 38 ], spd: [ 29, 32, 35 ], def: [ 19, 22, 25 ], res: [ 24, 28, 31 ] },
      level1_4: { hp: 15, atk: 9, spd: 8, def: 4, res: 5 },
      level40_4: { hp: [ 26, 29, 32 ], atk: [ 30, 33, 36 ], spd: [ 27, 30, 33 ], def: [ 17, 20, 23 ], res: [ 22, 25, 28 ] }
    }
  },
  {
    name: "Karel",
    title: "Sword Demon",
    releaseDate: "Mar 14, 2017",
    colorType: "Red",
    weaponType: "Sword",
    moveType: "Infantry",
    rarity5: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Karel.png",
      main: "img/heroes-main/Karel.png"
    },
    skills: [
      { name: "Iron Sword", rarity: 5 },
      { name: "Steel Sword", rarity: 5 },
      { name: "Wo Dao", rarity: 5 },
      { name: "Wo Dao+", rarity: 5 },
      { name: "Retribution", rarity: 5 },
      { name: "Reprisal", rarity: 5 },
      { name: "Defiant Atk 1", rarity: 5 },
      { name: "Defiant Atk 2", rarity: 5 },
      { name: "Defiant Atk 3", rarity: 5 },
      { name: "Desperation 1", rarity: 5 },
      { name: "Desperation 2", rarity: 5 },
      { name: "Desperation 3", rarity: 5 }
    ],
    stats: {
      level1: { hp: 19, atk: 8, spd: 9, def: 6, res: 5 },
      level40: { hp: [ 44, 47, 50 ], atk: [ 26, 30, 33 ], spd: [ 32, 35, 38 ], def: [ 22, 25, 29 ], res: [ 17, 20, 23 ] }
    }
  },
  {
    name: "Katarina",
    title: "Wayward One",
    releaseDate: "Jun 14, 2017",
    colorType: "Red",
    weaponType: "Tome",
    moveType: "Infantry",
    rarity5: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Katarina.png",
      main: "img/heroes-main/Katarina.png"
    },
    skills: [
      { name: "Fire", rarity: 5 },
      { name: "Elfire", rarity: 5 },
      { name: "Rauðrowl", rarity: 5 },
      { name: "Rauðrowl+", rarity: 5 },
      { name: "Chilling Wind", rarity: 5 },
      { name: "Glacies", rarity: 5 },
      { name: "Death Blow 1", rarity: 5 },
      { name: "Swift Sparrow 1", rarity: 5 },
      { name: "Swift Sparrow 2", rarity: 5 },
      { name: "Atk Ploy 1", rarity: 5 },
      { name: "Atk Ploy 2", rarity: 5 },
      { name: "Atk Ploy 3", rarity: 5 }
    ],
    stats: {
      level1: { hp: 17, atk: 6, spd: 8, def: 5, res: 8 },
      level40: { hp: [ 31, 34, 37 ], atk: [ 29, 32, 35 ], spd: [ 31, 34, 37 ], def: [ 12, 15, 19 ], res: [ 29, 32, 35 ] }
    }
  },
  {
    name: "Klein",
    title: "Silver Nobleman",
    releaseDate: "Feb 27, 2017",
    colorType: "Neutral",
    weaponType: "Bow",
    moveType: "Infantry",
    rarity4: ["pool1"],
    rarity5: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Klein.png",
      main: "img/heroes-main/Klein.png"
    },
    skills: [
      { name: "Iron Bow", rarity: 4 },
      { name: "Steel Bow", rarity: 4 },
      { name: "Brave Bow", rarity: 4 },
      { name: "Brave Bow+", rarity: 5 },
      { name: "Chilling Wind", rarity: 4 },
      { name: "Glacies", rarity: 4 },
      { name: "Death Blow 1", rarity: 4 },
      { name: "Death Blow 2", rarity: 4 },
      { name: "Death Blow 3", rarity: 4 },
      { name: "Quick Riposte 1", rarity: 4 },
      { name: "Quick Riposte 2", rarity: 4 },
      { name: "Quick Riposte 3", rarity: 5 }
    ],
    stats: {
      level1: { hp: 18, atk: 9, spd: 7, def: 5, res: 5 },
      level40: { hp: [ 36, 40, 43 ], atk: [ 27, 31, 34 ], spd: [ 30, 33, 36 ], def: [ 17, 20, 23 ], res: [ 21, 24, 28 ] },
      level1_4: { hp: 17, atk: 9, spd: 7, def: 4, res: 4 },
      level40_4: { hp: [ 34, 37, 40 ], atk: [ 26, 29, 32 ], spd: [ 28, 31, 34 ], def: [ 15, 18, 21 ], res: [ 19, 22, 25 ] }
    }
  },
  {
    name: "L'Arachel",
    title: "Princess of Light",
    releaseDate: "January 25, 2018",
    colorType: "Blue",
    weaponType: "Tome",
    moveType: "Cavalry",
    rarity4: ["pool1"],
    rarity5: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_L'Arachel.png",
      main: "img/heroes-main/L'Arachel.png"
    },
    skills: [
      { name: "Light", rarity: 4 },
      { name: "Ellight", rarity: 4 },
      { name: "Shine", rarity: 4 },
      { name: "Ivaldi", rarity: 5 },
      { name: "Rising Light", rarity: 4 },
      { name: "Growing Light", rarity: 4 },
      { name: "Renewal 1", rarity: 4 },
      { name: "Renewal 2", rarity: 4 },
      { name: "Renewal 3", rarity: 4 },
      { name: "Res Tactic 1", rarity: 4 },
      { name: "Res Tactic 2", rarity: 4 },
      { name: "Res Tactic 3", rarity: 5 },
    ],
    stats: {
      level1: {hp: 16,atk: 9,spd: 7,def: 4,res: 7},
      level40: { hp: [30, 33, 36], atk: [30, 33, 36], spd: [28, 31, 34], def: [13, 17, 20], res: [28, 31, 34]},
      level1_4: {hp: 15,atk: 9,spd: 7,def: 3,res: 6},
      level40_4: { hp: [28, 31, 34], atk: [28, 31, 34], spd: [26, 29, 32], def: [12, 15, 18], res: [25, 28, 31]}
    }
  },
  {
    name: "Lachesis",
    title: "Lionheart's Sister",
    releaseDate: "Feb 27, 2017",
    colorType: "Neutral",
    weaponType: "Staff",
    moveType: "Infantry",
    rarity4: ["pool1"],
    rarity5: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Lachesis.png",
      main: "img/heroes-main/Lachesis.png"
    },
    skills: [
      { name: "Assault", rarity: 4 },
      { name: "Absorb", rarity: 4 },
      { name: "Absorb+", rarity: 5 },
      { name: "Heal", rarity: 4 },
      { name: "Mend", rarity: 4 },
      { name: "Physic", rarity: 5 },
      { name: "Imbue", rarity: 4 },
      { name: "Solid-Earth Balm", rarity: 5 },
      { name: "Spur Res 1", rarity: 4 },
      { name: "Spur Res 2", rarity: 4 },
      { name: "Spur Res 3", rarity: 5 }
    ],
    stats: {
      level1: { hp: 17, atk: 6, spd: 8, def: 5, res: 8 },
      level40: { hp: [ 35, 39, 42 ], atk: [ 29, 32, 35 ], spd: [ 22, 25, 28 ], def: [ 19, 22, 25 ], res: [ 26, 30, 33 ] },
      level1_4: { hp: 16, atk: 5, spd: 8, def: 4, res: 8 },
      level40_4: { hp: [ 33, 36, 39 ], atk: [ 26, 29, 32 ], spd: [ 21, 24, 27 ], def: [ 17, 20, 23 ], res: [ 25, 28, 31 ] }
    }
  },
  {
    name: "Laslow",
    title: "Dancing Duelist",
    releaseDate: "Feb 02, 2017",
    colorType: "Red",
    weaponType: "Sword",
    moveType: "Infantry",
    rarity3: ["pool1"],
    rarity4: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Laslow.png",
      main: "img/heroes-main/Laslow.png"
    },
    skills: [
      { name: "Iron Sword", rarity: 3 },
      { name: "Steel Sword", rarity: 3 },
      { name: "Silver Sword", rarity: 4 },
      { name: "Silver Sword+", rarity: 5 },
      { name: "Daylight", rarity: 4 },
      { name: "Noontime", rarity: 4 },
      { name: "Axebreaker 1", rarity: 3 },
      { name: "Axebreaker 2", rarity: 3 },
      { name: "Axebreaker 3", rarity: 4 },
      { name: "Hone Spd 1", rarity: 3 },
      { name: "Hone Spd 2", rarity: 4 },
      { name: "Hone Spd 3", rarity: 5 }
    ],
    stats: {
      level1: { hp: 20, atk: 9, spd: 7, def: 6, res: 5 },
      level40: { hp: [ 41, 44, 47 ], atk: [ 32, 35, 38 ], spd: [ 23, 26, 30 ], def: [ 27, 30, 33 ], res: [ 19, 22, 25 ] },
      level1_4: { hp: 19, atk: 9, spd: 7, def: 5, res: 4 },
      level40_4: { hp: [ 38, 41, 44 ], atk: [ 30, 33, 36 ], spd: [ 22, 25, 28 ], def: [ 24, 27, 30 ], res: [ 17, 20, 23 ] }
    }
  },
  {
    name: "Legion",
    title: "Masked Maniac",
    releaseDate: "Jun 16, 2017",
    colorType: "Green",
    weaponType: "Axe",
    moveType: "Infantry",
    rarity3: ["pool1"],
    rarity4: ["pool1"],
    ghb: true,
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Legion.png",
      main: "img/heroes-main/Legion.png"
    },
    skills: [
      { name: "Iron Axe", rarity: 3 },
      { name: "Steel Axe", rarity: 3 },
      { name: "Legion's Axe", rarity: 4 },
      { name: "Legion's Axe+", rarity: 5 },
      { name: "Retribution", rarity: 4 },
      { name: "Reprisal", rarity: 4 },
      { name: "Fury 1", rarity: 3 },
      { name: "Fury 2", rarity: 4 },
      { name: "Fury 3", rarity: 5 },
      { name: "Obstruct 1", rarity: 3 },
      { name: "Obstruct 2", rarity: 3 },
      { name: "Obstruct 3", rarity: 4 }
    ],
    stats: {
      level1: { hp: 20, atk: 10, spd: 9, def: 5, res: 3 },
      level40: { hp: [ 43, 46, 49 ], atk: [ 33, 36, 39 ], spd: [ 32, 35, 38 ], def: [ 19, 22, 25 ], res: [ 15, 18, 21 ] },
      level1_4: { hp: 19, atk: 10, spd: 9, def: 4, res: 2 },
      level40_4: { hp: [ 40, 43, 46 ], atk: [ 31, 34, 37 ], spd: [ 30, 33, 36 ], def: [ 17, 20, 23 ], res: [ 13, 16, 19 ] }
    }
  },
  {
    name: "Leo",
    title: "Sorcerous Prince",
    colorType: "Red",
    weaponType: "Tome",
    moveType: "Cavalry",
    releaseDate: "Feb 02, 2017",
    rarity5: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Leo.png",
      main: "img/heroes-main/Leo.png"
    },
    skills: [
      { name: "Flux", rarity: 5 },
      { name: "Ruin", rarity: 5 },
      { name: "Fenrir", rarity: 5 },
      { name: "Brynhildr", rarity: 5 },
      { name: "Rising Light", rarity: 5 },
      { name: "Blazing Light", rarity: 5 },
      { name: "Quick Riposte 1", rarity: 5 },
      { name: "Quick Riposte 2", rarity: 5 },
      { name: "Quick Riposte 3", rarity: 5 },
      { name: "Savage Blow 1", rarity: 5 },
      { name: "Savage Blow 2", rarity: 5 },
      { name: "Savage Blow 3", rarity: 5 }
    ],
    stats: {
      level1: { hp: 17, atk: 7, spd: 5, def: 6, res: 8 },
      level40: { hp: [ 35, 39, 42 ], atk: [ 25, 29, 32 ], spd: [ 19, 22, 25 ], def: [ 22, 25, 29 ], res: [ 26, 30, 33 ] }
    }
  },
  {
    name: "Leo (Nohrian Summer)",
    shortName: "Leo",
    title: "Seashore's Prince",
    releaseDate: "Jul 28, 2017",
    colorType: "Red",
    weaponType: "Tome",
    moveType: "Infantry",
    rarity5: ["pool1"],
    limited: true,
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Leo (Nohrian Summer).png",
      main: "img/heroes-main/Leo (Nohrian Summer).png"
    },
    skills: [
      { name: "Flux", rarity: 5 },
      { name: "Ruin", rarity: 5 },
      { name: "Tomato Tome", rarity: 5 },
      { name: "Tomato Tome+", rarity: 5 },
      { name: "Chilling Wind", rarity: 5 },
      { name: "Iceberg", rarity: 5 },
      { name: "Seal Res 1", rarity: 5 },
      { name: "Seal Res 2", rarity: 5 },
      { name: "Seal Res 3", rarity: 5 },
      { name: "Atk Ploy 1", rarity: 5 },
      { name: "Atk Ploy 2", rarity: 5 },
      { name: "Atk Ploy 3", rarity: 5 }
    ],
    stats: {
      level1: { hp: 18, atk: 8, spd: 5, def: 6, res: 7 },
      level40: { hp: [ 34, 37, 41 ], atk: [ 29, 32, 35 ], spd: [ 23, 27, 30 ], def: [ 13, 16, 20 ], res: [ 32, 35, 38 ] }
    }
  },
  {
    name: "Leon",
    title: "True of Heart",
    releaseDate: "Jul 13, 2017",
    colorType: "Neutral",
    weaponType: "Bow",
    moveType: "Infantry",
    rarity4: ["pool1"],
    rarity5: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Leon.png",
      main: "img/heroes-main/Leon.png"
    },
    skills: [
      { name: "Iron Bow", rarity: 4 },
      { name: "Steel Bow", rarity: 4 },
      { name: "Slaying Bow", rarity: 4 },
      { name: "Slaying Bow+", rarity: 5 },
      { name: "Glowing Ember", rarity: 4 },
      { name: "Ignis", rarity: 5 },
      { name: "Speed +1", rarity: 4 },
      { name: "Speed +2", rarity: 4 },
      { name: "Speed +3", rarity: 4 },
      { name: "Guard 1", rarity: 4 },
      { name: "Guard 2", rarity: 4 },
      { name: "Guard 3", rarity: 5 }
    ],
    stats: {
      level1: { hp: 17, atk: 8, spd: 6, def: 8, res: 5 },
      level40: { hp: [ 35, 39, 42 ], atk: [ 31, 34, 37 ], spd: [ 27, 30, 33 ], def: [ 26, 30, 33 ], res: [ 12, 15, 19 ] },
      level1_4: { hp: 16, atk: 8, spd: 5, def: 8, res: 4 },
      level40_4: { hp: [ 33, 36, 39 ], atk: [ 29, 32, 35 ], spd: [ 24, 27, 30 ], def: [ 25, 28, 31 ], res: [ 11, 14, 17 ] }
    }
  },
  {
    name: "Lilina",
    title: "Delightful Noble",
    releaseDate: "Feb 02, 2017",
    colorType: "Red",
    weaponType: "Tome",
    moveType: "Infantry",
    rarity4: ["pool1"],
    rarity5: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Lilina.png",
      main: "img/heroes-main/Lilina.png"
    },
    skills: [
      { name: "Fire", rarity: 4 },
      { name: "Elfire", rarity: 4 },
      { name: "Bolganone", rarity: 4 },
      { name: "Bolganone+", rarity: 5 },
      { name: "Rising Flame", rarity: 4 },
      { name: "Growing Flame", rarity: 4 },
      { name: "Attack +1", rarity: 4 },
      { name: "Attack +2", rarity: 4 },
      { name: "Attack +3", rarity: 5 },
      { name: "Spur Atk 1", rarity: 4 },
      { name: "Spur Atk 2", rarity: 4 },
      { name: "Spur Atk 3", rarity: 4 }
    ],
    stats: {
      level1: { hp: 16, atk: 9, spd: 6, def: 4, res: 9 },
      level40: { hp: [ 32, 35, 39 ], atk: [ 34, 37, 40 ], spd: [ 22, 25, 29 ], def: [ 16, 19, 22 ], res: [ 27, 31, 34 ] },
      level1_4: { hp: 15, atk: 9, spd: 5, def: 3, res: 9 },
      level40_4: { hp: [ 30, 33, 36 ], atk: [ 32, 35, 38 ], spd: [ 20, 23, 26 ], def: [ 14, 17, 20 ], res: [ 26, 29, 32 ] }
    }
  },
  {
    name: "Lilina (Love Abounds)",
    shortName: "Lilina",
    title: "Blush of Youth",
    releaseDate: "Feb 09, 2018",
    colorType: "Green",
    weaponType: "Tome",
    moveType: "Cavalry",
    rarity5: ["pool1"],
    limited: true,
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Lilina (Love Abounds).png",
      main: "img/heroes-main/Lilina (Love Abounds).png"
    },
    skills: [
      { name: "Wind", rarity: 5 },
      { name: "Elwind", rarity: 5 },
      { name: "Green Gift", rarity: 5 },
      { name: "Green Gift+", rarity: 5 },
      { name: "Rising Flame", rarity: 5 },
      { name: "Blazing Flame", rarity: 5 },
      { name: "Attack +1", rarity: 5 },
      { name: "HP/Atk 1", rarity: 5 },
      { name: "HP/Atk 2", rarity: 5 },
      { name: "Atk Tactic 1", rarity: 5 },
      { name: "Atk Tactic 2", rarity: 5 },
      { name: "Atk Tactic 3", rarity: 5 }
    ],
    stats: {
      level1: { hp: 17, atk: 9, spd: 8, def: 5, res: 4 },
      level40: { hp: [ 31, 34, 37 ], atk: [ 32, 35, 38 ], spd: [ 26, 30, 33 ], def: [ 17, 20, 23 ], res: [ 22, 26, 29 ] },
    }
  },
  {
    name: "Linde",
    title: "Light Mage",
    releaseDate: "Feb 02, 2017",
    colorType: "Blue",
    weaponType: "Tome",
    moveType: "Infantry",
    rarity5: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Linde.png",
      main: "img/heroes-main/Linde.png"
    },
    skills: [
      { name: "Thunder", rarity: 5 },
      { name: "Elthunder", rarity: 5 },
      { name: "Thoron", rarity: 5 },
      { name: "Aura", rarity: 5 },
      { name: "Ardent Sacrifice", rarity: 5 },
      { name: "Speed +1", rarity: 5 },
      { name: "Speed +2", rarity: 5 },
      { name: "Speed +3", rarity: 5 },
      { name: "Fortify Res 1", rarity: 5 },
      { name: "Fortify Res 2", rarity: 5 },
      { name: "Fortify Res 3", rarity: 5 }
    ],
    stats: {
      level1: { hp: 16, atk: 9, spd: 10, def: 4, res: 5 },
      level40: { hp: [ 32, 35, 39 ], atk: [ 32, 35, 38 ], spd: [ 33, 36, 39 ], def: [ 11, 14, 18 ], res: [ 23, 27, 30 ] }
    }
  },
  {
    name: "Lissa",
    title: "Sprightly Cleric",
    releaseDate: "Feb 02, 2017",
    colorType: "Neutral",
    weaponType: "Staff",
    moveType: "Infantry",
    rarity3: ["pool1"],
    rarity4: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Lissa.png",
      main: "img/heroes-main/Lissa.png"
    },
    skills: [
      { name: "Assault", rarity: 1 },
      { name: "Gravity", rarity: 3 },
      { name: "Gravity+", rarity: 5 },
      { name: "Heal", rarity: 1 },
      { name: "Reconcile", rarity: 3 },
      { name: "Rehabilitate", rarity: 4 },
      { name: "Imbue", rarity: 4 },
      { name: "Kindled-Fire Balm", rarity: 3 },
      { name: "Renewal 1", rarity: 3 },
      { name: "Renewal 2", rarity: 4 },
      { name: "Renewal 3", rarity: 5 }
    ],
    stats: {
      level1: { hp: 17, atk: 7, spd: 6, def: 6, res: 8 },
      level40: { hp: [ 35, 39, 42 ], atk: [ 23, 26, 30 ], spd: [ 22, 25, 29 ], def: [ 24, 28, 31 ], res: [ 26, 30, 33 ] },
      level1_4: { hp: 16, atk: 7, spd: 5, def: 5, res: 8 },
      level40_4: { hp: [ 33, 36, 39 ], atk: [ 22, 25, 28 ], spd: [ 20, 23, 26 ], def: [ 22, 25, 28 ], res: [ 25, 28, 31 ] }
    }
  },
  {
    name: "Lissa (Winter's Envoy)",
    shortName: "Lissa",
    title: "Pure Joy",
    releaseDate: "Dec 18, 2017",
    colorType: "Green",
    weaponType: "Axe",
    moveType: "Armored",
    rarity5: ["pool1"],
    limited: true,
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Lissa (Winter's Envoy).png",
      main: "img/heroes-main/Lissa (Winter's Envoy).png"
    },
    skills: [
      { name: "Iron Axe", rarity: 5 },
      { name: "Steel Axe", rarity: 5 },
      { name: "Handbell", rarity: 5 },
      { name: "Handbell+", rarity: 5 },
      { name: "Glowing Ember", rarity: 5 },
      { name: "Bonfire", rarity: 5 },
      { name: "Bold Fighter 1", rarity: 5 },
      { name: "Bold Fighter 2", rarity: 5 },
      { name: "Bold Fighter 3", rarity: 5 },
      { name: "Fortify Def 1", rarity: 5 },
      { name: "Fortify Def 2", rarity: 5 },
      { name: "Fortify Armor", rarity: 5 }
    ],
    stats: {
      level1: { hp: 21, atk: 9, spd: 8, def: 9, res: 8 },
      level40: { hp: [ 39, 43, 46 ], atk: [ 30, 33, 36 ], spd: [ 26, 30, 33 ], def: [ 32, 35, 38 ], res: [ 31, 34, 37 ] }
    }
  },
  {
    name: "Lloyd",
    title: "White Wolf",
    releaseDate: "May 19, 2017",
    colorType: "Red",
    weaponType: "Sword",
    moveType: "Infantry",
    rarity3: ["pool1"],
    rarity4: ["pool1"],
    ghb: true,
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Lloyd.png",
      main: "img/heroes-main/Lloyd.png"
    },
    skills: [
      { name: "Iron Sword", rarity: 3 },
      { name: "Steel Sword", rarity: 3 },
      { name: "Silver Sword", rarity: 4 },
      { name: "Regal Blade", rarity: 5 },
      { name: "Chilling Wind", rarity: 4 },
      { name: "Iceberg", rarity: 4 },
      { name: "Pass 1", rarity: 3 },
      { name: "Pass 2", rarity: 3 },
      { name: "Pass 3", rarity: 4 },
      { name: "Threaten Atk 1", rarity: 3 },
      { name: "Threaten Atk 2", rarity: 4 },
      { name: "Threaten Atk 3", rarity: 5 }
    ],
    stats: {
      level1: { hp: 17, atk: 8, spd: 9, def: 5, res: 8 },
      level40: { hp: [ 38, 41, 44 ], atk: [ 29, 32, 35 ], spd: [ 32, 35, 38 ], def: [ 17, 20, 23 ], res: [ 26, 30, 33 ] },
      level1_4: { hp: 16, atk: 8, spd: 9, def: 4, res: 7 },
      level40_4: { hp: [ 35, 38, 41 ], atk: [ 27, 30, 33 ], spd: [ 30, 33, 36 ], def: [ 15, 18, 21 ], res: [ 24, 27, 30 ] }
    }
  },
  {
    name: "Lon'qu",
    title: "Solitary Blade",
    releaseDate: "Feb 02, 2017",
    colorType: "Red",
    weaponType: "Sword",
    moveType: "Infantry",
    rarity3: ["pool1"],
    rarity4: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Lon'qu.png",
      main: "img/heroes-main/Lon'qu.png"
    },
    skills: [
      { name: "Iron Sword", rarity: 3 },
      { name: "Steel Sword", rarity: 3 },
      { name: "Killing Edge", rarity: 4 },
      { name: "Killing Edge+", rarity: 5 },
      { name: "Night Sky", rarity: 4 },
      { name: "Glimmer", rarity: 4 },
      { name: "Speed +1", rarity: 3 },
      { name: "Speed +2", rarity: 4 },
      { name: "Speed +3", rarity: 5 },
      { name: "Vantage 1", rarity: 3 },
      { name: "Vantage 2", rarity: 3 },
      { name: "Vantage 3", rarity: 4 }
    ],
    stats: {
      level1: { hp: 19, atk: 7, spd: 11, def: 5, res: 5 },
      level40: { hp: [ 42, 45, 48 ], atk: [ 25, 29, 32 ], spd: [ 36, 39, 42 ], def: [ 19, 22, 25 ], res: [ 19, 22, 25 ] },
      level1_4: { hp: 18, atk: 7, spd: 11, def: 4, res: 4 },
      level40_4: { hp: [ 39, 42, 45 ], atk: [ 24, 27, 30 ], spd: [ 34, 37, 40 ], def: [ 17, 20, 23 ], res: [ 17, 20, 23 ] }
    }
  },
  {
    name: "Lucina",
    title: "Future Witness",
    releaseDate: "Feb 02, 2017",
    colorType: "Red",
    weaponType: "Sword",
    moveType: "Infantry",
    rarity5: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Lucina.png",
      main: "img/heroes-main/Lucina.png"
    },
    skills: [
      { name: "Iron Sword", rarity: 5 },
      { name: "Steel Sword", rarity: 5 },
      { name: "Silver Sword", rarity: 5 },
      { name: "Falchion", rarity: 5 },
      { name: "New Moon", rarity: 5 },
      { name: "Luna", rarity: 5 },
      { name: "Aether", rarity: 5 },
      { name: "Defiant Spd 1", rarity: 5 },
      { name: "Defiant Spd 2", rarity: 5 },
      { name: "Defiant Spd 3", rarity: 5 },
      { name: "Spur Atk 1", rarity: 5 },
      { name: "Spur Atk 2", rarity: 5 },
      { name: "Spur Atk 3", rarity: 5 }
    ],
    stats: {
      level1: { hp: 19, atk: 8, spd: 10, def: 6, res: 4 },
      level40: { hp: [ 40, 43, 46 ], atk: [ 31, 34, 37 ], spd: [ 33, 36, 39 ], def: [ 22, 25, 29 ], res: [ 16, 19, 22 ] }
    }
  },
  {
    name: "Lucina (Brave Heroes)",
    shortName: "Lucina",
    title: "Brave Princess",
    releaseDate: "Aug 31, 2017",
    colorType: "Blue",
    weaponType: "Lance",
    moveType: "Infantry",
    rarity5: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Lucina (Brave Heroes).png",
      main: "img/heroes-main/Lucina (Brave Heroes).png"
    },
    skills: [
      { name: "Iron Lance", rarity: 5 },
      { name: "Steel Lance", rarity: 5 },
      { name: "Silver Lance", rarity: 5 },
      { name: "Geirskögul", rarity: 5 },
      { name: "Daylight", rarity: 5 },
      { name: "Sol", rarity: 5 },
      { name: "Aether", rarity: 5 },
      { name: "Armored Blow 1", rarity: 5 },
      { name: "Sturdy Blow 1", rarity: 5 },
      { name: "Sturdy Blow 2", rarity: 5 },
      { name: "Spur Spd 1", rarity: 5 },
      { name: "Drive Spd 1", rarity: 5 },
      { name: "Drive Spd 2", rarity: 5 }
    ],
    stats: {
      level1: { hp: 17, atk: 8, spd: 10, def: 8, res: 4 },
      level40: { hp: [ 38, 41, 44 ], atk: [ 31, 34, 37 ], spd: [ 33, 36, 39 ], def: [ 24, 27, 31 ], res: [ 16, 19, 22 ] }
    }
  },
  {
    name: "Lucina (Spring Festival)",
    shortName: "Lucina",
    title: "Spring Exalt",
    releaseDate: "Mar 30, 2017",
    colorType: "Blue",
    weaponType: "Tome",
    moveType: "Infantry",
    rarity5: ["pool1"],
    limited: true,
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Lucina (Spring Festival).png",
      main: "img/heroes-main/Lucina (Spring Festival).png"
    },
    skills: [
      { name: "Thunder", rarity: 5 },
      { name: "Elthunder", rarity: 5 },
      { name: "Blue Egg", rarity: 5 },
      { name: "Blue Egg+", rarity: 5 },
      { name: "Rally Speed", rarity: 5 },
      { name: "Darting Blow 1", rarity: 5 },
      { name: "Swift Sparrow 1", rarity: 5 },
      { name: "Swift Sparrow 2", rarity: 5 },
      { name: "Seal Res 1", rarity: 5 },
      { name: "Seal Res 2", rarity: 5 },
      { name: "Seal Res 3", rarity: 5 }
    ],
    stats: {
      level1: { hp: 16, atk: 7, spd: 10, def: 5, res: 6 },
      level40: { hp: [ 32, 35, 39 ], atk: [ 25, 29, 32 ], spd: [ 33, 36, 39 ], def: [ 19, 22, 25 ], res: [ 22, 25, 29 ] }
    }
  },
  {
    name: "Lucius",
    title: "The Light",
    releaseDate: "Mar 14, 2017",
    colorType: "Neutral",
    weaponType: "Staff",
    moveType: "Infantry",
    rarity4: ["pool1"],
    rarity5: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Lucius.png",
      main: "img/heroes-main/Lucius.png"
    },
    skills: [
      { name: "Assault", rarity: 4 },
      { name: "Pain", rarity: 4 },
      { name: "Pain+", rarity: 5 },
      { name: "Heal", rarity: 4 },
      { name: "Reconcile", rarity: 4 },
      { name: "Martyr", rarity: 5 },
      { name: "Imbue", rarity: 4 },
      { name: "Miracle", rarity: 5 },
      { name: "HP +3", rarity: 4 },
      { name: "HP +4", rarity: 4 },
      { name: "HP +5", rarity: 5 }
    ],
    stats: {
      level1: { hp: 18, atk: 6, spd: 8, def: 3, res: 9 },
      level40: { hp: [ 34, 37, 41 ], atk: [ 29, 32, 35 ], spd: [ 26, 30, 33 ], def: [ 10, 13, 17 ], res: [ 32, 35, 38 ] },
      level1_4: { hp: 17, atk: 5, spd: 8, def: 2, res: 9 },
      level40_4: { hp: [ 32, 35, 38 ], atk: [ 26, 29, 32 ], spd: [ 25, 28, 31 ], def: [ 9, 12, 15 ], res: [ 30, 33, 36 ] }
    }
  },
  {
    name: "Lukas",
    title: "Sharp Soldier",
    colorType: "Blue",
    weaponType: "Lance",
    moveType: "Infantry",
    releaseDate: "Apr 14, 2017",
    rarity4: ["pool1"],
    rarity5: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Lukas.png",
      main: "img/heroes-main/Lukas.png"
    },
    skills: [
      { name: "Iron Lance", rarity: 4 },
      { name: "Steel Lance", rarity: 4 },
      { name: "Killer Lance", rarity: 4 },
      { name: "Killer Lance+", rarity: 5 },
      { name: "Holy Vestments", rarity: 4 },
      { name: "Sacred Cowl", rarity: 4 },
      { name: "Fortress Def 1", rarity: 4 },
      { name: "Fortress Def 2", rarity: 4 },
      { name: "Fortress Def 3", rarity: 5 },
      { name: "Obstruct 1", rarity: 4 },
      { name: "Obstruct 2", rarity: 4 },
      { name: "Obstruct 3", rarity: 4 }
    ],
    stats: {
      level1: { hp: 19, atk: 9, spd: 5, def: 10, res: 4 },
      level40: { hp: [ 42, 45, 48 ], atk: [ 32, 35, 38 ], spd: [ 19, 22, 25 ], def: [ 35, 38, 41 ], res: [ 13, 17, 20 ] },
      level1_4: { hp: 18, atk: 9, spd: 4, def: 10, res: 3 },
      level40_4: { hp: [ 39, 42, 45 ], atk: [ 30, 33, 36 ], spd: [ 17, 20, 23 ], def: [ 33, 36, 39 ], res: [ 12, 15, 18 ] }
    }
  },
  {
    name: "Luke",
    title: "Rowdy Squire",
    releaseDate: "Jun 14, 2017",
    colorType: "Red",
    weaponType: "Sword",
    moveType: "Cavalry",
    rarity5: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Luke.png",
      main: "img/heroes-main/Luke.png"
    },
    skills: [
      { name: "Iron Sword", rarity: 5 },
      { name: "Steel Sword", rarity: 5 },
      { name: "Brave Sword", rarity: 5 },
      { name: "Brave Sword+", rarity: 5 },
      { name: "Glowing Ember", rarity: 5 },
      { name: "Bonfire", rarity: 5 },
      { name: "Fire Boost 1", rarity: 5 },
      { name: "Fire Boost 2", rarity: 5 },
      { name: "Fire Boost 3", rarity: 5 },
      { name: "Panic Ploy 1", rarity: 5 },
      { name: "Panic Ploy 2", rarity: 5 },
      { name: "Panic Ploy 3", rarity: 5 }
    ],
    stats: {
      level1: { hp: 19, atk: 8, spd: 6, def: 8, res: 5 },
      level40: { hp: [ 40, 43, 46 ], atk: [ 31, 34, 37 ], spd: [ 24, 28, 31 ], def: [ 26, 30, 33 ], res: [ 17, 20, 23 ] }
    }
  },
  {
    name: "Lute",
    title: "Prodigy",
    releaseDate: "Nov 15, 2017",
    colorType: "Blue",
    weaponType: "Tome",
    moveType: "Infantry",
    rarity5: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Lute.png",
      main: "img/heroes-main/Lute.png"
    },
    skills: [
      { name: "Thunder", rarity: 5 },
      { name: "Elthunder", rarity: 5 },
      { name: "Thoron", rarity: 5 },
      { name: "Weirding Tome", rarity: 5 },
      { name: "Rally Attack", rarity: 5 },
      { name: "Rally Atk/Res", rarity: 5 },
      { name: "Resistance +1", rarity: 5 },
      { name: "HP/Res 1", rarity: 5 },
      { name: "HP/Res 2", rarity: 5 },
      { name: "Res Ploy 1", rarity: 5 },
      { name: "Res Ploy 2", rarity: 5 },
      { name: "Res Ploy 3", rarity: 5 }
    ],
    stats: {
      level1: { hp: 16, atk: 10, spd: 8, def: 3, res: 8 },
      level40: { hp: [ 30, 33, 36 ], atk: [ 33, 36, 39 ], spd: [ 29, 32, 35 ], def: [ 12, 16, 19 ], res: [ 31, 34, 37 ] }
    }
  },
  {
    name: "Lyn",
    title: "Lady of the Plains",
    releaseDate: "Feb 02, 2017",
    colorType: "Red",
    weaponType: "Sword",
    moveType: "Infantry",
    rarity5: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Lyn.png",
      main: "img/heroes-main/Lyn.png"
    },
    skills: [
      { name: "Iron Sword", rarity: 5 },
      { name: "Steel Sword", rarity: 5 },
      { name: "Silver Sword", rarity: 5 },
      { name: "Sol Katti", rarity: 5 },
      { name: "Night Sky", rarity: 5 },
      { name: "Astra", rarity: 5 },
      { name: "Galeforce", rarity: 5 },
      { name: "Defiant Atk 1", rarity: 5 },
      { name: "Defiant Atk 2", rarity: 5 },
      { name: "Defiant Atk 3", rarity: 5 },
      { name: "Spur Spd 1", rarity: 5 },
      { name: "Spur Spd 2", rarity: 5 },
      { name: "Spur Spd 3", rarity: 5 }
    ],
    stats: {
      level1: { hp: 18, atk: 6, spd: 11, def: 7, res: 5 },
      level40: { hp: [ 34, 37, 41 ], atk: [ 24, 28, 31 ], spd: [ 34, 37, 40 ], def: [ 23, 26, 30 ], res: [ 26, 29, 32 ] }
    }
  },
  {
    name: "Lyn (Brave Heroes)",
    shortName: "Lyn",
    title: "Brave Lady",
    releaseDate: "Aug 31, 2017",
    colorType: "Neutral",
    weaponType: "Bow",
    moveType: "Cavalry",
    rarity5: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Lyn (Brave Heroes).png",
      main: "img/heroes-main/Lyn (Brave Heroes).png"
    },
    skills: [
      { name: "Iron Bow", rarity: 5 },
      { name: "Steel Bow", rarity: 5 },
      { name: "Silver Bow", rarity: 5 },
      { name: "Mulagir", rarity: 5 },
      { name: "Dragon Gaze", rarity: 5 },
      { name: "Draconic Aura", rarity: 5 },
      { name: "Death Blow 1", rarity: 5 },
      { name: "Swift Sparrow 1", rarity: 5 },
      { name: "Swift Sparrow 2", rarity: 5 },
      { name: "Sacae's Blessing", rarity: 5 },
      { name: "Atk Smoke 1", rarity: 5 },
      { name: "Atk Smoke 2", rarity: 5 },
      { name: "Atk Smoke 3", rarity: 5 }
    ],
    stats: {
      level1: { hp: 16, atk: 7, spd: 9, def: 5, res: 6 },
      level40: { hp: [ 32, 35, 39 ], atk: [ 30, 33, 36 ], spd: [ 32, 35, 38 ], def: [ 14, 18, 21 ], res: [ 24, 28, 31 ] }
    }
  },
  {
    name: "Lyn (Bridal Blessings)",
    shortName: "Lyn",
    title: "Bride of the Plains",
    releaseDate: "May 30, 2017",
    colorType: "Neutral",
    weaponType: "Staff",
    moveType: "Infantry",
    rarity5: ["pool1"],
    limited: true,
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Lyn (Bridal Blessings).png",
      main: "img/heroes-main/Lyn (Bridal Blessings).png"
    },
    skills: [
      { name: "Assault", rarity: 5 },
      { name: "Candlelight", rarity: 5 },
      { name: "Candlelight+", rarity: 5 },
      { name: "Heal", rarity: 5 },
      { name: "Reconcile", rarity: 5 },
      { name: "Rehabilitate", rarity: 5 },
      { name: "Imbue", rarity: 5 },
      { name: "Swift-Winds Balm", rarity: 5 },
      { name: "Dazzling Staff 1", rarity: 5 },
      { name: "Dazzling Staff 2", rarity: 5 },
      { name: "Dazzling Staff 3", rarity: 5 }
    ],
    stats: {
      level1: { hp: 17, atk: 6, spd: 10, def: 6, res: 5 },
      level40: { hp: [ 35, 39, 42 ], atk: [ 24, 28, 31 ], spd: [ 31, 34, 37 ], def: [ 20, 23, 26 ], res: [ 21, 24, 28 ] }
    }
  },
  {
    name: "Lyn (Love Abounds)",
    shortName: "Lyn",
    title: "Wind's Embrace",
    releaseDate: "Feb 09, 2018",
    colorType: "Blue",
    weaponType: "Tome",
    moveType: "Armored",
    rarity5: ["pool1"],
    limited: true,
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Lyn (Love Abounds).png",
      main: "img/heroes-main/Lyn (Love Abounds).png"
    },
    skills: [
      { name: "Light", rarity: 5 },
      { name: "Ellight", rarity: 5 },
      { name: "Blue Gift", rarity: 5 },
      { name: "Blue Gift+", rarity: 5 },
      { name: "Ardent Sacrifice", rarity: 5 },
      { name: "Atk/Spd Bond 1", rarity: 5 },
      { name: "Atk/Spd Bond 2", rarity: 5 },
      { name: "Atk/Spd Bond 3", rarity: 5 },
      { name: "Guard 1", rarity: 5 },
      { name: "Guard 2", rarity: 5 },
      { name: "Guard 3", rarity: 5 },
      { name: "Armor March 1", rarity: 5 },
      { name: "Armor March 2", rarity: 5 },
      { name: "Armor March 3", rarity: 5 }
    ],
    stats: {
      level1: { hp: 18, atk: 9, spd: 10, def: 5, res: 10 },
      level40: { hp: [ 34, 37, 41 ], atk: [ 27, 31, 34 ], spd: [ 33, 36, 39 ], def: [ 23, 27, 30 ], res: [ 31, 34, 37 ] },
    }
  },
  {
    name: "Lyon",
    title: "Shadow Prince",
    colorType: "Red",
    weaponType: "Tome",
    moveType: "Infantry",
    releaseDate: "January 26, 2018",
    rarity3: ["pool1"],
    rarity4: ["pool1"],
    ghb: true,
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Lyon.png",
      main: "img/heroes-main/Lyon.png"
    },
    skills: [
      { name: "Flux", rarity: 3 },
      { name: "Ruin", rarity: 3 },
      { name: "Fenrir", rarity: 3 },
      { name: "Naglfar", rarity: 5 },
      { name: "Retribution", rarity: 3 },
      { name: "Vengeance", rarity: 4 },
      { name: "Resistance +1", rarity: 3 },
      { name: "Atk/Res 1", rarity: 4 },
      { name: "Atk/Res 2", rarity: 5 },
      { name: "Spur Res 1", rarity: 3 },
      { name: "Drive Res 1", rarity: 3 },
      { name: "Drive Res 2", rarity: 4 }
    ],
    stats: {
      level1_4: { hp: 18, atk: 10, spd: 3, def: 3, res: 8 },
      level1: { hp: 19, atk: 10, spd: 4, def: 4, res: 8 },
      level40_4: { hp: [35, 38, 41], atk: [29, 32, 35], spd: [16, 19, 22], def: [20, 23, 26], res: [25, 28, 31]},
      level40: { hp: [38, 41, 44], atk: [31, 34, 37], spd: [18, 21, 24], def: [23, 26, 29], res: [27, 30, 33]}
    }
  },
  {
    name: "Mae",
    title: "Bundle of Energy",
    releaseDate: "May 15, 2017",
    colorType: "Blue",
    weaponType: "Tome",
    moveType: "Infantry",
    rarity4: ["pool1"],
    rarity5: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Mae.png",
      main: "img/heroes-main/Mae.png"
    },
    skills: [
      { name: "Thunder", rarity: 4 },
      { name: "Elthunder", rarity: 4 },
      { name: "Blárowl", rarity: 4 },
      { name: "Blárowl+", rarity: 5 },
      { name: "Draw Back", rarity: 4 },
      { name: "Desperation 1", rarity: 4 },
      { name: "Desperation 2", rarity: 4 },
      { name: "Desperation 3", rarity: 5 },
      { name: "B Tome Exp. 1", rarity: 4 },
      { name: "B Tome Exp. 2", rarity: 4 },
      { name: "B Tome Exp. 3", rarity: 4 }
    ],
    stats: {
      level1: { hp: 16, atk: 10, spd: 7, def: 3, res: 8 },
      level40: { hp: [ 32, 35, 39 ], atk: [ 33, 36, 39 ], spd: [ 28, 31, 34 ], def: [ 12, 16, 19 ], res: [ 26, 30, 33 ] },
      level1_4: { hp: 15, atk: 10, spd: 6, def: 2, res: 8 },
      level40_4: { hp: [ 30, 33, 36 ], atk: [ 31, 34, 37 ], spd: [ 25, 28, 31 ], def: [ 11, 14, 17 ], res: [ 25, 28, 31 ] }
    }
  },
  {
    name: "Maria",
    title: "Minerva's Sister",
    releaseDate: "Feb 02, 2017",
    colorType: "Neutral",
    weaponType: "Staff",
    moveType: "Infantry",
    rarity4: ["pool1"],
    rarity5: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Maria.png",
      main: "img/heroes-main/Maria.png"
    },
    skills: [
      { name: "Assault", rarity: 4 },
      { name: "Panic", rarity: 4 },
      { name: "Panic+", rarity: 5 },
      { name: "Heal", rarity: 4 },
      { name: "Mend", rarity: 4 },
      { name: "Physic", rarity: 5 },
      { name: "Imbue", rarity: 4 },
      { name: "Miracle", rarity: 5 },
      { name: "Fortify Res 1", rarity: 4 },
      { name: "Fortify Res 2", rarity: 4 },
      { name: "Fortify Res 3", rarity: 5 }
    ],
    stats: {
      level1: { hp: 17, atk: 5, spd: 8, def: 4, res: 10 },
      level40: { hp: [ 33, 36, 40 ], atk: [ 23, 27, 30 ], spd: [ 31, 34, 37 ], def: [ 16, 19, 22 ], res: [ 28, 32, 35 ] },
      level1_4: { hp: 16, atk: 4, spd: 8, def: 3, res: 10 },
      level40_4: { hp: [ 31, 34, 37 ], atk: [ 21, 24, 27 ], spd: [ 29, 32, 35 ], def: [ 14, 17, 20 ], res: [ 27, 30, 33 ] }
    }
  },
  {
    name: "Marisa",
    title: "Crimson Flash",
    releaseDate: "January 31, 2018",
    colorType: "Red",
    weaponType: "Sword",
    moveType: "Infantry",
    rarity3: ["pool1"],
    rarity4: ["pool1"],
    ttReward: true,
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Marisa.png",
      main: "img/heroes-main/Marisa.png"
    },
    skills: [
      { name: "Iron Sword", rarity: 4 },
      { name: "Steel Sword", rarity: 4 },
      { name: "Wo Dao", rarity: 4 },
      { name: "Wo Dao+", rarity: 5 },
      { name: "Night Sky", rarity: 3 },
      { name: "Glimmer", rarity: 4 },
      { name: "HP +3", rarity: 4 },
      { name: "HP/Def 1", rarity: 4 },
      { name: "HP/Def 2", rarity: 4 },
      { name: "Infantry Pulse 1", rarity: 4 },
      { name: "Infantry Pulse 2", rarity: 4 },
      { name: "Infantry Pulse 3", rarity: 5 }
    ],
    stats: {
      level1_4: { hp: 17, atk: 8, spd: 10, def: 05, res: 5 },
      level1: { hp: 18, atk: 8, spd: 10, def: 6, res: 6 },
      level40_4: { hp: [40, 43, 46], atk: [25, 28, 31], spd: [31, 34, 37], def: [24, 27, 30], res: [16, 19, 22] },
      level40: { hp: [43, 46, 49], atk: [27, 30, 33], spd: [33, 36, 39], def: [27, 30, 33], res: [18, 21, 24] }
    }
  },
  {
    name: "Marth",
    title: "Altean Prince",
    releaseDate: "Feb 02, 2017",
    colorType: "Red",
    weaponType: "Sword",
    moveType: "Infantry",
    rarity4: ["pool1"],
    rarity5: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Marth.png",
      main: "img/heroes-main/Marth.png"
    },
    skills: [
      { name: "Iron Sword", rarity: 4 },
      { name: "Steel Sword", rarity: 4 },
      { name: "Silver Sword", rarity: 4 },
      { name: "Falchion", rarity: 5 },
      { name: "Pivot", rarity: 4 },
      { name: "Escape Route 1", rarity: 4 },
      { name: "Escape Route 2", rarity: 4 },
      { name: "Escape Route 3", rarity: 5 },
      { name: "Spur Spd 1", rarity: 4 },
      { name: "Spur Spd 2", rarity: 4 },
      { name: "Spur Spd 3", rarity: 4 }
    ],
    stats: {
      level1: { hp: 19, atk: 7, spd: 8, def: 7, res: 6 },
      level40: { hp: [ 37, 41, 44 ], atk: [ 28, 31, 34 ], spd: [ 31, 34, 37 ], def: [ 25, 29, 32 ], res: [ 20, 23, 26 ] },
      level1_4: { hp: 18, atk: 7, spd: 8, def: 6, res: 5 },
      level40_4: { hp: [ 35, 38, 41 ], atk: [ 26, 29, 32 ], spd: [ 29, 32, 35 ], def: [ 23, 26, 29 ], res: [ 18, 21, 24 ] }
    }
  },
  {
    name: "Marth (Masked)",
    shortName: "Marth",
    title: "Enigmatic Blade",
    releaseDate: "Jun 08, 2017",
    colorType: "Red",
    weaponType: "Sword",
    moveType: "Infantry",
    rarity4: ["pool1"],
    rarity5: ["pool1"],
    ttReward: true,
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Marth (Masked).png",
      main: "img/heroes-main/Marth (Masked).png"
    },
    skills: [
      { name: "Iron Sword", rarity: 4 },
      { name: "Steel Sword", rarity: 4 },
      { name: "Silver Sword", rarity: 4 },
      { name: "Falchion", rarity: 5 }
    ],
    stats: {
      level1: { hp: 19, atk: 8, spd: 10, def: 6, res: 4 },
      level40: { hp: [ 40, 43, 46 ], atk: [ 31, 34, 37 ], spd: [ 33, 36, 39 ], def: [ 22, 25, 29 ], res: [ 16, 19, 22 ] },
      level1_4: { hp: 18, atk: 8, spd: 10, def: 5, res: 3 },
      level40_4: { hp: [ 37, 40, 43 ], atk: [ 29, 32, 35 ], spd: [ 31, 34, 37 ], def: [ 20, 23, 26 ], res: [ 14, 17, 20 ] }
    }
  },
  {
    name: "Mathilda",
    title: "Legendary Knight",
    releaseDate: "Jul 13, 2017",
    colorType: "Blue",
    weaponType: "Lance",
    moveType: "Cavalry",
    rarity4: ["pool1"],
    rarity5: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Mathilda.png",
      main: "img/heroes-main/Mathilda.png"
    },
    skills: [
      { name: "Iron Lance", rarity: 4 },
      { name: "Steel Lance", rarity: 4 },
      { name: "Ridersbane", rarity: 4 },
      { name: "Ridersbane+", rarity: 5 },
      { name: "Rally Resistance", rarity: 4 },
      { name: "Cancel Affinity 1", rarity: 4 },
      { name: "Cancel Affinity 2", rarity: 4 },
      { name: "Cancel Affinity 3", rarity: 5 },
      { name: "Hone Atk 1", rarity: 4 },
      { name: "Hone Atk 2", rarity: 4 },
      { name: "Hone Atk 3", rarity: 4 }
    ],
    stats: {
      level1: { hp: 16, atk: 7, spd: 8, def: 7, res: 8 },
      level40: { hp: [ 32, 35, 39 ], atk: [ 25, 29, 32 ], spd: [ 29, 32, 35 ], def: [ 21, 24, 27 ], res: [ 31, 34, 37 ] },
      level1_4: { hp: 15, atk: 6, spd: 8, def: 6, res: 8 },
      level40_4: { hp: [ 30, 33, 36 ], atk: [ 23, 26, 29 ], spd: [ 27, 30, 33 ], def: [ 19, 22, 25 ], res: [ 29, 32, 35 ] }
    }
  },
  {
    name: "Matthew",
    title: "Faithful Spy",
    releaseDate: "Feb 02, 2017",
    colorType: "Neutral",
    weaponType: "Dagger",
    moveType: "Infantry",
    rarity3: ["pool1"],
    rarity4: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Matthew.png",
      main: "img/heroes-main/Matthew.png"
    },
    skills: [
      { name: "Iron Dagger", rarity: 2 },
      { name: "Steel Dagger", rarity: 3 },
      { name: "Rogue Dagger", rarity: 4 },
      { name: "Rogue Dagger+", rarity: 5 },
      { name: "Reciprocal Aid", rarity: 4 },
      { name: "Poison Strike 1", rarity: 3 },
      { name: "Poison Strike 2", rarity: 4 },
      { name: "Poison Strike 3", rarity: 5 },
      { name: "Hone Spd 1", rarity: 3 },
      { name: "Hone Spd 2", rarity: 2 },
      { name: "Hone Spd 3", rarity: 4 }
    ],
    stats: {
      level1: { hp: 17, atk: 6, spd: 10, def: 6, res: 5 },
      level40: { hp: [ 38, 41, 44 ], atk: [ 22, 25, 29 ], spd: [ 31, 34, 37 ], def: [ 27, 30, 33 ], res: [ 14, 18, 21 ] },
      level1_4: { hp: 16, atk: 6, spd: 10, def: 5, res: 4 },
      level40_4: { hp: [ 35, 38, 41 ], atk: [ 21, 24, 27 ], spd: [ 29, 32, 35 ], def: [ 24, 27, 30 ], res: [ 13, 16, 19 ] }
    }
  },
  {
    name: "Merric",
    title: "Wind Mage",
    releaseDate: "Feb 02, 2017",
    colorType: "Green",
    weaponType: "Tome",
    moveType: "Infantry",
    rarity4: ["pool1"],
    rarity5: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Merric.png",
      main: "img/heroes-main/Merric.png"
    },
    skills: [
      { name: "Wind", rarity: 4 },
      { name: "Elwind", rarity: 4 },
      { name: "Rexcalibur", rarity: 4 },
      { name: "Excalibur", rarity: 5 },
      { name: "Rising Wind", rarity: 4 },
      { name: "Growing Wind", rarity: 4 },
      { name: "HP +3", rarity: 4 },
      { name: "HP +4", rarity: 4 },
      { name: "HP +5", rarity: 5 },
      { name: "Spur Res 1", rarity: 4 },
      { name: "Spur Res 2", rarity: 4 },
      { name: "Spur Res 3", rarity: 4 }
    ],
    stats: {
      level1: { hp: 19, atk: 7, spd: 8, def: 6, res: 4 },
      level40: { hp: [ 40, 43, 46 ], atk: [ 23, 26, 30 ], spd: [ 29, 32, 35 ], def: [ 24, 28, 31 ], res: [ 16, 19, 22 ] },
      level1_4: { hp: 18, atk: 7, spd: 8, def: 5, res: 3 },
      level40_4: { hp: [ 37, 40, 43 ], atk: [ 22, 25, 28 ], spd: [ 27, 30, 33 ], def: [ 22, 25, 28 ], res: [ 14, 17, 20 ] }
    }
  },
  {
    name: "Mia",
    title: "Lady of Blades",
    releaseDate: "Nov 15, 2017",
    colorType: "Red",
    weaponType: "Sword",
    moveType: "Infantry",
    rarity5: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Mia.png",
      main: "img/heroes-main/Mia.png"
    },
    skills: [
      { name: "Iron Sword", rarity: 5 },
      { name: "Steel Sword", rarity: 5 },
      { name: "Wo Dao", rarity: 5 },
      { name: "Resolute Blade", rarity: 5 },
      { name: "New Moon", rarity: 5 },
      { name: "Luna", rarity: 5 },
      { name: "Flashing Blade 1", rarity: 5 },
      { name: "Flashing Blade 2", rarity: 5 },
      { name: "Flashing Blade 3", rarity: 5 },
      { name: "Vantage 1", rarity: 5 },
      { name: "Vantage 2", rarity: 5 },
      { name: "Vantage 3", rarity: 5 }
    ],
    stats: {
      level1: { hp: 16, atk: 8, spd: 12, def: 6, res: 6 },
      level40: { hp: [ 34, 38, 41 ], atk: [ 29, 32, 35 ], spd: [ 37, 40, 43 ], def: [ 24, 28, 31 ], res: [ 22, 25, 29 ] }
    }
  },
  {
    name: "Micaiah",
    title: "Priestess of Dawn",
    releaseDate: "Jan 12, 2018",
    colorType: "Blue",
    weaponType: "Tome",
    moveType: "Infantry",
    rarity5: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Micaiah.png",
      main: "img/heroes-main/Micaiah.png"
    },
    skills: [
      { name: "Light", rarity: 5 },
      { name: "Ellight", rarity: 5 },
      { name: "Shine", rarity: 5 },
      { name: "Thani", rarity: 5 },
      { name: "Ardent Sacrifice", rarity: 5 },
      { name: "Sacrifice", rarity: 5 },
      { name: "Distant Def 1", rarity: 5 },
      { name: "Distant Def 2", rarity: 5 },
      { name: "Distant Def 3", rarity: 5 },
      { name: "Guard 1", rarity: 5 },
      { name: "Guard 2", rarity: 5 },
      { name: "Guard 3", rarity: 5 },
      { name: "Spur Atk 1", rarity: 5 },
      { name: "Drive Atk 1", rarity: 5 },
      { name: "Drive Atk 2", rarity: 5 }
    ],
    stats: {
      level1: { hp: 16, atk: 9, spd: 6, def: 5, res: 9 },
      level40: { hp: [ 32, 35, 39 ], atk: [ 32, 35, 38 ], spd: [ 24, 28, 31 ], def: [ 14, 18, 21 ], res: [ 32, 35, 38 ] },
    }
  },
  {
    name: "Michalis",
    title: "Ambitious King",
    releaseDate: "Mar 20, 2017",
    colorType: "Green",
    weaponType: "Axe",
    moveType: "Flying",
    rarity3: ["pool1"],
    rarity4: ["pool1"],
    ghb: true,
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Michalis.png",
      main: "img/heroes-main/Michalis.png"
    },
    skills: [
      { name: "Iron Axe", rarity: 3 },
      { name: "Steel Axe", rarity: 3 },
      { name: "Silver Axe", rarity: 4 },
      { name: "Hauteclere", rarity: 5 },
      { name: "Rising Thunder", rarity: 4 },
      { name: "Blazing Thunder", rarity: 4 },
      { name: "Iote's Shield", rarity: 4 },
      { name: "Threaten Def 1", rarity: 3 },
      { name: "Threaten Def 2", rarity: 3 },
      { name: "Threaten Def 3", rarity: 4 }
    ],
    stats: {
      level1: { hp: 19, atk: 8, spd: 7, def: 9, res: 4 },
      level40: { hp: [ 40, 43, 46 ], atk: [ 31, 34, 37 ], spd: [ 23, 26, 30 ], def: [ 32, 35, 38 ], res: [ 16, 19, 22 ] },
      level1_4: { hp: 18, atk: 8, spd: 6, def: 9, res: 3 },
      level40_4: { hp: [ 37, 40, 43 ], atk: [ 29, 32, 35 ], spd: [ 21, 24, 27 ], def: [ 30, 33, 36 ], res: [ 14, 17, 20 ] }
    }
  },
  {
    name: "Minerva",
    title: "Red Dragoon",
    releaseDate: "Feb 02, 2017",
    colorType: "Green",
    weaponType: "Axe",
    moveType: "Flying",
    rarity5: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Minerva.png",
      main: "img/heroes-main/Minerva.png"
    },
    skills: [
      { name: "Iron Axe", rarity: 5 },
      { name: "Steel Axe", rarity: 5 },
      { name: "Silver Axe", rarity: 5 },
      { name: "Hauteclere", rarity: 5 },
      { name: "Holy Vestments", rarity: 5 },
      { name: "Sacred Cowl", rarity: 5 },
      { name: "Life and Death 1", rarity: 5 },
      { name: "Life and Death 2", rarity: 5 },
      { name: "Life and Death 3", rarity: 5 },
      { name: "Spur Def 1", rarity: 5 },
      { name: "Spur Def 2", rarity: 5 },
      { name: "Ward Fliers", rarity: 5 }
    ],
    stats: {
      level1: { hp: 18, atk: 7, spd: 9, def: 8, res: 5 },
      level40: { hp: [ 36, 40, 43 ], atk: [ 28, 31, 34 ], spd: [ 30, 33, 36 ], def: [ 29, 32, 35 ], res: [ 19, 22, 25 ] }
    }
  },
  {
    name: "Mist",
    title: "Helpful Sister",
    releaseDate: "Apr 26, 2017",
    colorType: "Neutral",
    weaponType: "Staff",
    moveType: "Infantry",
    rarity5: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Mist.png",
      main: "img/heroes-main/Mist.png"
    },
    skills: [
      { name: "Assault", rarity: 5 },
      { name: "Slow", rarity: 5 },
      { name: "Slow+", rarity: 5 },
      { name: "Heal", rarity: 5 },
      { name: "Mend", rarity: 5 },
      { name: "Recover", rarity: 5 },
      { name: "Imbue", rarity: 5 },
      { name: "Miracle", rarity: 5 },
      { name: "Spur Res 1", rarity: 5 },
      { name: "Spur Def/Res 1", rarity: 5 },
      { name: "Spur Def/Res 2", rarity: 5 }
    ],
    stats: {
      level1: { hp: 17, atk: 8, spd: 6, def: 5, res: 8 },
      level40: { hp: [ 35, 39, 42 ], atk: [ 24, 27, 31 ], spd: [ 24, 28, 31 ], def: [ 17, 20, 23 ], res: [ 31, 34, 37 ] }
    }
  },
  {
    name: "Morgan (F)",
    shortName: "Morgan",
    title: "Lass from Afar",
    releaseDate: "Mar 09, 2018",
    colorType: "Blue",
    weaponType: "Tome",
    moveType: "Flying",
    rarity5: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Morgan (F).png",
      main: "img/heroes-main/Morgan (F).png"
    },
    skills: [
      { name: "Thunder", rarity: 5 },
      { name: "Elthunder", rarity: 5 },
      { name: "Blárserpent", rarity: 5 },
      { name: "Blárserpent+", rarity: 5 },
      { name: "Chilling Wind", rarity: 5 },
      { name: "Iceberg", rarity: 5 },
      { name: "Warding Stance 1", rarity: 5 },
      { name: "Mirror Stance 1", rarity: 5 },
      { name: "Mirror Stance 2", rarity: 5 },
      { name: "Guard 1", rarity: 5 },
      { name: "Guard 2", rarity: 5 },
      { name: "Guard 3", rarity: 5 },
      { name: "Atk Ploy 1", rarity: 5 },
      { name: "Atk Ploy 2", rarity: 5 },
      { name: "Atk Ploy 3", rarity: 5 }
    ],
    stats: {
      level1: { hp: 18, atk: 8, spd: 6, def: 3, res: 9 },
      level40: { hp: [ 34, 37, 41 ], atk: [ 31, 34, 37 ], spd: [ 27, 30, 33 ], def: [ 12, 16, 19 ], res: [ 30, 33, 36 ] }
    }
  },
  {
    name: "Morgan (M)",
    shortName: "Morgan",
    title: "Lad from Afar",
    releaseDate: "Mar 09, 2018",
    colorType: "Red",
    weaponType: "Tome",
    moveType: "Infantry",
    rarity5: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Morgan (M).png",
      main: "img/heroes-main/Morgan (M).png"
    },
    skills: [
      { name: "Flux", rarity: 5 },
      { name: "Ruin", rarity: 5 },
      { name: "Fenrir", rarity: 5 },
      { name: "Grima's Truth", rarity: 5 },
      { name: "Dragon Gaze", rarity: 5 },
      { name: "Dragon Fang", rarity: 5 },
      { name: "Dull Ranged 1", rarity: 5 },
      { name: "Dull Ranged 2", rarity: 5 },
      { name: "Dull Ranged 3", rarity: 5 },
      { name: "Spur Def 1", rarity: 5 },
      { name: "Spur Def/Res 1", rarity: 5 },
      { name: "Spur Def/Res 2", rarity: 5 }
    ],
    stats: {
      level1: { hp: 18, atk: 7, spd: 8, def: 5, res: 7 },
      level40: { hp: [ 34, 37, 41 ], atk: [ 30, 33, 36 ], spd: [ 31, 34, 37 ], def: [ 17, 20, 23 ], res: [ 23, 26, 30 ] }
    }
  },
  {
    name: "Myrrh",
    title: "Great Dragon",
    releaseDate: "January 25, 2018",
    colorType: "Green",
    weaponType: "Breath",
    moveType: "Flying",
    rarity5: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Myrrh.png",
      main: "img/heroes-main/Myrrh.png"
    },
    skills: [
      { name: "Fire Breath", rarity: 5 },
      { name: "Fire Breath+", rarity: 5 },
      { name: "Flametongue", rarity: 5 },
      { name: "Great Flame", rarity: 5 },
      { name: "Glowing Ember", rarity: 5 },
      { name: "Bonfire", rarity: 5 },
      { name: "Fury 1", rarity: 5 },
      { name: "Fury 2", rarity: 5 },
      { name: "Fury 3", rarity: 5 },
      { name: "Hone Atk 1", rarity: 5 },
      { name: "Hone Atk 2", rarity: 5 },
      { name: "Hone Dragons", rarity: 5 }
    ],
    stats: {
      level1: { hp: 16, atk: 7, spd: 6, def: 3, res: 7 },
      level40: { hp: [39, 42, 45], atk: [30, 33, 36], spd: [22, 25, 29], def: [32, 36, 39], res: [28, 31, 34]}
    }
  },
  {
    name: "Narcian",
    title: "Wyvern General",
    releaseDate: "Feb 10, 2017",
    colorType: "Green",
    weaponType: "Axe",
    moveType: "Flying",
    rarity3: ["pool1"],
    rarity4: ["pool1"],
    ghb: true,
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Narcian.png",
      main: "img/heroes-main/Narcian.png"
    },
    skills: [
      { name: "Iron Axe", rarity: 2 },
      { name: "Steel Axe", rarity: 3 },
      { name: "Emerald Axe", rarity: 4 },
      { name: "Emerald Axe+", rarity: 5 },
      { name: "Retribution", rarity: 3 },
      { name: "Vengeance", rarity: 4 },
      { name: "Lancebreaker 1", rarity: 3 },
      { name: "Lancebreaker 2", rarity: 2 },
      { name: "Lancebreaker 3", rarity: 4 },
      { name: "Savage Blow 1", rarity: 3 },
      { name: "Savage Blow 2", rarity: 4 },
      { name: "Savage Blow 3", rarity: 5 }
    ],
    stats: {
      level1: { hp: 18, atk: 7, spd: 7, def: 8, res: 7 },
      level40: { hp: [ 39, 42, 45 ], atk: [ 25, 29, 32 ], spd: [ 25, 29, 32 ], def: [ 29, 32, 35 ], res: [ 23, 26, 30 ] },
      level1_4: { hp: 17, atk: 7, spd: 6, def: 8, res: 6 },
      level40_4: { hp: [ 36, 39, 42 ], atk: [ 24, 27, 30 ], spd: [ 23, 26, 29 ], def: [ 27, 30, 33 ], res: [ 21, 24, 27 ] }
    }
  },
  {
    name: "Navarre",
    title: "Scarlet Sword",
    releaseDate: "Apr 04, 2017",
    colorType: "Red",
    weaponType: "Sword",
    moveType: "Infantry",
    rarity3: ["pool1"],
    rarity4: ["pool1"],
    ghb: true,
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Navarre.png",
      main: "img/heroes-main/Navarre.png"
    },
    skills: [
      { name: "Iron Sword", rarity: 3 },
      { name: "Steel Sword", rarity: 3 },
      { name: "Killing Edge", rarity: 4 },
      { name: "Killing Edge+", rarity: 5 },
      { name: "Rising Wind", rarity: 4 },
      { name: "Blazing Wind", rarity: 4 },
      { name: "Desperation 1", rarity: 3 },
      { name: "Desperation 2", rarity: 4 },
      { name: "Desperation 3", rarity: 5 },
      { name: "Threaten Spd 1", rarity: 3 },
      { name: "Threaten Spd 2", rarity: 3 },
      { name: "Threaten Spd 3", rarity: 4 }
    ],
    stats: {
      level1: { hp: 18, atk: 7, spd: 11, def: 6, res: 5 },
      level40: { hp: [ 39, 42, 45 ], atk: [ 28, 31, 34 ], spd: [ 34, 37, 40 ], def: [ 20, 23, 26 ], res: [ 21, 24, 28 ] },
      level1_4: { hp: 17, atk: 7, spd: 11, def: 5, res: 4 },
      level40_4: { hp: [ 36, 39, 42 ], atk: [ 26, 29, 32 ], spd: [ 32, 35, 38 ], def: [ 18, 21, 24 ], res: [ 19, 22, 25 ] }
    }
  },
  {
    name: "Nephenee",
    title: "Fierce Halberdier",
    releaseDate: "Sep 15, 2017",
    colorType: "Blue",
    weaponType: "Lance",
    moveType: "Infantry",
    rarity5: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Nephenee.png",
      main: "img/heroes-main/Nephenee.png"
    },
    skills: [
      { name: "Iron Lance", rarity: 5 },
      { name: "Steel Lance", rarity: 5 },
      { name: "Slaying Lance", rarity: 5 },
      { name: "Slaying Lance+", rarity: 5 },
      { name: "New Moon", rarity: 5 },
      { name: "Moonbow", rarity: 5 },
      { name: "Speed +1", rarity: 5 },
      { name: "Atk/Spd 1", rarity: 5 },
      { name: "Atk/Spd 2", rarity: 5 },
      { name: "Wrath 1", rarity: 5 },
      { name: "Wrath 2", rarity: 5 },
      { name: "Wrath 3", rarity: 5 }
    ],
    stats: {
      level1: { hp: 18, atk: 7, spd: 9, def: 8, res: 5 },
      level40: { hp: [ 34, 37, 41 ], atk: [ 28, 31, 34 ], spd: [ 32, 35, 38 ], def: [ 31, 34, 37 ], res: [ 17, 20, 23 ] }
    }
  },
  {
    name: "Niles",
    title: "Cruel to Be Kind",
    releaseDate: "Feb 02, 2017",
    colorType: "Neutral",
    weaponType: "Bow",
    moveType: "Infantry",
    rarity3: ["pool1"],
    rarity4: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Niles.png",
      main: "img/heroes-main/Niles.png"
    },
    skills: [
      { name: "Iron Bow", rarity: 3 },
      { name: "Steel Bow", rarity: 3 },
      { name: "Killer Bow", rarity: 4 },
      { name: "Killer Bow+", rarity: 5 },
      { name: "Chilling Wind", rarity: 4 },
      { name: "Iceberg", rarity: 4 },
      { name: "Warding Blow 1", rarity: 3 },
      { name: "Warding Blow 2", rarity: 3 },
      { name: "Warding Blow 3", rarity: 4 },
      { name: "Spur Res 1", rarity: 3 },
      { name: "Spur Res 2", rarity: 4 },
      { name: "Spur Res 3", rarity: 5 }
    ],
    stats: {
      level1: { hp: 18, atk: 6, spd: 8, def: 4, res: 8 },
      level40: { hp: [ 34, 37, 41 ], atk: [ 22, 25, 29 ], spd: [ 31, 34, 37 ], def: [ 13, 17, 20 ], res: [ 31, 34, 37 ] },
      level1_4: { hp: 17, atk: 5, spd: 8, def: 3, res: 8 },
      level40_4: { hp: [ 32, 35, 38 ], atk: [ 20, 23, 26 ], spd: [ 29, 32, 35 ], def: [ 12, 15, 18 ], res: [ 29, 32, 35 ] }
    }
  },
  {
    name: "Ninian",
    title: "Oracle of Destiny",
    releaseDate: "Mar 14, 2017",
    colorType: "Blue",
    weaponType: "Breath",
    moveType: "Infantry",
    rarity5: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Ninian.png",
      main: "img/heroes-main/Ninian.png"
    },
    skills: [
      { name: "Fire Breath", rarity: 5 },
      { name: "Fire Breath+", rarity: 5 },
      { name: "Light Breath", rarity: 5 },
      { name: "Light Breath+", rarity: 5 },
      { name: "Dance", rarity: 5 },
      { name: "Escape Route 1", rarity: 5 },
      { name: "Escape Route 2", rarity: 5 },
      { name: "Escape Route 3", rarity: 5 },
      { name: "Fortify Def 1", rarity: 5 },
      { name: "Fortify Def 2", rarity: 5 },
      { name: "Fortify Dragons", rarity: 5 }
    ],
    stats: {
      level1: { hp: 16, atk: 5, spd: 7, def: 6, res: 5 },
      level40: { hp: [ 39, 42, 45 ], atk: [ 21, 24, 28 ], spd: [ 30, 33, 36 ], def: [ 20, 23, 26 ], res: [ 23, 27, 30 ] }
    }
  },
  {
    name: "Nino",
    title: "Pious Mage",
    releaseDate: "Feb 02, 2017",
    colorType: "Green",
    weaponType: "Tome",
    moveType: "Infantry",
    rarity3: ["pool1"],
    rarity4: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Nino.png",
      main: "img/heroes-main/Nino.png"
    },
    skills: [
      { name: "Wind", rarity: 3 },
      { name: "Elwind", rarity: 3 },
      { name: "Gronnblade", rarity: 4 },
      { name: "Gronnblade+", rarity: 5 },
      { name: "Draw Back", rarity: 4 },
      { name: "Resistance +1", rarity: 3 },
      { name: "Resistance +2", rarity: 3 },
      { name: "Resistance +3", rarity: 4 },
      { name: "Hone Atk 1", rarity: 3 },
      { name: "Hone Atk 2", rarity: 4 },
      { name: "Hone Atk 3", rarity: 5 }
    ],
    stats: {
      level1: { hp: 16, atk: 7, spd: 10, def: 4, res: 7 },
      level40: { hp: [ 30, 33, 36 ], atk: [ 30, 33, 36 ], spd: [ 33, 36, 39 ], def: [ 16, 19, 22 ], res: [ 23, 26, 30 ] },
      level1_4: { hp: 15, atk: 7, spd: 10, def: 3, res: 6 },
      level40_4: { hp: [ 28, 31, 34 ], atk: [ 28, 31, 34 ], spd: [ 31, 34, 37 ], def: [ 14, 17, 20 ], res: [ 21, 24, 27 ] }
    }
  },
  {
    name: "Nowi",
    title: "Eternal Youth",
    releaseDate: "Feb 02, 2017",
    colorType: "Blue",
    weaponType: "Breath",
    moveType: "Infantry",
    rarity4: ["pool1"],
    rarity5: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Nowi.png",
      main: "img/heroes-main/Nowi.png"
    },
    skills: [
      { name: "Fire Breath", rarity: 4 },
      { name: "Fire Breath+", rarity: 4 },
      { name: "Lightning Breath", rarity: 4 },
      { name: "Lightning Breath+", rarity: 5 },
      { name: "Rally Defense", rarity: 4 },
      { name: "Defense +1", rarity: 4 },
      { name: "Defense +2", rarity: 4 },
      { name: "Defense +3", rarity: 5 },
      { name: "Threaten Res 1", rarity: 4 },
      { name: "Threaten Res 2", rarity: 4 },
      { name: "Threaten Res 3", rarity: 4 }
    ],
    stats: {
      level1: { hp: 17, atk: 6, spd: 5, def: 6, res: 5 },
      level40: { hp: [ 42, 45, 48 ], atk: [ 31, 34, 37 ], spd: [ 23, 27, 30 ], def: [ 27, 30, 33 ], res: [ 23, 27, 30 ] },
      level1_4: { hp: 16, atk: 6, spd: 4, def: 6, res: 4 },
      level40_4: { hp: [ 39, 42, 45 ], atk: [ 29, 32, 35 ], spd: [ 21, 24, 27 ], def: [ 25, 28, 31 ], res: [ 21, 24, 27 ] }
    }
  },
  {
    name: "Nowi (Trick or Defeat!)",
    shortName: "Nowi",
    title: "Eternal Witch",
    releaseDate: "Oct 30, 2017",
    colorType: "Red",
    weaponType: "Tome",
    moveType: "Flying",
    rarity5: ["pool1"],
    limited: true,
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Nowi (Trick or Defeat!).png",
      main: "img/heroes-main/Nowi (Trick or Defeat!).png"
    },
    skills: [
      { name: "Flux", rarity: 5 },
      { name: "Ruin", rarity: 5 },
      { name: "Fenrir", rarity: 5 },
      { name: "Grimoire", rarity: 5 },
      { name: "Reposition", rarity: 5 },
      { name: "Atk/Res Bond 1", rarity: 5 },
      { name: "Atk/Res Bond 2", rarity: 5 },
      { name: "Atk/Res Bond 3", rarity: 5 },
      { name: "Live for Bounty", rarity: 5 },
      { name: "Hone Atk 1", rarity: 5 },
      { name: "Hone Atk 2", rarity: 5 },
      { name: "Hone Fliers", rarity: 5 }
    ],
    stats: {
      level1: { hp: 17, atk: 8, spd: 6, def: 5, res: 8 },
      level40: { hp: [ 31, 34, 37 ], atk: [ 31, 34, 37 ], spd: [ 29, 32, 35 ], def: [ 17, 20, 23 ], res: [ 24, 27, 31 ] }
    }
  },
  {
    name: "Oboro",
    title: "Fierce Fighter",
    releaseDate: "Feb 02, 2017",
    colorType: "Blue",
    weaponType: "Lance",
    moveType: "Infantry",
    rarity3: ["pool1"],
    rarity4: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Oboro.png",
      main: "img/heroes-main/Oboro.png"
    },
    skills: [
      { name: "Iron Lance", rarity: 3 },
      { name: "Steel Lance", rarity: 3 },
      { name: "Heavy Spear", rarity: 4 },
      { name: "Heavy Spear+", rarity: 5 },
      { name: "Rally Defense", rarity: 4 },
      { name: "Seal Def 1", rarity: 3 },
      { name: "Seal Def 2", rarity: 3 },
      { name: "Seal Def 3", rarity: 4 },
      { name: "Threaten Res 1", rarity: 3 },
      { name: "Threaten Res 2", rarity: 4 },
      { name: "Threaten Res 3", rarity: 5 }
    ],
    stats: {
      level1: { hp: 18, atk: 8, spd: 7, def: 9, res: 5 },
      level40: { hp: [ 36, 40, 43 ], atk: [ 29, 32, 35 ], spd: [ 23, 26, 30 ], def: [ 32, 35, 38 ], res: [ 21, 24, 28 ] },
      level1_4: { hp: 17, atk: 8, spd: 6, def: 9, res: 4 },
      level40_4: { hp: [ 34, 37, 40 ], atk: [ 27, 30, 33 ], spd: [ 21, 24, 27 ], def: [ 30, 33, 36 ], res: [ 19, 22, 25 ] }
    }
  },
  {
    name: "Odin",
    title: "Potent Force",
    releaseDate: "Feb 02, 2017",
    colorType: "Blue",
    weaponType: "Tome",
    moveType: "Infantry",
    rarity3: ["pool1"],
    rarity4: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Odin.png",
      main: "img/heroes-main/Odin.png"
    },
    skills: [
      { name: "Thunder", rarity: 3 },
      { name: "Elthunder", rarity: 3 },
      { name: "Blárblade", rarity: 4 },
      { name: "Blárblade+", rarity: 5 },
      { name: "New Moon", rarity: 4 },
      { name: "Moonbow", rarity: 4 },
      { name: "Defiant Atk 1", rarity: 3 },
      { name: "Defiant Atk 2", rarity: 4 },
      { name: "Defiant Atk 3", rarity: 5 },
      { name: "R Tomebreaker 1", rarity: 3 },
      { name: "R Tomebreaker 2", rarity: 3 },
      { name: "R Tomebreaker 3", rarity: 4 }
    ],
    stats: {
      level1: { hp: 19, atk: 5, spd: 8, def: 6, res: 6 },
      level40: { hp: [ 40, 43, 46 ], atk: [ 19, 22, 25 ], spd: [ 29, 32, 35 ], def: [ 22, 25, 29 ], res: [ 22, 25, 29 ] },
      level1_4: { hp: 18, atk: 4, spd: 8, def: 6, res: 5 },
      level40_4: { hp: [ 37, 40, 43 ], atk: [ 17, 20, 23 ], spd: [ 27, 30, 33 ], def: [ 21, 24, 27 ], res: [ 20, 23, 26 ] }
    }
  },
  {
    name: "Ogma",
    title: "Loyal Blade",
    releaseDate: "Feb 02, 2017",
    colorType: "Red",
    weaponType: "Sword",
    moveType: "Infantry",
    rarity4: ["pool1"],
    rarity5: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Ogma.png",
      main: "img/heroes-main/Ogma.png"
    },
    skills: [
      { name: "Iron Sword", rarity: 4 },
      { name: "Steel Sword", rarity: 4 },
      { name: "Brave Sword", rarity: 4 },
      { name: "Brave Sword+", rarity: 5 },
      { name: "Daylight", rarity: 4 },
      { name: "Noontime", rarity: 4 },
      { name: "Defiant Atk 1", rarity: 4 },
      { name: "Defiant Atk 2", rarity: 4 },
      { name: "Defiant Atk 3", rarity: 4 },
      { name: "Spur Atk 1", rarity: 4 },
      { name: "Spur Atk 2", rarity: 4 },
      { name: "Spur Atk 3", rarity: 5 }
    ],
    stats: {
      level1: { hp: 21, atk: 7, spd: 10, def: 6, res: 3 },
      level40: { hp: [ 44, 47, 50 ], atk: [ 32, 35, 38 ], spd: [ 31, 34, 37 ], def: [ 24, 28, 31 ], res: [ 10, 13, 17 ] },
      level1_4: { hp: 20, atk: 7, spd: 10, def: 5, res: 2 },
      level40_4: { hp: [ 41, 44, 47 ], atk: [ 30, 33, 36 ], spd: [ 29, 32, 35 ], def: [ 22, 25, 28 ], res: [ 9, 12, 15 ] }
    }
  },
  {
    name: "Oliver",
    title: "Admirer of Beauty",
    releaseDate: "Jan 14, 2018",
    colorType: "Blue",
    weaponType: "Tome",
    moveType: "Infantry",
    rarity3: ["pool1"],
    rarity4: ["pool1"],
    ghb: true,
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Oliver.png",
      main: "img/heroes-main/Oliver.png"
    },
    skills: [
      { name: "Light", rarity: 3 },
      { name: "Ellight", rarity: 3 },
      { name: "Shine", rarity: 3 },
      { name: "Shine+", rarity: 5 },
      { name: "Rising Light", rarity: 3 },
      { name: "Blazing Light", rarity: 4 },
      { name: "Warding Blow 1", rarity: 3 },
      { name: "Mirror Strike 1", rarity: 3 },
      { name: "Mirror Strike 2", rarity: 4 },
      { name: "Atk Ploy 1", rarity: 3 },
      { name: "Atk Ploy 2", rarity: 4 },
      { name: "Atk Ploy 3", rarity: 5 }
    ],
    stats: {
      level1: { hp: 18, atk: 8, spd: 5, def: 6, res: 8 },
      level40: { hp: [ 39, 42, 45 ], atk: [ 29, 32, 35 ], spd: [ 17, 20, 23 ], def: [ 20, 23, 26 ], res: [ 31, 34, 37 ] },
    }
  },
  {
    name: "Olivia",
    title: "Blushing Beauty",
    releaseDate: "Feb 02, 2017",
    colorType: "Red",
    weaponType: "Sword",
    moveType: "Infantry",
    rarity3: ["pool1"],
    rarity4: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Olivia.png",
      main: "img/heroes-main/Olivia.png"
    },
    skills: [
      { name: "Iron Sword", rarity: 1 },
      { name: "Steel Sword", rarity: 3 },
      { name: "Silver Sword", rarity: 4 },
      { name: "Silver Sword+", rarity: 5 },
      { name: "Dance", rarity: 4 },
      { name: "Knock Back", rarity: 3 },
      { name: "Hone Atk 1", rarity: 1 },
      { name: "Hone Atk 2", rarity: 2 },
      { name: "Hone Atk 3", rarity: 4 }
    ],
    stats: {
      level1: { hp: 17, atk: 6, spd: 7, def: 5, res: 4 },
      level40: { hp: [ 33, 36, 40 ], atk: [ 24, 28, 31 ], spd: [ 30, 33, 36 ], def: [ 23, 27, 30 ], res: [ 22, 26, 29 ] },
      level1_4: { hp: 16, atk: 6, spd: 7, def: 4, res: 3 },
      level40_4: { hp: [ 31, 34, 37 ], atk: [ 23, 26, 29 ], spd: [ 28, 31, 34 ], def: [ 21, 24, 27 ], res: [ 20, 23, 26 ] }
    }
  },
  {
    name: "Olivia (Performing Arts)",
    shortName: "Olivia",
    title: "Festival Dancer",
    releaseDate: "Sep 29, 2017",
    colorType: "Neutral",
    weaponType: "Dagger",
    moveType: "Infantry",
    rarity5: ["pool1"],
    limited: true,
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Olivia (Performing Arts).png",
      main: "img/heroes-main/Olivia (Performing Arts).png"
    },
    skills: [
      { name: "Iron Dagger", rarity: 5 },
      { name: "Steel Dagger", rarity: 5 },
      { name: "Dancer's Fan", rarity: 5 },
      { name: "Dancer's Fan+", rarity: 5 },
      { name: "Dance", rarity: 5 },
      { name: "Distant Def 1", rarity: 5 },
      { name: "Distant Def 2", rarity: 5 },
      { name: "Distant Def 3", rarity: 5 },
      { name: "Blaze Dance 1", rarity: 5 },
      { name: "Blaze Dance 2", rarity: 5 },
      { name: "Blaze Dance 3", rarity: 5 }
    ],
    stats: {
      level1: { hp: 15, atk: 6, spd: 8, def: 3, res: 4 },
      level40: { hp: [ 31, 34, 38 ], atk: [ 24, 28, 31 ], spd: [ 31, 34, 37 ], def: [ 12, 16, 19 ], res: [ 25, 28, 31 ] }
    }
  },
  {
    name: "Olwen",
    title: "Blue Mage Knight",
    releaseDate: "Feb 27, 2017",
    colorType: "Blue",
    weaponType: "Tome",
    moveType: "Cavalry",
    rarity5: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Olwen.png",
      main: "img/heroes-main/Olwen.png"
    },
    skills: [
      { name: "Thunder", rarity: 5 },
      { name: "Elthunder", rarity: 5 },
      { name: "Thoron", rarity: 5 },
      { name: "Dire Thunder", rarity: 5 },
      { name: "Reposition", rarity: 5 },
      { name: "Warding Blow 1", rarity: 5 },
      { name: "Warding Blow 2", rarity: 5 },
      { name: "Warding Blow 3", rarity: 5 },
      { name: "Spur Res 1", rarity: 5 },
      { name: "Spur Res 2", rarity: 5 },
      { name: "Ward Cavalry", rarity: 5 }
    ],
    stats: {
      level1: { hp: 17, atk: 7, spd: 8, def: 5, res: 6 },
      level40: { hp: [ 31, 34, 37 ], atk: [ 23, 26, 30 ], spd: [ 31, 34, 37 ], def: [ 17, 20, 23 ], res: [ 27, 30, 33 ] }
    }
  },
  {
    name: "Oscar",
    title: "Agile Horseman",
    releaseDate: "Sep 15, 2017",
    colorType: "Blue",
    weaponType: "Lance",
    moveType: "Cavalry",
    rarity4: ["pool1"],
    rarity5: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Oscar.png",
      main: "img/heroes-main/Oscar.png"
    },
    skills: [
      { name: "Iron Lance", rarity: 4 },
      { name: "Steel Lance", rarity: 4 },
      { name: "Sapphire Lance", rarity: 4 },
      { name: "Sapphire Lance+", rarity: 5 },
      { name: "Rally Speed", rarity: 4 },
      { name: "Rally Spd/Def", rarity: 4 },
      { name: "Lancebreaker 1", rarity: 4 },
      { name: "Lancebreaker 2", rarity: 4 },
      { name: "Lancebreaker 3", rarity: 4 },
      { name: "Spur Def 1", rarity: 4 },
      { name: "Spur Spd/Def 1", rarity: 4 },
      { name: "Spur Spd/Def 2", rarity: 5 }
    ],
    stats: {
      level1: { hp: 18, atk: 7, spd: 8, def: 7, res: 6 },
      level40: { hp: [ 36, 40, 43 ], atk: [ 30, 33, 36 ], spd: [ 31, 34, 37 ], def: [ 23, 26, 30 ], res: [ 18, 21, 24 ] },
      level1_4: { hp: 17, atk: 7, spd: 8, def: 6, res: 5 },
      level40_4: { hp: [ 34, 37, 40 ], atk: [ 28, 31, 34 ], spd: [ 29, 32, 35 ], def: [ 21, 24, 27 ], res: [ 16, 19, 22 ] }
    }
  },
  {
    name: "Palla",
    title: "Eldest Whitewing",
    releaseDate: "Feb 02, 2017",
    colorType: "Red",
    weaponType: "Sword",
    moveType: "Flying",
    rarity3: ["pool1"],
    rarity4: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Palla.png",
      main: "img/heroes-main/Palla.png"
    },
    skills: [
      { name: "Iron Sword", rarity: 3 },
      { name: "Steel Sword", rarity: 3 },
      { name: "Ruby Sword", rarity: 4 },
      { name: "Ruby Sword+", rarity: 5 },
      { name: "New Moon", rarity: 4 },
      { name: "Moonbow", rarity: 4 },
      { name: "Wings of Mercy 1", rarity: 3 },
      { name: "Wings of Mercy 2", rarity: 4 },
      { name: "Wings of Mercy 3", rarity: 5 },
      { name: "Spur Spd 1", rarity: 3 },
      { name: "Spur Spd 2", rarity: 3 },
      { name: "Goad Fliers", rarity: 4 }
    ],
    stats: {
      level1: { hp: 18, atk: 7, spd: 9, def: 6, res: 7 },
      level40: { hp: [ 39, 42, 45 ], atk: [ 28, 31, 34 ], spd: [ 27, 31, 34 ], def: [ 24, 28, 31 ], res: [ 23, 26, 30 ] },
      level1_4: { hp: 17, atk: 7, spd: 9, def: 5, res: 6 },
      level40_4: { hp: [ 36, 39, 42 ], atk: [ 26, 29, 32 ], spd: [ 26, 29, 32 ], def: [ 22, 25, 28 ], res: [ 21, 24, 27 ] }
    }
  },
  {
    name: "Peri",
    title: "Playful Slayer",
    releaseDate: "Feb 02, 2017",
    colorType: "Blue",
    weaponType: "Lance",
    moveType: "Cavalry",
    rarity4: ["pool1"],
    rarity5: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Peri.png",
      main: "img/heroes-main/Peri.png"
    },
    skills: [
      { name: "Iron Lance", rarity: 4 },
      { name: "Steel Lance", rarity: 4 },
      { name: "Killer Lance", rarity: 4 },
      { name: "Killer Lance+", rarity: 5 },
      { name: "Night Sky", rarity: 4 },
      { name: "Glimmer", rarity: 4 },
      { name: "Resistance +1", rarity: 4 },
      { name: "Resistance +2", rarity: 4 },
      { name: "Resistance +3", rarity: 5 },
      { name: "Threaten Def 1", rarity: 4 },
      { name: "Threaten Def 2", rarity: 4 },
      { name: "Threaten Def 3", rarity: 4 }
    ],
    stats: {
      level1: { hp: 16, atk: 9, spd: 9, def: 6, res: 6 },
      level40: { hp: [ 32, 35, 39 ], atk: [ 30, 33, 36 ], spd: [ 30, 33, 36 ], def: [ 20, 23, 26 ], res: [ 27, 30, 33 ] },
      level1_4: { hp: 15, atk: 9, spd: 9, def: 5, res: 5 },
      level40_4: { hp: [ 30, 33, 36 ], atk: [ 28, 31, 34 ], spd: [ 28, 31, 34 ], def: [ 18, 21, 24 ], res: [ 24, 27, 30 ] }
    }
  },
  {
    name: "Priscilla",
    title: "Delicate Princess",
    releaseDate: "Mar 14, 2017",
    colorType: "Neutral",
    weaponType: "Staff",
    moveType: "Cavalry",
    rarity4: ["pool1"],
    rarity5: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Priscilla.png",
      main: "img/heroes-main/Priscilla.png"
    },
    skills: [
      { name: "Assault", rarity: 4 },
      { name: "Panic", rarity: 4 },
      { name: "Panic+", rarity: 5 },
      { name: "Heal", rarity: 4 },
      { name: "Reconcile", rarity: 4 },
      { name: "Rehabilitate", rarity: 5 },
      { name: "Imbue", rarity: 4 },
      { name: "Still-Water Balm", rarity: 5 },
      { name: "Spur Def 1", rarity: 4 },
      { name: "Spur Def 2", rarity: 4 },
      { name: "Spur Def 3", rarity: 5 }
    ],
    stats: {
      level1: { hp: 17, atk: 7, spd: 7, def: 4, res: 8 },
      level40: { hp: [ 33, 36, 40 ], atk: [ 25, 29, 32 ], spd: [ 25, 29, 32 ], def: [ 16, 19, 22 ], res: [ 29, 32, 35 ] },
      level1_4: { hp: 16, atk: 7, spd: 6, def: 3, res: 8 },
      level40_4: { hp: [ 31, 34, 37 ], atk: [ 24, 27, 30 ], spd: [ 23, 26, 29 ], def: [ 14, 17, 20 ], res: [ 27, 30, 33 ] }
    }
  },
  {
    name: "Raigh",
    title: "Dark Child",
    releaseDate: "Feb 02, 2017",
    colorType: "Red",
    weaponType: "Tome",
    moveType: "Infantry",
    rarity3: ["pool1"],
    rarity4: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Raigh.png",
      main: "img/heroes-main/Raigh.png"
    },
    skills: [
      { name: "Flux", rarity: 2 },
      { name: "Ruin", rarity: 3 },
      { name: "Rauðrwolf", rarity: 4 },
      { name: "Rauðrwolf+", rarity: 5 },
      { name: "Rally Attack", rarity: 4 },
      { name: "HP +3", rarity: 3 },
      { name: "HP +4", rarity: 4 },
      { name: "HP +5", rarity: 5 },
      { name: "Seal Res 1", rarity: 3 },
      { name: "Seal Res 2", rarity: 2 },
      { name: "Seal Res 3", rarity: 4 }
    ],
    stats: {
      level1: { hp: 17, atk: 8, spd: 7, def: 5, res: 7 },
      level40: { hp: [ 33, 36, 40 ], atk: [ 29, 32, 35 ], spd: [ 25, 29, 32 ], def: [ 19, 22, 25 ], res: [ 25, 29, 32 ] },
      level1_4: { hp: 16, atk: 8, spd: 7, def: 4, res: 6 },
      level40_4: { hp: [ 31, 34, 37 ], atk: [ 27, 30, 33 ], spd: [ 24, 27, 30 ], def: [ 17, 20, 23 ], res: [ 23, 26, 29 ] }
    }
  },
  {
    name: "Raven",
    title: "Peerless Fighter",
    releaseDate: "Feb 02, 2017",
    colorType: "Green",
    weaponType: "Axe",
    moveType: "Infantry",
    rarity4: ["pool1"],
    rarity5: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Raven.png",
      main: "img/heroes-main/Raven.png"
    },
    skills: [
      { name: "Iron Axe", rarity: 4 },
      { name: "Steel Axe", rarity: 4 },
      { name: "Brave Axe", rarity: 4 },
      { name: "Brave Axe+", rarity: 5 },
      { name: "Basilikos", rarity: 5 },
      { name: "Daylight", rarity: 4 },
      { name: "Sol", rarity: 4 },
      { name: "Defiant Spd 1", rarity: 4 },
      { name: "Defiant Spd 2", rarity: 4 },
      { name: "Defiant Spd 3", rarity: 4 },
      { name: "Threaten Def 1", rarity: 4 },
      { name: "Threaten Def 2", rarity: 4 },
      { name: "Threaten Def 3", rarity: 5 }
    ],
    stats: {
      level1: { hp: 19, atk: 8, spd: 9, def: 6, res: 5 },
      level40: { hp: [ 37, 41, 44 ], atk: [ 31, 34, 37 ], spd: [ 32, 35, 38 ], def: [ 22, 25, 29 ], res: [ 19, 22, 25 ] },
      level1_4: { hp: 18, atk: 8, spd: 9, def: 5, res: 4 },
      level40_4: { hp: [ 35, 38, 41 ], atk: [ 29, 32, 35 ], spd: [ 30, 33, 36 ], def: [ 20, 23, 26 ], res: [ 17, 20, 23 ] }
    }
  },
  {
    name: "Rebecca",
    title: "Wildflower",
    releaseDate: "Mar 14, 2017",
    colorType: "Neutral",
    weaponType: "Bow",
    moveType: "Infantry",
    rarity4: ["pool1"],
    rarity5: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Rebecca.png",
      main: "img/heroes-main/Rebecca.png"
    },
    skills: [
      { name: "Iron Bow", rarity: 4 },
      { name: "Steel Bow", rarity: 4 },
      { name: "Silver Bow", rarity: 4 },
      { name: "Silver Bow+", rarity: 5 },
      { name: "Ardent Sacrifice", rarity: 4 },
      { name: "Darting Blow 1", rarity: 4 },
      { name: "Darting Blow 2", rarity: 4 },
      { name: "Darting Blow 3", rarity: 4 },
      { name: "Seal Atk 1", rarity: 4 },
      { name: "Seal Atk 2", rarity: 4 },
      { name: "Seal Atk 3", rarity: 5 }
    ],
    stats: {
      level1: { hp: 18, atk: 7, spd: 8, def: 6, res: 5 },
      level40: { hp: [ 34, 37, 41 ], atk: [ 25, 29, 32 ], spd: [ 31, 34, 37 ], def: [ 18, 21, 24 ], res: [ 23, 27, 30 ] },
      level1_4: { hp: 17, atk: 7, spd: 8, def: 5, res: 4 },
      level40_4: { hp: [ 32, 35, 38 ], atk: [ 24, 27, 30 ], spd: [ 29, 32, 35 ], def: [ 16, 19, 22 ], res: [ 21, 24, 27 ] }
    }
  },
  {
    name: "Reinhardt",
    title: "Thunder's Fist",
    releaseDate: "Feb 27, 2017",
    colorType: "Blue",
    weaponType: "Tome",
    moveType: "Cavalry",
    rarity4: ["pool1"],
    rarity5: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Reinhardt.png",
      main: "img/heroes-main/Reinhardt.png"
    },
    skills: [
      { name: "Thunder", rarity: 4 },
      { name: "Elthunder", rarity: 4 },
      { name: "Thoron", rarity: 4 },
      { name: "Dire Thunder", rarity: 5 },
      { name: "Rising Thunder", rarity: 4 },
      { name: "Blazing Thunder", rarity: 4 },
      { name: "Vantage 1", rarity: 4 },
      { name: "Vantage 2", rarity: 4 },
      { name: "Vantage 3", rarity: 4 },
      { name: "Spur Atk 1", rarity: 4 },
      { name: "Spur Atk 2", rarity: 4 },
      { name: "Goad Cavalry", rarity: 5 }
    ],
    stats: {
      level1: { hp: 16, atk: 8, spd: 6, def: 5, res: 8 },
      level40: { hp: [ 34, 38, 41 ], atk: [ 29, 32, 35 ], spd: [ 20, 23, 26 ], def: [ 23, 27, 30 ], res: [ 22, 25, 28 ] },
      level1_4: { hp: 15, atk: 8, spd: 5, def: 4, res: 8 },
      level40_4: { hp: [ 32, 35, 38 ], atk: [ 27, 30, 33 ], spd: [ 18, 21, 24 ], def: [ 21, 24, 27 ], res: [ 21, 24, 27 ] }
    }
  },
  {
    name: "Rhajat",
    title: "Black Magician",
    releaseDate: "Dec 02, 2017",
    colorType: "Green",
    weaponType: "Tome",
    moveType: "Infantry",
    rarity5: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Rhajat.png",
      main: "img/heroes-main/Rhajat.png"
    },
    skills: [
      { name: "Wind", rarity: 5 },
      { name: "Elwind", rarity: 5 },
      { name: "Keen Gronnwolf", rarity: 5 },
      { name: "Keen Gronnwolf+", rarity: 5 },
      { name: "Rally Defense", rarity: 5 },
      { name: "Rally Atk/Def", rarity: 5 },
      { name: "Distant Def 1", rarity: 5 },
      { name: "Distant Def 2", rarity: 4 },
      { name: "Distant Def 3", rarity: 5 },
      { name: "Savage Blow 1", rarity: 5 },
      { name: "Savage Blow 2", rarity: 5 },
      { name: "Savage Blow 3", rarity: 4 }
    ],
    stats: {
      level1: { hp: 17, atk: 9, spd: 8, def: 4, res: 7 },
      level40: { hp: [ 33, 36, 40 ], atk: [ 32, 35, 38 ], spd: [ 31, 34, 37 ], def: [ 18, 21, 24 ], res: [ 21, 24, 27 ] }
    }
  },
  {
    name: "Robin (F)",
    shortName: "Robin",
    title: "Mystery Tactician",
    releaseDate: "Feb 23, 2017",
    colorType: "Green",
    weaponType: "Tome",
    moveType: "Infantry",
    rarity3: ["pool1"],
    rarity4: ["pool1"],
    ghb: true,
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Robin (F).png",
      main: "img/heroes-main/Robin (F).png"
    },
    skills: [
      { name: "Wind", rarity: 2 },
      { name: "Elwind", rarity: 3 },
      { name: "Gronnwolf", rarity: 3 },
      { name: "Gronnwolf+", rarity: 5 },
      { name: "Glowing Ember", rarity: 3 },
      { name: "Ignis", rarity: 4 },
      { name: "Defiant Res 1", rarity: 3 },
      { name: "Defiant Res 2", rarity: 4 },
      { name: "Defiant Res 3", rarity: 5 },
      { name: "B Tomebreaker 1", rarity: 3 },
      { name: "B Tomebreaker 2", rarity: 2 },
      { name: "B Tomebreaker 3", rarity: 4 }
    ],
    stats: {
      level1: { hp: 18, atk: 7, spd: 7, def: 7, res: 5 },
      level40: { hp: [ 36, 40, 43 ], atk: [ 25, 29, 32 ], spd: [ 25, 29, 32 ], def: [ 25, 29, 32 ], res: [ 19, 22, 25 ] },
      level1_4: { hp: 17, atk: 7, spd: 7, def: 6, res: 4 },
      level40_4: { hp: [ 34, 37, 40 ], atk: [ 24, 27, 30 ], spd: [ 24, 27, 30 ], def: [ 23, 26, 29 ], res: [ 17, 20, 23 ] }
    }
  },
  {
    name: "Robin (F) (Ylissean Summer)",
    shortName: "Robin",
    title: "Seaside Tactician",
    releaseDate: "Jun 30, 2017",
    colorType: "Blue",
    weaponType: "Lance",
    moveType: "Infantry",
    rarity5: ["pool1"],
    limited: true,
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Robin (F) (Ylissean Summer).png",
      main: "img/heroes-main/Robin (F) (Ylissean Summer).png"
    },
    skills: [
      { name: "Iron Lance", rarity: 5 },
      { name: "Steel Lance", rarity: 5 },
      { name: "Deft Harpoon", rarity: 5 },
      { name: "Deft Harpoon+", rarity: 5 },
      { name: "Reposition", rarity: 5 },
      { name: "Defense +1", rarity: 5 },
      { name: "HP/Def 1", rarity: 5 },
      { name: "HP/Def 2", rarity: 5 },
      { name: "Lance Valor 1", rarity: 5 },
      { name: "Lance Valor 2", rarity: 5 },
      { name: "Lance Valor 3", rarity: 5 }
    ],
    stats: {
      level1: { hp: 18, atk: 8, spd: 8, def: 6, res: 7 },
      level40: { hp: [ 32, 35, 38 ], atk: [ 29, 32, 35 ], spd: [ 31, 34, 37 ], def: [ 24, 28, 31 ], res: [ 25, 29, 32 ] }
    }
  },
  {
    name: "Robin (M)",
    shortName: "Robin",
    title: "High Deliverer",
    releaseDate: "Feb 02, 2017",
    colorType: "Blue",
    weaponType: "Tome",
    moveType: "Infantry",
    rarity3: ["pool1"],
    rarity4: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Robin (M).png",
      main: "img/heroes-main/Robin (M).png"
    },
    skills: [
      { name: "Thunder", rarity: 3 },
      { name: "Elthunder", rarity: 3 },
      { name: "Blárraven", rarity: 4 },
      { name: "Blárraven+", rarity: 5 },
      { name: "Glowing Ember", rarity: 4 },
      { name: "Bonfire", rarity: 4 },
      { name: "Defiant Spd 1", rarity: 3 },
      { name: "Defiant Spd 2", rarity: 4 },
      { name: "Defiant Spd 3", rarity: 5 },
      { name: "Spur Def 1", rarity: 3 },
      { name: "Spur Def 2", rarity: 3 },
      { name: "Spur Def 3", rarity: 4 }
    ],
    stats: {
      level1: { hp: 18, atk: 7, spd: 7, def: 7, res: 5 },
      level40: { hp: [ 36, 40, 43 ], atk: [ 25, 29, 32 ], spd: [ 25, 29, 32 ], def: [ 25, 29, 32 ], res: [ 19, 22, 25 ] },
      level1_4: { hp: 17, atk: 7, spd: 7, def: 6, res: 4 },
      level40_4: { hp: [ 34, 37, 40 ], atk: [ 24, 27, 30 ], spd: [ 24, 27, 30 ], def: [ 23, 26, 29 ], res: [ 17, 20, 23 ] }
    }
  },
  {
    name: "Robin (M) (Fallen Heroes)",
    shortName: "Robin",
    title: "Fell Reincarnation",
    releaseDate: "Feb 22, 2018",
    colorType: "Green",
    weaponType: "Breath",
    moveType: "Armored",
    rarity5: ["pool1"],
    limited: true,
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Robin (M) (Fallen Heroes).png",
      main: "img/heroes-main/Robin (M) (Fallen Heroes).png"
    },
    skills: [
      { name: "Fire Breath", rarity: 5 },
      { name: "Fire Breath+", rarity: 5 },
      { name: "Flametongue", rarity: 5 },
      { name: "Expiration", rarity: 5},
      { name: "Glowing Ember", rarity: 5 },
      { name: "Ignis", rarity: 5 },
      { name: "Vengeful Fighter 1", rarity: 5 },
      { name: "Vengeful Fighter 2", rarity: 5 },
      { name: "Vengeful Fighter 3", rarity: 5 },
      { name: "Spur Def 1", rarity: 5 },
      { name: "Spur Def 2", rarity: 5 },
      { name: "Ward Dragons", rarity: 5 },
    ],
    stats: {
      level1: { hp: 24, atk: 10, spd: 7, def: 9, res: 5 },
      level40: { hp: [ 45, 48, 51 ], atk: [ 37, 40, 44 ], spd: [ 21, 24, 27 ], def: [ 32, 35, 38 ], res: [ 23, 27, 30 ] }
    }
  },
  {
    name: "Robin (M) (Winter's Envoy)",
    shortName: "Robin",
    title: "Festive Tactician",
    releaseDate: "Dec 18, 2017",
    colorType: "Blue",
    weaponType: "Lance",
    moveType: "Armored",
    rarity5: ["pool1"],
    limited: true,
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Robin (Winter's Envoy).png",
      main: "img/heroes-main/Robin (M) (Winter's Envoy).png"
    },
    skills: [
      { name: "Iron Lance", rarity: 5 },
      { name: "Steel Lance", rarity: 5 },
      { name: "Tannenboom!", rarity: 5 },
      { name: "Tannenboom!+", rarity: 5 },
      { name: "Reciprocal Aid", rarity: 5 },
      { name: "Brazen Atk/Spd 1", rarity: 5 },
      { name: "Brazen Atk/Spd 2", rarity: 5 },
      { name: "Brazen Atk/Spd 3", rarity: 5 },
      { name: "Armor March 1", rarity: 5 },
      { name: "Armor March 2", rarity: 5 },
      { name: "Armor March 3", rarity: 5 }
    ],
    stats: {
      level1: { hp: 23, atk: 9, spd: 8, def: 9, res: 6 },
      level40: { hp: [ 41, 45, 48 ], atk: [ 32, 35, 38 ], spd: [ 31, 34, 37 ],
      def: [ 32, 35, 38 ], res: [ 22, 25, 29 ] }
    }
  },
  {
    name: "Roderick",
    title: "Steady Squire",
    releaseDate: "Jun 14, 2017",
    colorType: "Blue",
    weaponType: "Lance",
    moveType: "Cavalry",
    rarity4: ["pool1"],
    rarity5: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Roderick.png",
      main: "img/heroes-main/Roderick.png"
    },
    skills: [
      { name: "Iron Lance", rarity: 4 },
      { name: "Steel Lance", rarity: 4 },
      { name: "Firesweep Lance", rarity: 4 },
      { name: "Firesweep Lance+", rarity: 5 },
      { name: "Rally Defense", rarity: 4 },
      { name: "Rally Def/Res", rarity: 4 },
      { name: "Drag Back", rarity: 4 },
      { name: "Spur Def 1", rarity: 4 },
      { name: "Drive Def 1", rarity: 4 },
      { name: "Drive Def 2", rarity: 5 }
    ],
    stats: {
      level1: { hp: 18, atk: 7, spd: 8, def: 6, res: 7 },
      level40: { hp: [ 36, 40, 43 ], atk: [ 28, 31, 34 ], spd: [ 31, 34, 37 ], def: [ 22, 25, 29 ], res: [ 21, 24, 27 ] },
      level1_4: { hp: 17, atk: 7, spd: 8, def: 5, res: 6 },
      level40_4: { hp: [ 34, 37, 40 ], atk: [ 26, 29, 32 ], spd: [ 29, 32, 35 ], def: [ 20, 23, 26 ], res: [ 19, 22, 25 ] }
    }
  },
  {
    name: "Roy",
    title: "Young Lion",
    releaseDate: "Feb 02, 2017",
    colorType: "Red",
    weaponType: "Sword",
    moveType: "Infantry",
    rarity4: ["pool1"],
    rarity5: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Roy.png",
      main: "img/heroes-main/Roy.png"
    },
    skills: [
      { name: "Iron Sword", rarity: 4 },
      { name: "Steel Sword", rarity: 4 },
      { name: "Silver Sword", rarity: 4 },
      { name: "Binding Blade", rarity: 5 },
      { name: "Shove", rarity: 4 },
      { name: "Triangle Adept 1", rarity: 4 },
      { name: "Triangle Adept 2", rarity: 4 },
      { name: "Triangle Adept 3", rarity: 4 },
      { name: "Seal Def 1", rarity: 4 },
      { name: "Seal Def 2", rarity: 4 },
      { name: "Seal Def 3", rarity: 5 }
    ],
    stats: {
      level1: { hp: 20, atk: 8, spd: 9, def: 6, res: 4 },
      level40: { hp: [ 41, 44, 47 ], atk: [ 26, 30, 33 ], spd: [ 27, 31, 34 ], def: [ 22, 25, 29 ], res: [ 25, 28, 31 ] },
      level1_4: { hp: 19, atk: 8, spd: 9, def: 5, res: 3 },
      level40_4: { hp: [ 38, 41, 44 ], atk: [ 25, 28, 31 ], spd: [ 26, 29, 32 ], def: [ 20, 23, 26 ], res: [ 22, 25, 28 ] }
    }
  },
  {
    name: "Roy (Brave Heroes)",
    shortName: "Roy",
    title: "Brave Lion",
    releaseDate: "Aug 31, 2017",
    colorType: "Red",
    weaponType: "Sword",
    moveType: "Cavalry",
    rarity5: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Roy (Brave Heroes).png",
      main: "img/heroes-main/Roy (Brave Heroes).png"
    },
    skills: [
      { name: "Iron Sword", rarity: 5 },
      { name: "Steel Sword", rarity: 5 },
      { name: "Silver Sword", rarity: 5 },
      { name: "Blazing Durandal", rarity: 5 },
      { name: "Night Sky", rarity: 5 },
      { name: "Astra", rarity: 5 },
      { name: "Galeforce", rarity: 5 },
      { name: "Darting Blow 1", rarity: 5 },
      { name: "Steady Blow 1", rarity: 5 },
      { name: "Steady Blow 2", rarity: 5 },
      { name: "Desperation 1", rarity: 5 },
      { name: "Desperation 2", rarity: 5 },
      { name: "Desperation 3", rarity: 5 }
    ],
    stats: {
      level1: { hp: 16, atk: 8, spd: 8, def: 7, res: 7 },
      level40: { hp: [ 34, 38, 41 ], atk: [ 29, 32, 35 ], spd: [ 31, 34, 37 ], def: [ 23, 26, 30 ], res: [ 21, 24, 27 ] }
    }
  },
  {
    name: "Roy (Love Abounds)",
    shortName: "Roy",
    title: "Youthful Gifts",
    releaseDate: "Feb 09, 2018",
    colorType: "Neutral",
    weaponType: "Bow",
    moveType: "Cavalry",
    rarity5: ["pool1"],
    limited: true,
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Roy (Love Abounds).png",
      main: "img/heroes-main/Roy (Love Abounds).png"
    },
    skills: [
      { name: "Iron Bow", rarity: 5 },
      { name: "Steel Bow", rarity: 5 },
      { name: "Gratia", rarity: 5 },
      { name: "Gratia+", rarity: 5 },
      { name: "Reciprocal Aid", rarity: 5 },
      { name: "Death Blow 1", rarity: 5 },
      { name: "Death Blow 2", rarity: 5 },
      { name: "Death Blow 3", rarity: 5 },
      { name: "Bow Valor 1", rarity: 5 },
      { name: "Bow Valor 2", rarity: 5 },
      { name: "Bow Valor 3", rarity: 5 }
    ],
    stats: {
      level1: { hp: 17, atk: 9, spd: 6, def: 5, res: 6 },
      level40: { hp: [ 31, 34, 37 ], atk: [ 32, 35, 38 ], spd: [ 15, 19, 22 ], def: [ 23, 27, 30 ], res: [ 27, 30, 33 ] },
    }
  },
  {
    name: "Ryoma",
    title: "Peerless Samurai",
    releaseDate: "Feb 02, 2017",
    colorType: "Red",
    weaponType: "Sword",
    moveType: "Infantry",
    rarity5: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Ryoma.png",
      main: "img/heroes-main/Ryoma.png"
    },
    skills: [
      { name: "Iron Sword", rarity: 5 },
      { name: "Steel Sword", rarity: 5 },
      { name: "Silver Sword", rarity: 5 },
      { name: "Raijinto", rarity: 5 },
      { name: "Night Sky", rarity: 5 },
      { name: "Astra", rarity: 5 },
      { name: "Defiant Atk 1", rarity: 5 },
      { name: "Defiant Atk 2", rarity: 5 },
      { name: "Defiant Atk 3", rarity: 5 },
      { name: "Hone Spd 1", rarity: 5 },
      { name: "Hone Spd 2", rarity: 5 },
      { name: "Hone Spd 3", rarity: 5 }
    ],
    stats: {
      level1: { hp: 19, atk: 8, spd: 11, def: 5, res: 4 },
      level40: { hp: [ 37, 41, 44 ], atk: [ 31, 34, 37 ], spd: [ 32, 35, 38 ], def: [ 23, 27, 30 ], res: [ 18, 21, 24 ] }
    }
  },
  {
    name: "Saber",
    title: "Driven Mercenary",
    releaseDate: "Jul 13, 2017",
    colorType: "Red",
    weaponType: "Sword",
    moveType: "Infantry",
    rarity5: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Saber.png",
      main: "img/heroes-main/Saber.png"
    },
    skills: [
      { name: "Iron Sword", rarity: 5 },
      { name: "Steel Sword", rarity: 5 },
      { name: "Slaying Edge", rarity: 5 },
      { name: "Slaying Edge+", rarity: 5 },
      { name: "Holy Vestments", rarity: 5 },
      { name: "Aegis", rarity: 5 },
      { name: "HP +3", rarity: 5 },
      { name: "HP/Spd 1", rarity: 5 },
      { name: "HP/Spd 2", rarity: 5 },
      { name: "Shield Pulse 1", rarity: 5 },
      { name: "Shield Pulse 2", rarity: 5 },
      { name: "Shield Pulse 3", rarity: 5 }
    ],
    stats: {
      level1: { hp: 18, atk: 7, spd: 9, def: 8, res: 5 },
      level40: { hp: [ 36, 40, 43 ], atk: [ 28, 31, 34 ], spd: [ 30, 33, 36 ], def: [ 29, 32, 35 ], res: [ 19, 22, 25 ] }
    }
  },
  {
    name: "Saizo",
    title: "Angry Ninja",
    releaseDate: "Feb 02, 2017",
    colorType: "Neutral",
    weaponType: "Dagger",
    moveType: "Infantry",
    rarity3: ["pool1"],
    rarity4: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Saizo.png",
      main: "img/heroes-main/Saizo.png"
    },
    skills: [
      { name: "Iron Dagger", rarity: 3 },
      { name: "Steel Dagger", rarity: 3 },
      { name: "Smoke Dagger", rarity: 4 },
      { name: "Smoke Dagger+", rarity: 5 },
      { name: "Harsh Command", rarity: 4 },
      { name: "Poison Strike 1", rarity: 3 },
      { name: "Poison Strike 2", rarity: 3 },
      { name: "Poison Strike 3", rarity: 4 },
      { name: "Spur Spd 1", rarity: 3 },
      { name: "Spur Spd 2", rarity: 4 },
      { name: "Spur Spd 3", rarity: 5 }
    ],
    stats: {
      level1: { hp: 17, atk: 7, spd: 8, def: 9, res: 3 },
      level40: { hp: [ 33, 36, 40 ], atk: [ 25, 29, 32 ], spd: [ 31, 34, 37 ], def: [ 30, 33, 36 ], res: [ 12, 16, 19 ] },
      level1_4: { hp: 16, atk: 6, spd: 8, def: 9, res: 2 },
      level40_4: { hp: [ 31, 34, 37 ], atk: [ 23, 26, 29 ], spd: [ 29, 32, 35 ], def: [ 28, 31, 34 ], res: [ 11, 14, 17 ] }
    }
  },
  {
    name: "Sakura",
    title: "Loving Priestess",
    releaseDate: "Feb 02, 2017",
    colorType: "Neutral",
    weaponType: "Staff",
    moveType: "Infantry",
    rarity4: ["pool1"],
    rarity5: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Sakura.png",
      main: "img/heroes-main/Sakura.png"
    },
    skills: [
      { name: "Assault", rarity: 4 },
      { name: "Fear", rarity: 4 },
      { name: "Fear+", rarity: 5 },
      { name: "Heal", rarity: 4 },
      { name: "Mend", rarity: 4 },
      { name: "Physic", rarity: 5 },
      { name: "Imbue", rarity: 4 },
      { name: "Still-Water Balm", rarity: 5 },
      { name: "Fortify Def 1", rarity: 4 },
      { name: "Fortify Def 2", rarity: 4 },
      { name: "Fortify Def 3", rarity: 5 }
    ],
    stats: {
      level1: { hp: 17, atk: 6, spd: 8, def: 5, res: 8 },
      level40: { hp: [ 33, 36, 40 ], atk: [ 24, 28, 31 ], spd: [ 26, 30, 33 ], def: [ 21, 24, 28 ], res: [ 26, 30, 33 ] },
      level1_4: { hp: 16, atk: 5, spd: 8, def: 4, res: 8 },
      level40_4: { hp: [ 31, 34, 37 ], atk: [ 22, 25, 28 ], spd: [ 25, 28, 31 ], def: [ 19, 22, 25 ], res: [ 25, 28, 31 ] }
    }
  },
  {
    name: "Sakura (Trick or Defeat!)",
    shortName: "Sakura",
    title: "Gentle Nekomata",
    releaseDate: "Oct 30, 2017",
    colorType: "Neutral",
    weaponType: "Dagger",
    moveType: "Infantry",
    rarity5: ["pool1"],
    limited: true,
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Sakura (Trick or Defeat!).png",
      main: "img/heroes-main/Sakura (Trick or Defeat!).png"
    },
    skills: [
      { name: "Iron Dagger", rarity: 5 },
      { name: "Steel Dagger", rarity: 5 },
      { name: "Kitty Paddle", rarity: 5 },
      { name: "Kitty Paddle+", rarity: 5 },
      { name: "Chilling Wind", rarity: 5 },
      { name: "Glacies", rarity: 5 },
      { name: "Warding Stance 1", rarity: 5 },
      { name: "Warding Stance 2", rarity: 5 },
      { name: "Warding Stance 3", rarity: 5 },
      { name: "Guard 1", rarity: 5 },
      { name: "Guard 2", rarity: 5 },
      { name: "Guard 3", rarity: 5 },
      { name: "Dagger Valor 1", rarity: 5 },
      { name: "Dagger Valor 2", rarity: 5 },
      { name: "Dagger Valor 3", rarity: 5 }
    ],
    stats: {
      level1: { hp: 16, atk: 8, spd: 8, def: 4, res: 8 },
      level40: { hp: [ 30, 33, 36 ], atk: [ 29, 32, 35 ], spd: [ 31, 34, 37 ], def: [ 11, 14, 18 ], res: [ 31, 34, 37 ] }
    }
  },
  {
    name: "Sanaki",
    title: "Begnion's Apostle",
    releaseDate: "Feb 27, 2017",
    colorType: "Red",
    weaponType: "Tome",
    moveType: "Infantry",
    rarity5: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Sanaki.png",
      main: "img/heroes-main/Sanaki.png"
    },
    skills: [
      { name: "Fire", rarity: 5 },
      { name: "Elfire", rarity: 5 },
      { name: "Bolganone", rarity: 5 },
      { name: "Cymbeline", rarity: 5 },
      { name: "Harsh Command", rarity: 5 },
      { name: "Triangle Adept 1", rarity: 5 },
      { name: "Triangle Adept 2", rarity: 5 },
      { name: "Triangle Adept 3", rarity: 5 },
      { name: "Hone Atk 1", rarity: 5 },
      { name: "Hone Atk 2", rarity: 5 },
      { name: "Hone Atk 3", rarity: 5 }
    ],
    stats: {
      level1: { hp: 16, atk: 9, spd: 7, def: 4, res: 8 },
      level40: { hp: [ 30, 33, 36 ], atk: [ 34, 37, 40 ], spd: [ 23, 26, 30 ], def: [ 13, 17, 20 ], res: [ 31, 34, 37 ] }
    }
  },
  {
    name: "Selena",
    title: "Cutting Wit",
    releaseDate: "Feb 02, 2017",
    colorType: "Red",
    weaponType: "Sword",
    moveType: "Infantry",
    rarity3: ["pool1"],
    rarity4: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Selena.png",
      main: "img/heroes-main/Selena.png"
    },
    skills: [
      { name: "Iron Sword", rarity: 3 },
      { name: "Steel Sword", rarity: 3 },
      { name: "Armorslayer", rarity: 4 },
      { name: "Armorslayer+", rarity: 5 },
      { name: "Reposition", rarity: 3 },
      { name: "Triangle Adept 1", rarity: 3 },
      { name: "Triangle Adept 2", rarity: 4 },
      { name: "Triangle Adept 3", rarity: 5 },
      { name: "Threaten Spd 1", rarity: 3 },
      { name: "Threaten Spd 2", rarity: 3 },
      { name: "Threaten Spd 3", rarity: 4 }
    ],
    stats: {
      level1: { hp: 18, atk: 6, spd: 9, def: 8, res: 6 },
      level40: { hp: [ 34, 37, 41 ], atk: [ 22, 25, 29 ], spd: [ 32, 35, 38 ], def: [ 29, 32, 35 ], res: [ 24, 28, 31 ] },
      level1_4: { hp: 17, atk: 5, spd: 9, def: 8, res: 5 },
      level40_4: { hp: [ 32, 35, 38 ], atk: [ 20, 23, 26 ], spd: [ 30, 33, 36 ], def: [ 27, 30, 33 ], res: [ 22, 25, 28 ] }
    }
  },
  {
    name: "Seliph",
    title: "Heir of Light",
    releaseDate: "Feb 15, 2017",
    colorType: "Red",
    weaponType: "Sword",
    moveType: "Infantry",
    rarity4: ["pool1"],
    rarity5: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Seliph.png",
      main: "img/heroes-main/Seliph.png"
    },
    skills: [
      { name: "Iron Sword", rarity: 4 },
      { name: "Steel Sword", rarity: 4 },
      { name: "Silver Sword", rarity: 4 },
      { name: "Tyrfing", rarity: 5 },
      { name: "Rally Speed", rarity: 4 },
      { name: "HP +3", rarity: 4 },
      { name: "HP +4", rarity: 4 },
      { name: "HP +5", rarity: 4 },
      { name: "Brash Assault 1", rarity: 4 },
      { name: "Brash Assault 2", rarity: 4 },
      { name: "Brash Assault 3", rarity: 5 }
    ],
    stats: {
      level1: { hp: 19, atk: 8, spd: 7, def: 8, res: 5 },
      level40: { hp: [ 44, 47, 50 ], atk: [ 31, 34, 37 ], spd: [ 21, 24, 27 ], def: [ 26, 30, 33 ], res: [ 19, 22, 25 ] },
      level1_4: { hp: 18, atk: 8, spd: 6, def: 8, res: 4 },
      level40_4: { hp: [ 41, 44, 47 ], atk: [ 29, 32, 35 ], spd: [ 19, 22, 25 ], def: [ 25, 28, 31 ], res: [ 17, 20, 23 ] }
    }
  },
  {
    name: "Serra",
    title: "Outspoken Cleric",
    releaseDate: "Feb 02, 2017",
    colorType: "Neutral",
    weaponType: "Staff",
    moveType: "Infantry",
    rarity3: ["pool1"],
    rarity4: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Serra.png",
      main: "img/heroes-main/Serra.png"
    },
    skills: [
      { name: "Assault", rarity: 3 },
      { name: "Absorb", rarity: 3 },
      { name: "Absorb+", rarity: 5 },
      { name: "Heal", rarity: 3 },
      { name: "Mend", rarity: 3 },
      { name: "Recover", rarity: 4 },
      { name: "Imbue", rarity: 4 },
      { name: "Swift-Winds Balm", rarity: 3 },
      { name: "Hone Atk 1", rarity: 3 },
      { name: "Hone Atk 2", rarity: 4 },
      { name: "Hone Atk 3", rarity: 5 }
    ],
    stats: {
      level1: { hp: 16, atk: 6, spd: 9, def: 4, res: 9 },
      level40: { hp: [ 30, 33, 36 ], atk: [ 27, 30, 33 ], spd: [ 27, 31, 34 ], def: [ 18, 21, 24 ], res: [ 30, 33, 36 ] },
      level1_4: { hp: 15, atk: 5, spd: 9, def: 3, res: 9 },
      level40_4: { hp: [ 28, 31, 34 ], atk: [ 24, 27, 30 ], spd: [ 26, 29, 32 ], def: [ 16, 19, 22 ], res: [ 28, 31, 34 ] }
    }
  },
  {
    name: "Seth",
    title: "Silver Knight",
    releaseDate: "Aug 15, 2017",
    colorType: "Red",
    weaponType: "Sword",
    moveType: "Cavalry",
    rarity4: ["pool1"],
    rarity5: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Seth.png",
      main: "img/heroes-main/Seth.png"
    },
    skills: [
      { name: "Iron Sword", rarity: 4 },
      { name: "Steel Sword", rarity: 4 },
      { name: "Ruby Sword", rarity: 4 },
      { name: "Ruby Sword+", rarity: 5 },
      { name: "Swap", rarity: 4 },
      { name: "Fortress Def 1", rarity: 4 },
      { name: "Fortress Def 2", rarity: 4 },
      { name: "Fortress Def 3", rarity: 4 },
      { name: "Seal Atk 1", rarity: 4 },
      { name: "Seal Atk/Def 1", rarity: 4 },
      { name: "Seal Atk/Def 2", rarity: 5 }
    ],
    stats: {
      level1: { hp: 18, atk: 8, spd: 7, def: 8, res: 5 },
      level40: { hp: [ 34, 37, 41 ], atk: [ 29, 32, 35 ], spd: [ 28, 31, 34 ], def: [ 29, 32, 35 ], res: [ 19, 22, 25 ] },
      level1_4: { hp: 17, atk: 8, spd: 6, def: 8, res: 4 },
      level40_4: { hp: [ 32, 35, 38 ], atk: [ 27, 30, 33 ], spd: [ 25, 28, 31 ], def: [ 27, 30, 33 ], res: [ 17, 20, 23 ] }
    }
  },
  {
    name: "Setsuna",
    title: "Absent Archer",
    releaseDate: "Feb 02, 2017",
    colorType: "Neutral",
    weaponType: "Bow",
    moveType: "Infantry",
    rarity3: ["pool1"],
    rarity4: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Setsuna.png",
      main: "img/heroes-main/Setsuna.png"
    },
    skills: [
      { name: "Iron Bow", rarity: 3 },
      { name: "Steel Bow", rarity: 3 },
      { name: "Assassin's Bow", rarity: 4 },
      { name: "Assassin's Bow+", rarity: 5 },
      { name: "Reciprocal Aid", rarity: 4 },
      { name: "HP +3", rarity: 3 },
      { name: "HP +4", rarity: 4 },
      { name: "HP +5", rarity: 5 },
      { name: "Bowbreaker 1", rarity: 3 },
      { name: "Bowbreaker 2", rarity: 3 },
      { name: "Bowbreaker 3", rarity: 4 }
    ],
    stats: {
      level1: { hp: 18, atk: 6, spd: 9, def: 5, res: 6 },
      level40: { hp: [ 34, 37, 41 ], atk: [ 24, 28, 31 ], spd: [ 34, 37, 40 ], def: [ 19, 22, 25 ], res: [ 20, 23, 26 ] },
      level1_4: { hp: 17, atk: 6, spd: 9, def: 4, res: 5 },
      level40_4: { hp: [ 32, 35, 38 ], atk: [ 23, 26, 29 ], spd: [ 32, 35, 38 ], def: [ 17, 20, 23 ], res: [ 18, 21, 24 ] }
    }
  },
  {
    name: "Shanna",
    title: "Sprightly Flier",
    releaseDate: "Feb 02, 2017",
    colorType: "Blue",
    weaponType: "Lance",
    moveType: "Flying",
    rarity3: ["pool1"],
    rarity4: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Shanna.png",
      main: "img/heroes-main/Shanna.png"
    },
    skills: [
      { name: "Iron Lance", rarity: 3 },
      { name: "Steel Lance", rarity: 3 },
      { name: "Killer Lance", rarity: 4 },
      { name: "Killer Lance+", rarity: 5 },
      { name: "Chilling Wind", rarity: 4 },
      { name: "Iceberg", rarity: 4 },
      { name: "Desperation 1", rarity: 3 },
      { name: "Desperation 2", rarity: 3 },
      { name: "Desperation 3", rarity: 4 },
      { name: "Threaten Spd 1", rarity: 3 },
      { name: "Threaten Spd 2", rarity: 4 },
      { name: "Threaten Spd 3", rarity: 5 }
    ],
    stats: {
      level1: { hp: 17, atk: 8, spd: 9, def: 6, res: 7 },
      level40: { hp: [ 35, 39, 42 ], atk: [ 26, 30, 33 ], spd: [ 32, 35, 38 ], def: [ 22, 25, 29 ], res: [ 25, 29, 32 ] },
      level1_4: { hp: 16, atk: 8, spd: 9, def: 5, res: 6 },
      level40_4: { hp: [ 33, 36, 39 ], atk: [ 25, 28, 31 ], spd: [ 30, 33, 36 ], def: [ 20, 23, 26 ], res: [ 23, 26, 29 ] }
    }
  },
  {
    name: "Sharena",
    title: "Princess of Askr",
    releaseDate: "Feb 02, 2017",
    colorType: "Blue",
    weaponType: "Lance",
    moveType: "Infantry",
    rarity2: ["pool1"],
    rarity3: ["pool1"],
    rarity4: ["pool1"],
    limited: true,
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Sharena.png",
      main: "img/heroes-main/Sharena.png"
    },
    skills: [
      { name: "Iron Lance", rarity: 2 },
      { name: "Steel Lance", rarity: 2 },
      { name: "Silver Lance", rarity: 3 },
      { name: "Fensalir", rarity: 5 },
      { name: "Rally Attack", rarity: 2 },
      { name: "Speed +1", rarity: 1 },
      { name: "Speed +2", rarity: 2 },
      { name: "Speed +3", rarity: 4 },
      { name: "Fortify Def 1", rarity: 3 },
      { name: "Fortify Def 2", rarity: 4 },
      { name: "Fortify Def 3", rarity: 5 }
    ],
    stats: {
      level1: { hp: 19, atk: 8, spd: 8, def: 7, res: 5 },
      level40: { hp: [ 40, 43, 46 ], atk: [ 29, 32, 35 ], spd: [ 29, 32, 35 ], def: [ 25, 29, 32 ], res: [ 19, 22, 25 ] },
      level1_4: { hp: 18, atk: 8, spd: 8, def: 6, res: 4 },
      level40_4: { hp: [ 37, 40, 43 ], atk: [ 27, 30, 33 ], spd: [ 27, 30, 33 ], def: [ 23, 26, 29 ], res: [ 17, 20, 23 ] }
    }
  },
  {
    name: "Sheena",
    title: "Princess of Gra",
    releaseDate: "Feb 02, 2017",
    colorType: "Green",
    weaponType: "Axe",
    moveType: "Armored",
    rarity4: ["pool1"],
    rarity5: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Sheena.png",
      main: "img/heroes-main/Sheena.png"
    },
    skills: [
      { name: "Iron Axe", rarity: 4 },
      { name: "Steel Axe", rarity: 4 },
      { name: "Killer Axe", rarity: 4 },
      { name: "Killer Axe+", rarity: 5 },
      { name: "Buckler", rarity: 4 },
      { name: "Escutcheon", rarity: 4 },
      { name: "Svalinn Shield", rarity: 4 },
      { name: "Fortify Def 1", rarity: 4 },
      { name: "Fortify Def 2", rarity: 4 },
      { name: "Fortify Armor", rarity: 4 }
    ],
    stats: {
      level1: { hp: 21, atk: 8, spd: 6, def: 12, res: 7 },
      level40: { hp: [ 42, 45, 48 ], atk: [ 26, 30, 33 ], spd: [ 22, 25, 29 ], def: [ 33, 36, 39 ], res: [ 30, 33, 36 ] },
      level1_4: { hp: 20, atk: 8, spd: 5, def: 12, res: 6 },
      level40_4: { hp: [ 39, 42, 45 ], atk: [ 25, 28, 31 ], spd: [ 20, 23, 26 ], def: [ 31, 34, 37 ], res: [ 27, 30, 33 ] },
    }
  },
  {
    name: "Shigure (Performing Arts)",
    shortName: "Shigure",
    title: "Dark Sky Singer",
    releaseDate: "Sep 29, 2017",
    colorType: "Blue",
    weaponType: "Tome",
    moveType: "Infantry",
    rarity5: ["pool1"],
    limited: true,
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Shigure (Performing Arts).png",
      main: "img/heroes-main/Shigure (Performing Arts).png"
    },
    skills: [
      { name: "Thunder", rarity: 5 },
      { name: "Elthunder", rarity: 5 },
      { name: "Dancer's Score", rarity: 5 },
      { name: "Dancer's Score+", rarity: 5 },
      { name: "Sing", rarity: 5 },
      { name: "Torrent Dance 1", rarity: 5 },
      { name: "Geyser Dance 1", rarity: 5 },
      { name: "Geyser Dance 2", rarity: 5 },
      { name: "B Tome Valor 1", rarity: 5 },
      { name: "B Tome Valor 2", rarity: 5 },
      { name: "B Tome Valor 3", rarity: 5 }
    ],
    stats: {
      level1: { hp: 15, atk: 7, spd: 5, def: 4, res: 5 },
      level40: { hp: [ 31, 34, 38 ], atk: [ 28, 31, 34 ], spd: [ 26, 29, 32 ], def: [ 18, 21, 24 ], res: [ 21, 24, 28 ] }
    }
  },
  {
    name: "Shiro",
    title: "Raw Talent",
    releaseDate: "Dec 04, 2017",
    colorType: "Blue",
    weaponType: "Lance",
    moveType: "Infantry",
    rarity5: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Shiro.png",
      main: "img/heroes-main/Shiro.png"
    },
    skills: [
      { name: "Iron Lance", rarity: 5 },
      { name: "Steel Lance", rarity: 5 },
      { name: "Silver Lance", rarity: 5 },
      { name: "Bright Naginata", rarity: 5 },
      { name: "Swap", rarity: 5 },
      { name: "Steady Stance 1", rarity: 5 },
      { name: "Steady Stance 2", rarity: 5 },
      { name: "Steady Stance 3", rarity: 5 },
      { name: "Def Tactic 1", rarity: 5 },
      { name: "Def Tactic 2", rarity: 5 },
      { name: "Def Tactic 3", rarity: 5 }
    ],
    stats: {
      level1: { hp: 19, atk: 9, spd: 6, def: 9, res: 5 },
      level40: { hp: [ 37, 41, 44 ], atk: [ 32, 35, 38 ], spd: [ 27, 30, 33 ], def: [ 32, 35, 38 ], res: [ 19, 22, 25 ] }
    }
  },
  {
    name: "Siegbert",
    title: "Future King",
    releaseDate: "Dec 04, 2017",
    colorType: "Red",
    weaponType: "Sword",
    moveType: "Cavalry",
    rarity5: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Siegbert.png",
      main: "img/heroes-main/Siegbert.png"
    },
    skills: [
      { name: "Iron Sword", rarity: 5 },
      { name: "Steel Sword", rarity: 5 },
      { name: "Silver Sword", rarity: 5 },
      { name: "Dark Greatsword", rarity: 5 },
      { name: "Dragon Gaze", rarity: 5 },
      { name: "Dragon Fang", rarity: 5 },
      { name: "Death Blow 1", rarity: 5 },
      { name: "Death Blow 2", rarity: 5 },
      { name: "Death Blow 3", rarity: 5 },
      { name: "Atk Tactic 1", rarity: 5 },
      { name: "Atk Tactic 2", rarity: 5 },
      { name: "Atk Tactic 3", rarity: 5 }
    ],
    stats: {
      level1: { hp: 19, atk: 8, spd: 9, def: 7, res: 3 },
      level40: { hp: [ 37, 41, 44 ], atk: [ 31, 34, 37 ], spd: [ 32, 35, 38 ], def: [ 28, 31, 34 ], res: [ 12, 16, 19 ] }
    }
  },
  {
    name: "Sigurd",
    title: "Holy Knight",
    releaseDate: "Oct 16, 2017",
    colorType: "Red",
    weaponType: "Sword",
    moveType: "Cavalry",
    rarity5: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Sigurd.png",
      main: "img/heroes-main/Sigurd.png"
    },
    skills: [
      { name: "Iron Sword", rarity: 5 },
      { name: "Steel Sword", rarity: 5 },
      { name: "Silver Sword", rarity: 5 },
      { name: "Divine Tyrfing", rarity: 5 },
      { name: "Miracle", rarity: 5 },
      { name: "Close Def 1", rarity: 5 },
      { name: "Close Def 2", rarity: 5 },
      { name: "Close Def 3", rarity: 5 },
      { name: "Crusader's Ward", rarity: 5 },
      { name: "Spd Smoke 1", rarity: 5 },
      { name: "Spd Smoke 2", rarity: 5 },
      { name: "Spd Smoke 3", rarity: 5 }
    ],
    stats: {
      level1: { hp: 19, atk: 9, spd: 8, def: 6, res: 4 },
      level40: { hp: [ 37, 41, 44 ], atk: [ 32, 35, 38 ], spd: [ 29, 32, 35 ], def: [ 31, 34, 37 ], res: [ 13, 17, 20 ] }
    }
  },
  {
    name: "Soleil",
    title: "Adorable Adorer",
    releaseDate: "Dec 04, 2017",
    colorType: "Red",
    weaponType: "Sword",
    moveType: "Infantry",
    rarity4: ["pool1"],
    rarity5: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Soleil.png",
      main: "img/heroes-main/Soleil.png"
    },
    skills: [
      { name: "Iron Sword", rarity: 4 },
      { name: "Steel Sword", rarity: 4 },
      { name: "Firesweep Sword", rarity: 4 },
      { name: "Firesweep Sword+", rarity: 5 },
      { name: "Rising Wind", rarity: 4 },
      { name: "Blazing Wind", rarity: 4 },
      { name: "Darting Blow 1", rarity: 4 },
      { name: "Darting Blow 2", rarity: 4 },
      { name: "Darting Blow 3", rarity: 5 },
      { name: "Spur Res 1", rarity: 4 },
      { name: "Drive Res 1", rarity: 4 },
      { name: "Drive Res 2", rarity: 4 }
    ],
    stats: {
      level1: { hp: 18, atk: 10, spd: 9, def: 6, res: 5 },
      level40: { hp: [ 34, 37, 41 ], atk: [ 35, 38, 41 ], spd: [ 32, 35, 38 ], def: [ 24, 28, 31 ], res: [ 21, 24, 28 ] },
      level1_4: { hp: 17, atk: 10, spd: 9, def: 5, res: 4 },
      level40_4: { hp: [ 32, 35, 38 ], atk: [ 33, 36, 39 ], spd: [ 30, 36, 39 ], def: [ 22, 25, 28 ], res: [ 19, 22, 25 ] }
    }
  },
  {
    name: "Sonya",
    title: "Vengeful Mage",
    releaseDate: "Jul 13, 2017",
    colorType: "Green",
    weaponType: "Tome",
    moveType: "Infantry",
    rarity5: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Sonya.png",
      main: "img/heroes-main/Sonya.png"
    },
    skills: [
      { name: "Wind", rarity: 5 },
      { name: "Elwind", rarity: 5 },
      { name: "Rexcalibur", rarity: 5 },
      { name: "Dark Excalibur", rarity: 5 },
      { name: "New Moon", rarity: 5 },
      { name: "Moonbow", rarity: 5 },
      { name: "Warding Blow 1", rarity: 5 },
      { name: "Mirror Strike 1", rarity: 5 },
      { name: "Mirror Strike 2", rarity: 5 },
      { name: "Res Ploy 1", rarity: 5 },
      { name: "Res Ploy 2", rarity: 5 },
      { name: "Res Ploy 3", rarity: 5 }
    ],
    stats: {
      level1: { hp: 17, atk: 7, spd: 7, def: 5, res: 8 },
      level40: { hp: [ 33, 36, 40 ], atk: [ 30, 33, 36 ], spd: [ 28, 31, 34 ], def: [ 12, 15, 19 ], res: [ 29, 32, 35 ] }
    }
  },
  {
    name: "Sophia",
    title: "Nabata Prophet",
    releaseDate: "Feb 02, 2017",
    colorType: "Red",
    weaponType: "Tome",
    moveType: "Infantry",
    rarity3: ["pool1"],
    rarity4: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Sophia.png",
      main: "img/heroes-main/Sophia.png"
    },
    skills: [
      { name: "Flux", rarity: 1 },
      { name: "Ruin", rarity: 3 },
      { name: "Fenrir", rarity: 4 },
      { name: "Fenrir+", rarity: 5 },
      { name: "Dragon Gaze", rarity: 4 },
      { name: "Dragon Fang", rarity: 4 },
      { name: "Warding Blow 1", rarity: 3 },
      { name: "Warding Blow 2", rarity: 4 },
      { name: "Warding Blow 3", rarity: 5 },
      { name: "Fortify Res 1", rarity: 1 },
      { name: "Fortify Res 2", rarity: 2 },
      { name: "Fortify Res 3", rarity: 4 }
    ],
    stats: {
      level1: { hp: 18, atk: 9, spd: 4, def: 6, res: 7 },
      level40: { hp: [ 36, 40, 43 ], atk: [ 30, 33, 36 ], spd: [ 16, 19, 22 ], def: [ 24, 28, 31 ], res: [ 25, 29, 32 ] },
      level1_4: { hp: 17, atk: 9, spd: 3, def: 5, res: 7 },
      level40_4: { hp: [ 34, 37, 40 ], atk: [ 28, 31, 34 ], spd: [ 14, 17, 20 ], def: [ 22, 25, 28 ], res: [ 24, 27, 30 ] }
    }
  },
  {
    name: "Soren",
    title: "Shrewd Strategist",
    releaseDate: "Apr 26, 2017",
    colorType: "Green",
    weaponType: "Tome",
    moveType: "Infantry",
    rarity4: ["pool1"],
    rarity5: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Soren.png",
      main: "img/heroes-main/Soren.png"
    },
    skills: [
      { name: "Wind", rarity: 4 },
      { name: "Elwind", rarity: 4 },
      { name: "Rexcalibur", rarity: 4 },
      { name: "Rexcalibur+", rarity: 5 },
      { name: "Wind's Brand", rarity: 5 },
      { name: "Rising Wind", rarity: 4 },
      { name: "Growing Wind", rarity: 4 },
      { name: "Watersweep 1", rarity: 4 },
      { name: "Watersweep 2", rarity: 4 },
      { name: "Watersweep 3", rarity: 5 },
      { name: "Fortify Res 1", rarity: 4 },
      { name: "Fortify Res 2", rarity: 4 },
      { name: "Fortify Res 3", rarity: 4 }
    ],
    stats: {
      level1: { hp: 17, atk: 7, spd: 9, def: 4, res: 7 },
      level40: { hp: [ 33, 36, 40 ], atk: [ 30, 33, 36 ], spd: [ 30, 33, 36 ], def: [ 13, 17, 20 ], res: [ 25, 29, 32 ] },
      level1_4: { hp: 16, atk: 7, spd: 9, def: 3, res: 6 },
      level40_4: { hp: [ 31, 34, 37 ], atk: [ 28, 31, 34 ], spd: [ 28, 31, 34 ], def: [ 12, 15, 18 ], res: [ 23, 26, 29 ] }
    }
  },
  {
    name: "Sothe",
    title: "Zephyr",
    releaseDate: "Jan 12, 2018",
    colorType: "Neutral",
    weaponType: "Dagger",
    moveType: "Infantry",
    rarity4: ["pool1"],
    rarity5: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Sothe.png",
      main: "img/heroes-main/Sothe.png"
    },
    skills: [
      { name: "Iron Dagger", rarity: 4 },
      { name: "Steel Dagger", rarity: 4 },
      { name: "Silver Dagger", rarity: 4 },
      { name: "Peshkatz", rarity: 5 },
      { name: "Night Sky", rarity: 4 },
      { name: "Glimmer", rarity: 4 },
      { name: "Life and Death 1", rarity: 4 },
      { name: "Life and Death 2", rarity: 4 },
      { name: "Life and Death 3", rarity: 4 },
      { name: "Spur Atk 1", rarity: 4 },
      { name: "Spur Atk/Spd 1", rarity: 4 },
      { name: "Spur Atk/Spd 2", rarity: 5 }
    ],
    stats: {
      level1: { hp: 17, atk: 10, spd: 9, def: 5, res: 4 },
      level40: { hp: [ 35, 39, 42 ], atk: [ 33, 36, 39 ], spd: [ 30, 33, 36 ], def: [ 19, 22, 25 ], res: [ 18, 21, 24 ] },
      level1_4: { hp: 16, atk: 10, spd: 9, def: 4, res: 3 },
      level40_40: { hp: [ 33, 36, 39 ], atk: [ 31, 34, 37 ], spd: [ 28, 31, 34 ], def: [ 17, 20, 23 ], res: [ 16, 19, 22 ] },

    }
  },
  {
    name: "Stahl",
    title: "Viridian Knight",
    releaseDate: "Feb 02, 2017",
    colorType: "Red",
    weaponType: "Sword",
    moveType: "Cavalry",
    rarity3: ["pool1"],
    rarity4: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Stahl.png",
      main: "img/heroes-main/Stahl.png"
    },
    skills: [
      { name: "Iron Sword", rarity: 1 },
      { name: "Steel Sword", rarity: 3 },
      { name: "Ruby Sword", rarity: 4 },
      { name: "Ruby Sword+", rarity: 5 },
      { name: "Swap", rarity: 4 },
      { name: "Defense +1", rarity: 1 },
      { name: "Defense +2", rarity: 2 },
      { name: "Defense +3", rarity: 4 },
      { name: "Obstruct 1", rarity: 3 },
      { name: "Obstruct 2", rarity: 4 },
      { name: "Obstruct 3", rarity: 5 }
    ],
    stats: {
      level1: { hp: 19, atk: 7, spd: 7, def: 8, res: 5 },
      level40: { hp: [ 42, 45, 48 ], atk: [ 28, 31, 34 ], spd: [ 23, 26, 30 ], def: [ 26, 30, 33 ], res: [ 19, 22, 25 ] },
      level1_4: { hp: 18, atk: 7, spd: 6, def: 8, res: 4 },
      level40_4: { hp: [ 39, 42, 45 ], atk: [ 26, 29, 32 ], spd: [ 21, 24, 27 ], def: [ 25, 28, 31 ], res: [ 17, 20, 23 ] }
    }
  },
  {
    name: "Subaki",
    title: "Perfect Expert",
    releaseDate: "Feb 02, 2017",
    colorType: "Blue",
    weaponType: "Lance",
    moveType: "Flying",
    rarity3: ["pool1"],
    rarity4: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Subaki.png",
      main: "img/heroes-main/Subaki.png"
    },
    skills: [
      { name: "Iron Lance", rarity: 1 },
      { name: "Steel Lance", rarity: 3 },
      { name: "Sapphire Lance", rarity: 4 },
      { name: "Sapphire Lance+", rarity: 5 },
      { name: "Swap", rarity: 4 },
      { name: "Resistance +1", rarity: 1 },
      { name: "Resistance +2", rarity: 2 },
      { name: "Resistance +3", rarity: 4 },
      { name: "Quick Riposte 1", rarity: 3 },
      { name: "Quick Riposte 2", rarity: 4 },
      { name: "Quick Riposte 3", rarity: 5 }
    ],
    stats: {
      level1: { hp: 18, atk: 6, spd: 9, def: 9, res: 5 },
      level40: { hp: [ 36, 40, 43 ], atk: [ 22, 25, 29 ], spd: [ 32, 35, 38 ], def: [ 32, 35, 38 ], res: [ 19, 22, 25 ] },
      level1_4: { hp: 17, atk: 5, spd: 9, def: 9, res: 4 },
      level40_4: { hp: [ 34, 37, 40 ], atk: [ 20, 23, 26 ], spd: [ 30, 33, 36 ], def: [ 30, 33, 36 ], res: [ 17, 20, 23 ] }
    }
  },
  {
    name: "Sully",
    title: "Crimson Knight",
    releaseDate: "Feb 02, 2017",
    colorType: "Blue",
    weaponType: "Lance",
    moveType: "Cavalry",
    rarity3: ["pool1"],
    rarity4: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Sully.png",
      main: "img/heroes-main/Sully.png"
    },
    skills: [
      { name: "Iron Lance", rarity: 1 },
      { name: "Steel Lance", rarity: 3 },
      { name: "Sapphire Lance", rarity: 4 },
      { name: "Sapphire Lance+", rarity: 5 },
      { name: "Draw Back", rarity: 4 },
      { name: "Swordbreaker 1", rarity: 3 },
      { name: "Swordbreaker 2", rarity: 4 },
      { name: "Swordbreaker 3", rarity: 5 },
      { name: "Spur Def 1", rarity: 3 },
      { name: "Spur Def 2", rarity: 3 },
      { name: "Spur Def 3", rarity: 4 }
    ],
    stats: {
      level1: { hp: 18, atk: 7, spd: 8, def: 7, res: 6 },
      level40: { hp: [ 39, 42, 45 ], atk: [ 23, 26, 30 ], spd: [ 31, 34, 37 ], def: [ 21, 24, 27 ], res: [ 24, 28, 31 ] },
      level1_4: { hp: 17, atk: 7, spd: 8, def: 6, res: 5 },
      level40_4: { hp: [ 36, 39, 42 ], atk: [ 22, 25, 28 ], spd: [ 29, 32, 35 ], def: [ 19, 22, 25 ], res: [ 22, 25, 28 ] }
    }
  },
  {
    name: "Tailtiu",
    title: "Thunder Noble",
    releaseDate: "Oct 16, 2017",
    colorType: "Blue",
    weaponType: "Tome",
    moveType: "Infantry",
    rarity4: ["pool1"],
    rarity5: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Tailtiu.png",
      main: "img/heroes-main/Tailtiu.png"
    },
    skills: [
      { name: "Thunder", rarity: 4 },
      { name: "Elthunder", rarity: 4 },
      { name: "Blárblade", rarity: 4 },
      { name: "Blárblade+", rarity: 5 },
      { name: "Rally Resistance", rarity: 4 },
      { name: "Rally Spd/Res", rarity: 4 },
      { name: "Attack +1", rarity: 4 },
      { name: "Atk/Res 1", rarity: 4 },
      { name: "Atk/Res 2", rarity: 5 },
      { name: "Spur Spd 1", rarity: 4 },
      { name: "Drive Spd 1", rarity: 4 },
      { name: "Drive Spd 2", rarity: 4 }
    ],
    stats: {
      level1: { hp: 17, atk: 8, spd: 9, def: 4, res: 6 },
      level40: { hp: [ 35, 39, 42 ], atk: [ 29, 32, 35 ], spd: [ 32, 35, 38 ], def: [ 13, 17, 20 ], res: [ 22, 25, 29 ] },
      level1_4: { hp: 16, atk: 8, spd: 9, def: 3, res: 5 },
      level40_4: { hp: [ 33, 36, 39 ], atk: [ 27, 30, 33 ], spd: [ 30, 33, 36 ], def: [ 12, 15, 18 ], res: [ 20, 23, 26 ] }
    }
  },
  {
    name: "Takumi",
    title: "Wild Card",
    releaseDate: "Feb 02, 2017",
    colorType: "Neutral",
    weaponType: "Bow",
    moveType: "Infantry",
    rarity5: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Takumi.png",
      main: "img/heroes-main/Takumi.png"
    },
    skills: [
      { name: "Iron Bow", rarity: 5 },
      { name: "Steel Bow", rarity: 5 },
      { name: "Silver Bow", rarity: 5 },
      { name: "Fujin Yumi", rarity: 5 },
      { name: "Retribution", rarity: 5 },
      { name: "Vengeance", rarity: 5 },
      { name: "Close Counter", rarity: 5 },
      { name: "Threaten Spd 1", rarity: 5 },
      { name: "Threaten Spd 2", rarity: 5 },
      { name: "Threaten Spd 3", rarity: 5 }
    ],
    stats: {
      level1: { hp: 18, atk: 8, spd: 7, def: 6, res: 5 },
      level40: { hp: [ 36, 40, 43 ], atk: [ 29, 32, 35 ], spd: [ 30, 33, 36 ], def: [ 22, 25, 29 ], res: [ 14, 18, 21 ] }
    }
  },
  {
    name: "Takumi (Fallen Heroes)",
    shortName: "Takumi",
    title: "Empty Vessel",
    releaseDate: "Feb 23, 2018",
    colorType: "Neutral",
    weaponType: "Bow",
    moveType: "Infantry",
    rarity3: ["pool1"],
    rarity4: ["pool1"],
    ghb: true,
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Takumi (Fallen Heroes).png",
      main: "img/heroes-main/Takumi (Fallen Heroes).png"
    },
    skills: [
      { name: "Iron Bow", rarity: 3 },
      { name: "Steel Bow", rarity: 3 },
      { name: "Silver Bow", rarity: 4 },
      { name: "Skadi", rarity: 5 },
      { name: "Retribution", rarity: 3 },
      { name: "Vengeance", rarity: 4 },
      { name: "Fury 1", rarity: 3 },
      { name: "Fury 2", rarity: 3 },
      { name: "Fury 3", rarity: 4 },
      { name: "Spd Smoke 1", rarity: 3 },
      { name: "Spd Smoke 2", rarity: 4 },
      { name: "Spd Smoke 3", rarity: 5 }
    ],
    stats: {
      level1: { hp: 15, atk: 9, spd: 10, def: 6, res: 5 },
      level40: { hp: [ 34, 37, 41 ], atk: [ 28, 31, 34 ], spd: [ 31, 34, 37 ], def: [ 22, 25, 28 ], res: [ 21, 24, 27 ] },
      level1_4: { hp: 17, atk: 7, spd: 8, def: 5, res: 4 },
      level40_4: { hp: [ 31, 34, 37 ], atk: [ 26, 29, 32 ], spd: [ 29, 32, 35 ], def: [ 20, 23, 26 ], res: [ 19, 22, 25 ] }
    }
  },
  {
    name: "Takumi (Happy New Year!)",
    shortName: "Takumi",
    title: "Prince of Soup",
    releaseDate: "Jan 01, 2018",
    colorType: "Neutral",
    weaponType: "Dagger",
    moveType: "Infantry",
    rarity5: ["pool1"],
    limited: true,
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Takumi (Happy New Year!).png",
      main: "img/heroes-main/Takumi (Happy New Year!).png"
    },
    skills: [
      { name: "Iron Dagger", rarity: 5 },
      { name: "Steel Dagger", rarity: 5 },
      { name: "Kagami Mochi", rarity: 5 },
      { name: "Kagami Mochi+", rarity: 5 },
      { name: "New Moon", rarity: 5 },
      { name: "Moonbow", rarity: 5 },
      { name: "Atk/Res Bond 1", rarity: 5 },
      { name: "Atk/Res Bond 2", rarity: 5 },
      { name: "Atk/Res Bond 3", rarity: 5 },
      { name: "Bowbreaker 1", rarity: 5 },
      { name: "Bowbreaker 2", rarity: 5 },
      { name: "Bowbreaker 3", rarity: 5 }
    ],
    stats: {
      level1: { hp: 18, atk: 8, spd: 10, def: 4, res: 5 },
      level40: { hp: [ 36, 40, 43 ], atk: [ 31, 34, 37 ], spd: [ 31, 34, 37 ], def: [ 13, 17, 20 ], res: [ 23, 27, 30 ] }
    }
  },
  {
    name: "Tana",
    title: "Winged Princess",
    releaseDate: "Aug 15, 2017",
    colorType: "Blue",
    weaponType: "Lance",
    moveType: "Flying",
    rarity5: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Tana.png",
      main: "img/heroes-main/Tana.png"
    },
    skills: [
      { name: "Iron Lance", rarity: 5 },
      { name: "Steel Lance", rarity: 5 },
      { name: "Heavy Spear", rarity: 5 },
      { name: "Vidofnir", rarity: 5 },
      { name: "New Moon", rarity: 5 },
      { name: "Moonbow", rarity: 5 },
      { name: "Speed +1", rarity: 5 },
      { name: "Spd/Def 1", rarity: 5 },
      { name: "Spd/Def 2", rarity: 5 },
      { name: "Guidance 1", rarity: 5 },
      { name: "Guidance 2", rarity: 5 },
      { name: "Guidance 3", rarity: 5 }
    ],
    stats: {
      level1: { hp: 17, atk: 8, spd: 10, def: 6, res: 6 },
      level40: { hp: [ 33, 36, 40 ], atk: [ 31, 34, 37 ], spd: [ 33, 36, 39 ], def: [ 22, 25, 29 ], res: [ 22, 25, 29 ] }
    }
  },
  {
    name: "Tharja",
    title: "Dark Shadow",
    releaseDate: "Feb 02, 2017",
    colorType: "Red",
    weaponType: "Tome",
    moveType: "Infantry",
    rarity4: ["pool1"],
    rarity5: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Tharja.png",
      main: "img/heroes-main/Tharja.png"
    },
    skills: [
      { name: "Flux", rarity: 4 },
      { name: "Ruin", rarity: 4 },
      { name: "Rauðrblade", rarity: 4 },
      { name: "Rauðrblade+", rarity: 5 },
      { name: "Retribution", rarity: 4 },
      { name: "Vengeance", rarity: 4 },
      { name: "Darting Blow 1", rarity: 4 },
      { name: "Darting Blow 2", rarity: 4 },
      { name: "Darting Blow 3", rarity: 4 },
      { name: "Spur Res 1", rarity: 4 },
      { name: "Spur Res 2", rarity: 4 },
      { name: "Spur Res 3", rarity: 5 }
    ],
    stats: {
      level1: { hp: 17, atk: 8, spd: 8, def: 6, res: 5 },
      level40: { hp: [ 35, 39, 42 ], atk: [ 29, 32, 35 ], spd: [ 31, 34, 37 ], def: [ 20, 23, 26 ], res: [ 17, 20, 23 ] },
      level1_4: { hp: 16, atk: 8, spd: 8, def: 5, res: 4 },
      level40_4: { hp: [ 33, 36, 39 ], atk: [ 27, 30, 33 ], spd: [ 29, 32, 35 ], def: [ 18, 21, 24 ], res: [ 15, 18, 21 ] }
    }
  },
  {
    name: "Tharja (Winter's Envoy)",
    shortName: "Tharja",
    title: "\"Normal Girl\"",
    releaseDate: "Dec 18, 2017",
    colorType: "Red",
    weaponType: "Tome",
    moveType: "Armored",
    rarity5: ["pool1"],
    limited: true,
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Tharja (Winter's Envoy).png",
      main: "img/heroes-main/Tharja (Winter's Envoy).png"
    },
    skills: [
      { name: "Flux", rarity: 5 },
      { name: "Ruin", rarity: 5 },
      { name: "Candelabra", rarity: 5 },
      { name: "Candelabra+", rarity: 5 },
      { name: "Chilling Wind", rarity: 5 },
      { name: "Iceberg", rarity: 5 },
      { name: "Close Counter", rarity: 5 },
      { name: "Vengeful Fighter 1", rarity: 5 },
      { name: "Vengeful Fighter 2", rarity: 5 },
      { name: "Vengeful Fighter 3", rarity: 5 },
      { name: "R Tome Valor 1", rarity: 5 },
      { name: "R Tome Valor 2", rarity: 5 },
      { name: "R Tome Valor 3", rarity: 5 }
    ],
    stats: {
      level1: { hp: 19, atk: 10, spd: 5, def: 8, res: 10 },
      level40: { hp: [ 40, 43, 46 ], atk: [ 31, 34, 37 ], spd: [ 14, 18, 21 ], def: [ 31, 34, 37], res: [ 33, 36, 39 ] }
    }
  },
  {
    name: "Tiki (Adult)",
    shortName: "Tiki",
    title: "Naga's Voice",
    releaseDate: "Feb 02, 2017",
    colorType: "Red",
    weaponType: "Breath",
    moveType: "Infantry",
    rarity3: ["pool1"],
    rarity4: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Tiki (Adult).png",
      main: "img/heroes-main/Tiki (Adult).png"
    },
    skills: [
      { name: "Fire Breath", rarity: 3 },
      { name: "Fire Breath+", rarity: 3 },
      { name: "Lightning Breath", rarity: 4 },
      { name: "Lightning Breath+", rarity: 5 },
      { name: "Glowing Ember", rarity: 4 },
      { name: "Bonfire", rarity: 4 },
      { name: "Defiant Atk 1", rarity: 3 },
      { name: "Defiant Atk 2", rarity: 3 },
      { name: "Defiant Atk 3", rarity: 4 },
      { name: "Spur Res 1", rarity: 3 },
      { name: "Spur Res 2", rarity: 4 },
      { name: "Spur Res 3", rarity: 5 }
    ],
    stats: {
      level1: { hp: 18, atk: 7, spd: 6, def: 9, res: 7 },
      level40: { hp: [ 36, 40, 43 ], atk: [ 32, 35, 38 ], spd: [ 20, 23, 26 ], def: [ 32, 35, 38 ], res: [ 21, 24, 27 ] },
      level1_4: { hp: 17, atk: 7, spd: 5, def: 9, res: 6 },
      level40_4: { hp: [ 34, 37, 40 ], atk: [ 30, 33, 36 ], spd: [ 18, 21, 24 ], def: [ 30, 33, 36 ], res: [ 19, 22, 25 ] }
    }
  },
  {
    name: "Tiki (Adult) (Ylissean Summer)",
    shortName: "Tiki",
    title: "Summering Scion",
    releaseDate: "Jun 30, 2017",
    colorType: "Green",
    weaponType: "Axe",
    moveType: "Infantry",
    rarity5: ["pool1"],
    limited: true,
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Tiki (Adult) (Ylissean Summer).png",
      main: "img/heroes-main/Tiki (Adult) (Ylissean Summer).png"
    },
    skills: [
      { name: "Iron Axe", rarity: 5 },
      { name: "Steel Axe", rarity: 5 },
      { name: "Melon Crusher", rarity: 5 },
      { name: "Melon Crusher+", rarity: 5 },
      { name: "Daylight", rarity: 5 },
      { name: "Sol", rarity: 5 },
      { name: "Close Def 1", rarity: 5 },
      { name: "Close Def 2", rarity: 5 },
      { name: "Close Def 3", rarity: 5 },
      { name: "Axe Valor 1", rarity: 5 },
      { name: "Axe Valor 2", rarity: 5 },
      { name: "Axe Valor 3", rarity: 5 }
    ],
    stats: {
      level1: { hp: 18, atk: 8, spd: 6, def: 8, res: 7 },
      level40: { hp: [ 32, 35, 38 ], atk: [ 33, 36, 39 ], spd: [ 27, 30, 33 ], def: [ 29, 32, 35 ], res: [ 21, 24, 27 ] }
    }
  },
  {
    name: "Tiki (Young)",
    shortName: "Tiki",
    title: "Dragon Scion",
    releaseDate: "Feb 02, 2017",
    colorType: "Red",
    weaponType: "Breath",
    moveType: "Infantry",
    rarity5: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Tiki (Young).png",
      main: "img/heroes-main/Tiki (Young).png"
    },
    skills: [
      { name: "Fire Breath", rarity: 5 },
      { name: "Fire Breath+", rarity: 5 },
      { name: "Flametongue", rarity: 5 },
      { name: "Flametongue+", rarity: 5 },
      { name: "Rising Flame", rarity: 5 },
      { name: "Growing Flame", rarity: 5 },
      { name: "Armored Blow 1", rarity: 5 },
      { name: "Armored Blow 2", rarity: 5 },
      { name: "Armored Blow 3", rarity: 5 },
      { name: "Breath of Life 1", rarity: 5 },
      { name: "Breath of Life 2", rarity: 5 },
      { name: "Breath of Life 3", rarity: 5 }
    ],
    stats: {
      level1: { hp: 15, atk: 5, spd: 4, def: 8, res: 7 },
      level40: { hp: [ 38, 41, 44 ], atk: [ 28, 31, 34 ], spd: [ 27, 30, 33 ], def: [ 29, 32, 35 ], res: [ 25, 29, 32 ] }
    }
  },
  {
    name: "Titania",
    title: "Mighty Mercenary",
    releaseDate: "Apr 26, 2017",
    colorType: "Green",
    weaponType: "Axe",
    moveType: "Cavalry",
    rarity4: ["pool1"],
    rarity5: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Titania.png",
      main: "img/heroes-main/Titania.png"
    },
    skills: [
      { name: "Iron Axe", rarity: 4 },
      { name: "Steel Axe", rarity: 4 },
      { name: "Emerald Axe", rarity: 4 },
      { name: "Emerald Axe+", rarity: 5 },
      { name: "Reciprocal Aid", rarity: 4 },
      { name: "Armored Blow 1", rarity: 4 },
      { name: "Armored Blow 2", rarity: 4 },
      { name: "Armored Blow 3", rarity: 4 },
      { name: "Guard 1", rarity: 4 },
      { name: "Guard 2", rarity: 4 },
      { name: "Guard 3", rarity: 5 }
    ],
    stats: {
      level1: { hp: 18, atk: 6, spd: 8, def: 6, res: 8 },
      level40: { hp: [ 34, 37, 41 ], atk: [ 24, 28, 31 ], spd: [ 31, 34, 37 ], def: [ 22, 25, 29 ], res: [ 26, 30, 33 ] },
      level1_4: { hp: 17, atk: 5, spd: 8, def: 5, res: 8 },
      level40_4: { hp: [ 32, 35, 38 ], atk: [ 22, 25, 28 ], spd: [ 29, 32, 35 ], def: [ 20, 23, 26 ], res: [ 25, 28, 31 ] }
    }
  },
  {
    name: "Tobin",
    title: "The Clueless One",
    releaseDate: "Jul 07, 2017",
    colorType: "Red",
    weaponType: "Sword",
    moveType: "Infantry",
    rarity4: ["pool1"],
    rarity5: ["pool1"],
    ttReward: true,
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Tobin.png",
      main: "img/heroes-main/Tobin.png"
    },
    skills: [
      { name: "Iron Sword", rarity: 4 },
      { name: "Steel Sword", rarity: 4 },
      { name: "Armorslayer", rarity: 4 },
      { name: "Armorslayer+", rarity: 5 },
      { name: "Pivot", rarity: 4 },
      { name: "Attack +1", rarity: 4 },
      { name: "Attack +2", rarity: 4 },
      { name: "Attack +3", rarity: 4 },
      { name: "Seal Spd 1", rarity: 4 },
      { name: "Seal Spd 2", rarity: 4 },
      { name: "Seal Spd 3", rarity: 5 }
    ],
    stats: {
      level1: { hp: 18, atk: 7, spd: 5, def: 5, res: 4 },
      level40: { hp: [ 43, 46, 49 ], atk: [ 28, 31, 34 ], spd: [ 23, 27, 30 ], def: [ 30, 33, 36 ], res: [ 22, 26, 29 ] },
      level1_4: { hp: 17, atk: 7, spd: 5, def: 4, res: 3 },
      level40_4: { hp: [ 40, 43, 46 ], atk: [ 26, 29, 32 ], spd: [ 22, 25, 28 ], def: [ 27, 30, 33 ], res: [ 20, 23, 26 ] }
    }
  },
  {
    name: "Ursula",
    title: "Blue Crow",
    releaseDate: "Mar 10, 2017",
    colorType: "Blue",
    weaponType: "Tome",
    moveType: "Cavalry",
    rarity3: ["pool1"],
    rarity4: ["pool1"],
    ghb: true,
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Ursula.png",
      main: "img/heroes-main/Ursula.png"
    },
    skills: [
      { name: "Thunder", rarity: 3 },
      { name: "Elthunder", rarity: 3 },
      { name: "Blárwolf", rarity: 4 },
      { name: "Blárwolf+", rarity: 5 },
      { name: "Rising Thunder", rarity: 4 },
      { name: "Growing Thunder", rarity: 4 },
      { name: "Death Blow 1", rarity: 3 },
      { name: "Death Blow 2", rarity: 4 },
      { name: "Death Blow 3", rarity: 5 },
      { name: "Threaten Res 1", rarity: 3 },
      { name: "Threaten Res 2", rarity: 3 },
      { name: "Threaten Res 3", rarity: 4 }
    ],
    stats: {
      level1: { hp: 16, atk: 7, spd: 8, def: 4, res: 8 },
      level40: { hp: [ 32, 35, 39 ], atk: [ 25, 29, 32 ], spd: [ 29, 32, 35 ], def: [ 16, 19, 22 ], res: [ 26, 30, 33 ] },
      level1_4: { hp: 15, atk: 6, spd: 8, def: 3, res: 8 },
      level40_4: { hp: [ 30, 33, 36 ], atk: [ 23, 26, 29 ], spd: [ 27, 30, 33 ], def: [ 14, 17, 20 ], res: [ 25, 28, 31 ] }
    }
  },
  {
    name: "Valter",
    title: "Dark Moonstone",
    releaseDate: "Aug 21, 2017",
    colorType: "Blue",
    weaponType: "Lance",
    moveType: "Flying",
    rarity3: ["pool1"],
    rarity4: ["pool1"],
    ghb: true,
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Valter.png",
      main: "img/heroes-main/Valter.png"
    },
    skills: [
      { name: "Iron Lance", rarity: 3 },
      { name: "Steel Lance", rarity: 3 },
      { name: "Silver Lance", rarity: 4 },
      { name: "Cursed Lance", rarity: 5 },
      { name: "New Moon", rarity: 4 },
      { name: "Luna", rarity: 4 },
      { name: "Darting Blow 1", rarity: 3 },
      { name: "Darting Blow 2", rarity: 3 },
      { name: "Darting Blow 3", rarity: 4 },
      { name: "Panic Ploy 1", rarity: 3 },
      { name: "Panic Ploy 2", rarity: 4 },
      { name: "Panic Ploy 3", rarity: 5 }
    ],
    stats: {
      level1: { hp: 18, atk: 8, spd: 9, def: 8, res: 4 },
      level40: { hp: [ 39, 42, 45 ], atk: [ 29, 32, 35 ], spd: [ 27, 31, 34 ], def: [ 31, 34, 37 ], res: [ 16, 19, 22 ] },
      level1_4: { hp: 17, atk: 8, spd: 9, def: 7, res: 3 },
      level40_4: { hp: [ 36, 39, 42 ], atk: [ 27, 30, 33 ], spd: [ 26, 29, 32 ], def: [ 28, 31, 34 ], res: [ 14, 17, 20 ] }
    }
  },
  {
    name: "Virion",
    title: "Elite Archer",
    releaseDate: "Feb 02, 2017",
    colorType: "Neutral",
    weaponType: "Bow",
    moveType: "Infantry",
    rarity3: ["pool1"],
    rarity4: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Virion.png",
      main: "img/heroes-main/Virion.png"
    },
    skills: [
      { name: "Iron Bow", rarity: 1 },
      { name: "Steel Bow", rarity: 3 },
      { name: "Silver Bow", rarity: 4 },
      { name: "Silver Bow+", rarity: 5 },
      { name: "Night Sky", rarity: 4 },
      { name: "Astra", rarity: 4 },
      { name: "Defiant Res 1", rarity: 3 },
      { name: "Defiant Res 2", rarity: 4 },
      { name: "Defiant Res 3", rarity: 5 },
      { name: "Seal Spd 1", rarity: 1 },
      { name: "Seal Spd 2", rarity: 2 },
      { name: "Seal Spd 3", rarity: 4 }
    ],
    stats: {
      level1: { hp: 20, atk: 7, spd: 7, def: 7, res: 3 },
      level40: { hp: [ 43, 46, 49 ], atk: [ 28, 31, 34 ], spd: [ 28, 31, 34 ], def: [ 23, 26, 30 ], res: [ 10, 13, 17 ] },
      level1_4: { hp: 19, atk: 7, spd: 7, def: 6, res: 2 },
      level40_4: { hp: [ 40, 43, 46 ], atk: [ 26, 29, 32 ], spd: [ 26, 29, 32 ], def: [ 21, 24, 27 ], res: [ 9, 12, 15 ] }
    }
  },
  {
    name: "Wrys",
    title: "Kindly Priest",
    releaseDate: "Feb 02, 2017",
    colorType: "Neutral",
    weaponType: "Staff",
    moveType: "Infantry",
    rarity3: ["pool1"],
    rarity4: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Wrys.png",
      main: "img/heroes-main/Wrys.png"
    },
    skills: [
      { name: "Assault", rarity: 1 },
      { name: "Slow", rarity: 3 },
      { name: "Slow+", rarity: 5 },
      { name: "Heal", rarity: 1 },
      { name: "Reconcile", rarity: 3 },
      { name: "Rehabilitate", rarity: 4 },
      { name: "Imbue", rarity: 4 },
      { name: "Heavenly Light", rarity: 3 },
      { name: "Live to Serve 1", rarity: 3 },
      { name: "Live to Serve 2", rarity: 4 },
      { name: "Live to Serve 3", rarity: 5 }
    ],
    stats: {
      level1: { hp: 18, atk: 5, spd: 6, def: 5, res: 10 },
      level40: { hp: [ 39, 42, 45 ], atk: [ 21, 24, 28 ], spd: [ 20, 23, 26 ], def: [ 19, 22, 25 ], res: [ 33, 36, 39 ] },
      level1_4: { hp: 17, atk: 4, spd: 6, def: 4, res: 10 },
      level40_4: { hp: [ 36, 39, 42 ], atk: [ 19, 22, 25 ], spd: [ 19, 22, 25 ], def: [ 17, 20, 23 ], res: [ 31, 34, 37 ] }
    }
  },
  {
    name: "Xander",
    title: "Paragon Knight",
    releaseDate: "May 02, 2017",
    colorType: "Red",
    weaponType: "Sword",
    moveType: "Cavalry",
    rarity3: ["pool1"],
    rarity4: ["pool1"],
    ghb: true,
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Xander.png",
      main: "img/heroes-main/Xander.png"
    },
    skills: [
      { name: "Iron Sword", rarity: 3 },
      { name: "Steel Sword", rarity: 3 },
      { name: "Silver Sword", rarity: 4 },
      { name: "Siegfried", rarity: 5 },
      { name: "Rising Light", rarity: 4 },
      { name: "Blazing Light", rarity: 4 },
      { name: "Armored Blow 1", rarity: 3 },
      { name: "Armored Blow 2", rarity: 3 },
      { name: "Armored Blow 3", rarity: 5 },
      { name: "Spur Def 1", rarity: 3 },
      { name: "Spur Def 2", rarity: 4 },
      { name: "Spur Def 3", rarity: 5 }
    ],
    stats: {
      level1: { hp: 20, atk: 8, spd: 5, def: 9, res: 4 },
      level40: { hp: [ 41, 44, 47 ], atk: [ 29, 32, 35 ], spd: [ 21, 24, 28 ], def: [ 34, 37, 40 ], res: [ 13, 17, 20 ] },
      level1_4: { hp: 19, atk: 8, spd: 4, def: 9, res: 3 },
      level40_4: { hp: [ 38, 41, 44 ], atk: [ 27, 30, 33 ], spd: [ 19, 22, 25 ], def: [ 32, 35, 38 ], res: [ 12, 15, 18 ] }
    }
  },
  {
    name: "Xander (Nohrian Summer)",
    shortName: "Xander",
    title: "Student Swimmer",
    releaseDate: "Jul 28, 2017",
    colorType: "Green",
    weaponType: "Axe",
    moveType: "Infantry",
    rarity5: ["pool1"],
    limited: true,
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Xander (Nohrian Summer).png",
      main: "img/heroes-main/Xander (Nohrian Summer).png"
    },
    skills: [
      { name: "Iron Axe", rarity: 5 },
      { name: "Steel Axe", rarity: 5 },
      { name: "Lilith Floatie", rarity: 5 },
      { name: "Lilith Floatie+", rarity: 5 },
      { name: "Glowing Ember", rarity: 5 },
      { name: "Bonfire", rarity: 5 },
      { name: "Fire Boost 1", rarity: 5 },
      { name: "Fire Boost 2", rarity: 5 },
      { name: "Fire Boost 3", rarity: 5 },
      { name: "Infantry Pulse 1", rarity: 5 },
      { name: "Infantry Pulse 2", rarity: 5 },
      { name: "Infantry Pulse 3", rarity: 5 }
    ],
    stats: {
      level1: { hp: 19, atk: 8, spd: 6, def: 8, res: 6 },
      level40: { hp: [ 40, 43, 46 ], atk: [ 29, 32, 35 ], spd: [ 27, 30, 33 ], def: [ 33, 36, 39 ], res: [ 13, 16, 20 ] }
    }
  },
  {
    name: "Xander (Spring Festival)",
    shortName: "Xander",
    title: "Spring Prince",
    releaseDate: "Mar 30, 2017",
    colorType: "Blue",
    weaponType: "Lance",
    moveType: "Cavalry",
    rarity5: ["pool1"],
    limited: true,
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Xander (Spring Festival).png",
      main: "img/heroes-main/Xander (Spring Festival).png"
    },
    skills: [
      { name: "Iron Lance", rarity: 5 },
      { name: "Steel Lance", rarity: 5 },
      { name: "Carrot Lance", rarity: 5 },
      { name: "Carrot Lance+", rarity: 5 },
      { name: "Swap", rarity: 5 },
      { name: "Live for Honor", rarity: 5 },
      { name: "Fortify Def 1", rarity: 5 },
      { name: "Fortify Def 2", rarity: 5 },
      { name: "Fortify Def 3", rarity: 5 }
    ],
    stats: {
      level1: { hp: 18, atk: 6, spd: 6, def: 9, res: 7 },
      level40: { hp: [ 36, 40, 43 ], atk: [ 22, 25, 29 ], spd: [ 24, 28, 31 ], def: [ 32, 35, 38 ], res: [ 23, 26, 30 ] }
    }
  },
  {
    name: "Zelgius",
    title: "Jet-Black General",
    releaseDate: "Jan 12, 2018",
    colorType: "Red",
    weaponType: "Sword",
    moveType: "Armored",
    rarity5: ["pool1"],
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Zelgius.png",
      main: "img/heroes-main/Zelgius.png"
    },
    skills: [
      { name: "Iron Sword", rarity: 5 },
      { name: "Steel Sword", rarity: 5 },
      { name: "Silver Sword", rarity: 5 },
      { name: "Alondite", rarity: 5 },
      { name: "New Moon", rarity: 5 },
      { name: "Luna", rarity: 5 },
      { name: "Black Luna", rarity: 5 },
      { name: "Fierce Stance 1", rarity: 5 },
      { name: "Fierce Stance 2", rarity: 5 },
      { name: "Fierce Stance 3", rarity: 5 },
      { name: "Warp Powder", rarity: 5 },
      { name: "Panic Ploy 1", rarity: 5 },
      { name: "Panic Ploy 2", rarity: 5 },
      { name: "Panic Ploy 3", rarity: 5 }
    ],
    stats: {
      level1: { hp: 22, atk: 10, spd: 7, def: 10, res: 6 },
      level40: { hp: [ 43, 46, 49 ], atk: [ 33, 36, 39 ], spd: [ 30, 33, 36 ], def: [ 35, 38, 41 ], res: [ 18, 21, 24 ] },
    }
  },
  {
    name: "Zephiel",
    title: "The Liberator",
    releaseDate: "Apr 20, 2017",
    colorType: "Red",
    weaponType: "Sword",
    moveType: "Armored",
    rarity3: ["pool1"],
    rarity4: ["pool1"],
    ghb: true,
    assets: {
      portrait: "img/heroes-portrait/75px-Icon_Portrait_Zephiel.png",
      main: "img/heroes-main/Zephiel.png"
    },
    skills: [
      { name: "Iron Sword", rarity: 3 },
      { name: "Steel Sword", rarity: 3 },
      { name: "Silver Sword", rarity: 4 },
      { name: "Eckesachs", rarity: 5 },
      { name: "Retribution", rarity: 4 },
      { name: "Reprisal", rarity: 4 },
      { name: "Life and Death 1", rarity: 3 },
      { name: "Life and Death 2", rarity: 4 },
      { name: "Life and Death 3", rarity: 5 },
      { name: "Wary Fighter 1", rarity: 3 },
      { name: "Wary Fighter 2", rarity: 3 },
      { name: "Wary Fighter 3", rarity: 4 }
    ],
    stats: {
      level1: { hp: 25, atk: 9, spd: 3, def: 12, res: 5 },
      level40: { hp: [52,55,59], atk: [32,35,38], spd: [12,16,19], def: [35,38,41], res: [21,24,28] },
      level1_4: { hp: 24, atk: 9, spd: 2, def: 12, res: 4 },
      level40_4: { hp: [ 49, 52, 56 ], atk: [ 30, 33, 36 ], spd: [ 11, 14, 17 ], def: [ 33, 36, 39 ], res: [ 19, 22, 25 ] }
    }
  }
];

},{}],5:[function(require,module,exports){
module.exports = [
  {
    name: "Armored Blow 1",
    spCost: 50,
    icon: "2-5",
    exclude: [{weaponType: "Staff"}],
    effect: "Grants Def+2 during combat if unit initiates the attack."
  },
  {
    name: "Armored Blow 2",
    spCost: 100,
    icon: "2-6",
    prev: ["Armored Blow 1"],
    exclude: [{weaponType:"Staff"}],
    effect: "Grants Def+4 during combat if unit initiates the attack."
  },
  {
    name: "Armored Blow 3",
    spCost: 200,
    icon: "2-7",
    prev: ["Armored Blow 2"],
    exclude: [{weaponType:"Staff"}],
    last: true,
    effect: "Grants Def+6 during combat if unit initiates the attack."
  },
  {
    name: "Atk/Def 1",
    spCost: 80,
    icon: "14-5",
    stats: {atk: 1, def: 1},
    prev: ["Defense +1", "Attack +1"],
    effect: "Grants Atk/Def+1."
  },
  {
    name: "Atk/Def 2",
    spCost: 160,
    icon: "14-6",
    stats: {atk: 2, def: 2},
    prev: ["Atk/Def 1"],
    last: true,
    effect: "Grants Atk/Def+2."
  },
  {
    name: "Atk/Def Bond 1",
    spCost: 60,
    icon: "32-10",
    effect: "Grants Atk/Def+3 to this unit during combat if unit is adjacent to an ally."
  },
  {
    name: "Atk/Def Bond 2",
    spCost: 120,
    icon: "32-11",
    prev: ["Atk/Def Bond 1"],
    effect: "Grants Atk/Def+4 to this unit during combat if unit is adjacent to an ally."
  },
  {
    name: "Atk/Def Bond 3",
    spCost: 240,
    icon: "32-12",
    prev: ["Atk/Def Bond 2"],
    last: true,
    effect: "Grants Atk/Def+5 to this unit during combat if unit is adjacent to an ally."
  },
  {
    name: "Atk/Res 1",
    spCost: 80,
    icon: "17-9",
    stats: {atk: 1, res: 1},
    prev: ["Attack +1", "Resistance +1"],
    effect: "Grants Atk/Res+1."
  },
  {
    name: "Atk/Res 2",
    spCost: 160,
    icon: "17-10",
    stats: {atk: 1, res: 1},
    prev: ["Atk/Res 1"],
    last: true,
    effect: "Grants Atk/Res+2."
  },
  {
    name: "Atk/Res Bond 1",
    spCost: 60,
    icon: "30-8",
    effect: "Grants Atk/Res+3 to this unit during combat if unit is adjacent to an ally."
  },
  {
    name: "Atk/Res Bond 2",
    spCost: 120,
    icon: "30-9",
    prev: ["Atk/Res Bond 1"],
    effect: "Grants Atk/Res+4 to this unit during combat if unit is adjacent to an ally."
  },
  {
    name: "Atk/Res Bond 3",
    spCost: 240,
    icon: "30-10",
    prev: ["Atk/Res Bond 2"],
    last: true,
    effect: "Grants Atk/Res+5 to this unit during combat if unit is adjacent to an ally."
  },
  {
    name: "Atk/Spd 1",
    spCost: 80,
    icon: "26-11",
    stats: {atk: 1, spd: 1},
    prev: ["Speed +1", "Attack +1"],
    effect: "Grants Atk/Spd+1."
  },
  {
    name: "Atk/Spd 2",
    spCost: 160,
    icon: "26-12",
    stats: {atk: 2, spd: 2},
    prev: ["Atk/Spd 1"],
    last: true,
    effect: "Grants Atk/Spd+2."
  },
  {
    name: "Atk/Spd Bond 1",
    spCost: 60,
    icon: "37-0",
    effect: "Grants Atk/Spd+3 to this unit during combat if unit is adjacent to an ally."
  },
  {
    name: "Atk/Spd Bond 2",
    spCost: 120,
    icon: "37-1",
    prev: ["Atk/Spd Bond 1"],
    effect: "Grants Atk/Spd+4 to this unit during combat if unit is adjacent to an ally."
  },
  {
    name: "Atk/Spd Bond 3",
    spCost: 240,
    icon: "37-2",
    prev: ["Atk/Spd Bond 2"],
    last: true,
    effect: "Grants Atk/Spd+5 to this unit during combat if unit is adjacent to an ally."
  },
  {
    name: "Attack +1",
    spCost: 30,
    icon: "0-7",
    stats: {atk: 1},
    effect: "Grants Atk+1."
  },
  {
    name: "Attack +2",
    spCost: 60,
    icon: "0-8",
    stats: {atk: 2},
    prev: ["Attack +1"],
    effect: "Grants Atk+2."
  },
  {
    name: "Attack +3",
    spCost: 120,
    icon: "0-9",
    stats: {atk: 3},
    prev: ["Attack +2"],
    last: true,
    effect: "Grants Atk+3."
  },
  {
    name: "Bracing Blow 1",
    spCost: 120,
    icon: "30-3",
    prev: ["Armored Blow 1", "Warding Blow 1"],
    exclude: [{weaponType:"Staff"}],
    effect: "Grants Def/Res+2 during combat if unit initiates combat."
  },
  {
    name: "Bracing Blow 2",
    spCost: 240,
    icon: "30-4",
    prev: ["Bracing Blow 1"],
    exclude: [{weaponType:"Staff"}],
    last: true,
    effect: "Grants Def/Res+4 during combat if unit initiates combat."
  },
  {
    name: "Brazen Atk/Def 1",
    spCost: 60,
    icon: "33-10",
    effect: "If unit's HP ≤ 80% at the start of combat, grants Atk/Def+3 during combat."
  },
  {
    name: "Brazen Atk/Def 2",
    spCost: 120,
    icon: "33-11",
    prev: ["Brazen Atk/Def 1"],
    effect: "If unit's HP ≤ 80% at the start of combat, grants Atk/Def+5 during combat."
  },
  {
    name: "Brazen Atk/Def 3",
    spCost: 240,
    icon: "33-12",
    prev: ["Brazen Atk/Def 2"],
    last: true,
    effect: "If unit's HP ≤ 80% at the start of combat, grants Atk/Def+7 during combat."
  },
  {
    name: "Brazen Atk/Spd 1",
    spCost: 60,
    icon: "33-7",
    effect: "If unit's HP ≤ 80% at the start of combat, grants Atk/Spd+3 during combat."
  },
  {
    name: "Brazen Atk/Spd 2",
    spCost: 120,
    icon: "33-8",
    prev: ["Brazen Atk/Spd 1"],
    effect: "If unit's HP ≤ 80% at the start of combat, grants Atk/Spd+5 during combat."
  },
  {
    name: "Brazen Atk/Spd 3",
    spCost: 240,
    icon: "33-9",
    prev: ["Brazen Atk/Spd 2"],
    last: true,
    effect: "If unit's HP ≤ 80% at the start of combat, grants Atk/Spd+7 during combat."
  },
  {
    name: "Brazen Def/Res 1",
    spCost: 60,
    icon: "37-7",
    effect: "If unit's HP ≤ 80% at the start of combat, grants Def/Res+3 during combat."
  },
  {
    name: "Brazen Def/Res 2",
    spCost: 120,
    icon: "37-8",
    prev: ["Brazen Def/Res 1"],
    effect: "If unit's HP ≤ 80% at the start of combat, grants Def/Res+5 during combat."
  },
  {
    name: "Brazen Def/Res 3",
    spCost: 240,
    icon: "37-9",
    prev: ["Brazen Def/Res 2"],
    last: true,
    effect: "If unit's HP ≤ 80% at the start of combat, grants Def/Res+7 during combat."
  },
  {
    name: "Close Counter",
    spCost: 300,
    icon: "4-0",
    include: [{weaponType:"Staff"},{weaponType:"Bow"},{weaponType: "Dagger"},{weaponType: "Tome"}],
    last: true,
    effect: "Enables unit to counterattack regardless of distance to attacker."
  },
  {
    name: "Close Def 1",
    spCost: 60,
    icon: "19-10",
    effect: "If unit is attacked by foe using sword, axe, lance, or dragonstone, unit receives Def/Res+2 during combat."
  },
  {
    name: "Close Def 2",
    spCost: 120,
    icon: "19-11",
    prev: ["Close Def 1"],
    effect: "If unit is attacked by foe using sword, axe, lance, or dragonstone, unit receives Def/Res+4 during combat."
  },
  {
    name: "Close Def 3",
    spCost: 240,
    icon: "19-12",
    prev: ["Close Def 2"],
    last: true,
    effect: "If unit is attacked by foe using sword, axe, lance, or dragonstone, unit receives Def/Res+6 during combat."
  },
  {
    name: "Darting Blow 1",
    spCost: 50,
    icon: "2-2",
    exclude: [{weaponType:"Staff"}],
    effect: "Grants Spd+2 during combat if unit initiates the attack."
  },
  {
    name: "Darting Blow 2",
    spCost: 100,
    icon: "2-3",
    exclude: [{weaponType:"Staff"}],
    prev: ["Darting Blow 1"],
    effect: "Grants Spd+4 during combat if unit initiates the attack."
  },
  {
    name: "Darting Blow 3",
    spCost: 200,
    icon: "2-4",
    exclude: [{weaponType:"Staff"}],
    prev: ["Darting Blow 2"],
    last: true,
    effect: "Grants Spd+6 during combat if unit initiates the attack."
  },
  {
    name: "Death Blow 1",
    spCost: 50,
    icon: "1-12",
    exclude: [{weaponType:"Staff"}],
    effect: "Grants Atk+2 during combat if unit initiates the attack."
  },
  {
    name: "Death Blow 2",
    spCost: 100,
    icon: "2-0",
    prev: ["Death Blow 1"],
    exclude: [{weaponType:"Staff"}],
    effect: "Grants Atk+4 during combat if unit initiates the attack."
  },
  {
    name: "Death Blow 3",
    spCost: 200,
    icon: "2-1",
    prev: ["Death Blow 2"],
    exclude: [{weaponType:"Staff"}],
    last: true,
    effect: "Grants Atk+6 during combat if unit initiates the attack."
  },
  {
    name: "Defense +1",
    spCost: 30,
    icon: "1-0",
    stats: {def: 1},
    effect: "Grants Def+1."
  },
  {
    name: "Defense +2",
    spCost: 60,
    icon: "1-1",
    stats: {def: 2},
    prev: ["Defense +1"],
    effect: "Grants Def+2."
  },
  {
    name: "Defense +3",
    spCost: 120,
    icon: "1-2",
    stats: {def: 3},
    prev: ["Defense +2"],
    last: true,
    effect: "Grants Def+3."
  },
  {
    name: "Defiant Atk 1",
    spCost: 40,
    icon: "2-11",
    effect: "Grants Atk+3 at start of turn if unit's HP ≤ 50%."
  },
  {
    name: "Defiant Atk 2",
    spCost: 80,
    icon: "2-12",
    prev: ["Defiant Atk 1"],
    effect: "Grants Atk+5 at start of turn if unit's HP ≤ 50%."
  },
  {
    name: "Defiant Atk 3",
    spCost: 160,
    icon: "3-0",
    prev: ["Defiant Atk 2"],
    last: true,
    effect: "Grants Atk+7 at start of turn if unit's HP ≤ 50%."
  },
  {
    name: "Defiant Def 1",
    spCost: 40,
    icon: "3-4",
    effect: "Grants Def+3 at start of turn if unit's HP ≤ 50%."
  },
  {
    name: "Defiant Def 2",
    spCost: 80,
    icon: "3-5",
    prev: ["Defiant Def 1"],
    effect: "Grants Def+5 at start of turn if unit's HP ≤ 50%."
  },
  {
    name: "Defiant Def 3",
    spCost: 160,
    icon: "3-6",
    prev: ["Defiant Def 2"],
    last: true,
    effect: "Grants Def+7 at start of turn if unit's HP ≤ 50%."
  },
  {
    name: "Defiant Res 1",
    spCost: 40,
    icon: "3-7",
    effect: "Grants Res+3 at start of turn if unit's HP ≤ 50%."
  },
  {
    name: "Defiant Res 2",
    spCost: 80,
    icon: "3-8",
    prev: ["Defiant Res 1"],
    effect: "Grants Res+5 at start of turn if unit's HP ≤ 50%."
  },
  {
    name: "Defiant Res 3",
    spCost: 160,
    icon: "3-9",
    prev: ["Defiant Res 2"],
    last: true,
    effect: "Grants Res+7 at start of turn if unit's HP ≤ 50%."
  },
  {
    name: "Defiant Spd 1",
    spCost: 40,
    icon: "3-1",
    effect: "Grants Spd+3 at start of turn if unit's HP ≤ 50%."
  },
  {
    name: "Defiant Spd 2",
    spCost: 80,
    icon: "3-2",
    prev: ["Defiant Spd 1"],
    effect: "Grants Spd+5 at start of turn if unit's HP ≤ 50%."
  },
  {
    name: "Defiant Spd 3",
    spCost: 160,
    icon: "3-3",
    prev: ["Defiant Spd 2"],
    last: true,
    effect: "Grants Spd+7 at start of turn if unit's HP ≤ 50%."
  },
  {
    name: "Distant Counter",
    spCost: 300,
    icon: "4-1",
    include: [{weaponType:"Sword"}, {weaponType:"Axe"}, {weaponType:"Lance"}, {weaponType:"Breath"}],
    last: true,
    effect: "Enables unit to counterattack regardless of distance to attacker."
  },
  {
    name: "Distant Def 1",
    spCost: 60,
    icon: "16-10",
    effect: "If unit is attacked by foe using bow, daggers, magic, or staff, unit receives Def/Res+2 during combat."
  },
  {
    name: "Distant Def 2",
    spCost: 120,
    icon: "16-11",
    prev: ["Distant Def 1"],
    effect: "If unit is attacked by foe using bow, daggers, magic, or staff, unit receives Def/Res+4 during combat."
  },
  {
    name: "Distant Def 3",
    spCost: 240,
    icon: "16-12",
    prev: ["Distant Def 2"],
    last: true,
    effect: "If unit is attacked by foe using bow, daggers, magic, or staff, unit receives Def/Res+6 during combat."
  },
  {
    name: "Earth Boost 1",
    spCost: 50,
    icon: "17-0",
    effect: "If unit has at least 3 more HP than enemy at the start of combat, unit receives Def+2 during combat."
  },
  {
    name: "Earth Boost 2",
    spCost: 100,
    icon: "17-1",
    prev: ["Earth Boost 1"],
    effect: "If unit has at least 3 more HP than enemy at the start of combat, unit receives Def+4 during combat."
  },
  {
    name: "Earth Boost 3",
    spCost: 200,
    icon: "17-2",
    prev: ["Earth Boost 2"],
    last: true,
    effect: "If unit has at least 3 more HP than enemy at the start of combat, unit receives Def+6 during combat."
  },
  {
    name: "Fierce Stance 1",
    spCost: 50,
    icon: "31-3",
    exclude: [{weaponType:"Staff"}],
    effect: "Grants Atk+2 during combat when this unit is attacked."
  },
  {
    name: "Fierce Stance 2",
    spCost: 100,
    icon: "31-4",
    prev: ["Fierce Stance 1"],
    exclude: [{weaponType:"Staff"}],
    effect: "Grants Atk+4 during combat when this unit is attacked."
  },
  {
    name: "Fierce Stance 3",
    spCost: 200,
    icon: "31-5",
    prev: ["Fierce Stance 2"],
    exclude: [{weaponType:"Staff"}],
    last: true,
    effect: "Grants Atk+6 during combat when this unit is attacked."
  },
  {
    name: "Fire Boost 1",
    spCost: 50,
    icon: "18-7",
    effect: "If unit has at least 3 more HP than enemy at the start of combat, unit receives Atk+2 during combat."
  },
  {
    name: "Fire Boost 2",
    spCost: 100,
    icon: "18-8",
    prev: ["Fire Boost 1"],
    effect: "If unit has at least 3 more HP than enemy at the start of combat, unit receives Atk+4 during combat."
  },
  {
    name: "Fire Boost 3",
    spCost: 200,
    icon: "18-9",
    prev: ["Fire Boost 2"],
    last: true,
    effect: "If unit has at least 3 more HP than enemy at the start of combat, unit receives Atk+6 during combat."
  },
  {
    name: "Flashing Blade 1",
    spCost: 60,
    icon: "31-6",
    include: [{moveType:"Infantry"}, {moveType:"Armored"}],
    exclude: [{weaponType:"Staff"}],
    effect: "If unit's Spd - foe's Spd ≥ 5, unit gains Special cooldown charge +1 per attack. (If using other similar skill, only highest value applied.)"
  },
  {
    name: "Flashing Blade 2",
    spCost: 120,
    icon: "31-7",
    prev: ["Flashing Blade 1"],
    include: [{moveType:"Infantry"}, {moveType:"Armored"}],
    exclude: [{weaponType:"Staff"}],
    effect: "If unit's Spd - foe's Spd ≥ 3, unit gains Special cooldown charge +1 per attack. (If using other similar skill, only highest value applied.)"
  },
  {
    name: "Flashing Blade 3",
    spCost: 240,
    icon: "31-8",
    prev: ["Flashing Blade 2"],
    include: [{moveType:"Infantry"}, {moveType:"Armored"}],
    exclude: [{weaponType:"Staff"}],
    last: true,
    effect: "If unit's Spd - foe's Spd ≥ 1, unit gains Special cooldown charge +1 per attack. (If using other similar skill, only highest value applied.)"
  },
  {
    name: "Fortress Def 1",
    spCost: 40,
    icon: "15-1",
    stats: {atk: -3, def: 3},
    effect: "Grants Def+3. Inflicts Atk-3."
  },
  {
    name: "Fortress Def 2",
    spCost: 80,
    icon: "15-2",
    stats: {atk: -3, def: 4},
    prev: ["Fortress Def 1"],
    effect: "Grants Def+4. Inflicts Atk-3."
  },
  {
    name: "Fortress Def 3",
    spCost: 160,
    icon: "15-3",
    stats: {atk: -3, def: 5},
    prev: ["Fortress Def 2"],
    last: true,
    effect: "Grants Def+5. Inflicts Atk-3."
  },
  {
    name: "Fortress Res 1",
    spCost: 40,
    icon: "25-0",
    stats: {atk: -3, res: 3},
    effect: "Grants Res+3. Inflicts Atk-3."
  },
  {
    name: "Fortress Res 2",
    spCost: 80,
    icon: "25-1",
    prev: ["Fortress Res 1"],
    stats: {atk: -3, res: 4},
    effect: "Grants Res+4. Inflicts Atk-3."
  },
  {
    name: "Fortress Res 3",
    spCost: 160,
    icon: "25-2",
    prev: ["Fortress Res 2"],
    stats: {atk: -3, res: 5},
    last: true,
    effect: "Grants Res+5. Inflicts Atk-3."
  },
  {
    name: "Fury 1",
    spCost: 50,
    icon: "1-6",
    stats: {atk: 1, spd: 1, def: 1, res: 1},
    exclude: [{weaponType:"Staff"}],
    effect: "Grants Atk/Spd/Def/Res+1. Unit takes 2 damage after combat."
  },
  {
    name: "Fury 2",
    spCost: 100,
    icon: "1-7",
    stats: {atk: 2, spd: 2, def: 2, res: 2},
    prev: ["Fury 1"],
    exclude: [{weaponType:"Staff"}],
    effect: "Grants Atk/Spd/Def/Res+2. Unit takes 4 damage after combat."
  },
  {
    name: "Fury 3",
    spCost: 200,
    icon: "1-8",
    stats: {atk: 3, spd: 3, def: 3, res: 3},
    prev: ["Fury 2"],
    exclude: [{weaponType:"Staff"}],
    last: true,
    effect: "Grants Atk/Spd/Def/Res+3. Unit takes 6 damage after combat."
  },
  {
    name: "Grani's Shield",
    spCost: 200,
    icon: "4-2",
    include: [{moveType:"Cavalry"}],
    last: true,
    effect: "Neutralizes \"effective against\" bonuses."
  },
  {
    name: "HP +3",
    spCost: 40,
    icon: "0-4",
    stats: {hp: 3},
    effect: "Grants +3 to max HP."
  },
  {
    name: "HP +4",
    spCost: 80,
    icon: "0-5",
    stats: {hp: 4},
    prev: ["HP +3"],
    effect: "Grants +4 to max HP."
  },
  {
    name: "HP +5",
    spCost: 160,
    icon: "0-6",
    stats: {hp: 5},
    prev: ["HP +4"],
    last: true,
    effect: "Grants +5 to max HP."
  },
  {
    name: "HP/Atk 1",
    spCost: 100,
    icon: "36-11",
    stats: {hp: 3, def: 1},
    prev: ["Attack +1", "HP +3"],
    effect: "Grants HP+3, Atk+1."
  },
  {
    name: "HP/Atk 2",
    spCost: 200,
    icon: "36-12",
    stats: {hp: 4, def: 2},
    prev: ["HP/Atk 1"],
    last: true,
    effect: "Grants HP+4, Atk+2."
  },
  {
    name: "HP/Def 1",
    spCost: 100,
    icon: "19-8",
    stats: {hp: 3, def: 1},
    prev: ["HP +3", "Defense +1"],
    effect: "Grants HP+3, Def+1."
  },
  {
    name: "HP/Def 2",
    spCost: 200,
    icon: "19-9",
    stats: {hp: 4, def: 2},
    prev: ["HP/Def 1"],
    last: true,
    effect: "Grants HP+4, Def+2."
  },
  {
    name: "HP/Res 1",
    spCost: 100,
    icon: "31-1",
    stats: {hp: 3, res: 1},
    prev: ["Resistance +1", "HP +3"],
    effect: "Grants HP+3, Res+1."
  },
  {
    name: "HP/Res 2",
    spCost: 200,
    icon: "31-2",
    stats: {hp: 4, res: 2},
    prev: ["HP/Res 1"],
    last: true,
    effect: "Grants HP+4, Res+2."
  },
  {
    name: "HP/Spd 1",
    spCost: 100,
    icon: "22-11",
    stats: {hp: 3, spd: 1},
    prev: ["HP +3", "Speed +1"],
    effect: "Grants HP+3, Spd+1."
  },
  {
    name: "HP/Spd 2",
    spCost: 200,
    icon: "22-12",
    stats: {hp: 4, spd: 2},
    prev: ["HP/Spd 1"],
    last: true,
    effect: "Grants HP+4, Spd+2."
  },
  {
    name: "Heavy Blade 1",
    spCost: 60,
    icon: "15-11",
    exclude: [{weaponType:"Staff"}],
    effect: "If unit's Atk - foe's Atk ≥ 5, unit gains Special cooldown charge +1 per attack. (If using other similar skill, only highest value applied.)"
  },
  {
    name: "Heavy Blade 2",
    spCost: 120,
    icon: "15-12",
    prev: ["Heavy Blade 1"],
    exclude: [{weaponType:"Staff"}],
    effect: "If unit's Atk - foe's Atk ≥ 3, unit gains Special cooldown charge +1 per attack. (If using other similar skill, only highest value applied.)"
  },
  {
    name: "Heavy Blade 3",
    spCost: 240,
    icon: "16-0",
    prev: ["Heavy Blade 2"],
    exclude: [{weaponType:"Staff"}],
    last: true,
    effect: "If unit's Atk - foe's Atk ≥ 1, unit gains Special cooldown charge +1 per attack. (If using other similar skill, only highest value applied.)"
  },
  {
    name: "Iote's Shield",
    spCost: 200,
    icon: "4-4",
    include: [{moveType:"Flying"}],
    last: true,
    effect: "Neutralizes \"effective against\" bonuses.",
  },
  {
    name: "Life and Death 1",
    spCost: 50,
    icon: "1-9",
    stats: {atk: 3, spd: 3, def: -3, res: -3},
    exclude: [{weaponType:"Staff"}],
    effect: "Grants Atk/Spd+3. Inflicts Def/Res-3."
  },
  {
    name: "Life and Death 2",
    spCost: 100,
    icon: "1-10",
    stats: {atk: 4, spd: 4, def: -4, res: -4},
    prev: ["Life and Death 1"],
    exclude: [{weaponType:"Staff"}],
    effect: "Grants Atk/Spd+4. Inflicts Def/Res-4."
  },
  {
    name: "Life and Death 3",
    spCost: 200,
    icon: "1-11",
    stats: {atk: 5, spd: 5, def: -5, res: -5},
    prev: ["Life and Death 2"],
    exclude: [{weaponType:"Staff"}],
    last: true,
    effect: "Grants Atk/Spd+5. Inflicts Def/Res-5."
  },
  {
    name: "Mirror Stance 1",
    spCost: 100,
    icon: "38-7",
    prev: ["Warding Stance 1"],
    effect: "Grants Atk/Res+2 during combat when this unit is attacked."
  },
  {
    name: "Mirror Stance 2",
    spCost: 200,
    icon: "38-8",
    prev: ["Mirror Stance 1"],
    last: true,
    effect: "Grants Atk/Res+4 during combat when this unit is attacked."
  },
  {
    name: "Mirror Strike 1",
    spCost: 120,
    icon: "23-0",
    prev: ["Warding Blow 1", "Death Blow 1"],
    exclude: [{weaponType:"Staff"}],
    effect: "Grants Atk/Res+2 during combat if unit initiates combat."
  },
  {
    name: "Mirror Strike 2",
    spCost: 240,
    icon: "23-1",
    prev: ["Mirror Strike 1"],
    exclude: [{weaponType:"Staff"}],
    last: true,
    effect: "Grants Atk/Res+4 during combat if unit initiates combat."
  },
  {
    name: "Resistance +1",
    spCost: 30,
    icon: "1-3",
    stats: {res: 1},
    effect: "Grants Res+1."
  },
  {
    name: "Resistance +2",
    spCost: 60,
    icon: "1-4",
    stats: {res: 2},
    prev: ["Resistance +1"],
    effect: "Grants Res+2."
  },
  {
    name: "Resistance +3",
    spCost: 120,
    icon: "1-5",
    stats: {res: 3},
    prev: ["Resistance +2"],
    last: true,
    effect: "Grants Res+3."
  },
  {
    name: "Spd/Def 1",
    spCost: 80,
    icon: "24-11",
    stats: {spd: 1, def: 1},
    prev: ["Speed +1", "Defense +1"],
    effect: "Grants Spd/Def+1."
  },
  {
    name: "Spd/Def 2",
    spCost: 160,
    icon: "24-12",
    stats: {spd: 2, def: 2},
    prev: ["Spd/Def 1"],
    last: true,
    effect: "Grants Spd/Def+2."
  },
  {
    name: "Spd/Def Bond 1",
    spCost: 60,
    icon: "34-9",
    effect: "Grants Spd/Def+3 to this unit during combat if unit is adjacent to an ally."
  },
  {
    name: "Spd/Def Bond 2",
    spCost: 120,
    icon: "34-10",
    prev: ["Spd/Def Bond 1"],
    effect: "Grants Spd/Def+4 to this unit during combat if unit is adjacent to an ally."
  },
  {
    name: "Spd/Def Bond 3",
    spCost: 240,
    icon: "34-11",
    prev: ["Spd/Def Bond 2"],
    last: true,
    effect: "Grants Spd/Def+5 to this unit during combat if unit is adjacent to an ally."
  },
  {
    name: "Spd/Res 1",
    spCost: 80,
    icon: "23-11",
    stats: {spd: 1, res: 1},
    prev: ["Speed +1", "Resistance + 1"],
    effect: "Grants Spd/Res+1."
  },
  {
    name: "Spd/Res 2",
    spCost: 160,
    icon: "23-12",
    prev: ["Spd/Res 1"],
    stats: {spd: 2, res: 2},
    last: true,
    effect: "Grants Spd/Res+2."
  },
  {
    name: "Speed +1",
    spCost: 30,
    icon: "0-10",
    stats: {spd: 1},
    effect: "Grants Spd+1."
  },
  {
    name: "Speed +2",
    spCost: 60,
    icon: "0-11",
    stats: {spd: 2},
    prev: ["Speed +1"],
    effect: "Grants Spd+2."
  },
  {
    name: "Speed +3",
    spCost: 120,
    icon: "0-12",
    stats: {spd: 3},
    prev: ["Speed +2"],
    last: true,
    effect: "Grants Spd+3."
  },
  {
    name: "Steady Blow 1",
    spCost: 120,
    icon: "26-2",
    prev: ["Armored Blow 1", "Darting Blow 1"],
    exclude: [{weaponType:"Staff"}],
    effect: "If unit initiates combat, unit granted Spd/Def+2 during battle."
  },
  {
    name: "Steady Blow 2",
    spCost: 240,
    icon: "26-3",
    exclude: [{weaponType:"Staff"}],
    prev: ["Steady Blow 1"],
    last: true,
    effect: "If unit initiates combat, unit granted Spd/Def+4 during battle."
  },
  {
    name: "Steady Breath",
    spCost: 240,
    icon: "26-1",
    prev: ["Steady Stance 2"],
    include: [{weaponType:"Sword"}, {weaponType:"Axe"}, {weaponType:"Lance"}, {weaponType:"Breath"}],
    exclude: [{moveType:"Flying"}, {moveType:"Cavalry"}],
    last: true,
    effect: "If attacked, unit granted Def+4 during combat; also gains Special cooldown charge +1. (If using other similar skill, only highest value applied.)"
  },
  {
    name: "Steady Stance 1",
    spCost: 50,
    icon: "25-11",
    effect: "Grants Def+2 during combat when this unit is attacked."
  },
  {
    name: "Steady Stance 2",
    spCost: 100,
    icon: "25-12",
    prev: ["Steady Stance 1"],
    effect: "Grants Def+4 during combat when this unit is attacked."
  },
  {
    name: "Steady Stance 3",
    spCost: 200,
    icon: "26-0",
    prev: ["Steady Stance 2"],
    last: true,
    effect: "Grants Def+6 during combat when this unit is attacked."
  },
  {
    name: "Sturdy Blow 1",
    spCost: 120,
    icon: "18-5",
    prev: ["Death Blow 1", "Armored Blow 1"],
    exclude: [{weaponType:"Staff"}],
    effect: "Grants Atk/Def+2 during combat if unit initiates combat."
  },
  {
    name: "Sturdy Blow 2",
    spCost: 240,
    icon: "18-6",
    prev: ["Sturdy Blow 1"],
    exclude: [{weaponType:"Staff"}],
    last: true,
    effect: "Grants Atk/Def+4 during combat if unit initiates combat."
  },
  {
    name: "Sturdy Stance 1",
    spCost: 100,
    icon: "38-1",
    prev: ["Fierce Stance 1"],
    effect: "Grants Atk/Def+2 during combat when this unit is attacked."
  },
  {
    name: "Sturdy Stance 2",
    spCost: 200,
    icon: "38-2",
    prev: ["Sturdy Stance 1"],
    last: true,
    effect: "Grants Atk/Def+4 during combat when this unit is attacked."
  },
  {
    name: "Svalinn Shield",
    spCost: 200,
    icon: "4-3",
    include: [{moveType:"Armored"}],
    last: true,
    effect: "Neutralizes \"effective against\" bonuses."
  },
  {
    name: "Swift Sparrow 1",
    spCost: 120,
    icon: "14-7",
    prev: ["Death Blow 1", "Darting Blow 1"],
    exclude: [{weaponType:"Staff"}],
    effect: "If unit initiates combat, unit granted Atk/Spd+2 during battle."
  },
  {
    name: "Swift Sparrow 2",
    spCost: 240,
    icon: "14-8",
    prev: ["Swift Sparrow 1"],
    exclude: [{weaponType:"Staff"}],
    last: true,
    effect: "If unit initiates combat, unit granted Atk/Spd+4 during battle."
  },
  {
    name: "Swift Strike 1",
    spCost: 120,
    icon: "24-0",
    prev: ["Darting Blow 1", "Warding Blow 1"],
    exclude: [{weaponType:"Staff"}],
    effect: "If unit initiates combat, unit granted Spd/Res+2 during battle."
  },
  {
    name: "Swift Strike 2",
    spCost: 240,
    icon: "24-1",
    prev: ["Swift Strike 1"],
    exclude: [{weaponType:"Staff"}],
    last: true,
    effect: "If unit initiates combat, unit granted Spd/Res+4 during battle."
  },
  {
    name: "Triangle Adept 1",
    spCost: 50,
    icon: "3-10",
    exclude: [{"colorType":"Neutral"}],
    effect: "Gives Atk+10% if weapon-triangle advantage, Atk-10% if disadvantage."
  },
  {
    name: "Triangle Adept 2",
    spCost: 100,
    icon: "3-11",
    prev: ["Triangle Adept 1"],
    exclude: [{"colorType":"Neutral"}],
    effect: "Gives Atk+15% if weapon-triangle advantage, Atk-15% if disadvantage."
  },
  {
    name: "Triangle Adept 3",
    spCost: 200,
    icon: "3-12",
    prev: ["Triangle Adept 2"],
    exclude: [{"colorType":"Neutral"}],
    last: true,
    effect: "Gives Atk+20% if weapon-triangle advantage, Atk-20% if disadvantage."
  },
  {
    name: "Warding Blow 1",
    spCost: 50,
    icon: "2-8",
    exclude: [{weaponType:"Staff"}],
    effect: "Grants Res+2 during combat if unit initiates attack."
  },
  {
    name: "Warding Blow 2",
    spCost: 100,
    icon: "2-9",
    prev: ["Warding Blow 1"],
    exclude: [{weaponType:"Staff"}],
    effect: "Grants Res+4 during combat if unit initiates attack."
  },
  {
    name: "Warding Blow 3",
    spCost: 200,
    icon: "2-10",
    prev: ["Warding Blow 2"],
    exclude: [{weaponType:"Staff"}],
    last: true,
    effect: "Grants Res+6 during combat if unit initiates attack."
  },
  {
    name: "Warding Breath",
    spCost: 240,
    icon: "36-2",
    prev: ["Warding Stance 2"],
    include: [{weaponType:"Sword"}, {weaponType:"Axe"}, {weaponType:"Lance"}, {weaponType:"Breath"}],
    exclude: [{moveType:"Flying"}, {moveType:"Cavalry"}],
    last: true,
    effect: "Grants Res+4 during combat if unit is attacked. Also grants Special cooldown charge +1 per attack. (Does not stack. Only highest value applied.)"
  },
  {
    name: "Warding Stance 1",
    spCost: 50,
    icon: "30-5",
    effect: "Grants Res+2 during combat when this unit is attacked."
  },
  {
    name: "Warding Stance 2",
    spCost: 100,
    icon: "30-6",
    prev: ["Warding Stance 1"],
    effect: "Grants Res+4 during combat when this unit is attacked."
  },
  {
    name: "Warding Stance 3",
    spCost: 200,
    icon: "30-7",
    prev: ["Warding Stance 2"],
    last: true,
    effect: "Grants Res+6 during combat when this unit is attacked."
  },
  {
    name: "Water Boost 1",
    spCost: 50,
    icon: "23-2",
    effect: "If unit has at least 3 more HP than enemy at the start of combat, unit receives Res+2 during combat."
  },
  {
    name: "Water Boost 2",
    spCost: 100,
    icon: "23-3",
    prev: ["Water Boost 1"],
    effect: "If unit has at least 3 more HP than enemy at the start of combat, unit receives Res+4 during combat."
  },
  {
    name: "Water Boost 3",
    spCost: 200,
    icon: "23-4",
    prev: ["Water Boost 2"],
    last: true,
    effect: "If unit has at least 3 more HP than enemy at the start of combat, unit receives Res+6 during combat."
  },
  {
    name: "Wind Boost 1",
    spCost: 50,
    icon: "17-11",
    effect: "If unit has at least 3 more HP than enemy at the start of combat, unit receives Spd+2 during combat."
  },
  {
    name: "Wind Boost 2",
    spCost: 100,
    icon: "17-12",
    prev: ["Wind Boost 1"],
    effect: "If unit has at least 3 more HP than enemy at the start of combat, unit receives Spd+4 during combat."
  },
  {
    name: "Wind Boost 3",
    spCost: 200,
    icon: "18-0",
    prev: ["Wind Boost 2"],
    last: true,
    effect: "If unit has at least 3 more HP than enemy at the start of combat, unit receives Spd+6 during combat."
  }
];

},{}],6:[function(require,module,exports){
let skills = {
  weapons: require('./skill-weapon-data.js'),
  assists: require('./skill-assist-data.js'),
  specials: require('./skill-special-data.js'),
  skillA: require('./skill-a-data.js'),
  skillB: require('./skill-b-data.js'),
  skillC: require('./skill-c-data.js'),
  seals: require('./skill-seal-data.js')
};
let refine = require('./skill-refine-data.js');
let refineCost = require('./skill-refine-cost-data.js');
let skillMap = getSkillMap();

exports.getSkills = function() {
  return skills;
};

exports.getWeapons = function(hero, filterExclusives = true) {
  let results = [];
  for (let i = 0; i < skills.weapons.length; i++) {
    if (filterExclusives && skills.weapons[i].exclusive && !skills.weapons[i].exclusive.includes(hero.name)) {
      continue;
    }
    if (hero.weaponType === skills.weapons[i].weaponType) {
      if (hero.weaponType === 'Breath' || hero.colorType === skills.weapons[i].colorType) {
        results.push(skills.weapons[i]);
      }
    }
  }
  return results;
};

exports.getAssists = function(hero, nameExclusive = true) {
  return getSkills(hero, nameExclusive, skills.assists);
};

exports.getSpecials = function(hero, nameExclusive = true) {
  return getSkills(hero, nameExclusive, skills.specials);
};

exports.getSkillA = function(hero, nameExclusive = true) {
  return getSkills(hero, nameExclusive, skills.skillA);
};

exports.getSkillB = function(hero, nameExclusive = true) {
  return getSkills(hero, nameExclusive, skills.skillB);
};

exports.getSkillC = function(hero, nameExclusive = true) {
  return getSkills(hero, nameExclusive, skills.skillC);
};

exports.getSeals = function(hero, nameExclusive = true) {
  return getSkills(hero, nameExclusive, skills.seals);
};

exports.getRefinery = function(weapon, heroName) {
  if (refine[weapon]) {
    return refine[weapon].filter(skill => {
      if (skill.exclusive && skill.exclusive.length) {
        return skill.exclusive.includes(heroName);
      } else {
        return true;
      }
    });
  } else {
    return null;
  }
};

exports.getRefineryCost = function(index) {
  return refineCost[index];
};

exports.getPrerequisites = function(skillName) {
  return getPrerequisites_(skillName);
};

function getSkills(hero, nameExclusive, skillsList) {
  let results = [];
  for (let i = 0; i < skillsList.length; i++) {
    if (includeSkill(hero, nameExclusive, skillsList[i])) {
      results.push(skillsList[i]);
    }
  }
  return results;
};

function includeSkill(hero, nameExclusive, skill) {
  let hit;
  if (skill.exclude) {
    for (let i = 0; i < skill.exclude.length; i++) {
      hit = true;
      for (let cond in skill.exclude[i]) {
        if (skill.exclude[i][cond] !== hero[cond]) {
          hit = false;
        }
      }
      if (hit) {
        return false;
      }
    }
  }
  if (skill.include) {
    let totalHits = skill.include.length;
    for (let i = 0; i < skill.include.length; i++) {
      hit = true;
      for (let cond in skill.include[i]) {
        if (!nameExclusive && cond === 'name') {
          continue;
        }
        if (skill.include[i][cond] !== hero[cond]) {
          hit = false;
        }
      }
      if (!hit) {
        totalHits--;
      }
    }
    if (totalHits === 0) {
      return false;
    }
  }
  return true;
};

function getSkillMap() {
  let map = new Map();
  for (skill in skills) {
    if (skill === 'seals') {
      continue;
    }

    for (let i = 0; i < skills[skill].length; i++) {
      map.set(skills[skill][i].name, {
        name: skills[skill][i].name,
        prev: skills[skill][i].prev
      });
    }
  }
  return map;
}

function getPrerequisites_(skillName, results = []) {
  let skill = skillMap.get(skillName);

  results.push(skillName);
  if (skill && skill.prev && skill.prev.length) {
    return getPrerequisites_(skill.prev[0], results);
  } else {
    return results;
  }
}

},{"./skill-a-data.js":5,"./skill-assist-data.js":7,"./skill-b-data.js":8,"./skill-c-data.js":9,"./skill-refine-cost-data.js":10,"./skill-refine-data.js":11,"./skill-seal-data.js":12,"./skill-special-data.js":13,"./skill-weapon-data.js":14}],7:[function(require,module,exports){
module.exports = [
  {
    name: "Ardent Sacrifice",
    range: 1,
    spCost: 150,
    exclude: [{weaponType: "Staff"}],
    last: true,
    effect: "Heals adjacent ally 10 HP. Unit loses 10 HP (but cannot reach 0 this way)."
  },
  {
    name: "Dance",
    range: 1,
    spCost: 150,
    include: [{name: "Olivia"},{name: "Ninian"},{name: "Olivia (Performing Arts)"},{name: "Inigo (Performing Arts)"}],
    last: true,
    effect: "Enables target to take another action. Cannot be used on units with Sing or Dance."
  },
  {
    name: "Draw Back",
    range: 1,
    spCost: 150,
    exclude: [{weaponType: "Staff"}],
    last: true,
    effect: "Unit moves 1 space away from target ally, who moves to unit's former position."
  },
  {
    name: "Harsh Command",
    range: 1,
    spCost: 150,
    exclude: [{weaponType: "Staff"}],
    last: true,
    effect: "Converts penalties on target into bonuses."
  },
  {
    name: "Heal",
    range: 1,
    spCost: 0,
    include: [{weaponType: "Staff"}],
    last: true,
    effect: "Restores 5 HP."
  },
  {
    name: "Martyr",
    range: 1,
    spCost: 200,
    include: [{weaponType: "Staff"}],
    effect: "Restores HP=7+ this unit's suffered damage. Unit heals HP=half suffered damage. Slows Special trigger (cooldown count+1)."
  },
  {
    name: "Martyr+",
    range: 1,
    spCost: 300,
    prev: ["Martyr"],
    include: [{weaponType: "Staff"}],
    last: true,
    effect: "Restores HP = this unit's suffered damage +50% of Atk. (Minimum of 7 HP.) Also restores HP to unit = half suffered damage."
  },
  {
    name: "Mend",
    range: 1,
    spCost: 100,
    include: [{weaponType: "Staff"}],
    last: true,
    effect: "Restores 10 HP."
  },
  {
    name: "Physic",
    range: 2,
    spCost: 200,
    include: [{weaponType: "Staff"}],
    effect: "Restores 8 HP. Rng: 2."
  },
  {
    name: "Physic+",
    range: 2,
    spCost: 300,
    prev: ["Physic"],
    include: [{weaponType: "Staff"}],
    last: true,
    effect: "Restores HP = 50% of Atk. (Minimum of 8 HP.) Rng: 2."
  },
  {
    name: "Pivot",
    range: 1,
    spCost: 150,
    exclude: [{weaponType: "Staff"}],
    last: true,
    effect: "Unit moves to opposite side of adjacent ally."
  },
  {
    name: "Rally Attack",
    range: 1,
    spCost: 150,
    exclude: [{weaponType: "Staff"}],
    last: true,
    effect: "Grants Atk+4 to an adjacent ally until the end of the turn."
  },
  {
    name: "Rally Atk/Def",
    range: 1,
    spCost: 300,
    prev: ["Rally Defense", "Rally Attack"],
    exclude: [{weaponType: "Staff"}],
    last: true,
    effect: "Grants Atk/Def+3 to an adjacent ally until the end of the turn."
  },
  {
    name: "Rally Atk/Res",
    range: 1,
    spCost: 300,
    prev: ["Rally Attack", "Rally Resistance"],
    exclude: [{weaponType: "Staff"}],
    last: true,
    effect: "Grants Atk/Res+3 to an adjacent ally until the end of the turn."
  },
  {
    name: "Rally Atk/Spd",
    range: 1,
    spCost: 300,
    prev: ["Rally Attack", "Rally Speed"],
    exclude: [{weaponType: "Staff"}],
    last: true,
    effect: "Grants Atk/Spd+3 to an adjacent ally until the end of the turn."
  },
  {
    name: "Rally Defense",
    range: 1,
    spCost: 150,
    exclude: [{weaponType: "Staff"}],
    last: true,
    effect: "Grants Def+4 to an adjacent ally until the  of the turn."
  },
  {
    name: "Rally Def/Res",
    range: 1,
    spCost: 300,
    prev: ["Rally Defense", "Rally Resistance"],
    exclude: [{weaponType: "Staff"}],
    last: true,
    effect: "Grants Def/Res+3 to an adjacent ally until the end of the turn."
  },
  {
    name: "Rally Resistance",
    range: 1,
    spCost: 150,
    exclude: [{weaponType: "Staff"}],
    last: true,
    effect: "Grants Res+4 to an adjacent ally until the end of the turn."
  },
  {
    name: "Rally Speed",
    range: 1,
    spCost: 150,
    exclude: [{weaponType: "Staff"}],
    last: true,
    effect: "Grants Spd+4 to an adjacent ally until the end of the turn."
  },
  {
    name: "Rally Spd/Def",
    range: 1,
    spCost: 300,
    prev: ["Rally Speed", "Rally Defense"],
    exclude: [{weaponType: "Staff"}],
    last: true,
    effect: "Grants Spd/Def+3 to an adjacent ally until the end of the turn."
  },
  {
    name: "Rally Spd/Res",
    range: 1,
    spCost: 300,
    prev: ["Rally Resistance", "Rally Speed"],
    exclude: [{weaponType: "Staff"}],
    last: true,
    effect: "Grants Spd/Res+3 to an adjacent ally until the end of the turn."
  },
  {
    name: "Reciprocal Aid",
    range: 1,
    spCost: 150,
    exclude: [{weaponType: "Staff"}],
    last: true,
    effect: "Swap HP with adjacent ally (neither unit can go above their max HP)."
  },
  {
    name: "Reconcile",
    range: 1,
    spCost: 100,
    include: [{weaponType: "Staff"}],
    last: true,
    effect: "Restores 7 HP each to target and this unit."
  },
  {
    name: "Recover",
    range: 1,
    spCost: 200,
    include: [{weaponType: "Staff"}],
    effect: "Restores 15 HP. Slows Special trigger (cooldown count+1)."
  },
  {
    name: "Recover+",
    range: 1,
    spCost: 300,
    prev: ["Recover"],
    include: [{weaponType: "Staff"}],
    last: true,
    effect: "Restores HP = 50% of Atk +10. (Minimum of 15 HP.)"
  },
  {
    name: "Rehabilitate",
    range: 1,
    spCost: 200,
    include: [{weaponType: "Staff"}],
    effect: "Restores 7 HP or more the further below 50% the target's HP is. Slows special trigger (cooldown count+1)."
  },
  {
    name: "Rehabilitate+",
    range: 1,
    spCost: 300,
    prev: ["Rehabilitate"],
    include: [{weaponType: "Staff"}],
    last: true,
    effect: "Restores HP = 50% of Atk -10. (Minimum of 7 HP.) If target's HP is ≤ 50%, the lower the target's HP, the more HP is restored."
  },
  {
    name: "Reposition",
    range: 1,
    spCost: 150,
    exclude: [{weaponType: "Staff"}],
    last: true,
    effect: "Moves adjacent ally to opposite side of unit."
  },
  {
    name: "Sacrifice",
    range: 1,
    spCost: 400,
    prev: ["Ardent Sacrifice"],
    include: [{name: "Micaiah"}],
    last: true,
    effect: "Converts penalties on target into bonuses. Restores target's HP = unit's current HP -1. Unit's HP reduced by amount restored."
  },
  {
    name: "Shove",
    range: 1,
    spCost: 150,
    exclude: [{weaponType: "Staff"}],
    last: true,
    effect: "Push adjacent ally 1 space farther away."
  },
  {
    name: "Sing",
    range: 1,
    spCost: 150,
    include: [{name: "Azura"},{name: "Azura (Performing Arts)"},{name: "Shigure (Performing Arts)"}, {name: "Azura (Happy New Year!)"}],
    last: true,
    effect: "Enables target to take another action. Cannot be used on units with Sing or Dance."
  },
  {
    name: "Smite",
    range: 1,
    spCost: 150,
    exclude: [{weaponType: "Staff"}],
    last: true,
    effect: "Push adjacent ally 2 spaces farther away."
  },
  {
    name: "Swap",
    range: 1,
    spCost: 150,
    exclude: [{weaponType: "Staff"}],
    last: true,
    effect: "Swap places with an adjacent ally."
  }
];

},{}],8:[function(require,module,exports){
module.exports = [
  {
    name: "Axebreaker 1",
    spCost: 50,
    icon: "8-10",
    exclude: [{colorType: "Blue"}],
    effect: "If unit's HP ≥ 90% in combat against an axe user, unit makes a follow-up attack and foe cannot."
  },
  {
    name: "Axebreaker 2",
    spCost: 100,
    icon: "8-11",
    prev: ["Axebreaker 1"],
    exclude: [{colorType: "Blue"}],
    effect: "If unit's HP ≥ 70% in combat against an axe user, unit makes a follow-up attack and foe cannot."
  },
  {
    name: "Axebreaker 3",
    spCost: 200,
    icon: "8-12",
    prev: ["Axebreaker 2"],
    exclude: [{colorType: "Blue"}],
    effect: "If unit's HP ≥ 50% in combat against an axe user, unit makes a follow-up attack and foe cannot."
  },
  {
    name: "B Tomebreaker 1",
    spCost: 50,
    icon: "9-9",
    exclude: [{colorType: "Red"}],
    effect: "If unit's HP ≥ 90% in combat against a blue tome user, unit makes a follow-up attack and foe cannot."
  },
  {
    name: "B Tomebreaker 2",
    spCost: 100,
    icon: "9-10",
    prev: ["B Tomebreaker 1"],
    exclude: [{colorType: "Red"}],
    effect: "If unit's HP ≥ 70% in combat against a blue tome user, unit makes a follow-up attack and foe cannot."
  },
  {
    name: "B Tomebreaker 3",
    spCost: 200,
    icon: "9-11",
    prev: ["B Tomebreaker 2"],
    exclude: [{colorType: "Red"}],
    effect: "If unit's HP ≥ 50% in combat against a blue tome user, unit makes a follow-up attack and foe cannot."
  },
  {
    name: "Beorc's Blessing",
    spCost: 300,
    icon: "26-4",
    include: [{name: "Ike (Brave Heroes)"}],
    effect: "If foe is cavalry or flier type, foe's bonuses (from skills like Fortify, Rally, etc.) are nullified during combat. (Skill cannot be inherited.)"
  },
  {
    name: "Blaze Dance 1",
    spCost: 50,
    icon: "27-8",
    exclude: [{weaponType: "Staff"}],
    effect: "If Sing or Dance is used, target also granted Atk+2."
  },
  {
    name: "Blaze Dance 2",
    spCost: 100,
    icon: "27-9",
    prev: ["Blaze Dance 1"],
    exclude: [{weaponType: "Staff"}],
    effect: "If Sing or Dance is used, target also granted Atk+3."
  },
  {
    name: "Blaze Dance 3",
    spCost: 200,
    icon: "27-10",
    prev: ["Blaze Dance 2"],
    exclude: [{weaponType: "Staff"}],
    effect: "If Sing or Dance is used, target also granted Atk+4."
  },
  {
    name: "Bold Fighter 1",
    spCost: 60,
    icon: "34-0",
    include: [{moveType: "Armored"}],
    effect: "If unit's HP = 100% and unit initiates combat, unit makes a guaranteed follow-up attack. Grants Special cooldown charge +1 per attack. (Does not stack.)"
  },
  {
    name: "Bold Fighter 2",
    spCost: 120,
    icon: "34-1",
    prev: ["Bold Fighter 1"],
    include: [{moveType: "Armored"}],
    effect: "If unit's HP ≥ 50% and unit initiates combat, unit makes a guaranteed follow-up attack. Grants Special cooldown charge +1 per attack. (Does not stack.)"
  },
  {
    name: "Bold Fighter 3",
    spCost: 240,
    icon: "34-2",
    prev: ["Bold Fighter 2"],
    include: [{moveType: "Armored"}],
    effect: "If unit initiates combat, unit makes a guaranteed follow-up attack. Grants Special cooldown charge +1 per attack. (Does not stack.)"
  },
  {
    name: "Bowbreaker 1",
    spCost: 50,
    icon:"9-0",
    exclude: [{moveType:"Flying"}],
    effect: "If unit's HP ≥ 90% in combat against a bow user, unit makes a follow-up attack and foe cannot."
  },
  {
    name: "Bowbreaker 2",
    spCost: 100,
    icon:"9-1",
    prev: ["Bowbreaker 1"],
    exclude: [{moveType:"Flying"}],
    effect: "If unit's HP ≥ 70% in combat against a bow user, unit makes a follow-up attack and foe cannot."
  },
  {
    name: "Bowbreaker 3",
    spCost: 200,
    icon:"9-2",
    prev: ["Bowbreaker 2"],
    exclude: [{moveType:"Flying"}],
    effect: "If unit's HP ≥ 50% in combat against a bow user, unit makes a follow-up attack and foe cannot."
  },
  {
    name: "Brash Assault 1",
    spCost: 50,
    icon: "6-0",
    effect: "Unit automatically makes a follow-up when at HP ≤ 30% and attacking a foe that can counter."
  },
  {
    name: "Brash Assault 2",
    spCost: 100,
    icon: "6-1",
    prev: ["Brash Assault 1"],
    effect: "Unit automatically makes a follow-up when at HP ≤ 40% and attacking a foe that can counter."
  },
  {
    name: "Brash Assault 3",
    spCost: 200,
    icon: "6-2",
    prev: ["Brash Assault 2"],
    effect: "Unit automatically makes a follow-up when at HP ≤ 50% and attacking a foe that can counter."
  },
  {
    name: "Cancel Affinity 1",
    spCost: 50,
    icon: "22-3",
    exclude: [{weaponType: "Tome"}, {weaponType:"Staff"}],
    effect: "Any weapon triangle affinity granted by unit's skills is negated. Also negates any weapon triangle affinity granted by foe's skills."
  },
  {
    name: "Cancel Affinity 2",
    spCost: 100,
    icon: "22-4",
    prev: ["Cancel Affinity 1"],
    exclude: [{weaponType: "Tome"}, {weaponType:"Staff"}],
    effect: "Any weapon triangle affinity granted by unit's skills is negated. If affinity disadvantage exists, weapon triangle affinity granted by foe's skills is negated."
  },
  {
    name: "Cancel Affinity 3",
    spCost: 200,
    icon: "22-5",
    prev: ["Cancel Affinity 2"],
    exclude: [{weaponType: "Tome"}, {weaponType:"Staff"}],
    effect: "Any weapon triangle affinity granted by unit's skills is negated. If affinity disadvantage exists, weapon triangle affinity granted by foe's skills is reversed."
  },
  {
    name: "Chill Def 1",
    spCost: 60,
    icon: "38-9",
    effect: "At the start of each turn, inflicts Def-3 on foe on the enemy team with the highest Def through its next action."
  },
  {
    name: "Chill Def 2",
    spCost: 120,
    icon: "38-10",
    prev: ["Chill Def 1"],
    effect: "At the start of each turn, inflicts Def-5 on foe on the enemy team with the highest Def through its next action."
  },
  {
    name: "Chill Def 3",
    spCost: 240,
    icon: "38-11",
    prev: ["Chill Def 2"],
    effect: "At the start of each turn, inflicts Def-7 on foe on the enemy team with the highest Def through its next action."
  },
  {
    name: "Chill Spd 1",
    spCost: 60,
    icon: "37-10",
    effect: "At the start of each turn, inflicts Spd-3 on foe on the enemy team with the highest Spd through its next action."
  },
  {
    name: "Chill Spd 2",
    spCost: 120,
    icon: "37-11",
    prev: ["Chill Spd 1"],
    effect: "At the start of each turn, inflicts Spd-5 on foe on the enemy team with the highest Spd through its next action."
  },
  {
    name: "Chill Spd 3",
    spCost: 240,
    icon: "37-12",
    prev: ["Chill Spd 2"],
    effect: "At the start of each turn, inflicts Spd-7 on foe on the enemy team with the highest Spd through its next action."
  },
  {
    name: "Chilling Seal",
    spCost: 300,
    icon: "35-2",
    include: [{name:"Gunnthrá"}],
    effect: "At the start of each turn, if unit's HP ≥ 50%, inflicts Atk/Spd-6 on foe on the enemy team with the lowest Def through its next action. (Skill cannot be inherited.)"
  },
  {
    name: "Crusader's Ward",
    spCost: 300,
    icon: "29-7",
    include: [{name:"Sigurd"}],
    effect: "If unit receives consecutive attack from a foe 2 spaces away, damage from second attack onward reduced by 80%. (Skill cannot be inherited.)"
  },
  {
    name: "Daggerbreaker 1",
    spCost: 50,
    icon: "9-3",
    effect: "If unit's HP ≥ 90% in combat against a dagger user, unit makes a follow-up attack and foe cannot."
  },
  {
    name: "Daggerbreaker 2",
    spCost: 100,
    icon: "9-4",
    prev: ["Dagger Breaker 1"],
    effect: "If unit's HP ≥ 70% in combat against a dagger user, unit makes a follow-up attack and foe cannot."
  },
  {
    name: "Daggerbreaker 3",
    spCost: 200,
    icon: "9-5",
    prev: ["Dagger Breaker 2"],
    effect: "If unit's HP ≥ 50% in combat against a dagger user, unit makes a follow-up attack and foe cannot."
  },
  {
    name: "Dazzling Staff 1",
    spCost: 60,
    icon: "18-1",
    include: [{weaponType: "Staff"}],
    effect: "If unit has 100% HP at the start of combat, the enemy cannot counterattack."
  },
  {
    name: "Dazzling Staff 2",
    spCost: 120,
    icon: "18-2",
    prev: ["Dazzling Staff 1"],
    include: [{weaponType: "Staff"}],
    effect: "If unit has ≥ 50% HP at the start of combat, the enemy cannot counterattack."
  },
  {
    name: "Dazzling Staff 3",
    spCost: 240,
    icon: "18-3",
    prev: ["Dazzling Staff 2"],
    include: [{weaponType: "Staff"}],
    effect: "The enemy cannot counterattack."
  },
  {
    name: "Desperation 1",
    spCost: 50,
    icon: "5-10",
    effect: "If unit initiates combat with HP ≤ 25%, follow-up attacks occur immediately after unit's attack."
  },
  {
    name: "Desperation 2",
    spCost: 100,
    icon: "5-11",
    prev: ["Desperation 1"],
    effect: "If unit initiates combat with HP ≤ 50%, follow-up attacks occur immediately after unit's attack."
  },
  {
    name: "Desperation 3",
    spCost: 200,
    icon: "5-12",
    prev: ["Desperation 2"],
    effect: "If unit initiates combat with HP ≤ 75%, follow-up attacks occur immediately after unit's attack."
  },
  {
    name: "Drag Back",
    spCost: 150,
    icon: "4-7",
    include: [{weaponType:"Sword"}, {weaponType:"Axe"}, {weaponType:"Lance"}, {weaponType:"Breath"}],
    effect: "If unit initiates attack, the unit moves 1 space away after combat. Foe moves into unit's previous space."
  },
  {
    name: "Dull Ranged 1",
    spCost: 60,
    icon: "38-12",
    effect: "If unit's HP = 100% at start of combat and foe uses bow, dagger, magic, or staff, neutralizes foe's bonuses (from skills like Fortify, Rally, etc.) during combat."
  },
  {
    name: "Dull Ranged 2",
    spCost: 120,
    icon: "39-0",
    prev: ["Dull Ranged 1"],
    effect: "If unit's HP ≥ 50% at start of combat and foe uses bow, dagger, magic, or staff, neutralizes foe's bonuses (from skills like Fortify, Rally, etc.) during combat."
  },
  {
    name: "Dull Ranged 3",
    spCost: 240,
    icon: "39-1",
    prev: ["Dull Ranged 2"],
    effect: "If foe uses bow, dagger, magic, or staff, neutralizes foe's bonuses (from skills like Fortify, Rally, etc.) during combat."
  },
  {
    name: "Earth Dance 1",
    spCost: 50,
    icon: "34-12",
    exclude: [{weaponType: "Staff"}],
    effect: "If Sing or Dance is used, target also granted Def+2."
  },
  {
    name: "Earth Dance 2",
    spCost: 100,
    icon: "35-0",
    prev: ["Earth Dance 1"],
    exclude: [{weaponType: "Staff"}],
    effect: "If Sing or Dance is used, target also granted Def+3."
  },
  {
    name: "Earth Dance 3",
    spCost: 200,
    icon: "35-1",
    prev: ["Earth Dance 2"],
    exclude: [{weaponType: "Staff"}],
    effect: "If Sing or Dance is used, target also granted Def+4."
  },
  {
    name: "Escape Route 1",
    spCost: 60,
    icon: "5-4",
    effect: "Enables unit whose own HP is ≤ 30% to warp adjacent to any ally."
  },
  {
    name: "Escape Route 2",
    spCost: 120,
    icon: "5-5",
    prev: ["Escape Route 1"],
    effect: "Enables unit whose own HP is ≤ 40% to warp adjacent to any ally."
  },
  {
    name: "Escape Route 3",
    spCost: 240,
    icon: "5-6",
    prev: ["Escape Route 2"],
    effect: "Enables unit whose own HP is ≤ 50% to warp adjacent to any ally."
  },
  {
    name: "Flier Formation 1",
    spCost: 60,
    icon: "27-0",
    include: [{moveType: "Flying"}],
    effect: "If unit has 100% HP, unit can move to a space adjacent to a flier ally within 2 spaces."
  },
  {
    name: "Flier Formation 2",
    spCost: 120,
    icon: "27-1",
    prev: ["Flier Formation 1"],
    include: [{moveType: "Flying"}],
    effect: "If unit has ≥ 50% HP, unit can move to a space adjacent to a flier ally within 2 spaces."
  },
  {
    name: "Flier Formation 3",
    spCost: 240,
    icon: "27-2",
    prev: ["Flier Formation 2"],
    include: [{moveType: "Flying"}],
    effect: "Unit can move to a space adjacent to a flier ally within 2 spaces."
  },
  {
    name: "Follow-Up Ring",
    spCost: 200,
    icon: "29-8",
    include: [{name:"Arden"}],
    effect: "Unit makes a guaranteed follow-up attack when unit's HP ≥ 50% at start of combat. (Skill cannot be inherited.)"
  },
  {
    name: "G Tomebreaker 1",
    spCost: 50,
    icon: "9-12",
    exclude: [{colorType: "Blue"}],
    effect: "If unit's HP ≥ 90% in combat against a green tome user, unit makes a follow-up attack and foe cannot."
  },
  {
    name: "G Tomebreaker 2",
    spCost: 100,
    icon: "10-0",
    prev: ["G Tomebreaker 1"],
    exclude: [{colorType: "Blue"}],
    effect: "If unit's HP ≥ 70% in combat against a green tome user, unit makes a follow-up attack and foe cannot."
  },
  {
    name: "G Tomebreaker 3",
    spCost: 200,
    icon: "10-1",
    prev: ["G Tomebreaker 2"],
    exclude: [{colorType: "Blue"}],
    effect: "If unit's HP ≥ 50% in combat against a green tome user, unit makes a follow-up attack and foe cannot."
  },
  {
    name: "Gale Dance 1",
    spCost: 50,
    icon: "27-11",
    exclude: [{weaponType: "Staff"}],
    effect: "If Sing or Dance is used, target also granted Spd+2."
  },
  {
    name: "Gale Dance 2",
    spCost: 100,
    icon: "27-12",
    prev: ["Gale Dance 1"],
    exclude: [{weaponType: "Staff"}],
    effect: "If Sing or Dance is used, target also granted Spd+3."
  },
  {
    name: "Gale Dance 3",
    spCost: 200,
    icon: "28-0",
    prev: ["Gale Dance 2"],
    exclude: [{weaponType: "Staff"}],
    effect: "If Sing or Dance is used, target also granted Spd+4."
  },
  {
    name: "Geyser Dance 1",
    spCost: 120,
    icon: "28-4",
    prev: ["Torrent Dance 1"],
    exclude: [{weaponType: "Staff"}],
    effect: "If Sing or Dance is used, target also granted Def/Res+3."
  },
  {
    name: "Geyser Dance 2",
    spCost: 240,
    icon: "28-5",
    prev: ["Geyser Dance 1"],
    exclude: [{weaponType: "Staff"}],
    effect: "If Sing or Dance is used, target also granted Def/Res+4."
  },
  {
    name: "Guard 1",
    spCost: 50,
    icon: "16-4",
    effect: "If unit's HP is 100% at start of combat, enemy is inflicted with Special cooldown charge-1. (If using similar skill, only highest value applied.)"
  },
  {
    name: "Guard 2",
    spCost: 100,
    icon: "16-5",
    prev: ["Guard 1"],
    effect: "If unit's HP is ≥ 90% at start of combat, enemy is inflicted with Special cooldown charge-1. (If using similar skill, only highest value applied.)"
  },
  {
    name: "Guard 3",
    spCost: 200,
    icon: "16-6",
    prev: ["Guard 2"],
    effect: "If unit's HP is ≥ 80% at start of combat, enemy is inflicted with Special cooldown charge-1. (If using similar skill, only highest value applied.)"
  },
  {
    name: "Hit and Run",
    spCost: 150,
    icon: "15-4",
    include: [{weaponType:"Sword"}, {weaponType:"Axe"}, {weaponType:"Lance"}, {weaponType:"Breath"}],
    effect: "If unit initiates attack, unit retreats 1 space after battle."
  },
  {
    name: "Knock Back",
    spCost: 150,
    icon: "4-5",
    include: [{weaponType:"Sword"}, {weaponType:"Axe"}, {weaponType:"Lance"}, {weaponType:"Breath"}],
    effect: "If unit initiates attack, foe is moved 1 space away after combat."
  },
  {
    name: "Lancebreaker 1",
    spCost: 50,
    icon: "8-7",
    exclude: [{colorType: "Red"}],
    effect: "If unit's HP ≥ 90% in combat against a lance user, unit makes a follow-up attack and foe cannot."
  },
  {
    name: "Lancebreaker 2",
    spCost: 100,
    icon: "8-8",
    prev: ["Lancebreaker 1"],
    exclude: [{colorType: "Red"}],
    effect: "If unit's HP ≥ 70% in combat against a lance user, unit makes a follow-up attack and foe cannot."
  },
  {
    name: "Lancebreaker 3",
    spCost: 200,
    icon: "8-9",
    prev: ["Lancebreaker 2"],
    exclude: [{colorType: "Red"}],
    effect: "If unit's HP ≥ 50% in combat against a lance user, unit makes a follow-up attack and foe cannot."
  },
  {
    name: "Live for Bounty",
    spCost: 100,
    icon: "14-10",
    effect: "If unit survives, get 1.5x shards/crystals from a Training Tower map. (If similar skill effects also used, only highest multiplier applied.)"
  },
  {
    name: "Live for Honor",
    spCost: 100,
    icon: "14-9",
    effect: "If unit survives, get 1.5x normal badges from a Training Tower map. (If similar skill effects also used, only highest multiplier applied.)"
  },
  {
    name: "Live to Serve 1",
    spCost: 40,
    icon: "7-2",
    include: [{weaponType: "Staff"}],
    effect: "When healing allies with a staff, unit also recovers 50% of the HP restored."
  },
  {
    name: "Live to Serve 2",
    spCost: 80,
    icon: "7-3",
    prev: ["Live to Serve 1"],
    include: [{weaponType: "Staff"}],
    effect: "When healing allies with a staff, unit also recovers 75% of the HP restored."
  },
  {
    name: "Live to Serve 3",
    spCost: 160,
    icon: "7-4",
    prev: ["Live to Serve 2"],
    include: [{weaponType: "Staff"}],
    effect: "When healing allies with a staff, unit also recovers the same amount."
  },
  {
    name: "Lunge",
    spCost: 150,
    icon: "4-6",
    include: [{weaponType:"Sword"}, {weaponType:"Axe"}, {weaponType:"Lance"}, {weaponType:"Breath"}],
    effect: "If unit initiates attack, after combat, unit and targeted foe swap places."
  },
  {
    name: "Obstruct 1",
    spCost: 50,
    icon: "4-11",
    effect: "Prevents foes from moving through adjacent spaces while this unit's HP ≥ 90%. (No effect on foes with a Pass skill.)"
  },
  {
    name: "Obstruct 2",
    spCost: 100,
    icon: "4-12",
    prev: ["Obstruct 1"],
    effect: "Prevents foes from moving through adjacent spaces while this unit's HP ≥ 70%. (No effect on foes with a Pass skill.)"
  },
  {
    name: "Obstruct 3",
    spCost: 200,
    icon: "5-0",
    prev: ["Obstruct 2"],
    effect: "Prevents foes from moving through adjacent spaces while this unit's HP ≥ 50%. (No effect on foes with a Pass skill.)"
  },
  {
    name: "Pass 1",
    spCost: 50,
    icon: "4-8",
    effect: "Units can pass through foes if its own HP ≥ 75%."
  },
  {
    name: "Pass 2",
    spCost: 100,
    icon: "4-9",
    prev: ["Pass 1"],
    effect: "Units can pass through foes if its own HP ≥ 50%."
  },
  {
    name: "Pass 3",
    spCost: 200,
    icon: "4-10",
    prev: ["Pass 2"],
    effect: "Units can pass through foes if its own HP ≥ 25%."
  },
  {
    name: "Poison Strike 1",
    spCost: 60,
    icon: "6-9",
    exclude: [{weaponType: "Staff"}],
    effect: "Inflicts 4 damage to foe after any combat this unit initiates."
  },
  {
    name: "Poison Strike 2",
    spCost: 120,
    icon: "6-10",
    prev: ["Poison Strike 1"],
    exclude: [{weaponType: "Staff"}],
    effect: "Inflicts 7 damage to foe after any combat this unit initiates."
  },
  {
    name: "Poison Strike 3",
    spCost: 240,
    icon: "6-11",
    prev: ["Poison Strike 2"],
    exclude: [{weaponType: "Staff"}],
    effect: "Inflicts 10 damage to foe after any combat this unit initiates."
  },
  {
    name: "Quick Riposte 1",
    spCost: 60,
    icon: "6-3",
    effect: "Unit automatically makes a follow-up attack if attacked at HP ≥ 90%."
  },
  {
    name: "Quick Riposte 2",
    spCost: 120,
    icon: "6-4",
    prev: ["Quick Riposte 1"],
    effect: "Unit automatically makes a follow-up attack if attacked at HP ≥ 80%."
  },
  {
    name: "Quick Riposte 3",
    spCost: 240,
    icon: "6-5",
    prev: ["Quick Riposte 2"],
    effect: "Unit automatically makes a follow-up attack if attacked at HP ≥ 70%."
  },
  {
    name: "R Tomebreaker 1",
    spCost: 50,
    icon: "9-6",
    exclude: [{colorType: "Green"}],
    effect: "If unit's HP ≥ 90% in combat against a red tome user, unit makes a follow-up attack and foe cannot."
  },
  {
    name: "R Tomebreaker 2",
    spCost: 100,
    icon: "9-7",
    prev: ["R Tomebreaker 1"],
    exclude: [{colorType: "Green"}],
    effect: "If unit's HP ≥ 70% in combat against a red tome user, unit makes a follow-up attack and foe cannot."
  },
  {
    name: "R Tomebreaker 3",
    spCost: 200,
    icon: "9-8",
    prev: ["R Tomebreaker 2"],
    exclude: [{colorType: "Green"}],
    effect: "If unit's HP ≥ 50% in combat against a red tome user, unit makes a follow-up attack and foe cannot."
  },
  {
    name: "Recover Ring",
    spCost: 200,
    icon: "29-9",
    include: [{name: "Arvis"}],
    effect: "Restores 10 HP at the start of each turn. (Skill cannot be inherited.)"
  },
  {
    name: "Renewal 1",
    spCost: 60,
    icon: "6-12",
    effect: "At the start of every fourth turn, restores 10 HP."
  },
  {
    name: "Renewal 2",
    spCost: 120,
    icon: "7-0",
    prev: ["Renewal 1"],
    effect: "At the start of every third turn, restores 10 HP."
  },
  {
    name: "Renewal 3",
    spCost: 240,
    icon: "7-1",
    prev: ["Renewal 2"],
    effect: "At the start of every second turn, restores 10 HP."
  },
  {
    name: "Sacae's Blessing",
    spCost: 300,
    icon: "26-5",
    include: [{name:"Lyn (Brave Heroes)"}],
    effect: "If foe has sword, lance, or axe, foe cannot counterattack. (Skill cannot be inherited.)"
  },
  {
    name: "Seal Atk 1",
    spCost: 40,
    icon: "7-5",
    exclude: [{weaponType: "Staff"}],
    effect: "After combat, foe suffers Atk-3 through its next action."
  },
  {
    name: "Seal Atk 2",
    spCost: 80,
    icon: "7-6",
    prev: ["Seal Atk 1"],
    exclude: [{weaponType: "Staff"}],
    effect: "After combat, foe suffers Atk-5 through its next action."
  },
  {
    name: "Seal Atk 3",
    spCost: 160,
    icon: "7-7",
    prev: ["Seal Atk 2"],
    exclude: [{weaponType: "Staff"}],
    effect: "After combat, foe suffers Atk-7 through its next action."
  },
  {
    name: "Seal Atk/Def 1",
    spCost: 100,
    icon: "25-3",
    prev: ["Seal Atk 1", "Seal Def 1"],
    exclude: [{weaponType: "Staff"}],
    effect: "After combat, inflicts Atk/Def-3 on foe through its next action."
  },
  {
    name: "Seal Atk/Def 2",
    spCost: 200,
    icon: "25-4",
    prev: ["Seal Atk/Def 1"],
    exclude: [{weaponType: "Staff"}],
    effect: "After combat, inflicts Atk/Def-5 on foe through its next action."
  },
  {
    name: "Seal Atk/Spd 1",
    spCost: 100,
    icon: "20-0",
    prev: ["Seal Spd 1", "Seal Atk 1"],
    exclude: [{weaponType: "Staff"}],
    effect: "After combat, inflicts Atk/Spd-3 on foe through its next action."
  },
  {
    name: "Seal Atk/Spd 2",
    spCost: 200,
    icon: "20-1",
    prev: ["Seal Atk/Spd 1"],
    exclude: [{weaponType: "Staff"}],
    effect: "After combat, inflicts Atk/Spd-5 on foe through its next action."
  },
  {
    name: "Seal Def 1",
    spCost: 40,
    icon: "7-11",
    exclude: [{weaponType: "Staff"}],
    effect: "After combat, foe suffers Def-3 through its next action."
  },
  {
    name: "Seal Def 2",
    spCost: 80,
    icon: "7-12",
    prev: ["Seal Def 1"],
    exclude: [{weaponType: "Staff"}],
    effect: "After combat, foe suffers Def-5 through its next action."
  },
  {
    name: "Seal Def 3",
    spCost: 160,
    icon: "8-0",
    prev: ["Seal Def 2"],
    exclude: [{weaponType: "Staff"}],
    effect: "After combat, foe suffers Def-7 through its next action."
  },
  {
    name: "Seal Res 1",
    spCost: 40,
    icon: "8-1",
    exclude: [{weaponType: "Staff"}],
    effect: "After combat, foe suffers Res-3 through its next action."
  },
  {
    name: "Seal Res 2",
    spCost: 80,
    icon: "8-2",
    prev: ["Seal Res 1"],
    exclude: [{weaponType: "Staff"}],
    effect: "After combat, foe suffers Res-5 through its next action."
  },
  {
    name: "Seal Res 3",
    spCost: 160,
    icon: "8-3",
    prev: ["Seal Res 2"],
    exclude: [{weaponType: "Staff"}],
    effect: "After combat, foe suffers Res-7 through its next action."
  },
  {
    name: "Seal Spd 1",
    spCost: 40,
    icon: "7-8",
    exclude: [{weaponType: "Staff"}],
    effect: "After combat, foe suffers Spd-3 through its next action."
  },
  {
    name: "Seal Spd 2",
    spCost: 80,
    icon: "7-9",
    prev: ["Seal Spd 1"],
    exclude: [{weaponType: "Staff"}],
    effect: "After combat, foe suffers Spd-5 through its next action."
  },
  {
    name: "Seal Spd 3",
    spCost: 160,
    icon: "7-10",
    prev: ["Seal Spd 2"],
    exclude: [{weaponType: "Staff"}],
    effect: "After combat, foe suffers Spd-7 through its next action."
  },
  {
    name: "Shield Pulse 1",
    spCost: 60,
    icon: "23-5",
    include: [{weaponType:"Sword"}, {weaponType:"Axe"}, {weaponType:"Lance"}, {weaponType:"Breath"}],
    exclude: [{moveType:"Flying"}, {moveType:"Cavalry"}],
    effect: "If unit's Special triggers based on a foe's attack, Special cooldown count-1 at start of turn 1."
  },
  {
    name: "Shield Pulse 2",
    spCost: 120,
    icon: "23-6",
    prev: ["Shield Pulse 1"],
    include: [{weaponType:"Sword"}, {weaponType:"Axe"}, {weaponType:"Lance"}, {weaponType:"Breath"}],
    exclude: [{moveType:"Flying"}, {moveType:"Cavalry"}],
    effect: "If unit's Special triggers based on a foe's attack, Special cooldown count-1 at start of turn 1. Unit takes 5 less damage when Special triggers."
  },
  {
    name: "Shield Pulse 3",
    spCost: 240,
    icon: "23-7",
    prev: ["Shield Pulse 2"],
    include: [{weaponType:"Sword"}, {weaponType:"Axe"}, {weaponType:"Lance"}, {weaponType:"Breath"}],
    exclude: [{moveType:"Flying"}, {moveType:"Cavalry"}],
    effect: "If unit's Special triggers based on a foe's attack, Special cooldown count-2 at start of turn 1. Unit takes 5 less damage when Special triggers."
  },
  {
    name: "Solar Brace",
    spCost: 200,
    icon: "38-3",
    include: [{name:"Ephraim (Legendary Heroes)"}],
    effect: "Restores 30% of damage dealt when Special triggers during combat. (Stacks with effects of skills like Sol.)"
  },
  {
    name: "Swordbreaker 1",
    spCost: 50,
    icon: "8-4",
    exclude: [{colorType: "Green"}],
    effect: "If unit's HP ≥ 90% in combat against a sword user, unit makes a follow-up attack and foe cannot."
  },
  {
    name: "Swordbreaker 2",
    spCost: 100,
    icon: "8-5",
    prev: ["Swordbreaker 1"],
    exclude: [{colorType: "Green"}],
    effect: "If unit's HP ≥ 70% in combat against a sword user, unit makes a follow-up attack and foe cannot."
  },
  {
    name: "Swordbreaker 3",
    spCost: 200,
    icon: "8-6",
    prev: ["Swordbreaker 2"],
    exclude: [{colorType: "Green"}],
    effect: "If unit's HP ≥ 50% in combat against a sword user, unit makes a follow-up attack and foe cannot."
  },
  {
    name: "Torrent Dance 1",
    spCost: 50,
    icon: "28-1",
    exclude: [{weaponType: "Staff"}],
    effect: "If Sing or Dance is used, target also granted Res+3."
  },
  {
    name: "Vantage 1",
    spCost: 50,
    icon: "5-7",
    effect: "Unit counterattacks first when attacked at HP ≤ 25%."
  },
  {
    name: "Vantage 2",
    spCost: 100,
    icon: "5-8",
    prev: ["Vantage 1"],
    effect: "Unit counterattacks first when attacked at HP ≤ 50%."
  },
  {
    name: "Vantage 3",
    spCost: 200,
    icon: "5-9",
    prev: ["Vantage 2"],
    effect: "Unit counterattacks first when attacked at HP ≤ 75%."
  },
  {
    name: "Vengeful Fighter 1",
    spCost: 60,
    icon: "34-3",
    include: [{moveType: "Armored"}],
    effect: "If unit's HP ≥ 90% and foe initiates combat, unit makes a guaranteed follow-up attack. Grants Special cooldown charge +1 per attack. (Does not stack.)"
  },
  {
    name: "Vengeful Fighter 2",
    spCost: 120,
    icon: "34-4",
    prev: ["Vengeful Fighter 1"],
    include: [{moveType: "Armored"}],
    effect: "If unit's HP ≥ 70% and foe initiates combat, unit makes a guaranteed follow-up attack. Grants Special cooldown charge +1 per attack. (Does not stack.)"
  },
  {
    name: "Vengeful Fighter 3",
    spCost: 240,
    icon: "34-5",
    prev: ["Vengeful Fighter 2"],
    include: [{moveType: "Armored"}],
    effect: "If unit's HP ≥ 50% and foe initiates combat, unit makes a guaranteed follow-up attack. Grants Special cooldown charge +1 per attack. (Does not stack.)"
  },
  {
    name: "Warp Powder",
    spCost: 300,
    icon: "35-5",
    include: [{name:"Zelgius"}],
    effect: "If unit's HP ≥ 80%, unit can move adjacent to any ally within 2 spaces. (Skill cannot be inherited.)"
  },
  {
    name: "Wary Fighter 1",
    spCost: 60,
    icon: "6-6",
    include: [{moveType: "Armored"}],
    effect: "Prevents follow-up attacks in combat from unit and foes if unit's HP ≥ 90%."
  },
  {
    name: "Wary Fighter 2",
    spCost: 120,
    icon: "6-7",
    prev: ["Wary Fighter 1"],
    include: [{moveType: "Armored"}],
    effect: "Prevents follow-up attacks in combat from unit and foes if unit's HP ≥ 70%."
  },
  {
    name: "Wary Fighter 3",
    spCost: 240,
    icon: "6-8",
    prev: ["Wary Fighter 2"],
    include: [{moveType: "Armored"}],
    effect: "Prevents follow-up attacks in combat from unit and foes if unit's HP ≥ 50%."
  },
  {
    name: "Watersweep 1",
    spCost: 60,
    icon: "16-1",
    exclude: [{weaponType: "Staff"}],
    effect: "If unit initiates attack, no follow-up occurs. Against foe with magic, staff or dragonstone, if unit’s Spd - foe’s Spd ≥ 5, foe can’t counterattack."
  },
  {
    name: "Watersweep 2",
    spCost: 120,
    icon: "16-2",
    prev: ["Watersweep 1"],
    exclude: [{weaponType: "Staff"}],
    effect: "If unit initiates attack, no follow-up occurs. Against foe with magic, staff or dragonstone, if unit’s Spd - foe’s Spd ≥ 3, foe can’t counterattack."
  },
  {
    name: "Watersweep 3",
    spCost: 240,
    icon: "16-3",
    prev: ["Watersweep 2"],
    exclude: [{weaponType: "Staff"}],
    effect: "If unit initiates attack, no follow-up occurs. Against foe with magic, staff or dragonstone, if unit’s Spd - foe’s Spd ≥ 1, foe can’t counterattack."
  },
  {
    name: "Windsweep 1",
    spCost: 60,
    icon: "15-5",
    exclude: [{weaponType: "Staff"}],
    effect: "If unit initiates attack, no follow-up occurs. Against foe with sword, lance, axe, bow, or dagger, if unit’s Spd - foe’s Spd ≥ 5, foe can’t counterattack."
  },
  {
    name: "Windsweep 2",
    spCost: 120,
    icon: "15-6",
    prev: ["Windsweep 1"],
    exclude: [{weaponType: "Staff"}],
    effect: "If unit initiates attack, no follow-up occurs. Against foe with sword, lance, axe, bow, or dagger, if unit’s Spd - foe’s Spd ≥ 3, foe can’t counterattack."
  },
  {
    name: "Windsweep 3",
    spCost: 240,
    icon: "15-7",
    prev: ["Windsweep 2"],
    exclude: [{weaponType: "Staff"}],
    effect: "If unit initiates attack, no follow-up occurs. Against foe with sword, lance, axe, bow, or dagger, if unit’s Spd - foe’s Spd ≥ 1, foe can’t counterattack."
  },
  {
    name: "Wings of Mercy 1",
    spCost: 60,
    icon: "5-1",
    effect: "Enables unit to warp adjacent to any ally with HP ≤ 30%."
  },
  {
    name: "Wings of Mercy 2",
    spCost: 120,
    icon: "5-2",
    prev: ["Wings of Mercy 1"],
    effect: "Enables unit to warp adjacent to any ally with HP ≤ 40%."
  },
  {
    name: "Wings of Mercy 3",
    spCost: 240,
    icon: "5-3",
    prev: ["Wings of Mercy 2"],
    effect: "Enables unit to warp adjacent to any ally with HP ≤ 50%."
  },
  {
    name: "Wrath 1",
    spCost: 60,
    icon: "27-3",
    include: [{weaponType:"Sword"}, {weaponType:"Axe"}, {weaponType:"Lance"}, {weaponType:"Breath"}],
    exclude: [{moveType:"Flying"}, {moveType:"Cavalry"}],
    effect: "If unit's HP ≤ 25%, Special cooldown count-1 at start of turn if Special triggers by attacking. If Special triggers, +10 damage from Special."
  },
  {
    name: "Wrath 2",
    spCost: 120,
    icon: "27-4",
    prev: ["Wrath 1"],
    include: [{weaponType:"Sword"}, {weaponType:"Axe"}, {weaponType:"Lance"}, {weaponType:"Breath"}],
    exclude: [{moveType:"Flying"}, {moveType:"Cavalry"}],
    effect: "If unit's HP ≤ 50%, Special cooldown count-1 at start of turn if Special triggers by attacking. If Special triggers, +10 damage from Special."
  },
  {
    name: "Wrath 3",
    spCost: 240,
    icon: "27-5",
    prev: ["Wrath 2"],
    include: [{weaponType:"Sword"}, {weaponType:"Axe"}, {weaponType:"Lance"}, {weaponType:"Breath"}],
    exclude: [{moveType:"Flying"}, {moveType:"Cavalry"}],
    effect: "If unit's HP ≤ 75%, Special cooldown count-1 at start of turn if Special triggers by attacking. If Special triggers, +10 damage from Special."
  },
  {
    name: "Wrathful Staff 1",
    spCost: 60,
    icon: "17-3",
    include: [{weaponType: "Staff"}],
    effect: "If unit has 100% HP at the start of combat, damage from their staff will be calculated the same as other weapons."
  },
  {
    name: "Wrathful Staff 2",
    spCost: 120,
    icon: "17-4",
    prev: ["Wrathfull Staff 1"],
    include: [{weaponType: "Staff"}],
    effect: "If unit has ≥ 50% HP at the start of combat, damage from their staff will be calculated the same as other weapons."
  },
  {
    name: "Wrathful Staff 3",
    spCost: 240,
    icon: "17-5",
    prev: ["Wrathfull Staff 2"],
    include: [{weaponType: "Staff"}],
    effect: "Damage from unit's staff will be calculated the same as other weapons."
  }
];

},{}],9:[function(require,module,exports){
module.exports = [
  {
    name: "Armor March 1",
    spCost: 60,
    icon: "25-5",
    include: [{moveType: "Armored"}],
    effect: "If unit has 100% HP and an adjacent armored ally at start of turn, unit and any such allies can move 1 extra space. (That turn only; does not stack.)"
  },
  {
    name: "Armor March 2",
    spCost: 120,
    icon: "25-6",
    prev: ["Armor March 1"],
    include: [{moveType: "Armored"}],
    effect: "If unit has ≥ 50% HP and an adjacent armored ally at start of turn, unit and any such allies can move 1 extra space. (That turn only; does not stack.)"
  },
  {
    name: "Armor March 3",
    spCost: 240,
    icon: "25-7",
    prev: ["Armor March 2"],
    include: [{moveType: "Armored"}],
    effect: "If unit has an adjacent armored ally at the start of turn, unit and any such allies can move 1 extra space. (That turn only; does not stack.)"
  },
  {
    name: "Atk Ploy 1",
    spCost: 60,
    icon: "18-12",
    effect: "At start of turn, all foes in cardinal directions with Res 1 or more lower than unit suffer Atk-3 until the end of foe's next action."
  },
  {
    name: "Atk Ploy 2",
    spCost: 120,
    icon: "19-0",
    prev: ["Atk Ploy 1"],
    effect: "At start of turn, all foes in cardinal directions with Res 1 or more lower than unit suffer Atk-4 until the end of foe's next action."
  },
  {
    name: "Atk Ploy 3",
    spCost: 240,
    icon: "19-1",
    prev: ["Atk Ploy 2"],
    effect: "At start of turn, all foes in cardinal directions with Res 1 or more lower than unit suffer Atk-5 until the end of foe's next action."
  },
  {
    name: "Atk Smoke 1",
    spCost: 60,
    icon: "26-8",
    exclude: [{weaponType: "Staff"}],
    effect: "After combat, inflicts Atk-3 on foes within 2 spaces of target through their next actions."
  },
  {
    name: "Atk Smoke 2",
    spCost: 120,
    icon: "26-9",
    prev: ["Atk Smoke 1"],
    exclude: [{weaponType: "Staff"}],
    effect: "After combat, inflicts Atk-5 on foes within 2 spaces of target through their next actions."
  },
  {
    name: "Atk Smoke 3",
    spCost: 240,
    icon: "26-10",
    prev: ["Atk Smoke 2"],
    exclude: [{weaponType: "Staff"}],
    effect: "After combat, inflicts Atk-7 on foes within 2 spaces of target through their next actions."
  },
  {
    name: "Atk Tactic 1",
    spCost: 60,
    icon: "33-0",
    effect: "At start of turn, grants Atk+2 to allies within 2 spaces for 1 turn. Granted only if number of that ally's movement type on current team ≤ 2."
  },
  {
    name: "Atk Tactic 2",
    spCost: 120,
    icon: "33-1",
    prev: ["Atk Tactic 1"],
    effect: "At start of turn, grants Atk+4 to allies within 2 spaces for 1 turn. Granted only if number of that ally's movement type on current team ≤ 2."
  },
  {
    name: "Atk Tactic 3",
    spCost: 240,
    icon: "33-2",
    prev: ["Atk Tactic 2"],
    effect: "At start of turn, grants Atk+6 to allies within 2 spaces for 1 turn. Granted only if number of that ally's movement type on current team ≤ 2."
  },
  {
    name: "Axe Experience 1",
    spCost: 30,
    icon: "14-11",
    include: [{weaponType: "Axe"}],
    effect: "If unit survives, unit gets 1.5x EXP. (If similar skill effects also used, only highest multiplier applied.)"
  },
  {
    name: "Axe Experience 2",
    spCost: 60,
    icon: "14-12",
    prev: ["Axe Experience 1"],
    include: [{weaponType: "Axe"}],
    effect: "If unit survives, all axe users on team get 1.5x EXP. (If similar skill effects also used, only highest multiplier applied.)"
  },
  {
    name: "Axe Experience 3",
    spCost: 120,
    icon: "15-0",
    prev: ["Axe Experience 2"],
    include: [{weaponType: "Axe"}],
    effect: "If unit survives, all axe users on team get 2x EXP. (If similar skill effects also used, only highest multiplier applied.)"
  },
  {
    name: "Axe Valor 1",
    spCost: 30,
    icon: "20-8",
    include: [{weaponType: "Axe"}],
    effect: "If unit survives and uses an axe, unit gets 1.5x SP. (If similar skill effects also used, only highest multiplier applied.)"
  },
  {
    name: "Axe Valor 2",
    spCost: 60,
    icon: "20-9",
    prev: ["Axe Valor 1"],
    include: [{weaponType: "Axe"}],
    effect: "If unit survives, all axe users on team get 1.5x SP. (If similar skill effects also used, only highest multiplier applied.)"
  },
  {
    name: "Axe Valor 3",
    spCost: 120,
    icon: "20-10",
    prev: ["Axe Valor 2"],
    include: [{weaponType: "Axe"}],
    effect: "If unit survives, all axe users on team get 2x SP. (If similar skill effects also used, only highest multiplier applied.)"
  },
  {
    name: "B Tome Exp. 1",
    spCost: 30,
    icon: "17-6",
    include: [{weaponType: "Tome", colorType: "Blue"}],
    effect: "If using blue magic and unit survives combat, unit gets 1.5x EXP. (If similar skill effects also used, only highest multiplier applied.)"
  },
  {
    name: "B Tome Exp. 2",
    spCost: 60,
    icon: "17-7",
    prev: ["B Tome Exp. 1"],
    include: [{weaponType: "Tome", colorType: "Blue"}],
    effect: "If unit survives combat, all blue magic users on team get 1.5x EXP. (If similar skill effects also used, only highest multiplier applied.)"
  },
  {
    name: "B Tome Exp. 3",
    spCost: 120,
    icon: "17-8",
    prev: ["B Tome Exp. 2"],
    include: [{weaponType: "Tome", colorType: "Blue"}],
    effect: "If unit survives combat, all blue magic users on team get 2x EXP. (If similar skill effects also used, only highest multiplier applied.)"
  },
  {
    name: "B Tome Valor 1",
    spCost: 30,
    icon: "28-8",
    include: [{weaponType: "Tome", colorType: "Blue"}],
    effect: "If unit survives and uses a blue tome, unit gets 1.5x SP. (If similar skill effects also used, only highest multiplier applied.)"
  },
  {
    name: "B Tome Valor 2",
    spCost: 60,
    icon: "28-9",
    prev: ["B Tome Valor 1"],
    include: [{weaponType: "Tome", colorType: "Blue"}],
    effect: "If unit survives, all blue tome users on team get 1.5x SP. (If similar skill effects also used, only highest multiplier applied.)"
  },
  {
    name: "B Tome Valor 3",
    spCost: 120,
    icon: "28-10",
    prev: ["B Tome Valor 2"],
    include: [{weaponType: "Tome", colorType: "Blue"}],
    effect: "If unit survives, all blue tome users on team get 2x SP. (If similar skill effects also used, only highest multiplier applied.)"
  },
  {
    name: "Bow Exp. 1",
    spCost: 30,
    icon: "15-8",
    include: [{weaponType:"Bow"}],
    effect: "If unit survives and uses a bow, unit gets 1.5x EXP. (If similar skill effects also used, only highest multiplier applies.)"
  },
  {
    name: "Bow Exp. 2",
    spCost: 60,
    icon: "15-9",
    prev: ["Bow Exp. 1"],
    include: [{weaponType:"Bow"}],
    effect: "If unit survives, all bow users on team get 1.5x EXP. (If similar skill effects also used, only highest multiplier applies.)"
  },
  {
    name: "Bow Exp. 3",
    spCost: 120,
    icon: " 15-10",
    prev: ["Bow Exp. 2"],
    include: [{weaponType:"Bow"}],
    effect: "If unit survives, all bow users on team get 2x EXP. (If similar skill effects also used, only highest multiplier applies.)"
  },
  {
    name: "Bow Valor 1",
    spCost: 30,
    icon: "37-3",
    include: [{weaponType: "Bow"}],
    effect: "If unit survives and uses an bow, unit gets 1.5x SP. (If similar skill effects also used, only highest multiplier applied.)"
  },
  {
    name: "Bow Valor 2",
    spCost: 60,
    icon: "37-4",
    prev: ["Bow Valor 1"],
    include: [{weaponType: "Bow"}],
    effect: "If unit survives, all bow users on team get 1.5x SP. (If similar skill effects also used, only highest multiplier applied.)"
  },
  {
    name: "Bow Valor 3",
    spCost: 120,
    icon: "37-5",
    prev: ["Bow Valor 2"],
    include: [{weaponType: "Bow"}],
    effect: "If unit survives, all bow users on team get 2x SP. (If similar skill effects also used, only highest multiplier applied.)"
  },
  {
    name: "Breath of Life 1",
    spCost: 50,
    icon: "10-2",
    effect: "If unit initiates attack, adjacent allies recover 3 HP after combat."
  },
  {
    name: "Breath of Life 2",
    spCost: 100,
    icon: "10-3",
    prev: ["Breath of Life 1"],
    effect: "If unit initiates attack, adjacent allies recover 5 HP after combat."
  },
  {
    name: "Breath of Life 3",
    spCost: 200,
    icon: "10-4",
    prev: ["Breath of Life 2"],
    effect: "If unit initiates attack, adjacent allies recover 7 HP after combat."
  },
  {
    name: "Dagger Valor 1",
    spCost: 30,
    icon: "30-11",
    include: [{weaponType:"Dagger"}],
    effect: "If unit survives and uses a dagger, unit gets 1.5x SP. (If similar skill effects also used, only highest multiplier applied.)"
  },
  {
    name: "Dagger Valor 2",
    spCost: 60,
    icon: "30-12",
    prev: ["Dagger Valor 1"],
    include: [{weaponType:"Dagger"}],
    effect: "If unit survives, all dagger users on team get 1.5x SP. (If similar skill effects also used, only highest multiplier applied.)"
  },
  {
    name: "Dagger Valor 3",
    spCost: 120,
    icon: "31-0",
    prev: ["Dagger Valor 2"],
    include: [{weaponType:"Dagger"}],
    effect: "If unit survives, all dagger users on team get 2x SP. (If similar skill effects also used, only highest multiplier applied.)"
  },
  {
    name: "Def Ploy 1",
    spCost: 60,
    icon: "20-2",
    effect: "At start of turn, all foes in cardinal directions with Res 1 or more lower than unit suffer Def-3 until the end of foe's next action."
  },
  {
    name: "Def Ploy 2",
    spCost: 120,
    icon: "20-3",
    prev: ["Def Ploy 1"],
    effect: "At start of turn, all foes in cardinal directions with Res 1 or more lower than unit suffer Def-4 until the end of foe's next action."
  },
  {
    name: "Def Ploy 3",
    spCost: 240,
    icon: "20-4",
    prev: ["Def Ploy 2"],
    effect: "At start of turn, all foes in cardinal directions with Res 1 or more lower than unit suffer Def-5 until the end of foe's next action."
  },
  {
    name: "Def Tactic 1",
    spCost: 60,
    icon: "33-3",
    effect: "At start of turn, grants Def+2 to allies within 2 spaces for 1 turn. Granted only if number of that ally's movement type on current team ≤ 2."
  },
  {
    name: "Def Tactic 2",
    spCost: 120,
    icon: "33-4",
    prev: ["Def Tactic 1"],
    effect: "At start of turn, grants Def+4 to allies within 2 spaces for 1 turn. Granted only if number of that ally's movement type on current team ≤ 2."
  },
  {
    name: "Def Tactic 3",
    spCost: 240,
    icon: "33-5",
    prev: ["Def Tactic 2"],
    effect: "At start of turn, grants Def+6 to allies within 2 spaces for 1 turn. Granted only if number of that ally's movement type on current team ≤ 2."
  },
  {
    name: "Drive Atk 1",
    spCost: 120,
    icon: "22-6",
    prev: ["Spur Atk 1"],
    effect: "Grants allies within 2 spaces Atk+2 during combat."
  },
  {
    name: "Drive Atk 2",
    spCost: 240,
    icon: "22-7",
    prev: ["Drive Atk 1"],
    effect: "Grants allies within 2 spaces Atk+3 during combat."
  },
  {
    name: "Drive Def 1",
    spCost: 120,
    icon: "18-10",
    prev: ["Spur Def 1"],
    effect: "Grants allies within 2 spaces Def+2 during combat."
  },
  {
    name: "Drive Def 2",
    spCost: 240,
    icon: "18-11",
    prev: ["Drive Def 1"],
    effect: "Grants allies within 2 spaces Def+3 during combat."
  },
  {
    name: "Drive Res 1",
    spCost: 120,
    icon: "28-6",
    prev: ["Spur Res 1"],
    effect: "Grants allies within 2 spaces Res+2 during combat."
  },
  {
    name: "Drive Res 2",
    spCost: 240,
    icon: "28-7",
    prev: ["Drive Res 1"],
    effect: "Grants allies within 2 spaces Res+3 during combat."
  },
  {
    name: "Drive Spd 1",
    spCost: 120,
    icon: "26-6",
    prev: ["Spur Spd 1"],
    effect: "Grants allies within 2 spaces Spd+2 during combat."
  },
  {
    name: "Drive Spd 2",
    spCost: 240,
    icon: "26-7",
    prev: ["Drive Spd 1"],
    effect: "Grants allies within 2 spaces Spd+3 during combat."
  },
  {
    name: "Fortify Armor",
    spCost: 200,
    icon: "13-0",
    prev: ["Fortify Def 2", "Fortify Res 2"],
    include: [{moveType: "Armored"}],
    effect: "Grants adjacent armor allies Def/Res+6 through their next actions at the start of each turn."
  },
  {
    name: "Fortify Cavalry",
    spCost: 200,
    icon: "13-2",
    prev: ["Fortify Def 2", "Fortify Res 2"],
    include: [{moveType: "Cavalry"}],
    effect: "Grants adjacent cavalry allies Def/Res+6 through their next actions at the start of each turn."
  },
  {
    name: "Fortify Def 1",
    spCost: 50,
    icon: "12-6",
    effect: "Grants adjacent allies Def+2 through their next actions at the start of each turn."
  },
  {
    name: "Fortify Def 2",
    spCost: 100,
    icon: "12-7",
    prev: ["Fortify Def 1"],
    effect: "Grants adjacent allies Def+3 through their next actions at the start of each turn."
  },
  {
    name: "Fortify Def 3",
    spCost: 200,
    icon: "12-8",
    prev: ["Fortify Def 2"],
    effect: "Grants adjacent allies Def+4 through their next actions at the start of each turn."
  },
  {
    name: "Fortify Dragons",
    spCost: 200,
    icon: "14-4",
    prev: ["Fortify Def 2", "Fortify Res 2"],
    include: [{weaponType: "Breath"}],
    effect: "Grants adjacent Dragon allies Def/Res+6 through their next actions at the start of each turn."
  },
  {
    name: "Fortify Fliers",
    spCost: 200,
    icon: "13-4",
    prev: ["Fortify Def 2", "Fortify Res 2"],
    include: [{moveType: "Flying"}],
    effect: "Grants adjacent flying allies Def/Res+6 through their next actions at the start of each turn."
  },
  {
    name: "Fortify Res 1",
    spCost: 50,
    icon: "12-9",
    effect: "Grants adjacent allies Res+2 through their next actions at the start of each turn."
  },
  {
    name: "Fortify Res 2",
    spCost: 100,
    icon: "12-10",
    prev: ["Fortify Res 1"],
    effect: "Grants adjacent allies Res+3 through their next actions at the start of each turn."
  },
  {
    name: "Fortify Res 3",
    spCost: 200,
    icon: "12-11",
    prev: ["Fortify Res 2"],
    effect: "Grants adjacent allies Res+4 through their next actions at the start of each turn."
  },
  {
    name: "G Tome Valor 1",
    spCost: 30,
    icon: "24-2",
    include: [{weaponType: "Tome", colorType: "Green"}],
    effect: "If unit survives and uses a green tome, unit gets 1.5x SP. (If similar skill effects also used, only highest multiplier applied.)"
  },
  {
    name: "G Tome Valor 2",
    spCost: 60,
    icon: "24-3",
    prev: ["G Tome Valor 1"],
    include: [{weaponType: "Tome", colorType: "Green"}],
    effect: "If unit survives, all green tome users on team get 1.5x SP. (If similar skill effects also used, only highest multiplier applied.)"
  },
  {
    name: "G Tome Valor 3",
    spCost: 120,
    icon: "24-4",
    prev: ["G Tome Valor 2"],
    include: [{weaponType: "Tome", colorType: "Green"}],
    effect: "If unit survives, all green tome users on team get 2x SP. (If similar skill effects also used, only highest multiplier applied.)"
  },
  {
    name: "Goad Armor",
    spCost: 200,
    icon: "11-7",
    prev: ["Spur Atk 2", "Spur Spd 2"],
    include: [{moveType: "Armored"}],
    effect: "Grants armored allies within 2 spaces Spd/Atk+4 during combat."
  },
  {
    name: "Goad Cavalry",
    spCost: 200,
    icon: "11-9",
    prev: ["Spur Atk 2", "Spur Spd 2"],
    include: [{moveType: "Cavalry"}],
    effect: "Grants cavalry allies within 2 spaces Spd/Atk+4 during combat."
  },
  {
    name: "Goad Fliers",
    spCost: 200,
    icon: "11-11",
    prev: ["Spur Atk 2", "Spur Spd 2"],
    include: [{moveType: "Flying"}],
    effect: "Grants flying allies within 2 spaces Spd/Atk+4 during combat."
  },
  {
    name: "Guidance 1",
    spCost: 60,
    icon: "25-8",
    include: [{moveType: "Flying"}],
    effect: "If unit has 100% HP, infantry and armored allies within 2 spaces can move to a space adjacent to unit."
  },
  {
    name: "Guidance 2",
    spCost: 120,
    icon: "25-9",
    prev: ["Guidance 1"],
    include: [{moveType: "Flying"}],
    effect: "If unit has ≥ 50% HP, infantry and armored allies within 2 spaces can move to a space adjacent to unit."
  },
  {
    name: "Guidance 3",
    spCost: 240,
    icon: "25-10",
    prev: ["Guidance 2"],
    include: [{moveType: "Flying"}],
    effect: "Infantry and armored allies within 2 spaces can move to a space adjacent to unit."
  },
  {
    name: "Hone Armor",
    spCost: 200,
    icon: "12-12",
    prev: ["Hone Atk 2", "Hone Spd 2"],
    include: [{moveType: "Armored"}],
    effect: "Grants adjacent armored allies Atk/Spd+6 through their next actions at the start of each turn."
  },
  {
    name: "Hone Atk 1",
    spCost: 50,
    icon: "12-0",
    effect: "Grants adjacent allies Atk+2 through their next actions at the start of each turn."
  },
  {
    name: "Hone Atk 2",
    spCost: 100,
    icon: "12-1",
    prev: ["Hone Atk 1"],
    effect: "Grants adjacent allies Atk+3 through their next actions at the start of each turn."
  },
  {
    name: "Hone Atk 3",
    spCost: 200,
    icon: "12-2",
    prev: ["Hone Atk 2"],
    effect: "Grants adjacent allies Atk+4 through their next actions at the start of each turn."
  },
  {
    name: "Hone Cavalry",
    spCost: 200,
    icon: "13-1",
    prev: ["Hone Atk 2", "Hone Spd 2"],
    include: [{moveType: "Cavalry"}],
    effect: "Grants adjacent cavalry allies Atk/Spd+6 through their next actions at the start of each turn."
  },
  {
    name: "Hone Dragons",
    spCost: 200,
    icon: "35-8",
    prev: ["Hone Atk 2", "Hone Spd 2"],
    include: [{weaponType: "Breath"}],
    effect: "Grants adjacent dragon allies Atk/Spd+6 through their next actions at the start of each turn."
  },
  {
    name: "Hone Fliers",
    spCost: 200,
    icon: "13-3",
    prev: ["Hone Atk 2", "Hone Spd 2"],
    include: [{moveType: "Flying"}],
    effect: "Grants adjacent flying allies Atk/Spd+6 through their next actions at the start of each turn."
  },
  {
    name: "Hone Spd 1",
    spCost: 50,
    icon: "12-3",
    effect: "Grants adjacent allies Spd+2 through their next actions at the start of each turn."
  },
  {
    name: "Hone Spd 2",
    spCost: 100,
    icon: "12-4",
    prev: ["Hone Spd 1"],
    effect: "Grants adjacent allies Spd+3 through their next actions at the start of each turn."
  },
  {
    name: "Hone Spd 3",
    spCost: 200,
    icon: "12-5",
    prev: ["Hone Spd 2"],
    effect: "Grants adjacent allies Spd+4 through their next actions at the start of each turn."
  },
  {
    name: "Infantry Pulse 1",
    spCost: 60,
    icon: "24-5",
    include: [{moveType: "Infantry"}],
    effect: "Special cooldown count-1 at start of turn 1 for any Infantry allies with at least 5 fewer HP than unit. (Effects will stack with similar skills.)"
  },
  {
    name: "Infantry Pulse 2",
    spCost: 120,
    icon: "24-6",
    prev: ["Infantry Pulse 1"],
    include: [{moveType: "Infantry"}],
    effect: "Special cooldown count-1 at start of turn 1 for any Infantry allies with at least 3 fewer HP than unit. (Effects will stack with similar skills.)"
  },
  {
    name: "Infantry Pulse 3",
    spCost: 240,
    icon: "24-7",
    prev: ["Infantry Pulse 2"],
    include: [{moveType: "Infantry"}],
    effect: "Special cooldown count-1 at start of turn 1 for any Infantry allies with at least 1 fewer HP than unit. (Effects will stack with similar skills.)"
  },
  {
    name: "Lance Valor 1",
    spCost: 30,
    icon: "20-5",
    include: [{weaponType: "Lance"}],
    effect: "If unit survives and uses a lance, unit gets 1.5x SP. (If similar skill effects also used, only highest multiplier applied.)"
  },
  {
    name: "Lance Valor 2",
    spCost: 60,
    icon: "20-6",
    prev: ["Lance Valor 1"],
    include: [{weaponType: "Lance"}],
    effect: "If unit survives, all lance users on team get 1.5x SP. (If similar skill effects also used, only highest multiplier applied.)"
  },
  {
    name: "Lance Valor 3",
    spCost: 120,
    icon: "20-7",
    prev: ["Lance Valor 2"],
    include: [{weaponType: "Lance"}],
    effect: "If unit survives, all lance users on team get 2x SP. (If similar skill effects also used, only highest multiplier applied.)"
  },
  {
    name: "Panic Ploy 1",
    spCost: 60,
    icon: "19-2",
    effect: "At start of turn, bonuses become penalties on all foes in cardinal directions with HP 5 or more lower than unit through foe's next action."
  },
  {
    name: "Panic Ploy 2",
    spCost: 120,
    icon: "19-3",
    prev: ["Panic Ploy 1"],
    effect: "At start of turn, bonuses become penalties on all foes in cardinal directions with HP 3 or more lower than unit through foe's next action."
  },
  {
    name: "Panic Ploy 3",
    spCost: 240,
    icon: "19-4",
    prev: ["Panic Ploy 2"],
    effect: "At start of turn, bonuses become penalties on all foes in cardinal directions with HP 1 or more lower than unit through foe's next action."
  },
  {
    name: "R Tome Exp. 1",
    spCost: 30,
    icon: "35-12",
    include: [{weaponType: "Tome", colorType: "Red"}],
    effect: "If using red magic and unit survives combat, unit gets 1.5x EXP. (If similar skill effects also used, only highest multiplier applied.)"
  },
  {
    name: "R Tome Exp. 2",
    spCost: 60,
    icon: "36-0",
    prev: ["R Tome Exp. 1"],
    include: [{weaponType: "Tome", colorType: "Red"}],
    effect: "If unit survives combat, all red magic users on team get 1.5x EXP. (If similar skill effects also used, only highest multiplier applied.)"
  },
  {
    name: "R Tome Exp. 3",
    spCost: 120,
    icon: "36-1",
    prev: ["R Tome Exp. 2"],
    include: [{weaponType: "Tome", colorType: "Red"}],
    effect: "If unit survives combat, all red magic users on team get 2x EXP. (If similar skill effects also used, only highest multiplier applied.)"
  },
  {
    name: "R Tome Valor 1",
    spCost: 30,
    icon: "34-6",
    include: [{weaponType: "Tome", colorType: "Red"}],
    effect: "If unit survives and uses a red tome, unit gets 1.5x SP. (If similar skill effects also used, only highest multiplier applied.)"
  },
  {
    name: "R Tome Valor 2",
    spCost: 60,
    icon: "34-7",
    prev: ["R Tome Valor 1"],
    include: [{weaponType: "Tome", colorType: "Red"}],
    effect: "If unit survives, all red tome users on team get 1.5x SP. (If similar skill effects also used, only highest multiplier applied.)"
  },
  {
    name: "R Tome Valor 3",
    spCost: 120,
    icon: "34-8",
    prev: ["R Tome Valor 2"],
    include: [{weaponType: "Tome", colorType: "Red"}],
    effect: "If unit survives, all red tome users on team get 2x SP. (If similar skill effects also used, only highest multiplier applied.)"
  },
  {
    name: "Res Ploy 1",
    spCost: 60,
    icon: "23-8",
    effect: "At start of turn, all foes in cardinal directions with Res 1 or more lower than unit suffer Res-3 until the end of foe's next action."
  },
  {
    name: "Res Ploy 2",
    spCost: 120,
    icon: "23-9",
    prev: ["Res Ploy 1"],
    effect: "At start of turn, all foes in cardinal directions with Res 1 or more lower than unit suffer Res-4 until the end of foe's next action."
  },
  {
    name: "Res Ploy 3",
    spCost: 240,
    icon: "23-10",
    prev: ["Res Ploy 2"],
    effect: "At start of turn, all foes in cardinal directions with Res 1 or more lower than unit suffer Res-5 until the end of foe's next action."
  },
  {
    name: "Res Tactic 1",
    spCost: 60,
    icon: "35-9",
    effect: "At start of turn, grants Res+2 to allies within 2 spaces for 1 turn. Granted only if number of that ally's movement type on current team ≤ 2."
  },
  {
    name: "Res Tactic 2",
    spCost: 120,
    icon: "35-10",
    prev: ["Res Tactic 1"],
    effect: "At start of turn, grants Res+4 to allies within 2 spaces for 1 turn. Granted only if number of that ally's movement type on current team ≤ 2."
  },
  {
    name: "Res Tactic 3",
    spCost: 240,
    icon: "35-11",
    prev: ["Res Tactic 2"],
    effect: "At start of turn, grants Res+6 to allies within 2 spaces for 1 turn. Granted only if number of that ally's movement type on current team ≤ 2."
  },
  {
    name: "Savage Blow 1",
    spCost: 50,
    icon: "10-5",
    effect: "If unit initiates attack, foes within 2 spaces of target take 3 damage after combat."
  },
  {
    name: "Savage Blow 2",
    spCost: 100,
    icon: "10-6",
    prev: ["Savage Blow 1"],
    effect: "If unit initiates attack, foes within 2 spaces of target take 5 damage after combat."
  },
  {
    name: "Savage Blow 3",
    spCost: 200,
    icon: "10-7",
    prev: ["Savage Blow 2"],
    effect: "If unit initiates attack, foes within 2 spaces of target take 7 damage after combat."
  },
  {
    name: "Spd Ploy 1",
    spCost: 60,
    icon: "30-0",
    effect: "At start of turn, all foes in cardinal directions with Res 1 or more lower than unit suffer Spd-3 until the end of foe's next action."
  },
  {
    name: "Spd Ploy 2",
    spCost: 120,
    icon: "30-1",
    prev: ["Spd Ploy 1"],
    effect: "At start of turn, all foes in cardinal directions with Res 1 or more lower than unit suffer Spd-4 until the end of foe's next action."
  },
  {
    name: "Spd Ploy 3",
    spCost: 240,
    icon: "30-2",
    prev: ["Spd Ploy 2"],
    effect: "At start of turn, all foes in cardinal directions with Res 1 or more lower than unit suffer Spd-5 until the end of foe's next action."
  },
  {
    name: "Spd Smoke 1",
    spCost: 60,
    icon: "29-10",
    exclude: [{weaponType: "Staff"}],
    effect: "After combat, inflicts Spd-3 on foes within 2 spaces of target through their next actions."
  },
  {
    name: "Spd Smoke 2",
    spCost: 120,
    icon: "29-11",
    prev: ["Spd Smoke 1"],
    exclude: [{weaponType: "Staff"}],
    effect: "After combat, inflicts Spd-5 on foes within 2 spaces of target through their next actions."
  },
  {
    name: "Spd Smoke 3",
    spCost: 240,
    icon: "29-12",
    prev: ["Spd Smoke 2"],
    exclude: [{weaponType: "Staff"}],
    effect: "After combat, inflicts Spd-7 on foes within 2 spaces of target through their next actions."
  },
  {
    name: "Spur Atk 1",
    spCost: 50,
    icon: "10-8",
    effect: "Grants adjacent allies Atk+2 during combat."
  },
  {
    name: "Spur Atk 2",
    spCost: 100,
    icon: "10-9",
    prev: ["Spur Atk 1"],
    effect: "Grants adjacent allies Atk+3 during combat."
  },
  {
    name: "Spur Atk 3",
    spCost: 200,
    icon: "10-19",
    prev: ["Spur Atk 2"],
    effect: "Grants adjacent allies Atk+4 during combat."
  },
  {
    name: "Spur Atk/Spd 1",
    spCost: 120,
    icon: "35-6",
    prev: ["Spur Atk 1", "Spur Spd 1"],
    effect: "Grants adjacent allies Atk/Spd +2 during combat."
  },
  {
    name: "Spur Atk/Spd 2",
    spCost: 240,
    icon: "35-7",
    prev: ["Spur Atk/Spd 1"],
    effect: "Grants adjacent allies Atk/Spd +3 during combat."
  },
  {
    name: "Spur Def 1",
    spCost: 50,
    icon: "11-1",
    effect: "Grants adjacent allies Def+2 during combat."
  },
  {
    name: "Spur Def 2",
    spCost: 100,
    icon: "11-2",
    prev: ["Spur Def 1"],
    effect: "Grants adjacent allies Def+3 during combat."
  },
  {
    name: "Spur Def 3",
    spCost: 200,
    icon: "11-3",
    prev: ["Spur Def 2"],
    effect: "Grants adjacent allies Def+4 during combat."
  },
  {
    name: "Spur Def/Res 1",
    spCost: 120,
    icon: "16-7",
    prev: ["Spur Def 1", "Spur Res 1"],
    effect: "Grants adjacent allies Def/Res +2 during combat"
  },
  {
    name: "Spur Def/Res 2",
    spCost: 240,
    icon: "16-8",
    prev: ["Spur Def/Res 1"],
    effect: "Grants adjacent allies Def/Res +3 during combat."
  },
  {
    name: "Spur Res 1",
    spCost: 50,
    icon: "11-4",
    effect: "Grants adjacent allies Res+2 during combat."
  },
  {
    name: "Spur Res 2",
    spCost: 100,
    icon: "11-5",
    prev: ["Spur Res 1"],
    effect: "Grants adjacent allies Res+3 during combat."
  },
  {
    name: "Spur Res 3",
    spCost: 200,
    icon: "11-6",
    prev: ["Spur Res 2"],
    effect: "Grants adjacent allies Res+4 during combat."
  },
  {
    name: "Spur Spd 1",
    spCost: 50,
    icon: "10-11",
    effect: "Grants adjacent allies Spd+2 during combat."
  },
  {
    name: "Spur Spd 2",
    spCost: 100,
    icon: "10-12",
    prev: ["Spur Spd 1"],
    effect: "Grants adjacent allies Spd+3 during combat."
  },
  {
    name: "Spur Spd 3",
    spCost: 200,
    icon: "11-0",
    prev: ["Spur Spd 2"],
    effect: "Grants adjacent allies Spd+4 during combat."
  },
  {
    name: "Spur Spd/Def 1",
    spCost: 120,
    icon: "27-6",
    prev: ["Spur Def 1", "Spur Spd 1"],
    effect: "Grants adjacent allies Spd/Def +2 during combat"
  },
  {
    name: "Spur Spd/Def 2",
    spCost: 240,
    icon: "27-7",
    prev: ["Spur Spd/Def 1"],
    effect: "Grants adjacent allies Spd/Def +3 during combat."
  },
  {
    name: "Sword Exp. 1",
    spCost: 30,
    icon: "19-5",
    include: [{weaponType: "Sword"}],
    effect: "If unit survives, unit gets 1.5x EXP. (If similar skill effects also used, only highest multiplier applied.)"
  },
  {
    name: "Sword Exp. 2",
    spCost: 60,
    icon: "19-6",
    prev: ["Sword Exp. 1"],
    include: [{weaponType: "Sword"}],
    effect: "If unit survives, all sword users on team get 1.5x EXP. (If similar skill effects also used, only highest multiplier applied.)"
  },
  {
    name: "Sword Exp. 3",
    spCost: 120,
    icon: "19-7",
    prev: ["Sword Exp. 2"],
    include: [{weaponType: "Sword"}],
    effect: "If unit survives, all sword users on team get 2x EXP. (If similar skill effects also used, only highest multiplier applied.)"
  },
  {
    name: "Sword Valor 1",
    spCost: 30,
    icon: "22-8",
    include: [{weaponType: "Sword"}],
    effect: "If unit survives and uses a sword, unit gets 1.5x SP. (If similar skill effects also used, only highest multiplier applied.)"
  },
  {
    name: "Sword Valor 2",
    spCost: 60,
    icon: "22-9",
    prev: ["Sword Valor 1"],
    include: [{weaponType: "Sword"}],
    effect: "If unit survives, all sword users on team get 1.5x SP. (If similar skill effects also used, only highest multiplier applied.)"
  },
  {
    name: "Sword Valor 3",
    spCost: 120,
    icon: "22-10",
    prev: ["Sword Valor 2"],
    include: [{weaponType: "Sword"}],
    effect: "If unit survives, all sword users on team get 2x SP. (If similar skill effects also used, only highest multiplier applied.)"
  },
  {
    name: "Threaten Atk 1",
    spCost: 50,
    icon: "13-5",
    effect: "Inflicts Atk-3 on foes within 2 spaces through their next actions at the start of each turn."
  },
  {
    name: "Threaten Atk 2",
    spCost: 100,
    icon: "13-6",
    prev: ["Threaten Atk 1"],
    effect: "Inflicts Atk-4 on foes within 2 spaces through their next actions at the start of each turn."
  },
  {
    name: "Threaten Atk 3",
    spCost: 200,
    icon: "13-7",
    prev: ["Threaten Atk 2"],
    effect: "Inflicts Atk-5 on foes within 2 spaces through their next actions at the start of each turn."
  },
  {
    name: "Threaten Def 1",
    spCost: 50,
    icon: "13-11",
    effect: "Inflicts Def-3 on foes within 2 spaces through their next actions at the start of each turn."
  },
  {
    name: "Threaten Def 2",
    spCost: 100,
    icon: "13-12",
    prev: ["Threaten Def 1"],
    effect: "Inflicts Def-4 on foes within 2 spaces through their next actions at the start of each turn."
  },
  {
    name: "Threaten Def 3",
    spCost: 200,
    icon: "14-0",
    prev: ["Threaten Def 2"],
    effect: "Inflicts Def-5 on foes within 2 spaces through their next actions at the start of each turn."
  },
  {
    name: "Threaten Res 1",
    spCost: 50,
    icon: "14-1",
    effect: "Inflicts Res-3 on foes within 2 spaces through their next actions at the start of each turn."
  },
  {
    name: "Threaten Res 2",
    spCost: 100,
    icon: "14-2",
    prev: ["Threaten Res 1"],
    effect: "Inflicts Res-4 on foes within 2 spaces through their next actions at the start of each turn."
  },
  {
    name: "Threaten Res 3",
    spCost: 200,
    icon: "14-3",
    prev: ["Threaten Res 2"],
    effect: "Inflicts Res-5 on foes within 2 spaces through their next actions at the start of each turn."
  },
  {
    name: "Threaten Spd 1",
    spCost: 50,
    icon: "13-8",
    effect: "Inflicts Spd-3 on foes within 2 spaces through their next actions at the start of each turn."
  },
  {
    name: "Threaten Spd 2",
    spCost: 100,
    icon: "13-9",
    prev: ["Threaten Spd 1"],
    effect: "Inflicts Spd-4 on foes within 2 spaces through their next actions at the start of each turn."
  },
  {
    name: "Threaten Spd 3",
    spCost: 200,
    icon: "13-10",
    prev: ["Threaten Spd 2"],
    effect: "Inflicts Spd-5 on foes within 2 spaces through their next actions at the start of each turn."
  },
  {
    name: "Ward Armor",
    spCost: 200,
    icon: "11-8",
    prev: ["Spur Def 2", "Spur Res 2"],
    include: [{moveType: "Armored"}],
    effect: "Grants armored allies within 2 spaces Def/Res+4 during combat."
  },
  {
    name: "Ward Cavalry",
    spCost: 200,
    icon: "11-10",
    prev: ["Spur Def 2", "Spur Res 2"],
    include: [{moveType: "Cavalry"}],
    effect: "Grants cavalry allies within 2 spaces Def/Res+4 during combat."
  },
  {
    name: "Ward Dragons",
    spCost: 200,
    icon: "38-0",
    prev: ["Spur Def 2", "Spur Res 2"],
    include: [{weaponType: "Breath"}],
    effect: "Grants dragon allies within 2 spaces Def/Res+4 during combat."
  },
  {
    name: "Ward Fliers",
    spCost: 200,
    icon: "11-12",
    prev: ["Spur Def 2", "Spur Res 2"],
    include: [{moveType: "Flying"}],
    effect: "Grants flying allies within 2 spaces Def/Res+4 during combat."
  }
];

},{}],10:[function(require,module,exports){
module.exports = [
  { 
  	spCost: 350,
  	arenaMedals: 500,
  	refiningStones: 50
  },
  { 
  	spCost: 400,
  	arenaMedals: 500,
  	divineDew: 200
  },
];

},{}],11:[function(require,module,exports){
module.exports = {
  "Silver Sword+": [
    {
      name: "+Atk",
      icon: "31-9",
      stats: {hp: 5, atk: 3},
      effect: "-"
    },
    {
      name: "+Spd",
      icon: "31-10",
      stats: {hp: 5, atk: 1, spd: 3},
      effect: "-"
    },
    {
      name: "+Def",
      icon: "31-11",
      stats: {hp: 5, atk: 1, def: 4},
      effect: "-"
    },
    {
      name: "+Res",
      icon: "31-12",
      stats: {hp: 5, atk: 1, res: 4},
      effect: "-"
    }
  ],
  "Silver Lance+": [
    {
      name: "+Atk",
      icon: "31-9",
      stats: {hp: 5, atk: 3},
      effect: "-"
    },
    {
      name: "+Spd",
      icon: "31-10",
      stats: {hp: 5, atk: 1, spd: 3},
      effect: "-"
    },
    {
      name: "+Def",
      icon: "31-11",
      stats: {hp: 5, atk: 1, def: 4},
      effect: "-"
    },
    {
      name: "+Res",
      icon: "31-12",
      stats: {hp: 5, atk: 1, res: 4},
      effect: "-"
    }
  ],
  "Silver Axe+": [
    {
      name: "+Atk",
      icon: "31-9",
      stats: {hp: 5, atk: 3},
      effect: "-"
    },
    {
      name: "+Spd",
      icon: "31-10",
      stats: {hp: 5, atk: 1, spd: 3},
      effect: "-"
    },
    {
      name: "+Def",
      icon: "31-11",
      stats: {hp: 5, atk: 1, def: 4},
      effect: "-"
    },
    {
      name: "+Res",
      icon: "31-12",
      stats: {hp: 5, atk: 1, res: 4},
      effect: "-"
    }
  ],
  "Silver Bow+": [
    {
      name: "+Atk",
      icon: "31-9",
      stats: {hp: 2, atk: 2},
      effect: "Effective against flying units."
    },
    {
      name: "+Spd",
      icon: "31-10",
      stats: {hp: 2, atk: 1, spd: 2},
      effect: "Effective against flying units."
    },
    {
      name: "+Def",
      icon: "31-11",
      stats: {hp: 2, atk: 1, def: 3},
      effect: "Effective against flying units."
    },
    {
      name: "+Res",
      icon: "31-12",
      stats: {hp: 2, atk: 1, res: 3},
      effect: "Effective against flying units."
    }
  ],
  "Silver Dagger+": [
    {
      name: "+Atk",
      icon: "31-9",
      stats: {hp: 2, atk: 5},
      effect: "After combat, inflicts Def/Res-7 on target and foes within 2 spaces of target through their next actions."
    },
    {
      name: "+Spd",
      icon: "31-10",
      stats: {hp: 2, atk: 4, spd: 2},
      effect: "After combat, inflicts Def/Res-7 on target and foes within 2 spaces of target through their next actions."
    },
    {
      name: "+Def",
      icon: "31-11",
      stats: {hp: 2, atk: 4, def: 3},
      effect: "After combat, inflicts Def/Res-7 on target and foes within 2 spaces of target through their next actions."
    },
    {
      name: "+Res",
      icon: "31-12",
      stats: {hp: 2, atk: 4, res: 3},
      effect: "After combat, inflicts Def/Res-7 on target and foes within 2 spaces of target through their next actions."
    }
  ],
  "Bolganone+": [
    {
      name: "+Atk",
      icon: "31-9",
      stats: {hp: 2, atk: 2},
      effect: "-"
    },
    {
      name: "+Spd",
      icon: "31-10",
      stats: {hp: 2, atk: 1, spd: 2},
      effect: "-"
    },
    {
      name: "+Def",
      icon: "31-11",
      stats: {hp: 2, atk: 1, def: 3},
      effect: "-"
    },
    {
      name: "+Res",
      icon: "31-12",
      stats: {hp: 2, atk: 1, res: 3},
      effect: "-"
    }
  ],
  "Fenrir+": [
    {
      name: "+Atk",
      icon: "31-9",
      stats: {hp: 2, atk: 2},
      effect: "-"
    },
    {
      name: "+Spd",
      icon: "31-10",
      stats: {hp: 2, atk: 1, spd: 2},
      effect: "-"
    },
    {
      name: "+Def",
      icon: "31-11",
      stats: {hp: 2, atk: 1, def: 3},
      effect: "-"
    },
    {
      name: "+Res",
      icon: "31-12",
      stats: {hp: 2, atk: 1, res: 3},
      effect: "-"
    }
  ],
  "Thoron+": [
    {
      name: "+Atk",
      icon: "31-9",
      stats: {hp: 2, atk: 2},
      effect: "-"
    },
    {
      name: "+Spd",
      icon: "31-10",
      stats: {hp: 2, atk: 1, spd: 2},
      effect: "-"
    },
    {
      name: "+Def",
      icon: "31-11",
      stats: {hp: 2, atk: 1, def: 3},
      effect: "-"
    },
    {
      name: "+Res",
      icon: "31-12",
      stats: {hp: 2, atk: 1, res: 3},
      effect: "-"
    }
  ],
  "Shine+": [
    {
      name: "+Atk",
      icon: "31-9",
      stats: {hp: 2, atk: 2},
      effect: "-"
    },
    {
      name: "+Spd",
      icon: "31-10",
      stats: {hp: 2, atk: 1, spd: 2},
      effect: "-"
    },
    {
      name: "+Def",
      icon: "31-11",
      stats: {hp: 2, atk: 1, def: 3},
      effect: "-"
    },
    {
      name: "+Res",
      icon: "31-12",
      stats: {hp: 2, atk: 1, res: 3},
      effect: "-"
    }
  ],
  "Rexcalibur+": [
    {
      name: "+Atk",
      icon: "31-9",
      stats: {hp: 2, atk: 2},
      effect: "-"
    },
    {
      name: "+Spd",
      icon: "31-10",
      stats: {hp: 2, atk: 1, spd: 2},
      effect: "-"
    },
    {
      name: "+Def",
      icon: "31-11",
      stats: {hp: 2, atk: 1, def: 3},
      effect: "-"
    },
    {
      name: "+Res",
      icon: "31-12",
      stats: {hp: 2, atk: 1, res: 3},
      effect: "-"
    }
  ],
  "Flametongue+": [
    {
      name: "+Atk",
      icon: "31-9",
      stats: {hp: 5, atk: 3},
      effect: "If foe's Range = 2, damage calculated using the lower of foe's Def or Res."
    },
    {
      name: "+Spd",
      icon: "31-10",
      stats: {hp: 5, atk: 1, spd: 3},
      effect: "If foe's Range = 2, damage calculated using the lower of foe's Def or Res."
    },
    {
      name: "+Def",
      icon: "31-11",
      stats: {hp: 5, atk: 1, def: 4},
      effect: "If foe's Range = 2, damage calculated using the lower of foe's Def or Res."
    },
    {
      name: "+Res",
      icon: "31-12",
      stats: {hp: 5, atk: 1, res: 4},
      effect: "If foe's Range = 2, damage calculated using the lower of foe's Def or Res."
    }
  ],
  "Slaying Edge+": [
    {
      name: "+Atk",
      icon: "31-9",
      stats: {hp: 5, atk: 2},
      effect: "Accelerates Special trigger (cooldown count-1)."
    },
    {
      name: "+Spd",
      icon: "31-10",
      stats: {hp: 5, spd: 3},
      effect: "Accelerates Special trigger (cooldown count-1)."
    },
    {
      name: "+Def",
      icon: "31-11",
      stats: {hp: 5, def: 4},
      effect: "Accelerates Special trigger (cooldown count-1)."
    },
    {
      name: "+Res",
      icon: "31-12",
      stats: {hp: 5, res: 4},
      effect: "Accelerates Special trigger (cooldown count-1)."
    }
  ],
  "Slaying Lance+": [
    {
      name: "+Atk",
      icon: "31-9",
      stats: {hp: 5, atk: 2},
      effect: "Accelerates Special trigger (cooldown count-1)."
    },
    {
      name: "+Spd",
      icon: "31-10",
      stats: {hp: 5, spd: 3},
      effect: "Accelerates Special trigger (cooldown count-1)."
    },
    {
      name: "+Def",
      icon: "31-11",
      stats: {hp: 5, def: 4},
      effect: "Accelerates Special trigger (cooldown count-1)."
    },
    {
      name: "+Res",
      icon: "31-12",
      stats: {hp: 5, res: 4},
      effect: "Accelerates Special trigger (cooldown count-1)."
    }
  ],
  "Slaying Axe+": [
    {
      name: "+Atk",
      icon: "31-9",
      stats: {hp: 5, atk: 2},
      effect: "Accelerates Special trigger (cooldown count-1)."
    },
    {
      name: "+Spd",
      icon: "31-10",
      stats: {hp: 5, spd: 3},
      effect: "Accelerates Special trigger (cooldown count-1)."
    },
    {
      name: "+Def",
      icon: "31-11",
      stats: {hp: 5, def: 4},
      effect: "Accelerates Special trigger (cooldown count-1)."
    },
    {
      name: "+Res",
      icon: "31-12",
      stats: {hp: 5, res: 4},
      effect: "Accelerates Special trigger (cooldown count-1)."
    }
  ],
  "Slaying Bow+": [
    {
      name: "+Atk",
      icon: "31-9",
      stats: {hp: 2, atk: 1},
      effect: "Effective against flying units. Accelerates Special trigger (cooldown count-1)."
    },
    {
      name: "+Spd",
      icon: "31-10",
      stats: {hp: 2, spd: 2},
      effect: "Effective against flying units. Accelerates Special trigger (cooldown count-1)."
    },
    {
      name: "+Def",
      icon: "31-11",
      stats: {hp: 2, def: 3},
      effect: "Effective against flying units. Accelerates Special trigger (cooldown count-1)."
    },
    {
      name: "+Res",
      icon: "31-12",
      stats: {hp: 2, res: 4},
      effect: "Effective against flying units. Accelerates Special trigger (cooldown count-1)."
    }
  ],
  "Armorsmasher+": [
    {
      name: "Nullify Armored",
      icon: "32-8",
      stats: {hp: 3},
      effect: "Effective against armored foes. If in combat against an armored foe, nullifies foe's bonuses (from skills like Fortify, Rally, etc.) during combat."
    },
    {
      name: "+Atk",
      icon: "31-9",
      stats: {hp: 5, atk: 2},
      effect: "Effective against armored foes."
    },
    {
      name: "+Spd",
      icon: "31-10",
      stats: {hp: 5, spd: 3},
      effect: "Effective against armored foes."
    },
    {
      name: "+Def",
      icon: "31-11",
      stats: {hp: 5, def: 4},
      effect: "Effective against armored foes."
    },
    {
      name: "+Res",
      icon: "31-12",
      stats: {hp: 5, res: 4},
      effect: "Effective against armored foes."
    }
  ],
  "Slaying Spear+": [
    {
      name: "Nullify Armored",
      icon: "32-8",
      stats: {hp: 3},
      effect: "Effective against armored foes. If in combat against an armored foe, nullifies foe's bonuses (from skills like Fortify, Rally, etc.) during combat."
    },
    {
      name: "+Atk",
      icon: "31-9",
      stats: {hp: 5, atk: 2},
      effect: "Effective against armored foes."
    },
    {
      name: "+Spd",
      icon: "31-10",
      stats: {hp: 5, spd: 3},
      effect: "Effective against armored foes."
    },
    {
      name: "+Def",
      icon: "31-11",
      stats: {hp: 5, def: 4},
      effect: "Effective against armored foes."
    },
    {
      name: "+Res",
      icon: "31-12",
      stats: {hp: 5, res: 4},
      effect: "Effective against armored foes."
    }
  ],
  "Slaying Hammer+": [
    {
      name: "Nullify Armored",
      icon: "32-8",
      stats: {hp: 3},
      effect: "Effective against armored foes. If in combat against an armored foe, nullifies foe's bonuses (from skills like Fortify, Rally, etc.) during combat."
    },
    {
      name: "+Atk",
      icon: "31-9",
      stats: {hp: 5, atk: 2},
      effect: "Effective against armored foes."
    },
    {
      name: "+Spd",
      icon: "31-10",
      stats: {hp: 5, spd: 3},
      effect: "Effective against armored foes."
    },
    {
      name: "+Def",
      icon: "31-11",
      stats: {hp: 5, def: 4},
      effect: "Effective against armored foes."
    },
    {
      name: "+Res",
      icon: "31-12",
      stats: {hp: 5, res: 4},
      effect: "Effective against armored foes."
    }
  ],
  "Zanbato+": [
    {
      name: "Nullify Cavalry",
      icon: "32-9",
      stats: {hp: 3},
      effect: "Effective against cavalry foes. If in combat against an cavalry foe, nullifies foe's bonuses (from skills like Fortify, Rally, etc.) during combat."
    },
    {
      name: "+Atk",
      icon: "31-9",
      stats: {hp: 5, atk: 2},
      effect: "Effective against cavalry foes."
    },
    {
      name: "+Spd",
      icon: "31-10",
      stats: {hp: 5, spd: 3},
      effect: "Effective against cavalry foes."
    },
    {
      name: "+Def",
      icon: "31-11",
      stats: {hp: 5, def: 4},
      effect: "Effective against cavalry foes."
    },
    {
      name: "+Res",
      icon: "31-12",
      stats: {hp: 5, res: 4},
      effect: "Effective against cavalry foes."
    }
  ],
  "Ridersbane+": [
    {
      name: "Nullify Cavalry",
      icon: "32-9",
      stats: {hp: 3},
      effect: "Effective against cavalry foes. If in combat against an cavalry foe, nullifies foe's bonuses (from skills like Fortify, Rally, etc.) during combat."
    },
    {
      name: "+Atk",
      icon: "31-9",
      stats: {hp: 5, atk: 2},
      effect: "Effective against cavalry foes."
    },
    {
      name: "+Spd",
      icon: "31-10",
      stats: {hp: 5, spd: 3},
      effect: "Effective against cavalry foes."
    },
    {
      name: "+Def",
      icon: "31-11",
      stats: {hp: 5, def: 4},
      effect: "Effective against cavalry foes."
    },
    {
      name: "+Res",
      icon: "31-12",
      stats: {hp: 5, res: 4},
      effect: "Effective against cavalry foes."
    }
  ],
  "Keen Rauðrwolf+": [
    {
      name: "Nullify Cavalry",
      icon: "32-9",
      effect: "Effective against cavalry foes. If in combat against an cavalry foe, nullifies foe's bonuses (from skills like Fortify, Rally, etc.) during combat."
    },
    {
      name: "+Atk",
      icon: "31-9",
      stats: {hp: 2, atk: 1},
      effect: "Effective against cavalry foes."
    },
    {
      name: "+Spd",
      icon: "31-10",
      stats: {hp: 2, spd: 2},
      effect: "Effective against cavalry foes."
    },
    {
      name: "+Def",
      icon: "31-11",
      stats: {hp: 2, def: 3},
      effect: "Effective against cavalry foes."
    },
    {
      name: "+Res",
      icon: "31-12",
      stats: {hp: 2, res: 3},
      effect: "Effective against cavalry foes."
    }
  ],
  "Keen Blárwolf+": [
    {
      name: "Nullify Cavalry",
      icon: "32-9",
      effect: "Effective against cavalry foes. If in combat against an cavalry foe, nullifies foe's bonuses (from skills like Fortify, Rally, etc.) during combat."
    },
    {
      name: "+Atk",
      icon: "31-9",
      stats: {hp: 2, atk: 1},
      effect: "Effective against cavalry foes."
    },
    {
      name: "+Spd",
      icon: "31-10",
      stats: {hp: 2, spd: 2},
      effect: "Effective against cavalry foes."
    },
    {
      name: "+Def",
      icon: "31-11",
      stats: {hp: 2, def: 3},
      effect: "Effective against cavalry foes."
    },
    {
      name: "+Res",
      icon: "31-12",
      stats: {hp: 2, res: 3},
      effect: "Effective against cavalry foes."
    }
  ],
  "Keen Gronnwolf+": [
    {
      name: "Nullify Cavalry",
      icon: "32-9",
      effect: "Effective against cavalry foes. If in combat against an cavalry foe, nullifies foe's bonuses (from skills like Fortify, Rally, etc.) during combat."
    },
    {
      name: "+Atk",
      icon: "31-9",
      stats: {hp: 2, atk: 1},
      effect: "Effective against cavalry foes."
    },
    {
      name: "+Spd",
      icon: "31-10",
      stats: {hp: 2, spd: 2},
      effect: "Effective against cavalry foes."
    },
    {
      name: "+Def",
      icon: "31-11",
      stats: {hp: 2, def: 3},
      effect: "Effective against cavalry foes."
    },
    {
      name: "+Res",
      icon: "31-12",
      stats: {hp: 2, res: 3},
      effect: "Effective against cavalry foes."
    }
  ],
  "Absorb+": [
    {
      name: "Wrathful Staff",
      icon: "32-1",
      effect: "Recovers HP = 50% of damage dealt. After combat, restores 7 HP to allies within 2 spaces of unit. Damage from unit's staff will be calculated the same as other weapons."
    },
    {
      name: "Dazzling Staff",
      icon: "32-2",
      effect: "Recovers HP = 50% of damage dealt. After combat, restores 7 HP to allies within 2 spaces of unit. The enemy cannot counterattack."
    }
  ],
  "Fear+": [
    {
      name: "Wrathful Staff",
      icon: "32-1",
      effect: "After combat, inflicts Atk-7 on target and foes within 2 spaces through their next actions. Damage from unit's staff will be calculated the same as other weapons."
    },
    {
      name: "Dazzling Staff",
      icon: "32-2",
      effect: "After combat, inflicts Atk-7 on target and foes within 2 spaces through their next actions. The enemy cannot counterattack."
    }
  ],
  "Slow+": [
    {
      name: "Wrathful Staff",
      icon: "32-1",
      effect: "After combat, inflicts Spd-7 on target and foes within 2 spaces through their next actions. Damage from unit's staff will be calculated the same as other weapons."
    },
    {
      name: "Dazzling Staff",
      icon: "32-2",
      effect: "After combat, inflicts Spd-7 on target and foes within 2 spaces through their next actions. The enemy cannot counterattack."
    }
  ],
  "Gravity+": [
    {
      name: "Wrathful Staff",
      icon: "32-1",
      effect: "After combat, prevents target and foes within 1 space of target from moving more than 1 space through their next actions. Damage from unit's staff will be calculated the same as other weapons."
    },
    {
      name: "Dazzling Staff",
      icon: "32-2",
      effect: "After combat, prevents target and foes within 1 space of target from moving more than 1 space through their next actions. The enemy cannot counterattack."
    }
  ],
  "Pain+": [
    {
      name: "Wrathful Staff",
      icon: "32-1",
      effect: "Deals 10 damage to target and foes within 2 spaces of target after combat. Damage from unit's staff will be calculated the same as other weapons."
    },
    {
      name: "Dazzling Staff",
      icon: "32-2",
      effect: "Deals 10 damage to target and foes within 2 spaces of target after combat. The enemy cannot counterattack."
    }
  ],
  "Panic+": [
    {
      name: "Wrathful Staff",
      icon: "32-1",
      effect: "After combat, bonuses on target and foes within 2 spaces of target become penalties through their next actions. Damage from unit's staff will be calculated the same as other weapons."
    },
    {
      name: "Dazzling Staff",
      icon: "32-2",
      effect: "After combat, bonuses on target and foes within 2 spaces of target become penalties through their next actions. The enemy cannot counterattack."
    }
  ],
  "Candlelight+": [
    {
      name: "Wrathful Staff",
      icon: "32-1",
      effect: "After combat, foe and foes within 2 spaces of target inflicted with status preventing counterattack through their next actions. Damage from unit's staff will be calculated the same as other weapons."
    },
    {
      name: "Dazzling Staff",
      icon: "32-2",
      effect: "After combat, foe and foes within 2 spaces of target inflicted with status preventing counterattack through their next actions. The enemy cannot counterattack."
    }
  ],
  "Carrot Lance+": [
    {
      name: "+Atk",
      icon: "31-9",
      stats: {hp: 5, atk: 3},
      effect: "Restores 4 HP after combat."
    },
    {
      name: "+Spd",
      icon: "31-10",
      stats: {hp: 5, atk: 1, spd: 3},
      effect: "Restores 4 HP after combat."
    },
    {
      name: "+Def",
      icon: "31-11",
      stats: {hp: 5, atk: 1, def: 4},
      effect: "Restores 4 HP after combat."
    },
    {
      name: "+Res",
      icon: "31-12",
      stats: {hp: 5, atk: 1, res: 4},
      effect: "Restores 4 HP after combat."
    }
  ],
  "Carrot Axe+": [
    {
      name: "+Atk",
      icon: "31-9",
      stats: {hp: 5, atk: 3},
      effect: "Restores 4 HP after combat."
    },
    {
      name: "+Spd",
      icon: "31-10",
      stats: {hp: 5, atk: 1, spd: 3},
      effect: "Restores 4 HP after combat."
    },
    {
      name: "+Def",
      icon: "31-11",
      stats: {hp: 5, atk: 1, def: 4},
      effect: "Restores 4 HP after combat."
    },
    {
      name: "+Res",
      icon: "31-12",
      stats: {hp: 5, atk: 1, res: 4},
      effect: "Restores 4 HP after combat."
    }
  ],
  "Blue Egg+": [
    {
      name: "+Atk",
      icon: "31-9",
      stats: {hp: 2, atk: 2},
      effect: "Restores 4 HP after combat."
    },
    {
      name: "+Spd",
      icon: "31-10",
      stats: {hp: 2, atk: 1, spd: 2},
      effect: "Restores 4 HP after combat."
    },
    {
      name: "+Def",
      icon: "31-11",
      stats: {hp: 2, atk: 1, def: 3},
      effect: "Restores 4 HP after combat."
    },
    {
      name: "+Res",
      icon: "31-12",
      stats: {hp: 2, atk: 1, res: 3},
      effect: "Restores 4 HP after combat."
    }
  ],
  "Green Egg+": [
    {
      name: "+Atk",
      icon: "31-9",
      stats: {hp: 2, atk: 2},
      effect: "Restores 4 HP after combat."
    },
    {
      name: "+Spd",
      icon: "31-10",
      stats: {hp: 2, atk: 1, spd: 2},
      effect: "Restores 4 HP after combat."
    },
    {
      name: "+Def",
      icon: "31-11",
      stats: {hp: 2, atk: 1, def: 3},
      effect: "Restores 4 HP after combat."
    },
    {
      name: "+Res",
      icon: "31-12",
      stats: {hp: 2, atk: 1, res: 3},
      effect: "Restores 4 HP after combat."
    }
  ],
  "First Bite+": [
    {
      name: "+Atk",
      icon: "31-9",
      stats: {hp: 5, atk: 2},
      effect: "After combat, grants Def/Res+5 to unit and allies within 2 spaces for 1 turn."
    },
    {
      name: "+Spd",
      icon: "31-10",
      stats: {hp: 5, spd: 3},
      effect: "After combat, grants Def/Res+5 to unit and allies within 2 spaces for 1 turn."
    },
    {
      name: "+Def",
      icon: "31-11",
      stats: {hp: 5, def: 4},
      effect: "After combat, grants Def/Res+5 to unit and allies within 2 spaces for 1 turn."
    },
    {
      name: "+Res",
      icon: "31-12",
      stats: {hp: 5, res: 4},
      effect: "After combat, grants Def/Res+5 to unit and allies within 2 spaces for 1 turn."
    }
  ],
  "Cupid Arrow+": [
    {
      name: "+Atk",
      icon: "31-9",
      stats: {hp: 2, atk: 1},
      effect: "Effective against flying foes.  After combat, grants Def/Res+5 to unit and allies within 2 spaces for 1 turn."
    },
    {
      name: "+Spd",
      icon: "31-10",
      stats: {hp: 2, spd: 2},
      effect: "Effective against flying foes.  After combat, grants Def/Res+5 to unit and allies within 2 spaces for 1 turn."
    },
    {
      name: "+Def",
      icon: "31-11",
      stats: {hp: 2, def: 3},
      effect: "Effective against flying foes.  After combat, grants Def/Res+5 to unit and allies within 2 spaces for 1 turn."
    },
    {
      name: "+Res",
      icon: "31-12",
      stats: {hp: 2, res: 3},
      effect: "Effective against flying foes.  After combat, grants Def/Res+5 to unit and allies within 2 spaces for 1 turn."
    }
  ],
  "Blessed Bouquet+": [
    {
      name: "+Atk",
      icon: "31-9",
      stats: {hp: 2, atk: 1},
      effect: "After combat, grants Def/Res+5 to unit and allies within 2 spaces for 1 turn."
    },
    {
      name: "+Spd",
      icon: "31-10",
      stats: {hp: 2, spd: 2},
      effect: "After combat, grants Def/Res+5 to unit and allies within 2 spaces for 1 turn."
    },
    {
      name: "+Def",
      icon: "31-11",
      stats: {hp: 2, def: 3},
      effect: "After combat, grants Def/Res+5 to unit and allies within 2 spaces for 1 turn."
    },
    {
      name: "+Res",
      icon: "31-12",
      stats: {hp: 2, res: 3},
      effect: "After combat, grants Def/Res+5 to unit and allies within 2 spaces for 1 turn."
    }
  ],
  "Deft Harpoon+": [
    {
      name: "+Atk",
      icon: "31-9",
      stats: {hp: 5, atk: 2},
      effect: "If unit has 100% HP at start of combat, unit gets Atk/Spd/Def/Res+2. If attacking, unit will take 2 damage after combat."
    },
    {
      name: "+Spd",
      icon: "31-10",
      stats: {hp: 5, spd: 3},
      effect: "If unit has 100% HP at start of combat, unit gets Atk/Spd/Def/Res+2. If attacking, unit will take 2 damage after combat."
    },
    {
      name: "+Def",
      icon: "31-11",
      stats: {hp: 5, def: 4},
      effect: "If unit has 100% HP at start of combat, unit gets Atk/Spd/Def/Res+2. If attacking, unit will take 2 damage after combat."
    },
    {
      name: "+Res",
      icon: "31-12",
      stats: {hp: 5, res: 4},
      effect: "If unit has 100% HP at start of combat, unit gets Atk/Spd/Def/Res+2. If attacking, unit will take 2 damage after combat."
    }
  ],
  "Melon Crusher+": [
    {
      name: "+Atk",
      icon: "31-9",
      stats: {hp: 5, atk: 2},
      effect: "If unit has 100% HP at start of combat, unit gets Atk/Spd/Def/Res+2. If attacking, unit will take 2 damage after combat."
    },
    {
      name: "+Spd",
      icon: "31-10",
      stats: {hp: 5, spd: 3},
      effect: "If unit has 100% HP at start of combat, unit gets Atk/Spd/Def/Res+2. If attacking, unit will take 2 damage after combat."
    },
    {
      name: "+Def",
      icon: "31-11",
      stats: {hp: 5, def: 4},
      effect: "If unit has 100% HP at start of combat, unit gets Atk/Spd/Def/Res+2. If attacking, unit will take 2 damage after combat."
    },
    {
      name: "+Res",
      icon: "31-12",
      stats: {hp: 5, res: 4},
      effect: "If unit has 100% HP at start of combat, unit gets Atk/Spd/Def/Res+2. If attacking, unit will take 2 damage after combat."
    }
  ],
  "Refreshing Bolt+": [
    {
      name: "+Atk",
      icon: "31-9",
      stats: {hp: 2, atk: 1},
      effect: "If unit has 100% HP at start of combat, unit gets Atk/Spd/Def/Res+2. If attacking, unit will take 2 damage after combat. Effective against fliers."
    },
    {
      name: "+Spd",
      icon: "31-10",
      stats: {hp: 2, spd: 2},
      effect: "If unit has 100% HP at start of combat, unit gets Atk/Spd/Def/Res+2. If attacking, unit will take 2 damage after combat. Effective against fliers."
    },
    {
      name: "+Def",
      icon: "31-11",
      stats: {hp: 2, def: 3},
      effect: "If unit has 100% HP at start of combat, unit gets Atk/Spd/Def/Res+2. If attacking, unit will take 2 damage after combat. Effective against fliers."
    },
    {
      name: "+Res",
      icon: "31-12",
      stats: {hp: 2, res: 3},
      effect: "If unit has 100% HP at start of combat, unit gets Atk/Spd/Def/Res+2. If attacking, unit will take 2 damage after combat. Effective against fliers."
    }
  ],
  "Seashell+": [
    {
      name: "+Atk",
      icon: "31-9",
      stats: {hp: 2, atk: 3},
      effect: "After combat, inflicts Def/Res-7 on target and foes within 2 spaces of target through their next actions. If unit's HP = 100% at start of combat, grants Atk/Spd/Def/Res+2. If attacking, unit takes 2 damage after combat."
    },
    {
      name: "+Spd",
      icon: "31-10",
      stats: {hp: 2, atk: 2, spd: 2},
      effect: "After combat, inflicts Def/Res-7 on target and foes within 2 spaces of target through their next actions. If unit's HP = 100% at start of combat, grants Atk/Spd/Def/Res+2. If attacking, unit takes 2 damage after combat."
    },
    {
      name: "+Def",
      icon: "31-11",
      stats: {hp: 2, atk: 2, def: 3},
      effect: "After combat, inflicts Def/Res-7 on target and foes within 2 spaces of target through their next actions. If unit's HP = 100% at start of combat, grants Atk/Spd/Def/Res+2. If attacking, unit takes 2 damage after combat."
    },
    {
      name: "+Res",
      icon: "31-12",
      stats: {hp: 2, atk: 2, res: 3},
      effect: "After combat, inflicts Def/Res-7 on target and foes within 2 spaces of target through their next actions. If unit's HP = 100% at start of combat, grants Atk/Spd/Def/Res+2. If attacking, unit takes 2 damage after combat."
    }
  ],
  "Lilith Floatie+": [
    {
      name: "+Atk",
      icon: "31-9",
      stats: {hp: 5, atk: 2},
      effect: "Grants allies within 2 spaces Atk/Spd+1 during combat."
    },
    {
      name: "+Spd",
      icon: "31-10",
      stats: {hp: 5, spd: 3},
      effect: "Grants allies within 2 spaces Atk/Spd+1 during combat."
    },
    {
      name: "+Def",
      icon: "31-11",
      stats: {hp: 5, def: 4},
      effect: "Grants allies within 2 spaces Atk/Spd+1 during combat."
    },
    {
      name: "+Res",
      icon: "31-12",
      stats: {hp: 5, res: 4},
      effect: "Grants allies within 2 spaces Atk/Spd+1 during combat."
    }
  ],
  "Tomato Tome+": [
    {
      name: "+Atk",
      icon: "31-9",
      stats: {hp: 2, atk: 1},
      effect: "Grants allies within 2 spaces Atk/Spd+1 during combat."
    },
    {
      name: "+Spd",
      icon: "31-10",
      stats: {hp: 2, spd: 2},
      effect: "Grants allies within 2 spaces Atk/Spd+1 during combat."
    },
    {
      name: "+Def",
      icon: "31-11",
      stats: {hp: 2, def: 3},
      effect: "Grants allies within 2 spaces Atk/Spd+1 during combat."
    },
    {
      name: "+Res",
      icon: "31-12",
      stats: {hp: 2, res: 3},
      effect: "Grants allies within 2 spaces Atk/Spd+1 during combat."
    }
  ],
  "Sealife Tome+": [
    {
      name: "+Atk",
      icon: "31-9",
      stats: {hp: 2, atk: 1},
      effect: "Grants allies within 2 spaces Atk/Spd+1 during combat."
    },
    {
      name: "+Spd",
      icon: "31-10",
      stats: {hp: 2, spd: 2},
      effect: "Grants allies within 2 spaces Atk/Spd+1 during combat."
    },
    {
      name: "+Def",
      icon: "31-11",
      stats: {hp: 2, def: 3},
      effect: "Grants allies within 2 spaces Atk/Spd+1 during combat."
    },
    {
      name: "+Res",
      icon: "31-12",
      stats: {hp: 2, res: 3},
      effect: "Grants allies within 2 spaces Atk/Spd+1 during combat."
    }
  ],
  "Hibiscus Tome+": [
    {
      name: "+Atk",
      icon: "31-9",
      stats: {hp: 2, atk: 1},
      effect: "Grants allies within 2 spaces Atk/Spd+1 during combat."
    },
    {
      name: "+Spd",
      icon: "31-10",
      stats: {hp: 2, spd: 2},
      effect: "Grants allies within 2 spaces Atk/Spd+1 during combat."
    },
    {
      name: "+Def",
      icon: "31-11",
      stats: {hp: 2, def: 3},
      effect: "Grants allies within 2 spaces Atk/Spd+1 during combat."
    },
    {
      name: "+Res",
      icon: "31-12",
      stats: {hp: 2, res: 3},
      effect: "Grants allies within 2 spaces Atk/Spd+1 during combat."
    }
  ],
  "Dancer's Fan+": [
    {
      name: "+Atk",
      icon: "31-9",
      stats: {hp: 2, atk: 3},
      effect: "If unit initiates combat, restores 7 HP to adjacent allies after combat. After combat, inflicts Def/Res-7 on target and foes within 2 spaces of target through their next actions."
    },
    {
      name: "+Spd",
      icon: "31-10",
      stats: {hp: 2, atk: 2, spd: 2},
      effect: "If unit initiates combat, restores 7 HP to adjacent allies after combat. After combat, inflicts Def/Res-7 on target and foes within 2 spaces of target through their next actions."
    },
    {
      name: "+Def",
      icon: "31-11",
      stats: {hp: 2, atk: 2, def: 3},
      effect: "If unit initiates combat, restores 7 HP to adjacent allies after combat. After combat, inflicts Def/Res-7 on target and foes within 2 spaces of target through their next actions."
    },
    {
      name: "+Res",
      icon: "31-12",
      stats: {hp: 2, atk: 2, res: 3},
      effect: "If unit initiates combat, restores 7 HP to adjacent allies after combat. After combat, inflicts Def/Res-7 on target and foes within 2 spaces of target through their next actions."
    }
  ],
  "Dancer's Score+": [
    {
      name: "+Atk",
      icon: "31-9",
      stats: {hp: 2, atk: 1},
      effect: "If unit initiates attack, adjacent allies recover 7 HP after combat."
    },
    {
      name: "+Spd",
      icon: "31-10",
      stats: {hp: 2, spd: 2},
      effect: "If unit initiates attack, adjacent allies recover 7 HP after combat."
    },
    {
      name: "+Def",
      icon: "31-11",
      stats: {hp: 2, def: 3},
      effect: "If unit initiates attack, adjacent allies recover 7 HP after combat."
    },
    {
      name: "+Res",
      icon: "31-12",
      stats: {hp: 2, res: 3},
      effect: "If unit initiates attack, adjacent allies recover 7 HP after combat."
    }
  ],
  "Dancer's Ring+": [
    {
      name: "+Atk",
      icon: "31-9",
      stats: {hp: 2, atk: 1},
      effect: "If unit initiates attack, adjacent allies recover 7 HP after combat."
    },
    {
      name: "+Spd",
      icon: "31-10",
      stats: {hp: 2, spd: 2},
      effect: "If unit initiates attack, adjacent allies recover 7 HP after combat."
    },
    {
      name: "+Def",
      icon: "31-11",
      stats: {hp: 2, def: 3},
      effect: "If unit initiates attack, adjacent allies recover 7 HP after combat."
    },
    {
      name: "+Res",
      icon: "31-12",
      stats: {hp: 2, res: 3},
      effect: "If unit initiates attack, adjacent allies recover 7 HP after combat."
    }
  ],
  "Monstrous Bow+": [
    {
      name: "+Atk",
      icon: "31-9",
      stats: {hp: 2, atk: 1},
      effect: "Effective against flying foes. After combat, bonuses on target and all foes within 2 spaces of target become penalties through their next actions."
    },
    {
      name: "+Spd",
      icon: "31-10",
      stats: {hp: 2, spd: 2},
      effect: "Effective against flying foes. After combat, bonuses on target and all foes within 2 spaces of target become penalties through their next actions."
    },
    {
      name: "+Def",
      icon: "31-11",
      stats: {hp: 2, def: 3},
      effect: "Effective against flying foes. After combat, bonuses on target and all foes within 2 spaces of target become penalties through their next actions."
    },
    {
      name: "+Res",
      icon: "31-12",
      stats: {hp: 2, res: 3},
      effect: "Effective against flying foes. After combat, bonuses on target and all foes within 2 spaces of target become penalties through their next actions."
    }
  ],
  "Spectral Tome+": [
    {
      name: "+Atk",
      icon: "31-9",
      stats: {hp: 2, atk: 1},
      effect: "After combat, bonuses on target and foes within 2 spaces of target become penalties through their next actions."
    },
    {
      name: "+Spd",
      icon: "31-10",
      stats: {hp: 2, spd: 2},
      effect: "After combat, bonuses on target and foes within 2 spaces of target become penalties through their next actions."
    },
    {
      name: "+Def",
      icon: "31-11",
      stats: {hp: 2, def: 3},
      effect: "After combat, bonuses on target and foes within 2 spaces of target become penalties through their next actions."
    },
    {
      name: "+Res",
      icon: "31-12",
      stats: {hp: 2, res: 3},
      effect: "After combat, bonuses on target and foes within 2 spaces of target become penalties through their next actions."
    }
  ],
  "Wo Dao+": [
    {
      name: "+Atk",
      icon: "31-9",
      stats: {hp: 5, atk: 3},
      effect: "Grants +10 to damage when Special triggers."
    },
    {
      name: "+Spd",
      icon: "31-10",
      stats: {hp: 5, atk: 1, spd: 3},
      effect: "Grants +10 to damage when Special triggers."
    },
    {
      name: "+Def",
      icon: "31-11",
      stats: {hp: 5, atk: 1, def: 4},
      effect: "Grants +10 to damage when Special triggers."
    },
    {
      name: "+Res",
      icon: "31-12",
      stats: {hp: 5, atk: 1, res: 4},
      effect: "Grants +10 to damage when Special triggers."
    }
  ],
  "Rauðrowl+": [
    {
      name: "+Atk",
      icon: "31-9",
      stats: {hp: 2, atk: 2},
      effect: "During combat, unit's Atk/Spd/Def/Res boosted by number of adjacent allies x 2."
    },
    {
      name: "+Spd",
      icon: "31-10",
      stats: {hp: 2, atk: 1, spd: 2},
      effect: "During combat, unit's Atk/Spd/Def/Res boosted by number of adjacent allies x 2."
    },
    {
      name: "+Def",
      icon: "31-11",
      stats: {hp: 2, atk: 1, def: 3},
      effect: "During combat, unit's Atk/Spd/Def/Res boosted by number of adjacent allies x 2."
    },
    {
      name: "+Res",
      icon: "31-12",
      stats: {hp: 2, atk: 1, res: 3},
      effect: "During combat, unit's Atk/Spd/Def/Res boosted by number of adjacent allies x 2."
    }
  ],
  "Blárowl+": [
    {
      name: "+Atk",
      icon: "31-9",
      stats: {hp: 2, atk: 2},
      effect: "During combat, unit's Atk/Spd/Def/Res boosted by number of adjacent allies x 2."
    },
    {
      name: "+Spd",
      icon: "31-10",
      stats: {hp: 2, atk: 1, spd: 2},
      effect: "During combat, unit's Atk/Spd/Def/Res boosted by number of adjacent allies x 2."
    },
    {
      name: "+Def",
      icon: "31-11",
      stats: {hp: 2, atk: 1, def: 3},
      effect: "During combat, unit's Atk/Spd/Def/Res boosted by number of adjacent allies x 2."
    },
    {
      name: "+Res",
      icon: "31-12",
      stats: {hp: 2, atk: 1, res: 3},
      effect: "During combat, unit's Atk/Spd/Def/Res boosted by number of adjacent allies x 2."
    }
  ],
  "Gronnowl+": [
    {
      name: "+Atk",
      icon: "31-9",
      stats: {hp: 2, atk: 2},
      effect: "During combat, unit's Atk/Spd/Def/Res boosted by number of adjacent allies x 2."
    },
    {
      name: "+Spd",
      icon: "31-10",
      stats: {hp: 2, atk: 1, spd: 2},
      effect: "During combat, unit's Atk/Spd/Def/Res boosted by number of adjacent allies x 2."
    },
    {
      name: "+Def",
      icon: "31-11",
      stats: {hp: 2, atk: 1, def: 3},
      effect: "During combat, unit's Atk/Spd/Def/Res boosted by number of adjacent allies x 2."
    },
    {
      name: "+Res",
      icon: "31-12",
      stats: {hp: 2, atk: 1, res: 3},
      effect: "During combat, unit's Atk/Spd/Def/Res boosted by number of adjacent allies x 2."
    }
  ],
  "Guard Bow+": [
    {
      name: "+Atk",
      icon: "31-9",
      stats: {hp: 2, atk: 1},
      effect: "Effective against flying foes. Grants Def/Res+6 during combat if unit is attacked by foe using bow, daggers, magic, or staff."
    },
    {
      name: "+Spd",
      icon: "31-10",
      stats: {hp: 2, spd: 2},
      effect: "Effective against flying foes. Grants Def/Res+6 during combat if unit is attacked by foe using bow, daggers, magic, or staff."
    },
    {
      name: "+Def",
      icon: "31-11",
      stats: {hp: 2, def: 3},
      effect: "Effective against flying foes. Grants Def/Res+6 during combat if unit is attacked by foe using bow, daggers, magic, or staff."
    },
    {
      name: "+Res",
      icon: "31-12",
      stats: {hp: 2, res: 3},
      effect: "Effective against flying foes. Grants Def/Res+6 during combat if unit is attacked by foe using bow, daggers, magic, or staff."
    }
  ],
  "Smoke Dagger+": [
    {
      name: "+Atk",
      icon: "31-9",
      stats: {hp: 2, atk: 4},
      effect: "After combat, inflicts Atk/Spd/Def/Res-6 on target and foes within 2 spaces of target through their next actions."
    },
    {
      name: "+Spd",
      icon: "31-10",
      stats: {hp: 2, atk: 3, spd: 2},
      effect: "After combat, inflicts Atk/Spd/Def/Res-6 on target and foes within 2 spaces of target through their next actions."
    },
    {
      name: "+Def",
      icon: "31-11",
      stats: {hp: 2, atk: 3, def: 3},
      effect: "After combat, inflicts Atk/Spd/Def/Res-6 on target and foes within 2 spaces of target through their next actions."
    },
    {
      name: "+Res",
      icon: "31-12",
      stats: {hp: 2, atk: 3, res: 3},
      effect: "After combat, inflicts Atk/Spd/Def/Res-6 on target and foes within 2 spaces of target through their next actions."
    }
  ],
  "Rogue Dagger+": [
    {
      name: "+Atk",
      icon: "31-9",
      stats: {hp: 2, atk: 6},
      effect: "After combat, inflicts Def/Res-6 on target and foes within 2 spaces of target through their next actions. Also grants Def/Res+6 to unit and allies within 2 spaces for 1 turn."
    },
    {
      name: "+Spd",
      icon: "31-10",
      stats: {hp: 2, atk: 5, spd: 2},
      effect: "After combat, inflicts Def/Res-6 on target and foes within 2 spaces of target through their next actions. Also grants Def/Res+6 to unit and allies within 2 spaces for 1 turn."
    },
    {
      name: "+Def",
      icon: "31-11",
      stats: {hp: 2, atk: 5, def: 3},
      effect: "After combat, inflicts Def/Res-6 on target and foes within 2 spaces of target through their next actions. Also grants Def/Res+6 to unit and allies within 2 spaces for 1 turn."
    },
    {
      name: "+Res",
      icon: "31-12",
      stats: {hp: 2, atk: 5, res: 3},
      effect: "After combat, inflicts Def/Res-6 on target and foes within 2 spaces of target through their next actions. Also grants Def/Res+6 to unit and allies within 2 spaces for 1 turn."
    }
  ],
  "Lightning Breath+": [
    {
      name: "+Atk",
      icon: "31-9",
      stats: {hp: 5, atk: 3},
      effect: "Slows Special trigger (cooldown count+1). If attacked, unit can counterattack regardless of foe's range. If foe's Range = 2, damage calculated using the lower of foe's Def or Res."
    },
    {
      name: "+Spd",
      icon: "31-10",
      stats: {hp: 5, atk: 1, spd: 3},
      effect: "Slows Special trigger (cooldown count+1). If attacked, unit can counterattack regardless of foe's range. If foe's Range = 2, damage calculated using the lower of foe's Def or Res."
    },
    {
      name: "+Def",
      icon: "31-11",
      stats: {hp: 5, atk: 1, def: 4},
      effect: "Slows Special trigger (cooldown count+1). If attacked, unit can counterattack regardless of foe's range. If foe's Range = 2, damage calculated using the lower of foe's Def or Res."
    },
    {
      name: "+Res",
      icon: "31-12",
      stats: {hp: 5, atk: 1, res: 4},
      effect: "Slows Special trigger (cooldown count+1). If attacked, unit can counterattack regardless of foe's range. If foe's Range = 2, damage calculated using the lower of foe's Def or Res."
    }
  ],
  "Light Breath+": [
    {
      name: "+Atk",
      icon: "31-9",
      stats: {hp: 5, atk: 3},
      effect: "After combat, grants Atk/Spd/Def/Res+5 to unit and allies within 2 spaces for 1 turn. If foe's Range = 2, damage calculated using the lower of foe's Def or Res."
    },
    {
      name: "+Spd",
      icon: "31-10",
      stats: {hp: 5, atk: 1, spd: 3},
      effect: "After combat, grants Atk/Spd/Def/Res+5 to unit and allies within 2 spaces for 1 turn. If foe's Range = 2, damage calculated using the lower of foe's Def or Res."
    },
    {
      name: "+Def",
      icon: "31-11",
      stats: {hp: 5, atk: 1, def: 4},
      effect: "After combat, grants Atk/Spd/Def/Res+5 to unit and allies within 2 spaces for 1 turn. If foe's Range = 2, damage calculated using the lower of foe's Def or Res."
    },
    {
      name: "+Res",
      icon: "31-12",
      stats: {hp: 5, atk: 1, res: 4},
      effect: "After combat, grants Atk/Spd/Def/Res+5 to unit and allies within 2 spaces for 1 turn. If foe's Range = 2, damage calculated using the lower of foe's Def or Res."
    }
  ],
  "Dark Breath+": [
    {
      name: "+Atk",
      icon: "31-9",
      stats: {hp: 5, atk: 3},
      effect: "After combat, inflicts Atk/Spd-7 to target and foes within 2 spaces of target through their next actions. If foe's Range = 2, damage calculated using the lower of foe's Def or Res."
    },
    {
      name: "+Spd",
      icon: "31-10",
      stats: {hp: 5, atk: 1, spd: 3},
      effect: "After combat, inflicts Atk/Spd-7 to target and foes within 2 spaces of target through their next actions. If foe's Range = 2, damage calculated using the lower of foe's Def or Res."
    },
    {
      name: "+Def",
      icon: "31-11",
      stats: {hp: 5, atk: 1, def: 4},
      effect: "After combat, inflicts Atk/Spd-7 to target and foes within 2 spaces of target through their next actions. If foe's Range = 2, damage calculated using the lower of foe's Def or Res."
    },
    {
      name: "+Res",
      icon: "31-12",
      stats: {hp: 5, atk: 1, res: 4},
      effect: "After combat, inflicts Atk/Spd-7 to target and foes within 2 spaces of target through their next actions. If foe's Range = 2, damage calculated using the lower of foe's Def or Res."
    }
  ],
  "Legion's Axe+": [
    {
      name: "+Atk",
      icon: "31-9",
      stats: {hp: 5, atk: 2},
      effect: "After combat, bonuses on target and foes within 2 spaces of target become penalties through their next actions."
    },
    {
      name: "+Spd",
      icon: "31-10",
      stats: {hp: 5, spd: 3},
      effect: "After combat, bonuses on target and foes within 2 spaces of target become penalties through their next actions."
    },
    {
      name: "+Def",
      icon: "31-11",
      stats: {hp: 5, def: 4},
      effect: "After combat, bonuses on target and foes within 2 spaces of target become penalties through their next actions."
    },
    {
      name: "+Res",
      icon: "31-12",
      stats: {hp: 5, res: 4},
      effect: "After combat, bonuses on target and foes within 2 spaces of target become penalties through their next actions."
    }
  ],
  "Clarisse's Bow+": [
    {
      name: "+Atk",
      icon: "31-9",
      stats: {hp: 2, atk: 1},
      effect: "Effective against flying foes. After unit attacks, inflicts Atk/Spd-5 on target and foes within 2 spaces of target through their next actions."
    },
    {
      name: "+Spd",
      icon: "31-10",
      stats: {hp: 2, spd: 2},
      effect: "Effective against flying foes. After unit attacks, inflicts Atk/Spd-5 on target and foes within 2 spaces of target through their next actions."
    },
    {
      name: "+Def",
      icon: "31-11",
      stats: {hp: 2, def: 3},
      effect: "Effective against flying foes. After unit attacks, inflicts Atk/Spd-5 on target and foes within 2 spaces of target through their next actions."
    },
    {
      name: "+Res",
      icon: "31-12",
      stats: {hp: 2, res: 3},
      effect: "Effective against flying foes. After unit attacks, inflicts Atk/Spd-5 on target and foes within 2 spaces of target through their next actions."
    }
  ],
  "Berkut's Lance+": [
    {
      name: "+Atk",
      icon: "31-9",
      stats: {hp: 5, atk: 2},
      effect: "Grants Res+7 when unit is attacked."
    },
    {
      name: "+Spd",
      icon: "31-10",
      stats: {hp: 5, spd: 3},
      effect: "Grants Res+7 when unit is attacked."
    },
    {
      name: "+Def",
      icon: "31-11",
      stats: {hp: 5, def: 4},
      effect: "Grants Res+7 when unit is attacked."
    },
    {
      name: "+Res",
      icon: "31-12",
      stats: {hp: 5, res: 4},
      effect: "Grants Res+7 when unit is attacked."
    }
  ],
  "Handbell+": [
    {
      name: "+Atk",
      icon: "31-9",
      stats: {hp: 5, atk: 2},
      effect: "Grants Atk/Spd/Def/Res+2 during combat if foe initiates combat."
    },
    {
      name: "+Spd",
      icon: "31-10",
      stats: {hp: 5, spd: 3},
      effect: "Grants Atk/Spd/Def/Res+2 during combat if foe initiates combat."
    },
    {
      name: "+Def",
      icon: "31-11",
      stats: {hp: 5, def: 4},
      effect: "Grants Atk/Spd/Def/Res+2 during combat if foe initiates combat."
    },
    {
      name: "+Res",
      icon: "31-12",
      stats: {hp: 5, res: 4},
      effect: "Grants Atk/Spd/Def/Res+2 during combat if foe initiates combat."
    }
  ],
  "Sack o' Gifts+": [
    {
      name: "+Atk",
      icon: "31-9",
      stats: {hp: 5, atk: 2},
      effect: "Grants Atk/Spd/Def/Res+2 during combat if foe initiates combat."
    },
    {
      name: "+Spd",
      icon: "31-10",
      stats: {hp: 5, spd: 3},
      effect: "Grants Atk/Spd/Def/Res+2 during combat if foe initiates combat."
    },
    {
      name: "+Def",
      icon: "31-11",
      stats: {hp: 5, def: 4},
      effect: "Grants Atk/Spd/Def/Res+2 during combat if foe initiates combat."
    },
    {
      name: "+Res",
      icon: "31-12",
      stats: {hp: 5, res: 4},
      effect: "Grants Atk/Spd/Def/Res+2 during combat if foe initiates combat."
    }
  ],
  "Tannenboom!+": [
    {
      name: "+Atk",
      icon: "31-9",
      stats: {hp: 5, atk: 2},
      effect: "Grants Atk/Spd/Def/Res+2 during combat if foe initiates combat."
    },
    {
      name: "+Spd",
      icon: "31-10",
      stats: {hp: 5, spd: 3},
      effect: "Grants Atk/Spd/Def/Res+2 during combat if foe initiates combat."
    },
    {
      name: "+Def",
      icon: "31-11",
      stats: {hp: 5, def: 4},
      effect: "Grants Atk/Spd/Def/Res+2 during combat if foe initiates combat."
    },
    {
      name: "+Res",
      icon: "31-12",
      stats: {hp: 5, res: 4},
      effect: "Grants Atk/Spd/Def/Res+2 during combat if foe initiates combat."
    }
  ],
  "Candelabra+": [
    {
      name: "+Atk",
      icon: "31-9",
      stats: {hp: 2, atk: 2},
      effect: "Grants Atk/Spd/Def/Res+2 during combat if foe initiates combat."
    },
    {
      name: "+Spd",
      icon: "31-10",
      stats: {hp: 2, atk: 1, spd: 2},
      effect: "Grants Atk/Spd/Def/Res+2 during combat if foe initiates combat."
    },
    {
      name: "+Def",
      icon: "31-11",
      stats: {hp: 2, atk: 1, def: 3},
      effect: "Grants Atk/Spd/Def/Res+2 during combat if foe initiates combat."
    },
    {
      name: "+Res",
      icon: "31-12",
      stats: {hp: 2, atk: 1, res: 3},
      effect: "Grants Atk/Spd/Def/Res+2 during combat if foe initiates combat."
    }
  ],
  "Hagoita+": [
    {
      name: "+Atk",
      icon: "31-9",
      stats: {hp: 5, atk: 2},
      effect: "Grants Def/Res+2 during combat to allies within 2 spaces."
    },
    {
      name: "+Spd",
      icon: "31-10",
      stats: {hp: 5, spd: 3},
      effect: "Grants Def/Res+2 during combat to allies within 2 spaces."
    },
    {
      name: "+Def",
      icon: "31-11",
      stats: {hp: 5, def: 4},
      effect: "Grants Def/Res+2 during combat to allies within 2 spaces."
    },
    {
      name: "+Res",
      icon: "31-12",
      stats: {hp: 5, res: 4},
      effect: "Grants Def/Res+2 during combat to allies within 2 spaces."
    }
  ],
  "Kadomatsu+": [
    {
      name: "+Atk",
      icon: "31-9",
      stats: {hp: 5, atk: 2},
      effect: "Grants Def/Res+2 during combat to allies within 2 spaces."
    },
    {
      name: "+Spd",
      icon: "31-10",
      stats: {hp: 5, spd: 3},
      effect: "Grants Def/Res+2 during combat to allies within 2 spaces."
    },
    {
      name: "+Def",
      icon: "31-11",
      stats: {hp: 5, def: 4},
      effect: "Grants Def/Res+2 during combat to allies within 2 spaces."
    },
    {
      name: "+Res",
      icon: "31-12",
      stats: {hp: 5, res: 4},
      effect: "Grants Def/Res+2 during combat to allies within 2 spaces."
    }
  ],
  "Kagami Mochi+": [
    {
      name: "+Atk",
      icon: "31-9",
      stats: {hp: 2, atk: 1},
      effect: "Accelerates Special trigger (cooldown count-1). After combat, if unit attacked, inflicts Def/Res-7 on target and foes within 2 spaces through their next actions."
    },
    {
      name: "+Spd",
      icon: "31-10",
      stats: {hp: 2, spd: 2},
      effect: "Accelerates Special trigger (cooldown count-1). After combat, if unit attacked, inflicts Def/Res-7 on target and foes within 2 spaces through their next actions."
    },
    {
      name: "+Def",
      icon: "31-11",
      stats: {hp: 2, def: 3},
      effect: "Accelerates Special trigger (cooldown count-1). After combat, if unit attacked, inflicts Def/Res-7 on target and foes within 2 spaces through their next actions."
    },
    {
      name: "+Res",
      icon: "31-12",
      stats: {hp: 2, res: 3},
      effect: "Accelerates Special trigger (cooldown count-1). After combat, if unit attacked, inflicts Def/Res-7 on target and foes within 2 spaces through their next actions."
    }
  ],
  "Hama Ya+": [
    {
      name: "+Atk",
      icon: "31-9",
      stats: {hp: 2, atk: 1},
      effect: "Effective against flying foes. Grants Def/Res+2 during combat to allies within 2 spaces.	"
    },
    {
      name: "+Spd",
      icon: "31-10",
      stats: {hp: 2, spd: 2},
      effect: "Effective against flying foes. Grants Def/Res+2 during combat to allies within 2 spaces.	"
    },
    {
      name: "+Def",
      icon: "31-11",
      stats: {hp: 2, def: 3},
      effect: "Effective against flying foes. Grants Def/Res+2 during combat to allies within 2 spaces.	"
    },
    {
      name: "+Res",
      icon: "31-12",
      stats: {hp: 2, res: 3},
      effect: "Effective against flying foes. Grants Def/Res+2 during combat to allies within 2 spaces.	"
    }
  ],
  "Green Gift+": [
    {
      name: "+Atk",
      icon: "31-9",
      stats: {hp: 2, atk: 1},
      effect: "If foe uses bow, dagger, magic, or staff, neutralizes foe's bonuses (from skills like Fortify, Rally, etc.) during combat."
    },
    {
      name: "+Spd",
      icon: "31-10",
      stats: {hp: 2, spd: 2},
      effect: "If foe uses bow, dagger, magic, or staff, neutralizes foe's bonuses (from skills like Fortify, Rally, etc.) during combat."
    },
    {
      name: "+Def",
      icon: "31-11",
      stats: {hp: 2, def: 3},
      effect: "If foe uses bow, dagger, magic, or staff, neutralizes foe's bonuses (from skills like Fortify, Rally, etc.) during combat."
    },
    {
      name: "+Res",
      icon: "31-12",
      stats: {hp: 2, res: 3},
      effect: "If foe uses bow, dagger, magic, or staff, neutralizes foe's bonuses (from skills like Fortify, Rally, etc.) during combat."
    }
  ],
  "Blue Gift+": [
    {
      name: "+Atk",
      icon: "31-9",
      stats: {hp: 2, atk: 1},
      effect: "If foe uses bow, dagger, magic, or staff, neutralizes foe's bonuses (from skills like Fortify, Rally, etc.) during combat."
    },
    {
      name: "+Spd",
      icon: "31-10",
      stats: {hp: 2, spd: 2},
      effect: "If foe uses bow, dagger, magic, or staff, neutralizes foe's bonuses (from skills like Fortify, Rally, etc.) during combat."
    },
    {
      name: "+Def",
      icon: "31-11",
      stats: {hp: 2, def: 3},
      effect: "If foe uses bow, dagger, magic, or staff, neutralizes foe's bonuses (from skills like Fortify, Rally, etc.) during combat."
    },
    {
      name: "+Res",
      icon: "31-12",
      stats: {hp: 2, res: 3},
      effect: "If foe uses bow, dagger, magic, or staff, neutralizes foe's bonuses (from skills like Fortify, Rally, etc.) during combat."
    }
  ],
  "Gratia+": [
    {
      name: "+Atk",
      icon: "31-9",
      stats: {hp: 2, atk: 1},
      effect: "Effective against flying foes. If foe uses bow, dagger, magic, or staff, neutralizes foe's bonuses (from skills like Fortify, Rally, etc.) during combat."
    },
    {
      name: "+Spd",
      icon: "31-10",
      stats: {hp: 2, spd: 2},
      effect: "Effective against flying foes. If foe uses bow, dagger, magic, or staff, neutralizes foe's bonuses (from skills like Fortify, Rally, etc.) during combat."
    },
    {
      name: "+Def",
      icon: "31-11",
      stats: {hp: 2, def: 3},
      effect: "Effective against flying foes. If foe uses bow, dagger, magic, or staff, neutralizes foe's bonuses (from skills like Fortify, Rally, etc.) during combat."
    },
    {
      name: "+Res",
      icon: "31-12",
      stats: {hp: 2, res: 3},
      effect: "Effective against flying foes. If foe uses bow, dagger, magic, or staff, neutralizes foe's bonuses (from skills like Fortify, Rally, etc.) during combat."
    }
  ],
  "Casa Blanca+": [
    {
      name: "+Atk",
      icon: "31-9",
      stats: {hp: 5, atk: 2},
      effect: "If foe uses bow, dagger, magic, or staff, neutralizes foe's bonuses (from skills like Fortify, Rally, etc.) during combat."
    },
    {
      name: "+Spd",
      icon: "31-10",
      stats: {hp: 5, spd: 3},
      effect: "If foe uses bow, dagger, magic, or staff, neutralizes foe's bonuses (from skills like Fortify, Rally, etc.) during combat."
    },
    {
      name: "+Def",
      icon: "31-11",
      stats: {hp: 5, def: 4},
      effect: "If foe uses bow, dagger, magic, or staff, neutralizes foe's bonuses (from skills like Fortify, Rally, etc.) during combat."
    },
    {
      name: "+Res",
      icon: "31-12",
      stats: {hp: 5, res: 4},
      effect: "If foe uses bow, dagger, magic, or staff, neutralizes foe's bonuses (from skills like Fortify, Rally, etc.) during combat."
    }
  ],
  "Blárserpent+": [
    {
      name: "+Atk",
      icon: "31-9",
      stats: {hp: 2, atk: 1},
      effect: "Grants Def/Res+6 during combat if foe initiates combat and uses bow, dagger, magic, or staff."
    },
    {
      name: "+Spd",
      icon: "31-10",
      stats: {hp: 2, spd: 2},
      effect: "Grants Def/Res+6 during combat if foe initiates combat and uses bow, dagger, magic, or staff."
    },
    {
      name: "+Def",
      icon: "31-11",
      stats: {hp: 2, def: 3},
      effect: "Grants Def/Res+6 during combat if foe initiates combat and uses bow, dagger, magic, or staff."
    },
    {
      name: "+Res",
      icon: "31-12",
      stats: {hp: 2, res: 3},
      effect: "Grants Def/Res+6 during combat if foe initiates combat and uses bow, dagger, magic, or staff."
    }
  ],
  "Poleaxe+": [
    {
      name: "Nullify Cavalry",
      icon: "32-9",
      stats: {hp: 3},
      effect: "Effective against cavalry units. If in combat against a cavalry foe, nullifies foe's bonuses (from skills like Fortify, Rally, etc.) during combat."
    },
    {
      name: "+Atk",
      icon: "31-9",
      stats: {hp: 5, atk: 2},
      effect: "Effective against cavalry units."
    },
    {
      name: "+Spd",
      icon: "31-10",
      stats: {hp: 5, spd: 3},
      effect: "Effective against cavalry units."
    },
    {
      name: "+Def",
      icon: "31-11",
      stats: {hp: 5, def: 4},
      effect: "Effective against cavalry units."
    },
    {
      name: "+Res",
      icon: "31-12",
      stats: {hp: 5, res: 4},
      effect: "Effective against cavalry units."
    }
  ],


  // prf weapons
  "Sol Katti": [
    {
      name: "Brash Assault",
      icon: "32-3",
      cost: 1,
      stats: {hp: 3},
      effect: "If unit initiates combat with HP ≤ 75%, follow-up attacks occur immediately after unit's attack. If unit initiates combat against a foe that can counter and unit's HP ≤ 75%, unit makes a guaranteed follow-up attack."
    },
    {
      name: "+Atk",
      icon: "31-9",
      cost: 1,
      stats: {hp: 5, atk: 2},
      effect: "If unit initiates combat with HP ≤ 75%, follow-up attacks occur immediately after unit's attack."
    },
    {
      name: "+Spd",
      icon: "31-10",
      cost: 1,
      stats: {hp: 5, spd: 3},
      effect: "If unit initiates combat with HP ≤ 75%, follow-up attacks occur immediately after unit's attack."
    },
    {
      name: "+Def",
      icon: "31-11",
      cost: 1,
      stats: {hp: 5, def: 4},
      effect: "If unit initiates combat with HP ≤ 75%, follow-up attacks occur immediately after unit's attack."
    },
    {
      name: "+Res",
      icon: "31-12",
      cost: 1,
      stats: {hp: 5, res: 4},
      effect: "If unit initiates combat with HP ≤ 75%, follow-up attacks occur immediately after unit's attack."
    }
  ],
  "Mystletainn": [
    {
      name: "Fury",
      icon: "32-0",
      cost: 1,
      stats: {hp: 3, atk: 3, spd: 3, def: 3, res: 3},
      effect: "Accelerates Special trigger (cooldown count-1). Grants Atk/Spd/Def/Res+3. Unit takes 6 damage after combat."
    },
    {
      name: "+Atk",
      icon: "31-9",
      cost: 1,
      stats: {hp: 5, atk: 2},
      effect: "Accelerates Special trigger (cooldown count-1)."
    },
    {
      name: "+Spd",
      icon: "31-10",
      cost: 1,
      stats: {hp: 5, spd: 3},
      effect: "Accelerates Special trigger (cooldown count-1)."
    },
    {
      name: "+Def",
      icon: "31-11",
      cost: 1,
      stats: {hp: 5, def: 4},
      effect: "Accelerates Special trigger (cooldown count-1)."
    },
    {
      name: "+Res",
      icon: "31-12",
      cost: 1,
      stats: {hp: 5, res: 4},
      effect: "Accelerates Special trigger (cooldown count-1)."
    }
  ],
  "Siegmund": [
    {
      name: "Follow-up Attack",
      icon: "32-4",
      cost: 1,
      stats: {hp: 3},
      effect: "Grants adjacent allies Atk+4 through their next actions at the start of each turn. If unit initiates combat and unit's HP ≥ 90%, unit makes a guaranteed follow-up attack."
    },
    {
      name: "+Atk",
      icon: "31-9",
      cost: 1,
      stats: {hp: 5, atk: 2},
      effect: "Grants adjacent allies Atk+4 through their next actions at the start of each turn."
    },
    {
      name: "+Spd",
      icon: "31-10",
      cost: 1,
      stats: {hp: 5, spd: 3},
      effect: "Grants adjacent allies Atk+4 through their next actions at the start of each turn."
    },
    {
      name: "+Def",
      icon: "31-11",
      cost: 1,
      stats: {hp: 5, def: 4},
      effect: "Grants adjacent allies Atk+4 through their next actions at the start of each turn."
    },
    {
      name: "+Res",
      icon: "31-12",
      cost: 1,
      stats: {hp: 5, res: 4},
      effect: "Grants adjacent allies Atk+4 through their next actions at the start of each turn."
    }
  ],
  "Hauteclere": [
    {
      name: "+Special Damage",
      icon: "32-6",
      cost: 1,
      stats: {hp: 3},
      effect: "Accelerates Special trigger (cooldown count-1). Deals +10 damage when Special triggers."
    },
    {
      name: "+Atk",
      icon: "31-9",
      cost: 1,
      stats: {hp: 5, atk: 2},
      effect: "Accelerates Special trigger (cooldown count-1)."
    },
    {
      name: "+Spd",
      icon: "31-10",
      cost: 1,
      stats: {hp: 5, spd: 3},
      effect: "Accelerates Special trigger (cooldown count-1)."
    },
    {
      name: "+Def",
      icon: "31-11",
      cost: 1,
      stats: {hp: 5, def: 4},
      effect: "Accelerates Special trigger (cooldown count-1)."
    },
    {
      name: "+Res",
      icon: "31-12",
      cost: 1,
      stats: {hp: 5, res: 4},
      effect: "Accelerates Special trigger (cooldown count-1)."
    }
  ],
  "Fujin Yumi": [
    {
      name: "Formation",
      icon: "32-5",
      cost: 1,
      stats: {hp: 0},
      effect: "Effective against flying foes. If unit's HP ≥ 50%, unit is not slowed by terrain. (Does not apply to impassable terrain). If unit's HP ≥ 50%, unit can move adjacent to any ally within 2 spaces."
    },
    {
      name: "+Atk",
      icon: "31-9",
      cost: 1,
      stats: {hp: 2, atk: 1},
      effect: "Effective against flying foes. If unit's HP ≥ 50%, unit is not slowed by terrain. (Does not apply to impassable terrain.)"
    },
    {
      name: "+Spd",
      icon: "31-10",
      cost: 1,
      stats: {hp: 2, spd: 2},
      effect: "Effective against flying foes. If unit's HP ≥ 50%, unit is not slowed by terrain. (Does not apply to impassable terrain.)"
    },
    {
      name: "+Def",
      icon: "31-11",
      cost: 1,
      stats: {hp: 2, def: 3},
      effect: "Effective against flying foes. If unit's HP ≥ 50%, unit is not slowed by terrain. (Does not apply to impassable terrain.)"
    },
    {
      name: "+Res",
      icon: "31-12",
      cost: 1,
      stats: {hp: 2, res: 3},
      effect: "Effective against flying foes. If unit's HP ≥ 50%, unit is not slowed by terrain. (Does not apply to impassable terrain.)"
    }
  ],
  "Deathly Dagger": [
    {
      name: "Magicsweep",
      icon: "32-7",
      cost: 1,
      stats: {atk: 3},
      effect: "After combat, deals 10 damage to target and foes within 2 spaces of target. Also inflicts Def/Res-7 through their next actions. Foes using magic cannot counterattack."
    },
    {
      name: "+Atk",
      icon: "31-9",
      cost: 1,
      stats: {hp: 2, atk: 4},
      effect: "After combat, deals 10 damage to target and foes within 2 spaces of target. Also inflicts Def/Res-7 through their next actions."
    },
    {
      name: "+Spd",
      icon: "31-10",
      cost: 1,
      stats: {hp: 2, atk: 3, spd: 2},
      effect: "After combat, deals 10 damage to target and foes within 2 spaces of target. Also inflicts Def/Res-7 through their next actions."
    },
    {
      name: "+Def",
      icon: "31-11",
      cost: 1,
      stats: {hp: 2, atk: 3, def: 3},
      effect: "After combat, deals 10 damage to target and foes within 2 spaces of target. Also inflicts Def/Res-7 through their next actions."
    },
    {
      name: "+Res",
      icon: "31-12",
      cost: 1,
      stats: {hp: 2, atk: 3, res: 3},
      effect: "After combat, deals 10 damage to target and foes within 2 spaces of target. Also inflicts Def/Res-7 through their next actions."
    }
  ],
  "Parthia": [
    {
      name: "+Atk vs Ranged",
      icon: "35-3",
      cost: 1,
      effect: "Effective against flying foes. If foe uses magic, damage from first attack received by unit during combat reduced by 30%. Grants Atk+6 during combat if foe uses bow, dagger, magic, or staff."
    },
    {
      name: "+Atk",
      icon: "31-9",
      cost: 1,
      stats: {hp: 2, atk: 1},
      effect: "Effective against flying foes. If foe uses magic, damage from first attack received by unit during combat reduced by 30%."
    },
    {
      name: "+Spd",
      icon: "31-10",
      cost: 1,
      stats: {hp: 2, spd: 2},
      effect: "Effective against flying foes. If foe uses magic, damage from first attack received by unit during combat reduced by 30%."
    },
    {
      name: "+Def",
      icon: "31-11",
      cost: 1,
      stats: {hp: 2, def: 3},
      effect: "Effective against flying foes. If foe uses magic, damage from first attack received by unit during combat reduced by 30%."
    },
    {
      name: "+Res",
      icon: "31-12",
      cost: 1,
      stats: {hp: 2, res: 3},
      effect: "Effective against flying foes. If foe uses magic, damage from first attack received by unit during combat reduced by 30%."
    }
  ],
  "Cymbeline": [
    {
      name: "Atk/Res Bond",
      icon: "35-4",
      cost: 1,
      effect: "Grants allies within 2 spaces Atk+3 during combat. Grants Atk/Res+5 during combat if within 2 spaces of a flying ally."
    },
    {
      name: "+Atk",
      icon: "31-9",
      cost: 1,
      stats: {hp: 2, atk: 1},
      effect: "-"
    },
    {
      name: "+Spd",
      icon: "31-10",
      cost: 1,
      stats: {hp: 2, spd: 2},
      effect: "-"
    },
    {
      name: "+Def",
      icon: "31-11",
      cost: 1,
      stats: {hp: 2, def: 3},
      effect: "-"
    },
    {
      name: "+Res",
      icon: "31-12",
      cost: 1,
      stats: {hp: 2, res: 3},
      effect: "-"
    }
  ],
  "Hinoka's Spear": [
    {
      name: "Infantry/Flier Guidance",
      icon: "36-6",
      cost: 1,
      stats: {hp: 3},
      effect: "Grants Atk/Spd+4 during combat if infantry or flying ally is within 2 spaces of unit. Infantry and flying allies within 2 spaces can move to a space adjacent to unit."
    },
    {
      name: "+Atk",
      icon: "31-9",
      cost: 1,
      stats: {hp: 5, atk: 2},
      effect: "Grants Atk/Spd+4 during combat if infantry or flying ally is within 2 spaces of unit."
    },
    {
      name: "+Spd",
      icon: "31-10",
      cost: 1,
      stats: {hp: 5, spd: 3},
      effect: "Grants Atk/Spd+4 during combat if infantry or flying ally is within 2 spaces of unit."
    },
    {
      name: "+Def",
      icon: "31-11",
      cost: 1,
      stats: {hp: 5, def: 4},
      effect: "Grants Atk/Spd+4 during combat if infantry or flying ally is within 2 spaces of unit."
    },
    {
      name: "+Res",
      icon: "31-12",
      cost: 1,
      stats: {hp: 5, res: 4},
      effect: "Grants Atk/Spd+4 during combat if infantry or flying ally is within 2 spaces of unit."
    }
  ],
  "Wing Sword": [
    {
      name: "Flashing Blade",
      icon: "36-3",
      cost: 1,
      stats: {hp: 3},
      effect: "Effective against armored and cavalry foes. If unit's Spd - foe's Spd ≥ 1, unit gains Special cooldown charge +1 per attack. (If using other similar skill, only highest value applied.)"
    },
    {
      name: "+Atk",
      icon: "31-9",
      cost: 1,
      stats: {hp: 5, atk: 2},
      effect: "Effective against armored and cavalry foes."
    },
    {
      name: "+Spd",
      icon: "31-10",
      cost: 1,
      stats: {hp: 5, spd: 3},
      effect: "Effective against armored and cavalry foes."
    },
    {
      name: "+Def",
      icon: "31-11",
      cost: 1,
      stats: {hp: 5, def: 4},
      effect: "Effective against armored and cavalry foes."
    },
    {
      name: "+Res",
      icon: "31-12",
      cost: 1,
      stats: {hp: 5, res: 4},
      effect: "Effective against armored and cavalry foes."
    }
  ],
  "Basilikos": [
    {
      name: "Life and Death",
      icon: "36-4",
      cost: 1,
      stats: {hp: 3, atk: 5, spd: 5, def: -5, res: -5},
      effect: "Accelerates Special trigger (cooldown count-1). Grants Atk/Spd+5. Inflicts Def/Res-5."
    },
    {
      name: "+Atk",
      icon: "31-9",
      cost: 1,
      stats: {hp: 5, atk: 2},
      effect: "Accelerates Special trigger (cooldown count-1)."
    },
    {
      name: "+Spd",
      icon: "31-10",
      cost: 1,
      stats: {hp: 5, spd: 3},
      effect: "Accelerates Special trigger (cooldown count-1)."
    },
    {
      name: "+Def",
      icon: "31-11",
      cost: 1,
      stats: {hp: 5, def: 4},
      effect: "Accelerates Special trigger (cooldown count-1)."
    },
    {
      name: "+Res",
      icon: "31-12",
      cost: 1,
      stats: {hp: 5, res: 4},
      effect: "Accelerates Special trigger (cooldown count-1)."
    }
  ],
  "Felicia's Plate": [
    {
      name: "Cooldown vs Magic",
      icon: "36-7",
      cost: 1,
      effect: "After combat, if unit attacked, inflicts Def/Res-7 on target and foes within 2 spaces of target through their next actions. Damage calculated using the lower of foe's Def or Res. Grants Special cooldown charge +1 if foe uses magic. (Only highest value applied. Does not stack.)"
    },
    {
      name: "+Atk",
      icon: "31-9",
      cost: 1,
      stats: {hp: 2, atk: 1},
      effect: "After combat, if unit attacked, inflicts Def/Res-7 on target and foes within 2 spaces of target through their next actions. Damage calculated using the lower of foe's Def or Res."
    },
    {
      name: "+Spd",
      icon: "31-10",
      cost: 1,
      stats: {hp: 2, spd: 2},
      effect: "After combat, if unit attacked, inflicts Def/Res-7 on target and foes within 2 spaces of target through their next actions. Damage calculated using the lower of foe's Def or Res."
    },
    {
      name: "+Def",
      icon: "31-11",
      cost: 1,
      stats: {hp: 2, def: 3},
      effect: "After combat, if unit attacked, inflicts Def/Res-7 on target and foes within 2 spaces of target through their next actions. Damage calculated using the lower of foe's Def or Res."
    },
    {
      name: "+Res",
      icon: "31-12",
      cost: 1,
      stats: {hp: 2, res: 3},
      effect: "After combat, if unit attacked, inflicts Def/Res-7 on target and foes within 2 spaces of target through their next actions. Damage calculated using the lower of foe's Def or Res."
    }
  ],
  "Eckesachs": [
    {
      name: "Distant Defense",
      icon: "36-5",
      cost: 1,
      stats: {hp: 3},
      effect: "Inflicts Def-6 on foes (excluding dragons) within 2 spaces at the start of each turn, through their next actions. If unit is attacked by foe using bow, daggers, magic, or staff, unit receives Def/Res+6 during combat."
    },
    {
      name: "+Atk",
      icon: "31-9",
      cost: 1,
      stats: {hp: 5, atk: 2},
      effect: "Inflicts Def-6 on foes (excluding dragons) within 2 spaces at the start of each turn, through their next actions."
    },
    {
      name: "+Spd",
      icon: "31-10",
      cost: 1,
      stats: {hp: 5, spd: 3},
      effect: "Inflicts Def-6 on foes (excluding dragons) within 2 spaces at the start of each turn, through their next actions."
    },
    {
      name: "+Def",
      icon: "31-11",
      cost: 1,
      stats: {hp: 5, def: 4},
      effect: "Inflicts Def-6 on foes (excluding dragons) within 2 spaces at the start of each turn, through their next actions."
    },
    {
      name: "+Res",
      icon: "31-12",
      cost: 1,
      stats: {hp: 5, res: 4},
      effect: "Inflicts Def-6 on foes (excluding dragons) within 2 spaces at the start of each turn, through their next actions."
    }
  ],
  "Falchion": [
    {
      name: "Drive Spectrum",
      icon: "36-8",
      cost: 1,
      stats: {hp: 3},
      exclusive: ["Marth"],
      effect: "Effective against dragon foes. Restores 10 HP at the start of every second turn. Grants Atk/Spd/Def/Res+2 to allies within 2 spaces during combat."
    },
    {
      name: "Spectrum Bond",
      icon: "36-9",
      cost: 1,
      stats: {hp: 3},
      exclusive: ["Chrom", "Lucina", "Marth (Masked)"],
      effect: "Effective against dragon foes. Restores 10 HP at the start of every second turn. Grants Atk/Spd/Def/Res+4 during combat if unit is adjacent to an ally."
    },
    {
      name: "Double Lion",
      icon: "36-10",
      cost: 1,
      stats: {hp: 3},
      exclusive: ["Alm"],
      effect: "Effective against dragon foes. Restores 10 HP at the start of every second turn. If unit's HP = 100% at start of combat and unit initiates combat, unit attacks twice then takes 5 damage after combat."
    },
    {
      name: "+Atk",
      icon: "31-9",
      cost: 1,
      stats: {hp: 5, atk: 2},
      effect: "Effective against dragon foes. Restores 10 HP at the start of every second turn."
    },
    {
      name: "+Spd",
      icon: "31-10",
      cost: 1,
      stats: {hp: 5, spd: 3},
      effect: "Effective against dragon foes. Restores 10 HP at the start of every second turn."
    },
    {
      name: "+Def",
      icon: "31-11",
      cost: 1,
      stats: {hp: 5, def: 4},
      effect: "Effective against dragon foes. Restores 10 HP at the start of every second turn."
    },
    {
      name: "+Res",
      icon: "31-12",
      cost: 1,
      stats: {hp: 5, res: 4},
      effect: "Effective against dragon foes. Restores 10 HP at the start of every second turn."
    }
  ],
  "Wind's Brand": [
    {
      name: "Owl Tome",
      icon: "38-4",
      cost: 1,
      effect: "At start of turn, inflicts Atk-7 on foe on the enemy team with the highest Atk through its next action. During combat, boosts Atk/Spd/Def/Res by number of adjacent allies × 2."
    },
    {
      name: "+Atk",
      icon: "31-9",
      cost: 1,
      stats: {hp: 2, atk: 1},
      effect: "At start of turn, inflicts Atk-7 on foe on the enemy team with the highest Atk through its next action."
    },
    {
      name: "+Spd",
      icon: "31-10",
      cost: 1,
      stats: {hp: 2, spd: 2},
      effect: "At start of turn, inflicts Atk-7 on foe on the enemy team with the highest Atk through its next action."
    },
    {
      name: "+Def",
      icon: "31-11",
      cost: 1,
      stats: {hp: 2, def: 3},
      effect: "At start of turn, inflicts Atk-7 on foe on the enemy team with the highest Atk through its next action."
    },
    {
      name: "+Res",
      icon: "31-12",
      cost: 1,
      stats: {hp: 2, res: 3},
      effect: "At start of turn, inflicts Atk-7 on foe on the enemy team with the highest Atk through its next action."
    }
  ],
  "Sieglinde": [
    {
      name: "Copy Buffs",
      icon: "38-5",
      cost: 1,
      stats: {hp: 3},
      effect: "At start of turn, grants adjacent allies Atk+4 for 1 turn. During combat, grants bonus to Atk/Spd/Def/Res = highest bonus on allies within 2 spaces. Each stat bonus calculated independently."
    },
    {
      name: "+Atk",
      icon: "31-9",
      cost: 1,
      stats: {hp: 5, atk: 2},
      effect: "At start of turn, grants adjacent allies Atk+4 for 1 turn."
    },
    {
      name: "+Spd",
      icon: "31-10",
      cost: 1,
      stats: {hp: 5, spd: 3},
      effect: "At start of turn, grants adjacent allies Atk+4 for 1 turn."
    },
    {
      name: "+Def",
      icon: "31-11",
      cost: 1,
      stats: {hp: 5, def: 4},
      effect: "At start of turn, grants adjacent allies Atk+4 for 1 turn."
    },
    {
      name: "+Res",
      icon: "31-12",
      cost: 1,
      stats: {hp: 5, res: 4},
      effect: "At start of turn, grants adjacent allies Atk+4 for 1 turn."
    }
  ],
  "Brynhildr": [
    {
      name: "Earthsweep",
      icon: "38-6",
      cost: 1,
      effect: "If in combat against magic foe, reduces damage from foe's first attack by 30%. If foe uses bow, dagger, magic, or staff and unit's Def ≥ foe's Def+1, foe cannot make a follow-up attack."
    },
    {
      name: "+Atk",
      icon: "31-9",
      cost: 1,
      stats: {hp: 2, atk: 1},
      effect: "If in combat against magic foe, reduces damage from foe's first attack by 30%."
    },
    {
      name: "+Spd",
      icon: "31-10",
      cost: 1,
      stats: {hp: 2, spd: 2},
      effect: "If in combat against magic foe, reduces damage from foe's first attack by 30%."
    },
    {
      name: "+Def",
      icon: "31-11",
      cost: 1,
      stats: {hp: 2, def: 3},
      effect: "If in combat against magic foe, reduces damage from foe's first attack by 30%."
    },
    {
      name: "+Res",
      icon: "31-12",
      cost: 1,
      stats: {hp: 2, res: 3},
      effect: "If in combat against magic foe, reduces damage from foe's first attack by 30%."
    }
  ],
};

},{}],12:[function(require,module,exports){
module.exports = [
  {
    name: "Armored Boots",
    icon: "37-6",
    include: [{moveType: "Armored"}],
    effect: "If unit's HP = 100% at start of turn, unit can move 1 extra space. (That turn only; does not stack.)"
  },
  {
    name: "Atk Ploy 1",
    icon: "18-12",
    effect: "At start of turn, all foes in cardinal directions with Res 1 or more lower than unit suffer Atk-3 until the end of foe's next action."
  },
  {
    name: "Atk Ploy 2",
    icon: "19-0",
    effect: "At start of turn, all foes in cardinal directions with Res 1 or more lower than unit suffer Atk-4 until the end of foe's next action."
  },
  {
    name: "Atk Ploy 3",
    icon: "19-1",
    effect: "At start of turn, all foes in cardinal directions with Res 1 or more lower than unit suffer Atk-5 until the end of foe's next action."
  },
  {
    name: "Attack +1",
    icon: "0-7",
    stats: {atk: 1},
    effect: "Grants Atk+1."
  },
  {
    name: "Attack +2",
    icon: "0-8",
    stats: {atk: 2},
    effect: "Grants Atk+2."
  },
  {
    name: "Attack +3",
    icon: "0-9",
    stats: {atk: 3},
    effect: "Grants Atk+3."
  },
  {
    name: "Atk Smoke 1",
    icon: "26-8",
    exclude: [{weaponType: "Staff"}],
    effect: "After combat, inflicts Atk-3 on foes within 2 spaces of target through their next actions."
  },
  {
    name: "Atk Smoke 2",
    icon: "26-9",
    exclude: [{weaponType: "Staff"}],
    effect: "After combat, inflicts Atk-5 on foes within 2 spaces of target through their next actions."
  },
  {
    name: "Atk Smoke 3",
    icon: "26-10",
    exclude: [{weaponType: "Staff"}],
    effect: "After combat, inflicts Atk-7 on foes within 2 spaces of target through their next actions."
  },
  {
    name: "Brash Assault 1",
    icon: "6-0",
    effect: "Unit automatically makes a follow-up when at HP ≤ 30% and attacking a foe that can counter."
  },
  {
    name: "Brash Assault 2",
    icon: "6-1",
    effect: "Unit automatically makes a follow-up when at HP ≤ 40% and attacking a foe that can counter."
  },
  {
    name: "Brash Assault 3",
    icon: "6-2",
    effect: "Unit automatically makes a follow-up when at HP ≤ 50% and attacking a foe that can counter."
  },
  {
    name: "Breath of Life 1",
    icon: "10-2",
    effect: "If unit initiates attack, adjacent allies recover 3 HP after combat."
  },
  {
    name: "Breath of Life 2",
    icon: "10-3",
    effect: "If unit initiates attack, adjacent allies recover 5 HP after combat."
  },
  {
    name: "Breath of Life 3",
    icon: "10-4",
    effect: "If unit initiates attack, adjacent allies recover 7 HP after combat."
  },
  {
    name: "Close Def 1",
    icon: "19-10",
    effect: "If unit is attacked by foe using sword, axe, lance, or dragonstone, unit receives Def/Res+2 during combat."
  },
  {
    name: "Close Def 2",
    icon: "19-11",
    effect: "If unit is attacked by foe using sword, axe, lance, or dragonstone, unit receives Def/Res+4 during combat."
  },
  {
    name: "Close Def 3",
    icon: "19-12",
    effect: "If unit is attacked by foe using sword, axe, lance, or dragonstone, unit receives Def/Res+6 during combat."
  },
  {
    name: "Def Ploy 1",
    icon: "20-2",
    effect: "At start of turn, all foes in cardinal directions with Res 1 or more lower than unit suffer Def-3 until the end of foe's next action."
  },
  {
    name: "Def Ploy 2",
    icon: "20-3",
    effect: "At start of turn, all foes in cardinal directions with Res 1 or more lower than unit suffer Def-4 until the end of foe's next action."
  },
  {
    name: "Def Ploy 3",
    icon: "20-4",
    effect: "At start of turn, all foes in cardinal directions with Res 1 or more lower than unit suffer Def-5 until the end of foe's next action."
  },
  {
    name: "Defense +1",
    icon: "1-0",
    stats: {def: 1},
    effect: "Grants Def+1."
  },
  {
    name: "Defense +2",
    icon: "1-1",
    stats: {def: 2},
    effect: "Grants Def+2."
  },
  {
    name: "Defense +3",
    icon: "1-2",
    stats: {def: 3},
    effect: "Grants Def+3."
  },
  {
    name: "Deflect Magic 1",
    icon: "29-4",
    effect: "If unit receives consecutive attacks from a foe using magic, damage from second attack onward reduced by 30%."
  },
  {
    name: "Deflect Magic 2",
    icon: "29-5",
    effect: "If unit receives consecutive attacks from a foe using magic, damage from second attack onward reduced by 50%."
  },
  {
    name: "Deflect Magic 3",
    icon: "29-6",
    effect: "If unit receives consecutive attacks from a foe using magic, damage from second attack onward reduced by 80%."
  },
  {
    name: "Deflect Melee 1",
    icon: "28-11",
    include: [{weaponType:"Sword"}, {weaponType:"Axe"}, {weaponType:"Lance"}, {weaponType:"Breath"}],
    effect: "If unit receives consecutive attacks from a foe using a sword, lance, or axe, damage from second attack onward reduced by 30%."
  },
  {
    name: "Deflect Melee 2",
    icon: "28-12",
    include: [{weaponType:"Sword"}, {weaponType:"Axe"}, {weaponType:"Lance"}, {weaponType:"Breath"}],
    effect: "If unit receives consecutive attacks from a foe using a sword, lance, or axe, damage from second attack onward reduced by 50%."
  },
  {
    name: "Deflect Melee 3",
    icon: "29-0",
    include: [{weaponType:"Sword"}, {weaponType:"Axe"}, {weaponType:"Lance"}, {weaponType:"Breath"}],
    effect: "If unit receives consecutive attacks from a foe using a sword, lance, or axe, damage from second attack onward reduced by 80%."
  },
  {
    name: "Deflect Missile 1",
    icon: "29-1",
    effect: "If unit receives consecutive attacks from a foe using a bow or dagger, damage from second attack onward reduced by 30%."
  },
  {
    name: "Deflect Missile 2",
    icon: "29-2",
    effect: "If unit receives consecutive attacks from a foe using a bow or dagger, damage from second attack onward reduced by 50%."
  },
  {
    name: "Deflect Missile 3",
    icon: "29-3",
    effect: "If unit receives consecutive attacks from a foe using a bow or dagger, damage from second attack onward reduced by 80%."
  },
  {
    name: "Distant Def 1",
    icon: "16-10",
    effect: "If unit is attacked by foe using bow, daggers, magic, or staff, unit receives Def/Res+2 during combat."
  },
  {
    name: "Distant Def 2",
    icon: "16-11",
    effect: "If unit is attacked by foe using bow, daggers, magic, or staff, unit receives Def/Res+4 during combat."
  },
  {
    name: "Distant Def 3",
    icon: "16-12",
    effect: "If unit is attacked by foe using bow, daggers, magic, or staff, unit receives Def/Res+6 during combat."
  },
  {
    name: "Drive Def 1",
    icon: "18-10",
    effect: "Grants allies within 2 spaces Def+2 during combat."
  },
  {
    name: "Drive Def 2",
    icon: "18-11",
    effect: "Grants allies within 2 spaces Def+3 during combat."
  },
  {
    name: "Embla's Ward",
    icon: "16-9",
    include: [{name: "Veronica"}],
    effect: "Unit receives 0 damage."
  },
  {
    name: "Fortify Def 1",
    icon: "12-6",
    effect: "Grants adjacent allies Def+2 through their next actions at the start of each turn."
  },
  {
    name: "Fortify Def 2",
    icon: "12-7",
    effect: "Grants adjacent allies Def+3 through their next actions at the start of each turn."
  },
  {
    name: "Fortify Def 3",
    icon: "12-8",
    effect: "Grants adjacent allies Def+4 through their next actions at the start of each turn."
  },
  {
    name: "Fortify Res 1",
    icon: "12-9",
    effect: "Grants adjacent allies Res+2 through their next actions at the start of each turn."
  },
  {
    name: "Fortify Res 2",
    icon: "12-10",
    effect: "Grants adjacent allies Res+3 through their next actions at the start of each turn."
  },
  {
    name: "Fortify Res 3",
    icon: "12-11",
    effect: "Grants adjacent allies Res+4 through their next actions at the start of each turn."
  },
  {
    name: "Fortress Res 1",
    icon: "25-0",
    stats: {atk: -3, res: 3},
    effect: "Grants Res+3. Inflicts Atk-3."
  },
  {
    name: "Fortress Res 2",
    icon: "25-1",
    stats: {atk: -3, res: 4},
    effect: "Grants Res+4. Inflicts Atk-3."
  },
  {
    name: "Fortress Res 3",
    icon: "25-2",
    stats: {atk: -3, res: 5},
    effect: "Grants Res+5. Inflicts Atk-3."
  },
  {
    name: "Guidance 1",
    icon: "25-8",
    include: [{moveType: "Flying"}],
    effect: "If unit has 100% HP, infantry and armored allies within 2 spaces can move to a space adjacent to unit."
  },
  {
    name: "Guidance 2",
    icon: "25-9",
    include: [{moveType: "Flying"}],
    effect: "If unit has ≥ 50% HP, infantry and armored allies within 2 spaces can move to a space adjacent to unit."
  },
  {
    name: "Guidance 3",
    icon: "25-10",
    include: [{moveType: "Flying"}],
    effect: "Infantry and armored allies within 2 spaces can move to a space adjacent to unit."
  },
  {
    name: "Hardy Bearing 1",
    icon: "24-8",
    effect: "Disables skills that change unit's attack priority. If unit has 100% HP at start of battle, enemy skills that change attack priority are also disabled."
  },
  {
    name: "Hardy Bearing 2",
    icon: "24-9",
    effect: "Disables skills that change unit's attack priority. If unit has ≥ 50% HP at start of battle, enemy skills that change attack priority are also disabled."
  },
  {
    name: "Hardy Bearing 3",
    icon: "24-10",
    effect: "Disables skills that change unit's attack priority. Enemy skills that change attack priority are also disabled."
  },
  {
    name: "Heavy Blade 1",
    icon: "15-11",
    exclude: [{weaponType:"Staff"}],
    effect: "If unit's Atk - foe's Atk ≥ 5, unit gains Special cooldown charge +1 per attack. (If using other similar skill, only highest value applied.)"
  },
  {
    name: "Heavy Blade 2",
    icon: "15-12",
    exclude: [{weaponType:"Staff"}],
    effect: "If unit's Atk - foe's Atk ≥ 3, unit gains Special cooldown charge +1 per attack. (If using other similar skill, only highest value applied.)"
  },
  {
    name: "Heavy Blade 3",
    icon: "16-0",
    exclude: [{weaponType:"Staff"}],
    effect: "If unit's Atk - foe's Atk ≥ 1, unit gains Special cooldown charge +1 per attack. (If using other similar skill, only highest value applied.)"
  },
  {
    name: "Hone Atk 1",
    icon: "12-0",
    effect: "Grants adjacent allies Atk+2 through their next actions at the start of each turn."
  },
  {
    name: "Hone Atk 2",
    icon: "12-1",
    effect: "Grants adjacent allies Atk+3 through their next actions at the start of each turn."
  },
  {
    name: "Hone Atk 3",
    icon: "12-2",
    effect: "Grants adjacent allies Atk+4 through their next actions at the start of each turn."
  },
  {
    name: "Hone Spd 1",
    icon: "12-3",
    effect: "Grants adjacent allies Spd+2 through their next actions at the start of each turn."
  },
  {
    name: "Hone Spd 2",
    icon: "12-4",
    effect: "Grants adjacent allies Spd+3 through their next actions at the start of each turn."
  },
  {
    name: "Hone Spd 3",
    icon: "12-5",
    effect: "Grants adjacent allies Spd+4 through their next actions at the start of each turn."
  },
  {
    name: "HP +3",
    icon: "0-4",
    stats: {"hp": 3},
    effect: "Grants +3 to max HP."
  },
  {
    name: "HP +4",
    icon: "0-5",
    stats: {"hp": 4},
    effect: "Grants +4 to max HP."
  },
  {
    name: "HP +5",
    icon: "0-6",
    stats: {"hp": 5},
    effect: "Grants +5 to max HP."
  },
  {
    name: "Initiate Seal Atk 1",
    icon: "0-7",
    stats: {atk: 1},
    effect: "Grants Atk+1."
  },
  {
    name: "Initiate Seal Atk 2",
    icon: "0-8",
    stats: {atk: 2},
    effect: "Grants Atk+2."
  },
  {
    name: "Initiate Seal Atk 3",
    icon: "0-9",
    stats: {atk: 3},
    effect: "Grants Atk+3."
  },
  {
    name: "Initiate Seal Def 1",
    icon: "1-0",
    stats: {def: 1},
    effect: "Grants Def+1."
  },
  {
    name: "Initiate Seal Def 2",
    icon: "1-1",
    stats: {def: 2},
    effect: "Grants Def+2."
  },
  {
    name: "Initiate Seal Def 3",
    icon: "1-2",
    stats: {def: 3},
    effect: "Grants Def+3."
  },
  {
    name: "Initiate Seal HP 1",
    icon: "0-4",
    stats: {"hp": 3},
    effect: "Grants +3 to max HP."
  },
  {
    name: "Initiate Seal HP 2",
    icon: "0-5",
    stats: {"hp": 4},
    effect: "Grants +4 to max HP."
  },
  {
    name: "Initiate Seal HP 3",
    icon: "0-6",
    stats: {"hp": 5},
    effect: "Grants +5 to max HP."
  },
  {
    name: "Initiate Seal Res 1",
    icon: "1-3",
    stats: {res: 1},
    effect: "Grants Res+1."
  },
  {
    name: "Initiate Seal Res 2",
    icon: "1-4",
    stats: {res: 2},
    effect: "Grants Res+2."
  },
  {
    name: "Initiate Seal Res 3",
    icon: "1-5",
    stats: {res: 3},
    effect: "Grants Res+3."
  },
  {
    name: "Initiate Seal Spd 1",
    icon: "0-10",
    stats: {spd: 1},
    effect: "Grants Spd+1."
  },
  {
    name: "Initiate Seal Spd 2",
    icon: "0-11",
    stats: {spd: 2},
    effect: "Grants Spd+2."
  },
  {
    name: "Initiate Seal Spd 3",
    icon: "0-12",
    stats: {spd: 3},
    effect: "Grants Spd+3."
  },
  {
    name: "Iote's Shield",
    icon: "4-4",
    include: [{moveType:"Flying"}],
    effect: "Neutralizes \"effective against\" bonuses."
  },
  {
    name: "Múspellflame",
    icon: "33-6",
    include: [{"name": "Surtr"}],
    effect: "Unit receives 0 damage."
  },
  {
    name: "Panic Ploy 1",
    icon: "19-2",
    effect: "At start of turn, bonuses become penalties on all foes in cardinal directions with HP 5 or more lower than unit through foe's next action."
  },
  {
    name: "Panic Ploy 2",
    icon: "19-3",
    effect: "At start of turn, bonuses become penalties on all foes in cardinal directions with HP 3 or more lower than unit through foe's next action."
  },
  {
    name: "Panic Ploy 3",
    icon: "19-4",
    effect: "At start of turn, bonuses become penalties on all foes in cardinal directions with HP 1 or more lower than unit through foe's next action."
  },
  {
    name: "Phantom Spd 1",
    icon: "20-11",
    effect: "When any skill compares this unit's Spd stat to another unit's, this unit's Spd stat is counted as +5 over actual value."
  },
  {
    name: "Phantom Spd 2",
    icon: "20-12",
    effect: "When any skill compares this unit's Spd stat to another unit's, this unit's Spd stat is counted as +8 over actual value."
  },
  {
    name: "Phantom Spd 3",
    icon: "21-0",
    effect: "When any skill compares this unit's Spd stat to another unit's, this unit's Spd stat is counted as +10 over actual value."
  },
  {
    name: "Poison Strike 1",
    icon: "6-9",
    exclude: [{weaponType: "Staff"}],
    effect: "Inflicts 4 damage to foe after any combat this unit initiates."
  },
  {
    name: "Poison Strike 2",
    icon: "6-10",
    exclude: [{weaponType: "Staff"}],
    effect: "Inflicts 7 damage to foe after any combat this unit initiates."
  },
  {
    name: "Poison Strike 3",
    icon: "6-11",
    exclude: [{weaponType: "Staff"}],
    effect: "Inflicts 10 damage to foe after any combat this unit initiates."
  },
  {
    name: "Quick Riposte 1",
    icon: "6-3",
    effect: "Unit automatically makes a follow-up attack if attacked at HP ≥ 90%."
  },
  {
    name: "Quick Riposte 2",
    icon: "6-4",
    effect: "Unit automatically makes a follow-up attack if attacked at HP ≥ 80%."
  },
  {
    name: "Quick Riposte 3",
    icon: "6-5",
    effect: "Unit automatically makes a follow-up attack if attacked at HP ≥ 70%."
  },
  {
    name: "Quickened Pulse",
    icon: "18-4",
    effect: "Special cooldown count -1 at start of Turn 1."
  },
  {
    name: "Resistance +1",
    icon: "1-3",
    stats: {res: 1},
    effect: "Grants Res+1."
  },
  {
    name: "Resistance +2",
    icon: "1-4",
    stats: {res: 2},
    effect: "Grants Res+2."
  },
  {
    name: "Resistance +3",
    icon: "1-5",
    stats: {res: 3},
    effect: "Grants Res+3."
  },
  {
    name: "Savage Blow 1",
    icon: "10-5",
    effect: "If unit initiates attack, foes within 2 spaces of target take 3 damage after combat."
  },
  {
    name: "Savage Blow 2",
    icon: "10-6",
    effect: "If unit initiates attack, foes within 2 spaces of target take 5 damage after combat."
  },
  {
    name: "Savage Blow 3",
    icon: "10-7",
    effect: "If unit initiates attack, foes within 2 spaces of target take 7 damage after combat."
  },
  {
    name: "Seal Atk 1",
    icon: "7-5",
    exclude: [{weaponType: "Staff"}],
    effect: "After combat, foe suffers Atk-3 through its next action."
  },
  {
    icon: "7-6",
    name: "Seal Atk 2",
    exclude: [{weaponType: "Staff"}],
    effect: "After combat, foe suffers Atk-5 through its next action."
  },
  {
    icon: "7-7",
    name: "Seal Atk 3",
    exclude: [{weaponType: "Staff"}],
    effect: "After combat, foe suffers Atk-7 through its next action."
  },
  {
    name: "Speed +1",
    icon: "0-10",
    stats: {spd: 1},
    effect: "Grants Spd+1."
  },
  {
    name: "Speed +2",
    icon: "0-11",
    stats: {spd: 2},
    effect: "Grants Spd+2."
  },
  {
    name: "Speed +3",
    icon: "0-12",
    stats: {spd: 3},
    effect: "Grants Spd+3."
  },
  {
    name: "Spur Atk 1",
    icon: "10-8",
    effect: "Grants adjacent allies Atk+2 during combat."
  },
  {
    name: "Spur Atk 2",
    icon: "10-9",
    effect: "Grants adjacent allies Atk+3 during combat."
  },
  {
    name: "Spur Atk 3",
    icon: "10-10",
    effect: "Grants adjacent allies Atk+4 during combat."
  },
  {
    name: "Spur Def 1",
    icon: "11-1",
    effect: "Grants adjacent allies Def+2 during combat."
  },
  {
    name: "Spur Def 2",
    icon: "11-2",
    effect: "Grants adjacent allies Def+3 during combat."
  },
  {
    name: "Spur Def 3",
    icon: "11-3",
    effect: "Grants adjacent allies Def+4 during combat."
  },
  {
    name: "Spur Res 1",
    icon: "11-4",
    effect: "Grants adjacent allies Res+2 during combat."
  },
  {
    name: "Spur Res 2",
    icon: "11-5",
    effect: "Grants adjacent allies Res+3 during combat."
  },
  {
    name: "Spur Res 3",
    icon: "11-6",
    effect: "Grants adjacent allies Res+4 during combat."
  },
  {
    name: "Spur Spd 1",
    icon: "10-11",
    effect: "Grants adjacent allies Spd+2 during combat."
  },
  {
    name: "Spur Spd 2",
    icon: "10-12",
    effect: "Grants adjacent allies Spd+3 during combat."
  },
  {
    name: "Spur Spd 3",
    icon: "11-1",
    effect: "Grants adjacent allies Spd+4 during combat."
  },
  {
    name: "Squad Ace A 1",
    icon: "21-1",
    stats: {"hp": 3},
    effect: "Grants HP+3."
  },
  {
    name: "Squad Ace A 2",
    icon: "21-2",
    stats: {"hp": 4},
    effect: "Grants HP+4."
  },
  {
    name: "Squad Ace A 3",
    icon: "21-3",
    stats: {"hp": 5},
    effect: "Grants HP+5."
  },
  {
    name: "Squad Ace B 1",
    icon: "21-4",
    stats: {def: 1},
    effect: "Grants Def+1."
  },
  {
    name: "Squad Ace B 2",
    icon: "21-5",
    stats: {def: 2},
    effect: "Grants Def+2."
  },
  {
    name: "Squad Ace B 3",
    icon: "21-6",
    stats: {def: 3},
    effect: "Grants Def+3."
  },
  {
    name: "Squad Ace C 1",
    icon: "21-7",
    stats: {res: 1},
    effect: "Grants Res+1."
  },
  {
    name: "Squad Ace C 2",
    icon: "21-8",
    stats: {res: 2},
    effect: "Grants Res+2."
  },
  {
    name: "Squad Ace C 3",
    icon: "21-9",
    stats: {res: 3},
    effect: "Grants Res+3."
  },
  {
    name: "Squad Ace D 1",
    icon: "21-10",
    stats: {spd: 1},
    effect: "Grants Spd+1."
  },
  {
    name: "Squad Ace D 2",
    icon: "21-11",
    stats: {spd: 2},
    effect: "Grants Spd+2."
  },
  {
    name: "Squad Ace D 3",
    icon: "21-12",
    stats: {spd: 3},
    effect: "Grants Spd+3."
  },
  {
    name: "Squad Ace E 1",
    icon: "22-0",
    stats: {atk: 1},
    effect: "Grants Atk+1."
  },
  {
    name: "Squad Ace E 2",
    icon: "22-1",
    stats: {atk: 2},
    effect: "Grants Atk+2."
  },
  {
    name: "Squad Ace E 3",
    icon: "22-2",
    stats: {atk: 3},
    effect: "Grants Atk+3."
  },
  {
    name: "Squad Ace F 1",
    icon: "21-1",
    stats: {"hp": 3},
    effect: "Grants HP+3."
  },
  {
    name: "Squad Ace F 2",
    icon: "21-2",
    stats: {"hp": 4},
    effect: "Grants HP+4."
  },
  {
    name: "Squad Ace F 3",
    icon: "21-3",
    stats: {"hp": 5},
    effect: "Grants HP+5."
  },
  {
    name: "Squad Ace G 1",
    icon: "21-4",
    stats: {def: 1},
    effect: "Grants Def+1."
  },
  {
    name: "Squad Ace G 2",
    icon: "21-5",
    stats: {def: 2},
    effect: "Grants Def+2."
  },
  {
    name: "Squad Ace G 3",
    icon: "21-6",
    stats: {def: 3},
    effect: "Grants Def+3."
  },
  {
    name: "Squad Ace H 1",
    icon: "21-7",
    stats: {res: 1},
    effect: "Grants Res+1."
  },
  {
    name: "Squad Ace H 2",
    icon: "21-8",
    stats: {res: 2},
    effect: "Grants Res+2."
  },
  {
    name: "Squad Ace H 3",
    icon: "21-9",
    stats: {res: 3},
    effect: "Grants Res+3."
  },
  {
    name: "Squad Ace I 1",
    icon: "21-10",
    stats: {spd: 1},
    effect: "Grants Spd+1."
  },
  {
    name: "Squad Ace I 2",
    icon: "21-11",
    stats: {spd: 2},
    effect: "Grants Spd+2."
  },
  {
    name: "Squad Ace I 3",
    icon: "21-12",
    stats: {spd: 3},
    effect: "Grants Spd+3."
  },
  {
    name: "Squad Ace J 1",
    icon: "22-0",
    stats: {atk: 1},
    effect: "Grants Atk+1."
  },
  {
    name: "Squad Ace J 2",
    icon: "22-1",
    stats: {atk: 2},
    effect: "Grants Atk+2."
  },
  {
    name: "Squad Ace J 3",
    icon: "22-2",
    stats: {atk: 3},
    effect: "Grants Atk+3."
  },
  {
    name: "Threaten Atk 1",
    icon: "13-5",
    effect: "Inflicts Atk-3 on foes within 2 spaces through their next actions at the start of each turn."
  },
  {
    name: "Threaten Atk 2",
    icon: "13-6",
    effect: "Inflicts Atk-4 on foes within 2 spaces through their next actions at the start of each turn."
  },
  {
    name: "Threaten Atk 3",
    icon: "13-7",
    effect: "Inflicts Atk-5 on foes within 2 spaces through their next actions at the start of each turn."
  },
  {
    name: "Threaten Spd 1",
    icon: "13-8",
    effect: "Inflicts Spd-3 on foes within 2 spaces through their next actions at the start of each turn."
  },
  {
    name: "Threaten Spd 2",
    icon: "13-9",
    effect: "Inflicts Spd-4 on foes within 2 spaces through their next actions at the start of each turn."
  },
  {
    name: "Threaten Spd 3",
    icon: "13-10",
    effect: "Inflicts Spd-5 on foes within 2 spaces through their next actions at the start of each turn."
  },

];

},{}],13:[function(require,module,exports){
module.exports = [
  {
    name: "Aegis",
    cooldown: 3,
    spCost: 200,
    prev: ["Holy Vestments"],
    exclude: [{weaponType: "Bow"}, {weaponType: "Dagger"}, {weaponType: "Staff"}, {weaponType: "Tome"}],
    last: true,
    effect: "Reduces damage inflicted by attacks from foes 2 spaces away by 50%."
  },
  {
    name: "Aether",
    cooldown: 5,
    spCost: 500,
    prev: ["Sol", "Luna"],
    exclude: [{weaponType: "Staff"}],
    last: true,
    effect: "Resolve combat as if foe suffered Def/Res-50%. Unit recovers HP=half damage dealt."
  },
  {
    name: "Astra",
    cooldown: 4,
    spCost: 200,
    prev: ["Night Sky"],
    exclude: [{weaponType: "Staff"}],
    last: true,
    effect: "Grants +150% to damage dealt."
  },
  {
    name: "Black Luna",
    cooldown: 3,
    spCost: 500,
    prev: ["Luna"],
    include: [{name: "Black Knight" },{name: "Zelgius"}],
    last: true,
    effect: "Resolve combat as if foe suffered Def/Res-80%. (Skill cannot be inherited.)"
  },
  {
    name: "Blazing Flame",
    cooldown: 4,
    spCost: 300,
    prev: ["Rising Flame"],
    exclude: [{weaponType: "Staff"}],
    last: true,
    effect: "Before combat this unit initiates, foes in an area near target take damage equal to 1.5 x (unit's Atk minus foe's Def or Res)."
  },
  {
    name: "Blazing Light",
    cooldown: 4,
    spCost: 300,
    prev: ["Rising Light"],
    exclude: [{weaponType: "Staff"}],
    last: true,
    effect: "Before combat this unit initiates, foes in an area near target take damage equal to 1.5 x (unit's Atk minus foe's Def or Res)."
  },
  {
    name: "Blazing Thunder",
    cooldown: 4,
    spCost: 300,
    prev: ["Rising Thunder"],
    exclude: [{weaponType: "Staff"}],
    last: true,
    effect: "Before combat this unit initiates, foes in an area near target take damage equal to 1.5 x (unit's Atk minus foe's Def or Res)."
  },
  {
    name: "Blazing Wind",
    cooldown: 4,
    spCost: 300,
    prev: ["Rising Wind"],
    exclude: [{weaponType: "Staff"}],
    last: true,
    effect: "Before combat this unit initiates, foes in an area near target take damage equal to 1.5 x (unit's Atk minus foe's Def or Res)."
  },
  {
    name: "Bonfire",
    cooldown: 3,
    spCost: 200,
    prev: ["Glowing Ember"],
    exclude: [{weaponType: "Staff"}],
    last: true,
    effect: "Boosts damage dealt by 50% of unit's Def."
  },
  {
    name: "Buckler",
    cooldown: 3,
    spCost: 100,
    exclude: [{weaponType: "Bow"}, {weaponType: "Dagger"}, {weaponType: "Staff"}, {weaponType: "Tome"}],
    effect: "Reduces damage inflicted by attacks from adjacent foes by 30%."
  },
  {
    name: "Chilling Wind",
    cooldown: 4,
    spCost: 100,
    exclude: [{weaponType: "Staff"}],
    effect: "Boosts damage dealt by 50% of unit's Res."
  },
  {
    name: "Daylight",
    cooldown: 3,
    spCost: 100,
    exclude: [{weaponType: "Staff"}],
    effect: "Heal 30% of damage dealt."
  },
  {
    name: "Draconic Aura",
    cooldown: 3,
    spCost: 200,
    prev: ["Dragon Gaze"],
    exclude: [{weaponType: "Staff"}],
    effect: "Grants +30% to Atk."
  },
  {
    name: "Dragon Fang",
    cooldown: 4,
    spCost: 200,
    prev: ["Dragon Gaze"],
    exclude: [{weaponType: "Staff"}],
    effect: "Grants +50% to Atk."
  },
  {
    name: "Dragon Gaze",
    cooldown: 4,
    spCost: 100,
    exclude: [{weaponType: "Staff"}],
    effect: "Grants +30% to Atk."
  },
  {
    name: "Escutcheon",
    cooldown: 2,
    spCost: 200,
    prev: ["Buckler"],
    exclude: [{weaponType: "Bow"}, {weaponType: "Dagger"}, {weaponType: "Staff"}, {weaponType: "Tome"}],
    effect: "Reduces damage inflicted by attacks from adjacent foes by 30%."
  },
  {
    name: "Galeforce",
    cooldown: 5,
    spCost: 500,
    prev: ["Astra"],
    include: [{weaponType: "Sword"}, {weaponType: "Lance"}, {weaponType: "Axe"} ],
    effect: "If this unit initiates an attack, it can take another action after combat. (Once per turn only.)"
  },
  {
    name: "Glacies",
    cooldown: 4,
    spCost: 200,
    prev: ["Chilling Wind"],
    exclude: [{weaponType: "Staff"}],
    effect: "Boosts damage dealt by 80% of unit's Res."
  },
  {
    name: "Glimmer",
    cooldown: 2,
    spCost: 200,
    prev: ["Night Sky"],
    exclude: [{weaponType: "Staff"}],
    effect: "Grants +50% to damage dealt."
  },
  {
    name: "Glowing Ember",
    cooldown: 4,
    spCost: 100,
    exclude: [{weaponType: "Staff"}],
    effect: "Boosts damage dealt by 50% of unit's Def."
  },
  {
    name: "Growing Flame",
    cooldown: 4,
    spCost: 300,
    prev: ["Rising Flame"],
    exclude: [{weaponType: "Staff"}],
    effect: "Before combat this unit initiates, foes in a wide area around target take damage equal to (unit's Atk minus foe's Def or Res)."
  },
  {
    name: "Growing Light",
    cooldown: 4,
    spCost: 300,
    prev: ["Rising Light"],
    exclude: [{weaponType: "Staff"}],
    effect: "Before combat this unit initiates, foes in a wide area near target take damage equal to (unit's Atk minus foe's Def or Res)."
  },
  {
    name: "Growing Thunder",
    cooldown: 4,
    spCost: 300,
    prev: ["Rising Thunder"],
    exclude: [{weaponType: "Staff"}],
    effect: "Before combat this unit initiates, foes in a wide area around target take damage equal to (unit's Atk minus foe's Def or Res)."
  },
  {
    name: "Growing Wind",
    cooldown: 4,
    spCost: 300,
    prev: ["Rising Wind"],
    exclude: [{weaponType: "Staff"}],
    effect: "Before combat this unit initiates, foes in a wide area near target take damage equal to (unit's Atk minus foe's Def or Res)."
  },
  {
    name: "Heavenly Light",
    cooldown: 2,
    spCost: 150,
    include: [{weaponType: "Staff"}],
    effect: "When healing an ally with a staff, all other allies recover 10 HP."
  },
  {
    name: "Holy Vestments",
    cooldown: 3,
    spCost: 100,
    exclude: [{weaponType: "Bow"}, {weaponType: "Dagger"}, {weaponType: "Staff"}, {weaponType: "Tome"}],
    effect: "Reduces damage inflicted by attacks from foes 2 spaces away by 30%."
  },
  {
    name: "Ice Mirror",
    cooldown: 2,
    spCost: 500,
    prev: ["Sacred Cowl"],
    include: [{name: "Fjorm"}],
    effect: "Reduces damage unit takes from foes 2 spaces away by 30%. If Special triggers, boosts unit's next attack by total damage was reduced (by any source, including other skills). Resets at end of combat. (Skill cannot be inherited.)"
  },
  {
    name: "Iceberg",
    cooldown: 3,
    spCost: 200,
    prev: ["Chilling Wind"],
    exclude: [{weaponType: "Staff"}],
    effect: "Boosts damage dealt by 50% of unit's Res."
  },
  {
    name: "Ignis",
    cooldown: 4,
    spCost: 200,
    prev: ["Glowing Ember"],
    exclude: [{weaponType: "Staff"}],
    effect: "Boosts damage dealt by 80% of unit's Def."
  },
  {
    name: "Imbue",
    cooldown: 1,
    spCost: 50,
    include: [{weaponType: "Staff"}],
    effect: "When healing an ally with a staff, increases recovered HP by 10."
  },
  {
    name: "Kindled-Fire Balm",
    cooldown: 1,
    spCost: 150,
    include: [{weaponType: "Staff"}],
    effect: "When healing an ally with a staff, grants all allies Atk+4 for 1 turn."
  },
  {
    name: "Luna",
    cooldown: 3,
    spCost: 200,
    prev: ["New Moon"],
    exclude: [{weaponType: "Staff"}],
    effect: "Resolve combat as if foe suffered Def/Res-50%."
  },
  {
    name: "Miracle",
    cooldown: 5,
    spCost: 200,
    effect: "If HP > 1, survive a lethal attack with 1 HP remaining."
  },
  {
    name: "Moonbow",
    cooldown: 2,
    spCost: 200,
    prev: ["New Moon"],
    exclude: [{weaponType: "Staff"}],
    effect: "Resolve combat as if foe suffered Def/Res-30%."
  },
  {
    name: "New Moon",
    cooldown: 3,
    spCost: 100,
    exclude: [{weaponType: "Staff"}],
    effect: "Resolve combat as if foe suffered Def/Res-30%."
  },
  {
    name: "Night Sky",
    cooldown: 3,
    spCost: 100,
    exclude: [{weaponType: "Staff"}],
    effect: "Grants +50% to damage dealt."
  },
  {
    name: "Noontime",
    cooldown: 2,
    spCost: 200,
    prev: ["Daylight"],
    exclude: [{weaponType: "Staff"}],
    effect: "Heal 30% of damage dealt."
  },
  {
    name: "Pavise",
    cooldown: 3,
    spCost: 200,
    prev: ["Buckler"],
    exclude: [{weaponType: "Bow"}, {weaponType: "Dagger"}, {weaponType: "Staff"}, {weaponType: "Tome"}],
    effect: "Reduces damage inflicted by attacks from adjacent foes by 50%."
  },
  {
    name: "Radiant Aether",
    cooldown: 4,
    spCost: 500,
    include: [{name: "Ike (Legendary Heroes)"}],
    effect: "During combat, treats foe's Def/Res as if reduced by 50%. Restores HP = 50% of damage dealt."
  },
  {
    name: "Regnal Astra",
    cooldown: 2,
    spCost: 500,
    prev: ["Astra"],
    include: [{name: "Ayra"}],
    effect: "Boosts damage dealt by 40% of unit's Spd. (Skill cannot be inherited.)"
  },
  {
    name: "Reprisal",
    cooldown: 2,
    spCost: 200,
    prev: ["Retribution"],
    exclude: [{weaponType: "Staff"}],
    effect: "Grants bonus to damage dealt equal to 30% of damage suffered."
  },
  {
    name: "Retribution",
    cooldown: 3,
    spCost: 100,
    exclude: [{weaponType: "Staff"}],
    effect: "Grants bonus to damage dealt equal to 30% of damage suffered."
  },
  {
    name: "Rising Flame",
    cooldown: 4,
    spCost: 150,
    exclude: [{weaponType: "Staff"}],
    effect: "Before combat this unit initiates, foes in an area near target take damage equal to (unit's Atk minus foe's Def or Res)."
  },
  {
    name: "Rising Light",
    cooldown: 4,
    spCost: 150,
    exclude: [{weaponType: "Staff"}],
    effect: "Before combat this unit initiates, foes in an area near target take damage equal to (unit's Atk minus foe's Def or Res)."
  },
  {
    name: "Rising Thunder",
    cooldown: 4,
    spCost: 150,
    exclude: [{weaponType: "Staff"}],
    effect: "Before combat this unit initiates, foes in an area near target take damage equal to (unit's Atk minus foe's Def or Res)."
  },
  {
    name: "Rising Wind",
    cooldown: 4,
    spCost: 150,
    exclude: [{weaponType: "Staff"}],
    effect: "Before combat this unit initiates, foes in an area near target take damage equal to (unit's Atk minus foe's Def or Res)."
  },
  {
    name: "Sacred Cowl",
    cooldown: 2,
    spCost: 200,
    prev: ["Holy Vestments"],
    exclude: [{weaponType: "Bow"}, {weaponType: "Dagger"}, {weaponType: "Staff"}, {weaponType: "Tome"}],
    effect: "Reduces damage inflicted by attacks from foes 2 spaces away by 30%."
  },
  {
    name: "Sol",
    cooldown: 3,
    spCost: 200,
    prev: ["Daylight"],
    exclude: [{weaponType: "Staff"}],
    effect: "Heal 50% of damage dealt."
  },
  {
    name: "Solid-Earth Balm",
    cooldown: 1,
    spCost: 150,
    include: [{weaponType: "Staff"}],
    effect: "When healing an ally with a staff, grants all allies Def+4 for 1 turn."
  },
  {
    name: "Still-Water Balm",
    cooldown: 1,
    spCost: 150,
    include: [{weaponType: "Staff"}],
    effect: "When healing an ally with a staff, grants all allies Res+4 for 1 turn."
  },
  {
    name: "Swift-Winds Balm",
    cooldown: 1,
    spCost: 150,
    include: [{weaponType: "Staff"}],
    effect: "When healing an ally with a staff, grants all allies Spd+4 for 1 turn."
  },
  {
    name: "Vengeance",
    cooldown: 3,
    spCost: 200,
    prev: ["Retribution"],
    exclude: [{weaponType: "Staff"}],
    effect: "Grants bonus to damage dealt equal to 50% of damage suffered."
  }
];

},{}],14:[function(require,module,exports){
module.exports = [
  {
    name: "Absorb",
    spCost: 150,
    damage: 4,
    range: 2,
    weaponType: "Staff",
    colorType: "Neutral",
    effect: "Recovers HP=50% of damage dealt."
  },
  {
    name: "Absorb+",
    spCost: 300,
    damage: 7,
    range: 2,
    weaponType: "Staff",
    colorType: "Neutral",
    prev: ["Absorb"],
    effect: "Recovers HP = 50% of damage dealt. After combat, restores 7 HP to allies within 2 spaces of unit."
  },
  {
    name: "Alondite",
    spCost: 400,
    damage: 16,
    range: 1,
    weaponType: "Sword",
    colorType: "Red",
    exclusive: ["Black Knight", "Zelgius"],
    prev: ["Silver Sword"],
    effect: "Enables counterattack regardless of distance if this unit is attacked."
  },
  {
    name: "Amiti",
    spCost: 400,
    damage: 11,
    range: 1,
    weaponType: "Sword",
    colorType: "Red",
    stats: {spd: -2},
    prev: ["Silver Sword"],
    exclusive: ["Elincia"],
    effect: "Spd-2. Attack twice when initiating combat."
  },
  {
    name: "Armads",
    spCost: 400,
    damage: 16,
    range: 1,
    weaponType: "Axe",
    colorType: "Green",
    prev: ["Silver Axe"],
    exclusive: ["Hector"],
    effect: "Unit makes a guaranteed follow-up attack when attacked at HP ≥ 80%."
  },
  {
    name: "Armorslayer",
    spCost: 200,
    damage: 8,
    range: 1,
    weaponType: "Sword",
    colorType: "Red",
    prev: ["Steel Sword"],
    effect: "Effective against armored units."
  },
  {
    name: "Armorslayer+",
    spCost: 300,
    damage: 12,
    range: 1,
    weaponType: "Sword",
    colorType: "Red",
    prev: ["Armorslayer"],
    effect: "Effective against armored units."
  },
  {
    name: "Armorsmasher",
    spCost: 200,
    damage: 10,
    range: 1,
    weaponType: "Sword",
    colorType: "Red",
    effect: "Effective against armored units."
  },
  {
    name: "Armorsmasher+",
    spCost: 300,
    damage: 14,
    range: 1,
    weaponType: "Sword",
    colorType: "Red",
    prev: ["Armorsmasher"],
    effect: "Effective against armored foes."
  },
  {
    name: "Assassin's Bow",
    spCost: 200,
    damage: 7,
    range: 2,
    weaponType: "Bow",
    colorType: "Neutral",
    prev: ["Steel Bow"],
    effect: "Effective against flying units.  If target has a dagger, it can't make a follow-up attack and this unit will."
  },
  {
    name: "Assassin's Bow+",
    spCost: 300,
    damage: 11,
    range: 2,
    weaponType: "Bow",
    colorType: "Neutral",
    prev: ["Assasin's Bow"],
    effect: "Effective against flying units.  If target has a dagger, it can't make a follow-up attack and this unit will."
  },
  {
    name: "Assault",
    spCost: 50,
    damage: 10,
    range: 2,
    weaponType: "Staff",
    colorType: "Neutral",
    effect: "-"
  },
  {
    name: "Audhulma",
    spCost: 400,
    damage: 16,
    range: 1,
    weaponType: "Sword",
    colorType: "Red",
    stats: {res: 5},
    prev: ["Slaying Edge"],
    exclusive: ["Joshua"],
    effect: "Accelerates Special trigger (cooldown count-1). Grants Res+5."
  },
  {
    name: "Aura",
    spCost: 400,
    damage: 14,
    range: 2,
    weaponType: "Tome",
    colorType: "Blue",
    exclusive: ["Linde"],
    prev: ["Thoron"],
    effect: "Restores 5 HP to adjacent allies after any combat this unit initiates."
  },
  {
    name: "Ayra's Blade",
    spCost: 400,
    damage: 16,
    range: 1,
    weaponType: "Sword",
    colorType: "Red",
    stats: {spd: 3},
    exclusive: ["Ayra"],
    prev: ["Silver Sword"],
    effect: "Grants Spd+3. If unit's Spd - foe's Spd ≥ 1, gain Special cooldown charge +1 per attack. (If similar skill also used, only highest value applied.)"
  },
  {
    name: "Basilikos",
    spCost: 400,
    damage: 16,
    range: 1,
    weaponType: "Axe",
    colorType: "Green",
    exclusive: ["Raven"],
    // prev: ["Brave Axe"],
    effect: "Accelerates Special trigger (cooldown count -1)."
  },
  {
    name: "Beloved Zofia",
    spCost: 400,
    damage: 16,
    range: 1,
    weaponType: "Sword",
    colorType: "Red",
    stats: {def: 3},
    prev: ["Silver Sword"],
    exclusive: ["Celica (Fallen Heroes)"],
    effect: "Grants Def+3. If unit's HP = 100% at start of combat, grants Atk/Spd/Def/Res+4, but if unit attacked, unit takes 4 damage after combat."
  },
  {
    name: "Berkut's Lance",
    spCost: 200,
    damage: 10,
    range: 1,
    weaponType: "Lance",
    colorType: "Blue",
    prev: ["Steel Lance"],
    effect: "Grants Res+4 when the unit is under attack."
  },
  {
    name: "Berkut's Lance+",
    spCost: 300,
    damage: 14,
    range: 1,
    weaponType: "Lance",
    colorType: "Blue",
    prev: ["Berkut's Lance"],
    effect: "Grants Res+4 when the unit is under attack."
  },
  {
    name: "Berserk Armads",
    spCost: 400,
    damage: 16,
    range: 1,
    weaponType: "Axe",
    colorType: "Green",
    prev: ["Silver Axe"],
    exclusive: ["Hector (Love Abounds)"],
    effect: "Accelerates Special trigger (cooldown count-1). If unit's HP ≤ 75% and Special triggers by attacking, Special cooldown count-1 at start of turn. Deals +10 damage when Special triggers."
  },
  {
    name: "Binding Blade",
    spCost: 400,
    damage: 16,
    range: 1,
    weaponType: "Sword",
    colorType: "Red",
    prev: ["Silver Sword"],
    exclusive: ["Roy"],
    effect: "Grants Def/Res+2 when this unit is attacked.",
  },
  {
    name: "Blárblade",
    spCost: 200,
    damage: 9,
    range: 2,
    weaponType: "Tome",
    colorType: "Blue",
    prev: ["Elthunder"],
    effect: "Slows Special trigger (cooldown count+1). Adds total bonuses on unit to damage dealt."
  },
  {
    name: "Blárblade+",
    spCost: 300,
    damage: 13,
    range: 2,
    weaponType: "Tome",
    colorType: "Blue",
    prev: ["Blárblade"],
    effect: "Slows Special trigger (cooldown count+1). Adds total bonuses on unit to damage dealt."
  },
  {
    name: "Blárowl",
    spCost: 200,
    damage: 6,
    range: 2,
    weaponType: "Tome",
    colorType: "Blue",
    prev: ["Elthunder"],
    effect: "During combat, unit's Atk/Spd/Def/Res boosted by number of adjacent allies x 2."
  },
  {
    name: "Blárowl+",
    spCost: 300,
    damage: 10,
    range: 2,
    weaponType: "Tome",
    colorType: "Blue",
    prev: ["Blárowl"],
    effect: "During combat, unit's Atk/Spd/Def/Res boosted by number of adjacent allies x 2."
  },
  {
    name: "Blárraven",
    spCost: 200,
    damage: 7,
    range: 2,
    weaponType: "Tome",
    colorType: "Blue",
    prev: ["Elthunder"],
    effect: "Grants weapon advantage vs. colorless foes."
  },
  {
    name: "Blárraven+",
    spCost: 300,
    damage: 11,
    range: 2,
    weaponType: "Tome",
    colorType: "Blue",
    prev: ["Blárraven"],
    effect: "Grants weapon advantage vs. colorless foes."
  },
  {
    name: "Blárserpent",
    spCost: 300,
    damage: 8,
    range: 2,
    weaponType: "Tome",
    colorType: "Blue",
    prev: ["Elthunder"],
    effect: "Grants Def/Res+6 during combat if foe initiates combat and uses bow, dagger, magic, or staff."
  },
  {
    name: "Blárserpent+",
    spCost: 400,
    damage: 12,
    range: 2,
    weaponType: "Tome",
    colorType: "Blue",
    prev: ["Blárserpent"],
    effect: "Grants Def/Res+6 during combat if foe initiates combat and uses bow, dagger, magic, or staff."
  },
  {
    name: "Blárwolf",
    spCost: 200,
    damage: 6,
    range: 2,
    weaponType: "Tome",
    colorType: "Blue",
    prev: ["Elthunder"],
    effect: "Effective against cavalry units."
  },
  {
    name: "Blárwolf+",
    spCost: 300,
    damage: 10,
    range: 2,
    weaponType: "Tome",
    colorType: "Blue",
    prev: ["Blárwolf"],
    effect: "Effective against cavalry units."
  },
  {
    name: "Blazing Durandal",
    spCost: 400,
    damage: 16,
    range: 1,
    weaponType: "Sword",
    colorType: "Red",
    stats: {atk: 3},
    prev: ["Silver Sword"],
    exclusive: ["Roy (Brave Heroes)","Eliwood"],
    effect: "Grants Atk+3. If unit's Atk > foe's, unit gains Special cooldown charge +1. (If using other similar skill, only highest value applied.)",
  },
  {
    name: "Blessed Bouquet",
    spCost: 200,
    damage: 8,
    range: 2,
    weaponType: "Tome",
    colorType: "Blue",
    prev: ["Elthunder"],
    effect: "Grants allies within 2 spaces Def/Res+2 through their next actions after any combat this unit initiates."
  },
  {
    name: "Blessed Bouquet+",
    spCost: 300,
    damage: 12,
    range: 2,
    weaponType: "Tome",
    colorType: "Blue",
    prev: ["Blessed Bouquet"],
    effect: "Grants allies within 2 spaces Def/Res+2 through their next actions after any combat this unit initiates."
  },
  {
    name: "Blizzard",
    spCost: 400,
    damage: 14,
    range: 1,
    weaponType: "Tome",
    colorType: "Green",
    stats: {res: 3},
    prev: ["Rexcalibur"],
    exclusive: ["Gunnthrá"],
    effect: "Grants Res+3. Grants bonus to unit's Atk equal to total penalties on foe during combat."
  },
  {
    name: "Blue Egg",
    spCost: 200,
    damage: 7,
    range: 2,
    weaponType: "Tome",
    colorType: "Blue",
    prev: ["Elthunder"],
    effect: "If unit initiates attack, unit recovers 4 HP after the battle."
  },
  {
    name: "Blue Egg+",
    spCost: 300,
    damage: 11,
    range: 2,
    weaponType: "Tome",
    colorType: "Blue",
    prev: ["Blue Egg"],
    effect: "If unit initiates attack, unit recovers 4 HP after the battle."
  },
  {
    name: "Blue Gift",
    spCost: 200,
    damage: 8,
    range: 2,
    weaponType: "Tome",
    colorType: "Blue",
    prev: ["Ellight"],
    effect: "If foe uses bow, dagger, magic, or staff, neutralizes foe's bonuses (from skills like Fortify, Rally, etc.) during combat."
  },
  {
    name: "Blue Gift+",
    spCost: 300,
    damage: 12,
    range: 2,
    weaponType: "Tome",
    colorType: "Blue",
    prev: ["Blue Gift"],
    effect: "If foe uses bow, dagger, magic, or staff, neutralizes foe's bonuses (from skills like Fortify, Rally, etc.) during combat."
  },
  {
    name: "Bolganone",
    spCost: 200,
    damage: 9,
    range: 2,
    weaponType: "Tome",
    colorType: "Red",
    prev: ["Elfire"],
    effect: "-"
  },
  {
    name: "Bolganone+",
    spCost: 300,
    damage: 13,
    range: 2,
    weaponType: "Tome",
    colorType: "Red",
    prev: ["Bolganone"],
    effect: "-"
  },
  {
    name: "Brave Axe",
    spCost: 200,
    damage: 5,
    range: 1,
    weaponType: "Axe",
    colorType: "Green",
    stats: {spd: -5},
    prev: ["Steel Axe"],
    effect: "Spd-5. Attack twice when initiating combat."
  },
  {
    name: "Brave Axe+",
    spCost: 300,
    damage: 8,
    range: 1,
    weaponType: "Axe",
    colorType: "Green",
    stats: {spd: -5},
    prev: ["Brave Axe"],
    effect: "Spd-5. Attack twice when initiating combat."
  },
  {
    name: "Brave Bow",
    spCost: 200,
    damage: 4,
    range: 2,
    weaponType: "Bow",
    colorType: "Neutral",
    stats: {spd: -5},
    prev: ["Steel Bow"],
    effect: "Spd-5. Effective against flying units.  Attacks twice if unit initiates combat."
  },
  {
    name: "Brave Bow+",
    spCost: 300,
    damage: 7,
    range: 2,
    weaponType: "Bow",
    colorType: "Neutral",
    stats: {spd: -5},
    prev: ["Brave Bow"],
    effect: "Spd-5. Effective against flying units.  Attacks twice if unit initiates combat."
  },
  {
    name: "Brave Lance",
    spCost: 200,
    damage: 5,
    range: 1,
    weaponType: "Lance",
    colorType: "Blue",
    stats: {spd: -5},
    prev: ["Steel Lance"],
    effect: "Spd-5. Attack twice when initiating combat."
  },
  {
    name: "Brave Lance+",
    spCost: 300,
    damage: 8,
    range: 1,
    weaponType: "Lance",
    colorType: "Blue",
    stats: {spd: -5},
    prev: ["Brave Lance"],
    effect: "Spd-5. Attack twice when initiating combat."
  },
  {
    name: "Brave Sword",
    spCost: 200,
    damage: 5,
    range: 1,
    weaponType: "Sword",
    colorType: "Red",
    stats: {spd: -5},
    prev: ["Steel Sword"],
    effect: "Spd-5. Attack twice when initiating combat."
  },
  {
    name: "Brave Sword+",
    spCost: 300,
    damage: 8,
    range: 1,
    weaponType: "Sword",
    colorType: "Red",
    stats: {spd: -5},
    prev: ["Brave Sword"],
    effect: "Spd-5. Attack twice when initiating combat."
  },
  {
    name: "Bright Naginata",
    spCost: 400,
    damage: 16,
    range: 1,
    weaponType: "Lance",
    colorType: "Blue",
    prev: ["Silver Lance"],
    exclusive: ["Shiro"],
    effect: "Grants Atk/Def+4 during combat if unit initiates combat.",
  },
  {
    name: "Brynhildr",
    spCost: 400,
    damage: 14,
    range: 2,
    weaponType: "Tome",
    colorType: "Red",
    prev: ["Fenrir"],
    exclusive: ["Leo"],
    effect: "If unit initiates attack, restricts foe's next-turn movement to 1 space or less.",
  },
  {
    name: "Candelabra",
    spCost: 200,
    damage: 8,
    range: 2,
    weaponType: "Tome",
    colorType: "Red",
    prev: ["Ruin"],
    effect: "Grants Atk/Spd/Def/Res+2 during combat if foe initiates combat."
  },
  {
    name: "Candelabra+",
    spCost: 300,
    damage: 12,
    range: 2,
    weaponType: "Tome",
    colorType: "Red",
    prev: ["Candelabra"],
    effect: "Grants Atk/Spd/Def/Res+2 during combat if foe initiates combat."
  },
  {
    name: "Candlelight",
    spCost: 150,
    damage: 7,
    range: 2,
    weaponType: "Staff",
    colorType: "Neutral",
    effect: "After combat, foe inflicted with status preventing them from counterattacking."
  },
  {
    name: "Candlelight+",
    spCost: 300,
    damage: 11,
    range: 2,
    weaponType: "Staff",
    colorType: "Neutral",
    prev: ["Candlelight"],
    effect: "After combat, foe and foes within 2 spaces of target inflicted with status preventing counterattack through their next actions."
  },
  {
    name: "Carrot Axe",
    spCost: 200,
    damage: 9,
    range: 1,
    weaponType: "Axe",
    colorType: "Green",
    prev: ["Steel Axe"],
    effect: "If unit initiates attack, unit recovers 4 HP after the battle."
  },
  {
    name: "Carrot Axe+",
    spCost: 300,
    damage: 13,
    range: 1,
    weaponType: "Axe",
    colorType: "Green",
    prev: ["Carrot Axe"],
    effect: "If unit initiates attack, unit recovers 4 HP after the battle."
  },
  {
    name: "Carrot Lance",
    spCost: 200,
    damage: 9,
    range: 1,
    weaponType: "Lance",
    colorType: "Blue",
    prev: ["Steel Lance"],
    effect: "If unit initiates attack, unit recovers 4 HP after the battle."
  },
  {
    name: "Carrot Lance+",
    spCost: 300,
    damage: 13,
    range: 1,
    weaponType: "Lance",
    colorType: "Blue",
    prev: ["Carrot Lance"],
    effect: "If unit initiates attack, unit recovers 4 HP after the battle."
  },
  {
    name: "Casa Blanca",
    spCost: 200,
    damage: 10,
    range: 1,
    weaponType: "Lance",
    colorType: "Blue",
    prev: ["Steel Lance"],
    effect: "If foe uses bow, dagger, magic, or staff, neutralizes foe's bonuses (from skills like Fortify, Rally, etc.) during combat."
  },
  {
    name: "Casa Blanca+",
    spCost: 300,
    damage: 14,
    range: 1,
    weaponType: "Lance",
    colorType: "Blue",
    prev: ["Casa Blanca"],
    effect: "If foe uses bow, dagger, magic, or staff, neutralizes foe's bonuses (from skills like Fortify, Rally, etc.) during combat."
  },
  {
    name: "Clarisse's Bow",
    spCost: 200,
    damage: 7,
    range: 2,
    weaponType: "Bow",
    colorType: "Neutral",
    prev: ["Steel Bow"],
    effect: "After this unit attacks, foes within 2 spaces of target suffer Atk/Spd-5 through their next actions. Effective against flying units."
  },
  {
    name: "Clarisse's Bow+",
    spCost: 300,
    damage: 11,
    range: 2,
    weaponType: "Bow",
    colorType: "Neutral",
    prev: ["Clarisse's Bow"],
    effect: "After this unit attacks, foes within 2 spaces of target suffer Atk/Spd-5 through their next actions. Effective against flying units."
  },
  {
    name: "Cupid Arrow",
    spCost: 200,
    damage: 8,
    range: 2,
    weaponType: "Bow",
    colorType: "Neutral",
    prev: ["Steel Bow"],
    effect: "Grants allies within 2 spaces Def/Res+2 through their next actions after any combat this unit initiates. Effective against fliers."
  },
  {
    name: "Cupid Arrow+",
    spCost: 300,
    damage: 12,
    range: 2,
    weaponType: "Bow",
    colorType: "Neutral",
    prev: ["Cupid Arrow"],
    effect: "Grants allies within 2 spaces Def/Res+2 through their next actions after any combat this unit initiates. Effective against fliers."
  },
  {
    name: "Cursed Lance",
    spCost: 400,
    damage: 16,
    range: 1,
    weaponType: "Lance",
    colorType: "Blue",
    stats: {atk: 2, spd: 2},
    prev: ["Silver Lance"],
    exclusive: ["Valter"],
    effect: "Grants Atk/Spd+2 and accelerates Special trigger (cooldown count-1). Unit takes 4 damage after combat."
  },
  {
    name: "Cymbeline",
    spCost: 400,
    damage: 14,
    range: 2,
    weaponType: "Tome",
    colorType: "Red",
    prev: ["Bolganone"],
    exclusive: ["Sanaki"],
    effect: "Grants adjacent allies Atk+4 through their next actions after any combat this unit initiates.",
  },
  {
    name: "Dancer's Fan",
    spCost: 200,
    damage: 7,
    range: 2,
    weaponType: "Dagger",
    colorType: "Neutral",
    prev: ["Steel Dagger"],
    effect: "If unit initiates attack, adjacent allies recover 7 HP after combat. Also, enemy suffers Def/Res-5 after combat until the end of foe's next action."
  },
  {
    name: "Dancer's Fan+",
    spCost: 300,
    damage: 10,
    range: 2,
    weaponType: "Dagger",
    colorType: "Neutral",
    prev: ["Dancer's Fan"],
    effect: "If unit initiates attack, adjacent allies recover 7 HP after combat. Also, enemy suffers Def/Res-7 after combat until the end of foe's next action."
  },
  {
    name: "Dancer's Ring",
    spCost: 200,
    damage: 8,
    range: 2,
    weaponType: "Tome",
    colorType: "Green",
    prev: ["Elwind"],
    effect: "If unit initiates attack, adjacent allies recover 7 HP after combat."
  },
  {
    name: "Dancer's Ring+",
    spCost: 300,
    damage: 12,
    range: 2,
    weaponType: "Tome",
    colorType: "Green",
    prev: ["Dancer's Ring"],
    effect: "If unit initiates attack, adjacent allies recover 7 HP after combat."
  },
  {
    name: "Dancer's Score",
    spCost: 200,
    damage: 8,
    range: 2,
    weaponType: "Tome",
    colorType: "Blue",
    prev: ["Elthunder"],
    effect: "If unit initiates attack, adjacent allies recover 7 HP after combat."
  },
  {
    name: "Dancer's Score+",
    spCost: 300,
    damage: 12,
    range: 2,
    weaponType: "Tome",
    colorType: "Blue",
    prev: ["Dancer's Score"],
    effect: "If unit initiates attack, adjacent allies recover 7 HP after combat."
  },
  {
    name: "Dark Aura",
    spCost: 400,
    damage: 14,
    range: 2,
    weaponType: "Tome",
    colorType: "Blue",
    prev: ["Thoron"],
    exclusive: ["Delthea", "Linde"],
    effect: "Grants adjacent allies who use swords, axes, lances, or dragonstones Atk+6 through their next actions at the start of each turn.",
  },
  {
    name: "Dark Breath",
    spCost: 200,
    damage: 9,
    range: 1,
    weaponType: "Breath",
    prev: ["Fire Breath+"],
    effect: "After this unit attacks, foes within 2 spaces of target suffer Atk/Spd-5 through their next actions."
  },
  {
    name: "Dark Breath+",
    spCost: 300,
    damage: 13,
    range: 1,
    weaponType: "Breath",
    prev: ["Dark Breath"],
    effect: "After this unit attacks, foes within 2 spaces of target suffer Atk/Spd-5 through their next actions."
  },
  {
    name: "Dark Excalibur",
    spCost: 400,
    damage: 14,
    range: 2,
    weaponType: "Tome",
    colorType: "Green",
    prev: ["Rexcalibur"],
    exclusive: ["Merric", "Sonya"],
    effect: "Grants +10 to damage when Special triggers.",
  },
  {
    name: "Dark Greatsword",
    spCost: 400,
    damage: 16,
    range: 1,
    weaponType: "Sword",
    colorType: "Red",
    prev: ["Silver Sword"],
    exclusive: ["Siegbert"],
    effect: "Grants Atk/Spd+4 during combat if unit initiates combat.",
  },
  {
    name: "Deathly Dagger",
    spCost: 400,
    damage: 11,
    range: 2,
    weaponType: "Dagger",
    colorType: "Neutral",
    prev: ["Silver Dagger"],
    exclusive: ["Jaffar"],
    effect: "After combat, inflicts Def/Res-7 on foe through its next action. If unit initiated combat, 7 damage to foe after battle.",
  },
  {
    name: "Deft Harpoon",
    spCost: 200,
    damage: 10,
    range: 1,
    weaponType: "Lance",
    colorType: "Blue",
    prev: ["Steel Lance"],
    effect: "If unit has 100% HP at start of combat, unit gets Atk/Spd/Def/Res+2. If attacking, unit will take 2 damage after combat."
  },
  {
    name: "Deft Harpoon+",
    spCost: 300,
    damage: 14,
    range: 1,
    weaponType: "Lance",
    colorType: "Blue",
    prev: ["Deft Harpoon"],
    effect: "If unit has 100% HP at start of combat, unit gets Atk/Spd/Def/Res+2. If attacking, unit will take 2 damage after combat."
  },
  {
    name: "Dire Thunder",
    spCost: 400,
    damage: 9,
    range: 2,
    weaponType: "Tome",
    colorType: "Blue",
    stats: {spd: -5},
    prev: ["Thoron"],
    exclusive: ["Reinhardt","Olwen"],
    effect: "Spd-5. Attack twice when initiating combat.",
  },
  {
    name: "Divine Naga",
    spCost: 400,
    damage: 14,
    range: 2,
    weaponType: "Tome",
    colorType: "Green",
    prev: ["Rexcalibur"],
    exclusive: ["Julia", "Deirdre"],
    effect: "Effective against dragons.  Foe's bonuses (from skills like Fortify, Rally, etc.) are nullified during combat.",
  },
  {
    name: "Divine Tyrfing",
    spCost: 400,
    damage: 16,
    range: 1,
    weaponType: "Sword",
    colorType: "Red",
    stats: {res: 3},
    prev: ["Silver Sword"],
    exclusive: ["Sigurd","Seliph"],
    effect: "Grants Res+3. If in combat against foe using magic, unit receives 50% less damage from the first attack.",
  },
  {
    name: "Durandal",
    spCost: 400,
    damage: 16,
    range: 1,
    weaponType: "Sword",
    colorType: "Red",
    prev: ["Silver Sword"],
    exclusive: ["Eliwood"],
    effect: "Grants Atk+4 during combat if unit initiates attack.",
  },
  {
    name: "Eckesachs",
    spCost: 400,
    damage: 16,
    range: 1,
    weaponType: "Sword",
    colorType: "Red",
    prev: ["Silver Sword"],
    exclusive: ["Zephiel"],
    effect: "Inflicts Def-4 on foes within 2 spaces through their next actions at the start of each turn.",
  },
  {
    name: "Elfire",
    spCost: 100,
    damage: 6,
    range: 2,
    weaponType: "Tome",
    colorType: "Red",
    prev: ["Fire"],
    effect: "-"
  },
  {
    name: "Élivágar",
    spCost: 400,
    damage: 14,
    range: 2,
    weaponType: "Tome",
    colorType: "Green",
    prev: ["Rexcalibur"],
    exclusive: ["Veronica"],
    effect: "If unit initiates attack, bonuses on foes within 2 spaces of the target become penalties through their next actions.",
  },
  {
    name: "Ellight",
    spCost: 100,
    damage: 6,
    range: 2,
    weaponType: "Tome",
    colorType: "Blue",
    prev: ["Light"],
    effect: "-"
  },
  {
    name: "Elthunder",
    spCost: 100,
    damage: 6,
    range: 2,
    weaponType: "Tome",
    colorType: "Blue",
    prev: ["Thunder"],
    effect: "-"
  },
  {
    name: "Elwind",
    spCost: 100,
    damage: 6,
    range: 2,
    weaponType: "Tome",
    colorType: "Green",
    prev: ["Wind"],
    effect: "-"
  },
  {
    name: "Emerald Axe",
    spCost: 200,
    damage: 8,
    range: 1,
    weaponType: "Axe",
    colorType: "Green",
    prev: ["Steel Axe"],
    effect: "Gives Atk+20% if weapon-triangle advantage, Atk-20% if disadvantage."
  },
  {
    name: "Emerald Axe+",
    spCost: 300,
    damage: 12,
    range: 1,
    weaponType: "Axe",
    colorType: "Green",
    prev: ["Emerald Axe"],
    effect: "Gives Atk+20% if weapon-triangle advantage, Atk-20% if disadvantage."
  },
  {
    name: "Excalibur",
    spCost: 400,
    damage: 14,
    range: 2,
    weaponType: "Tome",
    colorType: "Green",
    prev: ["Rexcalibur"],
    exclusive: ["Merric"],
    effect: "Effective against flying units.",
  },
  {
    name: "Expiration",
    spCost: 400,
    damage: 16,
    range: 1,
    weaponType: "Breath",
    colorType: "Green",
    prev: ["Flametongue"],
    exclusive: ["Robin (M) (Fallen Heroes)"],
    effect: "If attacked, unit can counterattack regardless of foe's range. If foe's Range = 2, damage calculated using the lower of foe's Def or Res.",
  },
  {
    name: "Falchion",
    spCost: 400,
    damage: 16,
    range: 1,
    weaponType: "Sword",
    colorType: "Red",
    prev: ["Silver Sword"],
    exclusive: ["Marth", "Marth (Masked)", "Chrom", "Alm", "Lucina"],
    effect: "Effective against dragons. At the start of every third turn, unit recovers 10 HP.",
  },
  {
    name: "Fear",
    spCost: 150,
    damage: 5,
    range: 2,
    weaponType: "Staff",
    colorType: "Neutral",
    effect: "After combat, inflicts Atk-6 on targeted foe through its next action."
  },
  {
    name: "Fear+",
    spCost: 300,
    damage: 12,
    range: 2,
    weaponType: "Staff",
    colorType: "Neutral",
    prev: ["Fear"],
    effect: "After combat, inflicts Atk-7 on target and foes within 2 spaces through their next actions."
  },
  {
    name: "Felicia's Plate",
    spCost: 400,
    damage: 14,
    range: 2,
    weaponType: "Dagger",
    colorType: "Neutral",
    // prev: ["Silver Dagger"],
    exclusive: ["Felicia"],
    effect: "After combat, if unit attacked, inflicts Def/Res-7 on target and foes within 2 spaces of target through their next actions. Damage calculated using the lower of foe's Def or Res."
  },
  {
    name: "Fenrir",
    spCost: 200,
    damage: 9,
    range: 2,
    weaponType: "Tome",
    colorType: "Red",
    prev: ["Ruin"],
    effect: "-"
  },
  {
    name: "Fenrir+",
    spCost: 300,
    damage: 13,
    range: 2,
    weaponType: "Tome",
    colorType: "Red",
    prev: ["Fenrir"],
    effect: "-"
  },
  {
    name: "Fensalir",
    spCost: 400,
    damage: 16,
    range: 1,
    weaponType: "Lance",
    colorType: "Blue",
    prev: ["Silver Lance"],
    exclusive: ["Sharena"],
    effect: "Inflicts Atk-4 on foes within 2 spaces through their next actions at the start of each turn.",
  },
  {
    name: "Fire",
    spCost: 50,
    damage: 4,
    range: 2,
    weaponType: "Tome",
    colorType: "Red",
    effect: "-"
  },
  {
    name: "Fire Breath",
    spCost: 50,
    damage: 6,
    range: 1,
    weaponType: "Breath",
    effect: "-"
  },
  {
    name: "Fire Breath+",
    spCost: 100,
    damage: 8,
    range: 1,
    weaponType: "Breath",
    prev: ["Fire Breath"],
    effect: "-"
  },
  {
    name: "Firesweep Bow",
    spCost: 200,
    damage: 7,
    range: 2,
    weaponType: "Bow",
    colorType: "Neutral",
    prev: ["Steel Bow"],
    effect: "Effective against fliers.  Unit and enemies cannot use counterattacks."
  },
  {
    name: "Firesweep Bow+",
    spCost: 300,
    damage: 11,
    range: 2,
    weaponType: "Bow",
    colorType: "Neutral",
    prev: ["Firesweep Bow"],
    effect: "Effective against fliers.  Unit and enemies cannot use counterattacks."
  },
  {
    name: "Firesweep Lance",
    spCost: 200,
    damage: 11,
    range: 1,
    weaponType: "Lance",
    colorType: "Blue",
    prev: ["Steel Lance"],
    effect: "Unit and enemies cannot use counterattacks."
  },
  {
    name: "Firesweep Lance+",
    spCost: 300,
    damage: 15,
    range: 1,
    weaponType: "Lance",
    colorType: "Blue",
    prev: ["Firesweep Lance"],
    effect: "Unit and enemies cannot use counterattacks."
  },
  {
    name: "Firesweep Sword",
    spCost: 200,
    damage: 11,
    range: 1,
    weaponType: "Sword",
    colorType: "Red",
    prev: ["Steel Sword"],
    effect: "Unit and foes cannot counterattack."
  },
  {
    name: "Firesweep Sword+",
    spCost: 300,
    damage: 15,
    range: 1,
    weaponType: "Sword",
    colorType: "Red",
    prev: ["Firesweep Sword"],
    effect: "Unit and foes cannot counterattack."
  },
  {
    name: "First Bite",
    spCost: 200,
    damage: 10,
    range: 1,
    weaponType: "Lance",
    colorType: "Blue",
    prev: ["Steel Lance"],
    effect: "Grants allies within 2 spaces Def/Res+2 through their next actions after any combat this unit initiates."
  },
  {
    name: "First Bite+",
    spCost: 300,
    damage: 14,
    range: 1,
    weaponType: "Lance",
    colorType: "Blue",
    prev: ["First Bite"],
    effect: "Grants allies within 2 spaces Def/Res+2 through their next actions after any combat this unit initiates."
  },
  {
    name: "Flame Siegmund",
    spCost: 400,
    damage: 16,
    range: 1,
    weaponType: "Lance",
    colorType: "Blue",
    stats: {atk: 3},
    prev: ["Heavy Spear"],
    exclusive: ["Ephraim (Legendary Heroes)"],
    effect: "Grants Atk+3. If the number of foes within 2 spaces (excluding target) ≥ the number of allies within 2 spaces (excluding unit), unit makes a guaranteed follow-up attack",
  },
  {
    name: "Flametongue",
    spCost: 200,
    damage: 11,
    range: 1,
    weaponType: "Breath",
    prev: ["Fire Breath+"],
    effect: "-"
  },
  {
    name: "Flametongue+",
    spCost: 300,
    damage: 15,
    range: 1,
    weaponType: "Breath",
    prev: ["Flametongue"],
    effect: "-"
  },
  {
    name: "Flux",
    spCost: 50,
    damage: 4,
    range: 2,
    weaponType: "Tome",
    colorType: "Red",
    effect: "-"
  },
  {
    name: "Fólkvangr",
    spCost: 400,
    damage: 16,
    range: 1,
    weaponType: "Sword",
    colorType: "Red",
    prev: ["Silver Sword"],
    exclusive: ["Alfonse"],
    effect: "Grants Atk+5 at start of turn if unit's HP ≤ 50%.",
  },
  {
    name: "Fujin Yumi",
    spCost: 400,
    damage: 14,
    range: 2,
    weaponType: "Bow",
    colorType: "Neutral",
    prev: ["Silver Bow"],
    exclusive: ["Takumi"],
    effect: "Effective against flying units.  Unit can pass though foes if own HP ≥ 50%.",
  },
  {
    name: "Geirskögul",
    spCost: 400,
    damage: 16,
    range: 1,
    weaponType: "Lance",
    colorType: "Blue",
    stats: {def: 3},
    prev: ["Silver Lance"],
    exclusive: ["Lucina (Brave Heroes)"],
    effect: "Grants Def+3. Grants allies with sword, lance, axe, bow, or dagger within 2 spaces Atk/Spd+3 during combat.",
  },
  {
    name: "Gleipnir",
    spCost: 400,
    damage: 14,
    range: 2,
    weaponType: "Tome",
    colorType: "Red",
    stats: {res: 3},
    prev: ["Fenrir"],
    exclusive: ["Eirika (Sacred Memories)"],
    effect: "Grants Res+3. If foe's HP = 100% at start of combat, grants Atk/Spd+3 during combat."
  },
  {
    name: "Gradivus",
    spCost: 400,
    damage: 16,
    range: 1,
    weaponType: "Lance",
    colorType: "Blue",
    prev: ["Silver Lance"],
    exclusive: ["Camus", "Hardin (Fallen Heroes)"],
    effect: "Enables counterattack regardless of distance if this unit is attacked.",
  },
  {
    name: "Gratia",
    spCost: 200,
    damage: 8,
    range: 2,
    weaponType: "Bow",
    colorType: "Neutral",
    prev: ["Steel Bow"],
    effect: "Effective against flying foes. If foe uses bow, dagger, magic, or staff, neutralizes foe's bonuses (from skills like Fortify, Rally, etc.) during combat."
  },
  {
    name: "Gratia+",
    spCost: 300,
    damage: 12,
    range: 2,
    weaponType: "Bow",
    colorType: "Neutral",
    prev: ["Gratia"],
    effect: "Effective against flying foes. If foe uses bow, dagger, magic, or staff, neutralizes foe's bonuses (from skills like Fortify, Rally, etc.) during combat."
  },
  {
    name: "Gravity",
    spCost: 150,
    damage: 6,
    range: 2,
    weaponType: "Staff",
    colorType: "Neutral",
    effect: "After any combat, prevents foe from moving more than 1 space through its next action."
  },
  {
    name: "Gravity+",
    spCost: 300,
    damage: 10,
    range: 2,
    weaponType: "Staff",
    colorType: "Neutral",
    prev: ["Gravity"],
    effect: "After combat, prevents target and foes within 1 space of target from moving more than 1 space through their next actions."
  },
  {
    name: "Great Flame",
    spCost: 400,
    damage: 16,
    range: 1,
    weaponType: "Breath",
    stats: {atk: 3},
    prev: ["Flametongue"],
    exclusive: ["Myrrh"],
    effect: "Grants Atk+3. If unit's Def - foe's Def ≥ 5, foe can't make a follow-up attack. If foe's Range = 2, damage calculated using the lower of foe's Def or Res."
  },
  {
    name: "Green Egg",
    spCost: 200,
    damage: 7,
    range: 2,
    weaponType: "Tome",
    colorType: "Green",
    prev: ["Elwind"],
    effect: "If unit initiates attack, unit recovers 4 HP after the battle."
  },
  {
    name: "Green Egg+",
    spCost: 300,
    damage: 11,
    range: 2,
    weaponType: "Tome",
    colorType: "Green",
    prev: ["Green Egg"],
    effect: "If unit initiates attack, unit recovers 4 HP after the battle."
  },
  {
    name: "Green Gift",
    spCost: 200,
    damage: 8,
    range: 2,
    weaponType: "Tome",
    colorType: "Green",
    prev: ["Elwind"],
    effect: "If foe uses bow, dagger, magic, or staff, neutralizes foe's bonuses (from skills like Fortify, Rally, etc.) during combat."
  },
  {
    name: "Green Gift+",
    spCost: 300,
    damage: 12,
    range: 2,
    weaponType: "Tome",
    colorType: "Green",
    prev: ["Green Gift"],
    effect: "If foe uses bow, dagger, magic, or staff, neutralizes foe's bonuses (from skills like Fortify, Rally, etc.) during combat."
  },
  {
    name: "Grima's Truth",
    spCost: 400,
    damage: 14,
    range: 2,
    weaponType: "Tome",
    colorType: "Red",
    prev: ["Fenrir"],
    stats: {def: 3},
    exclusive: ["Morgan (M)"],
    effect: "Grants Def+3. After combat, if unit attacked, inflicts Atk/Spd-5 on target and foes within 2 spaces of target through their next actions, and grants Atk/Spd+5 to unit and allies within 2 spaces for 1 turn.",
  },
  {
    name: "Grimoire",
    spCost: 400,
    damage: 14,
    range: 2,
    weaponType: "Tome",
    colorType: "Red",
    prev: ["Fenrir"],
    exclusive: ["Nowi (Trick or Defeat!)"],
    effect: "If unit has ≥ 50% HP, unit can move to a space adjacent to an ally within 2 spaces.",
  },
  {
    name: "Gronnblade",
    spCost: 200,
    damage: 9,
    range: 2,
    weaponType: "Tome",
    colorType: "Green",
    prev: ["Elwind"],
    effect: "Slows Special trigger (cooldown count+1). Adds total bonuses on unit to damage dealt."
  },
  {
    name: "Gronnblade+",
    spCost: 300,
    damage: 13,
    range: 2,
    weaponType: "Tome",
    colorType: "Green",
    prev: ["Gronnblade"],
    effect: "Slows Special trigger (cooldown count+1). Adds total bonuses on unit to damage dealt."
  },
  {
    name: "Gronnowl",
    spCost: 200,
    damage: 6,
    range: 2,
    weaponType: "Tome",
    colorType: "Green",
    prev: ["Elwind"],
    effect: "During combat, unit's Atk/Spd/Def/Res boosted by number of adjacent allies x 2."
  },
  {
    name: "Gronnowl+",
    spCost: 300,
    damage: 10,
    range: 2,
    weaponType: "Tome",
    colorType: "Green",
    prev: ["Gronnowl"],
    effect: "During combat, unit's Atk/Spd/Def/Res boosted by number of adjacent allies x 2."
  },
  {
    name: "Gronnraven",
    spCost: 200,
    damage: 7,
    range: 2,
    weaponType: "Tome",
    colorType: "Green",
    prev: ["Elwind"],
    effect: "Grants weapon advantage vs. colorless foes."
  },
  {
    name: "Gronnraven+",
    spCost: 300,
    damage: 11,
    range: 2,
    weaponType: "Tome",
    colorType: "Green",
    prev: ["Gronnraven"],
    effect: "Grants weapon advantage vs. colorless foes."
  },
  {
    name: "Gronnwolf",
    spCost: 200,
    damage: 6,
    range: 2,
    weaponType: "Tome",
    colorType: "Green",
    prev: ["Elwind"],
    effect: "Effective against cavalry units."
  },
  {
    name: "Gronnwolf+",
    spCost: 300,
    damage: 10,
    range: 2,
    weaponType: "Tome",
    colorType: "Green",
    prev: ["Gronnwolf"],
    effect: "Effective against cavalry units."
  },
  {
    name: "Guard Bow",
    spCost: 200,
    damage: 8,
    range: 2,
    weaponType: "Bow",
    colorType: "Neutral",
    effect: "Effective against flying units."
  },
  {
    name: "Guard Bow+",
    spCost: 300,
    damage: 12,
    range: 2,
    weaponType: "Bow",
    colorType: "Neutral",
    prev: ["Guard Bow"],
    effect: "Effective against flying foes.  Grants Def/Res+6 during combat if unit is attacked by foe using bow, daggers, magic, or staff."
  },
  {
    name: "Hagoita",
    spCost: 200,
    damage: 10,
    range: 1,
    weaponType: "Axe",
    colorType: "Green",
    prev: ["Steel Axe"],
    effect: "Grants Def/Res+2 during combat to allies within 2 spaces."
  },
  {
    name: "Hagoita+",
    spCost: 300,
    damage: 14,
    range: 1,
    weaponType: "Axe",
    colorType: "Green",
    prev: ["Hagoita"],
    effect: "Grants Def/Res+2 during combat to allies within 2 spaces."
  },
  {
    name: "Hama Ya",
    spCost: 200,
    damage: 8,
    range: 2,
    weaponType: "Bow",
    colorType: "Neutral",
    prev: ["Steel Bow"],
    effect: "Effective against fliers. Grants Def/Res+2 during combat to allies within 2 spaces."
  },
  {
    name: "Hama Ya+",
    spCost: 300,
    damage: 12,
    range: 2,
    weaponType: "Bow",
    colorType: "Neutral",
    prev: ["Hama Ya"],
    effect: "Effective against fliers. Grants Def/Res+2 during combat to allies within 2 spaces."
  },
  {
    name: "Hammer",
    spCost: 200,
    damage: 8,
    range: 1,
    weaponType: "Axe",
    colorType: "Green",
    prev: ["Steel Axe"],
    effect: "Effective against armored units."
  },
  {
    name: "Hammer+",
    spCost: 300,
    damage: 12,
    range: 1,
    weaponType: "Axe",
    colorType: "Green",
    prev: ["Hammer"],
    effect: "Effective against armored units."
  },
  {
    name: "Handbell",
    spCost: 200,
    damage: 10,
    range: 1,
    weaponType: "Axe",
    colorType: "Green",
    prev: ["Steel Axe"],
    effect: "Grants Atk/Spd/Def/Res+2 during combat if foe initiates combat."
  },
  {
    name: "Handbell+",
    spCost: 300,
    damage: 14,
    range: 1,
    weaponType: "Axe",
    colorType: "Green",
    prev: ["Handbell"],
    effect: "Grants Atk/Spd/Def/Res+2 during combat if foe initiates combat."
  },
  {
    name: "Hauteclere",
    spCost: 400,
    damage: 16,
    range: 1,
    weaponType: "Axe",
    colorType: "Green",
    prev: ["Silver Axe"],
    exclusive: ["Michalis", "Minerva"],
    effect: "Accelerates Special trigger (cooldown count-1).",
  },
  {
    name: "Heavy Spear",
    spCost: 200,
    damage: 8,
    range: 1,
    weaponType: "Lance",
    colorType: "Blue",
    prev: ["Steel Lance"],
    effect: "Effective against armored units."
  },
  {
    name: "Heavy Spear+",
    spCost: 300,
    damage: 12,
    range: 1,
    weaponType: "Lance",
    colorType: "Blue",
    prev: ["Heavy Spear"],
    effect: "Effective against armored units."
  },
  {
    name: "Hibiscus Tome",
    spCost: 200,
    damage: 8,
    range: 2,
    weaponType: "Tome",
    colorType: "Green",
    prev: ["Elwind"],
    effect: "Grants allies within 2 spaces Atk/Spd+1 during combat."
  },
  {
    name: "Hibiscus Tome+",
    spCost: 300,
    damage: 12,
    range: 2,
    weaponType: "Tome",
    colorType: "Green",
    prev: ["Hibiscus Tome"],
    effect: "Grants allies within 2 spaces Atk/Spd+1 during combat."
  },
  {
    name: "Hinoka's Spear",
    spCost: 400,
    damage: 16,
    range: 1,
    weaponType: "Lance",
    colorType: "Blue",
    exclusive: ["Hinoka"],
    // prev: ["Brave Lance"],
    effect: "Grants Atk/Spd +4 during combat if infantry or flying ally is within 2 spaces of unit."
  },
  {
    name: "Iron Axe",
    spCost: 50,
    damage: 6,
    range: 1,
    weaponType: "Axe",
    colorType: "Green",
    effect: "-"
  },
  {
    name: "Iron Bow",
    spCost: 50,
    damage: 4,
    range: 2,
    weaponType: "Bow",
    colorType: "Neutral",
    effect: "Effective against flying units."
  },
  {
    name: "Iron Dagger",
    spCost: 50,
    damage: 3,
    range: 2,
    weaponType: "Dagger",
    colorType: "Neutral",
    effect: "After combat, inflicts Def/Res-3 on foe through its next action."
  },
  {
    name: "Iron Lance",
    spCost: 50,
    damage: 6,
    range: 1,
    weaponType: "Lance",
    colorType: "Blue",
    effect: "-"
  },
  {
    name: "Iron Sword",
    spCost: 50,
    damage: 6,
    range: 1,
    weaponType: "Sword",
    colorType: "Red",
    effect: "-"
  },
  {
    name: "Ivaldi",
    spCost: 400,
    damage: 14,
    range: 2,
    weaponType: "Tome",
    colorType: "Blue",
    prev: ["Shine"],
    stats: {def: 3},
    exclusive: ["L'Arachel"],
    effect: "Grants Def+3. If foe's HP = 100% at start of combat, grants Atk/Spd+3 during combat."
  },
  {
    name: "Kadomatsu",
    spCost: 200,
    damage: 10,
    range: 1,
    weaponType: "Sword",
    colorType: "Red",
    prev: ["Steel Sword"],
    effect: "Grants Def/Res+2 during combat to allies within 2 spaces."
  },
  {
    name: "Kadomatsu+",
    spCost: 300,
    damage: 14,
    range: 1,
    weaponType: "Sword",
    colorType: "Red",
    prev: ["Kadomatsu"],
    effect: "Grants Def/Res+2 during combat to allies within 2 spaces."
  },
  {
    name: "Kagami Mochi",
    spCost: 200,
    damage: 8,
    range: 1,
    weaponType: "Dagger",
    colorType: "Neutral",
    prev: ["Steel Dagger"],
    effect: "Grants Def/Res+2 during combat to allies within 2 spaces."
  },
  {
    name: "Kagami Mochi+",
    spCost: 300,
    damage: 12,
    range: 1,
    weaponType: "Dagger",
    colorType: "Neutral",
    prev: ["Kagami Mochi"],
    effect: "Accelerates Special trigger (cooldown count-1). After combat, if unit attacked, inflicts Def/Res-7 on target and foes within 2 spaces through their next actions."
  },
  {
    name: "Keen Blárwolf",
    spCost: 200,
    damage: 8,
    range: 2,
    weaponType: "Tome",
    colorType: "Blue",
    effect: "Effective against cavalry foes."
  },
  {
    name: "Keen Blárwolf+",
    spCost: 300,
    damage: 12,
    range: 2,
    weaponType: "Tome",
    colorType: "Blue",
    prev: ["Keen Blárwolf"],
    effect: "Effective against cavalry foes."
  },
  {
    name: "Keen Gronnwolf",
    spCost: 200,
    damage: 8,
    range: 2,
    weaponType: "Tome",
    colorType: "Green",
    prev: ["Elwind"],
    effect: "Effective against cavalry foes."
  },
  {
    name: "Keen Gronnwolf+",
    spCost: 300,
    damage: 12,
    range: 2,
    weaponType: "Tome",
    colorType: "Green",
    prev: ["Keen Gronnwolf"],
    effect: "Effective against cavalry foes."
  },
  {
    name: "Keen Rauðrwolf",
    spCost: 200,
    damage: 8,
    range: 2,
    weaponType: "Tome",
    colorType: "Red",
    effect: "Effective against cavalry foes."
  },
  {
    name: "Keen Rauðrwolf+",
    spCost: 300,
    damage: 12,
    range: 2,
    weaponType: "Tome",
    colorType: "Red",
    prev: ["Keen Rauðrwolf"],
    effect: "Effective against cavalry foes."
  },
  {
    name: "Killer Axe",
    spCost: 200,
    damage: 7,
    range: 1,
    weaponType: "Axe",
    colorType: "Green",
    prev: ["Steel Axe"],
    effect: "Accelerates Special trigger (cooldown count-1)."
  },
  {
    name: "Killer Axe+",
    spCost: 300,
    damage: 11,
    range: 1,
    weaponType: "Axe",
    colorType: "Green",
    prev: ["Killer Axe"],
    effect: "Accelerates Special trigger (cooldown count-1)."
  },
  {
    name: "Killer Bow",
    spCost: 200,
    damage: 5,
    range: 2,
    weaponType: "Bow",
    colorType: "Neutral",
    prev: ["Steel Bow"],
    effect: "Effective against flying units.  Accelerates Special trigger (cooldown count-1)."
  },
  {
    name: "Killer Bow+",
    spCost: 300,
    damage: 9,
    range: 2,
    weaponType: "Bow",
    colorType: "Neutral",
    prev: ["Killer Bow"],
    effect: "Effective against flying units.  Accelerates Special trigger (cooldown count-1)."
  },
  {
    name: "Killer Lance",
    spCost: 200,
    damage: 7,
    range: 1,
    weaponType: "Lance",
    colorType: "Blue",
    prev: ["Steel Lance"],
    effect: "Accelerates Special trigger (cooldown count-1)."
  },
  {
    name: "Killer Lance+",
    spCost: 300,
    damage: 11,
    range: 1,
    weaponType: "Lance",
    colorType: "Blue",
    prev: ["Killer Lance"],
    effect: "Accelerates Special trigger (cooldown count-1)."
  },
  {
    name: "Killing Edge",
    spCost: 200,
    damage: 7,
    range: 1,
    weaponType: "Sword",
    colorType: "Red",
    prev: ["Steel Sword"],
    effect: "Accelerates Special trigger (cooldown count-1)."
  },
  {
    name: "Killing Edge+",
    spCost: 300,
    damage: 11,
    range: 1,
    weaponType: "Sword",
    colorType: "Red",
    prev: ["Killing Edge"],
    effect: "Accelerates Special trigger (cooldown count-1)."
  },
  {
    name: "Kitty Paddle",
    spCost: 200,
    damage: 5,
    range: 2,
    weaponType: "Dagger",
    colorType: "Neutral",
    prev: ["Steel Dagger"],
    effect: "Effective against foe using magic.  After combat, if foe uses magic, foe suffers Def/Res-5 through foe's next action."
  },
  {
    name: "Kitty Paddle+",
    spCost: 300,
    damage: 8,
    range: 2,
    weaponType: "Dagger",
    colorType: "Neutral",
    prev: ["Kitty Paddle"],
    effect: "Effective against foe using magic.  After combat, if foe uses magic, foe suffers Def/Res-7 through foe's next action."
  },
  {
    name: "Laevatein",
    spCost: 400,
    damage: 16,
    range: 1,
    weaponType: "Sword",
    colorType: "Red",
    stats: {atk: 3},
    prev: ["Silver Sword"],
    exclusive: ["Laevatein"],
    effect: "Grants Atk+3. Adds total bonuses on unit to damage dealt.",
  },
  {
    name: "Legion's Axe",
    spCost: 200,
    damage: 10,
    range: 1,
    weaponType: "Axe",
    colorType: "Green",
    prev: ["Steel Axe"],
    effect: "After combat, bonuses on targeted foe become penalties through its next action."
  },
  {
    name: "Legion's Axe+",
    spCost: 300,
    damage: 14,
    range: 1,
    weaponType: "Axe",
    colorType: "Green",
    prev: ["Legion's Axe"],
    effect: "After combat, bonuses on targeted foe become penalties through its next action."
  },
  {
    name: "Leiptr",
    spCost: 400,
    damage: 16,
    range: 1,
    weaponType: "Lance",
    colorType: "Blue",
    prev: ["Silver Lance"],
    exclusive: ["Fjorm"],
    effect: "Unit can counterattack regardless of foe's range.",
  },
  {
    name: "Light",
    spCost: 50,
    damage: 4,
    range: 2,
    weaponType: "Tome",
    colorType: "Blue",
    effect: "-"
  },
  {
    name: "Light Breath",
    spCost: 200,
    damage: 9,
    range: 1,
    weaponType: "Breath",
    prev: ["Fire Breath+"],
    effect: "Grants adjacent allies Def/Res+4 through their next actions after any combat this unit initiates."
  },
  {
    name: "Light Breath+",
    spCost: 300,
    damage: 13,
    range: 1,
    weaponType: "Breath",
    prev: ["Light Breath"],
    effect: "Grants adjacent allies Def/Res+4 through their next actions after any combat this unit initiates."
  },
  {
    name: "Lightning Breath",
    spCost: 200,
    damage: 7,
    range: 1,
    weaponType: "Breath",
    prev: ["Fire Breath+"],
    effect: "Enables counterattack regardless of attacker's range. Slows Special trigger (cooldown count+1)."
  },
  {
    name: "Lightning Breath+",
    spCost: 300,
    damage: 11,
    range: 1,
    weaponType: "Breath",
    prev: ["Lightning Breath"],
    effect: "Enables counterattack regardless of attacker's range. Slows Special trigger (cooldown count+1)."
  },
  {
    name: "Lilith Floatie",
    spCost: 200,
    damage: 10,
    range: 1,
    weaponType: "Axe",
    colorType: "Green",
    prev: ["Steel Axe"],
    effect: "Grants allies within 2 spaces Atk/Spd+1 during combat."
  },
  {
    name: "Lilith Floatie+",
    spCost: 300,
    damage: 14,
    range: 1,
    weaponType: "Axe",
    colorType: "Green",
    prev: ["Lilith Floatie"],
    effect: "Grants allies within 2 spaces Atk/Spd+1 during combat."
  },
  {
    name: "Melon Crusher",
    spCost: 200,
    damage: 10,
    range: 1,
    weaponType: "Axe",
    colorType: "Green",
    prev: ["Steel Axe"],
    effect: "If unit has 100% HP at start of combat, unit gets Atk/Spd/Def/Res+2. If attacking, unit will take 2 damage after combat."
  },
  {
    name: "Melon Crusher+",
    spCost: 300,
    damage: 14,
    range: 1,
    weaponType: "Axe",
    colorType: "Green",
    prev: ["Melon Crusher"],
    effect: "If unit has 100% HP at start of combat, unit gets Atk/Spd/Def/Res+2. If attacking, unit will take 2 damage after combat."
  },
  {
    name: "Monstrous Bow",
    spCost: 200,
    damage: 8,
    range: 2,
    weaponType: "Bow",
    colorType: "Neutral",
    prev: ["Steel Bow"],
    effect: "Effective against flying foes.  After combat, bonuses become penalties on all foes within 2 spaces of target through foes' next actions."
  },
  {
    name: "Monstrous Bow+",
    spCost: 300,
    damage: 12,
    range: 2,
    weaponType: "Bow",
    colorType: "Neutral",
    prev: ["Monstrous Bow"],
    effect: "Effective against flying foes.  After combat, bonuses become penalties on all foes within 2 spaces of target through foes' next actions."
  },
  {
    name: "Mulagir",
    spCost: 400,
    damage: 14,
    range: 2,
    weaponType: "Bow",
    colorType: "Neutral",
    stats: {spd: 3},
    prev: ["Silver Bow"],
    exclusive: ["Lyn (Brave Heroes)"],
    effect: "Effective against flying units.  Grants Spd+3. If foe is magic user, foe's bonuses (from skills like Fortify, Rally, etc.) are nullified during combat."
  },
  {
    name: "Mystletainn",
    spCost: 400,
    damage: 16,
    range: 1,
    weaponType: "Sword",
    colorType: "Red",
    prev: ["Killing Edge"],
    exclusive: ["Eldigan"],
    effect: "Accelerates Special trigger (cooldown count-1).",
  },
  {
    name: "Naga",
    spCost: 400,
    damage: 14,
    range: 2,
    weaponType: "Tome",
    colorType: "Green",
    prev: ["Rexcalibur"],
    exclusive: ["Julia"],
    effect: "Effective against dragons.  Grants Def/Res+2 when this unit is attacked.",
  },
  {
    name: "Naglfar",
    spCost: 400,
    damage: 14,
    range: 2,
    weaponType: "Tome",
    colorType: "Red",
    prev: ["Fenrir"],
    exclusive: ["Lyon"],
    effect: "Grants weapon advantage vs. colorless foes.",
  },
  {
    name: "Nidhogg",
    spCost: 400,
    damage: 14,
    range: 2,
    weaponType: "Bow",
    colorType: "Neutral",
    prev: ["Silver Bow"],
    exclusive: ["Innes"],
    effect: "Effective against flying units.  During combat, unit's Atk/Spd/Def/Res boosted by number of adjacent allies x 2.",
  },
  {
    name: "Nóatún",
    spCost: 400,
    damage: 16,
    range: 1,
    weaponType: "Axe",
    colorType: "Green",
    prev: ["Silver Axe"],
    exclusive: ["Anna"],
    effect: "Unit may move adjacent to any ally when HP ≤ 40%.",
  },
  {
    name: "Pain",
    spCost: 150,
    damage: 3,
    range: 2,
    weaponType: "Staff",
    colorType: "Neutral",
    effect: "Inflicts 10 damage on targeted foe after combat."
  },
  {
    name: "Pain+",
    spCost: 300,
    damage: 10,
    range: 2,
    weaponType: "Staff",
    colorType: "Neutral",
    prev: ["Pain"],
    effect: "Deals 10 damage to target and foes within 2 spaces of target after combat."
  },
  {
    name: "Panic",
    spCost: 150,
    damage: 7,
    range: 2,
    weaponType: "Staff",
    colorType: "Neutral",
    effect: "After combat, bonuses on targeted foe become penalties through its next action."
  },
  {
    name: "Panic+",
    spCost: 300,
    damage: 11,
    range: 2,
    weaponType: "Staff",
    colorType: "Neutral",
    prev: ["Panic"],
    effect: "After combat, bonuses on target and foes within 2 spaces of target become penalties through their next actions."
  },
  {
    name: "Parthia",
    spCost: 400,
    damage: 14,
    range: 2,
    weaponType: "Bow",
    colorType: "Neutral",
    prev: ["Silver Bow"],
    exclusive: ["Jeorge"],
    effect: "Effective against flying units.  Grants Res+4 during combat if initiating attack.",
  },
  {
    name: "Peshkatz",
    spCost: 400,
    damage: 14,
    range: 2,
    weaponType: "Dagger",
    colorType: "Neutral",
    prev: ["Silver Dagger"],
    exclusive: ["Sothe"],
    effect: "After combat, if unit attacked, inflicts Atk/Spd/Def/Res-4 on target and foes within 2 spaces of target through their next actions, and grants Atk/Spd/Def/Res+4 to unit and allies within 2 spaces for 1 turn."
  },
  {
    name: "Poison Dagger",
    spCost: 200,
    damage: 2,
    range: 2,
    weaponType: "Dagger",
    colorType: "Neutral",
    prev: ["Steel Dagger"],
    effect: "Effective against infantry units.  Infantry foes suffer Def/Res-4 after combat through their next actions."
  },
  {
    name: "Poison Dagger+",
    spCost: 300,
    damage: 5,
    range: 2,
    weaponType: "Dagger",
    colorType: "Neutral",
    prev: ["Poison Dagger"],
    effect: "Effective against infantry units.  Infantry foes suffer Def/Res-6 after combat through their next actions."
  },
  {
    name: "Poleaxe",
    spCost: 200,
    damage: 10,
    range: 1,
    weaponType: "Axe",
    colorType: "Green",
    effect: "Effective against cavalry units."
  },
  {
    name: "Poleaxe+",
    spCost: 300,
    damage: 14,
    range: 1,
    weaponType: "Axe",
    colorType: "Green",
    prev: ["Poleaxe"],
    effect: "Effective against cavalry units."
  },
  {
    name: "Ragnarok",
    spCost: 400,
    damage: 14,
    range: 2,
    weaponType: "Tome",
    colorType: "Red",
    prev: ["Bolganone"],
    exclusive: ["Celica"],
    effect: "If unit has 100% HP at the start of combat, unit receives Atk/Spd +5. If attacking, unit will receive 5 damage after combat.",
  },
  {
    name: "Ragnell",
    spCost: 400,
    damage: 16,
    range: 1,
    weaponType: "Sword",
    colorType: "Red",
    prev: ["Silver Sword"],
    exclusive: ["Ike", "Ike (Legendary Heroes)"],
    effect: "Enables counterattack regardless of distance if this unit is attacked.",
  },
  {
    name: "Raijinto",
    spCost: 400,
    damage: 16,
    range: 1,
    weaponType: "Sword",
    colorType: "Red",
    prev: ["Silver Sword"],
    exclusive: ["Ryoma"],
    effect: "Enables counterattack regardless of distance if this unit is attacked.",
  },
  {
    name: "Rauðrblade",
    spCost: 200,
    damage: 9,
    range: 2,
    weaponType: "Tome",
    colorType: "Red",
    prev: ["Ruin"],
    effect: "Slows Special trigger (cooldown count+1). Adds total bonuses on unit to damage dealt."
  },
  {
    name: "Rauðrblade+",
    spCost: 300,
    damage: 13,
    range: 2,
    weaponType: "Tome",
    colorType: "Red",
    prev: ["Rauðrblade"],
    effect: "Slows Special trigger (cooldown count+1). Adds total bonuses on unit to damage dealt."
  },
  {
    name: "Rauðrowl",
    spCost: 200,
    damage: 6,
    range: 2,
    weaponType: "Tome",
    colorType: "Red",
    prev: ["Elfire"],
    effect: "During combat, unit's Atk/Spd/Def/Res boosted by number of adjacent allies x 2."
  },
  {
    name: "Rauðrowl+",
    spCost: 300,
    damage: 10,
    range: 2,
    weaponType: "Tome",
    colorType: "Red",
    prev: ["Rauðrowl"],
    effect: "During combat, unit's Atk/Spd/Def/Res boosted by number of adjacent allies x 2."
  },
  {
    name: "Rauðrraven",
    spCost: 200,
    damage: 7,
    range: 2,
    weaponType: "Tome",
    colorType: "Red",
    prev: ["Ruin"],
    effect: "Grants weapon advantage vs. colorless foes."
  },
  {
    name: "Rauðrraven+",
    spCost: 300,
    damage: 11,
    range: 2,
    weaponType: "Tome",
    colorType: "Red",
    prev: ["Rauðrraven"],
    effect: "Grants weapon advantage vs. colorless foes."
  },
  {
    name: "Rauðrwolf",
    spCost: 200,
    damage: 6,
    range: 2,
    weaponType: "Tome",
    colorType: "Red",
    prev: ["Ruin"],
    effect: "Effective against cavalry units."
  },
  {
    name: "Rauðrwolf+",
    spCost: 300,
    damage: 10,
    range: 2,
    weaponType: "Tome",
    colorType: "Red",
    prev: ["Rauðrwolf"],
    effect: "Effective against cavalry units."
  },
  {
    name: "Refreshing Bolt",
    spCost: 200,
    damage: 8,
    range: 2,
    weaponType: "Bow",
    colorType: "Neutral",
    prev: ["Steel Bow"],
    effect: "If unit has 100% HP at start of combat, unit gets Atk/Spd/Def/Res+2. If attacking, unit will take 2 damage after combat. Effective against fliers."
  },
  {
    name: "Refreshing Bolt+",
    spCost: 300,
    damage: 12,
    range: 2,
    weaponType: "Bow",
    colorType: "Neutral",
    prev: ["Refreshing Bolt"],
    effect: "If unit has 100% HP at start of combat, unit gets Atk/Spd/Def/Res+2. If attacking, unit will take 2 damage after combat. Effective against fliers."
  },
  {
    name: "Regal Blade",
    spCost: 400,
    damage: 16,
    range: 1,
    weaponType: "Sword",
    colorType: "Red",
    prev: ["Silver Sword"],
    exclusive: ["Lloyd"],
    effect: "If foe's HP is 100% when combat starts, unit receives Atk/Spd+2 during combat.",
  },
  {
    name: "Resolute Blade",
    spCost: 400,
    damage: 16,
    range: 1,
    weaponType: "Sword",
    colorType: "Red",
    stats: {atk: 3},
    prev: ["Wo Dao"],
    exclusive: ["Mia"],
    effect: "Grants Atk+3. Grants +10 to damage when Special triggers.",
  },
  {
    name: "Rexcalibur",
    spCost: 200,
    damage: 9,
    range: 2,
    weaponType: "Tome",
    colorType: "Green",
    prev: ["Elwind"],
    effect: "-"
  },
  {
    name: "Rexcalibur+",
    spCost: 300,
    damage: 13,
    range: 2,
    weaponType: "Tome",
    colorType: "Green",
    prev: ["Rexcalibur"],
    effect: "-"
  },
  {
    name: "Ridersbane",
    spCost: 200,
    damage: 10,
    range: 1,
    weaponType: "Lance",
    colorType: "Blue",
    prev: ["Steel Lance"],
    effect: "Effective against cavalry units."
  },
  {
    name: "Ridersbane+",
    spCost: 300,
    damage: 14,
    range: 1,
    weaponType: "Lance",
    colorType: "Blue",
    prev: ["Ridersbane"],
    effect: "Effective against cavalry units."
  },
  {
    name: "Rogue Dagger",
    spCost: 200,
    damage: 4,
    range: 2,
    weaponType: "Dagger",
    colorType: "Neutral",
    prev: ["Steel Dagger"],
    effect: "After combat, inflicts Def/Res-3 on foe through its next action. Grants unit Def/Res+3 for 1 turn."
  },
  {
    name: "Rogue Dagger+",
    spCost: 300,
    damage: 7,
    range: 2,
    weaponType: "Dagger",
    colorType: "Neutral",
    prev: ["Rogue Dagger"],
    effect: "After combat, inflicts Def/Res-5 on foe through its next action. Grants unit Def/Res+5 for 1 turn."
  },
  {
    name: "Ruby Sword",
    spCost: 200,
    damage: 8,
    range: 1,
    weaponType: "Sword",
    colorType: "Red",
    prev: ["Steel Sword"],
    effect: "Gives Atk+20% if weapon-triangle advantage, Atk-20% if disadvantage."
  },
  {
    name: "Ruby Sword+",
    spCost: 300,
    damage: 12,
    range: 1,
    weaponType: "Sword",
    colorType: "Red",
    prev: ["Ruby Sword"],
    effect: "Gives Atk+20% if weapon-triangle advantage, Atk-20% if disadvantage."
  },
  {
    name: "Ruin",
    spCost: 100,
    damage: 6,
    range: 2,
    weaponType: "Tome",
    colorType: "Red",
    prev: ["Flux"],
    effect: "-"
  },
  {
    name: "Sack o' Gifts",
    spCost: 200,
    damage: 10,
    range: 1,
    weaponType: "Axe",
    colorType: "Green",
    prev: ["Steel Axe"],
    effect: "Grants Atk/Spd/Def/Res+2 during combat if foe initiates combat."
  },
  {
    name: "Sack o' Gifts+",
    spCost: 300,
    damage: 14,
    range: 1,
    weaponType: "Axe",
    colorType: "Green",
    prev: ["Sack o' Gifts"],
    effect: "Grants Atk/Spd/Def/Res+2 during combat if foe initiates combat."
  },
  {
    name: "Sapphire Lance",
    spCost: 200,
    damage: 8,
    range: 1,
    weaponType: "Lance",
    colorType: "Blue",
    prev: ["Steel Lance"],
    effect: "Gives Atk+20% if weapon-triangle advantage, Atk-20% if disadvantage."
  },
  {
    name: "Sapphire Lance+",
    spCost: 300,
    damage: 12,
    range: 1,
    weaponType: "Lance",
    colorType: "Blue",
    prev: ["Sapphire Lance"],
    effect: "Gives Atk+20% if weapon-triangle advantage, Atk-20% if disadvantage."
  },
  {
    name: "Sealed Falchion",
    spCost: 400,
    damage: 16,
    range: 1,
    weaponType: "Sword",
    colorType: "Red",
    prev: ["Silver Sword"],
    exclusive: ["Chrom (The Branded King)"],
    effect: "Effective against dragons. If unit's HP < 100% at start of combat, grants Atk/Spd/Def/Res+5 during combat.",
  },
  {
    name: "Sealife Tome",
    spCost: 200,
    damage: 8,
    range: 2,
    weaponType: "Tome",
    colorType: "Blue",
    prev: ["Elthunder"],
    effect: "Grants allies within 2 spaces Atk/Spd+1 during combat."
  },
  {
    name: "Sealife Tome+",
    spCost: 300,
    damage: 12,
    range: 2,
    weaponType: "Tome",
    colorType: "Blue",
    prev: ["Sealife Tome"],
    effect: "Grants allies within 2 spaces Atk/Spd+1 during combat."
  },
  {
    name: "Seashell",
    spCost: 200,
    damage: 7,
    range: 2,
    weaponType: "Dagger",
    colorType: "Neutral",
    prev: ["Steel Dagger"],
    effect: "Foe takes Def/Res-5 until end of foe's next action. If unit has 100% HP at start of combat, Atk/Spd/Def/Res+2. If attacking, unit gets 2 damage after."
  },
  {
    name: "Seashell+",
    spCost: 300,
    damage: 10,
    range: 2,
    weaponType: "Dagger",
    colorType: "Neutral",
    prev: ["Seashell"],
    effect: "Foe takes Def/Res-7 until end of foe's next action. If unit has 100% HP at start of combat, Atk/Spd/Def/Res+2. If attacking, unit gets 2 damage after."
  },
  {
    name: "Shine",
    spCost: 200,
    damage: 9,
    range: 2,
    weaponType: "Tome",
    colorType: "Blue",
    prev: ["Ellight"],
    effect: ""
  },
  {
    name: "Shine+",
    spCost: 300,
    damage: 13,
    range: 2,
    weaponType: "Tome",
    colorType: "Blue",
    prev: ["Shine"],
    effect: ""
  },
  {
    name: "Siegfried",
    spCost: 400,
    damage: 16,
    range: 1,
    weaponType: "Sword",
    colorType: "Red",
    prev: ["Silver Sword"],
    exclusive: ["Xander"],
    effect: "Enables counterattack regardless of distance if this unit is attacked.",
  },
  {
    name: "Sieglinde",
    spCost: 400,
    damage: 16,
    range: 1,
    weaponType: "Sword",
    colorType: "Red",
    prev: ["Silver Sword"],
    exclusive: ["Eirika"],
    effect: "Grants adjacent allies Atk+3 through their next actions at the start of each turn.",
  },
  {
    name: "Siegmund",
    spCost: 400,
    damage: 16,
    range: 1,
    weaponType: "Lance",
    colorType: "Blue",
    prev: ["Heavy Spear"],
    exclusive: ["Ephraim"],
    effect: "Grants adjacent allies Atk+3 through their next actions at the start of each turn.",
  },
  {
    name: "Silver Axe",
    spCost: 200,
    damage: 11,
    range: 1,
    weaponType: "Axe",
    colorType: "Green",
    prev: ["Steel Axe"],
    effect: "-"
  },
  {
    name: "Silver Axe+",
    spCost: 300,
    damage: 15,
    range: 1,
    weaponType: "Axe",
    colorType: "Green",
    prev: ["Silver Axe"],
    effect: "-"
  },
  {
    name: "Silver Bow",
    spCost: 200,
    damage: 9,
    range: 2,
    weaponType: "Bow",
    colorType: "Neutral",
    prev: ["Steel Bow"],
    effect: "Effective against flying units."
  },
  {
    name: "Silver Bow+",
    spCost: 300,
    damage: 13,
    range: 2,
    weaponType: "Bow",
    colorType: "Neutral",
    prev: ["Silver Bow"],
    effect: "Effective against flying units."
  },
  {
    name: "Silver Dagger",
    spCost: 200,
    damage: 7,
    range: 2,
    weaponType: "Dagger",
    colorType: "Neutral",
    prev: ["Steel Dagger"],
    effect: "After combat, inflicts Def/Res-5 on foe through its next action."
  },
  {
    name: "Silver Dagger+",
    spCost: 300,
    damage: 10,
    range: 2,
    weaponType: "Dagger",
    colorType: "Neutral",
    prev: ["Silver Dagger"],
    effect: "After combat, inflicts Def/Res-7 on foe through its next action."
  },
  {
    name: "Silver Lance",
    spCost: 200,
    damage: 11,
    range: 1,
    weaponType: "Lance",
    colorType: "Blue",
    prev: ["Steel Lance"],
    effect: "-"
  },
  {
    name: "Silver Lance+",
    spCost: 300,
    damage: 15,
    range: 1,
    weaponType: "Lance",
    colorType: "Blue",
    prev: ["Silver Lance"],
    effect: "-"
  },
  {
    name: "Silver Sword",
    spCost: 200,
    damage: 11,
    range: 1,
    weaponType: "Sword",
    colorType: "Red",
    prev: ["Steel Sword"],
    effect: "-"
  },
  {
    name: "Silver Sword+",
    spCost: 300,
    damage: 15,
    range: 1,
    weaponType: "Sword",
    colorType: "Red",
    prev: ["Silver Sword"],
    effect: "-"
  },
  {
    name: "Sinmara",
    spCost: 400,
    damage: 16,
    range: 1,
    weaponType: "Axe",
    colorType: "Green",
    stats: {def: 3},
    prev: ["Silver Axe"],
    exclusive: ["Surtr"],
    effect: "Grants Def+3. Deals 20 damage to foes within 2 spaces at the start of each turn.",
  },
  {
    name: "Skadi",
    spCost: 400,
    damage: 14,
    range: 2,
    weaponType: "Bow",
    colorType: "Neutral",
    stats: {spd: 3},
    prev: ["Silver Bow"],
    exclusive: ["Takumi (Fallen Heroes)"],
    effect: "Effective against flying units.  Grants Spd+3. At the start of turn 3, foes within 3 columns centered on unit take 10 damage and bonuses on those foes become penalties through their next actions.",
  },
  {
    name: "Slaying Axe",
    spCost: 200,
    damage: 10,
    range: 1,
    weaponType: "Axe",
    colorType: "Green",
    prev: ["Steel Axe"],
    effect: "Accelerates Special trigger (cooldown count-1)."
  },
  {
    name: "Slaying Axe+",
    spCost: 300,
    damage: 14,
    range: 1,
    weaponType: "Axe",
    colorType: "Green",
    prev: ["Slaying Axe"],
    effect: "Accelerates Special trigger (cooldown count-1)."
  },
  {
    name: "Slaying Bow",
    spCost: 200,
    damage: 8,
    range: 2,
    weaponType: "Bow",
    colorType: "Neutral",
    prev: ["Steel Bow"],
    effect: "Effective against flying units.  Accelerates Special trigger (cooldown count-1)."
  },
  {
    name: "Slaying Bow+",
    spCost: 300,
    damage: 12,
    range: 2,
    weaponType: "Bow",
    colorType: "Neutral",
    prev: ["Slaying Bow"],
    effect: "Effective against flying units.  Accelerates Special trigger (cooldown count-1)."
  },
  {
    name: "Slaying Edge",
    spCost: 200,
    damage: 10,
    range: 1,
    weaponType: "Sword",
    colorType: "Red",
    prev: ["Steel Sword"],
    effect: "Accelerates Special trigger (cooldown count-1)."
  },
  {
    name: "Slaying Edge+",
    spCost: 300,
    damage: 14,
    range: 1,
    weaponType: "Sword",
    colorType: "Red",
    prev: ["Slaying Edge"],
    effect: "Accelerates Special trigger (cooldown count-1)."
  },
  {
    name: "Slaying Hammer",
    spCost: 200,
    damage: 10,
    range: 1,
    weaponType: "Axe",
    colorType: "Green",
    effect: "Effective against armored units."
  },
  {
    name: "Slaying Hammer+",
    spCost: 300,
    damage: 14,
    range: 1,
    weaponType: "Axe",
    colorType: "Green",
    prev: ["Slaying Hammer"],
    effect: "Effective against armored foes."
  },
  {
    name: "Slaying Lance",
    spCost: 200,
    damage: 10,
    range: 1,
    weaponType: "Lance",
    colorType: "Blue",
    prev: ["Steel Lance"],
    effect: "Accelerates Special trigger (cooldown count-1)."
  },
  {
    name: "Slaying Lance+",
    spCost: 300,
    damage: 14,
    range: 1,
    weaponType: "Lance",
    colorType: "Blue",
    prev: ["Slaying Lance"],
    effect: "Accelerates Special trigger (cooldown count-1)."
  },
  {
    name: "Slaying Spear",
    spCost: 200,
    damage: 10,
    range: 1,
    weaponType: "Lance",
    colorType: "Blue",
    effect: "Effective against armored units."
  },
  {
    name: "Slaying Spear+",
    spCost: 300,
    damage: 14,
    range: 1,
    weaponType: "Lance",
    colorType: "Blue",
    prev: ["Slaying Spear"],
    effect: "Effective against armored foes."
  },
  {
    name: "Slow",
    spCost: 150,
    damage: 5,
    range: 2,
    weaponType: "Staff",
    colorType: "Neutral",
    effect: "After any combat, inflicts Spd-6 on foe through its next action."
  },
  {
    name: "Slow+",
    spCost: 300,
    damage: 12,
    range: 2,
    weaponType: "Staff",
    colorType: "Neutral",
    prev: ["Slow"],
    effect: "After combat, inflicts Spd-7 on target and foes within 2 spaces of target through their next actions."
  },
  {
    name: "Smoke Dagger",
    spCost: 200,
    damage: 6,
    range: 2,
    weaponType: "Dagger",
    colorType: "Neutral",
    prev: ["Steel Dagger"],
    effect: "After combat, inflicts Def/Res-4 on foes within 2 spaces of target through their next actions."
  },
  {
    name: "Smoke Dagger+",
    spCost: 300,
    damage: 9,
    range: 2,
    weaponType: "Dagger",
    colorType: "Neutral",
    prev: ["Smoke Dagger"],
    effect: "After combat, inflicts Def/Res-6 on foes within 2 spaces of target through their next actions."
  },
  {
    name: "Sol Katti",
    spCost: 400,
    damage: 16,
    range: 1,
    weaponType: "Sword",
    colorType: "Red",
    prev: ["Silver Sword"],
    exclusive: ["Lyn"],
    effect: "If wielder initiates attack at HP ≤ 50%, any follow-up occurs immediately."
  },
  {
    name: "Spectral Tome",
    spCost: 200,
    damage: 8,
    range: 2,
    weaponType: "Tome",
    colorType: "Green",
    prev: ["Elwind"],
    effect: "After combat, bonuses become penalties on all foes within 2 spaces of target through foes' next actions."
  },
  {
    name: "Spectral Tome+",
    spCost: 300,
    damage: 12,
    range: 2,
    weaponType: "Tome",
    colorType: "Green",
    prev: ["Spectral Tome"],
    effect: "After combat, bonuses become penalties on all foes within 2 spaces of target through foes' next actions."
  },
  {
    name: "Steel Axe",
    spCost: 100,
    damage: 8,
    range: 1,
    weaponType: "Axe",
    colorType: "Green",
    prev: ["Iron Axe"],
    effect: "-"
  },
  {
    name: "Steel Bow",
    spCost: 100,
    damage: 6,
    range: 2,
    weaponType: "Bow",
    colorType: "Neutral",
    prev: ["Iron Bow"],
    effect: "Effective against flying units."
  },
  {
    name: "Steel Dagger",
    spCost: 100,
    damage: 5,
    range: 2,
    weaponType: "Dagger",
    colorType: "Neutral",
    prev: ["Iron Dagger"],
    effect: "After combat, inflicts Def/Res-3 on foe through its next action."
  },
  {
    name: "Steel Lance",
    spCost: 100,
    damage: 8,
    range: 1,
    weaponType: "Lance",
    colorType: "Blue",
    prev: ["Iron Lance"],
    effect: "-"
  },
  {
    name: "Steel Sword",
    spCost: 100,
    damage: 8,
    range: 1,
    weaponType: "Sword",
    colorType: "Red",
    prev: ["Iron Sword"],
    effect: "-"
  },
  {
    name: "Stout Tomahawk",
    spCost: 400,
    damage: 16,
    range: 1,
    weaponType: "Axe",
    colorType: "Green",
    prev: ["Silver Axe"],
    exclusive: ["Dorcas"],
    effect: "Enables counterattack regardless of distance if this unit is attacked.",
  },
  {
    name: "Tannenboom!",
    spCost: 200,
    damage: 10,
    range: 1,
    weaponType: "Lance",
    colorType: "Blue",
    prev: ["Steel Lance"],
    effect: "Grants Atk/Spd/Def/Res+2 during combat if foe initiates combat."
  },
  {
    name: "Tannenboom!+",
    spCost: 300,
    damage: 14,
    range: 1,
    weaponType: "Lance",
    colorType: "Blue",
    prev: ["Tannenboom!"],
    effect: "Grants Atk/Spd/Def/Res+2 during combat if foe initiates combat."
  },
  {
    name: "Thani",
    spCost: 400,
    damage: 14,
    range: 2,
    weaponType: "Tome",
    colorType: "Blue",
    stats: {res: 3},
    prev: ["Shine"],
    exclusive: ["Micaiah"],
    effect: "Grants Res+3. Effective against armored and cavalry foes. Against armored and cavalry foes using bow, dagger, magic, or staff, damage from first attack received by unit during combat reduced by 30%."
  },
  {
    name: "Thökk",
    spCost: 400,
    damage: 14,
    range: 2,
    weaponType: "Staff",
    colorType: "Neutral",
    prev: ["Gravity"],
    exclusive: ["Loki"],
    effect: "Damage from staff calculated like other weapons. At start of turn, foes with bow, daggers, magic, or staff in cardinal directions with HP 3 or more lower than unit's can move only 1 space through their next actions.",
  },
  {
    name: "Thoron",
    spCost: 200,
    damage: 9,
    range: 2,
    weaponType: "Tome",
    colorType: "Blue",
    prev: ["Elthunder"],
    effect: "-"
  },
  {
    name: "Thoron+",
    spCost: 300,
    damage: 13,
    range: 2,
    weaponType: "Tome",
    colorType: "Blue",
    prev: ["Thoron"],
    effect: "-"
  },
  {
    name: "Thunder",
    spCost: 50,
    damage: 4,
    range: 2,
    weaponType: "Tome",
    colorType: "Blue",
    effect: "-"
  },
  {
    name: "Tomato Tome",
    spCost: 200,
    damage: 8,
    range: 2,
    weaponType: "Tome",
    colorType: "Red",
    prev: ["Ruin"],
    effect: "Grants allies within 2 spaces Atk/Spd+1 during combat."
  },
  {
    name: "Tomato Tome+",
    spCost: 300,
    damage: 12,
    range: 2,
    weaponType: "Tome",
    colorType: "Red",
    prev: ["Tomato Tome"],
    effect: "Grants allies within 2 spaces Atk/Spd+1 during combat."
  },
  {
    name: "Tyrfing",
    spCost: 400,
    damage: 16,
    range: 1,
    weaponType: "Sword",
    colorType: "Red",
    prev: ["Silver Sword"],
    exclusive: ["Seliph"],
    effect: "Grants Def+4 in battle if unit's HP ≤ 50%.",
  },
  {
    name: "Urðr",
    spCost: 400,
    damage: 16,
    range: 1,
    weaponType: "Axe",
    colorType: "Green",
    prev: ["Silver Axe"],
    exclusive: ["Azura (Performing Arts)"],
    effect: "If Sing or Dance is used, target also granted Atk/Spd/Def/Res+3.",
  },
  {
    name: "Urvan",
    spCost: 400,
    damage: 16,
    range: 1,
    weaponType: "Axe",
    colorType: "Green",
    prev: ["Silver Axe"],
    exclusive: ["Ike (Brave Heroes)"],
    effect: "Accelerates Special trigger (cooldown count-1). If unit receives consecutive attacks, damage from second attack onward reduced by 80%.",
  },
  {
    name: "Valaskjálf",
    spCost: 400,
    damage: 14,
    range: 2,
    weaponType: "Tome",
    colorType: "Blue",
    prev: ["Thoron"],
    exclusive: ["Bruno"],
    effect: "Enables unit at ≤ 50% HP to strike first, even when attacked.",
  },
  {
    name: "Valflame",
    spCost: 400,
    damage: 14,
    range: 2,
    weaponType: "Tome",
    colorType: "Red",
    prev: ["Bolganone"],
    exclusive: ["Arvis"],
    effect: "At start of turn, all foes in cardinal directions with Res 1 or more lower than unit suffer Atk/Res-4 until the end of foe's next action.",
  },
  {
    name: "Vidofnir",
    spCost: 400,
    damage: 16,
    range: 1,
    weaponType: "Lance",
    colorType: "Blue",
    prev: ["Heavy Spear"],
    exclusive: ["Tana"],
    effect: "If unit is attacked by foe using sword, axe or lance, unit receives Def+7 during combat.",
  },
  {
    name: "Weirding Tome",
    spCost: 400,
    damage: 14,
    range: 2,
    weaponType: "Tome",
    colorType: "Blue",
    stats: {spd: 3},
    prev: ["Thoron"],
    exclusive: ["Lute"],
    effect: "Grants Spd+3. At start of turn, all foes in cardinal directions, and with Res 1 or more lower than unit, suffer Spd-5 until the end of foes' next actions.",
  },
  {
    name: "Wind",
    spCost: 50,
    damage: 4,
    range: 2,
    weaponType: "Tome",
    colorType: "Green",
    effect: "-"
  },
  {
    name: "Wind's Brand",
    spCost: 400,
    damage: 14,
    range: 2,
    weaponType: "Tome",
    colorType: "Green",
    exclusive: ["Soren"],
    effect: "At start of turn, inflicts Atk-7 on foe on the enemy team with the highest Atk through its next action."
  },
  {
    name: "Wing Sword",
    spCost: 400,
    damage: 16,
    range: 1,
    weaponType: "Sword",
    colorType: "Red",
    // prev: ["Armorslayer"],
    exclusive: ["Caeda"],
    effect: "Effective against armored and cavalry foes.",
  },
  {
    name: "Wo Dao",
    spCost: 200,
    damage: 9,
    range: 1,
    weaponType: "Sword",
    colorType: "Red",
    prev: ["Steel Sword"],
    effect: "Grants +10 to damage when Special triggers."
  },
  {
    name: "Wo Dao+",
    spCost: 300,
    damage: 13,
    range: 1,
    weaponType: "Sword",
    colorType: "Red",
    prev: ["Wo Dao"],
    effect: "Grants +10 to damage when Special triggers."
  },
  {
    name: "Yato",
    spCost: 400,
    damage: 16,
    range: 1,
    weaponType: "Sword",
    colorType: "Red",
    prev: ["Silver Sword"],
    exclusive: ["Corrin (M)"],
    effect: "Grants Spd+4 during combat if unit initiates attack.",
  },
  {
    name: "Zanbato",
    spCost: 200,
    damage: 10,
    range: 1,
    weaponType: "Sword",
    colorType: "Red",
    prev: ["Steel Sword"],
    effect: "Effective against cavalry units."
  },
  {
    name: "Zanbato+",
    spCost: 300,
    damage: 14,
    range: 1,
    weaponType: "Sword",
    colorType: "Red",
    prev: ["Zanbato"],
    effect: "Effective against cavalry units."
  }
];

},{}],15:[function(require,module,exports){
let values = require('./values.js');
let elements = require('./elements.js');
let skills = require('../data/skill-access.js');
let utils = require('./utils.js');
let canvas;

let customUnit = {
  image: new Image(),
  name: "",
  title: "",
  stats: { hp: 0, atk: 0, spd: 0, def: 0, res: 0 },
  processedStats: { hp: 0, atk: 0, spd: 0, def: 0, res: 0 },
  moveType: "",
  colorType: "",
  weaponType: "",
  imageSize: 1,
  imagePosX: 0,
  imagePosY: 0,
  skills: {
    weapon: values.CONST.EMPTY_SKILL,
    refine: values.CONST.EMPTY_SKILL,
    assist: values.CONST.EMPTY_SKILL,
    special: values.CONST.EMPTY_SKILL,
    skillA: values.CONST.EMPTY_SKILL,
    skillB: values.CONST.EMPTY_SKILL,
    skillC: values.CONST.EMPTY_SKILL,
    seal: values.CONST.EMPTY_SKILL
  },
  customSkills: {
    weapon: utils.getEmptySkill(),
    refine: utils.getEmptySkill(),
    assist: utils.getEmptySkill(),
    special: utils.getEmptySkill(),
    skillA: utils.getEmptySkill(),
    skillB: utils.getEmptySkill(),
    skillC: utils.getEmptySkill(),
    seal: utils.getEmptySkill()
  }
};

function init(canvasObj) {
  $(elements.CUSTOM_MOVE_TYPE_SELECT).selectable({
    data: values.CONST.MOVE_TYPES,
    search: false
  });
  $(elements.CUSTOM_WEAPON_TYPE_SELECT).selectable({
    data: values.CONST.WEAPON_TYPES,
    search: false
  });
  $(elements.CUSTOM_SKILL_SELECT).selectable({disabled: 'disabled'});
  $(elements.CUSTOM_MERGE_SELECT).selectable({
    data: values.CONST.MERGES,
    optionGenerator: utils.arrOptGenerator,
    search: false
  });

  canvas = canvasObj;
  bindEvents();
}

function bindEvents() {
  $(elements.UPLOAD_HERO).on('change', onUploadHeroImg);
  $(elements.CUSTOM_IMAGE_CONTROL).on('change', onImageControlChange);
  $(elements.CUSTOM_WEAPON_TYPE_SELECT).on('select', onCustomWeaponTypeSelect);
  $(elements.CUSTOM_MOVE_TYPE_SELECT).on('select', onCustomMoveTypeSelect);
  $(elements.CUSTOM_SUPPORT_CHECKS).on('change', onCustomSupportChange);

  $(elements.CUSTOM_MERGE_SELECT).on('select', onCustomMergeSelect);
  $(elements.CUSTOM_SKILL_SELECT).on('select', onCustomSkillChange);
  $(elements.CUSTOM_STAT_CONTROL).on('change', onCustomStatChange);
  $(elements.CUSTOM_NEW_SKILL_INPUT).on('change', onCustomNewSkillChange);
  $(elements.CUSTOM_SKILL_TOGGLE).on('shown.bs.tab', onCustomSkillToggle);
};


function onUploadHeroImg(event) {
  let $upload = $(event.currentTarget);
  if ($upload[0].files && $upload[0].files[0]) {
    let fileReader = new FileReader();
    fileReader.onload = function(e) {
       customUnit.image.src = e.target.result;
       customUnit.image.onload = () => drawHero();
    };
    fileReader.readAsDataURL($upload[0].files[0]);
  }
};
function onImageControlChange(event) {
  let $control = $(event.currentTarget);
  customUnit[$control.data('control')] = $control.val();
  drawHero();
};
function onCustomMoveTypeSelect(event) {
  customUnit.moveType = $(event.currentTarget).data('val').name;
  setupCustomSkillOptions();
  drawHero();
};
function onCustomWeaponTypeSelect(event) {
  let weaponColorTypes = $(event.currentTarget).data('val');
  customUnit.weaponType = weaponColorTypes.weaponType;
  customUnit.colorType = weaponColorTypes.colorType;
  $(elements.CUSTOM_SKILL_SELECT + '[data-skill="weapon"]')
      .selectable('data', skills.getWeapons(customUnit, false));
  setupCustomSkillOptions();
  drawHero();
};
function onCustomSupportChange(event) {
  customUnit.support = $(elements.CUSTOM_SUPPORT_ON).is(':checked');
  drawHero();
};
function onCustomMergeSelect(event) {
  customUnit.merges = $(event.currentTarget).data('val');
  drawHero();
};
function onCustomStatChange(event) {
  let $stat = $(event.currentTarget);
  customUnit.stats[$stat.data('control')] = parseInt($stat.val());
  drawHero();

  let total = 0;
  for (let stat in customUnit.stats) {
    total += customUnit.stats[stat];
  }
  $(elements.CUSTOM_STAT_TOTAL).val(total);
};
function onCustomSkillChange(event) {
  let $select = $(event.currentTarget);
  let skillType = $select.data('skill');
  let skill = $select.data('val');

  if (skillType === 'weapon') {
    if (skills.getRefinery[skill.name]) {
      $(elements.CUSTOM_SKILL_SELECT + '[data-skill="refine"]')
          .selectable('data',
              [values.CONST.EMPTY_SKILL].concat(SKILL_REFINED_WEAPONS[skill.name]));
    } else {
      $(elements.CUSTOM_SKILL_SELECT + '[data-skill="refine"]')
          .selectable('clear')
          .selectable('disable');
    }
    customUnit.skills.refine = values.CONST.EMPTY_SKILL;
  }
  customUnit.skills[skillType] = skill;
  drawHero();
};
function onCustomSkillToggle(event) {
  drawHero();
};
function onCustomNewSkillChange(event) {
  let $input = $(event.currentTarget);
  let skillType = $input.closest('[data-skill-type]').data('skill-type');
  let skillAttr = $input.data('control');

  if (skillAttr === 'stats') {
    customUnit.customSkills[skillType][skillAttr][$input.data('stats')] = parseInt($input.val());
    drawHero();
  } else if (skillAttr === 'icon') {
    if ($input[0].files && $input[0].files[0]) {
      let fileReader = new FileReader();
      fileReader.onload = function(e) {
        customUnit.customSkills[skillType].icon = new Image();
        customUnit.customSkills[skillType].crossOrigin = 'anonymous';
        customUnit.customSkills[skillType].icon.src = e.target.result;
        customUnit.customSkills[skillType].icon.onload = () => drawHero();
      };
      fileReader.readAsDataURL($input[0].files[0]);
    } else {
      customUnit.customSkills[skillType].icon = '';
      drawHero();
    }
  } else {
    customUnit.customSkills[skillType][skillAttr] = $input.val();
    drawHero();
  }
};


function drawHero() {
  processHeroStats();
  canvas.drawCustomHero(customUnit);
}

function processHeroStats() {
  for (let stat in customUnit.stats) {
    customUnit.processedStats[stat] = customUnit.stats[stat];
  }

  let skills;
  let activeTab;
  for (let skill in customUnit.skills) {
    activeTab =  $(`.tab-content[data-skill-type="${skill}"] > .active`);

    if (activeTab.data('tab-type') === 'default' || skill === 'refine') {
      skills = customUnit.skills;
    } else {
      skills = customUnit.customSkills;
    }

    if (skills[skill].damage) {
      customUnit.processedStats.atk += skills[skill].damage;
    }
    for (let stat in skills[skill].stats) {
      customUnit.processedStats[stat] += skills[skill].stats[stat];
    }
  }

  if (customUnit.support) {
    customUnit.processedStats.hp += 5;
    customUnit.processedStats.atk += 2;
    customUnit.processedStats.spd += 2;
    customUnit.processedStats.def += 2;
    customUnit.processedStats.res += 2;
  }

  for (stat in customUnit.stats) {
    customUnit.processedStats[stat] = Math.max(0, customUnit.processedStats[stat]);
  }
};

function setupCustomSkillOptions() {
  if (customUnit.moveType.length === 0 || customUnit.weaponType.length === 0) {
    return;
  }

  $(elements.CUSTOM_SKILL_SELECT + '[data-skill="assist"]')
      .selectable('data', [values.CONST.EMPTY_SKILL].concat(skills.getAssists(customUnit, false)));
  $(elements.CUSTOM_SKILL_SELECT + '[data-skill="seal"]')
      .selectable('data', [values.CONST.EMPTY_SKILL].concat(skills.getSeals(customUnit, false)));
  $(elements.CUSTOM_SKILL_SELECT + '[data-skill="skillA"]')
      .selectable('data', [values.CONST.EMPTY_SKILL].concat(skills.getSkillA(customUnit, false)));
  $(elements.CUSTOM_SKILL_SELECT + '[data-skill="skillB"]')
      .selectable('data', [values.CONST.EMPTY_SKILL].concat(skills.getSkillB(customUnit, false)));
  $(elements.CUSTOM_SKILL_SELECT + '[data-skill="skillC"]')
      .selectable('data', [values.CONST.EMPTY_SKILL].concat(skills.getSkillC(customUnit, false)));
  $(elements.CUSTOM_SKILL_SELECT + '[data-skill="special"]')
      .selectable('data', [values.CONST.EMPTY_SKILL].concat(skills.getSpecials(customUnit, false)));
  $(elements.CUSTOM_SKILL_SELECT + '[data-skill="refine"]')
      .selectable('clear').selectable('disable');
};


module.exports = {
  init: init,
  drawHero: drawHero,
  hero: customUnit
};

},{"../data/skill-access.js":6,"./elements.js":18,"./utils.js":21,"./values.js":22}],16:[function(require,module,exports){
let values = require('./values.js');
let elements = require('./elements.js');
let heroes = require('../data/hero-access.js');
let skills = require('../data/skill-access.js');
let blessings = require('../data/blessing-access.js');
let utils = require('./utils.js');
let inheritPlanner = require('./inheritance-planner.js');
let canvas;

let fehUnit = {
  data : {
    assets: { main: values.CONST.IMAGE_FEH },
    name: "Feh", title: "Sleepy Owl",
    stats: {
      level1: { hp: 8, atk: 8, spd: 8, def: 8, res: 8 },
      level40: { hp: [147,150,153], atk: [0,3,6], spd: [0,3,6], def: [0,3,6], res: [0,3,6] }
    },
    moveType: "Flying", colorType: "Neutral", weaponType: "Staff"
  },
  iv: {boon: '-', bane: '-'},
  merges: 0, support: false,
  stats : { hp: 40, atk: 40, spd: 40, def: 40, res: 40 },
  skills: {
    weapon: values.CONST.EMPTY_SKILL,
    refine: values.CONST.EMPTY_SKILL,
    assist: values.CONST.EMPTY_SKILL,
    special: values.CONST.EMPTY_SKILL,
    skillA: values.CONST.EMPTY_SKILL,
    skillB: values.CONST.EMPTY_SKILL,
    skillC: values.CONST.EMPTY_SKILL,
    seal: values.CONST.EMPTY_SKILL
  },
  rarity: 5,
  buffs: { atk: 0, spd: 0, def: 0, res: 0 },
  tempestBuff: false,
  legendary: false,
  blessing: '-',
  blessingIcon: -1,
  allies: []
};

function init(canvasObj) {
  $(elements.SELECT_HERO).selectable({data: heroes.getAllHeroes()});
  $(elements.SELECT_RARITY).selectable({
    optionGenerator: rarityOptGenerator,
    search: false,
    disabled: 'disabled',
    text: '5★',
    value: 5
  });
  $(elements.SELECT_IV).selectable({
    data: values.CONST.IV,
    optionGenerator: ivOptGenerator,
    onSelect: ivSelectableDisplay,
    search: false,
    header: '<div class="dropdown-header"><span class="opt-half">Boon</span><span class="opt-half">Bane</span></div>'
  });
  $(elements.SELECT_MERGES).selectable({
    data: values.CONST.MERGES,
    optionGenerator: utils.arrOptGenerator,
    search: false
  });
  $(elements.SELECT_BUFFS).selectable({
    data: values.CONST.BUFFS,
    optionGenerator: utils.arrOptGenerator,
    search: false,
    text: 0,
    value: 0
  });
  $(elements.SELECT_BLESSING_TYPE).selectable({
    data: blessings.getBlessingTypes(),
    optionGenerator: utils.arrOptGenerator,
    search: false
  });
  $(elements.SELECT_BLESSING_HERO).selectable({
    optionGenerator: utils.arrOptGenerator,
    disabled: 'disabled',
    search: false
  });

  $(elements.SELECT_WEAPON).selectable({disabled: 'disabled'});
  $(elements.SELECT_REFINE).selectable({disabled: 'disabled'});
  $(elements.SELECT_ASSIST).selectable({disabled: 'disabled'});
  $(elements.SELECT_SPECIAL).selectable({disabled: 'disabled'});
  $(elements.SELECT_SKILLA).selectable({disabled: 'disabled'});
  $(elements.SELECT_SKILLB).selectable({disabled: 'disabled'});
  $(elements.SELECT_SKILLC).selectable({disabled: 'disabled'});
  $(elements.SELECT_SEAL).selectable({disabled: 'disabled'});

  canvas = canvasObj;
  bindEvents();
}

function bindEvents() {
  $(elements.SELECT_HERO).on('select', onHeroSelect);
  $(elements.SELECT_RARITY).on('select', onRaritySelect);
  $(elements.SELECT_IV).on('select', onIvSelect);
  $(elements.SELECT_MERGES).on('select', onMergeSelect);
  $(elements.SELECT_SKILL).on('select', onSkillSelect);

  $(elements.SELECT_BUFFS).on('select', onBuffSelect);
  $(elements.SELECT_IV_SHOW).on('change', onShowIvChange);
  $(elements.SELECT_SUPPORT).on('change', onSupportChange);
  $(elements.SELECT_TT).on('change', onTempestBuffChange);
  $(elements.SELECT_BLESSING_TYPE).on('select', onBlessingTypeChange);
  $(elements.SELECT_BLESSING_HERO).on('select', onBlessingAllyChange);

  $(elements.INHERIT_MODAL).on('shown.bs.modal', onInheritanceShow);
}


function onHeroSelect(event) {
  let hero = $(event.currentTarget).data('val');
  let highlightList = hero.skills.map(skill => skill.name);

  fehUnit.data = hero;
  for (let skill in fehUnit.skills) {
    fehUnit.skills[skill] = values.CONST.EMPTY_SKILL;
  }
  fehUnit.rarity = 5;

  fehUnit.legendary = blessings.isLegendaryHero(hero.name);
  if (fehUnit.legendary) {
    let blessing = blessings.getBlessing(hero.name);
    fehUnit.blessing = blessing.type;
    fehUnit.blessingIcon = blessing.icon;
    $(elements.SELECT_BLESSING_TYPE)
        .selectable('reset')
        .selectable('disable');
    $(elements.SELECT_BLESSING_HERO)
        .selectable('reset')
        .selectable('disable');
  } else {
    fehUnit.blessing = '-';
    $(elements.SELECT_BLESSING_TYPE)
        .selectable('text', '-')
        .selectable('enable');
  }
  drawHero(fehUnit);

  $(elements.SELECT_WEAPON)
      .selectable('highlight', highlightList)
      .selectable('data', [values.CONST.EMPTY_SKILL].concat(skills.getWeapons(hero)));
  $(elements.SELECT_ASSIST)
      .selectable('highlight', highlightList)
      .selectable('data', [values.CONST.EMPTY_SKILL].concat(skills.getAssists(hero)));
  $(elements.SELECT_SPECIAL)
      .selectable('highlight', highlightList)
      .selectable('data', [values.CONST.EMPTY_SKILL].concat(skills.getSpecials(hero)));
  $(elements.SELECT_SKILLA)
      .selectable('highlight', highlightList)
      .selectable('data', [values.CONST.EMPTY_SKILL].concat(skills.getSkillA(hero)));
  $(elements.SELECT_SKILLB)
      .selectable('highlight', highlightList)
      .selectable('data', [values.CONST.EMPTY_SKILL].concat(skills.getSkillB(hero)));
  $(elements.SELECT_SKILLC)
      .selectable('highlight', highlightList)
      .selectable('data', [values.CONST.EMPTY_SKILL].concat(skills.getSkillC(hero)));
  $(elements.SELECT_SEAL)
      .selectable('data', [values.CONST.EMPTY_SKILL].concat(skills.getSeals(hero)));

  $(elements.SELECT_REFINE).selectable('clear').selectable('disable');
  $(elements.SELECT_IV).selectable('enable');
  $(elements.SKILL_INFO).empty();
  $(elements.SKILL_INFO_ICON).addClass('d-none');

  if (hero.rarity4) {
    $(elements.SELECT_RARITY)
        .selectable('data', values.CONST.RARITIES)
        .selectable('enable');
  } else {
    $(elements.SELECT_RARITY)
        .selectable('data', values.CONST.RARITIES.slice(0, 1))
        .selectable('disable');
  }
}
function onSkillSelect(event) {
  let skillType = $(event.currentTarget).data('skill');
  let skill = $(event.currentTarget).data('val');

  if (skillType === 'weapon') {
    let refinery = skills.getRefinery(skill.name, fehUnit.data.name);
    if (refinery) {
      $(elements.SELECT_REFINE).selectable('data', [values.CONST.EMPTY_SKILL].concat(refinery));
    } else {
      $(elements.SELECT_REFINE).selectable('clear').selectable('disable');
    }
    fehUnit.skills.refine = values.CONST.EMPTY_SKILL;
    $('.skill-info-icon[data-skill="refine"]').addClass('d-none');
  }

  if (skillType !== 'seal') {
    toggleSkillInfo(skillType, skill);
  }
  fehUnit.skills[skillType] = skill;
  drawHero(fehUnit);
};
function onIvSelect(event) {
  fehUnit.iv = $(event.currentTarget).data('val');
  drawHero(fehUnit);
};
function onMergeSelect(event) {
  fehUnit.merges = $(event.currentTarget).data('val');
  drawHero(fehUnit);
};
function onRaritySelect(event) {
  fehUnit.rarity = parseInt($(event.currentTarget).data('val'));
  drawHero(fehUnit);
};
function onBuffSelect(event) {
  let $select = $(event.currentTarget);
  fehUnit.buffs[$select.data('stat')] = $select.data('val');
  drawHero(fehUnit);
};
function onSupportChange(event) {
  fehUnit.support = $(elements.SELECT_SUPPORT_ON).is(':checked');
  drawHero(fehUnit);
}
function onShowIvChange(event) {
  drawHero(fehUnit, false);
}
function onTempestBuffChange(event) {
  fehUnit.tempestBuff = $(elements.SELECT_TT_ON).is(':checked');
  drawHero(fehUnit);
}
function onInheritanceShow(event) {
  let previousData = $(elements.SHOW_INHERITANCE).data('skills');
  let targetSkills = [];
  for (let skill in fehUnit.skills) {
    if (skill !== 'seal' && skill !== 'refine' && fehUnit.skills[skill].name !== '-') {
      targetSkills.push(fehUnit.skills[skill]);
    }
  }

  if (isSkillSetChanged(targetSkills, previousData)) {
    inheritPlanner.getInheritancePlanPromise(targetSkills, fehUnit.data, fehUnit.rarity, 2)
        .then((e) => {
          $(elements.INHERIT_LIST).html(getInheritanceHtml(e));
        })
  }
}
function onBlessingTypeChange(event) {
  let blessing = $(event.currentTarget).data('val');
  if (fehUnit.blessing !== blessing) {
    fehUnit.blessing = blessing;
    fehUnit.allies = [];
    $(elements.SELECT_BLESSING_HERO)
        .selectable('reset')
        .selectable('data', blessings.getBlessingOptions(fehUnit.blessing))
        .selectable('enable');
    drawHero(fehUnit);
  }
}
function onBlessingAllyChange(event) {
  let allies = [];
  let allySelect = $(elements.SELECT_BLESSING_HERO);

  for (let i = 0; i < allySelect.length; i++) {
    let ally = $(allySelect[i]).data('val');
    if (ally && ally !== '-') {
      allies.push(ally);
    }
  }
  fehUnit.allies = allies;
  drawHero(fehUnit);
}

function drawHero(hero, processHero = true) {
  if (processHero) {
    processHeroStats(hero);
  }
  utils.loadFiles([hero.data.assets.main]).then(imgs => {
    canvas.drawHero(hero, imgs[0]);
  });
}


function processHeroStats(hero) {
  let stats40 = {};
  let stats1 = {};
  let baseStatsLevel1;
  let baseStatsLevel40;

  if (hero.rarity === 5) {
    baseStatsLevel1 = hero.data.stats.level1;
    baseStatsLevel40 = hero.data.stats.level40;
  } else {
    baseStatsLevel1 = hero.data.stats.level1_4;
    baseStatsLevel40 = hero.data.stats.level40_4;
  }

  for (let st in baseStatsLevel1) {
    if (st === hero.iv.boon) {
      stats1[st] = baseStatsLevel1[st] + 1;
      stats40[st] = baseStatsLevel40[st][2];
    } else if (st === hero.iv.bane) {
      stats1[st] = baseStatsLevel1[st] - 1;
      stats40[st] = baseStatsLevel40[st][0];
    } else {
      stats1[st] = baseStatsLevel1[st];
      stats40[st] = baseStatsLevel40[st][1];
    }
  }

  if (hero.merges > 0) {
    let mergeBoost = getMergeBoost(stats1, hero.merges);
    for (let st in mergeBoost) {
      stats40[st] += mergeBoost[st];
    }
  }

  for (let skill in hero.skills) {
    if (hero.skills[skill].damage) {
      stats40.atk += hero.skills[skill].damage;
    }
    for (stat in hero.skills[skill].stats) {
      stats40[stat] += hero.skills[skill].stats[stat];
    }
  }

  if (hero.buffs) {
    for (let stat in hero.buffs) {
      stats40[stat] += hero.buffs[stat];
    }
  }

  if (hero.tempestBuff) {
    for (let stat in values.CONST.BUFFS_TT) {
      stats40[stat] += values.CONST.BUFFS_TT[stat];
    }
  }

  if (hero.support) {
    stats40.hp += 5;
    stats40.atk += 2;
    stats40.spd += 2;
    stats40.def += 2;
    stats40.res += 2;
  }

  hero.allies.forEach(ally => {
    let blessing = blessings.getBlessing(ally);
    for (let stat in blessing.stats) {
      stats40[stat] += blessing.stats[stat];
    }
  });

  for (let stat in stats40) {
    stats40[stat] = Math.max(0, stats40[stat]);
  }
  hero.stats = stats40;
}
function getMergeBoost(baseStats, merges) {
  let statIncrease = { hp: 0, atk: 0, spd: 0, def: 0, res: 0 };
  let stats = ['hp', 'atk', 'spd', 'def', 'res'];
  stats.sort((s1, s2) => baseStats[s2] - baseStats[s1]);

  for (let i = 0; i < merges; i++) {
    statIncrease[stats[(2 * i) % 5]]++;
    statIncrease[stats[(2 * i + 1) % 5]]++;
  }

  return statIncrease;
};
function toggleSkillInfo(skillType, skill) {
  new Promise(() => {
    let inheritance = [];
    if (skillType !== 'refine' || skillType !== 'seal') {
      inheritance = heroes.getInheritanceList(skill.name);
    }
    inheritance.sort((a, b) => a.rarity - b.rarity);

    $(`.skill-info-icon[data-skill="${skillType}"]`)
      .toggleClass('d-none', skill.name === '-')
      .popover('dispose')
      .popover({
        trigger: 'hover click',
        title: skill.name,
        html: true,
        content: getSkillInfoHtml(skillType, skill, inheritance)
      });
  });
};
function getSkillInfoHtml(skillType, skill, inheritance) {
  let html = '';
  let inheritHtml = '';

  if (skill.name === '-') {
    return '';
  }

  if (skillType === 'refine') {
    if (skill.name === '-') {
      html += `<span>SP Cost: 0</span>`;
    } else {
      let cost = skills.getRefineryCost(skill.cost || 0);
      html += `<span>SP Cost: ${cost.spCost}</span>`;
      if (cost.arenaMedals) {
        html += `<span>Arena Medals: ${cost.arenaMedals}</span>`;
      }
      if (cost.refiningStones) {
        html += `<span>Refining Stones: ${cost.refiningStones}</span>`;
      }
      if (cost.divineDew) {
        html += `<span>Divine Dew: ${cost.divineDew}</span>`;
      }
    }
  } else if (skillType === 'special') {
    html += `<span>SP Cost: ${skill.spCost}</span><span>Cooldown: ${skill.cooldown}</span>`;
  } else if (skillType !== 'seal') {
    html += `<span>SP Cost: ${skill.spCost}</span>`;
  }
  if (inheritance.length) {
    inheritHtml = '<h6>Inheritance</h6><div class="inherit-list"><ul class="list-group">' +
        inheritance.map(inherit => `<li class="list-group-item inherit-item">
            <span>${inherit.name}</span><span>[${inherit.rarity}]</span></li>`)
        .join('') + '</div><ul>';
  }
  return (html ? `<p class="skill-cost">${html}</p>` : '') + `<p>${skill.effect}</p>` + inheritHtml;
};

function isSkillSetChanged(newSkill, oldSkill) {
  return true;
}
function getInheritanceListHtml(skills) {
  let inheritance = {};
  for (let skillType in skills) {
    let unitList = [];
    if ((skillType !== 'refine' || skillType !== 'seal') &&
        (skills[skillType].name.length && skills[skillType].name !== '-')) {
      unitList = heroes.getInheritanceList(skills[skillType].name);
    }
    unitList.sort((a, b) => a.rarity - b.rarity);

  }
}
function getInheritanceHtml(inheritList) {
  let html = '';
  for (let i = 0; i < inheritList.length; i++) {
    html += `<ul class="list-group col col-sm-6">`;
    for (let j = 0; j < inheritList[i].length; j++) {
      html += `<li class="list-group-item p-0 d-flex">
          <div style="width: 75px;">
            <img src="img/heroes-portrait/75px-Icon_Portrait_${inheritList[i][j].name}.png">
            <img class="inherit-rarity" src="img/assets/star-rarity-${inheritList[i][j].rarity}.png">
          </div>
          <div class="pl-2">
            <b>${inheritList[i][j].name}</b>
            <div>${inheritList[i][j].skills.join('<br>')}</div>
          </div>
        </li>`;
    }
    html += `</ul>`;
  }
  return html;
}

function ivSelectableDisplay($opt, $this) {
  let data = $opt.data('val');
  let boon = data.boon === '-' ? data.boon : '+' + data.boon;
  let bane = data.bane === '-' ? data.bane : '-' + data.bane;
  $this.find('.btn').html(`<span class="opt-half">${boon}</span><span class="opt-half">${bane}</span>`);
  $this.data('val', $opt.data('val'));
};
function ivOptGenerator(item, $parent) {
  $(`<div class="dropdown-item">
      <span class="opt-half">${item.boon}</span>
      <span class="opt-half">${item.bane}</span>
    </div>`)
      .data('val', item)
      .appendTo($parent);
}
function rarityOptGenerator(item, $parent) {
  $(`<div class="dropdown-item">${item.name}</div>`)
      .data('val', item.value)
      .appendTo($parent);
}


module.exports = {
  init: init,
  drawHero: drawHero,
  hero: fehUnit
};

},{"../data/blessing-access.js":1,"../data/hero-access.js":3,"../data/skill-access.js":6,"./elements.js":18,"./inheritance-planner.js":20,"./utils.js":21,"./values.js":22}],17:[function(require,module,exports){
let elements = require('./elements.js');
let values = require('./values.js');
let ctx = $(elements.CANVAS)[0].getContext('2d');
let textCanvas = document.createElement('canvas');
let textCtx = textCanvas.getContext('2d');

textCanvas.width = 1080;
textCanvas.height = 1920;
textCtx.textAlign="start";
textCtx.font = "34px FehFont";
textCtx.strokeStyle = '#061d2c';
textCtx.lineWidth = 8;
textCtx.lineJoin = 'round';

let images = {
  FRONT: null,
  BACK: null,
  SKILLS: null,
  UI: null
};

function setImages(img) {
  images = img;
}

function drawHero(hero, heroImg) {
  if (hero.support) {
    ctx.drawImage(images.BACK, 540, 0, 540, 960, 0, 0, 540, 960);
  } else {
    ctx.drawImage(images.BACK, 0, 0);
  }

  ctx.drawImage(heroImg, 0, 0);
  ctx.drawImage(images.FRONT, 0, 0);

  if ($(elements.SELECT_IV_SHOW).is(':checked')) {
    drawIv(hero.iv);
  }

  drawSupportAndBlessing(hero);
  drawRarity(hero.rarity);
  drawNameAndTitle(hero.data.shortName || hero.data.name, hero.data.title);
  drawWeaponAndMoveType(hero.data.colorType, hero.data.weaponType, hero.data.moveType);
  drawMergesAndStats(hero.merges, hero.stats, hero.buffs);
  drawSkills(hero.skills);
}

function drawSupportAndBlessing(hero) {
  let coord;
  if (hero.support && hero.blessing !== '-') {
    coord = hero.legendary ? values.COORD.LEGENDARY_BLESSINGS[hero.blessingIcon] :
        values.COORD.BLESSINGS[hero.blessing];
    ctx.drawImage(images.UI, 0, 0, 210, 223, 335, 430, 103, 109);
    ctx.drawImage(images.UI, coord[0], coord[1], 210, 223, 430, 430, 103, 109);
  } else if (hero.support) {
    ctx.drawImage(images.UI, 0, 0, 210, 223, 425, 430, 108, 115);
  } else if (hero.legendary) {
    coord = values.COORD.LEGENDARY_BLESSINGS[hero.blessingIcon];
    ctx.drawImage(images.UI, coord[0], coord[1], 210, 223, 425, 430, 108, 115);
  } else if (hero.blessing !== '-') {
    coord = values.COORD.BLESSINGS[hero.blessing];
    ctx.drawImage(images.UI, coord[0], coord[1], 210, 223, 425, 430, 108, 115);
  }
}

function drawNameAndTitle(name, title) {
  ctx.strokeStyle = '#220d00';
  ctx.fillStyle = '#ffffff';
  ctx.textAlign = 'center';
  ctx.lineWidth = 4;
  ctx.font = "26px FehFont";
  ctx.strokeText(name, 168, 506);
  ctx.fillText(name, 168, 506);
  ctx.lineWidth = 4;
  ctx.font = "24px FehFont";
  ctx.strokeText(title, 142, 445);
  ctx.fillText(title, 142, 445);
}

function drawRarity(rarity) {
  let coord = rarity === 5 ? values.COORD.RARITY["5"] : values.COORD.RARITY["4"];
  ctx.drawImage(images.UI, coord[0], coord[1], 153, 40, 46, 380, 153, 40);
}

function drawWeaponAndMoveType(color, weaponType, moveType) {
  let weaponTypeIcon = values.COORD.ICONS[color + ' ' + weaponType];
  let moveTypeIcon = values.COORD.ICONS[moveType];
  if (weaponTypeIcon) {
    ctx.drawImage(images.UI, weaponTypeIcon[0], weaponTypeIcon[1], 52, 52, 48, 553, 28, 28);
  }
  if (moveTypeIcon) {
    ctx.drawImage(images.UI, moveTypeIcon[0], moveTypeIcon[1], 52, 52, 204, 554, 26, 26);
  }
}


function drawMergesAndStats(merges, stats, buffs = {}) {
  if (merges > 0 && merges < 10) {
    ctx.drawImage(images.UI, values.COORD.FONT_IMAGE.white[0],
        values.COORD.FONT_IMAGE.white[1] + 400, 32, 40, 158, 558, 15, 19);
    ctx.drawImage(images.UI, values.COORD.FONT_IMAGE.white[0],
        values.COORD.FONT_IMAGE.white[1] + merges * 40, 32, 40, 172, 558, 15, 19);
  } else if (merges == 10) {
    ctx.drawImage(images.UI, values.COORD.FONT_IMAGE.green[0],
        values.COORD.FONT_IMAGE.green[1] + 400, 32, 40, 158, 558, 15, 19);
    ctx.drawImage(images.UI, values.COORD.FONT_IMAGE.green[0],
        values.COORD.FONT_IMAGE.green[1] + 40, 32, 40, 172, 558, 15, 19);
    ctx.drawImage(images.UI, values.COORD.FONT_IMAGE.green[0],
        values.COORD.FONT_IMAGE.green[1], 32, 40, 186, 558, 15, 19);
  }

  drawStats(stats.hp, 147, values.COORD.STATS.hp);
  drawStats(stats.atk, 147, values.COORD.STATS.atk, false, buffs.atk || 0);
  drawStats(stats.spd, 147, values.COORD.STATS.spd, false, buffs.spd || 0);
  drawStats(stats.def, 147, values.COORD.STATS.def, false, buffs.def || 0);
  drawStats(stats.res, 147, values.COORD.STATS.res, false, buffs.res || 0);
  drawStats(values.CONST.MAX_SP, 147, values.COORD.STATS.sp, values.COORD.FONT_IMAGE.green);
  drawStats(values.CONST.MAX_HM, 147, values.COORD.STATS.hm, values.COORD.FONT_IMAGE.green);
}

function drawStats(value, x, y, fixedFont, buff = 0) {
  let font;
  let digit;
  if (fixedFont) {
    font = fixedFont;
  } else {
    font = buff === 0 ? values.COORD.FONT_IMAGE.yellow :
      buff > 0 ? values.COORD.FONT_IMAGE.blue : values.COORD.FONT_IMAGE.red;
  }

  if (value >= 1000) {
    digit = Math.floor((value / 1000) % 10);
    ctx.drawImage(images.UI, font[0],font[1] + digit * 40, 32, 40, x, y, 15, 19);
  }
  if (value >= 100) {
    digit = Math.floor((value / 100) % 10);
    ctx.drawImage(images.UI, font[0],font[1] + digit * 40, 32, 40, x + 14, y, 15, 19);
  }
  if (value >= 10) {
    digit = Math.floor((value / 10) % 10);
    ctx.drawImage(images.UI, font[0], font[1] + digit * 40, 32, 40, x + 28, y, 15, 19);
  }

  digit = value % 10;
  ctx.drawImage(images.UI, font[0], font[1] + digit * 40, 32, 40, x + 42, y, 15, 19);
}

function drawIv(iv) {
  if (iv.boon === '-') {
    return;
  }

  ctx.drawImage(images.UI, values.COORD.FONT_IMAGE.green[0],
      values.COORD.FONT_IMAGE.green[1] + 400, 32, 40, 60, values.COORD.STATS[iv.boon], 15, 19);
  ctx.drawImage(images.UI, values.COORD.FONT_IMAGE.red[0],
      values.COORD.FONT_IMAGE.red[1] + 440, 32, 40, 60, values.COORD.STATS[iv.bane], 15, 19);
}
//
// function drawSkills(skills) {
//   ctx.drawImage(images.SKILLS, 130, 0, 65, 67, 275, 633, 34, 34);
//   ctx.drawImage(images.SKILLS, 195, 0, 65, 67, 275, 669, 34, 34);
//
//   if (skills.refine.icon) {
//     drawIcon(skills.refine.icon, values.COORD.SKILLS_ICON.weapon);
//   } else if (skills.weapon.icon) {
//     drawIcon(skills.weapon.icon, values.COORD.SKILLS_ICON.weapon);
//   } else {
//     drawIcon('0-1', values.COORD.SKILLS_ICON.weapon);
//   }
//
//   for (let skill in skills) {
//     if (skill === 'refine' || skill === 'weapon' || skill === 'assist' || skill === 'special') {
//       continue;
//     }
//     if (skills[skill].icon) {
//       drawIcon(skills[skill].icon, values.COORD.SKILLS_ICON[skill]);
//     } else {
//       drawIcon('0-0', values.COORD.SKILLS_ICON[skill]);
//     }
//   }
//
//   ctx.drawImage(images.UI, 0, 476, 34, 38, 295, 723, 19, 21);
//   ctx.drawImage(images.UI, 34, 476, 34, 38, 295, 759, 19, 21);
//   ctx.drawImage(images.UI, 68, 476, 34, 38, 295, 795, 19, 21);
//   ctx.drawImage(images.UI, 102, 476, 34, 38, 295, 832, 19, 21);
//
//   ctx.textAlign="start";
//   ctx.font = "17px FehFont";
//   ctx.fillStyle = '#ffffff';
//   ctx.strokeStyle = '#061d2c';
//   ctx.lineWidth = 4;
//   ctx.lineJoin = 'round';
//
//   ctx.strokeText(skills.weapon.name, 318, 619);
//   ctx.strokeText(skills.assist.name, 318, 656);
//   ctx.strokeText(skills.special.name, 318, 694);
//   ctx.strokeText(skills.skillA.name, 318, 731);
//   ctx.strokeText(skills.skillB.name, 318, 768);
//   ctx.strokeText(skills.skillC.name, 318, 804);
//   ctx.strokeText(skills.seal.name, 318, 841);
//
//   ctx.fillText(skills.assist.name, 318, 656);
//   ctx.fillText(skills.special.name, 318, 694);
//   ctx.fillText(skills.skillA.name, 318, 731);
//   ctx.fillText(skills.skillB.name, 318, 768);
//   ctx.fillText(skills.skillC.name, 318, 804);
//   ctx.fillText(skills.seal.name, 318, 841);
//
//   if (skills.refine.name !== '-' || skills.weapon.icon) {
//     ctx.fillStyle = '#92ff4f';
//   }
//   ctx.fillText(skills.weapon.name, 318, 619);
// }

function drawSkills(skills) {
  ctx.drawImage(images.SKILLS, 130, 0, 65, 67, 275, 633, 34, 34);
  ctx.drawImage(images.SKILLS, 195, 0, 65, 67, 275, 669, 34, 34);

  if (skills.refine.icon) {
    drawIcon(skills.refine.icon, values.COORD.SKILLS_ICON.weapon);
  } else if (skills.weapon.icon) {
    drawIcon(skills.weapon.icon, values.COORD.SKILLS_ICON.weapon);
  } else {
    drawIcon('0-1', values.COORD.SKILLS_ICON.weapon);
  }

  for (let skill in skills) {
    if (skill === 'refine' || skill === 'weapon' || skill === 'assist' || skill === 'special') {
      continue;
    }
    if (skills[skill].icon) {
      drawIcon(skills[skill].icon, values.COORD.SKILLS_ICON[skill]);
    } else if (skill === 'seal') {
      ctx.drawImage(images.UI, values.COORD.EMPTY_SEAL[0], values.COORD.EMPTY_SEAL[1],
            65, 67, 275, values.COORD.SKILLS_ICON.seal, 34, 34);
    } else {
      drawIcon('0-0', values.COORD.SKILLS_ICON[skill]);
    }
  }

  ctx.drawImage(images.UI, 0, 476, 34, 38, 295, 723, 19, 21);
  ctx.drawImage(images.UI, 34, 476, 34, 38, 295, 759, 19, 21);
  ctx.drawImage(images.UI, 68, 476, 34, 38, 295, 795, 19, 21);
  ctx.drawImage(images.UI, 102, 476, 34, 38, 295, 832, 19, 21);

  textCtx.fillStyle = '#ffffff';
  textCtx.clearRect(0, 0, textCanvas.width, textCanvas.height);

  textCtx.strokeText(skills.weapon.name, 634, 1238);
  textCtx.strokeText(skills.assist.name, 634, 1312);
  textCtx.strokeText(skills.special.name, 634, 1388);
  textCtx.strokeText(skills.skillA.name, 634, 1462);
  textCtx.strokeText(skills.skillB.name, 634, 1536);
  textCtx.strokeText(skills.skillC.name, 634, 1608);
  textCtx.strokeText(skills.seal.name, 634, 1682);

  textCtx.fillText(skills.assist.name, 634, 1312);
  textCtx.fillText(skills.special.name, 634, 1388);
  textCtx.fillText(skills.skillA.name, 634, 1462);
  textCtx.fillText(skills.skillB.name, 634, 1536);
  textCtx.fillText(skills.skillC.name, 634, 1608);
  textCtx.fillText(skills.seal.name, 634, 1682);

  if (skills.refine.name !== '-' || skills.weapon.icon) {
    textCtx.fillStyle = '#92ff4f';
  }
  textCtx.fillText(skills.weapon.name, 634, 1238);
  ctx.drawImage(textCanvas, 0, 0, 540, 960);
}

function drawIcon(icon, posY, posX = 275, sizeY = 34, sizeX = 34) {
  if (typeof icon === 'string') {
    let xy = icon.split('-');
    ctx.drawImage(images.SKILLS, xy[1] * 65, xy[0] * 67, 65, 67, posX, posY, sizeX, sizeY);
  } else {
    ctx.drawImage(icon, 0, 0, icon.width, icon.height, posX, posY, sizeX, sizeY)
  }
}


function drawCustomHero(customUnit) {
  if (customUnit.support) {
    ctx.drawImage(images.BACK, 540, 0, 540, 960, 0, 0, 540, 960);
  } else {
    ctx.drawImage(images.BACK, 0, 0);
  }

  if (customUnit.image) {
    ctx.drawImage(customUnit.image, 0, 0,
      customUnit.image.width, customUnit.image.height,
      customUnit.imagePosX, -customUnit.imagePosY,
      customUnit.image.width * customUnit.imageSize,
      customUnit.image.height * customUnit.imageSize);
  }

  ctx.drawImage(images.FRONT, 0, 0);
  if (customUnit.support) {
    ctx.drawImage(images.UI, 0, 0, 210, 223, 420, 430, 108, 115);
  }

  drawRarity(5);
  drawNameAndTitle(customUnit.name, customUnit.title);
  drawMergesAndStats(customUnit.merges, customUnit.processedStats);
  drawWeaponAndMoveType(customUnit.colorType, customUnit.weaponType, customUnit.moveType);
  drawCustomHeroSkills(customUnit);
}

function drawCustomHeroSkills(customUnit) {
  let activeTab;
  let selectedSkills = {};

  for (skill in customUnit.skills) {
    activeTab =  $(`.tab-content[data-skill-type="${skill === 'refine' ? 'weapon' : skill}"] > .active`);
    if (activeTab.data('tab-type') === 'default') {
      selectedSkills[skill] = customUnit.skills[skill];
    } else {
      selectedSkills[skill] = customUnit.customSkills[skill];
    }
  }
  drawSkills(selectedSkills);
}

module.exports = {
  setImages: setImages,
  drawHero: drawHero,
  drawCustomHero: drawCustomHero
};

},{"./elements.js":18,"./values.js":22}],18:[function(require,module,exports){
module.exports = {
  CANVAS: '#hero-canvas',
  SPINNER: '.hero-canvas-container > .spinner',
  SELECT_HERO: '#select-hero',
  SELECT_RARITY: '#select-rarity',
  SELECT_IV: '#select-iv',
  SELECT_IV_SHOW: '#show-iv',
  SELECT_MERGES: '#select-merges',
  SELECT_BUFFS: '.buff-stat',
  SELECT_SUPPORT: '[name="support"]',
  SELECT_SUPPORT_ON: '#support-yes',
  SELECT_TT: '[name="tempest"]',
  SELECT_TT_ON: '#tt-yes',
  SELECT_SKILL: '.skill-select',
  SELECT_WEAPON: '#select-weapon',
  SELECT_REFINE: '#select-refine',
  SELECT_ASSIST: '#select-assist',
  SELECT_SPECIAL: '#select-special',
  SELECT_SKILLA: '#select-skillA',
  SELECT_SKILLB: '#select-skillB',
  SELECT_SKILLC: '#select-skillC',
  SELECT_SEAL: '#select-seal',
  SELECT_BLESSING_TYPE: '#select-blessing-type',
  SELECT_BLESSING_HERO: '.blessing-hero',
  SKILL_INFO: '.skill-info',
  SKILL_INFO_ICON: '.skill-info-icon',
  SELECT_TAB: '.build-type',
  UPLOAD_HERO: '#custom-hero-upload',
  CUSTOM_IMAGE_CONTROL: '.custom-hero-control',
  CUSTOM_MOVE_TYPE_SELECT: '#custom-move-type-select',
  CUSTOM_WEAPON_TYPE_SELECT: '#custom-weapon-type-select',
  CUSTOM_MERGE_SELECT: '#custom-merge-select',
  CUSTOM_SUPPORT_CHECKS: '[name="support-custom"]',
  CUSTOM_SUPPORT_ON: '#support-custom-yes',
  CUSTOM_STAT_CONTROL: '.custom-stat-control',
  CUSTOM_STAT_TOTAL: '#custom-stat-total',
  CUSTOM_SKILL_SELECT: '.custom-skill-select',
  CUSTOM_SKILL_TOGGLE: '[data-toggle="pill"]',
  CUSTOM_NEW_SKILL_INPUT: '.custom-skill-input',
  DOWNLOAD: '#download-img',
  SHOW_INHERITANCE: '#show-inherit',
  INHERIT_LIST: '#inherit-suggest',
  INHERIT_MODAL: '#inherit-modal'
};

},{}],19:[function(require,module,exports){
'use strict';

let elements = require('./elements.js');
let utils = require('./utils.js');
let values = require('./values.js');
let canvas = require('./canvas.js');
let defaultBuilder = require('./builder-default.js');
let customBuilder = require('./builder-custom.js');

let activeTab = 'main';


function init() {
  defaultBuilder.init(canvas);
  customBuilder.init(canvas);
  bindEvents();

  utils.loadFiles([values.CONST.IMAGE_SKILLS, values.CONST.IMAGE_FRONT,
      values.CONST.IMAGE_BACK, values.CONST.IMAGE_UI], true).then(files => {

    document.fonts.add(new FontFace('FehFont', 'url(font/feh-font.ttf)'));
    $(elements.SPINNER).addClass('d-none');
    canvas.setImages({
      SKILLS: files[0],
      FRONT: files[1],
      BACK: files[2],
      UI: files[3]
    });
    defaultBuilder.drawHero(defaultBuilder.hero);
    $(elements.DOWNLOAD).removeClass('d-none');
  });
}

function bindEvents() {
  $(elements.SELECT_TAB).on('click', onTabChange);
  $(elements.DOWNLOAD).on('click', onDownload);
}

function onTabChange(event) {
  if ($(event.currentTarget).data('val') === 'custom-unit') {
    customBuilder.drawHero();
    activeTab = 'custom';
  } else {
    defaultBuilder.drawHero(defaultBuilder.hero);
    activeTab = 'main';
  }
}

function onDownload(event) {
  let heroName = this.activeTab === 'main' ? defaultBuilder.hero.data.name : customBuilder.hero.name;
  $(event.currentTarget)
      .attr('href', $(elements.CANVAS)[0].toDataURL())
      .attr('download', 'FEH Unit Builder - ' + heroName + '.png');
}


init();

},{"./builder-custom.js":15,"./builder-default.js":16,"./canvas.js":17,"./elements.js":18,"./utils.js":21,"./values.js":22}],20:[function(require,module,exports){
'use strict';
let skills = require('../data/skill-access.js');
let heroes = require('../data/hero-access.js');
const COSTS = [1, 20, 200, 2000, 20000];

function getInheritancePlanPromise(targetSkills, hero, rarity, len = 3) {
  let combiWorker = new Worker('js/unit-builder/inheritance-combinations.js');
  let inheritResults = getTopInheritance(targetSkills, hero, rarity, len);
  inheritResults.len = len;

  return new Promise((resolve, reject) => {
    if (window.Worker) {
      combiWorker.onmessage = (e) => {
        resolve(getFinalResults(e.data));
      };
      combiWorker.postMessage(inheritResults);
    } else {
      let inheritPlans = combinations(inheritResults.inheritList)
        .map(inherit => ({ inherit: inherit, cost: getCost(inherit) }))
        .sort(planSort)
        .slice(0, len)
        .map(inheritList => {
          inheritList.inherit.forEach((l, index) => {
            l.skill = inheritResults.skillList[index];
          });
          return inheritList.inherit;
        });
      resolve(getFinalResults(inheritPlans));
    }
  });
}

function getFinalResults(inheritPlans) {
  let results = [];
  for (let i = 0; i < inheritPlans.length; i++) {
    inheritPlans[i].sort(skillSort);
    let inheritList = [{skills:[]}];

    for (let j = 0; j < inheritPlans[i].length; j++) {
      let last = inheritList[inheritList.length - 1];
      if (!last.name) {
        last.name = inheritPlans[i][j].name;
      }
      if (last.skills.length < 3 && last.name === inheritPlans[i][j].name) {
        last.skills.push(inheritPlans[i][j].skill);
        last.rarity = last.rarity ? Math.max(last.rarity, inheritPlans[i][j].rarity) : inheritPlans[i][j].rarity;
      } else {
        inheritList.push({
          name: inheritPlans[i][j].name,
          skills: [inheritPlans[i][j].skill],
          rarity: inheritPlans[i][j].rarity
        });
      }
    }
    results.push(inheritList);
  }

  for (let i = 0; i < results.length; i++) {
    results[i].sort(resultSort);
    for (let j = 0; j < results[i].length; j++) {
      results[i][j].skills.sort();
    }
  }
  return results;
}

function getTopInheritance(targetSkills, hero, rarity, len = 3) {
  let skillList = targetSkills
      .map(skill => {
        return (skills.getPrerequisites(skill.name)
            .filter(skill => !heroes.hasSkill(hero, skill, rarity)));
      })
      .filter(skillPrereq => skillPrereq.length);
  let inheritList = skillList.map(skills => heroes.getInheritancePrereqList(skills));

  skillList = skillList.reduce(flattenList, []);
  inheritList = inheritList.reduce(flattenList, []);

  let l = inheritList.length;
  while (l--) {
    if (inheritList[l].length === 0) {
      skillList.splice(l, 1);
      inheritList.splice(l, 1);
    }
  }

  return {
    inheritList: inheritList,
    skillList: skillList
  };

  // return (combinations(inheritList)
  //     .map(inherit => ({ inherit: inherit, cost: getCost(inherit) }))
  //     .sort(planSort)
  //     .slice(0, len))
  //     .map(inheritList => {
  //       inheritList.inherit.forEach((l, index) => {
  //         l.skill = skillList[index];
  //       });
  //       return inheritList.inherit;
  //     });
}

function flattenList(arr, d) {
  return arr.concat(d)
}

function skillFilter(skillName, hero) {
  for (let i = 0; i < hero.skills.length; i++) {
    if (hero.skills[i].name === skillName) {
      return false;
    }
  }
  return true;
}

function combinations(arr) {
  return arr.reduce(function(a,b){
      return a.map(function(x){
          return b.map(function(y){
              return x.concat(y);
          })
      }).reduce(function(a,b){ return a.concat(b) },[])
  }, [[]]);
}

function getCost(inherit) {
  let cost = 0;
  let targetHeroes = {};
  let targetHeroesRank = {};
  for (let i = 0; i < inherit.length; i++) {
    if (targetHeroes[inherit[i].name]) {
      targetHeroes[inherit[i].name].push(inherit[i].rarity);
    } else {
      targetHeroes[inherit[i].name] = [inherit[i].rarity];
    }
    targetHeroesRank[inherit[i].name] = inherit[i].rank;
  }

  for (let hero in targetHeroes) {
    targetHeroes[hero].sort((a,b) => b - a);
    for (let i = 0; i < targetHeroes[hero].length; i += 3) {
      cost += COSTS[targetHeroes[hero][i] - 1] * targetHeroesRank[hero];
    }
  }
  return cost;
}

function planSort(a, b) {
  if (a.cost < b.cost) {
    return -1;
  } else if (a.cost > b.cost) {
    return 1;
  } else {
    return a.inherit.length - b.inherit.length;
  }
}

function skillSort(a, b) {
  if (a.name < b.name) {
    return 1;
  } else if (a.name > b.name) {
    return -1;
  } else {
    return b.rarity - a.rarity;
  }
}

function resultSort(a, b) {
  if (a.rarity < b.rarity) {
    return -1;
  } else if (a.rarity > b.rarity) {
    return 1;
  } else {
    return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
  }
}

module.exports = {
  getInheritancePlanPromise: getInheritancePlanPromise
}

},{"../data/hero-access.js":3,"../data/skill-access.js":6}],21:[function(require,module,exports){
exports.loadFiles = function(urls, loadFont = false) {
  let promises = urls.map(url =>
    new Promise((resolve, reject) => {
      if (url) {
        let img = new Image();
        img.src = url;
        img.onload = () => resolve(img);
      } else {
        resolve('');
      }
    }
  ));
  if (loadFont) {
    promises.push(new FontFace('FehFont', 'url(font/feh-font.ttf)').load());
  }
  return Promise.all(promises);
};

exports.getEmptySkill = function() {
  return {
    name: '-',
    effect: '',
    stats: {},
    icon: ''
  };
};

exports.arrOptGenerator = function(item, $parent) {
  $(`<div class="dropdown-item">${item}</div>`)
      .data('val', item)
      .appendTo($parent);
};

},{}],22:[function(require,module,exports){
exports.CONST = {
  IMAGE_FRONT: 'img/assets/unit-edit-front.png',
  IMAGE_BACK: 'img/assets/unit-edit-back.jpg',
  IMAGE_SKILLS: 'img/assets/skills.png',
  IMAGE_UI: 'img/assets/unit-edit-ui.png',
  IMAGE_FEH: 'img/heroes-main/Feh.png',
  // FONT: new FontFace('FehFont', 'url(font/feh-font.ttf)'),
  EMPTY_SKILL: { name: '-', effect: '', icon: '' },
  IV: [
    {boon: '-', bane: '-'},
    {boon: 'hp', bane: 'atk'}, {boon: 'hp', bane: 'spd'}, {boon: 'hp', bane: 'def'}, {boon: 'hp', bane: 'res'},
    {boon: 'atk', bane: 'hp'}, {boon: 'atk', bane: 'spd'}, {boon: 'atk', bane: 'def'}, {boon: 'atk', bane: 'res'},
    {boon: 'spd', bane: 'hp'}, {boon: 'spd', bane: 'atk'}, {boon: 'spd', bane: 'def'}, {boon: 'spd', bane: 'res'},
    {boon: 'def', bane: 'hp'}, {boon: 'def', bane: 'atk'}, {boon: 'def', bane: 'spd'}, {boon: 'def', bane: 'res'},
    {boon: 'res', bane: 'hp'}, {boon: 'res', bane: 'atk'}, {boon: 'res', bane: 'spd'}, {boon: 'res', bane: 'def'}
  ],
  MERGES: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  RARITIES: [{ name: "5★", value: 5 }, { name: "4★", value: 4 }],
  BUFFS: [-7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7],
  BUFFS_TT: { hp: 10, atk: 4, spd: 4, def: 4, res: 4},
  MAX_HM: 4000,
  MAX_SP: 9999,
  MOVE_TYPES: [
    {name: 'Infantry'},
    {name: 'Armored'},
    {name: 'Cavalry'},
    {name: 'Flying'}
  ],
  WEAPON_TYPES: [
    {name: 'Sword', weaponType: 'Sword', colorType: 'Red'},
    {name: 'Axe', weaponType: 'Axe', colorType: 'Green'},
    {name: 'Lance', weaponType: 'Lance', colorType: 'Blue'},
    {name: 'Breath (Red)', weaponType: 'Breath', colorType: 'Red'},
    {name: 'Breath (Green)', weaponType: 'Breath', colorType: 'Green'},
    {name: 'Breath (Blue)', weaponType: 'Breath', colorType: 'Blue'},
    {name: 'Breath (Neutral)', weaponType: 'Breath', colorType: 'Neutral'},
    {name: 'Tome (Red)', weaponType: 'Tome', colorType: 'Red'},
    {name: 'Tome (Green)', weaponType: 'Tome', colorType: 'Green'},
    {name: 'Tome (Blue)', weaponType: 'Tome', colorType: 'Blue'},
    {name: 'Bow', weaponType: 'Bow', colorType: 'Neutral'},
    {name: 'Dagger', weaponType: 'Dagger', colorType: 'Neutral'},
    {name: 'Staff', weaponType: 'Staff', colorType: 'Neutral'}
  ]
};

exports.COORD = {
  ICONS: {
    "Infantry": [0,424],
    "Armored": [52,424],
    "Cavalry": [104,424],
    "Flying": [156,424],
    "Red Sword": [0,268],
    "Blue Lance": [52,268],
    "Green Axe": [104,268],
    "Red Tome": [0,320],
    "Blue Tome": [52,320],
    "Green Tome": [104,320],
    "Red Breath": [0,372],
    "Blue Breath": [52,372],
    "Green Breath": [104,372],
    "Neutral Breath": [156,216],
    "Neutral Bow": [156,268],
    "Neutral Dagger": [156,320],
    "Neutral Staff": [156,372]
  },
  EMPTY_SEAL: [0, 1074],
  FONT_IMAGE: {
    yellow: [0, 514],
    white: [32, 514],
    green: [64, 514],
    blue: [96, 514],
    red: [128, 514]
  },
  STATS: {
    hp: 604,
    atk: 640,
    spd: 678,
    def: 715,
    res: 752,
    sp: 788,
    hm: 825
  },

  RARITY: {
    '5': [0, 994],
    '4': [0, 1034]
  },
  SKILLS_ICON: {
    weapon: 596,
    assist: 633,
    special: 669,
    skillA: 707,
    skillB: 743,
    skillC: 780,
    seal: 818
  },
  SKILLS_TEXT: {
    weapon: 619,
    assist: 656,
    special: 694,
    skillA: 731,
    skillB: 768,
    skillC: 804,
    seal: 841
  },
  BLESSINGS: {
    "Water": [420, 0],
    "Wind": [420, 223],
    "Earth": [420, 446],
    "Fire": [420, 669]
  },
  LEGENDARY_BLESSINGS: [
    [210, 0],
    [210, 223],
    [210, 446],
    [210, 669]
  ]
};

},{}]},{},[19])