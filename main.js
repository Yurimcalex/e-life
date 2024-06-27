import './style.css'
import plan from './src/plan.js';
import BouncingCritter from './src/bouncingCritter.js';
import WallFollower from './src/wallFollowerCritter.js';
import Wall from './src/wall.js';
import World from './src/world.js';

import valleyPlan from './src/valleyPlan.js';
import LifelikeWorld from './src/lifeLikeWorld.js';
import Plant from './src/plantCritter.js';
import PlantEater from './src/plantEaterCritter.js';

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


var w = valley;

var app = document.getElementById('world-str');
app.innerHTML = world.toString();


var counter = 0;
var turnsAmount = 100;
var timer = setInterval(() => {
  if (counter == turnsAmount) clearInterval(timer);
  w.turn();
  app.innerHTML = w.toString();
  counter += 1;
}, 500);