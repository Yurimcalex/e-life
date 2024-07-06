import PlantEater from '../../plantEaterCritter.js';
import PlantEater1 from './plantEater1.js';
import PlantEater2 from './plantEater2.js';
import extend from '../extend.js';

class PlantEater3 extends PlantEater {
	constructor() {
		super();
		extend(this, PlantEater1, PlantEater2);
	}
}

export default PlantEater3;