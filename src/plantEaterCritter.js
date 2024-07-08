var description = 'A plant eater can move, eat and reproduce. ' + 
'It moves in random direction. ' + 
'It can eat plants only. ' + 
'If its energy level more than 60 points and there is a spot it gets reproduced.';

function PlantEater() {
	this.energy = 20;
}

PlantEater.prototype.act = function (context) {
	// var space = context.find(' ');
	// if (this.energy > 60 && space) {
	// 	return {type: 'reproduce', direction: space};
	// }

	// var plant = context.find('*');
	// if (plant) {
	// 	return {type: 'eat', direction: plant};
	// }

	// if (space) {
	// 	return {type: 'move', direction: space};
	// }

	var actions = ['reproduce', 'eat', 'move'];
	for (var i = 0; i < actions.length; i += 1) {
		var action = this[actions[i]](context);
		if (action) return action;
	}
};

PlantEater.prototype.reproduce = function (context) {
	var space = context.find(' ');
	if (this.energy > 60 && space) {
		return {type: 'reproduce', direction: space};
	}
};

PlantEater.prototype.eat = function (context) {
	var plant = context.find('*');
	if (plant) {
		return {type: 'eat', direction: plant};
	}
};

PlantEater.prototype.move = function (context) {
	var space = context.find(' ');
	if (space) {
		return {type: 'move', direction: space};
	}
};

PlantEater.description = description;

export default PlantEater;