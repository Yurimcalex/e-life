import FirstPlan from '../../plan.js';
import valleyPlan from '../../valleyPlan.js';
import { emptyPlan } from '../plans/test.js';

import World from '../../world.js';
import LifelikeWorld from '../../lifeLikeWorld.js';

import Wall from '../../wall.js';
import BouncingCritter from '../../bouncingCritter.js';
import WallFollower from '../../wallFollowerCritter.js';
import Plant from '../../plantCritter.js';
import PlantEater from '../../plantEaterCritter.js';
import SavyEater from '../critters/plantEater_1.js';
import SavyMovingEater from '../critters/plantEater_2.js';

import { replaceChar, randomPlaceChar } from '../utils.js';


let worlds = [
	{
		world: World,
		plan: FirstPlan,
		legend: {
			'#': Wall,
			'o': BouncingCritter,
			'w': WallFollower
		}
	},
	{
		world: LifelikeWorld,
		plan: valleyPlan,
		legend: {
			'#': Wall,
			'0': PlantEater,
			'*': Plant
		}
	},
	{
		world: LifelikeWorld,
		plan: replaceChar(valleyPlan, '0', 'D'),
		legend: {
			'#': Wall,
			'D': SavyEater,
			'*': Plant
		}
	},
	{
		world: LifelikeWorld,
		plan: randomPlaceChar(emptyPlan, 'E'),
		legend: {
			'#': Wall,
			'E': SavyMovingEater
		}
	},
	{
		world: LifelikeWorld,
		plan: replaceChar(valleyPlan, '0', 'E'),
		legend: {
			'#': Wall,
			'E': SavyMovingEater,
			'*': Plant
		}
	}
];

export default worlds;