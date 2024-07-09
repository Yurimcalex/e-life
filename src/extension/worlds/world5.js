import plan from '../../valleyPlan.js';
import world from '../../lifeLikeWorld.js';
import Wall from '../../wall.js';
import PlantEater from '../critters/plantEater2.js';
import Plant from '../../plantCritter.js';
import { replaceChar } from '../utils.js';

export default {
	plan: replaceChar([...plan], '0', 'B'),
	world,
	legend: {
		'#': Wall,
		'B': PlantEater,
		'*': Plant
	}
};