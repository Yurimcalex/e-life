import Grid from './grid.js';
import Vector from './vector.js';
import View from './view.js';
import directions from './directions.js';

var description = 'A simple world without control over creatures.';

function World(map, legend) {
	var grid = new Grid(map[0].length, map.length);
	this.grid = grid;
	this.legend = legend;

	map.forEach(function (line, y) {
		for (var x = 0; x < line.length; x += 1) {
			grid.set(new Vector(x, y), elementFromChar(legend, line[x]));
		}
	});
}

World.prototype.toString = function () {
	var output = '';
	for (var y = 0; y < this.grid.height; y += 1) {
		for (var x = 0; x < this.grid.width; x += 1) {
			var element = this.grid.get(new Vector(x, y));
			output += charFromElement(element);
		}
		output += '\n';
	}
	return output;
};

World.prototype.turn = function () {
	var acted = [];
	this.grid.forEach(function (critter, vector) {
		if (critter.act && acted.indexOf(critter) == -1) {
			acted.push(critter);
			this.letAct(critter, vector);
		}
	}, this);
};

World.prototype.letAct = function (critter, vector) {
	var action = critter.act(new View(this, vector));
	if (action && action.type == 'move') {
		var dest = this.checkDestination(action, vector);
		if (dest && this.grid.get(dest) == null) {
			this.grid.set(vector, null);
			this.grid.set(dest, critter);
		}
	}
};

World.prototype.checkDestination = function (action, vector) {
	if (directions.hasOwnProperty(action.direction)) {
		var dest = vector.plus(directions[action.direction]);
		if (this.grid.isInside(dest)) {
			return dest;
		}
	}
};

World.description = description;


export function elementFromChar(legend, ch) {
	if (ch == ' ') {
		return null;
	}

	var element = new legend[ch]();
	element.originChar = ch;
	return element;
}


export function charFromElement(element) {
	if (element == null) {
		return ' ';
	} else {
		return element.originChar;
	}
}

export default World;