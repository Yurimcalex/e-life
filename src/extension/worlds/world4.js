import { emptyPlan } from '../plans/test.js';
import world from '../../lifeLikeWorld.js';
import Wall from '../../wall.js';
import PlantEater from '../critters/plantEater2.js';
import { randomPlaceChar } from '../utils.js';

export default {
	plan: randomPlaceChar([...emptyPlan], 'E'),
	world: world,
	legend: {
		'#': Wall,
		'E': PlantEater
	}
};