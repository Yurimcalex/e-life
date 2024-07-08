import PlantEater from '../../plantEaterCritter.js';
import PlantEater1 from './plantEater1.js';
import PlantEater2 from './plantEater2.js';
import extend from '../extend.js';

const description = `
	It inherits all the props from Plant Eater and its 1 and 2 versions:
	It eats only if it is hungry - the energy level is less than 80 points.
	If its level of energy less than 20 points it starts looking for food.
	When it gets obstacles it change its direction according to the following rules:
	If it was moving horizontally it starts moving vertically in random direction.
	If it was moving vertically it starts moving horizontally in random direction.
	If by this time there is no direction, then the direction is randomly selected vertical or horizontal.
`;

class PlantEater3 extends PlantEater {
	constructor() {
		super();
		extend(this, PlantEater1, PlantEater2);
	}
}

PlantEater3.description = description;

export default PlantEater3;