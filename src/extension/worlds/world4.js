import { emptyPlan } from '../plans/test.js';
import world from '../../lifeLikeWorld.js';
import Wall from '../../wall.js';
import Plant from '../../plantCritter.js';
import PlantEater from '../critters/plantEater2.js';
import PlantEater4 from '../critters/plantEater4.js';
import PlantEater5 from '../critters/plantEater5.js';
import PlantEater6 from '../critters/plantEater6.js';
import { randomPlaceChar } from '../utils.js';

let plan = [...emptyPlan];
new Array(10).fill('*').forEach(ch => randomPlaceChar(plan, ch));
randomPlaceChar(plan, 'E');

export default {
	plan: plan,
	world: world,
	legend: {
		'#': Wall,
		'*': Plant,
		// 'E': PlantEater,
		//'E': PlantEater4,
		//'E': PlantEater5,
		'E': PlantEater6
	}
};