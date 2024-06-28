import './style.css'
import FirstPlan from './src/plan.js';
import BouncingCritter from './src/bouncingCritter.js';
import WallFollower from './src/wallFollowerCritter.js';
import Wall from './src/wall.js';
import World from './src/world.js';

import valleyPlan from './src/valleyPlan.js';
import { replaceChar } from './src/extension/utils.js';
import LifelikeWorld from './src/lifeLikeWorld.js';
import Plant from './src/plantCritter.js';
import PlantEater from './src/plantEaterCritter.js';
import SavyEater from './src/extension/critters/plantEater_1.js';

import { emptyPlan } from './src/extension/plans/test.js';
import { randomPlaceChar } from './src/extension/utils.js';
import SavyMovingEater from './src/extension/critters/plantEater_2.js';


var worlds = [
	{
		world: World,
		plan: FirstPlan,
		legend: {
			'#': Wall,
			'o': BouncingCritter,
			'w': WallFollower
		}
	},
	{
		world: LifelikeWorld,
		plan: valleyPlan,
		legend: {
			'#': Wall,
			'0': PlantEater,
			'*': Plant
		}
	},
	{
		world: LifelikeWorld,
		plan: replaceChar(valleyPlan, '0', 'D'),
		legend: {
			'#': Wall,
			'D': SavyEater,
			'*': Plant
		}
	},
	{
		world: LifelikeWorld,
		plan: randomPlaceChar(emptyPlan, 'E'),
		legend: {
			'#': Wall,
			'E': SavyMovingEater
		}
	}
];


var world;
var wInd = 2;
var app = document.getElementById('world-str');


createWorld(worlds[wInd]);
app.innerHTML = world.toString();


var timer;
startBtn.onclick = function () {
	if (!timer) render();
};
stopBtn.onclick = function () {
	if (timer) {
		clearInterval(timer);
		timer = null;
	}
};
restartBtn.onclick = function () {
	if (timer) stopBtn.click();
	createWorld(worlds[wInd]);
	app.innerHTML = world.toString();
	startBtn.click();
};
selectWorld.onchange = function () {
	wInd = parseInt(this.value);
	if (timer) stopBtn.click();
	createWorld(worlds[wInd]);
	app.innerHTML = world.toString();
};

createSelectOptions();
selectWorld.selectedIndex = wInd;


function createSelectOptions() {
	for (var i = 0; i < worlds.length; i += 1) {
		var option = document.createElement('option');
		option.value = i;
		option.innerHTML = 'world' + ' ' + i;
		selectWorld.appendChild(option);
	}
}


function createWorld(options) {
	let w = options.world;
	let plan = options.plan;
	var legend = options.legend;

	world = new w(plan, legend);
}


function render() {
	timer = setInterval(() => {
	  app.innerHTML = world.toString();
	  world.turn();
	}, 500);
}