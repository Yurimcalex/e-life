import PlantEater from '../../plantEaterCritter.js';
import { randomElement } from '../utils.js';

const description = 'It inherits all the props from Plant Eater and defines its own move action. ' + 
'If its level of energy less than 20 points it starts looking for food. ' + 
'When it gets obstacles it changes its direction according to the following rules: ' + 
'If it was moving horizontally it starts moving vertically in random direction. ' + 
'If it was moving vertically it starts moving horizontally in random direction. ' + 
'If by this time there is no direction, then the direction is randomly selected vertical or horizontal.';


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