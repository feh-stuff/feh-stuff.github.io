$(document).ready(function() {
  const ORB_IMG_URL = {
    blue: 'img/assets/orbs-blue.png',
    red: 'img/assets/orbs-red.png',
    green: 'img/assets/orbs-green.png',
    gray: 'img/assets/orbs-gray.png'
  }
  const IV = [
    {boon: 'hp', bane: 'atk'},{boon: 'hp', bane: 'spd'},{boon: 'hp', bane: 'def'},{boon: 'hp', bane: 'res'},
    {boon: 'atk', bane: 'hp'},{boon: 'atk', bane: 'spd'},{boon: 'atk', bane: 'def'},{boon: 'atk', bane: 'res'},
    {boon: 'spd', bane: 'hp'},{boon: 'spd', bane: 'atk'},{boon: 'spd', bane: 'def'},{boon: 'spd', bane: 'res'},
    {boon: 'def', bane: 'hp'},{boon: 'def', bane: 'atk'},{boon: 'def', bane: 'spd'},{boon: 'def', bane: 'res'},
    {boon: 'res', bane: 'atk'},{boon: 'res', bane: 'spd'},{boon: 'res', bane: 'def'},{boon: 'res', bane: 'hp'},
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
    amountSpend: 0,
    totalRarity5: 0,
    totalFocus: 0
  };
  let pityPulls = 0;                    // number of pulls without 5* heroes
  let sessionPulls = 0;                 // number of pulls in current summoning session
  let resetPityRate = false;            // whether to reset pity rate for new session

  let $selectBanner = $('#select-banner');
  let $newSessionBtn = $('#new-session');
  let summonOptions = $('.summon-option');
  let $summonList = $('#summon-list').DataTable({
    "paging": false,
    "searching": false,
    "info": false,
    "columnDefs": [
      { "width": "70px", "targets": 0 },
      { "width": "50px", "targets": [2,3,4] }
    ],
    "language": {
      "emptyTable": "No heroes summoned yet"
    }
  });

  init();

  function init() {
    heroesData.banners.forEach(banner => {
      $(`<option>${banner.name}</option>`)
          .data('banner', banner)
          .appendTo($selectBanner);
    });
    bannerData = heroesData.banners[0];
    bannerData.startDate = new Date(bannerData.startDate);
    newBanner();
    bindEvents();
  }

  function bindEvents() {
    $selectBanner.on('change', onChangeNewBanner);
    $newSessionBtn.on('click', newSession);
    $('#summon-all').on('click', onClickSummonAll);
    $('.summon-option').on('click', '.summon-orb', onClickOrb);
    $('#reset').on('click', resetData);
    $('#snipe-btn').on('click', snipe);
  }

  function onChangeNewBanner(event) {
    bannerData = $(event.currentTarget).find('option:selected').data('banner');
    bannerData.startDate = new Date(bannerData.startDate);
    newBanner();
  }

  function onClickSummonAll(event) {
    let orbs = $('.summon-orb');
    for (var i = 0; i < orbs.length; i++) {
      revealOrb($(orbs[i]));
    }
  }

  function onClickOrb(event) {
    let $orb = $(event.currentTarget);
    revealOrb($orb);
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
      $('#rate-input-focus').val(parseFloat($('#rate-input-focus').val()) + bannerData.pityRateRarityFocus);
      $('#rate-input-5').val(parseFloat($('#rate-input-5').val()) + bannerData.pityRateRarity5);
      $('#rate-input-4').val(parseFloat($('#rate-input-4').val()) - rateDecrease);
      $('#rate-input-3').val(parseFloat($('#rate-input-3').val()) - rateDecrease);
    }


    $newSessionBtn.attr('disabled', 'disabled');
    updateOrbs(getSessionOrbs());
  }

  function resetRates() {
    $('#rate-input-focus').val(bannerData.rateRarityFocus);
    $('#rate-input-5').val(bannerData.rateRarity5);
    $('#rate-input-4').val(bannerData.rateRarity4);
    $('#rate-input-3').val(bannerData.rateRarity3);
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
    let $focusList = $('#focus-list').empty();
    heroListRarity3 = [];
    heroListRarity4 = [];
    heroListRarity5 = [];
    heroListRarityFocus = [];
    heroesData.heroes.forEach(hero => {
      if (bannerData.focusHeroes.includes(hero.name)) {
        heroListRarityFocus.push(hero);
        $focusList.append(`<div class="focus-list-hero">
        <img class="summon-hero-frame" src="img/assets/frame-rarity-focus.png">
        <img class="summon-hero-portrait" src="${hero.assets}">
        <img class="summon-hero-background" src="img/assets/background-rarity-focus.png">
        </div>`);
      }
      if (new Date(hero.releaseDate) > bannerData.startDate) {
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
    $('#snipe-select').empty();
    heroListRarityFocus.forEach(hero => {
      $(`<option>${hero.name}</option>`)
          .data('hero', hero)
          .appendTo('#snipe-select');
    });
  }

  function snipe() {
    let hit = false;
    let hero = $('#snipe-select > option:selected').data('hero');
    let targetColor = getOrbColorFromWeaponType(hero.weaponType);
    let orbs;
    while (!hit) {
      orbs = $(`.summon-orb[data-color="${targetColor}"]`);
      if (orbs.length) {
        if (revealOrb($(orbs[0])).hero.name === hero.name) {
          hit = true;
        }
      } else if (sessionPulls > 0) {
        newSession();
      } else {
        revealOrb($(getRandomFromArray($('.summon-orb'))));
      }
    }
  }

  function revealOrb($orb) {
    let orbData = $orb.data('hero');
    $orb.replaceWith(`<div class="summon-hero">
      <img class="summon-hero-frame" src="img/assets/frame-rarity-${orbData.rarity}.png">
      <img class="summon-hero-portrait" src="${orbData.hero.assets}">
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

    $newSessionBtn.removeAttr('disabled');
    updateStatsView();

    return orbData;
  }

  function updateStatsView() {
    let totalMoneySpent = (stats.orbsUsed * MONEY_PER_ORB).toFixed(2);
    let orbsPerHero = stats.totalRarity5 === 0 ? '-' : (stats.orbsUsed / stats.totalRarity5).toFixed(1);
    let moneyPerHero = stats.totalRarity5 === 0 ? '-' : '$' + (totalMoneySpent / stats.totalRarity5).toFixed(2);
    $('#total-summon-amt').text(stats.totalPulls);
    $('#rarity5-summon-amt').text(stats.totalRarity5);
    $('#focus-summon-amt').text(stats.totalFocus);
    $('#total-orbs-amt').text(stats.orbsUsed);
    $('#total-money-amt').text('$' + totalMoneySpent);
    $('#avg-orbs-amt').text(orbsPerHero);
    $('#avg-money-amt').text(moneyPerHero);
  }

  function getSessionOrbs() {
    let orbs = [];
    let rateRarityFocus = parseFloat($('#rate-input-focus').val()) / 100;
    let rateRarity5 = parseFloat($('#rate-input-5').val()) / 100 + rateRarityFocus;
    let rateRarity4 = parseFloat($('#rate-input-4').val()) / 100 + rateRarity5;

    for (var i = 0; i < 5; i++) {
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
      orbData.color = getOrbColorFromWeaponType(orbData.hero.weaponType);
      orbs.push(orbData);
    }
    return orbs;
  }

  function updateOrbs(orbs) {
    orbs.forEach((orbData, i) => {
      let $orb = $(`<img class="summon-orb" src="${ORB_IMG_URL[orbData.color]}" data-color="${orbData.color}">`)
          .data('hero', orbData);
      $(summonOptions[i]).empty().append($orb);
    });
  }

  function getRandomFromArray(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function getOrbColorFromWeaponType(weaponType) {
    if (weaponType.startsWith('Red ')) {
      return 'red';
    } else if (weaponType.startsWith('Blue ')) {
      return 'blue';
    } else if (weaponType.startsWith('Green ')) {
      return 'green';
    } else {
      return 'gray';
    }
  }

  function getIvText(iv) {
    if (iv.boon === '-') {
      return 'neutral';
    }
    return `+${iv.boon} -${iv.bane}`;
  }

});
