import plan from '../../valleyPlan.js';
import LifelikeWorld from '../../lifeLikeWorld.js';
import Wall from '../../wall.js';
import PlantEater from '../../plantEaterCritter.js';
import Plant from '../../plantCritter.js';

export default {
	world: LifelikeWorld,
	plan: [...plan],
	legend: {
		'#': Wall,
		'0': PlantEater,
		'*': Plant
	}
};