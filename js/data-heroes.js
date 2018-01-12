const HEROES = [
  {
    "name": "Abel",
    "title": "The Panther",
    "weaponType": "Lance",
    "moveType": "Cavalry",
    "releaseDate": "Feb 02, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Abel.png",
      "main": "img/heroes-main/Abel.png"
    },
    "skills": [
      { "name": "Iron Lance", "rarity": 4 },
      { "name": "Steel Lance", "rarity": 4 },
      { "name": "Brave Lance", "rarity": 4 },
      { "name": "Brave Lance+", "rarity": 5 },
      { "name": "Holy Vestments", "rarity": 4 },
      { "name": "Aegis", "rarity": 4 },
      { "name": "HP +3", "rarity": 4 },
      { "name": "HP +4", "rarity": 4 },
      { "name": "HP +5", "rarity": 5 },
      { "name": "Swordbreaker 1", "rarity": 4 },
      { "name": "Swordbreaker 2", "rarity": 4 },
      { "name": "Swordbreaker 3", "rarity": 4 }
    ],
    "stats": {
      "level1": { "hp": 17, "atk": 7, "spd": 8, "def": 8, "res": 6 },
      "level40": { "hp": [ 35, 39, 42 ], "atk": [ 30, 33, 36 ], "spd": [ 29, 32, 35 ], "def": [ 22, 25, 28 ], "res": [ 22, 25, 29 ] },
      "level1_4": { "hp": 16, "atk": 6, "spd": 8, "def": 8, "res": 5 },
      "level40_4": { "hp": [ 33, 36, 39 ], "atk": [ 27, 30, 33 ], "spd": [ 27, 30, 33 ], "def": [ 21, 24, 27 ], "res": [ 20, 23, 26 ] }
    },
    "rarity4": true,
    "rarity5": true,
    "colorType": "Blue"
  },
  {
    "name": "Alfonse",
    "title": "Prince of Askr",
    "weaponType": "Sword",
    "moveType": "Infantry",
    "releaseDate": "Feb 02, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Alfonse.png",
      "main": "img/heroes-main/Alfonse.png"
    },
    "skills": [
      {  "name": "Iron Sword", "rarity": 2 },
      {  "name": "Steel Sword", "rarity": 2 },
      {  "name": "Silver Sword", "rarity": 3 },
      {  "name": "Fólkvangr", "rarity": 5 },
      {  "name": "Daylight", "rarity": 2 },
      {  "name": "Sol", "rarity": 4 },
      {  "name": "Death Blow 1", "rarity": 2 },
      {  "name": "Death Blow 2", "rarity": 2 },
      {  "name": "Death Blow 3", "rarity": 4 },
      {  "name": "Spur Atk 1", "rarity": 3 },
      {  "name": "Spur Atk 2", "rarity": 4 },
      {  "name": "Spur Atk 3", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 19, "atk": 9, "spd": 6, "def": 8, "res": 5 },
      "level40": { "hp": [ 40, 43, 46 ], "atk": [ 32, 35, 38 ], "spd": [ 22, 25, 29 ], "def": [ 29, 32, 35 ], "res": [ 19, 22, 25 ] },
      "level1_4": { "hp": 18, "atk": 9, "spd": 5, "def": 8, "res": 4 },
      "level40_4": { "hp": [ 37, 40, 43 ], "atk": [ 30, 33, 36 ], "spd": [ 20, 23, 26 ], "def": [ 27, 30, 33 ], "res": [ 17, 20, 23 ] }
    },
    "rarity2": true,
    "rarity3": true,
    "rarity4": true,
    "limited": true,
    "colorType": "Red"
  },
  {
    "name": "Alm",
    "title": "Hero of Prophecy",
    "weaponType": "Sword",
    "moveType": "Infantry",
    "releaseDate": "Apr 14, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Alm.png",
      "main": "img/heroes-main/Alm.png"
    },
    "skills": [
      { "name": "Iron Sword", "rarity": 5 },
      { "name": "Steel Sword", "rarity": 5 },
      { "name": "Silver Sword", "rarity": 5 },
      { "name": "Falchion", "rarity": 5 },
      { "name": "Dragon Gaze", "rarity": 5 },
      { "name": "Draconic Aura", "rarity": 5 },
      { "name": "Attack +1", "rarity": 5 },
      { "name": "Attack +2", "rarity": 5 },
      { "name": "Attack +3", "rarity": 5 },
      { "name": "Windsweep 1", "rarity": 5 },
      { "name": "Windsweep 2", "rarity": 5 },
      { "name": "Windsweep 3", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 21, "atk": 9, "spd": 6, "def": 6, "res": 5 },
      "level40": { "hp": [ 42, 45, 48 ], "atk": [ 30, 33, 36 ], "spd": [ 27, 30, 33 ], "def": [ 24, 28, 31 ], "res": [ 19, 22, 25 ] }
    },
    "rarity5": true,
    "colorType": "Red"
  },
  {
    "name": "Amelia",
    "title": "Rose of the War",
    "weaponType": "Axe",
    "moveType": "Armored",
    "releaseDate": "Aug 15, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Amelia.png",
      "main": "img/heroes-main/Amelia.png"
    },
    "skills": [
      { "name": "Iron Axe", "rarity": 5 },
      { "name": "Steel Axe", "rarity": 5 },
      { "name": "Slaying Axe", "rarity": 5 },
      { "name": "Slaying Axe+", "rarity": 5 },
      { "name": "Holy Vestments", "rarity": 5 },
      { "name": "Sacred Cowl", "rarity": 5 },
      { "name": "Earth Boost 1", "rarity": 5 },
      { "name": "Earth Boost 2", "rarity": 5 },
      { "name": "Earth Boost 3", "rarity": 5 },
      { "name": "Armor March 1", "rarity": 5 },
      { "name": "Armor March 2", "rarity": 5 },
      { "name": "Armor March 3", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 19, "atk": 6, "spd": 8, "def": 9, "res": 4 },
      "level40": { "hp": [ 44, 47, 50 ], "atk": [ 31, 34, 37 ], "spd": [ 31, 34, 37 ], "def": [ 32, 35, 38 ], "res": [ 20, 23, 27 ] }
    },
    "rarity5": true,
    "colorType": "Green"
  },
  {
    "name": "Anna",
    "title": "Commander",
    "weaponType": "Axe",
    "moveType": "Infantry",
    "releaseDate": "Feb 02, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Anna.png",
      "main": "img/heroes-main/Anna.png"
    },
    "skills": [
      { "name": "Iron Axe", "rarity": 2 },
      { "name": "Steel Axe", "rarity": 2 },
      { "name": "Silver Axe", "rarity": 3 },
      { "name": "Nóatún", "rarity": 5 },
      { "name": "Night Sky", "rarity": 2 },
      { "name": "Astra", "rarity": 4 },
      { "name": "Vantage 1", "rarity": 3 },
      { "name": "Vantage 2", "rarity": 4 },
      { "name": "Vantage 3", "rarity": 5 },
      { "name": "Spur Res 1", "rarity": 2 },
      { "name": "Spur Res 2", "rarity": 2 },
      { "name": "Spur Res 3", "rarity": 4 }
    ],
    "stats": {
      "level1": { "hp": 19, "atk": 7, "spd": 10, "def": 5, "res": 6 },
      "level40": { "hp": [ 37, 41, 44 ], "atk": [ 25, 29, 32 ], "spd": [ 35, 38, 41 ], "def": [ 19, 22, 25 ], "res": [ 24, 28, 31 ] },
      "level1_4": { "hp": 18, "atk": 7, "spd": 10, "def": 4, "res": 5 },
      "level40_4": { "hp": [ 35, 38, 41 ], "atk": [ 24, 27, 30 ], "spd": [ 33, 36, 39 ], "def": [ 17, 20, 23 ], "res": [ 22, 25, 28 ] }
    },
    "rarity2": true,
    "rarity3": true,
    "rarity4": true,
    "limited": true,
    "colorType": "Green"
  },
  {
    "name": "Arden",
    "title": "Strong and Tough",
    "weaponType": "Sword",
    "moveType": "Armored",
    "releaseDate": "Oct 23, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Arden.png",
      "main": "img/heroes-main/Arden.png"
    },
    "skills": [
      { "name": "Iron Sword", "rarity": 4 },
      { "name": "Steel Sword", "rarity": 4 },
      { "name": "Brave Sword", "rarity": 4 },
      { "name": "Brave Sword+", "rarity": 5 },
      { "name": "Buckler", "rarity": 4 },
      { "name": "Pavise", "rarity": 4 },
      { "name": "Follow-Up Ring", "rarity": 5 },
      { "name": "Spur Def 1", "rarity": 4 },
      { "name": "Drive Def 1", "rarity": 4 },
      { "name": "Drive Def 2", "rarity": 4 }
    ],
    "stats": {
      "level1": { "hp": 25, "atk": 10, "spd": 3, "def": 13, "res": 3 },
      "level40": { "hp": [ 57, 60, 63 ], "atk": [ 33, 36, 39 ], "spd": [ 12, 16, 19 ], "def": [ 38, 41, 44 ], "res": [ 12, 16, 19 ] },
      "level1_4": { "hp": 24, "atk": 10, "spd": 2, "def": 13, "res": 2 },
      "level40_4": { "hp": [ 54, 57, 60 ], "atk": [ 31, 34, 37 ], "spd": [ 11, 14, 17 ], "def": [ 36, 39, 42 ], "res": [ 11, 14, 17 ] }
    },
    "rarity4": true,
    "rarity5": true,
    "colorType": "Red",
    "ttReward": true
  },
  {
    "name": "Arthur",
    "title": "Hapless Hero",
    "weaponType": "Axe",
    "moveType": "Infantry",
    "releaseDate": "Feb 02, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Arthur.png",
      "main": "img/heroes-main/Arthur.png"
    },
    "skills": [
      { "name": "Iron Axe", "rarity": 3 },
      { "name": "Steel Axe", "rarity": 3 },
      { "name": "Emerald Axe", "rarity": 4 },
      { "name": "Emerald Axe+", "rarity": 5 },
      { "name": "Swap", "rarity": 4 },
      { "name": "HP +3", "rarity": 3 },
      { "name": "HP +4", "rarity": 3 },
      { "name": "HP +5", "rarity": 4 },
      { "name": "Lancebreaker 1", "rarity": 3 },
      { "name": "Lancebreaker 2", "rarity": 4 },
      { "name": "Lancebreaker 3", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 19, "atk": 8, "spd": 7, "def": 8, "res": 5 },
      "level40": { "hp": [ 40, 43, 46 ], "atk": [ 29, 32, 35 ], "spd": [ 25, 29, 32 ], "def": [ 26, 30, 33 ], "res": [ 21, 24, 28 ] },
      "level1_4": { "hp": 18, "atk": 8, "spd": 6, "def": 8, "res": 4 },
      "level40_4": { "hp": [ 37, 40, 43 ], "atk": [ 27, 30, 33 ], "spd": [ 23, 26, 29 ], "def": [ 25, 28, 31 ], "res": [ 19, 22, 25 ] }
    },
    "rarity3": true,
    "rarity4": true,
    "colorType": "Green"
  },
  {
    "name": "Arvis",
    "title": "Emperor of Flame",
    "weaponType": "Tome",
    "moveType": "Infantry",
    "releaseDate": "Oct 18, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Arvis.png",
      "main": "img/heroes-main/Arvis.png"
    },
    "skills": [
      { "name": "Fire", "rarity": 3 },
      { "name": "Elfire", "rarity": 3 },
      { "name": "Bolganone", "rarity": 4 },
      { "name": "Valflame", "rarity": 5 },
      { "name": "Rising Flame", "rarity": 4 },
      { "name": "Growing Flame", "rarity": 4 },
      { "name": "Recover Ring", "rarity": 5 },
      { "name": "Def Ploy 1", "rarity": 3 },
      { "name": "Def Ploy 2", "rarity": 3 },
      { "name": "Def Ploy 3", "rarity": 4 }
    ],
    "stats": {
      "level1": { "hp": 18, "atk": 8, "spd": 7, "def": 4, "res": 7 },
      "level40": { "hp": [ 30, 33, 36 ], "atk": [ 31, 34, 37 ], "spd": [ 28, 31, 34 ], "def": [ 13, 17, 20 ], "res": [ 30, 33, 36 ] },
      "level1_4": { "hp": 17, "atk": 8, "spd": 7, "def": 3, "res": 6 },
      "level40_4": { "hp": [ 28, 31, 34 ], "atk": [ 29, 32, 35 ], "spd": [ 26, 29, 32 ], "def": [ 12, 15, 18 ], "res": [ 27, 30, 33 ] }
    },
    "rarity3": true,
    "rarity4": true,
    "colorType": "Red",
    "ghb": true
  },
  {
    "name": "Athena",
    "title": "Borderland Sword",
    "weaponType": "Sword",
    "moveType": "Infantry",
    "releaseDate": "Jun 14, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Athena.png",
      "main": "img/heroes-main/Athena.png"
    },
    "skills": [
      { "name": "Iron Sword", "rarity": 4 },
      { "name": "Steel Sword", "rarity": 4 },
      { "name": "Wo Dao", "rarity": 4 },
      { "name": "Wo Dao+", "rarity": 5 },
      { "name": "New Moon", "rarity": 4 },
      { "name": "Moonbow", "rarity": 4 },
      { "name": "Armored Blow 1", "rarity": 4 },
      { "name": "Sturdy Blow 1", "rarity": 4 },
      { "name": "Sturdy Blow 2", "rarity": 5 },
      { "name": "Sword Exp. 1", "rarity": 4 },
      { "name": "Sword Exp. 2", "rarity": 4 },
      { "name": "Sword Exp. 3", "rarity": 4 }
    ],
    "stats": {
      "level1": { "hp": 17, "atk": 7, "spd": 10, "def": 8, "res": 5 },
      "level40": { "hp": [ 33, 36, 40 ], "atk": [ 28, 31, 34 ], "spd": [ 35, 38, 41 ], "def": [ 24, 27, 31 ], "res": [ 21, 24, 28 ] },
      "level1_4": { "hp": 16, "atk": 6, "spd": 10, "def": 8, "res": 4 },
      "level40_4": { "hp": [ 31, 34, 37 ], "atk": [ 25, 28, 31 ], "spd": [ 33, 36, 39 ], "def": [ 23, 26, 29 ], "res": [ 19, 22, 25 ] }
    },
    "rarity4": true,
    "rarity5": true,
    "colorType": "Red"
  },
  {
    "name": "Ayra",
    "title": "Astra's Wielder",
    "weaponType": "Sword",
    "moveType": "Infantry",
    "releaseDate": "Oct 19, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Ayra.png",
      "main": "img/heroes-main/Ayra.png"
    },
    "skills": [
      { "name": "Iron Sword", "rarity": 5 },
      { "name": "Steel Sword", "rarity": 5 },
      { "name": "Silver Sword", "rarity": 5 },
      { "name": "Ayra's Blade", "rarity": 5 },
      { "name": "Night Sky", "rarity": 5 },
      { "name": "Astra", "rarity": 5 },
      { "name": "Regnal Astra", "rarity": 5 },
      { "name": "Darting Blow 1", "rarity": 5 },
      { "name": "Swift Sparrow 1", "rarity": 5 },
      { "name": "Swift Sparrow 2", "rarity": 5 },
      { "name": "Desperation 1", "rarity": 5 },
      { "name": "Desperation 2", "rarity": 5 },
      { "name": "Desperation 3", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 19, "atk": 7, "spd": 11, "def": 7, "res": 4 },
      "level40": { "hp": [ 37, 41, 44 ], "atk": [ 30, 33, 36 ], "spd": [ 34, 37, 40 ], "def": [ 28, 31, 34 ], "res": [ 18, 21, 24 ] }
    },
    "rarity5": true,
    "colorType": "Red"
  },
  {
    "name": "Azama",
    "title": "Carefree Monk",
    "weaponType": "Staff",
    "moveType": "Infantry",
    "releaseDate": "Feb 02, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Azama.png",
      "main": "img/heroes-main/Azama.png"
    },
    "skills": [
      { "name": "Assault", "rarity": 3 },
      { "name": "Pain", "rarity": 3 },
      { "name": "Pain+", "rarity": 5 },
      { "name": "Heal", "rarity": 3 },
      { "name": "Reconcile", "rarity": 3 },
      { "name": "Martyr", "rarity": 4 },
      { "name": "Imbue", "rarity": 3 },
      { "name": "Solid-Earth Balm", "rarity": 3 },
      { "name": "Threaten Atk 1", "rarity": 3 },
      { "name": "Threaten Atk 2", "rarity": 4 },
      { "name": "Threaten Atk 3", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 19, "atk": 4, "spd": 7, "def": 8, "res": 6 },
      "level40": { "hp": [ 40, 43, 46 ], "atk": [ 18, 21, 24 ], "spd": [ 23, 26, 30 ], "def": [ 29, 32, 35 ], "res": [ 22, 25, 29 ] },
      "level1_4": { "hp": 18, "atk": 3, "spd": 7, "def": 8, "res": 5 },
      "level40_4": { "hp": [ 37, 40, 43 ], "atk": [ 16, 19, 22 ], "spd": [ 22, 25, 28 ], "def": [ 27, 30, 33 ], "res": [ 20, 23, 26 ] }
    },
    "rarity3": true,
    "rarity4": true,
    "colorType": "Neutral"
  },
  {
    "name": "Azura",
    "title": "Lady of the Lake",
    "weaponType": "Lance",
    "moveType": "Infantry",
    "releaseDate": "Feb 02, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Azura.png",
      "main": "img/heroes-main/Azura.png"
    },
    "skills": [
      { "name": "Iron Lance", "rarity": 5 },
      { "name": "Steel Lance", "rarity": 5 },
      { "name": "Sapphire Lance", "rarity": 5 },
      { "name": "Sapphire Lance+", "rarity": 5 },
      { "name": "Sing", "rarity": 5 },
      { "name": "Speed +1", "rarity": 5 },
      { "name": "Speed +2", "rarity": 5 },
      { "name": "Speed +3", "rarity": 5 },
      { "name": "Fortify Res 1", "rarity": 5 },
      { "name": "Fortify Res 2", "rarity": 5 },
      { "name": "Fortify Res 3", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 17, "atk": 5, "spd": 7, "def": 4, "res": 6 },
      "level40": { "hp": [ 33, 36, 40 ], "atk": [ 28, 31, 34 ], "spd": [ 30, 33, 36 ], "def": [ 18, 21, 24 ], "res": [ 24, 28, 31 ] }
    },
    "rarity5": true,
    "colorType": "Blue"
  },
  {
    "name": "Azura (Happy New Year!)",
    "title": "Celebratory Spirit",
    "weaponType": "Axe",
    "moveType": "Flying",
    "releaseDate": "Jan 01, 2018",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Azura (Happy New Year!).png",
      "main": "img/heroes-main/Azura (Happy New Year!).png"
    },
    "skills": [
      { "name": "Iron Axe", "rarity": 5 },
      { "name": "Steel Axe", "rarity": 5 },
      { "name": "Hagoita", "rarity": 5 },
      { "name": "Hagoita+", "rarity": 5 },
      { "name": "Sing", "rarity": 5 },
      { "name": "Earth Dance 1", "rarity": 5 },
      { "name": "Earth Dance 2", "rarity": 5 },
      { "name": "Earth Dance 3", "rarity": 5 },
      { "name": "Hone Spd 1", "rarity": 5 },
      { "name": "Hone Spd 2", "rarity": 5 },
      { "name": "Hone Fliers", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 15, "atk": 6, "spd": 9, "def": 5, "res": 4 },
      "level40": { "hp": [ 33, 37, 40 ], "atk": [ 27, 30, 33 ], "spd": [ 32, 35, 38 ], "def": [ 19, 22, 25 ], "res": [ 22, 26, 29 ] }
    },
    "shortName": "Azura",
    "rarity5": true,
    "colorType": "Green",
    "limited": true
  },
  {
    "name": "Azura (Performing Arts)",
    "title": "Lady of Ballads",
    "weaponType": "Axe",
    "moveType": "Infantry",
    "releaseDate": "Sep 29, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Azura (Performing Arts).png",
      "main": "img/heroes-main/Azura (Performing Arts).png"
    },
    "skills": [
      { "name": "Iron Axe", "rarity": 5 },
      { "name": "Steel Axe", "rarity": 5 },
      { "name": "Silver Axe", "rarity": 5 },
      { "name": "Urðr", "rarity": 5 },
      { "name": "Sing", "rarity": 5 },
      { "name": "Triangle Adept 1", "rarity": 5 },
      { "name": "Triangle Adept 2", "rarity": 5 },
      { "name": "Triangle Adept 3", "rarity": 5 },
      { "name": "Spur Res 1", "rarity": 5 },
      { "name": "Drive Res 1", "rarity": 5 },
      { "name": "Drive Res 2", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 16, "atk": 6, "spd": 8, "def": 3, "res": 6 },
      "level40": { "hp": [ 32, 35, 39 ], "atk": [ 29, 32, 35 ], "spd": [ 31, 34, 37 ], "def": [ 17, 20, 23 ], "res": [ 24, 28, 31 ] }
    },
    "shortName": "Azura",
    "rarity5": true,
    "colorType": "Green",
    "limited": true
  },
  {
    "name": "Barst",
    "title": "The Hatchet",
    "weaponType": "Axe",
    "moveType": "Infantry",
    "releaseDate": "Feb 02, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Barst.png",
      "main": "img/heroes-main/Barst.png"
    },
    "skills": [
      { "name": "Iron Axe", "rarity": 3 },
      { "name": "Steel Axe", "rarity": 3 },
      { "name": "Brave Axe", "rarity": 4 },
      { "name": "Brave Axe+", "rarity": 5 },
      { "name": "Reposition", "rarity": 4 },
      { "name": "Knock Back", "rarity": 3 },
      { "name": "Spur Atk 1", "rarity": 3 },
      { "name": "Spur Atk 2", "rarity": 3 },
      { "name": "Spur Atk 3", "rarity": 4 }
    ],
    "stats": {
      "level1": { "hp": 20, "atk": 9, "spd": 8, "def": 6, "res": 4 },
      "level40": { "hp": [ 43, 46, 49 ], "atk": [ 30, 33, 36 ], "spd": [ 29, 32, 35 ], "def": [ 27, 30, 33 ], "res": [ 13, 17, 20 ] },
      "level1_4": { "hp": 19, "atk": 9, "spd": 8, "def": 5, "res": 3 },
      "level40_4": { "hp": [ 40, 43, 46 ], "atk": [ 28, 31, 34 ], "spd": [ 27, 30, 33 ], "def": [ 24, 27, 30 ], "res": [ 12, 15, 18 ] }
    },
    "rarity3": true,
    "rarity4": true,
    "colorType": "Green"
  },
  {
    "name": "Bartre",
    "title": "Fearless Warrior",
    "weaponType": "Axe",
    "moveType": "Infantry",
    "releaseDate": "Feb 02, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Bartre.png",
      "main": "img/heroes-main/Bartre.png"
    },
    "skills": [
      { "name": "Iron Axe", "rarity": 3 },
      { "name": "Steel Axe", "rarity": 3 },
      { "name": "Hammer", "rarity": 4 },
      { "name": "Hammer+", "rarity": 5 },
      { "name": "Smite", "rarity": 4 },
      { "name": "Fury 1", "rarity": 3 },
      { "name": "Fury 2", "rarity": 4 },
      { "name": "Fury 3", "rarity": 5 },
      { "name": "Brash Assault 1", "rarity": 3 },
      { "name": "Brash Assault 2", "rarity": 3 },
      { "name": "Brash Assault 3", "rarity": 4 }
    ],
    "stats": {
      "level1": { "hp": 21, "atk": 10, "spd": 6, "def": 7, "res": 3 },
      "level40": { "hp": [ 46, 49, 52 ], "atk": [ 33, 36, 39 ], "spd": [ 22, 25, 29 ], "def": [ 30, 33, 36 ], "res": [ 10, 13, 17 ] },
      "level1_4": { "hp": 20, "atk": 10, "spd": 5, "def": 7, "res": 2 },
      "level40_4": { "hp": [ 43, 46, 49 ], "atk": [ 31, 34, 37 ], "spd": [ 20, 23, 26 ], "def": [ 28, 31, 34 ], "res": [ 9, 12, 15 ] }
    },
    "rarity3": true,
    "rarity4": true,
    "colorType": "Green"
  },
  {
    "name": "Berkut",
    "title": "Prideful Prince",
    "weaponType": "Lance",
    "moveType": "Cavalry",
    "releaseDate": "Jul 18, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Berkut.png",
      "main": "img/heroes-main/Berkut.png"
    },
    "skills": [
      { "name": "Iron Lance", "rarity": 3 },
      { "name": "Steel Lance", "rarity": 3 },
      { "name": "Berkut's Lance", "rarity": 4 },
      { "name": "Berkut's Lance+", "rarity": 5 },
      { "name": "Rising Flame", "rarity": 4 },
      { "name": "Blazing Flame", "rarity": 4 },
      { "name": "Water Boost 1", "rarity": 3 },
      { "name": "Water Boost 2", "rarity": 4 },
      { "name": "Water Boost 3", "rarity": 5 },
      { "name": "Spur Res 1", "rarity": 3 },
      { "name": "Spur Res 2", "rarity": 3 },
      { "name": "Ward Cavalry", "rarity": 4 }
    ],
    "stats": {
      "level1": { "hp": 19, "atk": 8, "spd": 5, "def": 7, "res": 7 },
      "level40": { "hp": [ 40, 43, 46 ], "atk": [ 31, 34, 37 ], "spd": [ 19, 22, 25 ], "def": [ 28, 31, 34 ], "res": [ 21, 24, 27 ] },
      "level1_4": { "hp": 18, "atk": 8, "spd": 4, "def": 7, "res": 6 },
      "level40_4": { "hp": [ 37, 40, 43 ], "atk": [ 29, 32, 35 ], "spd": [ 17, 20, 23 ], "def": [ 26, 29, 32 ], "res": [ 19, 22, 25 ] }
    },
    "rarity3": true,
    "rarity4": true,
    "colorType": "Blue",
    "ghb": true
  },
  {
    "name": "Beruka",
    "title": "Quiet Assassin",
    "weaponType": "Axe",
    "moveType": "Flying",
    "releaseDate": "Feb 02, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Beruka.png",
      "main": "img/heroes-main/Beruka.png"
    },
    "skills": [
      { "name": "Iron Axe", "rarity": 3 },
      { "name": "Steel Axe", "rarity": 3 },
      { "name": "Killer Axe", "rarity": 4 },
      { "name": "Killer Axe+", "rarity": 5 },
      { "name": "Night Sky", "rarity": 4 },
      { "name": "Glimmer", "rarity": 4 },
      { "name": "Defiant Def 1", "rarity": 3 },
      { "name": "Defiant Def 2", "rarity": 3 },
      { "name": "Defiant Def 3", "rarity": 4 },
      { "name": "Lunge", "rarity": 3 }
    ],
    "stats": {
      "level1": { "hp": 20, "atk": 7, "spd": 6, "def": 9, "res": 5 },
      "level40": { "hp": [ 43, 46, 49 ], "atk": [ 25, 29, 32 ], "spd": [ 20, 23, 26 ], "def": [ 34, 37, 40 ], "res": [ 19, 22, 25 ] },
      "level1_4": { "hp": 19, "atk": 7, "spd": 5, "def": 9, "res": 4 },
      "level40_4": { "hp": [ 40, 43, 46 ], "atk": [ 24, 27, 30 ], "spd": [ 18, 21, 24 ], "def": [ 32, 35, 38 ], "res": [ 17, 20, 23 ] }
    },
    "rarity3": true,
    "rarity4": true,
    "colorType": "Green"
  },
  {
    "name": "Black Knight",
    "title": "Sinister General",
    "weaponType": "Sword",
    "moveType": "Armored",
    "releaseDate": "Sep 23, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Black Knight.png",
      "main": "img/heroes-main/Black Knight.png"
    },
    "skills": [
      { "name": "Iron Sword", "rarity": 4 },
      { "name": "Steel Sword", "rarity": 4 },
      { "name": "Silver Sword", "rarity": 4 },
      { "name": "Alondite", "rarity": 5 },
      { "name": "New Moon", "rarity": 4 },
      { "name": "Luna", "rarity": 4 },
      { "name": "Black Luna", "rarity": 5 },
      { "name": "Steady Stance 1", "rarity": 4 },
      { "name": "Steady Stance 2", "rarity": 4 },
      { "name": "Steady Stance 3", "rarity": 5 },
      { "name": "Wings of Mercy 1", "rarity": 4 },
      { "name": "Wings of Mercy 2", "rarity": 4 },
      { "name": "Wings of Mercy 3", "rarity": 4 }
    ],
    "stats": {
      "level1": { "hp": 22, "atk": 10, "spd": 8, "def": 9, "res": 5 },
      "level40": { "hp": [ 45, 48, 51 ], "atk": [ 31, 34, 37 ], "spd": [ 31, 34, 37 ], "def": [ 32, 35, 38 ], "res": [ 14, 18, 21 ] },
      "level1_4": { "hp": 21, "atk": 10, "spd": 7, "def": 9, "res": 4 },
      "level40_4": { "hp": [ 42, 45, 48 ], "atk": [ 29, 32, 35 ], "spd": [ 28, 31, 34 ], "def": [ 30, 33, 36 ], "res": [ 13, 16, 19 ] }
    },
    "rarity4": true,
    "rarity5": true,
    "colorType": "Red",
    "ttReward": true
  },
  {
    "name": "Boey",
    "title": "Skillful Survivor",
    "weaponType": "Tome",
    "moveType": "Infantry",
    "releaseDate": "May 15, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Boey.png",
      "main": "img/heroes-main/Boey.png"
    },
    "skills": [
      { "name": "Wind", "rarity": 4 },
      { "name": "Elwind", "rarity": 4 },
      { "name": "Gronnowl", "rarity": 4 },
      { "name": "Gronnowl+", "rarity": 5 },
      { "name": "Glowing Ember", "rarity": 4 },
      { "name": "Ignis", "rarity": 4 },
      { "name": "Earth Boost 1", "rarity": 4 },
      { "name": "Earth Boost 2", "rarity": 4 },
      { "name": "Earth Boost 3", "rarity": 4 },
      { "name": "Renewal 1", "rarity": 4 },
      { "name": "Renewal 2", "rarity": 4 },
      { "name": "Renewal 3", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 19, "atk": 7, "spd": 5, "def": 8, "res": 5 },
      "level40": { "hp": [ 40, 43, 46 ], "atk": [ 25, 29, 32 ], "spd": [ 23, 27, 30 ], "def": [ 29, 32, 35 ], "res": [ 14, 18, 21 ] },
      "level1_4": { "hp": 18, "atk": 7, "spd": 4, "def": 8, "res": 4 },
      "level40_4": { "hp": [ 37, 40, 43 ], "atk": [ 24, 27, 30 ], "spd": [ 21, 24, 27 ], "def": [ 27, 30, 33 ], "res": [ 13, 16, 19 ] }
    },
    "rarity4": true,
    "rarity5": true,
    "colorType": "Green"
  },
  {
    "name": "Caeda",
    "title": "Talys's Heart",
    "weaponType": "Sword",
    "moveType": "Flying",
    "releaseDate": "Feb 02, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Caeda.png",
      "main": "img/heroes-main/Caeda.png"
    },
    "skills": [
      { "name": "Iron Sword", "rarity": 4 },
      { "name": "Steel Sword", "rarity": 4 },
      { "name": "Armorslayer", "rarity": 4 },
      { "name": "Armorslayer+", "rarity": 5 },
      { "name": "Rally Speed", "rarity": 4 },
      { "name": "Darting Blow 1", "rarity": 4 },
      { "name": "Darting Blow 2", "rarity": 4 },
      { "name": "Darting Blow 3", "rarity": 5 },
      { "name": "Fortify Res 1", "rarity": 4 },
      { "name": "Fortify Res 2", "rarity": 4 },
      { "name": "Fortify Fliers", "rarity": 4 }
    ],
    "stats": {
      "level1": { "hp": 17, "atk": 6, "spd": 9, "def": 5, "res": 10 },
      "level40": { "hp": [ 33, 36, 40 ], "atk": [ 22, 25, 29 ], "spd": [ 34, 37, 40 ], "def": [ 21, 24, 28 ], "res": [ 31, 34, 37 ] },
      "level1_4": { "hp": 16, "atk": 5, "spd": 9, "def": 4, "res": 10 },
      "level40_4": { "hp": [ 31, 34, 37 ], "atk": [ 20, 23, 26 ], "spd": [ 32, 35, 38 ], "def": [ 19, 22, 25 ], "res": [ 29, 32, 35 ] }
    },
    "rarity4": true,
    "rarity5": true,
    "colorType": "Red"
  },
  {
    "name": "Caeda (Bridal Blessings)",
    "title": "Talys's Bride",
    "weaponType": "Tome",
    "moveType": "Infantry",
    "releaseDate": "May 30, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Caeda (Bridal Blessings).png",
      "main": "img/heroes-main/Caeda (Bridal Blessings).png"
    },
    "skills": [
      { "name": "Thunder", "rarity": 5 },
      { "name": "Elthunder", "rarity": 5 },
      { "name": "Blessed Bouquet", "rarity": 5 },
      { "name": "Blessed Bouquet+", "rarity": 5 },
      { "name": "Chilling Wind", "rarity": 5 },
      { "name": "Iceberg", "rarity": 5 },
      { "name": "Resistance +1", "rarity": 5 },
      { "name": "Attack Res 1", "rarity": 5 },
      { "name": "Attack Res 2", "rarity": 5 },
      { "name": "Hone Spd 1", "rarity": 5 },
      { "name": "Hone Spd 2", "rarity": 5 },
      { "name": "Hone Spd 3", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 16, "atk": 7, "spd": 9, "def": 4, "res": 8 },
      "level40": { "hp": [ 30, 33, 36 ], "atk": [ 25, 29, 32 ], "spd": [ 34, 37, 40 ], "def": [ 16, 19, 22 ], "res": [ 26, 30, 33 ] }
    },
    "shortName": "Caeda",
    "rarity5": true,
    "colorType": "Blue",
    "limited": true
  },
  {
    "name": "Cain",
    "title": "The Bull",
    "weaponType": "Sword",
    "moveType": "Cavalry",
    "releaseDate": "Feb 02, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Cain.png",
      "main": "img/heroes-main/Cain.png"
    },
    "skills": [
      { "name": "Iron Sword", "rarity": 4 },
      { "name": "Steel Sword", "rarity": 4 },
      { "name": "Brave Sword", "rarity": 4 },
      { "name": "Brave Sword+", "rarity": 5 },
      { "name": "Buckler", "rarity": 4 },
      { "name": "Escutcheon", "rarity": 4 },
      { "name": "Wings of Mercy 1", "rarity": 4 },
      { "name": "Wings of Mercy 2", "rarity": 4 },
      { "name": "Wings of Mercy 3", "rarity": 4 },
      { "name": "Threaten Atk 1", "rarity": 4 },
      { "name": "Threaten Atk 2", "rarity": 4 },
      { "name": "Threaten Atk 3", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 18, "atk": 8, "spd": 6, "def": 8, "res": 6 },
      "level40": { "hp": [ 39, 42, 45 ], "atk": [ 29, 32, 35 ], "spd": [ 29, 32, 35 ], "def": [ 24, 27, 31 ], "res": [ 18, 21, 24 ] },
      "level1_4": { "hp": 17, "atk": 8, "spd": 5, "def": 8, "res": 5 },
      "level40_4": { "hp": [ 36, 39, 42 ], "atk": [ 27, 30, 33 ], "spd": [ 26, 29, 32 ], "def": [ 23, 26, 29 ], "res": [ 16, 19, 22 ] }
    },
    "rarity4": true,
    "rarity5": true,
    "colorType": "Red"
  },
  {
    "name": "Camilla",
    "title": "Bewitching Beauty",
    "weaponType": "Axe",
    "moveType": "Flying",
    "releaseDate": "Feb 02, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Camilla.png",
      "main": "img/heroes-main/Camilla.png"
    },
    "skills": [
      { "name": "Iron Axe", "rarity": 4 },
      { "name": "Steel Axe", "rarity": 4 },
      { "name": "Brave Axe", "rarity": 4 },
      { "name": "Brave Axe+", "rarity": 5 },
      { "name": "Dragon Gaze", "rarity": 4 },
      { "name": "Draconic Aura", "rarity": 4 },
      { "name": "Darting Blow 1", "rarity": 4 },
      { "name": "Darting Blow 2", "rarity": 4 },
      { "name": "Darting Blow 3", "rarity": 5 },
      { "name": "Savage Blow 1", "rarity": 4 },
      { "name": "Savage Blow 2", "rarity": 4 },
      { "name": "Savage Blow 3", "rarity": 4 }
    ],
    "stats": {
      "level1": { "hp": 18, "atk": 8, "spd": 8, "def": 6, "res": 7 },
      "level40": { "hp": [ 34, 37, 41 ], "atk": [ 26, 30, 33 ], "spd": [ 29, 32, 35 ], "def": [ 24, 28, 31 ], "res": [ 28, 31, 34 ] },
      "level1_4": { "hp": 17, "atk": 8, "spd": 8, "def": 5, "res": 6 },
      "level40_4": { "hp": [ 32, 35, 38 ], "atk": [ 25, 28, 31 ], "spd": [ 27, 30, 33 ], "def": [ 22, 25, 28 ], "res": [ 25, 28, 31 ] }
    },
    "rarity4": true,
    "rarity5": true,
    "colorType": "Green"
  },
  {
    "name": "Camilla (Happy New Year!)",
    "title": "Holiday Traveler",
    "weaponType": "Sword",
    "moveType": "Flying",
    "releaseDate": "Jan 01, 2018",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Camilla (Happy New Year!).png",
      "main": "img/heroes-main/Camilla (Happy New Year!).png"
    },
    "skills": [
      { "name": "Iron Sword", "rarity": 5 },
      { "name": "Steel Sword", "rarity": 5 },
      { "name": "Kadomatsu", "rarity": 5 },
      { "name": "Kadomatsu+", "rarity": 5 },
      { "name": "Dragon Gaze", "rarity": 5 },
      { "name": "Draconic Aura", "rarity": 5 },
      { "name": "Spd/Def Bond 1", "rarity": 5 },
      { "name": "Spd/Def Bond 2", "rarity": 5 },
      { "name": "Spd/Def Bond 3", "rarity": 5 },
      { "name": "Spur Def 1", "rarity": 5 },
      { "name": "Spur Def 2", "rarity": 5 },
      { "name": "Ward Fliers", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 18, "atk": 9, "spd": 9, "def": 7, "res": 4 },
      "level40": { "hp": [ 36, 40, 43 ], "atk": [ 30, 33, 36 ], "spd": [ 32, 35, 38 ], "def": [ 28, 31, 34 ], "res": [ 20, 23, 27 ] }
    },
    "shortName": "Camilla",
    "rarity5": true,
    "colorType": "Red",
    "limited": true
  },
  {
    "name": "Camilla (Spring Festival)",
    "title": "Spring Princess",
    "weaponType": "Tome",
    "moveType": "Flying",
    "releaseDate": "Mar 30, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Camilla (Spring Festival).png",
      "main": "img/heroes-main/Camilla (Spring Festival).png"
    },
    "skills": [
      { "name": "Wind", "rarity": 5 },
      { "name": "Elwind", "rarity": 5 },
      { "name": "Green Egg", "rarity": 5 },
      { "name": "Green Egg+", "rarity": 5 },
      { "name": "Rally Attack", "rarity": 5 },
      { "name": "Defiant Spd 1", "rarity": 5 },
      { "name": "Defiant Spd 2", "rarity": 5 },
      { "name": "Defiant Spd 3", "rarity": 5 },
      { "name": "Live for Bounty", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 17, "atk": 9, "spd": 6, "def": 8, "res": 4 },
      "level40": { "hp": [ 35, 39, 42 ], "atk": [ 32, 35, 38 ], "spd": [ 22, 25, 29 ], "def": [ 26, 30, 33 ], "res": [ 16, 19, 22 ] }
    },
    "shortName": "Camilla",
    "rarity5": true,
    "colorType": "Green",
    "limited": true
  },
  {
    "name": "Camus",
    "title": "Sable Knight",
    "weaponType": "Lance",
    "moveType": "Cavalry",
    "releaseDate": "Jun 02, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Camus.png",
      "main": "img/heroes-main/Camus.png"
    },
    "skills": [
      { "name": "Iron Lance", "rarity": 3 },
      { "name": "Steel Lance", "rarity": 3 },
      { "name": "Silver Lance", "rarity": 4 },
      { "name": "Gradivus", "rarity": 5 },
      { "name": "Rising Thunder", "rarity": 4 },
      { "name": "Growing Thunder", "rarity": 4 },
      { "name": "Grani's Shield", "rarity": 4 },
      { "name": "Spur Atk 1", "rarity": 3 },
      { "name": "Spur Atk 2", "rarity": 3 },
      { "name": "Goad Cavalry", "rarity": 4 }
    ],
    "stats": {
      "level1": { "hp": 18, "atk": 8, "spd": 9, "def": 7, "res": 4 },
      "level40": { "hp": [ 39, 42, 45 ], "atk": [ 29, 32, 35 ], "spd": [ 30, 33, 36 ], "def": [ 28, 31, 34 ], "res": [ 13, 17, 20 ] },
      "level1_4": { "hp": 17, "atk": 8, "spd": 9, "def": 6, "res": 3 },
      "level40_4": { "hp": [ 36, 39, 42 ], "atk": [ 27, 30, 33 ], "spd": [ 28, 31, 34 ], "def": [ 25, 28, 31 ], "res": [ 12, 15, 18 ] }
    },
    "rarity3": true,
    "rarity4": true,
    "colorType": "Blue",
    "ghb": true
  },
  {
    "name": "Catria",
    "title": "Middle Whitewing",
    "weaponType": "Lance",
    "moveType": "Flying",
    "releaseDate": "Feb 02, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Catria.png",
      "main": "img/heroes-main/Catria.png"
    },
    "skills": [
      { "name": "Iron Lance", "rarity": 3 },
      { "name": "Steel Lance", "rarity": 3 },
      { "name": "Killer Lance", "rarity": 4 },
      { "name": "Killer Lance+", "rarity": 5 },
      { "name": "New Moon", "rarity": 4 },
      { "name": "Luna", "rarity": 4 },
      { "name": "Armored Blow 1", "rarity": 3 },
      { "name": "Armored Blow 2", "rarity": 3 },
      { "name": "Armored Blow 3", "rarity": 4 },
      { "name": "Seal Atk 1", "rarity": 3 },
      { "name": "Seal Atk 2", "rarity": 4 },
      { "name": "Seal Atk 3", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 17, "atk": 7, "spd": 10, "def": 7, "res": 6 },
      "level40": { "hp": [ 35, 39, 42 ], "atk": [ 28, 31, 34 ], "spd": [ 31, 34, 37 ], "def": [ 25, 29, 32 ], "res": [ 22, 25, 29 ] },
      "level1_4": { "hp": 16, "atk": 7, "spd": 10, "def": 6, "res": 5 },
      "level40_4": { "hp": [ 33, 36, 39 ], "atk": [ 26, 29, 32 ], "spd": [ 29, 32, 35 ], "def": [ 23, 26, 29 ], "res": [ 20, 23, 26 ] }
    },
    "rarity4": true,
    "rarity5": true,
    "colorType": "Blue"
  },
  {
    "name": "Cecilia",
    "title": "Etrurian General",
    "weaponType": "Tome",
    "moveType": "Cavalry",
    "releaseDate": "Feb 02, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Cecilia.png",
      "main": "img/heroes-main/Cecilia.png"
    },
    "skills": [
      { "name": "Wind", "rarity": 1 },
      { "name": "Elwind", "rarity": 3 },
      { "name": "Gronnraven", "rarity": 4 },
      { "name": "Gronnraven+", "rarity": 5 },
      { "name": "Rally Resistance", "rarity": 4 },
      { "name": "Attack +1", "rarity": 3 },
      { "name": "Attack +2", "rarity": 4 },
      { "name": "Attack +3", "rarity": 5 },
      { "name": "Escape Route 1", "rarity": 1 },
      { "name": "Escape Route 2", "rarity": 2 },
      { "name": "Escape Route 3", "rarity": 4 }
    ],
    "stats": {
      "level1": { "hp": 17, "atk": 8, "spd": 6, "def": 5, "res": 7 },
      "level40": { "hp": [ 33, 36, 40 ], "atk": [ 29, 32, 35 ], "spd": [ 22, 25, 29 ], "def": [ 19, 22, 25 ], "res": [ 25, 29, 32 ] },
      "level1_4": { "hp": 16, "atk": 8, "spd": 5, "def": 4, "res": 7 },
      "level40_4": { "hp": [ 31, 34, 37 ], "atk": [ 27, 30, 33 ], "spd": [ 20, 23, 26 ], "def": [ 17, 20, 23 ], "res": [ 24, 27, 30 ] }
    },
    "rarity3": true,
    "rarity4": true,
    "colorType": "Green"
  },
  {
    "name": "Celica",
    "title": "Caring Princess",
    "weaponType": "Tome",
    "moveType": "Infantry",
    "releaseDate": "May 15, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Celica.png",
      "main": "img/heroes-main/Celica.png"
    },
    "skills": [
      { "name": "Fire", "rarity": 5 },
      { "name": "Elfire", "rarity": 5 },
      { "name": "Bolganone", "rarity": 5 },
      { "name": "Ragnarok", "rarity": 5 },
      { "name": "Rising Light", "rarity": 5 },
      { "name": "Blazing Light", "rarity": 5 },
      { "name": "Distant Def 1", "rarity": 5 },
      { "name": "Distant Def 2", "rarity": 5 },
      { "name": "Distant Def 3", "rarity": 5 },
      { "name": "Spur Def 1", "rarity": 5 },
      { "name": "Spur Def 2", "rarity": 5 },
      { "name": "Spur Def 3", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 17, "atk": 8, "spd": 7, "def": 5, "res": 7 },
      "level40": { "hp": [ 35, 39, 42 ], "atk": [ 29, 32, 35 ], "spd": [ 30, 33, 36 ], "def": [ 19, 22, 25 ], "res": [ 19, 22, 25 ] }
    },
    "rarity5": true,
    "colorType": "Red"
  },
  {
    "name": "Charlotte (Bridal Blessings)",
    "title": "Money Maiden",
    "weaponType": "Lance",
    "moveType": "Infantry",
    "releaseDate": "May 30, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Charlotte (Bridal Blessings).png",
      "main": "img/heroes-main/Charlotte (Bridal Blessings).png"
    },
    "skills": [
      { "name": "Iron Lance", "rarity": 5 },
      { "name": "Steel Lance", "rarity": 5 },
      { "name": "First Bite", "rarity": 5 },
      { "name": "First Bite+", "rarity": 5 },
      { "name": "Smite", "rarity": 5 },
      { "name": "Wind Boost 1", "rarity": 5 },
      { "name": "Wind Boost 2", "rarity": 5 },
      { "name": "Wind Boost 3", "rarity": 5 },
      { "name": "Threaten Atk 1", "rarity": 5 },
      { "name": "Threaten Atk 2", "rarity": 5 },
      { "name": "Threaten Atk 3", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 20, "atk": 10, "spd": 8, "def": 5, "res": 4 },
      "level40": { "hp": [ 43, 46, 49 ], "atk": [ 33, 36, 39 ], "spd": [ 29, 32, 35 ], "def": [ 21, 24, 28 ], "res": [ 16, 19, 22 ] }
    },
    "shortName": "Charlotte",
    "rarity5": true,
    "colorType": "Blue",
    "limited": true
  },
  {
    "name": "Cherche",
    "title": "Wyvern Friend",
    "weaponType": "Axe",
    "moveType": "Flying",
    "releaseDate": "Feb 02, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Cherche.png",
      "main": "img/heroes-main/Cherche.png"
    },
    "skills": [
      { "name": "Iron Axe", "rarity": 3 },
      { "name": "Steel Axe", "rarity": 3 },
      { "name": "Hammer", "rarity": 4 },
      { "name": "Hammer+", "rarity": 5 },
      { "name": "Pivot", "rarity": 4 },
      { "name": "Attack +1", "rarity": 3 },
      { "name": "Attack +2", "rarity": 3 },
      { "name": "Attack +3", "rarity": 4 },
      { "name": "Fortify Def 1", "rarity": 3 },
      { "name": "Fortify Def 2", "rarity": 4 },
      { "name": "Fortify Def 3", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 20, "atk": 10, "spd": 6, "def": 8, "res": 3 },
      "level40": { "hp": [ 43, 46, 49 ], "atk": [ 35, 38, 41 ], "spd": [ 22, 25, 29 ], "def": [ 29, 32, 35 ], "res": [ 12, 16, 19 ] },
      "level1_4": { "hp": 19, "atk": 10, "spd": 5, "def": 8, "res": 2 },
      "level40_4": { "hp": [ 40, 43, 46 ], "atk": [ 33, 36, 39 ], "spd": [ 20, 23, 26 ], "def": [ 27, 30, 33 ], "res": [ 11, 14, 17 ] }
    },
    "rarity3": true,
    "rarity4": true,
    "colorType": "Green"
  },
  {
    "name": "Chrom",
    "title": "Exalted Prince",
    "weaponType": "Sword",
    "moveType": "Infantry",
    "releaseDate": "Feb 02, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Chrom.png",
      "main": "img/heroes-main/Chrom.png"
    },
    "skills": [
      { "name": "Iron Sword", "rarity": 4 },
      { "name": "Steel Sword", "rarity": 4 },
      { "name": "Silver Sword", "rarity": 4 },
      { "name": "Falchion", "rarity": 5 },
      { "name": "Daylight", "rarity": 4 },
      { "name": "Sol", "rarity": 4 },
      { "name": "Aether", "rarity": 5 },
      { "name": "Defiant Def 1", "rarity": 4 },
      { "name": "Defiant Def 2", "rarity": 4 },
      { "name": "Defiant Def 3", "rarity": 4 },
      { "name": "Spur Def 1", "rarity": 4 },
      { "name": "Spur Def 2", "rarity": 4 },
      { "name": "Spur Def 3", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 21, "atk": 9, "spd": 6, "def": 7, "res": 4 },
      "level40": { "hp": [ 44, 47, 50 ], "atk": [ 34, 37, 40 ], "spd": [ 22, 25, 29 ], "def": [ 28, 31, 34 ], "res": [ 13, 17, 20 ] },
      "level1_4": { "hp": 20, "atk": 9, "spd": 5, "def": 7, "res": 3 },
      "level40_4": { "hp": [ 41, 44, 47 ], "atk": [ 32, 35, 38 ], "spd": [ 20, 23, 26 ], "def": [ 26, 29, 32 ], "res": [ 12, 15, 18 ] }
    },
    "rarity4": true,
    "rarity5": true,
    "colorType": "Red"
  },
  {
    "name": "Chrom (Spring Festival)",
    "title": "Spring Exalt",
    "weaponType": "Axe",
    "moveType": "Infantry",
    "releaseDate": "Mar 30, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Chrom (Spring Festival).png",
      "main": "img/heroes-main/Chrom (Spring Festival).png"
    },
    "skills": [
      { "name": "Iron Axe", "rarity": 5 },
      { "name": "Steel Axe", "rarity": 5 },
      { "name": "Carrot Axe", "rarity": 5 },
      { "name": "Carrot Axe+", "rarity": 5 },
      { "name": "Shove", "rarity": 5 },
      { "name": "Defense +1", "rarity": 5 },
      { "name": "Attack Def +1", "rarity": 5 },
      { "name": "Attack Def +2", "rarity": 5 },
      { "name": "Axe Experience 1", "rarity": 5 },
      { "name": "Axe Experience 2", "rarity": 5 },
      { "name": "Axe Experience 3", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 19, "atk": 9, "spd": 8, "def": 6, "res": 5 },
      "level40": { "hp": [ 40, 43, 46 ], "atk": [ 32, 35, 38 ], "spd": [ 29, 32, 35 ], "def": [ 24, 28, 31 ], "res": [ 17, 20, 23 ] }
    },
    "shortName": "Chrom",
    "rarity5": true,
    "colorType": "Green",
    "limited": true
  },
  {
    "name": "Chrom (Winter's Envoy)",
    "title": "Gifted Leader",
    "weaponType": "Axe",
    "moveType": "Armored",
    "releaseDate": "Dec 18, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Chrom (Winter's Envoy).png",
      "main": "img/heroes-main/Chrom (Winter's Envoy).png"
    },
    "skills": [
      { "name": "Iron Axe", "rarity": 5 },
      { "name": "Steel Axe", "rarity": 5 },
      { "name": "Sack o' Gifts", "rarity": 5 },
      { "name": "Sack o' Gifts+", "rarity": 5 },
      { "name": "Pivot", "rarity": 5 },
      { "name": "Brazen Atk/Def 1", "rarity": 5 },
      { "name": "Brazen Atk/Def 2", "rarity": 5 },
      { "name": "Brazen Atk/Def 3", "rarity": 5 },
      { "name": "Wary Fighter 1", "rarity": 5 },
      { "name": "Wary Fighter 2", "rarity": 5 },
      { "name": "Wary Fighter 3", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 25, "atk": 12, "spd": 4, "def": 9, "res": 5 },
      "level40": { "hp": [ 48, 51, 54 ],	"atk": [ 37, 40, 43 ], "spd":	[ 16, 19, 22 ], "def": [ 32, 35, 38 ], "res":	[ 26, 29, 32 ] }
    },
    "shortName": "Chrom",
    "rarity5": true,
    "colorType": "Green",
    "limited": true
  },
  {
    "name": "Clair",
    "title": "Highborn Flier",
    "weaponType": "Lance",
    "moveType": "Flying",
    "releaseDate": "Apr 14, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Clair.png",
      "main": "img/heroes-main/Clair.png"
    },
    "skills": [
      { "name": "Iron Lance", "rarity": 4 },
      { "name": "Steel Lance", "rarity": 4 },
      { "name": "Silver Lance", "rarity": 4 },
      { "name": "Silver Lance+", "rarity": 5 },
      { "name": "Harsh Command", "rarity": 4 },
      { "name": "Hit and Run", "rarity": 4 },
      { "name": "Spur Spd 1", "rarity": 4 },
      { "name": "Spur Spd 2", "rarity": 4 },
      { "name": "Spur Spd 3", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 18, "atk": 7, "spd": 8, "def": 5, "res": 9 },
      "level40": { "hp": [ 34, 37, 41 ], "atk": [ 23, 26, 30 ], "spd": [ 33, 36, 39 ], "def": [ 21, 24, 28 ], "res": [ 30, 33, 36 ] },
      "level1_4": { "hp": 17, "atk": 6, "spd": 8, "def": 4, "res": 9 },
      "level40_4": { "hp": [ 32, 35, 38 ], "atk": [ 21, 24, 27 ], "spd": [ 31, 34, 37 ], "def": [ 19, 22, 25 ], "res": [ 28, 31, 34 ] }
    },
    "rarity4": true,
    "rarity5": true,
    "colorType": "Blue"
  },
  {
    "name": "Clarine",
    "title": "Refined Noble",
    "weaponType": "Staff",
    "moveType": "Cavalry",
    "releaseDate": "Feb 02, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Clarine.png",
      "main": "img/heroes-main/Clarine.png"
    },
    "skills": [
      { "name": "Assault", "rarity": 3 },
      { "name": "Fear", "rarity": 3 },
      { "name": "Fear+", "rarity": 3 },
      { "name": "Heal", "rarity": 3 },
      { "name": "Reconcile", "rarity": 3 },
      { "name": "Martyr", "rarity": 5 },
      { "name": "Imbue", "rarity": 3 },
      { "name": "Swift-Winds Balm", "rarity": 5 },
      { "name": "Resistance +1", "rarity": 3 },
      { "name": "Resistance +2", "rarity": 4 },
      { "name": "Resistance +3", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 16, "atk": 6, "spd": 9, "def": 5, "res": 7 },
      "level40": { "hp": [ 32, 35, 39 ], "atk": [ 22, 25, 29 ], "spd": [ 30, 33, 36 ], "def": [ 19, 22, 25 ], "res": [ 25, 29, 32 ] },
      "level1_4": { "hp": 15, "atk": 5, "spd": 9, "def": 4, "res": 7 },
      "level40_4": { "hp": [ 30, 33, 36 ], "atk": [ 20, 23, 26 ], "spd": [ 28, 31, 34 ], "def": [ 17, 20, 23 ], "res": [ 24, 27, 30 ] }
    },
    "rarity3": true,
    "rarity4": true,
    "colorType": "Neutral"
  },
  {
    "name": "Clarisse",
    "title": "Sniper in the Dark",
    "weaponType": "Bow",
    "moveType": "Infantry",
    "releaseDate": "Jun 28, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Clarisse.png",
      "main": "img/heroes-main/Clarisse.png"
    },
    "skills": [
      { "name": "Iron Bow", "rarity": 3 },
      { "name": "Steel Bow", "rarity": 3 },
      { "name": "Clarisse's Bow", "rarity": 4 },
      { "name": "Clarisse's Bow+", "rarity": 5 },
      { "name": "Night Sky", "rarity": 4 },
      { "name": "Glimmer", "rarity": 4 },
      { "name": "Poison Strike 1", "rarity": 3 },
      { "name": "Poison Strike 2", "rarity": 3 },
      { "name": "Poison Strike 3", "rarity": 4 },
      { "name": "Threaten Def 1", "rarity": 3 },
      { "name": "Threaten Def 2", "rarity": 4 },
      { "name": "Threaten Def 3", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 18, "atk": 7, "spd": 8, "def": 6, "res": 5 },
      "level40": { "hp": [ 34, 37, 41 ], "atk": [ 28, 31, 34 ], "spd": [ 31, 34, 37 ], "def": [ 22, 25, 29 ], "res": [ 17, 20, 23 ] },
      "level1_4": { "hp": 17, "atk": 7, "spd": 8, "def": 5, "res": 4 },
      "level40_4": { "hp": [ 32, 35, 38 ], "atk": [ 26, 29, 32 ], "spd": [ 29, 32, 35 ], "def": [ 20, 23, 26 ], "res": [ 15, 18, 21 ] }
    },
    "rarity3": true,
    "rarity4": true,
    "colorType": "Neutral",
    "ghb": true
  },
  {
    "name": "Clive",
    "title": "Idealistic Knight",
    "weaponType": "Lance",
    "moveType": "Cavalry",
    "releaseDate": "Aug 11, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Clive.png",
      "main": "img/heroes-main/Clive.png"
    },
    "skills": [
      { "name": "Iron Lance", "rarity": 4 },
      { "name": "Steel Lance", "rarity": 4 },
      { "name": "Silver Lance", "rarity": 4 },
      { "name": "Silver Lance+", "rarity": 5 },
      { "name": "Buckler", "rarity": 4 },
      { "name": "Escutcheon", "rarity": 4 },
      { "name": "Defense +1", "rarity": 4 },
      { "name": "Defense +2", "rarity": 4 },
      { "name": "Defense +3", "rarity": 4 },
      { "name": "Hit and Run", "rarity": 4 }
    ],
    "stats": {
      "level1": { "hp": 19, "atk": 9, "spd": 6, "def": 8, "res": 4 },
      "level40": { "hp": [ 42, 45, 48 ], "atk": [ 30, 33, 36 ], "spd": [ 22, 25, 29 ], "def": [ 29, 32, 35 ], "res": [ 16, 19, 22 ] },
      "level1_4": { "hp": 18, "atk": 9, "spd": 5, "def": 8, "res": 3 },
      "level40_4": { "hp": [ 39, 42, 45 ], "atk": [ 28, 31, 34 ], "spd": [ 20, 23, 26 ], "def": [ 27, 30, 33 ], "res": [ 14, 17, 20 ] }
    },
    "rarity4": true,
    "rarity5": true,
    "colorType": "Blue",
    "ttReward": true
  },
  {
    "name": "Cordelia",
    "title": "Knight Paragon",
    "weaponType": "Lance",
    "moveType": "Flying",
    "releaseDate": "Feb 02, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Cordelia.png",
      "main": "img/heroes-main/Cordelia.png"
    },
    "skills": [
      { "name": "Iron Lance", "rarity": 4 },
      { "name": "Steel Lance", "rarity": 4 },
      { "name": "Brave Lance", "rarity": 4 },
      { "name": "Brave Lance+", "rarity": 5 },
      { "name": "Night Sky", "rarity": 4 },
      { "name": "Astra", "rarity": 4 },
      { "name": "Galeforce", "rarity": 5 },
      { "name": "Triangle Adept 1", "rarity": 4 },
      { "name": "Triangle Adept 2", "rarity": 4 },
      { "name": "Triangle Adept 3", "rarity": 5 },
      { "name": "Pass 1", "rarity": 4 },
      { "name": "Pass 2", "rarity": 4 },
      { "name": "Pass 3", "rarity": 4 }
    ],
    "stats": {
      "level1": { "hp": 18, "atk": 9, "spd": 9, "def": 5, "res": 6 },
      "level40": { "hp": [ 36, 40, 43 ], "atk": [ 32, 35, 38 ], "spd": [ 32, 35, 38 ], "def": [ 19, 22, 25 ], "res": [ 22, 25, 29 ] },
      "level1_4": { "hp": 17, "atk": 9, "spd": 9, "def": 4, "res": 5 },
      "level40_4": { "hp": [ 34, 37, 40 ], "atk": [ 30, 33, 36 ], "spd": [ 30, 33, 36 ], "def": [ 17, 20, 23 ], "res": [ 20, 23, 26 ] }
    },
    "rarity4": true,
    "rarity5": true,
    "colorType": "Blue"
  },
  {
    "name": "Cordelia (Bridal Blessings)",
    "title": "Perfect Bride",
    "weaponType": "Bow",
    "moveType": "Infantry",
    "releaseDate": "May 30, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Cordelia (Bridal Blessings).png",
      "main": "img/heroes-main/Cordelia (Bridal Blessings).png"
    },
    "skills": [
      { "name": "Iron Bow", "rarity": 5 },
      { "name": "Steel Bow", "rarity": 5 },
      { "name": "Cupid Arrow", "rarity": 5 },
      { "name": "Cupid Arrow+", "rarity": 5 },
      { "name": "Rally Attack", "rarity": 5 },
      { "name": "Rally Attack Speed", "rarity": 5 },
      { "name": "Escape Route 1", "rarity": 5 },
      { "name": "Escape Route 2", "rarity": 5 },
      { "name": "Escape Route 3", "rarity": 5 },
      { "name": "Breath of Life 1", "rarity": 5 },
      { "name": "Breath of Life 2", "rarity": 5 },
      { "name": "Breath of Life 3", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 17, "atk": 9, "spd": 9, "def": 4, "res": 5 },
      "level40": { "hp": [ 33, 36, 40 ], "atk": [ 32, 35, 38 ], "spd": [ 32, 35, 38 ], "def": [ 16, 19, 22 ], "res": [ 19, 22, 25 ] }
    },
    "shortName": "Cordelia",
    "rarity5": true,
    "colorType": "Neutral",
    "limited": true
  },
  {
    "name": "Corrin (F)",
    "title": "Fateful Princess",
    "weaponType": "Breath",
    "moveType": "Infantry",
    "releaseDate": "Feb 02, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Corrin (F).png",
      "main": "img/heroes-main/Corrin (F).png"
    },
    "skills": [
      { "name": "Fire Breath", "rarity": 3 },
      { "name": "Fire Breath+", "rarity": 3 },
      { "name": "Dark Breath", "rarity": 4 },
      { "name": "Dark Breath+", "rarity": 5 },
      { "name": "Dragon Gaze", "rarity": 4 },
      { "name": "Draconic Aura", "rarity": 4 },
      { "name": "Seal Res 1", "rarity": 3 },
      { "name": "Seal Res 2", "rarity": 4 },
      { "name": "Seal Res 3", "rarity": 5 },
      { "name": "Hone Atk 1", "rarity": 3 },
      { "name": "Hone Atk 2", "rarity": 3 },
      { "name": "Hone Atk 3", "rarity": 4 }
    ],
    "stats": {
      "level1": { "hp": 19, "atk": 8, "spd": 6, "def": 8, "res": 6 },
      "level40": { "hp": [ 37, 41, 44 ], "atk": [ 24, 27, 31 ], "spd": [ 31, 34, 37 ], "def": [ 31, 34, 37 ], "res": [ 18, 21, 24 ] },
      "level1_4": { "hp": 18, "atk": 8, "spd": 5, "def": 8, "res": 5 },
      "level40_4": { "hp": [ 35, 38, 41 ], "atk": [ 23, 26, 29 ], "spd": [ 28, 31, 34 ], "def": [ 29, 32, 35 ], "res": [ 16, 19, 22 ] }
    },
    "shortName": "Corrin",
    "rarity3": true,
    "rarity4": true,
    "colorType": "Blue"
  },
  {
    "name": "Corrin (F) (Nohrian Summer)",
    "title": "Novice Vacationer",
    "weaponType": "Tome",
    "moveType": "Flying",
    "releaseDate": "Jul 28, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Corrin (F) (Nohrian Summer).png",
      "main": "img/heroes-main/Corrin (F) (Nohrian Summer).png"
    },
    "skills": [
      { "name": "Thunder", "rarity": 5 },
      { "name": "Elthunder", "rarity": 5 },
      { "name": "Sealife Tome", "rarity": 5 },
      { "name": "Sealife Tome+", "rarity": 5 },
      { "name": "Dragon Gaze", "rarity": 5 },
      { "name": "Dragon Fang", "rarity": 5 },
      { "name": "Darting Blow 1", "rarity": 5 },
      { "name": "Swift Strike 1", "rarity": 5 },
      { "name": "Swift Strike 2", "rarity": 5 },
      { "name": "Fortify Res 1", "rarity": 5 },
      { "name": "Fortify Res 2", "rarity": 5 },
      { "name": "Fortify Fliers", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 17, "atk": 7, "spd": 8, "def": 5, "res": 7 },
      "level40": { "hp": [ 31, 34, 37 ], "atk": [ 28, 31, 34 ], "spd": [ 31, 34, 37 ], "def": [ 19, 22, 25 ], "res": [ 23, 26, 30 ] }
    },
    "shortName": "Corrin",
    "rarity5": true,
    "colorType": "Blue",
    "limited": true
  },
  {
    "name": "Corrin (M)",
    "title": "Fateful Prince",
    "weaponType": "Sword",
    "moveType": "Infantry",
    "releaseDate": "Feb 02, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Corrin (M).png",
      "main": "img/heroes-main/Corrin (M).png"
    },
    "skills": [
      { "name": "Iron Sword", "rarity": 4 },
      { "name": "Steel Sword", "rarity": 4 },
      { "name": "Silver Sword", "rarity": 4 },
      { "name": "Yato", "rarity": 5 },
      { "name": "Dragon Gaze", "rarity": 4 },
      { "name": "Dragon Fang", "rarity": 4 },
      { "name": "Defense +1", "rarity": 4 },
      { "name": "Defense +2", "rarity": 4 },
      { "name": "Defense +3", "rarity": 4 },
      { "name": "Obstruct 1", "rarity": 4 },
      { "name": "Obstruct 2", "rarity": 4 },
      { "name": "Obstruct 3", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 20, "atk": 8, "spd": 8, "def": 6, "res": 5 },
      "level40": { "hp": [ 38, 42, 45 ], "atk": [ 29, 32, 35 ], "spd": [ 29, 32, 35 ], "def": [ 24, 28, 31 ], "res": [ 21, 24, 28 ] },
      "level1_4": { "hp": 19, "atk": 8, "spd": 8, "def": 5, "res": 4 },
      "level40_4": { "hp": [ 36, 39, 42 ], "atk": [ 27, 30, 33 ], "spd": [ 27, 30, 33 ], "def": [ 22, 25, 28 ], "res": [ 19, 22, 25 ] }
    },
    "shortName": "Corrin",
    "rarity4": true,
    "rarity5": true,
    "colorType": "Red"
  },
  {
    "name": "Corrin (M) (Happy New Year!)",
    "title": "Enjoying Tradition",
    "weaponType": "Bow",
    "moveType": "Infantry",
    "releaseDate": "Jan 01, 2018",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Corrin (M) (Happy New Year!).png",
      "main": "img/heroes-main/Corrin (M) (Happy New Year!).png"
    },
    "skills": [
      { "name": "Iron Bow", "rarity": 5 },
      { "name": "Steel Bow", "rarity": 5 },
      { "name": "Hama Ya", "rarity": 5 },
      { "name": "Hama Ya+", "rarity": 5 },
      { "name": "Rally Defense", "rarity": 5 },
      { "name": "Rally Def/Res", "rarity": 5 },
      { "name": "Defense +1", "rarity": 5 },
      { "name": "Atk/Def +1", "rarity": 5 },
      { "name": "Atk/Def +2", "rarity": 5 },
      { "name": "Spur Def 1", "rarity": 5 },
      { "name": "Spur Def/Res 1", "rarity": 5 },
      { "name": "Spur Def/Res 2", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 18, "atk": 8, "spd": 8, "def": 6, "res": 5 },
      "level40": { "hp": [ 34, 37, 41 ], "atk": [ 29, 32, 35 ], "spd": [ 26, 30, 33 ], "def": [ 31, 34, 37 ], "res": [ 14, 18, 21 ] }
    },
    "shortName": "Corrin",
    "rarity5": true,
    "colorType": "Neutral",
    "limited": true
  },
  {
    "name": "Deirdre",
    "title": "Lady of the Forest",
    "weaponType": "Tome",
    "moveType": "Infantry",
    "releaseDate": "Oct 16, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Deirdre.png",
      "main": "img/heroes-main/Deirdre.png"
    },
    "skills": [
      { "name": "Wind", "rarity": 5 },
      { "name": "Elwind", "rarity": 5 },
      { "name": "Rexcalibur", "rarity": 5 },
      { "name": "Divine Naga", "rarity": 5 },
      { "name": "Ardent Sacrifice", "rarity": 5 },
      { "name": "Quick Riposte 1", "rarity": 5 },
      { "name": "Quick Riposte 2", "rarity": 5 },
      { "name": "Quick Riposte 3", "rarity": 5 },
      { "name": "Spd Ploy 1", "rarity": 5 },
      { "name": "Spd Ploy 2", "rarity": 5 },
      { "name": "Spd Ploy 3", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 17, "atk": 9, "spd": 6, "def": 3, "res": 9 },
      "level40": { "hp": [ 33, 36, 40 ], "atk": [ 30, 33, 36 ], "spd": [ 24, 28, 31 ], "def": [ 12, 16, 19 ], "res": [ 32, 35, 38 ] }
    },
    "rarity5": true,
    "colorType": "Green"
  },
  {
    "name": "Delthea",
    "title": "Free Spirit",
    "weaponType": "Tome",
    "moveType": "Infantry",
    "releaseDate": "Jul 13, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Delthea.png",
      "main": "img/heroes-main/Delthea.png"
    },
    "skills": [
      { "name": "Thunder", "rarity": 5 },
      { "name": "Elthunder", "rarity": 5 },
      { "name": "Thoron", "rarity": 5 },
      { "name": "Dark Aura", "rarity": 5 },
      { "name": "Miracle", "rarity": 5 },
      { "name": "Death Blow 1", "rarity": 5 },
      { "name": "Death Blow 2", "rarity": 5 },
      { "name": "Death Blow 3", "rarity": 5 },
      { "name": "Spur Atk 1", "rarity": 5 },
      { "name": "Drive Atk 1", "rarity": 5 },
      { "name": "Drive Atk 2", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 16, "atk": 10, "spd": 8, "def": 3, "res": 7 },
      "level40": { "hp": [ 30, 33, 36 ], "atk": [ 33, 36, 39 ], "spd": [ 31, 34, 37 ], "def": [ 10, 13, 17 ], "res": [ 28, 31, 34 ] }
    },
    "rarity5": true,
    "colorType": "Blue"
  },
  {
    "name": "Donnel",
    "title": "Village Hero",
    "weaponType": "Lance",
    "moveType": "Infantry",
    "releaseDate": "Feb 02, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Donnel.png",
      "main": "img/heroes-main/Donnel.png"
    },
    "skills": [
      { "name": "Iron Lance", "rarity": 1 },
      { "name": "Steel Lance", "rarity": 3 },
      { "name": "Brave Lance", "rarity": 4 },
      { "name": "Brave Lance+", "rarity": 5 },
      { "name": "Reciprocal Aid", "rarity": 4 },
      { "name": "HP +3", "rarity": 1 },
      { "name": "HP +4", "rarity": 2 },
      { "name": "HP +5", "rarity": 4 },
      { "name": "Drag Back", "rarity": 3 }
    ],
    "stats": {
      "level1": { "hp": 17, "atk": 7, "spd": 5, "def": 6, "res": 4 },
      "level40": { "hp": [ 40, 43, 46 ], "atk": [ 32, 35, 38 ], "spd": [ 26, 29, 32 ], "def": [ 29, 32, 35 ], "res": [ 20, 23, 27 ] },
      "level1_4": { "hp": 16, "atk": 7, "spd": 4, "def": 6, "res": 3 },
      "level40_4": { "hp": [ 37, 40, 43 ], "atk": [ 30, 33, 36 ], "spd": [ 23, 26, 29 ], "def": [ 27, 30, 33 ], "res": [ 18, 21, 24 ] }
    },
    "rarity3": true,
    "rarity4": true,
    "colorType": "Blue"
  },
  {
    "name": "Dorcas",
    "title": "Serene Warrior",
    "weaponType": "Axe",
    "moveType": "Infantry",
    "releaseDate": "Nov 15, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Dorcas.png",
      "main": "img/heroes-main/Dorcas.png"
    },
    "skills": [
      { "name": "Iron Axe", "rarity": 5 },
      { "name": "Steel Axe", "rarity": 5 },
      { "name": "Silver Axe", "rarity": 5 },
      { "name": "Stout Tomahawk", "rarity": 5 },
      { "name": "Dragon Gaze", "rarity": 5 },
      { "name": "Draconic Aura", "rarity": 5 },
      { "name": "Fierce Stance 1", "rarity": 5 },
      { "name": "Fierce Stance 2", "rarity": 5 },
      { "name": "Fierce Stance 3", "rarity": 5 },
      { "name": "Quick Riposte 1", "rarity": 5 },
      { "name": "Quick Riposte 2", "rarity": 5 },
      { "name": "Quick Riposte 3", "rarity": 5 },
      { "name": "Infantry Pulse 1", "rarity": 5 },
      { "name": "Infantry Pulse 2", "rarity": 5 },
      { "name": "Infantry Pulse 3", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 19, "atk": 9, "spd": 6, "def": 9, "res": 5 },
      "level40": { "hp": [ 42, 45, 48 ], "atk": [ 32, 35, 38 ], "spd": [ 20, 23, 26 ], "def": [ 32, 35, 38 ], "res": [ 21, 24, 28 ] }
    },
    "rarity5": true,
    "colorType": "Green"
  },
  {
    "name": "Draug",
    "title": "Gentle Giant",
    "weaponType": "Sword",
    "moveType": "Armored",
    "releaseDate": "Feb 02, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Draug.png",
      "main": "img/heroes-main/Draug.png"
    },
    "skills": [
      { "name": "Iron Sword", "rarity": 2 },
      { "name": "Steel Sword", "rarity": 2 },
      { "name": "Brave Sword", "rarity": 4 },
      { "name": "Brave Sword+", "rarity": 5 },
      { "name": "Buckler", "rarity": 4 },
      { "name": "Pavise", "rarity": 4 },
      { "name": "Lunge", "rarity": 3 },
      { "name": "Spur Def 1", "rarity": 3 },
      { "name": "Spur Def 2", "rarity": 2 },
      { "name": "Ward Armor", "rarity": 4 }
    ],
    "stats": {
      "level1": { "hp": 24, "atk": 8, "spd": 6, "def": 13, "res": 3 },
      "level40": { "hp": [ 47, 50, 53 ], "atk": [ 26, 30, 33 ], "spd": [ 29, 32, 35 ], "def": [ 36, 39, 42 ], "res": [ 15, 18, 21 ] },
      "level1_4": { "hp": 23, "atk": 8, "spd": 5, "def": 13, "res": 2 },
      "level40_4": { "hp": [ 44, 47, 50 ], "atk": [ 25, 28, 31 ], "spd": [ 26, 29, 32 ], "def": [ 34, 37, 40 ], "res": [ 13, 16, 19 ] }
    },
    "rarity3": true,
    "rarity4": true,
    "colorType": "Red"
  },
  {
    "name": "Effie",
    "title": "Army of One",
    "weaponType": "Lance",
    "moveType": "Armored",
    "releaseDate": "Feb 02, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Effie.png",
      "main": "img/heroes-main/Effie.png"
    },
    "skills": [
      { "name": "Iron Lance", "rarity": 4 },
      { "name": "Steel Lance", "rarity": 4 },
      { "name": "Silver Lance", "rarity": 4 },
      { "name": "Silver Lance+", "rarity": 5 },
      { "name": "Smite", "rarity": 4 },
      { "name": "Death Blow 1", "rarity": 4 },
      { "name": "Death Blow 2", "rarity": 4 },
      { "name": "Death Blow 3", "rarity": 5 },
      { "name": "Wary Fighter 1", "rarity": 4 },
      { "name": "Wary Fighter 2", "rarity": 4 },
      { "name": "Wary Fighter 3", "rarity": 4 }
    ],
    "stats": {
      "level1": { "hp": 22, "atk": 12, "spd": 5, "def": 11, "res": 4 },
      "level40": { "hp": [ 47, 50, 53 ], "atk": [ 37, 40, 43 ], "spd": [ 19, 22, 25 ], "def": [ 29, 33, 36 ], "res": [ 20, 23, 27 ] },
      "level1_4": { "hp": 21, "atk": 12, "spd": 4, "def": 11, "res": 3 },
      "level40_4": { "hp": [ 44, 47, 50 ], "atk": [ 35, 38, 41 ], "spd": [ 17, 20, 23 ], "def": [ 28, 31, 34 ], "res": [ 18, 21, 24 ] }
    },
    "rarity4": true,
    "rarity5": true,
    "colorType": "Blue"
  },
  {
    "name": "Eirika",
    "title": "Restoration Lady",
    "weaponType": "Sword",
    "moveType": "Infantry",
    "releaseDate": "Feb 15, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Eirika.png",
      "main": "img/heroes-main/Eirika.png"
    },
    "skills": [
      { "name": "Iron Sword", "rarity": 4 },
      { "name": "Steel Sword", "rarity": 4 },
      { "name": "Silver Sword", "rarity": 4 },
      { "name": "Sieglinde", "rarity": 5 },
      { "name": "Pivot", "rarity": 4 },
      { "name": "Drag Back", "rarity": 4 },
      { "name": "Hone Spd 1", "rarity": 4 },
      { "name": "Hone Spd 2", "rarity": 4 },
      { "name": "Hone Spd 3", "rarity": 4 }
    ],
    "stats": {
      "level1": { "hp": 18, "atk": 7, "spd": 9, "def": 7, "res": 6 },
      "level40": { "hp": [ 39, 42, 45 ], "atk": [ 23, 26, 30 ], "spd": [ 32, 35, 38 ], "def": [ 23, 26, 30 ], "res": [ 24, 28, 31 ] },
      "level1_4": { "hp": 17, "atk": 7, "spd": 9, "def": 6, "res": 5 },
      "level40_4": { "hp": [ 36, 39, 42 ], "atk": [ 22, 25, 28 ], "spd": [ 30, 33, 36 ], "def": [ 21, 24, 27 ], "res": [ 22, 25, 28 ] }
    },
    "rarity4": true,
    "rarity5": true,
    "colorType": "Red"
  },
  {
    "name": "Eldigan",
    "title": "Lionheart",
    "weaponType": "Sword",
    "moveType": "Cavalry",
    "releaseDate": "Feb 27, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Eldigan.png",
      "main": "img/heroes-main/Eldigan.png"
    },
    "skills": [
      { "name": "Iron Sword", "rarity": 5 },
      { "name": "Steel Sword", "rarity": 5 },
      { "name": "Killing Edge", "rarity": 5 },
      { "name": "Mystletainn", "rarity": 5 },
      { "name": "Rising Light", "rarity": 5 },
      { "name": "Growing Light", "rarity": 5 },
      { "name": "Fury 1", "rarity": 5 },
      { "name": "Fury 2", "rarity": 5 },
      { "name": "Fury 3", "rarity": 5 },
      { "name": "Lunge", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 19, "atk": 8, "spd": 5, "def": 8, "res": 6 },
      "level40": { "hp": [ 42, 45, 48 ], "atk": [ 29, 32, 35 ], "spd": [ 21, 24, 28 ], "def": [ 31, 34, 37 ], "res": [ 15, 19, 22 ] }
    },
    "rarity5": true,
    "colorType": "Red"
  },
  {
    "name": "Elincia",
    "title": "Lost Princess",
    "weaponType": "Sword",
    "moveType": "Flying",
    "releaseDate": "Sep 15, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Elincia.png",
      "main": "img/heroes-main/Elincia.png"
    },
    "skills": [
      { "name": "Iron Sword", "rarity": 5 },
      { "name": "Steel Sword", "rarity": 5 },
      { "name": "Silver Sword", "rarity": 5 },
      { "name": "Amiti", "rarity": 5 },
      { "name": "Ardent Sacrifice", "rarity": 5 },
      { "name": "Death Blow 1", "rarity": 5 },
      { "name": "Death Blow 2", "rarity": 5 },
      { "name": "Death Blow 3", "rarity": 5 },
      { "name": "Flier Formation 1", "rarity": 5 },
      { "name": "Flier Formation 2", "rarity": 5 },
      { "name": "Flier Formation 3", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 16, "atk": 8, "spd": 10, "def": 5, "res": 8 },
      "level40": { "hp": [ 32, 35, 39 ], "atk": [ 31, 34, 37 ], "spd": [ 33, 36, 39 ], "def": [ 21, 24, 28 ], "res": [ 24, 27, 31 ] }
    },
    "rarity5": true,
    "colorType": "Red"
  },
  {
    "name": "Elise",
    "title": "Budding Flower",
    "weaponType": "Staff",
    "moveType": "Cavalry",
    "releaseDate": "Feb 02, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Elise.png",
      "main": "img/heroes-main/Elise.png"
    },
    "skills": [
      { "name": "Assault", "rarity": 5 },
      { "name": "Gravity", "rarity": 5 },
      { "name": "Gravity+", "rarity": 5 },
      { "name": "Heal", "rarity": 5 },
      { "name": "Mend", "rarity": 5 },
      { "name": "Recover", "rarity": 5 },
      { "name": "Imbue", "rarity": 5 },
      { "name": "Kindled-Fire Balm", "rarity": 5 },
      { "name": "Live to Serve 1", "rarity": 5 },
      { "name": "Live to Serve 2", "rarity": 5 },
      { "name": "Live to Serve 3", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 15, "atk": 8, "spd": 8, "def": 4, "res": 8 },
      "level40": { "hp": [ 27, 30, 33 ], "atk": [ 29, 32, 35 ], "spd": [ 29, 32, 35 ], "def": [ 16, 19, 22 ], "res": [ 29, 32, 35 ] }
    },
    "rarity5": true,
    "colorType": "Neutral"
  },
  {
    "name": "Elise (Nohrian Summer)",
    "title": "Tropical Flower",
    "weaponType": "Tome",
    "moveType": "Infantry",
    "releaseDate": "Jul 28, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Elise (Nohrian Summer).png",
      "main": "img/heroes-main/Elise (Nohrian Summer).png"
    },
    "skills": [
      { "name": "Wind", "rarity": 5 },
      { "name": "Elwind", "rarity": 5 },
      { "name": "Hibiscus Tome", "rarity": 5 },
      { "name": "Hibiscus Tome+", "rarity": 5 },
      { "name": "Rally Attack", "rarity": 5 },
      { "name": "Rally Attack Resistance", "rarity": 5 },
      { "name": "Speed +1", "rarity": 5 },
      { "name": "Spd Res 1", "rarity": 5 },
      { "name": "Spd Res 2", "rarity": 5 },
      { "name": "G Tome Valor 1", "rarity": 5 },
      { "name": "G Tome Valor 2", "rarity": 5 },
      { "name": "G Tome Valor 3", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 17, "atk": 10, "spd": 8, "def": 3, "res": 6 },
      "level40": { "hp": [ 31, 34, 37 ], "atk": [ 33, 36, 39 ], "spd": [ 31, 34, 37 ], "def": [ 15, 18, 21 ], "res": [ 22, 25, 29 ] }
    },
    "shortName": "Elise",
    "rarity5": true,
    "colorType": "Green",
    "limited": true
  },
  {
    "name": "Eliwood",
    "title": "Knight of Lycia",
    "weaponType": "Sword",
    "moveType": "Cavalry",
    "releaseDate": "Feb 02, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Eliwood.png",
      "main": "img/heroes-main/Eliwood.png"
    },
    "skills": [
      { "name": "Iron Sword", "rarity": 3 },
      { "name": "Steel Sword", "rarity": 3 },
      { "name": "Silver Sword", "rarity": 4 },
      { "name": "Durandal", "rarity": 5 },
      { "name": "Holy Vestments", "rarity": 4 },
      { "name": "Sacred Cowl", "rarity": 4 },
      { "name": "Axebreaker 1", "rarity": 3 },
      { "name": "Axebreaker 2", "rarity": 4 },
      { "name": "Axebreaker 3", "rarity": 5 },
      { "name": "Spur Res 1", "rarity": 3 },
      { "name": "Spur Res 2", "rarity": 3 },
      { "name": "Ward Cavalry", "rarity": 4 }
    ],
    "stats": {
      "level1": { "hp": 17, "atk": 7, "spd": 8, "def": 6, "res": 8 },
      "level40": { "hp": [ 35, 39, 42 ], "atk": [ 28, 31, 34 ], "spd": [ 26, 30, 33 ], "def": [ 20, 23, 26 ], "res": [ 29, 32, 35 ] },
      "level1_4": { "hp": 16, "atk": 6, "spd": 8, "def": 5, "res": 8 },
      "level40_4": { "hp": [ 33, 36, 39 ], "atk": [ 25, 28, 31 ], "spd": [ 25, 28, 31 ], "def": [ 18, 21, 24 ], "res": [ 27, 30, 33 ] }
    },
    "rarity3": true,
    "rarity4": true,
    "colorType": "Red"
  },
  {
    "name": "Ephraim",
    "title": "Restoration Lord",
    "weaponType": "Lance",
    "moveType": "Infantry",
    "releaseDate": "Feb 15, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Ephraim.png",
      "main": "img/heroes-main/Ephraim.png"
    },
    "skills": [
      { "name": "Iron Lance", "rarity": 5 },
      { "name": "Steel Lance", "rarity": 5 },
      { "name": "Heavy Spear", "rarity": 5 },
      { "name": "Siegmund", "rarity": 5 },
      { "name": "New Moon", "rarity": 5 },
      { "name": "Moonbow", "rarity": 5 },
      { "name": "Seal Def 1", "rarity": 5 },
      { "name": "Seal Def 2", "rarity": 5 },
      { "name": "Seal Def 3", "rarity": 5 },
      { "name": "Threaten Def 1", "rarity": 5 },
      { "name": "Threaten Def 2", "rarity": 5 },
      { "name": "Threaten Def 3", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 19, "atk": 9, "spd": 6, "def": 8, "res": 5 },
      "level40": { "hp": [ 42, 45, 48 ], "atk": [ 32, 35, 38 ], "spd": [ 22, 25, 29 ], "def": [ 29, 32, 35 ], "res": [ 17, 20, 23 ] }
    },
    "rarity5": true,
    "colorType": "Blue"
  },
  {
    "name": "Est",
    "title": "Junior Whitewing",
    "weaponType": "Lance",
    "moveType": "Flying",
    "releaseDate": "Feb 02, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Est.png",
      "main": "img/heroes-main/Est.png"
    },
    "skills": [
      { "name": "Iron Lance", "rarity": 3 },
      { "name": "Steel Lance", "rarity": 3 },
      { "name": "Heavy Spear", "rarity": 4 },
      { "name": "Heavy Spear+", "rarity": 5 },
      { "name": "Shove", "rarity": 4 },
      { "name": "Defiant Res 1", "rarity": 3 },
      { "name": "Defiant Res 2", "rarity": 3 },
      { "name": "Defiant Res 3", "rarity": 4 },
      { "name": "Seal Spd 1", "rarity": 3 },
      { "name": "Seal Spd 2", "rarity": 4 },
      { "name": "Seal Spd 3", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 17, "atk": 9, "spd": 8, "def": 5, "res": 8 },
      "level40": { "hp": [ 33, 36, 40 ], "atk": [ 32, 35, 38 ], "spd": [ 26, 30, 33 ], "def": [ 21, 24, 28 ], "res": [ 29, 32, 35 ] },
      "level1_4": { "hp": 16, "atk": 9, "spd": 8, "def": 4, "res": 7 },
      "level40_4": { "hp": [ 31, 34, 37 ], "atk": [ 30, 33, 36 ], "spd": [ 25, 28, 31 ], "def": [ 19, 22, 25 ], "res": [ 26, 29, 32 ] }
    },
    "rarity3": true,
    "rarity4": true,
    "colorType": "Blue"
  },
  {
    "name": "Fae",
    "title": "Divine Dragon",
    "weaponType": "Breath",
    "moveType": "Infantry",
    "releaseDate": "Feb 02, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Fae.png",
      "main": "img/heroes-main/Fae.png"
    },
    "skills": [
      { "name": "Fire Breath", "rarity": 4 },
      { "name": "Fire Breath+", "rarity": 4 },
      { "name": "Light Breath", "rarity": 4 },
      { "name": "Light Breath+", "rarity": 5 },
      { "name": "Draw Back", "rarity": 4 },
      { "name": "Renewal 1", "rarity": 4 },
      { "name": "Renewal 2", "rarity": 4 },
      { "name": "Renewal 3", "rarity": 4 },
      { "name": "Threaten Atk 1", "rarity": 4 },
      { "name": "Threaten Atk 2", "rarity": 4 },
      { "name": "Threaten Atk 3", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 16, "atk": 5, "spd": 4, "def": 6, "res": 8 },
      "level40": { "hp": [ 43, 46, 50 ], "atk": [ 30, 33, 36 ], "spd": [ 25, 28, 31 ], "def": [ 22, 25, 29 ], "res": [ 26, 30, 33 ] },
      "level1_4": { "hp": 15, "atk": 4, "spd": 3, "def": 6, "res": 8 },
      "level40_4": { "hp": [ 40, 43, 47 ], "atk": [ 27, 30, 33 ], "spd": [ 22, 25, 28 ], "def": [ 21, 24, 27 ], "res": [ 25, 28, 31 ] }
    },
    "rarity4": true,
    "rarity5": true,
    "colorType": "Green"
  },
  {
    "name": "Faye",
    "title": "Devoted Heart",
    "weaponType": "Bow",
    "moveType": "Infantry",
    "releaseDate": "Apr 14, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Faye.png",
      "main": "img/heroes-main/Faye.png"
    },
    "skills": [
      { "name": "Iron Bow", "rarity": 5 },
      { "name": "Steel Bow", "rarity": 5 },
      { "name": "Firesweep Bow", "rarity": 5 },
      { "name": "Firesweep Bow+", "rarity": 5 },
      { "name": "Daylight", "rarity": 5 },
      { "name": "Noontime", "rarity": 5 },
      { "name": "Wings of Mercy 1", "rarity": 5 },
      { "name": "Wings of Mercy 2", "rarity": 5 },
      { "name": "Wings of Mercy 3", "rarity": 5 },
      { "name": "Bow Exp. 1", "rarity": 5 },
      { "name": "Bow Exp. 2", "rarity": 5 },
      { "name": "Bow Exp. 3", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 16, "atk": 6, "spd": 3, "def": 4, "res": 7 },
      "level40": { "hp": [ 39, 42, 45 ], "atk": [ 27, 30, 33 ], "spd": [ 21, 25, 28 ], "def": [ 22, 26, 29 ], "res": [ 28, 31, 34 ] }
    },
    "rarity5": true,
    "colorType": "Neutral"
  },
  {
    "name": "Felicia",
    "title": "Maid Mayhem",
    "weaponType": "Dagger",
    "moveType": "Infantry",
    "releaseDate": "Feb 02, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Felicia.png",
      "main": "img/heroes-main/Felicia.png"
    },
    "skills": [
      { "name": "Iron Dagger", "rarity": 1 },
      { "name": "Steel Dagger", "rarity": 3 },
      { "name": "Silver Dagger", "rarity": 4 },
      { "name": "Silver Dagger+", "rarity": 5 },
      { "name": "Chilling Wind", "rarity": 4 },
      { "name": "Glacies", "rarity": 4 },
      { "name": "Resistance +1", "rarity": 3 },
      { "name": "Resistance +2", "rarity": 4 },
      { "name": "Resistance +3", "rarity": 5 },
      { "name": "Breath of Life 1", "rarity": 1 },
      { "name": "Breath of Life 2", "rarity": 2 },
      { "name": "Breath of Life 3", "rarity": 4 }
    ],
    "stats": {
      "level1": { "hp": 15, "atk": 6, "spd": 11, "def": 3, "res": 9 },
      "level40": { "hp": [ 31, 34, 38 ], "atk": [ 20, 23, 26 ], "spd": [ 34, 37, 40 ], "def": [ 15, 18, 21 ], "res": [ 32, 35, 38 ] },
      "level1_4": { "hp": 14, "atk": 5, "spd": 11, "def": 2, "res": 9 },
      "level40_4": { "hp": [ 29, 32, 35 ], "atk": [ 18, 21, 24 ], "spd": [ 32, 35, 38 ], "def": [ 13, 16, 19 ], "res": [ 30, 33, 36 ] }
    },
    "rarity3": true,
    "rarity4": true,
    "colorType": "Neutral"
  },
  {
    "name": "Fir",
    "title": "Sword Student",
    "weaponType": "Sword",
    "moveType": "Infantry",
    "releaseDate": "Feb 02, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Fir.png",
      "main": "img/heroes-main/Fir.png"
    },
    "skills": [
      { "name": "Iron Sword", "rarity": 3 },
      { "name": "Steel Sword", "rarity": 3 },
      { "name": "Killing Edge", "rarity": 4 },
      { "name": "Killing Edge+", "rarity": 5 },
      { "name": "Chilling Wind", "rarity": 4 },
      { "name": "Glacies", "rarity": 4 },
      { "name": "Speed +1", "rarity": 3 },
      { "name": "Speed +2", "rarity": 3 },
      { "name": "Speed +3", "rarity": 4 },
      { "name": "Pass 1", "rarity": 3 },
      { "name": "Pass 2", "rarity": 4 },
      { "name": "Pass 3", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 19, "atk": 6, "spd": 10, "def": 5, "res": 7 },
      "level40": { "hp": [ 37, 41, 44 ], "atk": [ 22, 25, 29 ], "spd": [ 33, 36, 39 ], "def": [ 21, 24, 28 ], "res": [ 28, 31, 34 ] },
      "level1_4": { "hp": 18, "atk": 5, "spd": 10, "def": 4, "res": 7 },
      "level40_4": { "hp": [ 35, 38, 41 ], "atk": [ 20, 23, 26 ], "spd": [ 31, 34, 37 ], "def": [ 19, 22, 25 ], "res": [ 26, 29, 32 ] }
    },
    "rarity3": true,
    "rarity4": true,
    "colorType": "Red"
  },
  {
    "name": "Fjorm",
    "title": "Princess of Ice",
    "weaponType": "Lance",
    "moveType": "Infantry",
    "releaseDate": "Nov 28, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Fjorm.png",
      "main": "img/heroes-main/Fjorm.png"
    },
    "skills": [
      { "name": "Iron Lance", "rarity": 5 },
      { "name": "Steel Lance", "rarity": 5 },
      { "name": "Silver Lance", "rarity": 5 },
      { "name": "Leiptr", "rarity": 5 },
      { "name": "Holy Vestments", "rarity": 5 },
      { "name": "Sacred Cowl", "rarity": 5 },
      { "name": "Ice Mirror", "rarity": 5 },
      { "name": "Atk Def Bond 1", "rarity": 5 },
      { "name": "Atk Def Bond 2", "rarity": 5 },
      { "name": "Atk Def Bond 3", "rarity": 5 },
      { "name": "Shield Pulse 1", "rarity": 5 },
      { "name": "Shield Pulse 2", "rarity": 5 },
      { "name": "Shield Pulse 3", "rarity": 5 },
      { "name": "Spur Atk 1", "rarity": 5 },
      { "name": "Drive Atk 1", "rarity": 5 },
      { "name": "Drive Atk 2", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 17, "atk": 8, "spd": 7, "def": 8, "res": 8 },
      "level40": { "hp": [ 35, 39, 42 ], "atk": [ 26, 30, 33 ], "spd": [ 28, 31, 34 ], "def": [ 26, 30, 33 ], "res": [ 31, 34, 37 ] }
    },
    "rarity5": true,
    "colorType": "Blue",
    "limited": true
  },
  {
    "name": "Florina",
    "title": "Lovely Flier",
    "weaponType": "Lance",
    "moveType": "Flying",
    "releaseDate": "Feb 02, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Florina.png",
      "main": "img/heroes-main/Florina.png"
    },
    "skills": [
      { "name": "Iron Lance", "rarity": 3 },
      { "name": "Steel Lance", "rarity": 3 },
      { "name": "Heavy Spear", "rarity": 4 },
      { "name": "Heavy Spear+", "rarity": 5 },
      { "name": "Ardent Sacrifice", "rarity": 4 },
      { "name": "Darting Blow 1", "rarity": 3 },
      { "name": "Darting Blow 2", "rarity": 3 },
      { "name": "Darting Blow 3", "rarity": 4 },
      { "name": "Breath of Life 1", "rarity": 3 },
      { "name": "Breath of Life 2", "rarity": 4 },
      { "name": "Breath of Life 3", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 18, "atk": 7, "spd": 8, "def": 6, "res": 8 },
      "level40": { "hp": [ 39, 42, 45 ], "atk": [ 25, 29, 32 ], "spd": [ 24, 27, 31 ], "def": [ 22, 25, 29 ], "res": [ 31, 34, 37 ] },
      "level1_4": { "hp": 17, "atk": 6, "spd": 8, "def": 5, "res": 8 },
      "level40_4": { "hp": [ 36, 39, 42 ], "atk": [ 23, 26, 29 ], "spd": [ 23, 26, 29 ], "def": [ 20, 23, 26 ], "res": [ 29, 32, 35 ] }
    },
    "rarity3": true,
    "rarity4": true,
    "colorType": "Blue"
  },
  {
    "name": "Frederick",
    "title": "Polite Knight",
    "weaponType": "Axe",
    "moveType": "Cavalry",
    "releaseDate": "Feb 02, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Frederick.png",
      "main": "img/heroes-main/Frederick.png"
    },
    "skills": [
      { "name": "Iron Axe", "rarity": 3 },
      { "name": "Steel Axe", "rarity": 3 },
      { "name": "Hammer", "rarity": 4 },
      { "name": "Hammer+", "rarity": 5 },
      { "name": "New Moon", "rarity": 4 },
      { "name": "Luna", "rarity": 4 },
      { "name": "Wings of Mercy 1", "rarity": 3 },
      { "name": "Wings of Mercy 2", "rarity": 4 },
      { "name": "Wings of Mercy 3", "rarity": 5 },
      { "name": "Fortify Def 1", "rarity": 3 },
      { "name": "Fortify Def 2", "rarity": 3 },
      { "name": "Fortify Def 3", "rarity": 4 }
    ],
    "stats": {
      "level1": { "hp": 19, "atk": 9, "spd": 6, "def": 8, "res": 4 },
      "level40": { "hp": [ 40, 43, 46 ], "atk": [ 32, 35, 38 ], "spd": [ 22, 25, 29 ], "def": [ 33, 36, 39 ], "res": [ 11, 14, 18 ] },
      "level1_4": { "hp": 18, "atk": 9, "spd": 5, "def": 8, "res": 3 },
      "level40_4": { "hp": [ 37, 40, 43 ], "atk": [ 30, 33, 36 ], "spd": [ 20, 23, 26 ], "def": [ 31, 34, 37 ], "res": [ 10, 13, 16 ] }
    },
    "rarity3": true,
    "rarity4": true,
    "colorType": "Green"
  },
  {
    "name": "Frederick (Ylissean Summer)",
    "title": "Horizon Watcher",
    "weaponType": "Dagger",
    "moveType": "Infantry",
    "releaseDate": "Jun 30, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Frederick (Ylissean Summer).png",
      "main": "img/heroes-main/Frederick (Ylissean Summer).png"
    },
    "skills": [
      { "name": "Iron Dagger", "rarity": 5 },
      { "name": "Steel Dagger", "rarity": 5 },
      { "name": "Seashell", "rarity": 5 },
      { "name": "Seashell+", "rarity": 5 },
      { "name": "Ardent Sacrifice", "rarity": 5 },
      { "name": "Armored Blow 1", "rarity": 5 },
      { "name": "Armored Blow 2", "rarity": 5 },
      { "name": "Armored Blow 3", "rarity": 5 },
      { "name": "Seal Spd 1", "rarity": 5 },
      { "name": "Seal Atk Spd 1", "rarity": 5 },
      { "name": "Seal Atk Spd 2", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 18, "atk": 8, "spd": 7, "def": 6, "res": 5 },
      "level40": { "hp": [ 36, 40, 43 ], "atk": [ 29, 32, 35 ], "spd": [ 28, 31, 34 ], "def": [ 24, 28, 31 ], "res": [ 14, 18, 21 ] }
    },
    "shortName": "Frederick",
    "rarity5": true,
    "colorType": "Neutral",
    "limited": true
  },
  {
    "name": "Gaius",
    "title": "Candy Stealer",
    "weaponType": "Dagger",
    "moveType": "Infantry",
    "releaseDate": "Feb 02, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Gaius.png",
      "main": "img/heroes-main/Gaius.png"
    },
    "skills": [
      { "name": "Iron Dagger", "rarity": 3 },
      { "name": "Steel Dagger", "rarity": 3 },
      { "name": "Rogue Dagger", "rarity": 4 },
      { "name": "Rogue Dagger+", "rarity": 5 },
      { "name": "Rally Speed", "rarity": 4 },
      { "name": "Defiant Atk 1", "rarity": 3 },
      { "name": "Defiant Atk 2", "rarity": 4 },
      { "name": "Defiant Atk 3", "rarity": 5 },
      { "name": "Pass 1", "rarity": 3 },
      { "name": "Pass 2", "rarity": 3 },
      { "name": "Pass 3", "rarity": 4 }
    ],
    "stats": {
      "level1": { "hp": 18, "atk": 7, "spd": 10, "def": 5, "res": 4 },
      "level40": { "hp": [ 39, 42, 45 ], "atk": [ 25, 29, 32 ], "spd": [ 33, 36, 39 ], "def": [ 19, 22, 25 ], "res": [ 16, 19, 22 ] },
      "level1_4": { "hp": 17, "atk": 7, "spd": 10, "def": 4, "res": 3 },
      "level40_4": { "hp": [ 36, 39, 42 ], "atk": [ 24, 27, 30 ], "spd": [ 31, 34, 37 ], "def": [ 17, 20, 23 ], "res": [ 14, 17, 20 ] }
    },
    "rarity3": true,
    "rarity4": true,
    "colorType": "Neutral"
  },
  {
    "name": "Gaius (Ylissean Summer)",
    "title": "Thief Exposed",
    "weaponType": "Bow",
    "moveType": "Infantry",
    "releaseDate": "Jun 30, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Gaius (Ylissean Summer).png",
      "main": "img/heroes-main/Gaius (Ylissean Summer).png"
    },
    "skills": [
      { "name": "Iron Bow", "rarity": 5 },
      { "name": "Steel Bow", "rarity": 5 },
      { "name": "Refreshing Bolt", "rarity": 5 },
      { "name": "Refreshing Bolt+", "rarity": 5 },
      { "name": "Night Sky", "rarity": 5 },
      { "name": "Astra", "rarity": 5 },
      { "name": "Vantage 1", "rarity": 5 },
      { "name": "Vantage 2", "rarity": 5 },
      { "name": "Vantage 3", "rarity": 5 },
      { "name": "Def Ploy 1", "rarity": 5 },
      { "name": "Def Ploy 2", "rarity": 5 },
      { "name": "Def Ploy 3", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 17, "atk": 8, "spd": 9, "def": 4, "res": 6 },
      "level40": { "hp": [ 31, 34, 37 ], "atk": [ 26, 30, 33 ], "spd": [ 34, 37, 40 ], "def": [ 16, 19, 22 ], "res": [ 24, 28, 31 ] }
    },
    "shortName": "Gaius",
    "rarity5": true,
    "colorType": "Neutral",
    "limited": true
  },
  {
    "name": "Genny",
    "title": "Endearing Ally",
    "weaponType": "Staff",
    "moveType": "Infantry",
    "releaseDate": "May 15, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Genny.png",
      "main": "img/heroes-main/Genny.png"
    },
    "skills": [
      { "name": "Assault", "rarity": 5 },
      { "name": "Gravity", "rarity": 5 },
      { "name": "Gravity+", "rarity": 5 },
      { "name": "Heal", "rarity": 5 },
      { "name": "Mend", "rarity": 5 },
      { "name": "Physic", "rarity": 5 },
      { "name": "Imbue", "rarity": 5 },
      { "name": "Heavenly Light", "rarity": 5 },
      { "name": "Wrathful Staff 1", "rarity": 5 },
      { "name": "Wrathful Staff 2", "rarity": 5 },
      { "name": "Wrathful Staff 3", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 17, "atk": 9, "spd": 6, "def": 4, "res": 8 },
      "level40": { "hp": [ 29, 32, 35 ], "atk": [ 32, 35, 38 ], "spd": [ 22, 25, 29 ], "def": [ 18, 21, 24 ], "res": [ 31, 34, 37 ] }
    },
    "rarity5": true,
    "colorType": "Neutral"
  },
  {
    "name": "Gordin",
    "title": "Altean Archer",
    "weaponType": "Bow",
    "moveType": "Infantry",
    "releaseDate": "Feb 02, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Gordin.png",
      "main": "img/heroes-main/Gordin.png"
    },
    "skills": [
      { "name": "Iron Bow", "rarity": 3 },
      { "name": "Steel Bow", "rarity": 3 },
      { "name": "Brave Bow", "rarity": 4 },
      { "name": "Brave Bow+", "rarity": 5 },
      { "name": "Shove", "rarity": 4 },
      { "name": "Attack +1", "rarity": 3 },
      { "name": "Attack +2", "rarity": 3 },
      { "name": "Attack +3", "rarity": 4 },
      { "name": "Vantage 1", "rarity": 3 },
      { "name": "Vantage 2", "rarity": 4 },
      { "name": "Vantage 3", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 19, "atk": 7, "spd": 6, "def": 8, "res": 4 },
      "level40": { "hp": [ 40, 43, 46 ], "atk": [ 28, 31, 34 ], "spd": [ 22, 25, 29 ], "def": [ 29, 32, 35 ], "res": [ 13, 17, 20 ] },
      "level1_4": { "hp": 18, "atk": 7, "spd": 5, "def": 8, "res": 3 },
      "level40_4": { "hp": [ 37, 40, 43 ], "atk": [ 26, 29, 32 ], "spd": [ 20, 23, 26 ], "def": [ 27, 30, 33 ], "res": [ 12, 15, 18 ] }
    },
    "rarity3": true,
    "rarity4": true,
    "colorType": "Neutral"
  },
  {
    "name": "Gray",
    "title": "Wry Comrade",
    "weaponType": "Sword",
    "moveType": "Infantry",
    "releaseDate": "Jul 13, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Gray.png",
      "main": "img/heroes-main/Gray.png"
    },
    "skills": [
      { "name": "Iron Sword", "rarity": 5 },
      { "name": "Steel Sword", "rarity": 5 },
      { "name": "Zanbato", "rarity": 5 },
      { "name": "Zanbato+", "rarity": 5 },
      { "name": "Swap", "rarity": 5 },
      { "name": "Wind Boost 1", "rarity": 5 },
      { "name": "Wind Boost 2", "rarity": 5 },
      { "name": "Wind Boost 3", "rarity": 5 },
      { "name": "Sword Valor 1", "rarity": 5 },
      { "name": "Sword Valor 2", "rarity": 5 },
      { "name": "Sword Valor 3", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 17, "atk": 7, "spd": 6, "def": 6, "res": 3 },
      "level40": { "hp": [ 40, 43, 46 ], "atk": [ 32, 35, 38 ], "spd": [ 29, 32, 35 ], "def": [ 27, 30, 33 ], "res": [ 19, 22, 26 ] }
    },
    "rarity5": true,
    "colorType": "Red"
  },
  {
    "name": "Gunnthrá",
    "title": "Voice of Dreams",
    "weaponType": "Tome",
    "moveType": "Cavalry",
    "releaseDate": "Dec 28, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Gunnthrá.png",
      "main": "img/heroes-main/Gunnthrá.png"
    },
   "skills": [
      { "name": "Wind", "rarity": 5 },
      { "name": "Elwind", "rarity": 5 },
      { "name": "Rexcalibur", "rarity": 5 },
      { "name": "Blizzard", "rarity": 5 },
      { "name": "Chilling Wind", "rarity": 5 },
      { "name": "Glacies", "rarity": 5 },
      { "name": "Fortress Res 1", "rarity": 5 },
      { "name": "Fortress Res 2", "rarity": 5 },
      { "name": "Fortress Res 3", "rarity": 5 },
      { "name": "Chilling Seal", "rarity": 5 },
      { "name": "Res Ploy 1", "rarity": 5 },
      { "name": "Res Ploy 2", "rarity": 5 },
      { "name": "Res Ploy 3", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 15, "atk": 7, "spd": 9, "def": 6, "res": 6 },
      "level40": { "hp": [ 33, 37, 40 ], "atk": [ 28, 31, 34 ], "spd": [ 30, 33, 36 ], "def": [ 15, 19, 22 ], "res": [ 22, 25, 29 ] }
    },
    "rarity5": true,
    "colorType": "Green",
    "limited": true
  },
  {
    "name": "Gunter",
    "title": "Inveterate Soldier",
    "weaponType": "Axe",
    "moveType": "Cavalry",
    "releaseDate": "Feb 02, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Gunter.png",
      "main": "img/heroes-main/Gunter.png"
    },
    "skills": [
      { "name": "Iron Axe", "rarity": 1 },
      { "name": "Steel Axe", "rarity": 3 },
      { "name": "Silver Axe", "rarity": 4 },
      { "name": "Silver Axe+", "rarity": 5 },
      { "name": "Harsh Command", "rarity": 4 },
      { "name": "Armored Blow 1", "rarity": 3 },
      { "name": "Armored Blow 2", "rarity": 4 },
      { "name": "Armored Blow 3", "rarity": 5 },
      { "name": "Hone Atk 1", "rarity": 1 },
      { "name": "Hone Atk 2", "rarity": 2 },
      { "name": "Hone Cavalry", "rarity": 4 }
    ],
    "stats": {
      "level1": { "hp": 21, "atk": 10, "spd": 7, "def": 11, "res": 5 },
      "level40": { "hp": [ 39, 43, 46 ], "atk": [ 28, 32, 35 ], "spd": [ 21, 24, 27 ], "def": [ 29, 33, 36 ], "res": [ 14, 18, 21 ] },
      "level1_4": { "hp": 20, "atk": 10, "spd": 6, "def": 11, "res": 4 },
      "level40_4": { "hp": [ 37, 40, 43 ], "atk": [ 27, 30, 33 ], "spd": [ 19, 22, 25 ], "def": [ 28, 31, 34 ], "res": [ 13, 16, 19 ] }
    },
    "rarity3": true,
    "rarity4": true,
    "colorType": "Green"
  },
  {
    "name": "Gwendolyn",
    "title": "Adorable Knight",
    "weaponType": "Lance",
    "moveType": "Armored",
    "releaseDate": "Feb 02, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Gwendolyn.png",
      "main": "img/heroes-main/Gwendolyn.png"
    },
    "skills": [
      { "name": "Iron Lance", "rarity": 3 },
      { "name": "Steel Lance", "rarity": 3 },
      { "name": "Killer Lance", "rarity": 4 },
      { "name": "Killer Lance+", "rarity": 5 },
      { "name": "Buckler", "rarity": 4 },
      { "name": "Escutcheon", "rarity": 4 },
      { "name": "Drag Back", "rarity": 3 },
      { "name": "Hone Atk 1", "rarity": 3 },
      { "name": "Hone Atk 2", "rarity": 3 },
      { "name": "Hone Armor", "rarity": 4 }
    ],
    "stats": {
      "level1": { "hp": 23, "atk": 8, "spd": 5, "def": 12, "res": 6 },
      "level40": { "hp": [ 46, 49, 52 ], "atk": [ 26, 30, 33 ], "spd": [ 21, 24, 28 ], "def": [ 35, 38, 41 ], "res": [ 24, 28, 31 ] },
      "level1_4": { "hp": 22, "atk": 8, "spd": 4, "def": 12, "res": 5 },
      "level40_4": { "hp": [ 43, 46, 49 ], "atk": [ 25, 28, 31 ], "spd": [ 19, 22, 25 ], "def": [ 33, 36, 39 ], "res": [ 22, 25, 28 ] }
    },
    "rarity3": true,
    "rarity4": true,
    "colorType": "Blue"
  },
  {
    "name": "Hana",
    "title": "Focused Samurai",
    "weaponType": "Sword",
    "moveType": "Infantry",
    "releaseDate": "Feb 02, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Hana.png",
      "main": "img/heroes-main/Hana.png"
    },
    "skills": [
      { "name": "Iron Sword", "rarity": 1 },
      { "name": "Steel Sword", "rarity": 3 },
      { "name": "Armorslayer", "rarity": 4 },
      { "name": "Armorslayer+", "rarity": 5 },
      { "name": "Rally Attack", "rarity": 4 },
      { "name": "Life and Death 1", "rarity": 3 },
      { "name": "Life and Death 2", "rarity": 4 },
      { "name": "Life and Death 3", "rarity": 5 },
      { "name": "Obstruct 1", "rarity": 1 },
      { "name": "Obstruct 2", "rarity": 2 },
      { "name": "Obstruct 3", "rarity": 4 }
    ],
    "stats": {
      "level1": { "hp": 18, "atk": 9, "spd": 10, "def": 6, "res": 4 },
      "level40": { "hp": [ 34, 37, 41 ], "atk": [ 32, 35, 38 ], "spd": [ 33, 36, 39 ], "def": [ 20, 23, 26 ], "res": [ 22, 26, 29 ] },
      "level1_4": { "hp": 17, "atk": 9, "spd": 10, "def": 5, "res": 3 },
      "level40_4": { "hp": [ 32, 35, 38 ], "atk": [ 30, 33, 36 ], "spd": [ 31, 34, 37 ], "def": [ 18, 21, 24 ], "res": [ 20, 23, 26 ] }
    },
    "rarity3": true,
    "rarity4": true,
    "colorType": "Red"
  },
  {
    "name": "Hawkeye",
    "title": "Desert Guardian",
    "weaponType": "Axe",
    "moveType": "Infantry",
    "releaseDate": "Feb 02, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Hawkeye.png",
      "main": "img/heroes-main/Hawkeye.png"
    },
    "skills": [
      { "name": "Iron Axe", "rarity": 4 },
      { "name": "Steel Axe", "rarity": 4 },
      { "name": "Killer Axe", "rarity": 4 },
      { "name": "Killer Axe+", "rarity": 5 },
      { "name": "Rising Light", "rarity": 4 },
      { "name": "Growing Light", "rarity": 4 },
      { "name": "Death Blow 1", "rarity": 4 },
      { "name": "Death Blow 2", "rarity": 4 },
      { "name": "Death Blow 3", "rarity": 5 },
      { "name": "Threaten Atk 1", "rarity": 4 },
      { "name": "Threaten Atk 2", "rarity": 4 },
      { "name": "Threaten Atk 3", "rarity": 4 }
    ],
    "stats": {
      "level1": { "hp": 21, "atk": 9, "spd": 5, "def": 6, "res": 6 },
      "level40": { "hp": [ 42, 45, 48 ], "atk": [ 30, 33, 36 ], "spd": [ 19, 22, 25 ], "def": [ 24, 28, 31 ], "res": [ 27, 30, 33 ] },
      "level1_4": { "hp": 20, "atk": 9, "spd": 4, "def": 6, "res": 5 },
      "level40_4": { "hp": [ 39, 42, 45 ], "atk": [ 28, 31, 34 ], "spd": [ 17, 20, 23 ], "def": [ 23, 26, 29 ], "res": [ 24, 27, 30 ] }
    },
    "rarity4": true,
    "rarity5": true,
    "colorType": "Green"
  },
  {
    "name": "Hector",
    "title": "General of Ostia",
    "weaponType": "Axe",
    "moveType": "Armored",
    "releaseDate": "Feb 02, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Hector.png",
      "main": "img/heroes-main/Hector.png"
    },
    "skills": [
      { "name": "Iron Axe", "rarity": 5 },
      { "name": "Steel Axe", "rarity": 5 },
      { "name": "Silver Axe", "rarity": 5 },
      { "name": "Armads", "rarity": 5 },
      { "name": "Buckler", "rarity": 5 },
      { "name": "Pavise", "rarity": 5 },
      { "name": "Distant Counter", "rarity": 5 },
      { "name": "Spur Atk 1", "rarity": 5 },
      { "name": "Spur Atk 2", "rarity": 5 },
      { "name": "Goad Armor", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 24, "atk": 10, "spd": 5, "def": 11, "res": 4 },
      "level40": { "hp": [ 49, 52, 55 ], "atk": [ 33, 36, 39 ], "spd": [ 21, 24, 28 ], "def": [ 34, 37, 40 ], "res": [ 16, 19, 22 ] }
    },
    "rarity5": true,
    "colorType": "Green"
  },
  {
    "name": "Henry",
    "title": "Twisted Mind",
    "weaponType": "Tome",
    "moveType": "Infantry",
    "releaseDate": "Feb 02, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Henry.png",
      "main": "img/heroes-main/Henry.png"
    },
    "skills": [
      { "name": "Flux", "rarity": 3 },
      { "name": "Ruin", "rarity": 3 },
      { "name": "Rauðrraven", "rarity": 4 },
      { "name": "Rauðrraven+", "rarity": 5 },
      { "name": "Glowing Ember", "rarity": 4 },
      { "name": "Ignis", "rarity": 4 },
      { "name": "Defiant Def 1", "rarity": 3 },
      { "name": "Defiant Def 2", "rarity": 4 },
      { "name": "Defiant Def 3", "rarity": 5 },
      { "name": "G Tomebreaker 1", "rarity": 3 },
      { "name": "G Tomebreaker 2", "rarity": 3 },
      { "name": "G Tomebreaker 3", "rarity": 4 }
    ],
    "stats": {
      "level1": { "hp": 19, "atk": 6, "spd": 5, "def": 8, "res": 6 },
      "level40": { "hp": [ 42, 45, 48 ], "atk": [ 20, 23, 26 ], "spd": [ 19, 22, 25 ], "def": [ 29, 32, 35 ], "res": [ 22, 25, 29 ] },
      "level1_4": { "hp": 18, "atk": 6, "spd": 4, "def": 8, "res": 5 },
      "level40_4": { "hp": [ 39, 42, 45 ], "atk": [ 19, 22, 25 ], "spd": [ 17, 20, 23 ], "def": [ 27, 30, 33 ], "res": [ 20, 23, 26 ] }
    },
    "rarity3": true,
    "rarity4": true,
    "colorType": "Red"
  },
  {
    "name": "Henry (Trick or Defeat!)",
    "title": "Happy Vampire",
    "weaponType": "Tome",
    "moveType": "Armored",
    "releaseDate": "Oct 30, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Henry (Trick or Defeat!).png",
      "main": "img/heroes-main/Henry (Trick or Defeat!).png"
    },
    "skills": [
      { "name": "Wind", "rarity": 5 },
      { "name": "Elwind", "rarity": 5 },
      { "name": "Spectral Tome", "rarity": 5 },
      { "name": "Spectral Tome+", "rarity": 5 },
      { "name": "Retribution", "rarity": 5 },
      { "name": "Reprisal", "rarity": 5 },
      { "name": "Live for Honor", "rarity": 5 },
      { "name": "Armor March 1", "rarity": 5 },
      { "name": "Armor March 2", "rarity": 5 },
      { "name": "Armor March 3", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 17, "atk": 9, "spd": 10, "def": 4, "res": 12 },
      "level40": { "hp": [ 33, 36, 40 ], "atk": [ 30, 33, 36 ], "spd": [ 31, 34, 37 ], "def": [ 22, 26, 29 ], "res": [ 33, 36, 39 ] }
    },
    "shortName": "Henry",
    "rarity5": true,
    "colorType": "Green",
    "limited": true
  },
  {
    "name": "Hinata",
    "title": "Wild Samurai",
    "weaponType": "Sword",
    "moveType": "Infantry",
    "releaseDate": "Feb 02, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Hinata.png",
      "main": "img/heroes-main/Hinata.png"
    },
    "skills": [
      { "name": "Iron Sword", "rarity": 1 },
      { "name": "Steel Sword", "rarity": 3 },
      { "name": "Ruby Sword", "rarity": 4 },
      { "name": "Ruby Sword+", "rarity": 5 },
      { "name": "Buckler", "rarity": 4 },
      { "name": "Pavise", "rarity": 4 },
      { "name": "Fury 1", "rarity": 1 },
      { "name": "Fury 2", "rarity": 2 },
      { "name": "Fury 3", "rarity": 4 },
      { "name": "Brash Assault 1", "rarity": 3 },
      { "name": "Brash Assault 2", "rarity": 4 },
      { "name": "Brash Assault 3", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 21, "atk": 8, "spd": 5, "def": 10, "res": 3 },
      "level40": { "hp": [ 44, 47, 50 ], "atk": [ 29, 32, 35 ], "spd": [ 21, 24, 28 ], "def": [ 33, 36, 39 ], "res": [ 15, 18, 21 ] },
      "level1_4": { "hp": 20, "atk": 8, "spd": 4, "def": 10, "res": 2 },
      "level40_4": { "hp": [ 41, 44, 47 ], "atk": [ 27, 30, 33 ], "spd": [ 19, 22, 25 ], "def": [ 31, 34, 37 ], "res": [ 13, 16, 19 ] }
    },
    "rarity3": true,
    "rarity4": true,
    "colorType": "Red"
  },
  {
    "name": "Hinoka",
    "title": "Warrior Princess",
    "weaponType": "Lance",
    "moveType": "Flying",
    "releaseDate": "Feb 02, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Hinoka.png",
      "main": "img/heroes-main/Hinoka.png"
    },
    "skills": [
      { "name": "Iron Lance", "rarity": 5 },
      { "name": "Steel Lance", "rarity": 5 },
      { "name": "Brave Lance", "rarity": 5 },
      { "name": "Brave Lance+", "rarity": 5 },
      { "name": "Rising Wind", "rarity": 5 },
      { "name": "Blazing Wind", "rarity": 5 },
      { "name": "Defiant Def 1", "rarity": 5 },
      { "name": "Defiant Def 2", "rarity": 5 },
      { "name": "Defiant Def 3", "rarity": 5 },
      { "name": "Hone Spd 1", "rarity": 5 },
      { "name": "Hone Spd 2", "rarity": 5 },
      { "name": "Hone Fliers", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 19, "atk": 7, "spd": 8, "def": 6, "res": 7 },
      "level40": { "hp": [ 37, 41, 44 ], "atk": [ 32, 35, 38 ], "spd": [ 29, 32, 35 ], "def": [ 22, 25, 29 ], "res": [ 21, 24, 27 ] }
    },
    "rarity5": true,
    "colorType": "Blue"
  },
  {
    "name": "Ike",
    "title": "Young Mercenary",
    "weaponType": "Sword",
    "moveType": "Infantry",
    "releaseDate": "Apr 26, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Ike.png",
      "main": "img/heroes-main/Ike.png"
    },
    "skills": [
      { "name": "Iron Sword", "rarity": 5 },
      { "name": "Steel Sword", "rarity": 5 },
      { "name": "Silver Sword", "rarity": 5 },
      { "name": "Ragnell", "rarity": 5 },
      { "name": "New Moon", "rarity": 5 },
      { "name": "Luna", "rarity": 5 },
      { "name": "Aether", "rarity": 5 },
      { "name": "Heavy Blade 1", "rarity": 5 },
      { "name": "Heavy Blade 2", "rarity": 5 },
      { "name": "Heavy Blade 3", "rarity": 5 },
      { "name": "Swordbreaker 1", "rarity": 5 },
      { "name": "Swordbreaker 2", "rarity": 5 },
      { "name": "Swordbreaker 3", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 18, "atk": 9, "spd": 7, "def": 8, "res": 5 },
      "level40": { "hp": [ 39, 42, 45 ], "atk": [ 32, 35, 38 ], "spd": [ 28, 31, 34 ], "def": [ 29, 32, 35 ], "res": [ 14, 18, 21 ] }
    },
    "rarity5": true,
    "colorType": "Red"
  },
  {
    "name": "Ike (Brave Heroes)",
    "title": "Brave Mercenary",
    "weaponType": "Axe",
    "moveType": "Infantry",
    "releaseDate": "Aug 31, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Ike (Brave Heroes).png",
      "main": "img/heroes-main/Ike (Brave Heroes).png"
    },
    "skills": [
      { "name": "Iron Axe", "rarity": 5 },
      { "name": "Steel Axe", "rarity": 5 },
      { "name": "Silver Axe", "rarity": 5 },
      { "name": "Urvan", "rarity": 5 },
      { "name": "New Moon", "rarity": 5 },
      { "name": "Luna", "rarity": 5 },
      { "name": "Aether", "rarity": 5 },
      { "name": "Steady Stance 1", "rarity": 5 },
      { "name": "Steady Stance 2", "rarity": 5 },
      { "name": "Steady Breath", "rarity": 5 },
      { "name": "Beorc's Blessing", "rarity": 5 },
      { "name": "Threaten Def 1", "rarity": 5 },
      { "name": "Threaten Def 2", "rarity": 5 },
      { "name": "Threaten Def 3", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 17, "atk": 10, "spd": 6, "def": 9, "res": 5 },
      "level40": { "hp": [ 40, 43, 46 ], "atk": [ 33, 36, 39 ], "spd": [ 24, 28, 31 ], "def": [ 32, 35, 38 ], "res": [ 17, 20, 23 ] }
    },
    "shortName": "Ike",
    "rarity5": true,
    "colorType": "Green"
  },
  {
    "name": "Inigo (Performing Arts)",
    "title": "Indigo Dancer",
    "weaponType": "Tome",
    "moveType": "Infantry",
    "releaseDate": "Sep 29, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Inigo (Performing Arts).png",
      "main": "img/heroes-main/Inigo (Performing Arts).png"
    },
    "skills": [
      { "name": "Wind", "rarity": 5 },
      { "name": "Elwind", "rarity": 5 },
      { "name": "Dancer's Ring", "rarity": 5 },
      { "name": "Dancer's Ring+", "rarity": 5 },
      { "name": "Dance", "rarity": 5 },
      { "name": "Gale Dance 1", "rarity": 5 },
      { "name": "Gale Dance 2", "rarity": 5 },
      { "name": "Gale Dance 3", "rarity": 5 },
      { "name": "Hone Atk 1", "rarity": 5 },
      { "name": "Hone Atk 2", "rarity": 5 },
      { "name": "Hone Atk 3", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 15, "atk": 6, "spd": 7, "def": 5, "res": 3 },
      "level40": { "hp": [ 33, 37, 40 ], "atk": [ 24, 28, 31 ], "spd": [ 30, 33, 36 ], "def": [ 19, 22, 25 ], "res": [ 17, 20, 23 ] }
    },
    "shortName": "Inigo",
    "rarity5": true,
    "colorType": "Green",
    "limited": true
  },
  {
    "name": "Innes",
    "title": "Regal Strategician",
    "weaponType": "Bow",
    "moveType": "Infantry",
    "releaseDate": "Aug 15, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Innes.png",
      "main": "img/heroes-main/Innes.png"
    },
    "skills": [
      { "name": "Iron Bow", "rarity": 5 },
      { "name": "Steel Bow", "rarity": 5 },
      { "name": "Silver Bow", "rarity": 5 },
      { "name": "Nidhogg", "rarity": 5 },
      { "name": "Chilling Wind", "rarity": 5 },
      { "name": "Iceberg", "rarity": 5 },
      { "name": "Fortress Res 1", "rarity": 5 },
      { "name": "Fortress Res 2", "rarity": 5 },
      { "name": "Fortress Res 3", "rarity": 5 },
      { "name": "Cancel Affinity 1", "rarity": 5 },
      { "name": "Cancel Affinity 2", "rarity": 5 },
      { "name": "Cancel Affinity 3", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 16, "atk": 9, "spd": 8, "def": 4, "res": 7 },
      "level40": { "hp": [ 32, 35, 39 ], "atk": [ 30, 33, 36 ], "spd": [ 31, 34, 37 ], "def": [ 11, 14, 18 ], "res": [ 28, 31, 34 ] }
    },
    "rarity5": true,
    "colorType": "Neutral"
  },
  {
    "name": "Jaffar",
    "title": "Angel of Death",
    "weaponType": "Dagger",
    "moveType": "Infantry",
    "releaseDate": "Mar 14, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Jaffar.png",
      "main": "img/heroes-main/Jaffar.png"
    },
    "skills": [
      { "name": "Iron Dagger", "rarity": 5 },
      { "name": "Steel Dagger", "rarity": 5 },
      { "name": "Silver Dagger", "rarity": 5 },
      { "name": "Deathly Dagger", "rarity": 5 },
      { "name": "Night Sky", "rarity": 5 },
      { "name": "Glimmer", "rarity": 5 },
      { "name": "Life and Death 1", "rarity": 5 },
      { "name": "Life and Death 2", "rarity": 5 },
      { "name": "Life and Death 3", "rarity": 5 },
      { "name": "Threaten Spd 1", "rarity": 5 },
      { "name": "Threaten Spd 2", "rarity": 5 },
      { "name": "Threaten Spd 3", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 17, "atk": 7, "spd": 9, "def": 6, "res": 5 },
      "level40": { "hp": [ 38, 41, 44 ], "atk": [ 23, 26, 30 ], "spd": [ 30, 33, 36 ], "def": [ 22, 25, 29 ], "res": [ 19, 22, 25 ] }
    },
    "rarity5": true,
    "colorType": "Neutral"
  },
  {
    "name": "Jagen",
    "title": "Veteran Knight",
    "weaponType": "Lance",
    "moveType": "Cavalry",
    "releaseDate": "Feb 02, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Jagen.png",
      "main": "img/heroes-main/Jagen.png"
    },
    "skills": [
      { "name": "Iron Lance", "rarity": 3 },
      { "name": "Steel Lance", "rarity": 3 },
      { "name": "Silver Lance", "rarity": 4 },
      { "name": "Silver Lance+", "rarity": 5 },
      { "name": "Holy Vestments", "rarity": 4 },
      { "name": "Aegis", "rarity": 4 },
      { "name": "Fury 1", "rarity": 3 },
      { "name": "Fury 2", "rarity": 4 },
      { "name": "Fury 3", "rarity": 5 },
      { "name": "Fortify Res 1", "rarity": 3 },
      { "name": "Fortify Res 2", "rarity": 3 },
      { "name": "Fortify Cavalry", "rarity": 4 }
    ],
    "stats": {
      "level1": { "hp": 20, "atk": 8, "spd": 7, "def": 8, "res": 11 },
      "level40": { "hp": [ 34, 37, 40 ], "atk": [ 24, 27, 31 ], "spd": [ 21, 24, 27 ], "def": [ 22, 25, 28 ], "res": [ 32, 35, 38 ] },
      "level1_4": { "hp": 19, "atk": 8, "spd": 6, "def": 7, "res": 11 },
      "level40_4": { "hp": [ 32, 35, 38 ], "atk": [ 23, 26, 29 ], "spd": [ 19, 22, 25 ], "def": [ 20, 23, 26 ], "res": [ 30, 33, 36 ] }
    },
    "rarity3": true,
    "rarity4": true,
    "colorType": "Blue"
  },
  {
    "name": "Jakob",
    "title": "Devoted Servant",
    "weaponType": "Dagger",
    "moveType": "Infantry",
    "releaseDate": "Feb 02, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Jakob.png",
      "main": "img/heroes-main/Jakob.png"
    },
    "skills": [
      { "name": "Iron Dagger", "rarity": 4 },
      { "name": "Steel Dagger", "rarity": 4 },
      { "name": "Silver Dagger", "rarity": 4 },
      { "name": "Silver Dagger+", "rarity": 5 },
      { "name": "Rally Resistance", "rarity": 4 },
      { "name": "Defense +1", "rarity": 4 },
      { "name": "Defense +2", "rarity": 4 },
      { "name": "Defense +3", "rarity": 4 },
      { "name": "Renewal 1", "rarity": 4 },
      { "name": "Renewal 2", "rarity": 4 },
      { "name": "Renewal 3", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 17, "atk": 7, "spd": 9, "def": 6, "res": 5 },
      "level40": { "hp": [ 35, 39, 42 ], "atk": [ 25, 29, 32 ], "spd": [ 27, 31, 34 ], "def": [ 22, 25, 29 ], "res": [ 21, 24, 28 ] },
      "level1_4": { "hp": 16, "atk": 7, "spd": 9, "def": 5, "res": 4 },
      "level40_4": { "hp": [ 33, 36, 39 ], "atk": [ 24, 27, 30 ], "spd": [ 26, 29, 32 ], "def": [ 20, 23, 26 ], "res": [ 19, 22, 25 ] }
    },
    "rarity4": true,
    "rarity5": true,
    "colorType": "Neutral"
  },
  {
    "name": "Jakob (Trick or Defeat!)",
    "title": "Devoted Monster",
    "weaponType": "Bow",
    "moveType": "Armored",
    "releaseDate": "Oct 30, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Jakob (Trick or Defeat!).png",
      "main": "img/heroes-main/Jakob (Trick or Defeat!).png"
    },
    "skills": [
      { "name": "Iron Bow", "rarity": 5 },
      { "name": "Steel Bow", "rarity": 5 },
      { "name": "Monstrous Bow", "rarity": 5 },
      { "name": "Monstrous Bow+", "rarity": 5 },
      { "name": "Glowing Ember", "rarity": 5 },
      { "name": "Ignis", "rarity": 5 },
      { "name": "Armored Blow 1", "rarity": 5 },
      { "name": "Bracing Blow 1", "rarity": 5 },
      { "name": "Bracing Blow 2", "rarity": 5 },
      { "name": "Wary Fighter 1", "rarity": 5 },
      { "name": "Wary Fighter 2", "rarity": 5 },
      { "name": "Wary Fighter 3", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 20, "atk": 9, "spd": 6, "def": 9, "res": 8 },
      "level40": { "hp": [ 38, 42, 45 ], "atk": [ 32, 35, 38 ], "spd": [ 20, 23, 26 ], "def": [ 30, 33, 36 ], "res": [ 29, 32, 35 ] }
    },
    "shortName": "Jakob",
    "rarity5": true,
    "colorType": "Neutral",
    "limited": true
  },
  {
    "name": "Jeorge",
    "title": "Perfect Shot",
    "weaponType": "Bow",
    "moveType": "Infantry",
    "releaseDate": "Feb 02, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Jeorge.png",
      "main": "img/heroes-main/Jeorge.png"
    },
    "skills": [
      { "name": "Iron Bow", "rarity": 4 },
      { "name": "Steel Bow", "rarity": 4 },
      { "name": "Silver Bow", "rarity": 4 },
      { "name": "Parthia", "rarity": 5 },
      { "name": "Rising Flame", "rarity": 4 },
      { "name": "Blazing Flame", "rarity": 4 },
      { "name": "Seal Atk 1", "rarity": 4 },
      { "name": "Seal Atk 2", "rarity": 4 },
      { "name": "Seal Atk 3", "rarity": 4 },
      { "name": "Spur Spd 1", "rarity": 4 },
      { "name": "Spur Spd 2", "rarity": 4 },
      { "name": "Spur Spd 3", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 18, "atk": 8, "spd": 8, "def": 5, "res": 5 },
      "level40": { "hp": [ 34, 37, 41 ], "atk": [ 29, 32, 35 ], "spd": [ 29, 32, 35 ], "def": [ 21, 24, 28 ], "res": [ 19, 22, 25 ] },
      "level1_4": { "hp": 17, "atk": 8, "spd": 8, "def": 4, "res": 4 },
      "level40_4": { "hp": [ 32, 35, 38 ], "atk": [ 27, 30, 33 ], "spd": [ 27, 30, 33 ], "def": [ 19, 22, 25 ], "res": [ 17, 20, 23 ] }
    },
    "rarity4": true,
    "rarity5": true,
    "colorType": "Neutral"
  },
  {
    "name": "Joshua",
    "title": "Tempest King",
    "weaponType": "Sword",
    "moveType": "Infantry",
    "releaseDate": "Nov 21, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Joshua.png",
      "main": "img/heroes-main/Joshua.png"
    },
    "skills": [
      { "name": "Iron Sword", "rarity": 4 },
      { "name": "Steel Sword", "rarity": 4 },
      { "name": "Slaying Edge", "rarity": 4 },
      { "name": "Audhulma", "rarity": 5 },
      { "name": "New Moon", "rarity": 4 },
      { "name": "Moonbow", "rarity": 4 },
      { "name": "Close Def 1", "rarity": 4 },
      { "name": "Close Def 2", "rarity": 4 },
      { "name": "Close Def 3", "rarity": 5 },
      { "name": "Windsweep 1", "rarity": 4 },
      { "name": "Windsweep 2", "rarity": 4 },
      { "name": "Windsweep 3", "rarity": 4 }
    ],
    "stats": {
      "level1": { "hp": 18, "atk": 7, "spd": 9, "def": 8, "res": 6 },
      "level40": { "hp": [ 36, 40, 43 ], "atk": [ 28, 31, 34 ], "spd": [ 32, 35, 38 ], "def": [ 26, 30, 33 ], "res": [ 24, 28, 31 ] },
      "level1_4": { "hp": 17, "atk": 6, "spd": 9, "def": 8, "res": 5 },
      "level40_4": { "hp": [ 34, 37, 40 ], "atk": [ 25, 28, 31 ], "spd": [ 30, 33, 36 ], "def": [ 25, 28, 31 ], "res": [ 22, 25, 28 ] }
    },
    "rarity4": true,
    "rarity5": true,
    "colorType": "Red",
    "ttReward": true
  },
  {
    "name": "Julia",
    "title": "Naga's Blood",
    "weaponType": "Tome",
    "moveType": "Infantry",
    "releaseDate": "Feb 15, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Julia.png",
      "main": "img/heroes-main/Julia.png"
    },
    "skills": [
      { "name": "Wind", "rarity": 5 },
      { "name": "Elwind", "rarity": 5 },
      { "name": "Rexcalibur", "rarity": 5 },
      { "name": "Naga", "rarity": 5 },
      { "name": "Dragon Gaze", "rarity": 5 },
      { "name": "Dragon Fang", "rarity": 5 },
      { "name": "Resistance +1", "rarity": 5 },
      { "name": "Resistance +2", "rarity": 5 },
      { "name": "Resistance +3", "rarity": 5 },
      { "name": "Breath of Life 1", "rarity": 5 },
      { "name": "Breath of Life 2", "rarity": 5 },
      { "name": "Breath of Life 3", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 16, "atk": 9, "spd": 7, "def": 4, "res": 8 },
      "level40": { "hp": [ 34, 38, 41 ], "atk": [ 32, 35, 38 ], "spd": [ 23, 26, 30 ], "def": [ 13, 17, 20 ], "res": [ 29, 32, 35 ] }
    },
    "rarity5": true,
    "colorType": "Green"
  },
  {
    "name": "Kagero",
    "title": "Honorable Ninja",
    "weaponType": "Dagger",
    "moveType": "Infantry",
    "releaseDate": "Feb 02, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Kagero.png",
      "main": "img/heroes-main/Kagero.png"
    },
    "skills": [
      { "name": "Iron Dagger", "rarity": 4 },
      { "name": "Steel Dagger", "rarity": 4 },
      { "name": "Poison Dagger", "rarity": 4 },
      { "name": "Poison Dagger+", "rarity": 5 },
      { "name": "Retribution", "rarity": 4 },
      { "name": "Reprisal", "rarity": 4 },
      { "name": "Warding Blow 1", "rarity": 4 },
      { "name": "Warding Blow 2", "rarity": 4 },
      { "name": "Warding Blow 3", "rarity": 5 },
      { "name": "Daggerbreaker 1", "rarity": 4 },
      { "name": "Daggerbreaker 2", "rarity": 4 },
      { "name": "Daggerbreaker 3", "rarity": 4 }
    ],
    "stats": {
      "level1": { "hp": 16, "atk": 9, "spd": 8, "def": 5, "res": 6 },
      "level40": { "hp": [ 28, 31, 34 ], "atk": [ 32, 35, 38 ], "spd": [ 29, 32, 35 ], "def": [ 19, 22, 25 ], "res": [ 24, 28, 31 ] },
      "level1_4": { "hp": 15, "atk": 9, "spd": 8, "def": 4, "res": 5 },
      "level40_4": { "hp": [ 26, 29, 32 ], "atk": [ 30, 33, 36 ], "spd": [ 27, 30, 33 ], "def": [ 17, 20, 23 ], "res": [ 22, 25, 28 ] }
    },
    "rarity4": true,
    "rarity5": true,
    "colorType": "Neutral"
  },
  {
    "name": "Karel",
    "title": "Sword Demon",
    "weaponType": "Sword",
    "moveType": "Infantry",
    "releaseDate": "Mar 14, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Karel.png",
      "main": "img/heroes-main/Karel.png"
    },
    "skills": [
      { "name": "Iron Sword", "rarity": 5 },
      { "name": "Steel Sword", "rarity": 5 },
      { "name": "Wo Dao", "rarity": 5 },
      { "name": "Wo Dao+", "rarity": 5 },
      { "name": "Retribution", "rarity": 5 },
      { "name": "Reprisal", "rarity": 5 },
      { "name": "Defiant Atk 1", "rarity": 5 },
      { "name": "Defiant Atk 2", "rarity": 5 },
      { "name": "Defiant Atk 3", "rarity": 5 },
      { "name": "Desperation 1", "rarity": 5 },
      { "name": "Desperation 2", "rarity": 5 },
      { "name": "Desperation 3", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 19, "atk": 8, "spd": 9, "def": 6, "res": 5 },
      "level40": { "hp": [ 44, 47, 50 ], "atk": [ 26, 30, 33 ], "spd": [ 32, 35, 38 ], "def": [ 22, 25, 29 ], "res": [ 17, 20, 23 ] }
    },
    "rarity5": true,
    "colorType": "Red"
  },
  {
    "name": "Katarina",
    "title": "Wayward One",
    "weaponType": "Tome",
    "moveType": "Infantry",
    "releaseDate": "Jun 14, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Katarina.png",
      "main": "img/heroes-main/Katarina.png"
    },
    "skills": [
      { "name": "Fire", "rarity": 5 },
      { "name": "Elfire", "rarity": 5 },
      { "name": "Rauðrowl", "rarity": 5 },
      { "name": "Rauðrowl+", "rarity": 5 },
      { "name": "Chilling Wind", "rarity": 5 },
      { "name": "Glacies", "rarity": 5 },
      { "name": "Death Blow 1", "rarity": 5 },
      { "name": "Swift Sparrow 1", "rarity": 5 },
      { "name": "Swift Sparrow 2", "rarity": 5 },
      { "name": "Atk Ploy 1", "rarity": 5 },
      { "name": "Atk Ploy 2", "rarity": 5 },
      { "name": "Atk Ploy 3", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 17, "atk": 6, "spd": 8, "def": 5, "res": 8 },
      "level40": { "hp": [ 31, 34, 37 ], "atk": [ 29, 32, 35 ], "spd": [ 31, 34, 37 ], "def": [ 12, 15, 19 ], "res": [ 29, 32, 35 ] }
    },
    "rarity5": true,
    "colorType": "Red"
  },
  {
    "name": "Klein",
    "title": "Silver Nobleman",
    "weaponType": "Bow",
    "moveType": "Infantry",
    "releaseDate": "Feb 27, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Klein.png",
      "main": "img/heroes-main/Klein.png"
    },
    "skills": [
      { "name": "Iron Bow", "rarity": 4 },
      { "name": "Steel Bow", "rarity": 4 },
      { "name": "Brave Bow", "rarity": 4 },
      { "name": "Brave Bow+", "rarity": 5 },
      { "name": "Chilling Wind", "rarity": 4 },
      { "name": "Glacies", "rarity": 4 },
      { "name": "Death Blow 1", "rarity": 4 },
      { "name": "Death Blow 2", "rarity": 4 },
      { "name": "Death Blow 3", "rarity": 4 },
      { "name": "Quick Riposte 1", "rarity": 4 },
      { "name": "Quick Riposte 2", "rarity": 4 },
      { "name": "Quick Riposte 3", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 18, "atk": 9, "spd": 7, "def": 5, "res": 5 },
      "level40": { "hp": [ 36, 40, 43 ], "atk": [ 27, 31, 34 ], "spd": [ 30, 33, 36 ], "def": [ 17, 20, 23 ], "res": [ 21, 24, 28 ] },
      "level1_4": { "hp": 17, "atk": 9, "spd": 7, "def": 4, "res": 4 },
      "level40_4": { "hp": [ 34, 37, 40 ], "atk": [ 26, 29, 32 ], "spd": [ 28, 31, 34 ], "def": [ 15, 18, 21 ], "res": [ 19, 22, 25 ] }
    },
    "rarity4": true,
    "rarity5": true,
    "colorType": "Neutral"
  },
  {
    "name": "Lachesis",
    "title": "Lionheart's Sister",
    "weaponType": "Staff",
    "moveType": "Infantry",
    "releaseDate": "Feb 27, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Lachesis.png",
      "main": "img/heroes-main/Lachesis.png"
    },
    "skills": [
      { "name": "Assault", "rarity": 4 },
      { "name": "Absorb", "rarity": 4 },
      { "name": "Absorb+", "rarity": 5 },
      { "name": "Heal", "rarity": 4 },
      { "name": "Mend", "rarity": 4 },
      { "name": "Physic", "rarity": 5 },
      { "name": "Imbue", "rarity": 4 },
      { "name": "Solid-Earth Balm", "rarity": 5 },
      { "name": "Spur Res 1", "rarity": 4 },
      { "name": "Spur Res 2", "rarity": 4 },
      { "name": "Spur Res 3", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 17, "atk": 6, "spd": 8, "def": 5, "res": 8 },
      "level40": { "hp": [ 35, 39, 42 ], "atk": [ 29, 32, 35 ], "spd": [ 22, 25, 28 ], "def": [ 19, 22, 25 ], "res": [ 26, 30, 33 ] },
      "level1_4": { "hp": 16, "atk": 5, "spd": 8, "def": 4, "res": 8 },
      "level40_4": { "hp": [ 33, 36, 39 ], "atk": [ 26, 29, 32 ], "spd": [ 21, 24, 27 ], "def": [ 17, 20, 23 ], "res": [ 25, 28, 31 ] }
    },
    "rarity4": true,
    "rarity5": true,
    "colorType": "Neutral"
  },
  {
    "name": "Laslow",
    "title": "Dancing Duelist",
    "weaponType": "Sword",
    "moveType": "Infantry",
    "releaseDate": "Feb 02, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Laslow.png",
      "main": "img/heroes-main/Laslow.png"
    },
    "skills": [
      { "name": "Iron Sword", "rarity": 3 },
      { "name": "Steel Sword", "rarity": 3 },
      { "name": "Silver Sword", "rarity": 4 },
      { "name": "Silver Sword+", "rarity": 5 },
      { "name": "Daylight", "rarity": 4 },
      { "name": "Noontime", "rarity": 4 },
      { "name": "Axebreaker 1", "rarity": 3 },
      { "name": "Axebreaker 2", "rarity": 3 },
      { "name": "Axebreaker 3", "rarity": 4 },
      { "name": "Hone Spd 1", "rarity": 3 },
      { "name": "Hone Spd 2", "rarity": 4 },
      { "name": "Hone Spd 3", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 20, "atk": 9, "spd": 7, "def": 6, "res": 5 },
      "level40": { "hp": [ 41, 44, 47 ], "atk": [ 32, 35, 38 ], "spd": [ 23, 26, 30 ], "def": [ 27, 30, 33 ], "res": [ 19, 22, 25 ] },
      "level1_4": { "hp": 19, "atk": 9, "spd": 7, "def": 5, "res": 4 },
      "level40_4": { "hp": [ 38, 41, 44 ], "atk": [ 30, 33, 36 ], "spd": [ 22, 25, 28 ], "def": [ 24, 27, 30 ], "res": [ 17, 20, 23 ] }
    },
    "rarity3": true,
    "rarity4": true,
    "colorType": "Red"
  },
  {
    "name": "Legion",
    "title": "Masked Maniac",
    "weaponType": "Axe",
    "moveType": "Infantry",
    "releaseDate": "Jun 16, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Legion.png",
      "main": "img/heroes-main/Legion.png"
    },
    "skills": [
      { "name": "Iron Axe", "rarity": 3 },
      { "name": "Steel Axe", "rarity": 3 },
      { "name": "Legion's Axe", "rarity": 4 },
      { "name": "Legion's Axe+", "rarity": 5 },
      { "name": "Retribution", "rarity": 4 },
      { "name": "Reprisal", "rarity": 4 },
      { "name": "Fury 1", "rarity": 3 },
      { "name": "Fury 2", "rarity": 4 },
      { "name": "Fury 3", "rarity": 5 },
      { "name": "Obstruct 1", "rarity": 3 },
      { "name": "Obstruct 2", "rarity": 3 },
      { "name": "Obstruct 3", "rarity": 4 }
    ],
    "stats": {
      "level1": { "hp": 20, "atk": 10, "spd": 9, "def": 5, "res": 3 },
      "level40": { "hp": [ 43, 46, 49 ], "atk": [ 33, 36, 39 ], "spd": [ 32, 35, 38 ], "def": [ 19, 22, 25 ], "res": [ 15, 18, 21 ] },
      "level1_4": { "hp": 19, "atk": 10, "spd": 9, "def": 4, "res": 2 },
      "level40_4": { "hp": [ 40, 43, 46 ], "atk": [ 31, 34, 37 ], "spd": [ 30, 33, 36 ], "def": [ 17, 20, 23 ], "res": [ 13, 16, 19 ] }
    },
    "rarity3": true,
    "rarity4": true,
    "colorType": "Green",
    "ghb": true
  },
  {
    "name": "Leo",
    "title": "Sorcerous Prince",
    "weaponType": "Tome",
    "moveType": "Cavalry",
    "releaseDate": "Feb 02, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Leo.png",
      "main": "img/heroes-main/Leo.png"
    },
    "skills": [
      { "name": "Flux", "rarity": 5 },
      { "name": "Ruin", "rarity": 5 },
      { "name": "Fenrir", "rarity": 5 },
      { "name": "Brynhildr", "rarity": 5 },
      { "name": "Rising Light", "rarity": 5 },
      { "name": "Blazing Light", "rarity": 5 },
      { "name": "Quick Riposte 1", "rarity": 5 },
      { "name": "Quick Riposte 2", "rarity": 5 },
      { "name": "Quick Riposte 3", "rarity": 5 },
      { "name": "Savage Blow 1", "rarity": 5 },
      { "name": "Savage Blow 2", "rarity": 5 },
      { "name": "Savage Blow 3", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 17, "atk": 7, "spd": 5, "def": 6, "res": 8 },
      "level40": { "hp": [ 35, 39, 42 ], "atk": [ 25, 29, 32 ], "spd": [ 19, 22, 25 ], "def": [ 22, 25, 29 ], "res": [ 26, 30, 33 ] }
    },
    "rarity5": true,
    "colorType": "Red"
  },
  {
    "name": "Leo (Nohrian Summer)",
    "title": "Seashore's Prince",
    "weaponType": "Tome",
    "moveType": "Infantry",
    "releaseDate": "Jul 28, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Leo (Nohrian Summer).png",
      "main": "img/heroes-main/Leo (Nohrian Summer).png"
    },
    "skills": [
      { "name": "Flux", "rarity": 5 },
      { "name": "Ruin", "rarity": 5 },
      { "name": "Tomato Tome", "rarity": 5 },
      { "name": "Tomato Tome+", "rarity": 5 },
      { "name": "Chilling Wind", "rarity": 5 },
      { "name": "Iceberg", "rarity": 5 },
      { "name": "Seal Res 1", "rarity": 5 },
      { "name": "Seal Res 2", "rarity": 5 },
      { "name": "Seal Res 3", "rarity": 5 },
      { "name": "Atk Ploy 1", "rarity": 5 },
      { "name": "Atk Ploy 2", "rarity": 5 },
      { "name": "Atk Ploy 3", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 18, "atk": 8, "spd": 5, "def": 6, "res": 7 },
      "level40": { "hp": [ 34, 37, 41 ], "atk": [ 29, 32, 35 ], "spd": [ 23, 27, 30 ], "def": [ 13, 16, 20 ], "res": [ 32, 35, 38 ] }
    },
    "shortName": "Leo",
    "rarity5": true,
    "colorType": "Red",
    "limited": true
  },
  {
    "name": "Leon",
    "title": "True of Heart",
    "weaponType": "Bow",
    "moveType": "Infantry",
    "releaseDate": "Jul 13, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Leon.png",
      "main": "img/heroes-main/Leon.png"
    },
    "skills": [
      { "name": "Iron Bow", "rarity": 4 },
      { "name": "Steel Bow", "rarity": 4 },
      { "name": "Slaying Bow", "rarity": 4 },
      { "name": "Slaying Bow+", "rarity": 5 },
      { "name": "Glowing Ember", "rarity": 4 },
      { "name": "Ignis", "rarity": 5 },
      { "name": "Speed +1", "rarity": 4 },
      { "name": "Speed +2", "rarity": 4 },
      { "name": "Speed +3", "rarity": 4 },
      { "name": "Guard 1", "rarity": 4 },
      { "name": "Guard 2", "rarity": 4 },
      { "name": "Guard 3", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 17, "atk": 8, "spd": 6, "def": 8, "res": 5 },
      "level40": { "hp": [ 35, 39, 42 ], "atk": [ 31, 34, 37 ], "spd": [ 27, 30, 33 ], "def": [ 26, 30, 33 ], "res": [ 12, 15, 19 ] },
      "level1_4": { "hp": 16, "atk": 8, "spd": 5, "def": 8, "res": 4 },
      "level40_4": { "hp": [ 33, 36, 39 ], "atk": [ 29, 32, 35 ], "spd": [ 24, 27, 30 ], "def": [ 25, 28, 31 ], "res": [ 11, 14, 17 ] }
    },
    "rarity4": true,
    "rarity5": true,
    "colorType": "Neutral"
  },
  {
    "name": "Lilina",
    "title": "Delightful Noble",
    "weaponType": "Tome",
    "moveType": "Infantry",
    "releaseDate": "Feb 02, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Lilina.png",
      "main": "img/heroes-main/Lilina.png"
    },
    "skills": [
      { "name": "Fire", "rarity": 4 },
      { "name": "Elfire", "rarity": 4 },
      { "name": "Bolganone", "rarity": 4 },
      { "name": "Bolganone+", "rarity": 5 },
      { "name": "Rising Flame", "rarity": 4 },
      { "name": "Growing Flame", "rarity": 4 },
      { "name": "Attack +1", "rarity": 4 },
      { "name": "Attack +2", "rarity": 4 },
      { "name": "Attack +3", "rarity": 5 },
      { "name": "Spur Atk 1", "rarity": 4 },
      { "name": "Spur Atk 2", "rarity": 4 },
      { "name": "Spur Atk 3", "rarity": 4 }
    ],
    "stats": {
      "level1": { "hp": 16, "atk": 9, "spd": 6, "def": 4, "res": 9 },
      "level40": { "hp": [ 32, 35, 39 ], "atk": [ 34, 37, 40 ], "spd": [ 22, 25, 29 ], "def": [ 16, 19, 22 ], "res": [ 27, 31, 34 ] },
      "level1_4": { "hp": 15, "atk": 9, "spd": 5, "def": 3, "res": 9 },
      "level40_4": { "hp": [ 30, 33, 36 ], "atk": [ 32, 35, 38 ], "spd": [ 20, 23, 26 ], "def": [ 14, 17, 20 ], "res": [ 26, 29, 32 ] }
    },
    "rarity4": true,
    "rarity5": true,
    "colorType": "Red"
  },
  {
    "name": "Linde",
    "title": "Light Mage",
    "weaponType": "Tome",
    "moveType": "Infantry",
    "releaseDate": "Feb 02, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Linde.png",
      "main": "img/heroes-main/Linde.png"
    },
    "skills": [
      { "name": "Thunder", "rarity": 5 },
      { "name": "Elthunder", "rarity": 5 },
      { "name": "Thoron", "rarity": 5 },
      { "name": "Aura", "rarity": 5 },
      { "name": "Ardent Sacrifice", "rarity": 5 },
      { "name": "Speed +1", "rarity": 5 },
      { "name": "Speed +2", "rarity": 5 },
      { "name": "Speed +3", "rarity": 5 },
      { "name": "Fortify Res 1", "rarity": 5 },
      { "name": "Fortify Res 2", "rarity": 5 },
      { "name": "Fortify Res 3", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 16, "atk": 9, "spd": 10, "def": 4, "res": 5 },
      "level40": { "hp": [ 32, 35, 39 ], "atk": [ 32, 35, 38 ], "spd": [ 33, 36, 39 ], "def": [ 11, 14, 18 ], "res": [ 23, 27, 30 ] }
    },
    "rarity5": true,
    "colorType": "Blue"
  },
  {
    "name": "Lissa",
    "title": "Sprightly Cleric",
    "weaponType": "Staff",
    "moveType": "Infantry",
    "releaseDate": "Feb 02, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Lissa.png",
      "main": "img/heroes-main/Lissa.png"
    },
    "skills": [
      { "name": "Assault", "rarity": 1 },
      { "name": "Gravity", "rarity": 3 },
      { "name": "Gravity+", "rarity": 5 },
      { "name": "Heal", "rarity": 1 },
      { "name": "Reconcile", "rarity": 3 },
      { "name": "Rehabilitate", "rarity": 4 },
      { "name": "Imbue", "rarity": 4 },
      { "name": "Kindled-Fire Balm", "rarity": 3 },
      { "name": "Renewal 1", "rarity": 3 },
      { "name": "Renewal 2", "rarity": 4 },
      { "name": "Renewal 3", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 17, "atk": 7, "spd": 6, "def": 6, "res": 8 },
      "level40": { "hp": [ 35, 39, 42 ], "atk": [ 23, 26, 30 ], "spd": [ 22, 25, 29 ], "def": [ 24, 28, 31 ], "res": [ 26, 30, 33 ] },
      "level1_4": { "hp": 16, "atk": 7, "spd": 5, "def": 5, "res": 8 },
      "level40_4": { "hp": [ 33, 36, 39 ], "atk": [ 22, 25, 28 ], "spd": [ 20, 23, 26 ], "def": [ 22, 25, 28 ], "res": [ 25, 28, 31 ] }
    },
    "rarity3": true,
    "rarity4": true,
    "colorType": "Neutral"
  },
  {
    "name": "Lissa (Winter's Envoy)",
    "title": "Pure Joy",
    "weaponType": "Axe",
    "moveType": "Armored",
    "releaseDate": "Dec 18, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Lissa (Winter's Envoy).png",
      "main": "img/heroes-main/Lissa (Winter's Envoy).png"
    },
    "skills": [
      { "name": "Iron Axe", "rarity": 5 },
      { "name": "Steel Axe", "rarity": 5 },
      { "name": "Handbell", "rarity": 5 },
      { "name": "Handbell+", "rarity": 5 },
      { "name": "Glowing Ember", "rarity": 5 },
      { "name": "Bonfire", "rarity": 5 },
      { "name": "Bold Fighter 1", "rarity": 5 },
      { "name": "Bold Fighter 2", "rarity": 5 },
      { "name": "Bold Fighter 3", "rarity": 5 },
      { "name": "Fortify Def 1", "rarity": 5 },
      { "name": "Fortify Def 2", "rarity": 5 },
      { "name": "Fortify Armor", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 21, "atk": 9, "spd": 8, "def": 9, "res": 8 },
      "level40": { "hp": [ 39, 43, 46 ], "atk": [ 30, 33, 36 ], "spd": [ 26, 30, 33 ], "def": [ 32, 35, 38 ], "res": [ 31, 34, 37 ] }
    },
    "shortName": "Lissa",
    "rarity5": true,
    "colorType": "Green",
    "limited": true
  },
  {
    "name": "Lloyd",
    "title": "White Wolf",
    "weaponType": "Sword",
    "moveType": "Infantry",
    "releaseDate": "May 19, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Lloyd.png",
      "main": "img/heroes-main/Lloyd.png"
    },
    "skills": [
      { "name": "Iron Sword", "rarity": 3 },
      { "name": "Steel Sword", "rarity": 3 },
      { "name": "Silver Sword", "rarity": 4 },
      { "name": "Regal Blade", "rarity": 5 },
      { "name": "Chilling Wind", "rarity": 4 },
      { "name": "Iceberg", "rarity": 4 },
      { "name": "Pass 1", "rarity": 3 },
      { "name": "Pass 2", "rarity": 3 },
      { "name": "Pass 3", "rarity": 4 },
      { "name": "Threaten Atk 1", "rarity": 3 },
      { "name": "Threaten Atk 2", "rarity": 4 },
      { "name": "Threaten Atk 3", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 17, "atk": 8, "spd": 9, "def": 5, "res": 8 },
      "level40": { "hp": [ 38, 41, 44 ], "atk": [ 29, 32, 35 ], "spd": [ 32, 35, 38 ], "def": [ 17, 20, 23 ], "res": [ 26, 30, 33 ] },
      "level1_4": { "hp": 16, "atk": 8, "spd": 9, "def": 4, "res": 7 },
      "level40_4": { "hp": [ 35, 38, 41 ], "atk": [ 27, 30, 33 ], "spd": [ 30, 33, 36 ], "def": [ 15, 18, 21 ], "res": [ 24, 27, 30 ] }
    },
    "rarity3": true,
    "rarity4": true,
    "colorType": "Red",
    "ghb": true
  },
  {
    "name": "Lon'qu",
    "title": "Solitary Blade",
    "weaponType": "Sword",
    "moveType": "Infantry",
    "releaseDate": "Feb 02, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Lon'qu.png",
      "main": "img/heroes-main/Lon'qu.png"
    },
    "skills": [
      { "name": "Iron Sword", "rarity": 3 },
      { "name": "Steel Sword", "rarity": 3 },
      { "name": "Killing Edge", "rarity": 4 },
      { "name": "Killing Edge+", "rarity": 5 },
      { "name": "Night Sky", "rarity": 4 },
      { "name": "Glimmer", "rarity": 4 },
      { "name": "Speed +1", "rarity": 3 },
      { "name": "Speed +2", "rarity": 4 },
      { "name": "Speed +3", "rarity": 5 },
      { "name": "Vantage 1", "rarity": 3 },
      { "name": "Vantage 2", "rarity": 3 },
      { "name": "Vantage 3", "rarity": 4 }
    ],
    "stats": {
      "level1": { "hp": 19, "atk": 7, "spd": 11, "def": 5, "res": 5 },
      "level40": { "hp": [ 42, 45, 48 ], "atk": [ 25, 29, 32 ], "spd": [ 36, 39, 42 ], "def": [ 19, 22, 25 ], "res": [ 19, 22, 25 ] },
      "level1_4": { "hp": 18, "atk": 7, "spd": 11, "def": 4, "res": 4 },
      "level40_4": { "hp": [ 39, 42, 45 ], "atk": [ 24, 27, 30 ], "spd": [ 34, 37, 40 ], "def": [ 17, 20, 23 ], "res": [ 17, 20, 23 ] }
    },
    "rarity3": true,
    "rarity4": true,
    "colorType": "Red"
  },
  {
    "name": "Lucina",
    "title": "Future Witness",
    "weaponType": "Sword",
    "moveType": "Infantry",
    "releaseDate": "Feb 02, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Lucina.png",
      "main": "img/heroes-main/Lucina.png"
    },
    "skills": [
      { "name": "Iron Sword", "rarity": 5 },
      { "name": "Steel Sword", "rarity": 5 },
      { "name": "Silver Sword", "rarity": 5 },
      { "name": "Falchion", "rarity": 5 },
      { "name": "New Moon", "rarity": 5 },
      { "name": "Luna", "rarity": 5 },
      { "name": "Aether", "rarity": 5 },
      { "name": "Defiant Spd 1", "rarity": 5 },
      { "name": "Defiant Spd 2", "rarity": 5 },
      { "name": "Defiant Spd 3", "rarity": 5 },
      { "name": "Spur Atk 1", "rarity": 5 },
      { "name": "Spur Atk 2", "rarity": 5 },
      { "name": "Spur Atk 3", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 19, "atk": 8, "spd": 10, "def": 6, "res": 4 },
      "level40": { "hp": [ 40, 43, 46 ], "atk": [ 31, 34, 37 ], "spd": [ 33, 36, 39 ], "def": [ 22, 25, 29 ], "res": [ 16, 19, 22 ] }
    },
    "rarity5": true,
    "colorType": "Red"
  },
  {
    "name": "Lucina (Brave Heroes)",
    "title": "Brave Princess",
    "weaponType": "Lance",
    "moveType": "Infantry",
    "releaseDate": "Aug 31, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Lucina (Brave Heroes).png",
      "main": "img/heroes-main/Lucina (Brave Heroes).png"
    },
    "skills": [
      { "name": "Iron Lance", "rarity": 5 },
      { "name": "Steel Lance", "rarity": 5 },
      { "name": "Silver Lance", "rarity": 5 },
      { "name": "Geirskögul", "rarity": 5 },
      { "name": "Daylight", "rarity": 5 },
      { "name": "Sol", "rarity": 5 },
      { "name": "Aether", "rarity": 5 },
      { "name": "Armored Blow 1", "rarity": 5 },
      { "name": "Sturdy Blow 1", "rarity": 5 },
      { "name": "Sturdy Blow 2", "rarity": 5 },
      { "name": "Spur Spd 1", "rarity": 5 },
      { "name": "Drive Spd 1", "rarity": 5 },
      { "name": "Drive Spd 2", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 17, "atk": 8, "spd": 10, "def": 8, "res": 4 },
      "level40": { "hp": [ 38, 41, 44 ], "atk": [ 31, 34, 37 ], "spd": [ 33, 36, 39 ], "def": [ 24, 27, 31 ], "res": [ 16, 19, 22 ] }
    },
    "shortName": "Lucina",
    "rarity5": true,
    "colorType": "Blue"
  },
  {
    "name": "Lucina (Spring Festival)",
    "title": "Spring Exalt",
    "weaponType": "Tome",
    "moveType": "Infantry",
    "releaseDate": "Mar 30, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Lucina (Spring Festival).png",
      "main": "img/heroes-main/Lucina (Spring Festival).png"
    },
    "skills": [
      { "name": "Thunder", "rarity": 5 },
      { "name": "Elthunder", "rarity": 5 },
      { "name": "Blue Egg", "rarity": 5 },
      { "name": "Blue Egg+", "rarity": 5 },
      { "name": "Rally Speed", "rarity": 5 },
      { "name": "Darting Blow 1", "rarity": 5 },
      { "name": "Swift Sparrow 1", "rarity": 5 },
      { "name": "Swift Sparrow 2", "rarity": 5 },
      { "name": "Seal Res 1", "rarity": 5 },
      { "name": "Seal Res 2", "rarity": 5 },
      { "name": "Seal Res 3", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 16, "atk": 7, "spd": 10, "def": 5, "res": 6 },
      "level40": { "hp": [ 32, 35, 39 ], "atk": [ 25, 29, 32 ], "spd": [ 33, 36, 39 ], "def": [ 19, 22, 25 ], "res": [ 22, 25, 29 ] }
    },
    "shortName": "Lucina",
    "rarity5": true,
    "colorType": "Blue",
    "limited": true
  },
  {
    "name": "Lucius",
    "title": "The Light",
    "weaponType": "Staff",
    "moveType": "Infantry",
    "releaseDate": "Mar 14, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Lucius.png",
      "main": "img/heroes-main/Lucius.png"
    },
    "skills": [
      { "name": "Assault", "rarity": 4 },
      { "name": "Pain", "rarity": 4 },
      { "name": "Pain+", "rarity": 5 },
      { "name": "Heal", "rarity": 4 },
      { "name": "Reconcile", "rarity": 4 },
      { "name": "Martyr", "rarity": 5 },
      { "name": "Imbue", "rarity": 4 },
      { "name": "Miracle", "rarity": 5 },
      { "name": "HP +3", "rarity": 4 },
      { "name": "HP +4", "rarity": 4 },
      { "name": "HP +5", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 18, "atk": 6, "spd": 8, "def": 3, "res": 9 },
      "level40": { "hp": [ 34, 37, 41 ], "atk": [ 29, 32, 35 ], "spd": [ 26, 30, 33 ], "def": [ 10, 13, 17 ], "res": [ 32, 35, 38 ] },
      "level1_4": { "hp": 17, "atk": 5, "spd": 8, "def": 2, "res": 9 },
      "level40_4": { "hp": [ 32, 35, 38 ], "atk": [ 26, 29, 32 ], "spd": [ 25, 28, 31 ], "def": [ 9, 12, 15 ], "res": [ 30, 33, 36 ] }
    },
    "rarity4": true,
    "rarity5": true,
    "colorType": "Neutral"
  },
  {
    "name": "Lukas",
    "title": "Sharp Soldier",
    "weaponType": "Lance",
    "moveType": "Infantry",
    "releaseDate": "Apr 14, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Lukas.png",
      "main": "img/heroes-main/Lukas.png"
    },
    "skills": [
      { "name": "Iron Lance", "rarity": 4 },
      { "name": "Steel Lance", "rarity": 4 },
      { "name": "Killer Lance", "rarity": 4 },
      { "name": "Killer Lance+", "rarity": 5 },
      { "name": "Holy Vestments", "rarity": 4 },
      { "name": "Sacred Cowl", "rarity": 4 },
      { "name": "Fortress Def 1", "rarity": 4 },
      { "name": "Fortress Def 2", "rarity": 4 },
      { "name": "Fortress Def 3", "rarity": 5 },
      { "name": "Obstruct 1", "rarity": 4 },
      { "name": "Obstruct 2", "rarity": 4 },
      { "name": "Obstruct 3", "rarity": 4 }
    ],
    "stats": {
      "level1": { "hp": 19, "atk": 9, "spd": 5, "def": 10, "res": 4 },
      "level40": { "hp": [ 42, 45, 48 ], "atk": [ 32, 35, 38 ], "spd": [ 19, 22, 25 ], "def": [ 35, 38, 41 ], "res": [ 13, 17, 20 ] },
      "level1_4": { "hp": 18, "atk": 9, "spd": 4, "def": 10, "res": 3 },
      "level40_4": { "hp": [ 39, 42, 45 ], "atk": [ 30, 33, 36 ], "spd": [ 17, 20, 23 ], "def": [ 33, 36, 39 ], "res": [ 12, 15, 18 ] }
    },
    "rarity4": true,
    "rarity5": true,
    "colorType": "Blue"
  },
  {
    "name": "Luke",
    "title": "Rowdy Squire",
    "weaponType": "Sword",
    "moveType": "Cavalry",
    "releaseDate": "Jun 14, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Luke.png",
      "main": "img/heroes-main/Luke.png"
    },
    "skills": [
      { "name": "Iron Sword", "rarity": 5 },
      { "name": "Steel Sword", "rarity": 5 },
      { "name": "Brave Sword", "rarity": 5 },
      { "name": "Brave Sword+", "rarity": 5 },
      { "name": "Glowing Ember", "rarity": 5 },
      { "name": "Bonfire", "rarity": 5 },
      { "name": "Fire Boost 1", "rarity": 5 },
      { "name": "Fire Boost 2", "rarity": 5 },
      { "name": "Fire Boost 3", "rarity": 5 },
      { "name": "Panic Ploy 1", "rarity": 5 },
      { "name": "Panic Ploy 2", "rarity": 5 },
      { "name": "Panic Ploy 3", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 19, "atk": 8, "spd": 6, "def": 8, "res": 5 },
      "level40": { "hp": [ 40, 43, 46 ], "atk": [ 31, 34, 37 ], "spd": [ 24, 28, 31 ], "def": [ 26, 30, 33 ], "res": [ 17, 20, 23 ] }
    },
    "rarity5": true,
    "colorType": "Red"
  },
  {
    "name": "Lute",
    "title": "Prodigy",
    "weaponType": "Tome",
    "moveType": "Infantry",
    "releaseDate": "Nov 15, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Lute.png",
      "main": "img/heroes-main/Lute.png"
    },
    "skills": [
      { "name": "Thunder", "rarity": 5 },
      { "name": "Elthunder", "rarity": 5 },
      { "name": "Thoron", "rarity": 5 },
      { "name": "Weirding Tome", "rarity": 5 },
      { "name": "Rally Attack", "rarity": 5 },
      { "name": "Rally Attack Resistance", "rarity": 5 },
      { "name": "Resistance +1", "rarity": 5 },
      { "name": "HP Res 1", "rarity": 5 },
      { "name": "HP Res 2", "rarity": 5 },
      { "name": "Res Ploy 1", "rarity": 5 },
      { "name": "Res Ploy 2", "rarity": 5 },
      { "name": "Res Ploy 3", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 16, "atk": 10, "spd": 8, "def": 3, "res": 8 },
      "level40": { "hp": [ 30, 33, 36 ], "atk": [ 33, 36, 39 ], "spd": [ 29, 32, 35 ], "def": [ 12, 16, 19 ], "res": [ 31, 34, 37 ] }
    },
    "rarity5": true,
    "colorType": "Blue"
  },
  {
    "name": "Lyn",
    "title": "Lady of the Plains",
    "weaponType": "Sword",
    "moveType": "Infantry",
    "releaseDate": "Feb 02, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Lyn.png",
      "main": "img/heroes-main/Lyn.png"
    },
    "skills": [
      { "name": "Iron Sword", "rarity": 5 },
      { "name": "Steel Sword", "rarity": 5 },
      { "name": "Silver Sword", "rarity": 5 },
      { "name": "Sol Katti", "rarity": 5 },
      { "name": "Night Sky", "rarity": 5 },
      { "name": "Astra", "rarity": 5 },
      { "name": "Galeforce", "rarity": 5 },
      { "name": "Defiant Atk 1", "rarity": 5 },
      { "name": "Defiant Atk 2", "rarity": 5 },
      { "name": "Defiant Atk 3", "rarity": 5 },
      { "name": "Spur Spd 1", "rarity": 5 },
      { "name": "Spur Spd 2", "rarity": 5 },
      { "name": "Spur Spd 3", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 18, "atk": 6, "spd": 11, "def": 7, "res": 5 },
      "level40": { "hp": [ 34, 37, 41 ], "atk": [ 24, 28, 31 ], "spd": [ 34, 37, 40 ], "def": [ 23, 26, 30 ], "res": [ 26, 29, 32 ] }
    },
    "rarity5": true,
    "colorType": "Red"
  },
  {
    "name": "Lyn (Brave Heroes)",
    "title": "Brave Lady",
    "weaponType": "Bow",
    "moveType": "Cavalry",
    "releaseDate": "Aug 31, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Lyn (Brave Heroes).png",
      "main": "img/heroes-main/Lyn (Brave Heroes).png"
    },
    "skills": [
      { "name": "Iron Bow", "rarity": 5 },
      { "name": "Steel Bow", "rarity": 5 },
      { "name": "Silver Bow", "rarity": 5 },
      { "name": "Mulagir", "rarity": 5 },
      { "name": "Dragon Gaze", "rarity": 5 },
      { "name": "Draconic Aura", "rarity": 5 },
      { "name": "Death Blow 1", "rarity": 5 },
      { "name": "Swift Sparrow 1", "rarity": 5 },
      { "name": "Swift Sparrow 2", "rarity": 5 },
      { "name": "Sacae's Blessing", "rarity": 5 },
      { "name": "Atk Smoke 1", "rarity": 5 },
      { "name": "Atk Smoke 2", "rarity": 5 },
      { "name": "Atk Smoke 3", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 16, "atk": 7, "spd": 9, "def": 5, "res": 6 },
      "level40": { "hp": [ 32, 35, 39 ], "atk": [ 30, 33, 36 ], "spd": [ 32, 35, 38 ], "def": [ 14, 18, 21 ], "res": [ 24, 28, 31 ] }
    },
    "shortName": "Lyn",
    "rarity5": true,
    "colorType": "Neutral"
  },
  {
    "name": "Lyn (Bridal Blessings)",
    "title": "Bride of the Plains",
    "weaponType": "Staff",
    "moveType": "Infantry",
    "releaseDate": "May 30, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Lyn (Bridal Blessings).png",
      "main": "img/heroes-main/Lyn (Bridal Blessings).png"
    },
    "skills": [
      { "name": "Assault", "rarity": 5 },
      { "name": "Candlelight", "rarity": 5 },
      { "name": "Candlelight+", "rarity": 5 },
      { "name": "Heal", "rarity": 5 },
      { "name": "Reconcile", "rarity": 5 },
      { "name": "Rehabilitate", "rarity": 5 },
      { "name": "Imbue", "rarity": 5 },
      { "name": "Swift-Winds Balm", "rarity": 5 },
      { "name": "Dazzling Staff 1", "rarity": 5 },
      { "name": "Dazzling Staff 2", "rarity": 5 },
      { "name": "Dazzling Staff 3", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 17, "atk": 6, "spd": 10, "def": 6, "res": 5 },
      "level40": { "hp": [ 35, 39, 42 ], "atk": [ 24, 28, 31 ], "spd": [ 31, 34, 37 ], "def": [ 20, 23, 26 ], "res": [ 21, 24, 28 ] }
    },
    "shortName": "Lyn",
    "rarity5": true,
    "colorType": "Neutral",
    "limited": true
  },
  {
    "name": "Mae",
    "title": "Bundle of Energy",
    "weaponType": "Tome",
    "moveType": "Infantry",
    "releaseDate": "May 15, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Mae.png",
      "main": "img/heroes-main/Mae.png"
    },
    "skills": [
      { "name": "Thunder", "rarity": 4 },
      { "name": "Elthunder", "rarity": 4 },
      { "name": "Blárowl", "rarity": 4 },
      { "name": "Blárowl+", "rarity": 5 },
      { "name": "Draw Back", "rarity": 4 },
      { "name": "Desperation 1", "rarity": 4 },
      { "name": "Desperation 2", "rarity": 4 },
      { "name": "Desperation 3", "rarity": 5 },
      { "name": "B Tome Exp. 1", "rarity": 4 },
      { "name": "B Tome Exp. 2", "rarity": 4 },
      { "name": "B Tome Exp. 3", "rarity": 4 }
    ],
    "stats": {
      "level1": { "hp": 16, "atk": 10, "spd": 7, "def": 3, "res": 8 },
      "level40": { "hp": [ 32, 35, 39 ], "atk": [ 33, 36, 39 ], "spd": [ 28, 31, 34 ], "def": [ 12, 16, 19 ], "res": [ 26, 30, 33 ] },
      "level1_4": { "hp": 15, "atk": 10, "spd": 6, "def": 2, "res": 8 },
      "level40_4": { "hp": [ 30, 33, 36 ], "atk": [ 31, 34, 37 ], "spd": [ 25, 28, 31 ], "def": [ 11, 14, 17 ], "res": [ 25, 28, 31 ] }
    },
    "rarity4": true,
    "rarity5": true,
    "colorType": "Blue"
  },
  {
    "name": "Maria",
    "title": "Minerva's Sister",
    "weaponType": "Staff",
    "moveType": "Infantry",
    "releaseDate": "Feb 02, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Maria.png",
      "main": "img/heroes-main/Maria.png"
    },
    "skills": [
      { "name": "Assault", "rarity": 4 },
      { "name": "Panic", "rarity": 4 },
      { "name": "Panic+", "rarity": 5 },
      { "name": "Heal", "rarity": 4 },
      { "name": "Mend", "rarity": 4 },
      { "name": "Physic", "rarity": 5 },
      { "name": "Imbue", "rarity": 4 },
      { "name": "Miracle", "rarity": 5 },
      { "name": "Fortify Res 1", "rarity": 4 },
      { "name": "Fortify Res 2", "rarity": 4 },
      { "name": "Fortify Res 3", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 17, "atk": 5, "spd": 8, "def": 4, "res": 10 },
      "level40": { "hp": [ 33, 36, 40 ], "atk": [ 23, 27, 30 ], "spd": [ 31, 34, 37 ], "def": [ 16, 19, 22 ], "res": [ 28, 32, 35 ] },
      "level1_4": { "hp": 16, "atk": 4, "spd": 8, "def": 3, "res": 10 },
      "level40_4": { "hp": [ 31, 34, 37 ], "atk": [ 21, 24, 27 ], "spd": [ 29, 32, 35 ], "def": [ 14, 17, 20 ], "res": [ 27, 30, 33 ] }
    },
    "rarity4": true,
    "rarity5": true,
    "colorType": "Neutral"
  },
  {
    "name": "Marth",
    "title": "Altean Prince",
    "weaponType": "Sword",
    "moveType": "Infantry",
    "releaseDate": "Feb 02, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Marth.png",
      "main": "img/heroes-main/Marth.png"
    },
    "skills": [
      { "name": "Iron Sword", "rarity": 4 },
      { "name": "Steel Sword", "rarity": 4 },
      { "name": "Silver Sword", "rarity": 4 },
      { "name": "Falchion", "rarity": 5 },
      { "name": "Pivot", "rarity": 4 },
      { "name": "Escape Route 1", "rarity": 4 },
      { "name": "Escape Route 2", "rarity": 4 },
      { "name": "Escape Route 3", "rarity": 5 },
      { "name": "Spur Spd 1", "rarity": 4 },
      { "name": "Spur Spd 2", "rarity": 4 },
      { "name": "Spur Spd 3", "rarity": 4 }
    ],
    "stats": {
      "level1": { "hp": 19, "atk": 7, "spd": 8, "def": 7, "res": 6 },
      "level40": { "hp": [ 37, 41, 44 ], "atk": [ 28, 31, 34 ], "spd": [ 31, 34, 37 ], "def": [ 25, 29, 32 ], "res": [ 20, 23, 26 ] },
      "level1_4": { "hp": 18, "atk": 7, "spd": 8, "def": 6, "res": 5 },
      "level40_4": { "hp": [ 35, 38, 41 ], "atk": [ 26, 29, 32 ], "spd": [ 29, 32, 35 ], "def": [ 23, 26, 29 ], "res": [ 18, 21, 24 ] }
    },
    "rarity4": true,
    "rarity5": true,
    "colorType": "Red"
  },
  {
    "name": "Marth (Masked)",
    "title": "Enigmatic Blade",
    "weaponType": "Sword",
    "moveType": "Infantry",
    "releaseDate": "Jun 08, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Marth (Masked).png",
      "main": "img/heroes-main/Marth (Masked).png"
    },
    "skills": [
      { "name": "Iron Sword", "rarity": 4 },
      { "name": "Steel Sword", "rarity": 4 },
      { "name": "Silver Sword", "rarity": 4 },
      { "name": "Falchion", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 19, "atk": 8, "spd": 10, "def": 6, "res": 4 },
      "level40": { "hp": [ 40, 43, 46 ], "atk": [ 31, 34, 37 ], "spd": [ 33, 36, 39 ], "def": [ 22, 25, 29 ], "res": [ 16, 19, 22 ] },
      "level1_4": { "hp": 18, "atk": 8, "spd": 10, "def": 5, "res": 3 },
      "level40_4": { "hp": [ 37, 40, 43 ], "atk": [ 29, 32, 35 ], "spd": [ 31, 34, 37 ], "def": [ 20, 23, 26 ], "res": [ 14, 17, 20 ] }
    },
    "shortName": "Marth",
    "rarity4": true,
    "rarity5": true,
    "colorType": "Red",
    "ttReward": true
  },
  {
    "name": "Mathilda",
    "title": "Legendary Knight",
    "weaponType": "Lance",
    "moveType": "Cavalry",
    "releaseDate": "Jul 13, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Mathilda.png",
      "main": "img/heroes-main/Mathilda.png"
    },
    "skills": [
      { "name": "Iron Lance", "rarity": 4 },
      { "name": "Steel Lance", "rarity": 4 },
      { "name": "Ridersbane", "rarity": 4 },
      { "name": "Ridersbane+", "rarity": 5 },
      { "name": "Rally Resistance", "rarity": 4 },
      { "name": "Cancel Affinity 1", "rarity": 4 },
      { "name": "Cancel Affinity 2", "rarity": 4 },
      { "name": "Cancel Affinity 3", "rarity": 5 },
      { "name": "Hone Atk 1", "rarity": 4 },
      { "name": "Hone Atk 2", "rarity": 4 },
      { "name": "Hone Atk 3", "rarity": 4 }
    ],
    "stats": {
      "level1": { "hp": 16, "atk": 7, "spd": 8, "def": 7, "res": 8 },
      "level40": { "hp": [ 32, 35, 39 ], "atk": [ 25, 29, 32 ], "spd": [ 29, 32, 35 ], "def": [ 21, 24, 27 ], "res": [ 31, 34, 37 ] },
      "level1_4": { "hp": 15, "atk": 6, "spd": 8, "def": 6, "res": 8 },
      "level40_4": { "hp": [ 30, 33, 36 ], "atk": [ 23, 26, 29 ], "spd": [ 27, 30, 33 ], "def": [ 19, 22, 25 ], "res": [ 29, 32, 35 ] }
    },
    "rarity4": true,
    "rarity5": true,
    "colorType": "Blue"
  },
  {
    "name": "Matthew",
    "title": "Faithful Spy",
    "weaponType": "Dagger",
    "moveType": "Infantry",
    "releaseDate": "Feb 02, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Matthew.png",
      "main": "img/heroes-main/Matthew.png"
    },
    "skills": [
      { "name": "Iron Dagger", "rarity": 2 },
      { "name": "Steel Dagger", "rarity": 3 },
      { "name": "Rogue Dagger", "rarity": 4 },
      { "name": "Rogue Dagger+", "rarity": 5 },
      { "name": "Reciprocal Aid", "rarity": 4 },
      { "name": "Poison Strike 1", "rarity": 3 },
      { "name": "Poison Strike 2", "rarity": 4 },
      { "name": "Poison Strike 3", "rarity": 5 },
      { "name": "Hone Spd 1", "rarity": 3 },
      { "name": "Hone Spd 2", "rarity": 2 },
      { "name": "Hone Spd 3", "rarity": 4 }
    ],
    "stats": {
      "level1": { "hp": 17, "atk": 6, "spd": 10, "def": 6, "res": 5 },
      "level40": { "hp": [ 38, 41, 44 ], "atk": [ 22, 25, 29 ], "spd": [ 31, 34, 37 ], "def": [ 27, 30, 33 ], "res": [ 14, 18, 21 ] },
      "level1_4": { "hp": 16, "atk": 6, "spd": 10, "def": 5, "res": 4 },
      "level40_4": { "hp": [ 35, 38, 41 ], "atk": [ 21, 24, 27 ], "spd": [ 29, 32, 35 ], "def": [ 24, 27, 30 ], "res": [ 13, 16, 19 ] }
    },
    "rarity3": true,
    "rarity4": true,
    "colorType": "Neutral"
  },
  {
    "name": "Merric",
    "title": "Wind Mage",
    "weaponType": "Tome",
    "moveType": "Infantry",
    "releaseDate": "Feb 02, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Merric.png",
      "main": "img/heroes-main/Merric.png"
    },
    "skills": [
      { "name": "Wind", "rarity": 4 },
      { "name": "Elwind", "rarity": 4 },
      { "name": "Rexcalibur", "rarity": 4 },
      { "name": "Excalibur", "rarity": 5 },
      { "name": "Rising Wind", "rarity": 4 },
      { "name": "Growing Wind", "rarity": 4 },
      { "name": "HP +3", "rarity": 4 },
      { "name": "HP +4", "rarity": 4 },
      { "name": "HP +5", "rarity": 5 },
      { "name": "Spur Res 1", "rarity": 4 },
      { "name": "Spur Res 2", "rarity": 4 },
      { "name": "Spur Res 3", "rarity": 4 }
    ],
    "stats": {
      "level1": { "hp": 19, "atk": 7, "spd": 8, "def": 6, "res": 4 },
      "level40": { "hp": [ 40, 43, 46 ], "atk": [ 23, 26, 30 ], "spd": [ 29, 32, 35 ], "def": [ 24, 28, 31 ], "res": [ 16, 19, 22 ] },
      "level1_4": { "hp": 18, "atk": 7, "spd": 8, "def": 5, "res": 3 },
      "level40_4": { "hp": [ 37, 40, 43 ], "atk": [ 22, 25, 28 ], "spd": [ 27, 30, 33 ], "def": [ 22, 25, 28 ], "res": [ 14, 17, 20 ] }
    },
    "rarity4": true,
    "rarity5": true,
    "colorType": "Green"
  },
  {
    "name": "Mia",
    "title": "Lady of Blades",
    "weaponType": "Sword",
    "moveType": "Infantry",
    "releaseDate": "Nov 15, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Mia.png",
      "main": "img/heroes-main/Mia.png"
    },
    "skills": [
      { "name": "Iron Sword", "rarity": 5 },
      { "name": "Steel Sword", "rarity": 5 },
      { "name": "Wo Dao", "rarity": 5 },
      { "name": "Resolute Blade", "rarity": 5 },
      { "name": "New Moon", "rarity": 5 },
      { "name": "Luna", "rarity": 5 },
      { "name": "Flashing Blade 1", "rarity": 5 },
      { "name": "Flashing Blade 2", "rarity": 5 },
      { "name": "Flashing Blade 3", "rarity": 5 },
      { "name": "Vantage 1", "rarity": 5 },
      { "name": "Vantage 2", "rarity": 5 },
      { "name": "Vantage 3", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 16, "atk": 8, "spd": 12, "def": 6, "res": 6 },
      "level40": { "hp": [ 34, 38, 41 ], "atk": [ 29, 32, 35 ], "spd": [ 37, 40, 43 ], "def": [ 24, 28, 31 ], "res": [ 22, 25, 29 ] }
    },
    "rarity5": true,
    "colorType": "Red"
  },
  {
    "name": "Micaiah",
    "title": "Priestess of Dawn",
    "weaponType": "Tome",
    "moveType": "Infantry",
    "releaseDate": "Jan 12, 2018",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Micaiah.png",
      "main": "img/heroes-main/Micaiah.png"
    },
    "skills": [
      { "name": "Light", "rarity": 5 },
      { "name": "Ellight", "rarity": 5 },
      { "name": "Shine", "rarity": 5 },
      { "name": "Thani", "rarity": 5 },
      { "name": "Ardent Sacrifice", "rarity": 5 },
      { "name": "Sacrifice", "rarity": 5 },
      { "name": "Distant Def 1", "rarity": 5 },
      { "name": "Distant Def 2", "rarity": 5 },
      { "name": "Distant Def 3", "rarity": 5 },
      { "name": "Guard 1", "rarity": 5 },
      { "name": "Guard 2", "rarity": 5 },
      { "name": "Guard 3", "rarity": 5 },
      { "name": "Spur Atk 1", "rarity": 5 },
      { "name": "Drive Atk 1", "rarity": 5 },
      { "name": "Drive Atk 2", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 16, "atk": 9, "spd": 6, "def": 5, "res": 9 },
      "level40": { "hp": [ 32, 35, 39 ], "atk": [ 32, 35, 38 ], "spd": [ 24, 28, 31 ], "def": [ 14, 18, 21 ], "res": [ 32, 35, 38 ] },
    },
    "rarity5": true,
    "colorType": "Blue",
  },
  {
    "name": "Michalis",
    "title": "Ambitious King",
    "weaponType": "Axe",
    "moveType": "Flying",
    "releaseDate": "Mar 20, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Michalis.png",
      "main": "img/heroes-main/Michalis.png"
    },
    "skills": [
      { "name": "Iron Axe", "rarity": 3 },
      { "name": "Steel Axe", "rarity": 3 },
      { "name": "Silver Axe", "rarity": 4 },
      { "name": "Hauteclere", "rarity": 5 },
      { "name": "Rising Thunder", "rarity": 4 },
      { "name": "Blazing Thunder", "rarity": 4 },
      { "name": "Iote's Shield", "rarity": 4 },
      { "name": "Threaten Def 1", "rarity": 3 },
      { "name": "Threaten Def 2", "rarity": 3 },
      { "name": "Threaten Def 3", "rarity": 4 }
    ],
    "stats": {
      "level1": { "hp": 19, "atk": 8, "spd": 7, "def": 9, "res": 4 },
      "level40": { "hp": [ 40, 43, 46 ], "atk": [ 31, 34, 37 ], "spd": [ 23, 26, 30 ], "def": [ 32, 35, 38 ], "res": [ 16, 19, 22 ] },
      "level1_4": { "hp": 18, "atk": 8, "spd": 6, "def": 9, "res": 3 },
      "level40_4": { "hp": [ 37, 40, 43 ], "atk": [ 29, 32, 35 ], "spd": [ 21, 24, 27 ], "def": [ 30, 33, 36 ], "res": [ 14, 17, 20 ] }
    },
    "rarity3": true,
    "rarity4": true,
    "colorType": "Green",
    "ghb": true
  },
  {
    "name": "Minerva",
    "title": "Red Dragoon",
    "weaponType": "Axe",
    "moveType": "Flying",
    "releaseDate": "Feb 02, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Minerva.png",
      "main": "img/heroes-main/Minerva.png"
    },
    "skills": [
      { "name": "Iron Axe", "rarity": 5 },
      { "name": "Steel Axe", "rarity": 5 },
      { "name": "Silver Axe", "rarity": 5 },
      { "name": "Hauteclere", "rarity": 5 },
      { "name": "Holy Vestments", "rarity": 5 },
      { "name": "Sacred Cowl", "rarity": 5 },
      { "name": "Life and Death 1", "rarity": 5 },
      { "name": "Life and Death 2", "rarity": 5 },
      { "name": "Life and Death 3", "rarity": 5 },
      { "name": "Spur Def 1", "rarity": 5 },
      { "name": "Spur Def 2", "rarity": 5 },
      { "name": "Ward Fliers", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 18, "atk": 7, "spd": 9, "def": 8, "res": 5 },
      "level40": { "hp": [ 36, 40, 43 ], "atk": [ 28, 31, 34 ], "spd": [ 30, 33, 36 ], "def": [ 29, 32, 35 ], "res": [ 19, 22, 25 ] }
    },
    "rarity5": true,
    "colorType": "Green"
  },
  {
    "name": "Mist",
    "title": "Helpful Sister",
    "weaponType": "Staff",
    "moveType": "Infantry",
    "releaseDate": "Apr 26, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Mist.png",
      "main": "img/heroes-main/Mist.png"
    },
    "skills": [
      { "name": "Assault", "rarity": 5 },
      { "name": "Slow", "rarity": 5 },
      { "name": "Slow+", "rarity": 5 },
      { "name": "Heal", "rarity": 5 },
      { "name": "Mend", "rarity": 5 },
      { "name": "Recover", "rarity": 5 },
      { "name": "Imbue", "rarity": 5 },
      { "name": "Miracle", "rarity": 5 },
      { "name": "Spur Res 1", "rarity": 5 },
      { "name": "Spur Def Res 1", "rarity": 5 },
      { "name": "Spur Def Res 2", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 17, "atk": 8, "spd": 6, "def": 5, "res": 8 },
      "level40": { "hp": [ 35, 39, 42 ], "atk": [ 24, 27, 31 ], "spd": [ 24, 28, 31 ], "def": [ 17, 20, 23 ], "res": [ 31, 34, 37 ] }
    },
    "rarity5": true,
    "colorType": "Neutral"
  },
  {
    "name": "Narcian",
    "title": "Wyvern General",
    "weaponType": "Axe",
    "moveType": "Flying",
    "releaseDate": "Feb 10, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Narcian.png",
      "main": "img/heroes-main/Narcian.png"
    },
    "skills": [
      { "name": "Iron Axe", "rarity": 2 },
      { "name": "Steel Axe", "rarity": 3 },
      { "name": "Emerald Axe", "rarity": 4 },
      { "name": "Emerald Axe+", "rarity": 5 },
      { "name": "Retribution", "rarity": 3 },
      { "name": "Vengeance", "rarity": 4 },
      { "name": "Lancebreaker 1", "rarity": 3 },
      { "name": "Lancebreaker 2", "rarity": 2 },
      { "name": "Lancebreaker 3", "rarity": 4 },
      { "name": "Savage Blow 1", "rarity": 3 },
      { "name": "Savage Blow 2", "rarity": 4 },
      { "name": "Savage Blow 3", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 18, "atk": 7, "spd": 7, "def": 8, "res": 7 },
      "level40": { "hp": [ 39, 42, 45 ], "atk": [ 25, 29, 32 ], "spd": [ 25, 29, 32 ], "def": [ 29, 32, 35 ], "res": [ 23, 26, 30 ] },
      "level1_4": { "hp": 17, "atk": 7, "spd": 6, "def": 8, "res": 6 },
      "level40_4": { "hp": [ 36, 39, 42 ], "atk": [ 24, 27, 30 ], "spd": [ 23, 26, 29 ], "def": [ 27, 30, 33 ], "res": [ 21, 24, 27 ] }
    },
    "rarity3": true,
    "rarity4": true,
    "colorType": "Green",
    "ghb": true
  },
  {
    "name": "Navarre",
    "title": "Scarlet Sword",
    "weaponType": "Sword",
    "moveType": "Infantry",
    "releaseDate": "Apr 04, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Navarre.png",
      "main": "img/heroes-main/Navarre.png"
    },
    "skills": [
      { "name": "Iron Sword", "rarity": 3 },
      { "name": "Steel Sword", "rarity": 3 },
      { "name": "Killing Edge", "rarity": 4 },
      { "name": "Killing Edge+", "rarity": 5 },
      { "name": "Rising Wind", "rarity": 4 },
      { "name": "Blazing Wind", "rarity": 4 },
      { "name": "Desperation 1", "rarity": 3 },
      { "name": "Desperation 2", "rarity": 4 },
      { "name": "Desperation 3", "rarity": 5 },
      { "name": "Threaten Spd 1", "rarity": 3 },
      { "name": "Threaten Spd 2", "rarity": 3 },
      { "name": "Threaten Spd 3", "rarity": 4 }
    ],
    "stats": {
      "level1": { "hp": 18, "atk": 7, "spd": 11, "def": 6, "res": 5 },
      "level40": { "hp": [ 39, 42, 45 ], "atk": [ 28, 31, 34 ], "spd": [ 34, 37, 40 ], "def": [ 20, 23, 26 ], "res": [ 21, 24, 28 ] },
      "level1_4": { "hp": 17, "atk": 7, "spd": 11, "def": 5, "res": 4 },
      "level40_4": { "hp": [ 36, 39, 42 ], "atk": [ 26, 29, 32 ], "spd": [ 32, 35, 38 ], "def": [ 18, 21, 24 ], "res": [ 19, 22, 25 ] }
    },
    "rarity3": true,
    "rarity4": true,
    "colorType": "Red",
    "ghb": true
  },
  {
    "name": "Nephenee",
    "title": "Fierce Halberdier",
    "weaponType": "Lance",
    "moveType": "Infantry",
    "releaseDate": "Sep 15, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Nephenee.png",
      "main": "img/heroes-main/Nephenee.png"
    },
    "skills": [
      { "name": "Iron Lance", "rarity": 5 },
      { "name": "Steel Lance", "rarity": 5 },
      { "name": "Slaying Lance", "rarity": 5 },
      { "name": "Slaying Lance+", "rarity": 5 },
      { "name": "New Moon", "rarity": 5 },
      { "name": "Moonbow", "rarity": 5 },
      { "name": "Speed +1", "rarity": 5 },
      { "name": "Atk Spd 1", "rarity": 5 },
      { "name": "Atk Spd 2", "rarity": 5 },
      { "name": "Wrath 1", "rarity": 5 },
      { "name": "Wrath 2", "rarity": 5 },
      { "name": "Wrath 3", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 18, "atk": 7, "spd": 9, "def": 8, "res": 5 },
      "level40": { "hp": [ 34, 37, 41 ], "atk": [ 28, 31, 34 ], "spd": [ 32, 35, 38 ], "def": [ 31, 34, 37 ], "res": [ 17, 20, 23 ] }
    },
    "rarity5": true,
    "colorType": "Blue"
  },
  {
    "name": "Niles",
    "title": "Cruel to Be Kind",
    "weaponType": "Bow",
    "moveType": "Infantry",
    "releaseDate": "Feb 02, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Niles.png",
      "main": "img/heroes-main/Niles.png"
    },
    "skills": [
      { "name": "Iron Bow", "rarity": 3 },
      { "name": "Steel Bow", "rarity": 3 },
      { "name": "Killer Bow", "rarity": 4 },
      { "name": "Killer Bow+", "rarity": 5 },
      { "name": "Chilling Wind", "rarity": 4 },
      { "name": "Iceberg", "rarity": 4 },
      { "name": "Warding Blow 1", "rarity": 3 },
      { "name": "Warding Blow 2", "rarity": 3 },
      { "name": "Warding Blow 3", "rarity": 4 },
      { "name": "Spur Res 1", "rarity": 3 },
      { "name": "Spur Res 2", "rarity": 4 },
      { "name": "Spur Res 3", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 18, "atk": 6, "spd": 8, "def": 4, "res": 8 },
      "level40": { "hp": [ 34, 37, 41 ], "atk": [ 22, 25, 29 ], "spd": [ 31, 34, 37 ], "def": [ 13, 17, 20 ], "res": [ 31, 34, 37 ] },
      "level1_4": { "hp": 17, "atk": 5, "spd": 8, "def": 3, "res": 8 },
      "level40_4": { "hp": [ 32, 35, 38 ], "atk": [ 20, 23, 26 ], "spd": [ 29, 32, 35 ], "def": [ 12, 15, 18 ], "res": [ 29, 32, 35 ] }
    },
    "rarity3": true,
    "rarity4": true,
    "colorType": "Neutral"
  },
  {
    "name": "Ninian",
    "title": "Oracle of Destiny",
    "weaponType": "Breath",
    "moveType": "Infantry",
    "releaseDate": "Mar 14, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Ninian.png",
      "main": "img/heroes-main/Ninian.png"
    },
    "skills": [
      { "name": "Fire Breath", "rarity": 5 },
      { "name": "Fire Breath+", "rarity": 5 },
      { "name": "Light Breath", "rarity": 5 },
      { "name": "Light Breath+", "rarity": 5 },
      { "name": "Dance", "rarity": 5 },
      { "name": "Escape Route 1", "rarity": 5 },
      { "name": "Escape Route 2", "rarity": 5 },
      { "name": "Escape Route 3", "rarity": 5 },
      { "name": "Fortify Def 1", "rarity": 5 },
      { "name": "Fortify Def 2", "rarity": 5 },
      { "name": "Fortify Dragons", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 16, "atk": 5, "spd": 7, "def": 6, "res": 5 },
      "level40": { "hp": [ 39, 42, 45 ], "atk": [ 21, 24, 28 ], "spd": [ 30, 33, 36 ], "def": [ 20, 23, 26 ], "res": [ 23, 27, 30 ] }
    },
    "rarity5": true,
    "colorType": "Blue"
  },
  {
    "name": "Nino",
    "title": "Pious Mage",
    "weaponType": "Tome",
    "moveType": "Infantry",
    "releaseDate": "Feb 02, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Nino.png",
      "main": "img/heroes-main/Nino.png"
    },
    "skills": [
      { "name": "Wind", "rarity": 3 },
      { "name": "Elwind", "rarity": 3 },
      { "name": "Gronnblade", "rarity": 4 },
      { "name": "Gronnblade+", "rarity": 5 },
      { "name": "Draw Back", "rarity": 4 },
      { "name": "Resistance +1", "rarity": 3 },
      { "name": "Resistance +2", "rarity": 3 },
      { "name": "Resistance +3", "rarity": 4 },
      { "name": "Hone Atk 1", "rarity": 3 },
      { "name": "Hone Atk 2", "rarity": 4 },
      { "name": "Hone Atk 3", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 16, "atk": 7, "spd": 10, "def": 4, "res": 7 },
      "level40": { "hp": [ 30, 33, 36 ], "atk": [ 30, 33, 36 ], "spd": [ 33, 36, 39 ], "def": [ 16, 19, 22 ], "res": [ 23, 26, 30 ] },
      "level1_4": { "hp": 15, "atk": 7, "spd": 10, "def": 3, "res": 6 },
      "level40_4": { "hp": [ 28, 31, 34 ], "atk": [ 28, 31, 34 ], "spd": [ 31, 34, 37 ], "def": [ 14, 17, 20 ], "res": [ 21, 24, 27 ] }
    },
    "rarity3": true,
    "rarity4": true,
    "colorType": "Green"
  },
  {
    "name": "Nowi",
    "title": "Eternal Youth",
    "weaponType": "Breath",
    "moveType": "Infantry",
    "releaseDate": "Feb 02, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Nowi.png",
      "main": "img/heroes-main/Nowi.png"
    },
    "skills": [
      { "name": "Fire Breath", "rarity": 4 },
      { "name": "Fire Breath+", "rarity": 4 },
      { "name": "Lightning Breath", "rarity": 4 },
      { "name": "Lightning Breath+", "rarity": 5 },
      { "name": "Rally Defense", "rarity": 4 },
      { "name": "Defense +1", "rarity": 4 },
      { "name": "Defense +2", "rarity": 4 },
      { "name": "Defense +3", "rarity": 5 },
      { "name": "Threaten Res 1", "rarity": 4 },
      { "name": "Threaten Res 2", "rarity": 4 },
      { "name": "Threaten Res 3", "rarity": 4 }
    ],
    "stats": {
      "level1": { "hp": 17, "atk": 6, "spd": 5, "def": 6, "res": 5 },
      "level40": { "hp": [ 42, 45, 48 ], "atk": [ 31, 34, 37 ], "spd": [ 23, 27, 30 ], "def": [ 27, 30, 33 ], "res": [ 23, 27, 30 ] },
      "level1_4": { "hp": 16, "atk": 6, "spd": 4, "def": 6, "res": 4 },
      "level40_4": { "hp": [ 39, 42, 45 ], "atk": [ 29, 32, 35 ], "spd": [ 21, 24, 27 ], "def": [ 25, 28, 31 ], "res": [ 21, 24, 27 ] }
    },
    "rarity4": true,
    "rarity5": true,
    "colorType": "Blue"
  },
  {
    "name": "Nowi (Trick or Defeat!)",
    "title": "Eternal Witch",
    "weaponType": "Tome",
    "moveType": "Flying",
    "releaseDate": "Oct 30, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Nowi (Trick or Defeat!).png",
      "main": "img/heroes-main/Nowi (Trick or Defeat!).png"
    },
    "skills": [
      { "name": "Flux", "rarity": 5 },
      { "name": "Ruin", "rarity": 5 },
      { "name": "Fenrir", "rarity": 5 },
      { "name": "Grimoire", "rarity": 5 },
      { "name": "Reposition", "rarity": 5 },
      { "name": "Atk Res Bond 1", "rarity": 5 },
      { "name": "Atk Res Bond 2", "rarity": 5 },
      { "name": "Atk Res Bond 3", "rarity": 5 },
      { "name": "Live for Bounty", "rarity": 5 },
      { "name": "Hone Atk 1", "rarity": 5 },
      { "name": "Hone Atk 2", "rarity": 5 },
      { "name": "Hone Fliers", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 17, "atk": 8, "spd": 6, "def": 5, "res": 8 },
      "level40": { "hp": [ 31, 34, 37 ], "atk": [ 31, 34, 37 ], "spd": [ 29, 32, 35 ], "def": [ 17, 20, 23 ], "res": [ 24, 27, 31 ] }
    },
    "shortName": "Nowi",
    "rarity5": true,
    "colorType": "Red",
    "limited": true
  },
  {
    "name": "Oboro",
    "title": "Fierce Fighter",
    "weaponType": "Lance",
    "moveType": "Infantry",
    "releaseDate": "Feb 02, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Oboro.png",
      "main": "img/heroes-main/Oboro.png"
    },
    "skills": [
      { "name": "Iron Lance", "rarity": 3 },
      { "name": "Steel Lance", "rarity": 3 },
      { "name": "Heavy Spear", "rarity": 4 },
      { "name": "Heavy Spear+", "rarity": 5 },
      { "name": "Rally Defense", "rarity": 4 },
      { "name": "Seal Def 1", "rarity": 3 },
      { "name": "Seal Def 2", "rarity": 3 },
      { "name": "Seal Def 3", "rarity": 4 },
      { "name": "Threaten Res 1", "rarity": 3 },
      { "name": "Threaten Res 2", "rarity": 4 },
      { "name": "Threaten Res 3", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 18, "atk": 8, "spd": 7, "def": 9, "res": 5 },
      "level40": { "hp": [ 36, 40, 43 ], "atk": [ 29, 32, 35 ], "spd": [ 23, 26, 30 ], "def": [ 32, 35, 38 ], "res": [ 21, 24, 28 ] },
      "level1_4": { "hp": 17, "atk": 8, "spd": 6, "def": 9, "res": 4 },
      "level40_4": { "hp": [ 34, 37, 40 ], "atk": [ 27, 30, 33 ], "spd": [ 21, 24, 27 ], "def": [ 30, 33, 36 ], "res": [ 19, 22, 25 ] }
    },
    "rarity3": true,
    "rarity4": true,
    "colorType": "Blue"
  },
  {
    "name": "Odin",
    "title": "Potent Force",
    "weaponType": "Tome",
    "moveType": "Infantry",
    "releaseDate": "Feb 02, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Odin.png",
      "main": "img/heroes-main/Odin.png"
    },
    "skills": [
      { "name": "Thunder", "rarity": 3 },
      { "name": "Elthunder", "rarity": 3 },
      { "name": "Blárblade", "rarity": 4 },
      { "name": "Blárblade+", "rarity": 5 },
      { "name": "New Moon", "rarity": 4 },
      { "name": "Moonbow", "rarity": 4 },
      { "name": "Defiant Atk 1", "rarity": 3 },
      { "name": "Defiant Atk 2", "rarity": 4 },
      { "name": "Defiant Atk 3", "rarity": 5 },
      { "name": "R Tomebreaker 1", "rarity": 3 },
      { "name": "R Tomebreaker 2", "rarity": 3 },
      { "name": "R Tomebreaker 3", "rarity": 4 }
    ],
    "stats": {
      "level1": { "hp": 19, "atk": 5, "spd": 8, "def": 6, "res": 6 },
      "level40": { "hp": [ 40, 43, 46 ], "atk": [ 19, 22, 25 ], "spd": [ 29, 32, 35 ], "def": [ 22, 25, 29 ], "res": [ 22, 25, 29 ] },
      "level1_4": { "hp": 18, "atk": 4, "spd": 8, "def": 6, "res": 5 },
      "level40_4": { "hp": [ 37, 40, 43 ], "atk": [ 17, 20, 23 ], "spd": [ 27, 30, 33 ], "def": [ 21, 24, 27 ], "res": [ 20, 23, 26 ] }
    },
    "rarity3": true,
    "rarity4": true,
    "colorType": "Blue"
  },
  {
    "name": "Ogma",
    "title": "Loyal Blade",
    "weaponType": "Sword",
    "moveType": "Infantry",
    "releaseDate": "Feb 02, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Ogma.png",
      "main": "img/heroes-main/Ogma.png"
    },
    "skills": [
      { "name": "Iron Sword", "rarity": 4 },
      { "name": "Steel Sword", "rarity": 4 },
      { "name": "Brave Sword", "rarity": 4 },
      { "name": "Brave Sword+", "rarity": 5 },
      { "name": "Daylight", "rarity": 4 },
      { "name": "Noontime", "rarity": 4 },
      { "name": "Defiant Atk 1", "rarity": 4 },
      { "name": "Defiant Atk 2", "rarity": 4 },
      { "name": "Defiant Atk 3", "rarity": 4 },
      { "name": "Spur Atk 1", "rarity": 4 },
      { "name": "Spur Atk 2", "rarity": 4 },
      { "name": "Spur Atk 3", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 21, "atk": 7, "spd": 10, "def": 6, "res": 3 },
      "level40": { "hp": [ 44, 47, 50 ], "atk": [ 32, 35, 38 ], "spd": [ 31, 34, 37 ], "def": [ 24, 28, 31 ], "res": [ 10, 13, 17 ] },
      "level1_4": { "hp": 20, "atk": 7, "spd": 10, "def": 5, "res": 2 },
      "level40_4": { "hp": [ 41, 44, 47 ], "atk": [ 30, 33, 36 ], "spd": [ 29, 32, 35 ], "def": [ 22, 25, 28 ], "res": [ 9, 12, 15 ] }
    },
    "rarity4": true,
    "rarity5": true,
    "colorType": "Red"
  },
  {
    "name": "Oliver",
    "title": "Admirer of Beauty",
    "weaponType": "Tome",
    "moveType": "Infantry",
    "releaseDate": "Jan 14, 2018",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Oliver.png",
      "main": "img/heroes-main/Oliver.png"
    },
    "skills": [
      { "name": "Light", "rarity": 3 },
      { "name": "Ellight", "rarity": 3 },
      { "name": "Shine", "rarity": 3 },
      { "name": "Shine+", "rarity": 5 },
      { "name": "Rising Light", "rarity": 3 },
      { "name": "Blazing Light", "rarity": 4 },
      { "name": "Warding Blow 1", "rarity": 3 },
      { "name": "Mirror Strike 1", "rarity": 3 },
      { "name": "Mirror Strike 2", "rarity": 4 },
      { "name": "Atk Ploy 1", "rarity": 3 },
      { "name": "Atk Ploy 2", "rarity": 4 },
      { "name": "Atk Ploy 3", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 18, "atk": 8, "spd": 5, "def": 6, "res": 8 },
      "level40": { "hp": [ 39, 42, 45 ], "atk": [ 29, 32, 35 ], "spd": [ 17, 20, 23 ], "def": [ 20, 23, 26 ], "res": [ 31, 34, 37 ] },
    },
    "rarity3": true,
    "rarity4": true,
    "colorType": "Blue",
    "ghb": true
  },
  {
    "name": "Olivia",
    "title": "Blushing Beauty",
    "weaponType": "Sword",
    "moveType": "Infantry",
    "releaseDate": "Feb 02, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Olivia.png",
      "main": "img/heroes-main/Olivia.png"
    },
    "skills": [
      { "name": "Iron Sword", "rarity": 1 },
      { "name": "Steel Sword", "rarity": 3 },
      { "name": "Silver Sword", "rarity": 4 },
      { "name": "Silver Sword+", "rarity": 5 },
      { "name": "Dance", "rarity": 4 },
      { "name": "Knock Back", "rarity": 3 },
      { "name": "Hone Atk 1", "rarity": 1 },
      { "name": "Hone Atk 2", "rarity": 2 },
      { "name": "Hone Atk 3", "rarity": 4 }
    ],
    "stats": {
      "level1": { "hp": 17, "atk": 6, "spd": 7, "def": 5, "res": 4 },
      "level40": { "hp": [ 33, 36, 40 ], "atk": [ 24, 28, 31 ], "spd": [ 30, 33, 36 ], "def": [ 23, 27, 30 ], "res": [ 22, 26, 29 ] },
      "level1_4": { "hp": 16, "atk": 6, "spd": 7, "def": 4, "res": 3 },
      "level40_4": { "hp": [ 31, 34, 37 ], "atk": [ 23, 26, 29 ], "spd": [ 28, 31, 34 ], "def": [ 21, 24, 27 ], "res": [ 20, 23, 26 ] }
    },
    "rarity3": true,
    "rarity4": true,
    "colorType": "Red"
  },
  {
    "name": "Olivia (Performing Arts)",
    "title": "Festival Dancer",
    "weaponType": "Dagger",
    "moveType": "Infantry",
    "releaseDate": "Sep 29, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Olivia (Performing Arts).png",
      "main": "img/heroes-main/Olivia (Performing Arts).png"
    },
    "skills": [
      { "name": "Iron Dagger", "rarity": 5 },
      { "name": "Steel Dagger", "rarity": 5 },
      { "name": "Dancer's Fan", "rarity": 5 },
      { "name": "Dancer's Fan+", "rarity": 5 },
      { "name": "Dance", "rarity": 5 },
      { "name": "Distant Def 1", "rarity": 5 },
      { "name": "Distant Def 2", "rarity": 5 },
      { "name": "Distant Def 3", "rarity": 5 },
      { "name": "Blaze Dance 1", "rarity": 5 },
      { "name": "Blaze Dance 2", "rarity": 5 },
      { "name": "Blaze Dance 3", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 15, "atk": 6, "spd": 8, "def": 3, "res": 4 },
      "level40": { "hp": [ 31, 34, 38 ], "atk": [ 24, 28, 31 ], "spd": [ 31, 34, 37 ], "def": [ 12, 16, 19 ], "res": [ 25, 28, 31 ] }
    },
    "shortName": "Olivia",
    "rarity5": true,
    "colorType": "Neutral",
    "limited": true
  },
  {
    "name": "Olwen",
    "title": "Blue Mage Knight",
    "weaponType": "Tome",
    "moveType": "Cavalry",
    "releaseDate": "Feb 27, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Olwen.png",
      "main": "img/heroes-main/Olwen.png"
    },
    "skills": [
      { "name": "Thunder", "rarity": 5 },
      { "name": "Elthunder", "rarity": 5 },
      { "name": "Thoron", "rarity": 5 },
      { "name": "Dire Thunder", "rarity": 5 },
      { "name": "Reposition", "rarity": 5 },
      { "name": "Warding Blow 1", "rarity": 5 },
      { "name": "Warding Blow 2", "rarity": 5 },
      { "name": "Warding Blow 3", "rarity": 5 },
      { "name": "Spur Res 1", "rarity": 5 },
      { "name": "Spur Res 2", "rarity": 5 },
      { "name": "Ward Cavalry", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 17, "atk": 7, "spd": 8, "def": 5, "res": 6 },
      "level40": { "hp": [ 31, 34, 37 ], "atk": [ 23, 26, 30 ], "spd": [ 31, 34, 37 ], "def": [ 17, 20, 23 ], "res": [ 27, 30, 33 ] }
    },
    "rarity5": true,
    "colorType": "Blue"
  },
  {
    "name": "Oscar",
    "title": "Agile Horseman",
    "weaponType": "Lance",
    "moveType": "Cavalry",
    "releaseDate": "Sep 15, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Oscar.png",
      "main": "img/heroes-main/Oscar.png"
    },
    "skills": [
      { "name": "Iron Lance", "rarity": 4 },
      { "name": "Steel Lance", "rarity": 4 },
      { "name": "Sapphire Lance", "rarity": 4 },
      { "name": "Sapphire Lance+", "rarity": 5 },
      { "name": "Rally Speed", "rarity": 4 },
      { "name": "Rally Speed Defense", "rarity": 4 },
      { "name": "Lancebreaker 1", "rarity": 4 },
      { "name": "Lancebreaker 2", "rarity": 4 },
      { "name": "Lancebreaker 3", "rarity": 4 },
      { "name": "Spur Def 1", "rarity": 4 },
      { "name": "Spur Spd Def 1", "rarity": 4 },
      { "name": "Spur Spd Def 2", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 18, "atk": 7, "spd": 8, "def": 7, "res": 6 },
      "level40": { "hp": [ 36, 40, 43 ], "atk": [ 30, 33, 36 ], "spd": [ 31, 34, 37 ], "def": [ 23, 26, 30 ], "res": [ 18, 21, 24 ] },
      "level1_4": { "hp": 17, "atk": 7, "spd": 8, "def": 6, "res": 5 },
      "level40_4": { "hp": [ 34, 37, 40 ], "atk": [ 28, 31, 34 ], "spd": [ 29, 32, 35 ], "def": [ 21, 24, 27 ], "res": [ 16, 19, 22 ] }
    },
    "rarity4": true,
    "rarity5": true,
    "colorType": "Blue"
  },
  {
    "name": "Palla",
    "title": "Eldest Whitewing",
    "weaponType": "Sword",
    "moveType": "Flying",
    "releaseDate": "Feb 02, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Palla.png",
      "main": "img/heroes-main/Palla.png"
    },
    "skills": [
      { "name": "Iron Sword", "rarity": 3 },
      { "name": "Steel Sword", "rarity": 3 },
      { "name": "Ruby Sword", "rarity": 4 },
      { "name": "Ruby Sword+", "rarity": 5 },
      { "name": "New Moon", "rarity": 4 },
      { "name": "Moonbow", "rarity": 4 },
      { "name": "Wings of Mercy 1", "rarity": 3 },
      { "name": "Wings of Mercy 2", "rarity": 4 },
      { "name": "Wings of Mercy 3", "rarity": 5 },
      { "name": "Spur Spd 1", "rarity": 3 },
      { "name": "Spur Spd 2", "rarity": 3 },
      { "name": "Goad Fliers", "rarity": 4 }
    ],
    "stats": {
      "level1": { "hp": 18, "atk": 7, "spd": 9, "def": 6, "res": 7 },
      "level40": { "hp": [ 39, 42, 45 ], "atk": [ 28, 31, 34 ], "spd": [ 27, 31, 34 ], "def": [ 24, 28, 31 ], "res": [ 23, 26, 30 ] },
      "level1_4": { "hp": 17, "atk": 7, "spd": 9, "def": 5, "res": 6 },
      "level40_4": { "hp": [ 36, 39, 42 ], "atk": [ 26, 29, 32 ], "spd": [ 26, 29, 32 ], "def": [ 22, 25, 28 ], "res": [ 21, 24, 27 ] }
    },
    "rarity3": true,
    "rarity4": true,
    "colorType": "Red"
  },
  {
    "name": "Peri",
    "title": "Playful Slayer",
    "weaponType": "Lance",
    "moveType": "Cavalry",
    "releaseDate": "Feb 02, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Peri.png",
      "main": "img/heroes-main/Peri.png"
    },
    "skills": [
      { "name": "Iron Lance", "rarity": 4 },
      { "name": "Steel Lance", "rarity": 4 },
      { "name": "Killer Lance", "rarity": 4 },
      { "name": "Killer Lance+", "rarity": 5 },
      { "name": "Night Sky", "rarity": 4 },
      { "name": "Glimmer", "rarity": 4 },
      { "name": "Resistance +1", "rarity": 4 },
      { "name": "Resistance +2", "rarity": 4 },
      { "name": "Resistance +3", "rarity": 5 },
      { "name": "Threaten Def 1", "rarity": 4 },
      { "name": "Threaten Def 2", "rarity": 4 },
      { "name": "Threaten Def 3", "rarity": 4 }
    ],
    "stats": {
      "level1": { "hp": 16, "atk": 9, "spd": 9, "def": 6, "res": 6 },
      "level40": { "hp": [ 32, 35, 39 ], "atk": [ 30, 33, 36 ], "spd": [ 30, 33, 36 ], "def": [ 20, 23, 26 ], "res": [ 27, 30, 33 ] },
      "level1_4": { "hp": 15, "atk": 9, "spd": 9, "def": 5, "res": 5 },
      "level40_4": { "hp": [ 30, 33, 36 ], "atk": [ 28, 31, 34 ], "spd": [ 28, 31, 34 ], "def": [ 18, 21, 24 ], "res": [ 24, 27, 30 ] }
    },
    "rarity4": true,
    "rarity5": true,
    "colorType": "Blue"
  },
  {
    "name": "Priscilla",
    "title": "Delicate Princess",
    "weaponType": "Staff",
    "moveType": "Cavalry",
    "releaseDate": "Mar 14, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Priscilla.png",
      "main": "img/heroes-main/Priscilla.png"
    },
    "skills": [
      { "name": "Assault", "rarity": 4 },
      { "name": "Panic", "rarity": 4 },
      { "name": "Panic+", "rarity": 5 },
      { "name": "Heal", "rarity": 4 },
      { "name": "Reconcile", "rarity": 4 },
      { "name": "Rehabilitate", "rarity": 5 },
      { "name": "Imbue", "rarity": 4 },
      { "name": "Still-Water Balm", "rarity": 5 },
      { "name": "Spur Def 1", "rarity": 4 },
      { "name": "Spur Def 2", "rarity": 4 },
      { "name": "Spur Def 3", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 17, "atk": 7, "spd": 7, "def": 4, "res": 8 },
      "level40": { "hp": [ 33, 36, 40 ], "atk": [ 25, 29, 32 ], "spd": [ 25, 29, 32 ], "def": [ 16, 19, 22 ], "res": [ 29, 32, 35 ] },
      "level1_4": { "hp": 16, "atk": 7, "spd": 6, "def": 3, "res": 8 },
      "level40_4": { "hp": [ 31, 34, 37 ], "atk": [ 24, 27, 30 ], "spd": [ 23, 26, 29 ], "def": [ 14, 17, 20 ], "res": [ 27, 30, 33 ] }
    },
    "rarity4": true,
    "rarity5": true,
    "colorType": "Neutral"
  },
  {
    "name": "Raigh",
    "title": "Dark Child",
    "weaponType": "Tome",
    "moveType": "Infantry",
    "releaseDate": "Feb 02, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Raigh.png",
      "main": "img/heroes-main/Raigh.png"
    },
    "skills": [
      { "name": "Flux", "rarity": 2 },
      { "name": "Ruin", "rarity": 3 },
      { "name": "Rauðrwolf", "rarity": 4 },
      { "name": "Rauðrwolf+", "rarity": 5 },
      { "name": "Rally Attack", "rarity": 4 },
      { "name": "HP +3", "rarity": 3 },
      { "name": "HP +4", "rarity": 4 },
      { "name": "HP +5", "rarity": 5 },
      { "name": "Seal Res 1", "rarity": 3 },
      { "name": "Seal Res 2", "rarity": 2 },
      { "name": "Seal Res 3", "rarity": 4 }
    ],
    "stats": {
      "level1": { "hp": 17, "atk": 8, "spd": 7, "def": 5, "res": 7 },
      "level40": { "hp": [ 33, 36, 40 ], "atk": [ 29, 32, 35 ], "spd": [ 25, 29, 32 ], "def": [ 19, 22, 25 ], "res": [ 25, 29, 32 ] },
      "level1_4": { "hp": 16, "atk": 8, "spd": 7, "def": 4, "res": 6 },
      "level40_4": { "hp": [ 31, 34, 37 ], "atk": [ 27, 30, 33 ], "spd": [ 24, 27, 30 ], "def": [ 17, 20, 23 ], "res": [ 23, 26, 29 ] }
    },
    "rarity3": true,
    "rarity4": true,
    "colorType": "Red"
  },
  {
    "name": "Raven",
    "title": "Peerless Fighter",
    "weaponType": "Axe",
    "moveType": "Infantry",
    "releaseDate": "Feb 02, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Raven.png",
      "main": "img/heroes-main/Raven.png"
    },
    "skills": [
      { "name": "Iron Axe", "rarity": 4 },
      { "name": "Steel Axe", "rarity": 4 },
      { "name": "Brave Axe", "rarity": 4 },
      { "name": "Brave Axe+", "rarity": 5 },
      { "name": "Daylight", "rarity": 4 },
      { "name": "Sol", "rarity": 4 },
      { "name": "Defiant Spd 1", "rarity": 4 },
      { "name": "Defiant Spd 2", "rarity": 4 },
      { "name": "Defiant Spd 3", "rarity": 4 },
      { "name": "Threaten Def 1", "rarity": 4 },
      { "name": "Threaten Def 2", "rarity": 4 },
      { "name": "Threaten Def 3", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 19, "atk": 8, "spd": 9, "def": 6, "res": 5 },
      "level40": { "hp": [ 37, 41, 44 ], "atk": [ 31, 34, 37 ], "spd": [ 32, 35, 38 ], "def": [ 22, 25, 29 ], "res": [ 19, 22, 25 ] },
      "level1_4": { "hp": 18, "atk": 8, "spd": 9, "def": 5, "res": 4 },
      "level40_4": { "hp": [ 35, 38, 41 ], "atk": [ 29, 32, 35 ], "spd": [ 30, 33, 36 ], "def": [ 20, 23, 26 ], "res": [ 17, 20, 23 ] }
    },
    "rarity4": true,
    "rarity5": true,
    "colorType": "Green"
  },
  {
    "name": "Rebecca",
    "title": "Wildflower",
    "weaponType": "Bow",
    "moveType": "Infantry",
    "releaseDate": "Mar 14, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Rebecca.png",
      "main": "img/heroes-main/Rebecca.png"
    },
    "skills": [
      { "name": "Iron Bow", "rarity": 4 },
      { "name": "Steel Bow", "rarity": 4 },
      { "name": "Silver Bow", "rarity": 4 },
      { "name": "Silver Bow+", "rarity": 5 },
      { "name": "Ardent Sacrifice", "rarity": 4 },
      { "name": "Darting Blow 1", "rarity": 4 },
      { "name": "Darting Blow 2", "rarity": 4 },
      { "name": "Darting Blow 3", "rarity": 4 },
      { "name": "Seal Atk 1", "rarity": 4 },
      { "name": "Seal Atk 2", "rarity": 4 },
      { "name": "Seal Atk 3", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 18, "atk": 7, "spd": 8, "def": 6, "res": 5 },
      "level40": { "hp": [ 34, 37, 41 ], "atk": [ 25, 29, 32 ], "spd": [ 31, 34, 37 ], "def": [ 18, 21, 24 ], "res": [ 23, 27, 30 ] },
      "level1_4": { "hp": 17, "atk": 7, "spd": 8, "def": 5, "res": 4 },
      "level40_4": { "hp": [ 32, 35, 38 ], "atk": [ 24, 27, 30 ], "spd": [ 29, 32, 35 ], "def": [ 16, 19, 22 ], "res": [ 21, 24, 27 ] }
    },
    "rarity4": true,
    "rarity5": true,
    "colorType": "Neutral"
  },
  {
    "name": "Reinhardt",
    "title": "Thunder's Fist",
    "weaponType": "Tome",
    "moveType": "Cavalry",
    "releaseDate": "Feb 27, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Reinhardt.png",
      "main": "img/heroes-main/Reinhardt.png"
    },
    "skills": [
      { "name": "Thunder", "rarity": 4 },
      { "name": "Elthunder", "rarity": 4 },
      { "name": "Thoron", "rarity": 4 },
      { "name": "Dire Thunder", "rarity": 5 },
      { "name": "Rising Thunder", "rarity": 4 },
      { "name": "Blazing Thunder", "rarity": 4 },
      { "name": "Vantage 1", "rarity": 4 },
      { "name": "Vantage 2", "rarity": 4 },
      { "name": "Vantage 3", "rarity": 4 },
      { "name": "Spur Atk 1", "rarity": 4 },
      { "name": "Spur Atk 2", "rarity": 4 },
      { "name": "Goad Cavalry", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 16, "atk": 8, "spd": 6, "def": 5, "res": 8 },
      "level40": { "hp": [ 34, 38, 41 ], "atk": [ 29, 32, 35 ], "spd": [ 20, 23, 26 ], "def": [ 23, 27, 30 ], "res": [ 22, 25, 28 ] },
      "level1_4": { "hp": 15, "atk": 8, "spd": 5, "def": 4, "res": 8 },
      "level40_4": { "hp": [ 32, 35, 38 ], "atk": [ 27, 30, 33 ], "spd": [ 18, 21, 24 ], "def": [ 21, 24, 27 ], "res": [ 21, 24, 27 ] }
    },
    "rarity4": true,
    "rarity5": true,
    "colorType": "Blue"
  },
  {
    "name": "Rhajat",
    "title": "Black Magician",
    "weaponType": "Tome",
    "moveType": "Infantry",
    "releaseDate": "Dec 02, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Rhajat.png",
      "main": "img/heroes-main/Rhajat.png"
    },
    "skills": [
      { "name": "Wind", "rarity": 5 },
      { "name": "Elwind", "rarity": 5 },
      { "name": "Keen Gronnwolf", "rarity": 5 },
      { "name": "Keen Gronnwolf+", "rarity": 5 },
      { "name": "Rally Defense", "rarity": 5 },
      { "name": "Rally Attack Defense", "rarity": 5 },
      { "name": "Distant Def 1", "rarity": 5 },
      { "name": "Distant Def 2", "rarity": 4 },
      { "name": "Distant Def 3", "rarity": 5 },
      { "name": "Savage Blow 1", "rarity": 5 },
      { "name": "Savage Blow 2", "rarity": 5 },
      { "name": "Savage Blow 3", "rarity": 4 }
    ],
    "stats": {
      "level1": { "hp": 17, "atk": 9, "spd": 8, "def": 4, "res": 7 },
      "level40": { "hp": [ 33, 36, 40 ], "atk": [ 32, 35, 38 ], "spd": [ 31, 34, 37 ], "def": [ 18, 21, 24 ], "res": [ 21, 24, 27 ] }
    },
    "rarity5": true,
    "colorType": "Green"
  },
  {
    "name": "Robin (F)",
    "title": "Mystery Tactician",
    "weaponType": "Tome",
    "moveType": "Infantry",
    "releaseDate": "Feb 23, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Robin (F).png",
      "main": "img/heroes-main/Robin (F).png"
    },
    "skills": [
      { "name": "Wind", "rarity": 2 },
      { "name": "Elwind", "rarity": 3 },
      { "name": "Gronnwolf", "rarity": 3 },
      { "name": "Gronnwolf+", "rarity": 5 },
      { "name": "Glowing Ember", "rarity": 3 },
      { "name": "Ignis", "rarity": 4 },
      { "name": "Defiant Res 1", "rarity": 3 },
      { "name": "Defiant Res 2", "rarity": 4 },
      { "name": "Defiant Res 3", "rarity": 5 },
      { "name": "B Tomebreaker 1", "rarity": 3 },
      { "name": "B Tomebreaker 2", "rarity": 2 },
      { "name": "B Tomebreaker 3", "rarity": 4 }
    ],
    "stats": {
      "level1": { "hp": 18, "atk": 7, "spd": 7, "def": 7, "res": 5 },
      "level40": { "hp": [ 36, 40, 43 ], "atk": [ 25, 29, 32 ], "spd": [ 25, 29, 32 ], "def": [ 25, 29, 32 ], "res": [ 19, 22, 25 ] },
      "level1_4": { "hp": 17, "atk": 7, "spd": 7, "def": 6, "res": 4 },
      "level40_4": { "hp": [ 34, 37, 40 ], "atk": [ 24, 27, 30 ], "spd": [ 24, 27, 30 ], "def": [ 23, 26, 29 ], "res": [ 17, 20, 23 ] }
    },
    "shortName": "Robin",
    "rarity3": true,
    "rarity4": true,
    "colorType": "Green",
    "ghb": true
  },
  {
    "name": "Robin (F) (Ylissean Summer)",
    "title": "Seaside Tactician",
    "weaponType": "Lance",
    "moveType": "Infantry",
    "releaseDate": "Jun 30, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Robin (F) (Ylissean Summer).png",
      "main": "img/heroes-main/Robin (F) (Ylissean Summer).png"
    },
    "skills": [
      { "name": "Iron Lance", "rarity": 5 },
      { "name": "Steel Lance", "rarity": 5 },
      { "name": "Deft Harpoon", "rarity": 5 },
      { "name": "Deft Harpoon+", "rarity": 5 },
      { "name": "Reposition", "rarity": 5 },
      { "name": "Defense +1", "rarity": 5 },
      { "name": "HP Def 1", "rarity": 5 },
      { "name": "HP Def 2", "rarity": 5 },
      { "name": "Lance Valor 1", "rarity": 5 },
      { "name": "Lance Valor 2", "rarity": 5 },
      { "name": "Lance Valor 3", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 18, "atk": 8, "spd": 8, "def": 6, "res": 7 },
      "level40": { "hp": [ 32, 35, 38 ], "atk": [ 29, 32, 35 ], "spd": [ 31, 34, 37 ], "def": [ 24, 28, 31 ], "res": [ 25, 29, 32 ] }
    },
    "shortName": "Robin",
    "rarity5": true,
    "colorType": "Blue",
    "limited": true
  },
  {
    "name": "Robin (M)",
    "title": "High Deliverer",
    "weaponType": "Tome",
    "moveType": "Infantry",
    "releaseDate": "Feb 02, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Robin (M).png",
      "main": "img/heroes-main/Robin (M).png"
    },
    "skills": [
      { "name": "Thunder", "rarity": 3 },
      { "name": "Elthunder", "rarity": 3 },
      { "name": "Blárraven", "rarity": 4 },
      { "name": "Blárraven+", "rarity": 5 },
      { "name": "Glowing Ember", "rarity": 4 },
      { "name": "Bonfire", "rarity": 4 },
      { "name": "Defiant Spd 1", "rarity": 3 },
      { "name": "Defiant Spd 2", "rarity": 4 },
      { "name": "Defiant Spd 3", "rarity": 5 },
      { "name": "Spur Def 1", "rarity": 3 },
      { "name": "Spur Def 2", "rarity": 3 },
      { "name": "Spur Def 3", "rarity": 4 }
    ],
    "stats": {
      "level1": { "hp": 18, "atk": 7, "spd": 7, "def": 7, "res": 5 },
      "level40": { "hp": [ 36, 40, 43 ], "atk": [ 25, 29, 32 ], "spd": [ 25, 29, 32 ], "def": [ 25, 29, 32 ], "res": [ 19, 22, 25 ] },
      "level1_4": { "hp": 17, "atk": 7, "spd": 7, "def": 6, "res": 4 },
      "level40_4": { "hp": [ 34, 37, 40 ], "atk": [ 24, 27, 30 ], "spd": [ 24, 27, 30 ], "def": [ 23, 26, 29 ], "res": [ 17, 20, 23 ] }
    },
    "shortName": "Robin",
    "rarity3": true,
    "rarity4": true,
    "colorType": "Blue"
  },
  {
    "name": "Robin (M) (Winter's Envoy)",
    "title": "Festive Tactician",
    "weaponType": "Lance",
    "moveType": "Armored",
    "releaseDate": "Dec 18, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Robin (Winter's Envoy).png",
      "main": "img/heroes-main/Robin (M) (Winter's Envoy).png"
    },
    "skills": [
      { "name": "Iron Lance", "rarity": 5 },
      { "name": "Steel Lance", "rarity": 5 },
      { "name": "Tannenboom!", "rarity": 5 },
      { "name": "Tannenboom!+", "rarity": 5 },
      { "name": "Reciprocal Aid", "rarity": 5 },
      { "name": "Brazen Atk/Spd 1", "rarity": 5 },
      { "name": "Brazen Atk/Spd 2", "rarity": 5 },
      { "name": "Brazen Atk/Spd 3", "rarity": 5 },
      { "name": "Armor March 1", "rarity": 5 },
      { "name": "Armor March 2", "rarity": 5 },
      { "name": "Armor March 3", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 23, "atk": 9, "spd": 8, "def": 9, "res": 6 },
      "level40": { "hp": [ 41, 45, 48 ], "atk": [ 32, 35, 38 ], "spd": [ 31, 34, 37 ],
      "def": [ 32, 35, 38 ], "res": [ 22, 25, 29 ] }
    },
    "shortName": "Robin",
    "rarity5": true,
    "colorType": "Blue",
    "limited": true
  },
  {
    "name": "Roderick",
    "title": "Steady Squire",
    "weaponType": "Lance",
    "moveType": "Cavalry",
    "releaseDate": "Jun 14, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Roderick.png",
      "main": "img/heroes-main/Roderick.png"
    },
    "skills": [
      { "name": "Iron Lance", "rarity": 4 },
      { "name": "Steel Lance", "rarity": 4 },
      { "name": "Firesweep Lance", "rarity": 4 },
      { "name": "Firesweep Lance+", "rarity": 5 },
      { "name": "Rally Defense", "rarity": 4 },
      { "name": "Rally Defense Resistance", "rarity": 4 },
      { "name": "Drag Back", "rarity": 4 },
      { "name": "Spur Def 1", "rarity": 4 },
      { "name": "Drive Def 1", "rarity": 4 },
      { "name": "Drive Def 2", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 18, "atk": 7, "spd": 8, "def": 6, "res": 7 },
      "level40": { "hp": [ 36, 40, 43 ], "atk": [ 28, 31, 34 ], "spd": [ 31, 34, 37 ], "def": [ 22, 25, 29 ], "res": [ 21, 24, 27 ] },
      "level1_4": { "hp": 17, "atk": 7, "spd": 8, "def": 5, "res": 6 },
      "level40_4": { "hp": [ 34, 37, 40 ], "atk": [ 26, 29, 32 ], "spd": [ 29, 32, 35 ], "def": [ 20, 23, 26 ], "res": [ 19, 22, 25 ] }
    },
    "rarity4": true,
    "rarity5": true,
    "colorType": "Blue"
  },
  {
    "name": "Roy",
    "title": "Young Lion",
    "weaponType": "Sword",
    "moveType": "Infantry",
    "releaseDate": "Feb 02, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Roy.png",
      "main": "img/heroes-main/Roy.png"
    },
    "skills": [
      { "name": "Iron Sword", "rarity": 4 },
      { "name": "Steel Sword", "rarity": 4 },
      { "name": "Silver Sword", "rarity": 4 },
      { "name": "Binding Blade", "rarity": 5 },
      { "name": "Shove", "rarity": 4 },
      { "name": "Triangle Adept 1", "rarity": 4 },
      { "name": "Triangle Adept 2", "rarity": 4 },
      { "name": "Triangle Adept 3", "rarity": 4 },
      { "name": "Seal Def 1", "rarity": 4 },
      { "name": "Seal Def 2", "rarity": 4 },
      { "name": "Seal Def 3", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 20, "atk": 8, "spd": 9, "def": 6, "res": 4 },
      "level40": { "hp": [ 41, 44, 47 ], "atk": [ 26, 30, 33 ], "spd": [ 27, 31, 34 ], "def": [ 22, 25, 29 ], "res": [ 25, 28, 31 ] },
      "level1_4": { "hp": 19, "atk": 8, "spd": 9, "def": 5, "res": 3 },
      "level40_4": { "hp": [ 38, 41, 44 ], "atk": [ 25, 28, 31 ], "spd": [ 26, 29, 32 ], "def": [ 20, 23, 26 ], "res": [ 22, 25, 28 ] }
    },
    "rarity4": true,
    "rarity5": true,
    "colorType": "Red"
  },
  {
    "name": "Roy (Brave Heroes)",
    "title": "Brave Lion",
    "weaponType": "Sword",
    "moveType": "Cavalry",
    "releaseDate": "Aug 31, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Roy (Brave Heroes).png",
      "main": "img/heroes-main/Roy (Brave Heroes).png"
    },
    "skills": [
      { "name": "Iron Sword", "rarity": 5 },
      { "name": "Steel Sword", "rarity": 5 },
      { "name": "Silver Sword", "rarity": 5 },
      { "name": "Blazing Durandal", "rarity": 5 },
      { "name": "Night Sky", "rarity": 5 },
      { "name": "Astra", "rarity": 5 },
      { "name": "Galeforce", "rarity": 5 },
      { "name": "Darting Blow 1", "rarity": 5 },
      { "name": "Steady Blow 1", "rarity": 5 },
      { "name": "Steady Blow 2", "rarity": 5 },
      { "name": "Desperation 1", "rarity": 5 },
      { "name": "Desperation 2", "rarity": 5 },
      { "name": "Desperation 3", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 16, "atk": 8, "spd": 8, "def": 7, "res": 7 },
      "level40": { "hp": [ 34, 38, 41 ], "atk": [ 29, 32, 35 ], "spd": [ 31, 34, 37 ], "def": [ 23, 26, 30 ], "res": [ 21, 24, 27 ] }
    },
    "shortName": "Roy",
    "rarity5": true,
    "colorType": "Red"
  },
  {
    "name": "Ryoma",
    "title": "Peerless Samurai",
    "weaponType": "Sword",
    "moveType": "Infantry",
    "releaseDate": "Feb 02, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Ryoma.png",
      "main": "img/heroes-main/Ryoma.png"
    },
    "skills": [
      { "name": "Iron Sword", "rarity": 5 },
      { "name": "Steel Sword", "rarity": 5 },
      { "name": "Silver Sword", "rarity": 5 },
      { "name": "Raijinto", "rarity": 5 },
      { "name": "Night Sky", "rarity": 5 },
      { "name": "Astra", "rarity": 5 },
      { "name": "Defiant Atk 1", "rarity": 5 },
      { "name": "Defiant Atk 2", "rarity": 5 },
      { "name": "Defiant Atk 3", "rarity": 5 },
      { "name": "Hone Spd 1", "rarity": 5 },
      { "name": "Hone Spd 2", "rarity": 5 },
      { "name": "Hone Spd 3", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 19, "atk": 8, "spd": 11, "def": 5, "res": 4 },
      "level40": { "hp": [ 37, 41, 44 ], "atk": [ 31, 34, 37 ], "spd": [ 32, 35, 38 ], "def": [ 23, 27, 30 ], "res": [ 18, 21, 24 ] }
    },
    "rarity5": true,
    "colorType": "Red"
  },
  {
    "name": "Saber",
    "title": "Driven Mercenary",
    "weaponType": "Sword",
    "moveType": "Infantry",
    "releaseDate": "Jul 13, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Saber.png",
      "main": "img/heroes-main/Saber.png"
    },
    "skills": [
      { "name": "Iron Sword", "rarity": 5 },
      { "name": "Steel Sword", "rarity": 5 },
      { "name": "Slaying Edge", "rarity": 5 },
      { "name": "Slaying Edge+", "rarity": 5 },
      { "name": "Holy Vestments", "rarity": 5 },
      { "name": "Aegis", "rarity": 5 },
      { "name": "HP +3", "rarity": 5 },
      { "name": "HP Spd 1", "rarity": 5 },
      { "name": "HP Spd 2", "rarity": 5 },
      { "name": "Shield Pulse 1", "rarity": 5 },
      { "name": "Shield Pulse 2", "rarity": 5 },
      { "name": "Shield Pulse 3", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 18, "atk": 7, "spd": 9, "def": 8, "res": 5 },
      "level40": { "hp": [ 36, 40, 43 ], "atk": [ 28, 31, 34 ], "spd": [ 30, 33, 36 ], "def": [ 29, 32, 35 ], "res": [ 19, 22, 25 ] }
    },
    "rarity5": true,
    "colorType": "Red"
  },
  {
    "name": "Saizo",
    "title": "Angry Ninja",
    "weaponType": "Dagger",
    "moveType": "Infantry",
    "releaseDate": "Feb 02, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Saizo.png",
      "main": "img/heroes-main/Saizo.png"
    },
    "skills": [
      { "name": "Iron Dagger", "rarity": 3 },
      { "name": "Steel Dagger", "rarity": 3 },
      { "name": "Smoke Dagger", "rarity": 4 },
      { "name": "Smoke Dagger+", "rarity": 5 },
      { "name": "Harsh Command", "rarity": 4 },
      { "name": "Poison Strike 1", "rarity": 3 },
      { "name": "Poison Strike 2", "rarity": 3 },
      { "name": "Poison Strike 3", "rarity": 4 },
      { "name": "Spur Spd 1", "rarity": 3 },
      { "name": "Spur Spd 2", "rarity": 4 },
      { "name": "Spur Spd 3", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 17, "atk": 7, "spd": 8, "def": 9, "res": 3 },
      "level40": { "hp": [ 33, 36, 40 ], "atk": [ 25, 29, 32 ], "spd": [ 31, 34, 37 ], "def": [ 30, 33, 36 ], "res": [ 12, 16, 19 ] },
      "level1_4": { "hp": 16, "atk": 6, "spd": 8, "def": 9, "res": 2 },
      "level40_4": { "hp": [ 31, 34, 37 ], "atk": [ 23, 26, 29 ], "spd": [ 29, 32, 35 ], "def": [ 28, 31, 34 ], "res": [ 11, 14, 17 ] }
    },
    "rarity3": true,
    "rarity4": true,
    "colorType": "Neutral"
  },
  {
    "name": "Sakura",
    "title": "Loving Priestess",
    "weaponType": "Staff",
    "moveType": "Infantry",
    "releaseDate": "Feb 02, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Sakura.png",
      "main": "img/heroes-main/Sakura.png"
    },
    "skills": [
      { "name": "Assault", "rarity": 4 },
      { "name": "Fear", "rarity": 4 },
      { "name": "Fear+", "rarity": 5 },
      { "name": "Heal", "rarity": 4 },
      { "name": "Mend", "rarity": 4 },
      { "name": "Physic", "rarity": 5 },
      { "name": "Imbue", "rarity": 4 },
      { "name": "Still-Water Balm", "rarity": 5 },
      { "name": "Fortify Def 1", "rarity": 4 },
      { "name": "Fortify Def 2", "rarity": 4 },
      { "name": "Fortify Def 3", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 17, "atk": 6, "spd": 8, "def": 5, "res": 8 },
      "level40": { "hp": [ 33, 36, 40 ], "atk": [ 24, 28, 31 ], "spd": [ 26, 30, 33 ], "def": [ 21, 24, 28 ], "res": [ 26, 30, 33 ] },
      "level1_4": { "hp": 16, "atk": 5, "spd": 8, "def": 4, "res": 8 },
      "level40_4": { "hp": [ 31, 34, 37 ], "atk": [ 22, 25, 28 ], "spd": [ 25, 28, 31 ], "def": [ 19, 22, 25 ], "res": [ 25, 28, 31 ] }
    },
    "rarity4": true,
    "rarity5": true,
    "colorType": "Neutral"
  },
  {
    "name": "Sakura (Trick or Defeat!)",
    "title": "Gentle Nekomata",
    "weaponType": "Dagger",
    "moveType": "Infantry",
    "releaseDate": "Oct 30, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Sakura (Trick or Defeat!).png",
      "main": "img/heroes-main/Sakura (Trick or Defeat!).png"
    },
    "skills": [
      { "name": "Iron Dagger", "rarity": 5 },
      { "name": "Steel Dagger", "rarity": 5 },
      { "name": "Kitty Paddle", "rarity": 5 },
      { "name": "Kitty Paddle+", "rarity": 5 },
      { "name": "Chilling Wind", "rarity": 5 },
      { "name": "Glacies", "rarity": 5 },
      { "name": "Warding Stance 1", "rarity": 5 },
      { "name": "Warding Stance 2", "rarity": 5 },
      { "name": "Warding Stance 3", "rarity": 5 },
      { "name": "Guard 1", "rarity": 5 },
      { "name": "Guard 2", "rarity": 5 },
      { "name": "Guard 3", "rarity": 5 },
      { "name": "Dagger Valor 1", "rarity": 5 },
      { "name": "Dagger Valor 2", "rarity": 5 },
      { "name": "Dagger Valor 3", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 16, "atk": 8, "spd": 8, "def": 4, "res": 8 },
      "level40": { "hp": [ 30, 33, 36 ], "atk": [ 29, 32, 35 ], "spd": [ 31, 34, 37 ], "def": [ 11, 14, 18 ], "res": [ 31, 34, 37 ] }
    },
    "shortName": "Sakura",
    "rarity5": true,
    "colorType": "Neutral",
    "limited": true
  },
  {
    "name": "Sanaki",
    "title": "Begnion's Apostle",
    "weaponType": "Tome",
    "moveType": "Infantry",
    "releaseDate": "Feb 27, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Sanaki.png",
      "main": "img/heroes-main/Sanaki.png"
    },
    "skills": [
      { "name": "Fire", "rarity": 5 },
      { "name": "Elfire", "rarity": 5 },
      { "name": "Bolganone", "rarity": 5 },
      { "name": "Cymbeline", "rarity": 5 },
      { "name": "Harsh Command", "rarity": 5 },
      { "name": "Triangle Adept 1", "rarity": 5 },
      { "name": "Triangle Adept 2", "rarity": 5 },
      { "name": "Triangle Adept 3", "rarity": 5 },
      { "name": "Hone Atk 1", "rarity": 5 },
      { "name": "Hone Atk 2", "rarity": 5 },
      { "name": "Hone Atk 3", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 16, "atk": 9, "spd": 7, "def": 4, "res": 8 },
      "level40": { "hp": [ 30, 33, 36 ], "atk": [ 34, 37, 40 ], "spd": [ 23, 26, 30 ], "def": [ 13, 17, 20 ], "res": [ 31, 34, 37 ] }
    },
    "rarity5": true,
    "colorType": "Red"
  },
  {
    "name": "Selena",
    "title": "Cutting Wit",
    "weaponType": "Sword",
    "moveType": "Infantry",
    "releaseDate": "Feb 02, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Selena.png",
      "main": "img/heroes-main/Selena.png"
    },
    "skills": [
      { "name": "Iron Sword", "rarity": 3 },
      { "name": "Steel Sword", "rarity": 3 },
      { "name": "Armorslayer", "rarity": 4 },
      { "name": "Armorslayer+", "rarity": 5 },
      { "name": "Reposition", "rarity": 3 },
      { "name": "Triangle Adept 1", "rarity": 3 },
      { "name": "Triangle Adept 2", "rarity": 4 },
      { "name": "Triangle Adept 3", "rarity": 5 },
      { "name": "Threaten Spd 1", "rarity": 3 },
      { "name": "Threaten Spd 2", "rarity": 3 },
      { "name": "Threaten Spd 3", "rarity": 4 }
    ],
    "stats": {
      "level1": { "hp": 18, "atk": 6, "spd": 9, "def": 8, "res": 6 },
      "level40": { "hp": [ 34, 37, 41 ], "atk": [ 22, 25, 29 ], "spd": [ 32, 35, 38 ], "def": [ 29, 32, 35 ], "res": [ 24, 28, 31 ] },
      "level1_4": { "hp": 17, "atk": 5, "spd": 9, "def": 8, "res": 5 },
      "level40_4": { "hp": [ 32, 35, 38 ], "atk": [ 20, 23, 26 ], "spd": [ 30, 33, 36 ], "def": [ 27, 30, 33 ], "res": [ 22, 25, 28 ] }
    },
    "rarity3": true,
    "rarity4": true,
    "colorType": "Red"
  },
  {
    "name": "Seliph",
    "title": "Heir of Light",
    "weaponType": "Sword",
    "moveType": "Infantry",
    "releaseDate": "Feb 15, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Seliph.png",
      "main": "img/heroes-main/Seliph.png"
    },
    "skills": [
      { "name": "Iron Sword", "rarity": 4 },
      { "name": "Steel Sword", "rarity": 4 },
      { "name": "Silver Sword", "rarity": 4 },
      { "name": "Tyrfing", "rarity": 5 },
      { "name": "Rally Speed", "rarity": 4 },
      { "name": "HP +3", "rarity": 4 },
      { "name": "HP +4", "rarity": 4 },
      { "name": "HP +5", "rarity": 4 },
      { "name": "Brash Assault 1", "rarity": 4 },
      { "name": "Brash Assault 2", "rarity": 4 },
      { "name": "Brash Assault 3", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 19, "atk": 8, "spd": 7, "def": 8, "res": 5 },
      "level40": { "hp": [ 44, 47, 50 ], "atk": [ 31, 34, 37 ], "spd": [ 21, 24, 27 ], "def": [ 26, 30, 33 ], "res": [ 19, 22, 25 ] },
      "level1_4": { "hp": 18, "atk": 8, "spd": 6, "def": 8, "res": 4 },
      "level40_4": { "hp": [ 41, 44, 47 ], "atk": [ 29, 32, 35 ], "spd": [ 19, 22, 25 ], "def": [ 25, 28, 31 ], "res": [ 17, 20, 23 ] }
    },
    "rarity4": true,
    "rarity5": true,
    "colorType": "Red"
  },
  {
    "name": "Serra",
    "title": "Outspoken Cleric",
    "weaponType": "Staff",
    "moveType": "Infantry",
    "releaseDate": "Feb 02, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Serra.png",
      "main": "img/heroes-main/Serra.png"
    },
    "skills": [
      { "name": "Assault", "rarity": 3 },
      { "name": "Absorb", "rarity": 3 },
      { "name": "Absorb+", "rarity": 5 },
      { "name": "Heal", "rarity": 3 },
      { "name": "Mend", "rarity": 3 },
      { "name": "Recover", "rarity": 4 },
      { "name": "Imbue", "rarity": 4 },
      { "name": "Swift-Winds Balm", "rarity": 3 },
      { "name": "Hone Atk 1", "rarity": 3 },
      { "name": "Hone Atk 2", "rarity": 4 },
      { "name": "Hone Atk 3", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 16, "atk": 6, "spd": 9, "def": 4, "res": 9 },
      "level40": { "hp": [ 30, 33, 36 ], "atk": [ 27, 30, 33 ], "spd": [ 27, 31, 34 ], "def": [ 18, 21, 24 ], "res": [ 30, 33, 36 ] },
      "level1_4": { "hp": 15, "atk": 5, "spd": 9, "def": 3, "res": 9 },
      "level40_4": { "hp": [ 28, 31, 34 ], "atk": [ 24, 27, 30 ], "spd": [ 26, 29, 32 ], "def": [ 16, 19, 22 ], "res": [ 28, 31, 34 ] }
    },
    "rarity3": true,
    "rarity4": true,
    "colorType": "Neutral"
  },
  {
    "name": "Seth",
    "title": "Silver Knight",
    "weaponType": "Sword",
    "moveType": "Cavalry",
    "releaseDate": "Aug 15, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Seth.png",
      "main": "img/heroes-main/Seth.png"
    },
    "skills": [
      { "name": "Iron Sword", "rarity": 4 },
      { "name": "Steel Sword", "rarity": 4 },
      { "name": "Ruby Sword", "rarity": 4 },
      { "name": "Ruby Sword+", "rarity": 5 },
      { "name": "Swap", "rarity": 4 },
      { "name": "Fortress Def 1", "rarity": 4 },
      { "name": "Fortress Def 2", "rarity": 4 },
      { "name": "Fortress Def 3", "rarity": 4 },
      { "name": "Seal Atk 1", "rarity": 4 },
      { "name": "Seal Atk Def 1", "rarity": 4 },
      { "name": "Seal Atk Def 2", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 18, "atk": 8, "spd": 7, "def": 8, "res": 5 },
      "level40": { "hp": [ 34, 37, 41 ], "atk": [ 29, 32, 35 ], "spd": [ 28, 31, 34 ], "def": [ 29, 32, 35 ], "res": [ 19, 22, 25 ] },
      "level1_4": { "hp": 17, "atk": 8, "spd": 6, "def": 8, "res": 4 },
      "level40_4": { "hp": [ 32, 35, 38 ], "atk": [ 27, 30, 33 ], "spd": [ 25, 28, 31 ], "def": [ 27, 30, 33 ], "res": [ 17, 20, 23 ] }
    },
    "rarity4": true,
    "rarity5": true,
    "colorType": "Red"
  },
  {
    "name": "Setsuna",
    "title": "Absent Archer",
    "weaponType": "Bow",
    "moveType": "Infantry",
    "releaseDate": "Feb 02, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Setsuna.png",
      "main": "img/heroes-main/Setsuna.png"
    },
    "skills": [
      { "name": "Iron Bow", "rarity": 3 },
      { "name": "Steel Bow", "rarity": 3 },
      { "name": "Assassin's Bow", "rarity": 4 },
      { "name": "Assassin's Bow+", "rarity": 5 },
      { "name": "Reciprocal Aid", "rarity": 4 },
      { "name": "HP +3", "rarity": 3 },
      { "name": "HP +4", "rarity": 4 },
      { "name": "HP +5", "rarity": 5 },
      { "name": "Bowbreaker 1", "rarity": 3 },
      { "name": "Bowbreaker 2", "rarity": 3 },
      { "name": "Bowbreaker 3", "rarity": 4 }
    ],
    "stats": {
      "level1": { "hp": 18, "atk": 6, "spd": 9, "def": 5, "res": 6 },
      "level40": { "hp": [ 34, 37, 41 ], "atk": [ 24, 28, 31 ], "spd": [ 34, 37, 40 ], "def": [ 19, 22, 25 ], "res": [ 20, 23, 26 ] },
      "level1_4": { "hp": 17, "atk": 6, "spd": 9, "def": 4, "res": 5 },
      "level40_4": { "hp": [ 32, 35, 38 ], "atk": [ 23, 26, 29 ], "spd": [ 32, 35, 38 ], "def": [ 17, 20, 23 ], "res": [ 18, 21, 24 ] }
    },
    "rarity3": true,
    "rarity4": true,
    "colorType": "Neutral"
  },
  {
    "name": "Shanna",
    "title": "Sprightly Flier",
    "weaponType": "Lance",
    "moveType": "Flying",
    "releaseDate": "Feb 02, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Shanna.png",
      "main": "img/heroes-main/Shanna.png"
    },
    "skills": [
      { "name": "Iron Lance", "rarity": 3 },
      { "name": "Steel Lance", "rarity": 3 },
      { "name": "Killer Lance", "rarity": 4 },
      { "name": "Killer Lance+", "rarity": 5 },
      { "name": "Chilling Wind", "rarity": 4 },
      { "name": "Iceberg", "rarity": 4 },
      { "name": "Desperation 1", "rarity": 3 },
      { "name": "Desperation 2", "rarity": 3 },
      { "name": "Desperation 3", "rarity": 4 },
      { "name": "Threaten Spd 1", "rarity": 3 },
      { "name": "Threaten Spd 2", "rarity": 4 },
      { "name": "Threaten Spd 3", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 17, "atk": 8, "spd": 9, "def": 6, "res": 7 },
      "level40": { "hp": [ 35, 39, 42 ], "atk": [ 26, 30, 33 ], "spd": [ 32, 35, 38 ], "def": [ 22, 25, 29 ], "res": [ 25, 29, 32 ] },
      "level1_4": { "hp": 16, "atk": 8, "spd": 9, "def": 5, "res": 6 },
      "level40_4": { "hp": [ 33, 36, 39 ], "atk": [ 25, 28, 31 ], "spd": [ 30, 33, 36 ], "def": [ 20, 23, 26 ], "res": [ 23, 26, 29 ] }
    },
    "rarity3": true,
    "rarity4": true,
    "colorType": "Blue"
  },
  {
    "name": "Sharena",
    "title": "Princess of Askr",
    "weaponType": "Lance",
    "moveType": "Infantry",
    "releaseDate": "Feb 02, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Sharena.png",
      "main": "img/heroes-main/Sharena.png"
    },
    "skills": [
      { "name": "Iron Lance", "rarity": 2 },
      { "name": "Steel Lance", "rarity": 2 },
      { "name": "Silver Lance", "rarity": 3 },
      { "name": "Fensalir", "rarity": 5 },
      { "name": "Rally Attack", "rarity": 2 },
      { "name": "Speed +1", "rarity": 1 },
      { "name": "Speed +2", "rarity": 2 },
      { "name": "Speed +3", "rarity": 4 },
      { "name": "Fortify Def 1", "rarity": 3 },
      { "name": "Fortify Def 2", "rarity": 4 },
      { "name": "Fortify Def 3", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 19, "atk": 8, "spd": 8, "def": 7, "res": 5 },
      "level40": { "hp": [ 40, 43, 46 ], "atk": [ 29, 32, 35 ], "spd": [ 29, 32, 35 ], "def": [ 25, 29, 32 ], "res": [ 19, 22, 25 ] },
      "level1_4": { "hp": 18, "atk": 8, "spd": 8, "def": 6, "res": 4 },
      "level40_4": { "hp": [ 37, 40, 43 ], "atk": [ 27, 30, 33 ], "spd": [ 27, 30, 33 ], "def": [ 23, 26, 29 ], "res": [ 17, 20, 23 ] }
    },
    "rarity2": true,
    "rarity3": true,
    "rarity4": true,
    "limited": true,
    "colorType": "Blue"
  },
  {
    "name": "Sheena",
    "title": "Princess of Gra",
    "weaponType": "Axe",
    "moveType": "Armored",
    "releaseDate": "Feb 02, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Sheena.png",
      "main": "img/heroes-main/Sheena.png"
    },
    "skills": [
      { "name": "Iron Axe", "rarity": 4 },
      { "name": "Steel Axe", "rarity": 4 },
      { "name": "Killer Axe", "rarity": 4 },
      { "name": "Killer Axe+", "rarity": 5 },
      { "name": "Buckler", "rarity": 4 },
      { "name": "Escutcheon", "rarity": 4 },
      { "name": "Svalinn Shield", "rarity": 4 },
      { "name": "Fortify Def 1", "rarity": 4 },
      { "name": "Fortify Def 2", "rarity": 4 },
      { "name": "Fortify Armor", "rarity": 4 }
    ],
    "stats": {
      "level1": { "hp": 21, "atk": 8, "spd": 6, "def": 12, "res": 7 },
      "level40": { "hp": [ 42, 45, 48 ], "atk": [ 26, 30, 33 ], "spd": [ 22, 25, 29 ], "def": [ 33, 36, 39 ], "res": [ 30, 33, 36 ] },
      "level1_4": { "hp": 20, "atk": 8, "spd": 5, "def": 12, "res": 6 },
      "level40_4": { "hp": [ 39, 42, 45 ], "atk": [ 25, 28, 31 ], "spd": [ 20, 23, 26 ], "def": [ 31, 34, 37 ], "res": [ 27, 30, 33 ] },
    },
    "rarity4": true,
    "rarity5": true,
    "colorType": "Green"
  },
  {
    "name": "Shigure (Performing Arts)",
    "title": "Dark Sky Singer",
    "weaponType": "Tome",
    "moveType": "Infantry",
    "releaseDate": "Sep 29, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Shigure (Performing Arts).png",
      "main": "img/heroes-main/Shigure (Performing Arts).png"
    },
    "skills": [
      { "name": "Thunder", "rarity": 5 },
      { "name": "Elthunder", "rarity": 5 },
      { "name": "Dancer's Score", "rarity": 5 },
      { "name": "Dancer's Score+", "rarity": 5 },
      { "name": "Sing", "rarity": 5 },
      { "name": "Torrent Dance 1", "rarity": 5 },
      { "name": "Geyser Dance 1", "rarity": 5 },
      { "name": "Geyser Dance 2", "rarity": 5 },
      { "name": "B Tome Valor 1", "rarity": 5 },
      { "name": "B Tome Valor 2", "rarity": 5 },
      { "name": "B Tome Valor 3", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 15, "atk": 7, "spd": 5, "def": 4, "res": 5 },
      "level40": { "hp": [ 31, 34, 38 ], "atk": [ 28, 31, 34 ], "spd": [ 26, 29, 32 ], "def": [ 18, 21, 24 ], "res": [ 21, 24, 28 ] }
    },
    "shortName": "Shigure",
    "rarity5": true,
    "colorType": "Blue",
    "limited": true
  },
  {
    "name": "Shiro",
    "title": "Raw Talent",
    "weaponType": "Lance",
    "moveType": "Infantry",
    "releaseDate": "Dec 04, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Shiro.png",
      "main": "img/heroes-main/Shiro.png"
    },
    "skills": [
      { "name": "Iron Lance", "rarity": 5 },
      { "name": "Steel Lance", "rarity": 5 },
      { "name": "Silver Lance", "rarity": 5 },
      { "name": "Bright Naginata", "rarity": 5 },
      { "name": "Swap", "rarity": 5 },
      { "name": "Steady Stance 1", "rarity": 5 },
      { "name": "Steady Stance 2", "rarity": 5 },
      { "name": "Steady Stance 3", "rarity": 5 },
      { "name": "Def Tactic 1", "rarity": 5 },
      { "name": "Def Tactic 2", "rarity": 5 },
      { "name": "Def Tactic 3", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 19, "atk": 9, "spd": 6, "def": 9, "res": 5 },
      "level40": { "hp": [ 37, 41, 44 ], "atk": [ 32, 35, 38 ], "spd": [ 27, 30, 33 ], "def": [ 32, 35, 38 ], "res": [ 19, 22, 25 ] }
    },
    "rarity5": true,
    "colorType": "Blue"
  },
  {
    "name": "Siegbert",
    "title": "Future King",
    "weaponType": "Sword",
    "moveType": "Cavalry",
    "releaseDate": "Dec 04, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Siegbert.png",
      "main": "img/heroes-main/Siegbert.png"
    },
    "skills": [
      { "name": "Iron Sword", "rarity": 5 },
      { "name": "Steel Sword", "rarity": 5 },
      { "name": "Silver Sword", "rarity": 5 },
      { "name": "Dark Greatsword", "rarity": 5 },
      { "name": "Dragon Gaze", "rarity": 5 },
      { "name": "Dragon Fang", "rarity": 5 },
      { "name": "Death Blow 1", "rarity": 5 },
      { "name": "Death Blow 2", "rarity": 5 },
      { "name": "Death Blow 3", "rarity": 5 },
      { "name": "Atk Tactic 1", "rarity": 5 },
      { "name": "Atk Tactic 2", "rarity": 5 },
      { "name": "Atk Tactic 3", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 19, "atk": 8, "spd": 9, "def": 7, "res": 3 },
      "level40": { "hp": [ 37, 41, 44 ], "atk": [ 31, 34, 37 ], "spd": [ 32, 35, 38 ], "def": [ 28, 31, 34 ], "res": [ 12, 16, 19 ] }
    },
    "rarity5": true,
    "colorType": "Red"
  },
  {
    "name": "Sigurd",
    "title": "Holy Knight",
    "weaponType": "Sword",
    "moveType": "Cavalry",
    "releaseDate": "Oct 16, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Sigurd.png",
      "main": "img/heroes-main/Sigurd.png"
    },
    "skills": [
      { "name": "Iron Sword", "rarity": 5 },
      { "name": "Steel Sword", "rarity": 5 },
      { "name": "Silver Sword", "rarity": 5 },
      { "name": "Divine Tyrfing", "rarity": 5 },
      { "name": "Miracle", "rarity": 5 },
      { "name": "Close Def 1", "rarity": 5 },
      { "name": "Close Def 2", "rarity": 5 },
      { "name": "Close Def 3", "rarity": 5 },
      { "name": "Crusader's Ward", "rarity": 5 },
      { "name": "Spd Smoke 1", "rarity": 5 },
      { "name": "Spd Smoke 2", "rarity": 5 },
      { "name": "Spd Smoke 3", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 19, "atk": 9, "spd": 8, "def": 6, "res": 4 },
      "level40": { "hp": [ 37, 41, 44 ], "atk": [ 32, 35, 38 ], "spd": [ 29, 32, 35 ], "def": [ 31, 34, 37 ], "res": [ 13, 17, 20 ] }
    },
    "rarity5": true,
    "colorType": "Red"
  },
  {
    "name": "Soleil",
    "title": "Adorable Adorer",
    "weaponType": "Sword",
    "moveType": "Infantry",
    "releaseDate": "Dec 04, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Soleil.png",
      "main": "img/heroes-main/Soleil.png"
    },
    "skills": [
      { "name": "Iron Sword", "rarity": 4 },
      { "name": "Steel Sword", "rarity": 4 },
      { "name": "Firesweep Sword", "rarity": 4 },
      { "name": "Firesweep Sword+", "rarity": 5 },
      { "name": "Rising Wind", "rarity": 4 },
      { "name": "Blazing Wind", "rarity": 4 },
      { "name": "Darting Blow 1", "rarity": 4 },
      { "name": "Darting Blow 2", "rarity": 4 },
      { "name": "Darting Blow 3", "rarity": 5 },
      { "name": "Spur Res 1", "rarity": 4 },
      { "name": "Drive Res 1", "rarity": 4 },
      { "name": "Drive Res 2", "rarity": 4 }
    ],
    "stats": {
      "level1": { "hp": 18, "atk": 10, "spd": 9, "def": 6, "res": 5 },
      "level40": { "hp": [ 34, 37, 41 ], "atk": [ 35, 38, 41 ], "spd": [ 32, 35, 38 ], "def": [ 24, 28, 31 ], "res": [ 21, 24, 28 ] },
      "level1_4": { "hp": 17, "atk": 10, "spd": 9, "def": 5, "res": 4 },
      "level40_4": { "hp": [ 32, 35, 38 ], "atk": [ 33, 36, 39 ], "spd": [ 30, 36, 39 ], "def": [ 22, 25, 28 ], "res": [ 19, 22, 25 ] }
    },
    "rarity4": true,
    "rarity5": true,
    "colorType": "Red"
  },
  {
    "name": "Sonya",
    "title": "Vengeful Mage",
    "weaponType": "Tome",
    "moveType": "Infantry",
    "releaseDate": "Jul 13, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Sonya.png",
      "main": "img/heroes-main/Sonya.png"
    },
    "skills": [
      { "name": "Wind", "rarity": 5 },
      { "name": "Elwind", "rarity": 5 },
      { "name": "Rexcalibur", "rarity": 5 },
      { "name": "Dark Excalibur", "rarity": 5 },
      { "name": "New Moon", "rarity": 5 },
      { "name": "Moonbow", "rarity": 5 },
      { "name": "Warding Blow 1", "rarity": 5 },
      { "name": "Mirror Strike 1", "rarity": 5 },
      { "name": "Mirror Strike 2", "rarity": 5 },
      { "name": "Res Ploy 1", "rarity": 5 },
      { "name": "Res Ploy 2", "rarity": 5 },
      { "name": "Res Ploy 3", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 17, "atk": 7, "spd": 7, "def": 5, "res": 8 },
      "level40": { "hp": [ 33, 36, 40 ], "atk": [ 30, 33, 36 ], "spd": [ 28, 31, 34 ], "def": [ 12, 15, 19 ], "res": [ 29, 32, 35 ] }
    },
    "rarity5": true,
    "colorType": "Green"
  },
  {
    "name": "Sophia",
    "title": "Nabata Prophet",
    "weaponType": "Tome",
    "moveType": "Infantry",
    "releaseDate": "Feb 02, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Sophia.png",
      "main": "img/heroes-main/Sophia.png"
    },
    "skills": [
      { "name": "Flux", "rarity": 1 },
      { "name": "Ruin", "rarity": 3 },
      { "name": "Fenrir", "rarity": 4 },
      { "name": "Fenrir+", "rarity": 5 },
      { "name": "Dragon Gaze", "rarity": 4 },
      { "name": "Dragon Fang", "rarity": 4 },
      { "name": "Warding Blow 1", "rarity": 3 },
      { "name": "Warding Blow 2", "rarity": 4 },
      { "name": "Warding Blow 3", "rarity": 5 },
      { "name": "Fortify Res 1", "rarity": 1 },
      { "name": "Fortify Res 2", "rarity": 2 },
      { "name": "Fortify Res 3", "rarity": 4 }
    ],
    "stats": {
      "level1": { "hp": 18, "atk": 9, "spd": 4, "def": 6, "res": 7 },
      "level40": { "hp": [ 36, 40, 43 ], "atk": [ 30, 33, 36 ], "spd": [ 16, 19, 22 ], "def": [ 24, 28, 31 ], "res": [ 25, 29, 32 ] },
      "level1_4": { "hp": 17, "atk": 9, "spd": 3, "def": 5, "res": 7 },
      "level40_4": { "hp": [ 34, 37, 40 ], "atk": [ 28, 31, 34 ], "spd": [ 14, 17, 20 ], "def": [ 22, 25, 28 ], "res": [ 24, 27, 30 ] }
    },
    "rarity3": true,
    "rarity4": true,
    "colorType": "Red"
  },
  {
    "name": "Soren",
    "title": "Shrewd Strategist",
    "weaponType": "Tome",
    "moveType": "Infantry",
    "releaseDate": "Apr 26, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Soren.png",
      "main": "img/heroes-main/Soren.png"
    },
    "skills": [
      { "name": "Wind", "rarity": 4 },
      { "name": "Elwind", "rarity": 4 },
      { "name": "Rexcalibur", "rarity": 4 },
      { "name": "Rexcalibur+", "rarity": 5 },
      { "name": "Rising Wind", "rarity": 4 },
      { "name": "Growing Wind", "rarity": 4 },
      { "name": "Watersweep 1", "rarity": 4 },
      { "name": "Watersweep 2", "rarity": 4 },
      { "name": "Watersweep 3", "rarity": 5 },
      { "name": "Fortify Res 1", "rarity": 4 },
      { "name": "Fortify Res 2", "rarity": 4 },
      { "name": "Fortify Res 3", "rarity": 4 }
    ],
    "stats": {
      "level1": { "hp": 17, "atk": 7, "spd": 9, "def": 4, "res": 7 },
      "level40": { "hp": [ 33, 36, 40 ], "atk": [ 30, 33, 36 ], "spd": [ 30, 33, 36 ], "def": [ 13, 17, 20 ], "res": [ 25, 29, 32 ] },
      "level1_4": { "hp": 16, "atk": 7, "spd": 9, "def": 3, "res": 6 },
      "level40_4": { "hp": [ 31, 34, 37 ], "atk": [ 28, 31, 34 ], "spd": [ 28, 31, 34 ], "def": [ 12, 15, 18 ], "res": [ 23, 26, 29 ] }
    },
    "rarity4": true,
    "rarity5": true,
    "colorType": "Green"
  },
  {
    "name": "Sothe",
    "title": "Zephyr",
    "weaponType": "Dagger",
    "moveType": "Infantry",
    "releaseDate": "Jan 12, 2018",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Sothe.png",
      "main": "img/heroes-main/Sothe.png"
    },
    "skills": [
      { "name": "Iron Dagger", "rarity": 5 },
      { "name": "Steel Dagger", "rarity": 5 },
      { "name": "Solver Dagger", "rarity": 5 },
      { "name": "Peshkatz", "rarity": 5 },
      { "name": "Night Sky", "rarity": 5 },
      { "name": "Glimmer", "rarity": 5 },
      { "name": "Life and Death 1", "rarity": 5 },
      { "name": "Life and Death 2", "rarity": 5 },
      { "name": "Life and Death 3", "rarity": 5 },
      { "name": "Spur Atk 1", "rarity": 5 },
      { "name": "Spur Atk/Spd 1", "rarity": 5 },
      { "name": "Spur Atk/Spd 2", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 17, "atk": 10, "spd": 9, "def": 5, "res": 4 },
      "level40": { "hp": [ 35, 39, 42 ], "atk": [ 33, 36, 39 ], "spd": [ 30, 33, 36 ], "def": [ 19, 22, 25 ], "res": [ 18, 21, 24 ] },
    },
    "rarity5": true,
    "colorType": "Neutral",
  },
  {
    "name": "Stahl",
    "title": "Viridian Knight",
    "weaponType": "Sword",
    "moveType": "Cavalry",
    "releaseDate": "Feb 02, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Stahl.png",
      "main": "img/heroes-main/Stahl.png"
    },
    "skills": [
      { "name": "Iron Sword", "rarity": 1 },
      { "name": "Steel Sword", "rarity": 3 },
      { "name": "Ruby Sword", "rarity": 4 },
      { "name": "Ruby Sword+", "rarity": 5 },
      { "name": "Swap", "rarity": 4 },
      { "name": "Defense +1", "rarity": 1 },
      { "name": "Defense +2", "rarity": 2 },
      { "name": "Defense +3", "rarity": 4 },
      { "name": "Obstruct 1", "rarity": 3 },
      { "name": "Obstruct 2", "rarity": 4 },
      { "name": "Obstruct 3", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 19, "atk": 7, "spd": 7, "def": 8, "res": 5 },
      "level40": { "hp": [ 42, 45, 48 ], "atk": [ 28, 31, 34 ], "spd": [ 23, 26, 30 ], "def": [ 26, 30, 33 ], "res": [ 19, 22, 25 ] },
      "level1_4": { "hp": 18, "atk": 7, "spd": 6, "def": 8, "res": 4 },
      "level40_4": { "hp": [ 39, 42, 45 ], "atk": [ 26, 29, 32 ], "spd": [ 21, 24, 27 ], "def": [ 25, 28, 31 ], "res": [ 17, 20, 23 ] }
    },
    "rarity3": true,
    "rarity4": true,
    "colorType": "Red"
  },
  {
    "name": "Subaki",
    "title": "Perfect Expert",
    "weaponType": "Lance",
    "moveType": "Flying",
    "releaseDate": "Feb 02, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Subaki.png",
      "main": "img/heroes-main/Subaki.png"
    },
    "skills": [
      { "name": "Iron Lance", "rarity": 1 },
      { "name": "Steel Lance", "rarity": 3 },
      { "name": "Sapphire Lance", "rarity": 4 },
      { "name": "Sapphire Lance+", "rarity": 5 },
      { "name": "Swap", "rarity": 4 },
      { "name": "Resistance +1", "rarity": 1 },
      { "name": "Resistance +2", "rarity": 2 },
      { "name": "Resistance +3", "rarity": 4 },
      { "name": "Quick Riposte 1", "rarity": 3 },
      { "name": "Quick Riposte 2", "rarity": 4 },
      { "name": "Quick Riposte 3", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 18, "atk": 6, "spd": 9, "def": 9, "res": 5 },
      "level40": { "hp": [ 36, 40, 43 ], "atk": [ 22, 25, 29 ], "spd": [ 32, 35, 38 ], "def": [ 32, 35, 38 ], "res": [ 19, 22, 25 ] },
      "level1_4": { "hp": 17, "atk": 5, "spd": 9, "def": 9, "res": 4 },
      "level40_4": { "hp": [ 34, 37, 40 ], "atk": [ 20, 23, 26 ], "spd": [ 30, 33, 36 ], "def": [ 30, 33, 36 ], "res": [ 17, 20, 23 ] }
    },
    "rarity3": true,
    "rarity4": true,
    "colorType": "Blue"
  },
  {
    "name": "Sully",
    "title": "Crimson Knight",
    "weaponType": "Lance",
    "moveType": "Cavalry",
    "releaseDate": "Feb 02, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Sully.png",
      "main": "img/heroes-main/Sully.png"
    },
    "skills": [
      { "name": "Iron Lance", "rarity": 1 },
      { "name": "Steel Lance", "rarity": 3 },
      { "name": "Sapphire Lance", "rarity": 4 },
      { "name": "Sapphire Lance+", "rarity": 5 },
      { "name": "Draw Back", "rarity": 4 },
      { "name": "Swordbreaker 1", "rarity": 3 },
      { "name": "Swordbreaker 2", "rarity": 4 },
      { "name": "Swordbreaker 3", "rarity": 5 },
      { "name": "Spur Def 1", "rarity": 3 },
      { "name": "Spur Def 2", "rarity": 3 },
      { "name": "Spur Def 3", "rarity": 4 }
    ],
    "stats": {
      "level1": { "hp": 18, "atk": 7, "spd": 8, "def": 7, "res": 6 },
      "level40": { "hp": [ 39, 42, 45 ], "atk": [ 23, 26, 30 ], "spd": [ 31, 34, 37 ], "def": [ 21, 24, 27 ], "res": [ 24, 28, 31 ] },
      "level1_4": { "hp": 17, "atk": 7, "spd": 8, "def": 6, "res": 5 },
      "level40_4": { "hp": [ 36, 39, 42 ], "atk": [ 22, 25, 28 ], "spd": [ 29, 32, 35 ], "def": [ 19, 22, 25 ], "res": [ 22, 25, 28 ] }
    },
    "rarity3": true,
    "rarity4": true,
    "colorType": "Blue"
  },
  {
    "name": "Tailtiu",
    "title": "Thunder Noble",
    "weaponType": "Tome",
    "moveType": "Infantry",
    "releaseDate": "Oct 16, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Tailtiu.png",
      "main": "img/heroes-main/Tailtiu.png"
    },
    "skills": [
      { "name": "Thunder", "rarity": 4 },
      { "name": "Elthunder", "rarity": 4 },
      { "name": "Blárblade", "rarity": 4 },
      { "name": "Blárblade+", "rarity": 5 },
      { "name": "Rally Resistance", "rarity": 4 },
      { "name": "Rally Speed Resistance", "rarity": 4 },
      { "name": "Attack +1", "rarity": 4 },
      { "name": "Attack Res 1", "rarity": 4 },
      { "name": "Attack Res 2", "rarity": 5 },
      { "name": "Spur Spd 1", "rarity": 4 },
      { "name": "Drive Spd 1", "rarity": 4 },
      { "name": "Drive Spd 2", "rarity": 4 }
    ],
    "stats": {
      "level1": { "hp": 17, "atk": 8, "spd": 9, "def": 4, "res": 6 },
      "level40": { "hp": [ 35, 39, 42 ], "atk": [ 29, 32, 35 ], "spd": [ 32, 35, 38 ], "def": [ 13, 17, 20 ], "res": [ 22, 25, 29 ] },
      "level1_4": { "hp": 16, "atk": 8, "spd": 9, "def": 3, "res": 5 },
      "level40_4": { "hp": [ 33, 36, 39 ], "atk": [ 27, 30, 33 ], "spd": [ 30, 33, 36 ], "def": [ 12, 15, 18 ], "res": [ 20, 23, 26 ] }
    },
    "rarity4": true,
    "rarity5": true,
    "colorType": "Blue"
  },
  {
    "name": "Takumi",
    "title": "Wild Card",
    "weaponType": "Bow",
    "moveType": "Infantry",
    "releaseDate": "Feb 02, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Takumi.png",
      "main": "img/heroes-main/Takumi.png"
    },
    "skills": [
      { "name": "Iron Bow", "rarity": 5 },
      { "name": "Steel Bow", "rarity": 5 },
      { "name": "Silver Bow", "rarity": 5 },
      { "name": "Fujin Yumi", "rarity": 5 },
      { "name": "Retribution", "rarity": 5 },
      { "name": "Vengeance", "rarity": 5 },
      { "name": "Close Counter", "rarity": 5 },
      { "name": "Threaten Spd 1", "rarity": 5 },
      { "name": "Threaten Spd 2", "rarity": 5 },
      { "name": "Threaten Spd 3", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 18, "atk": 8, "spd": 7, "def": 6, "res": 5 },
      "level40": { "hp": [ 36, 40, 43 ], "atk": [ 29, 32, 35 ], "spd": [ 30, 33, 36 ], "def": [ 22, 25, 29 ], "res": [ 14, 18, 21 ] }
    },
    "rarity5": true,
    "colorType": "Neutral"
  },
  {
    "name": "Takumi (Happy New Year!)",
    "title": "Prince of Soup",
    "weaponType": "Dagger",
    "moveType": "Infantry",
    "releaseDate": "Jan 01, 2018",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Takumi (Happy New Year!).png",
      "main": "img/heroes-main/Takumi (Happy New Year!).png"
    },
    "skills": [
      { "name": "Iron Dagger", "rarity": 5 },
      { "name": "Steel Dagger", "rarity": 5 },
      { "name": "Kagami Mochi", "rarity": 5 },
      { "name": "Kagami Mochi+", "rarity": 5 },
      { "name": "New Moon", "rarity": 5 },
      { "name": "Moonbow", "rarity": 5 },
      { "name": "Atk/Res Bond 1", "rarity": 5 },
      { "name": "Atk/Res Bond 2", "rarity": 5 },
      { "name": "Atk/Res Bond 3", "rarity": 5 },
      { "name": "Bowbreaker 1", "rarity": 5 },
      { "name": "Bowbreaker 2", "rarity": 5 },
      { "name": "Bowbreaker 3", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 18, "atk": 8, "spd": 10, "def": 4, "res": 5 },
      "level40": { "hp": [ 36, 40, 43 ], "atk": [ 31, 34, 37 ], "spd": [ 31, 34, 37 ], "def": [ 13, 17, 20 ], "res": [ 23, 27, 30 ] }
    },
    "shortName": "Takumi",
    "rarity5": true,
    "colorType": "Neutral",
    "limited": true
  },
  {
    "name": "Tana",
    "title": "Winged Princess",
    "weaponType": "Lance",
    "moveType": "Flying",
    "releaseDate": "Aug 15, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Tana.png",
      "main": "img/heroes-main/Tana.png"
    },
    "skills": [
      { "name": "Iron Lance", "rarity": 5 },
      { "name": "Steel Lance", "rarity": 5 },
      { "name": "Heavy Spear", "rarity": 5 },
      { "name": "Vidofnir", "rarity": 5 },
      { "name": "New Moon", "rarity": 5 },
      { "name": "Moonbow", "rarity": 5 },
      { "name": "Speed +1", "rarity": 5 },
      { "name": "Spd Def 1", "rarity": 5 },
      { "name": "Spd Def 2", "rarity": 5 },
      { "name": "Guidance 1", "rarity": 5 },
      { "name": "Guidance 2", "rarity": 5 },
      { "name": "Guidance 3", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 17, "atk": 8, "spd": 10, "def": 6, "res": 6 },
      "level40": { "hp": [ 33, 36, 40 ], "atk": [ 31, 34, 37 ], "spd": [ 33, 36, 39 ], "def": [ 22, 25, 29 ], "res": [ 22, 25, 29 ] }
    },
    "rarity5": true,
    "colorType": "Blue"
  },
  {
    "name": "Tharja",
    "title": "Dark Shadow",
    "weaponType": "Tome",
    "moveType": "Infantry",
    "releaseDate": "Feb 02, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Tharja.png",
      "main": "img/heroes-main/Tharja.png"
    },
    "skills": [
      { "name": "Flux", "rarity": 4 },
      { "name": "Ruin", "rarity": 4 },
      { "name": "Rauðrblade", "rarity": 4 },
      { "name": "Rauðrblade+", "rarity": 5 },
      { "name": "Retribution", "rarity": 4 },
      { "name": "Vengeance", "rarity": 4 },
      { "name": "Darting Blow 1", "rarity": 4 },
      { "name": "Darting Blow 2", "rarity": 4 },
      { "name": "Darting Blow 3", "rarity": 4 },
      { "name": "Spur Res 1", "rarity": 4 },
      { "name": "Spur Res 2", "rarity": 4 },
      { "name": "Spur Res 3", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 17, "atk": 8, "spd": 8, "def": 6, "res": 5 },
      "level40": { "hp": [ 35, 39, 42 ], "atk": [ 29, 32, 35 ], "spd": [ 31, 34, 37 ], "def": [ 20, 23, 26 ], "res": [ 17, 20, 23 ] },
      "level1_4": { "hp": 16, "atk": 8, "spd": 8, "def": 5, "res": 4 },
      "level40_4": { "hp": [ 33, 36, 39 ], "atk": [ 27, 30, 33 ], "spd": [ 29, 32, 35 ], "def": [ 18, 21, 24 ], "res": [ 15, 18, 21 ] }
    },
    "rarity4": true,
    "rarity5": true,
    "colorType": "Red"
  },
  {
    "name": "Tharja (Winter's Envoy)",
    "title": "\"Normal Girl\"",
    "weaponType": "Tome",
    "moveType": "Armored",
    "releaseDate": "Dec 18, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Tharja (Winter's Envoy).png",
      "main": "img/heroes-main/Tharja (Winter's Envoy).png"
    },
    "skills": [
      { "name": "Flux", "rarity": 5 },
      { "name": "Ruin", "rarity": 5 },
      { "name": "Candelabra", "rarity": 5 },
      { "name": "Candelabra+", "rarity": 5 },
      { "name": "Chilling Wind", "rarity": 5 },
      { "name": "Iceberg", "rarity": 5 },
      { "name": "Close Counter", "rarity": 5 },
      { "name": "Vengeful Fighter 1", "rarity": 5 },
      { "name": "Vengeful Fighter 2", "rarity": 5 },
      { "name": "Vengeful Fighter 3", "rarity": 5 },
      { "name": "R Tome Valor 1", "rarity": 5 },
      { "name": "R Tome Valor 2", "rarity": 5 },
      { "name": "R Tome Valor 3", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 19, "atk": 10, "spd": 5, "def": 8, "res": 10 },
      "level40": { "hp": [ 40, 43, 46 ], "atk": [ 31, 34, 37 ], "spd": [ 14, 18, 21 ], "def": [ 31, 34, 37], "res": [ 33, 36, 39 ] }
    },
    "shortName": "Tharja",
    "rarity5": true,
    "colorType": "Red",
    "limited": true
  },
  {
    "name": "Tiki (Adult)",
    "title": "Naga's Voice",
    "weaponType": "Breath",
    "moveType": "Infantry",
    "releaseDate": "Feb 02, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Tiki (Adult).png",
      "main": "img/heroes-main/Tiki (Adult).png"
    },
    "skills": [
      { "name": "Fire Breath", "rarity": 3 },
      { "name": "Fire Breath+", "rarity": 3 },
      { "name": "Lightning Breath", "rarity": 4 },
      { "name": "Lightning Breath+", "rarity": 5 },
      { "name": "Glowing Ember", "rarity": 4 },
      { "name": "Bonfire", "rarity": 4 },
      { "name": "Defiant Atk 1", "rarity": 3 },
      { "name": "Defiant Atk 2", "rarity": 3 },
      { "name": "Defiant Atk 3", "rarity": 4 },
      { "name": "Spur Res 1", "rarity": 3 },
      { "name": "Spur Res 2", "rarity": 4 },
      { "name": "Spur Res 3", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 18, "atk": 7, "spd": 6, "def": 9, "res": 7 },
      "level40": { "hp": [ 36, 40, 43 ], "atk": [ 32, 35, 38 ], "spd": [ 20, 23, 26 ], "def": [ 32, 35, 38 ], "res": [ 21, 24, 27 ] },
      "level1_4": { "hp": 17, "atk": 7, "spd": 5, "def": 9, "res": 6 },
      "level40_4": { "hp": [ 34, 37, 40 ], "atk": [ 30, 33, 36 ], "spd": [ 18, 21, 24 ], "def": [ 30, 33, 36 ], "res": [ 19, 22, 25 ] }
    },
    "shortName": "Tiki",
    "rarity3": true,
    "rarity4": true,
    "colorType": "Red"
  },
  {
    "name": "Tiki (Adult) (Ylissean Summer)",
    "title": "Summering Scion",
    "weaponType": "Axe",
    "moveType": "Infantry",
    "releaseDate": "Jun 30, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Tiki (Adult) (Ylissean Summer).png",
      "main": "img/heroes-main/Tiki (Adult) (Ylissean Summer).png"
    },
    "skills": [
      { "name": "Iron Axe", "rarity": 5 },
      { "name": "Steel Axe", "rarity": 5 },
      { "name": "Melon Crusher", "rarity": 5 },
      { "name": "Melon Crusher+", "rarity": 5 },
      { "name": "Daylight", "rarity": 5 },
      { "name": "Sol", "rarity": 5 },
      { "name": "Close Def 1", "rarity": 5 },
      { "name": "Close Def 2", "rarity": 5 },
      { "name": "Close Def 3", "rarity": 5 },
      { "name": "Axe Valor 1", "rarity": 5 },
      { "name": "Axe Valor 2", "rarity": 5 },
      { "name": "Axe Valor 3", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 18, "atk": 8, "spd": 6, "def": 8, "res": 7 },
      "level40": { "hp": [ 32, 35, 38 ], "atk": [ 33, 36, 39 ], "spd": [ 27, 30, 33 ], "def": [ 29, 32, 35 ], "res": [ 21, 24, 27 ] }
    },
    "shortName": "Tiki",
    "rarity5": true,
    "colorType": "Green",
    "limited": true
  },
  {
    "name": "Tiki (Young)",
    "title": "Dragon Scion",
    "weaponType": "Breath",
    "moveType": "Infantry",
    "releaseDate": "Feb 02, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Tiki (Young).png",
      "main": "img/heroes-main/Tiki (Young).png"
    },
    "skills": [
      { "name": "Fire Breath", "rarity": 5 },
      { "name": "Fire Breath+", "rarity": 5 },
      { "name": "Flametongue", "rarity": 5 },
      { "name": "Flametongue+", "rarity": 5 },
      { "name": "Rising Flame", "rarity": 5 },
      { "name": "Growing Flame", "rarity": 5 },
      { "name": "Armored Blow 1", "rarity": 5 },
      { "name": "Armored Blow 2", "rarity": 5 },
      { "name": "Armored Blow 3", "rarity": 5 },
      { "name": "Breath of Life 1", "rarity": 5 },
      { "name": "Breath of Life 2", "rarity": 5 },
      { "name": "Breath of Life 3", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 15, "atk": 5, "spd": 4, "def": 8, "res": 7 },
      "level40": { "hp": [ 38, 41, 44 ], "atk": [ 28, 31, 34 ], "spd": [ 27, 30, 33 ], "def": [ 29, 32, 35 ], "res": [ 25, 29, 32 ] }
    },
    "shortName": "Tiki",
    "rarity5": true,
    "colorType": "Red"
  },
  {
    "name": "Titania",
    "title": "Mighty Mercenary",
    "weaponType": "Axe",
    "moveType": "Cavalry",
    "releaseDate": "Apr 26, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Titania.png",
      "main": "img/heroes-main/Titania.png"
    },
    "skills": [
      { "name": "Iron Axe", "rarity": 4 },
      { "name": "Steel Axe", "rarity": 4 },
      { "name": "Emerald Axe", "rarity": 4 },
      { "name": "Emerald Axe+", "rarity": 5 },
      { "name": "Reciprocal Aid", "rarity": 4 },
      { "name": "Armored Blow 1", "rarity": 4 },
      { "name": "Armored Blow 2", "rarity": 4 },
      { "name": "Armored Blow 3", "rarity": 4 },
      { "name": "Guard 1", "rarity": 4 },
      { "name": "Guard 2", "rarity": 4 },
      { "name": "Guard 3", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 18, "atk": 6, "spd": 8, "def": 6, "res": 8 },
      "level40": { "hp": [ 34, 37, 41 ], "atk": [ 24, 28, 31 ], "spd": [ 31, 34, 37 ], "def": [ 22, 25, 29 ], "res": [ 26, 30, 33 ] },
      "level1_4": { "hp": 17, "atk": 5, "spd": 8, "def": 5, "res": 8 },
      "level40_4": { "hp": [ 32, 35, 38 ], "atk": [ 22, 25, 28 ], "spd": [ 29, 32, 35 ], "def": [ 20, 23, 26 ], "res": [ 25, 28, 31 ] }
    },
    "rarity4": true,
    "rarity5": true,
    "colorType": "Green"
  },
  {
    "name": "Tobin",
    "title": "The Clueless One",
    "weaponType": "Sword",
    "moveType": "Infantry",
    "releaseDate": "Jul 07, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Tobin.png",
      "main": "img/heroes-main/Tobin.png"
    },
    "skills": [
      { "name": "Iron Sword", "rarity": 4 },
      { "name": "Steel Sword", "rarity": 4 },
      { "name": "Armorslayer", "rarity": 4 },
      { "name": "Armorslayer+", "rarity": 5 },
      { "name": "Pivot", "rarity": 4 },
      { "name": "Attack +1", "rarity": 4 },
      { "name": "Attack +2", "rarity": 4 },
      { "name": "Attack +3", "rarity": 4 },
      { "name": "Seal Spd 1", "rarity": 4 },
      { "name": "Seal Spd 2", "rarity": 4 },
      { "name": "Seal Spd 3", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 18, "atk": 7, "spd": 5, "def": 5, "res": 4 },
      "level40": { "hp": [ 43, 46, 49 ], "atk": [ 28, 31, 34 ], "spd": [ 23, 27, 30 ], "def": [ 30, 33, 36 ], "res": [ 22, 26, 29 ] },
      "level1_4": { "hp": 17, "atk": 7, "spd": 5, "def": 4, "res": 3 },
      "level40_4": { "hp": [ 40, 43, 46 ], "atk": [ 26, 29, 32 ], "spd": [ 22, 25, 28 ], "def": [ 27, 30, 33 ], "res": [ 20, 23, 26 ] }
    },
    "rarity4": true,
    "rarity5": true,
    "colorType": "Red",
    "ttReward": true
  },
  {
    "name": "Ursula",
    "title": "Blue Crow",
    "weaponType": "Tome",
    "moveType": "Cavalry",
    "releaseDate": "Mar 10, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Ursula.png",
      "main": "img/heroes-main/Ursula.png"
    },
    "skills": [
      { "name": "Thunder", "rarity": 3 },
      { "name": "Elthunder", "rarity": 3 },
      { "name": "Blárwolf", "rarity": 4 },
      { "name": "Blárwolf+", "rarity": 5 },
      { "name": "Rising Thunder", "rarity": 4 },
      { "name": "Growing Thunder", "rarity": 4 },
      { "name": "Death Blow 1", "rarity": 3 },
      { "name": "Death Blow 2", "rarity": 4 },
      { "name": "Death Blow 3", "rarity": 5 },
      { "name": "Threaten Res 1", "rarity": 3 },
      { "name": "Threaten Res 2", "rarity": 3 },
      { "name": "Threaten Res 3", "rarity": 4 }
    ],
    "stats": {
      "level1": { "hp": 16, "atk": 7, "spd": 8, "def": 4, "res": 8 },
      "level40": { "hp": [ 32, 35, 39 ], "atk": [ 25, 29, 32 ], "spd": [ 29, 32, 35 ], "def": [ 16, 19, 22 ], "res": [ 26, 30, 33 ] },
      "level1_4": { "hp": 15, "atk": 6, "spd": 8, "def": 3, "res": 8 },
      "level40_4": { "hp": [ 30, 33, 36 ], "atk": [ 23, 26, 29 ], "spd": [ 27, 30, 33 ], "def": [ 14, 17, 20 ], "res": [ 25, 28, 31 ] }
    },
    "rarity3": true,
    "rarity4": true,
    "colorType": "Blue",
    "ghb": true
  },
  {
    "name": "Valter",
    "title": "Dark Moonstone",
    "weaponType": "Lance",
    "moveType": "Flying",
    "releaseDate": "Aug 21, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Valter.png",
      "main": "img/heroes-main/Valter.png"
    },
    "skills": [
      { "name": "Iron Lance", "rarity": 3 },
      { "name": "Steel Lance", "rarity": 3 },
      { "name": "Silver Lance", "rarity": 4 },
      { "name": "Cursed Lance", "rarity": 5 },
      { "name": "New Moon", "rarity": 4 },
      { "name": "Luna", "rarity": 4 },
      { "name": "Darting Blow 1", "rarity": 3 },
      { "name": "Darting Blow 2", "rarity": 3 },
      { "name": "Darting Blow 3", "rarity": 4 },
      { "name": "Panic Ploy 1", "rarity": 3 },
      { "name": "Panic Ploy 2", "rarity": 4 },
      { "name": "Panic Ploy 3", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 18, "atk": 8, "spd": 9, "def": 8, "res": 4 },
      "level40": { "hp": [ 39, 42, 45 ], "atk": [ 29, 32, 35 ], "spd": [ 27, 31, 34 ], "def": [ 31, 34, 37 ], "res": [ 16, 19, 22 ] },
      "level1_4": { "hp": 17, "atk": 8, "spd": 9, "def": 7, "res": 3 },
      "level40_4": { "hp": [ 36, 39, 42 ], "atk": [ 27, 30, 33 ], "spd": [ 26, 29, 32 ], "def": [ 28, 31, 34 ], "res": [ 14, 17, 20 ] }
    },
    "rarity3": true,
    "rarity4": true,
    "colorType": "Blue",
    "ghb": true
  },
  {
    "name": "Virion",
    "title": "Elite Archer",
    "weaponType": "Bow",
    "moveType": "Infantry",
    "releaseDate": "Feb 02, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Virion.png",
      "main": "img/heroes-main/Virion.png"
    },
    "skills": [
      { "name": "Iron Bow", "rarity": 1 },
      { "name": "Steel Bow", "rarity": 3 },
      { "name": "Silver Bow", "rarity": 4 },
      { "name": "Silver Bow+", "rarity": 5 },
      { "name": "Night Sky", "rarity": 4 },
      { "name": "Astra", "rarity": 4 },
      { "name": "Defiant Res 1", "rarity": 3 },
      { "name": "Defiant Res 2", "rarity": 4 },
      { "name": "Defiant Res 3", "rarity": 5 },
      { "name": "Seal Spd 1", "rarity": 1 },
      { "name": "Seal Spd 2", "rarity": 2 },
      { "name": "Seal Spd 3", "rarity": 4 }
    ],
    "stats": {
      "level1": { "hp": 20, "atk": 7, "spd": 7, "def": 7, "res": 3 },
      "level40": { "hp": [ 43, 46, 49 ], "atk": [ 28, 31, 34 ], "spd": [ 28, 31, 34 ], "def": [ 23, 26, 30 ], "res": [ 10, 13, 17 ] },
      "level1_4": { "hp": 19, "atk": 7, "spd": 7, "def": 6, "res": 2 },
      "level40_4": { "hp": [ 40, 43, 46 ], "atk": [ 26, 29, 32 ], "spd": [ 26, 29, 32 ], "def": [ 21, 24, 27 ], "res": [ 9, 12, 15 ] }
    },
    "rarity3": true,
    "rarity4": true,
    "colorType": "Neutral"
  },
  {
    "name": "Wrys",
    "title": "Kindly Priest",
    "weaponType": "Staff",
    "moveType": "Infantry",
    "releaseDate": "Feb 02, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Wrys.png",
      "main": "img/heroes-main/Wrys.png"
    },
    "skills": [
      { "name": "Assault", "rarity": 1 },
      { "name": "Slow", "rarity": 3 },
      { "name": "Slow+", "rarity": 5 },
      { "name": "Heal", "rarity": 1 },
      { "name": "Reconcile", "rarity": 3 },
      { "name": "Rehabilitate", "rarity": 4 },
      { "name": "Imbue", "rarity": 4 },
      { "name": "Heavenly Light", "rarity": 3 },
      { "name": "Live to Serve 1", "rarity": 3 },
      { "name": "Live to Serve 2", "rarity": 4 },
      { "name": "Live to Serve 3", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 18, "atk": 5, "spd": 6, "def": 5, "res": 10 },
      "level40": { "hp": [ 39, 42, 45 ], "atk": [ 21, 24, 28 ], "spd": [ 20, 23, 26 ], "def": [ 19, 22, 25 ], "res": [ 33, 36, 39 ] },
      "level1_4": { "hp": 17, "atk": 4, "spd": 6, "def": 4, "res": 10 },
      "level40_4": { "hp": [ 36, 39, 42 ], "atk": [ 19, 22, 25 ], "spd": [ 19, 22, 25 ], "def": [ 17, 20, 23 ], "res": [ 31, 34, 37 ] }
    },
    "rarity3": true,
    "rarity4": true,
    "colorType": "Neutral"
  },
  {
    "name": "Xander",
    "title": "Paragon Knight",
    "weaponType": "Sword",
    "moveType": "Cavalry",
    "releaseDate": "May 02, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Xander.png",
      "main": "img/heroes-main/Xander.png"
    },
    "skills": [
      { "name": "Iron Sword", "rarity": 3 },
      { "name": "Steel Sword", "rarity": 3 },
      { "name": "Silver Sword", "rarity": 4 },
      { "name": "Siegfried", "rarity": 5 },
      { "name": "Rising Light", "rarity": 4 },
      { "name": "Blazing Light", "rarity": 4 },
      { "name": "Armored Blow 1", "rarity": 3 },
      { "name": "Armored Blow 2", "rarity": 3 },
      { "name": "Armored Blow 3", "rarity": 5 },
      { "name": "Spur Def 1", "rarity": 3 },
      { "name": "Spur Def 2", "rarity": 4 },
      { "name": "Spur Def 3", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 20, "atk": 8, "spd": 5, "def": 9, "res": 4 },
      "level40": { "hp": [ 41, 44, 47 ], "atk": [ 29, 32, 35 ], "spd": [ 21, 24, 28 ], "def": [ 34, 37, 40 ], "res": [ 13, 17, 20 ] },
      "level1_4": { "hp": 19, "atk": 8, "spd": 4, "def": 9, "res": 3 },
      "level40_4": { "hp": [ 38, 41, 44 ], "atk": [ 27, 30, 33 ], "spd": [ 19, 22, 25 ], "def": [ 32, 35, 38 ], "res": [ 12, 15, 18 ] }
    },
    "rarity3": true,
    "rarity4": true,
    "colorType": "Red",
    "ghb": true
  },
  {
    "name": "Xander (Nohrian Summer)",
    "title": "Student Swimmer",
    "weaponType": "Axe",
    "moveType": "Infantry",
    "releaseDate": "Jul 28, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Xander (Nohrian Summer).png",
      "main": "img/heroes-main/Xander (Nohrian Summer).png"
    },
    "skills": [
      { "name": "Iron Axe", "rarity": 5 },
      { "name": "Steel Axe", "rarity": 5 },
      { "name": "Lilith Floatie", "rarity": 5 },
      { "name": "Lilith Floatie+", "rarity": 5 },
      { "name": "Glowing Ember", "rarity": 5 },
      { "name": "Bonfire", "rarity": 5 },
      { "name": "Fire Boost 1", "rarity": 5 },
      { "name": "Fire Boost 2", "rarity": 5 },
      { "name": "Fire Boost 3", "rarity": 5 },
      { "name": "Infantry Pulse 1", "rarity": 5 },
      { "name": "Infantry Pulse 2", "rarity": 5 },
      { "name": "Infantry Pulse 3", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 19, "atk": 8, "spd": 6, "def": 8, "res": 6 },
      "level40": { "hp": [ 40, 43, 46 ], "atk": [ 29, 32, 35 ], "spd": [ 27, 30, 33 ], "def": [ 33, 36, 39 ], "res": [ 13, 16, 20 ] }
    },
    "shortName": "Xander",
    "rarity5": true,
    "colorType": "Green",
    "limited": true
  },
  {
    "name": "Xander (Spring Festival)",
    "title": "Spring Prince",
    "weaponType": "Lance",
    "moveType": "Cavalry",
    "releaseDate": "Mar 30, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Xander (Spring Festival).png",
      "main": "img/heroes-main/Xander (Spring Festival).png"
    },
    "skills": [
      { "name": "Iron Lance", "rarity": 5 },
      { "name": "Steel Lance", "rarity": 5 },
      { "name": "Carrot Lance", "rarity": 5 },
      { "name": "Carrot Lance+", "rarity": 5 },
      { "name": "Swap", "rarity": 5 },
      { "name": "Live for Honor", "rarity": 5 },
      { "name": "Fortify Def 1", "rarity": 5 },
      { "name": "Fortify Def 2", "rarity": 5 },
      { "name": "Fortify Def 3", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 18, "atk": 6, "spd": 6, "def": 9, "res": 7 },
      "level40": { "hp": [ 36, 40, 43 ], "atk": [ 22, 25, 29 ], "spd": [ 24, 28, 31 ], "def": [ 32, 35, 38 ], "res": [ 23, 26, 30 ] }
    },
    "shortName": "Xander",
    "rarity5": true,
    "colorType": "Blue",
    "limited": true
  },
  {
    "name": "Zelgius",
    "title": "Jet-Black General",
    "weaponType": "Sword",
    "moveType": "Armored",
    "releaseDate": "Jan 12, 2018",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Zelgius.png",
      "main": "img/heroes-main/Zelgius.png"
    },
    "skills": [
      { "name": "Iron Sword", "rarity": 5 },
      { "name": "Steel Sword", "rarity": 5 },
      { "name": "Silver Sword", "rarity": 5 },
      { "name": "Alondite", "rarity": 5 },
      { "name": "New Moon", "rarity": 5 },
      { "name": "Luna", "rarity": 5 },
      { "name": "Black Luna", "rarity": 5 },
      { "name": "Fierce Stance 1", "rarity": 5 },
      { "name": "Fierce Stance 2", "rarity": 5 },
      { "name": "Fierce Stance 3", "rarity": 5 },
      { "name": "Warp Powder", "rarity": 5 },
      { "name": "Panic Ploy 1", "rarity": 5 },
      { "name": "Panic Ploy 2", "rarity": 5 },
      { "name": "Panic Ploy 3", "rarity": 5 }
    ],
    "stats": {
      "level1": { "hp": 22, "atk": 10, "spd": 7, "def": 10, "res": 6 },
      "level40": { "hp": [ 43, 46, 49 ], "atk": [ 33, 36, 39 ], "spd": [ 30, 33, 36 ], "def": [ 35, 38, 41 ], "res": [ 18, 21, 24 ] },
  },
    "rarity5": true,
    "colorType": "Red",
  },
  {
    "name": "Zephiel",
    "title": "The Liberator",
    "weaponType": "Sword",
    "moveType": "Armored",
    "releaseDate": "Apr 20, 2017",
    "assets": {
      "portrait": "img/heroes-portrait/75px-Icon_Portrait_Zephiel.png",
      "main": "img/heroes-main/Zephiel.png"
    },
    "skills": [
      { "name": "Iron Sword", "rarity": 3 },
      { "name": "Steel Sword", "rarity": 3 },
      { "name": "Silver Sword", "rarity": 4 },
      { "name": "Eckesachs", "rarity": 5 },
      { "name": "Retribution", "rarity": 4 },
      { "name": "Reprisal", "rarity": 4 },
      { "name": "Life and Death 1", "rarity": 3 },
      { "name": "Life and Death 2", "rarity": 4 },
      { "name": "Life and Death 3", "rarity": 5 },
      { "name": "Wary Fighter 1", "rarity": 3 },
      { "name": "Wary Fighter 2", "rarity": 3 },
      { "name": "Wary Fighter 3", "rarity": 4 }
    ],
    "stats": {
      "level1": { "hp": 25, "atk": 9, "spd": 3, "def": 12, "res": 5 },
      "level40": { "hp": [52,55,59], "atk": [32,35,38], "spd": [12,16,19], "def": [35,38,41], "res": [21,24,28] },
      "level1_4": { "hp": 24, "atk": 9, "spd": 2, "def": 12, "res": 4 },
      "level40_4": { "hp": [ 49, 52, 56 ], "atk": [ 30, 33, 36 ], "spd": [ 11, 14, 17 ], "def": [ 33, 36, 39 ], "res": [ 19, 22, 25 ] }
    },
    "rarity3": true,
    "rarity4": true,
    "colorType": "Red",
    "ghb": true
  }
];
