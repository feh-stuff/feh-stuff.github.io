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
