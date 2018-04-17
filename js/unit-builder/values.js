exports.CONST = {
  IMAGE_FRONT: '../img/assets/unit-edit-front.png',
  IMAGE_BACK: '../img/assets/unit-edit-back.jpg',
  IMAGE_SKILLS: '../img/assets/skills.png',
  IMAGE_UI: '../img/assets/unit-edit-ui.png',
  IMAGE_FEH: 'img/heroes-main/Feh.png',
  // FONT: new FontFace('FehFont', 'url(font/feh-font.ttf)'),
  EMPTY_SKILL: { name: '-', effect: '', icon: '' },
  IV: [
    {boon: '-', bane: '-'},
    {boon: 'hp', bane: 'atk'}, {boon: 'hp', bane: 'spd'}, {boon: 'hp', bane: 'def'}, {boon: 'hp', bane: 'res'},
    {boon: 'atk', bane: 'hp'}, {boon: 'atk', bane: 'spd'}, {boon: 'atk', bane: 'def'}, {boon: 'atk', bane: 'res'},
    {boon: 'spd', bane: 'hp'}, {boon: 'spd', bane: 'atk'}, {boon: 'spd', bane: 'def'}, {boon: 'spd', bane: 'res'},
    {boon: 'def', bane: 'hp'}, {boon: 'def', bane: 'atk'}, {boon: 'def', bane: 'spd'}, {boon: 'def', bane: 'res'},
    {boon: 'res', bane: 'hp'}, {boon: 'res', bane: 'atk'}, {boon: 'res', bane: 'spd'}, {boon: 'res', bane: 'def'}
  ],
  MERGES: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  RARITIES: [{ name: "5★", value: 5 }, { name: "4★", value: 4 }],
  BUFFS: [-7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7],
  BUFFS_TT: { hp: 10, atk: 4, spd: 4, def: 4, res: 4},
  MAX_HM: 5000,
  MAX_SP: 9999,
  MOVE_TYPES: [
    {name: 'Infantry'},
    {name: 'Armored'},
    {name: 'Cavalry'},
    {name: 'Flying'}
  ],
  WEAPON_TYPES: [
    {name: 'Sword', weaponType: 'Sword', colorType: 'Red'},
    {name: 'Axe', weaponType: 'Axe', colorType: 'Green'},
    {name: 'Lance', weaponType: 'Lance', colorType: 'Blue'},
    {name: 'Breath (Red)', weaponType: 'Breath', colorType: 'Red'},
    {name: 'Breath (Green)', weaponType: 'Breath', colorType: 'Green'},
    {name: 'Breath (Blue)', weaponType: 'Breath', colorType: 'Blue'},
    {name: 'Breath (Neutral)', weaponType: 'Breath', colorType: 'Neutral'},
    {name: 'Tome (Red)', weaponType: 'Tome', colorType: 'Red'},
    {name: 'Tome (Green)', weaponType: 'Tome', colorType: 'Green'},
    {name: 'Tome (Blue)', weaponType: 'Tome', colorType: 'Blue'},
    {name: 'Bow (Red)', weaponType: 'Bow', colorType: 'Red'},
    {name: 'Bow (Green)', weaponType: 'Bow', colorType: 'Green'},
    {name: 'Bow (Blue)', weaponType: 'Bow', colorType: 'Blue'},
    {name: 'Bow (Neutral)', weaponType: 'Bow', colorType: 'Neutral'},
    {name: 'Dagger', weaponType: 'Dagger', colorType: 'Neutral'},
    {name: 'Staff', weaponType: 'Staff', colorType: 'Neutral'}
  ]
};

exports.COORD = {
  ICONS: {
    "Infantry": [0,424],
    "Armored": [52,424],
    "Cavalry": [104,424],
    "Flying": [156,424],
    "Red Sword": [0,268],
    "Blue Lance": [52,268],
    "Green Axe": [104,268],
    "Red Tome": [0,320],
    "Blue Tome": [52,320],
    "Green Tome": [104,320],
    "Red Breath": [0,372],
    "Blue Breath": [52,372],
    "Green Breath": [104,372],
    "Neutral Breath": [156,1140],
    "Red Bow": [0,1140],
    "Blue Bow": [52,1140],
    "Green Bow": [104,1140],
    "Neutral Bow": [156,268],
    "Neutral Dagger": [156,320],
    "Neutral Staff": [156,372],
    "Red Leaf": [65, 1088],
    "Skates": [118, 1087]
  },
  EMPTY_SEAL: [0, 1074],
  FONT_IMAGE: {
    yellow: [0, 514],
    white: [32, 514],
    green: [64, 514],
    blue: [96, 514],
    red: [128, 514]
  },
  STATS: {
    hp: 604,
    atk: 640,
    spd: 678,
    def: 715,
    res: 752,
    sp: 788,
    hm: 825
  },

  RARITY: {
    '5': [0, 994],
    '4': [0, 1034]
  },
  SKILLS_ICON: {
    weapon: 596,
    assist: 633,
    special: 669,
    skillA: 707,
    skillB: 743,
    skillC: 780,
    seal: 818
  },
  SKILLS_TEXT: {
    weapon: 619,
    assist: 656,
    special: 694,
    skillA: 731,
    skillB: 768,
    skillC: 804,
    seal: 841
  },
  BLESSINGS: {
    "Water": [420, 0],
    "Wind": [420, 223],
    "Earth": [420, 446],
    "Fire": [420, 669]
  },
  LEGENDARY_BLESSINGS: [
    [210, 0],
    [210, 223],
    [210, 446],
    [210, 669],
    [630, 446]
  ]
};
