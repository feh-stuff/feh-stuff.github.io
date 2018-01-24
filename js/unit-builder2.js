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

    this.customUnit = {
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
        weapon: this.CONST.EMPTY_SKILL,
        refine: this.CONST.EMPTY_SKILL,
        assist: this.CONST.EMPTY_SKILL,
        special: this.CONST.EMPTY_SKILL,
        skillA: this.CONST.EMPTY_SKILL,
        skillB: this.CONST.EMPTY_SKILL,
        skillC: this.CONST.EMPTY_SKILL,
        seal: this.CONST.EMPTY_SKILL
      },
      customSkills: {
        weapon: this.getEmptySkill(),
        refine: this.getEmptySkill(),
        assist: this.getEmptySkill(),
        special: this.getEmptySkill(),
        skillA: this.getEmptySkill(),
        skillB: this.getEmptySkill(),
        skillC: this.getEmptySkill(),
        seal: this.getEmptySkill()
      }
    };

    this.activeTab = 'main';

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
    SELECT_TAB: '.build-type',
    UPLOAD_HERO: '#custom-hero-upload',
    CUSTOM_IMAGE_CONTROL: '.custom-hero-control',
    CUSTOM_MOVE_TYPE_SELECT: '#custom-move-type-select',
    CUSTOM_WEAPON_TYPE_SELECT: '#custom-weapon-type-select',
    CUSTOM_MERGE_SELECT: '#custom-merge-select',
    CUSTOM_SUPPORT_CHECKS: '[name="support-custom"]',
    CUSTOM_SUPPORT_ON: '#support-custom-yes',
    CUSTOM_STAT_CONTROL: '.custom-stat-control',
    CUSTOM_STAT_TOTAL: '#custom-stat-total',
    CUSTOM_SKILL_SELECT: '.custom-skill-select',
    CUSTOM_SKILL_TOGGLE: '[data-toggle="pill"]',
    CUSTOM_NEW_SKILL_INPUT: '.custom-skill-input',
    DOWNLOAD: '#download-img'
  };

  UnitBuilder.prototype.CONST = {
    IMAGE_FRONT: 'img/assets/unit-edit-front.png',
    IMAGE_BACK: 'img/assets/unit-edit-back.jpg',
    IMAGE_SKILLS: 'img/assets/skills.png',
    IMAGE_UI: 'img/assets/unit-edit-ui.png',
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
    MAX_HM: 4000,
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
      {name: 'Tome (Red)', weaponType: 'Tome', colorType: 'Red'},
      {name: 'Tome (Green)', weaponType: 'Tome', colorType: 'Green'},
      {name: 'Tome (Blue)', weaponType: 'Tome', colorType: 'Blue'},
      {name: 'Bow', weaponType: 'Bow', colorType: 'Neutral'},
      {name: 'Dagger', weaponType: 'Dagger', colorType: 'Neutral'},
      {name: 'Staff', weaponType: 'Staff', colorType: 'Neutral'}
    ]
  };

  UnitBuilder.prototype.COORD = {
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
      "Neutral Bow": [156,268],
      "Neutral Dagger": [156,320],
      "Neutral Staff": [156,372]
    },
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
    }
  };

  UnitBuilder.prototype.IMAGES = {
    FRONT: null,
    BACK: null,
    SKILLS: null,
    UI: null
  };

  UnitBuilder.prototype.init = function() {
    $(this.ELEMENTS.SELECT_HERO).selectable({data: HEROES});
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

    $(this.ELEMENTS.CUSTOM_MOVE_TYPE_SELECT).selectable({
      data: this.CONST.MOVE_TYPES,
      search: false
    });
    $(this.ELEMENTS.CUSTOM_WEAPON_TYPE_SELECT).selectable({
      data: this.CONST.WEAPON_TYPES,
      search: false
    });
    $(this.ELEMENTS.CUSTOM_SKILL_SELECT).selectable({disabled: 'disabled'});
    $(this.ELEMENTS.CUSTOM_MERGE_SELECT).selectable({
      data: this.CONST.MERGES,
      optionGenerator: this.arrOptGenerator,
      search: false
    });

    this.loadFiles([this.CONST.IMAGE_SKILLS, this.CONST.IMAGE_FRONT, this.CONST.IMAGE_BACK, this.CONST.IMAGE_UI], true).then(files => {
      document.fonts.add(this.CONST.FONT);
      $(this.ELEMENTS.SPINNER).addClass('d-none');
      this.IMAGES.SKILLS = files[0];
      this.IMAGES.FRONT = files[1];
      this.IMAGES.BACK = files[2];
      this.IMAGES.UI = files[3];
      this.drawHero(this.fehUnit);
      $(this.ELEMENTS.DOWNLOAD).removeClass('d-none');
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

    $(this.ELEMENTS.SELECT_TAB).on('click', this.onTabChange.bind(this));
    $(this.ELEMENTS.UPLOAD_HERO).on('change', this.onUploadHeroImg.bind(this));
    $(this.ELEMENTS.CUSTOM_IMAGE_CONTROL).on('change', this.onImageControlChange.bind(this));
    $(this.ELEMENTS.CUSTOM_WEAPON_TYPE_SELECT).on('select', this.onCustomWeaponTypeSelect.bind(this));
    $(this.ELEMENTS.CUSTOM_MOVE_TYPE_SELECT).on('select', this.onCustomMoveTypeSelect.bind(this));
    $(this.ELEMENTS.CUSTOM_SUPPORT_CHECKS).on('change', this.onCustomSupportChange.bind(this));

    $(this.ELEMENTS.CUSTOM_MERGE_SELECT).on('select', this.onCustomMergeSelect.bind(this));
    $(this.ELEMENTS.CUSTOM_SKILL_SELECT).on('select', this.onCustomSkillChange.bind(this));
    $(this.ELEMENTS.CUSTOM_STAT_CONTROL).on('change', this.onCustomStatChange.bind(this));
    $(this.ELEMENTS.CUSTOM_NEW_SKILL_INPUT).on('change', this.onCustomNewSkillChange.bind(this));
    $(this.ELEMENTS.CUSTOM_SKILL_TOGGLE).on('shown.bs.tab', this.onCustomSkillToggle.bind(this));

    $(this.ELEMENTS.DOWNLOAD).on('click', this.onDownload.bind(this));
  };

  UnitBuilder.prototype.onHeroSelect = function(event) {
    let hero = $(event.currentTarget).data('val');
    let highlightList = hero.skills.map(skill => skill.name);

    this.fehUnit.data = hero;
    for (let skill in this.fehUnit.skills) {
      this.fehUnit.skills[skill] = this.CONST.EMPTY_SKILL;
    }
    this.fehUnit.rarity = 5;

    this.drawHero(this.fehUnit);

    $(this.ELEMENTS.SELECT_WEAPON)
        .selectable('highlight', highlightList)
        .selectable('data', [this.CONST.EMPTY_SKILL].concat(this.getWeapons(hero)));
    $(this.ELEMENTS.SELECT_ASSIST)
        .selectable('highlight', highlightList)
        .selectable('data', [this.CONST.EMPTY_SKILL].concat(this.getSkills(hero, SKILL_ASSIST)));
    $(this.ELEMENTS.SELECT_SPECIAL)
        .selectable('highlight', highlightList)
        .selectable('data', [this.CONST.EMPTY_SKILL].concat(this.getSkills(hero, SKILL_SPECIAL)));
    $(this.ELEMENTS.SELECT_SKILLA)
        .selectable('highlight', highlightList)
        .selectable('data', [this.CONST.EMPTY_SKILL].concat(this.getSkills(hero, SKILL_A)));
    $(this.ELEMENTS.SELECT_SKILLB)
        .selectable('highlight', highlightList)
        .selectable('data', [this.CONST.EMPTY_SKILL].concat(this.getSkills(hero, SKILL_B)));
    $(this.ELEMENTS.SELECT_SKILLC)
        .selectable('highlight', highlightList)
        .selectable('data', [this.CONST.EMPTY_SKILL].concat(this.getSkills(hero, SKILL_C)));
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

    // $(`.skill-info-icon[data-skill="${skillType}"]`)
    //     .toggleClass('d-none', skill.name === '-')
    //     .popover('dispose')
    //     .popover({
    //       trigger: 'hover click',
    //       title: skill.name,
    //       html: true,
    //       content: this.getSkillInfoHtml(skillType, skill)
    //     });
    this.toggleSkillInfo(skillType, skill);
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

  UnitBuilder.prototype.onTabChange = function(event) {
    if ($(event.currentTarget).data('val') === 'custom-unit') {
      this.drawCustomHero();
      this.activeTab = 'custom';
    } else {
      this.drawHero(this.fehUnit);
      this.activeTab = 'main';
    }
  }
  UnitBuilder.prototype.onUploadHeroImg = function(event) {
    let $upload = $(event.currentTarget);
    let that = this;
    if ($upload[0].files && $upload[0].files[0]) {
      let fileReader = new FileReader();
      fileReader.onload = function(e) {
         that.customUnit.image.src = e.target.result;
         that.customUnit.image.onload = () => that.drawCustomHero();
      };
      fileReader.readAsDataURL($upload[0].files[0]);
    }
  };
  UnitBuilder.prototype.onImageControlChange = function(event) {
    let $control = $(event.currentTarget);
    this.customUnit[$control.data('control')] = $control.val();
    this.drawCustomHero();
  };
  UnitBuilder.prototype.onCustomMoveTypeSelect = function(event) {
    this.customUnit.moveType = $(event.currentTarget).data('val').name;
    this.setupCustomSkillOptions();
    this.drawCustomHero();
  };
  UnitBuilder.prototype.onCustomWeaponTypeSelect = function(event) {
    let weaponColorTypes = $(event.currentTarget).data('val');
    this.customUnit.weaponType = weaponColorTypes.weaponType;
    this.customUnit.colorType = weaponColorTypes.colorType;
    $(this.ELEMENTS.CUSTOM_SKILL_SELECT + '[data-skill="weapon"]')
        .selectable('data', this.getWeapons(this.customUnit, false));
    this.setupCustomSkillOptions();
    this.drawCustomHero();
  };
  UnitBuilder.prototype.onCustomSupportChange = function(event) {
    this.customUnit.support = $(this.ELEMENTS.CUSTOM_SUPPORT_ON).is(':checked');
    this.drawCustomHero();
  };
  UnitBuilder.prototype.onCustomMergeSelect = function(event) {
    this.customUnit.merges = $(event.currentTarget).data('val');
    this.drawCustomHero();
  };
  UnitBuilder.prototype.onCustomStatChange = function(event) {
    let $stat = $(event.currentTarget);
    this.customUnit.stats[$stat.data('control')] = parseInt($stat.val());
    this.drawCustomHero();

    let total = 0;
    for (let stat in this.customUnit.stats) {
      total += this.customUnit.stats[stat];
    }
    $(this.ELEMENTS.CUSTOM_STAT_TOTAL).val(total);
  };
  UnitBuilder.prototype.onCustomSkillChange = function(event) {
    let $select = $(event.currentTarget);
    let skillType = $select.data('skill');
    let skill = $select.data('val');

    if (skillType === 'weapon') {
      if (SKILL_REFINED_WEAPONS[skill.name]) {
        $(this.ELEMENTS.CUSTOM_SKILL_SELECT + '[data-skill="refine"]')
            .selectable('data',
                [this.CONST.EMPTY_SKILL].concat(SKILL_REFINED_WEAPONS[skill.name]));
      } else {
        $(this.ELEMENTS.CUSTOM_SKILL_SELECT + '[data-skill="refine"]')
            .selectable('clear')
            .selectable('disable');
      }
      this.customUnit.skills.refine = this.CONST.EMPTY_SKILL;
    }
    this.customUnit.skills[skillType] = skill;
    this.drawCustomHero();
  };
  UnitBuilder.prototype.onCustomSkillToggle = function(event) {
    this.drawCustomHero();
  };
  UnitBuilder.prototype.onCustomNewSkillChange = function(event) {
    let $input = $(event.currentTarget);
    let skillType = $input.closest('[data-skill-type]').data('skill-type');
    let skillAttr = $input.data('control');

    if (skillAttr === 'stats') {
      this.customUnit.customSkills[skillType][skillAttr][$input.data('stats')] = parseInt($input.val());
      this.drawCustomHero();
    } else if (skillAttr === 'icon') {
      if ($input[0].files && $input[0].files[0]) {
        let fileReader = new FileReader();
        let that = this;
        fileReader.onload = function(e) {
          that.customUnit.customSkills[skillType].icon = new Image();
          that.customUnit.customSkills[skillType].crossOrigin = 'anonymous';
          that.customUnit.customSkills[skillType].icon.src = e.target.result;
          that.customUnit.customSkills[skillType].icon.onload = () => that.drawCustomHero();
        };
        fileReader.readAsDataURL($input[0].files[0]);
      } else {
        this.customUnit.customSkills[skillType].icon = '';
        this.drawCustomHero();
      }
    } else {
      this.customUnit.customSkills[skillType][skillAttr] = $input.val();
      this.drawCustomHero();
    }
  };

  UnitBuilder.prototype.onDownload = function(event) {
    let heroName = this.activeTab === 'main' ? this.fehUnit.data.name : this.customUnit.name;
    $(event.currentTarget)
        .attr('href', $(this.ELEMENTS.CANVAS)[0].toDataURL())
        .attr('download', 'FEH Unit Builder - ' + heroName + '.png');
  }

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
  };
  UnitBuilder.prototype.toggleSkillInfo = function(skillType, skill) {
    new Promise(() => {
      let inheritance = [];
      if (skillType !== 'refine' || skillType !== 'seal') {
        for (let i = 0; i < HEROES.length; i++) {
          for (let j = 0; j < HEROES[i].skills.length; j++) {
            if (HEROES[i].skills[j].name === skill.name) {
              inheritance.push({
                name: HEROES[i].name,
                rarity: HEROES[i].skills[j].rarity
              });
            }
          }
        }        
      }
      inheritance.sort((a, b) => a.rarity - b.rarity);
      console.log(inheritance);

      $(`.skill-info-icon[data-skill="${skillType}"]`)
        .toggleClass('d-none', skill.name === '-')
        .popover('dispose')
        .popover({
          trigger: 'hover click',
          title: skill.name,
          html: true,
          content: this.getSkillInfoHtml(skillType, skill, inheritance)
        });
    });
  };
  UnitBuilder.prototype.getSkillInfoHtml = function(skillType, skill, inheritance) {
    let html = '';
    let inheritHtml = '';

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
    if (inheritance.length) {
      inheritHtml = '<h6>Inheritance</h6><div class="inherit-list"><ul class="list-group">' + 
          inheritance.map(inherit => `<li class="list-group-item inherit-item">
              <span>${inherit.name}</span><span>[${inherit.rarity}]</span></li>`)
          .join('') + '</div><ul>';
    }
    return (html ? `<p class="skill-cost">${html}</p>` : '') + `<p>${skill.effect}</p>` + inheritHtml;
  };


  // Custom Unit Functions
  UnitBuilder.prototype.processCustomHeroStats = function() {
    for (let stat in this.customUnit.stats) {
      this.customUnit.processedStats[stat] = this.customUnit.stats[stat];
    }

    let skills;
    let activeTab;
    for (let skill in this.customUnit.skills) {
      activeTab =  $(`.tab-content[data-skill-type="${skill}"] > .active`);

      if (activeTab.data('tab-type') === 'default' || skill === 'refine') {
        skills = this.customUnit.skills;
      } else {
        skills = this.customUnit.customSkills;
      }

      if (skills[skill].damage) {
        this.customUnit.processedStats.atk += skills[skill].damage;
      }
      for (let stat in skills[skill].stats) {
        this.customUnit.processedStats[stat] += skills[skill].stats[stat];
      }
    }

    if (this.customUnit.support) {
      this.customUnit.processedStats.hp += 5;
      this.customUnit.processedStats.atk += 2;
      this.customUnit.processedStats.spd += 2;
      this.customUnit.processedStats.def += 2;
      this.customUnit.processedStats.res += 2;
    }

    for (stat in this.customUnit.stats) {
      this.customUnit.processedStats[stat] = Math.max(0, this.customUnit.processedStats[stat]);
    }
  };
  UnitBuilder.prototype.setupCustomSkillOptions = function() {
    if (this.customUnit.moveType.length === 0 || this.customUnit.weaponType.length === 0) {
      return;
    }

    $(this.ELEMENTS.CUSTOM_SKILL_SELECT + '[data-skill="assist"]')
        .selectable('data', [this.CONST.EMPTY_SKILL].concat(this.getSkills(this.customUnit, SKILL_ASSIST, false)));
    $(this.ELEMENTS.CUSTOM_SKILL_SELECT + '[data-skill="seal"]')
        .selectable('data', [this.CONST.EMPTY_SKILL].concat(this.getSkills(this.customUnit, SKILL_SEAL, false)));
    $(this.ELEMENTS.CUSTOM_SKILL_SELECT + '[data-skill="skillA"]')
        .selectable('data', [this.CONST.EMPTY_SKILL].concat(this.getSkills(this.customUnit, SKILL_A, false)));
    $(this.ELEMENTS.CUSTOM_SKILL_SELECT + '[data-skill="skillB"]')
        .selectable('data', [this.CONST.EMPTY_SKILL].concat(this.getSkills(this.customUnit, SKILL_B, false)));
    $(this.ELEMENTS.CUSTOM_SKILL_SELECT + '[data-skill="skillC"]')
        .selectable('data', [this.CONST.EMPTY_SKILL].concat(this.getSkills(this.customUnit, SKILL_C, false)));
    $(this.ELEMENTS.CUSTOM_SKILL_SELECT + '[data-skill="special"]')
        .selectable('data', [this.CONST.EMPTY_SKILL].concat(this.getSkills(this.customUnit, SKILL_SPECIAL, false)));
    $(this.ELEMENTS.CUSTOM_SKILL_SELECT + '[data-skill="refine"]')
        .selectable('clear').selectable('disable');
  };


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
        this.ctx.drawImage(this.IMAGES.UI, 0, 0, 210, 223, 420, 430, 108, 115);
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
    let coord = rarity === 5 ? this.COORD.RARITY["5"] : this.COORD.RARITY["4"];
    this.ctx.drawImage(this.IMAGES.UI, coord[0], coord[1], 153, 40, 46, 380, 153, 40);
  };
  UnitBuilder.prototype.drawWeaponAndMoveType = function(color, weaponType, moveType) {
    let weaponTypeIcon = this.COORD.ICONS[color + ' ' + weaponType];
    let moveTypeIcon = this.COORD.ICONS[moveType];
    if (weaponTypeIcon) {
      this.ctx.drawImage(this.IMAGES.UI, weaponTypeIcon[0], weaponTypeIcon[1], 52, 52, 48, 553, 28, 28);
    }
    if (moveTypeIcon) {
      this.ctx.drawImage(this.IMAGES.UI, moveTypeIcon[0], moveTypeIcon[1], 52, 52, 204, 554, 26, 26);
    }
  };
  UnitBuilder.prototype.drawMergesAndStats = function(merges, stats) {
    if (merges > 0 && merges < 10) {
      this.ctx.drawImage(this.IMAGES.UI, this.COORD.FONT_IMAGE.white[0],
          this.COORD.FONT_IMAGE.white[1] + 400, 32, 40, 158, 558, 15, 19);
      this.ctx.drawImage(this.IMAGES.UI, this.COORD.FONT_IMAGE.white[0],
          this.COORD.FONT_IMAGE.white[1] + merges * 40, 32, 40, 172, 558, 15, 19);
    } else if (merges == 10) {
      this.ctx.drawImage(this.IMAGES.UI, this.COORD.FONT_IMAGE.green[0],
          this.COORD.FONT_IMAGE.green[1] + 400, 32, 40, 158, 558, 15, 19);
      this.ctx.drawImage(this.IMAGES.UI, this.COORD.FONT_IMAGE.green[0],
          this.COORD.FONT_IMAGE.green[1] + 40, 32, 40, 172, 558, 15, 19);
      this.ctx.drawImage(this.IMAGES.UI, this.COORD.FONT_IMAGE.green[0],
          this.COORD.FONT_IMAGE.green[1], 32, 40, 186, 558, 15, 19);
    }

    this.drawStats(stats.hp, 147, this.COORD.STATS.hp);
    this.drawStats(stats.atk, 147, this.COORD.STATS.atk, false, this.fehUnit.buffs.atk);
    this.drawStats(stats.spd, 147, this.COORD.STATS.spd, false, this.fehUnit.buffs.spd);
    this.drawStats(stats.def, 147, this.COORD.STATS.def, false, this.fehUnit.buffs.def);
    this.drawStats(stats.res, 147, this.COORD.STATS.res, false, this.fehUnit.buffs.res);
    this.drawStats(this.CONST.MAX_SP, 147, this.COORD.STATS.sp, this.COORD.FONT_IMAGE.green);
    this.drawStats(this.CONST.MAX_HM, 147, this.COORD.STATS.hm, this.COORD.FONT_IMAGE.green);
  };
  UnitBuilder.prototype.drawStats = function(value, x, y, fixedFont, buff = 0) {
    let font;
    let digit;
    if (fixedFont) {
      font = fixedFont;
    } else {
      font = buff === 0 ? this.COORD.FONT_IMAGE.yellow :
        buff > 0 ? this.COORD.FONT_IMAGE.blue : this.COORD.FONT_IMAGE.red;
    }

    if (value >= 1000) {
      digit = Math.floor((value / 1000) % 10);
      this.ctx.drawImage(this.IMAGES.UI, font[0],font[1] + digit * 40, 32, 40, x, y, 15, 19);
    }
    if (value >= 100) {
      digit = Math.floor((value / 100) % 10);
      this.ctx.drawImage(this.IMAGES.UI, font[0],font[1] + digit * 40, 32, 40, x + 14, y, 15, 19);
    }
    if (value >= 10) {
      digit = Math.floor((value / 10) % 10);
      this.ctx.drawImage(this.IMAGES.UI, font[0], font[1] + digit * 40, 32, 40, x + 28, y, 15, 19);
    }

    digit = value % 10;
    this.ctx.drawImage(this.IMAGES.UI, font[0], font[1] + digit * 40, 32, 40, x + 42, y, 15, 19);
  };
  UnitBuilder.prototype.drawIv = function(iv) {
    if (iv.boon === '-') {
      return;
    }

    this.ctx.drawImage(this.IMAGES.UI, this.COORD.FONT_IMAGE.green[0],
        this.COORD.FONT_IMAGE.green[1] + 400, 32, 40, 60, this.COORD.STATS[iv.boon], 15, 19);
    this.ctx.drawImage(this.IMAGES.UI, this.COORD.FONT_IMAGE.red[0],
        this.COORD.FONT_IMAGE.red[1] + 440, 32, 40, 60, this.COORD.STATS[iv.bane], 15, 19);
  };
  UnitBuilder.prototype.drawSkills = function(skills) {
    this.ctx.drawImage(this.IMAGES.SKILLS, 130, 0, 65, 67, 275, 633, 34, 34);
    this.ctx.drawImage(this.IMAGES.SKILLS, 195, 0, 65, 67, 275, 669, 34, 34);

    if (skills.refine.icon) {
      this.drawIcon(skills.refine.icon, this.COORD.SKILLS_ICON.weapon);
    } else if (skills.weapon.icon) {
      this.drawIcon(skills.weapon.icon, this.COORD.SKILLS_ICON.weapon);
    } else {
      this.drawIcon('0-1', this.COORD.SKILLS_ICON.weapon);
    }

    for (let skill in skills) {
      if (skill === 'refine' || skill === 'weapon' || skill === 'assist' || skill === 'special') {
        continue;
      }
      if (skills[skill].icon) {
        this.drawIcon(skills[skill].icon, this.COORD.SKILLS_ICON[skill]);
      } else {
        this.drawIcon('0-0', this.COORD.SKILLS_ICON[skill]);
      }
    }

    this.ctx.drawImage(this.IMAGES.UI, 0, 476, 34, 38, 295, 723, 19, 21);
    this.ctx.drawImage(this.IMAGES.UI, 34, 476, 34, 38, 295, 759, 19, 21);
    this.ctx.drawImage(this.IMAGES.UI, 68, 476, 34, 38, 295, 795, 19, 21);
    this.ctx.drawImage(this.IMAGES.UI, 102, 476, 34, 38, 295, 832, 19, 21);

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

  UnitBuilder.prototype.drawCustomHero = function() {
    this.processCustomHeroStats();
    if (this.customUnit.support) {
      this.ctx.drawImage(this.IMAGES.BACK, 540, 0, 540, 960, 0, 0, 540, 960);
    } else {
      this.ctx.drawImage(this.IMAGES.BACK, 0, 0);
    }

    if (this.customUnit.image) {
      this.ctx.drawImage(this.customUnit.image, 0, 0,
        this.customUnit.image.width, this.customUnit.image.height,
        this.customUnit.imagePosX, -this.customUnit.imagePosY,
        this.customUnit.image.width * this.customUnit.imageSize,
        this.customUnit.image.height * this.customUnit.imageSize);
    }

    this.ctx.drawImage(this.IMAGES.FRONT, 0, 0);
    if (this.customUnit.support) {
      this.ctx.drawImage(this.IMAGES.UI, 0, 0, 210, 223, 420, 430, 108, 115);
    }

    this.drawRarity(5);
    this.drawNameAndTitle(this.customUnit.name, this.customUnit.title);
    this.drawMergesAndStats(this.customUnit.merges, this.customUnit.processedStats);
    this.drawWeaponAndMoveType(this.customUnit.colorType, this.customUnit.weaponType, this.customUnit.moveType);
    this.drawCustomHeroSkills();
  };
  UnitBuilder.prototype.drawCustomHeroSkills = function() {
    let activeTab;
    let selectedSkills = {};

    for (skill in this.customUnit.skills) {
      activeTab =  $(`.tab-content[data-skill-type="${skill === 'refine' ? 'weapon' : skill}"] > .active`);
      if (activeTab.data('tab-type') === 'default') {
        selectedSkills[skill] = this.customUnit.skills[skill];
      } else {
        selectedSkills[skill] = this.customUnit.customSkills[skill];
      }
    }
    this.drawSkills(selectedSkills);
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
  UnitBuilder.prototype.getEmptySkill = function() {
    return {
      name: '-',
      effect: '',
      stats: {},
      icon: ''
    };
  };

})(jQuery);

new UnitBuilder();
