import PlantEater from '../../plantEaterCritter.js';
import { randomElement } from '../utils.js';


const description = `
	It is a plant eater.
	It can move, eat and reproduce.
	It has 20 energy points on start.
	<em>Eat:</em> It eats plants. When there is a plant somewhere around it then it eats the plant.
	<em>Move:</em> If its energy level more that 20 it moves in random direction.
	Otherwise it tries to move west.
	When it gets obstacles it change its direction according to the following rules:
	If it was moving horizontally it starts moving vertically in random direction.
	If it was moving vertically it starts moving horizontally in random direction.
	If by this time there is no direction, then the direction is randomly selected vertical or horizontal.
	<em>Reproduce:</em> It gets reproduced if it has more than 60 energy points and there is a free spot.
`;

class PlantEater2 extends PlantEater {
	dir = 'w';

	move(view) {
		if (this.energy < 20) {
			let horizontal = ['w', 'e'];
			let vertical = ['n', 's'];
			let nextDir;

			if (view.look(this.dir) === ' ') {
				nextDir = this.dir;
			}

			if (!nextDir && horizontal.includes(this.dir)) {
				nextDir = randomElement(vertical);

				if (view.look(nextDir) !== ' ') {
					nextDir = null;
				}
			}

			if (!nextDir && vertical.includes(this.dir)) {
				nextDir = randomElement(horizontal);

				if (view.look(nextDir) !== ' ') {
					nextDir = null;
				}
			}

			
			if (!nextDir) nextDir = super.move(view).direction;

			this.dir = nextDir;
			
			return {type: 'move', direction: nextDir};
		
		} else {
			return super.move(view);
		}
	}
}

PlantEater2.description = description;

export default PlantEater2;