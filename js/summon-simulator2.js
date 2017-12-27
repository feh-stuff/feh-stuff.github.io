(function($) {
  SummonSimulator = function() {
    this.heroList = { r3: [], r4: [], r5: [], rf: [] };
    this.pullStats = {
      pulls: 0,
      orbs: 0,
      money: 0,
      r5: 0,
      rf: 0,
    };
    this.pityPulls = 0;
    this.sessionPulls = 0;
    this.resetPityRate = false;
    this.customBanner = this.getCustomBannerData();

    this.init();
  }

  SummonSimulator.prototype.ELEMENTS = {
    SELECT_BANNER: '#select-banner',
    FOCUS_LIST: '#focus-list',
    SUMMON_OPTION: '.summon-option',
    SUMMON_ORB: '.summon-orb',
    SUMMON_ALL: '#summon-all',
    SUMMON_TABLE: '#summon-table',
    NEW_SESSION: '#new-session',
    RATE_INPUT: '.rate-input > input',
    RATE_INPUT_FOCUS: '#rate-input-focus',
    RATE_INPUT_5: '#rate-input-5',
    RATE_INPUT_4: '#rate-input-4',
    RATE_INPUT_3: '#rate-input-3',
    RESET: '#reset',
    SNIPE: '#snipe-btn',
    SNIPE_LIST: '#snipe-list',
    CUSTOM_MODAL: '#custom-banner-modal',
    CUSTOM_LIST: '#custom-banner-select-list',
    CUSTOM_LIST_DESC: '#custom-banner-select-list label',
    CUSTOM_FOCUS: '#custom-banner-heroes',
    CUSTOM_SEARCH: '#custom-banner-search',
    CREATE_BANNER: '#create-banner'
  };

  SummonSimulator.prototype.CONST = {
    ORB_PULL_COST: [5, 4, 4, 4, 3],
    ORB_MONEY_COST: 0.533,
    IMAGES: {
      blue: 'img/assets/orbs-blue.png',
      red: 'img/assets/orbs-red.png',
      green: 'img/assets/orbs-green.png',
      neutral: 'img/assets/orbs-gray.png'
    },
    IV: [
      {boon: 'hp', bane: 'atk'},{boon: 'hp', bane: 'spd'},{boon: 'hp', bane: 'def'},{boon: 'hp', bane: 'res'},
      {boon: 'atk', bane: 'hp'},{boon: 'atk', bane: 'spd'},{boon: 'atk', bane: 'def'},{boon: 'atk', bane: 'res'},
      {boon: 'spd', bane: 'hp'},{boon: 'spd', bane: 'atk'},{boon: 'spd', bane: 'def'},{boon: 'spd', bane: 'res'},
      {boon: 'def', bane: 'hp'},{boon: 'def', bane: 'atk'},{boon: 'def', bane: 'spd'},{boon: 'def', bane: 'res'},
      {boon: 'res', bane: 'hp'},{boon: 'res', bane: 'atk'},{boon: 'res', bane: 'spd'},{boon: 'res', bane: 'def'},
      {boon: '-', bane: '-'}
    ]
  };

  SummonSimulator.prototype.init = function() {
    this.$summonTable = $(this.ELEMENTS.SUMMON_TABLE).DataTable({
      paging: false,
      searching: false,
      info: false,
      columnDefs: [ { width: "70px", targets: 0 }, { width: "50px", targets: [2,3,4] } ],
      language: { emptyTable: "No heroes summoned yet" }
    });

    $(this.ELEMENTS.SELECT_BANNER)
        .selectable({
          data: BANNERS,
          optionGenerator: this.bannerOptionsGenerator,
          text: BANNERS[0].banners[0].name,
          value: BANNERS[0].banners[0]
        });

    let customFocus = this.getUrlParam('focus');
    if (customFocus.length) {
      this.banner = this.getCustomBannerData(customFocus.split(';'));
      $(this.ELEMENTS.SELECT_BANNER).selectable('text', this.banner.name);
    } else {
      this.banner = BANNERS[0].banners[0];
      this.banner.startDate = new Date(this.banner.startDate);
    }


    this.initBanner();
    this.initCustomBannerList();
    this.bindEvents();
  };

  // Events
  SummonSimulator.prototype.bindEvents = function() {
    $(this.ELEMENTS.SELECT_BANNER).on('select', this.onSelectBanner.bind(this));
    $(this.ELEMENTS.NEW_SESSION).on('click', this.initSession.bind(this));

    $(this.ELEMENTS.SUMMON_OPTION).on('click', this.ELEMENTS.SUMMON_ORB, this.onSummonOne.bind(this));
    $(this.ELEMENTS.SUMMON_ALL).on('click', this.onSummonAll.bind(this));

    $(this.ELEMENTS.RESET).on('click', this.resetSessionData.bind(this));
    $(this.ELEMENTS.SNIPE).on('click', this.snipe.bind(this));

    $(this.ELEMENTS.CUSTOM_LIST).on('change', 'input', this.toggleCustomBannerHero.bind(this));
    $(this.ELEMENTS.CREATE_BANNER).on('click', this.createBanner.bind(this));
    $(this.ELEMENTS.CUSTOM_SEARCH).on('keyup', this.searchCustomFocus.bind(this));
  };
  SummonSimulator.prototype.onSelectBanner = function(event) {
    this.banner = $(event.currentTarget).data('val');
    this.banner.startDate = new Date(this.banner.startDate);
    this.initBanner();
  };
  SummonSimulator.prototype.onSummonOne = function(event) {
    this.revealOrb($(event.currentTarget));
  };
  SummonSimulator.prototype.onSummonAll = function(event) {
    let orbs = $(this.ELEMENTS.SUMMON_ORB);
    for (let i = 0; i < orbs.length; i++) {
      this.revealOrb($(orbs[i]));
    }
  };


  // Initialization Functions
  SummonSimulator.prototype.initBanner = function() {
    this.initHeroList();
    this.resetSessionData();
    this.setSnipeOptions();
  };
  SummonSimulator.prototype.initHeroList = function() {
    let $focusList = $(this.ELEMENTS.FOCUS_LIST).empty();

    for (let list in this.heroList) {
      this.heroList[list] = [];
    }

    HEROES.forEach(hero => {
      if (this.banner.focusHeroes.includes(hero.name)) {
        this.heroList.rf.push(hero);
        $(`<div class="focus-list-hero">
            <img class="focus-list-hero-frame" src="img/assets/frame-rarity-focus.png">
            <img class="focus-list-hero-portrait" src="${hero.assets.portrait}">
            <img class="focus-list-hero-background" src="img/assets/background-rarity-focus.png">
            </div>`)
          .tooltip({
            html: true,
            placement: 'bottom',
            title: `<p class="mb-0">${hero.title}</p><h6>${hero.shortName || hero.name}</h6>`
          })
          .appendTo($focusList);
      }
      if (new Date(hero.releaseDate) > this.banner.startDate || hero.ghb || hero.ttReward) {
          return;
      }
      if (hero.rarity3) {
        this.heroList.r3.push(hero);
      }
      if (hero.rarity4 && !this.banner.excludeFromRarity4.includes(hero.name)) {
        this.heroList.r4.push(hero);
      }
      if (hero.rarity5 && !hero.limited && !this.banner.excludeFromRarity5.includes(hero.name)) {
        this.heroList.r5.push(hero);
      }
    }, this);
  };
  SummonSimulator.prototype.resetSessionData = function() {
    for (stat in this.pullStats) {
      this.pullStats[stat] = 0;
    }
    this.pityPulls = 0;
    this.resetPityRate = true;

    this.$summonTable.clear().draw();
    this.updateStatsView();
    this.initSession();
  };
  SummonSimulator.prototype.initSession = function() {
    this.sessionPulls = 0;
    if (this.resetPityRate) {
      this.pityPulls = 0;
      this.resetPityRate = false;
      this.resetRates();
    } else if (this.pityPulls) {
      this.pityPulls -= 5;
      let rateDecrease = (this.banner.pityRateRarityFocus + this.banner.pityRateRarity5) / 2;
      $(this.ELEMENTS.RATE_INPUT_FOCUS).val(parseFloat($(this.ELEMENTS.RATE_INPUT_FOCUS).val()) + this.banner.pityRateRarityFocus);
      $(this.ELEMENTS.RATE_INPUT_5).val(parseFloat($(this.ELEMENTS.RATE_INPUT_5).val()) + this.banner.pityRateRarity5);
      $(this.ELEMENTS.RATE_INPUT_4).val(parseFloat($(this.ELEMENTS.RATE_INPUT_4).val()) - rateDecrease);
      $(this.ELEMENTS.RATE_INPUT_3).val(parseFloat($(this.ELEMENTS.RATE_INPUT_3).val()) - rateDecrease);
    }

    $(this.ELEMENTS.NEW_SESSION).attr('disabled', 'disabled');
    this.updateOrbs(this.getSessionOrbs());
  };
  SummonSimulator.prototype.resetRates = function() {
    $(this.ELEMENTS.RATE_INPUT_FOCUS).val(this.banner.rateRarityFocus);
    $(this.ELEMENTS.RATE_INPUT_5).val(this.banner.rateRarity5);
    $(this.ELEMENTS.RATE_INPUT_4).val(this.banner.rateRarity4);
    $(this.ELEMENTS.RATE_INPUT_3).val(this.banner.rateRarity3);
  }


  // Main Functions
  //TODO
  SummonSimulator.prototype.getSessionOrbs = function() {
    let orbs = [];
    let rateRF = parseFloat($(this.ELEMENTS.RATE_INPUT_FOCUS).val()) / 100;
    let rateR5 = parseFloat($(this.ELEMENTS.RATE_INPUT_5).val()) / 100 + rateRF;
    let rateR4 = parseFloat($(this.ELEMENTS.RATE_INPUT_4).val()) / 100 + rateR5;

    for (let i = 0; i < 5; i++) {
      let rate = Math.random();
      let orbData;
      if (rate <= rateRF) {
        orbData = { hero: this.getArrayRand(this.heroList.rf), rarity: 'focus' };
      } else if (rate <= rateR5) {
        orbData = { hero: this.getArrayRand(this.heroList.r5), rarity: 5 };
      } else if (rate <= rateR4) {
        orbData = { hero: this.getArrayRand(this.heroList.r4), rarity: 4 };
      } else {
        orbData = { hero: this.getArrayRand(this.heroList.r3), rarity: 3 };
      }
      orbData.iv = this.getArrayRand(this.CONST.IV);
      orbData.color = orbData.hero.colorType.toLowerCase();
      orbs.push(orbData);
    }
    return orbs;
  };
  SummonSimulator.prototype.updateOrbs = function(orbs) {
    orbs.forEach((orbData, i) => {
      let $orb = $(`<img class="summon-orb" src="${this.CONST.IMAGES[orbData.color]}" data-color="${orbData.color}">`)
          .data('hero', orbData);
      $($(this.ELEMENTS.SUMMON_OPTION)[i]).empty().append($orb);
    });
  };
  SummonSimulator.prototype.revealOrb = function($orb) {
    let orbData = $orb.data('hero');
    $orb.replaceWith(`<div class="summon-hero">
      <img class="summon-hero-frame" src="img/assets/frame-rarity-${orbData.rarity}.png">
      <img class="summon-hero-portrait" src="${orbData.hero.assets.portrait}">
      <img class="summon-hero-background" src="img/assets/background-rarity-${orbData.rarity}.png">
      <img class="summon-hero-rarity" src="img/assets/star-rarity-${orbData.rarity}.png">
    </div>`);

    this.pullStats.pulls++;
    this.pullStats.orbs += this.CONST.ORB_PULL_COST[this.sessionPulls++];
    this.pityPulls++;
    if (orbData.rarity === 'focus' || orbData.rarity === 5) {
      this.pullStats.r5++;
      this.pullStats.rf += orbData.rarity === 'focus' ? 1 : 0;
      this.resetPityRate = true;
      this.$summonTable.row
          .add([
              this.pullStats.pulls,
              orbData.hero.name,
              orbData.rarity === 'focus' ? '◯' : '╳',
              orbData.iv.boon,
              orbData.iv.bane
            ])
          .draw();
    }

    $(this.ELEMENTS.NEW_SESSION).removeAttr('disabled');
    this.updateStatsView();
    return orbData;
  };
  SummonSimulator.prototype.updateStatsView = function() {
    let percentAmount = this.pullStats.pulls === 0 ? '-' : (100 * this.pullStats.r5 / this.pullStats.pulls).toFixed(1) + '%';
    let totalMoneySpent = (this.pullStats.orbs * this.CONST.ORB_MONEY_COST).toFixed(2);
    let orbsPerHero = this.pullStats.r5 === 0 ? '-' : (this.pullStats.orbs / this.pullStats.r5).toFixed(1);
    let moneyPerHero = this.pullStats.r5 === 0 ? '-' : '$' + (totalMoneySpent / this.pullStats.r5).toFixed(2);
    $('#total-summon-amt').text(this.pullStats.pulls);
    $('#rarity5-summon-amt').text(this.pullStats.r5);
    $('#focus-summon-amt').text(this.pullStats.rf);
    $('#percent-summon-amt').text(percentAmount);
    $('#total-orbs-amt').text(this.pullStats.orbs);
    $('#total-money-amt').text('$' + totalMoneySpent);
    $('#avg-orbs-amt').text(orbsPerHero);
    $('#avg-money-amt').text(moneyPerHero);
  }


  // Snipe Functions
  SummonSimulator.prototype.setSnipeOptions = function() {
    $(this.ELEMENTS.SNIPE_LIST).empty();
    this.heroList.rf.forEach(hero => {
      let $checkbox = $(`<input type="checkbox" class="custom-control-input snipe-target">`)
          .data('hero', hero);
      $('<label class="custom-control custom-checkbox snipe-option"></label>')
          .append($checkbox)
          .append(`<span class="custom-control-indicator"></span>
              <span class="custom-control-description">${hero.name}</span>`)
          .appendTo(this.ELEMENTS.SNIPE_LIST);
    }, this);
  };
  SummonSimulator.prototype.snipe = function() {
    let targetCheckbox = $('.snipe-target:checked');
    let targets = [];
    let snipeCount = 0;
    let orbs;
    let orbData;

    for (let i = 0; i < targetCheckbox.length; i++) {
      targets.push($(targetCheckbox[i]).data('hero'));
    }

    while (this.continueSnipe(targets, snipeCount)) {
      orbs = this.getTargetSnipeOrbs(targets);
      if (orbs.length) {
        orbData = this.revealOrb($(orbs[0]));
        if (this.snipeHit(orbData, targets)) {
          $(this.ELEMENTS.SUMMON_TABLE + ' tbody tr:last-child').addClass('table-success');
          snipeCount++;
        }
      } else if (this.sessionPulls > 0) {
        this.initSession();
      } else {
        this.revealOrb($(this.getArrayRand($(this.ELEMENTS.SUMMON_ORB))));
      }
    }
  };
  SummonSimulator.prototype.continueSnipe = function(targets, snipeCount) {
    let snipeAll = $('#snipe-all').is(':checked');
    if (snipeAll) {
      return targets.length > 0;
    } else {
      return targets.length > 0 && snipeCount === 0;
    }
  };
  SummonSimulator.prototype.getTargetSnipeOrbs = function(targetHeroes) {
    let colors = new Set();
    targetHeroes.forEach(hero => colors.add(hero.colorType.toLowerCase()));

    let selector = [...colors]
        .map(color => `${this.ELEMENTS.SUMMON_ORB}[data-color="${color}"]`)
        .join(',');

    return $(selector);
  };
  SummonSimulator.prototype.snipeHit = function(orbData, targetHeroes) {
    for (let i = 0; i < targetHeroes.length; i++) {
      if (targetHeroes[i].name === orbData.hero.name && orbData.rarity === 'focus') {
        targetHeroes.splice(i, 1);
        return true;
      }
    }
    return false;
  }


  // Custom Banners
  SummonSimulator.prototype.getCustomBannerData = function(focusHeroes = []) {
    return {
      name: "Custom Banner",
      startDate: new Date(),
      focusHeroes: focusHeroes,
      excludeFromRarity4: [],
      excludeFromRarity5: [],
      rateRarity3: 36,
      rateRarity4: 58,
      rateRarity5: 3,
      rateRarityFocus: 3,
      pityRateRarity5: 0.25,
      pityRateRarityFocus: 0.25
    };
  };
  SummonSimulator.prototype.initCustomBannerList = function() {
    HEROES.forEach(hero => {
      $(`<label class="custom-control custom-checkbox">
          <input type="checkbox" class="custom-control-input">
          <span class="custom-control-indicator"></span>
          <span class="custom-control-description">${hero.name}</span>
          </label>`)
          .data('val', hero)
          .appendTo(this.ELEMENTS.CUSTOM_LIST);
    }, this);
  };
  SummonSimulator.prototype.toggleCustomBannerHero = function(event) {
    let checked = $(event.currentTarget).is(':checked');
    let hero = $(event.currentTarget).closest('.custom-control').data('val');
    if (checked) {
      this.customBanner.focusHeroes.push(hero.name);
      $(this.ELEMENTS.CUSTOM_FOCUS).append(`<div class="focus-list-hero" data-name="${hero.name}">
          <img class="focus-list-hero-frame" src="img/assets/frame-rarity-focus.png">
          <img class="focus-list-hero-portrait" src="${hero.assets.portrait}">
          <img class="focus-list-hero-background" src="img/assets/background-rarity-focus.png">
          </div>`);
    } else {
      this.customBanner.focusHeroes.splice(this.customBanner.focusHeroes.indexOf(hero.name), 1);
      $(`.focus-list-hero[data-name="${hero.name}"]`).remove();
    }
  };
  SummonSimulator.prototype.searchCustomFocus = function() {
    let searchKey = $(this.ELEMENTS.CUSTOM_SEARCH).val().trim().toLowerCase();
    let heroList = $(this.ELEMENTS.CUSTOM_LIST_DESC);
    for (let i = 0; i < heroList.length; i++) {
      $(heroList[i]).toggleClass('d-none', $(heroList[i]).text().toLowerCase().indexOf(searchKey) === -1);
    }
  };
  SummonSimulator.prototype.createBanner = function(event) {
    $(this.ELEMENTS.CUSTOM_MODAL).modal('hide');
    window.history.pushState(null, null, '?focus=' + encodeURIComponent(this.customBanner.focusHeroes.join(';')));
    this.banner = this.customBanner;
    this.initBanner();

    $(this.ELEMENTS.SELECT_BANNER).selectable('text', 'Custom Banner');
    //TODO Append banner to select dropdown;
  };

  // Helper Functions
  SummonSimulator.prototype.getArrayRand = function(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  };
  SummonSimulator.prototype.getDateString = function (date) {
    let months = [ 'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'];

    return `${months[date.getMonth()]} ${date.getFullYear()}`;
  }
  SummonSimulator.prototype.getUrlParam = function(name) {
    let results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results == null){
       return '';
    } else {
       return decodeURIComponent(results[1]) || 0;
    }
  }

  SummonSimulator.prototype.bannerOptionsGenerator = function(item, $parent) {
    $parent.append(`<div class="dropdown-header">${item.date}</div>`);
    for (let i = 0; i < item.banners.length; i++) {
      $(`<div class="dropdown-item">${item.banners[i].name}</div>`)
          .data('val', item.banners[i])
          .appendTo($parent);
    }
  }

})(jQuery);

new SummonSimulator();
