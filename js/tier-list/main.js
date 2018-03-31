let heroes = require('../data/hero-access.js');
let types = [
	'Red Sword', 'Red Tome', 'Red Breath',
	'Blue Lance', 'Blue Tome', 'Blue Breath',
	'Green Axe', 'Green Tome', 'Green Breath',
	'Neutral Bow', 'Neutral Dagger', 'Neutral Staff', 'Neutral Breath'
];
let groups = {
	'Red Sword': [],
	'Red Tome': [],
	'Red Breath': [],
	'Blue Lance': [],
	'Blue Tome': [],
	'Blue Breath': [],
	'Green Axe': [],
	'Green Tome': [],
	'Green Breath': [],
	'Neutral Bow': [],
	'Neutral Dagger': [],
	'Neutral Staff': [],
	'Neutral Breath': []
};
let ranks = {
	'Red Sword': [[1, 3], [5, 8], [10, 15], [8, 12], [8, 12]],
	'Red Tome': [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5]],
	'Red Breath': [[0, 1], [0, 1], [0, 1], [0, 1], [0, 1]],
	'Blue Lance': [[1, 2], [4, 7], [5, 10], [6, 10], [8, 12]],
	'Blue Tome': [[0, 1], [1, 3], [2, 4], [3, 5], [4, 6]],
	'Blue Breath': [[0, 1], [0, 2], [0, 3], [0, 3], [0, 3]],
	'Green Axe': [[1, 2], [4, 8], [4, 8], [4, 8], [3, 5]],
	'Green Tome': [[0, 1], [0, 2], [1, 3], [2, 4], [3, 5]],
	'Green Breath': [[0, 2], [0, 2], [1, 2], [1, 2], [1, 3]],
	'Neutral Bow': [[0, 1], [1, 3], [1, 3], [2, 4], [2, 4]],
	'Neutral Dagger': [[0, 1], [1, 3], [1, 3], [1, 3], [1, 3]],
	'Neutral Staff': [[0, 1], [1, 3], [1, 3], [1, 3], [1, 3]],
	'Neutral Breath': [[0, 1], [0, 1], [0, 1], [0, 1], [0, 1]]
};
let results = {
	'Red Sword': {},
	'Red Tome': {},
	'Red Breath': {},
	'Blue Lance': {},
	'Blue Tome': {},
	'Blue Breath': {},
	'Green Axe': {},
	'Green Tome': {},
	'Green Breath': {},
	'Neutral Bow': {},
	'Neutral Dagger': {},
	'Neutral Staff': {},
	'Neutral Breath': {}
}
let tierRanks = ["S+", "S", "S-", "A+", "A", "A-"];
let extraRanks = ["B+", "B", "B-", "C+", "C", "C-", "D+", "D", "D-", "E+", "E", "E-"];
init();

function init() {
	heroes
		.getAllHeroes()
		.forEach(hero => shuffleArray(groups[hero.colorType + ' ' + hero.weaponType].push(hero.name)));
	makeList();
	processList();
	makeTable();
}

function makeList() {
	types.forEach((type) => {
		for (let i = 0; i < ranks[type].length; i++) {
			let len = Math.min(groups[type].length, randomInt(ranks[type][i][0], ranks[type][i][1]));
			shuffleArray(groups[type]);
			results[type][tierRanks[i]] = groups[type].splice(0, len);			
		}
		results[type][tierRanks[5]] = groups[type];
	});
}

function processList() {
	for (let rank in results['Blue Lance']) {
		if (results['Blue Lance'][rank].includes('Est')) {
			results['Blue Lance'][rank].splice(results['Blue Lance'][rank].indexOf('Est'), 1);
		}
	}
	results['Blue Lance']['S'].push('Est');
}

function makeTable() {
	let $tbody = $('#tier-table-body');

	for (let i = 0; i < tierRanks.length; i++) {
		let $tr = $('<tr></tr>');
		$tr.append(`<th class="rating">${tierRanks[i]}</th>`);

		for (let j = 0; j < types.length; j++) {
			$tr.append(getTdHtml(results[types[j]][tierRanks[i]]));
		}

		$tbody.append($tr);
	}
	for (let i = 0; i < extraRanks.length; i++) {
		$tbody.append(`<tr><th>${extraRanks[i]}</th>${types.map(t => '<td></td>').join('')}</tr>`);
	}
}

function getTdHtml(res) {
	let $td = $('<td></td>');
	for (let i = 0; i < res.length; i++) {
		$td.append(`<img src="../img/heroes-portrait/75px-Icon_Portrait_${res[i]}.png">`);
	}
	return $td;
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}