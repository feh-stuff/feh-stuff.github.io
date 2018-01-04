$(document).ready(() => {
  const ELEMENTS = {
    BANNER_SELECT: '#select-banner',
    BANNER_OPTION: '.dropdown-item',
    SESSION_BUTTON: '#new-session',
    SUMMON_OPTION: '.summon-option',
    SUMMON_ORB: '.summon-orb',
    SUMMON_LIST: '#summon-list',
    SUMMON_ALL: '#summon-all',
    RESET_BUTTON: '#reset',
    SNIPE_BUTTON: '#snipe-btn',
    SNIPE_LIST: '#snipe-list',
    RATE_INPUT_FOCUS: '#rate-input-focus',
    RATE_INPUT_5: '#rate-input-5',
    RATE_INPUT_4: '#rate-input-4',
    RATE_INPUT_3: '#rate-input-3',
    FOCUS_LIST: '#focus-list'
  };
  const IMAGES = {
    blue: 'img/assets/orbs-blue.png',
    red: 'img/assets/orbs-red.png',
    green: 'img/assets/orbs-green.png',
    neutral: 'img/assets/orbs-gray.png'
  };
  const IV = [
    {boon: 'hp', bane: 'atk'},{boon: 'hp', bane: 'spd'},{boon: 'hp', bane: 'def'},{boon: 'hp', bane: 'res'},
    {boon: 'atk', bane: 'hp'},{boon: 'atk', bane: 'spd'},{boon: 'atk', bane: 'def'},{boon: 'atk', bane: 'res'},
    {boon: 'spd', bane: 'hp'},{boon: 'spd', bane: 'atk'},{boon: 'spd', bane: 'def'},{boon: 'spd', bane: 'res'},
    {boon: 'def', bane: 'hp'},{boon: 'def', bane: 'atk'},{boon: 'def', bane: 'spd'},{boon: 'def', bane: 'res'},
    {boon: 'res', bane: 'hp'},{boon: 'res', bane: 'atk'},{boon: 'res', bane: 'spd'},{boon: 'res', bane: 'def'},
    {boon: '-', bane: '-'}
  ];
  const ORB_COST = [5, 4, 4, 4, 3];
  const MONEY_PER_ORB = 0.533;

  let bannerData;
  let heroListRarity3 = [];
  let heroListRarity4 = [];
  let heroListRarity5 = [];
  let heroListRarityFocus = [];
  let stats = {
    totalPulls: 0,
    orbsUsed: 0,
    amountSpent: 0,
    totalRarity5: 0,
    totalFocus: 0
  };
  let pityPulls = 0;          // number of pulls without 5* heroes
  let sessionPulls = 0;       // number of pulls in current summoning session
  let resetPityRate = false;  // whether to reset pity rate for new session

  let $bannerSelect = $(ELEMENTS.BANNER_SELECT);
  let $summonList = $(ELEMENTS.SUMMON_LIST).DataTable({
    paging: false,
    searching: false,
    info: false,
    columnDefs: [ { width: "70px", targets: 0 }, { width: "50px", targets: [2,3,4] } ],
    language: { emptyTable: "No heroes summoned yet" }
  });

  init();

  function init() {
    $bannerSelect
        .selectable({
          selectOptions: BANNERS,
          optionGenerator: bannerOptionsGenerator,
          defaultText: BANNERS[0].banners[0].name,
          defaultValue: BANNERS[0].banners[0]
        })
        .on('test', onChangeNewBanner);

    bannerData = BANNERS[0].banners[0];
    bannerData.startDate = new Date(bannerData.startDate);
    newBanner();
    bindEvents();
  }

  function bindEvents() {
    $(ELEMENTS.BANNER_SELECT).on('select', onChangeNewBanner);
    $(ELEMENTS.SESSION_BUTTON).on('click', newSession);
    $(ELEMENTS.SUMMON_ALL).on('click', onClickSummonAll);
    $(ELEMENTS.SUMMON_OPTION).on('click', ELEMENTS.SUMMON_ORB, onClickOrb);
    $(ELEMENTS.RESET_BUTTON).on('click', resetData);
    $(ELEMENTS.SNIPE_BUTTON).on('click', snipe);
  }

  function onChangeNewBanner(event) {
    bannerData = $(event.currentTarget).data('val');
    bannerData.startDate = new Date(bannerData.startDate);
    newBanner();
  }

  function onClickSummonAll(event) {
    let orbs = $(ELEMENTS.SUMMON_ORB);
    for (let i = 0; i < orbs.length; i++) {
      revealOrb($(orbs[i]));
    }
  }

  function onClickOrb(event) {
    revealOrb($(event.currentTarget));
  }

  function newBanner() {
    setSummonableHeroesList();
    resetData();
    setSnipeOptions();
  }

  function newSession() {
    sessionPulls = 0;
    if (resetPityRate) {
      pityPulls = 0;
      resetPityRate = false;
      resetRates();
    } else if (pityPulls >= 5) {
      pityPulls -= 5;
      let rateDecrease = (bannerData.pityRateRarityFocus + bannerData.pityRateRarity5) / 2;
      $(ELEMENTS.RATE_INPUT_FOCUS).val(parseFloat($(ELEMENTS.RATE_INPUT_FOCUS).val()) + bannerData.pityRateRarityFocus);
      $(ELEMENTS.RATE_INPUT_5).val(parseFloat($(ELEMENTS.RATE_INPUT_5).val()) + bannerData.pityRateRarity5);
      $(ELEMENTS.RATE_INPUT_4).val(parseFloat($(ELEMENTS.RATE_INPUT_4).val()) - rateDecrease);
      $(ELEMENTS.RATE_INPUT_3).val(parseFloat($(ELEMENTS.RATE_INPUT_3).val()) - rateDecrease);
    }

    $(ELEMENTS.SESSION_BUTTON).attr('disabled', 'disabled');
    updateOrbs(getSessionOrbs());
  }

  function resetRates() {
    $(ELEMENTS.RATE_INPUT_FOCUS).val(bannerData.rateRarityFocus);
    $(ELEMENTS.RATE_INPUT_5).val(bannerData.rateRarity5);
    $(ELEMENTS.RATE_INPUT_4).val(bannerData.rateRarity4);
    $(ELEMENTS.RATE_INPUT_3).val(bannerData.rateRarity3);
  }

  function resetData() {
    for (stat in stats) {
      stats[stat] = 0;
    }
    pityPulls = 0;
    resetPityRate = true;
    $summonList.clear().draw();
    updateStatsView();
    newSession();
  }

  function setSummonableHeroesList() {
    let $focusList = $(ELEMENTS.FOCUS_LIST).empty();
    heroListRarity3 = [];
    heroListRarity4 = [];
    heroListRarity5 = [];
    heroListRarityFocus = [];
    HEROES.forEach(hero => {
      if (bannerData.focusHeroes.includes(hero.name)) {
        heroListRarityFocus.push(hero);
        $focusList.append(`<div class="focus-list-hero">
        <img class="summon-hero-frame" src="img/assets/frame-rarity-focus.png">
        <img class="summon-hero-portrait" src="${hero.assets.portrait}">
        <img class="summon-hero-background" src="img/assets/background-rarity-focus.png">
        </div>`);
      }
      if (new Date(hero.releaseDate) > bannerData.startDate || hero.ghb || hero.ttReward) {
        return;
      }
      if (hero.rarity3) {
        heroListRarity3.push(hero);
      }
      if (hero.rarity4 && !bannerData.excludeFromRarity4.includes(hero.name)) {
        heroListRarity4.push(hero);
      }
      if (hero.rarity5 && !hero.limited && !bannerData.excludeFromRarity5.includes(hero.name)) {
        heroListRarity5.push(hero);
      }
    });
  }

  function setSnipeOptions() {
    $(ELEMENTS.SNIPE_LIST).empty();
    heroListRarityFocus.forEach(hero => {
      let $checkbox = $(`<input type="checkbox" class="custom-control-input snipe-target">`)
          .data('hero', hero);
      $('<label class="custom-control custom-checkbox snipe-option"></label>')
          .append($checkbox)
          .append(`<span class="custom-control-indicator"></span>
              <span class="custom-control-description">${hero.name}</span>`)
          .appendTo(ELEMENTS.SNIPE_LIST);
    });
  }

  function snipe() {
    let targetCheckbox = $('.snipe-target:checked');
    let targets = [];
    let snipeCount = 0;
    let orbs;

    for (let i = 0; i < targetCheckbox.length; i++) {
      targets.push($(targetCheckbox[i]).data('hero'));
    }
    while (isContinueSnipe(targets, snipeCount)) {
      orbs = getTargetSnipeOrbs(targets);
      if (orbs.length) {
        if (snipeHit(revealOrb($(orbs[0])).hero, targets)) {
          $(ELEMENTS.SUMMON_LIST + ' tbody tr:last-child').addClass('table-success');
          snipeCount++;
        }
      } else if (sessionPulls > 0) {
        newSession();
      } else {
        revealOrb($(getRandomFromArray($(ELEMENTS.SUMMON_ORB))));
      }
    }
  }

  function snipeHit(hero, targetHeroes) {
      // TODO: Snipe rarity check
      for (let i = 0; i < targetHeroes.length; i++) {
        if (targetHeroes[i].name === hero.name) {
          targetHeroes.splice(i, 1);
          return true;
        }
      }
      return false;
    }

  function isContinueSnipe(targets, snipeCount) {
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
        .map(color => `${ELEMENTS.SUMMON_ORB}[data-color="${color}"]`)
        .join(',');

    return $(selector);
  }

  function revealOrb($orb) {
    let orbData = $orb.data('hero');
    $orb.replaceWith(`<div class="summon-hero">
      <img class="summon-hero-frame" src="img/assets/frame-rarity-${orbData.rarity}.png">
      <img class="summon-hero-portrait" src="${orbData.hero.assets.portrait}">
      <img class="summon-hero-background" src="img/assets/background-rarity-${orbData.rarity}.png">
      <img class="summon-hero-rarity" src="img/assets/star-rarity-${orbData.rarity}.png">
    </div>`);

    stats.totalPulls++;
    stats.orbsUsed += ORB_COST[sessionPulls++];
    pityPulls++;
    if (orbData.rarity === 'focus' || orbData.rarity === 5) {
      stats.totalRarity5++;
      stats.totalFocus += orbData.rarity === 'focus' ? 1 : 0;
      resetPityRate = true;
      $summonList.row
          .add([
              stats.totalPulls,
              orbData.hero.name,
              orbData.rarity === 'focus' ? '◯' : '╳',
              orbData.iv.boon,
              orbData.iv.bane
            ])
          .draw();
    }

    $(ELEMENTS.SESSION_BUTTON).removeAttr('disabled');
    updateStatsView();

    return orbData;
  }

  function updateStatsView() {
    let percentAmount = stats.totalPulls === 0 ? '-' : (100 * stats.totalRarity5 / stats.totalPulls).toFixed(1) + '%';
    let totalMoneySpent = (stats.orbsUsed * MONEY_PER_ORB).toFixed(2);
    let orbsPerHero = stats.totalRarity5 === 0 ? '-' : (stats.orbsUsed / stats.totalRarity5).toFixed(1);
    let moneyPerHero = stats.totalRarity5 === 0 ? '-' : '$' + (totalMoneySpent / stats.totalRarity5).toFixed(2);
    $('#total-summon-amt').text(stats.totalPulls);
    $('#rarity5-summon-amt').text(stats.totalRarity5);
    $('#focus-summon-amt').text(stats.totalFocus);
    $('#percent-summon-amt').text(percentAmount);
    $('#total-orbs-amt').text(stats.orbsUsed);
    $('#total-money-amt').text('$' + totalMoneySpent);
    $('#avg-orbs-amt').text(orbsPerHero);
    $('#avg-money-amt').text(moneyPerHero);
  }

  function getSessionOrbs() {
    let orbs = [];
    let rateRarityFocus = parseFloat($(ELEMENTS.RATE_INPUT_FOCUS).val()) / 100;
    let rateRarity5 = parseFloat($(ELEMENTS.RATE_INPUT_5).val()) / 100 + rateRarityFocus;
    let rateRarity4 = parseFloat($(ELEMENTS.RATE_INPUT_4).val()) / 100 + rateRarity5;

    for (let i = 0; i < 5; i++) {
      let rate = Math.random();
      let orbData;
      if (rate <= rateRarityFocus) {
        orbData = {
          hero: getRandomFromArray(heroListRarityFocus),
          rarity: 'focus'
        };
      } else if (rate <= rateRarity5) {
        orbData = {
          hero: getRandomFromArray(heroListRarity5),
          rarity: 5
        };
      } else if (rate <= rateRarity4) {
        orbData = {
          hero: getRandomFromArray(heroListRarity4),
          rarity: 4
        };
      } else {
        orbData = {
          hero: getRandomFromArray(heroListRarity3),
          rarity: 3
        };
      }
      orbData.iv = getRandomFromArray(IV);
      orbData.color = orbData.hero.colorType.toLowerCase();
      orbs.push(orbData);
    }
    return orbs;
  }

  function updateOrbs(orbs) {
    orbs.forEach((orbData, i) => {
      let $orb = $(`<img class="summon-orb" src="${IMAGES[orbData.color]}" data-color="${orbData.color}">`)
          .data('hero', orbData);
      $($(ELEMENTS.SUMMON_OPTION)[i]).empty().append($orb);
    });
  }

  function bannerOptionsGenerator(item, $parent) {
    $parent.append(`<div class="dropdown-header">${item.date}</div>`);
    for (let i = 0; i < item.banners.length; i++) {
      $(`<div class="dropdown-item">${item.banners[i].name}</div>`)
          .data('val', item.banners[i])
          .appendTo($parent);
    }
  }

  function getRandomFromArray(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function getDateString(date) {
    let months = [ 'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'];

    return `${months[date.getMonth()]} ${date.getFullYear()}`;
  }

});
