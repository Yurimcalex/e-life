import './style.css'
import plan from './src/plan.js';
import Vector from './src/vector.js';
import Grid from './src/grid.js';
import directions from './src/directions.js';
import BouncingCritter from './src/bouncingCritter.js';

console.log(plan);

var v = new Vector(1, 2);
var v2 = v.plus(new Vector(1, 1));

console.log(v, v2);

var grid = new Grid(5, 5);
console.log(grid.get(new Vector(1, 1)));
grid.set(new Vector(1, 1), 'X');
console.log(grid.get(new Vector(1, 1)));

console.log(directions);