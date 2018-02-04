let values = require('./values.js');
let elements = require('./elements.js');
let skills = require('../data/skill-access.js');
let utils = require('./utils.js');
let canvas;

let customUnit = {
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
    weapon: values.CONST.EMPTY_SKILL,
    refine: values.CONST.EMPTY_SKILL,
    assist: values.CONST.EMPTY_SKILL,
    special: values.CONST.EMPTY_SKILL,
    skillA: values.CONST.EMPTY_SKILL,
    skillB: values.CONST.EMPTY_SKILL,
    skillC: values.CONST.EMPTY_SKILL,
    seal: values.CONST.EMPTY_SKILL
  },
  customSkills: {
    weapon: utils.getEmptySkill(),
    refine: utils.getEmptySkill(),
    assist: utils.getEmptySkill(),
    special: utils.getEmptySkill(),
    skillA: utils.getEmptySkill(),
    skillB: utils.getEmptySkill(),
    skillC: utils.getEmptySkill(),
    seal: utils.getEmptySkill()
  }
};

function init(canvasObj) {
  $(elements.CUSTOM_MOVE_TYPE_SELECT).selectable({
    data: values.CONST.MOVE_TYPES,
    search: false
  });
  $(elements.CUSTOM_WEAPON_TYPE_SELECT).selectable({
    data: values.CONST.WEAPON_TYPES,
    search: false
  });
  $(elements.CUSTOM_SKILL_SELECT).selectable({disabled: 'disabled'});
  $(elements.CUSTOM_MERGE_SELECT).selectable({
    data: values.CONST.MERGES,
    optionGenerator: utils.arrOptGenerator,
    search: false
  });

  canvas = canvasObj;
  bindEvents();
}

function bindEvents() {
  $(elements.UPLOAD_HERO).on('change', onUploadHeroImg);
  $(elements.CUSTOM_IMAGE_CONTROL).on('change', onImageControlChange);
  $(elements.CUSTOM_WEAPON_TYPE_SELECT).on('select', onCustomWeaponTypeSelect);
  $(elements.CUSTOM_MOVE_TYPE_SELECT).on('select', onCustomMoveTypeSelect);
  $(elements.CUSTOM_SUPPORT_CHECKS).on('change', onCustomSupportChange);

  $(elements.CUSTOM_MERGE_SELECT).on('select', onCustomMergeSelect);
  $(elements.CUSTOM_SKILL_SELECT).on('select', onCustomSkillChange);
  $(elements.CUSTOM_STAT_CONTROL).on('change', onCustomStatChange);
  $(elements.CUSTOM_NEW_SKILL_INPUT).on('change', onCustomNewSkillChange);
  $(elements.CUSTOM_SKILL_TOGGLE).on('shown.bs.tab', onCustomSkillToggle);
};


function onUploadHeroImg(event) {
  let $upload = $(event.currentTarget);
  if ($upload[0].files && $upload[0].files[0]) {
    let fileReader = new FileReader();
    fileReader.onload = function(e) {
       customUnit.image.src = e.target.result;
       customUnit.image.onload = () => drawHero();
    };
    fileReader.readAsDataURL($upload[0].files[0]);
  }
};
function onImageControlChange(event) {
  let $control = $(event.currentTarget);
  customUnit[$control.data('control')] = $control.val();
  drawHero();
};
function onCustomMoveTypeSelect(event) {
  customUnit.moveType = $(event.currentTarget).data('val').name;
  setupCustomSkillOptions();
  drawHero();
};
function onCustomWeaponTypeSelect(event) {
  let weaponColorTypes = $(event.currentTarget).data('val');
  customUnit.weaponType = weaponColorTypes.weaponType;
  customUnit.colorType = weaponColorTypes.colorType;
  $(elements.CUSTOM_SKILL_SELECT + '[data-skill="weapon"]')
      .selectable('data', skills.getWeapons(customUnit, false));
  setupCustomSkillOptions();
  drawHero();
};
function onCustomSupportChange(event) {
  customUnit.support = $(elements.CUSTOM_SUPPORT_ON).is(':checked');
  drawHero();
};
function onCustomMergeSelect(event) {
  customUnit.merges = $(event.currentTarget).data('val');
  drawHero();
};
function onCustomStatChange(event) {
  let $stat = $(event.currentTarget);
  customUnit.stats[$stat.data('control')] = parseInt($stat.val());
  drawHero();

  let total = 0;
  for (let stat in customUnit.stats) {
    total += customUnit.stats[stat];
  }
  $(elements.CUSTOM_STAT_TOTAL).val(total);
};
function onCustomSkillChange(event) {
  let $select = $(event.currentTarget);
  let skillType = $select.data('skill');
  let skill = $select.data('val');

  if (skillType === 'weapon') {
    if (SKILL_REFINED_WEAPONS[skill.name]) {
      $(elements.CUSTOM_SKILL_SELECT + '[data-skill="refine"]')
          .selectable('data',
              [values.CONST.EMPTY_SKILL].concat(SKILL_REFINED_WEAPONS[skill.name]));
    } else {
      $(elements.CUSTOM_SKILL_SELECT + '[data-skill="refine"]')
          .selectable('clear')
          .selectable('disable');
    }
    customUnit.skills.refine = values.CONST.EMPTY_SKILL;
  }
  customUnit.skills[skillType] = skill;
  drawHero();
};
function onCustomSkillToggle(event) {
  drawHero();
};
function onCustomNewSkillChange(event) {
  let $input = $(event.currentTarget);
  let skillType = $input.closest('[data-skill-type]').data('skill-type');
  let skillAttr = $input.data('control');

  if (skillAttr === 'stats') {
    customUnit.customSkills[skillType][skillAttr][$input.data('stats')] = parseInt($input.val());
    drawHero();
  } else if (skillAttr === 'icon') {
    if ($input[0].files && $input[0].files[0]) {
      let fileReader = new FileReader();
      fileReader.onload = function(e) {
        customUnit.customSkills[skillType].icon = new Image();
        customUnit.customSkills[skillType].crossOrigin = 'anonymous';
        customUnit.customSkills[skillType].icon.src = e.target.result;
        customUnit.customSkills[skillType].icon.onload = () => drawCustomHero();
      };
      fileReader.readAsDataURL($input[0].files[0]);
    } else {
      customUnit.customSkills[skillType].icon = '';
      drawHero();
    }
  } else {
    customUnit.customSkills[skillType][skillAttr] = $input.val();
    drawHero();
  }
};


