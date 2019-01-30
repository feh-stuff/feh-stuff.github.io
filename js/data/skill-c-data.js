module.exports = [
  {
    name: "Air Orders 1",
    icon: "57-2",
    effect: "At start of turn, if unit's HP = 100%, grants the following status to adjacent flying allies for 1 turn: \"Unit can move to a space adjacent to any ally within 2 spaces.\"",
    spCost: 60,
    include: [{moveType: "Flying"}],
  },
  {
    name: "Air Orders 2",
    icon: "57-3",
    effect: "At start of turn, if unit's HP ≥ 50%, grants the following status to adjacent flying allies for 1 turn: \"Unit can move to a space adjacent to any ally within 2 spaces.\"",
    spCost: 120,
    include: [{moveType: "Flying"}],
  },
  {
    name: "Air Orders 3",
    icon: "57-4",
    effect: "At start of turn, grants the following status effect to adjacent flying allies for 1 turn: \"Unit can move to a space adjacent to any ally within 2 spaces.\"",
    spCost: 240,
    include: [{moveType: "Flying"}],
  },
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
    name: "Atk Opening 1",
    spCost: 60,
    icon: "55-3",
    effect: "At start of turn, grants Atk+2 to ally with the highest Atk for 1 turn. (Excludes unit.)"
  },
  {
    name: "Atk Opening 2",
    spCost: 120,
    icon: "55-4",
    prev: ["Atk Opening 1"],
    effect: "At start of turn, grants Atk+4 to ally with the highest Atk for 1 turn. (Excludes unit.)"
  },
  {
    name: "Atk Opening 3",
    spCost: 240,
    icon: "55-5",
    prev: ["Atk Opening 2"],
    effect: "At start of turn, grants Atk+6 to ally with the highest Atk for 1 turn. (Excludes unit.)"
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
    name: "Close Guard 1",
    spCost: 60,
    icon: "48-9",
    effect: "Allies within 2 spaces gain: \"If foe uses sword, lance, axe, or dragonstone, grants Def/Res+2 during combat.\""
  },
  {
    name: "Close Guard 2",
    spCost: 120,
    icon: "48-10",
    prev: ["Close Guard 1"],
    effect: "Allies within 2 spaces gain: \"If foe uses sword, lance, axe, or dragonstone, grants Def/Res+3 during combat.\""
  },
  {
    name: "Close Guard 3",
    spCost: 240,
    icon: "48-11",
    prev: ["Close Guard 2"],
    effect: "Allies within 2 spaces gain: \"If foe uses sword, lance, axe, or dragonstone, grants Def/Res+4 during combat.\""
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
    name: "Def Smoke 1",
    spCost: 60,
    icon: "40-0",
    exclude: [{weaponType: "Staff"}],
    effect: "After combat, inflicts Def-3 on foes within 2 spaces of target through their next actions."
  },
  {
    name: "Def Smoke 2",
    spCost: 120,
    icon: "40-1",
    prev: ["Def Smoke 1"],
    exclude: [{weaponType: "Staff"}],
    effect: "After combat, inflicts Def-5 on foes within 2 spaces of target through their next actions."
  },
  {
    name: "Def Smoke 3",
    spCost: 240,
    icon: "40-2",
    prev: ["Def Smoke 2"],
    exclude: [{weaponType: "Staff"}],
    effect: "After combat, inflicts Def-7 on foes within 2 spaces of target through their next actions."
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
    name: "Distant Guard 1",
    spCost: 60,
    icon: "46-12",
    effect: "Allies within 2 spaces gain: \"If foe uses bow, dagger, magic, or staff, grants Def/Res+2 during combat.\""
  },
  {
    name: "Distant Guard 2",
    spCost: 120,
    icon: "47-0",
    prev: ["Distant Guard 1"],
    effect: "Allies within 2 spaces gain: \"If foe uses bow, dagger, magic, or staff, grants Def/Res+3 during combat.\""
  },
  {
    name: "Distant Guard 3",
    spCost: 240,
    icon: "47-1",
    prev: ["Distant Guard 2"],
    effect: "Allies within 2 spaces gain: \"If foe uses bow, dagger, magic, or staff, grants Def/Res+4 during combat.\""
  },
  {
    name: "Dragon Valor 1",
    spCost: 30,
    icon: "45-10",
    include: [{weaponType: "Breath"}],
    effect: "If unit survives, unit gets 1.5x SP. (If similar skill effects also used, only highest multiplier applied.)"
  },
  {
    name: "Dragon Valor 2",
    spCost: 60,
    icon: "45-11",
    prev: ["Dragon Valor 1"],
    include: [{weaponType: "Breath"}],
    effect: "If unit survives, all dragonstone allies get 1.5x SP. (If similar skill effects also used, only highest multiplier applied.)"
  },
  {
    name: "Dragon Valor 3",
    spCost: 120,
    icon: "45-12",
    prev: ["Dragon Valor 2"],
    include: [{weaponType: "Breath"}],
    effect: "If unit survives, all dragonstone allies get 2x SP. (If similar skill effects also used, only highest multiplier applied.)"
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
    name: "Even Atk Wave 1",
    spCost: 60,
    icon: "52-1",
    effect: "At start of even-numbered turns, grants Atk+2 to unit and adjacent allies for 1 turn. (Bonus granted to unit even if no allies are adjacent.)"
  },
  {
    name: "Even Atk Wave 2",
    spCost: 120,
    icon: "52-2",
    effect: "At start of even-numbered turns, grants Atk+4 to unit and adjacent allies for 1 turn. (Bonus granted to unit even if no allies are adjacent.)"
  },
  {
    name: "Even Atk Wave 3",
    spCost: 240,
    icon: "52-3",
    effect: "At start of even-numbered turns, grants Atk+6 to unit and adjacent allies for 1 turn. (Bonus granted to unit even if no allies are adjacent.)"
  },
  {
    name: "Even Def Wave 1",
    spCost: 60,
    icon: "50-6",
    effect: "At start of even-numbered turns, grants Def+2 to unit and adjacent allies for 1 turn. (Bonus granted to unit even if no allies are adjacent.)"
  },
  {
    name: "Even Def Wave 2",
    spCost: 120,
    icon: "50-7",
    effect: "At start of even-numbered turns, grants Def+4 to unit and adjacent allies for 1 turn. (Bonus granted to unit even if no allies are adjacent.)"
  },
  {
    name: "Even Def Wave 3",
    spCost: 240,
    icon: "50-8",
    effect: "At start of even-numbered turns, grants Def+6 to unit and adjacent allies for 1 turn. (Bonus granted to unit even if no allies are adjacent.)"
  },
  {
    name: "Even Res Wave 1",
    spCost: 60,
    icon: "48-6",
    effect: "At start of even-numbered turns, grants Res+2 to unit and adjacent allies for 1 turn. (Bonus granted to unit even if no allies are adjacent.)"
  },
  {
    name: "Even Res Wave 2",
    spCost: 120,
    icon: "48-7",
    effect: "At start of even-numbered turns, grants Res+4 to unit and adjacent allies for 1 turn. (Bonus granted to unit even if no allies are adjacent.)"
  },
  {
    name: "Even Res Wave 3",
    spCost: 240,
    icon: "48-8",
    effect: "At start of even-numbered turns, grants Res+6 to unit and adjacent allies for 1 turn. (Bonus granted to unit even if no allies are adjacent.)"
  },
  {
    name: "Even Spd Wave 1",
    spCost: 60,
    icon: "43-11",
    effect: "At start of even-numbered turns, grants Spd+2 to unit and adjacent allies for 1 turn. (Bonus granted to unit even if no allies are adjacent.)"
  },
  {
    name: "Even Spd Wave 2",
    spCost: 120,
    icon: "43-12",
    prev: ["Even Spd Wave 1"],
    effect: "At start of even-numbered turns, grants Spd+4 to unit and adjacent allies for 1 turn. (Bonus granted to unit even if no allies are adjacent.)"
  },
  {
    name: "Even Spd Wave 3",
    spCost: 240,
    icon: "44-0",
    prev: ["Even Spd Wave 2"],
    effect: "At start of even-numbered turns, grants Spd+6 to unit and adjacent allies for 1 turn. (Bonus granted to unit even if no allies are adjacent.)"
  },
  {
    name: "Flier Guidance 1",
    spCost: 60,
    icon: "41-4",
    include: [{moveType: "Flying"}],
    effect: "If unit has 100% HP, flying allies within 2 spaces can move to a space adjacent to unit."
  },
  {
    name: "Flier Guidance 2",
    spCost: 120,
    icon: "41-5",
    prev: ["Flier Guidance 1"],
    include: [{moveType: "Flying"}],
    effect: "If unit has ≥ 50% HP, flying allies within 2 spaces can move to a space adjacent to unit."
  },
  {
    name: "Flier Guidance 3",
    spCost: 240,
    icon: "41-6",
    prev: ["Flier Guidance 2"],
    include: [{moveType: "Flying"}],
    effect: "Flying allies within 2 spaces can move to a space adjacent to unit."
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
    name: "Fortify Beasts",
    spCost: 200,
    icon: "56-7",
    prev: ["Fortify Def 2", "Fortify Res 2"],
    include: [{weaponType: "Beast"}],
    effect: "At start of turn, grants Def/Res+6 to adjacent beast allies for 1 turn."
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
    name: "G Tome Exp. 1",
    spCost: 30,
    icon: "41-0",
    include: [{weaponType: "Tome", colorType: "Green"}],
    effect: "If using green magic and unit survives combat, unit gets 1.5x EXP. (If similar skill effects also used, only highest multiplier applied.)"
  },
  {
    name: "G Tome Exp. 2",
    spCost: 60,
    icon: "41-1",
    prev: ["G Tome Exp. 1"],
    include: [{weaponType: "Tome", colorType: "Green"}],
    effect: "If unit survives combat, all green magic users on team get 1.5x EXP. (If similar skill effects also used, only highest multiplier applied.)"
  },
  {
    name: "G Tome Exp. 3",
    spCost: 120,
    icon: "41-2",
    prev: ["G Tome Exp. 2"],
    include: [{weaponType: "Tome", colorType: "Green"}],
    effect: "If unit survives combat, all green magic users on team get 2x EXP. (If similar skill effects also used, only highest multiplier applied.)"
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
    name: "Glare",
    spCost: 300,
    icon: "56-8",
    include: [{name:"Nailah"}],
    effect: "After combat, if unit attacked, inflicts status on target and foes within 1 space of target restricting movement to 1 space through their next actions."
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
    name: "Goad Dragons",
    spCost: 200,
    icon: "41-3",
    prev: ["Spur Atk 2", "Spur Spd 2"],
    include: [{weaponType: "Breath"}],
    effect: "Grants dragon allies within 2 spaces Spd/Atk+4 during combat."
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
    name: "Hone Atk 4",
    spCost: 300,
    icon: "55-9",
    prev: ["Hone Atk 3"],
    effect: "Grants adjacent allies Atk+7 through their next actions at the start of each turn."
  },
  {
    name: "Hone Beasts",
    spCost: 200,
    icon: "56-6",
    prev: ["Hone Atk 2", "Hone Spd 2"],
    include: [{weaponType: "Beast"}],
    effect: "At start of turn, grants Atk/Spd+6 to adjacent beast allies for 1 turn."
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
    name: "Infantry Flash 1",
    spCost: 60,
    icon: "49-0",
    include: [{moveType: "Infantry"}],
    effect: "Infantry allies within 2 spaces gain: \"If unit's Spd ≥ foe's Spd+5, grants Special cooldown charge +1 per attack. (Only highest value applied. Does not stack.)\""
  },
  {
    name: "Infantry Flash 2",
    spCost: 120,
    icon: "49-1",
    prev: ["Infantry Flash 1"],
    include: [{moveType: "Infantry"}],
    effect: "Infantry allies within 2 spaces gain: \"If unit's Spd ≥ foe's Spd+3, grants Special cooldown charge +1 per attack. (Only highest value applied. Does not stack.)\""
  },
  {
    name: "Infantry Flash 3",
    spCost: 240,
    icon: "49-2",
    prev: ["Infantry Flash 2"],
    include: [{moveType: "Infantry"}],
    effect: "Infantry allies within 2 spaces gain: \"If unit's Spd ≥ foe's Spd+1, grants Special cooldown charge +1 per attack. (Only highest value applied. Does not stack.)\""
  },
  {
    name: "Infantry Rush 1",
    spCost: 60,
    icon: "44-10",
    include: [{moveType: "Infantry"}],
    effect: "Infantry allies within 2 spaces gain: \"If unit's Atk ≥ foe's Atk+5, grants Special cooldown charge +1 per attack. (Only highest value applied. Does not stack.)\""
  },
  {
    name: "Infantry Rush 2",
    spCost: 120,
    icon: "44-11",
    prev: ["Infantry Rush 1"],
    include: [{moveType: "Infantry"}],
    effect: "Infantry allies within 2 spaces gain: \"If unit's Atk ≥ foe's Atk+3, grants Special cooldown charge +1 per attack. (Only highest value applied. Does not stack.)\""
  },
  {
    name: "Infantry Rush 3",
    spCost: 240,
    icon: "44-12",
    prev: ["Infantry Rush 2"],
    include: [{moveType: "Infantry"}],
    effect: "Infantry allies within 2 spaces gain: \"If unit's Atk ≥ foe's Atk+1, grants Special cooldown charge +1 per attack. (Only highest value applied. Does not stack.)\""
  },
  {
    name: "Joint Hone Spd",
    spCost: 300,
    icon: "55-10",
    prev: ["Hone Spd 3"],
    effect: "At start of turn, if unit is adjacent to an ally, grants Spd+5 to unit and adjacent allies for 1 turn."
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
    name: "Odd Atk Wave 1",
    spCost: 60,
    icon: "42-4",
    effect: "At start of odd-numbered turns, grants Atk+2 to unit and adjacent allies for 1 turn. (Bonus granted to unit even if no allies are adjacent.)"
  },
  {
    name: "Odd Atk Wave 2",
    spCost: 120,
    icon: "42-5",
    effect: "At start of odd-numbered turns, grants Atk+4 to unit and adjacent allies for 1 turn. (Bonus granted to unit even if no allies are adjacent.)"
  },
  {
    name: "Odd Atk Wave 3",
    spCost: 240,
    icon: "42-6",
    effect: "At start of odd-numbered turns, grants Atk+6 to unit and adjacent allies for 1 turn. (Bonus granted to unit even if no allies are adjacent.)"
  },
  {
    name: "Odd Def Wave 1",
    spCost: 60,
    icon: "47-8",
    effect: "At start of odd-numbered turns, grants Def+2 to unit and adjacent allies for 1 turn. (Bonus granted to unit even if no allies are adjacent.)"
  },
  {
    name: "Odd Def Wave 2",
    spCost: 120,
    icon: "47-9",
    effect: "At start of odd-numbered turns, grants Def+4 to unit and adjacent allies for 1 turn. (Bonus granted to unit even if no allies are adjacent.)"
  },
  {
    name: "Odd Def Wave 3",
    spCost: 240,
    icon: "47-10",
    effect: "At start of odd-numbered turns, grants Def+6 to unit and adjacent allies for 1 turn. (Bonus granted to unit even if no allies are adjacent.)"
  },
  {
    name: "Odd Res Wave 1",
    spCost: 60,
    icon: "45-7",
    effect: "At start of odd-numbered turns, grants Res+2 to unit and adjacent allies for 1 turn. (Bonus granted to unit even if no allies are adjacent.)"
  },
  {
    name: "Odd Res Wave 2",
    spCost: 120,
    icon: "45-8",
    effect: "At start of odd-numbered turns, grants Res+4 to unit and adjacent allies for 1 turn. (Bonus granted to unit even if no allies are adjacent.)"
  },
  {
    name: "Odd Res Wave 3",
    spCost: 240,
    icon: "45-9",
    effect: "At start of odd-numbered turns, grants Res+6 to unit and adjacent allies for 1 turn. (Bonus granted to unit even if no allies are adjacent.)"
  },
  {
    name: "Odd Spd Wave 1",
    spCost: 60,
    icon: "51-2",
    effect: "At start of odd-numbered turns, grants Spd+2 to unit and adjacent allies for 1 turn. (Bonus granted to unit even if no allies are adjacent.)"
  },
  {
    name: "Odd Spd Wave 2",
    spCost: 120,
    icon: "51-3",
    prev: ["Odd Spd Wave 1"],
    effect: "At start of odd-numbered turns, grants Spd+4 to unit and adjacent allies for 1 turn. (Bonus granted to unit even if no allies are adjacent.)"
  },
  {
    name: "Odd Spd Wave 3",
    spCost: 240,
    icon: "51-4",
    prev: ["Odd Spd Wave 2"],
    effect: "At start of odd-numbered turns, grants Spd+6 to unit and adjacent allies for 1 turn. (Bonus granted to unit even if no allies are adjacent.)"
  },
  {
    name: "Ostia's Pulse",
    spCost: 300,
    icon: "45-0",
    include: [{name:"Hector (Legendary Heroes)"}],
    effect: "At the start of turn 1, grants Special cooldown count-1 to all allies. Granted only if number of those allies' movement types on current team ≤ 2."
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
    name: "Res Smoke 1",
    spCost: 60,
    icon: "40-4",
    exclude: [{weaponType: "Staff"}],
    effect: "After combat, inflicts Res-3 on foes within 2 spaces of target through their next actions."
  },
  {
    name: "Res Smoke 2",
    spCost: 120,
    icon: "40-5",
    prev: ["Def Smoke 1"],
    exclude: [{weaponType: "Staff"}],
    effect: "After combat, inflicts Res-5 on foes within 2 spaces of target through their next actions."
  },
  {
    name: "Res Smoke 3",
    spCost: 240,
    icon: "40-6",
    prev: ["Def Smoke 2"],
    exclude: [{weaponType: "Staff"}],
    effect: "After combat, inflicts Res-7 on foes within 2 spaces of target through their next actions."
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
    name: "Sparkling Boost",
    spCost: 300,
    icon: "56-9",
    include: [{name:"Eir"}],
    effect: "At start of turn, restores 10 HP to ally that has been dealt the most damage. (Excludes unit.)"
  },
  {
    name: "Spd Opening 1",
    spCost: 60,
    icon: "56-12",
    effect: "At start of turn, grants Spd+2 to ally with the highest Spd for 1 turn. (Excludes unit.)"
  },
  {
    name: "Spd Opening 2",
    spCost: 120,
    icon: "57-0",
    prev: ["Spd Opening 1"],
    effect: "At start of turn, grants Spd+4 to ally with the highest Spd for 1 turn. (Excludes unit.)"
  },
  {
    name: "Spd Opening 3",
    spCost: 240,
    icon: "57-1",
    prev: ["Spd Opening 2"],
    effect: "At start of turn, grants Spd+6 to ally with the highest Spd for 1 turn. (Excludes unit.)"
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
    name: "Spd Tactic 1",
    spCost: 60,
    icon: "41-8",
    effect: "At start of turn, grants Spd+2 to allies within 2 spaces for 1 turn. Granted only if number of that ally's movement type on current team ≤ 2."
  },
  {
    name: "Spd Tactic 2",
    spCost: 120,
    icon: "41-9",
    prev: ["Spd Tactic 1"],
    effect: "At start of turn, grants Spd+4 to allies within 2 spaces for 1 turn. Granted only if number of that ally's movement type on current team ≤ 2."
  },
  {
    name: "Spd Tactic 3",
    spCost: 240,
    icon: "41-10",
    prev: ["Spd Tactic 2"],
    effect: "At start of turn, grants Spd+6 to allies within 2 spaces for 1 turn. Granted only if number of that ally's movement type on current team ≤ 2."
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
    icon: "10-10",
    prev: ["Spur Atk 2"],
    effect: "Grants adjacent allies Atk+4 during combat."
  },
  {
    name: "Spur Atk/Def 1",
    spCost: 120,
    icon: "40-11",
    prev: ["Spur Atk 1", "Spur Def 1"],
    effect: "Grants adjacent allies Atk/Def +2 during combat."
  },
  {
    name: "Spur Atk/Def 2",
    spCost: 240,
    icon: "40-12",
    prev: ["Spur Atk/Def 1"],
    effect: "Grants adjacent allies Atk/Def +3 during combat."
  },
  {
    name: "Spur Atk/Res 1",
    spCost: 120,
    icon: "46-5",
    prev: ["Spur Atk 1", "Spur Res 1"],
    effect: "Grants adjacent allies Atk/Res +2 during combat."
  },
  {
    name: "Spur Atk/Res 2",
    spCost: 240,
    icon: "46-6",
    prev: ["Spur Atk/Res 1"],
    effect: "Grants adjacent allies Atk/Res +3 during combat."
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
    name: "Spur Spd/Res 1",
    spCost: 120,
    icon: "47-6",
    prev: ["Spur Res 1", "Spur Spd 1"],
    effect: "Grants adjacent allies Spd/Res +2 during combat"
  },
  {
    name: "Spur Spd/Res 2",
    spCost: 240,
    icon: "47-7",
    prev: ["Spur Spd/Res 1"],
    effect: "Grants adjacent allies Spd/Res +3 during combat."
  },
  {
    name: "Staff Valor 1",
    spCost: 30,
    icon: "46-7",
    include: [{weaponType: "Staff"}],
    effect: "If unit survives and uses a staff, unit gets 1.5x SP. (If similar skill effects also used, only highest multiplier applied.)"
  },
  {
    name: "Staff Valor 2",
    spCost: 60,
    icon: "46-8",
    prev: ["Staff Valor 1"],
    include: [{weaponType: "Staff"}],
    effect: "If unit survives, all staff users on team get 1.5x SP. (If similar skill effects also used, only highest multiplier applied.)"
  },
  {
    name: "Staff Valor 3",
    spCost: 120,
    icon: "46-9",
    prev: ["Staff Valor 2"],
    include: [{weaponType: "Staff"}],
    effect: "If unit survives, all staff users on team get 2x SP. (If similar skill effects also used, only highest multiplier applied.)"
  },
  {
    name: "Surtr's Menace",
    spCost: 300,
    icon: "54-0",
    include: [{name:"Surtr"}],
    effect: "At start of turn, if unit is within 2 spaces of a foe, grants Atk/Spd/Def/Res+4 for 1 turn and inflicts Atk/Spd/Def/Res+4 on foes within 2 spaces through their next actions."
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
    name: "Upheaval",
    spCost: 300,
    icon: "57-8",
    include: [{name:"Duma"}],
    effect: "At the start of turn 1, deals 7 damage to all foes, and if defending in Aether Raids during anima season, destroys offensive structure within the same column as unit. (Does not affect structures that cannot be destroyed.)"
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
  },
  {
    name: "With Everyone!",
    spCost: 300,
    icon: "51-6",
    include: [{name:"Tiki (Young) (Legendary Heroes)"}],
    effect: "At start of turn, if unit is adjacent to an ally, grants Def/Res+5 to unit and adjacent allies for 1 turn."
  },
];
