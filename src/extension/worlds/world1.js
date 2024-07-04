import plan from '../../plan.js';
import World from '../../world.js';
import Wall from '../../wall.js';
import BouncingCritter from '../../bouncingCritter.js';
import WallFollower from '../../wallFollowerCritter.js';

export default {
	world: World,
	plan: [...plan],
	legend: {
		'#': Wall,
		'o': BouncingCritter,
		'w': WallFollower
	}
};