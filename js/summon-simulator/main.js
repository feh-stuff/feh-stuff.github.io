let heroes = require('../data/hero-access.js');
let banners = require('../data/banner-access.js');
let elements = require('./elements.js');
let values = require('./values.js');

let banner = {};
let summonPool = {};
let pullStats = {
  pulls: 0,
  orbs: 0,
  money: 0,
  r5: 0,
  rf: 0,
}
let pityPulls = 0;
let sessionPulls = 0;
let resetPityRate = false;
let customBanner = getCustomBannerData();
let $summonTable;

init();

// Initialization Functions
function init() {
  let defaultBanner = banners.getFirstBanner();

  $summonTable = $(elements.SUMMON_TABLE).DataTable({
    paging: false,
    searching: false,
    info: false,
    columnDefs: [ { width: "70px", targets: 0 }, { width: "50px", targets: [2,3,4] } ],
    language: { emptyTable: "No heroes summoned yet" }
  });

  $(elements.SELECT_BANNER).selectable({
    data: banners.getAllBanners(),
    optionGenerator: bannerOptionsGenerator,
    text: defaultBanner.name,
    value: defaultBanner,
    searchPlaceholder: 'Search Banner Name or Hero'
  });

  let customFocus  = getUrlParam('focus');
  if (customFocus.length) {
    banner = getCustomBannerData(customFocus.split(';'));
    $(elements.SELECT_BANNER).selectable('text', banner.name);

    let rates = getUrlParam('rates').split(';');
    if (rates.length === 5) {
      setCustomBannerRates(banner, rates);
    }
  } else {
    banner = banners.getFirstBanner();
    banner.startDate = new Date(banner.startDate);
  }

  initBanner();
  initCustomBannerList();
  bindEvents();
}
function setCustomBannerRates(banner, rates) {
  rates = rates.map(r => parseInt(r));

  banner.rates = {};
  banner.rates.rateRarityFocus = Math.max(0, Math.min(100, rates[0]));
  let total = 100 - banner.rates.rateRarityFocus;

  if (rates[1] >= 0 && rates[0] + rates[1] <= 100) {
    banner.rates.rateRarity5 = rates[1];
  } else {
    banner.rates.rateRarity5 = Math.min(3, total);
  }
  total -= banner.rates.rateRarity5;

  if (rates[2] >= 0 && rates[0] + rates[1] + rates[2] <= 100) {
    banner.rates.rateRarityFocus4 = rates[2];
  } else {
    banner.rates.rateRarityFocus4 = 0;
  }
  total -= banner.rates.rateRarityFocus4;

  if (rates[3] >= 0 && rates[0] + rates[1] + rates[2] + rates[3] <= 100) {
    banner.rates.rateRarity4 = rates[3];
  } else {
    banner.rates.rateRarity4 = banner.rates.rateRarityFocus4 ||
        Math.min(58, total);
  }

  banner.rates.rateRarity3 = total - banner.rates.rateRarity3;


  banner.rates.pityRateRarityFocus = banner.rates.rateRarity5 === 0 ? 0.5 : 0.25;
  banner.rates.pityRateRarity5 = banner.rates.rateRarity5 === 0 ? 0 : 0.25;
  let commonRates = 100 - banner.rates.rateRarityFocus - banner.rates.rateRarity5;
  if (commonRates === 0) {
    banner.rates.pityRateRarityFocus4 = 0;
    banner.rates.pityRateRarity4 = 0;
    banner.rates.pityRateRarity3 = 0;
  } else {
    banner.rates.pityRateRarityFocus4 = -banner.rates.rateRarityFocus4 / commonRates * 0.5;
    banner.rates.pityRateRarity4 = -banner.rates.rateRarity4 / commonRates * 0.5;
    banner.rates.pityRateRarity3 = -banner.rates.rateRarity3 / commonRates * 0.5;
  }
}
function initBanner() {
  initHeroList();
  resetSessionData();
  setSnipeOptions();
}
function initHeroList() {
  let $focusList = $(elements.FOCUS_LIST).empty();
  let focusHeroes = heroes.getHeroes(banner.focusHeroes);

  summonPool = heroes.getSummoningPool(banner.pool, banner);
  summonPool.rf = focusHeroes;
  focusHeroes.forEach(hero => {
    $(`<div class="focus-list-hero">
        <img class="focus-list-hero-frame" src="../img/assets/frame-rarity-focus.png">
        <img class="focus-list-hero-portrait" src="../${hero.assets.portrait}">
        <img class="focus-list-hero-background" src="../img/assets/background-rarity-focus.png">
        </div>`)
      .tooltip({
        html: true,
        placement: 'bottom',
        title: `<p class="mb-0">${hero.title}</p><h6>${hero.shortName || hero.name}</h6>`
      })
      .appendTo($focusList);
  });
}
function resetSessionData() {
  for (let stat in pullStats) {
    pullStats[stat] = 0;
  }
  pityPulls = 0;
  resetPityRate = true;

  $summonTable.clear().draw();
  updateStatsView();
  initSession();
}
function initSession() {
  sessionPulls = 0;
  if (resetPityRate) {
    // pityPulls = 0;
    resetPityRate = false;
    resetRates();
  } else if (pityPulls >= 5) {
    pityPulls -= 5;
    $(elements.RATE_INPUT_FOCUS).val((parseFloat($(elements.RATE_INPUT_FOCUS).val()) + banner.rates.pityRateRarityFocus).toFixed(2));
    $(elements.RATE_INPUT_5).val((parseFloat($(elements.RATE_INPUT_5).val()) + banner.rates.pityRateRarity5).toFixed(2));
    $(elements.RATE_INPUT_FOCUS_4).val((parseFloat($(elements.RATE_INPUT_FOCUS_4).val()) + banner.rates.pityRateRarityFocus4).toFixed(2));
    $(elements.RATE_INPUT_4).val((parseFloat($(elements.RATE_INPUT_4).val()) + banner.rates.pityRateRarity4).toFixed(2));
    $(elements.RATE_INPUT_3).val((parseFloat($(elements.RATE_INPUT_3).val()) + banner.rates.pityRateRarity3).toFixed(2));
  }

  $(elements.NEW_SESSION).attr('disabled', 'disabled');
  updateOrbs(getSessionOrbs());
}
function resetRates() {
  $(elements.RATE_INPUT_FOCUS).val(banner.rates.rateRarityFocus);
  $(elements.RATE_INPUT_5).val(banner.rates.rateRarity5);
  $(elements.RATE_INPUT_FOCUS_4).val(banner.rates.rateRarityFocus4);
  $(elements.RATE_INPUT_4).val(banner.rates.rateRarity4);
  $(elements.RATE_INPUT_3).val(banner.rates.rateRarity3);
}


