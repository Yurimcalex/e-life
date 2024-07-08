var directionNames = 'n ne e se s sw n nw'.split(' ');

var description = 'It moves in random direction trying to find a free spot. ' +
'If there is no such a spot it moves south.';

function BouncingCritter() {
	this.direction = randomElement(directionNames);
}

BouncingCritter.prototype.act = function (view) {
	if (view.look(this.direction) != '') {
		this.direction = view.find(' ') || 's';
	}

	return {type: 'move', direction: this.direction};
};

BouncingCritter.description = description;


export function randomElement(array) {
	return array[Math.floor(Math.random() * array.length)];
}

export default BouncingCritter;