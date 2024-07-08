import PlantEater from '../../plantEaterCritter.js';

const description = 'It inherits all the props from Plant Eater and defines its own eat action. ' + 
'It eats only if it is hungry - the energy level is less than 80 points.';

class PlantEater1 extends PlantEater {
	eat(view) {
		let plant = view.find('*');
		if (plant && this.energy < 80) {
			return {type: 'eat', direction: plant};
		}
	}
}

PlantEater1.description = description;

export default PlantEater1;