// Events
function bindEvents() {
  $(elements.SELECT_BANNER).on('select', onSelectBanner);
  $(elements.NEW_SESSION).on('click', initSession);

  $(elements.SUMMON_OPTION).on('click', elements.SUMMON_ORB, onSummonOne);
  $(elements.SUMMON_ALL).on('click', onSummonAll);

  $(elements.RESET).on('click', resetSessionData);
  $(elements.SNIPE).on('click', snipe);

  $(elements.CUSTOM_LIST).on('change', 'input', toggleCustomBannerHero);
  $(elements.CREATE_BANNER).on('click', createBanner);
  $(elements.CUSTOM_SEARCH).on('keyup', searchCustomFocus);
  $(elements.CUSTOM_RATE_INPUT).on('change', customRateChange);

  $(elements.TABLE_FILTER_ITEM).on('click', onSelectFilter);
}
function onSelectBanner(event) {
  banner = $(event.currentTarget).data('val');
  banner.startDate = new Date(banner.startDate);
  initBanner();
}
function onSummonOne(event) {
  revealOrb($(event.currentTarget));
}
function onSummonAll(event) {
  let orbs = $(elements.SUMMON_ORB);
  for (let i = 0; i < orbs.length; i++) {
    revealOrb($(orbs[i]));
  }
}
function onSelectFilter(event) {
    event.stopPropagation();
    event.preventDefault();
    let $checkbox = $(event.currentTarget).find('input[type="checkbox"]');
    $checkbox.prop('checked', !$checkbox.is(':checked'));

    let rarity = $(event.currentTarget).data('val');
    $(elements.SUMMON_TABLE).toggleClass('hide-' + rarity);
}


