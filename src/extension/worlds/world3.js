import plan from '../../valleyPlan.js';
import world from '../../lifeLikeWorld.js';
import Wall from '../../wall.js';
import PlantEater from '../critters/plantEater1.js';
import Plant from '../../plantCritter.js';
import { replaceChar } from '../utils.js';

export default {
	world: world,
	plan: replaceChar([...plan], '0', 'A'),
	legend: {
		'#': Wall,
		'A': PlantEater,
		'*': Plant
	}
};