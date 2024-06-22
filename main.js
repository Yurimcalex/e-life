import './style.css'
import plan from './src/plan.js';
import Vector from './src/vector.js';
import Grid from './src/grid.js';
import directions from './src/directions.js';
import BouncingCritter from './src/bouncingCritter.js';
import Wall from './src/wall.js';
import World from './src/world.js';

var world = new World(plan, {
  '#': Wall,
  'o': BouncingCritter
});


var counter = 0;
var turnsAmount = 10;
var timer = setInterval(() => {
  if (counter == turnsAmount) clearInterval(timer);
  console.clear();
  world.turn();
  console.log(world.toString());
  counter += 1;
}, 500);