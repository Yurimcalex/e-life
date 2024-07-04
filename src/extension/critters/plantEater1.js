import PlantEater from '../../plantEaterCritter.js';

// It eats only if it is hungry
class PlantEater1 extends PlantEater {
	eat(view) {
		let plant = view.find('*');
		if (plant && this.energy < 80) {
			return {type: 'eat', direction: plant};
		}
	}
}

export default PlantEater1;