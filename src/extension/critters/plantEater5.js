import PlantEater from '../../plantEaterCritter.js';
import PlantEater4 from './plantEater4.js';
import extend from '../extend.js';
import { randomInteger } from '../utils.js';


const description = `
	It inherits all the props from Plant Eater and Plant Eater 4 and defines its own reproduce action.
	It eats only if it is hungry - the energy level is less than 80 points.
	If its level of energy less than 20 points it starts looking for food.
	It moves in random direstion and if it's hungry it moves always in one direction if it can.
	If it gets obstacles than it takes randomly another direction.
	It gets reproduced if it has more than 60 energy points and there is a free spot.
	It can have from 1 to 3 children.
`;

class PlantEater5 extends PlantEater {
	constructor() {
		super();
		extend(this, PlantEater4);
		this.childCount = randomInteger(1, 3);
	}

	reproduce(view) {
		let action;
		
		if (this.childCount) {
			action = super.reproduce(view);
		}

		if (action) {
			this.childCount -= 1;
			return action;
		}
	}
}

PlantEater5.description = description;

export default PlantEater5;