function drawHero() {
  processHeroStats();
  canvas.drawCustomHero(customUnit);
}

function processHeroStats() {
  for (let stat in customUnit.stats) {
    customUnit.processedStats[stat] = customUnit.stats[stat];
  }

  let skills;
  let activeTab;
  for (let skill in customUnit.skills) {
    activeTab =  $(`.tab-content[data-skill-type="${skill}"] > .active`);

    if (activeTab.data('tab-type') === 'default' || skill === 'refine') {
      skills = customUnit.skills;
    } else {
      skills = customUnit.customSkills;
    }

    if (skills[skill].damage) {
      customUnit.processedStats.atk += skills[skill].damage;
    }
    for (let stat in skills[skill].stats) {
      customUnit.processedStats[stat] += skills[skill].stats[stat];
    }
  }

  if (customUnit.support) {
    customUnit.processedStats.hp += 5;
    customUnit.processedStats.atk += 2;
    customUnit.processedStats.spd += 2;
    customUnit.processedStats.def += 2;
    customUnit.processedStats.res += 2;
  }

  for (stat in customUnit.stats) {
    customUnit.processedStats[stat] = Math.max(0, customUnit.processedStats[stat]);
  }
};

function setupCustomSkillOptions() {
  if (customUnit.moveType.length === 0 || customUnit.weaponType.length === 0) {
    return;
  }

  $(elements.CUSTOM_SKILL_SELECT + '[data-skill="assist"]')
      .selectable('data', [values.CONST.EMPTY_SKILL].concat(skills.getAssists(customUnit, false)));
  $(elements.CUSTOM_SKILL_SELECT + '[data-skill="seal"]')
      .selectable('data', [values.CONST.EMPTY_SKILL].concat(skills.getSeals(customUnit, false)));
  $(elements.CUSTOM_SKILL_SELECT + '[data-skill="skillA"]')
      .selectable('data', [values.CONST.EMPTY_SKILL].concat(skills.getSkillA(customUnit, false)));
  $(elements.CUSTOM_SKILL_SELECT + '[data-skill="skillB"]')
      .selectable('data', [values.CONST.EMPTY_SKILL].concat(skills.getSkillB(customUnit, false)));
  $(elements.CUSTOM_SKILL_SELECT + '[data-skill="skillC"]')
      .selectable('data', [values.CONST.EMPTY_SKILL].concat(skills.getSkillC(customUnit, false)));
  $(elements.CUSTOM_SKILL_SELECT + '[data-skill="special"]')
      .selectable('data', [values.CONST.EMPTY_SKILL].concat(skills.getSpecials(customUnit, false)));
  $(elements.CUSTOM_SKILL_SELECT + '[data-skill="refine"]')
      .selectable('clear').selectable('disable');
};


module.exports = {
  init: init,
  drawHero: drawHero,
  hero: customUnit
};