// Main Functions
function getSessionOrbs() {
  let orbs = [];
  let rateRF = parseFloat($(elements.RATE_INPUT_FOCUS).val()) / 100;
  let rateR5 = parseFloat($(elements.RATE_INPUT_5).val()) / 100 + rateRF;
  let rateRF4;
  let rateR4;

  if (banner.rates.rateRarityFocus4) {
    rateRF4 = parseFloat($(elements.RATE_INPUT_FOCUS_4).val()) / 100 + rateR5;
    rateR4 = parseFloat($(elements.RATE_INPUT_4).val()) / 100 + rateRF4;
  } else {
    rateRF4 = 0;
    rateR4 = parseFloat($(elements.RATE_INPUT_4).val()) / 100 + rateR5;
  }

  for (let i = 0; i < 5; i++) {
    let rate = Math.random();
    let orbData;
    if (rate <= rateRF) {
      orbData = { hero: getArrayRand(summonPool.rf), rarity: 'focus' };
    } else if (rate <= rateR5) {
      orbData = { hero: getArrayRand(summonPool.r5), rarity: 5 };
    } else if (rate <= rateRF4) {
      orbData = { hero: getArrayRand(summonPool.rf), rarity: 'focus-4' };
    } else if (rate <= rateR4) {
      orbData = { hero: getArrayRand(summonPool.r4), rarity: 4 };
    } else {
      orbData = { hero: getArrayRand(summonPool.r3), rarity: 3 };
    }
    orbData.iv = getArrayRand(values.IV);
    orbData.color = orbData.hero.colorType.toLowerCase();
    orbs.push(orbData);
  }
  return orbs;
}
function updateOrbs(orbs) {
  orbs.forEach((orbData, i) => {
    let $orb = $(`<img class="summon-orb" src="../${values.IMAGES[orbData.color]}" data-color="${orbData.color}">`)
        .data('hero', orbData);
    $($(elements.SUMMON_OPTION)[i]).empty().append($orb);
  });
}
function revealOrb($orb) {
  let orbData = $orb.data('hero');

  $(document).trigger('summon', [orbData.hero.name, orbData.hero.rarity]);
  $orb.replaceWith(`<div class="summon-hero">
    <img class="summon-hero-frame" src="../img/assets/frame-rarity-${orbData.rarity === 'focus-4' ? 4 : orbData.rarity}.png">
    <img class="summon-hero-portrait" src="../${orbData.hero.assets.portrait}">
    <img class="summon-hero-background" src="../img/assets/background-rarity-${orbData.rarity === 'focus-4' ? 'focus' : orbData.rarity}.png">
    <img class="summon-hero-rarity" src="../img/assets/star-rarity-${orbData.rarity === 'focus-4' ? 4 : orbData.rarity}.png">
  </div>`);

  pullStats.pulls++;
  pullStats.orbs += values.ORB_PULL_COST[sessionPulls++];
  if (orbData.rarity === 'focus' || orbData.rarity === 5) {
    pullStats.r5++;
    pullStats.rf += orbData.rarity === 'focus' ? 1 : 0;
    resetPityRate = true;
    pityPulls = 0;
  } else {
    pityPulls++;
  }

  let tableRow = $summonTable.row
      .add([
          pullStats.pulls,
          orbData.hero.name,
          orbData.rarity === 'focus' ? 'Focus' :
              orbData.rarity === 'focus-4' ? 'Focus (4)' : orbData.rarity,
          orbData.iv.boon,
          orbData.iv.bane
        ])
      .draw().node();
  $(tableRow).addClass('r-' + orbData.rarity);

  $(elements.NEW_SESSION).removeAttr('disabled');
  updateStatsView();
  return orbData;
}
function updateStatsView() {
  let percentAmount = pullStats.pulls === 0 ? '-' : (100 * pullStats.r5 / pullStats.pulls).toFixed(1) + '%';
  let totalMoneySpent = (pullStats.orbs * values.ORB_MONEY_COST).toFixed(2);
  let orbsPerHero = pullStats.r5 === 0 ? '-' : (pullStats.orbs / pullStats.r5).toFixed(1);
  let moneyPerHero = pullStats.r5 === 0 ? '-' : '$' + (totalMoneySpent / pullStats.r5).toFixed(2);
  $('#total-summon-amt').text(pullStats.pulls);
  $('#rarity5-summon-amt').text(pullStats.r5);
  $('#focus-summon-amt').text(pullStats.rf);
  $('#percent-summon-amt').text(percentAmount);
  $('#total-orbs-amt').text(pullStats.orbs);
  $('#total-money-amt').text('$' + totalMoneySpent);
  $('#avg-orbs-amt').text(orbsPerHero);
  $('#avg-money-amt').text(moneyPerHero);
}


