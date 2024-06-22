import Vector from './vector.js';
import directions from './directions.js';

function Grid(width, height) {
	this.space = new Array(width * height);
	this.width = width;
	this.height = height;
}

Grid.prototype.isInside = function (vector) {
	return vector.x >= 0 && vector.x < this.width &&
				 vector.y >= 0 && vector.y < this.height;
};

Grid.prototype.get = function (vector) {
	return this.space[vector.x + this.width * vector.y];
};

Grid.prototype.set = function (vector, value) {
	this.space[vector.x + this.width * vector.y] = value;
};

Grid.prototype.forEach = function (f, context) {
	for (var y = 0; y < this.height; y += 1) {
		for (var x = 0; x < this.width; x += 1) {
			var value = this.space[x + y * this.width];
			if (value != null) {
				f.call(context, value, new Vector(x, y));
			}
		}
	}
};

Grid.prototype.letAct = function (critter, vector) {
	var action = critter.act(new View(this, vector));
	if (action && action.type == 'move') {
		var dest = this.checkDestination(action, vector);
		if (dest && this.grid.get(dest) == null) {
			this.grid.set(vector, null);
			this.grid.set(dest, critter);
		}
	}
};

Grid.prototype.checkDestination = function (action, vector) {
	if (directions.hasOwnProperty(action.direction)) {
		var dest = vector.plus(directions[action.direction]);
		if (this.grid.isInside(dest)) {
			return dest;
		}
	}
};

export default Grid;