$(document).ready(() => {
  const ELEMENTS = {
    CANVAS: '#hero-canvas',
    HERO_SELECT: '#hero-select',
    HERO_MERGES: '#hero-merges',
    WEAPON_SELECT: '#weapon-select',
    ASSIST_SELECT: '#assist-select'
  };
  const IMAGES = {
    SKILLS: ''
  }
  const FEH_FONT = new FontFace('FehFont', 'url(font/feh-font.ttf)');

  let canvas = $(ELEMENTS.CANVAS);
  let ctx = canvas[0].getContext('2d');
  let skillImg;
  let selectedHero = {
    img: 'img/heroes-main/Amelia.png',
    merges: 0,
    name: 'Feh',
    title: 'Sleepy Owl',
    hp: 0,
    atk: 0,
    spd: 0,
    def: 0,
    res: 0
  };

  ctx.miterLimit = 1;
  ctx.lineJoin = 'round';
  init();

  function init() {
    loadImages(['img/assets/skills.png']).then(imgs => {
      skillImg = imgs[0];
      $(ELEMENTS.HERO_SELECT).selectable({
        selectOptions: HEROES
      });
      $(ELEMENTS.WEAPON_SELECT).selectable();
      $(ELEMENTS.ASSIST_SELECT).selectable();
    });
    bindEvents();
  }

  function bindEvents() {
    $(ELEMENTS.HERO_SELECT).on('change', onHeroChange);
    $(ELEMENTS.HERO_MERGES).on('change', onMergesChange);
  }

  function onHeroChange(event) {
    let hero = $(this).data('val');
    let data = {
      img: 'img/heroes-main/Amelia.png', //hero.assets.main,
      merges: 10,
      name: hero.shortName || hero.name,
      title: hero.title,
      hp: hero.stats.level40.hp[1],
      atk: hero.stats.level40.atk[1],
      spd: hero.stats.level40.spd[1],
      def: hero.stats.level40.def[1],
      res: hero.stats.level40.res[1]
    }
    drawHero(data);
    $(ELEMENTS.WEAPON_SELECT).selectable('selectOptions', getWeapons(hero));
    $(ELEMENTS.ASSIST_SELECT).selectable('selectOptions', getSkills(hero, SKILL_ASSIST));
  }

  function onMergesChange(event) {
    let merges = parseInt($(this).val());
    if (!(merges >= 0 && merges <= 10)) {
      merges = 0;
    }
    selectedHero.merges = merges;
    drawHero(selectedHero);
  }

  function getMergedStats(hero) {

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

  FEH_FONT.load().then(font => {
    document.fonts.add(font);
    drawHero(selectedHero);
  });

  function drawHero(hero) {
    loadImages(['img/assets/unit-edit-front.png', 'img/assets/unit-edit-back.jpg', hero.img])
        .then(imgs => {
          ctx.drawImage(imgs[1], 0, 0);
          ctx.drawImage(imgs[2], 0, 0);
          ctx.drawImage(imgs[0], 0, 0);
          drawStats(hero);
          drawName(hero);
          drawSkill('Test', 'Type', 2, 5);
        });
  }

  function drawName(hero) {
    ctx.strokeStyle = '#220d00';
    ctx.fillStyle = '#ffffff';
    ctx.textAlign = 'center';
    ctx.lineWidth = 4;
    ctx.font = "26px FehFont";
    ctx.strokeText(hero.name, 168, 506);
    ctx.fillText(hero.name, 168, 506);
    ctx.lineWidth = 4;
    ctx.font = "24px FehFont";
    ctx.strokeText(hero.title, 142, 445);
    ctx.fillText(hero.title, 142, 445);
  }

  function drawStats(stats) {
    ctx.font = "18px FehFont";
    ctx.strokeStyle = '#000000';

    ctx.fillStyle = '#ffffff';
    ctx.textAlign="start";
    ctx.lineWidth = 4;
    ctx.strokeText('40', 135, 574);
    ctx.strokeText('+', 161, 572);
    ctx.strokeText(stats.merges, 174, 574);
    ctx.lineWidth = 2;
    ctx.fillText('40', 135, 574);
    ctx.fillText('+', 161, 572);
    ctx.fillText(stats.merges, 174, 574);

    ctx.textAlign="end";
    ctx.fillStyle = '#fdf98e';
    ctx.lineWidth = 4;
    ctx.strokeText(stats.hp, 200, 620);
    ctx.strokeText(stats.atk, 200, 656);
    ctx.strokeText(stats.spd, 200, 694);
    ctx.strokeText(stats.def, 200, 731);
    ctx.strokeText(stats.res, 200, 768);
    ctx.lineWidth = 2;
    ctx.fillText(stats.hp, 200, 620);
    ctx.fillText(stats.atk, 200, 656);
    ctx.fillText(stats.spd, 200, 694);
    ctx.fillText(stats.def, 200, 731);
    ctx.fillText(stats.res, 200, 768);
  }

  function drawSkill(name, type, row, col) {
    ctx.drawImage(skillImg, col * 75, row * 75, 75, 75, 255, 594, 36, 36);
  }

  function loadImages(urls) {
    return Promise.all(urls.map(url =>
      new Promise((resolve, reject) => {
        if (url.length === 0) {
          resolve('');
        } else {
          let img = new Image();
          img.src = url;
          img.onload = () => resolve(img);
        }
      })
    ));
  }
});
