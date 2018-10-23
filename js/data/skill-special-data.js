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
    name: "Blue Flame",
    cooldown: 3,
    spCost: 500,
    effect: "Boosts damage dealt by 10. If unit is adjacent to ally, boosts damage by 25 instead."
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
    name: "Earthwater Balm",
    cooldown: 1,
    spCost: 200,
    include: [{weaponType: "Staff"}],
    effect: "When healing an ally with a staff, grants Def/Res+4 to all allies for 1 turn."
  },
  {
    name: "Earthwater Balm+",
    cooldown: 1,
    spCost: 300,
    include: [{weaponType: "Staff"}],
    effect: "When healing an ally with a staff, grants Def/Res+6 to all allies for 1 turn."
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
    name: "Fire Emblem",
    cooldown: 2,
    spCost: 500,
    include: [{name: "Marth (Legendary Heroes)"}],
    effect: "Boosts damage dealt by 30% of unit's Spd. Grants Atk/Spd/Def/Res+4 to unit and all allies for 1 turn after combat. (Bonus granted to allies even if unit's HP reaches 0.)"
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
  },
  {
    name: "Windfire Balm",
    cooldown: 1,
    spCost: 200,
    include: [{weaponType: "Staff"}],
    effect: "When healing an ally with a staff, grants Atk/Spd+4 to all allies for 1 turn."
  },
  {
    name: "Windfire Balm+",
    cooldown: 1,
    spCost: 300,
    include: [{weaponType: "Staff"}],
    effect: "When healing an ally with a staff, grants Atk/Spd+6 to all allies for 1 turn."
  }
];
