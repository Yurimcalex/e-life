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


// let counter = 0;
// let timer = setInterval(() => {

// }, 1000);

for (var i = 0; i < 5; i += 1) {
  world.turn();
  console.log(world.toString());
}