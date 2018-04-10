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
    name: "Restore",
    range: 1,
    spCost: 200,
    include: [{weaponType: "Staff"}],
    effect: "Restores 8 HP. Neutralizes ally's penalties (from skills like Panic, Threaten, etc.) and negative status effects (preventing counterattacks, restricting movement, etc.) that last through ally's next action."
  },
  {
    name: "Restore+",
    range: 1,
    spCost: 300,
    prev: ["Restore"],
    include: [{weaponType: "Staff"}],
    last: true,
    effect: "Restores HP = 50% of Atk. (Minimum of 8 HP.) Neutralizes ally's penalties (from skills like Panic, Threaten, etc.) and negative status effects (preventing counterattacks, restricting movement, etc.) that last through ally's next action."
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