// Snipe Functions
function setSnipeOptions() {
  $(elements.SNIPE_LIST).empty();
  summonPool.rf.forEach(hero => {
    let $checkbox = $(`<input type="checkbox" class="custom-control-input snipe-target">`)
        .data('hero', hero);
    $('<label class="custom-control custom-checkbox snipe-option"></label>')
        .append($checkbox)
        .append(`<span class="custom-control-indicator"></span>
            <span class="custom-control-description">${hero.name}</span>`)
        .appendTo(elements.SNIPE_LIST);
  });
}
function snipe() {
  let targetCheckbox = $('.snipe-target:checked');
  let targets = [];
  let snipeCount = 0;
  let totalCount = 0;
  let orbs;
  let orbData;

  $(document).trigger('snipe-start');
  for (let i = 0; i < targetCheckbox.length; i++) {
    targets.push($(targetCheckbox[i]).data('hero'));
  }

  while (continueSnipe(targets, snipeCount)) {
    totalCount++;
    orbs = getTargetSnipeOrbs(targets);
    if (orbs.length) {
      orbData = revealOrb($(orbs[0]));
      if (snipeHit(orbData, targets)) {
        $(elements.SUMMON_TABLE + ' tbody tr:last-child').addClass('table-success');
        snipeCount++;
      }
    } else if (sessionPulls > 0) {
      initSession();
    } else {
      revealOrb($(getArrayRand($(elements.SUMMON_ORB))));
    }
  }
  $(document).trigger('snipe-end', [totalCount]);
}
function continueSnipe(targets, snipeCount) {
  let snipeAll = $('#snipe-all').is(':checked');
  if (snipeAll) {
    return targets.length > 0;
  } else {
    return targets.length > 0 && snipeCount === 0;
  }
}
function getTargetSnipeOrbs(targetHeroes) {
  let colors = new Set();
  targetHeroes.forEach(hero => colors.add(hero.colorType.toLowerCase()));

  let selector = [...colors]
      .map(color => `${elements.SUMMON_ORB}[data-color="${color}"]`)
      .join(',');

  return $(selector);
}
function snipeHit(orbData, targetHeroes) {
    for (let i = 0; i < targetHeroes.length; i++) {
      if (targetHeroes[i].name === orbData.hero.name && orbData.rarity === 'focus') {
        targetHeroes.splice(i, 1);
        return true;
      }
    }
    return false;
  }


