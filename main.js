import './style.css'
import plan from './src/plan.js';
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


var world = new World(plan, {
  '#': Wall,
  'o': BouncingCritter,
  'w': WallFollower
});

var valley = new LifelikeWorld(valleyPlan, {
	'#': Wall,
	'0': PlantEater,
	'*': Plant
});

var valley1 = new LifelikeWorld(
	replaceChar(valleyPlan, '0', 'D'),
	{
		'#': Wall,
		'D': SavyEater,
		'*': Plant
	}
);


var w = valley1;
var app = document.getElementById('world-str');
app.innerHTML = w.toString();

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

function render() {
	timer = setInterval(() => {
	  app.innerHTML = w.toString();
	  w.turn();
	}, 500);
}