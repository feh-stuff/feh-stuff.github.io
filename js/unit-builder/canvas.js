let elements = require('./elements.js');
let values = require('./values.js');
let ctx = $(elements.CANVAS)[0].getContext('2d');
let textCanvas = document.createElement('canvas');
let textCtx = textCanvas.getContext('2d');

textCanvas.width = 1080;
textCanvas.height = 1920;
textCtx.textAlign="start";
textCtx.font = "34px FehFont";
textCtx.strokeStyle = '#061d2c';
textCtx.lineWidth = 8;
textCtx.lineJoin = 'round';

let images = {
  FRONT: null,
  BACK: null,
  SKILLS: null,
  UI: null
};

function setImages(img) {
  images = img;
}

function drawHero(hero, heroImg) {
  if (hero.support) {
    ctx.drawImage(images.BACK, 540, 0, 540, 960, 0, 0, 540, 960);
  } else {
    ctx.drawImage(images.BACK, 0, 0);
  }

  ctx.drawImage(heroImg, 0, 0);
  ctx.drawImage(images.FRONT, 0, 0);

  if ($(elements.SELECT_IV_SHOW).is(':checked')) {
    drawIv(hero.iv);
  }
  if ($(elements.SELECT_FULL_UI_SHOW).is(':checked')) {
    ctx.drawImage(images.FRONT, 540, 0, 540, 960, 0, 0, 540, 960);
    drawArtistAndVoice(hero.data.artist, hero.data.voice);
  }

  drawSupportAndBlessing(hero);
  drawRarity(hero.rarity);
  drawNameAndTitle(hero.data.shortName || hero.data.name, hero.data.title);
  drawWeaponAndMoveType(hero.data.colorType, hero.data.weaponType, hero.data.moveType);
  drawMergesAndStats(hero.merges, hero.stats, hero.buffs);
  drawSkills(hero.skills);
}

function drawSupportAndBlessing(hero) {
  let coord;
  if (hero.support && hero.blessing !== '-') {
    coord = hero.legendary ? values.COORD.LEGENDARY_BLESSINGS[hero.blessingIcon] :
        values.COORD.BLESSINGS[hero.blessing];
    ctx.drawImage(images.UI, 0, 0, 210, 223, 335, 430, 103, 109);
    ctx.drawImage(images.UI, coord[0], coord[1], 210, 223, 430, 430, 103, 109);
  } else if (hero.support) {
    ctx.drawImage(images.UI, 0, 0, 210, 223, 425, 430, 108, 115);
  } else if (hero.legendary) {
    coord = values.COORD.LEGENDARY_BLESSINGS[hero.blessingIcon];
    ctx.drawImage(images.UI, coord[0], coord[1], 210, 223, 425, 430, 108, 115);
  } else if (hero.blessing !== '-') {
    coord = values.COORD.BLESSINGS[hero.blessing];
    ctx.drawImage(images.UI, coord[0], coord[1], 210, 223, 425, 430, 108, 115);
  }
}

