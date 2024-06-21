import Grid from './grid.js';
import Vector from './vector.js';

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


function elementFromChar(legend, ch) {
	if (ch == ' ') {
		return null;
	}

	var element = new legend[ch]();
	element.originChar = ch;
	return element;
}


function charFromElement(element) {
	if (element == null) {
		return ' ';
	} else {
		return element.originChar;
	}
}

export default World;