var description = `
	It is like a plant. It can grow and reproduce.
	It has 3 - 7 energy points on start.
	<em>Grow:</em> It grows only if its energy level is less than 20 points. It gets 0.5 point per lifecycle.
	<em>Reproduce:</em>: If its energy level more than 15 points it reproduces.
`;

function Plant() {
	this.energy = 3 + Math.random() * 4;
}

Plant.prototype.act = function (context) {
	if (this.energy > 15) {
		var space = context.find(' ');
		if (space) {
			return {type: 'reproduce', direction: space};
		}
	}

	if (this.energy < 20) {
		return {type: 'grow'};
	}
};

Plant.description = description;

export default Plant;