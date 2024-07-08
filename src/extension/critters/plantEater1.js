import PlantEater from '../../plantEaterCritter.js';


const description = `
	It is a plant eater.
	It can move, eat and reproduce.
	It has 20 energy points on start.
	<em>Eat:</em> It eats plants. It eats only if it is hungry - the energy level is less than 80 points.
	<em>Move:</em> Tt moves in random direction.
	<em>Reproduce:</em> It gets reproduced if it has more than 60 energy points and there is a free spot.
`;

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