$(document).ready(function() {
  if (parseInt($('body > .container').css('margin-right')) < 200) {
    return;
  }

  let text = [
    [
      "Do you like my outfit or do you ADORE my outfit?",
      "Lissa didn't make me wear it this time! I picked it all by myself.",
      "I bet she can't pull this of like I can."
    ],
    [
      "Alfonse, Anna, and Fjorm remind me a lot of Robin, Lissa, and myself.",
      "Of course, let's not forget about Frederick.",
      "He does have his horse though."
    ],
    [
      "There are a lot of heroes with swords around here.",
      "W-what? You would go into red hell just for me?",
      "Thank you. That means a lot to me."
    ],
    [
      "I never get tired of looking at you.",
      "Oh, you're not Robin.",
      "It's that damn cloak."
    ],
    [
      "I've never really thought of you as a summoner.",
      "No! I mean—I didn't mean—not like that!",
      "N-no, wait! It was just a joke! Ha ha...ha? ...Gotta go!"
    ],
    [
      "All right, deep breath... FHOOOOOO! ...Hold...and out... HAAAAAAAAAAAAH.",
      "Once more... FHOOOOO! Holding...holding...and out... HAAAAAAAAAAH.",
      "Right, I'm set now. Here goes. Prepare yourself, because I'm going to say it!",
      "HELPING GIVES ME STRENGTH!"
    ],
    ["I heard you can summon heroes who have passed on.","I wonder..."],
    ["I'm being helpful!","...Right?"],
    ["Anything can change!"],
    ["Fire Emblem? What's that?"],
    ["I can't stop this thing!"],
    ["Horses are nice.", "I like horses."]
  ];

  let $container = $(`<div class="hero-helper chrom-helper"></div>`);
  let $text = $(`<div class="hero-helper-text">Hello, I'm Chrom of Ylisse. If you need help, just click on me!</div>`);
  let $toggle = $(`<div class="hero-helper-toggle"></div>`);
  let currentText = -1;
  let currentSubText = 0;
  let snipe = false;
  let heroesPity = ["Jakob", "Merric", "Hawkeye"];
  let heroesRobin = ["Robin (F)", "Robin (M)", "Robin (M) (Winter's Envoy)"];

  $container
      .append($toggle)
      .append($text)
      .appendTo('body');

  $text.on('click', function() {
    if (currentText === -1 || currentSubText >= text[currentText].length) {
      currentText = Math.floor(Math.random() * text.length);
      currentSubText = 0;
    }
    $text.text(text[currentText][currentSubText]);
    currentSubText++;
  });

  $(document).on('snipe-start', function(event) {
    snipe = true;
    $text.text("Here goes nothing!");
  })

  $(document).on('snipe-end', function(event, summonCount) {
    snipe = false;
    if (summonCount <= 15) {
      $text.text("Nice! That went really well!");
    } else if (summonCount <= 30) {
      $text.text("Not too bad, I suppose.");
    } else {
      $text.text("This thing is rigged!");
    }
  });

  $(document).on('summon', function(event, hero, rarity) {
    if (!snipe) {
      heroSummoned(hero, rarity);
    }
  })

  $(document).on('hero-select', function(event, hero, weaponType) {
    heroSelected(hero, weaponType);
  });

  function heroSummoned(hero, rarity) {
    if (hero.includes("Chrom")) {
      $text.text("Hey, I know this guy!");
    } else if (heroesRobin.includes(hero)) {
      $text.text("Robin, my dear friend!");
    } else if (hero === "Robin (F) (Ylissean Summer)") {
      $text.text("O-oh my... Please excuse me for a moment.");
    } else if (hero.includes("Lucina")) {
      $text.text("Lucina, my beautiful and noble daughter.");
    } else if (hero === "Morgan (M)") {
      $text.text("Morgan, my dear son. You're finally here!");
    } else if (hero === "Morgan (F)") {
      $text.text("Morgan, my dear granddaughter. It's good to see you.");
    } else if (hero.includes("Lissa")) {
      $text.text("Lissa! How do I look?");
    } else if (hero === "Frederick") {
      $text.text("Frederick, my old friend. It's good to see you again.");
    } else if (hero === "Frederick (Ylissean Summer)") {
      $text.text("Frederick, what happened to your horse?");
    } else if (hero === "Robin (M) (Fallen Heroes)") {
      $text.text("This is not your— your fault...");
    } else if (heroesPity.includes(hero) && rarity === 5) {
      $text.text("My condolences.");
    } else if (hero.includes("Corrin") || hero.includes("Jakob") || hero === "Felicia") {
      $text.text("Have we met before?");
    } else {
      $text.text(`Welcome. The barracks is ${Math.random() <= 0.5 ? "this" : "that"} way.`);
    }
  }

  function heroSelected(hero, weaponType) {
    if (hero.includes("Chrom") || heroesRobin.includes(hero) || hero.includes("Lucina") || hero.includes ("Morgan")) {
      $text.text("Excellent choice! Might I suggest Fury and Moonbow?");
    } else if (hero === "Robin (M) (Fallen Heroes)") {
      $text.text("Are you sure about this...?");
    } else if (weaponType === "Staff") {
      $text.text("Healers can't learn Fury and Moonbow. Might I suggest you change to another hero?");
    }
  }
});
