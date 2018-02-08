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
