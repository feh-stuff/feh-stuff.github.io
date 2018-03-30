'use strict';

let elements = require('./elements.js');
let utils = require('./utils.js');
let values = require('./values.js');
let canvas = require('./canvas.js');
let defaultBuilder = require('./builder-default.js');
let customBuilder = require('./builder-custom.js');

let activeTab = 'main';


function init() {
  defaultBuilder.init(canvas);
  customBuilder.init(canvas);
  bindEvents();

  utils.loadFiles([values.CONST.IMAGE_SKILLS, values.CONST.IMAGE_FRONT,
      values.CONST.IMAGE_BACK, values.CONST.IMAGE_UI], true).then(files => {

    document.fonts.add(new FontFace('FehFont', 'url(../font/feh-font.ttf)'));
    $(elements.SPINNER).addClass('d-none');
    canvas.setImages({
      SKILLS: files[0],
      FRONT: files[1],
      BACK: files[2],
      UI: files[3]
    });
    defaultBuilder.drawHero(defaultBuilder.hero);
    $(elements.DOWNLOAD).removeClass('d-none');
  });
}

function bindEvents() {
  $(elements.SELECT_TAB).on('click', onTabChange);
  $(elements.DOWNLOAD).on('click', onDownload);
}

function onTabChange(event) {
  if ($(event.currentTarget).data('val') === 'custom-unit') {
    customBuilder.drawHero();
    activeTab = 'custom';
  } else {
    defaultBuilder.drawHero(defaultBuilder.hero);
    activeTab = 'main';
  }
}

function onDownload(event) {
  let heroName = activeTab === 'main' ? defaultBuilder.hero.data.name : customBuilder.hero.name;
  $(event.currentTarget)
      .attr('href', $(elements.CANVAS)[0].toDataURL())
      .attr('download', 'FEH Unit Builder - ' + heroName + '.png');
}


init();
