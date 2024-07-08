var description = `
	It is a plant eater.
	It can move, eat and reproduce.
	It has 20 energy points on start.
	<em>Eat:</em> It eats plants. When there is a plant somewhere around it then it eats the plant.
	<em>Move:</em> It moves in random direction.
	<em>Reproduce:</em> It gets reproduced if it has more than 60 energy points and there is a free spot.
`;

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