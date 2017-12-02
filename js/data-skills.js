let SKILL_A = [
    {
      "name": "Aegis",
      "cooldown": 3,
      "effect": "Reduces damage inflicted by attacks from foes 2 spaces away by 50%.",
      "spCost": 200,
      "inheritRestriction": "Melee Weapon Users Only",
      "type": "SPECIAL"
    },
    {
      "name": "Aether",
      "cooldown": 5,
      "effect": "Resolve combat as if foe suffered Def/Res-50%. Unit recovers HP=half damage dealt.",
      "spCost": 500,
      "inheritRestriction": "Excludes Staff Users",
      "type": "SPECIAL"
    },
    {
      "name": "Astra",
      "cooldown": 4,
      "effect": "Grants +150% to damage dealt.",
      "spCost": 200,
      "inheritRestriction": "Excludes Staff Users",
      "type": "SPECIAL"
    },
    {
      "name": "Black Luna",
      "cooldown": 3,
      "effect": "Resolve combat as if foe suffered Def/Res-80%. (Skill cannot be inherited.)",
      "spCost": 500,
      "inheritRestriction": "Exclusive",
      "type": "SPECIAL"
    },
    {
      "name": "Blazing Flame",
      "cooldown": 4,
      "effect": "Before combat this unit initiates, foes in an area near target take damage equal to 1.5 x (unit's Atk minus foe's Def or Res).",
      "spCost": 300,
      "inheritRestriction": "Excludes Staff Users",
      "type": "SPECIAL"
    },
    {
      "name": "Blazing Light",
      "cooldown": 4,
      "effect": "Before combat this unit initiates, foes in an area near target take damage equal to 1.5 x (unit's Atk minus foe's Def or Res).",
      "spCost": 300,
      "inheritRestriction": "Excludes Staff Users",
      "type": "SPECIAL"
    },
    {
      "name": "Blazing Thunder",
      "cooldown": 4,
      "effect": "Before combat this unit initiates, foes in an area near target take damage equal to 1.5 x (unit's Atk minus foe's Def or Res).",
      "spCost": 300,
      "inheritRestriction": "Excludes Staff Users",
      "type": "SPECIAL"
    },
    {
      "name": "Blazing Wind",
      "cooldown": 4,
      "effect": "Before combat this unit initiates, foes in an area near target take damage equal to 1.5 x (unit's Atk minus foe's Def or Res).",
      "spCost": 300,
      "inheritRestriction": "Excludes Staff Users",
      "type": "SPECIAL"
    },
    {
      "name": "Bonfire",
      "cooldown": 3,
      "effect": "Boosts damage dealt by 50% of unit's Def.",
      "spCost": 200,
      "inheritRestriction": "Excludes Staff Users",
      "type": "SPECIAL"
    },
    {
      "name": "Buckler",
      "cooldown": 3,
      "effect": "Reduces damage inflicted by attacks from adjacent foes by 30%.",
      "spCost": 100,
      "inheritRestriction": "Melee Weapon Users Only",
      "type": "SPECIAL"
    },
    {
      "name": "Chilling Wind",
      "cooldown": 4,
      "effect": "Boosts damage dealt by 50% of unit's Res.",
      "spCost": 100,
      "inheritRestriction": "Excludes Staff Users",
      "type": "SPECIAL"
    },
    {
      "name": "Daylight",
      "cooldown": 3,
      "effect": "Heal 30% of damage dealt.",
      "spCost": 100,
      "inheritRestriction": "Excludes Staff Users",
      "type": "SPECIAL"
    },
    {
      "name": "Draconic Aura",
      "cooldown": 3,
      "effect": "Grants +30% to Atk.",
      "spCost": 200,
      "inheritRestriction": "Excludes Staff Users",
      "type": "SPECIAL"
    },
    {
      "name": "Dragon Fang",
      "cooldown": 4,
      "effect": "Grants +50% to Atk.",
      "spCost": 200,
      "inheritRestriction": "Excludes Staff Users",
      "type": "SPECIAL"
    },
    {
      "name": "Dragon Gaze",
      "cooldown": 4,
      "effect": "Grants +30% to Atk.",
      "spCost": 100,
      "inheritRestriction": "Excludes Staff Users",
      "type": "SPECIAL"
    },
    {
      "name": "Escutcheon",
      "cooldown": 2,
      "effect": "Reduces damage inflicted by attacks from adjacent foes by 30%.",
      "spCost": 200,
      "inheritRestriction": "Melee Weapon Users Only",
      "type": "SPECIAL"
    },
    {
      "name": "Galeforce",
      "cooldown": 5,
      "effect": "If this unit initiates an attack, it can take another action after combat. (Once per turn only.)",
      "spCost": 500,
      "inheritRestriction": "Sword, Lance, Axe Users Only",
      "type": "SPECIAL"
    },
    {
      "name": "Glacies",
      "cooldown": 4,
      "effect": "Boosts damage dealt by 80% of unit's Res.",
      "spCost": 200,
      "inheritRestriction": "Excludes Staff Users",
      "type": "SPECIAL"
    },
    {
      "name": "Glimmer",
      "cooldown": 2,
      "effect": "Grants +50% to damage dealt.",
      "spCost": 200,
      "inheritRestriction": "Excludes Staff Users",
      "type": "SPECIAL"
    },
    {
      "name": "Glowing Ember",
      "cooldown": 4,
      "effect": "Boosts damage dealt by 50% of unit's Def.",
      "spCost": 100,
      "inheritRestriction": "Excludes Staff Users",
      "type": "SPECIAL"
    },
    {
      "name": "Growing Flame",
      "cooldown": 4,
      "effect": "Before combat this unit initiates, foes in a wide area around target take damage equal to (unit's Atk minus foe's Def or Res).",
      "spCost": 300,
      "inheritRestriction": "Excludes Staff Users",
      "type": "SPECIAL"
    },
    {
      "name": "Growing Light",
      "cooldown": 4,
      "effect": "Before combat this unit initiates, foes in a wide area near target take damage equal to (unit's Atk minus foe's Def or Res).",
      "spCost": 300,
      "inheritRestriction": "Excludes Staff Users",
      "type": "SPECIAL"
    },
    {
      "name": "Growing Thunder",
      "cooldown": 4,
      "effect": "Before combat this unit initiates, foes in a wide area around target take damage equal to (unit's Atk minus foe's Def or Res).",
      "spCost": 300,
      "inheritRestriction": "Excludes Staff Users",
      "type": "SPECIAL"
    },
    {
      "name": "Growing Wind",
      "cooldown": 4,
      "effect": "Before combat this unit initiates, foes in a wide area near target take damage equal to (unit's Atk minus foe's Def or Res).",
      "spCost": 300,
      "inheritRestriction": "Excludes Staff Users",
      "type": "SPECIAL"
    },
    {
      "name": "Heavenly Light",
      "cooldown": 2,
      "effect": "When healing an ally with a staff, all other allies recover 10 HP.",
      "spCost": 150,
      "inheritRestriction": "Staff Users Only",
      "type": "SPECIAL"
    },
    {
      "name": "Holy Vestments",
      "cooldown": 3,
      "effect": "Reduces damage inflicted by attacks from foes 2 spaces away by 30%.",
      "spCost": 100,
      "inheritRestriction": "Melee Weapon Users Only",
      "type": "SPECIAL"
    },
    {
      "name": "Ice Mirror",
      "cooldown": 2,
      "effect": "Reduces damage unit takes from foes 2 spaces away by 30%. If Special triggers, boosts unit's next attack by total damage was reduced (by any source, including other skills). Resets at end of combat. (Skill cannot be inherited.)",
      "spCost": 500,
      "inheritRestriction": "Exclusive",
      "type": "SPECIAL"
    },
    {
      "name": "Iceberg",
      "cooldown": 3,
      "effect": "Boosts damage dealt by 50% of unit's Res.",
      "spCost": 200,
      "inheritRestriction": "Excludes Staff Users",
      "type": "SPECIAL"
    },
    {
      "name": "Ignis",
      "cooldown": 4,
      "effect": "Boosts damage dealt by 80% of unit's Def.",
      "spCost": 200,
      "inheritRestriction": "Excludes Staff Users",
      "type": "SPECIAL"
    },
    {
      "name": "Imbue",
      "cooldown": 1,
      "effect": "When healing an ally with a staff, increases recovered HP by 10.",
      "spCost": 50,
      "inheritRestriction": "Staff Users Only",
      "type": "SPECIAL"
    },
    {
      "name": "Kindled-Fire Balm",
      "cooldown": 1,
      "effect": "When healing an ally with a staff, grants all allies Atk+4 for 1 turn.",
      "spCost": 150,
      "inheritRestriction": "Staff Users Only",
      "type": "SPECIAL"
    },
    {
      "name": "Luna",
      "cooldown": 3,
      "effect": "Resolve combat as if foe suffered Def/Res-50%.",
      "spCost": 200,
      "inheritRestriction": "Excludes Staff Users",
      "type": "SPECIAL"
    },
    {
      "name": "Miracle",
      "cooldown": 5,
      "effect": "If HP > 1, survive a lethal attack with 1 HP remaining.",
      "spCost": 200,
      "inheritRestriction": "None",
      "type": "SPECIAL"
    },
    {
      "name": "Moonbow",
      "cooldown": 2,
      "effect": "Resolve combat as if foe suffered Def/Res-30%.",
      "spCost": 200,
      "inheritRestriction": "Excludes Staff Users",
      "type": "SPECIAL"
    },
    {
      "name": "New Moon",
      "cooldown": 3,
      "effect": "Resolve combat as if foe suffered Def/Res-30%.",
      "spCost": 100,
      "inheritRestriction": "Excludes Staff Users",
      "type": "SPECIAL"
    },
    {
      "name": "Night Sky",
      "cooldown": 3,
      "effect": "Grants +50% to damage dealt.",
      "spCost": 100,
      "inheritRestriction": "Excludes Staff Users",
      "type": "SPECIAL"
    },
    {
      "name": "Noontime",
      "cooldown": 2,
      "effect": "Heal 30% of damage dealt.",
      "spCost": 200,
      "inheritRestriction": "Excludes Staff Users",
      "type": "SPECIAL"
    },
    {
      "name": "Pavise",
      "cooldown": 3,
      "effect": "Reduces damage inflicted by attacks from adjacent foes by 50%.",
      "spCost": 200,
      "inheritRestriction": "Melee Weapon Users Only",
      "type": "SPECIAL"
    },
    {
      "name": "Regnal Astra",
      "cooldown": 2,
      "effect": "Boosts damage dealt by 40% of unit's Spd. (Skill cannot be inherited.)",
      "spCost": 500,
      "inheritRestriction": "Exclusive",
      "type": "SPECIAL"
    },
    {
      "name": "Reprisal",
      "cooldown": 2,
      "effect": "Grants bonus to damage dealt equal to 30% of damage suffered.",
      "spCost": 200,
      "inheritRestriction": "Excludes Staff Users",
      "type": "SPECIAL"
    },
    {
      "name": "Retribution",
      "cooldown": 3,
      "effect": "Grants bonus to damage dealt equal to 30% of damage suffered.",
      "spCost": 100,
      "inheritRestriction": "Excludes Staff Users",
      "type": "SPECIAL"
    },
    {
      "name": "Rising Flame",
      "cooldown": 4,
      "effect": "Before combat this unit initiates, foes in an area near target take damage equal to (unit's Atk minus foe's Def or Res).",
      "spCost": 150,
      "inheritRestriction": "Excludes Staff Users",
      "type": "SPECIAL"
    },
    {
      "name": "Rising Light",
      "cooldown": 4,
      "effect": "Before combat this unit initiates, foes in an area near target take damage equal to (unit's Atk minus foe's Def or Res).",
      "spCost": 150,
      "inheritRestriction": "Excludes Staff Users",
      "type": "SPECIAL"
    },
    {
      "name": "Rising Thunder",
      "cooldown": 4,
      "effect": "Before combat this unit initiates, foes in an area near target take damage equal to (unit's Atk minus foe's Def or Res).",
      "spCost": 150,
      "inheritRestriction": "Excludes Staff Users",
      "type": "SPECIAL"
    },
    {
      "name": "Rising Wind",
      "cooldown": 4,
      "effect": "Before combat this unit initiates, foes in an area near target take damage equal to (unit's Atk minus foe's Def or Res).",
      "spCost": 150,
      "inheritRestriction": "Excludes Staff Users",
      "type": "SPECIAL"
    },
    {
      "name": "Sacred Cowl",
      "cooldown": 2,
      "effect": "Reduces damage inflicted by attacks from foes 2 spaces away by 30%.",
      "spCost": 200,
      "inheritRestriction": "Melee Weapon Users Only",
      "type": "SPECIAL"
    },
    {
      "name": "Sol",
      "cooldown": 3,
      "effect": "Heal 50% of damage dealt.",
      "spCost": 200,
      "inheritRestriction": "Excludes Staff Users",
      "type": "SPECIAL"
    },
    {
      "name": "Solid-Earth Balm",
      "cooldown": 1,
      "effect": "When healing an ally with a staff, grants all allies Def+4 for 1 turn.",
      "spCost": 150,
      "inheritRestriction": "Staff Users Only",
      "type": "SPECIAL"
    },
    {
      "name": "Still-Water Balm",
      "cooldown": 1,
      "effect": "When healing an ally with a staff, grants all allies Res+4 for 1 turn.",
      "spCost": 150,
      "inheritRestriction": "Staff Users Only",
      "type": "SPECIAL"
    },
    {
      "name": "Swift-Winds Balm",
      "cooldown": 1,
      "effect": "When healing an ally with a staff, grants all allies Spd+4 for 1 turn.",
      "spCost": 150,
      "inheritRestriction": "Staff Users Only",
      "type": "SPECIAL"
    },
    {
      "name": "Vengeance",
      "cooldown": 3,
      "effect": "Grants bonus to damage dealt equal to 50% of damage suffered.",
      "spCost": 200,
      "inheritRestriction": "Excludes Staff Users",
      "type": "SPECIAL"
    },
    {
      "name": "Heavy Blade 1",
      "effect": "If unit's Atk - foe's Atk ≥ 5, unit gains Special cooldown charge +1 per attack. (If using other similar skill, only highest value applied.)",
      "spCost": 60,
      "inheritRestriction": "Excludes Staff Users",
      "type": "PASSIVE_A"
    },
    {
      "name": "Armored Blow 2",
      "effect": "Grants Def+4 during combat if unit initiates the attack.",
      "spCost": 100,
      "inheritRestriction": "Excludes Staff Users",
      "type": "PASSIVE_A"
    },
    {
      "name": "Armored Blow 3",
      "effect": "Grants Def+6 during combat if unit initiates the attack.",
      "spCost": 200,
      "inheritRestriction": "Excludes Staff Users",
      "type": "PASSIVE_A"
    },
    {
      "name": "Atk Def Bond 1",
      "effect": "Grants Atk/Def+3 to this unit during combat if unit is adjacent to an ally.",
      "spCost": 60,
      "inheritRestriction": "None",
      "type": "PASSIVE_A"
    },
    {
      "name": "Atk Def Bond 2",
      "effect": "Grants Atk/Def+4 to this unit during combat if unit is adjacent to an ally.",
      "spCost": 120,
      "inheritRestriction": "None",
      "type": "PASSIVE_A"
    },
    {
      "name": "Atk Def Bond 3",
      "effect": "Grants Atk/Def+5 to this unit during combat if unit is adjacent to an ally.",
      "spCost": 240,
      "inheritRestriction": "None",
      "type": "PASSIVE_A"
    },
    {
      "name": "Attack Def +1",
      "effect": "Grants Atk/Def+1.",
      "spCost": 80,
      "inheritRestriction": "None",
      "type": "PASSIVE_A"
    },
    {
      "name": "Attack Def +2",
      "effect": "Grants Atk/Def+2.",
      "spCost": 160,
      "inheritRestriction": "None",
      "type": "PASSIVE_A"
    },
    {
      "name": "Attack +1",
      "effect": "Grants Atk+1.",
      "spCost": 30,
      "inheritRestriction": "None",
      "type": "PASSIVE_A"
    },
    {
      "name": "Attack +2",
      "effect": "Grants Atk+2.",
      "spCost": 60,
      "inheritRestriction": "None",
      "type": "PASSIVE_A"
    },
    {
      "name": "Attack +3",
      "effect": "Grants Atk+3.",
      "spCost": 120,
      "inheritRestriction": "None",
      "type": "PASSIVE_A"
    },
    {
      "name": "Atk Res Bond 1",
      "effect": "Grants Atk/Res+3 to this unit during combat if unit is adjacent to an ally.",
      "spCost": 60,
      "inheritRestriction": "None",
      "type": "PASSIVE_A"
    },
    {
      "name": "Atk Res Bond 2",
      "effect": "Grants Atk/Res+4 to this unit during combat if unit is adjacent to an ally.",
      "spCost": 120,
      "inheritRestriction": "None",
      "type": "PASSIVE_A"
    },
    {
      "name": "Atk Res Bond 3",
      "effect": "Grants Atk/Res+5 to this unit during combat if unit is adjacent to an ally.",
      "spCost": 240,
      "inheritRestriction": "None",
      "type": "PASSIVE_A"
    },
    {
      "name": "Attack Res 1",
      "effect": "Grants Atk/Res+1.",
      "spCost": 80,
      "inheritRestriction": "None",
      "type": "PASSIVE_A"
    },
    {
      "name": "Attack Res 2",
      "effect": "Grants Atk/Res+2.",
      "spCost": 160,
      "inheritRestriction": "None",
      "type": "PASSIVE_A"
    },
    {
      "name": "Atk Spd 1",
      "effect": "Grants Atk/Spd+1.",
      "spCost": 80,
      "inheritRestriction": "None",
      "type": "PASSIVE_A"
    },
    {
      "name": "Atk Spd 2",
      "effect": "Grants Atk/Spd+2.",
      "spCost": 160,
      "inheritRestriction": "None",
      "type": "PASSIVE_A"
    },
    {
      "name": "Wind Boost 3",
      "effect": "If unit has at least 3 more HP than enemy at the start of combat, unit receives Spd+6 during combat.",
      "spCost": 200,
      "inheritRestriction": "None",
      "type": "PASSIVE_A"
    },
    {
      "name": "Wind Boost 2",
      "effect": "If unit has at least 3 more HP than enemy at the start of combat, unit receives Spd+4 during combat.",
      "spCost": 100,
      "inheritRestriction": "None",
      "type": "PASSIVE_A"
    },
    {
      "name": "Wind Boost 1",
      "effect": "If unit has at least 3 more HP than enemy at the start of combat, unit receives Spd+2 during combat.",
      "spCost": 50,
      "inheritRestriction": "None",
      "type": "PASSIVE_A"
    },
    {
      "name": "Water Boost 3",
      "effect": "If unit has at least 3 more HP than enemy at the start of combat, unit receives Res+6 during combat.",
      "spCost": 200,
      "inheritRestriction": "None",
      "type": "PASSIVE_A"
    },
    {
      "name": "Water Boost 2",
      "effect": "If unit has at least 3 more HP than enemy at the start of combat, unit receives Res+4 during combat.",
      "spCost": 100,
      "inheritRestriction": "None",
      "type": "PASSIVE_A"
    },
    {
      "name": "Water Boost 1",
      "effect": "If unit has at least 3 more HP than enemy at the start of combat, unit receives Res+2 during combat.",
      "spCost": 50,
      "inheritRestriction": "None",
      "type": "PASSIVE_A"
    },
    {
      "name": "Warding Stance 3",
      "effect": "Grants Res+6 during combat when this unit is attacked.",
      "spCost": 200,
      "inheritRestriction": "None",
      "type": "PASSIVE_A"
    },
    {
      "name": "Warding Stance 2",
      "effect": "Grants Res+4 during combat when this unit is attacked.",
      "spCost": 100,
      "inheritRestriction": "None",
      "type": "PASSIVE_A"
    },
    {
      "name": "Bracing Blow 1",
      "effect": "Grants Def/Res+2 during combat if unit initiates combat.",
      "spCost": 120,
      "inheritRestriction": "Excludes Staff Users",
      "type": "PASSIVE_A"
    },
    {
      "name": "Bracing Blow 2",
      "effect": "Grants Def/Res+4 during combat if unit initiates combat.",
      "spCost": 240,
      "inheritRestriction": "Excludes Staff Users",
      "type": "PASSIVE_A"
    },
    {
      "name": "Warding Stance 1",
      "effect": "Grants Res+2 during combat when this unit is attacked.",
      "spCost": 50,
      "inheritRestriction": "None",
      "type": "PASSIVE_A"
    },
    {
      "name": "Warding Blow 3",
      "effect": "Grants Res+6 during combat if unit initiates attack.",
      "spCost": 200,
      "inheritRestriction": "Excludes Staff Users",
      "type": "PASSIVE_A"
    },
    {
      "name": "Warding Blow 2",
      "effect": "Grants Res+4 during combat if unit initiates attack.",
      "spCost": 100,
      "inheritRestriction": "Excludes Staff Users",
      "type": "PASSIVE_A"
    },
    {
      "name": "Close Counter",
      "effect": "Enables unit to counterattack regardless of distance to attacker.",
      "spCost": 300,
      "inheritRestriction": "Ranged Weapon Users Only",
      "type": "PASSIVE_A"
    },
    {
      "name": "Close Def 1",
      "effect": "If unit is attacked by foe using sword, axe, lance, or dragonstone, unit receives Def/Res+2 during combat.",
      "spCost": 60,
      "inheritRestriction": "None",
      "type": "PASSIVE_A"
    },
    {
      "name": "Close Def 2",
      "effect": "If unit is attacked by foe using sword, axe, lance, or dragonstone, unit receives Def/Res+4 during combat.",
      "spCost": 120,
      "inheritRestriction": "None",
      "type": "PASSIVE_A"
    },
    {
      "name": "Close Def 3",
      "effect": "If unit is attacked by foe using sword, axe, lance, or dragonstone, unit receives Def/Res+6 during combat.",
      "spCost": 240,
      "inheritRestriction": "None",
      "type": "PASSIVE_A"
    },
    {
      "name": "Warding Blow 1",
      "effect": "Grants Res+2 during combat if unit initiates attack.",
      "spCost": 50,
      "inheritRestriction": "Excludes Staff Users",
      "type": "PASSIVE_A"
    },
    {
      "name": "Darting Blow 1",
      "effect": "Grants Spd+2 during combat if unit initiates the attack.",
      "spCost": 50,
      "inheritRestriction": "Excludes Staff Users",
      "type": "PASSIVE_A"
    },
    {
      "name": "Darting Blow 2",
      "effect": "Grants Spd+4 during combat if unit initiates the attack.",
      "spCost": 100,
      "inheritRestriction": "Excludes Staff Users",
      "type": "PASSIVE_A"
    },
    {
      "name": "Darting Blow 3",
      "effect": "Grants Spd+6 during combat if unit initiates the attack.",
      "spCost": 200,
      "inheritRestriction": "Excludes Staff Users",
      "type": "PASSIVE_A"
    },
    {
      "name": "Death Blow 1",
      "effect": "Grants Atk+2 during combat if unit initiates the attack.",
      "spCost": 50,
      "inheritRestriction": "Excludes Staff Users",
      "type": "PASSIVE_A"
    },
    {
      "name": "Death Blow 2",
      "effect": "Grants Atk+4 during combat if unit initiates the attack.",
      "spCost": 100,
      "inheritRestriction": "Excludes Staff Users",
      "type": "PASSIVE_A"
    },
    {
      "name": "Death Blow 3",
      "effect": "Grants Atk+6 during combat if unit initiates the attack.",
      "spCost": 200,
      "inheritRestriction": "Excludes Staff Users",
      "type": "PASSIVE_A"
    },
    {
      "name": "Triangle Adept 3",
      "effect": "Gives Atk+20% if weapon-triangle advantage, Atk-20% if disadvantage.",
      "spCost": 200,
      "inheritRestriction": "Excludes Colorless Weapon Users",
      "type": "PASSIVE_A"
    },
    {
      "name": "Triangle Adept 2",
      "effect": "Gives Atk+15% if weapon-triangle advantage, Atk-15% if disadvantage.",
      "spCost": 100,
      "inheritRestriction": "Excludes Colorless Weapon Users",
      "type": "PASSIVE_A"
    },
    {
      "name": "Defense +1",
      "effect": "Grants Def+1.",
      "spCost": 30,
      "inheritRestriction": "None",
      "type": "PASSIVE_A"
    },
    {
      "name": "Defense +2",
      "effect": "Grants Def+2.",
      "spCost": 60,
      "inheritRestriction": "None",
      "type": "PASSIVE_A"
    },
    {
      "name": "Defense +3",
      "effect": "Grants Def+3.",
      "spCost": 120,
      "inheritRestriction": "None",
      "type": "PASSIVE_A"
    },
    {
      "name": "Triangle Adept 1",
      "effect": "Gives Atk+10% if weapon-triangle advantage, Atk-10% if disadvantage.",
      "spCost": 50,
      "inheritRestriction": "Excludes Colorless Weapon Users",
      "type": "PASSIVE_A"
    },
    {
      "name": "Defiant Atk 1",
      "effect": "Grants Atk+3 at start of turn if unit's HP ≤ 50%.",
      "spCost": 40,
      "inheritRestriction": "None",
      "type": "PASSIVE_A"
    },
    {
      "name": "Defiant Atk 2",
      "effect": "Grants Atk+5 at start of turn if unit's HP ≤ 50%.",
      "spCost": 80,
      "inheritRestriction": "None",
      "type": "PASSIVE_A"
    },
    {
      "name": "Defiant Atk 3",
      "effect": "Grants Atk+7 at start of turn if unit's HP ≤ 50%.",
      "spCost": 160,
      "inheritRestriction": "None",
      "type": "PASSIVE_A"
    },
    {
      "name": "Defiant Def 1",
      "effect": "Grants Def+3 at start of turn if unit's HP ≤ 50%.",
      "spCost": 40,
      "inheritRestriction": "None",
      "type": "PASSIVE_A"
    },
    {
      "name": "Defiant Def 2",
      "effect": "Grants Def+5 at start of turn if unit's HP ≤ 50%.",
      "spCost": 80,
      "inheritRestriction": "None",
      "type": "PASSIVE_A"
    },
    {
      "name": "Defiant Def 3",
      "effect": "Grants Def+7 at start of turn if unit's HP ≤ 50%.",
      "spCost": 160,
      "inheritRestriction": "None",
      "type": "PASSIVE_A"
    },
    {
      "name": "Defiant Res 1",
      "effect": "Grants Res+3 at start of turn if unit's HP ≤ 50%.",
      "spCost": 40,
      "inheritRestriction": "None",
      "type": "PASSIVE_A"
    },
    {
      "name": "Defiant Res 2",
      "effect": "Grants Res+5 at start of turn if unit's HP ≤ 50%.",
      "spCost": 80,
      "inheritRestriction": "None",
      "type": "PASSIVE_A"
    },
    {
      "name": "Defiant Res 3",
      "effect": "Grants Res+7 at start of turn if unit's HP ≤ 50%.",
      "spCost": 160,
      "inheritRestriction": "None",
      "type": "PASSIVE_A"
    },
    {
      "name": "Defiant Spd 1",
      "effect": "Grants Spd+3 at start of turn if unit's HP ≤ 50%.",
      "spCost": 40,
      "inheritRestriction": "None",
      "type": "PASSIVE_A"
    },
    {
      "name": "Defiant Spd 2",
      "effect": "Grants Spd+5 at start of turn if unit's HP ≤ 50%.",
      "spCost": 80,
      "inheritRestriction": "None",
      "type": "PASSIVE_A"
    },
    {
      "name": "Defiant Spd 3",
      "effect": "Grants Spd+7 at start of turn if unit's HP ≤ 50%.",
      "spCost": 160,
      "inheritRestriction": "None",
      "type": "PASSIVE_A"
    },
    {
      "name": "Distant Counter",
      "effect": "Enables unit to counterattack regardless of distance to attacker.",
      "spCost": 300,
      "inheritRestriction": "Melee Weapon Users Only",
      "type": "PASSIVE_A"
    },
    {
      "name": "Distant Def 1",
      "effect": "If unit is attacked by foe using bow, daggers, magic, or staff, unit receives Def/Res+2 during combat.",
      "spCost": 60,
      "inheritRestriction": "None",
      "type": "PASSIVE_A"
    },
    {
      "name": "Distant Def 2",
      "effect": "If unit is attacked by foe using bow, daggers, magic, or staff, unit receives Def/Res+4 during combat.",
      "spCost": 120,
      "inheritRestriction": "None",
      "type": "PASSIVE_A"
    },
    {
      "name": "Distant Def 3",
      "effect": "If unit is attacked by foe using bow, daggers, magic, or staff, unit receives Def/Res+6 during combat.",
      "spCost": 240,
      "inheritRestriction": "None",
      "type": "PASSIVE_A"
    },
    {
      "name": "Swift Strike 2",
      "effect": "If unit initiates combat, unit granted Spd/Res+4 during battle.",
      "spCost": 240,
      "inheritRestriction": "Excludes Staff Users",
      "type": "PASSIVE_A"
    },
    {
      "name": "Swift Strike 1",
      "effect": "If unit initiates combat, unit granted Spd/Res+2 during battle.",
      "spCost": 120,
      "inheritRestriction": "Excludes Staff Users",
      "type": "PASSIVE_A"
    },
    {
      "name": "Armored Blow 1",
      "effect": "Grants Def+2 during combat if unit initiates the attack.",
      "spCost": 50,
      "inheritRestriction": "Excludes Staff Users",
      "type": "PASSIVE_A"
    },
    {
      "name": "Swift Sparrow 2",
      "effect": "If unit initiates combat, unit granted Atk/Spd+4 during battle.",
      "spCost": 240,
      "inheritRestriction": "Excludes Staff Users",
      "type": "PASSIVE_A"
    },
    {
      "name": "Swift Sparrow 1",
      "effect": "If unit initiates combat, unit granted Atk/Spd+2 during battle.",
      "spCost": 120,
      "inheritRestriction": "Excludes Staff Users",
      "type": "PASSIVE_A"
    },
    {
      "name": "Earth Boost 1",
      "effect": "If unit has at least 3 more HP than enemy at the start of combat, unit receives Def+2 during combat.",
      "spCost": 50,
      "inheritRestriction": "None",
      "type": "PASSIVE_A"
    },
    {
      "name": "Earth Boost 2",
      "effect": "If unit has at least 3 more HP than enemy at the start of combat, unit receives Def+4 during combat.",
      "spCost": 100,
      "inheritRestriction": "None",
      "type": "PASSIVE_A"
    },
    {
      "name": "Earth Boost 3",
      "effect": "If unit has at least 3 more HP than enemy at the start of combat, unit receives Def+6 during combat.",
      "spCost": 200,
      "inheritRestriction": "None",
      "type": "PASSIVE_A"
    },
    {
      "name": "Fierce Stance 1",
      "effect": "Grants Atk+2 during combat when this unit is attacked.",
      "spCost": 50,
      "inheritRestriction": "Excludes Staff Users",
      "type": "PASSIVE_A"
    },
    {
      "name": "Fierce Stance 2",
      "effect": "Grants Atk+4 during combat when this unit is attacked.",
      "spCost": 100,
      "inheritRestriction": "Excludes Staff Users",
      "type": "PASSIVE_A"
    },
    {
      "name": "Fierce Stance 3",
      "effect": "Grants Atk+6 during combat when this unit is attacked.",
      "spCost": 200,
      "inheritRestriction": "Excludes Staff Users",
      "type": "PASSIVE_A"
    },
    {
      "name": "Fire Boost 1",
      "effect": "If unit has at least 3 more HP than enemy at the start of combat, unit receives Atk+2 during combat.",
      "spCost": 50,
      "inheritRestriction": "None",
      "type": "PASSIVE_A"
    },
    {
      "name": "Fire Boost 2",
      "effect": "If unit has at least 3 more HP than enemy at the start of combat, unit receives Atk+4 during combat.",
      "spCost": 100,
      "inheritRestriction": "None",
      "type": "PASSIVE_A"
    },
    {
      "name": "Fire Boost 3",
      "effect": "If unit has at least 3 more HP than enemy at the start of combat, unit receives Atk+6 during combat.",
      "spCost": 200,
      "inheritRestriction": "None",
      "type": "PASSIVE_A"
    },
    {
      "name": "Flashing Blade 1",
      "effect": "If unit's Spd - foe's Spd ≥ 5, unit gains Special cooldown charge +1 per attack. (If using other similar skill, only highest value applied.)",
      "spCost": 60,
      "inheritRestriction": "Infantry and Armored Only Excludes Staff Users",
      "type": "PASSIVE_A"
    },
    {
      "name": "Flashing Blade 2",
      "effect": "If unit's Spd - foe's Spd ≥ 3, unit gains Special cooldown charge +1 per attack. (If using other similar skill, only highest value applied.)",
      "spCost": 120,
      "inheritRestriction": "Infantry and Armored Only Excludes Staff Users",
      "type": "PASSIVE_A"
    },
    {
      "name": "Flashing Blade 3",
      "effect": "If unit's Spd - foe's Spd ≥ 1, unit gains Special cooldown charge +1 per attack. (If using other similar skill, only highest value applied.)",
      "spCost": 240,
      "inheritRestriction": "Infantry and Armored Only Excludes Staff Users",
      "type": "PASSIVE_A"
    },
    {
      "name": "Svalinn Shield",
      "effect": "Neutralizes \"effective against\" bonuses.",
      "spCost": 200,
      "inheritRestriction": "Armored Only",
      "type": "PASSIVE_A"
    },
    {
      "name": "Sturdy Blow 2",
      "effect": "Grants Atk/Def+4 during combat if unit initiates combat.",
      "spCost": 240,
      "inheritRestriction": "Excludes Staff Users",
      "type": "PASSIVE_A"
    },
    {
      "name": "Sturdy Blow 1",
      "effect": "Grants Atk/Def+2 during combat if unit initiates combat.",
      "spCost": 120,
      "inheritRestriction": "Excludes Staff Users",
      "type": "PASSIVE_A"
    },
    {
      "name": "Steady Stance 3",
      "effect": "Grants Def+6 during combat when this unit is attacked.",
      "spCost": 200,
      "inheritRestriction": "None",
      "type": "PASSIVE_A"
    },
    {
      "name": "Steady Stance 2",
      "effect": "Grants Def+4 during combat when this unit is attacked.",
      "spCost": 100,
      "inheritRestriction": "None",
      "type": "PASSIVE_A"
    },
    {
      "name": "Steady Stance 1",
      "effect": "Grants Def+2 during combat when this unit is attacked.",
      "spCost": 50,
      "inheritRestriction": "None",
      "type": "PASSIVE_A"
    },
    {
      "name": "Steady Breath",
      "effect": "If attacked, unit granted Def+4 during combat; also gains Special cooldown charge +1. (If using other similar skill, only highest value applied.)",
      "spCost": 240,
      "inheritRestriction": "Infantry and Armored Only Melee Weapon Users Only",
      "type": "PASSIVE_A"
    },
    {
      "name": "Steady Blow 2",
      "effect": "If unit initiates combat, unit granted Spd/Def+4 during battle.",
      "spCost": 240,
      "inheritRestriction": "Excludes Staff Users",
      "type": "PASSIVE_A"
    },
    {
      "name": "Steady Blow 1",
      "effect": "If unit initiates combat, unit granted Spd/Def+2 during battle.",
      "spCost": 120,
      "inheritRestriction": "Excludes Staff Users",
      "type": "PASSIVE_A"
    },
    {
      "name": "Spd Res 2",
      "effect": "Grants Spd/Res+2.",
      "spCost": 160,
      "inheritRestriction": "None",
      "type": "PASSIVE_A"
    },
    {
      "name": "Spd Res 1",
      "effect": "Grants Spd/Res+1.",
      "spCost": 80,
      "inheritRestriction": "None",
      "type": "PASSIVE_A"
    },
    {
      "name": "Speed +3",
      "effect": "Grants Spd+3.",
      "spCost": 120,
      "inheritRestriction": "None",
      "type": "PASSIVE_A"
    },
    {
      "name": "Speed +2",
      "effect": "Grants Spd+2.",
      "spCost": 60,
      "inheritRestriction": "None",
      "type": "PASSIVE_A"
    },
    {
      "name": "Fortress Def 1",
      "effect": "Grants Def+3. Inflicts Atk-3.",
      "spCost": 40,
      "inheritRestriction": "None",
      "type": "PASSIVE_A"
    },
    {
      "name": "Fortress Def 2",
      "effect": "Grants Def+4. Inflicts Atk-3.",
      "spCost": 80,
      "inheritRestriction": "None",
      "type": "PASSIVE_A"
    },
    {
      "name": "Fortress Def 3",
      "effect": "Grants Def+5. Inflicts Atk-3.",
      "spCost": 160,
      "inheritRestriction": "None",
      "type": "PASSIVE_A"
    },
    {
      "name": "Fortress Res 1",
      "effect": "Grants Res+3. Inflicts Atk-3.",
      "spCost": 40,
      "inheritRestriction": "None",
      "type": "PASSIVE_A"
    },
    {
      "name": "Fortress Res 2",
      "effect": "Grants Res+4. Inflicts Atk-3.",
      "spCost": 80,
      "inheritRestriction": "None",
      "type": "PASSIVE_A"
    },
    {
      "name": "Fortress Res 3",
      "effect": "Grants Res+5. Inflicts Atk-3.",
      "spCost": 160,
      "inheritRestriction": "None",
      "type": "PASSIVE_A"
    },
    {
      "name": "Fury 1",
      "effect": "Grants Atk/Spd/Def/Res+1. Unit takes 2 damage after combat.",
      "spCost": 50,
      "inheritRestriction": "Excludes Staff Users",
      "type": "PASSIVE_A"
    },
    {
      "name": "Fury 2",
      "effect": "Grants Atk/Spd/Def/Res+2. Unit takes 4 damage after combat.",
      "spCost": 100,
      "inheritRestriction": "Excludes Staff Users",
      "type": "PASSIVE_A"
    },
    {
      "name": "Fury 3",
      "effect": "Grants Atk/Spd/Def/Res+3. Unit takes 6 damage after combat.",
      "spCost": 200,
      "inheritRestriction": "Excludes Staff Users",
      "type": "PASSIVE_A"
    },
    {
      "name": "Speed +1",
      "effect": "Grants Spd+1.",
      "spCost": 30,
      "inheritRestriction": "None",
      "type": "PASSIVE_A"
    },
    {
      "name": "Spd Def 2",
      "effect": "Grants Spd/Def+2.",
      "spCost": 160,
      "inheritRestriction": "None",
      "type": "PASSIVE_A"
    },
    {
      "name": "Spd Def 1",
      "effect": "Grants Spd/Def+1.",
      "spCost": 80,
      "inheritRestriction": "None",
      "type": "PASSIVE_A"
    },
    {
      "name": "Grani's Shield",
      "effect": "Neutralizes \"effective against\" bonuses.",
      "spCost": 200,
      "inheritRestriction": "Cavalry Only",
      "type": "PASSIVE_A"
    },
    {
      "name": "HP Def 1",
      "effect": "Grants HP+3, Def+1.",
      "spCost": 100,
      "inheritRestriction": "None",
      "type": "PASSIVE_A"
    },
    {
      "name": "HP Def 2",
      "effect": "Grants HP+4, Def+2.",
      "spCost": 200,
      "inheritRestriction": "None",
      "type": "PASSIVE_A"
    },
    {
      "name": "HP +3",
      "effect": "Grants +3 to max HP.",
      "spCost": 40,
      "inheritRestriction": "None",
      "type": "PASSIVE_A"
    },
    {
      "name": "HP +4",
      "effect": "Grants +4 to max HP.",
      "spCost": 80,
      "inheritRestriction": "None",
      "type": "PASSIVE_A"
    },
    {
      "name": "HP +5",
      "effect": "Grants +5 to max HP.",
      "spCost": 160,
      "inheritRestriction": "None",
      "type": "PASSIVE_A"
    },
    {
      "name": "HP Res 1",
      "effect": "Grants HP+3, Res+1.",
      "spCost": 100,
      "inheritRestriction": "None",
      "type": "PASSIVE_A"
    },
    {
      "name": "HP Res 2",
      "effect": "Grants HP+4, Res+2.",
      "spCost": 200,
      "inheritRestriction": "None",
      "type": "PASSIVE_A"
    },
    {
      "name": "HP Spd 1",
      "effect": "Grants HP+3, Spd+1.",
      "spCost": 100,
      "inheritRestriction": "None",
      "type": "PASSIVE_A"
    },
    {
      "name": "HP Spd 2",
      "effect": "Grants HP+4, Spd+2.",
      "spCost": 200,
      "inheritRestriction": "None",
      "type": "PASSIVE_A"
    },
    {
      "name": "Heavy Blade 2",
      "effect": "If unit's Atk - foe's Atk ≥ 3, unit gains Special cooldown charge +1 per attack. (If using other similar skill, only highest value applied.)",
      "spCost": 120,
      "inheritRestriction": "Excludes Staff Users",
      "type": "PASSIVE_A"
    },
    {
      "name": "Heavy Blade 3",
      "effect": "If unit's Atk - foe's Atk ≥ 1, unit gains Special cooldown charge +1 per attack. (If using other similar skill, only highest value applied.)",
      "spCost": 240,
      "inheritRestriction": "Excludes Staff Users",
      "type": "PASSIVE_A"
    },
    {
      "name": "Resistance +3",
      "effect": "Grants Res+3.",
      "spCost": 120,
      "inheritRestriction": "None",
      "type": "PASSIVE_A"
    },
    {
      "name": "Resistance +2",
      "effect": "Grants Res+2.",
      "spCost": 60,
      "inheritRestriction": "None",
      "type": "PASSIVE_A"
    },
    {
      "name": "Resistance +1",
      "effect": "Grants Res+1.",
      "spCost": 30,
      "inheritRestriction": "None",
      "type": "PASSIVE_A"
    },
    {
      "name": "Iote's Shield",
      "effect": "Neutralizes \"effective against\" bonuses.",
      "spCost": 200,
      "inheritRestriction": "Fliers Only",
      "type": "PASSIVE_A"
    },
    {
      "name": "Life and Death 1",
      "effect": "Grants Atk/Spd+3. Inflicts Def/Res-3.",
      "spCost": 50,
      "inheritRestriction": "Excludes Staff Users",
      "type": "PASSIVE_A"
    },
    {
      "name": "Life and Death 2",
      "effect": "Grants Atk/Spd+4. Inflicts Def/Res-4.",
      "spCost": 100,
      "inheritRestriction": "Excludes Staff Users",
      "type": "PASSIVE_A"
    },
    {
      "name": "Life and Death 3",
      "effect": "Grants Atk/Spd+5. Inflicts Def/Res-5.",
      "spCost": 200,
      "inheritRestriction": "Excludes Staff Users",
      "type": "PASSIVE_A"
    },
    {
      "name": "Mirror Strike 1",
      "effect": "Grants Atk/Res+2 during combat if unit initiates combat.",
      "spCost": 120,
      "inheritRestriction": "Excludes Staff Users",
      "type": "PASSIVE_A"
    },
    {
      "name": "Mirror Strike 2",
      "effect": "Grants Atk/Res+4 during combat if unit initiates combat.",
      "spCost": 240,
      "inheritRestriction": "Excludes Staff Users",
      "type": "PASSIVE_A"
    },
    {
      "name": "Daggerbreaker 1",
      "effect": "If unit's HP ≥ 90% in combat against a dagger user, unit makes a follow-up attack and foe cannot.",
      "spCost": 50,
      "inheritRestriction": "None",
      "type": "PASSIVE_B"
    },
    {
      "name": "Daggerbreaker 2",
      "effect": "If unit's HP ≥ 70% in combat against a dagger user, unit makes a follow-up attack and foe cannot.",
      "spCost": 100,
      "inheritRestriction": "None",
      "type": "PASSIVE_B"
    },
    {
      "name": "Daggerbreaker 3",
      "effect": "If unit's HP ≥ 50% in combat against a dagger user, unit makes a follow-up attack and foe cannot.",
      "spCost": 200,
      "inheritRestriction": "None",
      "type": "PASSIVE_B"
    },
    {
      "name": "Blaze Dance 1",
      "effect": "If Sing or Dance is used, target also granted Atk+2.",
      "spCost": 50,
      "inheritRestriction": "Excludes Staff Users",
      "type": "PASSIVE_B"
    },
    {
      "name": "Flier Formation 1",
      "effect": "If unit has 100% HP, unit can move to a space adjacent to a flier ally within 2 spaces.",
      "spCost": 60,
      "inheritRestriction": "Fliers Only",
      "type": "PASSIVE_B"
    },
    {
      "name": "Flier Formation 2",
      "effect": "If unit has ≥ 50% HP, unit can move to a space adjacent to a flier ally within 2 spaces.",
      "spCost": 120,
      "inheritRestriction": "Fliers Only",
      "type": "PASSIVE_B"
    },
    {
      "name": "Flier Formation 3",
      "effect": "Unit can move to a space adjacent to a flier ally within 2 spaces.",
      "spCost": 240,
      "inheritRestriction": "Fliers Only",
      "type": "PASSIVE_B"
    },
    {
      "name": "Follow-Up Ring",
      "effect": "Unit makes a guaranteed follow-up attack when unit's HP ≥ 50% at start of combat. (Skill cannot be inherited.)",
      "spCost": 200,
      "inheritRestriction": "None",
      "type": "PASSIVE_B"
    },
    {
      "name": "Dazzling Staff 1",
      "effect": "If unit has 100% HP at the start of combat, the enemy cannot counterattack.",
      "spCost": 60,
      "inheritRestriction": "Staff Users Only",
      "type": "PASSIVE_B"
    },
    {
      "name": "Dazzling Staff 2",
      "effect": "If unit has ≥ 50% HP at the start of combat, the enemy cannot counterattack.",
      "spCost": 120,
      "inheritRestriction": "Staff Users Only",
      "type": "PASSIVE_B"
    },
    {
      "name": "Dazzling Staff 3",
      "effect": "The enemy cannot counterattack.",
      "spCost": 240,
      "inheritRestriction": "Staff Users Only",
      "type": "PASSIVE_B"
    },
    {
      "name": "Blaze Dance 2",
      "effect": "If Sing or Dance is used, target also granted Atk+3.",
      "spCost": 100,
      "inheritRestriction": "Excludes Staff Users",
      "type": "PASSIVE_B"
    },
    {
      "name": "Blaze Dance 3",
      "effect": "If Sing or Dance is used, target also granted Atk+4.",
      "spCost": 200,
      "inheritRestriction": "Excludes Staff Users",
      "type": "PASSIVE_B"
    },
    {
      "name": "Watersweep 1",
      "effect": "If unit initiates attack, no follow-up occurs. Against foe with magic, staff or dragonstone, if unit’s Spd - foe’s Spd ≥ 5, foe can’t counterattack.",
      "spCost": 60,
      "inheritRestriction": "Excludes Staff Users",
      "type": "PASSIVE_B"
    },
    {
      "name": "Vantage 1",
      "effect": "Unit counterattacks first when attacked at HP ≤ 25%.",
      "spCost": 50,
      "inheritRestriction": "None",
      "type": "PASSIVE_B"
    },
    {
      "name": "Wings of Mercy 3",
      "effect": "Enables unit to warp adjacent to any ally with HP ≤ 50%.",
      "spCost": 240,
      "inheritRestriction": "None",
      "type": "PASSIVE_B"
    },
    {
      "name": "Wings of Mercy 2",
      "effect": "Enables unit to warp adjacent to any ally with HP ≤ 40%.",
      "spCost": 120,
      "inheritRestriction": "None",
      "type": "PASSIVE_B"
    },
    {
      "name": "Wrath 2",
      "effect": "If unit's HP ≤ 50%, Special cooldown count-1 at start of turn if Special triggers by attacking. If Special triggers, +10 damage from Special.",
      "spCost": 120,
      "inheritRestriction": "Infantry and Armored Only Melee Weapon Users Only",
      "type": "PASSIVE_B"
    },
    {
      "name": "Wary Fighter 3",
      "effect": "Prevents follow-up attacks in combat from unit and foes if unit's HP ≥ 50%.",
      "spCost": 240,
      "inheritRestriction": "Armored Only",
      "type": "PASSIVE_B"
    },
    {
      "name": "Wary Fighter 2",
      "effect": "Prevents follow-up attacks in combat from unit and foes if unit's HP ≥ 70%.",
      "spCost": 120,
      "inheritRestriction": "Armored Only",
      "type": "PASSIVE_B"
    },
    {
      "name": "B Tomebreaker 1",
      "effect": "If unit's HP ≥ 90% in combat against a blue tome user, unit makes a follow-up attack and foe cannot.",
      "spCost": 50,
      "inheritRestriction": "Excludes Red Weapon Users",
      "type": "PASSIVE_B"
    },
    {
      "name": "B Tomebreaker 2",
      "effect": "If unit's HP ≥ 70% in combat against a blue tome user, unit makes a follow-up attack and foe cannot.",
      "spCost": 100,
      "inheritRestriction": "Excludes Red Weapon Users",
      "type": "PASSIVE_B"
    },
    {
      "name": "B Tomebreaker 3",
      "effect": "If unit's HP ≥ 50% in combat against a blue tome user, unit makes a follow-up attack and foe cannot.",
      "spCost": 200,
      "inheritRestriction": "Excludes Red Weapon Users",
      "type": "PASSIVE_B"
    },
    {
      "name": "Wary Fighter 1",
      "effect": "Prevents follow-up attacks in combat from unit and foes if unit's HP ≥ 90%.",
      "spCost": 60,
      "inheritRestriction": "Armored Only",
      "type": "PASSIVE_B"
    },
    {
      "name": "Wrathful Staff 2",
      "effect": "If unit has ≥ 50% HP at the start of combat, damage from their staff will be calculated the same as other weapons.",
      "spCost": 120,
      "inheritRestriction": "Staff Users Only",
      "type": "PASSIVE_B"
    },
    {
      "name": "Wrathful Staff 3",
      "effect": "Damage from unit's staff will be calculated the same as other weapons.",
      "spCost": 240,
      "inheritRestriction": "Staff Users Only",
      "type": "PASSIVE_B"
    },
    {
      "name": "Bowbreaker 1",
      "effect": "If unit's HP ≥ 90% in combat against a bow user, unit makes a follow-up attack and foe cannot.",
      "spCost": 50,
      "inheritRestriction": "Excludes Fliers",
      "type": "PASSIVE_B"
    },
    {
      "name": "Bowbreaker 2",
      "effect": "If unit's HP ≥ 70% in combat against a bow user, unit makes a follow-up attack and foe cannot.",
      "spCost": 100,
      "inheritRestriction": "Excludes Fliers",
      "type": "PASSIVE_B"
    },
    {
      "name": "Bowbreaker 3",
      "effect": "If unit's HP ≥ 50% in combat against a bow user, unit makes a follow-up attack and foe cannot.",
      "spCost": 200,
      "inheritRestriction": "Excludes Fliers",
      "type": "PASSIVE_B"
    },
    {
      "name": "Wings of Mercy 1",
      "effect": "Enables unit to warp adjacent to any ally with HP ≤ 30%.",
      "spCost": 60,
      "inheritRestriction": "None",
      "type": "PASSIVE_B"
    },
    {
      "name": "Windsweep 3",
      "effect": "If unit initiates attack, no follow-up occurs. Against foe with sword, lance, axe, bow, or dagger, if unit’s Spd - foe’s Spd ≥ 1, foe can’t counterattack.",
      "spCost": 240,
      "inheritRestriction": "Excludes Staff Users",
      "type": "PASSIVE_B"
    },
    {
      "name": "Windsweep 2",
      "effect": "If unit initiates attack, no follow-up occurs. Against foe with sword, lance, axe, bow, or dagger, if unit’s Spd - foe’s Spd ≥ 3, foe can’t counterattack.",
      "spCost": 120,
      "inheritRestriction": "Excludes Staff Users",
      "type": "PASSIVE_B"
    },
    {
      "name": "Brash Assault 1",
      "effect": "Unit automatically makes a follow-up when at HP ≤ 30% and attacking a foe that can counter.",
      "spCost": 50,
      "inheritRestriction": "None",
      "type": "PASSIVE_B"
    },
    {
      "name": "Gale Dance 1",
      "effect": "If Sing or Dance is used, target also granted Spd+2.",
      "spCost": 50,
      "inheritRestriction": "Excludes Staff Users",
      "type": "PASSIVE_B"
    },
    {
      "name": "Gale Dance 2",
      "effect": "If Sing or Dance is used, target also granted Spd+3.",
      "spCost": 100,
      "inheritRestriction": "Excludes Staff Users",
      "type": "PASSIVE_B"
    },
    {
      "name": "Gale Dance 3",
      "effect": "If Sing or Dance is used, target also granted Spd+4.",
      "spCost": 200,
      "inheritRestriction": "Excludes Staff Users",
      "type": "PASSIVE_B"
    },
    {
      "name": "Geyser Dance 1",
      "effect": "If Sing or Dance is used, target also granted Def/Res+3.",
      "spCost": 120,
      "inheritRestriction": "Excludes Staff Users",
      "type": "PASSIVE_B"
    },
    {
      "name": "Geyser Dance 2",
      "effect": "If Sing or Dance is used, target also granted Def/Res+4.",
      "spCost": 240,
      "inheritRestriction": "Excludes Staff Users",
      "type": "PASSIVE_B"
    },
    {
      "name": "Desperation 1",
      "effect": "If unit initiates combat with HP ≤ 25%, follow-up attacks occur immediately after unit's attack.",
      "spCost": 50,
      "inheritRestriction": "None",
      "type": "PASSIVE_B"
    },
    {
      "name": "Desperation 2",
      "effect": "If unit initiates combat with HP ≤ 50%, follow-up attacks occur immediately after unit's attack.",
      "spCost": 100,
      "inheritRestriction": "None",
      "type": "PASSIVE_B"
    },
    {
      "name": "Desperation 3",
      "effect": "If unit initiates combat with HP ≤ 75%, follow-up attacks occur immediately after unit's attack.",
      "spCost": 200,
      "inheritRestriction": "None",
      "type": "PASSIVE_B"
    },
    {
      "name": "Brash Assault 2",
      "effect": "Unit automatically makes a follow-up when at HP ≤ 40% and attacking a foe that can counter.",
      "spCost": 100,
      "inheritRestriction": "None",
      "type": "PASSIVE_B"
    },
    {
      "name": "Shield Pulse 3",
      "effect": "If unit's Special triggers based on a foe's attack, Special cooldown count-2 at start of turn 1. Unit takes 5 less damage when Special triggers.",
      "spCost": 240,
      "inheritRestriction": "Infantry and Armored Only Melee Weapon Users Only",
      "type": "PASSIVE_B"
    },
    {
  "name": "Shield Pulse 2",
  "effect": "If unit's Special triggers based on a foe's attack, Special cooldown count-1 at start of turn 1. Unit takes 5 less damage when Special triggers.",
  "spCost": 120,
  "inheritRestriction": "Infantry and Armored Only Melee Weapon Users Only",
  "type": "PASSIVE_B"
},
{
  "name": "Shield Pulse 1",
  "effect": "If unit's Special triggers based on a foe's attack, Special cooldown count-1 at start of turn 1.",
  "spCost": 60,
  "inheritRestriction": "Infantry and Armored Only Melee Weapon Users Only",
  "type": "PASSIVE_B"
},
{
  "name": "Seal Spd 3",
  "effect": "After combat, foe suffers Spd-7 through its next action.",
  "spCost": 160,
  "inheritRestriction": "Excludes Staff Users",
  "type": "PASSIVE_B"
},
{
  "name": "Seal Spd 2",
  "effect": "After combat, foe suffers Spd-5 through its next action.",
  "spCost": 80,
  "inheritRestriction": "Excludes Staff Users",
  "type": "PASSIVE_B"
},
{
  "name": "Brash Assault 3",
  "effect": "Unit automatically makes a follow-up when at HP ≤ 50% and attacking a foe that can counter.",
  "spCost": 200,
  "inheritRestriction": "None",
  "type": "PASSIVE_B"
},
{
  "name": "Windsweep 1",
  "effect": "If unit initiates attack, no follow-up occurs. Against foe with sword, lance, axe, bow, or dagger, if unit’s Spd - foe’s Spd ≥ 5, foe can’t counterattack.",
  "spCost": 60,
  "inheritRestriction": "Excludes Staff Users",
  "type": "PASSIVE_B"
},
{
  "name": "Wrathful Staff 1",
  "effect": "If unit has 100% HP at the start of combat, damage from their staff will be calculated the same as other weapons.",
  "spCost": 60,
  "inheritRestriction": "Staff Users Only",
  "type": "PASSIVE_B"
},
{
  "name": "Seal Spd 1",
  "effect": "After combat, foe suffers Spd-3 through its next action.",
  "spCost": 40,
  "inheritRestriction": "Excludes Staff Users",
  "type": "PASSIVE_B"
},
{
  "name": "Seal Res 3",
  "effect": "After combat, foe suffers Res-7 through its next action.",
  "spCost": 160,
  "inheritRestriction": "Excludes Staff Users",
  "type": "PASSIVE_B"
},
{
  "name": "Seal Res 2",
  "effect": "After combat, foe suffers Res-5 through its next action.",
  "spCost": 80,
  "inheritRestriction": "Excludes Staff Users",
  "type": "PASSIVE_B"
},
{
  "name": "G Tomebreaker 1",
  "effect": "If unit's HP ≥ 90% in combat against a green tome user, unit makes a follow-up attack and foe cannot.",
  "spCost": 50,
  "inheritRestriction": "Excludes Blue Weapon Users",
  "type": "PASSIVE_B"
},
{
  "name": "G Tomebreaker 2",
  "effect": "If unit's HP ≥ 70% in combat against a green tome user, unit makes a follow-up attack and foe cannot.",
  "spCost": 100,
  "inheritRestriction": "Excludes Blue Weapon Users",
  "type": "PASSIVE_B"
},
{
  "name": "G Tomebreaker 3",
  "effect": "If unit's HP ≥ 50% in combat against a green tome user, unit makes a follow-up attack and foe cannot.",
  "spCost": 200,
  "inheritRestriction": "Excludes Blue Weapon Users",
  "type": "PASSIVE_B"
},
{
  "name": "Guard 1",
  "effect": "If unit's HP is 100% at start of combat, enemy is inflicted with Special cooldown charge-1. (If using similar skill, only highest value applied.)",
  "spCost": 50,
  "inheritRestriction": "None",
  "type": "PASSIVE_B"
},
{
  "name": "Guard 2",
  "effect": "If unit's HP is ≥ 90% at start of combat, enemy is inflicted with Special cooldown charge-1. (If using similar skill, only highest value applied.)",
  "spCost": 100,
  "inheritRestriction": "None",
  "type": "PASSIVE_B"
},
{
  "name": "Guard 3",
  "effect": "If unit's HP is ≥ 80% at start of combat, enemy is inflicted with Special cooldown charge-1. (If using similar skill, only highest value applied.)",
  "spCost": 200,
  "inheritRestriction": "None",
  "type": "PASSIVE_B"
},
{
  "name": "Seal Res 1",
  "effect": "After combat, foe suffers Res-3 through its next action.",
  "spCost": 40,
  "inheritRestriction": "Excludes Staff Users",
  "type": "PASSIVE_B"
},
{
  "name": "Seal Def 3",
  "effect": "After combat, foe suffers Def-7 through its next action.",
  "spCost": 160,
  "inheritRestriction": "Excludes Staff Users",
  "type": "PASSIVE_B"
},
{
  "name": "Seal Def 2",
  "effect": "After combat, foe suffers Def-5 through its next action.",
  "spCost": 80,
  "inheritRestriction": "Excludes Staff Users",
  "type": "PASSIVE_B"
},
{
  "name": "Wrath 3",
  "effect": "If unit's HP ≤ 75%, Special cooldown count-1 at start of turn if Special triggers by attacking. If Special triggers, +10 damage from Special.",
  "spCost": 240,
  "inheritRestriction": "Infantry and Armored Only Melee Weapon Users Only",
  "type": "PASSIVE_B"
},
{
  "name": "Cancel Affinity 1",
  "effect": "Any weapon triangle affinity granted by unit's skills is negated. Also negates any weapon triangle affinity granted by foe's skills.",
  "spCost": 50,
  "inheritRestriction": "Excludes Tome and Staff Users",
  "type": "PASSIVE_B"
},
{
  "name": "Drag Back",
  "effect": "If unit initiates attack, the unit moves 1 space away after combat. Foe moves into unit's previous space.",
  "spCost": 150,
  "inheritRestriction": "Melee Weapon Users Only",
  "type": "PASSIVE_B"
},
{
  "name": "Torrent Dance 1",
  "effect": "If Sing or Dance is used, target also granted Res+3.",
  "spCost": 50,
  "inheritRestriction": "Excludes Staff Users",
  "type": "PASSIVE_B"
},
{
  "name": "Swordbreaker 3",
  "effect": "If unit's HP ≥ 50% in combat against a sword user, unit makes a follow-up attack and foe cannot.",
  "spCost": 200,
  "inheritRestriction": "Excludes Green Weapon Users",
  "type": "PASSIVE_B"
},
{
  "name": "Swordbreaker 2",
  "effect": "If unit's HP ≥ 70% in combat against a sword user, unit makes a follow-up attack and foe cannot.",
  "spCost": 100,
  "inheritRestriction": "Excludes Green Weapon Users",
  "type": "PASSIVE_B"
},
{
  "name": "Swordbreaker 1",
  "effect": "If unit's HP ≥ 90% in combat against a sword user, unit makes a follow-up attack and foe cannot.",
  "spCost": 50,
  "inheritRestriction": "Excludes Green Weapon Users",
  "type": "PASSIVE_B"
},
{
  "name": "Cancel Affinity 2",
  "effect": "Any weapon triangle affinity granted by unit's skills is negated. If affinity disadvantage exists, weapon triangle affinity granted by foe's skills is negated.",
  "spCost": 100,
  "inheritRestriction": "Excludes Tome and Staff Users",
  "type": "PASSIVE_B"
},
{
  "name": "Cancel Affinity 3",
  "effect": "Any weapon triangle affinity granted by unit's skills is negated. If affinity disadvantage exists, weapon triangle affinity granted by foe's skills is reversed.",
  "spCost": 200,
  "inheritRestriction": "Excludes Tome and Staff Users",
  "type": "PASSIVE_B"
},
{
  "name": "Wrath 1",
  "effect": "If unit's HP ≤ 25%, Special cooldown count-1 at start of turn if Special triggers by attacking. If Special triggers, +10 damage from Special.",
  "spCost": 60,
  "inheritRestriction": "Infantry and Armored Only Melee Weapon Users Only",
  "type": "PASSIVE_B"
},
{
  "name": "Seal Def 1",
  "effect": "After combat, foe suffers Def-3 through its next action.",
  "spCost": 40,
  "inheritRestriction": "Excludes Staff Users",
  "type": "PASSIVE_B"
},
{
  "name": "Watersweep 3",
  "effect": "If unit initiates attack, no follow-up occurs. Against foe with magic, staff or dragonstone, if unit’s Spd - foe’s Spd ≥ 1, foe can’t counterattack.",
  "spCost": 240,
  "inheritRestriction": "Excludes Staff Users",
  "type": "PASSIVE_B"
},
{
  "name": "Watersweep 2",
  "effect": "If unit initiates attack, no follow-up occurs. Against foe with magic, staff or dragonstone, if unit’s Spd - foe’s Spd ≥ 3, foe can’t counterattack.",
  "spCost": 120,
  "inheritRestriction": "Excludes Staff Users",
  "type": "PASSIVE_B"
},
{
  "name": "Hit and Run",
  "effect": "If unit initiates attack, unit retreats 1 space after battle.",
  "spCost": 150,
  "inheritRestriction": "Melee Weapon Users Only",
  "type": "PASSIVE_B"
},
{
  "name": "Seal Atk Spd 2",
  "effect": "After combat, inflicts Atk/Spd-5 on foe through its next action.",
  "spCost": 200,
  "inheritRestriction": "Excludes Staff Users",
  "type": "PASSIVE_B"
},
{
  "name": "Seal Atk Spd 1",
  "effect": "After combat, inflicts Atk/Spd-3 on foe through its next action.",
  "spCost": 100,
  "inheritRestriction": "Excludes Staff Users",
  "type": "PASSIVE_B"
},
{
  "name": "Seal Atk Def 2",
  "effect": "After combat, inflicts Atk/Def-5 on foe through its next action.",
  "spCost": 200,
  "inheritRestriction": "Excludes Staff Users",
  "type": "PASSIVE_B"
},
{
  "name": "Seal Atk Def 1",
  "effect": "After combat, inflicts Atk/Def-3 on foe through its next action.",
  "spCost": 100,
  "inheritRestriction": "Excludes Staff Users",
  "type": "PASSIVE_B"
},
{
  "name": "Seal Atk 3",
  "effect": "After combat, foe suffers Atk-7 through its next action.",
  "spCost": 160,
  "inheritRestriction": "Excludes Staff Users",
  "type": "PASSIVE_B"
},
{
  "name": "Seal Atk 2",
  "effect": "After combat, foe suffers Atk-5 through its next action.",
  "spCost": 80,
  "inheritRestriction": "Excludes Staff Users",
  "type": "PASSIVE_B"
},
{
  "name": "Seal Atk 1",
  "effect": "After combat, foe suffers Atk-3 through its next action.",
  "spCost": 40,
  "inheritRestriction": "Excludes Staff Users",
  "type": "PASSIVE_B"
},
{
  "name": "Sacae's Blessing",
  "effect": "If foe has sword, lance, or axe, foe cannot counterattack. (Skill cannot be inherited.)",
  "spCost": 300,
  "inheritRestriction": "None",
  "type": "PASSIVE_B"
},
{
  "name": "Axebreaker 1",
  "effect": "If unit's HP ≥ 90% in combat against an axe user, unit makes a follow-up attack and foe cannot.",
  "spCost": 50,
  "inheritRestriction": "Excludes Blue Weapon Users",
  "type": "PASSIVE_B"
},
{
  "name": "Axebreaker 2",
  "effect": "If unit's HP ≥ 70% in combat against an axe user, unit makes a follow-up attack and foe cannot.",
  "spCost": 100,
  "inheritRestriction": "Excludes Blue Weapon Users",
  "type": "PASSIVE_B"
},
{
  "name": "Axebreaker 3",
  "effect": "If unit's HP ≥ 50% in combat against an axe user, unit makes a follow-up attack and foe cannot.",
  "spCost": 200,
  "inheritRestriction": "Excludes Blue Weapon Users",
  "type": "PASSIVE_B"
},
{
  "name": "Renewal 3",
  "effect": "At the start of every second turn, restores 10 HP.",
  "spCost": 240,
  "inheritRestriction": "None",
  "type": "PASSIVE_B"
},
{
  "name": "Renewal 2",
  "effect": "At the start of every third turn, restores 10 HP.",
  "spCost": 120,
  "inheritRestriction": "None",
  "type": "PASSIVE_B"
},
{
  "name": "Renewal 1",
  "effect": "At the start of every fourth turn, restores 10 HP.",
  "spCost": 60,
  "inheritRestriction": "None",
  "type": "PASSIVE_B"
},
{
  "name": "Crusader's Ward",
  "effect": "If unit receives consecutive attack from a foe 2 spaces away, damage from second attack onward reduced by 80%. (Skill cannot be inherited.)",
  "spCost": 300,
  "inheritRestriction": "None",
  "type": "PASSIVE_B"
},
{
  "name": "Knock Back",
  "effect": "If unit initiates attack, foe is moved 1 space away after combat.",
  "spCost": 150,
  "inheritRestriction": "Melee Weapon Users Only",
  "type": "PASSIVE_B"
},
{
  "name": "R Tomebreaker 3",
  "effect": "If unit's HP ≥ 50% in combat against a red tome user, unit makes a follow-up attack and foe cannot.",
  "spCost": 200,
  "inheritRestriction": "Excludes Green Weapon Users",
  "type": "PASSIVE_B"
},
{
  "name": "R Tomebreaker 2",
  "effect": "If unit's HP ≥ 70% in combat against a red tome user, unit makes a follow-up attack and foe cannot.",
  "spCost": 100,
  "inheritRestriction": "Excludes Green Weapon Users",
  "type": "PASSIVE_B"
},
{
  "name": "R Tomebreaker 1",
  "effect": "If unit's HP ≥ 90% in combat against a red tome user, unit makes a follow-up attack and foe cannot.",
  "spCost": 50,
  "inheritRestriction": "Excludes Green Weapon Users",
  "type": "PASSIVE_B"
},
{
  "name": "Lancebreaker 1",
  "effect": "If unit's HP ≥ 90% in combat against a lance user, unit makes a follow-up attack and foe cannot.",
  "spCost": 50,
  "inheritRestriction": "Excludes Red Weapon Users",
  "type": "PASSIVE_B"
},
{
  "name": "Lancebreaker 2",
  "effect": "If unit's HP ≥ 70% in combat against a lance user, unit makes a follow-up attack and foe cannot.",
  "spCost": 100,
  "inheritRestriction": "Excludes Red Weapon Users",
  "type": "PASSIVE_B"
},
{
  "name": "Lancebreaker 3",
  "effect": "If unit's HP ≥ 50% in combat against a lance user, unit makes a follow-up attack and foe cannot.",
  "spCost": 200,
  "inheritRestriction": "Excludes Red Weapon Users",
  "type": "PASSIVE_B"
},
{
  "name": "Escape Route 1",
  "effect": "Enables unit whose own HP is ≤ 30% to warp adjacent to any ally.",
  "spCost": 60,
  "inheritRestriction": "None",
  "type": "PASSIVE_B"
},
{
  "name": "Escape Route 2",
  "effect": "Enables unit whose own HP is ≤ 40% to warp adjacent to any ally.",
  "spCost": 120,
  "inheritRestriction": "None",
  "type": "PASSIVE_B"
},
{
  "name": "Escape Route 3",
  "effect": "Enables unit whose own HP is ≤ 50% to warp adjacent to any ally.",
  "spCost": 240,
  "inheritRestriction": "None",
  "type": "PASSIVE_B"
},
{
  "name": "Live for Bounty",
  "effect": "If unit survives, get 1.5x shards/crystals from a Training Tower map. (If similar skill effects also used, only highest multiplier applied.)",
  "spCost": 100,
  "inheritRestriction": "None",
  "type": "PASSIVE_B"
},
{
  "name": "Live for Honor",
  "effect": "If unit survives, get 1.5x normal badges from a Training Tower map. (If similar skill effects also used, only highest multiplier applied.)",
  "spCost": 100,
  "inheritRestriction": "None",
  "type": "PASSIVE_B"
},
{
  "name": "Live to Serve 1",
  "effect": "When healing allies with a staff, unit also recovers 50% of the HP restored.",
  "spCost": 40,
  "inheritRestriction": "Staff Users Only",
  "type": "PASSIVE_B"
},
{
  "name": "Live to Serve 2",
  "effect": "When healing allies with a staff, unit also recovers 75% of the HP restored.",
  "spCost": 80,
  "inheritRestriction": "Staff Users Only",
  "type": "PASSIVE_B"
},
{
  "name": "Live to Serve 3",
  "effect": "When healing allies with a staff, unit also recovers the same amount.",
  "spCost": 160,
  "inheritRestriction": "Staff Users Only",
  "type": "PASSIVE_B"
},
{
  "name": "Lunge",
  "effect": "If unit initiates attack, after combat, unit and targeted foe swap places.",
  "spCost": 150,
  "inheritRestriction": "Melee Weapon Users Only",
  "type": "PASSIVE_B"
},
{
  "name": "Beorc's Blessing",
  "effect": "If foe is cavalry or flier type, foe's bonuses (from skills like Fortify, Rally, etc.) are nullified during combat. (Skill cannot be inherited.)",
  "spCost": 300,
  "inheritRestriction": "None",
  "type": "PASSIVE_B"
},
{
  "name": "Vantage 3",
  "effect": "Unit counterattacks first when attacked at HP ≤ 75%.",
  "spCost": 200,
  "inheritRestriction": "None",
  "type": "PASSIVE_B"
},
{
  "name": "Vantage 2",
  "effect": "Unit counterattacks first when attacked at HP ≤ 50%.",
  "spCost": 100,
  "inheritRestriction": "None",
  "type": "PASSIVE_B"
},
{
  "name": "Obstruct 1",
  "effect": "Prevents foes from moving through adjacent spaces while this unit's HP ≥ 90%. (No effect on foes with a Pass skill.)",
  "spCost": 50,
  "inheritRestriction": "None",
  "type": "PASSIVE_B"
},
{
  "name": "Obstruct 2",
  "effect": "Prevents foes from moving through adjacent spaces while this unit's HP ≥ 70%. (No effect on foes with a Pass skill.)",
  "spCost": 100,
  "inheritRestriction": "None",
  "type": "PASSIVE_B"
},
{
  "name": "Obstruct 3",
  "effect": "Prevents foes from moving through adjacent spaces while this unit's HP ≥ 50%. (No effect on foes with a Pass skill.)",
  "spCost": 200,
  "inheritRestriction": "None",
  "type": "PASSIVE_B"
},
{
  "name": "Recover Ring",
  "effect": "Restores 10 HP at the start of each turn. (Skill cannot be inherited.)",
  "spCost": 200,
  "inheritRestriction": "None",
  "type": "PASSIVE_B"
},
{
  "name": "Pass 1",
  "effect": "Units can pass through foes if its own HP ≥ 75%.",
  "spCost": 50,
  "inheritRestriction": "None",
  "type": "PASSIVE_B"
},
{
  "name": "Pass 2",
  "effect": "Units can pass through foes if its own HP ≥ 50%.",
  "spCost": 100,
  "inheritRestriction": "None",
  "type": "PASSIVE_B"
},
{
  "name": "Pass 3",
  "effect": "Units can pass through foes if its own HP ≥ 25%.",
  "spCost": 200,
  "inheritRestriction": "None",
  "type": "PASSIVE_B"
},
{
  "name": "Poison Strike 1",
  "effect": "Inflicts 4 damage to foe after any combat this unit initiates.",
  "spCost": 60,
  "inheritRestriction": "Excludes Staff Users",
  "type": "PASSIVE_B"
},
{
  "name": "Poison Strike 2",
  "effect": "Inflicts 7 damage to foe after any combat this unit initiates.",
  "spCost": 120,
  "inheritRestriction": "Excludes Staff Users",
  "type": "PASSIVE_B"
},
{
  "name": "Poison Strike 3",
  "effect": "Inflicts 10 damage to foe after any combat this unit initiates.",
  "spCost": 240,
  "inheritRestriction": "Excludes Staff Users",
  "type": "PASSIVE_B"
},
{
  "name": "Quick Riposte 1",
  "effect": "Unit automatically makes a follow-up attack if attacked at HP ≥ 90%.",
  "spCost": 60,
  "inheritRestriction": "None",
  "type": "PASSIVE_B"
},
{
  "name": "Quick Riposte 2",
  "effect": "Unit automatically makes a follow-up attack if attacked at HP ≥ 80%.",
  "spCost": 120,
  "inheritRestriction": "None",
  "type": "PASSIVE_B"
},
{
  "name": "Quick Riposte 3",
  "effect": "Unit automatically makes a follow-up attack if attacked at HP ≥ 70%.",
  "spCost": 240,
  "inheritRestriction": "None",
  "type": "PASSIVE_B"
}
]
