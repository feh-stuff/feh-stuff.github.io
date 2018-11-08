module.exports = [
  {
    name: "Aerobatics 1",
    spCost: 60,
    icon: "43-8",
    include: [{moveType: "Flying"}],
    effect: "If unit has 100% HP, unit can move to a space adjacent to any infantry, armored, or cavalry ally within 2 spaces."
  },
  {
    name: "Aerobatics 2",
    spCost: 120,
    icon: "43-9",
    prev: ["Aerobatics 1"],
    include: [{moveType: "Flying"}],
    effect: "If unit has ≥ 50% HP, unit can move to a space adjacent to any infantry, armored, or cavalry ally within 2 spaces."
  },
  {
    name: "Aerobatics 3",
    spCost: 240,
    icon: "43-10",
    prev: ["Aerobatics 2"],
    include: [{moveType: "Flying"}],
    effect: "Unit can move to a space adjacent to any infantry, armored, or cavalry ally within 2 spaces."
  },
  {
    name: "Atk/Def Link 1",
    spCost: 60,
    icon: "46-2",
    effect: "If a movement Assist skill (like Reposition, Shove, Pivot, etc.) is used by unit or targets unit, grants Atk/Def+2 to unit and target ally or unit and targeting ally for 1 turn."
  },
  {
    name: "Atk/Def Link 2",
    spCost: 120,
    icon: "46-3",
    prev: ["Atk/Def Link 1"],
    effect: "If a movement Assist skill (like Reposition, Shove, Pivot, etc.) is used by unit or targets unit, grants Atk/Def+4 to unit and target ally or unit and targeting ally for 1 turn."
  },
  {
    name: "Atk/Def Link 3",
    spCost: 240,
    icon: "46-4",
    prev: ["Atk/Def Link 2"],
    effect: "If a movement Assist skill (like Reposition, Shove, Pivot, etc.) is used by unit or targets unit, grants Atk/Def+6 to unit and target ally or unit and targeting ally for 1 turn."
  },
  {
    name: "Atk/Res Link 1",
    spCost: 60,
    icon: "53-3",
    effect: "If a movement Assist skill (like Reposition, Shove, Pivot, etc.) is used by unit or targets unit, grants Atk/Res+2 to unit and target ally or unit and targeting ally for 1 turn."
  },
  {
    name: "Atk/Res Link 2",
    spCost: 120,
    icon: "53-4",
    prev: ["Atk/Res Link 1"],
    effect: "If a movement Assist skill (like Reposition, Shove, Pivot, etc.) is used by unit or targets unit, grants Atk/Res+4 to unit and target ally or unit and targeting ally for 1 turn."
  },
  {
    name: "Atk/Res Link 3",
    spCost: 240,
    icon: "53-5",
    prev: ["Atk/Res Link 2"],
    effect: "If a movement Assist skill (like Reposition, Shove, Pivot, etc.) is used by unit or targets unit, grants Atk/Res+6 to unit and target ally or unit and targeting ally for 1 turn."
  },
  {
    name: "Atk/Spd Link 1",
    spCost: 60,
    icon: "51-11",
    effect: "If a movement Assist skill (like Reposition, Shove, Pivot, etc.) is used by unit or targets unit, grants Atk/Spd+2 to unit and target ally or unit and targeting ally for 1 turn."
  },
  {
    name: "Atk/Spd Link 2",
    spCost: 120,
    icon: "51-12",
    prev: ["Atk/Spd Link 1"],
    effect: "If a movement Assist skill (like Reposition, Shove, Pivot, etc.) is used by unit or targets unit, grants Atk/Spd+4 to unit and target ally or unit and targeting ally for 1 turn."
  },
  {
    name: "Atk/Spd Link 3",
    spCost: 240,
    icon: "52-0",
    prev: ["Atk/Spd Link 2"],
    effect: "If a movement Assist skill (like Reposition, Shove, Pivot, etc.) is used by unit or targets unit, grants Atk/Spd+6 to unit and target ally or unit and targeting ally for 1 turn."
  },
  {
    name: "Axebreaker 1",
    spCost: 50,
    icon: "8-10",
    exclude: [{colorType: "Blue"}],
    effect: "If unit's HP ≥ 90% in combat against an axe user, unit makes a follow-up attack and foe cannot."
  },
  {
    name: "Axebreaker 2",
    spCost: 100,
    icon: "8-11",
    prev: ["Axebreaker 1"],
    exclude: [{colorType: "Blue"}],
    effect: "If unit's HP ≥ 70% in combat against an axe user, unit makes a follow-up attack and foe cannot."
  },
  {
    name: "Axebreaker 3",
    spCost: 200,
    icon: "8-12",
    prev: ["Axebreaker 2"],
    exclude: [{colorType: "Blue"}],
    effect: "If unit's HP ≥ 50% in combat against an axe user, unit makes a follow-up attack and foe cannot."
  },
  {
    name: "B Tomebreaker 1",
    spCost: 50,
    icon: "9-9",
    exclude: [{colorType: "Red"}],
    effect: "If unit's HP ≥ 90% in combat against a blue tome user, unit makes a follow-up attack and foe cannot."
  },
  {
    name: "B Tomebreaker 2",
    spCost: 100,
    icon: "9-10",
    prev: ["B Tomebreaker 1"],
    exclude: [{colorType: "Red"}],
    effect: "If unit's HP ≥ 70% in combat against a blue tome user, unit makes a follow-up attack and foe cannot."
  },
  {
    name: "B Tomebreaker 3",
    spCost: 200,
    icon: "9-11",
    prev: ["B Tomebreaker 2"],
    exclude: [{colorType: "Red"}],
    effect: "If unit's HP ≥ 50% in combat against a blue tome user, unit makes a follow-up attack and foe cannot."
  },
  {
    name: "Beorc's Blessing",
    spCost: 300,
    icon: "26-4",
    include: [{name: "Ike (Brave Heroes)"}],
    effect: "If foe is cavalry or flier type, foe's bonuses (from skills like Fortify, Rally, etc.) are nullified during combat. (Skill cannot be inherited.)"
  },
  {
    name: "Binding Shield",
    spCost: 300,
    icon: "48-12",
    include: [{name:"Marth (Legendary Heroes)"}],
    effect: "In combat against a dragon foe, unit makes a guaranteed follow-up attack and foe cannot counterattack or make a follow-up attack."
  },
  {
    name: "Blaze Dance 1",
    spCost: 50,
    icon: "27-8",
    exclude: [{weaponType: "Staff"}],
    effect: "If Sing or Dance is used, target also granted Atk+2."
  },
  {
    name: "Blaze Dance 2",
    spCost: 100,
    icon: "27-9",
    prev: ["Blaze Dance 1"],
    exclude: [{weaponType: "Staff"}],
    effect: "If Sing or Dance is used, target also granted Atk+3."
  },
  {
    name: "Blaze Dance 3",
    spCost: 200,
    icon: "27-10",
    prev: ["Blaze Dance 2"],
    exclude: [{weaponType: "Staff"}],
    effect: "If Sing or Dance is used, target also granted Atk+4."
  },
  {
    name: "Bold Fighter 1",
    spCost: 60,
    icon: "34-0",
    include: [{moveType: "Armored"}],
    effect: "If unit's HP = 100% and unit initiates combat, unit makes a guaranteed follow-up attack. Grants Special cooldown charge +1 per attack. (Does not stack.)"
  },
  {
    name: "Bold Fighter 2",
    spCost: 120,
    icon: "34-1",
    prev: ["Bold Fighter 1"],
    include: [{moveType: "Armored"}],
    effect: "If unit's HP ≥ 50% and unit initiates combat, unit makes a guaranteed follow-up attack. Grants Special cooldown charge +1 per attack. (Does not stack.)"
  },
  {
    name: "Bold Fighter 3",
    spCost: 240,
    icon: "34-2",
    prev: ["Bold Fighter 2"],
    include: [{moveType: "Armored"}],
    effect: "If unit initiates combat, unit makes a guaranteed follow-up attack. Grants Special cooldown charge +1 per attack. (Does not stack.)"
  },
  {
    name: "Bowbreaker 1",
    spCost: 50,
    icon:"9-0",
    exclude: [{moveType:"Flying"}],
    effect: "If unit's HP ≥ 90% in combat against a bow user, unit makes a follow-up attack and foe cannot."
  },
  {
    name: "Bowbreaker 2",
    spCost: 100,
    icon:"9-1",
    prev: ["Bowbreaker 1"],
    exclude: [{moveType:"Flying"}],
    effect: "If unit's HP ≥ 70% in combat against a bow user, unit makes a follow-up attack and foe cannot."
  },
  {
    name: "Bowbreaker 3",
    spCost: 200,
    icon:"9-2",
    prev: ["Bowbreaker 2"],
    exclude: [{moveType:"Flying"}],
    effect: "If unit's HP ≥ 50% in combat against a bow user, unit makes a follow-up attack and foe cannot."
  },
  {
    name: "Brash Assault 1",
    spCost: 50,
    icon: "6-0",
    effect: "Unit automatically makes a follow-up when at HP ≤ 30% and attacking a foe that can counter."
  },
  {
    name: "Brash Assault 2",
    spCost: 100,
    icon: "6-1",
    prev: ["Brash Assault 1"],
    effect: "Unit automatically makes a follow-up when at HP ≤ 40% and attacking a foe that can counter."
  },
  {
    name: "Brash Assault 3",
    spCost: 200,
    icon: "6-2",
    prev: ["Brash Assault 2"],
    effect: "Unit automatically makes a follow-up when at HP ≤ 50% and attacking a foe that can counter."
  },
  {
    name: "Bushido",
    spCost: 300,
    icon: "43-5",
    include: [{name:"Ryoma (Legendary Heroes)"}],
    effect: "Deals +10 damage when Special triggers."
  },
  {
    name: "Cancel Affinity 1",
    spCost: 50,
    icon: "22-3",
    exclude: [{weaponType: "Tome"}, {weaponType:"Staff"}],
    effect: "Any weapon triangle affinity granted by unit's skills is negated. Also negates any weapon triangle affinity granted by foe's skills."
  },
  {
    name: "Cancel Affinity 2",
    spCost: 100,
    icon: "22-4",
    prev: ["Cancel Affinity 1"],
    exclude: [{weaponType: "Tome"}, {weaponType:"Staff"}],
    effect: "Any weapon triangle affinity granted by unit's skills is negated. If affinity disadvantage exists, weapon triangle affinity granted by foe's skills is negated."
  },
  {
    name: "Cancel Affinity 3",
    spCost: 200,
    icon: "22-5",
    prev: ["Cancel Affinity 2"],
    exclude: [{weaponType: "Tome"}, {weaponType:"Staff"}],
    effect: "Any weapon triangle affinity granted by unit's skills is negated. If affinity disadvantage exists, weapon triangle affinity granted by foe's skills is reversed."
  },
  {
    name: "Chill Atk 1",
    spCost: 60,
    icon: "42-7",
    effect: "At the start of each turn, inflicts Atk-3 on foe on the enemy team with the highest Def through its next action."
  },
  {
    name: "Chill Atk 2",
    spCost: 120,
    icon: "42-8",
    prev: ["Chill Atk 1"],
    effect: "At the start of each turn, inflicts Atk-5 on foe on the enemy team with the highest Def through its next action."
  },
  {
    name: "Chill Atk 3",
    spCost: 240,
    icon: "42-9",
    prev: ["Chill Atk 2"],
    effect: "At the start of each turn, inflicts Atk-7 on foe on the enemy team with the highest Def through its next action."
  },
  {
    name: "Chill Def 1",
    spCost: 60,
    icon: "38-9",
    effect: "At the start of each turn, inflicts Def-3 on foe on the enemy team with the highest Def through its next action."
  },
  {
    name: "Chill Def 2",
    spCost: 120,
    icon: "38-10",
    prev: ["Chill Def 1"],
    effect: "At the start of each turn, inflicts Def-5 on foe on the enemy team with the highest Def through its next action."
  },
  {
    name: "Chill Def 3",
    spCost: 240,
    icon: "38-11",
    prev: ["Chill Def 2"],
    effect: "At the start of each turn, inflicts Def-7 on foe on the enemy team with the highest Def through its next action."
  },
  {
    name: "Chill Spd 1",
    spCost: 60,
    icon: "37-10",
    effect: "At the start of each turn, inflicts Spd-3 on foe on the enemy team with the highest Spd through its next action."
  },
  {
    name: "Chill Spd 2",
    spCost: 120,
    icon: "37-11",
    prev: ["Chill Spd 1"],
    effect: "At the start of each turn, inflicts Spd-5 on foe on the enemy team with the highest Spd through its next action."
  },
  {
    name: "Chill Spd 3",
    spCost: 240,
    icon: "37-12",
    prev: ["Chill Spd 2"],
    effect: "At the start of each turn, inflicts Spd-7 on foe on the enemy team with the highest Spd through its next action."
  },
  {
    name: "Chill Res 1",
    spCost: 60,
    icon: "39-10",
    effect: "At the start of each turn, inflicts Res-3 on foe on the enemy team with the highest Res through its next action."
  },
  {
    name: "Chill Res 2",
    spCost: 120,
    icon: "39-11",
    prev: ["Chill Res 1"],
    effect: "At the start of each turn, inflicts Res-5 on foe on the enemy team with the highest Res through its next action."
  },
  {
    name: "Chill Res 3",
    spCost: 240,
    icon: "39-12",
    prev: ["Chill Res 2"],
    effect: "At the start of each turn, inflicts Res-7 on foe on the enemy team with the highest Res through its next action."
  },
  {
    name: "Chilling Seal",
    spCost: 300,
    icon: "35-2",
    include: [{name:"Gunnthrá"}],
    effect: "At the start of each turn, if unit's HP ≥ 50%, inflicts Atk/Spd-6 on foe on the enemy team with the lowest Def through its next action. (Skill cannot be inherited.)"
  },
  {
    name: "Crusader's Ward",
    spCost: 300,
    icon: "29-7",
    include: [{name:"Sigurd"}],
    effect: "If unit receives consecutive attack from a foe 2 spaces away, damage from second attack onward reduced by 80%. (Skill cannot be inherited.)"
  },
  {
    name: "Daggerbreaker 1",
    spCost: 50,
    icon: "9-3",
    effect: "If unit's HP ≥ 90% in combat against a dagger user, unit makes a follow-up attack and foe cannot."
  },
  {
    name: "Daggerbreaker 2",
    spCost: 100,
    icon: "9-4",
    prev: ["Dagger Breaker 1"],
    effect: "If unit's HP ≥ 70% in combat against a dagger user, unit makes a follow-up attack and foe cannot."
  },
  {
    name: "Daggerbreaker 3",
    spCost: 200,
    icon: "9-5",
    prev: ["Dagger Breaker 2"],
    effect: "If unit's HP ≥ 50% in combat against a dagger user, unit makes a follow-up attack and foe cannot."
  },
  {
    name: "Dazzling Staff 1",
    spCost: 60,
    icon: "18-1",
    include: [{weaponType: "Staff"}],
    effect: "If unit has 100% HP at the start of combat, the enemy cannot counterattack."
  },
  {
    name: "Dazzling Staff 2",
    spCost: 120,
    icon: "18-2",
    prev: ["Dazzling Staff 1"],
    include: [{weaponType: "Staff"}],
    effect: "If unit has ≥ 50% HP at the start of combat, the enemy cannot counterattack."
  },
  {
    name: "Dazzling Staff 3",
    spCost: 240,
    icon: "18-3",
    prev: ["Dazzling Staff 2"],
    include: [{weaponType: "Staff"}],
    effect: "The enemy cannot counterattack."
  },
  {
    name: "Def Feint 1",
    spCost: 60,
    icon: "44-7",
    effect: "If a Rally Assist skill is used by unit or targets unit, inflicts Def-3 on foes in cardinal directions of unit through their next action."
  },
  {
    name: "Def Feint 2",
    spCost: 120,
    icon: "44-8",
    prev: ["Def Feint 1"],
    effect: "If a Rally Assist skill is used by unit or targets unit, inflicts Def-5 on foes in cardinal directions of unit through their next action."
  },
  {
    name: "Def Feint 3",
    spCost: 240,
    icon: "44-9",
    prev: ["Def Feint 2"],
    effect: "If a Rally Assist skill is used by unit or targets unit, inflicts Def-7 on foes in cardinal directions of unit through their next action."
  },
  {
    name: "Def/Res Link 1",
    spCost: 60,
    icon: "42-10",
    effect: "If a movement Assist skill (like Reposition, Shove, Pivot, etc.) is used by unit or targets unit, grants Def/Res+2 to unit and target ally or unit and targeting ally for 1 turn."
  },
  {
    name: "Def/Res Link 2",
    spCost: 120,
    icon: "42-11",
    prev: ["Def/Res Link 1"],
    effect: "If a movement Assist skill (like Reposition, Shove, Pivot, etc.) is used by unit or targets unit, grants Def/Res+4 to unit and target ally or unit and targeting ally for 1 turn."
  },
  {
    name: "Def/Res Link 3",
    spCost: 240,
    icon: "42-12",
    prev: ["Def/Res Link 2"],
    effect: "If a movement Assist skill (like Reposition, Shove, Pivot, etc.) is used by unit or targets unit, grants Def/Res+6 to unit and target ally or unit and targeting ally for 1 turn."
  },
  {
    name: "Deluge Dance 1",
    spCost: 120,
    icon: "49-11",
    prev: ["Torrent Dance 1"],
    exclude: [{weaponType: "Staff"}],
    effect: "If Sing or Dance is used, grants Spd+2 and Res+3 to target."
  },
  {
    name: "Deluge Dance 2",
    spCost: 240,
    icon: "49-12",
    prev: ["Deluge Dance 1"],
    exclude: [{weaponType: "Staff"}],
    effect: "If Sing or Dance is used, grants Spd+3 and Res+4 to target."
  },
  {
    name: "Desperation 1",
    spCost: 50,
    icon: "5-10",
    effect: "If unit initiates combat with HP ≤ 25%, follow-up attacks occur immediately after unit's attack."
  },
  {
    name: "Desperation 2",
    spCost: 100,
    icon: "5-11",
    prev: ["Desperation 1"],
    effect: "If unit initiates combat with HP ≤ 50%, follow-up attacks occur immediately after unit's attack."
  },
  {
    name: "Desperation 3",
    spCost: 200,
    icon: "5-12",
    prev: ["Desperation 2"],
    effect: "If unit initiates combat with HP ≤ 75%, follow-up attacks occur immediately after unit's attack."
  },
  {
    name: "Double Lion",
    spCost: 300,
    icon: "48-2",
    include: [{name:"Celica (Arrival of the Brave)"}],
    effect: "If unit's HP = 100% at start of combat and unit initiates combat, unit attacks twice, but deals 1 damage to unit after combat. (Does not stack.)"
  },
  {
    name: "Drag Back",
    spCost: 150,
    icon: "4-7",
    include: [{weaponType:"Sword"}, {weaponType:"Axe"}, {weaponType:"Lance"}, {weaponType:"Breath"}],
    effect: "If unit initiates attack, the unit moves 1 space away after combat. Foe moves into unit's previous space."
  },
  {
    name: "Dull Close 1",
    spCost: 60,
    icon: "44-4",
    effect: "At start of combat, if unit's HP ≥ 100% and foe uses sword, lance, axe, or dragonstone, neutralizes foe's bonuses (from skills like Fortify, Rally, etc.) during combat."
  },
  {
    name: "Dull Close 2",
    spCost: 120,
    icon: "44-5",
    prev: ["Dull Close 1"],
    effect: "At start of combat, if unit's HP ≥ 50% and foe uses sword, lance, axe, or dragonstone, neutralizes foe's bonuses (from skills like Fortify, Rally, etc.) during combat."
  },
  {
    name: "Dull Close 3",
    spCost: 240,
    icon: "44-6",
    prev: ["Dull Close 2"],
    effect: "If foe uses sword, lance, axe, or dragonstone, neutralizes foe's bonuses (from skills like Fortify, Rally, etc.) during combat."
  },
  {
    name: "Dull Ranged 1",
    spCost: 60,
    icon: "38-12",
    effect: "If unit's HP = 100% at start of combat and foe uses bow, dagger, magic, or staff, neutralizes foe's bonuses (from skills like Fortify, Rally, etc.) during combat."
  },
  {
    name: "Dull Ranged 2",
    spCost: 120,
    icon: "39-0",
    prev: ["Dull Ranged 1"],
    effect: "If unit's HP ≥ 50% at start of combat and foe uses bow, dagger, magic, or staff, neutralizes foe's bonuses (from skills like Fortify, Rally, etc.) during combat."
  },
  {
    name: "Dull Ranged 3",
    spCost: 240,
    icon: "39-1",
    prev: ["Dull Ranged 2"],
    effect: "If foe uses bow, dagger, magic, or staff, neutralizes foe's bonuses (from skills like Fortify, Rally, etc.) during combat."
  },
  {
    name: "Earth Dance 1",
    spCost: 50,
    icon: "34-12",
    exclude: [{weaponType: "Staff"}],
    effect: "If Sing or Dance is used, target also granted Def+2."
  },
  {
    name: "Earth Dance 2",
    spCost: 100,
    icon: "35-0",
    prev: ["Earth Dance 1"],
    exclude: [{weaponType: "Staff"}],
    effect: "If Sing or Dance is used, target also granted Def+3."
  },
  {
    name: "Earth Dance 3",
    spCost: 200,
    icon: "35-1",
    prev: ["Earth Dance 2"],
    exclude: [{weaponType: "Staff"}],
    effect: "If Sing or Dance is used, target also granted Def+4."
  },
  {
    name: "Escape Route 1",
    spCost: 60,
    icon: "5-4",
    effect: "Enables unit whose own HP is ≤ 30% to warp adjacent to any ally."
  },
  {
    name: "Escape Route 2",
    spCost: 120,
    icon: "5-5",
    prev: ["Escape Route 1"],
    effect: "Enables unit whose own HP is ≤ 40% to warp adjacent to any ally."
  },
  {
    name: "Escape Route 3",
    spCost: 240,
    icon: "5-6",
    prev: ["Escape Route 2"],
    effect: "Enables unit whose own HP is ≤ 50% to warp adjacent to any ally."
  },
  {
    name: "Fireflood Dance 1",
    spCost: 120,
    icon: "47-2",
    prev: ["Torrent Dance 1"],
    exclude: [{weaponType: "Staff"}],
    effect: "If Sing or Dance is used, grants Atk+2 and Res+3 to target."
  },
  {
    name: "Fireflood Dance 2",
    spCost: 240,
    icon: "47-3",
    prev: ["Fireflood Dance 1"],
    exclude: [{weaponType: "Staff"}],
    effect: "If Sing or Dance is used, grants Atk+3 and Res+4 to target."
  },
  {
    name: "Firestorm Dance 1",
    spCost: 120,
    icon: "42-2",
    prev: ["Blaze Dance 1"],
    exclude: [{weaponType: "Staff"}],
    effect: "If Sing or Dance is used, target also granted Atk/Spd+2."
  },
  {
    name: "Firestorm Dance 2",
    spCost: 240,
    icon: "42-3",
    prev: ["Firestorm Dance 1"],
    exclude: [{weaponType: "Staff"}],
    effect: "If Sing or Dance is used, target also granted Atk/Spd+3."
  },
  {
    name: "Flier Formation 1",
    spCost: 60,
    icon: "27-0",
    include: [{moveType: "Flying"}],
    effect: "If unit has 100% HP, unit can move to a space adjacent to a flier ally within 2 spaces."
  },
  {
    name: "Flier Formation 2",
    spCost: 120,
    icon: "27-1",
    prev: ["Flier Formation 1"],
    include: [{moveType: "Flying"}],
    effect: "If unit has ≥ 50% HP, unit can move to a space adjacent to a flier ally within 2 spaces."
  },
  {
    name: "Flier Formation 3",
    spCost: 240,
    icon: "27-2",
    prev: ["Flier Formation 2"],
    include: [{moveType: "Flying"}],
    effect: "Unit can move to a space adjacent to a flier ally within 2 spaces."
  },
  {
    name: "Follow-Up Ring",
    spCost: 200,
    icon: "29-8",
    include: [{name:"Arden"}],
    effect: "Unit makes a guaranteed follow-up attack when unit's HP ≥ 50% at start of combat. (Skill cannot be inherited.)"
  },
  {
    name: "G Tomebreaker 1",
    spCost: 50,
    icon: "9-12",
    exclude: [{colorType: "Blue"}],
    effect: "If unit's HP ≥ 90% in combat against a green tome user, unit makes a follow-up attack and foe cannot."
  },
  {
    name: "G Tomebreaker 2",
    spCost: 100,
    icon: "10-0",
    prev: ["G Tomebreaker 1"],
    exclude: [{colorType: "Blue"}],
    effect: "If unit's HP ≥ 70% in combat against a green tome user, unit makes a follow-up attack and foe cannot."
  },
  {
    name: "G Tomebreaker 3",
    spCost: 200,
    icon: "10-1",
    prev: ["G Tomebreaker 2"],
    exclude: [{colorType: "Blue"}],
    effect: "If unit's HP ≥ 50% in combat against a green tome user, unit makes a follow-up attack and foe cannot."
  },
  {
    name: "Gale Dance 1",
    spCost: 50,
    icon: "27-11",
    exclude: [{weaponType: "Staff"}],
    effect: "If Sing or Dance is used, target also granted Spd+2."
  },
  {
    name: "Gale Dance 2",
    spCost: 100,
    icon: "27-12",
    prev: ["Gale Dance 1"],
    exclude: [{weaponType: "Staff"}],
    effect: "If Sing or Dance is used, target also granted Spd+3."
  },
  {
    name: "Gale Dance 3",
    spCost: 200,
    icon: "28-0",
    prev: ["Gale Dance 2"],
    exclude: [{weaponType: "Staff"}],
    effect: "If Sing or Dance is used, target also granted Spd+4."
  },
  {
    name: "Geyser Dance 1",
    spCost: 120,
    icon: "28-4",
    prev: ["Torrent Dance 1"],
    exclude: [{weaponType: "Staff"}],
    effect: "If Sing or Dance is used, target also granted Def/Res+3."
  },
  {
    name: "Geyser Dance 2",
    spCost: 240,
    icon: "28-5",
    prev: ["Geyser Dance 1"],
    exclude: [{weaponType: "Staff"}],
    effect: "If Sing or Dance is used, target also granted Def/Res+4."
  },
  {
    name: "Guard 1",
    spCost: 50,
    icon: "16-4",
    effect: "If unit's HP is 100% at start of combat, enemy is inflicted with Special cooldown charge-1. (If using similar skill, only highest value applied.)"
  },
  {
    name: "Guard 2",
    spCost: 100,
    icon: "16-5",
    prev: ["Guard 1"],
    effect: "If unit's HP is ≥ 90% at start of combat, enemy is inflicted with Special cooldown charge-1. (If using similar skill, only highest value applied.)"
  },
  {
    name: "Guard 3",
    spCost: 200,
    icon: "16-6",
    prev: ["Guard 2"],
    effect: "If unit's HP is ≥ 80% at start of combat, enemy is inflicted with Special cooldown charge-1. (If using similar skill, only highest value applied.)"
  },
  {
    name: "Hit and Run",
    spCost: 150,
    icon: "15-4",
    include: [{weaponType:"Sword"}, {weaponType:"Axe"}, {weaponType:"Lance"}, {weaponType:"Breath"}],
    effect: "If unit initiates attack, unit retreats 1 space after battle."
  },
  {
    name: "Knock Back",
    spCost: 150,
    icon: "4-5",
    include: [{weaponType:"Sword"}, {weaponType:"Axe"}, {weaponType:"Lance"}, {weaponType:"Breath"}],
    effect: "If unit initiates attack, foe is moved 1 space away after combat."
  },
  {
    name: "Lancebreaker 1",
    spCost: 50,
    icon: "8-7",
    exclude: [{colorType: "Red"}],
    effect: "If unit's HP ≥ 90% in combat against a lance user, unit makes a follow-up attack and foe cannot."
  },
  {
    name: "Lancebreaker 2",
    spCost: 100,
    icon: "8-8",
    prev: ["Lancebreaker 1"],
    exclude: [{colorType: "Red"}],
    effect: "If unit's HP ≥ 70% in combat against a lance user, unit makes a follow-up attack and foe cannot."
  },
  {
    name: "Lancebreaker 3",
    spCost: 200,
    icon: "8-9",
    prev: ["Lancebreaker 2"],
    exclude: [{colorType: "Red"}],
    effect: "If unit's HP ≥ 50% in combat against a lance user, unit makes a follow-up attack and foe cannot."
  },
  {
    name: "Live for Bounty",
    spCost: 100,
    icon: "14-10",
    effect: "If unit survives, get 1.5x shards/crystals from a Training Tower map. (If similar skill effects also used, only highest multiplier applied.)"
  },
  {
    name: "Live for Honor",
    spCost: 100,
    icon: "14-9",
    effect: "If unit survives, get 1.5x normal badges from a Training Tower map. (If similar skill effects also used, only highest multiplier applied.)"
  },
  {
    name: "Live to Serve 1",
    spCost: 40,
    icon: "7-2",
    include: [{weaponType: "Staff"}],
    effect: "When healing allies with a staff, unit also recovers 50% of the HP restored."
  },
  {
    name: "Live to Serve 2",
    spCost: 80,
    icon: "7-3",
    prev: ["Live to Serve 1"],
    include: [{weaponType: "Staff"}],
    effect: "When healing allies with a staff, unit also recovers 75% of the HP restored."
  },
  {
    name: "Live to Serve 3",
    spCost: 160,
    icon: "7-4",
    prev: ["Live to Serve 2"],
    include: [{weaponType: "Staff"}],
    effect: "When healing allies with a staff, unit also recovers the same amount."
  },
  {
    name: "Lunar Brace",
    spCost: 300,
    icon: "53-0",
    include: [{name:"Eirika (Legendary Heroes)"}],
    effect: "Slows Special trigger (cooldown count+1). Deals damage = 50% of foe's Def when Special triggers."
  },
  {
    name: "Lunge",
    spCost: 150,
    icon: "4-6",
    include: [{weaponType:"Sword"}, {weaponType:"Axe"}, {weaponType:"Lance"}, {weaponType:"Breath"}],
    effect: "If unit initiates attack, after combat, unit and targeted foe swap places."
  },
  {
    name: "Null Follow-Up 1",
    spCost: 60,
    icon: "53-6",
    include: [{moveType: "Infantry"}],
    effect: "At start of combat, if unit's HP = 100%,, disables foe's skills that guarantee foe's follow-up attack and foe's skills that prevent unit's follow-up attack."
  },
  {
    name: "Null Follow-Up 2",
    spCost: 120,
    icon: "53-7",
    include: [{moveType: "Infantry"}],
    effect: "At start of combat, if unit's HP ≥ 50%, disables foe's skills that guarantee foe's follow-up attack and foe's skills that prevent unit's follow-up attack."
  },
  {
    name: "Null Follow-Up 3",
    spCost: 240,
    icon: "53-8",
    include: [{moveType: "Infantry"}],
    effect: "Disables foe's skills that guarantee foe's follow-up attack and foe's skills that prevent unit's follow-up attack."
  },
  {
    name: "Obstruct 1",
    spCost: 50,
    icon: "4-11",
    effect: "Prevents foes from moving through adjacent spaces while this unit's HP ≥ 90%. (No effect on foes with a Pass skill.)"
  },
  {
    name: "Obstruct 2",
    spCost: 100,
    icon: "4-12",
    prev: ["Obstruct 1"],
    effect: "Prevents foes from moving through adjacent spaces while this unit's HP ≥ 70%. (No effect on foes with a Pass skill.)"
  },
  {
    name: "Obstruct 3",
    spCost: 200,
    icon: "5-0",
    prev: ["Obstruct 2"],
    effect: "Prevents foes from moving through adjacent spaces while this unit's HP ≥ 50%. (No effect on foes with a Pass skill.)"
  },
  {
    name: "Pass 1",
    spCost: 50,
    icon: "4-8",
    effect: "Units can pass through foes if its own HP ≥ 75%."
  },
  {
    name: "Pass 2",
    spCost: 100,
    icon: "4-9",
    prev: ["Pass 1"],
    effect: "Units can pass through foes if its own HP ≥ 50%."
  },
  {
    name: "Pass 3",
    spCost: 200,
    icon: "4-10",
    prev: ["Pass 2"],
    effect: "Units can pass through foes if its own HP ≥ 25%."
  },
  {
    name: "Poison Strike 1",
    spCost: 60,
    icon: "6-9",
    exclude: [{weaponType: "Staff"}],
    effect: "Inflicts 4 damage to foe after any combat this unit initiates."
  },
  {
    name: "Poison Strike 2",
    spCost: 120,
    icon: "6-10",
    prev: ["Poison Strike 1"],
    exclude: [{weaponType: "Staff"}],
    effect: "Inflicts 7 damage to foe after any combat this unit initiates."
  },
  {
    name: "Poison Strike 3",
    spCost: 240,
    icon: "6-11",
    prev: ["Poison Strike 2"],
    exclude: [{weaponType: "Staff"}],
    effect: "Inflicts 10 damage to foe after any combat this unit initiates."
  },
  {
    name: "Quick Riposte 1",
    spCost: 60,
    icon: "6-3",
    effect: "Unit automatically makes a follow-up attack if attacked at HP ≥ 90%."
  },
  {
    name: "Quick Riposte 2",
    spCost: 120,
    icon: "6-4",
    prev: ["Quick Riposte 1"],
    effect: "Unit automatically makes a follow-up attack if attacked at HP ≥ 80%."
  },
  {
    name: "Quick Riposte 3",
    spCost: 240,
    icon: "6-5",
    prev: ["Quick Riposte 2"],
    effect: "Unit automatically makes a follow-up attack if attacked at HP ≥ 70%."
  },
  {
    name: "R Tomebreaker 1",
    spCost: 50,
    icon: "9-6",
    exclude: [{colorType: "Green"}],
    effect: "If unit's HP ≥ 90% in combat against a red tome user, unit makes a follow-up attack and foe cannot."
  },
  {
    name: "R Tomebreaker 2",
    spCost: 100,
    icon: "9-7",
    prev: ["R Tomebreaker 1"],
    exclude: [{colorType: "Green"}],
    effect: "If unit's HP ≥ 70% in combat against a red tome user, unit makes a follow-up attack and foe cannot."
  },
  {
    name: "R Tomebreaker 3",
    spCost: 200,
    icon: "9-8",
    prev: ["R Tomebreaker 2"],
    exclude: [{colorType: "Green"}],
    effect: "If unit's HP ≥ 50% in combat against a red tome user, unit makes a follow-up attack and foe cannot."
  },
  {
    name: "Recover Ring",
    spCost: 200,
    icon: "29-9",
    include: [{name: "Arvis"}],
    effect: "Restores 10 HP at the start of each turn. (Skill cannot be inherited.)"
  },
  {
    name: "Renewal 1",
    spCost: 60,
    icon: "6-12",
    effect: "At the start of every fourth turn, restores 10 HP."
  },
  {
    name: "Renewal 2",
    spCost: 120,
    icon: "7-0",
    prev: ["Renewal 1"],
    effect: "At the start of every third turn, restores 10 HP."
  },
  {
    name: "Renewal 3",
    spCost: 240,
    icon: "7-1",
    prev: ["Renewal 2"],
    effect: "At the start of every second turn, restores 10 HP."
  },
  {
    name: "Rockslide Dance 1",
    spCost: 120,
    icon: "47-4",
    prev: ["Gale Dance 1"],
    exclude: [{weaponType: "Staff"}],
    effect: "If Sing or Dance is used, grants Spd+2 and Def+3 to target."
  },
  {
    name: "Rockslide Dance 2",
    spCost: 240,
    icon: "47-5",
    prev: ["Rockslide Dance 1"],
    exclude: [{weaponType: "Staff"}],
    effect: "If Sing or Dance is used, grants Spd+3 and Def+4 to target."
  },
  {
    name: "S Drink",
    spCost: 300,
    icon: "40-10",
    include: [{name: "Leif"}],
    effect: "At the start of turn 1, restores 99 HP and grants Special cooldown count-1."
  },
  {
    name: "Sacae's Blessing",
    spCost: 300,
    icon: "26-5",
    include: [{name:"Lyn (Brave Heroes)"}],
    effect: "If foe has sword, lance, or axe, foe cannot counterattack. (Skill cannot be inherited.)"
  },
  {
    name: "Seal Atk 1",
    spCost: 40,
    icon: "7-5",
    exclude: [{weaponType: "Staff"}],
    effect: "After combat, foe suffers Atk-3 through its next action."
  },
  {
    name: "Seal Atk 2",
    spCost: 80,
    icon: "7-6",
    prev: ["Seal Atk 1"],
    exclude: [{weaponType: "Staff"}],
    effect: "After combat, foe suffers Atk-5 through its next action."
  },
  {
    name: "Seal Atk 3",
    spCost: 160,
    icon: "7-7",
    prev: ["Seal Atk 2"],
    exclude: [{weaponType: "Staff"}],
    effect: "After combat, foe suffers Atk-7 through its next action."
  },
  {
    name: "Seal Atk/Def 1",
    spCost: 100,
    icon: "25-3",
    prev: ["Seal Atk 1", "Seal Def 1"],
    exclude: [{weaponType: "Staff"}],
    effect: "After combat, inflicts Atk/Def-3 on foe through its next action."
  },
  {
    name: "Seal Atk/Def 2",
    spCost: 200,
    icon: "25-4",
    prev: ["Seal Atk/Def 1"],
    exclude: [{weaponType: "Staff"}],
    effect: "After combat, inflicts Atk/Def-5 on foe through its next action."
  },
  {
    name: "Seal Atk/Spd 1",
    spCost: 100,
    icon: "20-0",
    prev: ["Seal Spd 1", "Seal Atk 1"],
    exclude: [{weaponType: "Staff"}],
    effect: "After combat, inflicts Atk/Spd-3 on foe through its next action."
  },
  {
    name: "Seal Atk/Spd 2",
    spCost: 200,
    icon: "20-1",
    prev: ["Seal Atk/Spd 1"],
    exclude: [{weaponType: "Staff"}],
    effect: "After combat, inflicts Atk/Spd-5 on foe through its next action."
  },
  {
    name: "Seal Def 1",
    spCost: 40,
    icon: "7-11",
    exclude: [{weaponType: "Staff"}],
    effect: "After combat, foe suffers Def-3 through its next action."
  },
  {
    name: "Seal Def 2",
    spCost: 80,
    icon: "7-12",
    prev: ["Seal Def 1"],
    exclude: [{weaponType: "Staff"}],
    effect: "After combat, foe suffers Def-5 through its next action."
  },
  {
    name: "Seal Def 3",
    spCost: 160,
    icon: "8-0",
    prev: ["Seal Def 2"],
    exclude: [{weaponType: "Staff"}],
    effect: "After combat, foe suffers Def-7 through its next action."
  },
  {
    name: "Seal Def/Res 1",
    spCost: 100,
    icon: "42-0",
    prev: ["Seal Def 1", "Seal Res 1"],
    exclude: [{weaponType: "Staff"}],
    effect: "After combat, inflicts Def/Res-3 on foe through its next action."
  },
  {
    name: "Seal Def/Res 2",
    spCost: 200,
    icon: "42-1",
    prev: ["Seal Atk/Def 1"],
    exclude: [{weaponType: "Staff"}],
    effect: "After combat, inflicts Def/Res-5 on foe through its next action."
  },
  {
    name: "Seal Res 1",
    spCost: 40,
    icon: "8-1",
    exclude: [{weaponType: "Staff"}],
    effect: "After combat, foe suffers Res-3 through its next action."
  },
  {
    name: "Seal Res 2",
    spCost: 80,
    icon: "8-2",
    prev: ["Seal Res 1"],
    exclude: [{weaponType: "Staff"}],
    effect: "After combat, foe suffers Res-5 through its next action."
  },
  {
    name: "Seal Res 3",
    spCost: 160,
    icon: "8-3",
    prev: ["Seal Res 2"],
    exclude: [{weaponType: "Staff"}],
    effect: "After combat, foe suffers Res-7 through its next action."
  },
  {
    name: "Seal Spd 1",
    spCost: 40,
    icon: "7-8",
    exclude: [{weaponType: "Staff"}],
    effect: "After combat, foe suffers Spd-3 through its next action."
  },
  {
    name: "Seal Spd 2",
    spCost: 80,
    icon: "7-9",
    prev: ["Seal Spd 1"],
    exclude: [{weaponType: "Staff"}],
    effect: "After combat, foe suffers Spd-5 through its next action."
  },
  {
    name: "Seal Spd 3",
    spCost: 160,
    icon: "7-10",
    prev: ["Seal Spd 2"],
    exclude: [{weaponType: "Staff"}],
    effect: "After combat, foe suffers Spd-7 through its next action."
  },
  {
    name: "Shield Pulse 1",
    spCost: 60,
    icon: "23-5",
    include: [{weaponType:"Sword"}, {weaponType:"Axe"}, {weaponType:"Lance"}, {weaponType:"Breath"}],
    exclude: [{moveType:"Flying"}, {moveType:"Cavalry"}],
    effect: "If unit's Special triggers based on a foe's attack, Special cooldown count-1 at start of turn 1."
  },
  {
    name: "Shield Pulse 2",
    spCost: 120,
    icon: "23-6",
    prev: ["Shield Pulse 1"],
    include: [{weaponType:"Sword"}, {weaponType:"Axe"}, {weaponType:"Lance"}, {weaponType:"Breath"}],
    exclude: [{moveType:"Flying"}, {moveType:"Cavalry"}],
    effect: "If unit's Special triggers based on a foe's attack, Special cooldown count-1 at start of turn 1. Unit takes 5 less damage when Special triggers."
  },
  {
    name: "Shield Pulse 3",
    spCost: 240,
    icon: "23-7",
    prev: ["Shield Pulse 2"],
    include: [{weaponType:"Sword"}, {weaponType:"Axe"}, {weaponType:"Lance"}, {weaponType:"Breath"}],
    exclude: [{moveType:"Flying"}, {moveType:"Cavalry"}],
    effect: "If unit's Special triggers based on a foe's attack, Special cooldown count-2 at start of turn 1. Unit takes 5 less damage when Special triggers."
  },
  {
    name: "Solar Brace",
    spCost: 200,
    icon: "38-3",
    include: [{name:"Ephraim (Legendary Heroes)"}],
    effect: "Restores 30% of damage dealt when Special triggers during combat. (Stacks with effects of skills like Sol.)"
  },
  {
    name: "Spd Feint 1",
    spCost: 60,
    icon: "43-0",
    effect: "If a Rally Assist skill is used by unit or targets unit, inflicts Spd-3 on foes in cardinal directions of unit through their next action."
  },
  {
    name: "Spd Feint 2",
    spCost: 120,
    icon: "43-1",
    prev: ["Spd Feint 1"],
    effect: "If a Rally Assist skill is used by unit or targets unit, inflicts Spd-5 on foes in cardinal directions of unit through their next action."
  },
  {
    name: "Spd Feint 3",
    spCost: 240,
    icon: "43-2",
    prev: ["Spd Feint 2"],
    effect: "If a Rally Assist skill is used by unit or targets unit, inflicts Spd-7 on foes in cardinal directions of unit through their next action."
  },
  {
    name: "Spd/Res Link 1",
    spCost: 60,
    icon: "50-3",
    effect: "If a movement Assist skill (like Reposition, Shove, Pivot, etc.) is used by unit or targets unit, grants Spd/Res+2 to unit and target ally or unit and targeting ally for 1 turn."
  },
  {
    name: "Spd/Res Link 2",
    spCost: 120,
    icon: "50-4",
    prev: ["Spd/Res Link 1"],
    effect: "If a movement Assist skill (like Reposition, Shove, Pivot, etc.) is used by unit or targets unit, grants Spd/Res+4 to unit and target ally or unit and targeting ally for 1 turn."
  },
  {
    name: "Spd/Res Link 3",
    spCost: 240,
    icon: "50-5",
    prev: ["Spd/Res Link 2"],
    effect: "If a movement Assist skill (like Reposition, Shove, Pivot, etc.) is used by unit or targets unit, grants Spd/Res+6 to unit and target ally or unit and targeting ally for 1 turn."
  },
  {
    name: "Special Fighter 1",
    spCost: 60,
    icon: "48-3",
    include: [{moveType: "Armored"}],
    effect: "At start of combat, if unit's HP ≥ 90%, grants Special cooldown charge +1 to unit and inflicts Special cooldown charge -1 on foe per attack. (Only highest value applied. Does not stack.)"
  },
  {
    name: "Special Fighter 2",
    spCost: 120,
    icon: "48-4",
    prev: ["Special Fighter 1"],
    include: [{moveType: "Armored"}],
    effect: "At start of combat, if unit's HP ≥ 70%, grants Special cooldown charge +1 to unit and inflicts Special cooldown charge -1 on foe per attack. (Only highest value applied. Does not stack.)"
  },
  {
    name: "Special Fighter 3",
    spCost: 240,
    icon: "48-5",
    prev: ["Special Fighter 2"],
    include: [{moveType: "Armored"}],
    effect: "At start of combat, if unit's HP ≥ 50%, grants Special cooldown charge +1 to unit and inflicts Special cooldown charge -1 on foe per attack. (Only highest value applied. Does not stack.)"
  },
  {
    name: "Special Spiral 1",
    spCost: 60,
    icon: "49-8",
    exclude: [{moveType:"Flying"}, {moveType:"Cavalry"}, {weaponType:"Staff"}],
    effect: "If unit initiates combat and unit's Special triggers before or during combat, grants Special cooldown count-1 after combat."
  },
  {
    name: "Special Spiral 2",
    spCost: 120,
    icon: "49-9",
    prev: ["Special Spiral 1"],
    exclude: [{moveType:"Flying"}, {moveType:"Cavalry"}, {weaponType:"Staff"}],
    effect: "If Special triggers before or during combat, grants Special cooldown count-1 after combat."
  },
  {
    name: "Special Spiral 3",
    spCost: 240,
    icon: "49-10",
    prev: ["Special Spiral 2"],
    exclude: [{moveType:"Flying"}, {moveType:"Cavalry"}, {weaponType:"Staff"}],
    effect: "If Special triggers before or during combat, grants Special cooldown count-1 after combat."
  },
  {
    name: "Swordbreaker 1",
    spCost: 50,
    icon: "8-4",
    exclude: [{colorType: "Green"}],
    effect: "If unit's HP ≥ 90% in combat against a sword user, unit makes a follow-up attack and foe cannot."
  },
  {
    name: "Swordbreaker 2",
    spCost: 100,
    icon: "8-5",
    prev: ["Swordbreaker 1"],
    exclude: [{colorType: "Green"}],
    effect: "If unit's HP ≥ 70% in combat against a sword user, unit makes a follow-up attack and foe cannot."
  },
  {
    name: "Swordbreaker 3",
    spCost: 200,
    icon: "8-6",
    prev: ["Swordbreaker 2"],
    exclude: [{colorType: "Green"}],
    effect: "If unit's HP ≥ 50% in combat against a sword user, unit makes a follow-up attack and foe cannot."
  },
  {
    name: "Torrent Dance 1",
    spCost: 50,
    icon: "28-1",
    exclude: [{weaponType: "Staff"}],
    effect: "If Sing or Dance is used, target also granted Res+3."
  },
  {
    name: "Vantage 1",
    spCost: 50,
    icon: "5-7",
    effect: "Unit counterattacks first when attacked at HP ≤ 25%."
  },
  {
    name: "Vantage 2",
    spCost: 100,
    icon: "5-8",
    prev: ["Vantage 1"],
    effect: "Unit counterattacks first when attacked at HP ≤ 50%."
  },
  {
    name: "Vantage 3",
    spCost: 200,
    icon: "5-9",
    prev: ["Vantage 2"],
    effect: "Unit counterattacks first when attacked at HP ≤ 75%."
  },
  {
    name: "Vengeful Fighter 1",
    spCost: 60,
    icon: "34-3",
    include: [{moveType: "Armored"}],
    effect: "If unit's HP ≥ 90% and foe initiates combat, unit makes a guaranteed follow-up attack. Grants Special cooldown charge +1 per attack. (Does not stack.)"
  },
  {
    name: "Vengeful Fighter 2",
    spCost: 120,
    icon: "34-4",
    prev: ["Vengeful Fighter 1"],
    include: [{moveType: "Armored"}],
    effect: "If unit's HP ≥ 70% and foe initiates combat, unit makes a guaranteed follow-up attack. Grants Special cooldown charge +1 per attack. (Does not stack.)"
  },
  {
    name: "Vengeful Fighter 3",
    spCost: 240,
    icon: "34-5",
    prev: ["Vengeful Fighter 2"],
    include: [{moveType: "Armored"}],
    effect: "If unit's HP ≥ 50% and foe initiates combat, unit makes a guaranteed follow-up attack. Grants Special cooldown charge +1 per attack. (Does not stack.)"
  },
  {
    name: "Warp Powder",
    spCost: 300,
    icon: "35-5",
    include: [{name:"Zelgius"}],
    effect: "If unit's HP ≥ 80%, unit can move adjacent to any ally within 2 spaces. (Skill cannot be inherited.)"
  },
  {
    name: "Wary Fighter 1",
    spCost: 60,
    icon: "6-6",
    include: [{moveType: "Armored"}],
    effect: "Prevents follow-up attacks in combat from unit and foes if unit's HP ≥ 90%."
  },
  {
    name: "Wary Fighter 2",
    spCost: 120,
    icon: "6-7",
    prev: ["Wary Fighter 1"],
    include: [{moveType: "Armored"}],
    effect: "Prevents follow-up attacks in combat from unit and foes if unit's HP ≥ 70%."
  },
  {
    name: "Wary Fighter 3",
    spCost: 240,
    icon: "6-8",
    prev: ["Wary Fighter 2"],
    include: [{moveType: "Armored"}],
    effect: "Prevents follow-up attacks in combat from unit and foes if unit's HP ≥ 50%."
  },
  {
    name: "Watersweep 1",
    spCost: 60,
    icon: "16-1",
    exclude: [{weaponType: "Staff"}],
    effect: "If unit initiates attack, no follow-up occurs. Against foe with magic, staff or dragonstone, if unit’s Spd - foe’s Spd ≥ 5, foe can’t counterattack."
  },
  {
    name: "Watersweep 2",
    spCost: 120,
    icon: "16-2",
    prev: ["Watersweep 1"],
    exclude: [{weaponType: "Staff"}],
    effect: "If unit initiates attack, no follow-up occurs. Against foe with magic, staff or dragonstone, if unit’s Spd - foe’s Spd ≥ 3, foe can’t counterattack."
  },
  {
    name: "Watersweep 3",
    spCost: 240,
    icon: "16-3",
    prev: ["Watersweep 2"],
    exclude: [{weaponType: "Staff"}],
    effect: "If unit initiates attack, no follow-up occurs. Against foe with magic, staff or dragonstone, if unit’s Spd - foe’s Spd ≥ 1, foe can’t counterattack."
  },
  {
    name: "Windsweep 1",
    spCost: 60,
    icon: "15-5",
    exclude: [{weaponType: "Staff"}],
    effect: "If unit initiates attack, no follow-up occurs. Against foe with sword, lance, axe, bow, or dagger, if unit’s Spd - foe’s Spd ≥ 5, foe can’t counterattack."
  },
  {
    name: "Windsweep 2",
    spCost: 120,
    icon: "15-6",
    prev: ["Windsweep 1"],
    exclude: [{weaponType: "Staff"}],
    effect: "If unit initiates attack, no follow-up occurs. Against foe with sword, lance, axe, bow, or dagger, if unit’s Spd - foe’s Spd ≥ 3, foe can’t counterattack."
  },
  {
    name: "Windsweep 3",
    spCost: 240,
    icon: "15-7",
    prev: ["Windsweep 2"],
    exclude: [{weaponType: "Staff"}],
    effect: "If unit initiates attack, no follow-up occurs. Against foe with sword, lance, axe, bow, or dagger, if unit’s Spd - foe’s Spd ≥ 1, foe can’t counterattack."
  },
  {
    name: "Wings of Mercy 1",
    spCost: 60,
    icon: "5-1",
    effect: "Enables unit to warp adjacent to any ally with HP ≤ 30%."
  },
  {
    name: "Wings of Mercy 2",
    spCost: 120,
    icon: "5-2",
    prev: ["Wings of Mercy 1"],
    effect: "Enables unit to warp adjacent to any ally with HP ≤ 40%."
  },
  {
    name: "Wings of Mercy 3",
    spCost: 240,
    icon: "5-3",
    prev: ["Wings of Mercy 2"],
    effect: "Enables unit to warp adjacent to any ally with HP ≤ 50%."
  },
  {
    name: "Wrath 1",
    spCost: 60,
    icon: "27-3",
    include: [{weaponType:"Sword"}, {weaponType:"Axe"}, {weaponType:"Lance"}, {weaponType:"Breath"}],
    exclude: [{moveType:"Flying"}, {moveType:"Cavalry"}],
    effect: "If unit's HP ≤ 25%, Special cooldown count-1 at start of turn if Special triggers by attacking. If Special triggers, +10 damage from Special."
  },
  {
    name: "Wrath 2",
    spCost: 120,
    icon: "27-4",
    prev: ["Wrath 1"],
    include: [{weaponType:"Sword"}, {weaponType:"Axe"}, {weaponType:"Lance"}, {weaponType:"Breath"}],
    exclude: [{moveType:"Flying"}, {moveType:"Cavalry"}],
    effect: "If unit's HP ≤ 50%, Special cooldown count-1 at start of turn if Special triggers by attacking. If Special triggers, +10 damage from Special."
  },
  {
    name: "Wrath 3",
    spCost: 240,
    icon: "27-5",
    prev: ["Wrath 2"],
    include: [{weaponType:"Sword"}, {weaponType:"Axe"}, {weaponType:"Lance"}, {weaponType:"Breath"}],
    exclude: [{moveType:"Flying"}, {moveType:"Cavalry"}],
    effect: "If unit's HP ≤ 75%, Special cooldown count-1 at start of turn if Special triggers by attacking. If Special triggers, +10 damage from Special."
  },
  {
    name: "Wrathful Staff 1",
    spCost: 60,
    icon: "17-3",
    include: [{weaponType: "Staff"}],
    effect: "If unit has 100% HP at the start of combat, damage from their staff will be calculated the same as other weapons."
  },
  {
    name: "Wrathful Staff 2",
    spCost: 120,
    icon: "17-4",
    prev: ["Wrathfull Staff 1"],
    include: [{weaponType: "Staff"}],
    effect: "If unit has ≥ 50% HP at the start of combat, damage from their staff will be calculated the same as other weapons."
  },
  {
    name: "Wrathful Staff 3",
    spCost: 240,
    icon: "17-5",
    prev: ["Wrathfull Staff 2"],
    include: [{weaponType: "Staff"}],
    effect: "Damage from unit's staff will be calculated the same as other weapons."
  }
];
