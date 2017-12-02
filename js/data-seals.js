let SEALS = [
{
	"name": "Atk Ploy 1",
	"effect": "At start of turn, all foes in cardinal directions with Res 1 or more lower than unit suffer Atk-3 until the end of foe's next action.",
	"type": "SEAL"
},
{
	"name": "Atk Ploy 2",
	"effect": "At start of turn, all foes in cardinal directions with Res 1 or more lower than unit suffer Atk-4 until the end of foe's next action.",
	"type": "SEAL"
},
{
	"name": "Atk Ploy 3",
	"effect": "At start of turn, all foes in cardinal directions with Res 1 or more lower than unit suffer Atk-5 until the end of foe's next action.",
	"type": "SEAL"
},
{	
	"name": "Attack +1",
	"effect": "Grants Atk+1.",
	"type": "SEAL",
	"stats": {"atk": 1}
},
{	
	"name": "Attack +2",
	"effect": "Grants Atk+2.",
	"type": "SEAL",
	"stats": {"atk": 2}
},
{	
	"name": "Attack +3",
	"effect": "Grants Atk+3.",
	"type": "SEAL",
	"stats": {"atk": 3}
},
{
  "name": "Atk Smoke 1",
  "effect": "After combat, inflicts Atk-3 on foes within 2 spaces of target through their next actions.",
  "type": "SEAL"
},
{
  "name": "Atk Smoke 2",
  "effect": "After combat, inflicts Atk-5 on foes within 2 spaces of target through their next actions.",
  "type": "SEAL"
},
{
  "name": "Atk Smoke 3",
  "effect": "After combat, inflicts Atk-7 on foes within 2 spaces of target through their next actions.",
  "type": "SEAL"
},
{
  "name": "Brash Assault 1",
  "effect": "Unit automatically makes a follow-up when at HP ≤ 30% and attacking a foe that can counter.",
  "type": "SEAL"
},
{
  "name": "Brash Assault 2",
  "effect": "Unit automatically makes a follow-up when at HP ≤ 40% and attacking a foe that can counter.",
  "type": "SEAL"
},
{
  "name": "Brash Assault 3",
  "effect": "Unit automatically makes a follow-up when at HP ≤ 50% and attacking a foe that can counter.",
  "type": "SEAL"
},
{
  "name": "Breath of Life 1",
  "effect": "If unit initiates attack, adjacent allies recover 3 HP after combat.",
  "type": "SEAL"
},
{
  "name": "Breath of Life 2",
  "effect": "If unit initiates attack, adjacent allies recover 5 HP after combat.",
  "type": "SEAL"
},
{
  "name": "Breath of Life 3",
  "effect": "If unit initiates attack, adjacent allies recover 7 HP after combat.",
  "type": "SEAL"
},
{
  "name": "Close Def 1",
  "effect": "If unit is attacked by foe using sword, axe, lance, or dragonstone, unit receives Def/Res+2 during combat.",
  "type": "SEAL"
},
{
  "name": "Close Def 2",
  "effect": "If unit is attacked by foe using sword, axe, lance, or dragonstone, unit receives Def/Res+4 during combat.",
  "type": "SEAL"
},
{
  "name": "Close Def 3",
  "effect": "If unit is attacked by foe using sword, axe, lance, or dragonstone, unit receives Def/Res+6 during combat.",
  "type": "SEAL"
},
{
  "name": "Defense +1",
  "effect": "Grants Def+1.",
  "type": "SEAL",
  "stats": {"def": 1}
},
{
  "name": "Defense +2",
  "effect": "Grants Def+2.",
  "type": "SEAL",
  "stats": {"def": 2}
},
{
  "name": "Defense +3",
  "effect": "Grants Def+3.",
  "type": "SEAL",
  "stats": {"def": 1}
},
{
  "name": "Deflect Magic 1",
  "effect": "If unit receives consecutive attacks from a foe using magic, damage from second attack onward reduced by 30%.",
  "type": "SEAL"
},
{
  "name": "Deflect Magic 2",
  "effect": "If unit receives consecutive attacks from a foe using magic, damage from second attack onward reduced by 50%.",
  "type": "SEAL"
},
{
  "name": "Deflect Magic 3",
  "effect": "If unit receives consecutive attacks from a foe using magic, damage from second attack onward reduced by 80%.",
  "type": "SEAL"
},
{
  "name": "Deflect Melee 1",
  "effect": "If unit receives consecutive attacks from a foe using a sword, lance, or axe, damage from second attack onward reduced by 30%.",
  "type": "SEAL"
},
{
  "name": "Deflect Melee 2",
  "effect": "If unit receives consecutive attacks from a foe using a sword, lance, or axe, damage from second attack onward reduced by 50%.",
  "type": "SEAL"
},
{
  "name": "Deflect Melee 3",
  "effect": "If unit receives consecutive attacks from a foe using a sword, lance, or axe, damage from second attack onward reduced by 80%.",
  "type": "SEAL"
},
{
  "name": "Deflect Missile 1",
  "effect": "If unit receives consecutive attacks from a foe using a bow or dagger, damage from second attack onward reduced by 30%.",
  "type": "SEAL"
},
{
  "name": "Deflect Missile 2",
  "effect": "If unit receives consecutive attacks from a foe using a bow or dagger, damage from second attack onward reduced by 50%.",
  "type": "SEAL"
},
{
  "name": "Deflect Missile 3",
  "effect": "If unit receives consecutive attacks from a foe using a bow or dagger, damage from second attack onward reduced by 80%.",
  "type": "SEAL"
},
{
  "name": "Distant Def 1",
  "effect": "If unit is attacked by foe using bow, daggers, magic, or staff, unit receives Def/Res+2 during combat.",
  "type": "SEAL"
},
{
  "name": "Distant Def 2",
  "effect": "If unit is attacked by foe using bow, daggers, magic, or staff, unit receives Def/Res+4 during combat.",
  "type": "SEAL"
},
{
  "name": "Distant Def 3",
  "effect": "If unit is attacked by foe using bow, daggers, magic, or staff, unit receives Def/Res+6 during combat.",
  "type": "SEAL"
},
{
  "name": "Embla's Ward",
  "effect": "Unit receives 0 damage.",
  "type": "SEAL",
  "restricted": true
},
{
  "name": "Fortify Def 1",
  "effect": "Grants adjacent allies Def+2 through their next actions at the start of each turn.",
  "type": "SEAL"
},
{
  "name": "Fortify Def 2",
  "effect": "Grants adjacent allies Def+3 through their next actions at the start of each turn.",
  "type": "SEAL"
},
{
  "name": "Fortify Def 3",
  "effect": "Grants adjacent allies Def+4 through their next actions at the start of each turn.",
  "type": "SEAL"
},
{
  "name": "Fortify Res 1",
  "effect": "Grants adjacent allies Res+2 through their next actions at the start of each turn.",
  "type": "SEAL"
},
{
  "name": "Fortify Res 2",
  "effect": "Grants adjacent allies Res+3 through their next actions at the start of each turn.",
  "type": "SEAL"
},
{
  "name": "Fortify Res 3",
  "effect": "Grants adjacent allies Res+4 through their next actions at the start of each turn.",
  "type": "SEAL"
},
{
  "name": "Guidance 1",
  "effect": "If unit has 100% HP, infantry and armored allies within 2 spaces can move to a space adjacent to unit.",
  "type": "SEAL",
  "moveType": ["Flying"]
},
{
  "name": "Guidance 2",
  "effect": "If unit has ≥ 50% HP, infantry and armored allies within 2 spaces can move to a space adjacent to unit.",
  "type": "SEAL",
  "moveType": ["Flying"]
},
{
  "name": "Guidance 3",
  "effect": "Infantry and armored allies within 2 spaces can move to a space adjacent to unit.",
  "type": "SEAL",
  "moveType": ["Flying"]
},
{
  "name": "HP +3",
  "effect": "Grants +3 to max HP.",
  "type": "SEAL",
  "stats": {"hp": 3}
},
{
  "name": "HP +4",
  "effect": "Grants +4 to max HP.",
  "type": "SEAL",
  "stats": {"hp": 4}
},
{
  "name": "HP +5",
  "effect": "Grants +5 to max HP.",
  "type": "SEAL",
  "stats": {"hp": 5}
},
{
  "name": "Hardy Bearing 1",
  "effect": "Disables skills that change unit's attack priority. If unit has 100% HP at start of battle, enemy skills that change attack priority are also disabled.",
  "type": "SEAL"
},
{
  "name": "Hardy Bearing 2",
  "effect": "Disables skills that change unit's attack priority. If unit has ≥ 50% HP at start of battle, enemy skills that change attack priority are also disabled.",
  "type": "SEAL"
},
{
  "name": "Hardy Bearing 3",
  "effect": "Disables skills that change unit's attack priority. Enemy skills that change attack priority are also disabled.",
  "type": "SEAL"
},
{
  "name": "Hone Spd 1",
  "effect": "Grants adjacent allies Spd+2 through their next actions at the start of each turn.",
  "type": "SEAL"
},
{
  "name": "Hone Spd 2",
  "effect": "Grants adjacent allies Spd+3 through their next actions at the start of each turn.",
  "type": "SEAL"
},
{
  "name": "Hone Spd 3",
  "effect": "Grants adjacent allies Spd+4 through their next actions at the start of each turn.",
  "type": "SEAL"
},
{
  "name": "Múspellflame",
  "effect": "Unit receives 0 damage.",
  "type": "SEAL",
  "restricted": true
},
{
  "name": "Panic Ploy 1",
  "effect": "At start of turn, bonuses become penalties on all foes in cardinal directions with HP 5 or more lower than unit through foe's next action.",
  "type": "SEAL"
},
{
  "name": "Panic Ploy 2",
  "effect": "At start of turn, bonuses become penalties on all foes in cardinal directions with HP 3 or more lower than unit through foe's next action.",
  "type": "SEAL"
},
{
  "name": "Panic Ploy 3",
  "effect": "At start of turn, bonuses become penalties on all foes in cardinal directions with HP 1 or more lower than unit through foe's next action.",
  "type": "SEAL"
},
{
  "name": "Phantom Spd 1",
  "effect": "When any skill compares this unit's Spd stat to another unit's, this unit's Spd stat is counted as +5 over actual value.",
  "type": "SEAL"
},
{
  "name": "Phantom Spd 2",
  "effect": "When any skill compares this unit's Spd stat to another unit's, this unit's Spd stat is counted as +8 over actual value.",
  "type": "SEAL"
},
{
  "name": "Phantom Spd 3",
  "effect": "When any skill compares this unit's Spd stat to another unit's, this unit's Spd stat is counted as +10 over actual value.",
  "type": "SEAL"
},
{
  "name": "Quickened Pulse",
  "effect": "Special cooldown count -1 at start of Turn 1.",
  "type": "SEAL"
},
{
  "name": "Resistance +1",
  "effect": "Grants Res+1.",
  "type": "SEAL",
  "stats": {"res": 1}
},
{
  "name": "Resistance +2",
  "effect": "Grants Res+2.",
  "type": "SEAL",
  "stats": {"res": 2}
},
{
  "name": "Resistance +3",
  "effect": "Grants Res+3.",
  "type": "SEAL",
  "stats": {"res": 1}
},
{
  "name": "Savage Blow 1",
  "effect": "If unit initiates attack, foes within 2 spaces of target take 3 damage after combat.",
  "type": "SEAL"
},
{
  "name": "Savage Blow 2",
  "effect": "If unit initiates attack, foes within 2 spaces of target take 5 damage after combat.",
  "type": "SEAL"
},
{
  "name": "Savage Blow 3",
  "effect": "If unit initiates attack, foes within 2 spaces of target take 7 damage after combat.",
  "type": "SEAL"
},
{
  "name": "Speed +1",
  "effect": "Grants Spd+1.",
  "type": "SEAL",
  "stats": {"spd": 1}
},
{
  "name": "Speed +2",
  "effect": "Grants Spd+2.",
  "type": "SEAL",
  "stats": {"spd": 2}
},
{
  "name": "Speed +3",
  "effect": "Grants Spd+3.",
  "type": "SEAL",
  "stats": {"spd": 3}
},
{
  "name": "Spur Atk 1",
  "effect": "Grants adjacent allies Atk+2 during combat.",
  "type": "SEAL"
},
{
  "name": "Spur Atk 2",
  "effect": "Grants adjacent allies Atk+3 during combat.",
  "type": "SEAL"
},
{
  "name": "Spur Atk 3",
  "effect": "Grants adjacent allies Atk+4 during combat.",
  "type": "SEAL"
},
{
  "name": "Spur Def 1",
  "effect": "Grants adjacent allies Def+2 during combat.",
  "type": "SEAL"
},
{
  "name": "Spur Def 2",
  "effect": "Grants adjacent allies Def+3 during combat.",
  "type": "SEAL"
},
{
  "name": "Spur Def 3",
  "effect": "Grants adjacent allies Def+4 during combat.",
  "type": "SEAL"
},
{
  "name": "Spur Res 1",
  "effect": "Grants adjacent allies Res+2 during combat.",
  "type": "SEAL"
},
{
  "name": "Spur Res 2",
  "effect": "Grants adjacent allies Res+3 during combat.",
  "type": "SEAL"
},
{
  "name": "Spur Res 3",
  "effect": "Grants adjacent allies Res+4 during combat.",
  "type": "SEAL"
},
{
  "name": "Spur Spd 1",
  "effect": "Grants adjacent allies Spd+2 during combat.",
  "type": "SEAL"
},
{
  "name": "Spur Spd 2",
  "effect": "Grants adjacent allies Spd+3 during combat.",
  "type": "SEAL"
},
{
  "name": "Spur Spd 3",
  "effect": "Grants adjacent allies Spd+4 during combat.",
  "type": "SEAL"
},
{
  "name": "Squad Ace A 1",
  "effect": "Grants HP+3.",
  "type": "SEAL",
  "stats": {"hp": 3}
},
{
  "name": "Squad Ace A 2",
  "effect": "Grants HP+4.",
  "type": "SEAL",
  "stats": {"hp": 4}
},
{
  "name": "Squad Ace A 3",
  "effect": "Grants HP+5.",
  "type": "SEAL",
  "stats": {"hp": 5}
},
{
  "name": "Squad Ace B 1",
  "effect": "Grants Def+1.",
  "type": "SEAL",
  "stats": {"def": 1}
},
{
  "name": "Squad Ace B 2",
  "effect": "Grants Def+2.",
  "type": "SEAL",
  "stats": {"def": 2}
},
{
  "name": "Squad Ace B 3",
  "effect": "Grants Def+3.",
  "type": "SEAL",
  "stats": {"def": 3}
},
{
  "name": "Squad Ace C 1",
  "effect": "Grants Res+1.",
  "type": "SEAL",
  "stats": {"res": 1}
},
{
  "name": "Squad Ace C 2",
  "effect": "Grants Res+2.",
  "type": "SEAL",
  "stats": {"res": 2}
},
{
  "name": "Squad Ace C 3",
  "effect": "Grants Res+3.",
  "type": "SEAL",
  "stats": {"res": 3}
},
{
  "name": "Squad Ace D 1",
  "effect": "Grants Spd+1.",
  "type": "SEAL",
  "stats": {"spd": 1}
},
{
  "name": "Squad Ace D 2",
  "effect": "Grants Spd+2.",
  "type": "SEAL",
  "stats": {"spd": 2}
},
{
  "name": "Squad Ace D 3",
  "effect": "Grants Spd+3.",
  "type": "SEAL",
  "stats": {"spd": 3}
},
{
  "name": "Squad Ace E 1",
  "effect": "Grants Atk+1.",
  "type": "SEAL",
  "stats": {"atk": 1}
},
{
  "name": "Squad Ace E 2",
  "effect": "Grants Atk+2.",
  "type": "SEAL",
  "stats": {"atk": 2}
},
{
  "name": "Squad Ace E 3",
  "effect": "Grants Atk+3.",
  "type": "SEAL",
  "stats": {"atk": 3}
}
]