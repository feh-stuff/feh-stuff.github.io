let utils = require('./utils.js');
let heroes = require('../data/hero-access.js');
let blessings = require('../data/blessing-access.js');
let skills = require('../data/skill-access.js');

let bookmarks = [];
let bookmarkTable;
const deleteBtn = '<div class="btn btn-sm btn-danger bookmark-delete">&#10060;</div>';
const storageKey = 'unit-builder-bookmarks';

function init() {
  bookmarks = JSON.parse(localStorage.getItem(storageKey)) || [];
  bookmarkTable = $('#bookmark-table').DataTable({
    paging: false,
    searching: false,
    info: false,
    language: { emptyTable: "No Bookmarks" },
    ordering: false
  });
  bookmarks.forEach(bookmark =>
      bookmarkTable.row.add([bookmark.name, bookmark.saveDate, deleteBtn])
        .draw().node());

  bindEvents();
}

function bindEvents() {
  $('#bookmark-modal').on('click', '.bookmark-delete', onDeleteBookmark);
  $('#bookmark-modal').on('click', 'tbody > tr', onSelectBookmark);
}

function onDeleteBookmark(event) {
  event.stopPropagation();

  let row = bookmarkTable.row($(event.currentTarget).closest('tr'));
  bookmarks.splice(row.index(), 1);
  row.remove().draw();
  localStorage.setItem(storageKey, JSON.stringify(bookmarks));
  $('#bookmark-load').prop('disabled', true);
}

function onSelectBookmark(event) {
  let $row = $(event.currentTarget);
  if (!$row.hasClass('selected')) {
    $('#bookmark-table tr').removeClass('selected');
    $row.addClass('selected');
    $('#bookmark-load').prop('disabled', false);
  }
}

function save(hero) {
  if (hero.data.name === 'Feh') {
    return;
  }

  let now = utils.getDateString(new Date());
  let data = convert(hero);
  data.saveDate = now;
  bookmarks.push(data);
  localStorage.setItem(storageKey, JSON.stringify(bookmarks));
  bookmarkTable.row.add([data.name, now, deleteBtn]).draw().node();
}

function load() {
  return convertBack(bookmarks[$('#bookmark-table tbody > tr.selected').index()]);
}

function convert(hero) {
  return {
    name: hero.data.name,
    iv: {
      boon: hero.iv.boon,
      bane: hero.iv.bane
    },
    rarity: hero.rarity,
    merges: hero.merges,
    support: hero.support,
    skills: {
      weapon: hero.skills.weapon.name,
      refine: hero.skills.refine.name,
      assist: hero.skills.assist.name,
      special: hero.skills.special.name,
      skillA: hero.skills.skillA.name,
      skillB: hero.skills.skillB.name,
      skillC: hero.skills.skillC.name,
      seal: hero.skills.seal.name
    },
    buffs: {
      atk: hero.buffs.atk,
      spd: hero.buffs.spd,
      def: hero.buffs.def,
      res: hero.buffs.res
    },
    tempestBuff: hero.tempestBuff,
    blessing: hero.blessing,
    allies: hero.allies,
    saveDate: hero.saveDate,
    sp: hero.sp,
    hm: hero.hm
  };
}

function convertBack(hero) {
  let heroBlessing = blessings.getBlessing(hero.name);
  let refinery = skills.getRefinery(hero.skills.weapon, hero.name);
  let refine = skills.getEmptySkill();

  if (refinery) {
    for (let i = 0; i < refinery.length; i++) {
      if (refinery[i].name === hero.skills.refine) {
        refine = refinery[i];
      }
    }
  }

  return {
    data : heroes.getHero(hero.name),
    iv: hero.iv,
    merges: hero.merges,
    support: hero.support,
    rarity: hero.rarity,
    stats : { hp: 0, atk: 0, spd: 0, def: 0, res: 0 },
    skills: {
      weapon: skills.getSkill(hero.skills.weapon, 'weapons'),
      refine: refine,
      assist: skills.getSkill(hero.skills.assist, 'assists'),
      special: skills.getSkill(hero.skills.special, 'specials'),
      skillA: skills.getSkill(hero.skills.skillA, 'skillA'),
      skillB: skills.getSkill(hero.skills.skillB, 'skillB'),
      skillC: skills.getSkill(hero.skills.skillC, 'skillC'),
      seal: skills.getSkill(hero.skills.seal, 'seals'),
    },
    buffs: hero.buffs,
    tempestBuff: hero.tempestBuff,
    legendary: heroBlessing ? true : false,
    blessingIcon: heroBlessing ? blessings.icon : -1,
    blessing: heroBlessing ? blessing.type : hero.blessing,
    allies: hero.allies,
    saveDate: hero.saveDate,
    sp: hero.sp,
    hm: hero.hm
  };
}

module.exports = {
  init: init,
  save: save,
  load: load
};
