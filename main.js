import './style.css'
import worlds from './src/extension/worlds/worlds.js';
import Controller from './src/extension/controller.js';
import View from './src/extension/view.js';
import { getItem } from './src/extension/storage.js';


class Main {
	constructor(worlds, show) {
		this.display = document.getElementById('world-str');
		this.worlds = worlds;
		this.show = show;
		this.world;
		this.renderTime = 500;

		this.update = this.update.bind(this);
		this.run = this.run.bind(this);
		this.getWorldDescription = this.getWorldDescription.bind(this);
	}

	init(worldN) {
		this.createWorld(this.worlds[worldN]);
		this.updateDisplay();
	}

	updateDisplay() {
		this.show(this.world.toString());
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

	update(worldN) {
		this.createWorld(this.worlds[worldN]);
		this.updateDisplay();
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


const view = new View(worlds.length);
const main = new Main(worlds, view.showData);
view.getWorldDescription = main.getWorldDescription;

view.init();
main.init(getItem('worldIndex') || 0);

const controller = new Controller(main.update, main.run);
controller.init();