function drawNameAndTitle(name, title) {
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

function drawRarity(rarity) {
  let coord = rarity === 5 ? values.COORD.RARITY["5"] : values.COORD.RARITY["4"];
  ctx.drawImage(images.UI, coord[0], coord[1], 153, 40, 46, 380, 153, 40);
}

function drawWeaponAndMoveType(color, weaponType, moveType) {
  let weaponTypeIcon = values.COORD.ICONS[color + ' ' + weaponType];
  let moveTypeIcon = values.COORD.ICONS[moveType];
  if (weaponTypeIcon) {
    ctx.drawImage(images.UI, weaponTypeIcon[0], weaponTypeIcon[1], 52, 52, 48, 553, 28, 28);
  }
  if (moveTypeIcon) {
    ctx.drawImage(images.UI, moveTypeIcon[0], moveTypeIcon[1], 52, 52, 208, 554, 26, 26);
  }
}


function drawMergesAndStats(merges, stats, buffs = {}) {
  if (merges > 0 && merges < 10) {
    ctx.drawImage(images.UI, values.COORD.FONT_IMAGE.white[0],
        values.COORD.FONT_IMAGE.white[1] + 400, 32, 40, 158, 558, 15, 19);
    ctx.drawImage(images.UI, values.COORD.FONT_IMAGE.white[0],
        values.COORD.FONT_IMAGE.white[1] + merges * 40, 32, 40, 172, 558, 15, 19);
  } else if (merges == 10) {
    ctx.drawImage(images.UI, values.COORD.FONT_IMAGE.green[0],
        values.COORD.FONT_IMAGE.green[1] + 400, 32, 40, 158, 558, 15, 19);
    ctx.drawImage(images.UI, values.COORD.FONT_IMAGE.green[0],
        values.COORD.FONT_IMAGE.green[1] + 40, 32, 40, 172, 558, 15, 19);
    ctx.drawImage(images.UI, values.COORD.FONT_IMAGE.green[0],
        values.COORD.FONT_IMAGE.green[1], 32, 40, 186, 558, 15, 19);
  }

  drawStats(stats.hp, 147, values.COORD.STATS.hp);
  drawStats(stats.atk, 147, values.COORD.STATS.atk, false, buffs.atk || 0);
  drawStats(stats.spd, 147, values.COORD.STATS.spd, false, buffs.spd || 0);
  drawStats(stats.def, 147, values.COORD.STATS.def, false, buffs.def || 0);
  drawStats(stats.res, 147, values.COORD.STATS.res, false, buffs.res || 0);
  drawStats(values.CONST.MAX_SP, 147, values.COORD.STATS.sp, values.COORD.FONT_IMAGE.green);
  drawStats(values.CONST.MAX_HM, 147, values.COORD.STATS.hm, values.COORD.FONT_IMAGE.green);
}

function drawStats(value, x, y, fixedFont, buff = 0) {
  let font;
  let digit;
  if (fixedFont) {
    font = fixedFont;
  } else {
    font = buff === 0 ? values.COORD.FONT_IMAGE.yellow :
      buff > 0 ? values.COORD.FONT_IMAGE.blue : values.COORD.FONT_IMAGE.red;
  }

  if (value >= 1000) {
    digit = Math.floor((value / 1000) % 10);
    ctx.drawImage(images.UI, font[0],font[1] + digit * 40, 32, 40, x, y, 15, 19);
  }
  if (value >= 100) {
    digit = Math.floor((value / 100) % 10);
    ctx.drawImage(images.UI, font[0],font[1] + digit * 40, 32, 40, x + 14, y, 15, 19);
  }
  if (value >= 10) {
    digit = Math.floor((value / 10) % 10);
    ctx.drawImage(images.UI, font[0], font[1] + digit * 40, 32, 40, x + 28, y, 15, 19);
  }

  digit = value % 10;
  ctx.drawImage(images.UI, font[0], font[1] + digit * 40, 32, 40, x + 42, y, 15, 19);
}

function drawIv(iv) {
  if (iv.boon === '-') {
    return;
  }

  ctx.drawImage(images.UI, values.COORD.FONT_IMAGE.green[0],
      values.COORD.FONT_IMAGE.green[1] + 400, 32, 40, 60, values.COORD.STATS[iv.boon], 15, 19);
  ctx.drawImage(images.UI, values.COORD.FONT_IMAGE.red[0],
      values.COORD.FONT_IMAGE.red[1] + 440, 32, 40, 60, values.COORD.STATS[iv.bane], 15, 19);
}

function drawArtistAndVoice(artist = "—", voice = "—") {
  textCtx.fillStyle = '#ffffff';
  textCtx.font = "32px FehFont";
  textCtx.clearRect(0, 0, textCanvas.width, textCanvas.height);

  textCtx.strokeText(voice, 70, 1826);
  textCtx.fillText(voice, 70, 1826);
  textCtx.strokeText(artist, 70, 1868);
  textCtx.fillText(artist, 70, 1868);
  ctx.drawImage(textCanvas, 0, 0, 540, 960);
}

function drawSkills(skills) {
  ctx.drawImage(images.SKILLS, 130, 0, 65, 67, 275, 633, 34, 34);
  ctx.drawImage(images.SKILLS, 195, 0, 65, 67, 275, 669, 34, 34);

  if (skills.refine.icon) {
    drawIcon(skills.refine.icon, values.COORD.SKILLS_ICON.weapon);
  } else if (skills.weapon.icon) {
    drawIcon(skills.weapon.icon, values.COORD.SKILLS_ICON.weapon);
  } else {
    drawIcon('0-1', values.COORD.SKILLS_ICON.weapon);
  }

  for (let skill in skills) {
    if (skill === 'refine' || skill === 'weapon' || skill === 'assist' || skill === 'special') {
      continue;
    }
    if (skills[skill].icon) {
      drawIcon(skills[skill].icon, values.COORD.SKILLS_ICON[skill]);
    } else if (skill === 'seal') {
      ctx.drawImage(images.UI, values.COORD.EMPTY_SEAL[0], values.COORD.EMPTY_SEAL[1],
            65, 67, 275, values.COORD.SKILLS_ICON.seal, 34, 34);
    } else {
      drawIcon('0-0', values.COORD.SKILLS_ICON[skill]);
    }
  }

  ctx.drawImage(images.UI, 0, 476, 34, 38, 295, 723, 19, 21);
  ctx.drawImage(images.UI, 34, 476, 34, 38, 295, 759, 19, 21);
  ctx.drawImage(images.UI, 68, 476, 34, 38, 295, 795, 19, 21);
  ctx.drawImage(images.UI, 102, 476, 34, 38, 295, 832, 19, 21);

  textCtx.fillStyle = '#ffffff';
  textCtx.font = "34px FehFont";
  textCtx.clearRect(0, 0, textCanvas.width, textCanvas.height);

  textCtx.strokeText(skills.weapon.name, 634, 1238);
  textCtx.strokeText(skills.assist.name, 634, 1312);
  textCtx.strokeText(skills.special.name, 634, 1388);
  textCtx.strokeText(skills.skillA.name, 634, 1462);
  textCtx.strokeText(skills.skillB.name, 634, 1536);
  textCtx.strokeText(skills.skillC.name, 634, 1608);
  textCtx.strokeText(skills.seal.name, 634, 1682);

  textCtx.fillText(skills.assist.name, 634, 1312);
  textCtx.fillText(skills.special.name, 634, 1388);
  textCtx.fillText(skills.skillA.name, 634, 1462);
  textCtx.fillText(skills.skillB.name, 634, 1536);
  textCtx.fillText(skills.skillC.name, 634, 1608);
  textCtx.fillText(skills.seal.name, 634, 1682);

  if (skills.refine.name !== '-' || skills.weapon.icon) {
    textCtx.fillStyle = '#92ff4f';
  }
  textCtx.fillText(skills.weapon.name, 634, 1238);
  ctx.drawImage(textCanvas, 0, 0, 540, 960);
}

function drawIcon(icon, posY, posX = 275, sizeY = 34, sizeX = 34) {
  if (typeof icon === 'string') {
    let xy = icon.split('-');
    ctx.drawImage(images.SKILLS, xy[1] * 65, xy[0] * 67, 65, 67, posX, posY, sizeX, sizeY);
  } else {
    ctx.drawImage(icon, 0, 0, icon.width, icon.height, posX, posY, sizeX, sizeY)
  }
}


function drawCustomHero(customUnit) {
  if (customUnit.support) {
    ctx.drawImage(images.BACK, 540, 0, 540, 960, 0, 0, 540, 960);
  } else {
    ctx.drawImage(images.BACK, 0, 0);
  }

  if (customUnit.image) {
    ctx.drawImage(customUnit.image, 0, 0,
      customUnit.image.width, customUnit.image.height,
      customUnit.imagePosX, -customUnit.imagePosY,
      customUnit.image.width * customUnit.imageSize,
      customUnit.image.height * customUnit.imageSize);
  }

  ctx.drawImage(images.FRONT, 0, 0);
  if (customUnit.support) {
    ctx.drawImage(images.UI, 0, 0, 210, 223, 420, 430, 108, 115);
  }

  drawRarity(5);
  drawNameAndTitle(customUnit.name, customUnit.title);
  drawMergesAndStats(customUnit.merges, customUnit.processedStats);
  drawWeaponAndMoveType(customUnit.colorType, customUnit.weaponType, customUnit.moveType);
  drawCustomHeroSkills(customUnit);
}

function drawCustomHeroSkills(customUnit) {
  let activeTab;
  let selectedSkills = {};

  for (skill in customUnit.skills) {
    activeTab =  $(`.tab-content[data-skill-type="${skill === 'refine' ? 'weapon' : skill}"] > .active`);
    if (activeTab.data('tab-type') === 'default') {
      selectedSkills[skill] = customUnit.skills[skill];
    } else {
      selectedSkills[skill] = customUnit.customSkills[skill];
    }
  }
  drawSkills(selectedSkills);
}

module.exports = {
  setImages: setImages,
  drawHero: drawHero,
  drawCustomHero: drawCustomHero
};
