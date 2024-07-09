import plan from '../../valleyPlan.js';
import world from '../../lifeLikeWorld.js';
import Wall from '../../wall.js';
import PlantEater from '../critters/plantEater4.js';
import Plant from '../../plantCritter.js';
import { replaceChar } from '../utils.js';

export default {
	plan: replaceChar([...plan], '0', 'D'),
	world,
	legend: {
		'#': Wall,
		'D': PlantEater,
		'*': Plant
	}
};