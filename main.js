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

console.log(world.toString());