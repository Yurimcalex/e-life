var description = 'This critter moves along the walls.';

function WallFollower() {
	this.dir = 's';
}

WallFollower.prototype.act = function (view) {
	var start = this.dir;
	if (view.look(dirPlus(this.dir, -3)) != ' ') {
		start = this.dir = dirPlus(this.dir, -2);
	}

	while (view.look(this.dir) != ' ') {
		this.dir = dirPlus(this.dir, 1);
		if (this.dir == start) break;
	}

	return {type: 'move', direction: this.dir};
};

WallFollower.description = description;


var directionNames = 'n ne e se s sw n nw'.split(' ');

function dirPlus(dir, n) {
	var index = directionNames.indexOf(dir);
	return directionNames[(index + n + 8) % 8];
}

export default WallFollower;