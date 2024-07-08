import PlantEater from '../../plantEaterCritter.js';
import PlantEater1 from './plantEater1.js';
import PlantEater2 from './plantEater2.js';
import extend from '../extend.js';


const description = `
	It is a plant eater.
	It can move, eat and reproduce.
	It has 20 energy points on start.
	<em>Eat:</em> It eats plants. It eats only if it is hungry - the energy level is less than 80 points.
	<em>Move:</em> If its energy level more that 20 it moves in random direction.
	Otherwise it tries to move west.
	When it gets obstacles it change its direction according to the following rules:
	If it was moving horizontally it starts moving vertically in random direction.
	If it was moving vertically it starts moving horizontally in random direction.
	If by this time there is no direction, then the direction is randomly selected vertical or horizontal.
	<em>Reproduce:</em> It gets reproduced if it has more than 60 energy points and there is a free spot.
`;

class PlantEater3 extends PlantEater {
	constructor() {
		super();
		extend(this, PlantEater1, PlantEater2);
	}
}

PlantEater3.description = description;

export default PlantEater3;