// Custom Banners
function getCustomBannerData(focusHeroes = []) {
  return {
    name: "Custom Banner",
    startDate: new Date(),
    focusHeroes: focusHeroes,
    excludeFromRarity4: [],
    excludeFromRarity5: [],
    pool: "pool2",
    rateType: "defaultV2",
    rates: {
      rateRarity3: 36,
      rateRarity4: 58,
      rateRarityFocus4: 0,
      rateRarity5: 3,
      rateRarityFocus: 3,
      pityRateRarity3: -36 / 94 * 0.5,
      pityRateRarity4: -58 / 94 * 0.5,
      pityRateRarityFocus4: 0,
      pityRateRarity5: 0.25,
      pityRateRarityFocus: 0.25
    }
  };
}
function initCustomBannerList() {
  heroes.getAllHeroes().forEach(hero => {
    $(`<label class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input">
        <span class="custom-control-indicator"></span>
        <span class="custom-control-description">${hero.name}</span>
        </label>`)
        .data('val', hero)
        .appendTo(elements.CUSTOM_LIST);
  });
}
function toggleCustomBannerHero(event) {
  let checked = $(event.currentTarget).is(':checked');
  let hero = $(event.currentTarget).closest('.custom-control').data('val');
  if (checked) {
    customBanner.focusHeroes.push(hero.name);
    $(elements.CUSTOM_FOCUS).append(`<div class="focus-list-hero" data-name="${hero.name}">
        <img class="focus-list-hero-frame" src="../img/assets/frame-rarity-focus.png">
        <img class="focus-list-hero-portrait" src="../${hero.assets.portrait}">
        <img class="focus-list-hero-background" src="../img/assets/background-rarity-focus.png">
        </div>`);
  } else {
    customBanner.focusHeroes.splice(customBanner.focusHeroes.indexOf(hero.name), 1);
    $(`.focus-list-hero[data-name="${hero.name}"]`).remove();
  }
}
function searchCustomFocus() {
  let searchKey = $(elements.CUSTOM_SEARCH).val().trim().toLowerCase();
  let heroList = $(elements.CUSTOM_LIST_DESC);
  for (let i = 0; i < heroList.length; i++) {
    $(heroList[i]).toggleClass('d-none', $(heroList[i]).text().toLowerCase().indexOf(searchKey) === -1);
  }
}
function customRateChange() {
  customBanner.rates.rateRarityFocus = parseInt($(elements.CUSTOM_INPUT_FOCUS).val());
  customBanner.rates.rateRarity5 = parseInt($(elements.CUSTOM_INPUT_5).val());
  customBanner.rates.rateRarityFocus4 = parseInt($(elements.CUSTOM_INPUT_FOCUS_4).val());
  customBanner.rates.rateRarity4 = parseInt($(elements.CUSTOM_INPUT_4).val());
  customBanner.rates.rateRarity3 = parseInt($(elements.CUSTOM_INPUT_3).val());
  if (customBanner.rates.rateRarity5 === 0) {
    customBanner.rates.pityRateRarity5 = 0
    customBanner.rates.pityRateRarityFocus = 0.5;
  }
}
function createBanner(event) {
  let rates = [$(elements.CUSTOM_INPUT_FOCUS).val(),
      $(elements.CUSTOM_INPUT_5).val(),
      $(elements.CUSTOM_INPUT_FOCUS_4).val(),
      $(elements.CUSTOM_INPUT_4).val(),
      $(elements.CUSTOM_INPUT_3).val()];

  $(elements.CUSTOM_MODAL).modal('hide');
  window.history.pushState(null, null,
      '?focus=' + encodeURIComponent(customBanner.focusHeroes.join(';')) +
      '&rates=' + encodeURIComponent(rates.join(';')));
  banner = customBanner;

  setCustomBannerRates(banner, rates);
  initBanner();

  $(elements.SELECT_BANNER).selectable('text', 'Custom Banner');
}


// Utils
function getArrayRand(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
function getDateString(date) {
  let months = [ 'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'];

  return `${months[date.getMonth()]} ${date.getFullYear()}`;
}
function getUrlParam(name) {
  let results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
  if (results == null){
     return '';
  } else {
     return decodeURIComponent(results[1]) || 0;
  }
}
function bannerOptionsGenerator(item, $parent) {
  $parent.append(`<div class="dropdown-header">${item.date}</div>`);
  for (let i = 0; i < item.banners.length; i++) {
    $(`<div class="dropdown-item">${item.banners[i].name}</div>`)
        .data('val', item.banners[i])
        .data('tokens', item.banners[i].focusHeroes.join(' ').toLowerCase())
        .appendTo($parent);
  }
}
