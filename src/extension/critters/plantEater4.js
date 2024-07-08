import PlantEater from '../../plantEaterCritter.js';
import PlantEater1 from './plantEater1.js';
import extend from '../extend.js';


const description = `
	It is a plant eater.
	It can move, eat and reproduce.
	It has 20 energy points on start.
	<em>Eat:</em> It eats plants. It eats only if it is hungry - the energy level is less than 80 points.
	<em>Move:</em> If its energy level more that 20 it moves in random direction.
	Otherwise it moves directly in one direction if it can. Initial direction is north.
	If it gets obstacles than it takes randomly another direction.
	<em>Reproduce:</em> It gets reproduced if it has more than 60 energy points and there is a free spot.
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