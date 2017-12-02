let SKILL_WEAPON = [
    {
      "name": "Absorb", "spCost": 150, "damage": 4, "range": 2,
      "effect": "Recovers HP=50% of damage dealt.",
      "type": "WEAPON", "weaponType": "Staff", "colorType": "Neutral"
    },
    {
      "name": "Absorb+", "spCost": 300, "damage": 7, "range": 2,
      "effect": "Recovers HP = 50% of damage dealt. After combat, restores 7 HP to allies within 2 spaces of unit.",
      "type": "WEAPON", "weaponType": "Staff", "colorType": "Neutral"
    },
    {
      "name": "Alondite", "spCost": 400, "damage": 16, "range": 1,
      "effect": "Enables counterattack regardless of distance if this unit is attacked.",
      "exclusive": ["Black Knight"], "type": "WEAPON", "weaponType": "Sword", "colorType": "Red"
    },
    {
      "name": "Amiti", "spCost": 400, "damage": 11, "range": 1,
      "effect": "Spd-2. Attack twice when initiating combat.",
      "exclusive": ["Elincia"], "type": "WEAPON", "weaponType": "Sword", "colorType": "Red", "stats": { "spd": -2 }
    },
    {
      "name": "Armads", "spCost": 400, "damage": 16, "range": 1,
      "effect": "Unit makes a guaranteed follow-up attack when attacked at HP ≥ 80%.",
      "exclusive": ["Hector"], "type": "WEAPON", "weaponType": "Axe", "colorType": "Green"
    },
    {
      "name": "Armorslayer", "spCost": 200, "damage": 8, "range": 1,
      "effect": "Effective against armored units.",
      "type": "WEAPON", "weaponType": "Sword", "colorType": "Red"
    },
    {
      "name": "Armorslayer+", "spCost": 300, "damage": 12, "range": 1,
      "effect": "Effective against armored units.",
      "type": "WEAPON", "weaponType": "Sword", "colorType": "Red"
    },
    {
      "name": "Armorsmasher", "spCost": 200, "damage": 0, "range": 1,
      "effect": "Effective against armored units.",
      "type": "WEAPON", "weaponType": "Sword", "colorType": "Red"
    },
    {
      "name": "Armorsmasher+", "spCost": 300, "damage": 14, "range": 1,
      "effect": "Effective against armored foes.",
      "type": "WEAPON", "weaponType": "Sword", "colorType": "Red"
    },
    {
      "name": "Assassin's Bow", "spCost": 200, "damage": 7, "range": 2,
      "effect": "Effective against flying units.  If target has a dagger, it can't make a follow-up attack and this unit will.",
      "type": "WEAPON", "weaponType": "Bow", "colorType": "Neutral"
    },
    {
      "name": "Assassin's Bow+", "spCost": 300, "damage": 11, "range": 2,
      "effect": "Effective against flying units.  If target has a dagger, it can't make a follow-up attack and this unit will.",
      "type": "WEAPON", "weaponType": "Bow", "colorType": "Neutral"
    },
    {
      "name": "Assault", "spCost": 50, "damage": 10, "range": 2,
      "effect": "-",
      "type": "WEAPON", "weaponType": "Staff", "colorType": "Neutral"
    },
    {
      "name": "Audhulma", "spCost": 400, "damage": 16, "range": 1,
      "effect": "Accelerates Special trigger (cooldown count-1). Grants Res+5.",
      "exclusive": ["Joshua"], "type": "WEAPON", "weaponType": "Sword", "colorType": "Red", "stats": { "res": 5 }
    },
    {
      "name": "Aura", "spCost": 400, "damage": 14, "range": 2,
      "effect": "Restores 5 HP to adjacent allies after any combat this unit initiates.",
      "exclusive": ["Linde"], "type": "WEAPON", "weaponType": "Tome", "colorType": "Blue"
    },
    {
      "name": "Ayra's Blade", "spCost": 400, "damage": 16, "range": 1,
      "effect": "Grants Spd+3. If unit's Spd - foe's Spd ≥ 1, gain Special cooldown charge +1 per attack. (If similar skill also used, only highest value applied.)",
      "exclusive": ["Ayra"], "type": "WEAPON", "weaponType": "Sword", "colorType": "Red", "stats": { "spd": 3 }
    },
    {
      "name": "Berkut's Lance", "spCost": 200, "damage": 10, "range": 1,
      "effect": "Grants Res+4 when the unit is under attack.",
      "type": "WEAPON", "weaponType": "Lance", "colorType": "Blue"
    },
    {
      "name": "Berkut's Lance+", "spCost": 300, "damage": 14, "range": 1,
      "effect": "Grants Res+4 when the unit is under attack.",
      "type": "WEAPON", "weaponType": "Lance", "colorType": "Blue"
    },
    {
      "name": "Binding Blade", "spCost": 400, "damage": 16, "range": 1,
      "effect": "Grants Def/Res+2 when this unit is attacked.",
      "exclusive": ["Roy"], "type": "WEAPON", "weaponType": "Sword", "colorType": "Red"
    },
    {
      "name": "Blárblade", "spCost": 200, "damage": 9, "range": 2,
      "effect": "Slows Special trigger (cooldown count+1). Adds total bonuses on unit to damage dealt.",
      "type": "WEAPON", "weaponType": "Tome", "colorType": "Blue"
    },
    {
      "name": "Blárblade+", "spCost": 300, "damage": 13, "range": 2,
      "effect": "Slows Special trigger (cooldown count+1). Adds total bonuses on unit to damage dealt.",
      "type": "WEAPON", "weaponType": "Tome", "colorType": "Blue"
    },
    {
      "name": "Blárowl", "spCost": 200, "damage": 6, "range": 2,
      "effect": "During combat, unit's Atk/Spd/Def/Res boosted by number of adjacent allies x 2.",
      "type": "WEAPON", "weaponType": "Tome", "colorType": "Blue"
    },
    {
      "name": "Blárowl+", "spCost": 300, "damage": 10, "range": 2,
      "effect": "During combat, unit's Atk/Spd/Def/Res boosted by number of adjacent allies x 2.",
      "type": "WEAPON", "weaponType": "Tome", "colorType": "Blue"
    },
    {
      "name": "Blárraven", "spCost": 200, "damage": 7, "range": 2,
      "effect": "Grants weapon advantage vs. colorless foes.",
      "type": "WEAPON", "weaponType": "Tome", "colorType": "Blue"
    },
    {
      "name": "Blárraven+", "spCost": 300, "damage": 11, "range": 2,
      "effect": "Grants weapon advantage vs. colorless foes.",
      "type": "WEAPON", "weaponType": "Tome", "colorType": "Blue"
    },
    {
      "name": "Blárwolf", "spCost": 200, "damage": 6, "range": 2,
      "effect": "Effective against cavalry units.",
      "type": "WEAPON", "weaponType": "Tome", "colorType": "Blue"
    },
    {
      "name": "Blárwolf+", "spCost": 300, "damage": 10, "range": 2,
      "effect": "Effective against cavalry units.",
      "type": "WEAPON", "weaponType": "Tome", "colorType": "Blue"
    },
    {
      "name": "Blazing Durandal", "spCost": 400, "damage": 16, "range": 1,
      "effect": "Grants Atk+3. If unit's Atk > foe's, unit gains Special cooldown charge +1. (If using other similar skill, only highest value applied.)",
      "exclusive": ["Roy","Eliwood"], "type": "WEAPON", "weaponType": "Sword", "colorType": "Red", "stats": { "atk": 3 }
    },
    {
      "name": "Blessed Bouquet", "spCost": 200, "damage": 8, "range": 2,
      "effect": "Grants allies within 2 spaces Def/Res+2 through their next actions after any combat this unit initiates.",
      "type": "WEAPON", "weaponType": "Tome", "colorType": "Blue"
    },
    {
      "name": "Blessed Bouquet+", "spCost": 300, "damage": 12, "range": 2,
      "effect": "Grants allies within 2 spaces Def/Res+2 through their next actions after any combat this unit initiates.",
      "type": "WEAPON", "weaponType": "Tome", "colorType": "Blue"
    },
    {
      "name": "Blue Egg", "spCost": 200, "damage": 7, "range": 2,
      "effect": "If unit initiates attack, unit recovers 4 HP after the battle.",
      "type": "WEAPON", "weaponType": "Tome", "colorType": "Blue"
    },
    {
      "name": "Blue Egg+", "spCost": 300, "damage": 11, "range": 2,
      "effect": "If unit initiates attack, unit recovers 4 HP after the battle.",
      "type": "WEAPON", "weaponType": "Tome", "colorType": "Blue"
    },
    {
      "name": "Bolganone", "spCost": 200, "damage": 9, "range": 2,
      "effect": "-",
      "type": "WEAPON", "weaponType": "Tome", "colorType": "Red"
    },
    {
      "name": "Bolganone+", "spCost": 300, "damage": 13, "range": 2,
      "effect": "-",
      "type": "WEAPON", "weaponType": "Tome", "colorType": "Red"
    },
    {
      "name": "Brave Axe", "spCost": 200, "damage": 5, "range": 1,
      "effect": "Spd-5. Attack twice when initiating combat.",
      "type": "WEAPON", "weaponType": "Axe", "colorType": "Green", "stats": { "spd": -5 }
    },
    {
      "name": "Brave Axe+", "spCost": 300, "damage": 8, "range": 1,
      "effect": "Spd-5. Attack twice when initiating combat.",
      "type": "WEAPON", "weaponType": "Axe", "colorType": "Green", "stats": { "spd": -5 }
    },
    {
      "name": "Brave Bow", "spCost": 200, "damage": 4, "range": 2,
      "effect": "Spd-5. Effective against flying units.  Attacks twice if unit initiates combat.",
      "type": "WEAPON", "weaponType": "Bow", "colorType": "Neutral", "stats": { "spd": -5 }
    },
    {
      "name": "Brave Bow+", "spCost": 300, "damage": 7, "range": 2,
      "effect": "Spd-5. Effective against flying units.  Attacks twice if unit initiates combat.",
      "type": "WEAPON", "weaponType": "Bow", "colorType": "Neutral", "stats": { "spd": -5 }
    },
    {
      "name": "Brave Lance", "spCost": 200, "damage": 5, "range": 1,
      "effect": "Spd-5. Attack twice when initiating combat.",
      "type": "WEAPON", "weaponType": "Lance", "colorType": "Blue", "stats": { "spd": -5 }
    },
    {
      "name": "Brave Lance+", "spCost": 300, "damage": 8, "range": 1,
      "effect": "Spd-5. Attack twice when initiating combat.",
      "type": "WEAPON", "weaponType": "Lance", "colorType": "Blue", "stats": { "spd": -5 }
    },
    {
      "name": "Brave Sword", "spCost": 200, "damage": 5, "range": 1,
      "effect": "Spd-5. Attack twice when initiating combat.",
      "type": "WEAPON", "weaponType": "Sword", "colorType": "Red", "stats": { "spd": -5 }
    },
    {
      "name": "Brave Sword+", "spCost": 300, "damage": 8, "range": 1,
      "effect": "Spd-5. Attack twice when initiating combat.",
      "type": "WEAPON", "weaponType": "Sword", "colorType": "Red", "stats": { "spd": -5 }
    },
    {
      "name": "Bright Naginata", "spCost": 400, "damage": 16, "range": 1,
      "effect": "Grants Atk/Def+4 during combat if unit initiates combat.",
      "exclusive": ["Shiro"], "type": "WEAPON", "weaponType": "Lance", "colorType": "Blue"
    },
    {
      "name": "Brynhildr", "spCost": 400, "damage": 14, "range": 2,
      "effect": "If unit initiates attack, restricts foe's next-turn movement to 1 space or less.",
      "exclusive": ["Leo"], "type": "WEAPON", "weaponType": "Tome", "colorType": "Red"
    },
    {
      "name": "Candlelight", "spCost": 150, "damage": 7, "range": 2,
      "effect": "After combat, foe inflicted with status preventing them from counterattacking.",
      "type": "WEAPON", "weaponType": "Staff", "colorType": "Neutral"
    },
    {
      "name": "Candlelight+", "spCost": 300, "damage": 11, "range": 2,
      "effect": "After combat, foe and foes within 2 spaces of target inflicted with status preventing counterattack through their next actions.",
      "type": "WEAPON", "weaponType": "Staff", "colorType": "Neutral"
    },
    {
      "name": "Carrot Axe", "spCost": 200, "damage": 9, "range": 1,
      "effect": "If unit initiates attack, unit recovers 4 HP after the battle.",
      "type": "WEAPON", "weaponType": "Axe", "colorType": "Green"
    },
    {
      "name": "Carrot Axe+", "spCost": 300, "damage": 13, "range": 1,
      "effect": "If unit initiates attack, unit recovers 4 HP after the battle.",
      "type": "WEAPON", "weaponType": "Axe", "colorType": "Green"
    },
    {
      "name": "Carrot Lance", "spCost": 200, "damage": 9, "range": 1,
      "effect": "If unit initiates attack, unit recovers 4 HP after the battle.",
      "type": "WEAPON", "weaponType": "Lance", "colorType": "Blue"
    },
    {
      "name": "Carrot Lance+", "spCost": 300, "damage": 13, "range": 1,
      "effect": "If unit initiates attack, unit recovers 4 HP after the battle.",
      "type": "WEAPON", "weaponType": "Lance", "colorType": "Blue"
    },
    {
      "name": "Clarisse's Bow", "spCost": 200, "damage": 7, "range": 2,
      "effect": "After this unit attacks, foes within 2 spaces of target suffer Atk/Spd-5 through their next actions. Effective against flying units.",
      "type": "WEAPON", "weaponType": "Bow", "colorType": "Neutral"
    },
    {
      "name": "Clarisse's Bow+", "spCost": 300, "damage": 11, "range": 2,
      "effect": "After this unit attacks, foes within 2 spaces of target suffer Atk/Spd-5 through their next actions. Effective against flying units.",
      "type": "WEAPON", "weaponType": "Bow", "colorType": "Neutral"
    },
    {
      "name": "Cupid Arrow", "spCost": 200, "damage": 8, "range": 2,
      "effect": "Grants allies within 2 spaces Def/Res+2 through their next actions after any combat this unit initiates. Effective against fliers.",
      "type": "WEAPON", "weaponType": "Bow", "colorType": "Neutral"
    },
    {
      "name": "Cupid Arrow+", "spCost": 300, "damage": 12, "range": 2,
      "effect": "Grants allies within 2 spaces Def/Res+2 through their next actions after any combat this unit initiates. Effective against fliers.",
      "type": "WEAPON", "weaponType": "Bow", "colorType": "Neutral"
    },
    {
      "name": "Cursed Lance", "spCost": 400, "damage": 16, "range": 1,
      "effect": "Grants Atk/Spd+2 and accelerates Special trigger (cooldown count-1). Unit takes 4 damage after combat.",
      "exclusive": ["Valter"], "type": "WEAPON", "weaponType": "Lance", "colorType": "Blue", "stats": { "atk": 2, "spd": 2 }
    },
    {
      "name": "Cymbeline", "spCost": 400, "damage": 14, "range": 2,
      "effect": "Grants adjacent allies Atk+4 through their next actions after any combat this unit initiates.",
      "exclusive": ["Sanaki"], "type": "WEAPON", "weaponType": "Tome", "colorType": "Red"
    },
    {
      "name": "Dancer's Fan", "spCost": 200, "damage": 7, "range": 2,
      "effect": "If unit initiates attack, adjacent allies recover 7 HP after combat. Also, enemy suffers Def/Res-5 after combat until the end of foe's next action.",
      "type": "WEAPON", "weaponType": "Dagger", "colorType": "Neutral"
    },
    {
      "name": "Dancer's Fan+", "spCost": 300, "damage": 10, "range": 2,
      "effect": "If unit initiates attack, adjacent allies recover 7 HP after combat. Also, enemy suffers Def/Res-7 after combat until the end of foe's next action.",
      "type": "WEAPON", "weaponType": "Dagger", "colorType": "Neutral"
    },
    {
      "name": "Dancer's Ring", "spCost": 200, "damage": 8, "range": 2,
      "effect": "If unit initiates attack, adjacent allies recover 7 HP after combat.",
      "type": "WEAPON", "weaponType": "Tome", "colorType": "Green"
    },
    {
      "name": "Dancer's Ring+", "spCost": 300, "damage": 12, "range": 2,
      "effect": "If unit initiates attack, adjacent allies recover 7 HP after combat.",
      "type": "WEAPON", "weaponType": "Tome", "colorType": "Green"
    },
    {
      "name": "Dancer's Score", "spCost": 200, "damage": 8, "range": 2,
      "effect": "If unit initiates attack, adjacent allies recover 7 HP after combat.",
      "type": "WEAPON", "weaponType": "Tome", "colorType": "Blue"
    },
    {
      "name": "Dancer's Score+", "spCost": 300, "damage": 12, "range": 2,
      "effect": "If unit initiates attack, adjacent allies recover 7 HP after combat.",
      "type": "WEAPON", "weaponType": "Tome", "colorType": "Blue"
    },
    {
      "name": "Dark Aura", "spCost": 400, "damage": 14, "range": 2,
      "effect": "Grants adjacent allies who use swords, axes, lances, or dragonstones Atk+6 through their next actions at the start of each turn.",
      "exclusive": ["Delthea", "Linde"], "type": "WEAPON", "weaponType": "Tome", "colorType": "Blue"
    },
    {
      "name": "Dark Breath", "spCost": 200, "damage": 9, "range": 1,
      "effect": "After this unit attacks, foes within 2 spaces of target suffer Atk/Spd-5 through their next actions.",
      "type": "WEAPON", "weaponType": "Breath"
    },
    {
      "name": "Dark Breath+", "spCost": 300, "damage": 13, "range": 1,
      "effect": "After this unit attacks, foes within 2 spaces of target suffer Atk/Spd-5 through their next actions.",
      "type": "WEAPON", "weaponType": "Breath"
    },
    {
      "name": "Dark Excalibur", "spCost": 400, "damage": 14, "range": 2,
      "effect": "Grants +10 to damage when Special triggers.",
      "exclusive": ["Merric", "Sonya"], "type": "WEAPON", "weaponType": "Tome", "colorType": "Green"
    },
    {
      "name": "Dark Greatsword", "spCost": 400, "damage": 16, "range": 1,
      "effect": "Grants Atk/Spd+4 during combat if unit initiates combat.",
      "exclusive": ["Siegbert"], "type": "WEAPON", "weaponType": "Sword", "colorType": "Red"
    },
    {
      "name": "Deathly Dagger", "spCost": 400, "damage": 11, "range": 2,
      "effect": "After combat, inflicts Def/Res-7 on foe through its next action. If unit initiated combat, 7 damage to foe after battle.",
      "exclusive": ["Jaffar"], "type": "WEAPON", "weaponType": "Dagger", "colorType": "Neutral"
    },
    {
      "name": "Deft Harpoon", "spCost": 200, "damage": 10, "range": 1,
      "effect": "If unit has 100% HP at start of combat, unit gets Atk/Spd/Def/Res+2. If attacking, unit will take 2 damage after combat.",
      "type": "WEAPON", "weaponType": "Lance", "colorType": "Blue"
    },
    {
      "name": "Deft Harpoon+", "spCost": 300, "damage": 14, "range": 1,
      "effect": "If unit has 100% HP at start of combat, unit gets Atk/Spd/Def/Res+2. If attacking, unit will take 2 damage after combat.",
      "type": "WEAPON", "weaponType": "Lance", "colorType": "Blue"
    },
    {
      "name": "Dire Thunder", "spCost": 400, "damage": 9, "range": 2,
      "effect": "Spd-5. Attack twice when initiating combat.",
      "exclusive": ["Reinhardt","Olwen"], "type": "WEAPON", "weaponType": "Tome", "colorType": "Blue", "stats": { "spd": -5 }
    },
    {
      "name": "Divine Naga", "spCost": 400, "damage": 14, "range": 2,
      "effect": "Effective against dragons.  Foe's bonuses (from skills like Fortify, Rally, etc.) are nullified during combat.",
      "exclusive": ["Julia", "Deirdre"], "type": "WEAPON", "weaponType": "Tome", "colorType": "Green"
    },
    {
      "name": "Divine Tyrfing", "spCost": 400, "damage": 16, "range": 1,
      "effect": "Grants Res+3. If in combat against foe using magic, unit receives 50% less damage from the first attack.",
      "exclusive": ["Sigurd","Seliph"], "type": "WEAPON", "weaponType": "Sword", "colorType": "Red", "stats": { "res": 3 }
    },
    {
      "name": "Durandal", "spCost": 400, "damage": 16, "range": 1,
      "effect": "Grants Atk+4 during combat if unit initiates attack.",
      "exclusive": ["Eliwood"], "type": "WEAPON", "weaponType": "Sword", "colorType": "Red"
    },
    {
      "name": "Eckesachs", "spCost": 400, "damage": 16, "range": 1,
      "effect": "Inflicts Def-4 on foes within 2 spaces through their next actions at the start of each turn.",
      "exclusive": ["Zephiel"], "type": "WEAPON", "weaponType": "Sword", "colorType": "Red"
    },
    {
      "name": "Elfire", "spCost": 100, "damage": 6, "range": 2,
      "effect": "-",
      "type": "WEAPON", "weaponType": "Tome", "colorType": "Red"
    },
    {
      "name": "Élivágar", "spCost": 400, "damage": 14, "range": 2,
      "effect": "If unit initiates attack, bonuses on foes within 2 spaces of the target become penalties through their next actions.",
      "exclusive": ["Veronica"], "type": "WEAPON", "weaponType": "Tome", "colorType": "Green"
    },
    {
      "name": "Elthunder", "spCost": 100, "damage": 6, "range": 2,
      "effect": "-",
      "type": "WEAPON", "weaponType": "Tome", "colorType": "Blue"
    },
    {
      "name": "Elwind", "spCost": 100, "damage": 6, "range": 2,
      "effect": "-",
      "type": "WEAPON", "weaponType": "Tome", "colorType": "Green"
    },
    {
      "name": "Emerald Axe", "spCost": 200, "damage": 8, "range": 1,
      "effect": "Gives Atk+20% if weapon-triangle advantage, Atk-20% if disadvantage.",
      "type": "WEAPON", "weaponType": "Axe", "colorType": "Green"
    },
    {
      "name": "Emerald Axe+", "spCost": 300, "damage": 12, "range": 1,
      "effect": "Gives Atk+20% if weapon-triangle advantage, Atk-20% if disadvantage.",
      "type": "WEAPON", "weaponType": "Axe", "colorType": "Green"
    },
    {
      "name": "Excalibur", "spCost": 400, "damage": 14, "range": 2,
      "effect": "Effective against flying units.",
      "exclusive": ["Merric"], "type": "WEAPON", "weaponType": "Tome", "colorType": "Green"
    },
    {
      "name": "Falchion", "spCost": 400, "damage": 16, "range": 1,
      "effect": "Effective against dragons.  At the start of every third turn, unit recovers 10 HP.",
      "exclusive": ["Marth", "Marth (Masked)", "Chrom", "Alm", "Lucina"], "type": "WEAPON", "weaponType": "Sword", "colorType": "Red"
    },
    {
      "name": "Fear", "spCost": 150, "damage": 5, "range": 2,
      "effect": "After combat, inflicts Atk-6 on targeted foe through its next action.",
      "type": "WEAPON", "weaponType": "Staff", "colorType": "Neutral"
    },
    {
      "name": "Fear+", "spCost": 300, "damage": 12, "range": 2,
      "effect": "After combat, inflicts Atk-7 on target and foes within 2 spaces through their next actions.",
      "type": "WEAPON", "weaponType": "Staff", "colorType": "Neutral"
    },
    {
      "name": "Fenrir", "spCost": 200, "damage": 9, "range": 2,
      "effect": "-",
      "type": "WEAPON", "weaponType": "Tome", "colorType": "Red"
    },
    {
      "name": "Fenrir+", "spCost": 300, "damage": 13, "range": 2,
      "effect": "-",
      "type": "WEAPON", "weaponType": "Tome", "colorType": "Red"
    },
    {
      "name": "Fensalir", "spCost": 400, "damage": 16, "range": 1,
      "effect": "Inflicts Atk-4 on foes within 2 spaces through their next actions at the start of each turn.",
      "exclusive": ["Sharena"], "type": "WEAPON", "weaponType": "Lance", "colorType": "Blue"
    },
    {
      "name": "Fire", "spCost": 50, "damage": 4, "range": 2,
      "effect": "-",
      "type": "WEAPON", "weaponType": "Tome", "colorType": "Red"
    },
    {
      "name": "Fire Breath", "spCost": 50, "damage": 6, "range": 1,
      "effect": "-",
      "type": "WEAPON", "weaponType": "Breath"
    },
    {
      "name": "Fire Breath+", "spCost": 100, "damage": 8, "range": 1,
      "effect": "-",
      "type": "WEAPON", "weaponType": "Breath"
    },
    {
      "name": "Firesweep Bow", "spCost": 200, "damage": 7, "range": 2,
      "effect": "Effective against fliers.  Unit and enemies cannot use counterattacks.",
      "type": "WEAPON", "weaponType": "Bow", "colorType": "Neutral"
    },
    {
      "name": "Firesweep Bow+", "spCost": 300, "damage": 11, "range": 2,
      "effect": "Effective against fliers.  Unit and enemies cannot use counterattacks.",
      "type": "WEAPON", "weaponType": "Bow", "colorType": "Neutral"
    },
    {
      "name": "Firesweep Lance", "spCost": 200, "damage": 11, "range": 1,
      "effect": "Unit and enemies cannot use counterattacks.",
      "type": "WEAPON", "weaponType": "Lance", "colorType": "Blue"
    },
    {
      "name": "Firesweep Lance+", "spCost": 300, "damage": 15, "range": 1,
      "effect": "Unit and enemies cannot use counterattacks.",
      "type": "WEAPON", "weaponType": "Lance", "colorType": "Blue"
    },
    {
      "name": "Firesweep Sword", "spCost": 200, "damage": 11, "range": 1,
      "effect": "Unit and foes cannot counterattack.",
      "type": "WEAPON", "weaponType": "Sword", "colorType": "Red"
    },
    {
      "name": "Firesweep Sword+", "spCost": 300, "damage": 15, "range": 1,
      "effect": "Unit and foes cannot counterattack.",
      "type": "WEAPON", "weaponType": "Sword", "colorType": "Red"
    },
    {
      "name": "First Bite", "spCost": 200, "damage": 10, "range": 1,
      "effect": "Grants allies within 2 spaces Def/Res+2 through their next actions after any combat this unit initiates.",
      "type": "WEAPON", "weaponType": "Lance", "colorType": "Blue"
    },
    {
      "name": "First Bite+", "spCost": 300, "damage": 14, "range": 1,
      "effect": "Grants allies within 2 spaces Def/Res+2 through their next actions after any combat this unit initiates.",
      "type": "WEAPON", "weaponType": "Lance", "colorType": "Blue"
    },
    {
      "name": "Flametongue", "spCost": 200, "damage": 11, "range": 1,
      "effect": "-",
      "type": "WEAPON", "weaponType": "Breath"
    },
    {
      "name": "Flametongue+", "spCost": 300, "damage": 15, "range": 1,
      "effect": "-",
      "type": "WEAPON", "weaponType": "Breath"
    },
    {
      "name": "Flux", "spCost": 50, "damage": 4, "range": 2,
      "effect": "-",
      "type": "WEAPON", "weaponType": "Tome", "colorType": "Red"
    },
    {
      "name": "Fólkvangr", "spCost": 400, "damage": 16, "range": 1,
      "effect": "Grants Atk+5 at start of turn if unit's HP ≤ 50%.",
      "exclusive": ["Alfonse"], "type": "WEAPON", "weaponType": "Sword", "colorType": "Red"
    },
    {
      "name": "Fujin Yumi", "spCost": 400, "damage": 14, "range": 2,
      "effect": "Effective against flying units.  Unit can pass though foes if own HP ≥ 50%.",
      "exclusive": ["Takumi"], "type": "WEAPON", "weaponType": "Bow", "colorType": "Neutral"
    },
    {
      "name": "Geirskögul", "spCost": 400, "damage": 16, "range": 1,
      "effect": "Grants Def+3. Grants allies with sword, lance, axe, bow, or dagger within 2 spaces Atk/Spd+3 during combat.",
      "exclusive": ["Lucina (Brave Heroes)"], "type": "WEAPON", "weaponType": "Lance", "colorType": "Blue", "stats": { "def": 3 }
    },
    {
      "name": "Gradivus", "spCost": 400, "damage": 16, "range": 1,
      "effect": "Enables counterattack regardless of distance if this unit is attacked.",
      "exclusive": ["Camus"], "type": "WEAPON", "weaponType": "Lance", "colorType": "Blue"
    },
    {
      "name": "Gravity", "spCost": 150, "damage": 6, "range": 2,
      "effect": "After any combat, prevents foe from moving more than 1 space through its next action.",
      "type": "WEAPON", "weaponType": "Staff", "colorType": "Neutral"
    },
    {
      "name": "Gravity+", "spCost": 300, "damage": 10, "range": 2,
      "effect": "After combat, prevents target and foes within 1 space of target from moving more than 1 space through their next actions.",
      "type": "WEAPON", "weaponType": "Staff", "colorType": "Neutral"
    },
    {
      "name": "Green Egg", "spCost": 200, "damage": 7, "range": 2,
      "effect": "If unit initiates attack, unit recovers 4 HP after the battle.",
      "type": "WEAPON", "weaponType": "Tome", "colorType": "Green"
    },
    {
      "name": "Green Egg+", "spCost": 300, "damage": 11, "range": 2,
      "effect": "If unit initiates attack, unit recovers 4 HP after the battle.",
      "type": "WEAPON", "weaponType": "Tome", "colorType": "Green"
    },
    {
      "name": "Grimoire", "spCost": 400, "damage": 14, "range": 2,
      "effect": "If unit has ≥ 50% HP, unit can move to a space adjacent to an ally within 2 spaces.",
      "exclusive": ["Nowi (Trick or Defeat!)"], "type": "WEAPON", "weaponType": "Tome", "colorType": "Red"
    },
    {
      "name": "Gronnblade", "spCost": 200, "damage": 9, "range": 2,
      "effect": "Slows Special trigger (cooldown count+1). Adds total bonuses on unit to damage dealt.",
      "type": "WEAPON", "weaponType": "Tome", "colorType": "Green"
    },
    {
      "name": "Gronnblade+", "spCost": 300, "damage": 13, "range": 2,
      "effect": "Slows Special trigger (cooldown count+1). Adds total bonuses on unit to damage dealt.",
      "type": "WEAPON", "weaponType": "Tome", "colorType": "Green"
    },
    {
      "name": "Gronnowl", "spCost": 200, "damage": 6, "range": 2,
      "effect": "During combat, unit's Atk/Spd/Def/Res boosted by number of adjacent allies x 2.",
      "type": "WEAPON", "weaponType": "Tome", "colorType": "Green"
    },
    {
      "name": "Gronnowl+", "spCost": 300, "damage": 10, "range": 2,
      "effect": "During combat, unit's Atk/Spd/Def/Res boosted by number of adjacent allies x 2.",
      "type": "WEAPON", "weaponType": "Tome", "colorType": "Green"
    },
    {
      "name": "Gronnraven", "spCost": 200, "damage": 7, "range": 2,
      "effect": "Grants weapon advantage vs. colorless foes.",
      "type": "WEAPON", "weaponType": "Tome", "colorType": "Green"
    },
    {
      "name": "Gronnraven+", "spCost": 300, "damage": 11, "range": 2,
      "effect": "Grants weapon advantage vs. colorless foes.",
      "type": "WEAPON", "weaponType": "Tome", "colorType": "Green"
    },
    {
      "name": "Gronnwolf", "spCost": 200, "damage": 6, "range": 2,
      "effect": "Effective against cavalry units.",
      "type": "WEAPON", "weaponType": "Tome", "colorType": "Green"
    },
    {
      "name": "Gronnwolf+", "spCost": 300, "damage": 10, "range": 2,
      "effect": "Effective against cavalry units.",
      "type": "WEAPON", "weaponType": "Tome", "colorType": "Green"
    },
    {
      "name": "Guard Bow", "spCost": 200, "damage": 0, "range": 2,
      "effect": "Effective against flying units.",
      "type": "WEAPON", "weaponType": "Bow", "colorType": "Neutral"
    },
    {
      "name": "Guard Bow+", "spCost": 300, "damage": 12, "range": 2,
      "effect": "Effective against flying foes.  Grants Def/Res+6 during combat if unit is attacked by foe using bow, daggers, magic, or staff.",
      "type": "WEAPON", "weaponType": "Bow", "colorType": "Neutral"
    },
    {
      "name": "Hammer", "spCost": 200, "damage": 8, "range": 1,
      "effect": "Effective against armored units.",
      "type": "WEAPON", "weaponType": "Axe", "colorType": "Green"
    },
    {
      "name": "Hammer+", "spCost": 300, "damage": 12, "range": 1,
      "effect": "Effective against armored units.",
      "type": "WEAPON", "weaponType": "Axe", "colorType": "Green"
    },
    {
      "name": "Hauteclere", "spCost": 400, "damage": 16, "range": 1,
      "effect": "Accelerates Special trigger (cooldown count-1).",
      "exclusive": ["Michalis", "Minerva"], "type": "WEAPON", "weaponType": "Axe", "colorType": "Green"
    },
    {
      "name": "Heavy Spear", "spCost": 200, "damage": 8, "range": 1,
      "effect": "Effective against armored units.",
      "type": "WEAPON", "weaponType": "Lance", "colorType": "Blue"
    },
    {
      "name": "Heavy Spear+", "spCost": 300, "damage": 12, "range": 1,
      "effect": "Effective against armored units.",
      "type": "WEAPON", "weaponType": "Lance", "colorType": "Blue"
    },
    {
      "name": "Hibiscus Tome", "spCost": 200, "damage": 8, "range": 2,
      "effect": "Grants allies within 2 spaces Atk/Spd+1 during combat.",
      "type": "WEAPON", "weaponType": "Tome", "colorType": "Green"
    },
    {
      "name": "Hibiscus Tome+", "spCost": 300, "damage": 12, "range": 2,
      "effect": "Grants allies within 2 spaces Atk/Spd+1 during combat.",
      "type": "WEAPON", "weaponType": "Tome", "colorType": "Green"
    },
    {
      "name": "Iron Axe", "spCost": 50, "damage": 6, "range": 1,
      "effect": "-",
      "type": "WEAPON", "weaponType": "Axe", "colorType": "Green"
    },
    {
      "name": "Iron Bow", "spCost": 50, "damage": 4, "range": 2,
      "effect": "Effective against flying units.",
      "type": "WEAPON", "weaponType": "Bow", "colorType": "Neutral"
    },
    {
      "name": "Iron Dagger", "spCost": 50, "damage": 3, "range": 2,
      "effect": "After combat, inflicts Def/Res-3 on foe through its next action.",
      "type": "WEAPON", "weaponType": "Dagger", "colorType": "Neutral"
    },
    {
      "name": "Iron Lance", "spCost": 50, "damage": 6, "range": 1,
      "effect": "-",
      "type": "WEAPON", "weaponType": "Lance", "colorType": "Blue"
    },
    {
      "name": "Iron Sword", "spCost": 50, "damage": 6, "range": 1,
      "effect": "-",
      "type": "WEAPON", "weaponType": "Sword", "colorType": "Red"
    },
    {
      "name": "Keen Blárwolf", "spCost": 200, "damage": 8, "range": 2,
      "effect": "Effective against cavalry foes.",
      "type": "WEAPON", "weaponType": "Tome", "colorType": "Blue"
    },
    {
      "name": "Keen Blárwolf+", "spCost": 300, "damage": 12, "range": 2,
      "effect": "Effective against cavalry foes.",
      "type": "WEAPON", "weaponType": "Tome", "colorType": "Blue"
    },
    {
      "name": "Keen Gronnwolf", "spCost": 200, "damage": 8, "range": 2,
      "effect": "Effective against cavalry foes.",
      "type": "WEAPON", "weaponType": "Tome", "colorType": "Green"
    },
    {
      "name": "Keen Gronnwolf+", "spCost": 300, "damage": 12, "range": 2,
      "effect": "Effective against cavalry foes.",
      "type": "WEAPON", "weaponType": "Tome", "colorType": "Green"
    },
    {
      "name": "Keen Rauðrwolf", "spCost": 200, "damage": 8, "range": 2,
      "effect": "Effective against cavalry foes.",
      "type": "WEAPON", "weaponType": "Tome", "colorType": "Red"
    },
    {
      "name": "Keen Rauðrwolf+", "spCost": 300, "damage": 12, "range": 2,
      "effect": "Effective against cavalry foes.",
      "type": "WEAPON", "weaponType": "Tome", "colorType": "Red"
    },
    {
      "name": "Killer Axe", "spCost": 200, "damage": 7, "range": 1,
      "effect": "Accelerates Special trigger (cooldown count-1).",
      "type": "WEAPON", "weaponType": "Axe", "colorType": "Green"
    },
    {
      "name": "Killer Axe+", "spCost": 300, "damage": 11, "range": 1,
      "effect": "Accelerates Special trigger (cooldown count-1).",
      "type": "WEAPON", "weaponType": "Axe", "colorType": "Green"
    },
    {
      "name": "Killer Bow", "spCost": 200, "damage": 5, "range": 2,
      "effect": "Effective against flying units.  Accelerates Special trigger (cooldown count-1).",
      "type": "WEAPON", "weaponType": "Bow", "colorType": "Neutral"
    },
    {
      "name": "Killer Bow+", "spCost": 300, "damage": 9, "range": 2,
      "effect": "Effective against flying units.  Accelerates Special trigger (cooldown count-1).",
      "type": "WEAPON", "weaponType": "Bow", "colorType": "Neutral"
    },
    {
      "name": "Killer Lance", "spCost": 200, "damage": 7, "range": 1,
      "effect": "Accelerates Special trigger (cooldown count-1).",
      "type": "WEAPON", "weaponType": "Lance", "colorType": "Blue"
    },
    {
      "name": "Killer Lance+", "spCost": 300, "damage": 11, "range": 1,
      "effect": "Accelerates Special trigger (cooldown count-1).",
      "type": "WEAPON", "weaponType": "Lance", "colorType": "Blue"
    },
    {
      "name": "Killing Edge", "spCost": 200, "damage": 7, "range": 1,
      "effect": "Accelerates Special trigger (cooldown count-1).",
      "type": "WEAPON", "weaponType": "Sword", "colorType": "Red"
    },
    {
      "name": "Killing Edge+", "spCost": 300, "damage": 11, "range": 1,
      "effect": "Accelerates Special trigger (cooldown count-1).",
      "type": "WEAPON", "weaponType": "Sword", "colorType": "Red"
    },
    {
      "name": "Kitty Paddle", "spCost": 200, "damage": 5, "range": 2,
      "effect": "Effective against foe using magic.  After combat, if foe uses magic, foe suffers Def/Res-5 through foe's next action.",
      "type": "WEAPON", "weaponType": "Dagger", "colorType": "Neutral"
    },
    {
      "name": "Kitty Paddle+", "spCost": 300, "damage": 8, "range": 2,
      "effect": "Effective against foe using magic.  After combat, if foe uses magic, foe suffers Def/Res-7 through foe's next action.",
      "type": "WEAPON", "weaponType": "Dagger", "colorType": "Neutral"
    },
    {
      "name": "Laevatein", "spCost": 400, "damage": 16, "range": 1,
      "effect": "Grants Atk+3. Adds total bonuses on unit to damage dealt.",
      "exclusive": ["Laevatein"], "type": "WEAPON", "weaponType": "Sword", "colorType": "Red", "stats": { "atk": 3 }
    },
    {
      "name": "Legion's Axe", "spCost": 200, "damage": 10, "range": 1,
      "effect": "After combat, bonuses on targeted foe become penalties through its next action.",
      "type": "WEAPON", "weaponType": "Axe", "colorType": "Green"
    },
    {
      "name": "Legion's Axe+", "spCost": 300, "damage": 14, "range": 1,
      "effect": "After combat, bonuses on targeted foe become penalties through its next action.",
      "type": "WEAPON", "weaponType": "Axe", "colorType": "Green"
    },
    {
      "name": "Leiptr", "spCost": 400, "damage": 16, "range": 1,
      "effect": "Unit can counterattack regardless of foe's range.",
      "exclusive": ["Fjorm"], "type": "WEAPON", "weaponType": "Lance", "colorType": "Blue"
    },
    {
      "name": "Light Breath", "spCost": 200, "damage": 9, "range": 1,
      "effect": "Grants adjacent allies Def/Res+4 through their next actions after any combat this unit initiates.",
      "type": "WEAPON", "weaponType": "Breath"
    },
    {
      "name": "Light Breath+", "spCost": 300, "damage": 13, "range": 1,
      "effect": "Grants adjacent allies Def/Res+4 through their next actions after any combat this unit initiates.",
      "type": "WEAPON", "weaponType": "Breath"
    },
    {
      "name": "Lightning Breath", "spCost": 200, "damage": 7, "range": 1,
      "effect": "Enables counterattack regardless of attacker's range. Slows Special trigger (cooldown count+1).",
      "type": "WEAPON", "weaponType": "Breath"
    },
    {
      "name": "Lightning Breath+", "spCost": 300, "damage": 11, "range": 1,
      "effect": "Enables counterattack regardless of attacker's range. Slows Special trigger (cooldown count+1).",
      "type": "WEAPON", "weaponType": "Breath"
    },
    {
      "name": "Lilith Floatie", "spCost": 200, "damage": 10, "range": 1,
      "effect": "Grants allies within 2 spaces Atk/Spd+1 during combat.",
      "type": "WEAPON", "weaponType": "Axe", "colorType": "Green"
    },
    {
      "name": "Lilith Floatie+", "spCost": 300, "damage": 14, "range": 1,
      "effect": "Grants allies within 2 spaces Atk/Spd+1 during combat.",
      "type": "WEAPON", "weaponType": "Axe", "colorType": "Green"
    },
    {
      "name": "Melon Crusher", "spCost": 200, "damage": 10, "range": 1,
      "effect": "If unit has 100% HP at start of combat, unit gets Atk/Spd/Def/Res+2. If attacking, unit will take 2 damage after combat.",
      "type": "WEAPON", "weaponType": "Axe", "colorType": "Green"
    },
    {
      "name": "Melon Crusher+", "spCost": 300, "damage": 14, "range": 1,
      "effect": "If unit has 100% HP at start of combat, unit gets Atk/Spd/Def/Res+2. If attacking, unit will take 2 damage after combat.",
      "type": "WEAPON", "weaponType": "Axe", "colorType": "Green"
    },
    {
      "name": "Monstrous Bow", "spCost": 200, "damage": 8, "range": 2,
      "effect": "Effective against flying foes.  After combat, bonuses become penalties on all foes within 2 spaces of target through foes' next actions.",
      "type": "WEAPON", "weaponType": "Bow", "colorType": "Neutral"
    },
    {
      "name": "Monstrous Bow+", "spCost": 300, "damage": 12, "range": 2,
      "effect": "Effective against flying foes.  After combat, bonuses become penalties on all foes within 2 spaces of target through foes' next actions.",
      "type": "WEAPON", "weaponType": "Bow", "colorType": "Neutral"
    },
    {
      "name": "Mulagir", "spCost": 400, "damage": 14, "range": 2,
      "effect": "Effective against flying units.  Grants Spd+3. If foe is magic user, foe's bonuses (from skills like Fortify, Rally, etc.) are nullified during combat.",
      "exclusive": ["Lyn (Brave Heroes)"], "type": "WEAPON", "weaponType": "Bow", "colorType": "Neutral", "stats": { "spd": 3 }
    },
    {
      "name": "Mystletainn", "spCost": 400, "damage": 16, "range": 1,
      "effect": "Accelerates Special trigger (cooldown count-1).",
      "exclusive": ["Eldigan"], "type": "WEAPON", "weaponType": "Sword", "colorType": "Red"
    },
    {
      "name": "Naga", "spCost": 400, "damage": 14, "range": 2,
      "effect": "Effective against dragons.  Grants Def/Res+2 when this unit is attacked.",
      "exclusive": ["Julia"], "type": "WEAPON", "weaponType": "Tome", "colorType": "Green"
    },
    {
      "name": "Nidhogg", "spCost": 400, "damage": 14, "range": 2,
      "effect": "Effective against flying units.  During combat, unit's Atk/Spd/Def/Res boosted by number of adjacent allies x 2.",
      "exclusive": ["Innes"], "type": "WEAPON", "weaponType": "Bow", "colorType": "Neutral"
    },
    {
      "name": "Nóatún", "spCost": 400, "damage": 16, "range": 1,
      "effect": "Unit may move adjacent to any ally when HP ≤ 40%.",
      "exclusive": ["Anna"], "type": "WEAPON", "weaponType": "Axe", "colorType": "Green"
    },
    {
      "name": "Pain", "spCost": 150, "damage": 3, "range": 2,
      "effect": "Inflicts 10 damage on targeted foe after combat.",
      "type": "WEAPON", "weaponType": "Staff", "colorType": "Neutral"
    },
    {
      "name": "Pain+", "spCost": 300, "damage": 10, "range": 2,
      "effect": "Deals 10 damage to target and foes within 2 spaces of target after combat.",
      "type": "WEAPON", "weaponType": "Staff", "colorType": "Neutral"
    },
    {
      "name": "Panic", "spCost": 150, "damage": 7, "range": 2,
      "effect": "After combat, bonuses on targeted foe become penalties through its next action.",
      "type": "WEAPON", "weaponType": "Staff", "colorType": "Neutral"
    },
    {
      "name": "Panic+", "spCost": 300, "damage": 11, "range": 2,
      "effect": "After combat, bonuses on target and foes within 2 spaces of target become penalties through their next actions.",
      "type": "WEAPON", "weaponType": "Staff", "colorType": "Neutral"
    },
    {
      "name": "Parthia", "spCost": 400, "damage": 14, "range": 2,
      "effect": "Effective against flying units.  Grants Res+4 during combat if initiating attack.",
      "exclusive": ["Jeorge"], "type": "WEAPON", "weaponType": "Bow", "colorType": "Neutral"
    },
    {
      "name": "Poison Dagger", "spCost": 200, "damage": 2, "range": 2,
      "effect": "Effective against infantry units.  Infantry foes suffer Def/Res-4 after combat through their next actions.",
      "type": "WEAPON", "weaponType": "Dagger", "colorType": "Neutral"
    },
    {
      "name": "Poison Dagger+", "spCost": 300, "damage": 5, "range": 2,
      "effect": "Effective against infantry units.  Infantry foes suffer Def/Res-6 after combat through their next actions.",
      "type": "WEAPON", "weaponType": "Dagger", "colorType": "Neutral"
    },
    {
      "name": "Ragnarok", "spCost": 400, "damage": 14, "range": 2,
      "effect": "If unit has 100% HP at the start of combat, unit receives Atk/Spd +5. If attacking, unit will receive 5 damage after combat.",
      "exclusive": ["Celica"], "type": "WEAPON", "weaponType": "Tome", "colorType": "Red"
    },
    {
      "name": "Ragnell", "spCost": 400, "damage": 16, "range": 1,
      "effect": "Enables counterattack regardless of distance if this unit is attacked.",
      "exclusive": ["Ike"], "type": "WEAPON", "weaponType": "Sword", "colorType": "Red"
    },
    {
      "name": "Raijinto", "spCost": 400, "damage": 16, "range": 1,
      "effect": "Enables counterattack regardless of distance if this unit is attacked.",
      "exclusive": ["Ryoma"], "type": "WEAPON", "weaponType": "Sword", "colorType": "Red"
    },
    {
      "name": "Rauðrblade", "spCost": 200, "damage": 9, "range": 2,
      "effect": "Slows Special trigger (cooldown count+1). Adds total bonuses on unit to damage dealt.",
      "type": "WEAPON", "weaponType": "Tome", "colorType": "Red"
    },
    {
      "name": "Rauðrblade+", "spCost": 300, "damage": 13, "range": 2,
      "effect": "Slows Special trigger (cooldown count+1). Adds total bonuses on unit to damage dealt.",
      "type": "WEAPON", "weaponType": "Tome", "colorType": "Red"
    },
    {
      "name": "Rauðrowl", "spCost": 200, "damage": 6, "range": 2,
      "effect": "During combat, unit's Atk/Spd/Def/Res boosted by number of adjacent allies x 2.",
      "type": "WEAPON", "weaponType": "Tome", "colorType": "Red"
    },
    {
      "name": "Rauðrowl+", "spCost": 300, "damage": 10, "range": 2,
      "effect": "During combat, unit's Atk/Spd/Def/Res boosted by number of adjacent allies x 2.",
      "type": "WEAPON", "weaponType": "Tome", "colorType": "Red"
    },
    {
      "name": "Rauðrraven", "spCost": 200, "damage": 7, "range": 2,
      "effect": "Grants weapon advantage vs. colorless foes.",
      "type": "WEAPON", "weaponType": "Tome", "colorType": "Red"
    },
    {
      "name": "Rauðrraven+", "spCost": 300, "damage": 11, "range": 2,
      "effect": "Grants weapon advantage vs. colorless foes.",
      "type": "WEAPON", "weaponType": "Tome", "colorType": "Red"
    },
    {
      "name": "Rauðrwolf", "spCost": 200, "damage": 6, "range": 2,
      "effect": "Effective against cavalry units.",
      "type": "WEAPON", "weaponType": "Tome", "colorType": "Red"
    },
    {
      "name": "Rauðrwolf+", "spCost": 300, "damage": 10, "range": 2,
      "effect": "Effective against cavalry units.",
      "type": "WEAPON", "weaponType": "Tome", "colorType": "Red"
    },
    {
      "name": "Refreshing Bolt", "spCost": 200, "damage": 8, "range": 2,
      "effect": "If unit has 100% HP at start of combat, unit gets Atk/Spd/Def/Res+2. If attacking, unit will take 2 damage after combat. Effective against fliers.",
      "type": "WEAPON", "weaponType": "Bow", "colorType": "Neutral"
    },
    {
      "name": "Refreshing Bolt+", "spCost": 300, "damage": 12, "range": 2,
      "effect": "If unit has 100% HP at start of combat, unit gets Atk/Spd/Def/Res+2. If attacking, unit will take 2 damage after combat. Effective against fliers.",
      "type": "WEAPON", "weaponType": "Bow", "colorType": "Neutral"
    },
    {
      "name": "Regal Blade", "spCost": 400, "damage": 16, "range": 1,
      "effect": "If foe's HP is 100% when combat starts, unit receives Atk/Spd+2 during combat.",
      "exclusive": ["Lloyd"], "type": "WEAPON", "weaponType": "Sword", "colorType": "Red"
    },
    {
      "name": "Resolute Blade", "spCost": 400, "damage": 16, "range": 1,
      "effect": "Grants Atk+3. Grants +10 to damage when Special triggers.",
      "exclusive": ["Mia"], "type": "WEAPON", "weaponType": "Sword", "colorType": "Red", "stats": { "atk": 3 }
    },
    {
      "name": "Rexcalibur", "spCost": 200, "damage": 9, "range": 2,
      "effect": "-",
      "type": "WEAPON", "weaponType": "Tome", "colorType": "Green"
    },
    {
      "name": "Rexcalibur+", "spCost": 300, "damage": 13, "range": 2,
      "effect": "-",
      "type": "WEAPON", "weaponType": "Tome", "colorType": "Green"
    },
    {
      "name": "Ridersbane", "spCost": 200, "damage": 10, "range": 1,
      "effect": "Effective against cavalry units.",
      "type": "WEAPON", "weaponType": "Lance", "colorType": "Blue"
    },
    {
      "name": "Ridersbane+", "spCost": 300, "damage": 14, "range": 1,
      "effect": "Effective against cavalry units.",
      "type": "WEAPON", "weaponType": "Lance", "colorType": "Blue"
    },
    {
      "name": "Rogue Dagger", "spCost": 200, "damage": 4, "range": 2,
      "effect": "After combat, inflicts Def/Res-3 on foe through its next action. Grants unit Def/Res+3 for 1 turn.",
      "type": "WEAPON", "weaponType": "Dagger", "colorType": "Neutral"
    },
    {
      "name": "Rogue Dagger+", "spCost": 300, "damage": 7, "range": 2,
      "effect": "After combat, inflicts Def/Res-5 on foe through its next action. Grants unit Def/Res+5 for 1 turn.",
      "type": "WEAPON", "weaponType": "Dagger", "colorType": "Neutral"
    },
    {
      "name": "Ruby Sword", "spCost": 200, "damage": 8, "range": 1,
      "effect": "Gives Atk+20% if weapon-triangle advantage, Atk-20% if disadvantage.",
      "type": "WEAPON", "weaponType": "Sword", "colorType": "Red"
    },
    {
      "name": "Ruby Sword+", "spCost": 300, "damage": 12, "range": 1,
      "effect": "Gives Atk+20% if weapon-triangle advantage, Atk-20% if disadvantage.",
      "type": "WEAPON", "weaponType": "Sword", "colorType": "Red"
    },
    {
      "name": "Ruin", "spCost": 100, "damage": 6, "range": 2,
      "effect": "-",
      "type": "WEAPON", "weaponType": "Tome", "colorType": "Red"
    },
    {
      "name": "Sapphire Lance", "spCost": 200, "damage": 8, "range": 1,
      "effect": "Gives Atk+20% if weapon-triangle advantage, Atk-20% if disadvantage.",
      "type": "WEAPON", "weaponType": "Lance", "colorType": "Blue"
    },
    {
      "name": "Sapphire Lance+", "spCost": 300, "damage": 12, "range": 1,
      "effect": "Gives Atk+20% if weapon-triangle advantage, Atk-20% if disadvantage.",
      "type": "WEAPON", "weaponType": "Lance", "colorType": "Blue"
    },
    {
      "name": "Sealife Tome", "spCost": 200, "damage": 8, "range": 2,
      "effect": "Grants allies within 2 spaces Atk/Spd+1 during combat.",
      "type": "WEAPON", "weaponType": "Tome", "colorType": "Blue"
    },
    {
      "name": "Sealife Tome+", "spCost": 300, "damage": 12, "range": 2,
      "effect": "Grants allies within 2 spaces Atk/Spd+1 during combat.",
      "type": "WEAPON", "weaponType": "Tome", "colorType": "Blue"
    },
    {
      "name": "Seashell", "spCost": 200, "damage": 7, "range": 2,
      "effect": "Foe takes Def/Res-5 until end of foe's next action. If unit has 100% HP at start of combat, Atk/Spd/Def/Res+2. If attacking, unit gets 2 damage after.",
      "type": "WEAPON", "weaponType": "Dagger", "colorType": "Neutral"
    },
    {
      "name": "Seashell+", "spCost": 300, "damage": 10, "range": 2,
      "effect": "Foe takes Def/Res-7 until end of foe's next action. If unit has 100% HP at start of combat, Atk/Spd/Def/Res+2. If attacking, unit gets 2 damage after.",
      "type": "WEAPON", "weaponType": "Dagger", "colorType": "Neutral"
    },
    {
      "name": "Siegfried", "spCost": 400, "damage": 16, "range": 1,
      "effect": "Enables counterattack regardless of distance if this unit is attacked.",
      "exclusive": ["Xander"], "type": "WEAPON", "weaponType": "Sword", "colorType": "Red"
    },
    {
      "name": "Sieglinde", "spCost": 400, "damage": 16, "range": 1,
      "effect": "Grants adjacent allies Atk+3 through their next actions at the start of each turn.",
      "exclusive": ["Eirika"], "type": "WEAPON", "weaponType": "Sword", "colorType": "Red"
    },
    {
      "name": "Siegmund", "spCost": 400, "damage": 16, "range": 1,
      "effect": "Grants adjacent allies Atk+3 through their next actions at the start of each turn.",
      "exclusive": ["Ephraim"], "type": "WEAPON", "weaponType": "Lance", "colorType": "Blue"
    },
    {
      "name": "Silver Axe", "spCost": 200, "damage": 11, "range": 1,
      "effect": "-",
      "type": "WEAPON", "weaponType": "Axe", "colorType": "Green"
    },
    {
      "name": "Silver Axe+", "spCost": 300, "damage": 15, "range": 1,
      "effect": "-",
      "type": "WEAPON", "weaponType": "Axe", "colorType": "Green"
    },
    {
      "name": "Silver Bow", "spCost": 200, "damage": 9, "range": 2,
      "effect": "Effective against flying units.",
      "type": "WEAPON", "weaponType": "Bow", "colorType": "Neutral"
    },
    {
      "name": "Silver Bow+", "spCost": 300, "damage": 13, "range": 2,
      "effect": "Effective against flying units.",
      "type": "WEAPON", "weaponType": "Bow", "colorType": "Neutral"
    },
    {
      "name": "Silver Dagger", "spCost": 200, "damage": 7, "range": 2,
      "effect": "After combat, inflicts Def/Res-5 on foe through its next action.",
      "type": "WEAPON", "weaponType": "Dagger", "colorType": "Neutral"
    },
    {
      "name": "Silver Dagger+", "spCost": 300, "damage": 10, "range": 2,
      "effect": "After combat, inflicts Def/Res-7 on foe through its next action.",
      "type": "WEAPON", "weaponType": "Dagger", "colorType": "Neutral"
    },
    {
      "name": "Silver Lance", "spCost": 200, "damage": 11, "range": 1,
      "effect": "-",
      "type": "WEAPON", "weaponType": "Lance", "colorType": "Blue"
    },
    {
      "name": "Silver Lance+", "spCost": 300, "damage": 15, "range": 1,
      "effect": "-",
      "type": "WEAPON", "weaponType": "Lance", "colorType": "Blue"
    },
    {
      "name": "Silver Sword", "spCost": 200, "damage": 11, "range": 1,
      "effect": "-",
      "type": "WEAPON", "weaponType": "Sword", "colorType": "Red"
    },
    {
      "name": "Silver Sword+", "spCost": 300, "damage": 15, "range": 1,
      "effect": "-",
      "type": "WEAPON", "weaponType": "Sword", "colorType": "Red"
    },
    {
      "name": "Sinmara", "spCost": 400, "damage": 16, "range": 1,
      "effect": "Grants Def+3. Deals 20 damage to foes within 2 spaces at the start of each turn.",
      "exclusive": ["Surtr"], "type": "WEAPON", "weaponType": "Axe", "colorType": "Green", "stats": { "def": 3 }
    },
    {
      "name": "Slaying Axe", "spCost": 200, "damage": 10, "range": 1,
      "effect": "Accelerates Special trigger (cooldown count-1).",
      "type": "WEAPON", "weaponType": "Axe", "colorType": "Green"
    },
    {
      "name": "Slaying Axe+", "spCost": 300, "damage": 14, "range": 1,
      "effect": "Accelerates Special trigger (cooldown count-1).",
      "type": "WEAPON", "weaponType": "Axe", "colorType": "Green"
    },
    {
      "name": "Slaying Bow", "spCost": 200, "damage": 8, "range": 2,
      "effect": "Effective against flying units.  Accelerates Special trigger (cooldown count-1).",
      "type": "WEAPON", "weaponType": "Bow", "colorType": "Neutral"
    },
    {
      "name": "Slaying Bow+", "spCost": 300, "damage": 12, "range": 2,
      "effect": "Effective against flying units.  Accelerates Special trigger (cooldown count-1).",
      "type": "WEAPON", "weaponType": "Bow", "colorType": "Neutral"
    },
    {
      "name": "Slaying Edge", "spCost": 200, "damage": 10, "range": 1,
      "effect": "Accelerates Special trigger (cooldown count-1).",
      "type": "WEAPON", "weaponType": "Sword", "colorType": "Red"
    },
    {
      "name": "Slaying Edge+", "spCost": 300, "damage": 14, "range": 1,
      "effect": "Accelerates Special trigger (cooldown count-1).",
      "type": "WEAPON", "weaponType": "Sword", "colorType": "Red"
    },
    {
      "name": "Slaying Hammer", "spCost": 200, "damage": 0, "range": 1,
      "effect": "Effective against armored units.",
      "type": "WEAPON", "weaponType": "Axe", "colorType": "Green"
    },
    {
      "name": "Slaying Hammer+", "spCost": 300, "damage": 14, "range": 1,
      "effect": "Effective against armored foes.",
      "type": "WEAPON", "weaponType": "Axe", "colorType": "Green"
    },
    {
      "name": "Slaying Lance", "spCost": 200, "damage": 10, "range": 1,
      "effect": "Accelerates Special trigger (cooldown count-1).",
      "type": "WEAPON", "weaponType": "Lance", "colorType": "Blue"
    },
    {
      "name": "Slaying Lance+", "spCost": 300, "damage": 14, "range": 1,
      "effect": "Accelerates Special trigger (cooldown count-1).",
      "type": "WEAPON", "weaponType": "Lance", "colorType": "Blue"
    },
    {
      "name": "Slaying Spear", "spCost": 200, "damage": 0, "range": 1,
      "effect": "Effective against armored units.",
      "type": "WEAPON", "weaponType": "Lance", "colorType": "Blue"
    },
    {
      "name": "Slaying Spear+", "spCost": 300, "damage": 14, "range": 1,
      "effect": "Effective against armored foes.",
      "type": "WEAPON", "weaponType": "Lance", "colorType": "Blue"
    },
    {
      "name": "Slow", "spCost": 150, "damage": 5, "range": 2,
      "effect": "After any combat, inflicts Spd-6 on foe through its next action.",
      "type": "WEAPON", "weaponType": "Staff", "colorType": "Neutral"
    },
    {
      "name": "Slow+", "spCost": 300, "damage": 12, "range": 2,
      "effect": "After combat, inflicts Spd-7 on target and foes within 2 spaces of target through their next actions.",
      "type": "WEAPON", "weaponType": "Staff", "colorType": "Neutral"
    },
    {
      "name": "Smoke Dagger", "spCost": 200, "damage": 6, "range": 2,
      "effect": "After combat, inflicts Def/Res-4 on foes within 2 spaces of target through their next actions.",
      "type": "WEAPON", "weaponType": "Dagger", "colorType": "Neutral"
    },
    {
      "name": "Smoke Dagger+", "spCost": 300, "damage": 9, "range": 2,
      "effect": "After combat, inflicts Def/Res-6 on foes within 2 spaces of target through their next actions.",
      "type": "WEAPON", "weaponType": "Dagger", "colorType": "Neutral"
    },
    {
      "name": "Sol Katti", "spCost": 400, "damage": 16, "range": 1,
      "effect": "If wielder initiates attack at HP ≤ 50%, any follow-up occurs immediately.",
      "exclusive": ["Lyn"], "type": "WEAPON", "weaponType": "Sword", "colorType": "Red"
    },
    {
      "name": "Spectral Tome", "spCost": 200, "damage": 8, "range": 2,
      "effect": "After combat, bonuses become penalties on all foes within 2 spaces of target through foes' next actions.",
      "type": "WEAPON", "weaponType": "Tome", "colorType": "Green"
    },
    {
      "name": "Spectral Tome+", "spCost": 300, "damage": 12, "range": 2,
      "effect": "After combat, bonuses become penalties on all foes within 2 spaces of target through foes' next actions.",
      "type": "WEAPON", "weaponType": "Tome", "colorType": "Green"
    },
    {
      "name": "Steel Axe", "spCost": 100, "damage": 8, "range": 1,
      "effect": "-",
      "type": "WEAPON", "weaponType": "Axe", "colorType": "Green"
    },
    {
      "name": "Steel Bow", "spCost": 100, "damage": 6, "range": 2,
      "effect": "Effective against flying units.",
      "type": "WEAPON", "weaponType": "Bow", "colorType": "Neutral"
    },
    {
      "name": "Steel Dagger", "spCost": 100, "damage": 5, "range": 2,
      "effect": "After combat, inflicts Def/Res-3 on foe through its next action.",
      "type": "WEAPON", "weaponType": "Dagger", "colorType": "Neutral"
    },
    {
      "name": "Steel Lance", "spCost": 100, "damage": 8, "range": 1,
      "effect": "-",
      "type": "WEAPON", "weaponType": "Lance", "colorType": "Blue"
    },
    {
      "name": "Steel Sword", "spCost": 100, "damage": 8, "range": 1,
      "effect": "-",
      "type": "WEAPON", "weaponType": "Sword", "colorType": "Red"
    },
    {
      "name": "Stout Tomahawk", "spCost": 400, "damage": 16, "range": 1,
      "effect": "Enables counterattack regardless of distance if this unit is attacked.",
      "exclusive": ["Dorcas"], "type": "WEAPON", "weaponType": "Axe", "colorType": "Green"
    },
    {
      "name": "Thökk", "spCost": 400, "damage": 14, "range": 2,
      "effect": "Damage from staff calculated like other weapons. At start of turn, foes with bow, daggers, magic, or staff in cardinal directions with HP 3 or more lower than unit's can move only 1 space through their next actions.",
      "exclusive": ["Loki"], "type": "WEAPON", "weaponType": "Staff", "colorType": "Neutral"
    },
    {
      "name": "Thoron", "spCost": 200, "damage": 9, "range": 2,
      "effect": "-",
      "type": "WEAPON", "weaponType": "Tome", "colorType": "Blue"
    },
    {
      "name": "Thoron+", "spCost": 300, "damage": 13, "range": 2,
      "effect": "-",
      "type": "WEAPON", "weaponType": "Tome", "colorType": "Blue"
    },
    {
      "name": "Thunder", "spCost": 50, "damage": 4, "range": 2,
      "effect": "-",
      "type": "WEAPON", "weaponType": "Tome", "colorType": "Blue"
    },
    {
      "name": "Tomato Tome", "spCost": 200, "damage": 8, "range": 2,
      "effect": "Grants allies within 2 spaces Atk/Spd+1 during combat.",
      "type": "WEAPON", "weaponType": "Tome", "colorType": "Red"
    },
    {
      "name": "Tomato Tome+", "spCost": 300, "damage": 12, "range": 2,
      "effect": "Grants allies within 2 spaces Atk/Spd+1 during combat.",
      "type": "WEAPON", "weaponType": "Tome", "colorType": "Red"
    },
    {
      "name": "Tyrfing", "spCost": 400, "damage": 16, "range": 1,
      "effect": "Grants Def+4 in battle if unit's HP ≤ 50%.",
      "exclusive": ["Seliph"], "type": "WEAPON", "weaponType": "Sword", "colorType": "Red"
    },
    {
      "name": "Urðr", "spCost": 400, "damage": 16, "range": 1,
      "effect": "If Sing or Dance is used, target also granted Atk/Spd/Def/Res+3.",
      "exclusive": ["Azura (Performing Arts)"], "type": "WEAPON", "weaponType": "Axe", "colorType": "Green"
    },
    {
      "name": "Urvan", "spCost": 400, "damage": 16, "range": 1,
      "effect": "Accelerates Special trigger (cooldown count-1). If unit receives consecutive attacks, damage from second attack onward reduced by 80%.",
      "exclusive": ["Ike (Brave Heroes)"], "type": "WEAPON", "weaponType": "Axe", "colorType": "Green"
    },
    {
      "name": "Valaskjálf", "spCost": 400, "damage": 14, "range": 2,
      "effect": "Enables unit at ≤ 50% HP to strike first, even when attacked.",
      "exclusive": ["Bruno"], "type": "WEAPON", "weaponType": "Tome", "colorType": "Blue"
    },
    {
      "name": "Valflame", "spCost": 400, "damage": 14, "range": 2,
      "effect": "At start of turn, all foes in cardinal directions with Res 1 or more lower than unit suffer Atk/Res-4 until the end of foe's next action.",
      "exclusive": ["Arvis"], "type": "WEAPON", "weaponType": "Tome", "colorType": "Red"
    },
    {
      "name": "Vidofnir", "spCost": 400, "damage": 16, "range": 1,
      "effect": "If unit is attacked by foe using sword, axe or lance, unit receives Def+7 during combat.",
      "exclusive": ["Tana"], "type": "WEAPON", "weaponType": "Lance", "colorType": "Blue"
    },
    {
      "name": "Weirding Tome", "spCost": 400, "damage": 14, "range": 2,
      "effect": "Grants Spd+3. At start of turn, all foes in cardinal directions, and with Res 1 or more lower than unit, suffer Spd-5 until the end of foes' next actions.",
      "exclusive": ["Lute"], "type": "WEAPON", "weaponType": "Tome", "colorType": "Blue", "stats": { "spd": 3 }
    },
    {
      "name": "Wind", "spCost": 50, "damage": 4, "range": 2,
      "effect": "-",
      "type": "WEAPON", "weaponType": "Tome", "colorType": "Green"
    },
    {
      "name": "Wo Dao", "spCost": 200, "damage": 9, "range": 1,
      "effect": "Grants +10 to damage when Special triggers.",
      "type": "WEAPON", "weaponType": "Sword", "colorType": "Red"
    },
    {
      "name": "Wo Dao+", "spCost": 300, "damage": 13, "range": 1,
      "effect": "Grants +10 to damage when Special triggers.",
      "type": "WEAPON", "weaponType": "Sword", "colorType": "Red"
    },
    {
      "name": "Yato", "spCost": 400, "damage": 16, "range": 1,
      "effect": "Grants Spd+4 during combat if unit initiates attack.",
      "exclusive": ["Corrin (M)"], "type": "WEAPON", "weaponType": "Sword", "colorType": "Red"
    },
    {
      "name": "Zanbato", "spCost": 200, "damage": 10, "range": 1,
      "effect": "Effective against cavalry units.",
      "type": "WEAPON", "weaponType": "Sword", "colorType": "Red"
    },
    {
      "name": "Zanbato+", "spCost": 300, "damage": 14, "range": 1,
      "effect": "Effective against cavalry units.",
      "type": "WEAPON", "weaponType": "Sword", "colorType": "Red"
    }
];
