let C = [
{
  "name": "Panic Ploy 3",
  "effect": "At start of turn, bonuses become penalties on all foes in cardinal directions with HP 1 or more lower than unit through foe's next action.",
  "spCost": 240,
  "type": "C"
},
{
  "name": "Panic Ploy 1",
  "effect": "At start of turn, bonuses become penalties on all foes in cardinal directions with HP 5 or more lower than unit through foe's next action.",
  "spCost": 60,
  "type": "C"
},
{
  "name": "Lance Valor 3",
  "effect": "If unit survives, all lance users on team get 2x SP. (If similar skill effects also used, only highest multiplier applied.)",
  "spCost": 120,
  "restrict": "Lance Users Only",
  "type": "C"
},
{
  "name": "Lance Valor 2",
  "effect": "If unit survives, all lance users on team get 1.5x SP. (If similar skill effects also used, only highest multiplier applied.)",
  "spCost": 60,
  "restrict": "Lance Users Only",
  "type": "C"
},
{
  "name": "Lance Valor 1",
  "effect": "If unit survives and uses a lance, unit gets 1.5x SP. (If similar skill effects also used, only highest multiplier applied.)",
  "spCost": 30,
  "restrict": "Lance Users Only",
  "type": "C"
},
{
  "name": "Infantry Pulse 3",
  "effect": "Special cooldown count-1 at start of turn 1 for any Infantry allies with at least 1 fewer HP than unit. (Effects will stack with similar skills.)",
  "spCost": 240,
  "restrict": "Infantry Only",
  "type": "C"
},
{
  "name": "Infantry Pulse 2",
  "effect": "Special cooldown count-1 at start of turn 1 for any Infantry allies with at least 3 fewer HP than unit. (Effects will stack with similar skills.)",
  "spCost": 120,
  "restrict": "Infantry Only",
  "type": "C"
},
{
  "name": "Infantry Pulse 1",
  "effect": "Special cooldown count-1 at start of turn 1 for any Infantry allies with at least 5 fewer HP than unit. (Effects will stack with similar skills.)",
  "spCost": 60,
  "restrict": "Infantry Only",
  "type": "C"
},
{
  "name": "Res Ploy 1",
  "effect": "At start of turn, all foes in cardinal directions with Res 1 or more lower than unit suffer Res-3 until the end of foe's next action.",
  "spCost": 60,
  "type": "C"
},
{
  "name": "Res Ploy 2",
  "effect": "At start of turn, all foes in cardinal directions with Res 1 or more lower than unit suffer Res-4 until the end of foe's next action.",
  "spCost": 120,
  "type": "C"
},
{
  "name": "Res Ploy 3",
  "effect": "At start of turn, all foes in cardinal directions with Res 1 or more lower than unit suffer Res-5 until the end of foe's next action.",
  "spCost": 240,
  "type": "C"
},
{
  "name": "Hone Spd 3",
  "effect": "Grants adjacent allies Spd+4 through their next actions at the start of each turn.",
  "spCost": 200,
  "type": "C"
},
{
  "name": "Hone Spd 2",
  "effect": "Grants adjacent allies Spd+3 through their next actions at the start of each turn.",
  "spCost": 100,
  "type": "C"
},
{
  "name": "Hone Spd 1",
  "effect": "Grants adjacent allies Spd+2 through their next actions at the start of each turn.",
  "spCost": 50,
  "type": "C"
},
{
  "name": "Hone Fliers",
  "effect": "Grants adjacent flying allies Atk/Spd+6 through their next actions at the start of each turn.",
  "spCost": 200,
  "restrict": "Fliers Only",
  "type": "C"
},
{
  "name": "Savage Blow 1",
  "effect": "If unit initiates attack, foes within 2 spaces of target take 3 damage after combat.",
  "spCost": 50,
  "type": "C"
},
{
  "name": "Savage Blow 2",
  "effect": "If unit initiates attack, foes within 2 spaces of target take 5 damage after combat.",
  "spCost": 100,
  "type": "C"
},
{
  "name": "Savage Blow 3",
  "effect": "If unit initiates attack, foes within 2 spaces of target take 7 damage after combat.",
  "spCost": 200,
  "type": "C"
},
{
  "name": "Hone Cavalry",
  "effect": "Grants adjacent cavalry allies Atk/Spd+6 through their next actions at the start of each turn.",
  "spCost": 200,
  "restrict": "Cavalry Only",
  "type": "C"
},
{
  "name": "Hone Atk 3",
  "effect": "Grants adjacent allies Atk+4 through their next actions at the start of each turn.",
  "spCost": 200,
  "type": "C"
},
{
  "name": "Hone Atk 2",
  "effect": "Grants adjacent allies Atk+3 through their next actions at the start of each turn.",
  "spCost": 100,
  "type": "C"
},
{
  "name": "Hone Atk 1",
  "effect": "Grants adjacent allies Atk+2 through their next actions at the start of each turn.",
  "spCost": 50,
  "type": "C"
},
{
  "name": "Hone Armor",
  "effect": "Grants adjacent armored allies Atk/Spd+6 through their next actions at the start of each turn.",
  "spCost": 200,
  "restrict": "Armored Only",
  "type": "C"
},
{
  "name": "Armor March 2",
  "effect": "If unit has ≥ 50% HP and an adjacent armored ally at start of turn, unit and any such allies can move 1 extra space. (That turn only; does not stack.)",
  "spCost": 120,
  "restrict": "Armored Only",
  "type": "C"
},
{
  "name": "Guidance 3",
  "effect": "Infantry and armored allies within 2 spaces can move to a space adjacent to unit.",
  "spCost": 240,
  "restrict": "Fliers Only",
  "type": "C"
},
{
  "name": "Guidance 2",
  "effect": "If unit has ≥ 50% HP, infantry and armored allies within 2 spaces can move to a space adjacent to unit.",
  "spCost": 120,
  "restrict": "Fliers Only",
  "type": "C"
},
{
  "name": "Guidance 1",
  "effect": "If unit has 100% HP, infantry and armored allies within 2 spaces can move to a space adjacent to unit.",
  "spCost": 60,
  "restrict": "Fliers Only",
  "type": "C"
},
{
  "name": "G Tome Valor 3",
  "effect": "If unit survives, all green tome users on team get 2x SP. (If similar skill effects also used, only highest multiplier applied.)",
  "spCost": 120,
  "restrict": "Green Tome Users Only",
  "type": "C"
},
{
  "name": "G Tome Valor 2",
  "effect": "If unit survives, all green tome users on team get 1.5x SP. (If similar skill effects also used, only highest multiplier applied.)",
  "spCost": 60,
  "restrict": "Green Tome Users Only",
  "type": "C"
},
{
  "name": "G Tome Valor 1",
  "effect": "If unit survives and uses a green tome, unit gets 1.5x SP. (If similar skill effects also used, only highest multiplier applied.)",
  "spCost": 30,
  "restrict": "Green Tome Users Only",
  "type": "C"
},
{
  "name": "Goad Fliers",
  "effect": "Grants flying allies within 2 spaces Spd/Atk+4 during combat.",
  "spCost": 200,
  "restrict": "Fliers Only",
  "type": "C"
},
{
  "name": "Goad Cavalry",
  "effect": "Grants cavalry allies within 2 spaces Spd/Atk+4 during combat.",
  "spCost": 200,
  "restrict": "Cavalry Only",
  "type": "C"
},
{
  "name": "Spd Ploy 1",
  "effect": "At start of turn, all foes in cardinal directions with Res 1 or more lower than unit suffer Spd-3 until the end of foe's next action.",
  "spCost": 60,
  "type": "C"
},
{
  "name": "Spd Ploy 2",
  "effect": "At start of turn, all foes in cardinal directions with Res 1 or more lower than unit suffer Spd-4 until the end of foe's next action.",
  "spCost": 120,
  "type": "C"
},
{
  "name": "Spd Ploy 3",
  "effect": "At start of turn, all foes in cardinal directions with Res 1 or more lower than unit suffer Spd-5 until the end of foe's next action.",
  "spCost": 240,
  "type": "C"
},
{
  "name": "Goad Armor",
  "effect": "Grants armored allies within 2 spaces Spd/Atk+4 during combat.",
  "spCost": 200,
  "restrict": "Armored Only",
  "type": "C"
},
{
  "name": "Fortify Res 3",
  "effect": "Grants adjacent allies Res+4 through their next actions at the start of each turn.",
  "spCost": 200,
  "type": "C"
},
{
  "name": "Fortify Res 2",
  "effect": "Grants adjacent allies Res+3 through their next actions at the start of each turn.",
  "spCost": 100,
  "type": "C"
},
{
  "name": "Fortify Res 1",
  "effect": "Grants adjacent allies Res+2 through their next actions at the start of each turn.",
  "spCost": 50,
  "type": "C"
},
{
  "name": "Spd Smoke 1",
  "effect": "After combat, inflicts Spd-3 on foes within 2 spaces of target through their next actions.",
  "spCost": 60,
  "restrict": "Excludes Staff Users",
  "type": "C"
},
{
  "name": "Spd Smoke 2",
  "effect": "After combat, inflicts Spd-5 on foes within 2 spaces of target through their next actions.",
  "spCost": 120,
  "restrict": "Excludes Staff Users",
  "type": "C"
},
{
  "name": "Spd Smoke 3",
  "effect": "After combat, inflicts Spd-7 on foes within 2 spaces of target through their next actions.",
  "spCost": 240,
  "restrict": "Excludes Staff Users",
  "type": "C"
},
{
  "name": "Spur Atk 1",
  "effect": "Grants adjacent allies Atk+2 during combat.",
  "spCost": 50,
  "type": "C"
},
{
  "name": "Spur Atk 2",
  "effect": "Grants adjacent allies Atk+3 during combat.",
  "spCost": 100,
  "type": "C"
},
{
  "name": "Spur Atk 3",
  "effect": "Grants adjacent allies Atk+4 during combat.",
  "spCost": 200,
  "type": "C"
},
{
  "name": "Spur Def 1",
  "effect": "Grants adjacent allies Def+2 during combat.",
  "spCost": 50,
  "type": "C"
},
{
  "name": "Spur Def 2",
  "effect": "Grants adjacent allies Def+3 during combat.",
  "spCost": 100,
  "type": "C"
},
{
  "name": "Spur Def 3",
  "effect": "Grants adjacent allies Def+4 during combat.",
  "spCost": 200,
  "type": "C"
},
{
  "name": "Spur Def Res 1",
  "effect": "Grants adjacent allies Def/Res +2 during combat",
  "spCost": 120,
  "type": "C"
},
{
  "name": "Spur Def Res 2",
  "effect": "Grants adjacent allies Def/Res +3 during combat.",
  "spCost": 240,
  "type": "C"
},
{
  "name": "Spur Res 1",
  "effect": "Grants adjacent allies Res+2 during combat.",
  "spCost": 50,
  "type": "C"
},
{
  "name": "Spur Res 2",
  "effect": "Grants adjacent allies Res+3 during combat.",
  "spCost": 100,
  "type": "C"
},
{
  "name": "Spur Res 3",
  "effect": "Grants adjacent allies Res+4 during combat.",
  "spCost": 200,
  "type": "C"
},
{
  "name": "Spur Spd 1",
  "effect": "Grants adjacent allies Spd+2 during combat.",
  "spCost": 50,
  "type": "C"
},
{
  "name": "Spur Spd 2",
  "effect": "Grants adjacent allies Spd+3 during combat.",
  "spCost": 100,
  "type": "C"
},
{
  "name": "Spur Spd 3",
  "effect": "Grants adjacent allies Spd+4 during combat.",
  "spCost": 200,
  "type": "C"
},
{
  "name": "Spur Spd Def 1",
  "effect": "Grants adjacent allies Spd/Def +2 during combat",
  "spCost": 120,
  "type": "C"
},
{
  "name": "Spur Spd Def 2",
  "effect": "Grants adjacent allies Spd/Def +3 during combat.",
  "spCost": 240,
  "type": "C"
},
{
  "name": "Fortify Fliers",
  "effect": "Grants adjacent flying allies Def/Res+6 through their next actions at the start of each turn.",
  "spCost": 200,
  "restrict": "Fliers Only",
  "type": "C"
},
{
  "name": "Fortify Dragons",
  "effect": "Grants adjacent Dragon allies Def/Res+6 through their next actions at the start of each turn.",
  "spCost": 200,
  "restrict": "Breath Users Only",
  "type": "C"
},
{
  "name": "Fortify Def 3",
  "effect": "Grants adjacent allies Def+4 through their next actions at the start of each turn.",
  "spCost": 200,
  "type": "C"
},
{
  "name": "Fortify Def 2",
  "effect": "Grants adjacent allies Def+3 through their next actions at the start of each turn.",
  "spCost": 100,
  "type": "C"
},
{
  "name": "Fortify Def 1",
  "effect": "Grants adjacent allies Def+2 through their next actions at the start of each turn.",
  "spCost": 50,
  "type": "C"
},
{
  "name": "Panic Ploy 2",
  "effect": "At start of turn, bonuses become penalties on all foes in cardinal directions with HP 3 or more lower than unit through foe's next action.",
  "spCost": 120,
  "type": "C"
},
{
  "name": "Fortify Cavalry",
  "effect": "Grants adjacent cavalry allies Def/Res+6 through their next actions at the start of each turn.",
  "spCost": 200,
  "restrict": "Cavalry Only",
  "type": "C"
},
{
  "name": "Fortify Armor",
  "effect": "Grants adjacent armor allies Def/Res+6 through their next actions at the start of each turn.",
  "spCost": 200,
  "restrict": "Armored Only",
  "type": "C"
},
{
  "name": "Drive Spd 2",
  "effect": "Grants allies within 2 spaces Spd+3 during combat.",
  "spCost": 240,
  "type": "C"
},
{
  "name": "Drive Spd 1",
  "effect": "Grants allies within 2 spaces Spd+2 during combat.",
  "spCost": 120,
  "type": "C"
},
{
  "name": "Drive Res 2",
  "effect": "Grants allies within 2 spaces Res+3 during combat.",
  "spCost": 240,
  "type": "C"
},
{
  "name": "Drive Res 1",
  "effect": "Grants allies within 2 spaces Res+2 during combat.",
  "spCost": 120,
  "type": "C"
},
{
  "name": "Drive Def 2",
  "effect": "Grants allies within 2 spaces Def+3 during combat.",
  "spCost": 240,
  "type": "C"
},
{
  "name": "Sword Exp. 1",
  "effect": "If unit survives, unit gets 1.5x EXP. (If similar skill effects also used, only highest multiplier applied.)",
  "spCost": 30,
  "restrict": "Sword Users Only",
  "type": "C"
},
{
  "name": "Sword Exp. 2",
  "effect": "If unit survives, all sword users on team get 1.5x EXP. (If similar skill effects also used, only highest multiplier applied.)",
  "spCost": 60,
  "restrict": "Sword Users Only",
  "type": "C"
},
{
  "name": "Sword Exp. 3",
  "effect": "If unit survives, all sword users on team get 2x EXP. (If similar skill effects also used, only highest multiplier applied.)",
  "spCost": 120,
  "restrict": "Sword Users Only",
  "type": "C"
},
{
  "name": "Sword Valor 1",
  "effect": "If unit survives and uses a sword, unit gets 1.5x SP. (If similar skill effects also used, only highest multiplier applied.)",
  "spCost": 30,
  "restrict": "Sword Users Only",
  "type": "C"
},
{
  "name": "Sword Valor 2",
  "effect": "If unit survives, all sword users on team get 1.5x SP. (If similar skill effects also used, only highest multiplier applied.)",
  "spCost": 60,
  "restrict": "Sword Users Only",
  "type": "C"
},
{
  "name": "Sword Valor 3",
  "effect": "If unit survives, all sword users on team get 2x SP. (If similar skill effects also used, only highest multiplier applied.)",
  "spCost": 120,
  "restrict": "Sword Users Only",
  "type": "C"
},
{
  "name": "Drive Def 1",
  "effect": "Grants allies within 2 spaces Def+2 during combat.",
  "spCost": 120,
  "type": "C"
},
{
  "name": "Drive Atk 2",
  "effect": "Grants allies within 2 spaces Atk+3 during combat.",
  "spCost": 240,
  "type": "C"
},
{
  "name": "Threaten Atk 1",
  "effect": "Inflicts Atk-3 on foes within 2 spaces through their next actions at the start of each turn.",
  "spCost": 50,
  "type": "C"
},
{
  "name": "Threaten Atk 2",
  "effect": "Inflicts Atk-4 on foes within 2 spaces through their next actions at the start of each turn.",
  "spCost": 100,
  "type": "C"
},
{
  "name": "Threaten Atk 3",
  "effect": "Inflicts Atk-5 on foes within 2 spaces through their next actions at the start of each turn.",
  "spCost": 200,
  "type": "C"
},
{
  "name": "Threaten Def 1",
  "effect": "Inflicts Def-3 on foes within 2 spaces through their next actions at the start of each turn.",
  "spCost": 50,
  "type": "C"
},
{
  "name": "Threaten Def 2",
  "effect": "Inflicts Def-4 on foes within 2 spaces through their next actions at the start of each turn.",
  "spCost": 100,
  "type": "C"
},
{
  "name": "Threaten Def 3",
  "effect": "Inflicts Def-5 on foes within 2 spaces through their next actions at the start of each turn.",
  "spCost": 200,
  "type": "C"
},
{
  "name": "Threaten Res 1",
  "effect": "Inflicts Res-3 on foes within 2 spaces through their next actions at the start of each turn.",
  "spCost": 50,
  "type": "C"
},
{
  "name": "Threaten Res 2",
  "effect": "Inflicts Res-4 on foes within 2 spaces through their next actions at the start of each turn.",
  "spCost": 100,
  "type": "C"
},
{
  "name": "Threaten Res 3",
  "effect": "Inflicts Res-5 on foes within 2 spaces through their next actions at the start of each turn.",
  "spCost": 200,
  "type": "C"
},
{
  "name": "Threaten Spd 1",
  "effect": "Inflicts Spd-3 on foes within 2 spaces through their next actions at the start of each turn.",
  "spCost": 50,
  "type": "C"
},
{
  "name": "Threaten Spd 2",
  "effect": "Inflicts Spd-4 on foes within 2 spaces through their next actions at the start of each turn.",
  "spCost": 100,
  "type": "C"
},
{
  "name": "Threaten Spd 3",
  "effect": "Inflicts Spd-5 on foes within 2 spaces through their next actions at the start of each turn.",
  "spCost": 200,
  "type": "C"
},
{
  "name": "Drive Atk 1",
  "effect": "Grants allies within 2 spaces Atk+2 during combat.",
  "spCost": 120,
  "type": "C"
},
{
  "name": "Def Tactic 3",
  "effect": "At start of turn, grants Def+6 to allies within 2 spaces for 1 turn. Granted only if number of that ally's movement type on current team ≤ 2.",
  "spCost": 240,
  "type": "C"
},
{
  "name": "Def Tactic 2",
  "effect": "At start of turn, grants Def+4 to allies within 2 spaces for 1 turn. Granted only if number of that ally's movement type on current team ≤ 2.",
  "spCost": 120,
  "type": "C"
},
{
  "name": "Def Tactic 1",
  "effect": "At start of turn, grants Def+2 to allies within 2 spaces for 1 turn. Granted only if number of that ally's movement type on current team ≤ 2.",
  "spCost": 60,
  "type": "C"
},
{
  "name": "Def Ploy 3",
  "effect": "At start of turn, all foes in cardinal directions with Res 1 or more lower than unit suffer Def-5 until the end of foe's next action.",
  "spCost": 240,
  "type": "C"
},
{
  "name": "Def Ploy 2",
  "effect": "At start of turn, all foes in cardinal directions with Res 1 or more lower than unit suffer Def-4 until the end of foe's next action.",
  "spCost": 120,
  "type": "C"
},
{
  "name": "Def Ploy 1",
  "effect": "At start of turn, all foes in cardinal directions with Res 1 or more lower than unit suffer Def-3 until the end of foe's next action.",
  "spCost": 60,
  "type": "C"
},
{
  "name": "Dagger Valor 3",
  "effect": "If unit survives, all dagger users on team get 2x SP. (If similar skill effects also used, only highest multiplier applied.)",
  "spCost": 120,
  "restrict": "Dagger Users Only",
  "type": "C"
},
{
  "name": "Dagger Valor 2",
  "effect": "If unit survives, all dagger users on team get 1.5x SP. (If similar skill effects also used, only highest multiplier applied.)",
  "spCost": 60,
  "restrict": "Dagger Users Only",
  "type": "C"
},
{
  "name": "Ward Armor",
  "effect": "Grants armored allies within 2 spaces Def/Res+4 during combat.",
  "spCost": 200,
  "restrict": "Armored Only",
  "type": "C"
},
{
  "name": "Ward Cavalry",
  "effect": "Grants cavalry allies within 2 spaces Def/Res+4 during combat.",
  "spCost": 200,
  "restrict": "Cavalry Only",
  "type": "C"
},
{
  "name": "Ward Fliers",
  "effect": "Grants flying allies within 2 spaces Def/Res+4 during combat.",
  "spCost": 200,
  "restrict": "Fliers Only",
  "type": "C"
},
{
  "name": "Dagger Valor 1",
  "effect": "If unit survives and uses a dagger, unit gets 1.5x SP. (If similar skill effects also used, only highest multiplier applied.)",
  "spCost": 30,
  "restrict": "Dagger Users Only",
  "type": "C"
},
{
  "name": "Breath of Life 3",
  "effect": "If unit initiates attack, adjacent allies recover 7 HP after combat.",
  "spCost": 200,
  "type": "C"
},
{
  "name": "Breath of Life 2",
  "effect": "If unit initiates attack, adjacent allies recover 5 HP after combat.",
  "spCost": 100,
  "type": "C"
},
{
  "name": "Breath of Life 1",
  "effect": "If unit initiates attack, adjacent allies recover 3 HP after combat.",
  "spCost": 50,
  "type": "C"
},
{
  "name": "Bow Exp. 3",
  "effect": "If unit survives, all bow users on team get 2x EXP. (If similar skill effects also used, only highest multiplier applies.)",
  "spCost": 120,
  "restrict": "Bow Users Only",
  "type": "C"
},
{
  "name": "Bow Exp. 2",
  "effect": "If unit survives, all bow users on team get 1.5x EXP. (If similar skill effects also used, only highest multiplier applies.)",
  "spCost": 60,
  "restrict": "Bow Users Only",
  "type": "C"
},
{
  "name": "Bow Exp. 1",
  "effect": "If unit survives and uses a bow, unit gets 1.5x EXP. (If similar skill effects also used, only highest multiplier applies.)",
  "spCost": 30,
  "restrict": "Bow Users Only",
  "type": "C"
},
{
  "name": "B Tome Valor 3",
  "effect": "If unit survives, all blue tome users on team get 2x SP. (If similar skill effects also used, only highest multiplier applied.)",
  "spCost": 120,
  "restrict": "Blue Tome Users Only",
  "type": "C"
},
{
  "name": "B Tome Valor 2",
  "effect": "If unit survives, all blue tome users on team get 1.5x SP. (If similar skill effects also used, only highest multiplier applied.)",
  "spCost": 60,
  "restrict": "Blue Tome Users Only",
  "type": "C"
},
{
  "name": "B Tome Valor 1",
  "effect": "If unit survives and uses a blue tome, unit gets 1.5x SP. (If similar skill effects also used, only highest multiplier applied.)",
  "spCost": 30,
  "restrict": "Blue Tome Users Only",
  "type": "C"
},
{
  "name": "B Tome Exp. 3",
  "effect": "If unit survives combat, all blue magic users on team get 2x EXP. (If similar skill effects also used, only highest multiplier applied.)",
  "spCost": 120,
  "restrict": "Blue Tome Users Only",
  "type": "C"
},
{
  "name": "B Tome Exp. 2",
  "effect": "If unit survives combat, all blue magic users on team get 1.5x EXP. (If similar skill effects also used, only highest multiplier applied.)",
  "spCost": 60,
  "restrict": "Blue Tome Users Only",
  "type": "C"
},
{
  "name": "B Tome Exp. 1",
  "effect": "If using blue magic and unit survives combat, unit gets 1.5x EXP. (If similar skill effects also used, only highest multiplier applied.)",
  "spCost": 30,
  "restrict": "Blue Tome Users Only",
  "type": "C"
},
{
  "name": "Axe Valor 3",
  "effect": "If unit survives, all axe users on team get 2x SP. (If similar skill effects also used, only highest multiplier applied.)",
  "spCost": 120,
  "restrict": "Axe Users Only",
  "type": "C"
},
{
  "name": "Axe Valor 2",
  "effect": "If unit survives, all axe users on team get 1.5x SP. (If similar skill effects also used, only highest multiplier applied.)",
  "spCost": 60,
  "restrict": "Axe Users Only",
  "type": "C"
},
{
  "name": "Axe Valor 1",
  "effect": "If unit survives and uses an axe, unit gets 1.5x SP. (If similar skill effects also used, only highest multiplier applied.)",
  "spCost": 30,
  "restrict": "Axe Users Only",
  "type": "C"
},
{
  "name": "Axe Experience 3",
  "effect": "If unit survives, all axe users on team get 2x EXP. (If similar skill effects also used, only highest multiplier applied.)",
  "spCost": 120,
  "restrict": "Axe Users Only",
  "type": "C"
},
{
  "name": "Axe Experience 2",
  "effect": "If unit survives, all axe users on team get 1.5x EXP. (If similar skill effects also used, only highest multiplier applied.)",
  "spCost": 60,
  "restrict": "Axe Users Only",
  "type": "C"
},
{
  "name": "Axe Experience 1",
  "effect": "If unit survives, unit gets 1.5x EXP. (If similar skill effects also used, only highest multiplier applied.)",
  "spCost": 30,
  "restrict": "Axe Users Only",
  "type": "C"
},
{
  "name": "Atk Tactic 3",
  "effect": "At start of turn, grants Atk+6 to allies within 2 spaces for 1 turn. Granted only if number of that ally's movement type on current team ≤ 2.",
  "spCost": 240,
  "type": "C"
},
{
  "name": "Atk Tactic 2",
  "effect": "At start of turn, grants Atk+4 to allies within 2 spaces for 1 turn. Granted only if number of that ally's movement type on current team ≤ 2.",
  "spCost": 120,
  "type": "C"
},
{
  "name": "Atk Tactic 1",
  "effect": "At start of turn, grants Atk+2 to allies within 2 spaces for 1 turn. Granted only if number of that ally's movement type on current team ≤ 2.",
  "spCost": 60,
  "type": "C"
},
{
  "name": "Atk Smoke 3",
  "effect": "After combat, inflicts Atk-7 on foes within 2 spaces of target through their next actions.",
  "spCost": 240,
  "restrict": "Excludes Staff Users",
  "type": "C"
},
{
  "name": "Atk Smoke 2",
  "effect": "After combat, inflicts Atk-5 on foes within 2 spaces of target through their next actions.",
  "spCost": 120,
  "restrict": "Excludes Staff Users",
  "type": "C"
},
{
  "name": "Atk Smoke 1",
  "effect": "After combat, inflicts Atk-3 on foes within 2 spaces of target through their next actions.",
  "spCost": 60,
  "restrict": "Excludes Staff Users",
  "type": "C"
},
{
  "name": "Atk Ploy 3",
  "effect": "At start of turn, all foes in cardinal directions with Res 1 or more lower than unit suffer Atk-5 until the end of foe's next action.",
  "spCost": 240,
  "type": "C"
},
{
  "name": "Atk Ploy 2",
  "effect": "At start of turn, all foes in cardinal directions with Res 1 or more lower than unit suffer Atk-4 until the end of foe's next action.",
  "spCost": 120,
  "type": "C"
},
{
  "name": "Atk Ploy 1",
  "effect": "At start of turn, all foes in cardinal directions with Res 1 or more lower than unit suffer Atk-3 until the end of foe's next action.",
  "spCost": 60,
  "type": "C"
},
{
  "name": "Armor March 3",
  "effect": "If unit has an adjacent armored ally at the start of turn, unit and any such allies can move 1 extra space. (That turn only; does not stack.)",
  "spCost": 240,
  "restrict": "Armored Only",
  "type": "C"
},
{
  "name": "Armor March 1",
  "effect": "If unit has 100% HP and an adjacent armored ally at start of turn, unit and any such allies can move 1 extra space. (That turn only; does not stack.)",
  "spCost": 60,
  "restrict": "Armored Only",
  "type": "C"
}
]