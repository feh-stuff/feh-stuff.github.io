(function($) {
  UnitBuilder = function() {
    this.ctx = $(this.ELEMENTS.CANVAS)[0].getContext('2d');
    this.fehUnit = {
      data : {
        assets: { main: this.CONST.IMAGE_FEH },
        name: "Feh", title: "Sleepy Owl",
        stats: {
          level1: { hp: 8, atk: 8, spd: 8, def: 8, res: 8 },
          level40: { hp: [147,150,153], atk: [0,3,6], spd: [0,3,6], def: [0,3,6], res: [0,3,6] }
        },
        moveType: "Flying", colorType: "Neutral", weaponType: "Staff"
      },
      iv: {boon: '-', bane: '-'},
      merges: 0, support: false,
      stats : { hp: 40, atk: 40, spd: 40, def: 40, res: 40 },
      skills: {
        weapon: this.CONST.EMPTY_SKILL,
        refine: this.CONST.EMPTY_SKILL,
        assist: this.CONST.EMPTY_SKILL,
        special: this.CONST.EMPTY_SKILL,
        skillA: this.CONST.EMPTY_SKILL,
        skillB: this.CONST.EMPTY_SKILL,
        skillC: this.CONST.EMPTY_SKILL,
        seal: this.CONST.EMPTY_SKILL
      },
      rarity: 5,
      buffs: { atk: 0, spd: 0, def: 0, res: 0 },
      tempestBuff: false
    };

    this.init();
  };

  UnitBuilder.prototype.ELEMENTS = {
    CANVAS: '#hero-canvas',
    SPINNER: '.hero-canvas-container > .spinner',
    SELECT_HERO: '#select-hero',
    SELECT_RARITY: '#select-rarity',
    SELECT_IV: '#select-iv',
    SELECT_IV_SHOW: '#show-iv',
    SELECT_MERGES: '#select-merges',
    SELECT_BUFFS: '.buff-stat',
    SELECT_SUPPORT: '[name="support"]',
    SELECT_SUPPORT_ON: '#support-yes',
    SELECT_TT: '[name="tempest"]',
    SELECT_TT_ON: '#tt-yes',
    SELECT_SKILL: '.skill-select',
    SELECT_WEAPON: '#select-weapon',
    SELECT_REFINE: '#select-refine',
    SELECT_ASSIST: '#select-assist',
    SELECT_SPECIAL: '#select-special',
    SELECT_SKILLA: '#select-skillA',
    SELECT_SKILLB: '#select-skillB',
    SELECT_SKILLC: '#select-skillC',
    SELECT_SEAL: '#select-seal',
    SKILL_INFO: '.skill-info',
    SKILL_INFO_ICON: '.skill-info-icon',
  };

  UnitBuilder.prototype.CONST = {
    IMAGE_FRONT: 'img/assets/unit-edit-front.png',
    IMAGE_BACK: 'img/assets/unit-edit-back.jpg',
    IMAGE_SKILLS: 'img/assets/skills.png',
    IMAGE_FEH: 'img/heroes-main/Feh.png',
    FONT: new FontFace('FehFont', 'url(font/feh-font.ttf)'),
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
    FONT_IMAGE: {
      yellow: [845, 514],
      white: [877, 514],
      green: [909, 514],
      blue: [941, 514],
      red: [973, 514]
    },
    STATS: {
      hp: 604,
      atk: 640,
      spd: 678,
      def: 715,
      res: 752
    },
    RARITY: {
      '5': [845, 994],
      '4': [845, 1034]
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
    SKILLS_ICON: {
      weapon: 596,
      assist: 633,
      special: 669,
      skillA: 707,
      skillB: 743,
      skillC: 780,
      seal: 818
    }
  };

  UnitBuilder.prototype.IMAGES = {
    FRONT: null,
    BACK: null,
    SKILLS: null
  };

  UnitBuilder.prototype.init = function() {
    $(this.ELEMENTS.SELECT_HERO).selectable({data: HEROES, text: 'Select a Hero'});
    $(this.ELEMENTS.SELECT_RARITY).selectable({
      optionGenerator: this.rarityOptGenerator,
      search: false,
      disabled: 'disabled',
      text: '5★',
      value: 5
    });
    $(this.ELEMENTS.SELECT_IV).selectable({
      data: this.CONST.IV,
      optionGenerator: this.ivOptGenerator,
      onSelect: this.ivSelectableDisplay,
      search: false,
      header: '<div class="dropdown-header"><span class="opt-half">Boon</span><span class="opt-half">Bane</span></div>'
    });
    $(this.ELEMENTS.SELECT_MERGES).selectable({
      data: this.CONST.MERGES,
      optionGenerator: this.arrOptGenerator,
      search: false
    });
    $(this.ELEMENTS.SELECT_BUFFS).selectable({
      data: this.CONST.BUFFS,
      optionGenerator: this.arrOptGenerator,
      search: false,
      text: 0,
      value: 0
    });
    $(this.ELEMENTS.SELECT_WEAPON).selectable({disabled: 'disabled'});
    $(this.ELEMENTS.SELECT_REFINE).selectable({disabled: 'disabled'});
    $(this.ELEMENTS.SELECT_ASSIST).selectable({disabled: 'disabled'});
    $(this.ELEMENTS.SELECT_SPECIAL).selectable({disabled: 'disabled'});
    $(this.ELEMENTS.SELECT_SKILLA).selectable({disabled: 'disabled'});
    $(this.ELEMENTS.SELECT_SKILLB).selectable({disabled: 'disabled'});
    $(this.ELEMENTS.SELECT_SKILLC).selectable({disabled: 'disabled'});
    $(this.ELEMENTS.SELECT_SEAL).selectable({disabled: 'disabled'});

    this.loadFiles([this.CONST.IMAGE_SKILLS, this.CONST.IMAGE_FRONT, this.CONST.IMAGE_BACK], true).then(files => {
      document.fonts.add(this.CONST.FONT);
      $(this.ELEMENTS.SPINNER).addClass('d-none');
      this.IMAGES.SKILLS = files[0];
      this.IMAGES.FRONT = files[1];
      this.IMAGES.BACK = files[2];
      this.drawHero(this.fehUnit);
    });

    this.bindEvents();
  };

  // Events
  UnitBuilder.prototype.bindEvents = function() {
    $(this.ELEMENTS.SELECT_HERO).on('select', this.onHeroSelect.bind(this));
    $(this.ELEMENTS.SELECT_RARITY).on('select', this.onRaritySelect.bind(this));
    $(this.ELEMENTS.SELECT_IV).on('select', this.onIvSelect.bind(this));
    $(this.ELEMENTS.SELECT_MERGES).on('select', this.onMergeSelect.bind(this));
    $(this.ELEMENTS.SELECT_SKILL).on('select', this.onSkillSelect.bind(this));
    $(this.ELEMENTS.SELECT_BUFFS).on('select', this.onBuffSelect.bind(this));

    $(this.ELEMENTS.SELECT_IV_SHOW).on('change', this.onShowIvChange.bind(this));
    $(this.ELEMENTS.SELECT_SUPPORT).on('change', this.onSupportChange.bind(this));
    $(this.ELEMENTS.SELECT_TT).on('change', this.onTempestBuffChange.bind(this));
  };

  UnitBuilder.prototype.onHeroSelect = function(event) {
    let hero = $(event.currentTarget).data('val');
    this.fehUnit.data = hero;
    for (let skill in this.fehUnit.skills) {
      this.fehUnit.skills[skill] = this.CONST.EMPTY_SKILL;
    }
    this.fehUnit.rarity = 5;

    this.drawHero(this.fehUnit);
    //TODO: highlight list
    $(this.ELEMENTS.SELECT_WEAPON).selectable('data', [this.CONST.EMPTY_SKILL].concat(this.getWeapons(hero)));
    $(this.ELEMENTS.SELECT_ASSIST).selectable('data', [this.CONST.EMPTY_SKILL].concat(this.getSkills(hero, SKILL_ASSIST)));
    $(this.ELEMENTS.SELECT_SPECIAL).selectable('data', [this.CONST.EMPTY_SKILL].concat(this.getSkills(hero, SKILL_SPECIAL)));
    $(this.ELEMENTS.SELECT_SKILLA).selectable('data', [this.CONST.EMPTY_SKILL].concat(this.getSkills(hero, SKILL_A)));
    $(this.ELEMENTS.SELECT_SKILLB).selectable('data', [this.CONST.EMPTY_SKILL].concat(this.getSkills(hero, SKILL_B)));
    $(this.ELEMENTS.SELECT_SKILLC).selectable('data', [this.CONST.EMPTY_SKILL].concat(this.getSkills(hero, SKILL_C)));
    $(this.ELEMENTS.SELECT_SEAL).selectable('data', [this.CONST.EMPTY_SKILL].concat(this.getSkills(hero, SKILL_SEAL)));

    $(this.ELEMENTS.SELECT_REFINE).selectable('clear').selectable('disable');
    $(this.ELEMENTS.SELECT_IV).selectable('enable');
    $(this.ELEMENTS.SKILL_INFO).empty();
    $(this.ELEMENTS.SKILL_INFO_ICON).addClass('d-none');

    if (hero.rarity4) {
      $(this.ELEMENTS.SELECT_RARITY)
          .selectable('data', this.CONST.RARITIES)
          .selectable('enable');
    } else {
      $(this.ELEMENTS.SELECT_RARITY)
          .selectable('data', this.CONST.RARITIES.slice(0, 1))
          .selectable('disable');
    }
  };
  UnitBuilder.prototype.onSkillSelect = function(event) {
    let skillType = $(event.currentTarget).data('skill');
    let skill = $(event.currentTarget).data('val');

    if (skillType === 'weapon') {
      if (SKILL_REFINED_WEAPONS[skill.name]) {
        $(this.ELEMENTS.SELECT_REFINE).selectable('data', [this.CONST.EMPTY_SKILL].concat(SKILL_REFINED_WEAPONS[skill.name]));
      } else {
        $(this.ELEMENTS.SELECT_REFINE).selectable('clear').selectable('disable');
      }
      this.fehUnit.skills.refine = this.CONST.EMPTY_SKILL;
      $('.skill-info-icon[data-skill="refine"]').addClass('d-none');
    }

    $(`.skill-info-icon[data-skill="${skillType}"]`)
        .toggleClass('d-none', skill.name === '-')
        .popover('dispose')
        .popover({
          trigger: 'hover click',
          title: skill.name,
          html: true,
          content: this.getSkillInfoHtml(skillType, skill)
        });
    this.fehUnit.skills[skillType] = skill;
    this.drawHero(this.fehUnit);
  };
  UnitBuilder.prototype.onIvSelect = function(event) {
    this.fehUnit.iv = $(event.currentTarget).data('val');
    this.drawHero(this.fehUnit);
  };
  UnitBuilder.prototype.onMergeSelect = function(event) {
    this.fehUnit.merges = $(event.currentTarget).data('val');
    this.drawHero(this.fehUnit);
  };
  UnitBuilder.prototype.onRaritySelect = function(event) {
    this.fehUnit.rarity = parseInt($(event.currentTarget).data('val'));
    this.drawHero(this.fehUnit);
  };
  UnitBuilder.prototype.onBuffSelect = function(event) {
    let $select = $(event.currentTarget);
    this.fehUnit.buffs[$select.data('stat')] = $select.data('val');
    this.drawHero(this.fehUnit);
  };

  UnitBuilder.prototype.onSupportChange = function(event) {
    this.fehUnit.support = $(this.ELEMENTS.SELECT_SUPPORT_ON).is(':checked');
    this.drawHero(this.fehUnit);
  };
  UnitBuilder.prototype.onShowIvChange = function(event) {
    this.drawHero(this.fehUnit, false);
  };
  UnitBuilder.prototype.onTempestBuffChange = function(event) {
    this.fehUnit.tempestBuff = $(this.ELEMENTS.SELECT_TT_ON).is(':checked');
    this.drawHero(this.fehUnit);
  };

  // FEH Unit Functions
  UnitBuilder.prototype.processHeroStats = function(hero) {
    let stats40 = {};
    let stats1 = {};
    let baseStatsLevel1;
    let baseStatsLevel40;

    if (hero.rarity === 5) {
      baseStatsLevel1 = hero.data.stats.level1;
      baseStatsLevel40 = hero.data.stats.level40;
    } else {
      baseStatsLevel1 = hero.data.stats.level1_4;
      baseStatsLevel40 = hero.data.stats.level40_4;
    }

    for (let st in baseStatsLevel1) {
      if (st === hero.iv.boon) {
        stats1[st] = baseStatsLevel1[st] + 1;
        stats40[st] = baseStatsLevel40[st][2];
      } else if (st === hero.iv.bane) {
        stats1[st] = baseStatsLevel1[st] - 1;
        stats40[st] = baseStatsLevel40[st][0];
      } else {
        stats1[st] = baseStatsLevel1[st];
        stats40[st] = baseStatsLevel40[st][1];
      }
    }

    if (hero.merges > 0) {
      let mergeBoost = this.getMergeBoost(stats1, hero.merges);
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

    if (hero.buffs) {
      for (let stat in hero.buffs) {
        stats40[stat] += hero.buffs[stat];
      }
    }

    if (hero.tempestBuff) {
      for (let stat in this.CONST.BUFFS_TT) {
        stats40[stat] += this.CONST.BUFFS_TT[stat];
      }
    }

    if (hero.support) {
      stats40.hp += 5;
      stats40.atk += 2;
      stats40.spd += 2;
      stats40.def += 2;
      stats40.res += 2;
    }

    for (let stat in stats40) {
      stats40[stat] = Math.max(0, stats40[stat]);
    }
    hero.stats = stats40;
  };
  UnitBuilder.prototype.getMergeBoost = function(baseStats, merges) {
    let statIncrease = { hp: 0, atk: 0, spd: 0, def: 0, res: 0 };
    let stats = ['hp', 'atk', 'spd', 'def', 'res'];
    stats.sort((s1, s2) => baseStats[s2] - baseStats[s1]);

    for (let i = 0; i < merges; i++) {
      statIncrease[stats[(2 * i) % 5]]++;
      statIncrease[stats[(2 * i + 1) % 5]]++;
    }

    return statIncrease;
  }
  UnitBuilder.prototype.getSkillInfoHtml = function(skillType, skill) {
    let html = '';
    if (skill.name === '-') {
      return '';
    }

    if (skillType === 'refine') {
      if (skill.name === '-') {
        html += `<span>SP Cost: 0</span>`;
      } else {
        let cost = REFINE_SP_COST[skill.cost || 0];
        html += `<span>SP Cost: ${cost.spCost}</span>`;
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
    return (html ? `<p class="skill-cost">${html}</p>` : '') + `<p>${skill.effect}</p>`;
  };


  // Custom Unit Functions



  // Shared
  UnitBuilder.prototype.getWeapons = function(hero, filterExclusives = true) {
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
  };
  UnitBuilder.prototype.getSkills = function(hero, skills, nameExclusive = true) {
    let res = [];
    for (let i = 0; i < skills.length; i++) {
      if (this.includeSkill(hero, skills[i], nameExclusive)) {
        res.push(skills[i]);
      }
    }
    return res;
  };
  UnitBuilder.prototype.includeSkill = function(hero, skill, nameExclusive = true) {
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
  };


  // Draw Functions
  UnitBuilder.prototype.drawHero = function(hero, processHero = true) {
    if (processHero) {
      this.processHeroStats(hero);
    }
    this.loadFiles([hero.data.assets.main]).then(imgs => {
      if (hero.support) {
        this.ctx.drawImage(this.IMAGES.BACK, 540, 0, 540, 960, 0, 0, 540, 960);
      } else {
        this.ctx.drawImage(this.IMAGES.BACK, 0, 0);
      }

      this.ctx.drawImage(imgs[0], 0, 0);
      this.ctx.drawImage(this.IMAGES.FRONT, 0, 0);

      if (hero.support) {
        this.ctx.drawImage(this.IMAGES.SKILLS, 845, 0, 210, 223, 420, 430, 108, 115);
      }
      if ($(this.ELEMENTS.SELECT_IV_SHOW).is(':checked')) {
        this.drawIv(hero.iv);
      }

      this.drawRarity(hero.rarity);
      this.drawNameAndTitle(hero.data.shortName || hero.data.name, hero.data.title);
      this.drawWeaponAndMoveType(hero.data.colorType, hero.data.weaponType, hero.data.moveType);
      this.drawMergesAndStats(hero.merges, hero.stats);
      this.drawSkills(hero.skills);
    });
  };

  UnitBuilder.prototype.drawNameAndTitle = function(name, title) {
    this.ctx.strokeStyle = '#220d00';
    this.ctx.fillStyle = '#ffffff';
    this.ctx.textAlign = 'center';
    this.ctx.lineWidth = 4;
    this.ctx.font = "26px FehFont";
    this.ctx.strokeText(name, 168, 506);
    this.ctx.fillText(name, 168, 506);
    this.ctx.lineWidth = 4;
    this.ctx.font = "24px FehFont";
    this.ctx.strokeText(title, 142, 445);
    this.ctx.fillText(title, 142, 445);
  };
  UnitBuilder.prototype.drawRarity = function(rarity) {
    let coord = rarity === 5 ? this.CONST.RARITY["5"] : this.CONST.RARITY["4"];
    this.ctx.drawImage(
        this.IMAGES.SKILLS,
        coord[0], coord[1],
        153, 40, 46, 380, 153, 40);
  };
  UnitBuilder.prototype.drawWeaponAndMoveType = function(color, weaponType, moveType) {
    let weaponTypeIcon = this.CONST.ICONS[color + ' ' + weaponType];
    let moveTypeIcon = this.CONST.ICONS[moveType];
    if (weaponTypeIcon) {
      this.ctx.drawImage(this.IMAGES.SKILLS, weaponTypeIcon[0], weaponTypeIcon[1], 52, 52, 48, 553, 28, 28);
    }
    if (moveTypeIcon) {
      this.ctx.drawImage(this.IMAGES.SKILLS, moveTypeIcon[0], moveTypeIcon[1], 52, 52, 204, 554, 26, 26);
    }
  };
  UnitBuilder.prototype.drawMergesAndStats = function(merges, stats) {
    if (merges > 0 && merges < 10) {
      this.ctx.drawImage(this.IMAGES.SKILLS, this.CONST.FONT_IMAGE.white[0],
        this.CONST.FONT_IMAGE.white[1] + 400, 32, 40, 158, 558, 15, 19);
      this.ctx.drawImage(this.IMAGES.SKILLS, this.CONST.FONT_IMAGE.white[0],
        this.CONST.FONT_IMAGE.white[1] + merges * 40, 32, 40, 172, 558, 15, 19);
    } else if (merges == 10) {
      this.ctx.drawImage(this.IMAGES.SKILLS, this.CONST.FONT_IMAGE.green[0],
        this.CONST.FONT_IMAGE.green[1] + 400, 32, 40, 158, 558, 15, 19);
      this.ctx.drawImage(this.IMAGES.SKILLS, this.CONST.FONT_IMAGE.green[0],
        this.CONST.FONT_IMAGE.green[1] + 40, 32, 40, 172, 558, 15, 19);
      this.ctx.drawImage(this.IMAGES.SKILLS, this.CONST.FONT_IMAGE.green[0],
        this.CONST.FONT_IMAGE.green[1], 32, 40, 186, 558, 15, 19);
    }

    this.drawStats(stats.hp, 147, this.CONST.STATS.hp);
    this.drawStats(stats.atk, 147, this.CONST.STATS.atk, this.fehUnit.buffs.atk);
    this.drawStats(stats.spd, 147, this.CONST.STATS.spd, this.fehUnit.buffs.spd);
    this.drawStats(stats.def, 147, this.CONST.STATS.def, this.fehUnit.buffs.def);
    this.drawStats(stats.res, 147, this.CONST.STATS.res, this.fehUnit.buffs.res);
  };
  UnitBuilder.prototype.drawStats = function(value, x, y, buff = 0) {
    let font = buff === 0 ? this.CONST.FONT_IMAGE.yellow :
        buff > 0 ? this.CONST.FONT_IMAGE.blue : this.CONST.FONT_IMAGE.red;
    let digit;

    if (value >= 1000) {
      digit = Math.floor((value / 1000) % 10);
      this.ctx.drawImage(this.IMAGES.SKILLS, font[0],font[1] + digit * 40, 32, 40, x, y, 15, 19);
    }
    if (value >= 100) {
      digit = Math.floor((value / 100) % 10);
      this.ctx.drawImage(this.IMAGES.SKILLS, font[0],font[1] + digit * 40, 32, 40, x + 14, y, 15, 19);
    }
    if (value >= 10) {
      digit = Math.floor((value / 10) % 10);
      this.ctx.drawImage(this.IMAGES.SKILLS, font[0], font[1] + digit * 40, 32, 40, x + 28, y, 15, 19);
    }

    digit = value % 10;
    this.ctx.drawImage(this.IMAGES.SKILLS, font[0], font[1] + digit * 40, 32, 40, x + 42, y, 15, 19);
  };
  UnitBuilder.prototype.drawIv = function(iv) {
    if (iv.boon === '-') {
      return;
    }

    this.ctx.drawImage(this.IMAGES.SKILLS, this.CONST.FONT_IMAGE.green[0],
        this.CONST.FONT_IMAGE.green[1] + 400, 32, 40, 60, this.CONST.STATS[iv.boon], 15, 19);
    this.ctx.drawImage(this.IMAGES.SKILLS, this.CONST.FONT_IMAGE.red[0],
        this.CONST.FONT_IMAGE.red[1] + 440, 32, 40, 60, this.CONST.STATS[iv.bane], 15, 19);
  };
  UnitBuilder.prototype.drawSkills = function(skills) {
    this.ctx.drawImage(this.IMAGES.SKILLS, 130, 0, 65, 67, 275, 633, 34, 34);
    this.ctx.drawImage(this.IMAGES.SKILLS, 195, 0, 65, 67, 275, 669, 34, 34);

    if (skills.refine.icon) {
      this.drawIcon(skills.refine.icon, this.CONST.SKILLS_ICON.weapon);
    } else if (skills.weapon.icon) {
      this.drawIcon(skills.weapon.icon, this.CONST.SKILLS_ICON.weapon);
    } else {
      this.drawIcon('0-1', this.CONST.SKILLS_ICON.weapon);
    }

    for (let skill in skills) {
      if (skill === 'refine' || skill === 'weapon' || skill === 'assist' || skill === 'special') {
        continue;
      }
      if (skills[skill].icon) {
        this.drawIcon(skills[skill].icon, this.CONST.SKILLS_ICON[skill]);
      } else {
        this.drawIcon('0-0', this.CONST.SKILLS_ICON[skill]);
      }
    }

    this.ctx.drawImage(this.IMAGES.SKILLS, 845, 476, 34, 38, 295, 723, 19, 21);
    this.ctx.drawImage(this.IMAGES.SKILLS, 879, 476, 34, 38, 295, 759, 19, 21);
    this.ctx.drawImage(this.IMAGES.SKILLS, 913, 476, 34, 38, 295, 795, 19, 21);
    this.ctx.drawImage(this.IMAGES.SKILLS, 947, 476, 34, 38, 295, 832, 19, 21);

    this.ctx.textAlign="start";
    this.ctx.font = "17px FehFont";
    this.ctx.fillStyle = '#ffffff';
    this.ctx.lineWidth = 4;

    this.ctx.strokeText(skills.weapon.name, 318, 619);
    this.ctx.strokeText(skills.assist.name, 318, 656);
    this.ctx.strokeText(skills.special.name, 318, 694);
    this.ctx.strokeText(skills.skillA.name, 318, 731);
    this.ctx.strokeText(skills.skillB.name, 318, 768);
    this.ctx.strokeText(skills.skillC.name, 318, 804);
    this.ctx.strokeText(skills.seal.name, 318, 841);

    this.ctx.fillText(skills.assist.name, 318, 656);
    this.ctx.fillText(skills.special.name, 318, 694);
    this.ctx.fillText(skills.skillA.name, 318, 731);
    this.ctx.fillText(skills.skillB.name, 318, 768);
    this.ctx.fillText(skills.skillC.name, 318, 804);
    this.ctx.fillText(skills.seal.name, 318, 841);

    if (skills.refine.name !== '-' || skills.weapon.icon) {
      this.ctx.fillStyle = '#92ff4f';
    }
    this.ctx.fillText(skills.weapon.name, 318, 619);
  };
  UnitBuilder.prototype.drawIcon = function(icon, posY, posX = 275, sizeY = 34, sizeX = 34) {
    if (typeof icon === 'string') {
      let xy = icon.split('-');
      this.ctx.drawImage(this.IMAGES.SKILLS, xy[1] * 65, xy[0] * 67, 65, 67, posX, posY, sizeX, sizeY);
    } else {
      this.ctx.drawImage(icon, 0, 0, icon.width, icon.height, posX, posY, sizeX, sizeY)
    }
  }



  // Helper Functions
  UnitBuilder.prototype.loadFiles = function(urls, loadFont = false) {
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
      promises.push(this.CONST.FONT.load());
    }
    return Promise.all(promises);
  };
  UnitBuilder.prototype.ivOptGenerator = function(item, $parent) {
    $(`<div class="dropdown-item">
        <span class="opt-half">${item.boon}</span>
        <span class="opt-half">${item.bane}</span>
      </div>`)
        .data('val', item)
        .appendTo($parent);
  };
  UnitBuilder.prototype.ivSelectableDisplay = function($opt, $this) {
    let data = $opt.data('val');
    let boon = data.boon === '-' ? data.boon : '+' + data.boon;
    let bane = data.bane === '-' ? data.bane : '-' + data.bane;
    $this.find('.btn').html(`<span class="opt-half">${boon}</span><span class="opt-half">${bane}</span>`);
    $this.data('val', $opt.data('val'));
  };
  UnitBuilder.prototype.rarityOptGenerator = function(item, $parent) {
    $(`<div class="dropdown-item">${item.name}</div>`)
        .data('val', item.value)
        .appendTo($parent);
  };
  UnitBuilder.prototype.arrOptGenerator = function(item, $parent) {
    $(`<div class="dropdown-item">${item}</div>`)
        .data('val', item)
        .appendTo($parent);
  };
})(jQuery);

new UnitBuilder();
