import PlantEater from '../../plantEaterCritter.js';
import PlantEater4 from './plantEater4.js';
import extend from '../extend.js';
import { randomInteger } from '../utils.js';


const description = `
	It is a plant eater.
	It can move, eat and reproduce.
	It has 20 energy points on start.
	<em>Eat:</em> It eats plants. It eats only if it is hungry - the energy level is less than 80 points.
	<em>Move:</em> If its energy level more that 20 it moves in random direction.
	Otherwise it moves directly in one direction if it can. Initial direction is north.
	If it gets obstacles than it takes randomly another direction.
	<em>Reproduce:</em> It gets reproduced if it has more than 60 energy points and there is a free spot.
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