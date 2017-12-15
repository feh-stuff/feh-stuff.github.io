$(document).ready(() => {
  const ELEMENTS = {
    CANVAS: '#hero-canvas',
    HERO_SELECT: '#hero-select',
    HERO_MERGES: '#hero-merges',
    WEAPON_SELECT: '#weapon-select',
    REFINE_SELECT: '#refine-select',
    ASSIST_SELECT: '#assist-select',
    SPECIAL_SELECT: '#special-select',
    SKILL_SELECT: '.skill-select',
    SKILL_A_SELECT: '#skillA-select',
    SKILL_B_SELECT: '#skillB-select',
    SKILL_C_SELECT: '#skillC-select',
    SEAL_SELECT: '#seal-select',
    SKILL_INFO: '.skill-info',
    SUPPORT_CHECKS: '[name="support"]',
    SUPPORT_ON: '#support-yes',
    IV_SELECT: '#iv-select',
    DOWNLOAD: '#download-img',
    UPLOAD_HERO: '#custom-hero-upload',
    TAB_SELECT: '.build-type',
    CUSTOM_HERO_CONTROL: '.custom-hero-control',
    CUSTOM_SUPPORT_CHECKS: '[name="support-custom"]',
    CUSTOM_SUPPORT_ON: '#support-custom-yes',
    CUSTOM_MOVE_TYPE_SELECT: '#custom-move-type-select',
    CUSTOM_WEAPON_TYPE_SELECT: '#custom-weapon-type-select',
    CUSTOM_STAT_CONTROL: '.custom-stat-control',
    CUSTOM_STAT_TOTAL: '#custom-stat-total',
    CUSTOM_SKILL_SELECT: '.custom-skill-select',
    CUSTOM_WEAPON_SELECT: '#custom-weapon-select',
    // CUSTOM_REFINE_SELECT: '#custom-weapon-select',
    // CUSTOM__SELECT: '#custom-weapon-select'

  };
  const IMAGES = {
    FRONT: 'img/assets/unit-edit-front.png',
    BACK: 'img/assets/unit-edit-back.jpg',
    SKILLS: 'img/assets/skills.png',
    FEH: 'img/heroes-main/Feh.png',
    ICONS: {
      "Infantry": [845,424],
      "Armored": [897,424],
      "Cavalry": [949,424],
      "Flying": [1001,424],
      "Red Sword": [845,268],
      "Blue Lance": [897,268],
      "Green Axe": [949,268],
      "Red Tome": [845,320],
      "Blue Tome": [897,320],
      "Green Tome": [949,320],
      "Red Breath": [845,372],
      "Blue Breath": [897,372],
      "Green Breath": [949,372],
      "Neutral Bow": [1001,268],
      "Neutral Dagger": [1001,320],
      "Neutral Staff": [1001,372]
    },
    FONT: {
      yellow: [845, 514],
      white: [877, 514],
      green: [909, 514],
      blue: [941, 514],
      red: [973, 514]
    }
  };
  const FEH_FONT = new FontFace('FehFont', 'url(font/feh-font.ttf)');
  const EMPTY_SKILL = { name: '-', effect: '' };
  const IV = [
    {boon: '-', bane: '-'},
    {boon: 'hp', bane: 'atk'},
    {boon: 'hp', bane: 'spd'},
    {boon: 'hp', bane: 'def'},
    {boon: 'hp', bane: 'res'},
    {boon: 'atk', bane: 'hp'},
    {boon: 'atk', bane: 'spd'},
    {boon: 'atk', bane: 'def'},
    {boon: 'atk', bane: 'res'},
    {boon: 'spd', bane: 'hp'},
    {boon: 'spd', bane: 'atk'},
    {boon: 'spd', bane: 'def'},
    {boon: 'spd', bane: 'res'},
    {boon: 'def', bane: 'hp'},
    {boon: 'def', bane: 'atk'},
    {boon: 'def', bane: 'spd'},
    {boon: 'def', bane: 'res'},
    {boon: 'res', bane: 'hp'},
    {boon: 'res', bane: 'atk'},
    {boon: 'res', bane: 'spd'},
    {boon: 'res', bane: 'def'},
  ];
  let MOVE_TYPES = [
    {name: 'Infantry'},
    {name: 'Armored'},
    {name: 'Cavalry'},
    {name: 'Flying'}
  ];
  let WEAPON_TYPES = [
    {name: 'Sword', weaponType: 'Sword', colorType: 'Red'},
    {name: 'Axe', weaponType: 'Axe', colorType: 'Green'},
    {name: 'Lance', weaponType: 'Lance', colorType: 'Blue'},
    {name: 'Breath (Red)', weaponType: 'Breath', colorType: 'Red'},
    {name: 'Breath (Green)', weaponType: 'Breath', colorType: 'Green'},
    {name: 'Breath (Blue)', weaponType: 'Breath', colorType: 'Blue'},
    {name: 'Tome (Red)', weaponType: 'Tome', colorType: 'Red'},
    {name: 'Tome (Green)', weaponType: 'Tome', colorType: 'Green'},
    {name: 'Tome (Blue)', weaponType: 'Tome', colorType: 'Blue'},
    {name: 'Bow', weaponType: 'Bow', colorType: 'Neutral'},
    {name: 'Dagger', weaponType: 'Dagger', colorType: 'Neutral'},
    {name: 'Staff', weaponType: 'Staff', colorType: 'Neutral'}
  ];

  let canvas = $(ELEMENTS.CANVAS)[0];
  let ctx = canvas.getContext('2d');
  ctx.miterLimit = 1;
  ctx.lineJoin = 'round';

  let selectedHero = {
    data : {
      assets: { main: IMAGES.FEH },
      name: "Feh",
      title: "Sleepy Owl",
      stats: {
        level1: { hp: 8, atk: 8, spd: 8, def: 8, res: 8 },
        level40: {
          hp: [147,150,153],
          atk: [0,3,6],
          spd: [0,3,6],
          def: [0,3,6],
          res: [0,3,6]
        }
      },
      moveType: "Flying",
      colorType: "Neutral",
      weaponType: "Staff"
    },
    iv: {boon: '-', bane: '-'},
    merges: 0,
    support: false,
    stats : {
      hp: 40, atk: 40, spd: 40, def: 40, res: 40
    },
    skills: {
      weapon: EMPTY_SKILL,
      refine: EMPTY_SKILL,
      assist: EMPTY_SKILL,
      special: EMPTY_SKILL,
      skillA: EMPTY_SKILL,
      skillB: EMPTY_SKILL,
      skillC: EMPTY_SKILL,
      seal: EMPTY_SKILL
    }
  };
  let customHero = {
    image: new Image(),
    name: "",
    title: "",
    stats: { hp: 0, atk: 0, spd: 0, def: 0, res: 0 },
    processedStats: { hp: 0, atk: 0, spd: 0, def: 0, res: 0 },
    moveType: "",
    colorType: "",
    weaponType: "",
    imageSize: 1,
    imagePosX: 0,
    imagePosY: 0,
    skills: {
      weapon: EMPTY_SKILL,
      refine: EMPTY_SKILL,
      assist: EMPTY_SKILL,
      special: EMPTY_SKILL,
      skillA: EMPTY_SKILL,
      skillB: EMPTY_SKILL,
      skillC: EMPTY_SKILL,
      seal: EMPTY_SKILL
    }
  };
  let imgSkills;
  let imgFront;
  let imgBack;
  let activeTab = 'main';
  init();

  function init() {
    customHero.image.crossOrigin = 'anonymous';
    $(ELEMENTS.HERO_SELECT).selectable({
      selectOptions: HEROES,
      defaultText: 'Select a Hero'
    });
    $(ELEMENTS.DOWNLOAD).removeClass('d-none');
    $(ELEMENTS.WEAPON_SELECT).selectable({disabled: true});
    $(ELEMENTS.REFINE_SELECT).selectable({disabled: true, searchable: false});
    $(ELEMENTS.ASSIST_SELECT).selectable({disabled: true});
    $(ELEMENTS.SPECIAL_SELECT).selectable({disabled: true});
    $(ELEMENTS.SKILL_A_SELECT).selectable({disabled: true});
    $(ELEMENTS.SKILL_B_SELECT).selectable({disabled: true});
    $(ELEMENTS.SKILL_C_SELECT).selectable({disabled: true});
    $(ELEMENTS.SEAL_SELECT).selectable({disabled: true});
    $(ELEMENTS.IV_SELECT).selectable({
      selectOptions: IV,
      optionGenerator: ivOptionsGenerator,
      searchable: false,
      onSelect: ivSelectableDisplay,
      header: '<div class="dropdown-header"><span class="opt-half">Boon</span><span class="opt-half">Bane</span></div>'
    });

    $(ELEMENTS.CUSTOM_MOVE_TYPE_SELECT).selectable({
      selectOptions: MOVE_TYPES,
      searchable: false
    });
    $(ELEMENTS.CUSTOM_WEAPON_TYPE_SELECT).selectable({
      selectOptions: WEAPON_TYPES,
      searchable: false
    });

    $(ELEMENTS.CUSTOM_SKILL_SELECT).selectable({disabled: true});


    loadFiles([IMAGES.SKILLS, IMAGES.FRONT, IMAGES.BACK], true).then(files => {
      document.fonts.add(FEH_FONT);
      imgSkills = files[0];
      imgFront = files[1];
      imgBack = files[2];
      drawHero(selectedHero);
    });
    bindEvents();
  }

  function bindEvents() {
    $(ELEMENTS.HERO_SELECT).on('select', onHeroChange);
    $(ELEMENTS.SKILL_SELECT).on('select', onSkillsChange);
    $(ELEMENTS.IV_SELECT).on('select', onIvChange);
    $(ELEMENTS.HERO_MERGES).on('change', onMergesChange);
    $(ELEMENTS.SUPPORT_CHECKS).on('change', onSupportChange);
    $(ELEMENTS.DOWNLOAD).on('click', onDownload);

    $(ELEMENTS.TAB_SELECT).on('click', onTabChange);

    $(ELEMENTS.UPLOAD_HERO).on('change', onUploadHeroImg);
    $(ELEMENTS.CUSTOM_HERO_CONTROL).on('change', onImageControlChange);
    $(ELEMENTS.CUSTOM_SUPPORT_CHECKS).on('change', onCustomSupportChange);
    $(ELEMENTS.CUSTOM_WEAPON_TYPE_SELECT).on('select', onCustomWeaponTypeSelect);
    $(ELEMENTS.CUSTOM_MOVE_TYPE_SELECT).on('select', onCustomMoveTypeSelect);
    $(ELEMENTS.CUSTOM_SKILL_SELECT).on('select', onCustomSkillChange);
    $(ELEMENTS.CUSTOM_STAT_CONTROL).on('change', onCustomStatChange);
  }

  function onTabChange(event) {
    if ($(this).data('val') === 'custom-unit') {
      drawCustomHero();
      activeTab = 'custom';
    } else {
      drawHero(selectedHero);
      activeTab = 'main';
    }
  }

  function onDownload(event) {
    let heroName = activeTab === 'main' ? selectedHero.data.name : customHero.name;
    $(this).attr('href', canvas.toDataURL());
    $(this).attr('download', 'FEH Unit Builder - ' + heroName + '.png');
  }

  // FEH Heroes

  function onHeroChange(event) {
    let hero = $(this).data('val');
    let highlightList = hero.skills.map(skill => skill.name);
    selectedHero.data = hero;
    for (let skill in selectedHero.skills) {
      selectedHero.skills[skill] = EMPTY_SKILL;
    }

    drawHero(selectedHero);
    $(ELEMENTS.WEAPON_SELECT)
        .selectable('highlightList', highlightList)
        .selectable('selectOptions', [EMPTY_SKILL].concat(getWeapons(hero)));
    $(ELEMENTS.ASSIST_SELECT)
        .selectable('highlightList', highlightList)
        .selectable('selectOptions', [EMPTY_SKILL].concat(getSkills(hero, SKILL_ASSIST)));
    $(ELEMENTS.SEAL_SELECT)
        .selectable('selectOptions', [EMPTY_SKILL].concat(getSkills(hero, SKILL_SEAL)));
    $(ELEMENTS.SKILL_A_SELECT)
        .selectable('highlightList', highlightList)
        .selectable('selectOptions', [EMPTY_SKILL].concat(getSkills(hero, SKILL_A)));
    $(ELEMENTS.SKILL_B_SELECT)
        .selectable('highlightList', highlightList)
        .selectable('selectOptions', [EMPTY_SKILL].concat(getSkills(hero, SKILL_B)));
    $(ELEMENTS.SKILL_C_SELECT)
        .selectable('highlightList', highlightList)
        .selectable('selectOptions', [EMPTY_SKILL].concat(getSkills(hero, SKILL_C)));
    $(ELEMENTS.SPECIAL_SELECT)
        .selectable('highlightList', highlightList)
        .selectable('selectOptions', [EMPTY_SKILL].concat(getSkills(hero, SKILL_SPECIAL)));
    $(ELEMENTS.REFINE_SELECT).selectable('clear').selectable('disable');
    $(ELEMENTS.IV_SELECT).selectable('enable');
    $(ELEMENTS.SKILL_INFO).empty();
  }

  function onSupportChange(event) {
    selectedHero.support = $(ELEMENTS.SUPPORT_ON).is(':checked');
    drawHero(selectedHero);
  }

  function onSkillsChange(event) {
    let skillType = $(this).data('skill');
    let skill = $(this).data('val');

    if (skillType === 'weapon') {
      if (SKILL_REFINED_WEAPONS[skill.name]) {
        $(ELEMENTS.REFINE_SELECT).selectable('selectOptions', [EMPTY_SKILL].concat(SKILL_REFINED_WEAPONS[skill.name]));
      } else {
        $(ELEMENTS.REFINE_SELECT).selectable('clear').selectable('disable');
      }
      selectedHero.skills.refine = EMPTY_SKILL;
      $('.skill-info[data-skill="weapon"]').html(getSkillInfoHtml(skillType, skill));
    } else if (skillType === 'refine') {
      $('.skill-info[data-skill="weapon"]').html(getSkillInfoHtml(skillType, skill));
    } else {
      $(`.skill-info[data-skill="${skillType}"]`).html(getSkillInfoHtml(skillType, skill));
    }
    selectedHero.skills[skillType] = skill;
    drawHero(selectedHero);
  }


  function onIvChange(event) {
    selectedHero.iv = $(this).data('val');
    drawHero(selectedHero);
  }

  function onMergesChange(event) {
    let merges = parseInt($(this).val());
    if (!(merges >= 0 && merges <= 10)) {
      merges = 0;
    }
    selectedHero.merges = merges;
    drawHero(selectedHero);
  }

  function getWeapons(hero, filterExclusives = true) {
    let weapons = [];
    for (let i = 0; i < SKILL_WEAPON.length; i++) {
      if (filterExclusives && SKILL_WEAPON[i].exclusive && !SKILL_WEAPON[i].exclusive.includes(hero.name)) {
        continue;
      }
      if (hero.weaponType === SKILL_WEAPON[i].weaponType) {
        if (hero.weaponType === 'Breath' || hero.colorType === SKILL_WEAPON[i].colorType) {
          weapons.push(SKILL_WEAPON[i]);
        }
      }
    }
    return weapons;
  }

  function getSkills(hero, skills, nameExclusive = true) {
    let res = [];
    for (let i = 0; i < skills.length; i++) {
      if (includeSkill(hero, skills[i], nameExclusive)) {
        res.push(skills[i]);
      }
    }
    return res;
  }
  function includeSkill(hero, skill, nameExclusive = true) {
    let hit;
    if (skill.exclude) {
      for (let i = 0; i < skill.exclude.length; i++) {
        hit = true;
        for (let cond in skill.exclude[i]) {
          if (skill.exclude[i][cond] !== hero[cond]) {
            hit = false;
          }
        }
        if (hit) return false;
      }
    }
    if (skill.include) {
      let totalHits = skill.include.length;
      for (let i = 0; i < skill.include.length; i++) {
        hit = true;
        for (let cond in skill.include[i]) {
          if (!nameExclusive && cond === 'name') {
            continue;
          }
          if (skill.include[i][cond] !== hero[cond]) {
            hit = false;
          }
        }
        if (!hit) {
          totalHits--;
        }
      }
      if (totalHits === 0) {
        return false;
      }
    }
    return true;
  }

  function getSkillInfoHtml(skillType, skill) {
    let html = '';

    if (skill.name === '-') {
      return '';
    }

    if (skillType === 'refine') {
      if (skill.name === '-') {
        html += `<span>SP Cost: ${selectedHero.skills.weapon.spCost}</span>`;
      } else {
        let cost = REFINE_SP_COST[skill.cost || 0];
        html += `<span>SP Cost: ${selectedHero.skills.weapon.spCost + cost.spCost}</span>`;
        if (cost.arenaMedals) {
          html += `<span>Arena Medals: ${cost.arenaMedals}</span>`;
        }
        if (cost.refiningStones) {
          html += `<span>Refining Stones: ${cost.refiningStones}</span>`;
        }
        if (cost.divineDew) {
          html += `<span>Divine Dew: ${cost.divineDew}</span>`;
        }
      }
    } else if (skillType === 'special') {
      html += `<span>SP Cost: ${skill.spCost}</span><span>Cooldown: ${skill.cooldown}</span>`;
    } else if (skillType !== 'seal') {
      html += `<span>SP Cost: ${skill.spCost}</span>`;
    }

    return (html ? `<p class="skill-cost">${html}</p>` : '') + `<p>Effect: ${skill.effect}</p>`;
  }

  function processHero(hero) {
    let stats40 = {};
    let stats1 = {};

    for (let st in hero.data.stats.level40) {
      if (st === hero.iv.boon) {
        stats1[st] = hero.data.stats.level1[st] + 1;
        stats40[st] = hero.data.stats.level40[st][2];
      } else if (st === hero.iv.bane) {
        stats1[st] = hero.data.stats.level1[st] - 1;
        stats40[st] = hero.data.stats.level40[st][0];
      } else {
        stats1[st] = hero.data.stats.level1[st];
        stats40[st] = hero.data.stats.level40[st][1];
      }
    }

    if (hero.merges > 0) {
      let mergeBoost = getMergeBoost(stats1, hero.merges);
      for (let st in mergeBoost) {
        stats40[st] += mergeBoost[st];
      }
    }

    for (let skill in hero.skills) {
      if (hero.skills[skill].damage) {
        stats40.atk += hero.skills[skill].damage;
      }
      for (stat in hero.skills[skill].stats) {
        stats40[stat] += hero.skills[skill].stats[stat];
      }
    }

    if (hero.support) {
      stats40.hp += 5;
      stats40.atk += 2;
      stats40.spd += 2;
      stats40.def += 2;
      stats40.res += 2;
    }
    hero.stats = stats40;
  }

  function getMergeBoost(baseStats, merges) {
    let statIncrease = { hp: 0, atk: 0, spd: 0, def: 0, res: 0 };
  	let stats = ['hp', 'atk', 'spd', 'def', 'res'];
  	stats.sort((s1, s2) => baseStats[s2] - baseStats[s1]);

  	for (let i = 0; i < merges; i++) {
  		statIncrease[stats[(2 * i) % 5]]++;
  		statIncrease[stats[(2 * i + 1) % 5]]++;
  	}

  	return statIncrease;
  }

  function drawHero(hero) {
    processHero(hero);
    loadFiles([hero.data.assets.main]).then(imgs => {
      if (hero.support) {
        ctx.drawImage(imgBack, 540, 0, 540, 960, 0, 0, 540, 960);
      } else {
        ctx.drawImage(imgBack, 0, 0);
      }
      ctx.drawImage(imgs[0], 0, 0);
      ctx.drawImage(imgFront, 0, 0);
      if (hero.support) {
        ctx.drawImage(imgSkills, 845, 0, 210, 223, 420, 430, 108, 115);
      }

      drawNameTitle(hero.data.shortName || hero.data.name, hero.data.title);
      drawWeaponMoveTypeIcons(hero.data.colorType, hero.data.weaponType, hero.data.moveType);
      drawMergesStats(hero.merges, hero.stats);
      drawSkills(hero.skills);
    });
  }

  function drawNameTitle(name, title) {
    ctx.strokeStyle = '#220d00';
    ctx.fillStyle = '#ffffff';
    ctx.textAlign = 'center';
    ctx.lineWidth = 4;
    ctx.font = "26px FehFont";
    ctx.strokeText(name, 168, 506);
    ctx.fillText(name, 168, 506);
    ctx.lineWidth = 4;
    ctx.font = "24px FehFont";
    ctx.strokeText(title, 142, 445);
    ctx.fillText(title, 142, 445);
  }

  function drawWeaponMoveTypeIcons(colorType, weaponType, moveType) {
    let weaponTypeIcon = IMAGES.ICONS[colorType + ' ' + weaponType];
    let moveTypeIcon = IMAGES.ICONS[moveType];
    if (weaponTypeIcon) {
      ctx.drawImage(imgSkills, weaponTypeIcon[0], weaponTypeIcon[1], 52, 52, 48, 553, 28, 28);
    }
    if (moveTypeIcon) {
      ctx.drawImage(imgSkills, moveTypeIcon[0], moveTypeIcon[1], 52, 52, 204, 554, 26, 26);
    }
  }

  function drawMergesStats(merges, stats) {
    if (merges > 0 && merges < 10) {
      ctx.drawImage(imgSkills, IMAGES.FONT.white[0],
        IMAGES.FONT.white[1] + 400, 32, 40, 158, 558, 15, 19);
      ctx.drawImage(imgSkills, IMAGES.FONT.white[0],
        IMAGES.FONT.white[1] + merges * 40, 32, 40, 172, 558, 15, 19);
    } else if (merges == 10) {
      ctx.drawImage(imgSkills, IMAGES.FONT.green[0],
        IMAGES.FONT.green[1] + 400, 32, 40, 158, 558, 15, 19);
      ctx.drawImage(imgSkills, IMAGES.FONT.green[0],
        IMAGES.FONT.green[1] + 40, 32, 40, 172, 558, 15, 19);
      ctx.drawImage(imgSkills, IMAGES.FONT.green[0],
        IMAGES.FONT.green[1], 32, 40, 186, 558, 15, 19);
    }

    drawStats(stats.hp, 147, 604);
    drawStats(stats.atk, 147, 640);
    drawStats(stats.spd, 147, 678);
    drawStats(stats.def, 147, 715);
    drawStats(stats.res, 147, 752);
  }

  function drawStats(value, x, y) {
    let digit;
    if (value >= 1000) {
      digit = Math.floor((value / 1000) % 10);
      ctx.drawImage(imgSkills, IMAGES.FONT.yellow[0],
        IMAGES.FONT.yellow[1] + digit * 40, 32, 40, x, y, 15, 19);
    }
    if (value >= 100) {
      digit = Math.floor((value / 100) % 10);
      ctx.drawImage(imgSkills, IMAGES.FONT.yellow[0],
        IMAGES.FONT.yellow[1] + digit * 40, 32, 40, x + 14, y, 15, 19);
    }
    if (value >= 10) {
      digit = Math.floor((value / 10) % 10);
      ctx.drawImage(imgSkills, IMAGES.FONT.yellow[0],
        IMAGES.FONT.yellow[1] + digit * 40, 32, 40, x + 28, y, 15, 19);
    }

    digit = value % 10;
    ctx.drawImage(imgSkills, IMAGES.FONT.yellow[0],
      IMAGES.FONT.yellow[1] + digit * 40, 32, 40, x + 42, y, 15, 19);
  }

  function drawSkills(skills) {
    ctx.drawImage(imgSkills, 130, 0, 65, 67, 275, 633, 34, 34);
    ctx.drawImage(imgSkills, 195, 0, 65, 67, 275, 669, 34, 34);

    let iconXY;
    if (skills.refine.icon) {
      iconXY = skills.refine.icon.split('-');
      ctx.drawImage(imgSkills, iconXY[1] * 65, iconXY[0] * 67, 65, 67, 275, 596, 34, 34);
    } else {
      ctx.drawImage(imgSkills, 65, 0, 65, 67, 275, 596, 34, 34);
    }
    if (skills.skillA.icon) {
      iconXY = skills.skillA.icon.split('-');
      ctx.drawImage(imgSkills, iconXY[1] * 65, iconXY[0] * 67, 65, 67, 275, 707, 34, 34);
    } else {
      ctx.drawImage(imgSkills, 0, 0, 65, 67, 275, 707, 36, 36);
    }
    if (skills.skillB.icon) {
      iconXY = skills.skillB.icon.split('-');
      ctx.drawImage(imgSkills, iconXY[1] * 65, iconXY[0] * 67, 65, 67, 275, 743, 34, 34);
    } else {
      ctx.drawImage(imgSkills, 0, 0, 65, 67, 275, 743, 36, 36);
    }
    if (skills.skillC.icon) {
      iconXY = skills.skillC.icon.split('-');
      ctx.drawImage(imgSkills, iconXY[1] * 65, iconXY[0] * 67, 65, 67, 275, 780, 34, 34);
    } else {
      ctx.drawImage(imgSkills, 0, 0, 65, 67, 275, 780, 36, 36);
    }
    if (skills.seal.icon) {
      iconXY = skills.seal.icon.split('-');
      ctx.drawImage(imgSkills, iconXY[1] * 65, iconXY[0] * 67, 65, 67, 275, 818, 34, 34);
    } else {
      ctx.drawImage(imgSkills, 0, 0, 65, 67, 275, 818, 34, 34);
    }

    ctx.drawImage(imgSkills, 845, 476, 34, 38, 295, 723, 19, 21);
    ctx.drawImage(imgSkills, 879, 476, 34, 38, 295, 759, 19, 21);
    ctx.drawImage(imgSkills, 913, 476, 34, 38, 295, 795, 19, 21);
    ctx.drawImage(imgSkills, 947, 476, 34, 38, 295, 832, 19, 21);

    ctx.textAlign="start";
    ctx.font = "17px FehFont";
    ctx.fillStyle = '#ffffff';
    ctx.lineWidth = 4;

    ctx.strokeText(skills.weapon.name, 318, 619);
    ctx.strokeText(skills.assist.name, 318, 656);
    ctx.strokeText(skills.special.name, 318, 694);
    ctx.strokeText(skills.skillA.name, 318, 731);
    ctx.strokeText(skills.skillB.name, 318, 768);
    ctx.strokeText(skills.skillC.name, 318, 804);
    ctx.strokeText(skills.seal.name, 318, 841);

    ctx.fillText(skills.assist.name, 318, 656);
    ctx.fillText(skills.special.name, 318, 694);
    ctx.fillText(skills.skillA.name, 318, 731);
    ctx.fillText(skills.skillB.name, 318, 768);
    ctx.fillText(skills.skillC.name, 318, 804);
    ctx.fillText(skills.seal.name, 318, 841);

    if (skills.refine.name !== '-') {
      ctx.fillStyle = '#92ff4f';
    }
    ctx.fillText(skills.weapon.name, 318, 619);
  }

  function loadFiles(urls, loadFont) {
    let promises = urls.map(url =>
      new Promise((resolve, reject) => {
        if (url) {
          let img = new Image();
          img.src = url;
          img.onload = () => resolve(img);
        } else {
          resolve('');
        }
      }
    ));
    if (loadFont) {
      promises.push(FEH_FONT.load());
    }
    return Promise.all(promises);
  }

  function ivOptionsGenerator(item, $parent) {
    $(`<div class="dropdown-item">
        <span class="opt-half">${item.boon}</span>
        <span class="opt-half">${item.bane}</span>
      </div>`)
        .data('val', item)
        .appendTo($parent);
  }

  function ivSelectableDisplay($opt, $this) {
    let data = $opt.data('val');
    let boon = data.boon === '-' ? data.boon : '+' + data.boon;
    let bane = data.bane === '-' ? data.bane : '-' + data.bane;
    $this.find('.btn').html(`<span class="opt-half">${boon}</span><span class="opt-half">${bane}</span>`);
    $this.data('val', $opt.data('val'));
  }


  // Custom Hero

  function onUploadHeroImg(event) {
    if ($(this)[0].files && $(this)[0].files[0]) {
      var fileReader = new FileReader();
      fileReader.onload = function(e) {
         customHero.image.src = e.target.result;
         customHero.image.onload = () => drawCustomHero();
      };
      fileReader.readAsDataURL($(this)[0].files[0]);
    }
  }

  function onImageControlChange(event) {
    customHero[$(this).data('control')] = $(this).val();
    drawCustomHero();
  }

  function onCustomSupportChange(event) {
    customHero.support = $(ELEMENTS.CUSTOM_SUPPORT_ON).is(':checked');
    drawCustomHero();
  }

  function onCustomMoveTypeSelect(event) {
    customHero.moveType = $(this).data('val').name;
    setupCustomSkillOptions();
    drawCustomHero();
  }

  function onCustomWeaponTypeSelect(event) {
    let weaponColorTypes = $(this).data('val');
    customHero.weaponType = weaponColorTypes.weaponType;
    customHero.colorType = weaponColorTypes.colorType;
    $(ELEMENTS.CUSTOM_SKILL_SELECT + '[data-skill="weapon"]').selectable('selectOptions', getWeapons(customHero, false));
    setupCustomSkillOptions();
    drawCustomHero();
  }

  function onCustomStatChange(event) {
    customHero.stats[$(this).data('control')] = parseInt($(this).val());
    drawCustomHero();

    let total = 0;
    for (stat in customHero.stats) {
      total += customHero.stats[stat];
    }
    $(ELEMENTS.CUSTOM_STAT_TOTAL).val(total);
  }

  function onCustomSkillChange(event) {
    let skillType = $(this).data('skill');
    let skill = $(this).data('val');

    if (skillType === 'weapon') {
      if (SKILL_REFINED_WEAPONS[skill.name]) {
        $(ELEMENTS.CUSTOM_SKILL_SELECT + '[data-skill="refine"]')
            .selectable('selectOptions', [EMPTY_SKILL].concat(SKILL_REFINED_WEAPONS[skill.name]));
      } else {
        $(ELEMENTS.CUSTOM_SKILL_SELECT + '[data-skill="refine"]')
            .selectable('clear')
            .selectable('disable');
      }
      customHero.skills.refine = EMPTY_SKILL;
    }
    customHero.skills[skillType] = skill;
    drawCustomHero();
  }

  function setupCustomSkillOptions() {
    if (customHero.moveType.length === 0 || customHero.weaponType.length === 0) {
      return;
    }

    $(ELEMENTS.CUSTOM_SKILL_SELECT + '[data-skill="assist"]')
        .selectable('selectOptions', [EMPTY_SKILL].concat(getSkills(customHero, SKILL_ASSIST, false)));
    $(ELEMENTS.CUSTOM_SKILL_SELECT + '[data-skill="seal"]')
        .selectable('selectOptions', [EMPTY_SKILL].concat(getSkills(customHero, SKILL_SEAL, false)));
    $(ELEMENTS.CUSTOM_SKILL_SELECT + '[data-skill="skillA"]')
        .selectable('selectOptions', [EMPTY_SKILL].concat(getSkills(customHero, SKILL_A, false)));
    $(ELEMENTS.CUSTOM_SKILL_SELECT + '[data-skill="skillB"]')
        .selectable('selectOptions', [EMPTY_SKILL].concat(getSkills(customHero, SKILL_B, false)));
    $(ELEMENTS.CUSTOM_SKILL_SELECT + '[data-skill="skillC"]')
        .selectable('selectOptions', [EMPTY_SKILL].concat(getSkills(customHero, SKILL_C, false)));
    $(ELEMENTS.CUSTOM_SKILL_SELECT + '[data-skill="special"]')
        .selectable('selectOptions', [EMPTY_SKILL].concat(getSkills(customHero, SKILL_SPECIAL, false)));
    $(ELEMENTS.CUSTOM_SKILL_SELECT + '[data-skill="refine"]')
        .selectable('clear').selectable('disable');
  }

  function drawCustomHero() {
    processCustomHero();

    if (customHero.support) {
      ctx.drawImage(imgBack, 540, 0, 540, 960, 0, 0, 540, 960);
    } else {
      ctx.drawImage(imgBack, 0, 0);
    }

    if (customHero.image) {
      ctx.drawImage(customHero.image, 0, 0, customHero.image.width, customHero.image.height,
        customHero.imagePosX, -customHero.imagePosY,
        customHero.image.width * customHero.imageSize,
        customHero.image.height * customHero.imageSize);
    }

    ctx.drawImage(imgFront, 0, 0);
    if (customHero.support) {
      ctx.drawImage(imgSkills, 845, 0, 210, 223, 420, 430, 108, 115);
    }

    drawNameTitle(customHero.name, customHero.title);
    drawMergesStats(customHero.merges, customHero.processedStats);
    drawWeaponMoveTypeIcons(customHero.colorType, customHero.weaponType, customHero.moveType);
    drawSkills(customHero.skills);
  }

  function processCustomHero() {
    for (stat in customHero.stats) {
      customHero.processedStats[stat] = customHero.stats[stat];
    }

    for (let skill in customHero.skills) {
      if (customHero.skills[skill].damage) {
        customHero.processedStats.atk += customHero.skills[skill].damage;
      }
      for (stat in customHero.skills[skill].stats) {
        customHero.processedStats[stat] += customHero.skills[skill].stats[stat];
      }
    }

    if (customHero.support) {
      customHero.processedStats.hp += 5;
      customHero.processedStats.atk += 2;
      customHero.processedStats.spd += 2;
      customHero.processedStats.def += 2;
      customHero.processedStats.res += 2;
    }

    for (stat in customHero.stats) {
      customHero.processedStats[stat] = Math.max(0, customHero.processedStats[stat]);
    }
  }

});
