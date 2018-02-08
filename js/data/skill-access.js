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
    console.log(heroName);
    console.log(refine[weapon]);
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
