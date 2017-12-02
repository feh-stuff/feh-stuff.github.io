let SKILL_ASSIST = [
    {
      "name": "Ardent Sacrifice", "range": 1, "spCost": 150, "effect": "Heals adjacent ally 10 HP. Unit loses 10 HP (but cannot reach 0 this way).",
      "exclude": [{ "weaponType": "Staff" }]
    },
    {
      "name": "Dance", "range": 1, "spCost": 150, "effect": "Enables target to take another action. Cannot be used on units with Sing or Dance.",
      "include": [{ "name": "Olivia" },{ "name": "Ninian" },{ "name": "Olivia (Performing Arts)" },{ "name": "Inigo (Performing Arts)" } ]
    },
    {
      "name": "Draw Back", "range": 1, "spCost": 150, "effect": "Unit moves 1 space away from target ally, who moves to unit's former position.",
      "exclude": [{ "weaponType": "Staff" }]
    },
    {
      "name": "Harsh Command", "range": 1, "spCost": 150, "effect": "Converts penalties on target into bonuses.",
      "exclude": [{ "weaponType": "Staff" }]
    },
    {
      "name": "Heal", "range": 1, "spCost": 0, "effect": "Restores 5 HP.",
      "include": [{ "weaponType": "Staff" }]
    },
    {
      "name": "Martyr", "range": 1, "spCost": 200, "effect": "Restores HP=7+ this unit's suffered damage. Unit heals HP=half suffered damage. Slows Special trigger (cooldown count+1).",
      "include": [{ "weaponType": "Staff" }]
    },
    {
      "name": "Martyr+", "range": 1, "spCost": 300, "effect": "Restores HP = this unit's suffered damage +50% of Atk. (Minimum of 7 HP.) Also restores HP to unit = half suffered damage.",
      "include": [{ "weaponType": "Staff" }]
    },
    {
      "name": "Mend", "range": 1, "spCost": 100, "effect": "Restores 10 HP.",
      "include": [{ "weaponType": "Staff" }]
    },
    {
      "name": "Physic", "range": 2, "spCost": 200, "effect": "Restores 8 HP. Rng: 2.",
      "include": [{ "weaponType": "Staff" }]
    },
    {
      "name": "Physic+", "range": 2, "spCost": 300, "effect": "Restores HP = 50% of Atk. (Minimum of 8 HP.) Rng: 2.",
      "include": [{ "weaponType": "Staff" }]
    },
    {
      "name": "Pivot", "range": 1, "spCost": 150, "effect": "Unit moves to opposite side of adjacent ally.",
      "exclude": [{ "weaponType": "Staff" }]
    },
    {
      "name": "Rally Attack", "range": 1, "spCost": 150, "effect": "Grants Atk+4 to an adjacent ally until the end of the turn.",
      "exclude": [{ "weaponType": "Staff" }]
    },
    {
      "name": "Rally Attack Defense", "range": 1, "spCost": 300, "effect": "Grants Atk/Def+3 to an adjacent ally until the end of the turn.",
      "exclude": [{ "weaponType": "Staff" }]
    },
    {
      "name": "Rally Attack Resistance", "range": 1, "spCost": 300, "effect": "Grants Atk/Res+3 to an adjacent ally until the end of the turn.",
      "exclude": [{ "weaponType": "Staff" }]
    },
    {
      "name": "Rally Attack Speed", "range": 1, "spCost": 300, "effect": "Grants Atk/Spd+3 to an adjacent ally until the end of the turn.",
      "exclude": [{ "weaponType": "Staff" }]
    },
    {
      "name": "Rally Defense", "range": 1, "spCost": 150, "effect": "Grants Def+4 to an adjacent ally until the  of the turn.",
      "exclude": [{ "weaponType": "Staff" }]
    },
    {
      "name": "Rally Defense Resistance", "range": 1, "spCost": 300, "effect": "Grants Def/Res+3 to an adjacent ally until the end of the turn.",
      "exclude": [{ "weaponType": "Staff" }]
    },
    {
      "name": "Rally Resistance", "range": 1, "spCost": 150, "effect": "Grants Res+4 to an adjacent ally until the end of the turn.",
      "exclude": [{ "weaponType": "Staff" }]
    },
    {
      "name": "Rally Speed", "range": 1, "spCost": 150, "effect": "Grants Spd+4 to an adjacent ally until the end of the turn.",
      "include": [{ "weaponType": "Staff" }]
    },
    {
      "name": "Rally Speed Defense", "range": 1, "spCost": 300, "effect": "Grants Spd/Def+3 to an adjacent ally until the end of the turn.",
      "exclude": [{ "weaponType": "Staff" }]
    },
    {
      "name": "Rally Speed Resistance", "range": 1, "spCost": 300, "effect": "Grants Spd/Res+3 to an adjacent ally until the end of the turn.",
      "exclude": [{ "weaponType": "Staff" }]
    },
    {
      "name": "Reciprocal Aid", "range": 1, "spCost": 150, "effect": "Swap HP with adjacent ally (neither unit can go above their max HP).",
      "exclude": [{ "weaponType": "Staff" }]
    },
    {
      "name": "Reconcile", "range": 1, "spCost": 100, "effect": "Restores 7 HP each to target and this unit.",
      "include": [{ "weaponType": "Staff" }]
    },
    {
      "name": "Recover", "range": 1, "spCost": 200, "effect": "Restores 15 HP. Slows Special trigger (cooldown count+1).",
      "include": [{ "weaponType": "Staff" }]
    },
    {
      "name": "Recover+", "range": 1, "spCost": 300, "effect": "Restores HP = 50% of Atk +10. (Minimum of 15 HP.)",
      "include": [{ "weaponType": "Staff" }]
    },
    {
      "name": "Rehabilitate", "range": 1, "spCost": 200, "effect": "Restores 7 HP or more the further below 50% the target's HP is. Slows special trigger (cooldown count+1).",
      "include": [{ "weaponType": "Staff" }]
    },
    {
      "name": "Rehabilitate+", "range": 1, "spCost": 300, "effect": "Restores HP = 50% of Atk -10. (Minimum of 7 HP.) If target's HP is ≤ 50%, the lower the target's HP, the more HP is restored.",
      "include": [{ "weaponType": "Staff" }]
    },
    {
      "name": "Reposition", "range": 1, "spCost": 150, "effect": "Moves adjacent ally to opposite side of unit.",
      "exclude": [{ "weaponType": "Staff" }]
    },
    {
      "name": "Shove", "range": 1, "spCost": 150, "effect": "Push adjacent ally 1 space farther away.",
      "exclude": [{ "weaponType": "Staff" }]
    },
    {
      "name": "Sing", "range": 1, "spCost": 150, "effect": "Enables target to take another action. Cannot be used on units with Sing or Dance.",
      "include": [{ "name": "Azura" },{ "name": "Azura (Performing Arts)" },{ "name": "Shigure (Performing Arts)" } ]
    },
    {
      "name": "Smite", "range": 1, "spCost": 150, "effect": "Push adjacent ally 2 spaces farther away.",
      "exclude": [{ "weaponType": "Staff" }]
    },
    {
      "name": "Swap", "range": 1, "spCost": 150, "effect": "Swap places with an adjacent ally.",
      "exclude": [{ "weaponType": "Staff" }]
    }
]
