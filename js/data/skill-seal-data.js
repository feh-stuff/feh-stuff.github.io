module.exports = [
  {
    name: "Aerobatics 1",
    icon: "43-8",
    include: [{moveType: "Flying"}],
    effect: "If unit has 100% HP, unit can move to a space adjacent to any infantry, armored, or cavalry ally within 2 spaces."
  },
  {
    name: "Aerobatics 2",
    icon: "43-9",
    include: [{moveType: "Flying"}],
    effect: "If unit has ≥ 50% HP, unit can move to a space adjacent to any infantry, armored, or cavalry ally within 2 spaces."
  },
  {
    name: "Aerobatics 3",
    icon: "43-10",
    include: [{moveType: "Flying"}],
    effect: "Unit can move to a space adjacent to any infantry, armored, or cavalry ally within 2 spaces."
  },
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
    name: "Atk/Def 1",
    icon: "14-5",
    stats: {atk: 1, def: 1},
    effect: "Grants Atk/Def+1."
  },
  {
    name: "Atk/Def 2",
    icon: "14-6",
    stats: {atk: 2, def: 2},
    effect: "Grants Atk/Def+2."
  },
  {
    name: "Atk/Def Bond 1",
    icon: "32-10",
    effect: "Grants Atk/Def+3 to this unit during combat if unit is adjacent to an ally."
  },
  {
    name: "Atk/Def Bond 2",
    icon: "32-11",
    effect: "Grants Atk/Def+4 to this unit during combat if unit is adjacent to an ally."
  },
  {
    name: "Atk/Def Bond 3",
    icon: "32-12",
    effect: "Grants Atk/Def+5 to this unit during combat if unit is adjacent to an ally."
  },
  {
    name: "Atk/Spd 1",
    icon: "26-11",
    stats: {atk: 1, spd: 1},
    effect: "Grants Atk/Spd+1."
  },
  {
    name: "Atk/Spd 2",
    icon: "26-12",
    stats: {atk: 2, spd: 2},
    effect: "Grants Atk/Spd+2."
  },
  {
    name: "Atk/Spd Bond 1",
    icon: "37-0",
    effect: "Grants Atk/Spd+3 to this unit during combat if unit is adjacent to an ally."
  },
  {
    name: "Atk/Spd Bond 2",
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
    name: "Blaze Dance 1",
    icon: "27-8",
    exclude: [{weaponType: "Staff"}],
    effect: "If Sing or Dance is used, target also granted Atk+2."
  },
  {
    name: "Blaze Dance 2",
    icon: "27-9",
    exclude: [{weaponType: "Staff"}],
    effect: "If Sing or Dance is used, target also granted Atk+3."
  },
  {
    name: "Blaze Dance 3",
    icon: "27-10",
    exclude: [{weaponType: "Staff"}],
    effect: "If Sing or Dance is used, target also granted Atk+4."
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
    name: "Brazen Atk/Def 1",
    icon: "33-10",
    effect: "If unit's HP ≤ 80% at the start of combat, grants Atk/Def+3 during combat."
  },
  {
    name: "Brazen Atk/Def 2",
    icon: "33-11",
    effect: "If unit's HP ≤ 80% at the start of combat, grants Atk/Def+5 during combat."
  },
  {
    name: "Brazen Atk/Def 3",
    icon: "33-12",
    effect: "If unit's HP ≤ 80% at the start of combat, grants Atk/Def+7 during combat."
  },
  {
    name: "Brazen Atk/Res 1",
    icon: "45-4",
    effect: "If unit's HP ≤ 80% at the start of combat, grants Atk/Res+3 during combat."
  },
  {
    name: "Brazen Atk/Res 2",
    icon: "45-5",
    effect: "If unit's HP ≤ 80% at the start of combat, grants Atk/Res+5 during combat."
  },
  {
    name: "Brazen Atk/Res 3",
    icon: "45-6",
    effect: "If unit's HP ≤ 80% at the start of combat, grants Atk/Res+7 during combat."
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
    name: "Darting Blow 1",
    icon: "2-2",
    exclude: [{weaponType:"Staff"}],
    effect: "Grants Spd+2 during combat if unit initiates the attack."
  },
  {
    name: "Darting Blow 2",
    icon: "2-3",
    exclude: [{weaponType:"Staff"}],
    prev: ["Darting Blow 1"],
    effect: "Grants Spd+4 during combat if unit initiates the attack."
  },
  {
    name: "Darting Blow 3",
    icon: "2-4",
    exclude: [{weaponType:"Staff"}],
    prev: ["Darting Blow 2"],
    last: true,
    effect: "Grants Spd+6 during combat if unit initiates the attack."
  },
  {
    name: "Darting Stance 1",
    icon: "39-2",
    exclude: [{weaponType:"Staff"}],
    effect: "Grants Spd+2 during combat when this unit is attacked."
  },
  {
    name: "Darting Stance 2",
    icon: "39-3",
    exclude: [{weaponType:"Staff"}],
    effect: "Grants Spd+4 during combat when this unit is attacked."
  },
  {
    name: "Darting Stance 3",
    icon: "39-4",
    exclude: [{weaponType:"Staff"}],
    effect: "Grants Spd+6 during combat when this unit is attacked."
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
    name: "Def Tactic 1",
    icon: "33-3",
    effect: "At start of turn, grants Def+2 to allies within 2 spaces for 1 turn. Granted only if number of that ally's movement type on current team ≤ 2."
  },
  {
    name: "Def Tactic 2",
    icon: "33-4",
    effect: "At start of turn, grants Def+4 to allies within 2 spaces for 1 turn. Granted only if number of that ally's movement type on current team ≤ 2."
  },
  {
    name: "Def Tactic 3",
    icon: "33-5",
    effect: "At start of turn, grants Def+6 to allies within 2 spaces for 1 turn. Granted only if number of that ally's movement type on current team ≤ 2."
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
    include: [{weaponType:"Sword"}, {weaponType:"Axe"}, {weaponType:"Lance"}, {weaponType:"Breath"},{weaponType: "Beast"}],
    effect: "If unit receives consecutive attacks from a foe using a sword, lance, or axe, damage from second attack onward reduced by 30%."
  },
  {
    name: "Deflect Melee 2",
    icon: "28-12",
    include: [{weaponType:"Sword"}, {weaponType:"Axe"}, {weaponType:"Lance"}, {weaponType:"Breath"},{weaponType: "Beast"}],
    effect: "If unit receives consecutive attacks from a foe using a sword, lance, or axe, damage from second attack onward reduced by 50%."
  },
  {
    name: "Deflect Melee 3",
    icon: "29-0",
    include: [{weaponType:"Sword"}, {weaponType:"Axe"}, {weaponType:"Lance"}, {weaponType:"Breath"},{weaponType: "Beast"}],
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
    name: "Drive Atk 1",
    icon: "22-6",
    effect: "Grants allies within 2 spaces Atk+2 during combat."
  },
  {
    name: "Drive Atk 2",
    icon: "22-7",
    effect: "Grants allies within 2 spaces Atk+3 during combat."
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
    name: "Drive Res 1",
    icon: "28-6",
    effect: "Grants allies within 2 spaces Res+2 during combat."
  },
  {
    name: "Drive Res 2",
    icon: "28-7",
    effect: "Grants allies within 2 spaces Res+3 during combat."
  },
  {
    name: "Drive Spd 1",
    icon: "26-6",
    effect: "Grants allies within 2 spaces Spd+2 during combat."
  },
  {
    name: "Drive Spd 2",
    icon: "26-7",
    effect: "Grants allies within 2 spaces Spd+3 during combat."
  },
  {
    name: "Earth Dance 1",
    icon: "34-12",
    exclude: [{weaponType: "Staff"}],
    effect: "If Sing or Dance is used, target also granted Def+2."
  },
  {
    name: "Earth Dance 2",
    icon: "35-0",
    exclude: [{weaponType: "Staff"}],
    effect: "If Sing or Dance is used, target also granted Def+3."
  },
  {
    name: "Earth Dance 3",
    icon: "35-1",
    exclude: [{weaponType: "Staff"}],
    effect: "If Sing or Dance is used, target also granted Def+4."
  },
  {
    name: "Embla's Ward",
    icon: "16-9",
    include: [{name: "Veronica"}],
    effect: "Unit receives 0 damage."
  },
  {
    name: "Even Def Wave 1",
    icon: "50-6",
    effect: "At start of even-numbered turns, grants Def+2 to unit and adjacent allies for 1 turn. (Bonus granted to unit even if no allies are adjacent.)"
  },
  {
    name: "Even Def Wave 2",
    icon: "50-7",
    effect: "At start of even-numbered turns, grants Def+4 to unit and adjacent allies for 1 turn. (Bonus granted to unit even if no allies are adjacent.)"
  },
  {
    name: "Even Def Wave 3",
    icon: "50-8",
    effect: "At start of even-numbered turns, grants Def+6 to unit and adjacent allies for 1 turn. (Bonus granted to unit even if no allies are adjacent.)"
  },
  {
    name: "Fierce Stance 1",
    icon: "31-3",
    exclude: [{weaponType:"Staff"}],
    effect: "Grants Atk+2 during combat when this unit is attacked."
  },
  {
    name: "Fierce Stance 2",
    icon: "31-4",
    exclude: [{weaponType:"Staff"}],
    effect: "Grants Atk+4 during combat when this unit is attacked."
  },
  {
    name: "Fierce Stance 3",
    icon: "31-5",
    exclude: [{weaponType:"Staff"}],
    effect: "Grants Atk+6 during combat when this unit is attacked."
  },
  {
    name: "Fire Boost 1",
    icon: "18-7",
    effect: "If unit has at least 3 more HP than enemy at the start of combat, unit receives Atk+2 during combat."
  },
  {
    name: "Fire Boost 2",
    icon: "18-8",
    effect: "If unit has at least 3 more HP than enemy at the start of combat, unit receives Atk+4 during combat."
  },
  {
    name: "Fire Boost 3",
    icon: "18-9",
    effect: "If unit has at least 3 more HP than enemy at the start of combat, unit receives Atk+6 during combat."
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
    name: "Fortress Def 1",
    icon: "15-1",
    stats: {atk: -3, def: 3},
    effect: "Grants Def+3. Inflicts Atk-3."
  },
  {
    name: "Fortress Def 2",
    icon: "15-2",
    stats: {atk: -3, def: 4},
    effect: "Grants Def+4. Inflicts Atk-3."
  },
  {
    name: "Fortress Def 3",
    icon: "15-3",
    stats: {atk: -3, def: 5},
    effect: "Grants Def+5. Inflicts Atk-3."
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
    name: "Flashing Blade 1",
    icon: "31-6",
    include: [{moveType:"Infantry"}, {moveType:"Armored"}],
    exclude: [{weaponType:"Staff"}],
    effect: "If unit's Spd - foe's Spd ≥ 5, unit gains Special cooldown charge +1 per attack. (If using other similar skill, only highest value applied.)"
  },
  {
    name: "Flashing Blade 2",
    icon: "31-7",
    include: [{moveType:"Infantry"}, {moveType:"Armored"}],
    exclude: [{weaponType:"Staff"}],
    effect: "If unit's Spd - foe's Spd ≥ 3, unit gains Special cooldown charge +1 per attack. (If using other similar skill, only highest value applied.)"
  },
  {
    name: "Flashing Blade 3",
    icon: "31-8",
    include: [{moveType:"Infantry"}, {moveType:"Armored"}],
    exclude: [{weaponType:"Staff"}],
    effect: "If unit's Spd - foe's Spd ≥ 1, unit gains Special cooldown charge +1 per attack. (If using other similar skill, only highest value applied.)"
  },
  {
    name: "Flier Formation 1",
    icon: "27-0",
    include: [{moveType: "Flying"}],
    effect: "If unit has 100% HP, unit can move to a space adjacent to a flier ally within 2 spaces."
  },
  {
    name: "Flier Formation 2",
    icon: "27-1",
    include: [{moveType: "Flying"}],
    effect: "If unit has ≥ 50% HP, unit can move to a space adjacent to a flier ally within 2 spaces."
  },
  {
    name: "Flier Formation 3",
    icon: "27-2",
    include: [{moveType: "Flying"}],
    effect: "Unit can move to a space adjacent to a flier ally within 2 spaces."
  },
    {
    name: "Gale Dance 1",
    icon: "27-11",
    exclude: [{weaponType: "Staff"}],
    effect: "If Sing or Dance is used, target also granted Spd+2."
  },
  {
    name: "Gale Dance 2",
    icon: "27-12",
    exclude: [{weaponType: "Staff"}],
    effect: "If Sing or Dance is used, target also granted Spd+3."
  },
  {
    name: "Gale Dance 3",
    icon: "28-0",
    exclude: [{weaponType: "Staff"}],
    effect: "If Sing or Dance is used, target also granted Spd+4."
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
    name: "HP/Res 1",
    icon: "31-1",
    stats: {hp: 3, res: 1},
    effect: "Grants HP+3, Res+1."
  },
  {
    name: "HP/Res 2",
    icon: "31-2",
    stats: {hp: 4, res: 2},
    effect: "Grants HP+4, Res+2."
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
    name: "Live to Serve 1",
    icon: "7-2",
    include: [{weaponType: "Staff"}],
    effect: "When healing allies with a staff, unit also recovers 50% of the HP restored."
  },
  {
    name: "Live to Serve 2",
    icon: "7-3",
    include: [{weaponType: "Staff"}],
    effect: "When healing allies with a staff, unit also recovers 75% of the HP restored."
  },
  {
    name: "Live to Serve 3",
    icon: "7-4",
    include: [{weaponType: "Staff"}],
    effect: "When healing allies with a staff, unit also recovers the same amount."
  },
  {
    name: "Múspellflame",
    icon: "33-6",
    include: [{"name": "Surtr"}],
    effect: "Unit receives 0 damage."
  },
  {
    name: "Obstruct 1",
    icon: "4-11",
    effect: "Prevents foes from moving through adjacent spaces while this unit's HP ≥ 90%. (No effect on foes with a Pass skill.)"
  },
  {
    name: "Obstruct 2",
    icon: "4-12",
    effect: "Prevents foes from moving through adjacent spaces while this unit's HP ≥ 70%. (No effect on foes with a Pass skill.)"
  },
  {
    name: "Obstruct 3",
    icon: "5-0",
    effect: "Prevents foes from moving through adjacent spaces while this unit's HP ≥ 50%. (No effect on foes with a Pass skill.)"
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
    name: "Res Ploy 1",
    icon: "23-8",
    effect: "At start of turn, all foes in cardinal directions with Res 1 or more lower than unit suffer Res-3 until the end of foe's next action."
  },
  {
    name: "Res Ploy 2",
    icon: "23-9",
    effect: "At start of turn, all foes in cardinal directions with Res 1 or more lower than unit suffer Res-4 until the end of foe's next action."
  },
  {
    name: "Res Ploy 3",
    icon: "23-10",
    effect: "At start of turn, all foes in cardinal directions with Res 1 or more lower than unit suffer Res-5 until the end of foe's next action."
  },
  {
    name: "Res Tactic 1",
    icon: "35-9",
    effect: "At start of turn, grants Res+2 to allies within 2 spaces for 1 turn. Granted only if number of that ally's movement type on current team ≤ 2."
  },
  {
    name: "Res Tactic 2",
    icon: "35-10",
    effect: "At start of turn, grants Res+4 to allies within 2 spaces for 1 turn. Granted only if number of that ally's movement type on current team ≤ 2."
  },
  {
    name: "Res Tactic 3",
    icon: "35-11",
    effect: "At start of turn, grants Res+6 to allies within 2 spaces for 1 turn. Granted only if number of that ally's movement type on current team ≤ 2."
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
    name: "Seal Atk 2",
    icon: "7-6",
    exclude: [{weaponType: "Staff"}],
    effect: "After combat, foe suffers Atk-5 through its next action."
  },
  {
    name: "Seal Atk 3",
    icon: "7-7",
    exclude: [{weaponType: "Staff"}],
    effect: "After combat, foe suffers Atk-7 through its next action."
  },
    {
    name: "Seal Spd 1",
    icon: "7-8",
    exclude: [{weaponType: "Staff"}],
    effect: "After combat, foe suffers Spd-3 through its next action."
  },
  {
    name: "Seal Spd 2",
    icon: "7-9",
    exclude: [{weaponType: "Staff"}],
    effect: "After combat, foe suffers Spd-5 through its next action."
  },
  {
    name: "Seal Spd 3",
    icon: "7-10",
    exclude: [{weaponType: "Staff"}],
    effect: "After combat, foe suffers Spd-7 through its next action."
  },
  {
    name: "Spd/Def 1",
    icon: "24-11",
    stats: {spd: 1, def: 1},
    effect: "Grants Spd/Def+1."
  },
  {
    name: "Spd/Def 2",
    icon: "24-12",
    stats: {spd: 2, def: 2},
    effect: "Grants Spd/Def+2."
  },
  {
    name: "Spd Ploy 1",
    icon: "30-0",
    effect: "At start of turn, all foes in cardinal directions with Res 1 or more lower than unit suffer Spd-3 until the end of foe's next action."
  },
  {
    name: "Spd Ploy 2",
    icon: "30-1",
    effect: "At start of turn, all foes in cardinal directions with Res 1 or more lower than unit suffer Spd-4 until the end of foe's next action."
  },
  {
    name: "Spd Ploy 3",
    icon: "30-2",
    effect: "At start of turn, all foes in cardinal directions with Res 1 or more lower than unit suffer Spd-5 until the end of foe's next action."
  },
  {
    name: "Spd Smoke 1",
    icon: "29-10",
    exclude: [{weaponType: "Staff"}],
    effect: "After combat, inflicts Spd-3 on foes within 2 spaces of target through their next actions."
  },
  {
    name: "Spd Smoke 2",
    icon: "29-11",
    exclude: [{weaponType: "Staff"}],
    effect: "After combat, inflicts Spd-5 on foes within 2 spaces of target through their next actions."
  },
  {
    name: "Spd Smoke 3",
    icon: "29-12",
    exclude: [{weaponType: "Staff"}],
    effect: "After combat, inflicts Spd-7 on foes within 2 spaces of target through their next actions."
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
    name: "Spur Def/Res 1",
    icon: "16-7",
    effect: "Grants adjacent allies Def/Res +2 during combat"
  },
  {
    name: "Spur Def/Res 2",
    icon: "16-8",
    effect: "Grants adjacent allies Def/Res +3 during combat."
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
    name: "Squad Ace K 1",
    icon: "21-1",
    stats: {"hp": 3},
    effect: "Grants HP+3."
  },
  {
    name: "Squad Ace K 2",
    icon: "21-2",
    stats: {"hp": 4},
    effect: "Grants HP+4."
  },
  {
    name: "Squad Ace K 3",
    icon: "21-3",
    stats: {"hp": 5},
    effect: "Grants HP+5."
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
    name: "Threaten Def 1",
    icon: "13-11",
    effect: "Inflicts Def-3 on foes within 2 spaces through their next actions at the start of each turn."
  },
  {
    name: "Threaten Def 2",
    icon: "13-12",
    prev: ["Threaten Def 1"],
    effect: "Inflicts Def-4 on foes within 2 spaces through their next actions at the start of each turn."
  },
  {
    name: "Threaten Def 3",
    icon: "14-0",
    prev: ["Threaten Def 2"],
    effect: "Inflicts Def-5 on foes within 2 spaces through their next actions at the start of each turn."
  },
  {
    name: "Threaten Res 1",
    icon: "14-1",
    effect: "Inflicts Res-3 on foes within 2 spaces through their next actions at the start of each turn."
  },
  {
    name: "Threaten Res 2",
    icon: "14-2",
    prev: ["Threaten Res 1"],
    effect: "Inflicts Res-4 on foes within 2 spaces through their next actions at the start of each turn."
  },
  {
    name: "Threaten Res 3",
    icon: "14-3",
    prev: ["Threaten Res 2"],
    effect: "Inflicts Res-5 on foes within 2 spaces through their next actions at the start of each turn."
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
  {
    name: "Torrent Dance 1",
    icon: "28-1",
    exclude: [{weaponType: "Staff"}],
    effect: "If Sing or Dance is used, target also granted Res+3."
  },
  {
    name: "Torrent Dance 2",
    icon: "28-2",
    prev: ["Blaze Dance 1"],
    exclude: [{weaponType: "Staff"}],
    effect: "If Sing or Dance is used, target also granted Res+4."
  },
  {
    name: "Torrent Dance 3",
    icon: "28-3",
    prev: ["Blaze Dance 2"],
    exclude: [{weaponType: "Staff"}],
    effect: "If Sing or Dance is used, target also granted Res+5."
  },
  {
    name: "Water Boost 1",
    icon: "23-2",
    effect: "If unit has at least 3 more HP than enemy at the start of combat, unit receives Res+2 during combat."
  },
  {
    name: "Water Boost 2",
    icon: "23-3",
    effect: "If unit has at least 3 more HP than enemy at the start of combat, unit receives Res+4 during combat."
  },
  {
    name: "Water Boost 3",
    icon: "23-4",
    effect: "If unit has at least 3 more HP than enemy at the start of combat, unit receives Res+6 during combat."
  },
];
