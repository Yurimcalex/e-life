import PlantEater from '../../plantEaterCritter.js';
import PlantEater5 from './plantEater5.js';
import extend from '../extend.js';
import { randomElement } from '../utils.js';


const description = `
	It is a plant eater.
	It can move, eat and reproduce.
	It has 20 energy points on start.
	<em>Eat:</em> It eats plants. It eats only if it is hungry - the energy level is less than 80 points.
	<em>Move:</em> If its energy level more that 20 it moves in random direction.
	Otherwise it moves directly in one direction until it gets obstacled.
	Then it tries to select another direction.
	<em>Reproduce:</em> It gets reproduced if it has more than 60 energy points and there is a free spot.
	It can have from 1 to 3 children.
`;

class PlantEater6 extends PlantEater {
	constructor() {
		super();
		extend(this, PlantEater5);
		this.dir = randomElement('n ne e se s sw n nw'.split(' '));
		this.prevDir;
	}

	move(view) {
		if (this.energy > 20) return super.move(view);

		const space = view.look(this.dir);
		let dirs;
		let newDir;

		if (space === ' ') {
			this.prevDir = this.dir;
			return {type: 'move', direction: this.dir};
		
		} else {
			dirs = view.findAll(' ').filter(dir => dir !== this.prevDir);
			newDir = randomElement(dirs);
		}

		if (newDir) {
			this.dir = newDir;
			return {type: 'move', direction: this.dir};
		}
	}
}

PlantEater6.description = description;

export default PlantEater6;