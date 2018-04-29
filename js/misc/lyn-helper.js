$(document).ready(function() {
  if (parseInt($('body > .container').css('margin-right')) < 200) {
    return;
  }

  let text = [
    [
      "You're calling me a Legendary Hero?",
      "I'm just Lyn. I'm nowhere near that grand.",
    ],
    [
      "Hm? You're saying that the face of series should be the Legendary Hero?",
      "Well, I've heard Ike was already summoned a few weeks ago.",
      "Marth? Oh, you mean Lucina.",
      "I'm sure she'll gain the title of Legendary Hero some day.",
      "She's earned it."
    ],
    [
      "I'm always up early, so don't be surprised if I barge in and shout",
      "<h2>THE ENEMY!</h2>"
    ],
    [
      "Celica told me about her journey last night.",
      "She went through so much. Can you imagine?"
    ],
    [
      "Tell me, what...sort of things do you...",
      "No, never mind. Forget I said anything!",
      "I-I said never mind!"
    ],
    [
      "Thank you for always helping me.",
      "Eliwood would probably gift you some flowers to show his gratitude.",
      "Hector? He'll probably say something like \"Oho!\"",
      "But me... All I can do is stay by your side."
    ],
    [
      "You've alreay made me wear a wedding gown last year.",
      "And that thick dress for the Festival of Devotion too.",
      "I feel more at home in this outfit. I can feel the wind caressing my skin.",
      "H-Huh? Y-You want me to wear that revealing swimsuit for summer?"
    ],
    ["Who dipped my arrows in green paint?"],
    ["You REALLY remind me of another tactician I know."],
    ["I'll hit my mark."],
    ["Fire Emblem? Can't say I've heard of it."]
  ];

  let $container = $(`<div class="hero-helper lyn-helper"></div>`);
  let $text = $(`<div class="hero-helper-text">My name is Lyndis, and I'm here to talk about the Laws of Sacae.</div>`);
  let $toggle = $(`<div class="hero-helper-toggle"></div>`);
  let currentText = -1;
  let previousText = -1;
  let currentSubText = 0;
  let snipe = false;
  let heroesRobin = ["Robin (F)", "Robin (M)", "Robin (M) (Winter's Envoy)"];

  $container
      .append($toggle)
      .append($text)
      .appendTo('body');

  $text.on('click', function() {
    if (currentText === -1 || currentSubText >= text[currentText].length) {
      do {
        currentText = Math.floor(Math.random() * text.length);
      } while (currentText === previousText);
      previousText = currentText;
      currentSubText = 0;
    }
    $text.html(text[currentText][currentSubText]);
    currentSubText++;
  });

  $(document).on('snipe-start', function(event) {
    snipe = true;
    $text.text("Aim well and victory is assured.");
  })

  $(document).on('snipe-end', function(event, summonCount) {
    snipe = false;
    if (summonCount <= 10) {
      $text.text("Amazing... The spirits must be to thank for this.");
    } else if (summonCount <= 20) {
      $text.text("Oh, good! That seems pretty fair.");
    } else {
      $text.text("The wind blows against us.");
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

  $(document).on('blessing-select', function(event, blessing) {
    blessingSelected(blessing);
  });

  function heroSummoned(hero, rarity) {
    if (hero.includes("Eliwood")) {
      $text.html("Ah, Eliwood my good friend!");
    } else if (hero.includes("Hector") || hero.includes("Lilina")) {
      $text.html(Math.random() > 0.5 ? "Oho?" : "Oho!");
    } else if (hero.includes("Robin")) {
      $text.html("Mark? Is that you?");
    } else if (hero.includes("Florina")) {
      $text.html("Darting Blow looks like a pretty decent skill.");
    } else if (hero === "Fjorm" || hero === "Gunnthrá" || hero.includes("Legendary Heroes")) {
      $text.html("Ah, a fellow Legendary Hero.");
    } else {
      $text.html("Welcome hero, may the winds bless you.");
    }
  }

  function heroSelected(hero, weaponType) {
    if (hero.includes("Eliwood")) {
      $text.html("Ah, Eliwood my good friend!");
    } else if (hero.includes("Hector") || hero.includes("Lilina")) {
      $text.html(Math.random() > 0.5 ? "Oho?" : "Oho!");
    } else if (hero.includes("Robin")) {
      $text.html("Mark? Is that you?");
    } else if (hero.includes("Florina")) {
      $text.html("Florina, stay close to me.");
    } else if (hero === "Fjorm" || hero === "Gunnthrá" || hero.includes("Legendary Heroes")) {
      $text.html("Ah, a fellow Legendary Hero.");
    } else {
      $text.html("Good choice.<br>How about conferring Wind Blessing?");
    }
  }

  function blessingSelected(blessing) {
    if (blessing === "Wind") {
      $text.html("May the Winds of Sacae bless you.");
    } else {
      $text.html("Wouldn't Wind Blessing be better?");
    }
  }
});
