export default class Main {
	constructor(worlds, show) {
		this.display = document.getElementById('world-str');
		this.worlds = worlds;
		this.show = show;
		this.world;
		this.renderTime = 500;

		this.selectWorld = this.selectWorld.bind(this);
		this.run = this.run.bind(this);
		this.getWorldDescription = this.getWorldDescription.bind(this);
	}

	init(worldN) {
		this.createWorld(this.worlds[worldN]);
		this.updateDisplay();
	}

	updateDisplay(isNewWorld) {
		this.show(this.world.toString(), isNewWorld);
	}

	createWorld(options) {
		const {world, plan, legend} = options;
		this.world = new world(plan, legend);
	}

	getWorldDescription(worldN) {
		const { world, legend } = this.worlds[worldN];
		return {
			n: worldN,
			world: world.description,
			legend: Object.entries(legend).map(([ch, constr]) => {
				return [ch, constr.description];
			})
		};
	}

	selectWorld(worldN) {
		this.createWorld(this.worlds[worldN]);
		this.updateDisplay(true);
	}

	run() {
		this.world.turn();
		this.updateDisplay();

		return setInterval(() => {
			this.world.turn();
			this.updateDisplay();
		}, this.renderTime);
	}
}