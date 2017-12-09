//TODO Color boon bane
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
    SUPPORT_CHECKS: '[name="support"]',
    SUPPORT_ON: '#support-yes',
    IV_SELECT: '#iv-select',
    DOWNLOAD: '#download-img',
    UPLOAD_HERO: '#custom-hero-upload',
    CUSTOM_HERO_CONTROL: '.custom-hero-control',
    CUSTOM_SUPPORT_CHECKS: '[name="support-custom"]',
    CUSTOM_SUPPORT_ON: '#support-custom-yes'
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
    }
  };
  const FEH_FONT = new FontFace('FehFont', 'url(font/feh-font.ttf)');
  const EMPTY_SKILL = { name: '-' };
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
    stats: {
      hp: 0,
      atk: 0,
      spd: 0,
      def: 0,
      res: 0
    },
    moveType: "",
    colorType: "",
    weaponType: "",
    imageSize: 1,
    imagePosX: 0,
    imagePosY: 0
  };
  let imgSkills;
  let imgFront;
  let imgBack;
  init();

  function init() {
    customHero.image.crossOrigin = 'anonymous';
    loadFiles([IMAGES.SKILLS, IMAGES.FRONT, IMAGES.BACK], true).then(files => {
      document.fonts.add(FEH_FONT);
      imgSkills = files[0];
      imgFront = files[1];
      imgBack = files[2];
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

    $(ELEMENTS.UPLOAD_HERO).on('change', onUploadHeroImg);
    $(ELEMENTS.CUSTOM_HERO_CONTROL).on('change', onImageControlChange);
    $(ELEMENTS.CUSTOM_SUPPORT_CHECKS).on('change', onCustomSupportChange);
  }

  function onDownload(event) {
    $(this).attr('href', canvas.toDataURL());
    $(this).attr('download', 'FEH Unit Builder - ' + selectedHero.data.name + '.png');
  }

  function onHeroChange(event) {
    let hero = $(this).data('val');
    selectedHero.data = hero;
    for (let skill in selectedHero.skills) {
      selectedHero.skills[skill] = EMPTY_SKILL;
    }

    drawHero(selectedHero);
    $(ELEMENTS.WEAPON_SELECT).selectable('selectOptions', [EMPTY_SKILL].concat(getWeapons(hero)));
    $(ELEMENTS.ASSIST_SELECT).selectable('selectOptions', [EMPTY_SKILL].concat(getSkills(hero, SKILL_ASSIST)));
    $(ELEMENTS.SEAL_SELECT).selectable('selectOptions', [EMPTY_SKILL].concat(getSkills(hero, SKILL_SEAL)));
    $(ELEMENTS.SKILL_A_SELECT).selectable('selectOptions', [EMPTY_SKILL].concat(getSkills(hero, SKILL_A)));
    $(ELEMENTS.SKILL_B_SELECT).selectable('selectOptions', [EMPTY_SKILL].concat(getSkills(hero, SKILL_B)));
    $(ELEMENTS.SKILL_C_SELECT).selectable('selectOptions', [EMPTY_SKILL].concat(getSkills(hero, SKILL_C)));
    $(ELEMENTS.SPECIAL_SELECT).selectable('selectOptions', [EMPTY_SKILL].concat(getSkills(hero, SKILL_SPECIAL)));
    $(ELEMENTS.REFINE_SELECT).selectable('clear').selectable('disable');
    $(ELEMENTS.IV_SELECT).selectable('enable');
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

  function getWeapons(hero) {
    let weapons = [];
    for (let i = 0; i < SKILL_WEAPON.length; i++) {
      if (SKILL_WEAPON[i].exclusive && !SKILL_WEAPON[i].exclusive.includes(hero.name)) {
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

  function getSkills(hero, skills) {
    let res = [];
    for (let i = 0; i < skills.length; i++) {
      if (includeSkill(hero, skills[i])) {
        res.push(skills[i]);
      }
    }
    return res;
  }
  function includeSkill(hero, skill) {
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
    ctx.drawImage(imgSkills, weaponTypeIcon[0], weaponTypeIcon[1], 52, 52, 48, 553, 28, 28);
    ctx.drawImage(imgSkills, moveTypeIcon[0], moveTypeIcon[1], 52, 52, 204, 554, 26, 26);
  }

  function drawMergesStats(merges, stats) {
    ctx.font = '18px FehFont';
    ctx.strokeStyle = '#000000';
    ctx.fillStyle = '#ffffff';
    ctx.textAlign='start';
    ctx.lineWidth = 4;

    ctx.strokeText('40', 135, 574);
    ctx.fillText('40', 135, 574);

    if (merges > 0) {
      if (merges === 10) {
        ctx.fillStyle = '#92ff4f';
      }
      ctx.strokeText('+', 161, 572);
      ctx.strokeText(merges, 174, 574);
      ctx.fillText('+', 161, 572);
      ctx.fillText(merges, 174, 574);
    }

    ctx.textAlign='end';
    ctx.fillStyle = '#fdf98e';
    ctx.strokeText(stats.hp, 200, 620);
    ctx.strokeText(stats.atk, 200, 656);
    ctx.strokeText(stats.spd, 200, 694);
    ctx.strokeText(stats.def, 200, 731);
    ctx.strokeText(stats.res, 200, 768);
    ctx.fillText(stats.hp, 200, 620);
    ctx.fillText(stats.atk, 200, 656);
    ctx.fillText(stats.spd, 200, 694);
    ctx.fillText(stats.def, 200, 731);
    ctx.fillText(stats.res, 200, 768);
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

  function drawCustomHero() {
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
    drawMergesStats(customHero.merges, customHero.stats);
  }
});
