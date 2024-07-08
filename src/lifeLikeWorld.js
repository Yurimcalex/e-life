import World from './world.js';
import View from './view.js';
import { elementFromChar } from './world.js';

var description = 'In this world critters can take 4 actions: move, grow, eat and reproduce. ' +
'Every life cycle takes 0.2 point of critters energy. ' +
'If a critter has no energy it is removed from the map. ' +
'To make a move a critter uses 1 energy point. ' +
'If a creature can grow, it gains 0.5 energy points per life cycle. ' +
'If a critter can eat and it meets the other critter that can be eaten ' +
'the first one gets all the energy of the second one and the second one is removed from the map. ' +
'If a critter can reproduce and it has twice as much energy as when it just has created it reproduces itself. ' + 
'Accordingly, this amount of energy is taken from this critter.';

function LifelikeWorld(map, legend) {
	World.call(this, map, legend);
}

LifelikeWorld.prototype = Object.create(World.prototype);


var actionTypes = Object.create(null);


LifelikeWorld.prototype.letAct = function (critter, vector) {
	var action = critter.act(new View(this, vector));
	var handled = action &&
		action.type in actionTypes &&
		actionTypes[action.type].call(this, critter, vector, action);

	if (!handled) {
		critter.energy -= 0.2;
		if (critter.energy <= 0) {
			this.grid.set(vector, null);
		}
	}
};

export default LifelikeWorld;

actionTypes.grow = function (critter) {
	critter.energy += 0.5;
	return true;
};

actionTypes.move = function (critter, vector, action) {
	var dest = this.checkDestination(action, vector);
	if (!dest || 
			critter.energy <= 1 ||
			this.grid.get(dest) != null) {

		return false;
	}

	critter.energy -= 1;
	this.grid.set(vector, null);
	this.grid.set(dest, critter);
	return true;
};

actionTypes.eat = function (critter, vector, action) {
	var dest = this.checkDestination(action, vector);
	var atDest = dest && this.grid.get(dest);
	if (!atDest || !atDest.energy) {
		return false;
	}

	critter.energy += atDest.energy;
	this.grid.set(dest, null);
	return true;
};

actionTypes.reproduce = function (critter, vector, action) {
	var baby = elementFromChar(this.legend, critter.originChar);
	var dest = this.checkDestination(action, vector);

	if (dest == null ||
			critter.energy <= 2 * baby.energy ||
			this.grid.get(dest) != null) {
		return false;
	}

	critter.energy -= 2 * baby.energy;
	this.grid.set(dest, baby);
};

LifelikeWorld.description = description;