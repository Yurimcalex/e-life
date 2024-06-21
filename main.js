import './style.css'
import plan from './src/plan.js';
import Vector from './src/vector.js';

console.log(plan);

var v = new Vector(1, 2);
var v2 = v.plus(new Vector(1, 1));

console.log(v, v2);