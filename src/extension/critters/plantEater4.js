import PlantEater from '../../plantEaterCritter.js';
import PlantEater1 from './plantEater1.js';
import extend from '../extend.js';


const description = `
	It inherits all the props from Plant Eater and Plant Eater 1 and defines its own move action.
	It eats only if it is hungry - the energy level is less than 80 points.
	If its level of energy less than 20 points it starts looking for food.
	It moves always in one direction if it can. If it gets obstacles than it takes randomly another direction.
`;

class PlantEater4 extends PlantEater {
	constructor() {
		super();
		extend(this, PlantEater1);
		this.dir = 'n';
	}

	move(view) {
		if (this.energy > 20) return super.move(view); 

		const space = view.look(this.dir);
		let newDir;

		if (space === ' ') {
			return {type: 'move', direction: this.dir};
		
		} else {
			newDir = view.find(' ');
		}

		if (newDir) {
			this.dir = newDir;
			return {type: 'move', direction: this.dir};
		}
	}
}

PlantEater4.description = description;

export default PlantEater4;