const COSTS = [1, 20, 200, 2000, 20000];

onmessage = function(e) {
  let res = combinations(e.data.inheritList)
    .map(inherit => ({ inherit: inherit, cost: getCost(inherit) }))
    .sort(planSort)
    .slice(0, e.data.len)
    .map(inheritList => {
      inheritList.inherit.forEach((l, index) => {
        l.skill = e.data.skillList[index];
      });
      return inheritList.inherit;
    });

  postMessage(res);
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
