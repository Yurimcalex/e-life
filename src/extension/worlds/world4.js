import { emptyPlan } from '../plans/test.js';
import world from '../../lifeLikeWorld.js';
import Wall from '../../wall.js';
import Plant from '../../plantCritter.js';
import PlantEater1 from '../critters/plantEater1.js';
import PlantEater2 from '../critters/plantEater2.js';
import PlantEater3 from '../critters/plantEater3.js';
import PlantEater4 from '../critters/plantEater4.js';
import PlantEater5 from '../critters/plantEater5.js';
import PlantEater6 from '../critters/plantEater6.js';
import { randomPlaceChar } from '../utils.js';

let plan = [...emptyPlan];
new Array(30).fill('*').forEach(ch => randomPlaceChar(plan, ch));
new Array(5).fill('#').forEach(ch => randomPlaceChar(plan, ch));
randomPlaceChar(plan, 'A');
randomPlaceChar(plan, 'B');
randomPlaceChar(plan, 'C');
randomPlaceChar(plan, 'D');
randomPlaceChar(plan, 'E');
randomPlaceChar(plan, 'F');

export default {
	plan: plan,
	world: world,
	legend: {
		'#': Wall,
		'*': Plant,
		'A': PlantEater1,
		'B': PlantEater2,
		'C': PlantEater3,
		'D': PlantEater4,
		'E': PlantEater5,
		'F': PlantEater6
	}
};